// 시청용 요약 계산 (summary.html)

// 한 카테고리에서 점수 상위 N곳이 전체 점수의 몇 %를 차지하는지 = 쏠림 정도
function topShare(popularity, category, topN) {
  const list = Object.entries(popularity)
    .filter(([, item]) => item.category === category)
    .map(([name, item]) => ({ name, score: item.score }))
    .sort((a, b) => b.score - a.score);
  const total = list.reduce((sum, item) => sum + item.score, 0);
  const top = list.slice(0, topN);
  const topSum = top.reduce((sum, item) => sum + item.score, 0);
  return { share: total ? topSum / total : 0, count: list.length, top };
}

// 유명한 순 상위 N곳 vs CrowdFlow가 먼저 보여주는 N곳 (취향 선택 없음, 숨은 명소 우선)
// 유명도 백분위는 카테고리 안에서 매긴 값이라, 음식(카페·식당) 카테고리 장소는 빼고 관광지끼리만 비교
function famousVsRecommended(allPlaces, n, date) {
  const places = allPlaces.filter((p) => {
    const item = p.tmapName ? CROWD_DATA.popularity[p.tmapName] : undefined;
    return !item || item.category === "관광지";
  });
  const famous = [...places]
    .sort((a, b) => popularity(b).percentile - popularity(a).percentile)
    .slice(0, n);
  const recommended = recommend(places, [], "gem", date).slice(0, n).map((item) => item.place);
  return { famous, recommended };
}
