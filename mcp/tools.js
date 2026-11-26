// CrowdFlow MCP 도구 모음
// 웹앱이 쓰는 데이터(data/)와 로직(js/)을 그대로 불러와서, AI가 부를 수 있는 "도구" 10개로 내보냄.
// 웹앱과 같은 코드를 쓰므로 웹 화면과 AI의 답이 항상 같음.
// recommend_from_request는 웹 대화창과 같은 취향 모델(js/taste-model.js)로 사용자의 말을 알아들음

const fs = require("fs");
const path = require("path");
const vm = require("vm");

// ── 1. 웹앱 파일 불러오기 ──
// 웹앱 파일들은 브라우저용(<script>)이라 require로 못 씀. 테스트와 같은 방법으로 한 공간(context)에 순서대로 실행.
const ROOT = path.join(__dirname, "..");
const FILES = [
  "data/tags.js", "data/places.js", "data/auto-places.js", "data/crowd-data.js", "data/popular.js", "data/tour-data.js", "data/descriptions.js", "data/sns-data.js", "data/weather-data.js",
  "js/places-all.js", "js/crowd.js", "js/recommend.js",
  "data/taste-model.js", "js/taste-model.js", "js/chat.js", // 취향 모델과 대화창의 말 알아듣기 (화면 부분은 브라우저에서만 돌아서 여기선 안 돔)
];
const app = vm.createContext({});
for (const f of FILES) vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), app, { filename: f });
const W = (name) => vm.runInContext(name, app); // 웹앱 안의 변수·함수 꺼내기

const ALL_PLACES = W("ALL_PLACES");
const TAGS = W("TAGS");
const CROWD_DATA = W("CROWD_DATA");
const POPULAR = W("POPULAR");
const SNS_DATA = W("SNS_DATA");
const { recommend, crowdLevel, popularity, isGem, similarPlaces, oneBranchEach, formatYmd, toYmd, hotRestaurants, hotMenu, nearbyPlaces, weatherOn, isIndoor, understand, answer } =
  W("({ recommend, crowdLevel, popularity, isGem, similarPlaces, oneBranchEach, formatYmd, toYmd, hotRestaurants, hotMenu, nearbyPlaces, weatherOn, isIndoor, understand, answer })");
// 혼잡 예측이 있는 장소 수 (설명 문구에 씀. 데이터를 새로 받으면 저절로 바뀜)
const FORECAST_COUNT = ALL_PLACES.filter((p) => p.cnctrName && CROWD_DATA.forecast[p.cnctrName]).length;

// ── 2. 입력 정리 도우미 ──
const norm = (s) => String(s).replace(/\s|\[.*?\]/g, "").toLowerCase();

// "2026-10-03" → Date. 비어 있으면 오늘
function parseDate(value) {
  if (!value) return new Date();
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!m) throw new Error(`날짜는 YYYY-MM-DD 형식이어야 해요 (받은 값: ${value})`);
  return new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3]));
}

// ── 가게·장소 이름 검색 ──
// AI는 "물회 맛집", "청초수물회 본점", "육구방앗간 찹쌀떡"처럼 문장처럼 묻는 경우가 많아서
// 검색어를 단어로 나누고, 어디에나 붙는 말(맛집·속초·근처 등)은 뺀 뒤 이름 → 메뉴·설명 순으로 맞춘다
const STOP_WORDS = new Set(["속초", "속초시", "맛집", "근처", "주변", "가게", "식당", "음식점", "본점", "지점", "추천", "유명한", "유명", "곳", "집", "어디", "어디야", "찾아줘", "알려줘"]);
const POPULAR_MENUS = POPULAR.menus || {};
const keywordsOf = (query) => String(query).split(/[\s,·/]+/).filter((w) => w && !STOP_WORDS.has(w)).map(norm).filter(Boolean);
const bigrams = (s) => { const out = new Set(); for (let i = 0; i < s.length - 1; i++) out.add(s.slice(i, i + 2)); return out; };
// 두 이름이 얼마나 비슷한지 0~1 (두 글자씩 끊어서 겹치는 비율). 오타·띄어쓰기 다른 이름 후보용
function similarity(a, b) {
  const A = bigrams(a), B = bigrams(b);
  if (!A.size || !B.size) return 0;
  let hit = 0;
  for (const x of A) if (B.has(x)) hit++;
  return (2 * hit) / (A.size + B.size);
}

// 검색어에 맞는 장소들을 잘 맞는 순으로. score: 이름이 똑같음 100 · 이름에 통째로 들어 있음 80 · 단어별로 이름 10, 메뉴·설명 3
function matchPlaces(query, places = ALL_PLACES) {
  const q = norm(query);
  if (!q) return [];
  const words = keywordsOf(query);
  const found = [];
  for (const p of places) {
    const name = norm(p.name);
    let score = 0;
    if (name === q) score = 100;
    else if (name.includes(q)) score = 80;
    else if (words.length) {
      const extra = norm([p.description, p.menu, p.kind, POPULAR_MENUS[p.id]].filter(Boolean).join(" "));
      let hits = 0;
      for (const w of words) {
        if (name.includes(w)) { score += 10; hits++; }
        else if (extra.includes(w)) { score += 3; hits++; }
      }
      if (hits < words.length) score = 0; // 검색어의 단어는 모두 맞아야 함
    }
    if (score) found.push({ place: p, score });
  }
  return found.sort((a, b) => b.score - a.score);
}

// 못 찾았을 때 보여 줄 비슷한 이름 (최대 5개)
function similarNames(query) {
  const q = norm(keywordsOf(query).join("") || query);
  return ALL_PLACES.map((p) => ({ name: p.name, s: similarity(q, norm(p.name)) }))
    .filter((x) => x.s >= 0.3).sort((a, b) => b.s - a.s).slice(0, 5).map((x) => x.name);
}

// 장소 하나 고르기 (get_crowd · best_days 등). 가장 잘 맞는 곳. 못 찾으면 비슷한 이름 후보와 함께 오류
function findPlace(name) {
  const best = matchPlaces(name)[0];
  if (best) return best.place;
  const hints = similarNames(name);
  throw new Error(`'${name}'을(를) 찾지 못했어요${hints.length ? `. 비슷한 이름: ${hints.join(", ")}` : ""}`);
}

// 도구 결과에 넣을 장소 한 줄 요약 (AI가 읽기 좋은 모양)
function summarize(item) {
  const { place, crowd, pop, gem } = item;
  return {
    name: place.name,
    tags: place.tags,
    description: place.description || place.kind || null,
    crowd: crowd.closed ? "휴관" : crowd.level ? crowd.label : null, // 예측 없는 곳은 null (정보 없음이라 쓰지 않음)
    crowd_rate: crowd.rate ?? null, // 0~100. 그 장소의 1년 중 가장 붐빈 날 = 100
    popularity: pop.label,
    hidden_gem: gem,
    address: place.address || null,
  };
}

// ── 3. 도구 정의 ──
// name: AI가 부를 이름 / description: AI가 언제 쓸지 판단하는 설명 / inputSchema: 받을 값의 형식(JSON Schema)
// run: 실제로 실행되는 함수. 반환한 값이 AI에게 전달됨
const DATE = { type: "string", description: "방문 날짜 YYYY-MM-DD. 생략하면 오늘" };

const MOOD_NAMES = { quiet: "한적", indoor: "실내", viral: "SNS 핫플" };

const TOOLS = [
  {
    name: "recommend_from_request",
    description: "사용자가 한 말을 그대로 넣으면 숨은 속초가 직접 학습한 취향 모델(나이브 베이즈)과 단어 규칙으로 취향과 조건(한적·실내·SNS 핫플)을 알아듣고 그날 사람 적은 곳부터 추천한다. 웹 대화창과 같은 결과다. 예: '조용한 바다 보고 커피', '비 오는 날 아이랑 갈 데'. 결과에 알아들은 취향과 모델이 판단한 확률이 같이 온다. 취향 태그를 이미 정했으면 search_places를 쓴다",
    inputSchema: {
      type: "object",
      properties: {
        request: { type: "string", description: "사용자가 한 말 그대로" },
        date: DATE,
        limit: { type: "integer", minimum: 1, maximum: 10, description: "최대 개수. 기본 4" },
      },
      required: ["request"],
    },
    run({ request, date, limit = 4 }) {
      if (!String(request || "").trim()) throw new Error("request에 사용자가 한 말을 넣어 주세요");
      const d = parseDate(date);
      const m = understand(request, ALL_PLACES);
      const day = formatYmd(toYmd(d));
      if (m.places.length) return { date: day, understood: { name_search: true }, places: recommend(m.places, [], "gem", d).slice(0, limit).map(summarize) };
      const { tags, picks, skipped } = answer(m, ALL_PLACES, d, limit);
      const understood = {
        tags: [...m.tags],
        conditions: Object.keys(MOOD_NAMES).filter((k) => m[k]).map((k) => MOOD_NAMES[k]),
        added_by_model: m.fromModel.map((k) => MOOD_NAMES[k] || k), // 단어 규칙은 못 알아듣고 모델이 알아들은 것
        // 모델이 판단한 확률 (5% 미만은 뺌). 기준 확률을 넘어도 단어 규칙이 이미 취향을 찾았으면 더하지 않음 (교차 검증으로 고른 방식)
        model_probability: m.ai ? Object.fromEntries(Object.entries(m.ai.scores).filter(([, p]) => p >= 0.05).map(([k, p]) => [MOOD_NAMES[k] || k, p])) : null,
      };
      if (!tags.length) return { date: day, understood, places: [], note: "취향을 알아듣지 못했어요. 바다·산책·문화·체험·시장·맛집·카페 같은 취향이 들어간 말이면 알아들어요" };
      return { date: day, understood, places: picks.map(summarize), skipped_busy: [...skipped] };
    },
  },
  {
    name: "search_places",
    description: "속초 장소와 가게를 이름이나 취향(태그)으로 찾는다. 가게 이름(예: 청초수물회, 육구방앗간)이나 메뉴(예: 물회, 찹쌀떡)로 찾을 수 있고, 이름으로 찾으면 그 가게가 맨 앞에 온다. 이름 없이 태그로만 찾으면 숨은 명소와 사람 적은 곳이 앞에 온다. 태그: " + TAGS.join(", "),
    inputSchema: {
      type: "object",
      properties: {
        tags: { type: "array", items: { type: "string", enum: TAGS }, description: "취향 태그 여러 개 가능" },
        query: { type: "string", description: "가게·장소 이름이나 메뉴. 일부만 써도 된다 (예: 청초수물회, 만석닭강정, 물회, 폭포)" },
        date: DATE,
        limit: { type: "integer", minimum: 1, maximum: 20, description: "최대 개수. 기본 8" },
      },
    },
    run({ tags = [], query, date, limit = 8 }) {
      const d = parseDate(date);
      if (!query) {
        const items = oneBranchEach(recommend(ALL_PLACES, tags, "gem", d)).filter((i) => !i.crowd.closed);
        return { date: formatYmd(toYmd(d)), count: items.length, places: items.slice(0, limit).map(summarize) };
      }
      // 이름으로 찾을 때는 그 가게를 맨 앞에. 지점도 모두 보여 주고, 휴관인 날이면 빼지 않고 "휴관"으로 알려 줌
      const matched = matchPlaces(query);
      const score = new Map(matched.map((m) => [m.place.id, m.score]));
      const items = recommend(matched.map((m) => m.place), tags, "gem", d)
        .sort((a, b) => score.get(b.place.id) - score.get(a.place.id));
      const out = { date: formatYmd(toYmd(d)), count: items.length, places: items.slice(0, limit).map(summarize) };
      if (!items.length) {
        const hints = similarNames(query);
        out.note = `'${query}'에 맞는 곳이 없어요${hints.length ? `. 비슷한 이름: ${hints.join(", ")}` : ""}`;
      }
      return out;
    },
  },
  {
    name: "get_crowd",
    description: `특정 장소의 그날 혼잡 예측(한적·보통·혼잡, 0~100)을 알려준다. 예측은 한국관광공사 관광지 집중률 기반이며 속초 ${FORECAST_COUNT}곳만 있다`,
    inputSchema: {
      type: "object",
      properties: { place: { type: "string", description: "장소 이름" }, date: DATE },
      required: ["place"],
    },
    run({ place, date }) {
      const p = findPlace(place);
      const d = parseDate(date);
      const c = crowdLevel(p, d);
      return { place: p.name, date: formatYmd(toYmd(d)), crowd: c.closed ? "휴관" : c.level ? c.label : null, crowd_rate: c.rate ?? null, reason: c.reason };
    },
  },
  {
    name: "find_alternatives",
    description: "어떤 장소에 사람 많을 때 대신 갈 만한, 취향이 비슷하고 사람 적은 다른 곳을 찾는다",
    inputSchema: {
      type: "object",
      properties: { place: { type: "string", description: "원래 가려던 장소 이름" }, date: DATE },
      required: ["place"],
    },
    run({ place, date }) {
      const p = findPlace(place);
      const d = parseDate(date);
      const target = crowdLevel(p, d);
      return {
        place: p.name,
        date: formatYmd(toYmd(d)),
        crowd: target.closed ? "휴관" : target.label,
        crowd_rate: target.rate ?? null,
        alternatives: similarPlaces(ALL_PLACES, p, d, 5).map(summarize),
      };
    },
  },
  {
    name: "hidden_gems",
    description: "숨은 명소를 찾는다. 속초시청이 관광명소로 소개하지만 실제로 찾아가는 사람은 적은 곳이며, 그날 혼잡한 곳은 뺀다",
    inputSchema: {
      type: "object",
      properties: { tag: { type: "string", enum: TAGS, description: "취향 하나로 좁히기 (선택)" }, date: DATE },
    },
    run({ tag, date }) {
      const d = parseDate(date);
      const items = recommend(ALL_PLACES, tag ? [tag] : [], "gem", d)
        .filter((i) => i.gem && !i.crowd.closed && i.crowd.level !== 3);
      return { date: formatYmd(toYmd(d)), count: items.length, places: items.slice(0, 10).map(summarize) };
    },
  },
  {
    name: "hot_restaurants",
    description: "요즘 속초에서 인기 있는 맛집. 최근 30일 SNS 게시물 수 순위와, 게시물은 적어도 웨이팅 후기가 많은 곳을 함께 준다 (2026-09-27 조사)",
    inputSchema: { type: "object", properties: {} },
    run() {
      const byId = new Map(ALL_PLACES.map((p) => [p.id, p]));
      return {
        measured_on: "2026-09-27",
        sns_last_30_days: hotRestaurants(recommend(ALL_PLACES, [], "gem", new Date())).map((i) => ({ name: i.place.name, posts: i.buzz, menu: hotMenu(i.place) })),
        long_waits: POPULAR.queue.filter((x) => byId.has(x.id)).map((x) => ({ name: byId.get(x.id).name, note: x.note })),
      };
    },
  },
  {
    name: "best_days",
    description: "예측 기간(약 30일) 안에서 그 장소에 사람이 가장 적은 날들을 알려준다. '언제 가면 좋을까' 질문에 쓴다",
    inputSchema: {
      type: "object",
      properties: { place: { type: "string", description: "장소 이름" }, count: { type: "integer", minimum: 1, maximum: 10, description: "몇 개. 기본 5" } },
      required: ["place"],
    },
    run({ place, count = 5 }) {
      const p = findPlace(place);
      const series = p.cnctrName ? CROWD_DATA.forecast[p.cnctrName] : null;
      if (!series) return { place: p.name, note: "이 장소는 혼잡 예측 데이터가 없어요" };
      const today = toYmd(new Date());
      const days = Object.entries(series)
        .filter(([ymd]) => ymd >= today) // 지난 날짜는 빼기
        .map(([ymd, rate]) => ({ date: `${ymd.slice(0, 4)}-${ymd.slice(4, 6)}-${ymd.slice(6, 8)}`, label: formatYmd(ymd), rate: Math.round(rate) }))
        .sort((a, b) => a.rate - b.rate);
      if (!days.length) return { place: p.name, forecast_range: CROWD_DATA.forecastRange.map(formatYmd), note: "예측 기간이 끝났어요. 데이터를 새로 받아야 해요" };
      return { place: p.name, forecast_range: CROWD_DATA.forecastRange.map(formatYmd), quietest: days.slice(0, count), busiest: days.slice(-3).reverse() };
    },
  },
  {
    name: "nearby_food",
    description: "어떤 장소 근처(기본 1.5km 안)의 식당과 카페를 가까운 순으로 찾는다. '여기 갔다가 밥 먹을 데', '근처 카페' 같은 질문에 쓴다. 거리는 관광공사 좌표로 잰 직선거리다",
    inputSchema: {
      type: "object",
      properties: {
        place: { type: "string", description: "기준 장소 이름" },
        kind: { type: "string", enum: ["먹거리", "카페", "둘 다"], description: "식당만, 카페만, 둘 다. 기본 둘 다" },
        max_m: { type: "integer", minimum: 200, maximum: 5000, description: "최대 거리(m). 기본 1500" },
        limit: { type: "integer", minimum: 1, maximum: 10, description: "최대 개수. 기본 5" },
        date: DATE,
      },
      required: ["place"],
    },
    run({ place, kind = "둘 다", max_m = 1500, limit = 5, date }) {
      const p = findPlace(place);
      if (!p.lat) return { place: p.name, note: "이 장소는 좌표가 없어서 근처를 찾을 수 없어요" };
      const d = parseDate(date);
      const tags = kind === "둘 다" ? ["먹거리", "카페"] : [kind];
      const items = nearbyPlaces(ALL_PLACES, p, d, { tags, maxM: max_m, limit });
      return {
        place: p.name,
        date: formatYmd(toYmd(d)),
        count: items.length,
        places: items.map((i) => ({ ...summarize(i), distance_m: i.distance, sns_posts_30d: i.buzz || 0 })),
      };
    },
  },
  {
    name: "weather_plan",
    description: "그날 속초 날씨 예보(기상청)를 보고, 비가 오면 실내 장소를, 맑으면 야외 장소를 사람 적은 순으로 추천한다. '비 오는 날 갈 데', '그날 날씨 어때' 질문에 쓴다. 예보는 약 10일 뒤까지만 있다",
    inputSchema: {
      type: "object",
      properties: { date: DATE, tag: { type: "string", enum: TAGS, description: "취향 하나로 좁히기 (선택)" }, limit: { type: "integer", minimum: 1, maximum: 10, description: "최대 개수. 기본 6" } },
    },
    run({ date, tag, limit = 6 }) {
      const d = parseDate(date);
      const w = weatherOn(d);
      if (!w) return { date: formatYmd(toYmd(d)), note: "이 날짜는 날씨 예보가 없어요. 예보는 약 10일 뒤까지만 있어요" };
      const items = oneBranchEach(recommend(ALL_PLACES, tag ? [tag] : [], "gem", d))
        .filter((i) => !i.crowd.closed && i.crowd.level !== 3 && isIndoor(i.place) === w.rain);
      return {
        date: formatYmd(toYmd(d)),
        weather: { sky: w.sky, rain: w.rain, rain_chance: w.pop, temp_min: w.tmin, temp_max: w.tmax },
        picked: w.rain ? "실내" : "야외",
        places: items.slice(0, limit).map(summarize),
      };
    },
  },
  {
    name: "sns_trend",
    description: "식당이 아닌 관광지 중에서 최근 30일 SNS 게시물이 많은 곳, 즉 요즘 SNS에서 뜨는 곳을 알려준다. 게시물 수는 직접 조사한 집계다. 맛집은 hot_restaurants를 쓴다",
    inputSchema: {
      type: "object",
      properties: { tag: { type: "string", enum: TAGS, description: "취향 하나로 좁히기 (선택)" }, limit: { type: "integer", minimum: 1, maximum: 15, description: "최대 개수. 기본 8" } },
    },
    run({ tag, limit = 8 }) {
      const items = oneBranchEach(recommend(ALL_PLACES, tag ? [tag] : [], "gem", new Date()))
        .filter((i) => !["먹거리", "카페"].includes(i.place.tags[0]) && i.buzz > 0)
        .sort((a, b) => b.buzz - a.buzz);
      return {
        measured_on: SNS_DATA.measuredOn,
        method: SNS_DATA.method,
        places: items.slice(0, limit).map((i) => ({ name: i.place.name, tags: i.place.tags, sns_posts_30d: i.buzz, hidden_gem: i.gem })),
      };
    },
  },
];

module.exports = { TOOLS, FORECAST_COUNT };
