// 설정 고르기: 학습 문장(ml/taste-train.txt)만으로 5겹 교차 검증 → ml/tuned.json
// 실행: node scripts/tune-taste.js  (그다음 node scripts/train-taste.js로 최종 모델을 만든다)
//
// 왜 시험 문장으로 고르지 않나: 시험 문장 점수를 보면서 설정을 바꾸면 시험에 맞춰진 모델이 되어
// 점수가 실제보다 좋게 나온다 (커닝). 그래서 학습 문장을 다섯 묶음으로 나눠
// 네 묶음으로 배우고 나머지 한 묶음으로 푸는 것을 다섯 번 돌려 평균을 낸다
//
// 고르는 것: 모델 설정(글자 하나 조각 · 장소 글 무게 · 평활 값 · 드문 조각 기준 · 기준 확률) + 단어 규칙과 합치는 방식
// 학습 문장에는 취향이 없는 말("여행 계획 세우는 중")도 들어 있어서, 아무 말에나 취향을 붙이는 설정은 점수가 깎인다
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { readExamples, placeExamples, appContext, train, RULE_FILES } = require("./train-taste.js");
const { predictTaste, mergeTaste, TASTE_LABELS, TASTE_MOODS } = require("../js/taste-model.js");

const ROOT = path.join(__dirname, "..");
const K = 5;
const GRID = { unigram: [true, false], placeWeight: [0, 0.3, 1], alpha: [0.1, 0.5, 1], minDocs: [1, 2, 3] };
const THRESHOLDS = [0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
const MODES = ["model", "union", "fallback"];

const queries = readExamples("ml/taste-train.txt");
const places = placeExamples();
const understandRules = vm.runInContext("understandRules", appContext(RULE_FILES));
const rulesOf = new Map(queries.map((q) => [q.text, understandRules(q.text, [])]));
// 묶음 나누기: 순서대로 0,1,2,3,4,0,1,… (파일이 취향별로 모여 있어서 골고루 섞임)
const folds = Array.from({ length: K }, (_, k) => queries.filter((_, i) => i % K === k));

const toLabels = (r) => [...r.tags, ...TASTE_MOODS.filter((m) => r[m])];
function microF1(examples, guess) {
  let tp = 0, fp = 0, fn = 0;
  for (const { text, labels } of examples) {
    const got = toLabels(guess(text));
    for (const l of TASTE_LABELS) {
      const want = labels.includes(l), has = got.includes(l);
      if (want && has) tp++; else if (has) fp++; else if (want) fn++;
    }
  }
  const p = tp + fp ? tp / (tp + fp) : 0, r = tp + fn ? tp / (tp + fn) : 0;
  return p + r ? (2 * p * r) / (p + r) : 0;
}

let combos = [{}];
for (const [key, values] of Object.entries(GRID)) combos = combos.flatMap((c) => values.map((v) => ({ ...c, [key]: v })));

// 기준 확률과 합치는 방식은 학습 결과를 바꾸지 않으니, 학습은 설정마다 묶음마다 한 번만
const scores = new Map(); // 설정 이름 → 묶음별 F1
for (const opts of combos) {
  folds.forEach((held, k) => {
    const model = train(folds.filter((_, j) => j !== k).flat(), places, opts);
    for (const threshold of THRESHOLDS) {
      const m = { ...model, threshold };
      for (const mode of MODES) {
        const key = JSON.stringify({ ...opts, threshold, mode });
        if (!scores.has(key)) scores.set(key, []);
        scores.get(key).push(microF1(held, (t) => mergeTaste(rulesOf.get(t), predictTaste(t, m), mode)));
      }
    }
  });
}
const rows = [...scores].map(([key, s]) => ({ opts: JSON.parse(key), f1: s.reduce((a, b) => a + b, 0) / K })).sort((a, b) => b.f1 - a.f1);
const rulesOnly = folds.reduce((sum, held) => sum + microF1(held, (t) => rulesOf.get(t)), 0) / K;

const best = rows[0];
const round = (x) => Math.round(x * 1000) / 1000;
const bestOfMode = Object.fromEntries(MODES.map((mode) => { const r = rows.find((x) => x.opts.mode === mode); return [mode, { ...r.opts, f1: round(r.f1) }]; }));
fs.writeFileSync(path.join(ROOT, "ml/tuned.json"), JSON.stringify({
  method: `${K}겹 교차 검증 · 학습 문장 ${queries.length}개 · 설정 ${rows.length}가지`,
  best: best.opts, cvF1: round(best.f1), rulesOnlyCvF1: round(rulesOnly), bestOfMode,
}, null, 2) + "\n");
const pct = (x) => `${Math.round(x * 100)}%`;
console.log(`설정 ${rows.length}가지 비교 (학습 문장만 사용)`);
console.log(`  단어 규칙만        F1 ${pct(rulesOnly)}`);
for (const mode of MODES) { const r = bestOfMode[mode]; console.log(`  ${mode.padEnd(9)} 최고  F1 ${pct(r.f1)}  ${JSON.stringify({ ...r, f1: undefined })}`); }
console.log(`고른 설정: ${JSON.stringify(best.opts)}`);
