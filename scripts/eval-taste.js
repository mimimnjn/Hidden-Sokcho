// 취향 이해 점수 비교: 단어 규칙(기준선, js/chat.js understand) vs 학습 모델(js/taste-model.js) vs 둘을 합친 것
// 시험 문장: ml/taste-test.txt (학습에 쓰지 않은 문장)
// 실행: node scripts/eval-taste.js → 화면 출력 + ml/results.md
//
// 점수 읽는 법
// - 정밀도: 맞다고 한 것 중 진짜 맞은 비율 (엉뚱한 취향을 붙이지 않는가)
// - 재현율: 진짜 정답 중 찾아낸 비율 (정답을 놓치지 않는가)
// - F1: 정밀도와 재현율의 조화평균. 둘 중 하나만 높으면 낮게 나옴
// - 완전 일치: 한 문장의 취향·조건을 전부 정확히 맞힌 문장 비율
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { readExamples, appContext, RULE_FILES } = require("./train-taste.js");

const ROOT = path.join(__dirname, "..");
const ctx = appContext(["data/taste-model.js", "js/taste-model.js", ...RULE_FILES]);
const { understand, understandRules, predictTaste, TASTE_LABELS, TASTE_MODEL } = vm.runInContext("({ understand, understandRules, predictTaste, TASTE_LABELS, TASTE_MODEL })", ctx);

const toLabels = (r) => [...r.tags, ...["quiet", "indoor", "viral"].filter((m) => r[m])];
// 세 번째는 대화창이 실제로 쓰는 understand() 그대로 (합치는 방식은 교차 검증으로 고른 것)
const methods = {
  "단어 규칙 (기준선)": (t) => toLabels(understandRules(t, [])),
  "학습 모델": (t) => toLabels(predictTaste(t)),
  [`규칙 + 모델 (${TASTE_MODEL.settings.mode})`]: (t) => toLabels(understand(t, [])),
};

function score(examples, fn) {
  const per = Object.fromEntries(TASTE_LABELS.map((l) => [l, { tp: 0, fp: 0, fn: 0 }]));
  let exact = 0;
  const misses = [];
  for (const { text, labels } of examples) {
    const got = fn(text);
    for (const l of TASTE_LABELS) {
      const want = labels.includes(l), has = got.includes(l);
      if (want && has) per[l].tp++; else if (has) per[l].fp++; else if (want) per[l].fn++;
    }
    const ok = labels.length === got.length && labels.every((l) => got.includes(l));
    if (ok) exact++; else misses.push({ text, want: labels, got });
  }
  const sum = Object.values(per).reduce((a, b) => ({ tp: a.tp + b.tp, fp: a.fp + b.fp, fn: a.fn + b.fn }), { tp: 0, fp: 0, fn: 0 });
  const prf = ({ tp, fp, fn }) => {
    const p = tp + fp ? tp / (tp + fp) : 0, r = tp + fn ? tp / (tp + fn) : 0;
    return { p, r, f1: p + r ? (2 * p * r) / (p + r) : 0 };
  };
  return { micro: prf(sum), per: Object.fromEntries(TASTE_LABELS.map((l) => [l, prf(per[l])])), exact: exact / examples.length, misses };
}

const test = readExamples("ml/taste-test.txt");
const results = Object.fromEntries(Object.entries(methods).map(([name, fn]) => [name, score(test, fn)]));

if (require.main === module) {
  const pct = (x) => `${Math.round(x * 100)}%`;
  const NAME = { "자연·산책": "산책", "문화·역사": "문화", "먹거리": "맛집", quiet: "조용", indoor: "실내", viral: "핫" };
  const show = (l) => NAME[l] || l;
  const tuned = JSON.parse(fs.readFileSync(path.join(ROOT, "ml/tuned.json"), "utf8"));
  const [rulesName, modelName, mergedName] = Object.keys(results);
  const s = TASTE_MODEL.settings;
  const describe = (o) => `글자 하나 조각 ${o.unigram ? "씀" : "안 씀"} · 장소 글 무게 ${o.placeWeight} · 평활 값 ${o.alpha} · 드문 조각 기준 ${o.minDocs}개 · 기준 확률 ${o.threshold}`;
  let md = `# 취향 이해 점수 (${new Date().toISOString().slice(0, 10)})\n\n`;
  md += `시험 문장 ${test.length}개 (ml/taste-test.txt). 학습에도 설정 고르기에도 쓰지 않았다.\n\n`;
  md += "## 두 가지 점수\n\n| | 단어 규칙만 | 규칙 + 모델 (대화창이 쓰는 것) |\n|---|---|---|\n";
  md += `| 교차 검증 F1 (${tuned.method}) | ${pct(tuned.rulesOnlyCvF1)} | ${pct(tuned.cvF1)} |\n`;
  md += `| 시험 F1 (시험 문장 ${test.length}개) | ${pct(results[rulesName].micro.f1)} | ${pct(results[mergedName].micro.f1)} |\n\n`;
  md += "교차 검증은 학습 문장을 다섯 묶음으로 나눠 네 묶음으로 배우고 나머지 한 묶음으로 푼 평균이다. 설정은 이 점수로만 골랐다.\n\n";
  md += "## 시험 문장 점수\n\n| 방법 | 정밀도 | 재현율 | F1 | 완전 일치 |\n|---|---|---|---|---|\n";
  for (const [name, r] of Object.entries(results)) md += `| ${name} | ${pct(r.micro.p)} | ${pct(r.micro.r)} | ${pct(r.micro.f1)} | ${pct(r.exact)} |\n`;
  md += `\n- 모델 설정: ${describe(s)}. 규칙과 합치는 방식(${s.mode})까지 같이 교차 검증해서 고른 값이다\n`;
  const solo = tuned.bestOfMode && tuned.bestOfMode.model;
  md += `- "${modelName}" 행은 이 설정 그대로 모델 혼자 낸 점수다. 모델 혼자 쓸 때를 따로 교차 검증하면 다른 설정이 뽑힌다${solo ? ` (${describe(solo)} · 교차 검증 F1 ${pct(solo.f1)})` : ""}\n`;
  md += "\n## 라벨별 F1\n\n| 라벨 | " + Object.keys(results).join(" | ") + " |\n|---|" + Object.keys(results).map(() => "---").join("|") + "|\n";
  for (const l of TASTE_LABELS) md += `| ${show(l)} | ${Object.values(results).map((r) => pct(r.per[l].f1)).join(" | ")} |\n`;
  for (const [name, r] of Object.entries(results)) {
    md += `\n## ${name}: 틀린 문장 ${r.misses.length}개\n\n`;
    for (const m of r.misses) md += `- ${m.text} — 정답 ${m.want.map(show).join("·") || "없음"} / 답 ${m.got.map(show).join("·") || "없음"}\n`;
  }
  fs.writeFileSync(path.join(ROOT, "ml/results.md"), md);
  for (const [name, r] of Object.entries(results)) console.log(`${name.padEnd(12)} 정밀도 ${pct(r.micro.p)} · 재현율 ${pct(r.micro.r)} · F1 ${pct(r.micro.f1)} · 완전 일치 ${pct(r.exact)}`);
}

module.exports = { results, score, methods, test };
