// 목록 화면
// 첫 화면: 인기 맛집 → 그날 사람 많은 곳 알림판 → 숨은 명소 → 취향별. 취향을 고르거나 검색하면 목록
const PAGE_SIZE = 24;
const HOT_SIZE = 16; // SNS 맛집 순위 몇 위까지
const HOT_PAGE = 8; // 한 쪽에 몇 개
// 다음 쪽으로 넘어가는 간격은 css/style.css .hot-tick (5초)
const TASTE_SIZE = 6;

const state = {
  tags: [],
  q: "",
  mode: "taste",
  date: new Date(),
  shown: PAGE_SIZE,
  tasteTab: TAGS[0],
  onlyGems: false,
  // 대화에서 말한 조건 ("비 오는 날" → 실내, "조용한" → 한적, "물회" → 그 말이 든 곳). 대화 답의 "더 보기"에도 그대로 이어감
  mood: { quiet: false, indoor: false, words: [] },
};
const NO_MOOD = { quiet: false, indoor: false, words: [] };

const els = {
  search: document.getElementById("search"),
  chips: document.getElementById("tag-chips"),
  date: document.getElementById("visit-date"),
  dateRange: document.getElementById("date-range"),
  home: document.getElementById("home"),
  results: document.getElementById("results"),
  sortBtns: document.querySelectorAll(".sort-btn"),
  count: document.getElementById("result-count"),
  grid: document.getElementById("place-grid"),
  empty: document.getElementById("empty"),
  more: document.getElementById("more"),
  weather: document.getElementById("weather"),
  filters: document.getElementById("result-filters"),
};

// 목록 상태를 주소(?tags=..&q=..&mode=..&date=..)에 저장해서 상세 → 뒤로가기 때 유지
function readUrlState() {
  const params = new URLSearchParams(location.search);
  state.tags = (params.get("tags") || "").split(",").filter((t) => TAGS.includes(t));
  state.q = params.get("q") || "";
  state.mode = params.get("mode") === "gem" ? "gem" : "taste";
  state.onlyGems = params.get("gems") === "1";
  state.mood = {
    quiet: params.get("quiet") === "1",
    indoor: params.get("indoor") === "1",
    words: (params.get("words") || "").split(",").filter(Boolean),
  };
  const date = params.get("date");
  if (date && /^\d{4}-\d{2}-\d{2}$/.test(date)) state.date = parseDateInput(date);
}

const viewOf = () => (state.tags.length || state.q ? "results" : "home");
let shownView = null;

// 첫 화면 ↔ 목록이 바뀔 때만 방문 기록을 하나 쌓아서 브라우저 뒤로가기로 돌아올 수 있게 함
// (예전에는 늘 replaceState라 목록에서 뒤로가기를 누르면 사이트 밖으로 나갔음)
function writeUrlState() {
  const params = new URLSearchParams();
  if (state.tags.length) params.set("tags", state.tags.join(","));
  if (state.q) params.set("q", state.q);
  if (state.mode !== "taste") params.set("mode", state.mode);
  if (state.onlyGems) params.set("gems", "1");
  if (state.mood.quiet) params.set("quiet", "1");
  if (state.mood.indoor) params.set("indoor", "1");
  if (state.mood.words.length) params.set("words", state.mood.words.join(","));
  params.set("date", toDateInput(state.date));
  const view = viewOf();
  if (shownView && view !== shownView) history.pushState(null, "", `?${params}`);
  else history.replaceState(null, "", `?${params}`);
  shownView = view;
}

function setupDate() {
  const [start, end] = CROWD_DATA.forecastRange;
  const toInput = (ymd) => `${ymd.slice(0, 4)}-${ymd.slice(4, 6)}-${ymd.slice(6, 8)}`;
  els.date.min = toInput(start);
  els.date.max = toInput(end);
  // 날짜가 예측 기간 밖이면(데이터가 오래됨 등) 기간 첫날로
  const current = toYmd(state.date);
  if (current < start || current > end) state.date = parseDateInput(toInput(start));
  els.date.value = toDateInput(state.date);
  els.dateRange.textContent = formatYmd(end);
}

// 검색: 공백 무시, 부분 일치
function matchesQuery(place, q) {
  if (!q) return true;
  const norm = (s) => s.replace(/\s+/g, "").toLowerCase();
  return norm(place.name).includes(norm(q));
}

// 티맵 이름의 [중식]·본점 같은 꼬리를 떼고 보여줌
function shortName(name) {
  return name.replace(/\s*\[[^\]]*\]/g, "").replace(/\s+\S*(본점|직영점)$/, "");
}

function renderChips() {
  els.chips.innerHTML = TAGS.map((tag) => {
    const on = state.tags.includes(tag);
    return `<button type="button" class="chip${on ? " on" : ""}" aria-pressed="${on}" data-tag="${escapeHtml(tag)}">${escapeHtml(tagLabel(tag))}</button>`;
  }).join("");
}

// ── 첫 화면 영역들 ──
function hotHtml(byId, dateValue) {
  const pick = (list) => list.filter((p) => byId.has(p.id)).map((p) => ({ ...p, item: byId.get(p.id) }));
  // 16위까지, 8개씩 두 쪽으로 나눠 번갈아 보여 줌 (게시물이 1개 이상인 곳)
  const hot = hotRestaurants([...byId.values()], HOT_SIZE, 1).map((item) => ({ item, count: item.buzz, menu: hotMenu(item.place) }));
  const pages = Math.ceil(hot.length / HOT_PAGE);
  const queue = pick(POPULAR.queue);
  // 조사 날짜: 순위에 나온 곳들을 센 날 (여러 날이면 범위로)
  const days = [...new Set(hot.map((h) => SNS_DATA.byId[h.item.place.id].measuredOn))].sort().map((d) => formatYmd(d.replace(/-/g, "")));
  const measured = days.length > 1 ? `${days[0]}~${days[days.length - 1].replace(/^\d+월 /, "")}` : days[0];
  return `
    <section class="sec sec-foam" aria-labelledby="hot-title">
      <div class="section-head reveal">
        <h2 id="hot-title" class="section-title">요즘 SNS 바이럴 맛집</h2>
        <p class="section-sub">SNS 게시물 수 · ${measured} 조사</p>
      </div>
      <div class="split">
        <div class="hot-wrap">
        <ol class="rows hot-list stagger" id="hot-list" data-page="0">
          ${hot.map((h, i) => `
            <li class="row" data-p="${Math.floor(i / HOT_PAGE)}" style="--i:${i % HOT_PAGE}"><a href="${placeHref(h.item.place, dateValue)}">
              <span class="num hot-rank">${i + 1}</span>
              <span class="row-name"><strong>${escapeHtml(shortName(h.item.place.name))}</strong><span>${escapeHtml(h.menu)}</span></span>
              <span class="hot-bar" style="--w:${Math.round((h.count / hot[0].count) * 100)}%" aria-hidden="true"></span>
              <span class="num hot-count"><span data-count="${h.count}">${h.count}</span><small>개</small></span>
            </a></li>`).join("")}
        </ol>
        ${pages > 1 ? `<span class="hot-tick" data-pages="${pages}" data-run="0" aria-hidden="true"></span>` : ""}
        </div>
        <aside class="box on-dark reveal" aria-labelledby="queue-title">
          <div class="box-head"><h3 id="queue-title">요즘 줄 서는 곳</h3><p>SNS 바이럴 핫한 그 곳</p></div>
          <ul class="rows stagger">
            ${queue.map((q) => `
              <li class="row"><a href="${placeHref(q.item.place, dateValue)}">
                <span class="row-name"><strong>${escapeHtml(shortName(q.item.place.name))}</strong><span>${escapeHtml(q.note)}</span></span>
              </a></li>`).join("")}
          </ul>
        </aside>
      </div>
    </section>`;
}

// SNS 순위 쪽 넘기기 (버튼 없이). 보이지 않는 .hot-tick의 5초 애니메이션이 끝날 때마다 다음 쪽
// 지금 줄들이 위로 살짝 사라지고(0.24초) → 다음 줄들이 위에서부터 차례로 올라오며 막대가 다시 자람
// 마우스를 올리면 애니메이션이 멈춰서 넘김도 멈추고, 움직임을 끈 사람에게는 자동 넘김이 없음
const HOT_LEAVE_MS = 240;
function showHotPage(p) {
  const list = document.getElementById("hot-list");
  if (!list) return;
  list.classList.add("leaving");
  setTimeout(() => {
    list.classList.remove("leaving", "entering");
    list.dataset.page = String(p);
    void list.offsetWidth; // 애니메이션을 처음부터 다시
    list.classList.add("entering");
    list.querySelectorAll(`[data-p="${p}"] [data-count]`).forEach(countUp);
    const tick = els.home.querySelector(".hot-tick");
    if (tick) tick.dataset.run = String(p % 2); // 이름이 다른 애니메이션으로 바꿔서 시계를 처음부터
  }, HOT_LEAVE_MS);
}

// 이 앱의 핵심 장면: 그날 사람 몰리는 곳 → 대신 갈 곳
// 장소 사진은 화질이 제각각이라 첫 화면에서 뺌. 혼잡을 점의 밀도로 보여 줌
// 몰리는 곳은 빽빽하게 떨리는 빨간 점, 대신 갈 곳은 듬성하게 숨 쉬는 파란 점
// 고른 날 다음으로 "사람 몰림 → 대신 여기" 짝이 있는 가장 가까운 날 (예측 기간 안). 없으면 null
function nextBusyDate(from) {
  const end = CROWD_DATA.forecastRange[1];
  for (let d = new Date(from.getFullYear(), from.getMonth(), from.getDate() + 1); toYmd(d) <= end; d.setDate(d.getDate() + 1)) {
    if (crowdBoard(recommend(ALL_PLACES, [], "gem", d), 1, d).length) return new Date(d);
  }
  return null;
}

// 짝이 없는 날: 한 줄로 이유를 말하고, 가장 가까운 사람 몰리는 날로 바로 가는 버튼 (빈 칸만 남지 않게, 2026-11-24)
function boardEmptyHtml(all) {
  if (!all.some((i) => i.crowd.level)) return `<p class="board-empty">이날은 혼잡 예측이 없는 날</p>`;
  const busy = all.filter((i) => i.crowd.level === 3 && i.pop.percentile >= POPULAR_MID).map((i) => shortName(i.place.name));
  const line = busy.length
    ? `${escapeHtml(busy.slice(0, 3).join(" · "))} 이날 사람 많음<br>같은 취향으로 덜 붐비는 곳은 이날 없음`
    : `${formatYmd(toYmd(state.date))}은 어디든 한산`;
  const next = nextBusyDate(state.date);
  const jump = next ? `<button type="button" class="board-jump" data-jump-date="${toDateInput(next)}">사람 몰리는 날 보기 · ${formatYmd(toYmd(next))}</button>` : "";
  return `<div class="board-calm"><p class="board-empty">${line}</p>${jump}</div>`;
}

function boardHtml(all, dateValue) {
  const rows = crowdBoard(all, 4, state.date);
  const day = formatYmd(toYmd(state.date));
  const body = rows.length
    ? `<ol class="swaps stagger">${rows.map(({ busy, alt }) => `
        <li class="swap">
          <a class="swap-busy" href="${placeHref(busy.place, dateValue)}">
            <span class="swap-flag">사람 몰림</span>
            <span class="swap-busy-name"><strong>${escapeHtml(shortName(busy.place.name))}</strong><span class="num" data-count="${busy.crowd.rate}">${busy.crowd.rate}</span></span>
            <span class="swap-meter" aria-hidden="true"><span style="width:${busy.crowd.rate}%"></span></span>
          </a>
          <span class="swap-arrow"><span class="sr-only">대신</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg></span>
          <a class="swap-alt" href="${placeHref(alt.place, dateValue)}">
            <span class="swap-body">
              <span class="swap-tags"><span class="card-eyebrow">대신 여기 · ${escapeHtml(alt.place.tags.map(tagShort).join(" · "))}</span>${alt.gem ? gemBadgeHtml() : ""}</span>
              <strong class="card-title">${escapeHtml(shortName(alt.place.name))}</strong>
              ${placeSummary(alt.place) ? `<span class="card-hook">${escapeHtml(placeSummary(alt.place))}</span>` : ""}
              <span class="swap-rate">${crowdBadgeHtml(alt.crowd)}</span>
            </span>
          </a>
        </li>`).join("")}</ol>`
    : boardEmptyHtml(all);
  return `
    <section class="board" aria-labelledby="board-title">
      <div class="section-head reveal">
        <h2 id="board-title" class="section-title">여기 사람 많으면 여기로</h2>
        <p class="section-sub">${day} 혼잡 예측 · 같은 취향 · 다른 동네</p>
      </div>
      ${body}
    </section>`;
}

// 첫 화면에서 말하는 숨은 명소 (숫자판과 섹션이 같은 수를 쓰게 한 곳에서): 휴관·철 지난 곳·혼잡 바로 옆 제외
function homeGems(all) {
  const crowded = all.filter((i) => i.crowd.level === 3);
  return all.filter((i) => i.gem && !i.crowd.closed && inSeason(i.place, state.date) && !nearBusy(i, crowded));
}

function gemsHtml(all, dateValue, shown = new Set()) {
  const gems = homeGems(all);
  // 예측이 있는 한적·보통 → 예측이 없는 곳 순 (숨은 명소는 그날 혼잡이면 애초에 아님)
  const known = gems.filter((i) => i.crowd.level).sort((a, b) => a.crowd.level - b.crowd.level);
  const unknown = gems.filter((i) => !i.crowd.level);
  // 사진 대신 글이 주인공이라 소개가 있는 곳만 (나머지는 "다 보기"에)
  const ordered = [...known, ...unknown].filter((i) => !shown.has(i.place.id) && i.place.description);
  if (!ordered.length) return "";
  const feature = ordered[0];
  const rest = ordered.slice(1);
  return `
    <section class="sec" aria-labelledby="gems-title">
      <div class="section-head reveal">
        <h2 id="gems-title" class="section-title">숨은 명소 ${gems.length}곳</h2>
        <p class="section-sub">아직 소문 안 난 명당</p>
      </div>
      <!-- 큰 카드 하나(두 칸 두 줄) + 글자 카드 4개씩. 격자라 위아래 선이 저절로 맞음 -->
      <div class="bento stagger">
        <a class="feature on-dark" href="${placeHref(feature.place, dateValue)}">
          <span class="feature-top">${gemBadgeHtml()}${feature.crowd.level ? `<span class="feature-rate"><span class="num" data-count="${feature.crowd.rate}">${feature.crowd.rate}</span>${crowdBadgeHtml(feature.crowd)}</span>` : ""}</span>
          <span class="feature-bottom"><strong>${escapeHtml(feature.place.name)}</strong><span>${escapeHtml(placeSummary(feature.place))}</span>${feature.crowd.level ? `<span class="swap-meter feature-meter" aria-hidden="true"><span style="width:${feature.crowd.rate}%"></span></span>` : ""}</span>
        </a>
        ${rest.slice(0, rest.length >= 8 ? 8 : 4).map((i) => placeCardHtml(i, dateValue)).join("")}
      </div>
      <button type="button" class="more-link" data-all-gems>숨은 명소 다 보기</button>
    </section>`;
}

// 취향 탭 목록: 그 취향이 대표 분류(첫 태그)인 곳만 (먹거리 탭에 아바이마을·장사항이 뜨지 않게)
// 혼잡 예측이 있는 곳을 한적한 순으로 먼저, 모자라면 설명이 확인된 곳 → 나머지 순으로 채움 (배지 대신 찾는 정도)
function tasteItems(tag, shown = state.shownOnHome || new Set()) {
  const all = recommend(ALL_PLACES, [tag], "gem", state.date);
  const crowded = all.filter((i) => i.crowd.level === 3);
  const items = oneBranchEach(all)
    .filter((i) => i.place.tags[0] === tag && !i.crowd.closed && i.place.lat) // 지도에 찍을 수 있는 곳만 (전체는 "다 보기")
    .filter((i) => inSeason(i.place, state.date) && i.crowd.level !== 3 && !nearBusy(i, crowded) && !shown.has(i.place.id));
  const known = items.filter((i) => i.crowd.level).sort((a, b) => a.crowd.level - b.crowd.level);
  const checked = items.filter((i) => !i.crowd.level && i.place.description);
  const others = items.filter((i) => !i.crowd.level && !i.place.description);
  return [...known, ...checked, ...others].slice(0, TASTE_SIZE);
}

function tasteListHtml(list, dateValue) {
  // 그날 그 취향 장소가 대부분 사람 많으면 0~2곳만 남음. 비어 보이지 않게 이유를 한 줄로 (억지로 채우지 않음)
  const label = `이날 ${escapeHtml(tagLabel(state.tasteTab))}${josaEunNeun(tagLabel(state.tasteTab))} 대부분 사람 많은 날`;
  if (!list.length) return `<li class="taste-note">${label}<br>다른 취향을 골라 봐</li>`;
  const note = list.length < 3 ? `<li class="taste-note">${label}<br>한적한 곳만 골랐어</li>` : "";
  return list.map((i) => `
    <li class="row"><a href="${placeHref(i.place, dateValue)}">
      <span class="row-name"><strong>${escapeHtml(shortName(i.place.name))}</strong>${placeSummary(i.place) ? `<span>${escapeHtml(placeSummary(i.place))}</span>` : ""}</span>
      ${i.crowd.level || isPopular(i) ? crowdOrPopBadgeHtml(i) : i.place.walkIn ? "" : `<span class="pop-label">${escapeHtml(popText(i))}</span>`}
    </a></li>`).join("") + note;
}

function tasteHtml(dateValue) {
  // 처음 열 때 첫 탭이 그날 비면 장소가 있는 첫 취향을 보여 줌 (직접 누른 탭은 그대로)
  if (!state.tastePicked) state.tasteTab = TAGS.find((t) => tasteItems(t).length) || TAGS[0];
  const list = tasteItems(state.tasteTab);
  return `
    <section class="taste sec-foam" aria-labelledby="taste-title">
      <div class="taste-head reveal">
        <h2 id="taste-title" class="section-title">취향별 속초</h2>
        <div class="tabs" role="tablist" aria-label="취향">
          ${TAGS.map((tag) => `<button type="button" class="tab" role="tab" aria-selected="${tag === state.tasteTab}" data-taste="${escapeHtml(tag)}">${escapeHtml(tagLabel(tag))}</button>`).join("")}
        </div>
      </div>
      <div class="taste-body">
        <ul id="taste-list" class="rows taste-list stagger">${tasteListHtml(list, dateValue)}</ul>
      </div>
      <button type="button" class="more-link" data-tag-all="${escapeHtml(state.tasteTab)}">${escapeHtml(tagLabel(state.tasteTab))} 다 보기</button>
    </section>`;
}

function renderHome() {
  const all = recommend(ALL_PLACES, [], "gem", state.date);
  const byId = new Map(all.map((item) => [item.place.id, item]));
  const dateValue = toDateInput(state.date);
  // 순서: 핵심(사람 많으면 여기로) → 요즘 뜨는 맛집 → 숨은 명소 → 취향별
  const alts = new Set(crowdBoard(all, 4, state.date).map((r) => r.alt.place.id));
  const gemsPart = gemsHtml(all, dateValue, alts);
  state.shownOnHome = new Set([...alts, ...[...gemsPart.matchAll(/place\.html\?id=([^&"]+)/g)].map((m) => decodeURIComponent(m[1]))]);
  els.home.innerHTML = boardHtml(all, dateValue) + hotHtml(byId, dateValue) + gemsPart + tasteHtml(dateValue);
  watchReveal(els.home);
}

function renderResults() {
  els.sortBtns.forEach((btn) => {
    const on = btn.dataset.mode === state.mode;
    btn.classList.toggle("on", on);
    btn.setAttribute("aria-checked", String(on));
  });
  // 취향 거르기 (Airbnb 필터 줄): 여러 개 골라서 좁히고, 다 끄면 첫 화면으로
  const allOn = state.tags.length === TAGS.length;
  els.filters.innerHTML = TAGS.map((tag) => {
    const on = !allOn && state.tags.includes(tag);
    return `<button type="button" class="fchip${on ? " on" : ""}" aria-pressed="${on}" data-filter="${escapeHtml(tag)}">${escapeHtml(tagLabel(tag))}</button>`;
  }).join("");
  const places = ALL_PLACES.filter((p) => matchesQuery(p, state.q));
  const sorted = recommend(places, state.tags, state.mode, state.date);
  // 검색할 땐 지점을 다 보여주고, 취향으로 볼 땐 가게당 하나만
  // 대화에서 말한 조건을 목록에도 그대로 (chat.js answer()와 같은 기준)
  const { quiet, indoor, words } = state.mood;
  const text = (i) => [i.place.name, i.place.menu, i.place.description].filter(Boolean).join(" ");
  const items = (state.q ? sorted : oneBranchEach(sorted))
    .filter((i) => !state.onlyGems || (i.gem && !i.crowd.closed))
    .filter((i) => !indoor || isIndoor(i.place))
    .filter((i) => !quiet || (i.crowd.level !== 3 && (i.crowd.level || !isPopular(i))))
    .filter((i) => !words.length || words.some((w) => text(i).includes(w)));
  const parts = [];
  if (state.onlyGems) parts.push("숨은 명소");
  if (words.length) parts.push(words.join(" · "));
  if (quiet) parts.push("한적한 곳");
  if (indoor) parts.push("실내");
  if (state.q) parts.push(`"${state.q}"`);
  if (state.tags.length && state.tags.length < TAGS.length) parts.push(state.tags.map(tagLabel).join(" · "));
  const rain = weatherOn(state.date)?.rain ? " · 비 소식이라 실내 먼저" : "";
  els.count.textContent = `${parts.join(" · ") || "전체"} ${items.length}곳${rain}`;
  const dateValue = toDateInput(state.date);
  els.grid.innerHTML = items.slice(0, state.shown).map((item) => placeRowHtml(item, dateValue)).join("");
  els.empty.hidden = items.length > 0;
  els.more.hidden = items.length <= state.shown;
  els.more.textContent = `더 보기 ${items.length - state.shown}곳`;
}

// 위쪽 날짜 옆: 고른 날 속초 날씨 (예보가 없는 날은 숨김)
function renderWeather() {
  const w = weatherOn(state.date);
  els.weather.hidden = !w;
  if (!w) return;
  els.weather.textContent = weatherText(w);
  els.weather.classList.toggle("rain", w.rain);
}

function render() {
  renderChips();
  renderWeather();
  const filtering = state.tags.length > 0 || state.q !== "";
  if (!filtering) { state.onlyGems = false; state.mood = { ...NO_MOOD }; }
  els.home.hidden = filtering;
  els.results.hidden = !filtering;
  if (filtering) renderResults();
  else renderHome();
  renderStats();
  watchReveal();
  writeUrlState();
}

function showTags(tags, mode, onlyGems = false, mood = NO_MOOD) {
  state.onlyGems = onlyGems;
  state.mood = { ...NO_MOOD, ...mood };
  state.tags = tags;
  state.mode = mode;
  state.shown = PAGE_SIZE;
  render();
  els.results.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
}

// 첫 화면 오른쪽 숫자판: 고른 날짜 기준
function renderStats() {
  const all = recommend(ALL_PLACES, [], "gem", state.date);
  const busy = all.filter((i) => i.crowd.level === 3 && i.pop.percentile >= POPULAR_MID).length; // 알림판 "사람 몰림"과 같은 기준
  const known = all.filter((i) => i.crowd.level).length;
  const gems = homeGems(all).length; // 아래 "숨은 명소 N곳"과 같은 수
  const day = formatYmd(toYmd(state.date));
  const stat = (cls, n, title, sub, unit = "") => `
    <div class="stat ${cls}"><span class="stat-label"><strong>${title}</strong><span>${sub}</span></span><span class="num"><span data-count="${n}">${n}</span>${unit ? `<small>${unit}</small>` : ""}</span></div>`;
  const box = document.getElementById("hero-stats");
  box.innerHTML =
    stat("stat-busy", busy, "핫플레이스", `${day} 혼잡 예측 ${known}곳 중`) +
    stat("stat-gem", gems, "숨은 명소", "아직 소문 안 난 명당") +
    stat("stat-live", ALL_PLACES.length, "누적 관광지 데이터", "공공데이터 기준", "곳");
  box.classList.remove("in");
}

// 취향 버튼: 그 말을 대화창에 보냄 (js/chat.js). 목록 전체는 대화 답의 "더 보기"로
els.chips.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (btn && window.chatAsk) window.chatAsk(tagLabel(btn.dataset.tag));
});

els.home.addEventListener("animationend", (e) => {
  if (!e.target.classList.contains("hot-tick")) return;
  showHotPage((Number(document.getElementById("hot-list").dataset.page) + 1) % Number(e.target.dataset.pages));
});

els.home.addEventListener("click", (e) => {
  const tab = e.target.closest("[data-taste]");
  if (tab) {
    state.tasteTab = tab.dataset.taste;
    state.tastePicked = true;
    const dateValue = toDateInput(state.date);
    els.home.querySelectorAll("[data-taste]").forEach((b) => b.setAttribute("aria-selected", String(b === tab)));
    const items = tasteItems(state.tasteTab);
    const list = document.getElementById("taste-list");
    list.innerHTML = tasteListHtml(items, dateValue);
    list.classList.remove("swapping"); void list.offsetWidth; list.classList.add("swapping");
    const all = els.home.querySelector("[data-tag-all]");
    all.dataset.tagAll = state.tasteTab;
    all.textContent = `${tagLabel(state.tasteTab)} 다 보기`;
    return;
  }
  const jump = e.target.closest("[data-jump-date]");
  if (jump) {
    state.date = parseDateInput(jump.dataset.jumpDate);
    els.date.value = jump.dataset.jumpDate;
    render();
    return;
  }
  const tagAll = e.target.closest("[data-tag-all]");
  if (tagAll) return showTags([tagAll.dataset.tagAll], "gem");
  if (e.target.closest("[data-all-gems]")) showTags([...TAGS], "gem", true);
});

els.sortBtns.forEach((btn) => btn.addEventListener("click", () => {
  state.mode = btn.dataset.mode;
  state.shown = PAGE_SIZE;
  render();
}));

els.filters.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-filter]");
  if (!btn) return;
  const tag = btn.dataset.filter;
  state.onlyGems = false;
  const current = state.tags.length === TAGS.length ? [] : state.tags; // "전체"에서 누르면 그것만
  state.tags = current.includes(tag) ? current.filter((t) => t !== tag) : [...current, tag];
  state.shown = PAGE_SIZE;
  render();
});

els.more.addEventListener("click", () => {
  state.shown += PAGE_SIZE;
  render();
});

els.date.addEventListener("change", () => {
  if (!els.date.value) { els.date.value = toDateInput(state.date); return; }
  state.date = parseDateInput(els.date.value);
  setupDate(); // 예측 기간 밖이면 기간 안으로 맞춤
  render();
});

// 브라우저 뒤로가기·앞으로가기: 주소에 담긴 화면으로 다시 그림
window.addEventListener("popstate", () => {
  readUrlState();
  setupDate();
  state.shown = PAGE_SIZE;
  shownView = viewOf();
  render();
  if (viewOf() === "home") scrollTo(0, 0);
});

readUrlState();
setupDate();
render();
