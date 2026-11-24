// 추천 정렬
// mode: "taste" = 취향 우선 (겹치는 태그 수 → 숨은 명소 → 시청 소개 명소 → 설명 확인된 곳 → 적게 찾는 순 → 이름)
//       "gem"   = 숨은 명소 우선 (숨은 명소 → 시청 소개 명소 → 설명 확인된 곳 → 겹치는 태그 수 → 적게 찾는 순 → 이름)
// 두 모드 모두 휴관인 곳은 맨 아래. 비 오는 날(기상청 예보)은 실내를 그다음으로 먼저.
// 시청 소개 명소를 이름 모를 식당보다 앞에 둬서, 단순히 방문이 적은 곳이 위로 몰리지 않게 함.

function matchCount(place, selectedTags) {
  return place.tags.filter((t) => selectedTags.includes(t)).length;
}

// 반환: [{ place, match, crowd, pop, gem }]. 태그를 안 골랐으면 전체 장소.
function recommend(places, selectedTags, mode = "taste", date = new Date()) {
  const items = places
    .map((place) => ({
      place,
      match: matchCount(place, selectedTags),
      crowd: crowdLevel(place, date),
      pop: popularity(place),
      gem: isGem(place, date),
      buzz: buzz(place),
    }))
    .filter((item) => selectedTags.length === 0 || item.match > 0);

  const byOpen = (a, b) => Number(Boolean(a.crowd.closed)) - Number(Boolean(b.crowd.closed));
  const rainy = weatherOn(date)?.rain;
  const byIndoor = (a, b) => (rainy ? Number(isIndoor(b.place)) - Number(isIndoor(a.place)) : 0);
  const byGem = (a, b) => Number(b.gem) - Number(a.gem);
  const byOfficial = (a, b) => Number(Boolean(b.place.official)) - Number(Boolean(a.place.official));
  // 설명까지 확인된 장소(data/places.js)를 티맵 자동 목록보다 앞에
  const byChecked = (a, b) => Number(Boolean(b.place.description)) - Number(Boolean(a.place.description));
  const byMatch = (a, b) => b.match - a.match;
  const byPop = (a, b) => a.pop.percentile - b.pop.percentile;
  const byName = (a, b) => a.place.name.localeCompare(b.place.name, "ko");
  const order = mode === "gem"
    ? [byOpen, byIndoor, byGem, byOfficial, byChecked, byMatch, byPop, byName]
    : [byOpen, byIndoor, byMatch, byGem, byOfficial, byChecked, byPop, byName];

  return items.sort((a, b) => {
    for (const cmp of order) {
      const diff = cmp(a, b);
      if (diff !== 0) return diff;
    }
    return 0;
  });
}

// 같은 가게의 여러 지점(본점·2호점·○○점)은 목록에서 앞에 온 하나만 남김
function brandOf(name) {
  return name.replace(/\s*\[[^\]]*\]/g, "").replace(/\s+\S*(본점|직영점|\d+호점|점)$/, "").replace(/\s/g, "");
}
function oneBranchEach(items) {
  const seen = new Set();
  return items.filter((i) => {
    const b = brandOf(i.place.name);
    if (seen.has(b)) return false;
    seen.add(b);
    return true;
  });
}

// 첫 화면 알림판: 그날 붐비는 유명한 곳 → 대신 갈 덜 붐비는 곳 (둘 다 혼잡 예측이 있는 곳만)
// 대안은 같은 태그만 (화면에 "같은 취향"이라고 씀). 1.5km 넘게 떨어진 곳, 혼잡한 곳 바로 옆은 제외, 한 곳은 한 번만
// 대안에서 빼는 곳: 원래 사람이 많은 곳(많이 찾는 곳·SNS 바이럴), 해수욕 철(6~8월)이 아닐 때의 해수욕장·해변
const isBeach = (place) => /해수욕장|해변/.test(place.name);
const isSummer = (date) => [6, 7, 8].includes(date.getMonth() + 1);
// 제철이 아닌 곳: 해수욕 철(6~8월) 밖의 해수욕장·해변, 4월 밖의 벚꽃길
function inSeason(place, date) {
  const month = date.getMonth() + 1;
  if (isBeach(place) && !isSummer(date)) return false;
  if (/벚꽃/.test(place.name) && month !== 4) return false;
  return true;
}
// 대안 기준은 몰리는 쪽 기준(POPULAR_MID)과 같게. 보통 정도로 찾는 곳이 어떤 날은 "몰리는 곳", 어떤 날은 "대신 여기"가 되지 않게
const fitsAsAlternative = (item, date) => item.pop.percentile < POPULAR_MID && !isViral(item.place) && inSeason(item.place, date);

// "다른 곳"인지: 좌표가 둘 다 있으면 1.5km 넘게 떨어져야 함. 없으면 zone이 달라야 함
// (자동 목록은 zone이 장소마다 달라서 같은 호수·같은 항구가 "다른 동네"로 나오던 문제)
const FAR_M = 1500;
function farApart(a, b) {
  if (a.lat && b.lat) return distanceM(a, b) >= FAR_M;
  return a.zone !== b.zone;
}
// 혼잡 예측이 없는 곳이 그날 혼잡인 곳 바로 옆(400m 안)이면 같이 붐빈다고 봄 (시장 옆 회센터, 항구 옆 방파제)
const NEAR_BUSY_M = 400;
function nearBusy(item, busyItems) {
  if (item.crowd.level || !item.place.lat) return false; // 자기 혼잡 예측이 있는 곳은 그 예측을 믿음
  return busyItems.some((b) => b.place.id !== item.place.id && b.place.lat && distanceM(item.place, b.place) < NEAR_BUSY_M);
}
function crowdBoard(items, n = 3, date = new Date()) {
  const busy = items
    .filter((i) => i.crowd.level === 3 && i.pop.percentile >= POPULAR_MID)
    .sort((a, b) => b.crowd.rate - a.crowd.rate)
    .slice(0, n);
  const crowded = items.filter((i) => i.crowd.level === 3);
  const calm = items
    .filter((i) => (i.crowd.level === 1 || i.crowd.level === 2) && !i.crowd.closed)
    .filter((i) => fitsAsAlternative(i, date) && !nearBusy(i, crowded))
    .sort((a, b) => a.crowd.level - b.crowd.level);
  const used = new Set();
  const alts = new Map();
  for (const b of busy) {
    const a = calm.find((c) => !used.has(c) && farApart(c.place, b.place) && c.place.tags.some((t) => b.place.tags.includes(t)));
    if (a) { used.add(a); alts.set(b, a); }
  }
  return busy.filter((b) => alts.has(b)).map((b) => ({ busy: b, alt: alts.get(b) }));
}

// 비슷한 취향의 다른 곳: 태그 1개 이상 겹침, 같은 zone 제외, 숨은 명소 우선
// 대안이니까 그날 혼잡한 곳은 아예 뺀다 (휴관은 맨 뒤). 알림판과 같은 규칙으로 유명한 곳·바이럴·철 지난 해변도 뺌
function similarPlaces(places, target, date, limit = 3) {
  const others = places.filter((p) => p.id !== target.id && farApart(p, target));
  const rank = (item) => (item.crowd.closed ? 1 : 0);
  const crowded = recommend(places, [], "gem", date).filter((i) => i.crowd.level === 3);
  return oneBranchEach(recommend(others, target.tags, "gem", date))
    .filter((i) => fitsAsAlternative(i, date) && i.crowd.level !== 3 && !nearBusy(i, crowded)) // 대안인데 그날 혼잡(이거나 그 옆)이면 모순
    .sort((a, b) => rank(a) - rank(b))
    .slice(0, limit);
}

// 두 좌표 사이 거리(m). 관광공사 좌표가 있는 곳만 (data/tour-data.js)
function distanceM(a, b) {
  const rad = (d) => (d * Math.PI) / 180;
  const dLat = rad(b.lat - a.lat);
  const dLng = rad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return Math.round(6371000 * 2 * Math.asin(Math.sqrt(h)));
}

// target 근처의 tags(기본 먹거리·카페) 장소, 가까운 순. 휴무인 곳과 maxM 밖은 뺌
// 반환: recommend() 항목 + distance(m)
function nearbyPlaces(places, target, date, { tags = ["먹거리", "카페"], maxM = 1500, limit = 3 } = {}) {
  if (!target.lat) return [];
  const near = places
    .filter((p) => p.id !== target.id && p.lat && tags.includes(p.tags[0]))
    .map((p) => ({ p, d: distanceM(target, p) }))
    .filter(({ d }) => d <= maxM);
  const dist = new Map(near.map(({ p, d }) => [p.id, d]));
  return oneBranchEach(recommend(near.map(({ p }) => p), [], "taste", date))
    .filter((i) => !i.crowd.closed)
    .map((i) => ({ ...i, distance: dist.get(i.place.id) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit);
}

// SNS 맛집 순위: 먹거리·카페 중 최근 30일 게시물 수(buzz)가 많은 순. 가게당 하나
// min: 이 수 이상만 (기본은 바이럴 기준 15개). 첫 화면은 16위까지 보여서 min을 낮춰 부른다
// items: recommend()가 돌려준 항목
function hotRestaurants(items, n = 8, min = VIRAL) {
  return oneBranchEach(items
    .filter((i) => ["먹거리", "카페"].includes(i.place.tags[0]) && i.buzz >= min)
    .sort((a, b) => b.buzz - a.buzz))
    .slice(0, n);
}

// 순위에 쓸 짧은 메뉴: 직접 적은 것 → 관광공사 대표 메뉴 첫 줄 → 분류
function hotMenu(place) {
  const menus = typeof POPULAR !== "undefined" ? POPULAR.menus : {};
  if (menus[place.id]) return menus[place.id];
  if (place.menu) return place.menu.split(/ · |\s*\/\s*/).slice(0, 2).join(" · ").replace(/\s*등$/, "");
  return kindLabel(place);
}

// 티맵 분류를 사람이 쓰는 말로. 그대로 읽으면 어색한 분류("외국식", "전문음식", "자연경관(하천/해양)")는 안 보여 줌
const KIND_WORDS = { "한식": "한식당", "카페/찻집": "카페", "테마공원": "테마공원", "도시공원": "공원", "전시시설": "전시관", "시장": "시장" };
function kindLabel(place) {
  return KIND_WORDS[place.kind] || "";
}
