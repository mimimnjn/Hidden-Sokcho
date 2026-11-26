// MCP 서버를 실제로 실행해서, Claude 데스크톱이 보내는 것과 같은 요청을 보내고 답을 확인
const test = require("node:test");
const assert = require("node:assert");
const { spawn } = require("node:child_process");
const path = require("node:path");
const vm = require("node:vm");
const fs = require("node:fs");

// SNS 수치는 다시 조사하면 바뀌므로 data/sns-data.js의 숫자와 비교 (1위는 점수가 가장 큰 곳)
const SNS_SCORES = vm.runInNewContext(fs.readFileSync(path.join(__dirname, "..", "data", "sns-data.js"), "utf8") + ";Object.values(SNS_DATA.byId).map((v) => v.score)");

// 혼잡 예측 · 날씨는 다시 받으면 날짜가 바뀌므로, 데이터 파일 안에서 날짜를 골라 씀
const readData = (file, expr) => vm.runInNewContext(fs.readFileSync(path.join(__dirname, "..", "data", file), "utf8") + ";" + expr);
const dash = (ymd) => `${ymd.slice(0, 4)}-${ymd.slice(4, 6)}-${ymd.slice(6, 8)}`;
const DONGMYEONG = readData("crowd-data.js", "CROWD_DATA.forecast['동명항']"); // 동명항 날짜별 예측
const BUSIEST = Object.entries(DONGMYEONG).sort((a, b) => b[1] - a[1])[0]; // [날짜, 값] 가장 붐비는 날
const WEATHER = readData("weather-data.js", "WEATHER_DATA.days");
const WEATHER_DAY = Object.keys(WEATHER)[0];

// 서버를 켜고 요청 목록을 보낸 뒤, id별 답을 모아 돌려줌
function talk(messages) {
  return new Promise((resolve, reject) => {
    const server = spawn(process.execPath, [path.join(__dirname, "..", "mcp", "server.js")]);
    const answers = new Map();
    let buf = "";
    const want = messages.filter((m) => m.id !== undefined).length;
    server.stdout.on("data", (chunk) => {
      buf += chunk;
      let i;
      while ((i = buf.indexOf("\n")) >= 0) {
        const line = buf.slice(0, i); buf = buf.slice(i + 1);
        if (!line.trim()) continue;
        const msg = JSON.parse(line); // stdout에는 JSON만 나와야 함
        answers.set(msg.id, msg);
        if (answers.size === want) { server.kill(); resolve(answers); }
      }
    });
    server.on("error", reject);
    setTimeout(() => { server.kill(); reject(new Error("응답 없음")); }, 10000);
    for (const m of messages) server.stdin.write(JSON.stringify({ jsonrpc: "2.0", ...m }) + "\n");
  });
}
const call = (id, name, args) => ({ id, method: "tools/call", params: { name, arguments: args } });
const body = (answer) => JSON.parse(answer.result.content[0].text);

test("MCP 서버: 인사 · 도구 목록 · 모르는 요청", async () => {
  const a = await talk([
    { id: 1, method: "initialize", params: { protocolVersion: "2025-06-18", capabilities: {}, clientInfo: { name: "test", version: "0" } } },
    { method: "notifications/initialized" },
    { id: 2, method: "tools/list" },
    { id: 3, method: "nope" },
  ]);
  assert.strictEqual(a.get(1).result.protocolVersion, "2025-06-18");
  assert.deepStrictEqual(a.get(2).result.tools.map((t) => t.name),
    ["recommend_from_request", "search_places", "get_crowd", "find_alternatives", "hidden_gems", "hot_restaurants", "best_days", "nearby_food", "weather_plan", "sns_trend"]);
  assert.strictEqual(a.get(3).error.code, -32601);
});

test("MCP 서버: 사용자가 한 말 그대로 추천 (취향 모델)", async () => {
  const date = dash(BUSIEST[0]);
  const a = await talk([
    call(1, "recommend_from_request", { request: "조용한 바다 보고 싶어", date }),
    call(2, "recommend_from_request", { request: "천년 넘은 절", date }), // 단어 규칙에 없는 말
    call(3, "recommend_from_request", { request: "   " }),
    call(4, "recommend_from_request", { request: "ㅋㅋ", date }),
  ]);
  const sea = body(a.get(1));
  assert.ok(sea.understood.tags.includes("바다") && sea.understood.conditions.includes("한적"));
  assert.ok(sea.places.length > 0 && sea.places.every((p) => p.crowd !== "혼잡"));
  const temple = body(a.get(2));
  assert.ok(temple.understood.added_by_model.includes("문화·역사")); // 모델이 알아들은 것은 따로 알려 줌
  assert.ok(temple.places.length > 0 && temple.places.every((p) => p.tags.includes("문화·역사")));
  assert.strictEqual(a.get(3).result.isError, true);
  assert.ok(body(a.get(4)).note); // 못 알아들으면 이유를 알려 줌
});

test("MCP 서버: 도구 실행 결과가 웹앱 로직과 같다", async () => {
  const a = await talk([
    call(1, "get_crowd", { place: "동명항", date: dash(BUSIEST[0]) }),
    call(2, "find_alternatives", { place: "동명항", date: dash(BUSIEST[0]) }),
    call(3, "hot_restaurants", {}),
    call(4, "get_crowd", { place: "없는장소가나다" }),
    call(5, "search_places", { tags: ["시장"], limit: 20 }),
    call(6, "best_days", { place: "영금정", count: 3 }),
  ]);
  const crowd = body(a.get(1));
  assert.strictEqual(crowd.crowd_rate, Math.round(BUSIEST[1])); // 데이터 파일의 값과 같아야 함
  const alts = body(a.get(2)).alternatives;
  assert.ok(alts.length > 0 && alts.every((p) => p.name !== "동명항"));
  const hot = body(a.get(3)).sns_last_30_days;
  assert.ok(hot.length > 0 && hot.length <= 8);
  assert.ok(SNS_SCORES.includes(hot[0].posts));
  for (let k = 1; k < hot.length; k++) assert.ok(hot[k - 1].posts >= hot[k].posts);
  assert.strictEqual(a.get(4).result.isError, true); // 없는 장소는 오류로 알려줌
  const market = body(a.get(5)).places;
  assert.ok(market.length >= 10 && market.every((p) => p.tags.includes("시장")));
  // 지난 날짜는 빼므로, 예측 기간이 끝나 가면 남은 날만큼만 나옴
  const best = body(a.get(6));
  const days = best.quietest || [];
  assert.ok(days.length <= 3);
  for (let k = 1; k < days.length; k++) assert.ok(days[k - 1].rate <= days[k].rate);
  if (!days.length) assert.ok(best.note);
});

test("MCP 서버: 근처 맛집 · 날씨 추천 · SNS 관광지", async () => {
  const a = await talk([
    call(1, "nearby_food", { place: "영금정", limit: 5 }),
    call(2, "weather_plan", { date: dash(WEATHER_DAY) }),
    call(3, "weather_plan", { date: "2000-01-01" }),
    call(4, "sns_trend", { limit: 5 }),
    call(5, "nearby_food", { place: "영금정", kind: "카페", max_m: 800 }),
  ]);
  const near = body(a.get(1)).places;
  assert.ok(near.length > 0 && near.length <= 5);
  assert.ok(near.every((p) => p.name !== "영금정" && p.distance_m <= 1500));
  for (let k = 1; k < near.length; k++) assert.ok(near[k - 1].distance_m <= near[k].distance_m); // 가까운 순
  const plan = body(a.get(2));
  assert.strictEqual(plan.weather.rain, WEATHER[WEATHER_DAY].rain);
  assert.strictEqual(plan.picked, WEATHER[WEATHER_DAY].rain ? "실내" : "야외"); // 비 오면 실내, 아니면 야외
  assert.ok(body(a.get(3)).note); // 예보 없는 날은 이유를 알려 줌
  const trend = body(a.get(4)).places;
  assert.ok(trend.length > 0 && trend.every((p) => !p.tags.includes("먹거리") || p.tags[0] !== "먹거리"));
  for (let k = 1; k < trend.length; k++) assert.ok(trend[k - 1].sns_posts_30d >= trend[k].sns_posts_30d);
  const cafes = body(a.get(5)).places;
  assert.ok(cafes.every((p) => p.tags[0] === "카페" && p.distance_m <= 800));
});

test("MCP 서버: 가게 이름 검색 (문장처럼 물어도 찾는다)", async () => {
  const a = await talk([
    call(1, "search_places", { query: "청초수물회" }),
    call(2, "search_places", { query: "청초수물회 본점" }),
    call(3, "search_places", { query: "속초 물회 맛집" }),
    call(4, "search_places", { query: "찹쌀떡" }), // 이름에는 없고 메뉴에만 있는 말
    call(5, "search_places", { query: "송도물회" }), // 지점이 여러 개여도 똑같은 이름이 맨 앞
    call(6, "search_places", { query: "청초수믈회" }), // 오타
    call(7, "get_crowd", { place: "청초수물회 본점" }),
  ]);
  const names = (id) => body(a.get(id)).places.map((p) => p.name);
  assert.strictEqual(names(1)[0], "청초수물회 속초본점");
  assert.strictEqual(names(2)[0], "청초수물회 속초본점");
  assert.ok(names(3).length >= 3 && names(3).every((n) => n.includes("물회")));
  assert.strictEqual(names(4)[0], "육구방앗간");
  assert.deepStrictEqual(names(5).slice(0, 2), ["송도물회", "송도물회 2호점"]);
  const typo = body(a.get(6));
  assert.strictEqual(typo.count, 0);
  assert.ok(typo.note.includes("청초수물회 속초본점")); // 비슷한 이름을 알려줌
  assert.strictEqual(body(a.get(7)).place, "청초수물회 속초본점");
});
