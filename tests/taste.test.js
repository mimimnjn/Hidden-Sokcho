// 취향 모델 (js/taste-model.js, data/taste-model.js) 검사
// - 모델 파일이 학습 문장과 맞는지 (문장을 고치고 다시 학습하지 않으면 실패)
// - 대화창이 쓰는 understand()가 단어 규칙만 쓸 때보다 시험 문장에서 못하지 않은지
// - 취향 없는 말에 취향을 지어내지 않는지
const test = require("node:test");
const assert = require("node:assert");
const vm = require("node:vm");
const fs = require("node:fs");
const path = require("node:path");
const { readExamples, placeExamples, appContext, train } = require("../scripts/train-taste.js");
const { results, methods, test: testSet } = require("../scripts/eval-taste.js");
const { mergeTaste } = require("../js/taste-model.js");

const ROOT = path.join(__dirname, "..");
const MODEL = vm.runInContext("TASTE_MODEL", appContext(["data/taste-model.js"]));

test("taste model file is up to date with ml/taste-train.txt and ml/tuned.json", () => {
  const tuned = JSON.parse(fs.readFileSync(path.join(ROOT, "ml/tuned.json"), "utf8")).best;
  const fresh = train(readExamples("ml/taste-train.txt"), placeExamples(), tuned);
  assert.strictEqual(JSON.stringify(MODEL.settings), JSON.stringify(fresh.settings)); // vm 안의 객체라 글자로 비교
  assert.strictEqual(JSON.stringify(MODEL.stats), JSON.stringify(fresh.stats), "node scripts/train-taste.js로 다시 학습할 것");
  assert.strictEqual(JSON.stringify(MODEL.features), JSON.stringify(fresh.features));
});

test("no test sentence is also a training sentence", () => {
  const trainTexts = new Set(readExamples("ml/taste-train.txt").map((e) => e.text));
  assert.deepStrictEqual(testSet.filter((e) => trainTexts.has(e.text)).map((e) => e.text), []);
});

test("chat understanding (rules + model) beats rules alone on held-out sentences", () => {
  const [rules, , merged] = Object.values(results);
  assert.ok(merged.micro.f1 >= rules.micro.f1, `규칙 ${rules.micro.f1} / 합친 것 ${merged.micro.f1}`);
  assert.ok(merged.micro.p >= 0.9, `정밀도 ${merged.micro.p}`); // 엉뚱한 취향을 마구 붙이지 않음
});

// 2026-11-26 고침: 예전 모델은 "속초 여행" → 맛집·한적, "ok" → 체험처럼 취향 없는 말에도 취향을 붙였음
test("no taste in the words, no taste from the model", () => {
  const understandAll = Object.values(methods)[2];
  for (const text of ["속초 여행", "놀러 왔어", "ok", "good", "asdf qwer", "속초 날씨", "뭐 하지"]) {
    assert.deepStrictEqual(understandAll(text), [], text);
  }
});

test("mergeTaste: fallback fills only what the rules missed", () => {
  const rules = { tags: ["카페"], quiet: false, indoor: false, viral: false };
  const ai = { tags: ["바다"], quiet: true, indoor: false, viral: false };
  const f = mergeTaste(rules, ai, "fallback");
  assert.deepStrictEqual(f.tags, ["카페"]); // 규칙이 취향을 찾았으면 모델 취향은 더하지 않음
  assert.strictEqual(f.quiet, true); // 조건은 규칙이 못 찾았으니 모델 것
  const none = mergeTaste({ tags: [], quiet: false, indoor: false, viral: false }, ai, "fallback");
  assert.deepStrictEqual(none.tags, ["바다"]);
  assert.deepStrictEqual(mergeTaste(rules, ai, "union").tags, ["카페", "바다"]);
  assert.deepStrictEqual(mergeTaste(rules, ai, "model").tags, ["바다"]);
});
