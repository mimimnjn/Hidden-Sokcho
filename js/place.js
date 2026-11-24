// 상세 화면
const params = new URLSearchParams(location.search);
const place = ALL_PLACES.find((p) => p.id === params.get("id"));
const dateParam = params.get("date");
const date = dateParam && /^\d{4}-\d{2}-\d{2}$/.test(dateParam) ? parseDateInput(dateParam) : new Date();
const head = document.getElementById("detail-head");
const detail = document.getElementById("detail");

// 카카오맵 검색 링크. API 키 없이 쓰는 공개 URL 방식 (카카오 데브톡 안내)
function mapUrl(p) {
  return `https://map.kakao.com/link/search/${encodeURIComponent(`속초 ${p.name}`)}`;
}

// 목록에서 들어왔으면 뒤로가기로 돌아가서 고른 취향·정렬을 유지
document.querySelector(".back").addEventListener("click", (e) => {
  if (history.length > 1) {
    e.preventDefault();
    history.back();
  }
});

// 혼잡 줄 아래 한마디. 숫자가 어떻게 계산됐는지는 쓰지 않음
const CROWD_WORDS = { 1: "한가한 날", 2: "평소 정도", 3: "사람 몰리는 날" };
const row = (label, value) => `<div class="info-row"><dt>${label}</dt><dd>${value}</dd></div>`;

if (!place) {
  head.innerHTML = `<h1 class="detail-name">없는 장소</h1><p class="detail-desc">목록에서 다시 골라 줘</p>`;
} else {
  document.title = `${place.name} · 숨은 속초`;
  const crowd = crowdLevel(place, date);
  const pop = popularity(place);
  const gem = isGem(place, date);
  const sns = buzz(place);
  const weather = weatherOn(date);
  const summary = placeSummary(place);

  // 위 파란 판: 왼쪽은 이름·소개, 오른쪽은 그날의 숫자 전광판 (넓은 화면에서 오른쪽이 비지 않게, 2026-11-24)
  const day = formatYmd(toYmd(date));
  const popular = isPopular({ pop, buzz: sns });
  const stat = (label, value, note = "") => `<div class="dstat"><dt>${label}</dt><dd>${value}${note ? `<span class="dstat-note">${note}</span>` : ""}</dd></div>`;
  const crowdStat = crowd.rate !== undefined
    ? stat(`${day} 혼잡`, `<span class="num" data-count="${crowd.rate}">${crowd.rate}</span>${crowdBadgeHtml(crowd)}`, CROWD_WORDS[crowd.level])
    : crowd.closed
      ? stat(`${day} 혼잡`, crowdBadgeHtml(crowd), escapeHtml(crowd.reason))
      : popular ? stat(`${day} 혼잡`, crowdOrPopBadgeHtml({ crowd, pop, buzz: sns }), "SNS·길찾기에서 많이 찾는 곳") : "";
  const stats = [
    crowdStat,
    place.walkIn && !place.tmapName ? "" : stat("찾는 정도", `<span class="dstat-word">${escapeHtml(pop.label)}</span>`, escapeHtml(pop.reason)),
    sns !== null ? stat("SNS", `<span class="num">${sns}</span><span class="dstat-unit">개</span>`, `${formatYmd(SNS_DATA.byId[place.id].measuredOn.replace(/-/g, ""))} 조사`) : "",
    weather ? stat(`${day} 날씨`, `<span class="dstat-word">${escapeHtml(weatherText(weather))}</span>`, weather.rain && !isIndoor(place) ? "야외라 비 오면 비추" : "") : "",
  ].filter(Boolean).join("");

  head.innerHTML = `
    <div class="detail-intro">
      ${gem ? `<p style="margin: 0 0 18px">${gemBadgeHtml()}</p>` : ""}
      <h1 class="detail-name">${escapeHtml(place.name)}</h1>
      ${summary ? `<p class="detail-desc" style="margin-top: 16px">${escapeHtml(summary)}</p>` : ""}
      <div class="detail-tags" style="margin-top: 18px">${place.tags.map((t) => `<span class="tag">${escapeHtml(tagLabel(t))}</span>`).join("")}${place.image ? '<button type="button" class="photo-btn" aria-expanded="false">사진 보기</button>' : ""}</div>
      ${place.image ? `<figure class="detail-photo-box" hidden><img alt="${escapeHtml(place.name)} 사진" loading="lazy" data-src="${escapeHtml(httpsUrl(place.image))}"><figcaption>사진 한국관광공사</figcaption></figure>` : ""}
    </div>
    ${stats ? `<dl class="detail-stats">${stats}</dl>` : ""}`;
  // 사진은 화질이 제각각이라 기본은 숨기고, 누르면 펼침
  const photoBtn = head.querySelector(".photo-btn");
  if (photoBtn) photoBtn.addEventListener("click", () => {
    const box = head.querySelector(".detail-photo-box");
    const img = box.querySelector("img");
    if (!img.src) img.src = img.dataset.src;
    box.hidden = !box.hidden;
    photoBtn.setAttribute("aria-expanded", String(!box.hidden));
    photoBtn.textContent = box.hidden ? "사진 보기" : "사진 닫기";
  });

  // 아래 정보 목록: 숫자(혼잡·찾는 정도·SNS·날씨)는 위 전광판에, 여기는 가는 데 필요한 정보만
  // 혼잡 예측도 인기도 없으면 전광판에서 줄을 빼서 "정보 없음"을 보이지 않음 (docs/design-guide.md 7번)
  detail.innerHTML = `
    <dl class="info">
      ${gem ? row("왜 숨은 명소", '<span>공식 관광지인데<br>아직 아는 사람만 가는 곳</span>') : ""}
      ${place.address ? row("주소", escapeHtml(place.address)) : ""}
      ${place.hours ? row("운영", escapeHtml(place.hours)) : ""}
      ${place.rest ? row("쉬는 날", escapeHtml(place.rest)) : ""}
      ${place.menu ? row("대표 메뉴", escapeHtml(place.menu)) : ""}
      ${place.parking ? row("주차", escapeHtml(place.parking)) : ""}
    </dl>
    <a class="map-btn" href="${mapUrl(place)}" target="_blank" rel="noopener">카카오맵에서 길 찾기</a>`;

  // 지도: 키 없이 쓰는 구글 지도 임베드(주소 검색). 길 안내는 카카오맵 버튼으로
  const map = document.getElementById("map");
  const q = place.address || `속초 ${place.name}`;
  map.innerHTML = `<iframe title="${escapeHtml(place.name)} 지도" loading="lazy" referrerpolicy="no-referrer"
    src="https://maps.google.com/maps?q=${encodeURIComponent(q)}&z=16&hl=ko&output=embed"></iframe>`;
  map.hidden = false;

  // 근처 맛집·카페 (관광공사 좌표가 있는 곳끼리, 1.5km 안)
  const nearby = nearbyPlaces(ALL_PLACES, place, date);
  if (nearby.length) {
    document.getElementById("nearby-list").innerHTML =
      nearby.map((item) => placeRowHtml({ ...item, note: [`${item.distance}m`, placeSummary(item.place)].filter(Boolean).join(" · ") }, toDateInput(date))).join("");
    document.getElementById("nearby-section").hidden = false;
  }

  const similar = similarPlaces(ALL_PLACES, place, date);
  if (similar.length) {
    const section = document.getElementById("similar-section");
    document.getElementById("similar-list").innerHTML =
      similar.map((item) => placeRowHtml(item, toDateInput(date))).join("");
    section.hidden = false;
    // 이날 사람 몰리는 곳이면 대신 갈 곳을 정보보다 먼저 (이 앱의 핵심)
    if (crowd.level === 3) {
      section.classList.add("similar-first");
      section.querySelector(".section-title").textContent = `${formatYmd(toYmd(date))} 여기 사람 많으면 여기로`;
      detail.before(section);
    }
  }
}
watchReveal();
