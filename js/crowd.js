// 혼잡 배지 + 유명도 계산 (실시간 아님)
// 데이터 출처가 바뀌면 이 파일만 고치면 됨. 데이터는 data/crowd-data.js (CROWD_DATA)

// 집중률 = 그 장소의 역대 최대 방문일을 100으로 놓은 값. 장소끼리 비교하면 안 됨.
// 기준값은 속초 전체 값의 33%·67% 분위수(41, 71)에 맞춘 임시값. TODO: 써보고 조정
const CROWD_BUSY = 70;
const CROWD_NORMAL = 40;

// 유명도 백분위 기준 (티맵 연관 관광지, 같은 카테고리 안에서)
const POPULAR_TOP = 0.9;
const POPULAR_MID = 0.6;

function toYmd(date) {
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}${m}${d}`;
}

// <input type="date"> 값("2026-10-03") → 로컬 Date
function parseDateInput(value) {
  const [y, m, d] = value.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function formatYmd(ymd) {
  return `${Number(ymd.slice(4, 6))}월 ${Number(ymd.slice(6, 8))}일`;
}

// 받침이 있으면 "은", 없으면 "는" (설악워터피아는 · 영금정은)
// 첫 화면(app.js)과 대화(chat.js)가 같이 써서, 둘보다 먼저 읽히는 여기에 둠
function josaEunNeun(word) {
  const code = String(word).trim().slice(-1).charCodeAt(0) - 0xac00;
  return code >= 0 && code < 11172 && code % 28 !== 0 ? "은" : "는";
}

const WEEKDAY_NAMES = ["일", "월", "화", "수", "목", "금", "토"];

// place.closed = { weekdays: [1], dates: ["01-01"], months: [12, 1, 2] } (전부 선택)
// 휴무면 이유 문장, 아니면 null
// TODO: 공휴일 월요일에 여는 곳(다음 날 휴관)은 아직 반영 안 함
function closedReason(place, date) {
  const closed = place.closed;
  if (!closed) return null;
  const month = date.getMonth() + 1;
  const mmdd = `${String(month).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  if (closed.months && closed.months.includes(month)) return `${month}월은 휴장 기간`;
  if (closed.dates && closed.dates.includes(mmdd)) return `${month}월 ${date.getDate()}일 휴관`;
  if (closed.weekdays && closed.weekdays.includes(date.getDay())) return `매주 ${WEEKDAY_NAMES[date.getDay()]}요일 휴관`;
  return null;
}

// 그 날짜에 그 장소가 자기 평소보다 붐비는지 (휴무일이면 휴관)
function crowdLevel(place, date = new Date()) {
  const closed = closedReason(place, date);
  if (closed) return { level: null, closed: true, label: "휴관", reason: closed };
  const series = place.cnctrName ? CROWD_DATA.forecast[place.cnctrName] : undefined;
  if (!series) {
    return { level: null, label: "정보 없음", reason: "혼잡 예측 데이터에 없는 곳" };
  }
  const ymd = toYmd(date);
  const rate = series[ymd];
  if (rate === undefined) {
    const [start, end] = CROWD_DATA.forecastRange;
    return { level: null, label: "정보 없음", reason: `예측 기간(${formatYmd(start)}~${formatYmd(end)}) 밖 날짜` };
  }
  const level = rate >= CROWD_BUSY ? 3 : rate >= CROWD_NORMAL ? 2 : 1;
  const label = ["", "한적", "보통", "혼잡"][level];
  return { level, label, rate: Math.round(rate), reason: `${formatYmd(ymd)} 예측: 이 장소 최대 방문일의 ${Math.round(rate)}% 수준` };
}

// 장소끼리 비교 가능한 "찾는 정도" (티맵으로 얼마나 가는지). 데이터에 없으면 0.
// 적게 찾는다고 숨은 명소는 아님 (예: 청대산). 숨은 명소는 isGem()으로 따로 판단.
function popularity(place) {
  const item = place.tmapName ? CROWD_DATA.popularity[place.tmapName] : undefined;
  if (!item) {
    // 걸어서 가는 가게처럼 내비 데이터에 원래 안 잡히는 곳은 "적게 찾는" 게 아니라 정보가 없는 것
    if (place.walkIn) return { percentile: 0, label: "걸어서 가는 가게", reason: "걸어서 가는 가게라 내비 목적지 데이터에 안 잡힘" };
    return { percentile: 0, label: "적게 찾는 곳", reason: "길찾기 목적지로 거의 안 찾는 곳" };
  }
  const label = item.percentile >= POPULAR_TOP ? "많이 찾는 곳" : item.percentile >= POPULAR_MID ? "꽤 찾는 곳" : "적게 찾는 곳";
  // 절반 위면 "상위 N%", 아래면 "하위 N%"로 (상위 98% 같은 헷갈리는 표현 방지)
  const where = item.percentile >= 0.5
    ? `상위 ${Math.max(1, Math.round((1 - item.percentile) * 100))}%`
    : `하위 ${Math.max(1, Math.round(item.percentile * 100))}%`;
  return { percentile: item.percentile, label, reason: `속초 ${item.category} 길찾기 목적지 중 ${where}` };
}

// SNS 바이럴 = 최근 30일 게시물 수 × 속초 글 비율 (data/sns-data.js). 조사 안 한 곳은 null
const VIRAL = 15;
function buzz(place) {
  const item = typeof SNS_DATA !== "undefined" ? SNS_DATA.byId[place.id] : undefined;
  return item ? item.score : null;
}
const isViral = (place) => buzz(place) >= VIRAL;
// 예측은 없어도 원래 많이 찾는 곳 (SNS 바이럴이거나 티맵 상위 10%). recommend() 항목을 받음
const isPopular = (item) => item.buzz >= VIRAL || item.pop.percentile >= POPULAR_TOP;

// 숨은 명소 = 속초시청이 관광명소로 소개하는 곳(official) 중 티맵으로는 적게 찾고, SNS에서도 뜨지 않은 곳
// place.famous: 티맵 표기가 여러 개로 갈라져 점수가 낮게 나오지만 실제로는 대표 관광지인 곳 (예: 아바이마을)
// 날짜를 주면 그날 혼잡인 곳도 숨은 명소에서 뺀다. "숨은 명소"와 "혼잡"이 한 화면에 같이 붙으면 모순이라서
// 화면에서 쓰는 곳은 모두 날짜를 넘긴다 (recommend, 상세). 이 한 곳에서 막아야 모든 화면이 같이 맞는다
// 티맵 목적지 데이터(tmapName)가 없는 곳은 "적게 찾는다"는 근거가 없으니 숨은 명소로 부르지 않음 (데이터 정직성, AGENTS.md 7)
function isGem(place, date) {
  const base = Boolean(place.official) && !place.famous && Boolean(place.tmapName) && popularity(place).percentile < POPULAR_MID && !isViral(place);
  return base && !(date && crowdLevel(place, date).level === 3);
}

// 날씨 (data/weather-data.js, 기상청 예보 약 4~10일). 예보가 없는 날은 null
function weatherOn(date) {
  return (typeof WEATHER_DATA !== "undefined" && WEATHER_DATA.days[toYmd(date)]) || null;
}
// 비 오는 날 먼저 보여줄 실내: 직접 확인한 isIndoor, 아니면 식당·카페와 관광공사 '문화시설'(박물관·서점 등)
function isIndoor(place) {
  if (typeof place.isIndoor === "boolean") return place.isIndoor;
  return ["먹거리", "카페"].includes(place.tags[0]) || place.contentTypeId === "14";
}

function crowdBadgeClass(result) {
  if (result.closed) return "badge-closed";
  return { 1: "badge-low", 2: "badge-mid", 3: "badge-high" }[result.level] || "badge-unknown";
}
