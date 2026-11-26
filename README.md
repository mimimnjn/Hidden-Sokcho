# 숨은 속초

내 취향에 맞는 속초 여행지를, 사람 적은 곳과 아직 덜 알려진 곳부터 추천하는 웹사이트입니다.

**사이트:** https://mimimnjn.github.io/Hidden-Sokcho/

Hidden Sokcho recommends places in Sokcho, Korea by your taste, putting quiet and lesser-known spots first to spread tourists away from crowded hotspots.

## 할 수 있는 것

- **말로 물어보기:** "조용한 바다 보고 싶어", "비 오는 날 갈 데"처럼 말하면 그날 사람 적은 곳을 골라 줍니다. 장소 이름으로도 찾을 수 있습니다. 말은 단어 규칙과 직접 학습시킨 취향 모델이 함께 알아듣습니다.
- **여기 사람 많으면 여기로:** 고른 날 사람이 몰릴 것으로 예측되는 곳 옆에, 같은 취향이면서 다른 동네에 있는 곳을 보여 줍니다.
- **숨은 명소:** 공식 관광지로 소개되지만 아직 찾는 사람이 적은 곳입니다.
- **장소 상세:** 그날 혼잡 예측, 날씨, 찾는 정도, 주소, 운영 시간, 근처 맛집과 지도를 한 화면에 보여 줍니다.

## 데이터

- 한국관광공사 공공데이터: 관광지 집중률 방문자 추이 예측, 관광지별 연관 관광지 정보, 관광빅데이터 지역별 방문자수, 국문 관광정보 서비스, 관광사진
- 기상청 공공데이터: 단기예보
- SNS 게시물 수: 팀이 직접 조사한 숫자 (2026년 10월, 장소별 집계 숫자만 저장)
- 공공누리 조건에 따라 출처를 표시합니다. 관광사진의 저작권은 한국관광공사에 있습니다.
- **혼잡도는 실시간이 아니라 예측값입니다.** 각 장소의 가장 붐비는 날과 비교한 값이라 장소끼리 비교하지 않습니다.
- 예측 데이터는 정해진 기간(사이트 맨 아래에 표시)까지만 있습니다.

## 직접 학습한 취향 모델

사용자가 친 문장에서 취향 7개(바다·산책·문화·체험·시장·맛집·카페)와 조건 3개(조용·실내·핫)를 알아듣는 작은 AI입니다. 라이브러리 없이 나이브 베이즈로 직접 구현했고 브라우저 안에서 돌아갑니다.

- 방법: 다중 라벨 나이브 베이즈. 라벨마다 "맞다 / 아니다"를 따로 판단하고 라플라스 평활을 씁니다. 문장은 띄어쓴 단어, 글자 하나, 붙은 글자 두 개로 쪼갭니다 (`js/taste-model.js`)
- 학습: 질문 문장 191개(`ml/taste-train.txt`, 취향 없는 말 포함)와 장소 소개 글 557개
- 시험: 학습에도 설정 고르기에도 쓰지 않은 문장 67개(`ml/taste-test.txt`)
- 설정: 학습 문장만으로 5겹 교차 검증을 돌려 골랐습니다 (`scripts/tune-taste.js` → `ml/tuned.json`)
- 근거 없는 판단을 막으려고 몇 번 안 나온 드문 조각은 버리고, 어디에나 붙는 "속초"는 조각에서 뺍니다
- 단어 규칙이 못 알아들은 쪽만 모델이 채웁니다. 사이트 대화창에서 모델이 알아들은 말에는 AI 표시가 붙습니다

점수 (`ml/results.md`)

| | 단어 규칙만 | 단어 규칙 + 모델 (사이트가 쓰는 것) |
|---|---|---|
| 교차 검증 F1 (학습 문장 안에서) | 84% | 87% |
| 시험 F1 (시험 문장 67개) | 85% | 89% |

시험 문장 자세히

| 방법 | 정밀도 | 재현율 | F1 |
|---|---|---|---|
| 단어 규칙만 | 100% | 74% | 85% |
| 모델만 (합치기용 설정 그대로) | 92% | 66% | 77% |
| 단어 규칙 + 모델 | 96% | 83% | 89% |

학습과 채점을 다시 해 보려면 (Node.js 18 이상)

```bash
node scripts/train-taste.js   # data/taste-model.js 다시 만들기
node scripts/eval-taste.js    # 시험 문장으로 점수 재기 → ml/results.md
node --test                   # 모델 파일이 학습 문장과 맞는지, MCP 서버가 답하는지 검사
```

## AI 앱에 연결하기 (MCP)

숨은 속초의 데이터와 취향 모델을 Claude 같은 AI 앱에서 쓸 수 있게 MCP 서버를 같이 공개합니다. MCP는 AI 앱이 바깥 도구를 부를 때 쓰는 공통 규격입니다. 서버(`mcp/server.js`)는 SDK 없이 규격을 직접 구현했고, 사이트와 같은 데이터와 코드를 씁니다. 내 컴퓨터에서 돌아가며 키나 로그인은 필요 없습니다.

**혼잡은 실시간이 아니라 예측값입니다.** 예측 기간이 지난 날짜에는 혼잡 없이 답합니다.

### 준비

1. Node.js 18 이상을 설치합니다. 터미널에서 `node --version`으로 확인합니다.
2. 저장소를 받습니다.
   ```bash
   git clone https://github.com/mimimnjn/Hidden-Sokcho.git
   ```
3. 받은 폴더 안 `mcp/server.js`의 전체 경로를 확인합니다. 아래 예시의 경로를 이 경로로 바꿔 씁니다.

### Claude Code

```bash
claude mcp add --transport stdio hidden-sokcho -- node /Users/me/Hidden-Sokcho/mcp/server.js
```

- Windows라면 경로를 `C:\Users\me\Hidden-Sokcho\mcp\server.js`처럼 씁니다.
- 기본은 지금 프로젝트에서 나만 씁니다. 모든 프로젝트에서 쓰려면 `--scope user`를 이름 앞에 붙입니다.
- `claude mcp list`나 Claude Code 안에서 `/mcp`로 연결됐는지 봅니다.

### Claude 데스크톱

1. Claude 데스크톱의 Settings → Developer → Edit Config를 누르면 설정 파일이 열립니다.
   - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
2. `mcpServers` 안에 아래 항목을 넣습니다. 다른 서버가 이미 있으면 `"hidden-sokcho"` 항목만 더합니다.
   ```json
   {
     "mcpServers": {
       "hidden-sokcho": {
         "command": "node",
         "args": ["/Users/me/Hidden-Sokcho/mcp/server.js"]
       }
     }
   }
   ```
   Windows에서는 JSON 안의 역슬래시를 두 번 씁니다: `"C:\\Users\\me\\Hidden-Sokcho\\mcp\\server.js"`
3. Claude 데스크톱을 완전히 종료했다가 다시 켭니다.

### 도구 10개

| 도구 | 하는 일 |
|---|---|
| `recommend_from_request` | 사용자가 한 말을 그대로 받아 취향 모델과 단어 규칙으로 알아듣고, 그날 사람 적은 곳부터 추천합니다. 알아들은 것과 모델이 판단한 확률도 같이 줍니다 |
| `search_places` | 이름·메뉴나 취향으로 장소 찾기 |
| `get_crowd` | 그날 혼잡 예측 (예측이 있는 곳만) |
| `find_alternatives` | 사람 많을 때 대신 갈 곳 |
| `hidden_gems` | 숨은 명소 |
| `hot_restaurants` | 요즘 인기 맛집과 줄 서는 곳 |
| `best_days` | 예측 기간 안에서 사람 적은 날 |
| `nearby_food` | 근처 식당·카페 |
| `weather_plan` | 날씨 보고 실내·야외 추천 |
| `sns_trend` | SNS에서 뜨는 관광지 |

연결한 뒤에는 "조용한 바다 보고 커피 마실 데 추천해 줘", "동명항 사람 많으면 대신 갈 데"처럼 물으면 됩니다.

## 만든 방법

HTML · CSS · JavaScript만으로 만든 정적 사이트입니다. 서버나 외부 API 호출 없이 미리 받아 둔 데이터 파일을 읽습니다. 오디세이 활동으로 진행한 CrowdFlow 프로젝트의 공개판이며, 생성형 AI 코딩 도구(Claude Code)를 활용해 구현했습니다.
