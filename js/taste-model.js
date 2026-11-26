// 취향 이해 모델 (나이브 베이즈) — 문장을 보고 취향(바다·산책…)과 조건(조용·실내·핫)을 맞힌다
// 학습: node scripts/train-taste.js → data/taste-model.js (TASTE_MODEL)
// 점수: node scripts/eval-taste.js → ml/results.md (단어 규칙과 같은 시험 문장으로 비교)
//
// 원리 (한 문장씩)
// 1. 문장을 조각(특징)으로 나눈다: 띄어쓴 단어, 단어 안의 글자 하나, 붙어 있는 글자 두 개
//    "파도 소리" → 파도 · 소리 · 파 · 도 · 소 · 리 · 파도 · 소리 (조사가 붙어도 "바다를"에서 "바다"가 남는다)
// 2. 취향마다 "이 조각이 그 취향 문장에 몇 번 나왔나"를 학습 문장에서 센다
// 3. 새 문장이 오면 조각마다 "그 취향일 때 나올 확률 ÷ 아닐 때 나올 확률"을 곱한다 (계산은 로그로 더함)
// 4. 곱한 값이 기준 확률을 넘으면 그 취향이라고 본다
// 한 문장에 취향이 여러 개일 수 있어서, 취향마다 "맞다/아니다"를 따로 판단한다
//
// 근거 없는 판단 막기 (2026-11-26 고침. 전에는 "속초 여행" → 맛집·한적, "ok" → 체험이 나왔음)
// - "속초"는 조각에서 뺀다. 식당 이름에 "속초"가 많이 붙어서 "속초"만 보고 맛집이라고 판단했음
// - 학습에서 너무 드물게 나온 조각은 모델에 넣지 않는다 (minDocs, scripts/train-taste.js). 몇 개 안 되는 문장·글에서 우연히 본 조각이 확률을 크게 흔들었음
// - 조건(조용·실내·핫)은 질문 문장으로만 배운다. 질문 문장에 한 번도 없던 조각은 조건의 근거로 쓰지 않는다

const TASTE_LABELS = ["바다", "자연·산책", "문화·역사", "체험", "시장", "먹거리", "카페", "quiet", "indoor", "viral"];
const TASTE_MOODS = ["quiet", "indoor", "viral"];
const TASTE_STOP = /속초/g; // 어느 취향에나 붙는 지역 이름

// 문장 → 특징 묶음 (같은 조각은 한 번만). unigram: 글자 하나짜리 조각도 쓸지 (교차 검증으로 정함)
function tasteFeatures(text, { unigram = true } = {}) {
  const out = new Set();
  const words = String(text).toLowerCase().replace(TASTE_STOP, " ").replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter(Boolean);
  for (const w of words) {
    out.add(`w:${w}`);
    const chars = [...w];
    for (let i = 0; i < chars.length; i++) {
      if (unigram) out.add(`u:${chars[i]}`);
      if (i + 1 < chars.length) out.add(`b:${chars[i]}${chars[i + 1]}`);
    }
  }
  return out;
}

// 문장 → { tags, quiet, indoor, viral, scores }. scores: 라벨마다 그렇다고 볼 확률(0~1)
// model을 넘기지 않으면 data/taste-model.js의 TASTE_MODEL을 쓴다
function predictTaste(text, model = typeof TASTE_MODEL !== "undefined" ? TASTE_MODEL : null) {
  const result = { tags: [], quiet: false, indoor: false, viral: false, scores: {} };
  if (!model) return result;
  const feats = [...tasteFeatures(text, model.options)].filter((f) => model.features[f]);
  model.labels.forEach((label, k) => {
    const L = model.stats[label];
    let logOdds = L.logPrior;
    for (const f of feats) {
      const row = model.features[f];
      const pos = row[k + 2];
      const total = L.queryOnly ? row[1] : row[0];
      if (!total) continue; // 조건 라벨인데 질문 문장에 한 번도 없던 조각 (장소 글에만 있음) → 근거 아님
      const neg = total - pos;
      logOdds += Math.log((pos + model.alpha) / L.posDenom) - Math.log((neg + model.alpha) / L.negDenom);
    }
    const p = 1 / (1 + Math.exp(-logOdds));
    result.scores[label] = Math.round(p * 1000) / 1000;
    if (p >= model.threshold) {
      if (TASTE_MOODS.includes(label)) result[label] = true;
      else result.tags.push(label);
    }
  });
  return result;
}

// 단어 규칙이 알아들은 것(rules)과 모델이 알아들은 것(ai) 합치기. 방식은 교차 검증으로 고른다 (scripts/tune-taste.js)
// - model: 모델만 · union: 둘 중 하나라도 맞다고 하면 · fallback: 규칙이 아무것도 못 찾은 쪽(취향 / 조건)만 모델로 채움
function mergeTaste(rules, ai, mode = "union") {
  const fromRules = mode !== "model";
  const addTags = mode !== "fallback" || !rules.tags.length;
  const addMoods = mode !== "fallback" || !TASTE_MOODS.some((m) => rules[m]);
  const out = { ...rules, tags: [...new Set([...(fromRules ? rules.tags : []), ...(addTags ? ai.tags : [])])] };
  for (const m of TASTE_MOODS) out[m] = Boolean((fromRules && rules[m]) || (addMoods && ai[m]));
  return out;
}

if (typeof module !== "undefined") module.exports = { TASTE_LABELS, TASTE_MOODS, tasteFeatures, predictTaste, mergeTaste };
