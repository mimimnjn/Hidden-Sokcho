// 목록·상세·요약 화면이 같이 쓰는 줄·배지 그리기와 움직임

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

// Date → <input type="date"> 값
function toDateInput(date) {
  const y = toYmd(date);
  return `${y.slice(0, 4)}-${y.slice(4, 6)}-${y.slice(6, 8)}`;
}

function crowdBadgeHtml(crowd) {
  return `<span class="badge ${crowdBadgeClass(crowd)}">${escapeHtml(crowd.label)}</span>`;
}

// SNS 바이럴이면 찾는 정도(티맵) 대신 최근 30일 게시물 수
// 걸어서 가는 가게는 티맵에 안 잡혀서 찾는 정도를 말할 수 없음 → 목록에서는 빈칸
function popText(item) {
  if (item.buzz >= VIRAL) return `SNS ${item.buzz}개`;
  return item.place.walkIn ? "" : item.pop.label;
}

// 날씨 한 줄: 비 오면 확률, 아니면 하늘과 낮 최고기온
function weatherText(w) {
  return w.rain ? `비 ${w.pop}%` : `${w.sky}${w.tmax !== null ? ` ${w.tmax}°` : ""}`;
}

// 혼잡 예측이 없는 곳(가게·상가 등) 중 SNS나 티맵에서 많이 찾는 곳은 "정보 없음" 대신 "인기 많음"
// 나머지 예측 없는 곳은 배지를 아예 안 붙임
function crowdOrPopBadgeHtml(item) {
  const { crowd } = item;
  if (crowd.level || crowd.closed) return crowdBadgeHtml(crowd);
  return isPopular(item) ? '<span class="badge badge-hot">인기 많음</span>' : "";
}

function gemBadgeHtml() {
  return `<span class="gem">숨은 명소</span>`;
}

// 설명이 없으면(티맵 자동 목록) 사람이 쓰는 말로 바꾼 분류를, 어색한 분류면 빈칸 (recommend.js kindLabel)
// 화면 글에는 마침표·쉼표를 쓰지 않음 (사용자 요청). 설명 문장의 . , 는 가운뎃점으로
function placeSummary(place) {
  if (!place.description) return kindLabel(place);
  let s = place.description.split(/(?<=다)\.\s+/)[0];                     // 서술체 긴 글은 첫 문장만
  s = s.replace(/[\s.,…·]+$/, "");                                          // 끝의 마침표·쉼표·말줄임
  s = s.replace(/이다$/, "").replace(/(?<=[곳소스원장관길점터산사정항촌로골길])다$/, ""); // "~명소다" → "~명소"
  return s.replace(/\.\s+|,(?!\d)\s*/g, " · ");                          // 남은 마침표·쉼표는 가운뎃점 (3,500 같은 숫자는 그대로)
}

// 관광공사 사진 주소 일부가 http라서 https로 (https 페이지에서도 뜨게)
const httpsUrl = (url) => String(url).replace(/^http:/, "https:");

// 글자 카드 (Atlas Obscura: 작은 분류 → 굵은 이름 → 한 줄 소개 → 혼잡 배지)
// 장소 사진은 화질이 제각각이라 목록에서는 쓰지 않고 상세 화면 "사진 보기"에서만
function placeCardHtml(item, dateValue) {
  const { place } = item;
  const summary = placeSummary(place);
  return `
    <a class="card" href="${placeHref(place, dateValue)}">
      <span class="card-eyebrow">${escapeHtml(place.tags.map(tagShort).join(" · "))}</span>
      <strong class="card-title">${escapeHtml(place.name)}</strong>
      ${summary ? `<span class="card-hook">${escapeHtml(summary)}</span>` : ""}
      <span class="card-foot">${crowdOrPopBadgeHtml(item)}<svg class="card-go" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6"/></svg></span>
    </a>`;
}


function placeHref(place, dateValue) {
  return `place.html?id=${encodeURIComponent(place.id)}&date=${dateValue}`;
}

// item: recommend()가 돌려준 { place, crowd, pop, gem }. 격자·비슷한 곳 목록의 한 줄
function placeRowHtml(item, dateValue) {
  const { place, gem } = item;
  const tags = place.tags.map((t) => `<span class="tag">${escapeHtml(tagShort(t))}</span>`).join("");
  const summary = item.note || placeSummary(place);
  return `
    <li class="row">
      <a href="${placeHref(place, dateValue)}">
        <span class="row-name">
          <strong>${escapeHtml(place.name)}</strong>
          ${summary ? `<span>${escapeHtml(summary)}</span>` : ""}
          <span class="meta">${tags}${popText(item) && item.crowd.level !== 3 ? `<span class="pop">${escapeHtml(popText(item))}</span>` : ""}</span>
        </span>
        <span class="badges">${crowdOrPopBadgeHtml(item)}${gem ? gemBadgeHtml() : ""}</span>
      </a>
    </li>`;
}

// ── 움직임 ──
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// 숫자가 0에서 목표값까지 올라감
// .stat-live(전체 장소 수)는 천천히 셈
function countUp(el) {
  const target = Number(el.dataset.count);
  const live = el.closest(".stat-live");
  const ms = live ? 2600 : 900;
  const finish = () => {
    el.textContent = el.dataset.count;
  };
  if (reduceMotion || !target) { finish(); return; }
  const start = performance.now();
  const step = (now) => {
    const t = Math.min(1, (now - start) / ms);
    el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)));
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
  // 탭이 가려져 프레임이 멈춰도 끝값은 꼭 보이게
  setTimeout(finish, ms + 100);
}

// .reveal·.stagger 요소가 화면에 들어오면 .in을 붙이고 안의 숫자를 올림
// IntersectionObserver는 미리보기 창 같은 곳에서 안 불릴 때가 있어서, 스크롤 위치를 직접 잼
function showNow(el) {
  el.classList.add("in");
  el.querySelectorAll("[data-count]").forEach(countUp);
}

function checkReveal() {
  const h = window.innerHeight;
  document.querySelectorAll(".reveal:not(.in), .stagger:not(.in)").forEach((el) => {
    const r = el.getBoundingClientRect();
    // 창 높이를 못 재는 환경이면 그냥 다 보여줌
    if (h < 100 || (r.top < h * 0.9 && r.bottom > 0)) showNow(el);
  });
}

let revealQueued = false;
function queueReveal() {
  if (revealQueued) return;
  revealQueued = true;
  requestAnimationFrame(() => { revealQueued = false; checkReveal(); });
  setTimeout(() => { if (revealQueued) { revealQueued = false; checkReveal(); } }, 100); // 프레임이 멈춘 환경 대비
}

if (!reduceMotion) {
  document.documentElement.classList.add("motion");
  window.addEventListener("scroll", queueReveal, { passive: true });
  window.addEventListener("resize", queueReveal);
}

// 윗줄: 바다 장면 위에서는 투명, 조금(24px) 내리면 종이색으로 채움. 움직임을 끈 사람에게도 똑같이
const overTopbar = document.querySelector(".topbar.over-scene");
function syncTopbar() {
  if (overTopbar) overTopbar.classList.toggle("solid", window.scrollY > 24);
}
if (overTopbar) {
  window.addEventListener("scroll", syncTopbar, { passive: true });
  syncTopbar();
}

function watchReveal(root = document) {
  if (reduceMotion) {
    root.querySelectorAll(".reveal, .stagger").forEach((el) => el.classList.add("in"));
    return;
  }
  checkReveal();
}
