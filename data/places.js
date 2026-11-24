// 장소 데이터 (수정 포인트 1)
// 규칙: 확인된 값만 채우고, 모르면 null/"" + TODO. 기억으로 채우지 않음.
// 출처 약어
//   [시청] 속초시 관광 사이트 sokcho.go.kr/ct/tour/attraction (2026-09-24 확인)
//   그 밖의 출처는 장소별 주석에 적음
//
// cnctrName: 관광지 집중률 예측 API의 장소 이름 (혼잡 배지). 없으면 null
// tmapName:  티맵 연관 관광지 API의 장소 이름 (유명도). 없으면 null
//   두 API의 이름 표기가 달라서 직접 맞춤. tests/places.test.js가 이름이 실제로 있는지 검사함.
// zone: 같은 zone끼리는 "비슷한 곳"으로 추천하지 않음.
//   출처나 사용자 확인(2026-09-24)으로 가까움이 확인된 곳만 묶음. 나머지는 장소마다 따로
// hours: 운영시간 문장. 모르면 null
// official: 속초시청 관광 사이트에 관광명소로 실린 곳. 숨은 명소 판단에 씀 (js/crowd.js isGem)
// closed: 휴무 규칙 { weekdays: [0=일..6=토], dates: ["MM-DD"], months: [1~12] }. 휴무일엔 배지가 "휴관"
const PLACES = [
  // ── 바다 ──
  {
    id: "sokcho-beach",
    official: true, // [시청] 관광명소에 실림
    name: "속초해수욕장",
    tags: ["바다"],
    zone: "속초해변",
    isIndoor: false,
    description: "공원·꽃길·송림 산책로가 있는 시내 해변. 고속버스터미널에서 걸어서 5분", // [시청]
    address: "강원특별자치도 속초시 해오름로 186", // [시청]
    hours: "상시 개방, 무료", // [시청]
    lat: null, lng: null,
    cnctrName: "속초해수욕장",
    tmapName: "속초해변",
  },
  {
    id: "sokcho-eye",
    name: "속초아이대관람차",
    tags: ["바다"],
    zone: "속초해변", // 해변에 있음 (트래비 기사)
    isIndoor: false,
    description: "높이 65m 대관람차. 동해·시내·설악산을 360도로 봄, 한 바퀴 약 15분", // 대한민국 구석구석 외 (검색 결과)
    address: "강원특별자치도 속초시 해오름로 186-1", // 속초해수욕장(186) 바로 옆
    hours: "월~금 11:00~20:00, 토 10:00~21:00, 일 10:00~20:00", // 검색 결과. TODO: 재확인
    lat: null, lng: null,
    cnctrName: null,
    tmapName: "속초아이대관람차",
  },
  {
    id: "oeongchi-beach",
    official: true, // [시청] 관광명소에 실림
    name: "외옹치해변",
    tags: ["바다"],
    zone: "속초해변", // PRD: 외옹치는 속초해수욕장과 같은 구역. [시청] "속초 해변의 연장선"
    isIndoor: false,
    description: "대포항 근처의 작은 해변(백사장 400m). 여름엔 간이 해변으로 개장", // [시청]
    address: "강원특별자치도 속초시 대포동 596-2", // [시청]
    hours: "상시 개방, 무료", // [시청]
    lat: null, lng: null,
    cnctrName: "외옹치해변",
    tmapName: "외옹치해변",
  },
  {
    id: "oeongchi-port",
    official: true, // [시청] 관광명소에 실림
    name: "외옹치항",
    tags: ["바다"],
    zone: "속초해변", // PRD: 외옹치는 속초해수욕장과 같은 구역. [시청] "속초 해변의 연장선"
    isIndoor: false,
    description: "현지인이 주로 찾는 작은 어촌 항구. 포구 전망대는 일출 보기 좋은 곳", // [시청]
    address: "강원특별자치도 속초시 대포동 728-1", // [시청]
    hours: "상시 개방, 무료", // [시청]
    lat: null, lng: null,
    cnctrName: "외옹치항",
    tmapName: "외옹치항",
  },
  {
    id: "yeonggeumjeong",
    official: true, // [시청] 관광명소에 실림
    name: "영금정",
    tags: ["바다", "문화·역사"],
    zone: "동명항", // 동명동 속초등대 바로 아래 (검색 결과)
    isIndoor: false,
    description: "파도가 석벽에 부딪치는 소리가 거문고 소리 같다는 바닷가 바위 명소", // [시청]
    address: "강원특별자치도 속초시 동명동 1-185", // [시청]
    hours: "상시 개방", // [시청]
    lat: null, lng: null,
    cnctrName: "영금정",
    tmapName: "영금정전망대",
  },
  {
    id: "dongmyeong-port",
    official: true, // [시청] 관광명소에 실림
    name: "동명항",
    tags: ["바다"],
    zone: "동명항",
    isIndoor: false,
    description: "방파제와 배들이 모인 비교적 큰 항구. 일출 명소", // [시청]
    address: "강원특별자치도 속초시 동명동 1-208", // [시청]
    hours: "상시 개방, 무료", // [시청]
    lat: null, lng: null,
    cnctrName: "동명항",
    tmapName: "동명항",
  },
  {
    id: "lighthouse-observatory",
    name: "속초등대전망대",
    tags: ["바다"],
    zone: "동명항",
    isIndoor: false,
    description: "대나무숲 데크 계단으로 오르는 등대 전망대. 동명항에서 걸어서 3분", // 트리플·트립인포 외 (검색 결과)
    address: "강원특별자치도 속초시 영금정로5길 8-28", // 검색 결과
    hours: "4~10월 06:00~20:00, 11~3월 07:00~18:00 (전시실·전망대 09:00~18:00), 무료", // 검색 결과. TODO: 재확인
    lat: null, lng: null,
    cnctrName: "속초등대전망대",
    tmapName: "속초등대전망대",
  },
  {
    id: "deungdae-beach",
    official: true, // [시청] 관광명소에 실림
    name: "등대해변",
    tags: ["바다"],
    zone: "영랑호", // 사용자 확인: 영랑호수윗길과 같은 구역
    isIndoor: false,
    description: "2004년에 처음 개방한 백사장 600m 해변", // [시청]
    address: "강원특별자치도 속초시 영랑동 148-188", // [시청]
    hours: "상시 개방, 무료", // [시청]
    lat: null, lng: null,
    cnctrName: "등대해변",
    tmapName: "등대해변",
  },
  {
    id: "jangsa-port",
    official: true, // [시청] 관광명소에 실림
    name: "장사항",
    tags: ["바다", "먹거리"],
    zone: "영랑호", // 사용자 확인: 영랑호수윗길과 같은 구역
    isIndoor: false,
    description: "횟집과 활어판매장이 모인 아담한 어항. 배낚시 체험 가능", // [시청]
    address: "강원특별자치도 속초시 장사동 550-1", // [시청]
    hours: "상시 개방, 무료", // [시청]
    lat: null, lng: null,
    cnctrName: "장사항",
    tmapName: "장사항",
  },
  {
    id: "haemaji-park",
    name: "설악해맞이공원",
    tags: ["바다", "자연·산책"],
    zone: "속초해변", // 사용자 확인: 외옹치와 같은 구역 (외옹치는 속초해변 구역)
    isIndoor: false,
    description: "바다를 배경으로 조각공원·산책길·야외공연장이 있는 해안 공원", // 트리플·강원관광 (검색 결과)
    address: "강원특별자치도 속초시 동해대로 3664 (대포동)", // 검색 결과
    hours: null,
    lat: null, lng: null,
    cnctrName: "속초 설악해맞이공원",
    tmapName: "설악해맞이공원",
  },

  // ── 자연·산책 ──
  {
    id: "cheongchoho-park",
    official: true, // [시청] 관광명소에 실림
    name: "청초호호수공원",
    tags: ["자연·산책"],
    zone: "청초호호수공원", // TODO: 확인 필요
    isIndoor: false,
    description: "1999년 엑스포가 열린 청초호변 공원. 호숫가 데크길 산책, 엑스포타워 전망", // [시청]
    address: "강원특별자치도 속초시 청초호반로 (교동, 조양동)", // [시청]
    hours: "상시 개방, 무료", // [시청]
    lat: null, lng: null,
    cnctrName: "청초호호수공원",
    tmapName: "청초호호수공원",
  },
  {
    id: "yeongnangho-bridge",
    name: "영랑호수윗길",
    tags: ["자연·산책"],
    zone: "영랑호", // 사용자 확인: 장사항·등대해변과 같은 구역
    isIndoor: false,
    description: "영랑호 위를 걷는 400m 부교 산책로. 가운데 원형 광장", // 텔트립·강원관광 (검색 결과)
    address: "강원특별자치도 속초시 영랑호반1길 49", // 검색 결과
    hours: "07:00~21:00, 연중무휴, 무료", // 검색 결과. TODO: 재확인
    lat: null, lng: null,
    cnctrName: "영랑호", // 수윗길 단독 예측은 없어서 영랑호 값을 씀
    tmapName: "영랑호수윗길",
  },
  {
    id: "cheoksan-footbath",
    official: true, // [시청] 관광명소에 실림
    name: "척산족욕공원",
    tags: ["자연·산책"],
    zone: "척산", // TODO: 확인 필요
    isIndoor: false,
    description: "척산온천의 천연 온천수로 무료 족욕을 할 수 있는 공원", // [시청]
    address: "강원특별자치도 속초시 관광로 277", // [시청]
    hours: "3~11월 운영 (하절기 09:00~17:30, 동절기 10:00~17:30), 12~2월 휴장, 무료", // [시청]
    closed: { months: [12, 1, 2] }, // [시청]
    lat: null, lng: null,
    cnctrName: "척산족욕공원",
    tmapName: "척산족욕공원",
  },
  {
    id: "seorak-hyanggiro",
    official: true, // [시청] 관광명소에 실림
    name: "설악향기로",
    tags: ["자연·산책"],
    zone: "설악동", // 사용자 확인: 신흥사와 같은 구역
    isIndoor: false,
    description: "벚꽃터널·스카이워크·출렁다리를 잇는 2.7km 순환 산책로. 밤엔 조명", // [시청]
    address: "강원특별자치도 속초시 설악동 3-4 일원", // [시청]
    hours: "3~10월 06:00~22:00, 11~2월 07:00~21:00, 연중무휴, 무료", // [시청]
    lat: null, lng: null,
    cnctrName: null,
    tmapName: "설악향기로",
  },
  {
    id: "sinheungsa",
    official: true, // [시청] 관광명소에 실림
    name: "신흥사",
    tags: ["문화·역사", "자연·산책"],
    zone: "설악동", // 사용자 확인: 설악향기로와 같은 구역
    isIndoor: false,
    description: "설악산에 있는 사찰. 극락보전·보제루 등 문화재가 많음", // [시청]
    address: "강원특별자치도 속초시 설악산로 1137", // [시청]
    hours: "상시 개방", // [시청]
    lat: null, lng: null,
    cnctrName: "신흥사(설악산)",
    tmapName: "신흥사",
  },
  {
    id: "cheongdaesan",
    name: "청대산",
    tags: ["자연·산책"],
    zone: "청대산", // TODO: 확인 필요
    isIndoor: false,
    description: "해발 230m 완만한 소나무 숲길 산. 정상에 전망대와 산림욕장", // 강원관광 외 (검색 결과)
    address: "강원특별자치도 속초시 청대로 207 (조양동)", // 검색 결과
    hours: null,
    lat: null, lng: null,
    cnctrName: "청대산",
    tmapName: "청대산산림욕장",
  },
  {
    id: "sangdomun",
    official: true, // [시청] 관광명소에 실림
    name: "상도문돌담마을",
    tags: ["문화·역사", "자연·산책"],
    zone: "상도문", // TODO: 확인 필요
    isIndoor: false,
    description: "미로 같은 돌담길 곳곳에 돌 조각 작품이 숨은 마을. 학무정 솔숲", // [시청]
    address: "강원특별자치도 속초시 도문동", // [시청]
    hours: "24시간, 무료", // [시청]
    lat: null, lng: null,
    cnctrName: "상도문돌담마을",
    tmapName: "속초시 도문동 상도문돌담마을",
  },

  // ── 먹거리·시장 ──
  {
    id: "fish-market",
    official: true, // [시청] 관광명소에 실림
    name: "속초관광수산시장",
    tags: ["시장", "먹거리"],
    zone: "청호동", // 사용자 확인: 아바이마을 갯배와 같은 구역
    isIndoor: null, // TODO: 확인 필요
    description: "순대·닭강정·젓갈 등 품목별 골목이 있는 대형 전통시장. 지하 활어회센터", // [시청]
    address: "강원특별자치도 속초시 중앙로147번길 16", // [시청]
    hours: "상시 이용 (지하 회센터는 둘째 주 수요일 휴무)", // [시청]
    lat: null, lng: null,
    cnctrName: "속초관광수산시장(구 중앙시장)",
    tmapName: "속초관광수산시장",
  },
  {
    id: "abai-village",
    official: true, // [시청] 관광명소에 실림
    name: "아바이마을",
    tags: ["문화·역사", "먹거리"],
    zone: "청호동",
    isIndoor: false,
    description: "한국전쟁 때 피난 온 함경도 실향민들이 모래사장에 세운 마을", // [시청]
    address: "강원특별자치도 속초시 청호로 122", // [시청]
    hours: "24시간", // [시청]
    lat: null, lng: null,
    cnctrName: "아바이마을",
    tmapName: "속초시 청호동 아바이마을",
    famous: true, // 티맵 표기가 갯배·벽화골목 등으로 갈라져 점수가 낮게 나옴. 실제로는 대표 관광지
  },
  {
    id: "haksapyeong-tofu",
    name: "학사평 콩꽃마을 순두부촌",
    tags: ["먹거리"],
    zone: "학사평", // TODO: 확인 필요
    isIndoor: null,
    description: "울산바위 아래 도로변에 순두부 식당 80여 곳이 모인 마을. 바닷물 간수가 특징", // 답사 블로그 dapsa.kr (검색 결과)
    address: "강원특별자치도 속초시 노학동 학사평", // 마을 단위 주소
    hours: null,
    lat: null, lng: null,
    cnctrName: "학사평 콩꽃마을 순두부촌",
    tmapName: "학사평순두부촌", // "학사평콩꽃마을순두부촌" 표기도 있지만 등장 수가 훨씬 적음
  },

  // ── 카페 ──
  {
    // 출처: 다이닝코드, 캐치테이블 (검색 결과). 사용자 추천: 속초에서 가장 유명한 카페
    id: "hieung-coffee",
    name: "히응커피",
    tags: ["카페", "먹거리"],
    zone: "히응커피", // TODO: 확인 필요
    isIndoor: true,
    description: "소금빵과 쑥 메뉴로 유명한 동네 카페. 좌석 없는 포장 전문",
    address: "강원특별자치도 속초시 밤골5길 6-1", // TODO: 재확인
    hours: null,
    lat: null, lng: null,
    cnctrName: null,
    tmapName: "히응커피",
  },
  {
    // 출처: 트립인포, 다이닝코드 (검색 결과). 1층 순두부집, 2층~루프탑 카페
    id: "cafe-gid",
    name: "카페긷",
    tags: ["카페"],
    zone: "학사평", // 주소가 원암학사평길이고 1층이 순두부집 → 순두부촌과 같은 구역으로 둠
    isIndoor: true,
    description: "통창과 루프탑에서 설악산 울산바위가 보이는 카페",
    address: "강원특별자치도 속초시 원암학사평길 60", // TODO: 재확인
    hours: null,
    lat: null, lng: null,
    cnctrName: null,
    tmapName: "카페긷",
  },
  {
    // 출처: 보사노바 커피로스터스 매장안내 (bncr.co.kr)
    id: "bossanova",
    name: "보사노바커피로스터스 속초점",
    tags: ["카페", "바다"],
    zone: "속초해변", // 속초해변 바로 앞
    isIndoor: true,
    description: "속초해변 앞 4층 건물 전체가 카페. 오션뷰·소나무숲 뷰 좌석",
    address: "강원특별자치도 속초시 해오름로 161",
    hours: "평일 09:00~22:00, 주말·공휴일 08:00~22:00",
    lat: null, lng: null,
    cnctrName: null,
    tmapName: "보사노바커피로스터스/속초점",
  },

  // ── 문화·역사 ──
  {
    id: "abai-ferry",
    official: true, // [시청] 관광명소에 실림
    name: "아바이마을 갯배",
    tags: ["문화·역사", "바다"],
    zone: "청호동",
    isIndoor: false,
    description: "시내와 아바이마을 사이 수로를 줄을 당겨 건너는 배", // [시청]
    address: "강원특별자치도 속초시 중앙부두길 51", // [시청]
    hours: null, // [시청]에 "상세내용 참고"로만 나옴
    lat: null, lng: null,
    cnctrName: "아바이마을 갯배",
    tmapName: "아바이마을갯배/청호동선착장",
  },
  {
    id: "sokcho-museum",
    official: true, // [시청] 관광명소에 실림
    name: "속초시립박물관",
    tags: ["문화·역사"],
    zone: "시립박물관", // 발해역사관과 주소가 같음
    isIndoor: true,
    description: "속초의 역사·민속문화를 전시하고 전통문화 체험실이 있는 박물관", // [시청]
    address: "강원특별자치도 속초시 신흥2길 16", // [시청]
    hours: "3~10월 09:00~18:00, 11~2월 09:00~17:00, 월요일·1월 1일 휴관", // [시청]
    closed: { weekdays: [1], dates: ["01-01"] }, // [시청]
    lat: null, lng: null,
    cnctrName: "속초시립박물관",
    tmapName: "속초시립박물관",
  },
  {
    id: "balhae-museum",
    official: true, // [시청] 관광명소에 실림
    name: "발해역사관",
    tags: ["문화·역사"],
    zone: "시립박물관", // 속초시립박물관과 같은 곳에 있음 [시청]
    isIndoor: true,
    description: "발해 역사를 전시·영상·체험실로 알아보는 역사관", // [시청]
    address: "강원특별자치도 속초시 신흥2길 16", // [시청]
    hours: "3~10월 09:00~18:00, 11~2월 09:00~17:00, 월요일·1월 1일 휴관", // [시청]
    closed: { weekdays: [1], dates: ["01-01"] }, // [시청]
    lat: null, lng: null,
    cnctrName: "발해역사관",
    tmapName: "발해역사관",
  },
  {
    id: "seokbong-ceramics",
    official: true, // [시청] 관광명소에 실림
    name: "석봉도자기미술관",
    tags: ["문화·역사"],
    zone: "석봉도자기미술관", // TODO: 확인 필요
    isIndoor: true,
    description: "8개 전시관에 도예가 석봉 조무호와 국내외 도예 작품을 전시", // [시청]
    address: "강원특별자치도 속초시 엑스포로 156", // [시청]
    hours: "09:00~18:00, 월요일 휴관, 무료", // [시청]
    closed: { weekdays: [1] }, // [시청]
    lat: null, lng: null,
    cnctrName: "석봉도자기미술관",
    tmapName: "석봉도자기미술관",
  },

  // ── [시청] 관광명소 추가분 (2026-09-24) ──
  {official: true, isIndoor: false, hours: "24시간", cnctrName: "대포항 전망대", tmapName: null, id: "daepo-observatory", name: "대포항 전망대", tags: ["바다","자연·산책"], zone: "대포항", description: "대포항 뒷산 산책로. 대포항과 울산바위가 한눈에 보임", address: "강원특별자치도 속초시 대포항1길 16-8"},
  {official: true, isIndoor: true, hours: "09:00~22:00 (입장마감 21:30)", cnctrName: "속초 엑스포타워", tmapName: "엑스포타워", id: "expo-tower", name: "엑스포타워", tags: ["문화·역사","자연·산책"], zone: "청초호호수공원", description: "청초호 옆 73.4m 전망타워. 바다·설악산·시내가 한눈에", address: "강원특별자치도 속초시 엑스포로 75"},
  {official: true, isIndoor: false, hours: null, cnctrName: null, tmapName: "설악케이블카", id: "seorak-cablecar", name: "설악산 케이블카", tags: ["자연·산책","체험"], zone: "설악동", description: "설악산 소공원에서 해발 700m 권금성까지 오가는 케이블카", address: "강원특별자치도 속초시 설악산로 1085"},
  {official: true, isIndoor: false, hours: "24시간", cnctrName: null, tmapName: null, id: "biryong-falls", name: "비룡폭포", tags: ["자연·산책"], zone: "설악동", description: "용이 승천하는 듯한 10여m 물기둥. 겨울엔 빙폭", address: "강원특별자치도 속초시 설악동"},
  {official: true, isIndoor: false, hours: null, cnctrName: null, tmapName: null, id: "yukdam-falls", name: "육담폭포", tags: ["자연·산책"], zone: "설악동", description: "토왕골 여섯 개의 깊은 소로 이어진 폭포", address: "강원특별자치도 속초시 설악동"},
  {official: true, isIndoor: false, hours: "09:00~18:00, 연중 개방, 무료", cnctrName: "설악산 자생식물원", tmapName: "설악산자생식물원", id: "native-plant-garden", name: "설악산자생식물원", tags: ["자연·산책"], zone: "노학동", description: "설악산 자생·희귀식물 122종을 모은 식물원. 수생식물원·암석원", address: "강원특별자치도 속초시 노학동 1000-56"},
  {official: true, isIndoor: true, hours: "09:00~18:00 (입장마감 17:30), 월요일·1월 1일·명절 휴관, 무료", cnctrName: null, tmapName: "국립산악박물관", id: "mountain-museum", name: "국립산악박물관", tags: ["문화·역사"], zone: "노학동", description: "우리나라 등산 역사와 산악 문화를 보여주는 박물관", address: "강원특별자치도 속초시 노학동 735-1", closed: {weekdays: [1], dates: ["01-01"]}},
  {official: true, isIndoor: true, hours: "10:00~18:00 (입장마감 17:00), 연중무휴", cnctrName: null, tmapName: "뮤지엄엑스", id: "museum-x", name: "뮤지엄 엑스", tags: ["체험","문화·역사"], zone: "뮤지엄엑스", description: "몰입형 판타지 미디어아트 전시관", address: "강원특별자치도 속초시 중앙로 338"},
  {official: true, isIndoor: true, hours: "금·토·일·공휴일 10:00~17:00, 월~목 휴무", cnctrName: "테디베어팜", tmapName: "테디베어팜", id: "teddybear-farm", name: "테디베어팜", tags: ["체험"], zone: "노학동", description: "설악산 등반, 오징어배 등 테마별 수제 테디베어 전시", address: "강원특별자치도 속초시 노학동 1073-65", closed: {weekdays: [1,2,3,4]}},
  {official: true, isIndoor: true, hours: null, cnctrName: "부엉이전시관(해피아울하우스)", tmapName: "해피아울하우스", id: "happy-owl-house", name: "해피아울하우스", tags: ["체험","문화·역사"], zone: "해피아울하우스", description: "세계 부엉이 수집품 5000여 점과 패브릭아트 부엉이 전시", address: "강원특별자치도 속초시 바람꽃마을길 118"},
  {official: true, isIndoor: true, hours: "10:00~18:00", cnctrName: "테라크랩팜", tmapName: null, id: "terra-crab-farm", name: "테라크랩팜", tags: ["체험"], zone: "학사평", description: "도둑게를 보고 만지며 배우는 게 박물관", address: "강원특별자치도 속초시 학사평2길 16"},
  {official: true, isIndoor: true, hours: "10:00~18:00", cnctrName: "속초 얼라이브 하트(Alive Heart)", tmapName: "얼라이브하트", id: "alive-heart", name: "얼라이브하트", tags: ["체험"], zone: "학사평", description: "1층 얼라이브하트, 2층 다이나믹메이즈로 된 테마파크", address: "강원특별자치도 속초시 원암학사평길 88"},
  {official: true, isIndoor: true, hours: null, cnctrName: "한화리조트 설악 워터피아", tmapName: "설악워터피아", id: "waterpia", name: "설악워터피아", tags: ["체험"], zone: "척산", description: "천연 온천수를 쓰는 사계절 워터파크와 스파", address: "강원특별자치도 속초시 미시령로2983번길 111"},
  {official: true, isIndoor: true, hours: null, cnctrName: "척산온천지구", tmapName: "척산온천휴양촌", id: "cheoksan-spa", name: "척산온천휴양촌", tags: ["체험"], zone: "척산", description: "1985년 문을 연 천연 온천. 사우나·불한증막", address: "강원특별자치도 속초시 관광로 327"},
  {official: true, isIndoor: false, hours: "상시 개방, 무료", cnctrName: "영랑호", tmapName: "영랑호", id: "yeongnangho", name: "영랑호", tags: ["자연·산책"], zone: "영랑호", description: "둘레 7.8km 자연 석호. 화랑 영랑의 전설이 전해짐", address: "강원특별자치도 속초시 장사동 산 313-1"},
  {official: true, isIndoor: false, hours: "09:00~18:00, 연중무휴, 무료", cnctrName: null, tmapName: "영랑호습지생태공원", id: "yeongnangho-wetland", name: "영랑호 습지생태공원", tags: ["자연·산책","체험"], zone: "영랑호", description: "아이 눈높이 탐방·체험 시설이 있는 습지공원", address: "강원특별자치도 속초시 장사동 418-3"},
  {official: true, isIndoor: false, hours: "09:00~18:00 (동절기 일부 폐장), 무료", cnctrName: null, tmapName: null, id: "yeongnangho-mud-path", name: "영랑호 맨발 황톳길", tags: ["자연·산책"], zone: "영랑호", description: "영랑호 입구 420m(순환 840m) 맨발 걷기 황톳길. 세족장 있음", address: "강원특별자치도 속초시 금호동 600-3 일원"},
  {official: true, isIndoor: false, hours: "09:00~18:00 (동절기 일부 폐장), 무료", cnctrName: null, tmapName: null, id: "cheongchoho-barefoot", name: "청초호유원지 맨발걷기길", tags: ["자연·산책"], zone: "청초호호수공원", description: "청초호유원지 남측 요트계류장 옆 맨발 걷기길", address: "강원특별자치도 속초시 조양동 1544-2"},
  {official: true, isIndoor: false, hours: "상시 개방", cnctrName: null, tmapName: null, id: "cheongchojeong", name: "청초정", tags: ["자연·산책","문화·역사"], zone: "청초호호수공원", description: "청초호 해상공원 정자. 야간조명과 일출 사진 명소", address: "강원특별자치도 속초시 교동 668-91"},
  {official: true, isIndoor: false, hours: "상시 개방", cnctrName: "보광사(속초)", tmapName: "보광사", id: "bogwangsa", name: "보광사", tags: ["문화·역사","자연·산책"], zone: "영랑호", description: "영랑호 주변 경관 좋은 곳에 1937년 세운 사찰", address: "강원특별자치도 속초시 영랑호반길 69-2"},
  {official: true, isIndoor: false, hours: null, cnctrName: "속초 조양동 유적", tmapName: "조양동선사유적지", id: "joyang-prehistoric", name: "조양동 선사유적지", tags: ["문화·역사"], zone: "청대산", description: "기원전 7~8세기 청동기시대 집자리 유적", address: "강원특별자치도 속초시 조양동 1529"},
  {official: true, isIndoor: false, hours: "상시 개방, 무료", cnctrName: "속초항", tmapName: "속초항", id: "sokcho-port", name: "속초항", tags: ["바다"], zone: "동명항", description: "시내에서 가장 가까운 항구. 어항이자 관광항", address: "강원특별자치도 속초시 동명동 383-1"},
  {official: true, isIndoor: false, hours: "상시 개방", cnctrName: null, tmapName: "설악항", id: "seorak-port", name: "설악항", tags: ["바다"], zone: "속초해변", description: "설악해맞이공원 안 항구. 앞은 동해, 뒤는 설악산", address: "강원특별자치도 속초시 대포동 178-75"},
  {official: true, isIndoor: false, hours: "상시 개방, 무료", cnctrName: null, tmapName: null, id: "cheongho-beach", name: "청호해수욕장", tags: ["바다"], zone: "청호동", description: "아바이마을 앞 해변. 일출과 설악·금강대교 야경", address: "강원특별자치도 속초시 청호동 청호해안길"},
  {official: true, isIndoor: false, hours: "상시 개방", cnctrName: null, tmapName: "아바이마을벽화골목", id: "abai-mural", name: "아바이마을 벽화거리", tags: ["문화·역사"], zone: "청호동", description: "실향민의 고향 그리움과 피난 여정을 그린 벽화 골목", address: "강원특별자치도 속초시 청호로 122"},
  {official: true, isIndoor: false, hours: "상시 개방, 무료", cnctrName: null, tmapName: null, id: "haeparang-45", name: "해파랑길 45코스", tags: ["바다","자연·산책"], zone: "해파랑길", description: "해맞이공원~아바이마을~등대전망대~장사항 16.9km 해안 걷기길", address: "강원특별자치도 속초시 대포동 421-51 (출발)"},
  {official: true, isIndoor: false, hours: "상시 개방", cnctrName: null, tmapName: null, id: "ssangcheon-path", name: "쌍천 제방 산책로", tags: ["자연·산책"], zone: "쌍천", description: "쌍천 둑길 2.2km 산책로. 하도문 쪽 코스모스 길", address: "강원특별자치도 속초시 대포동 881-1"},
  {official: true, isIndoor: false, hours: "상시 개방", cnctrName: null, tmapName: "설악산벚꽃터널", id: "cherry-tunnel", name: "설악산 벚꽃터널", tags: ["자연·산책"], zone: "설악동", description: "설악산 진입로 300m를 덮는 봄 벚꽃 터널", address: "강원특별자치도 속초시 도문동 6-2"},
  {official: true, isIndoor: null, hours: "제한 없음", cnctrName: null, tmapName: "속초먹거리단지", id: "food-town", name: "속초 먹거리단지", tags: ["먹거리"], zone: "먹거리단지", description: "1998년 조성된 140여 개 음식점 밀집 거리", address: "강원특별자치도 속초시 먹거리7길 1"},

  // ── 맛집·카페 (검색 결과로 확인: 식신·다이닝코드·트립인포 등. 시청 명소 아님) ──
  {isIndoor: true, cnctrName: null, id: "abai-hoe-guksu", name: "아바이회국수", tags: ["먹거리"], zone: "청호동", description: "가자미 세꼬시를 듬뿍 올린 회국수·회덮밥", address: "강원특별자치도 속초시 청호로 115-12", hours: "09:30~15:00, 16:00~19:00, 화요일 휴무", closed: {weekdays: [2]}, tmapName: "아바이회국수"},
  {isIndoor: true, cnctrName: null, id: "dancheon", name: "단천식당", tags: ["먹거리"], zone: "청호동", description: "3대째 이어온 아바이순대·명태회냉면집", address: "강원특별자치도 속초시 아바이마을길 17", hours: "08:30~19:00", tmapName: "단천식당"},
  {isIndoor: true, cnctrName: null, id: "cheongchosu", name: "청초수물회 속초본점", tags: ["먹거리"], zone: "청초호호수공원", description: "사골 육수 물회로 유명한 청초호 앞 3층 물회집", address: "강원특별자치도 속초시 엑스포로 12-36", hours: "10:00~20:50", tmapName: "청초수물회/속초본점"},
  {isIndoor: true, cnctrName: null, id: "mansuk", name: "만석닭강정 본점", tags: ["먹거리"], zone: "청초호호수공원", description: "30년 넘게 닭강정만 만든 속초 대표 닭강정집", address: "강원특별자치도 속초시 청초호반로 72", hours: "10:00~20:00", tmapName: "만석닭강정/본점"},
  {isIndoor: true, cnctrName: null, id: "bongpo-meoguri", name: "봉포머구리집", tags: ["먹거리","바다"], zone: "영랑호", description: "등대해변 앞 통유리 오션뷰 물회 전문점", address: "강원특별자치도 속초시 영랑해안길 223", hours: "10:00~21:00", tmapName: "봉포머구리집/속초본점"},
  {isIndoor: true, cnctrName: null, id: "88-grill", name: "88생선구이", tags: ["먹거리"], zone: "청호동", description: "여러 생선을 숯불에 한 번에 굽는 단일 메뉴 생선구이집. 갯배 선착장 앞", address: "강원특별자치도 속초시 중앙부두길 71", hours: "08:00~20:15 (15:00~16:30 쉼)", tmapName: "88생선구이"},
  {isIndoor: true, cnctrName: null, id: "bong-bread", name: "봉브레드", tags: ["먹거리","카페"], zone: "봉브레드", description: "마늘바게트와 연인의 빵으로 유명한 빵집", address: "강원특별자치도 속초시 동해대로 4344-1", hours: "08:30~18:30", tmapName: "봉브레드"},
  // 육구방앗간: 걸어서 가는 가게라 티맵 데이터에 없음. 주소·휴무는 다이닝코드·브런치 후기 (2026-09-27 검색)
  {isIndoor: true, cnctrName: null, id: "yukgu", name: "육구방앗간", tags: ["먹거리"], zone: "육구방앗간", description: "수제 찹쌀떡집. 번호표를 받고 기다리는 곳", address: "강원특별자치도 속초시 청학로 13", hours: null /* TODO: 후기마다 달라 재확인 */, closed: { weekdays: [4] }, tmapName: null, walkIn: true},
  {isIndoor: true, cnctrName: null, id: "shltr", name: "셜터", tags: ["카페","바다"], zone: "청호동", description: "바다 바로 앞 3층 블랙톤 오션뷰 대형 카페", address: "강원특별자치도 속초시 청호해안길 97", hours: "09:30~20:00", tmapName: "셜터"},
];
