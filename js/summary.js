// 시청용 요약 화면
const TOP_N = 5;
const WEEK_ORDER = [1, 2, 3, 4, 5, 6, 0]; // 월~일

const fmt = (n) => n.toLocaleString("ko-KR");

// 0부터 max를 덮는 깔끔한 눈금 (1·2·5 × 10^k 간격)
function niceTicks(max, count = 4) {
  const raw = max / count;
  const pow = 10 ** Math.floor(Math.log10(raw));
  const step = [1, 2, 5, 10].map((m) => m * pow).find((s) => s >= raw);
  const ticks = [];
  for (let v = 0; v <= max + step * 0.999; v += step) ticks.push(v);
  return ticks;
}

// 세로 막대 차트 (한 계열). 최댓값만 값 라벨, 나머지는 마우스를 올리면 툴팁
// width = 화면에 실제로 그려질 폭(px). 폭에 맞춰 그려야 글씨 크기가 일정함
function barChartSvg(items, ariaLabel, width) {
  const height = 240;
  const pad = { top: 24, right: 36, bottom: 28, left: 56 }; // 오른쪽 여백: 마지막 막대 값 라벨 자리
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;
  const max = Math.max(...items.map((i) => i.value));
  const ticks = niceTicks(max);
  const top = ticks[ticks.length - 1];
  const band = plotW / items.length;
  const barW = Math.min(24, band * 0.6);
  const y = (v) => pad.top + plotH - (v / top) * plotH;

  const grid = ticks.map((t) => `
    <line x1="${pad.left}" x2="${width - pad.right}" y1="${y(t)}" y2="${y(t)}" class="grid"/>
    <text x="${pad.left - 8}" y="${y(t)}" class="tick" text-anchor="end" dominant-baseline="middle">${fmt(t)}</text>`).join("");

  const bars = items.map((item, i) => {
    const x = pad.left + band * i + (band - barW) / 2;
    const h = Math.max(0, y(0) - y(item.value));
    const r = Math.min(4, h);
    // 위쪽만 둥글게, 바닥은 각지게
    const d = `M${x},${y(0)} V${y(item.value) + r} Q${x},${y(item.value)} ${x + r},${y(item.value)}
      H${x + barW - r} Q${x + barW},${y(item.value)} ${x + barW},${y(item.value) + r} V${y(0)} Z`;
    const isMax = item.value === max;
    return `
      <g class="bar-group">
        <title>${item.label}: ${fmt(item.value)}명</title>
        <rect x="${pad.left + band * i}" y="${pad.top}" width="${band}" height="${plotH}" class="hit"/>
        <path d="${d}" class="bar"/>
        ${isMax ? `<text x="${x + barW / 2}" y="${y(item.value) - 6}" class="value" text-anchor="middle">최고 ${fmt(item.value)}</text>` : ""}
        <text x="${x + barW / 2}" y="${height - 8}" class="tick" text-anchor="middle">${band < 36 && item.short ? item.short : item.label}</text>
      </g>`;
  }).join("");

  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${ariaLabel}">${grid}${bars}</svg>`;
}

function tableHtml(items, header) {
  return `<thead><tr><th>${header}</th><th>외지인 하루 평균</th></tr></thead><tbody>` +
    items.map((i) => `<tr><td>${i.label}</td><td>${fmt(i.value)}명</td></tr>`).join("") + "</tbody>";
}

function renderHero() {
  const t = topShare(CROWD_DATA.popularity, "관광지", TOP_N);
  document.getElementById("hero-share").textContent = `${Math.round(t.share * 100)}%`;
  document.getElementById("hero-caption").textContent =
    `길찾기 목적지 관광지 ${t.count}곳 중 상위 ${TOP_N}곳이 ${Math.round(t.share * 100)}% · ${t.top.map((x) => x.name).join(" · ")}`;
}

function renderMonthly() {
  const items = VISITOR_DATA.monthly.map((m) => ({
    label: `${Number(m.ym.slice(4, 6))}월`,
    short: String(Number(m.ym.slice(4, 6))), // 좁은 화면용 축 라벨
    value: m.avg,
  }));
  const [start, end] = VISITOR_DATA.range;
  const max = items.reduce((a, b) => (b.value > a.value ? b : a));
  const min = items.reduce((a, b) => (b.value < a.value ? b : a));
  document.getElementById("monthly-caption").textContent =
    `외지인 하루 평균 · ${start.slice(0, 4)}년 ${formatYmd(start)}~${end.slice(0, 4)}년 ${formatYmd(end)} · ${max.label}이 ${min.label}의 ${(max.value / min.value).toFixed(1)}배`;
  drawChart("monthly-chart", items, "월별 외지인 방문자 하루 평균 막대 차트");
  document.getElementById("monthly-table").innerHTML = tableHtml(items, "월");
}

const charts = [];
function drawChart(id, items, label) {
  const el = document.getElementById(id);
  const draw = () => { el.innerHTML = barChartSvg(items, label, Math.max(280, el.clientWidth)); };
  charts.push(draw);
  draw();
}
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => charts.forEach((draw) => draw()), 150);
});

function renderWeekday() {
  const names = ["일", "월", "화", "수", "목", "금", "토"];
  const items = WEEK_ORDER.map((d) => ({ label: names[d], value: VISITOR_DATA.weekday[d] }));
  const weekend = (VISITOR_DATA.weekday[0] + VISITOR_DATA.weekday[6]) / 2;
  const weekdayAvg = [1, 2, 3, 4, 5].reduce((s, d) => s + VISITOR_DATA.weekday[d], 0) / 5;
  document.getElementById("weekday-caption").textContent =
    `외지인 하루 평균 · 주말이 평일의 ${(weekend / weekdayAvg).toFixed(1)}배`;
  drawChart("weekday-chart", items, "요일별 외지인 방문자 하루 평균 막대 차트");
  document.getElementById("weekday-table").innerHTML = tableHtml(items, "요일");
}

function renderCompare() {
  const { famous, recommended } = famousVsRecommended(ALL_PLACES, TOP_N, new Date());
  const li = (p) => `<li>${escapeHtml(p.name)} <span class="pop">${escapeHtml(popularity(p).label)}</span></li>`;
  document.getElementById("famous-list").innerHTML = famous.map(li).join("");
  document.getElementById("recommended-list").innerHTML = recommended.map(li).join("");
}

renderHero();
renderMonthly();
renderWeekday();
renderCompare();
document.getElementById("summary-generated").textContent = `데이터 ${toDateInput(new Date(VISITOR_DATA.generatedAt))} 기준`;
