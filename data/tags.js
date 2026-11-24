// 취향 태그 목록 (수정 포인트 2)
// 태그를 바꾸면 data/places.js의 tags 값과 scripts/fetch-data.js의 autoTags()도 같이 맞춰야 함
const TAGS = ["바다", "자연·산책", "문화·역사", "체험", "시장", "먹거리", "카페"];

// 화면에 보이는 말: 한 단어로 짧게 ("자연·산책"처럼 가운뎃점으로 이은 분류 이름 대신)
// 데이터와 주소(?tags=)는 위 TAGS 이름을 그대로 쓰고, 보여 줄 때만 바꿈
const TAG_LABELS = { "바다": "바다", "자연·산책": "산책", "문화·역사": "문화", "체험": "체험", "시장": "시장", "먹거리": "맛집", "카페": "카페" };
const tagLabel = (tag) => TAG_LABELS[tag] || tag;
const tagShort = tagLabel;
