// 자동 생성 파일. 직접 고치지 말고 `node scripts/fetch-data.js`로 다시 만들 것.
// 티맵 연관 관광지 데이터의 속초 관광지·음식점 목록. 설명·주소가 있는 장소는 data/places.js에 따로 정리
const AUTO_PLACES = [
 {
  "id": "t-2eba6ef37ac9b1344c9c466446d0072a",
  "name": "속초관광수산시장",
  "tags": [
   "시장"
  ],
  "zone": "t-2eba6ef37ac9b1344c9c466446d0072a",
  "kind": "시장",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "속초관광수산시장(구 중앙시장)",
  "tmapName": "속초관광수산시장"
 },
 {
  "id": "t-817c4a3902258090a27aca081b01743f",
  "name": "속초해변",
  "tags": [
   "바다"
  ],
  "zone": "t-817c4a3902258090a27aca081b01743f",
  "kind": "자연경관(하천/해양)",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초해변"
 },
 {
  "id": "t-db3cc7cebebdf997d8923f9eef058bda",
  "name": "영금정전망대",
  "tags": [
   "문화·역사"
  ],
  "zone": "t-db3cc7cebebdf997d8923f9eef058bda",
  "kind": "랜드마크관광",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "영금정전망대"
 },
 {
  "id": "t-db3196a2f87095a9167e0e78a64eb146",
  "name": "대포항",
  "tags": [
   "바다"
  ],
  "zone": "t-db3196a2f87095a9167e0e78a64eb146",
  "kind": "자연경관(하천/해양)",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "대포항",
  "tmapName": "대포항"
 },
 {
  "id": "t-baf749d67e3b81b71c477f64b72b2bc5",
  "name": "청초수물회 속초본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-baf749d67e3b81b71c477f64b72b2bc5",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "청초수물회/속초본점"
 },
 {
  "id": "t-3deebb46cef280e372539ec17e64302d",
  "name": "설악케이블카",
  "tags": [
   "자연·산책"
  ],
  "zone": "t-3deebb46cef280e372539ec17e64302d",
  "kind": "기타관광",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "설악케이블카"
 },
 {
  "id": "t-fea34c022ebecbfea8d29740c76ef2ca",
  "name": "동명항",
  "tags": [
   "바다"
  ],
  "zone": "t-fea34c022ebecbfea8d29740c76ef2ca",
  "kind": "자연경관(하천/해양)",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "동명항",
  "tmapName": "동명항"
 },
 {
  "id": "t-2f3fe8e9029a6dc5df920c047988dbc0",
  "name": "속초아이대관람차",
  "tags": [
   "자연·산책"
  ],
  "zone": "t-2f3fe8e9029a6dc5df920c047988dbc0",
  "kind": "기타관광",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초아이대관람차"
 },
 {
  "id": "t-b324d40a4bfac8b06c4f413dbe06db90",
  "name": "만석닭강정 본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-b324d40a4bfac8b06c4f413dbe06db90",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "만석닭강정/본점"
 },
 {
  "id": "t-aae1bab8fc2ab64d329da4a02e5f0cd0",
  "name": "봉포머구리집 속초본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-aae1bab8fc2ab64d329da4a02e5f0cd0",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "봉포머구리집/속초본점"
 },
 {
  "id": "t-bdf429cf164fa35c126cfc08dbb80395",
  "name": "영랑호",
  "tags": [
   "자연·산책"
  ],
  "zone": "t-bdf429cf164fa35c126cfc08dbb80395",
  "kind": "자연경관(하천/해양)",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "영랑호",
  "tmapName": "영랑호"
 },
 {
  "id": "t-a5412a7aa773c9760ed1b95296a8919c",
  "name": "척산온천휴양촌",
  "tags": [
   "체험"
  ],
  "zone": "t-a5412a7aa773c9760ed1b95296a8919c",
  "kind": "웰니스관광",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "척산온천휴양촌"
 },
 {
  "id": "t-3511c7c6fa8128c59140537a9bd8037c",
  "name": "속초항아리물회",
  "tags": [
   "먹거리"
  ],
  "zone": "t-3511c7c6fa8128c59140537a9bd8037c",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초항아리물회"
 },
 {
  "id": "t-b2677addd06df699ab54ddf6e161e271",
  "name": "88생선구이",
  "tags": [
   "먹거리"
  ],
  "zone": "t-b2677addd06df699ab54ddf6e161e271",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "88생선구이"
 },
 {
  "id": "t-929792c6021367471ce138baf311dcfa",
  "name": "외옹치항",
  "tags": [
   "바다"
  ],
  "zone": "t-929792c6021367471ce138baf311dcfa",
  "kind": "자연경관(하천/해양)",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "외옹치항",
  "tmapName": "외옹치항"
 },
 {
  "id": "t-ff6ee09f10e26967fd56c57f62a691cf",
  "name": "척산온천장",
  "tags": [
   "체험"
  ],
  "zone": "t-ff6ee09f10e26967fd56c57f62a691cf",
  "kind": "웰니스관광",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "척산온천장"
 },
 {
  "id": "t-c9a47022dc0d0bbb2e72dbc748e2e3cc",
  "name": "영랑호수윗길",
  "tags": [
   "자연·산책"
  ],
  "zone": "t-c9a47022dc0d0bbb2e72dbc748e2e3cc",
  "kind": "기타관광",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "영랑호수윗길"
 },
 {
  "id": "t-110d262e74a236e209c495e7e11ec854",
  "name": "청초호호수공원",
  "tags": [
   "자연·산책"
  ],
  "zone": "t-110d262e74a236e209c495e7e11ec854",
  "kind": "도시공원",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "청초호호수공원",
  "tmapName": "청초호호수공원"
 },
 {
  "id": "t-8f96b5f29c6731dd9994a136318df781",
  "name": "카페긷",
  "tags": [
   "카페"
  ],
  "zone": "t-8f96b5f29c6731dd9994a136318df781",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "카페긷"
 },
 {
  "id": "t-b387e511459f3f71f53e897dee6aee3a",
  "name": "장사항",
  "tags": [
   "바다"
  ],
  "zone": "t-b387e511459f3f71f53e897dee6aee3a",
  "kind": "자연경관(하천/해양)",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "장사항",
  "tmapName": "장사항"
 },
 {
  "id": "t-2b8d655d6c7a586bfb7fdeb9278d7f03",
  "name": "대포항수산시장",
  "tags": [
   "시장"
  ],
  "zone": "t-2b8d655d6c7a586bfb7fdeb9278d7f03",
  "kind": "시장",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "대포항수산시장"
 },
 {
  "id": "t-f3beac413fd7a42a397e88783d7f8f42",
  "name": "등대해변",
  "tags": [
   "바다"
  ],
  "zone": "t-f3beac413fd7a42a397e88783d7f8f42",
  "kind": "자연경관(하천/해양)",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "등대해변",
  "tmapName": "등대해변"
 },
 {
  "id": "t-6f43db929a4be1ff19914d26a9359b8f",
  "name": "외옹치해변",
  "tags": [
   "바다"
  ],
  "zone": "t-6f43db929a4be1ff19914d26a9359b8f",
  "kind": "자연경관(하천/해양)",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "외옹치해변",
  "tmapName": "외옹치해변"
 },
 {
  "id": "t-1c27e85dbcb000903dc9cb150372f959",
  "name": "속초시립박물관",
  "tags": [
   "문화·역사"
  ],
  "zone": "t-1c27e85dbcb000903dc9cb150372f959",
  "kind": "전시시설",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "속초시립박물관",
  "tmapName": "속초시립박물관"
 },
 {
  "id": "t-aed5a1b2f5f952735646acb325c7c5a2",
  "name": "셜터",
  "tags": [
   "카페"
  ],
  "zone": "t-aed5a1b2f5f952735646acb325c7c5a2",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "셜터"
 },
 {
  "id": "t-c8bbac94a93b9ecf3ea4cb8b5d3ffd99",
  "name": "뮤지엄엑스",
  "tags": [
   "문화·역사"
  ],
  "zone": "t-c8bbac94a93b9ecf3ea4cb8b5d3ffd99",
  "kind": "전시시설",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "뮤지엄엑스"
 },
 {
  "id": "t-7b4774d51b5c39780f7ce192f07a5369",
  "name": "가보오토종닭 [중식]",
  "tags": [
   "먹거리"
  ],
  "zone": "t-7b4774d51b5c39780f7ce192f07a5369",
  "kind": "외국식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "가보오토종닭/[중식]"
 },
 {
  "id": "t-ed7af637d563f3d1cf8c4ee49f6b8352",
  "name": "속초등대전망대",
  "tags": [
   "문화·역사"
  ],
  "zone": "t-ed7af637d563f3d1cf8c4ee49f6b8352",
  "kind": "랜드마크관광",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "속초등대전망대",
  "tmapName": "속초등대전망대"
 },
 {
  "id": "t-ca9a482d49a193a052760a1ecc3b6fda",
  "name": "남경막국수 대포항본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-ca9a482d49a193a052760a1ecc3b6fda",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "남경막국수/대포항본점"
 },
 {
  "id": "t-62935d0bd0190d781055d98751bff986",
  "name": "속초항",
  "tags": [
   "바다"
  ],
  "zone": "t-62935d0bd0190d781055d98751bff986",
  "kind": "자연경관(하천/해양)",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "속초항",
  "tmapName": "속초항"
 },
 {
  "id": "t-c2d744946d8b5dd9064e74d98e574a65",
  "name": "설악워터피아",
  "tags": [
   "체험"
  ],
  "zone": "t-c2d744946d8b5dd9064e74d98e574a65",
  "kind": "테마공원",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "설악워터피아"
 },
 {
  "id": "t-5666e0116bdafc588bfe30948cf7f8d1",
  "name": "과자의성",
  "tags": [
   "먹거리"
  ],
  "zone": "t-5666e0116bdafc588bfe30948cf7f8d1",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "과자의성"
 },
 {
  "id": "t-1e331ba80fdfd48511e8ca364dade525",
  "name": "국립산악박물관",
  "tags": [
   "문화·역사"
  ],
  "zone": "t-1e331ba80fdfd48511e8ca364dade525",
  "kind": "전시시설",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "국립산악박물관"
 },
 {
  "id": "t-a579ad4663078b8c434ca870eb4eb6ca",
  "name": "대청마루 [한식]",
  "tags": [
   "먹거리"
  ],
  "zone": "t-a579ad4663078b8c434ca870eb4eb6ca",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "대청마루/[한식]"
 },
 {
  "id": "t-6bbe07dfdd796f06edd74fd786fbaa0b",
  "name": "이모네식당",
  "tags": [
   "먹거리"
  ],
  "zone": "t-6bbe07dfdd796f06edd74fd786fbaa0b",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "이모네식당"
 },
 {
  "id": "t-6ba0c3c3a057a46b641e10ba74390634",
  "name": "설악항활어회센터",
  "tags": [
   "시장"
  ],
  "zone": "t-6ba0c3c3a057a46b641e10ba74390634",
  "kind": "시장",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "설악항활어회센터"
 },
 {
  "id": "t-8fef1af1e15c9b04056ceddd0231d21c",
  "name": "칠성조선소",
  "tags": [
   "카페"
  ],
  "zone": "t-8fef1af1e15c9b04056ceddd0231d21c",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "칠성조선소"
 },
 {
  "id": "t-940b1baf0576c2995a95ba09bb4f8a25",
  "name": "신흥사",
  "tags": [
   "문화·역사"
  ],
  "zone": "t-940b1baf0576c2995a95ba09bb4f8a25",
  "kind": "종교성지",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "신흥사(설악산)",
  "tmapName": "신흥사"
 },
 {
  "id": "t-7b0e3e1368760355dbc182a8e44f7a98",
  "name": "초당본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-7b0e3e1368760355dbc182a8e44f7a98",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "초당본점"
 },
 {
  "id": "t-2db2f5cf3221852e1665206cc5f52238",
  "name": "김영애할머니순두부 본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-2db2f5cf3221852e1665206cc5f52238",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "김영애할머니순두부/본점"
 },
 {
  "id": "t-aea513df93a1d2a137ef4dad68b3713a",
  "name": "설악산자생식물원",
  "tags": [
   "체험"
  ],
  "zone": "t-aea513df93a1d2a137ef4dad68b3713a",
  "kind": "테마공원",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "설악산 자생식물원",
  "tmapName": "설악산자생식물원"
 },
 {
  "id": "t-21a3fdc37014fdffb779753f036884ff",
  "name": "외옹치바다향기로",
  "tags": [
   "체험"
  ],
  "zone": "t-21a3fdc37014fdffb779753f036884ff",
  "kind": "기타레저스포츠",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "외옹치바다향기로"
 },
 {
  "id": "t-e9c2cbcbd4b6f93c10211dc50c1f57ae",
  "name": "엑스포타워",
  "tags": [
   "문화·역사"
  ],
  "zone": "t-e9c2cbcbd4b6f93c10211dc50c1f57ae",
  "kind": "랜드마크관광",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "속초 엑스포타워",
  "tmapName": "엑스포타워"
 },
 {
  "id": "t-c726806ac8803c3e233508b149cf2bd4",
  "name": "보사노바커피로스터스 속초점",
  "tags": [
   "카페"
  ],
  "zone": "t-c726806ac8803c3e233508b149cf2bd4",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "보사노바커피로스터스/속초점"
 },
 {
  "id": "t-e553583ef05c1685f4e5191571af4cc7",
  "name": "모녀가리비",
  "tags": [
   "먹거리"
  ],
  "zone": "t-e553583ef05c1685f4e5191571af4cc7",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "모녀가리비"
 },
 {
  "id": "t-2f76fc6493b9faec5395a0f6fd767358",
  "name": "설악향기로",
  "tags": [
   "체험"
  ],
  "zone": "t-2f76fc6493b9faec5395a0f6fd767358",
  "kind": "기타레저스포츠",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "설악향기로"
 },
 {
  "id": "t-35ec885dac3a42f35d6e8609f316d957",
  "name": "아바이회국수",
  "tags": [
   "먹거리"
  ],
  "zone": "t-35ec885dac3a42f35d6e8609f316d957",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "아바이회국수"
 },
 {
  "id": "t-708ae228a2f4efe2f07a5cc5b57888c8",
  "name": "단천식당",
  "tags": [
   "먹거리"
  ],
  "zone": "t-708ae228a2f4efe2f07a5cc5b57888c8",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "단천식당"
 },
 {
  "id": "t-6a55898faeb67dc00d8a2e7040a7b943",
  "name": "설악산소공원",
  "tags": [
   "자연·산책"
  ],
  "zone": "t-6a55898faeb67dc00d8a2e7040a7b943",
  "kind": "도시공원",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "설악산소공원"
 },
 {
  "id": "t-10f86b07384fb546a20e3bd7319dcec7",
  "name": "옛날수제비",
  "tags": [
   "먹거리"
  ],
  "zone": "t-10f86b07384fb546a20e3bd7319dcec7",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "옛날수제비"
 },
 {
  "id": "t-405fcb5c00ff68a2b5e363056c3d76f1",
  "name": "이목리막국수",
  "tags": [
   "먹거리"
  ],
  "zone": "t-405fcb5c00ff68a2b5e363056c3d76f1",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "이목리막국수"
 },
 {
  "id": "t-61c95d3d2916b3127ac95589955c48cf",
  "name": "청초호",
  "tags": [
   "자연·산책"
  ],
  "zone": "t-61c95d3d2916b3127ac95589955c48cf",
  "kind": "자연경관(하천/해양)",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "청초호",
  "tmapName": "청초호"
 },
 {
  "id": "t-0769e2e145ad676702c35d6495d15f19",
  "name": "봉브레드",
  "tags": [
   "먹거리"
  ],
  "zone": "t-0769e2e145ad676702c35d6495d15f19",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "봉브레드"
 },
 {
  "id": "t-4c73343de61678818001e357a1d670a2",
  "name": "콩서리",
  "tags": [
   "먹거리"
  ],
  "zone": "t-4c73343de61678818001e357a1d670a2",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "콩서리"
 },
 {
  "id": "t-ad5d69377d352ad40209e23adccdccd3",
  "name": "섭죽마을",
  "tags": [
   "먹거리"
  ],
  "zone": "t-ad5d69377d352ad40209e23adccdccd3",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "섭죽마을"
 },
 {
  "id": "t-4b50c926b50408af03b4732c17f37fc4",
  "name": "오복식당 속초본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-4b50c926b50408af03b4732c17f37fc4",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "오복식당/속초본점"
 },
 {
  "id": "t-fa83d01dc64c56538811f294625f2096",
  "name": "김정옥할머니순두부 본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-fa83d01dc64c56538811f294625f2096",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "김정옥할머니순두부/본점"
 },
 {
  "id": "t-b6e41b35c3dc71a52bc8b0858f4b9022",
  "name": "다이나믹메이즈 속초점",
  "tags": [
   "체험"
  ],
  "zone": "t-b6e41b35c3dc71a52bc8b0858f4b9022",
  "kind": "테마공원",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "다이나믹메이즈/속초점"
 },
 {
  "id": "t-9151f448d2838a80fd7aae8f5081976f",
  "name": "척산족욕공원",
  "tags": [
   "자연·산책"
  ],
  "zone": "t-9151f448d2838a80fd7aae8f5081976f",
  "kind": "도시공원",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "척산족욕공원",
  "tmapName": "척산족욕공원"
 },
 {
  "id": "t-2d4b0d3642076952f570c59c9174860a",
  "name": "완도회식당",
  "tags": [
   "먹거리"
  ],
  "zone": "t-2d4b0d3642076952f570c59c9174860a",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "완도회식당"
 },
 {
  "id": "t-c141af12f361e51f3133bb2491a9c847",
  "name": "고궁회관",
  "tags": [
   "먹거리"
  ],
  "zone": "t-c141af12f361e51f3133bb2491a9c847",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "고궁회관"
 },
 {
  "id": "t-39374f5548ae2e9631d7ca4ab8e4df19",
  "name": "속초해녀마을(바람꽃해녀마을)",
  "tags": [
   "먹거리"
  ],
  "zone": "t-39374f5548ae2e9631d7ca4ab8e4df19",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초해녀마을(바람꽃해녀마을)"
 },
 {
  "id": "t-a47f202775e4db47266653cee92bb92d",
  "name": "사돈집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-a47f202775e4db47266653cee92bb92d",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "사돈집"
 },
 {
  "id": "t-25a4436aca37624484693e0c3657b610",
  "name": "어나더블루",
  "tags": [
   "카페"
  ],
  "zone": "t-25a4436aca37624484693e0c3657b610",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "어나더블루"
 },
 {
  "id": "t-8fb8e774675050fab97d4afe1f6b8ad9",
  "name": "바다담다",
  "tags": [
   "카페"
  ],
  "zone": "t-8fb8e774675050fab97d4afe1f6b8ad9",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "바다담다"
 },
 {
  "id": "t-6c72c7e0269d6771dab69b9dcc7b044c",
  "name": "송정희어머니순두부",
  "tags": [
   "먹거리"
  ],
  "zone": "t-6c72c7e0269d6771dab69b9dcc7b044c",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "송정희어머니순두부"
 },
 {
  "id": "t-ba245cf0771d37cd6741e9b8958aac8c",
  "name": "최옥란할머니순두부",
  "tags": [
   "먹거리"
  ],
  "zone": "t-ba245cf0771d37cd6741e9b8958aac8c",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "최옥란할머니순두부"
 },
 {
  "id": "t-5bed4dc49e968573edf78eae2aad10a0",
  "name": "시드누아 속초점",
  "tags": [
   "카페"
  ],
  "zone": "t-5bed4dc49e968573edf78eae2aad10a0",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "시드누아/속초점"
 },
 {
  "id": "t-b59f15d4c25fe8f3cefca9e4d1368957",
  "name": "범바위막국수",
  "tags": [
   "먹거리"
  ],
  "zone": "t-b59f15d4c25fe8f3cefca9e4d1368957",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "범바위막국수"
 },
 {
  "id": "t-0c98a361f1cc0f7e8280b4c3a1bd373e",
  "name": "설악누리길",
  "tags": [
   "체험"
  ],
  "zone": "t-0c98a361f1cc0f7e8280b4c3a1bd373e",
  "kind": "기타레저스포츠",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "설악누리길"
 },
 {
  "id": "t-63ba9fe0b36983d821fb9ccac28e410a",
  "name": "강릉동화가든짬뽕순두부 속초점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-63ba9fe0b36983d821fb9ccac28e410a",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "강릉동화가든짬뽕순두부/속초점"
 },
 {
  "id": "t-131d5bb77a11259b01f71fe982fe0760",
  "name": "동명항생선숯불구이",
  "tags": [
   "먹거리"
  ],
  "zone": "t-131d5bb77a11259b01f71fe982fe0760",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "동명항생선숯불구이"
 },
 {
  "id": "t-f93b9bd01dcacbc81bdc1d6ab03595dc",
  "name": "미가",
  "tags": [
   "먹거리"
  ],
  "zone": "t-f93b9bd01dcacbc81bdc1d6ab03595dc",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "미가"
 },
 {
  "id": "t-3368986bdca0efedda1eda8d39b3ae6c",
  "name": "권금성",
  "tags": [
   "문화·역사"
  ],
  "zone": "t-3368986bdca0efedda1eda8d39b3ae6c",
  "kind": "역사유적지",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "권금성"
 },
 {
  "id": "t-5b0e881468744810b58def75f03e9c97",
  "name": "치커리생구이",
  "tags": [
   "먹거리"
  ],
  "zone": "t-5b0e881468744810b58def75f03e9c97",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "치커리생구이"
 },
 {
  "id": "t-5870d153811365621a6c247fac74958b",
  "name": "설악산로한우",
  "tags": [
   "먹거리"
  ],
  "zone": "t-5870d153811365621a6c247fac74958b",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "설악산로한우"
 },
 {
  "id": "t-6b921127d045b6d9400c6d10b646340d",
  "name": "전원식당",
  "tags": [
   "먹거리"
  ],
  "zone": "t-6b921127d045b6d9400c6d10b646340d",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "전원식당"
 },
 {
  "id": "t-37d22898d24b95f1b57d0ea33ab189b0",
  "name": "속초생대구",
  "tags": [
   "먹거리"
  ],
  "zone": "t-37d22898d24b95f1b57d0ea33ab189b0",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초생대구"
 },
 {
  "id": "t-ac4fabb731f8dec2121dae6f25898717",
  "name": "송도물회",
  "tags": [
   "먹거리"
  ],
  "zone": "t-ac4fabb731f8dec2121dae6f25898717",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "송도물회"
 },
 {
  "id": "t-b228768ba7488232d5beee7522af2eeb",
  "name": "황가네찜",
  "tags": [
   "먹거리"
  ],
  "zone": "t-b228768ba7488232d5beee7522af2eeb",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "황가네찜"
 },
 {
  "id": "t-7d36344eb5b3ec9632653c5a0423c1a7",
  "name": "승진호홍게무한리필",
  "tags": [
   "먹거리"
  ],
  "zone": "t-7d36344eb5b3ec9632653c5a0423c1a7",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "승진호홍게무한리필"
 },
 {
  "id": "t-429d9e7fc18780c9deba402256e69d99",
  "name": "초당커피정미소 속초점",
  "tags": [
   "카페"
  ],
  "zone": "t-429d9e7fc18780c9deba402256e69d99",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "초당커피정미소/속초점"
 },
 {
  "id": "t-eec6248f6607038fc003df72b3ec3b3d",
  "name": "황대구탕",
  "tags": [
   "먹거리"
  ],
  "zone": "t-eec6248f6607038fc003df72b3ec3b3d",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "황대구탕"
 },
 {
  "id": "t-a66cbd9bed5f0616ea16d44d943b4d00",
  "name": "회가",
  "tags": [
   "먹거리"
  ],
  "zone": "t-a66cbd9bed5f0616ea16d44d943b4d00",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "회가"
 },
 {
  "id": "t-16ec3a15206333e6f9b8827e42a0e758",
  "name": "신다신",
  "tags": [
   "먹거리"
  ],
  "zone": "t-16ec3a15206333e6f9b8827e42a0e758",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "신다신"
 },
 {
  "id": "t-76a473fd661b5788a54dede5a4f7b987",
  "name": "청초호유원지",
  "tags": [
   "체험"
  ],
  "zone": "t-76a473fd661b5788a54dede5a4f7b987",
  "kind": "복합관광시설",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "청초호유원지"
 },
 {
  "id": "t-3f8690ad4e26ef8feff2abc43a2020ee",
  "name": "속초751샌드위치",
  "tags": [
   "먹거리"
  ],
  "zone": "t-3f8690ad4e26ef8feff2abc43a2020ee",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초751샌드위치"
 },
 {
  "id": "t-330be6ed381d932162c2d92c6e6656f7",
  "name": "백일칼국수 속초점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-330be6ed381d932162c2d92c6e6656f7",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "백일칼국수/속초점"
 },
 {
  "id": "t-1b5e58b72d2ae43cd9e180fe8371f9af",
  "name": "속초시 청호동 아바이마을",
  "tags": [
   "문화·역사"
  ],
  "zone": "t-1b5e58b72d2ae43cd9e180fe8371f9af",
  "kind": "역사유적지",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초시 청호동 아바이마을"
 },
 {
  "id": "t-2093587538a8ff8507956b4f4f8c0168",
  "name": "카페 설악산로",
  "tags": [
   "카페"
  ],
  "zone": "t-2093587538a8ff8507956b4f4f8c0168",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "카페 설악산로"
 },
 {
  "id": "t-8a11cf7dc2d9641febf4e83e7ef620d7",
  "name": "속초교동짬뽕 본점 [중식]",
  "tags": [
   "먹거리"
  ],
  "zone": "t-8a11cf7dc2d9641febf4e83e7ef620d7",
  "kind": "외국식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초교동짬뽕/본점 [중식]"
 },
 {
  "id": "t-164c56de0de28d9a09a2cd190e5a4362",
  "name": "왕가수라청 [한식]",
  "tags": [
   "먹거리"
  ],
  "zone": "t-164c56de0de28d9a09a2cd190e5a4362",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "왕가수라청/[한식]"
 },
 {
  "id": "t-8136a5f5a45da863e4160a73831922a8",
  "name": "황태만상",
  "tags": [
   "먹거리"
  ],
  "zone": "t-8136a5f5a45da863e4160a73831922a8",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "황태만상"
 },
 {
  "id": "t-5cba5e300bfe98bc484c41350e9352d6",
  "name": "만석닭강정 시장1호점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-5cba5e300bfe98bc484c41350e9352d6",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "만석닭강정/시장1호점"
 },
 {
  "id": "t-37267ebed35d0058d4f31b004b1a45fb",
  "name": "정든식당",
  "tags": [
   "먹거리"
  ],
  "zone": "t-37267ebed35d0058d4f31b004b1a45fb",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "정든식당"
 },
 {
  "id": "t-874a2c5170fdff9632ff51b0ba45ff2c",
  "name": "간이해변",
  "tags": [
   "바다"
  ],
  "zone": "t-874a2c5170fdff9632ff51b0ba45ff2c",
  "kind": "자연경관(하천/해양)",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "간이해변"
 },
 {
  "id": "t-2625e810b124388e310c10e008df564f",
  "name": "얼라이브하트",
  "tags": [
   "체험"
  ],
  "zone": "t-2625e810b124388e310c10e008df564f",
  "kind": "테마공원",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "속초 얼라이브 하트(Alive Heart)",
  "tmapName": "얼라이브하트"
 },
 {
  "id": "t-8bc57273424d5676ed54ebc533e1b4dd",
  "name": "마리스텔라",
  "tags": [
   "카페"
  ],
  "zone": "t-8bc57273424d5676ed54ebc533e1b4dd",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "마리스텔라"
 },
 {
  "id": "t-820733a44e6e3ad54398c2f811dd7e0e",
  "name": "속초항찜",
  "tags": [
   "먹거리"
  ],
  "zone": "t-820733a44e6e3ad54398c2f811dd7e0e",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초항찜"
 },
 {
  "id": "t-4df33e5ec0ca42b8153d0cf190ab24d4",
  "name": "단천면옥",
  "tags": [
   "먹거리"
  ],
  "zone": "t-4df33e5ec0ca42b8153d0cf190ab24d4",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "단천면옥"
 },
 {
  "id": "t-86d994c02f6519f4e609e768837ba1f3",
  "name": "돈우마을",
  "tags": [
   "먹거리"
  ],
  "zone": "t-86d994c02f6519f4e609e768837ba1f3",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "돈우마을"
 },
 {
  "id": "t-c15147af37917abdd19ef98296c4a28a",
  "name": "화진호이선장네",
  "tags": [
   "먹거리"
  ],
  "zone": "t-c15147af37917abdd19ef98296c4a28a",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "화진호이선장네"
 },
 {
  "id": "t-65128276dc8ca9a2c80991b13561f658",
  "name": "속초시 도문동 상도문돌담마을",
  "tags": [
   "문화·역사"
  ],
  "zone": "t-65128276dc8ca9a2c80991b13561f658",
  "kind": "역사유적지",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초시 도문동 상도문돌담마을"
 },
 {
  "id": "t-cadd1967d41d1061250ce4dbc977032e",
  "name": "신유네회박스포장",
  "tags": [
   "먹거리"
  ],
  "zone": "t-cadd1967d41d1061250ce4dbc977032e",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "신유네회박스포장"
 },
 {
  "id": "t-8027f144f128f2251e45b53ecfc01a45",
  "name": "속초탑골막국수 본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-8027f144f128f2251e45b53ecfc01a45",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초탑골막국수/본점"
 },
 {
  "id": "t-1320c420c04e39a7997dadc76eb437c5",
  "name": "또만나식당",
  "tags": [
   "먹거리"
  ],
  "zone": "t-1320c420c04e39a7997dadc76eb437c5",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "또만나식당"
 },
 {
  "id": "t-a133a94c57e4afa524f550bf22896251",
  "name": "풍년식당",
  "tags": [
   "먹거리"
  ],
  "zone": "t-a133a94c57e4afa524f550bf22896251",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "풍년식당"
 },
 {
  "id": "t-53be99bd80e6184c26ac7cba4592347e",
  "name": "히응커피",
  "tags": [
   "카페"
  ],
  "zone": "t-53be99bd80e6184c26ac7cba4592347e",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "히응커피"
 },
 {
  "id": "t-15315b6a84875d3d3c9afb3e5eb44318",
  "name": "88순대국",
  "tags": [
   "먹거리"
  ],
  "zone": "t-15315b6a84875d3d3c9afb3e5eb44318",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "88순대국"
 },
 {
  "id": "t-8c26dd8c63d5ebbee254b605919e6045",
  "name": "금이야옥이야",
  "tags": [
   "먹거리"
  ],
  "zone": "t-8c26dd8c63d5ebbee254b605919e6045",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "금이야옥이야"
 },
 {
  "id": "t-053fa787f0fd5b8fc1dc3c3ef7534cef",
  "name": "흰다정",
  "tags": [
   "카페"
  ],
  "zone": "t-053fa787f0fd5b8fc1dc3c3ef7534cef",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "흰다정"
 },
 {
  "id": "t-350acb9ac14abdd93fe93e3b3a16580e",
  "name": "속초팔도전복해물뚝배기",
  "tags": [
   "먹거리"
  ],
  "zone": "t-350acb9ac14abdd93fe93e3b3a16580e",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초팔도전복해물뚝배기"
 },
 {
  "id": "t-6c26f73288f577b60ec7614e5d53269e",
  "name": "웨일라잇",
  "tags": [
   "카페"
  ],
  "zone": "t-6c26f73288f577b60ec7614e5d53269e",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "웨일라잇"
 },
 {
  "id": "t-d5959c3efd0817a94f52d9b1a513ab52",
  "name": "감자바우",
  "tags": [
   "먹거리"
  ],
  "zone": "t-d5959c3efd0817a94f52d9b1a513ab52",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "감자바우"
 },
 {
  "id": "t-f030b32605045cdbd8521c03a64323fb",
  "name": "키친온유",
  "tags": [
   "먹거리"
  ],
  "zone": "t-f030b32605045cdbd8521c03a64323fb",
  "kind": "외국식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "키친온유"
 },
 {
  "id": "t-7958fe0a65384832e2064b52c3b55a1d",
  "name": "설악해맞이공원",
  "tags": [
   "자연·산책"
  ],
  "zone": "t-7958fe0a65384832e2064b52c3b55a1d",
  "kind": "도시공원",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "속초 설악해맞이공원",
  "tmapName": "설악해맞이공원"
 },
 {
  "id": "t-9716eb69287e6ca6f89b9ee8b90eae8a",
  "name": "속초섭국 본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-9716eb69287e6ca6f89b9ee8b90eae8a",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초섭국/본점"
 },
 {
  "id": "t-04b667f05e542b11cdc52fad41542ec5",
  "name": "일월횟집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-04b667f05e542b11cdc52fad41542ec5",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "일월횟집"
 },
 {
  "id": "t-f1c5c40151ed8162e633357229dcd617",
  "name": "다빈치뮤지엄",
  "tags": [
   "문화·역사"
  ],
  "zone": "t-f1c5c40151ed8162e633357229dcd617",
  "kind": "전시시설",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "다빈치뮤지엄"
 },
 {
  "id": "t-1089f5d76b435cd8044d39d8eda93bf2",
  "name": "설악본가설렁탕",
  "tags": [
   "먹거리"
  ],
  "zone": "t-1089f5d76b435cd8044d39d8eda93bf2",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "설악본가설렁탕"
 },
 {
  "id": "t-be4d1b66a025710b530173dba6cf5405",
  "name": "범바위",
  "tags": [
   "자연·산책"
  ],
  "zone": "t-be4d1b66a025710b530173dba6cf5405",
  "kind": "기타관광",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "범바위"
 },
 {
  "id": "t-fb7d3e33f58a3bacd9ab7765a495cca6",
  "name": "강릉초당골짬뽕순두부 속초점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-fb7d3e33f58a3bacd9ab7765a495cca6",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "강릉초당골짬뽕순두부/속초점"
 },
 {
  "id": "t-ee4b1e9e6f811517d428c66d82e21eda",
  "name": "테디베어팜",
  "tags": [
   "문화·역사"
  ],
  "zone": "t-ee4b1e9e6f811517d428c66d82e21eda",
  "kind": "전시시설",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "테디베어팜",
  "tmapName": "테디베어팜"
 },
 {
  "id": "t-a403029f5aa8f639e42f54677b37ea82",
  "name": "바담생선구이 속초본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-a403029f5aa8f639e42f54677b37ea82",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "바담생선구이/속초본점"
 },
 {
  "id": "t-26916e1fe735afde9c4a41dd18781c47",
  "name": "한스키친회포장",
  "tags": [
   "먹거리"
  ],
  "zone": "t-26916e1fe735afde9c4a41dd18781c47",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "한스키친회포장"
 },
 {
  "id": "t-7d382477bd33e000ce443716bc83137a",
  "name": "석봉도자기미술관",
  "tags": [
   "문화·역사"
  ],
  "zone": "t-7d382477bd33e000ce443716bc83137a",
  "kind": "전시시설",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "석봉도자기미술관",
  "tmapName": "석봉도자기미술관"
 },
 {
  "id": "t-7bad15b40b058088fa3a02b786560a98",
  "name": "베이커리가루 속초점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-7bad15b40b058088fa3a02b786560a98",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "베이커리가루/속초점"
 },
 {
  "id": "t-47c674d5c99cdf479c966a65b0b3aa4a",
  "name": "영랑호수공원",
  "tags": [
   "자연·산책"
  ],
  "zone": "t-47c674d5c99cdf479c966a65b0b3aa4a",
  "kind": "도시공원",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "영랑호수공원"
 },
 {
  "id": "t-969f3785bbd7d632e639557f93e81c85",
  "name": "바다제면 속초본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-969f3785bbd7d632e639557f93e81c85",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "바다제면/속초본점"
 },
 {
  "id": "t-9128aae3cad3b58d4dd538c947ae7fd1",
  "name": "하도문속초",
  "tags": [
   "카페"
  ],
  "zone": "t-9128aae3cad3b58d4dd538c947ae7fd1",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "하도문속초"
 },
 {
  "id": "t-876f35151b5a180b191859fbb6a6ee6f",
  "name": "중앙닭강정 엑스포직영점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-876f35151b5a180b191859fbb6a6ee6f",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "중앙닭강정/엑스포직영점"
 },
 {
  "id": "t-4569f48f070c1f1ef4c1032b1f94963a",
  "name": "옛고을순두부",
  "tags": [
   "먹거리"
  ],
  "zone": "t-4569f48f070c1f1ef4c1032b1f94963a",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "옛고을순두부"
 },
 {
  "id": "t-85cc534f10727bb19cf116c7254cab2d",
  "name": "한성칼국수",
  "tags": [
   "먹거리"
  ],
  "zone": "t-85cc534f10727bb19cf116c7254cab2d",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "한성칼국수"
 },
 {
  "id": "t-793650922627bf88a2a63aa1ef865bc8",
  "name": "학사평순두부촌",
  "tags": [
   "먹거리"
  ],
  "zone": "t-793650922627bf88a2a63aa1ef865bc8",
  "kind": "음식점기타",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "학사평순두부촌"
 },
 {
  "id": "t-b7256984e987d860980408c10a463c14",
  "name": "구구집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-b7256984e987d860980408c10a463c14",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "구구집"
 },
 {
  "id": "t-1730491eb54cf89666f0b01976124f00",
  "name": "우동당",
  "tags": [
   "먹거리"
  ],
  "zone": "t-1730491eb54cf89666f0b01976124f00",
  "kind": "외국식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "우동당"
 },
 {
  "id": "t-0a44b9bd667251167a68bb4ecbc01a22",
  "name": "공가네감자옹심이 속초점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-0a44b9bd667251167a68bb4ecbc01a22",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "공가네감자옹심이/속초점"
 },
 {
  "id": "t-6ed0c5da90ae38d84935391158acfa64",
  "name": "라또래요",
  "tags": [
   "카페"
  ],
  "zone": "t-6ed0c5da90ae38d84935391158acfa64",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "라또래요"
 },
 {
  "id": "t-357c9980f66fa70a920c6696b14380c9",
  "name": "감나무집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-357c9980f66fa70a920c6696b14380c9",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "감나무집"
 },
 {
  "id": "t-2e4fcc7e192791bf7b3f6190eef75dc2",
  "name": "청호동방파제",
  "tags": [
   "바다"
  ],
  "zone": "t-2e4fcc7e192791bf7b3f6190eef75dc2",
  "kind": "자연경관(하천/해양)",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "청호동방파제"
 },
 {
  "id": "t-d0b9908720448ac9cc892a41cdeb3eaa",
  "name": "속초카페바다봄",
  "tags": [
   "카페"
  ],
  "zone": "t-d0b9908720448ac9cc892a41cdeb3eaa",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초카페바다봄"
 },
 {
  "id": "t-ee1f170c44d9c3c2ca11ab153964092b",
  "name": "그리운보리밥",
  "tags": [
   "먹거리"
  ],
  "zone": "t-ee1f170c44d9c3c2ca11ab153964092b",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "그리운보리밥"
 },
 {
  "id": "t-9549395837a16feb28bf8fee1fb12f2d",
  "name": "유진게찜",
  "tags": [
   "먹거리"
  ],
  "zone": "t-9549395837a16feb28bf8fee1fb12f2d",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "유진게찜"
 },
 {
  "id": "t-d579f1accb8ed7f3e60b92d610d78e29",
  "name": "갯배가을동화생선구이",
  "tags": [
   "먹거리"
  ],
  "zone": "t-d579f1accb8ed7f3e60b92d610d78e29",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "갯배가을동화생선구이"
 },
 {
  "id": "t-c3de6f84073062ea8e02f20277cbff74",
  "name": "등대생선구이",
  "tags": [
   "먹거리"
  ],
  "zone": "t-c3de6f84073062ea8e02f20277cbff74",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "등대생선구이"
 },
 {
  "id": "t-5eb0b82c44ba94346ca6bc3c183185d1",
  "name": "카페우디",
  "tags": [
   "카페"
  ],
  "zone": "t-5eb0b82c44ba94346ca6bc3c183185d1",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "카페우디"
 },
 {
  "id": "t-2820de79840d69b9e0089e5dc60e0ee1",
  "name": "샤브올데이 속초점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-2820de79840d69b9e0089e5dc60e0ee1",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "샤브올데이/속초점"
 },
 {
  "id": "t-bdf205bbfd35d08933a8a41795dd3b7c",
  "name": "함흥냉면옥",
  "tags": [
   "먹거리"
  ],
  "zone": "t-bdf205bbfd35d08933a8a41795dd3b7c",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "함흥냉면옥"
 },
 {
  "id": "t-1bd04879f2c44736c7acc8e3a119e233",
  "name": "시골할머니나물밥 속초설악산점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-1bd04879f2c44736c7acc8e3a119e233",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "시골할머니나물밥/속초설악산점"
 },
 {
  "id": "t-10a0ace76a93b3bee8931555627e5fe1",
  "name": "달달공장",
  "tags": [
   "먹거리"
  ],
  "zone": "t-10a0ace76a93b3bee8931555627e5fe1",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "달달공장"
 },
 {
  "id": "t-5b88a046fe9c4002fa7168703d598752",
  "name": "오베르망 본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-5b88a046fe9c4002fa7168703d598752",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "오베르망/본점"
 },
 {
  "id": "t-7f75ac8a17bdf422a3d0449cbbff51c2",
  "name": "청룡호선장네집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-7f75ac8a17bdf422a3d0449cbbff51c2",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "청룡호선장네집"
 },
 {
  "id": "t-e002053776804eaf3144eaaea7512373",
  "name": "속초옥수수소금빵",
  "tags": [
   "카페"
  ],
  "zone": "t-e002053776804eaf3144eaaea7512373",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초옥수수소금빵"
 },
 {
  "id": "t-d7de296c8a3e47e3342f993fa2c205e2",
  "name": "카페너래",
  "tags": [
   "카페"
  ],
  "zone": "t-d7de296c8a3e47e3342f993fa2c205e2",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "카페너래"
 },
 {
  "id": "t-bb69201f1a043e1ee32dd96e8f00f0e1",
  "name": "설빙정막국수냉면",
  "tags": [
   "먹거리"
  ],
  "zone": "t-bb69201f1a043e1ee32dd96e8f00f0e1",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "설빙정막국수냉면"
 },
 {
  "id": "t-04f7bb54db1e6c86a77dd00585d216af",
  "name": "진솔할머니순두부",
  "tags": [
   "먹거리"
  ],
  "zone": "t-04f7bb54db1e6c86a77dd00585d216af",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "진솔할머니순두부"
 },
 {
  "id": "t-147128385810a85791d9f13d33aaf6df",
  "name": "별주부네물곰탕",
  "tags": [
   "먹거리"
  ],
  "zone": "t-147128385810a85791d9f13d33aaf6df",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "별주부네물곰탕"
 },
 {
  "id": "t-911fcf8c30e1823cd6f5e34c65a7f36a",
  "name": "어느멋진날카페",
  "tags": [
   "카페"
  ],
  "zone": "t-911fcf8c30e1823cd6f5e34c65a7f36a",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "어느멋진날카페"
 },
 {
  "id": "t-3c1b229e470a5bec5dfd55f1d839580f",
  "name": "양반댁함흥냉면",
  "tags": [
   "먹거리"
  ],
  "zone": "t-3c1b229e470a5bec5dfd55f1d839580f",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "양반댁함흥냉면"
 },
 {
  "id": "t-13c1729235214ee1c2735ed84346216c",
  "name": "신토불이감자옹심이",
  "tags": [
   "먹거리"
  ],
  "zone": "t-13c1729235214ee1c2735ed84346216c",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "신토불이감자옹심이"
 },
 {
  "id": "t-4f370807f2b9adcf4cc74b44c7a4388f",
  "name": "영금물회",
  "tags": [
   "먹거리"
  ],
  "zone": "t-4f370807f2b9adcf4cc74b44c7a4388f",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "영금물회"
 },
 {
  "id": "t-367ee47da74d3906895be9b3789e390b",
  "name": "소야동치미막국수",
  "tags": [
   "먹거리"
  ],
  "zone": "t-367ee47da74d3906895be9b3789e390b",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "소야동치미막국수"
 },
 {
  "id": "t-484ade8f282a3f1615bedfad8e098d66",
  "name": "속초문어국밥",
  "tags": [
   "먹거리"
  ],
  "zone": "t-484ade8f282a3f1615bedfad8e098d66",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초문어국밥"
 },
 {
  "id": "t-6821540d9bdcd0c8e053486712c0a33b",
  "name": "피노디아",
  "tags": [
   "체험"
  ],
  "zone": "t-6821540d9bdcd0c8e053486712c0a33b",
  "kind": "테마공원",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "피노디아"
 },
 {
  "id": "t-e0189b50f57ff596f17b7092986b99dc",
  "name": "일품대패3900냥",
  "tags": [
   "먹거리"
  ],
  "zone": "t-e0189b50f57ff596f17b7092986b99dc",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "일품대패3900냥"
 },
 {
  "id": "t-75b3e8e40fe7aa2da97c947edd34418d",
  "name": "엄지네포장마차 속초점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-75b3e8e40fe7aa2da97c947edd34418d",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "엄지네포장마차/속초점"
 },
 {
  "id": "t-a1e7d561d16f297e1d939f337490fc95",
  "name": "수빈이네찜 속초본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-a1e7d561d16f297e1d939f337490fc95",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "수빈이네찜/속초본점"
 },
 {
  "id": "t-3853bb0018e9dd5f18f1836eab5d9158",
  "name": "비금도",
  "tags": [
   "먹거리"
  ],
  "zone": "t-3853bb0018e9dd5f18f1836eab5d9158",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "비금도"
 },
 {
  "id": "t-091b093291ab6466caff17728a7aa83a",
  "name": "나폴리아",
  "tags": [
   "카페"
  ],
  "zone": "t-091b093291ab6466caff17728a7aa83a",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "나폴리아"
 },
 {
  "id": "t-274a33cec7a0f70587bc9657e973a8a4",
  "name": "일출봉횟집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-274a33cec7a0f70587bc9657e973a8a4",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "일출봉횟집"
 },
 {
  "id": "t-ccff252581d557076090f7e9b32ea8d8",
  "name": "원조튀김골목",
  "tags": [
   "먹거리"
  ],
  "zone": "t-ccff252581d557076090f7e9b32ea8d8",
  "kind": "음식점기타",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "원조튀김골목"
 },
 {
  "id": "t-21013ae5014f9b2972adff99a8efcc27",
  "name": "장작보리밥 척산점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-21013ae5014f9b2972adff99a8efcc27",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "장작보리밥/척산점"
 },
 {
  "id": "t-3df23186ab34e8a58576f5008706cce9",
  "name": "아루나",
  "tags": [
   "카페"
  ],
  "zone": "t-3df23186ab34e8a58576f5008706cce9",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "아루나"
 },
 {
  "id": "t-25f7edd5991e475a5ee154f7faf75b13",
  "name": "예스닭강정 중앙시장직영점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-25f7edd5991e475a5ee154f7faf75b13",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "예스닭강정/중앙시장직영점"
 },
 {
  "id": "t-8d84ef19a299b14af4ae07b59808fd6d",
  "name": "점봉산산채",
  "tags": [
   "먹거리"
  ],
  "zone": "t-8d84ef19a299b14af4ae07b59808fd6d",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "점봉산산채"
 },
 {
  "id": "t-454ea32298069561137c8528421fa47b",
  "name": "장사항바다낚시체험공원",
  "tags": [
   "체험"
  ],
  "zone": "t-454ea32298069561137c8528421fa47b",
  "kind": "수상레저스포츠",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "장사항바다낚시체험공원"
 },
 {
  "id": "t-94e3d4024a799e09cc08449b1f4878ed",
  "name": "아바이어시장 속초본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-94e3d4024a799e09cc08449b1f4878ed",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "아바이어시장/속초본점"
 },
 {
  "id": "t-1f25487bb044f451c607145ee9471ac8",
  "name": "초당본가할머니순두부",
  "tags": [
   "먹거리"
  ],
  "zone": "t-1f25487bb044f451c607145ee9471ac8",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "초당본가할머니순두부"
 },
 {
  "id": "t-48b47560d76bd1641566a66465eeadee",
  "name": "카페코엘",
  "tags": [
   "카페"
  ],
  "zone": "t-48b47560d76bd1641566a66465eeadee",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "카페코엘"
 },
 {
  "id": "t-11cc17747a1de59a5047e0651429eb04",
  "name": "속초곰치국",
  "tags": [
   "먹거리"
  ],
  "zone": "t-11cc17747a1de59a5047e0651429eb04",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초곰치국"
 },
 {
  "id": "t-37496f71f6398c28b2b252f6fa711127",
  "name": "발해역사관",
  "tags": [
   "문화·역사"
  ],
  "zone": "t-37496f71f6398c28b2b252f6fa711127",
  "kind": "전시시설",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "발해역사관",
  "tmapName": "발해역사관"
 },
 {
  "id": "t-685b19c68887171d4587519720b0e31e",
  "name": "청대리막국수",
  "tags": [
   "먹거리"
  ],
  "zone": "t-685b19c68887171d4587519720b0e31e",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "청대리막국수"
 },
 {
  "id": "t-3ad5fbfda3b2a191d6aa3a420c3add33",
  "name": "동명활어유통센타",
  "tags": [
   "먹거리"
  ],
  "zone": "t-3ad5fbfda3b2a191d6aa3a420c3add33",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "동명활어유통센타"
 },
 {
  "id": "t-6e6451b78401c217e0900de98da504cf",
  "name": "왕박골식당",
  "tags": [
   "먹거리"
  ],
  "zone": "t-6e6451b78401c217e0900de98da504cf",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "왕박골식당"
 },
 {
  "id": "t-f0b096c8ee73bc3ef8d56ad3c0f59d22",
  "name": "달빛돈가",
  "tags": [
   "먹거리"
  ],
  "zone": "t-f0b096c8ee73bc3ef8d56ad3c0f59d22",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "달빛돈가"
 },
 {
  "id": "t-d988f52b2827da017a16627879ab4414",
  "name": "대선횟집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-d988f52b2827da017a16627879ab4414",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "대선횟집"
 },
 {
  "id": "t-9a8deb2682f1f0d98c6324f8313a07c5",
  "name": "영랑해안길포차거리",
  "tags": [
   "먹거리"
  ],
  "zone": "t-9a8deb2682f1f0d98c6324f8313a07c5",
  "kind": "음식점기타",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "영랑해안길포차거리"
 },
 {
  "id": "t-612a67ba5d4e68ee827b9f5cf7edaaf9",
  "name": "후포식당",
  "tags": [
   "먹거리"
  ],
  "zone": "t-612a67ba5d4e68ee827b9f5cf7edaaf9",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "후포식당"
 },
 {
  "id": "t-f9d050b8870f836cd65b4326a678b900",
  "name": "주오일심야라멘",
  "tags": [
   "먹거리"
  ],
  "zone": "t-f9d050b8870f836cd65b4326a678b900",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "주오일심야라멘"
 },
 {
  "id": "t-9c0a7b5526d2955d154c8330653d279b",
  "name": "형제반점 [중식]",
  "tags": [
   "먹거리"
  ],
  "zone": "t-9c0a7b5526d2955d154c8330653d279b",
  "kind": "외국식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "형제반점/[중식]"
 },
 {
  "id": "t-35f27219f67cddc5b8cf8ff133818483",
  "name": "솔밭막국수",
  "tags": [
   "먹거리"
  ],
  "zone": "t-35f27219f67cddc5b8cf8ff133818483",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "솔밭막국수"
 },
 {
  "id": "t-9ac4765a79faca9204b1db8f42a07b8f",
  "name": "전주속풀이해장국",
  "tags": [
   "먹거리"
  ],
  "zone": "t-9ac4765a79faca9204b1db8f42a07b8f",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "전주속풀이해장국"
 },
 {
  "id": "t-839c2bbf820820fbf400c5dff528af5c",
  "name": "두메산골",
  "tags": [
   "먹거리"
  ],
  "zone": "t-839c2bbf820820fbf400c5dff528af5c",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "두메산골"
 },
 {
  "id": "t-c7265c9a37ee9dd8ef5416f66b0a224b",
  "name": "속초불탄감자빵 본점",
  "tags": [
   "카페"
  ],
  "zone": "t-c7265c9a37ee9dd8ef5416f66b0a224b",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초불탄감자빵/본점"
 },
 {
  "id": "t-37afd80f9a4e536d465ac8c2161cd9a8",
  "name": "청대산산림욕장",
  "tags": [
   "자연·산책"
  ],
  "zone": "t-37afd80f9a4e536d465ac8c2161cd9a8",
  "kind": "자연공원",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "청대산산림욕장"
 },
 {
  "id": "t-67469e75c3a865b50c2dfa439b2a647b",
  "name": "다온",
  "tags": [
   "카페"
  ],
  "zone": "t-67469e75c3a865b50c2dfa439b2a647b",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "다온"
 },
 {
  "id": "t-d8495e6eb67122d2d200cf5f5fa06e27",
  "name": "만석찜가 속초본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-d8495e6eb67122d2d200cf5f5fa06e27",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "만석찜가/속초본점"
 },
 {
  "id": "t-cd3d2de8921a80c2988c91f7bf8567da",
  "name": "뚝배기섭국 1호점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-cd3d2de8921a80c2988c91f7bf8567da",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "뚝배기섭국/1호점"
 },
 {
  "id": "t-28a4195e84b290dc8728c8797bc4b5db",
  "name": "한산횟집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-28a4195e84b290dc8728c8797bc4b5db",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "한산횟집"
 },
 {
  "id": "t-1cc0af56697e2e5c5dfe315e06cb2e4d",
  "name": "속초해물꽃장칼국수",
  "tags": [
   "먹거리"
  ],
  "zone": "t-1cc0af56697e2e5c5dfe315e06cb2e4d",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초해물꽃장칼국수"
 },
 {
  "id": "t-d35bd5028c1230df72839db6aad2057b",
  "name": "너울집",
  "tags": [
   "카페"
  ],
  "zone": "t-d35bd5028c1230df72839db6aad2057b",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "너울집"
 },
 {
  "id": "t-6203f2a54b98623254f504edfd8165a5",
  "name": "평창한우마을 속초점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-6203f2a54b98623254f504edfd8165a5",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "평창한우마을/속초점"
 },
 {
  "id": "t-10c719b9796e140f1ca030e6e867bee6",
  "name": "상남자스테이크 엑스포점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-10c719b9796e140f1ca030e6e867bee6",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "상남자스테이크/엑스포점"
 },
 {
  "id": "t-3660af59f4621465735965491f75ae9f",
  "name": "설한옥 본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-3660af59f4621465735965491f75ae9f",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "설한옥/본점"
 },
 {
  "id": "t-34e29fbad80bfdb37cd4f86be6e186d3",
  "name": "코리아횟집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-34e29fbad80bfdb37cd4f86be6e186d3",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "코리아횟집"
 },
 {
  "id": "t-a7c50da408e13f1d1d66d7ba9f3d8de1",
  "name": "이모회집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-a7c50da408e13f1d1d66d7ba9f3d8de1",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "이모회집"
 },
 {
  "id": "t-cb77a9b5ba8c567b4a6eba7dc9518be9",
  "name": "강릉불고기 속초점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-cb77a9b5ba8c567b4a6eba7dc9518be9",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "강릉불고기/속초점"
 },
 {
  "id": "t-caa8c8c4ec233670a7ad183c1109b8a8",
  "name": "산동반점 [중식]",
  "tags": [
   "먹거리"
  ],
  "zone": "t-caa8c8c4ec233670a7ad183c1109b8a8",
  "kind": "외국식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "산동반점/[중식]"
 },
 {
  "id": "t-ce6d9638a1df15f256d76d83da5e5b1e",
  "name": "24시전주명가콩나물국밥 속초점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-ce6d9638a1df15f256d76d83da5e5b1e",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "24시전주명가콩나물국밥/속초점"
 },
 {
  "id": "t-00092e531d637e25cd75cb35855681b3",
  "name": "유투",
  "tags": [
   "카페"
  ],
  "zone": "t-00092e531d637e25cd75cb35855681b3",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "유투"
 },
 {
  "id": "t-97722292466c6b9044ee455aca7ffed5",
  "name": "스테이오롯이",
  "tags": [
   "카페"
  ],
  "zone": "t-97722292466c6b9044ee455aca7ffed5",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "스테이오롯이"
 },
 {
  "id": "t-9468ccfd6fc27043851038d545367b09",
  "name": "해마루회포장",
  "tags": [
   "먹거리"
  ],
  "zone": "t-9468ccfd6fc27043851038d545367b09",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "해마루회포장"
 },
 {
  "id": "t-08b91e898d6ed800aa32a2dd3ebb0b68",
  "name": "춘선네",
  "tags": [
   "먹거리"
  ],
  "zone": "t-08b91e898d6ed800aa32a2dd3ebb0b68",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "춘선네"
 },
 {
  "id": "t-f945273cf5a657d435e149aa321c1bec",
  "name": "속초생선구이숙이네",
  "tags": [
   "먹거리"
  ],
  "zone": "t-f945273cf5a657d435e149aa321c1bec",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초생선구이숙이네"
 },
 {
  "id": "t-9301448157cacad9e2e729da442761c2",
  "name": "속초맛생대구탕",
  "tags": [
   "먹거리"
  ],
  "zone": "t-9301448157cacad9e2e729da442761c2",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초맛생대구탕"
 },
 {
  "id": "t-e0619bbf2c1a74f72a4465bd8fb0d3aa",
  "name": "동루골막국수 속초점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-e0619bbf2c1a74f72a4465bd8fb0d3aa",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "동루골막국수/속초점"
 },
 {
  "id": "t-4a8cce6564f2b6c16a1b19c6d23ba004",
  "name": "카페소리",
  "tags": [
   "카페"
  ],
  "zone": "t-4a8cce6564f2b6c16a1b19c6d23ba004",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "카페소리"
 },
 {
  "id": "t-6f45b6cb29b941cf907364db93fe82ec",
  "name": "동명항대게마을",
  "tags": [
   "먹거리"
  ],
  "zone": "t-6f45b6cb29b941cf907364db93fe82ec",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "동명항대게마을"
 },
 {
  "id": "t-a205b3c43a982b62d3e86226ef10e178",
  "name": "속초오징어난전9호",
  "tags": [
   "먹거리"
  ],
  "zone": "t-a205b3c43a982b62d3e86226ef10e178",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초오징어난전9호"
 },
 {
  "id": "t-e2b0c081479c4da2467144df2f1a6a1a",
  "name": "마카오박",
  "tags": [
   "먹거리"
  ],
  "zone": "t-e2b0c081479c4da2467144df2f1a6a1a",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "마카오박"
 },
 {
  "id": "t-3c4e80a930be594dd2ce793c79eab55a",
  "name": "속초수목농원",
  "tags": [
   "체험"
  ],
  "zone": "t-3c4e80a930be594dd2ce793c79eab55a",
  "kind": "농/산/어촌체험",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초수목농원"
 },
 {
  "id": "t-90dc78af58f7594eca2def7ecd73d507",
  "name": "속초그바다로",
  "tags": [
   "먹거리"
  ],
  "zone": "t-90dc78af58f7594eca2def7ecd73d507",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초그바다로"
 },
 {
  "id": "t-263992a1bf30fc85174697bafd671d20",
  "name": "설악항",
  "tags": [
   "바다"
  ],
  "zone": "t-263992a1bf30fc85174697bafd671d20",
  "kind": "자연경관(하천/해양)",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "설악항"
 },
 {
  "id": "t-b629c3452ebf4138d3fe8627c59536fb",
  "name": "김삿갓막국수 속초본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-b629c3452ebf4138d3fe8627c59536fb",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "김삿갓막국수/속초본점"
 },
 {
  "id": "t-16b69a917f04a0638c8a069cc37da17f",
  "name": "실향민문화촌",
  "tags": [
   "문화·역사"
  ],
  "zone": "t-16b69a917f04a0638c8a069cc37da17f",
  "kind": "기타문화관광지",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "실향민문화촌"
 },
 {
  "id": "t-93d4cebf1d0e6ffa689adc19239e7a39",
  "name": "설악회국수",
  "tags": [
   "먹거리"
  ],
  "zone": "t-93d4cebf1d0e6ffa689adc19239e7a39",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "설악회국수"
 },
 {
  "id": "t-9e1a8d64dd840c1789650c0f257f3b1f",
  "name": "속초중앙상회",
  "tags": [
   "먹거리"
  ],
  "zone": "t-9e1a8d64dd840c1789650c0f257f3b1f",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초중앙상회"
 },
 {
  "id": "t-5321aec85cb3984bd16de0a5e527331f",
  "name": "백돈가",
  "tags": [
   "먹거리"
  ],
  "zone": "t-5321aec85cb3984bd16de0a5e527331f",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "백돈가"
 },
 {
  "id": "t-34dc8ce752d1cc45d8e6ef8734ea4c6c",
  "name": "진미동치미메밀막국수",
  "tags": [
   "먹거리"
  ],
  "zone": "t-34dc8ce752d1cc45d8e6ef8734ea4c6c",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "진미동치미메밀막국수"
 },
 {
  "id": "t-453e97343e2f2e0fafd2f71140d1d48c",
  "name": "콩새식당",
  "tags": [
   "먹거리"
  ],
  "zone": "t-453e97343e2f2e0fafd2f71140d1d48c",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "콩새식당"
 },
 {
  "id": "t-5aa9f4d90ff6d875761704e71bf05104",
  "name": "나룻배식당",
  "tags": [
   "먹거리"
  ],
  "zone": "t-5aa9f4d90ff6d875761704e71bf05104",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "나룻배식당"
 },
 {
  "id": "t-c8eccbab39adbe0fdd56abe68b28a91e",
  "name": "이조면옥",
  "tags": [
   "먹거리"
  ],
  "zone": "t-c8eccbab39adbe0fdd56abe68b28a91e",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "이조면옥"
 },
 {
  "id": "t-2c322bd281a8374142a8c4beb961a3d0",
  "name": "카페청호동",
  "tags": [
   "카페"
  ],
  "zone": "t-2c322bd281a8374142a8c4beb961a3d0",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "카페청호동"
 },
 {
  "id": "t-70891935476c8b87f0a2f65b584193ca",
  "name": "설악산벚꽃터널",
  "tags": [
   "자연·산책"
  ],
  "zone": "t-70891935476c8b87f0a2f65b584193ca",
  "kind": "데이트코스",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "설악산벚꽃터널"
 },
 {
  "id": "t-2056e41f6ba165f4327a68e8db390f17",
  "name": "도천짚불구이",
  "tags": [
   "먹거리"
  ],
  "zone": "t-2056e41f6ba165f4327a68e8db390f17",
  "kind": "음식점기타",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "도천짚불구이"
 },
 {
  "id": "t-89d72df53f42d732ac148e0f7883d7e1",
  "name": "장사항바다숲공원",
  "tags": [
   "자연·산책"
  ],
  "zone": "t-89d72df53f42d732ac148e0f7883d7e1",
  "kind": "도시공원",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "장사항바다숲공원"
 },
 {
  "id": "t-c617ad9a8f9c5982070fea419833a113",
  "name": "싸리재칼국수",
  "tags": [
   "먹거리"
  ],
  "zone": "t-c617ad9a8f9c5982070fea419833a113",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "싸리재칼국수"
 },
 {
  "id": "t-4c93335215d920f14ced5ad3dc86f274",
  "name": "소야으뜸딸기",
  "tags": [
   "체험"
  ],
  "zone": "t-4c93335215d920f14ced5ad3dc86f274",
  "kind": "농/산/어촌체험",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "소야으뜸딸기"
 },
 {
  "id": "t-450275c4833f5841f7136ddb4c7a63f0",
  "name": "수향곤드레",
  "tags": [
   "먹거리"
  ],
  "zone": "t-450275c4833f5841f7136ddb4c7a63f0",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "수향곤드레"
 },
 {
  "id": "t-e1e1ca302b7640f33c88f0b501af5f73",
  "name": "해녀전복뚝배기",
  "tags": [
   "먹거리"
  ],
  "zone": "t-e1e1ca302b7640f33c88f0b501af5f73",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "해녀전복뚝배기"
 },
 {
  "id": "t-fe1370f3ff37c9562db3fd2b2f96f7ae",
  "name": "물회주는고깃집청초숯불갈비",
  "tags": [
   "먹거리"
  ],
  "zone": "t-fe1370f3ff37c9562db3fd2b2f96f7ae",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "물회주는고깃집청초숯불갈비"
 },
 {
  "id": "t-53ae25f7b5319bf88094a95ffc4be777",
  "name": "도평커피",
  "tags": [
   "카페"
  ],
  "zone": "t-53ae25f7b5319bf88094a95ffc4be777",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "도평커피"
 },
 {
  "id": "t-317cd23ad23f1b896ccf68dcc890fec4",
  "name": "24시전주명가콩나물국밥 속초조양점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-317cd23ad23f1b896ccf68dcc890fec4",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "24시전주명가콩나물국밥/속초조양점"
 },
 {
  "id": "t-2ccf4e05aa2a5952f31acf29edafdc91",
  "name": "신피디통큰생선구이",
  "tags": [
   "먹거리"
  ],
  "zone": "t-2ccf4e05aa2a5952f31acf29edafdc91",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "신피디통큰생선구이"
 },
 {
  "id": "t-69583046b6a501cd5c87da9f386950d9",
  "name": "소야촌 본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-69583046b6a501cd5c87da9f386950d9",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "소야촌/본점"
 },
 {
  "id": "t-cba33f2e8fd621fd2fa7ecd1628c6fe9",
  "name": "속초먹거리단지",
  "tags": [
   "먹거리"
  ],
  "zone": "t-cba33f2e8fd621fd2fa7ecd1628c6fe9",
  "kind": "음식점기타",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초먹거리단지"
 },
 {
  "id": "t-63d9ae48ba6e8410afcc9c3addab2d5f",
  "name": "설악딸기모찌",
  "tags": [
   "먹거리"
  ],
  "zone": "t-63d9ae48ba6e8410afcc9c3addab2d5f",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "설악딸기모찌"
 },
 {
  "id": "t-fa4ce31916f9bfd3d574d20ea8ca44ce",
  "name": "어부의바다",
  "tags": [
   "먹거리"
  ],
  "zone": "t-fa4ce31916f9bfd3d574d20ea8ca44ce",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "어부의바다"
 },
 {
  "id": "t-ab2271ea8a695ba2edee78199400fd01",
  "name": "별미순대국 본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-ab2271ea8a695ba2edee78199400fd01",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "별미순대국/본점"
 },
 {
  "id": "t-8ec7c81a12b3c926588a84012d4a6061",
  "name": "순자집곰치국",
  "tags": [
   "먹거리"
  ],
  "zone": "t-8ec7c81a12b3c926588a84012d4a6061",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "순자집곰치국"
 },
 {
  "id": "t-d8c7596ad5acc9ee50dc0f981b5b973c",
  "name": "크로프트커피 속초점",
  "tags": [
   "카페"
  ],
  "zone": "t-d8c7596ad5acc9ee50dc0f981b5b973c",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "크로프트커피/속초점"
 },
 {
  "id": "t-3606d3b9e702117dc0c0daa7168c31cc",
  "name": "난장",
  "tags": [
   "먹거리"
  ],
  "zone": "t-3606d3b9e702117dc0c0daa7168c31cc",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "난장"
 },
 {
  "id": "t-e345d65f04f0f994e5ef0a206720401b",
  "name": "제제네식탁",
  "tags": [
   "먹거리"
  ],
  "zone": "t-e345d65f04f0f994e5ef0a206720401b",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "제제네식탁"
 },
 {
  "id": "t-10b4c9fb08176676396c5c1fbfd12078",
  "name": "한양면옥",
  "tags": [
   "먹거리"
  ],
  "zone": "t-10b4c9fb08176676396c5c1fbfd12078",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "한양면옥"
 },
 {
  "id": "t-4cf613478d054d803ccfa820335beaff",
  "name": "시골이모순두부",
  "tags": [
   "먹거리"
  ],
  "zone": "t-4cf613478d054d803ccfa820335beaff",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "시골이모순두부"
 },
 {
  "id": "t-ee0dec9401066cfa782225275f51c90e",
  "name": "앤커피스토리",
  "tags": [
   "카페"
  ],
  "zone": "t-ee0dec9401066cfa782225275f51c90e",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "앤커피스토리"
 },
 {
  "id": "t-58f114e5a662054f28403c4bcd143319",
  "name": "하마식당 [일식]",
  "tags": [
   "먹거리"
  ],
  "zone": "t-58f114e5a662054f28403c4bcd143319",
  "kind": "외국식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "하마식당/[일식]"
 },
 {
  "id": "t-44eb5ec6c631461cb6499e41bd1c2a53",
  "name": "속초상희네",
  "tags": [
   "먹거리"
  ],
  "zone": "t-44eb5ec6c631461cb6499e41bd1c2a53",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초상희네"
 },
 {
  "id": "t-5ce054ead783c94a8c524a2f5301ee9b",
  "name": "속초회장님회포장",
  "tags": [
   "먹거리"
  ],
  "zone": "t-5ce054ead783c94a8c524a2f5301ee9b",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초회장님회포장"
 },
 {
  "id": "t-c613f1a81c7db21db981d82d7bb90a63",
  "name": "북극해고등어 속초엑스포점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-c613f1a81c7db21db981d82d7bb90a63",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "북극해고등어/속초엑스포점"
 },
 {
  "id": "t-52740b34ab14d4767836c03a240b0e94",
  "name": "속초먹돈",
  "tags": [
   "먹거리"
  ],
  "zone": "t-52740b34ab14d4767836c03a240b0e94",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초먹돈"
 },
 {
  "id": "t-8048b8898d9cdd10ce34e1c76347d117",
  "name": "라라의정원",
  "tags": [
   "카페"
  ],
  "zone": "t-8048b8898d9cdd10ce34e1c76347d117",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "라라의정원"
 },
 {
  "id": "t-2d4cabced79e3910913bf6a25814faa5",
  "name": "미엘파티세리",
  "tags": [
   "카페"
  ],
  "zone": "t-2d4cabced79e3910913bf6a25814faa5",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "미엘파티세리"
 },
 {
  "id": "t-5b971b2e05c431bea2145bc1880c8c80",
  "name": "신대륙횟집 대포항점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-5b971b2e05c431bea2145bc1880c8c80",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "신대륙횟집/대포항점"
 },
 {
  "id": "t-e78c6281a9d098b75f51b2572d1adc73",
  "name": "속초마리나",
  "tags": [
   "체험"
  ],
  "zone": "t-e78c6281a9d098b75f51b2572d1adc73",
  "kind": "수상레저스포츠",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초마리나"
 },
 {
  "id": "t-6659be58f790802a5f63d6a430010de1",
  "name": "속초딸기",
  "tags": [
   "체험"
  ],
  "zone": "t-6659be58f790802a5f63d6a430010de1",
  "kind": "농/산/어촌체험",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초딸기"
 },
 {
  "id": "t-11d84c9bba828b2d6fa0d6dd5637a750",
  "name": "보구밍샵&커피",
  "tags": [
   "카페"
  ],
  "zone": "t-11d84c9bba828b2d6fa0d6dd5637a750",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "보구밍샵&커피"
 },
 {
  "id": "t-bdfff5548f4fa266dd27db06cd3ae743",
  "name": "속초조개구이바다다조개다",
  "tags": [
   "먹거리"
  ],
  "zone": "t-bdfff5548f4fa266dd27db06cd3ae743",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초조개구이바다다조개다"
 },
 {
  "id": "t-3fc9004c7ded832a4dbb9d8a6f69fce2",
  "name": "진대감참숯화로구이",
  "tags": [
   "먹거리"
  ],
  "zone": "t-3fc9004c7ded832a4dbb9d8a6f69fce2",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "진대감참숯화로구이"
 },
 {
  "id": "t-3ab432f8f11806175d4f18bebed6abde",
  "name": "속초가마솥손두부",
  "tags": [
   "먹거리"
  ],
  "zone": "t-3ab432f8f11806175d4f18bebed6abde",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초가마솥손두부"
 },
 {
  "id": "t-fb3d43f0b9e58f955ba38e28f6c81806",
  "name": "대포면옥",
  "tags": [
   "먹거리"
  ],
  "zone": "t-fb3d43f0b9e58f955ba38e28f6c81806",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "대포면옥"
 },
 {
  "id": "t-32dcc41505dd079bbcacd2aef639ca83",
  "name": "황두막할머니",
  "tags": [
   "먹거리"
  ],
  "zone": "t-32dcc41505dd079bbcacd2aef639ca83",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "황두막할머니"
 },
 {
  "id": "t-f1e769126485a7a4044b828f2a7af069",
  "name": "스포츠넥스트레벨",
  "tags": [
   "체험"
  ],
  "zone": "t-f1e769126485a7a4044b828f2a7af069",
  "kind": "기타레저스포츠",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "스포츠넥스트레벨"
 },
 {
  "id": "t-d5c43b3cb4855dca6ebe48820036f5bf",
  "name": "광성홍게장군",
  "tags": [
   "먹거리"
  ],
  "zone": "t-d5c43b3cb4855dca6ebe48820036f5bf",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "광성홍게장군"
 },
 {
  "id": "t-022acebe57ca3a70cabcffb5a93a77a2",
  "name": "해돋이한우곰탕",
  "tags": [
   "먹거리"
  ],
  "zone": "t-022acebe57ca3a70cabcffb5a93a77a2",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "해돋이한우곰탕"
 },
 {
  "id": "t-bd07c2916b4a95879236ace6584e771c",
  "name": "회식의달인 속초점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-bd07c2916b4a95879236ace6584e771c",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "회식의달인/속초점"
 },
 {
  "id": "t-1ad9c5e2c32e7873b097f716fd49e350",
  "name": "만석닭강정 시장2호점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-1ad9c5e2c32e7873b097f716fd49e350",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "만석닭강정/시장2호점"
 },
 {
  "id": "t-282cd5499aacd9bef5fcf8be17728b66",
  "name": "낙천회관",
  "tags": [
   "먹거리"
  ],
  "zone": "t-282cd5499aacd9bef5fcf8be17728b66",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "낙천회관"
 },
 {
  "id": "t-559bf0cf05dc0714d3bdda593f2e45a9",
  "name": "속초게찜 본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-559bf0cf05dc0714d3bdda593f2e45a9",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초게찜/본점"
 },
 {
  "id": "t-b2196ae325f6490334953c332aeb5b53",
  "name": "일품수산",
  "tags": [
   "먹거리"
  ],
  "zone": "t-b2196ae325f6490334953c332aeb5b53",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "일품수산"
 },
 {
  "id": "t-6baeac97475c989cf305db31debb378f",
  "name": "매자쌀국수",
  "tags": [
   "먹거리"
  ],
  "zone": "t-6baeac97475c989cf305db31debb378f",
  "kind": "외국식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "매자쌀국수"
 },
 {
  "id": "t-f004e3828185444110ee2972594cab45",
  "name": "속초순대국",
  "tags": [
   "먹거리"
  ],
  "zone": "t-f004e3828185444110ee2972594cab45",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초순대국"
 },
 {
  "id": "t-3e9453dbc7955a506f6606ab3515e927",
  "name": "재래식할머니순두부",
  "tags": [
   "먹거리"
  ],
  "zone": "t-3e9453dbc7955a506f6606ab3515e927",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "재래식할머니순두부"
 },
 {
  "id": "t-6c669e40283eccad6e514559cfcc11ea",
  "name": "아바이마을벽화골목",
  "tags": [
   "자연·산책"
  ],
  "zone": "t-6c669e40283eccad6e514559cfcc11ea",
  "kind": "기타관광",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "아바이마을벽화골목"
 },
 {
  "id": "t-fdd0e2bea7304203c3fac9597889c50e",
  "name": "카페람",
  "tags": [
   "카페"
  ],
  "zone": "t-fdd0e2bea7304203c3fac9597889c50e",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "카페람"
 },
 {
  "id": "t-df0b1b5b383b154c1b5b34f8aefc2247",
  "name": "미쳤소",
  "tags": [
   "먹거리"
  ],
  "zone": "t-df0b1b5b383b154c1b5b34f8aefc2247",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "미쳤소"
 },
 {
  "id": "t-20b656b4462a7738ec4fc828c2809089",
  "name": "홍게데이",
  "tags": [
   "먹거리"
  ],
  "zone": "t-20b656b4462a7738ec4fc828c2809089",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "홍게데이"
 },
 {
  "id": "t-997e5f534a98f67fc8635a72e24f84a4",
  "name": "메리고라운드with교동마카롱",
  "tags": [
   "먹거리"
  ],
  "zone": "t-997e5f534a98f67fc8635a72e24f84a4",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "메리고라운드with교동마카롱"
 },
 {
  "id": "t-d5feb3f3097aa4d69e3a2e9048424aab",
  "name": "조개상회 속초본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-d5feb3f3097aa4d69e3a2e9048424aab",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "조개상회/속초본점"
 },
 {
  "id": "t-6a1dbdbbfc24cefd92f6e304380757ef",
  "name": "신촌옥 [한식]",
  "tags": [
   "먹거리"
  ],
  "zone": "t-6a1dbdbbfc24cefd92f6e304380757ef",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "신촌옥/[한식]"
 },
 {
  "id": "t-d4ce96a8241f207d6c158b7c2d205bf0",
  "name": "강원특별자치도교육청진로교육원",
  "tags": [
   "체험"
  ],
  "zone": "t-d4ce96a8241f207d6c158b7c2d205bf0",
  "kind": "체험관광기타",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "강원특별자치도교육청진로교육원"
 },
 {
  "id": "t-b3460fc19de4a5618252de4fc4e16cf4",
  "name": "오봉식당",
  "tags": [
   "먹거리"
  ],
  "zone": "t-b3460fc19de4a5618252de4fc4e16cf4",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "오봉식당"
 },
 {
  "id": "t-9303e632a81c5547f4916f20cf87a351",
  "name": "세렝게티커피",
  "tags": [
   "카페"
  ],
  "zone": "t-9303e632a81c5547f4916f20cf87a351",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "세렝게티커피"
 },
 {
  "id": "t-209c0a8550f5edeb476b20a3c666f98c",
  "name": "옥미정산채정식",
  "tags": [
   "먹거리"
  ],
  "zone": "t-209c0a8550f5edeb476b20a3c666f98c",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "옥미정산채정식"
 },
 {
  "id": "t-c480b98ca94bc46c045465c308315729",
  "name": "영랑칼국수 속초본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-c480b98ca94bc46c045465c308315729",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "영랑칼국수/속초본점"
 },
 {
  "id": "t-f69c1f81e56bea77982754fefd410320",
  "name": "이가횟집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-f69c1f81e56bea77982754fefd410320",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "이가횟집"
 },
 {
  "id": "t-4bd16311de262d39b6d30fa53d796780",
  "name": "중앙닭강정 본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-4bd16311de262d39b6d30fa53d796780",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "중앙닭강정/본점"
 },
 {
  "id": "t-8cc53d3dcf6fecc9aa875a4b0e6f12db",
  "name": "세심촌",
  "tags": [
   "먹거리"
  ],
  "zone": "t-8cc53d3dcf6fecc9aa875a4b0e6f12db",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "세심촌"
 },
 {
  "id": "t-cbc02bc9d494247b30896e518ed2d19b",
  "name": "명륜진사갈비 강원속초점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-cbc02bc9d494247b30896e518ed2d19b",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "명륜진사갈비/강원속초점"
 },
 {
  "id": "t-982c2f00ce644091cc5b04e8b4d90081",
  "name": "밥테일베이커리",
  "tags": [
   "먹거리"
  ],
  "zone": "t-982c2f00ce644091cc5b04e8b4d90081",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "밥테일베이커리"
 },
 {
  "id": "t-f172a7d4df03d6e21de8093f87defcc7",
  "name": "양지바른버거&쌀국수 본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-f172a7d4df03d6e21de8093f87defcc7",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "양지바른버거&쌀국수/본점"
 },
 {
  "id": "t-c12383d41d17ea3ab8b9f99758b8c77b",
  "name": "평강막국수",
  "tags": [
   "먹거리"
  ],
  "zone": "t-c12383d41d17ea3ab8b9f99758b8c77b",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "평강막국수"
 },
 {
  "id": "t-91881445478b5930b91dc6cb30ca472e",
  "name": "와이에이티",
  "tags": [
   "카페"
  ],
  "zone": "t-91881445478b5930b91dc6cb30ca472e",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "와이에이티"
 },
 {
  "id": "t-8c01b1e87c803fef40a733155e8455e6",
  "name": "홍게너라면",
  "tags": [
   "먹거리"
  ],
  "zone": "t-8c01b1e87c803fef40a733155e8455e6",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "홍게너라면"
 },
 {
  "id": "t-35fbe3a3b5f080ea9a550e050d15ef8c",
  "name": "노루뫼부대찌개",
  "tags": [
   "먹거리"
  ],
  "zone": "t-35fbe3a3b5f080ea9a550e050d15ef8c",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "노루뫼부대찌개"
 },
 {
  "id": "t-e3efbee69e9143991eb33f7737ac0995",
  "name": "홍익돈까스 속초점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-e3efbee69e9143991eb33f7737ac0995",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "홍익돈까스/속초점"
 },
 {
  "id": "t-d27644c91928690c109b954e61ff4e47",
  "name": "바다뷰",
  "tags": [
   "카페"
  ],
  "zone": "t-d27644c91928690c109b954e61ff4e47",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "바다뷰"
 },
 {
  "id": "t-80c29633346c08d11a10d4c05bdc9951",
  "name": "속초해풍",
  "tags": [
   "먹거리"
  ],
  "zone": "t-80c29633346c08d11a10d4c05bdc9951",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초해풍"
 },
 {
  "id": "t-352c7f5a985b60e1794c39a5af5f9457",
  "name": "도미노피자 속초점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-352c7f5a985b60e1794c39a5af5f9457",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "도미노피자/속초점"
 },
 {
  "id": "t-48302500291ba2a7b43c26e74e259219",
  "name": "콩밭뜰",
  "tags": [
   "먹거리"
  ],
  "zone": "t-48302500291ba2a7b43c26e74e259219",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "콩밭뜰"
 },
 {
  "id": "t-49c976b3e447e1b8080d663800732f6f",
  "name": "도문커피",
  "tags": [
   "카페"
  ],
  "zone": "t-49c976b3e447e1b8080d663800732f6f",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "도문커피"
 },
 {
  "id": "t-0bef125168c238dacd682a4410446615",
  "name": "소구리설렁탕 엑스포점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-0bef125168c238dacd682a4410446615",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "소구리설렁탕/엑스포점"
 },
 {
  "id": "t-36d7ed7f9ef4a4df6c520a81a96e6f26",
  "name": "머구리횟집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-36d7ed7f9ef4a4df6c520a81a96e6f26",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "머구리횟집"
 },
 {
  "id": "t-721c7a05ac6a315add0fd039d2d7c2c9",
  "name": "한옥카페뜰안",
  "tags": [
   "카페"
  ],
  "zone": "t-721c7a05ac6a315add0fd039d2d7c2c9",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "한옥카페뜰안"
 },
 {
  "id": "t-073e46393d7f0955e8984949bf2d3301",
  "name": "속초공설운동장 인조잔디구장",
  "tags": [
   "체험"
  ],
  "zone": "t-073e46393d7f0955e8984949bf2d3301",
  "kind": "레저스포츠시설",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초공설운동장/인조잔디구장"
 },
 {
  "id": "t-2ec2b83209a4f5e9b91809de734e5645",
  "name": "대포리",
  "tags": [
   "먹거리"
  ],
  "zone": "t-2ec2b83209a4f5e9b91809de734e5645",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "대포리"
 },
 {
  "id": "t-21fc9dc8adfd9f3950898c8c70947372",
  "name": "만카오 [중식]",
  "tags": [
   "먹거리"
  ],
  "zone": "t-21fc9dc8adfd9f3950898c8c70947372",
  "kind": "외국식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "만카오/[중식]"
 },
 {
  "id": "t-09413e42aa519e4e6f9dedc15a2b6310",
  "name": "초당뼈찜",
  "tags": [
   "먹거리"
  ],
  "zone": "t-09413e42aa519e4e6f9dedc15a2b6310",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "초당뼈찜"
 },
 {
  "id": "t-50b39e057d85274568358440ce627e94",
  "name": "해원홍게",
  "tags": [
   "먹거리"
  ],
  "zone": "t-50b39e057d85274568358440ce627e94",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "해원홍게"
 },
 {
  "id": "t-0e26b49268f19438d98b6c729d3e68b3",
  "name": "명가횟집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-0e26b49268f19438d98b6c729d3e68b3",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "명가횟집"
 },
 {
  "id": "t-9d20d9d0dd180407d168af5a5f560c50",
  "name": "동광사",
  "tags": [
   "문화·역사"
  ],
  "zone": "t-9d20d9d0dd180407d168af5a5f560c50",
  "kind": "종교성지",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "동광사"
 },
 {
  "id": "t-a02d385e9d1f5c6866e54545d7c409bc",
  "name": "녹원생선찜 속초직영점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-a02d385e9d1f5c6866e54545d7c409bc",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "녹원생선찜/속초직영점"
 },
 {
  "id": "t-7a5647dce9562aec3f79011c2766afdc",
  "name": "경자옥",
  "tags": [
   "먹거리"
  ],
  "zone": "t-7a5647dce9562aec3f79011c2766afdc",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "경자옥"
 },
 {
  "id": "t-363b5a642654aab4f1b948925325bedb",
  "name": "속초해물전골",
  "tags": [
   "먹거리"
  ],
  "zone": "t-363b5a642654aab4f1b948925325bedb",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초해물전골"
 },
 {
  "id": "t-d2adbab2e1c1acef6ec1018ff3d405c7",
  "name": "살롱드해변",
  "tags": [
   "카페"
  ],
  "zone": "t-d2adbab2e1c1acef6ec1018ff3d405c7",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "살롱드해변"
 },
 {
  "id": "t-750d14c26d5f34181a5e076e8d40541d",
  "name": "브릭스블럭482",
  "tags": [
   "카페"
  ],
  "zone": "t-750d14c26d5f34181a5e076e8d40541d",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "브릭스블럭482"
 },
 {
  "id": "t-5bff6699babaa1eb612114628ab35cd0",
  "name": "ODOC",
  "tags": [
   "카페"
  ],
  "zone": "t-5bff6699babaa1eb612114628ab35cd0",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "ODOC"
 },
 {
  "id": "t-e721537da73fb8bed514ffc7c20330b3",
  "name": "속초감자빵",
  "tags": [
   "먹거리"
  ],
  "zone": "t-e721537da73fb8bed514ffc7c20330b3",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초감자빵"
 },
 {
  "id": "t-f0bc23fbc1c3bb17ada21467267175e8",
  "name": "옥란푸딩",
  "tags": [
   "카페"
  ],
  "zone": "t-f0bc23fbc1c3bb17ada21467267175e8",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "옥란푸딩"
 },
 {
  "id": "t-eb24b30abf17afe6756462c75495ddcc",
  "name": "리토",
  "tags": [
   "카페"
  ],
  "zone": "t-eb24b30abf17afe6756462c75495ddcc",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "리토"
 },
 {
  "id": "t-5e7b58e85d685c2204beb14bbca10dba",
  "name": "강동호식당",
  "tags": [
   "먹거리"
  ],
  "zone": "t-5e7b58e85d685c2204beb14bbca10dba",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "강동호식당"
 },
 {
  "id": "t-4041b1a96e8a3859422d73042a1f5184",
  "name": "완앤송",
  "tags": [
   "먹거리"
  ],
  "zone": "t-4041b1a96e8a3859422d73042a1f5184",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "완앤송"
 },
 {
  "id": "t-8ddf26857958b9e1e1a5af33d09be3de",
  "name": "창백호선장네홍게무한리필",
  "tags": [
   "먹거리"
  ],
  "zone": "t-8ddf26857958b9e1e1a5af33d09be3de",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "창백호선장네홍게무한리필"
 },
 {
  "id": "t-06e85ac6facb8221240734943dc0216c",
  "name": "야삼정식당",
  "tags": [
   "먹거리"
  ],
  "zone": "t-06e85ac6facb8221240734943dc0216c",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "야삼정식당"
 },
 {
  "id": "t-72e0d2e96b82250d210d3a3820ce9041",
  "name": "뉴욕제과 본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-72e0d2e96b82250d210d3a3820ce9041",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "뉴욕제과/본점"
 },
 {
  "id": "t-bff939b0d3ec7aeee2049f768e252d3e",
  "name": "마레속초",
  "tags": [
   "먹거리"
  ],
  "zone": "t-bff939b0d3ec7aeee2049f768e252d3e",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "마레속초"
 },
 {
  "id": "t-81a58a1d057ef484ed0fba1df193b157",
  "name": "영랑호습지생태공원",
  "tags": [
   "자연·산책"
  ],
  "zone": "t-81a58a1d057ef484ed0fba1df193b157",
  "kind": "도시공원",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "영랑호습지생태공원"
 },
 {
  "id": "t-af51262d90d118b1f942a5a0b9a54200",
  "name": "지훈이네",
  "tags": [
   "먹거리"
  ],
  "zone": "t-af51262d90d118b1f942a5a0b9a54200",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "지훈이네"
 },
 {
  "id": "t-c050d9d5b5aabf53468a48d75b0f7de5",
  "name": "신가횟집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-c050d9d5b5aabf53468a48d75b0f7de5",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "신가횟집"
 },
 {
  "id": "t-24bebb597b709e970f2f896cfd30ab95",
  "name": "덕수파스타 속초점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-24bebb597b709e970f2f896cfd30ab95",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "덕수파스타/속초점"
 },
 {
  "id": "t-499f96c69d1d49472db68da32d7b1738",
  "name": "의령식당",
  "tags": [
   "먹거리"
  ],
  "zone": "t-499f96c69d1d49472db68da32d7b1738",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "의령식당"
 },
 {
  "id": "t-c82f85a97493b017a21afe9e3dcb261a",
  "name": "와규더테이블",
  "tags": [
   "먹거리"
  ],
  "zone": "t-c82f85a97493b017a21afe9e3dcb261a",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "와규더테이블"
 },
 {
  "id": "t-67be062ddd54ca67a1f3c43c5b40b6cf",
  "name": "장군횟집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-67be062ddd54ca67a1f3c43c5b40b6cf",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "장군횟집"
 },
 {
  "id": "t-2aa085a2ad5b33b819acc834b202068f",
  "name": "도천삼백식당",
  "tags": [
   "먹거리"
  ],
  "zone": "t-2aa085a2ad5b33b819acc834b202068f",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "도천삼백식당"
 },
 {
  "id": "t-6208a8ca60490c4a36dc56963977f4dc",
  "name": "진세이로무시",
  "tags": [
   "먹거리"
  ],
  "zone": "t-6208a8ca60490c4a36dc56963977f4dc",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "진세이로무시"
 },
 {
  "id": "t-a00cbbdb8b95015f92f3873f738243a7",
  "name": "수반 [중식]",
  "tags": [
   "먹거리"
  ],
  "zone": "t-a00cbbdb8b95015f92f3873f738243a7",
  "kind": "외국식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "수반/[중식]"
 },
 {
  "id": "t-6ab382588c99bbd3aede6626eb122d7c",
  "name": "보드니아 로스터리 커피하우스",
  "tags": [
   "카페"
  ],
  "zone": "t-6ab382588c99bbd3aede6626eb122d7c",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "보드니아 로스터리 커피하우스"
 },
 {
  "id": "t-42441e0b75d53fc4619034972d969ec0",
  "name": "본가장터순대국",
  "tags": [
   "먹거리"
  ],
  "zone": "t-42441e0b75d53fc4619034972d969ec0",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "본가장터순대국"
 },
 {
  "id": "t-f5a819e34d3e819fd68a1003623699cb",
  "name": "세연이네양평해장국",
  "tags": [
   "먹거리"
  ],
  "zone": "t-f5a819e34d3e819fd68a1003623699cb",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "세연이네양평해장국"
 },
 {
  "id": "t-68b41e32a2f7b2c208ba4b09a4a88ad0",
  "name": "롯데리조트속초워터파크",
  "tags": [
   "체험"
  ],
  "zone": "t-68b41e32a2f7b2c208ba4b09a4a88ad0",
  "kind": "테마공원",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "롯데리조트속초워터파크"
 },
 {
  "id": "t-fbed949dbfffe8a83e705fa6f1fb6400",
  "name": "북청전통아바이순대",
  "tags": [
   "먹거리"
  ],
  "zone": "t-fbed949dbfffe8a83e705fa6f1fb6400",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "북청전통아바이순대"
 },
 {
  "id": "t-31400680ffd80977f0df0206c218f221",
  "name": "영금정회집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-31400680ffd80977f0df0206c218f221",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "영금정회집"
 },
 {
  "id": "t-3a827e3e0f66dcbd2da90732e766b006",
  "name": "봄봄칼국수",
  "tags": [
   "먹거리"
  ],
  "zone": "t-3a827e3e0f66dcbd2da90732e766b006",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "봄봄칼국수"
 },
 {
  "id": "t-41d5d02a32b594e9bf10cd5b4958eba8",
  "name": "본죽 속초조양부영점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-41d5d02a32b594e9bf10cd5b4958eba8",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "본죽/속초조양부영점"
 },
 {
  "id": "t-851235d95c321c064d9c4c406243a258",
  "name": "청초담",
  "tags": [
   "카페"
  ],
  "zone": "t-851235d95c321c064d9c4c406243a258",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "청초담"
 },
 {
  "id": "t-8e4bf3e8ec9a8173226c1469e18b7964",
  "name": "비치대게직판장",
  "tags": [
   "먹거리"
  ],
  "zone": "t-8e4bf3e8ec9a8173226c1469e18b7964",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "비치대게직판장"
 },
 {
  "id": "t-9b11104d770665822f29ad7cbdc52448",
  "name": "뚝배기섭국 2호점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-9b11104d770665822f29ad7cbdc52448",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "뚝배기섭국/2호점"
 },
 {
  "id": "t-03383a22372cd31b207dbd61cb6642b8",
  "name": "옥돌할머니순두부",
  "tags": [
   "먹거리"
  ],
  "zone": "t-03383a22372cd31b207dbd61cb6642b8",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "옥돌할머니순두부"
 },
 {
  "id": "t-026bfb4dcede0b44af4984268cf2213e",
  "name": "금성대창집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-026bfb4dcede0b44af4984268cf2213e",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "금성대창집"
 },
 {
  "id": "t-0c93065b7dea20d4a071cbf419ac71a3",
  "name": "레스토커피",
  "tags": [
   "카페"
  ],
  "zone": "t-0c93065b7dea20d4a071cbf419ac71a3",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "레스토커피"
 },
 {
  "id": "t-b80e340440cb073218e626cf6ec75fdb",
  "name": "맛깔칼국수",
  "tags": [
   "먹거리"
  ],
  "zone": "t-b80e340440cb073218e626cf6ec75fdb",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "맛깔칼국수"
 },
 {
  "id": "t-a53265f0aaa8ce3b6973076f9812101c",
  "name": "용일호",
  "tags": [
   "먹거리"
  ],
  "zone": "t-a53265f0aaa8ce3b6973076f9812101c",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "용일호"
 },
 {
  "id": "t-8e8cf96bf71b09ae81a64137bfd55846",
  "name": "송가네갈비촌",
  "tags": [
   "먹거리"
  ],
  "zone": "t-8e8cf96bf71b09ae81a64137bfd55846",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "송가네갈비촌"
 },
 {
  "id": "t-cd9707698aab2839fc6f22cbd807c3c5",
  "name": "노렌",
  "tags": [
   "카페"
  ],
  "zone": "t-cd9707698aab2839fc6f22cbd807c3c5",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "노렌"
 },
 {
  "id": "t-3b4201fa8f0136655ba3dd4a6a6233e3",
  "name": "속초시청소년수련관",
  "tags": [
   "체험"
  ],
  "zone": "t-3b4201fa8f0136655ba3dd4a6a6233e3",
  "kind": "육상레저스포츠",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초시청소년수련관"
 },
 {
  "id": "t-8bc34ac89cf423e8165fdb6938af5042",
  "name": "팔팔회센타 본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-8bc34ac89cf423e8165fdb6938af5042",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "팔팔회센타/본점"
 },
 {
  "id": "t-1e305b1d5076367b5889c30c2f59837b",
  "name": "남포동찹쌀씨앗호떡",
  "tags": [
   "먹거리"
  ],
  "zone": "t-1e305b1d5076367b5889c30c2f59837b",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "남포동찹쌀씨앗호떡"
 },
 {
  "id": "t-8becdeab8553692f0bb4d234db7c86d3",
  "name": "감자옹심이",
  "tags": [
   "먹거리"
  ],
  "zone": "t-8becdeab8553692f0bb4d234db7c86d3",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "감자옹심이"
 },
 {
  "id": "t-4eaffbe0ed2398d44ea18a838447ad97",
  "name": "마키노차야 롯데리조트속초점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-4eaffbe0ed2398d44ea18a838447ad97",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "마키노차야/롯데리조트속초점"
 },
 {
  "id": "t-fb0eb8aa4061d9a627c45b03e3b4cc5e",
  "name": "설악산책",
  "tags": [
   "카페"
  ],
  "zone": "t-fb0eb8aa4061d9a627c45b03e3b4cc5e",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "설악산책"
 },
 {
  "id": "t-510e74ca910b1fbdebce1e45df8ff0b3",
  "name": "복골순두부",
  "tags": [
   "먹거리"
  ],
  "zone": "t-510e74ca910b1fbdebce1e45df8ff0b3",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "복골순두부"
 },
 {
  "id": "t-f26f4d82795f5f87ed6f103ad84243d1",
  "name": "속초보리밥",
  "tags": [
   "먹거리"
  ],
  "zone": "t-f26f4d82795f5f87ed6f103ad84243d1",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초보리밥"
 },
 {
  "id": "t-e877f92148195ca2221d69be813d05e2",
  "name": "이정숙왕손만두찐빵",
  "tags": [
   "먹거리"
  ],
  "zone": "t-e877f92148195ca2221d69be813d05e2",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "이정숙왕손만두찐빵"
 },
 {
  "id": "t-c5c9d3bcb8903b42c851bfb51582e7b2",
  "name": "소연이네조개구이",
  "tags": [
   "먹거리"
  ],
  "zone": "t-c5c9d3bcb8903b42c851bfb51582e7b2",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "소연이네조개구이"
 },
 {
  "id": "t-aa4d671bfc78257252004ce71f021dfc",
  "name": "갱수네맛집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-aa4d671bfc78257252004ce71f021dfc",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "갱수네맛집"
 },
 {
  "id": "t-b0f1edd2a8bf125e71c27eef4100187e",
  "name": "커피말리",
  "tags": [
   "카페"
  ],
  "zone": "t-b0f1edd2a8bf125e71c27eef4100187e",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "커피말리"
 },
 {
  "id": "t-08c649e0a31642ad44d3a1e166d24328",
  "name": "옛날할머니순두부",
  "tags": [
   "먹거리"
  ],
  "zone": "t-08c649e0a31642ad44d3a1e166d24328",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "옛날할머니순두부"
 },
 {
  "id": "t-159e16988290b100fa110e06675bfc2a",
  "name": "영식이네순대국밥",
  "tags": [
   "먹거리"
  ],
  "zone": "t-159e16988290b100fa110e06675bfc2a",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "영식이네순대국밥"
 },
 {
  "id": "t-40b88c75f9732aa2ea68ca65ed9d5723",
  "name": "비오네손칼국수",
  "tags": [
   "먹거리"
  ],
  "zone": "t-40b88c75f9732aa2ea68ca65ed9d5723",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "비오네손칼국수"
 },
 {
  "id": "t-b32ed4c983eefdbc8b6d6fecb31086c4",
  "name": "원산면옥",
  "tags": [
   "먹거리"
  ],
  "zone": "t-b32ed4c983eefdbc8b6d6fecb31086c4",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "원산면옥"
 },
 {
  "id": "t-8baa5bf88f60bd31b5bc7a5baca10437",
  "name": "과원",
  "tags": [
   "먹거리"
  ],
  "zone": "t-8baa5bf88f60bd31b5bc7a5baca10437",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "과원"
 },
 {
  "id": "t-d45fd5492f632a4c4372c0422620fa29",
  "name": "선경분식",
  "tags": [
   "먹거리"
  ],
  "zone": "t-d45fd5492f632a4c4372c0422620fa29",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "선경분식"
 },
 {
  "id": "t-5149917816a7f9a6afac83814c9df05d",
  "name": "보광사",
  "tags": [
   "문화·역사"
  ],
  "zone": "t-5149917816a7f9a6afac83814c9df05d",
  "kind": "종교성지",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "보광사(속초)",
  "tmapName": "보광사"
 },
 {
  "id": "t-d01dfb177ca41228758afccd084cdd8c",
  "name": "수반점 [중식]",
  "tags": [
   "먹거리"
  ],
  "zone": "t-d01dfb177ca41228758afccd084cdd8c",
  "kind": "외국식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "수반점/[중식]"
 },
 {
  "id": "t-49d2ee8e55e1af7993aefbe516860b37",
  "name": "속초맛집이화",
  "tags": [
   "먹거리"
  ],
  "zone": "t-49d2ee8e55e1af7993aefbe516860b37",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초맛집이화"
 },
 {
  "id": "t-c56c0aadd976791897048382e8834607",
  "name": "속초바다해물누룽지탕",
  "tags": [
   "먹거리"
  ],
  "zone": "t-c56c0aadd976791897048382e8834607",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초바다해물누룽지탕"
 },
 {
  "id": "t-3db67f8b2d75d6435733e360cb26317a",
  "name": "어전가",
  "tags": [
   "먹거리"
  ],
  "zone": "t-3db67f8b2d75d6435733e360cb26317a",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "어전가"
 },
 {
  "id": "t-54973dbbb8247d8913dbe0d44c283e1f",
  "name": "동달속초",
  "tags": [
   "먹거리"
  ],
  "zone": "t-54973dbbb8247d8913dbe0d44c283e1f",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "동달속초"
 },
 {
  "id": "t-01914907fd73a7582893f44da9cd0dda",
  "name": "할머니감자탕",
  "tags": [
   "먹거리"
  ],
  "zone": "t-01914907fd73a7582893f44da9cd0dda",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "할머니감자탕"
 },
 {
  "id": "t-59d19f2975e78055e483571312761732",
  "name": "대포대게회직판장",
  "tags": [
   "먹거리"
  ],
  "zone": "t-59d19f2975e78055e483571312761732",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "대포대게회직판장"
 },
 {
  "id": "t-cd8b61535784bb0161bc470de243540f",
  "name": "속초용대리황태해장국",
  "tags": [
   "먹거리"
  ],
  "zone": "t-cd8b61535784bb0161bc470de243540f",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초용대리황태해장국"
 },
 {
  "id": "t-e9325a051feb233bc985dd3e5c6d02b3",
  "name": "아바이감자옹심이",
  "tags": [
   "먹거리"
  ],
  "zone": "t-e9325a051feb233bc985dd3e5c6d02b3",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "아바이감자옹심이"
 },
 {
  "id": "t-de8a20b09fcc75c1d790b0e0bfd501f8",
  "name": "속초갓포 [일식]",
  "tags": [
   "먹거리"
  ],
  "zone": "t-de8a20b09fcc75c1d790b0e0bfd501f8",
  "kind": "외국식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초갓포/[일식]"
 },
 {
  "id": "t-ec156681f6fdda3efee86109897e22d7",
  "name": "전주식당",
  "tags": [
   "먹거리"
  ],
  "zone": "t-ec156681f6fdda3efee86109897e22d7",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "전주식당"
 },
 {
  "id": "t-1a8d2ab943b4fc7223bfdf92f0881843",
  "name": "효키",
  "tags": [
   "카페"
  ],
  "zone": "t-1a8d2ab943b4fc7223bfdf92f0881843",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "효키"
 },
 {
  "id": "t-864740c83477409638326a75156b6bcc",
  "name": "속초진짜순대 중앙시장점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-864740c83477409638326a75156b6bcc",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초진짜순대/중앙시장점"
 },
 {
  "id": "t-12484e6c6028e3d90978a735e1a667b5",
  "name": "트리거",
  "tags": [
   "카페"
  ],
  "zone": "t-12484e6c6028e3d90978a735e1a667b5",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "트리거"
 },
 {
  "id": "t-c3aee310f106224093fa8fca63e99064",
  "name": "앙젤루스소원테마파크",
  "tags": [
   "자연·산책"
  ],
  "zone": "t-c3aee310f106224093fa8fca63e99064",
  "kind": "기타관광",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "앙젤루스소원테마파크"
 },
 {
  "id": "t-e082e41c811912c1e288fdce22f545a5",
  "name": "브루티풀",
  "tags": [
   "카페"
  ],
  "zone": "t-e082e41c811912c1e288fdce22f545a5",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "브루티풀"
 },
 {
  "id": "t-fa0fa8894bad71ad8aa69f411951cab2",
  "name": "궁잔기지떡 속초점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-fa0fa8894bad71ad8aa69f411951cab2",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "궁잔기지떡/속초점"
 },
 {
  "id": "t-eb8c4e2881dc328531d6eef08729e349",
  "name": "면사무소",
  "tags": [
   "먹거리"
  ],
  "zone": "t-eb8c4e2881dc328531d6eef08729e349",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "면사무소"
 },
 {
  "id": "t-bc039b2d74c3112ed3f15a9eeeb44649",
  "name": "장사항활어회직판장",
  "tags": [
   "먹거리"
  ],
  "zone": "t-bc039b2d74c3112ed3f15a9eeeb44649",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "장사항활어회직판장"
 },
 {
  "id": "t-a06f7462b417e70bbc5dc4e8d8fe4ecc",
  "name": "왕건횟집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-a06f7462b417e70bbc5dc4e8d8fe4ecc",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "왕건횟집"
 },
 {
  "id": "t-5dcab628779bd52613231c4057ebbab3",
  "name": "대명한식",
  "tags": [
   "먹거리"
  ],
  "zone": "t-5dcab628779bd52613231c4057ebbab3",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "대명한식"
 },
 {
  "id": "t-4a4629c658a7a7b6ec3c4ed8d3a7c82c",
  "name": "속초어장물회",
  "tags": [
   "먹거리"
  ],
  "zone": "t-4a4629c658a7a7b6ec3c4ed8d3a7c82c",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초어장물회"
 },
 {
  "id": "t-d275849a2840c55cfbd72b4731a2cc6b",
  "name": "육장갈비 속초노학점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-d275849a2840c55cfbd72b4731a2cc6b",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "육장갈비/속초노학점"
 },
 {
  "id": "t-a24a2a36ab4162d50374d08f055785ca",
  "name": "외가집 속초점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-a24a2a36ab4162d50374d08f055785ca",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "외가집/속초점"
 },
 {
  "id": "t-05c7728a690e9ec39ec3e64710bb1c80",
  "name": "굴나라 속초점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-05c7728a690e9ec39ec3e64710bb1c80",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "굴나라/속초점"
 },
 {
  "id": "t-d0ce1ab995f0b6ae851986e8cfa28797",
  "name": "커피해요",
  "tags": [
   "카페"
  ],
  "zone": "t-d0ce1ab995f0b6ae851986e8cfa28797",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "커피해요"
 },
 {
  "id": "t-e7884071e925bc032f94c50365e6bea0",
  "name": "속초록",
  "tags": [
   "먹거리"
  ],
  "zone": "t-e7884071e925bc032f94c50365e6bea0",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초록"
 },
 {
  "id": "t-85879053363ef3be584629033715db55",
  "name": "큰집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-85879053363ef3be584629033715db55",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "큰집"
 },
 {
  "id": "t-2e34a6430cda8c739d5ea5ae91c964c7",
  "name": "동해안붉은대게",
  "tags": [
   "먹거리"
  ],
  "zone": "t-2e34a6430cda8c739d5ea5ae91c964c7",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "동해안붉은대게"
 },
 {
  "id": "t-686ff5653a5b3d8de770cd80bb940823",
  "name": "학무정",
  "tags": [
   "문화·역사"
  ],
  "zone": "t-686ff5653a5b3d8de770cd80bb940823",
  "kind": "역사유적지",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "학무정",
  "tmapName": "학무정"
 },
 {
  "id": "t-dd131d0238d76ddfb06b409fbe20aa46",
  "name": "돌돼지314자갈구이삼겹살 속초본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-dd131d0238d76ddfb06b409fbe20aa46",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "돌돼지314자갈구이삼겹살/속초본점"
 },
 {
  "id": "t-63b9a0832bd5f8de0408235a22538850",
  "name": "인생소고기",
  "tags": [
   "먹거리"
  ],
  "zone": "t-63b9a0832bd5f8de0408235a22538850",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "인생소고기"
 },
 {
  "id": "t-9b3d3dbf0403c428c1e0e02b656db9fb",
  "name": "송도물회 2호점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-9b3d3dbf0403c428c1e0e02b656db9fb",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "송도물회/2호점"
 },
 {
  "id": "t-c15ac6a924febf79203f6cee0fb1baef",
  "name": "옛날숯불녹원갈비",
  "tags": [
   "먹거리"
  ],
  "zone": "t-c15ac6a924febf79203f6cee0fb1baef",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "옛날숯불녹원갈비"
 },
 {
  "id": "t-8de0a066fa60691e4ea5dee8effccb4f",
  "name": "금강산옹심이막국수",
  "tags": [
   "먹거리"
  ],
  "zone": "t-8de0a066fa60691e4ea5dee8effccb4f",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "금강산옹심이막국수"
 },
 {
  "id": "t-aa08af206d28f8d75277e3caf737f3ff",
  "name": "됐고연탄한우실비",
  "tags": [
   "먹거리"
  ],
  "zone": "t-aa08af206d28f8d75277e3caf737f3ff",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "됐고연탄한우실비"
 },
 {
  "id": "t-342a7e5f54819c27c75ecfd4e5a566da",
  "name": "아바이마을활어회센터",
  "tags": [
   "먹거리"
  ],
  "zone": "t-342a7e5f54819c27c75ecfd4e5a566da",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "아바이마을활어회센터"
 },
 {
  "id": "t-53d23b782d9ab6b1b7314c13620138ba",
  "name": "속초국밥",
  "tags": [
   "먹거리"
  ],
  "zone": "t-53d23b782d9ab6b1b7314c13620138ba",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초국밥"
 },
 {
  "id": "t-62c96537996dd791305f0ca9e4795e43",
  "name": "속초초당순두부",
  "tags": [
   "먹거리"
  ],
  "zone": "t-62c96537996dd791305f0ca9e4795e43",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초초당순두부"
 },
 {
  "id": "t-2cac935cee3d6228c3989fe85b33820f",
  "name": "영동떡방앗간",
  "tags": [
   "먹거리"
  ],
  "zone": "t-2cac935cee3d6228c3989fe85b33820f",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "영동떡방앗간"
 },
 {
  "id": "t-e0a82aa182d58f2cf3483f94a3ee4aa0",
  "name": "속초동명항게찜",
  "tags": [
   "먹거리"
  ],
  "zone": "t-e0a82aa182d58f2cf3483f94a3ee4aa0",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초동명항게찜"
 },
 {
  "id": "t-736be3876c138fc1f4ac8cbb9ec18e30",
  "name": "코끼리분식",
  "tags": [
   "먹거리"
  ],
  "zone": "t-736be3876c138fc1f4ac8cbb9ec18e30",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "코끼리분식"
 },
 {
  "id": "t-864d02f144abe0b9a476459976d538f3",
  "name": "해피아울하우스",
  "tags": [
   "문화·역사"
  ],
  "zone": "t-864d02f144abe0b9a476459976d538f3",
  "kind": "전시시설",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "해피아울하우스"
 },
 {
  "id": "t-0b5c03e7f255e6d0a720618b90f425eb",
  "name": "설악궁전식당",
  "tags": [
   "먹거리"
  ],
  "zone": "t-0b5c03e7f255e6d0a720618b90f425eb",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "설악궁전식당"
 },
 {
  "id": "t-300246d2c6f566eb1445466dc03f249d",
  "name": "커피휘림",
  "tags": [
   "카페"
  ],
  "zone": "t-300246d2c6f566eb1445466dc03f249d",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "커피휘림"
 },
 {
  "id": "t-07fd3769238d6c2dab913aa967a2ea3c",
  "name": "영광정막국수 속초점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-07fd3769238d6c2dab913aa967a2ea3c",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "영광정막국수/속초점"
 },
 {
  "id": "t-a4405550c6eaff5ea665be810b33eaa4",
  "name": "은진네횟집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-a4405550c6eaff5ea665be810b33eaa4",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "은진네횟집"
 },
 {
  "id": "t-9b8d3cad0c9d00670411550e610d4ddd",
  "name": "등대곳간",
  "tags": [
   "먹거리"
  ],
  "zone": "t-9b8d3cad0c9d00670411550e610d4ddd",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "등대곳간"
 },
 {
  "id": "t-1a5513e89f4a9e38b4fb4522f31e4cf8",
  "name": "속초해변물회",
  "tags": [
   "먹거리"
  ],
  "zone": "t-1a5513e89f4a9e38b4fb4522f31e4cf8",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초해변물회"
 },
 {
  "id": "t-0e74331c081893fe78c65cde913c9c25",
  "name": "예원수육국밥",
  "tags": [
   "먹거리"
  ],
  "zone": "t-0e74331c081893fe78c65cde913c9c25",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "예원수육국밥"
 },
 {
  "id": "t-f89f73ee2f6a818221438b6493c03a51",
  "name": "설악스케치",
  "tags": [
   "먹거리"
  ],
  "zone": "t-f89f73ee2f6a818221438b6493c03a51",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "설악스케치"
 },
 {
  "id": "t-c5d102d18915864ecbbe086217af5db3",
  "name": "별미순대국",
  "tags": [
   "먹거리"
  ],
  "zone": "t-c5d102d18915864ecbbe086217af5db3",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "별미순대국"
 },
 {
  "id": "t-8421198b974e4413a8e9577ab50cb808",
  "name": "초원순두부",
  "tags": [
   "먹거리"
  ],
  "zone": "t-8421198b974e4413a8e9577ab50cb808",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "초원순두부"
 },
 {
  "id": "t-e7328f8db7d76789a85260a4889585c4",
  "name": "장원능이버섯백숙",
  "tags": [
   "먹거리"
  ],
  "zone": "t-e7328f8db7d76789a85260a4889585c4",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "장원능이버섯백숙"
 },
 {
  "id": "t-233b949114aa4a5bca34c48b0f732227",
  "name": "대만족본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-233b949114aa4a5bca34c48b0f732227",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "대만족본점"
 },
 {
  "id": "t-c81fc17ca6894b9c9597745aadfa9899",
  "name": "이스트7",
  "tags": [
   "카페"
  ],
  "zone": "t-c81fc17ca6894b9c9597745aadfa9899",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "이스트7"
 },
 {
  "id": "t-1b3581575e47471961228cb5daf78230",
  "name": "비키베이크샵",
  "tags": [
   "카페"
  ],
  "zone": "t-1b3581575e47471961228cb5daf78230",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "비키베이크샵"
 },
 {
  "id": "t-3cde728c181890a6f1f8f8acf2030e81",
  "name": "아바이순대타운",
  "tags": [
   "먹거리"
  ],
  "zone": "t-3cde728c181890a6f1f8f8acf2030e81",
  "kind": "음식점기타",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "아바이순대타운"
 },
 {
  "id": "t-644bd0dd410d68a4f88523ab796c39f4",
  "name": "속초회국수",
  "tags": [
   "먹거리"
  ],
  "zone": "t-644bd0dd410d68a4f88523ab796c39f4",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초회국수"
 },
 {
  "id": "t-d1774b902c2d12da488ef15d9ee95efd",
  "name": "월드킹 속초점",
  "tags": [
   "체험"
  ],
  "zone": "t-d1774b902c2d12da488ef15d9ee95efd",
  "kind": "테마공원",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "월드킹/속초점"
 },
 {
  "id": "t-e6622c2b997ff867d5166205bda9e8ff",
  "name": "허니네",
  "tags": [
   "먹거리"
  ],
  "zone": "t-e6622c2b997ff867d5166205bda9e8ff",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "허니네"
 },
 {
  "id": "t-583d93f1521ff8fb5d3d6324b8e9eb91",
  "name": "메이트힐로스터리카페",
  "tags": [
   "카페"
  ],
  "zone": "t-583d93f1521ff8fb5d3d6324b8e9eb91",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "메이트힐로스터리카페"
 },
 {
  "id": "t-7bbd59b38c25596743c6239c35d3fa92",
  "name": "온천뜰",
  "tags": [
   "먹거리"
  ],
  "zone": "t-7bbd59b38c25596743c6239c35d3fa92",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "온천뜰"
 },
 {
  "id": "t-cdc1d6d41f5ab3c509c0a5f5fc06fd93",
  "name": "리틀꼬마김밥 속초조양점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-cdc1d6d41f5ab3c509c0a5f5fc06fd93",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "리틀꼬마김밥/속초조양점"
 },
 {
  "id": "t-a32f1db9d12a15891bae199b9f50d4d6",
  "name": "레이저어택",
  "tags": [
   "체험"
  ],
  "zone": "t-a32f1db9d12a15891bae199b9f50d4d6",
  "kind": "기타레저스포츠",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "레이저어택"
 },
 {
  "id": "t-60d15cfd02b8198c2d9149df0975e2b1",
  "name": "갯배피자",
  "tags": [
   "먹거리"
  ],
  "zone": "t-60d15cfd02b8198c2d9149df0975e2b1",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "갯배피자"
 },
 {
  "id": "t-259cec3c94344f3e0526f75b830a98ef",
  "name": "진숯불닭갈비",
  "tags": [
   "먹거리"
  ],
  "zone": "t-259cec3c94344f3e0526f75b830a98ef",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "진숯불닭갈비"
 },
 {
  "id": "t-676e0aa474f80452c0e4a76e148fcd99",
  "name": "굽탁",
  "tags": [
   "먹거리"
  ],
  "zone": "t-676e0aa474f80452c0e4a76e148fcd99",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "굽탁"
 },
 {
  "id": "t-981381d442da7c1e2583b77ce274c774",
  "name": "효레의식당 속초점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-981381d442da7c1e2583b77ce274c774",
  "kind": "외국식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "효레의식당/속초점"
 },
 {
  "id": "t-b090643d6b8f738eac21a514f3d34579",
  "name": "옛북청아바이순대",
  "tags": [
   "먹거리"
  ],
  "zone": "t-b090643d6b8f738eac21a514f3d34579",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "옛북청아바이순대"
 },
 {
  "id": "t-af87eef5403b0acdb3f75b24b9771218",
  "name": "커피장사카페",
  "tags": [
   "카페"
  ],
  "zone": "t-af87eef5403b0acdb3f75b24b9771218",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "커피장사카페"
 },
 {
  "id": "t-1f7496ce943619d1bacdc1227b9e8240",
  "name": "미소초밥",
  "tags": [
   "먹거리"
  ],
  "zone": "t-1f7496ce943619d1bacdc1227b9e8240",
  "kind": "외국식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "미소초밥"
 },
 {
  "id": "t-ccb424f0ba3067ca69e9dde8364798dd",
  "name": "3촌짬뽕 [중식]",
  "tags": [
   "먹거리"
  ],
  "zone": "t-ccb424f0ba3067ca69e9dde8364798dd",
  "kind": "외국식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "3촌짬뽕/[중식]"
 },
 {
  "id": "t-b543099c18a333dcf5a79ffe024bf868",
  "name": "피자스쿨 속초조양점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-b543099c18a333dcf5a79ffe024bf868",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "피자스쿨/속초조양점"
 },
 {
  "id": "t-bd9adca5bd7b6e81c55273d912da2b2d",
  "name": "봉포한일수산횟집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-bd9adca5bd7b6e81c55273d912da2b2d",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "봉포한일수산횟집"
 },
 {
  "id": "t-b608616f0f21c1b8efd78bcd87707df7",
  "name": "복수산해물탕",
  "tags": [
   "먹거리"
  ],
  "zone": "t-b608616f0f21c1b8efd78bcd87707df7",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "복수산해물탕"
 },
 {
  "id": "t-0b3828ea7b4cd812f66683c025929244",
  "name": "학사평콩꽃마을순두부촌",
  "tags": [
   "먹거리"
  ],
  "zone": "t-0b3828ea7b4cd812f66683c025929244",
  "kind": "음식점기타",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": "학사평 콩꽃마을 순두부촌",
  "tmapName": "학사평콩꽃마을순두부촌"
 },
 {
  "id": "t-b61c3ce753a2060d98a4a9678d906f4d",
  "name": "하누정원 속초청초호본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-b61c3ce753a2060d98a4a9678d906f4d",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "하누정원/속초청초호본점"
 },
 {
  "id": "t-54ee3e3d4bd4596dd92a7f19968336ed",
  "name": "아바이조개생선구이",
  "tags": [
   "먹거리"
  ],
  "zone": "t-54ee3e3d4bd4596dd92a7f19968336ed",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "아바이조개생선구이"
 },
 {
  "id": "t-2f1000cb0464b60cbb1d4edffd52fc9a",
  "name": "대랑골누룽지삼계탕",
  "tags": [
   "먹거리"
  ],
  "zone": "t-2f1000cb0464b60cbb1d4edffd52fc9a",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "대랑골누룽지삼계탕"
 },
 {
  "id": "t-5363d24cf90d7505bdb79505dabd4cc4",
  "name": "장사항홍게사랑",
  "tags": [
   "먹거리"
  ],
  "zone": "t-5363d24cf90d7505bdb79505dabd4cc4",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "장사항홍게사랑"
 },
 {
  "id": "t-f385bede65f2a53399328ae398fb51a5",
  "name": "속초대게정",
  "tags": [
   "먹거리"
  ],
  "zone": "t-f385bede65f2a53399328ae398fb51a5",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초대게정"
 },
 {
  "id": "t-56d79ce19f2f12a262b2cd6008da885c",
  "name": "왱왱해물촌",
  "tags": [
   "먹거리"
  ],
  "zone": "t-56d79ce19f2f12a262b2cd6008da885c",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "왱왱해물촌"
 },
 {
  "id": "t-4fe0a22bce32162d7d0d94d89eef54e1",
  "name": "백김시대",
  "tags": [
   "먹거리"
  ],
  "zone": "t-4fe0a22bce32162d7d0d94d89eef54e1",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "백김시대"
 },
 {
  "id": "t-d96132ba01e51b4ba96c0459e01538db",
  "name": "속초복집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-d96132ba01e51b4ba96c0459e01538db",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초복집"
 },
 {
  "id": "t-476c0d46719691fdae060255288d0815",
  "name": "대포항난전활어시장",
  "tags": [
   "시장"
  ],
  "zone": "t-476c0d46719691fdae060255288d0815",
  "kind": "시장",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "대포항난전활어시장"
 },
 {
  "id": "t-efafb409f7b46fcf4a0db398ab7a45c7",
  "name": "추필여국시",
  "tags": [
   "먹거리"
  ],
  "zone": "t-efafb409f7b46fcf4a0db398ab7a45c7",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "추필여국시"
 },
 {
  "id": "t-3b295c79995f15287ee147a584d023df",
  "name": "돌섬대게횟집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-3b295c79995f15287ee147a584d023df",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "돌섬대게횟집"
 },
 {
  "id": "t-c258eda2dd1bf3d16746548945b0d182",
  "name": "뽀빠이수제돈까스전문점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-c258eda2dd1bf3d16746548945b0d182",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "뽀빠이수제돈까스전문점"
 },
 {
  "id": "t-2881023a0d67349c7b52414329867d15",
  "name": "조양동선사유적지",
  "tags": [
   "문화·역사"
  ],
  "zone": "t-2881023a0d67349c7b52414329867d15",
  "kind": "역사유적지",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "조양동선사유적지"
 },
 {
  "id": "t-0ab2512f65d9b270624c0676747e6ecb",
  "name": "명품고기랑조개랑",
  "tags": [
   "먹거리"
  ],
  "zone": "t-0ab2512f65d9b270624c0676747e6ecb",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "명품고기랑조개랑"
 },
 {
  "id": "t-e99f705dbcb0aa08680ed76e432be04d",
  "name": "낭그베이커리",
  "tags": [
   "먹거리"
  ],
  "zone": "t-e99f705dbcb0aa08680ed76e432be04d",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "낭그베이커리"
 },
 {
  "id": "t-e81daeccd736ce96b65495c974bde117",
  "name": "문어랑 속초본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-e81daeccd736ce96b65495c974bde117",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "문어랑/속초본점"
 },
 {
  "id": "t-a2b7163661fb59f2c4620cc5516b0fde",
  "name": "하누랑돈이랑 본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-a2b7163661fb59f2c4620cc5516b0fde",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "하누랑돈이랑/본점"
 },
 {
  "id": "t-482d33f264cff030cbf15aae3e6e851c",
  "name": "산마루순두부",
  "tags": [
   "먹거리"
  ],
  "zone": "t-482d33f264cff030cbf15aae3e6e851c",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "산마루순두부"
 },
 {
  "id": "t-0b258b955e7a57f8564a8f82d4e4951a",
  "name": "청호항",
  "tags": [
   "바다"
  ],
  "zone": "t-0b258b955e7a57f8564a8f82d4e4951a",
  "kind": "자연경관(하천/해양)",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "청호항"
 },
 {
  "id": "t-fac4ac4106425c1d367a6e0564748456",
  "name": "속초바베큐338생선구이",
  "tags": [
   "먹거리"
  ],
  "zone": "t-fac4ac4106425c1d367a6e0564748456",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초바베큐338생선구이"
 },
 {
  "id": "t-f5ac835ecdea7ea1b87935c445f088d5",
  "name": "속초관광수산시장회센터",
  "tags": [
   "먹거리"
  ],
  "zone": "t-f5ac835ecdea7ea1b87935c445f088d5",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초관광수산시장회센터"
 },
 {
  "id": "t-69526f1e6178da687637000839f0c72a",
  "name": "다이닝옥남",
  "tags": [
   "먹거리"
  ],
  "zone": "t-69526f1e6178da687637000839f0c72a",
  "kind": "외국식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "다이닝옥남"
 },
 {
  "id": "t-8c10b9ad597bd1c76af2351a02c2abe7",
  "name": "부유네한식뷔페",
  "tags": [
   "먹거리"
  ],
  "zone": "t-8c10b9ad597bd1c76af2351a02c2abe7",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "부유네한식뷔페"
 },
 {
  "id": "t-92c996f8f7fd1e84135b92b6605eda93",
  "name": "정세기탁구클럽",
  "tags": [
   "체험"
  ],
  "zone": "t-92c996f8f7fd1e84135b92b6605eda93",
  "kind": "기타레저스포츠",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "정세기탁구클럽"
 },
 {
  "id": "t-761fcd9ac4512db6e0b9aff32dccbb05",
  "name": "봉이밥 속초금호점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-761fcd9ac4512db6e0b9aff32dccbb05",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "봉이밥/속초금호점"
 },
 {
  "id": "t-9bee979a67ff187b3a6638cba82f3777",
  "name": "바다해풍",
  "tags": [
   "먹거리"
  ],
  "zone": "t-9bee979a67ff187b3a6638cba82f3777",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "바다해풍"
 },
 {
  "id": "t-8f8b30799a13bd97c5ba3a6594f60430",
  "name": "레드아보",
  "tags": [
   "카페"
  ],
  "zone": "t-8f8b30799a13bd97c5ba3a6594f60430",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "레드아보"
 },
 {
  "id": "t-78fbcf7fa5e05ea441fcefb007424805",
  "name": "홍용가 [중식]",
  "tags": [
   "먹거리"
  ],
  "zone": "t-78fbcf7fa5e05ea441fcefb007424805",
  "kind": "외국식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "홍용가/[중식]"
 },
 {
  "id": "t-6130523c9a6b77bc0ac574890732f824",
  "name": "대해가",
  "tags": [
   "먹거리"
  ],
  "zone": "t-6130523c9a6b77bc0ac574890732f824",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "대해가"
 },
 {
  "id": "t-6103198c49df0ffb9a7a3a3e4fa0df59",
  "name": "조롱박",
  "tags": [
   "먹거리"
  ],
  "zone": "t-6103198c49df0ffb9a7a3a3e4fa0df59",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "조롱박"
 },
 {
  "id": "t-da1f6ad7669cdc294bcb7338e8cd60e4",
  "name": "도리스파티세리 본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-da1f6ad7669cdc294bcb7338e8cd60e4",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "도리스파티세리/본점"
 },
 {
  "id": "t-4ac53ecffc4e40fb0df2dc6586165733",
  "name": "아지트",
  "tags": [
   "먹거리"
  ],
  "zone": "t-4ac53ecffc4e40fb0df2dc6586165733",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "아지트"
 },
 {
  "id": "t-c70c2396befb88bbf34acc4bf2110120",
  "name": "메누버",
  "tags": [
   "먹거리"
  ],
  "zone": "t-c70c2396befb88bbf34acc4bf2110120",
  "kind": "음식점기타",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "메누버"
 },
 {
  "id": "t-ec8b8cafbaa8480f94af6dcafaf0c2f8",
  "name": "속초꽃감자",
  "tags": [
   "먹거리"
  ],
  "zone": "t-ec8b8cafbaa8480f94af6dcafaf0c2f8",
  "kind": "음식점기타",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초꽃감자"
 },
 {
  "id": "t-8b6be7816c7bf90d4ed9bf246cdff74c",
  "name": "요기국수김밥",
  "tags": [
   "먹거리"
  ],
  "zone": "t-8b6be7816c7bf90d4ed9bf246cdff74c",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "요기국수김밥"
 },
 {
  "id": "t-172720b6b57e86e512a0986ec4bc4c84",
  "name": "배가네찜",
  "tags": [
   "먹거리"
  ],
  "zone": "t-172720b6b57e86e512a0986ec4bc4c84",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "배가네찜"
 },
 {
  "id": "t-99494821ee6f6facf2b0c1303bc04267",
  "name": "대포곰치탕대구탕",
  "tags": [
   "먹거리"
  ],
  "zone": "t-99494821ee6f6facf2b0c1303bc04267",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "대포곰치탕대구탕"
 },
 {
  "id": "t-ef8e2a386dedacbd433bc6ab80551c11",
  "name": "함가네생선구이",
  "tags": [
   "먹거리"
  ],
  "zone": "t-ef8e2a386dedacbd433bc6ab80551c11",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "함가네생선구이"
 },
 {
  "id": "t-f538da6a1331135675a65f47be8b82ca",
  "name": "교촌치킨 속초교동점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-f538da6a1331135675a65f47be8b82ca",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "교촌치킨/속초교동점"
 },
 {
  "id": "t-e470b94282d70dce3be32fd752431864",
  "name": "스타대게횟집",
  "tags": [
   "먹거리"
  ],
  "zone": "t-e470b94282d70dce3be32fd752431864",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "스타대게횟집"
 },
 {
  "id": "t-371ea2ec896d1e59de9a244f343fc2d0",
  "name": "대포항난전먹거리시장",
  "tags": [
   "시장"
  ],
  "zone": "t-371ea2ec896d1e59de9a244f343fc2d0",
  "kind": "시장",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "대포항난전먹거리시장"
 },
 {
  "id": "t-d140e74887c560dcb45a9547c630d088",
  "name": "백금당 속초점",
  "tags": [
   "카페"
  ],
  "zone": "t-d140e74887c560dcb45a9547c630d088",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "백금당/속초점"
 },
 {
  "id": "t-6d50f19765c516e01f68134ad4a29177",
  "name": "속초24시속풀이해장국",
  "tags": [
   "먹거리"
  ],
  "zone": "t-6d50f19765c516e01f68134ad4a29177",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초24시속풀이해장국"
 },
 {
  "id": "t-2406dadc5013680993aabe53e0252c8e",
  "name": "북청전통아바이순대 2대본점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-2406dadc5013680993aabe53e0252c8e",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "북청전통아바이순대/2대본점"
 },
 {
  "id": "t-251dac7de8cfc109cc7e081eaf2e912c",
  "name": "갈풍집 속초점",
  "tags": [
   "먹거리"
  ],
  "zone": "t-251dac7de8cfc109cc7e081eaf2e912c",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "갈풍집/속초점"
 },
 {
  "id": "t-ffc08471d59fea33b828a7fbde9941bb",
  "name": "라헬의부엌 속초점",
  "tags": [
   "카페"
  ],
  "zone": "t-ffc08471d59fea33b828a7fbde9941bb",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "라헬의부엌/속초점"
 },
 {
  "id": "t-e9dd314c7c09b53467cffc6db361d263",
  "name": "속초산도",
  "tags": [
   "먹거리"
  ],
  "zone": "t-e9dd314c7c09b53467cffc6db361d263",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "속초산도"
 },
 {
  "id": "t-950dc74ca1a9eec6b3d4c0eb19a751e0",
  "name": "원이네회식당",
  "tags": [
   "먹거리"
  ],
  "zone": "t-950dc74ca1a9eec6b3d4c0eb19a751e0",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "원이네회식당"
 },
 {
  "id": "t-abb01421652cc366c042611db860a1a0",
  "name": "이찌바라멘",
  "tags": [
   "먹거리"
  ],
  "zone": "t-abb01421652cc366c042611db860a1a0",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "이찌바라멘"
 },
 {
  "id": "t-5aa12c28c0b04278e7cf241c6bb91416",
  "name": "바래봉식당",
  "tags": [
   "먹거리"
  ],
  "zone": "t-5aa12c28c0b04278e7cf241c6bb91416",
  "kind": "한식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "바래봉식당"
 },
 {
  "id": "t-fbab4a6e528586571b0ea2f47da24b97",
  "name": "브라더후드",
  "tags": [
   "카페"
  ],
  "zone": "t-fbab4a6e528586571b0ea2f47da24b97",
  "kind": "카페/찻집",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "브라더후드"
 },
 {
  "id": "t-36c6a6236dafe6ba5518f3c10161ffc4",
  "name": "설악기정떡",
  "tags": [
   "먹거리"
  ],
  "zone": "t-36c6a6236dafe6ba5518f3c10161ffc4",
  "kind": "간이음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "설악기정떡"
 },
 {
  "id": "t-0d8be09081f462b9e018d4d46de6d6f5",
  "name": "굴향",
  "tags": [
   "먹거리"
  ],
  "zone": "t-0d8be09081f462b9e018d4d46de6d6f5",
  "kind": "전문음식",
  "description": "",
  "address": null,
  "hours": null,
  "cnctrName": null,
  "tmapName": "굴향"
 }
];
