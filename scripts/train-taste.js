// 취향 이해 모델 학습: ml/taste-train.txt(사람이 말하는 문장) + 장소 소개 글 → data/taste-model.js
// 실행: node scripts/train-taste.js
//
// 학습 문장 두 종류
// - 질문 문장 (ml/taste-train.txt): 취향과 조건(조용·실내·핫) 모두 배움. 실제 말투라 3배로 셈
// - 장소 글 (이름·소개·메뉴, data/places.js 등): 취향만 배움. 말투는 다르지만 단어(물회·폭포·사찰…)를 넓혀 줌
//   조건은 장소 글로 배우지 않는다 (장소 글에는 "조용히 쉬고 싶다" 같은 말이 없음)
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { TASTE_LABELS, TASTE_MOODS, tasteFeatures } = require("../js/taste-model.js");

const ROOT = path.join(__dirname, "..");
const SHORT = { "바다": "바다", "산책": "자연·산책", "문화": "문화·역사", "체험": "체험", "시장": "시장", "맛집": "먹거리", "카페": "카페" };
const MOOD = { "조용": "quiet", "실내": "indoor", "핫": "viral" };
// 설정값. scripts/tune-taste.js가 학습 문장만으로 교차 검증해서 고른 값 (시험 문장은 보지 않음)
const DEFAULTS = {
  unigram: true, // 글자 하나짜리 조각도 쓸지
  placeWeight: 1, // 장소 글 한 개의 무게 (질문 문장은 3)
  alpha: 0.5, // 한 번도 못 본 조각 때문에 확률이 0이 되지 않게 더하는 값 (라플라스 평활)
  threshold: 0.5, // 이 확률을 넘으면 그 취향이라고 봄
  mode: "union", // 대화창에서 단어 규칙과 합치는 방식 (js/taste-model.js mergeTaste)
  minDocs: 1, // 이 개수보다 적은 문장·글에만 나온 조각은 모델에 넣지 않음 (드문 조각이 확률을 흔들지 않게)
};
const QUERY_WEIGHT = 3;

// "문장 | 바다,산책 | 조용" → { text, labels }
function readExamples(file) {
  return fs.readFileSync(path.join(ROOT, file), "utf8").split(/\r?\n/)
    .map((l) => l.trim()).filter((l) => l && !l.startsWith("#"))
    .map((line) => {
      const [text, tags = "", moods = ""] = line.split("|").map((s) => s.trim());
      const labels = [
        ...tags.split(",").map((s) => s.trim()).filter(Boolean).map((t) => { if (!SHORT[t]) throw new Error(`모르는 취향 "${t}": ${line}`); return SHORT[t]; }),
        ...moods.split(",").map((s) => s.trim()).filter(Boolean).map((m) => { if (!MOOD[m]) throw new Error(`모르는 조건 "${m}": ${line}`); return MOOD[m]; }),
      ];
      return { text, labels };
    });
}

// 웹앱 파일을 브라우저처럼 차례로 불러온 환경. extra: 장소 목록 뒤에 더 불러올 파일 (단어 규칙이면 js/chat.js 등)
const APP_FILES = ["data/tags.js", "data/places.js", "data/auto-places.js", "data/crowd-data.js", "data/popular.js", "data/tour-data.js", "data/descriptions.js", "data/sns-data.js", "data/weather-data.js", "js/places-all.js"];
const RULE_FILES = ["js/crowd.js", "js/recommend.js", "js/chat.js"];
function appContext(extra = []) {
  const ctx = vm.createContext({});
  for (const f of [...APP_FILES, ...extra]) vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f });
  return ctx;
}

// 장소 글: 웹앱이 쓰는 장소 데이터 그대로 (이름 · 소개 · 대표 메뉴 → 그 장소의 취향)
function placeExamples() {
  const places = vm.runInContext("ALL_PLACES", appContext());
  return places.map((p) => ({ text: [p.name.replace(/\[.*?\]/g, " "), p.description, p.menu].filter(Boolean).join(" "), labels: [...p.tags] }));
}

function train(queries, places, opts = {}) {
  const o = { ...DEFAULTS, ...opts };
  const options = { unigram: o.unigram };
  const docs = [
    ...queries.map((d) => ({ ...d, query: true, weight: QUERY_WEIGHT })),
    ...(o.placeWeight > 0 ? places.map((d) => ({ ...d, query: false, weight: o.placeWeight })) : []),
  ];
  // 드문 조각 빼기: 몇 개의 문장·글에 나왔는지 세서 minDocs보다 적으면 버림
  const featsOf = docs.map((doc) => [...tasteFeatures(doc.text, options)]);
  const docCount = {};
  for (const feats of featsOf) for (const f of feats) docCount[f] = (docCount[f] || 0) + 1;
  const features = {}; // 조각 → [전체 문서 수, 질문 문서 수, 라벨별 문서 수...] (가중치 반영)
  const stats = {};
  for (const label of TASTE_LABELS) stats[label] = { pos: 0, neg: 0, posTokens: 0, negTokens: 0, queryOnly: TASTE_MOODS.includes(label) };
  docs.forEach((doc, i) => {
    const feats = featsOf[i].filter((f) => docCount[f] >= o.minDocs);
    for (const f of feats) {
      const row = (features[f] ||= new Array(TASTE_LABELS.length + 2).fill(0));
      row[0] += doc.weight;
      if (doc.query) row[1] += doc.weight;
      TASTE_LABELS.forEach((label, k) => { if (doc.labels.includes(label)) row[k + 2] += doc.weight; });
    }
    for (const label of TASTE_LABELS) {
      const S = stats[label];
      if (S.queryOnly && !doc.query) continue;
      if (doc.labels.includes(label)) { S.pos += doc.weight; S.posTokens += feats.length * doc.weight; }
      else { S.neg += doc.weight; S.negTokens += feats.length * doc.weight; }
    }
  });
  const V = Object.keys(features).length;
  const out = {};
  for (const label of TASTE_LABELS) {
    const S = stats[label];
    out[label] = {
      queryOnly: S.queryOnly,
      logPrior: Math.log(S.pos / S.neg),
      posDenom: S.posTokens + o.alpha * V,
      negDenom: S.negTokens + o.alpha * V,
    };
  }
  return { labels: TASTE_LABELS, alpha: o.alpha, threshold: o.threshold, options, settings: o, stats: out, features };
}

if (require.main === module) {
  const queries = readExamples("ml/taste-train.txt");
  const places = placeExamples();
  const tuned = fs.existsSync(path.join(ROOT, "ml/tuned.json")) ? JSON.parse(fs.readFileSync(path.join(ROOT, "ml/tuned.json"), "utf8")).best : {};
  const model = train(queries, places, tuned);
  model.trainedOn = { queries: queries.length, places: places.length, features: Object.keys(model.features).length };
  const body = `// 자동 생성 파일. 직접 고치지 말고 ml/taste-train.txt를 고친 뒤 \`node scripts/train-taste.js\`로 다시 만들 것.\n// 학습: 질문 문장 ${queries.length}개 + 장소 글 ${places.length}개 · 조각 ${model.trainedOn.features}개\nconst TASTE_MODEL = ${JSON.stringify(model)};\n`;
  fs.writeFileSync(path.join(ROOT, "data/taste-model.js"), body);
  console.log(`data/taste-model.js · 질문 ${queries.length} · 장소 ${places.length} · 조각 ${model.trainedOn.features} · ${Math.round(body.length / 1024)}KB`);
}

module.exports = { readExamples, placeExamples, appContext, train, SHORT, MOOD, DEFAULTS, RULE_FILES };
