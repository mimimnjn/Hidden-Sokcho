// 전체 장소 = 직접 정리한 PLACES + 티맵 자동 목록 AUTO_PLACES
// 같은 장소가 PLACES에 있으면 PLACES 쪽(설명·주소·운영시간 있음)을 씀.
// 같은 장소 판단: 티맵 이름이 같거나, 띄어쓰기·[분류]를 뺀 이름이 같음 (예: 학사평 콩꽃마을 순두부촌)

// 티맵에는 음식점으로 잡히지만 이름상 시장·회센터·난전인 곳 (2026-09-28, 이름으로 판단)
const MARKET_IDS = new Set([
  "t-3ad5fbfda3b2a191d6aa3a420c3add33", // 동명활어유통센타 (동명항 활어회센터)
  "t-bc039b2d74c3112ed3f15a9eeeb44649", // 장사항활어회직판장
  "t-342a7e5f54819c27c75ecfd4e5a566da", // 아바이마을활어회센터
  "t-f5ac835ecdea7ea1b87935c445f088d5", // 속초관광수산시장회센터
  "t-a205b3c43a982b62d3e86226ef10e178", // 속초오징어난전9호 (동명항 오징어난전)
]);

// 티맵 목적지에는 잡히지만 여행지가 아닌 곳 (주민 시설). 목록에 섞이면 이상해 보임 (2026-10-05)
const NOT_FOR_TRAVELERS = /교육청|진로교육원|운동장|인조잔디|수련관|탁구클럽/;

const ALL_PLACES = (() => {
  const norm = (s) => s.replace(/\s|\[.*?\]/g, "");
  const curatedTmap = new Set(PLACES.map((p) => p.tmapName).filter(Boolean));
  const curatedName = new Set(PLACES.map((p) => norm(p.name)));
  const ids = new Set(PLACES.map((p) => p.id));
  const auto = AUTO_PLACES
    .filter((a) => !curatedTmap.has(a.tmapName) && !ids.has(a.id) && !curatedName.has(norm(a.name)))
    .filter((a) => !NOT_FOR_TRAVELERS.test(a.name))
    .map((a) => (MARKET_IDS.has(a.id) ? { ...a, tags: ["시장"] } : a));
  // 관광공사 관광정보(data/tour-data.js): 비어 있는 주소·좌표·소개·사진만 채우고, 우리 목록에 없던 관광지를 더함
  const tour = typeof TOUR_DATA !== "undefined" ? TOUR_DATA : { byId: {}, extra: [] };
  const fill = (p) => {
    // 관광공사에서 새로 들여온 곳(extra)은 소개글이 overview에 들어 있음
    if (!p.description && p.overview) p = { ...p, description: p.overview };
    // 자료에 소개가 없던 곳은 웹에서 확인한 짧은 소개 (data/descriptions.js)
    const extra = typeof EXTRA_DESCRIPTIONS !== "undefined" ? EXTRA_DESCRIPTIONS[p.id] : null;
    if (!p.description && extra) p = { ...p, description: extra };
    const t = tour.byId[p.id];
    if (!t) return p;
    return {
      ...p,
      address: p.address || t.address,
      lat: p.lat ?? t.lat,
      lng: p.lng ?? t.lng,
      description: p.description || t.overview,
      image: p.image || t.image,
      tel: p.tel || t.tel,
      hours: p.hours || t.hours,
      rest: p.rest || t.rest,
      menu: p.menu || t.menu,
      parking: p.parking || t.parking,
      contentTypeId: t.contentTypeId,
    };
  };
  // 시장은 시장 취향에만 (먹거리 목록에 시장이 섞이지 않게)
  return [...PLACES, ...auto, ...tour.extra].map(fill).map((p) =>
    p.tags.includes("시장") && p.tags.includes("먹거리") ? { ...p, tags: p.tags.filter((t) => t !== "먹거리") } : p);
})();
