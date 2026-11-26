// 첫 화면 대화창 (Design 캔버스 "대화형" 시안 H2를 앱에 옮김, 2026-10-06)
// 말을 알아듣는 방법 두 가지를 합친다 (2026-11-26). 둘 다 브라우저 안에서 돌고 유료 API는 쓰지 않음
// - 단어 규칙 understandRules(): 사람이 정한 단어 목록
// - 취향 모델 predictTaste(): 문장으로 직접 학습한 나이브 베이즈 (js/taste-model.js, data/taste-model.js)
// MCP와는 별개다. MCP는 Claude 같은 AI 앱이 이 데이터를 쓰게 하는 연결 통로 (mcp/server.js)

// ── 1. 말 알아듣기 (화면과 상관없는 순수 함수라 테스트 가능) ──
const TASTE_WORDS = {
  "바다": /바다|해변|해수욕|항구|파도|등대|일출|오션|방파제|갯바위|야경|노을|일몰|해안|서핑|요트/,
  "자연·산책": /산책|걷|걸어|걸을|걸으|맨발|숲|등산|산길|설악|호수|둘레길|폭포|계곡|자연|단풍|꽃길/,
  "문화·역사": /문화|역사|박물관|전시|사찰|절에|서점|책방|미술|성당|실향민/,
  "체험": /체험|놀거리|놀 데|아이랑|애들|키즈|낚시|온천|족욕|사우나|게임|VR|케이블카|카약/i,
  "시장": /시장|회센터|수산|난전|포장마차|포차|장보/,
  "먹거리": /맛집|먹|밥|식당|물회|국밥|닭강정|순두부|막국수|해장|술|한잔|점심|저녁|아침|배고|순대|대게|홍게|횟집|회(?!센터)/,
  "카페": /카페|커피|빵|디저트|베이커리|브런치/,
};
const MOOD_WORDS = {
  quiet: /조용|한적|한가|사람 ?(적|없)|덜 ?붐|안 ?붐|여유|힐링|혼자/,
  indoor: /비 ?오|비올|비가|실내|우산|추운|더운/,
  viral: /인스타|핫플|핫한|유명|사진|감성|요즘|웨이팅/,
  any: /데이트|커플|연인|부모님|가족|친구|드라이브|코스|여행지|처음|어디|가볼|갈 ?데|갈 ?만|추천/, // 취향 없이 "어디 갈까"
};
// 말 속 구체적인 것 (메뉴·장소 종류). 이름·메뉴·소개에 이 말이 있는 곳을 맨 앞으로 ("물회 맛집"에 순두부집이 나오지 않게)
const SPECIFIC = /물회|닭강정|순두부|막국수|해장국|국밥|대게|홍게|오징어순대|순대|빵|베이커리|커피|온천|족욕|등대|호수|폭포|케이블카|박물관|미술관|전시|서점|책방|사찰|야경|일출|노을|맨발|서핑|요트|포차|회센터|횟집/g;
const BOOST_FOR = { "바다": /바다|오션|뷰|해변|해안/ }; // "바다 보이는 카페"처럼 먹거리·카페와 같이 말한 취향
const chatNorm = (s) => String(s).replace(/\s|\[.*?\]/g, "").toLowerCase();

// 문장 → 알아들은 것. 단어 규칙 + 취향 모델 (모델 파일이 없으면 규칙만)
// ai: 모델 판단 그대로 · fromModel: 규칙은 못 알아듣고 모델이 더한 라벨 (화면 AI 표시, MCP 답)
function understand(text, places) {
  const rules = understandRules(text, places);
  if (typeof predictTaste !== "function" || typeof TASTE_MODEL === "undefined") return { ...rules, fromModel: [] };
  const ai = predictTaste(text);
  const m = mergeTaste(rules, ai, TASTE_MODEL.settings.mode);
  const fromModel = [...m.tags.filter((t) => !rules.tags.includes(t)), ...TASTE_MOODS.filter((k) => m[k] && !rules[k])];
  return { ...m, ai, fromModel };
}

// 단어 규칙: 문장 → { tags, quiet, indoor, viral, places }. places: 이름이 맞는 장소 (취향 단어가 없을 때만)
function understandRules(text, places) {
  const tags = Object.keys(TASTE_WORDS).filter((t) => TASTE_WORDS[t].test(text));
  const out = {
    tags, quiet: MOOD_WORDS.quiet.test(text), indoor: MOOD_WORDS.indoor.test(text), viral: MOOD_WORDS.viral.test(text),
    any: MOOD_WORDS.any.test(text), words: [...new Set(text.match(SPECIFIC) || [])], places: [],
  };
  const q = chatNorm(text.replace(/\s*(사람|붐비|붐벼|혼잡|어때|어떄|가도|갈만|가볼|많아|적어|열어|쉬어)[\s\S]*$/, ""));
  // 이름 검색: 친 말이 장소 이름에 그대로 있으면 이름으로 찾음. 이름에 취향 단어가 든 곳도 (속초해수욕장, 청초수물회)
  // 두 글자("바다", "카페")는 이름이 똑같은 곳("회가")이 없으면 취향으로 읽음. 이름이 똑같은 곳 → 관광지 → 식당 순 ("설악산"에 설악산로한우가 먼저 나오지 않게)
  const food = (p) => (["먹거리", "카페"].includes(p.tags[0]) ? 1 : 0);
  const exact = (p) => (chatNorm(p.name) === q ? 0 : 1);
  if (q.length >= 3 || (q.length >= 2 && (!tags.length || places.some((p) => !exact(p))))) {
    out.places = places.filter((p) => chatNorm(p.name).includes(q)).sort((a, b) => exact(a) - exact(b) || food(a) - food(b)).slice(0, 5);
  }
  return out;
}

// 알아들은 것 → 추천 { picks, skipped }. skipped: 이날 혼잡이라 뺀 유명한 곳 이름
function answer(meaning, places, date, n = 4) {
  const words = meaning.words || [];
  const wide = meaning.indoor || meaning.quiet || meaning.viral || meaning.any || words.length > 0;
  const tags = meaning.tags.length ? meaning.tags : wide ? [...TAGS] : [];
  // 먹거리·카페와 다른 취향을 같이 말하면 ("바다 보이는 카페") 가게를 고르고 다른 취향은 소개 글로 가산
  const foodTags = tags.filter((t) => ["먹거리", "카페"].includes(t));
  const pickTags = meaning.tags.length && foodTags.length && foodTags.length < tags.length ? foodTags : tags;
  const boosts = meaning.tags.filter((t) => !pickTags.includes(t) && BOOST_FOR[t]).map((t) => BOOST_FOR[t]);
  const all = recommend(places, tags, "gem", date);
  const crowded = all.filter((i) => i.crowd.level === 3);
  let items = oneBranchEach(all).filter((i) => pickTags.includes(i.place.tags[0]) && !i.crowd.closed && inSeason(i.place, date));
  if (meaning.indoor) items = items.filter((i) => isIndoor(i.place));
  const text = (i) => [i.place.name, i.place.menu, i.place.description].filter(Boolean).join(" ");
  const relevant = (i) => !words.length || words.some((w) => text(i).includes(w));
  const skipped = meaning.viral ? [] : items.filter((i) => i.crowd.level === 3 && (i.pop.percentile >= POPULAR_MID || isViral(i.place)) && relevant(i)).slice(0, 2).map((i) => i.place.name);
  // 사람 몰리는 날인 곳과 그 바로 옆(예측이 없어도 같이 붐빔)은 빼고 이유를 말함
  items = items.filter((i) => i.crowd.level !== 3 && !nearBusy(i, crowded));
  if (meaning.quiet) items = items.filter((i) => i.crowd.level || !isPopular(i));
  const score = (i) =>
    (words.some((w) => text(i).includes(w)) ? 100 : 0) +
    (boosts.some((b) => b.test(text(i))) ? 60 : 0) +
    (meaning.viral ? (i.buzz || 0) : 0) * 10 +
    (meaning.quiet ? (i.gem ? 50 : 0) + (i.crowd.level === 1 ? 30 : 0) : 0) +
    (i.place.description ? 20 : 0) + (i.crowd.level === 1 ? 5 : 0);
  const picks = items.map((i, k) => ({ i, k })).sort((a, b) => score(b.i) - score(a.i) || a.k - b.k).map((x) => x.i).slice(0, n);
  return { tags, picks, skipped };
}

// ── 2. 화면 (브라우저에서만) ──
if (typeof document !== "undefined" && document.getElementById("chat-form")) {
  const log = document.getElementById("chat-log");
  const form = document.getElementById("chat-form");
  const input = document.getElementById("search");

  // 대화는 이 탭이 열려 있는 동안 저장 → 장소 상세에 갔다 돌아와도 그대로 (예전에는 사라졌음)
  // 저장이 막힌 브라우저(사생활 보호 모드 등)에서는 저장 없이 그냥 동작
  const SAVE_KEY = "hidden-sokcho-chat";
  const saved = (() => { try { return JSON.parse(sessionStorage.getItem(SAVE_KEY)) || []; } catch { return []; } })();
  const save = () => { try { sessionStorage.setItem(SAVE_KEY, JSON.stringify(saved)); } catch { /* 저장 못 해도 대화는 계속 */ } };

  const show = (who, html) => {
    const el = document.createElement("div");
    el.className = `msg msg-${who}`;
    el.innerHTML = who === "bot" ? `<span class="msg-who">숨은 속초</span>${html}` : html;
    log.hidden = false; // 첫 질문 전에는 빈 대화 칸을 보이지 않음
    log.appendChild(el);
    while (log.children.length > 30) log.firstElementChild.remove();
    log.scrollTop = log.scrollHeight;
  };
  const say = (who, html) => {
    show(who, html);
    saved.push({ who, html });
    saved.splice(0, Math.max(0, saved.length - 30));
    save();
  };
  saved.forEach((m) => show(m.who, m.html));

  const reply = (text) => {
    const m = understand(text, ALL_PLACES);
    const day = formatYmd(toYmd(state.date));
    const dateValue = toDateInput(state.date);
    if (m.places.length) {
      const items = recommend(m.places, [], "gem", state.date);
      return say("bot", `<p>이름에 "${escapeHtml(text)}" 들어간 곳</p><ul class="rows chat-rows">${items.map((i) => placeRowHtml(i, dateValue)).join("")}</ul>`);
    }
    const { tags, picks, skipped } = answer(m, ALL_PLACES, state.date);
    if (!tags.length) return say("bot", "<p>음 잘 모르겠어<br>바다 · 산책 · 맛집 · 카페 같은 말로 다시 해 줘</p>");
    // 알아들은 말 칩. 단어 규칙은 못 알아듣고 취향 모델이 알아들은 것에는 AI 표시 (확률은 마우스를 올리면)
    const chip = (label, key) => m.fromModel.includes(key)
      ? `<span class="heard heard-ai" title="직접 학습한 취향 모델이 알아들음 · 확률 ${Math.round(m.ai.scores[key] * 100)}%">${escapeHtml(label)}<b>AI</b></span>`
      : `<span class="heard">${escapeHtml(label)}</span>`;
    const moods = [["quiet", "한적한 곳"], ["indoor", "실내"], ["viral", "SNS 핫플"]].filter(([k]) => m[k]);
    const heard = [...m.tags.map((t) => chip(tagLabel(t), t)), ...moods.map(([k, label]) => chip(label, k))];
    if (!picks.length) return say("bot", `<p>${day}엔 딱 맞는 데가 없어<br>날짜를 바꿔 보거나 다르게 말해 줘</p>`);
    say("bot", `
      <p class="msg-heard">${heard.join("")}<span>${day} 이런 데 어때</span></p>
      <ul class="rows chat-rows">${picks.map((i) => placeRowHtml(i, dateValue)).join("")}</ul>
      ${skipped.length ? `<p class="msg-note">${skipped.map(escapeHtml).join(" · ")}${josaEunNeun(skipped[skipped.length - 1])} 이날 사람 많아서 뺐어</p>` : ""}
      <button type="button" class="more-link" data-chat-all="${escapeHtml(tags.join(","))}" data-quiet="${m.quiet ? 1 : ""}" data-indoor="${m.indoor ? 1 : ""}" data-words="${escapeHtml(m.words.join(","))}">더 보기</button>`);
  };

  const ask = (text) => {
    text = text.trim();
    if (!text) return;
    say("me", `<p>${escapeHtml(text)}</p>`);
    input.value = "";
    setTimeout(() => reply(text), reduceMotion ? 0 : 280); // 답이 바로 붙으면 기계 같아서 아주 잠깐 텀
  };

  form.addEventListener("submit", (e) => { e.preventDefault(); ask(input.value); });
  // "더 보기"는 대화에서 말한 조건(실내·한적·메뉴)을 그대로 목록으로 이어감 (예전에는 취향만 넘겨서 조건이 사라졌음)
  log.addEventListener("click", (e) => {
    const all = e.target.closest("[data-chat-all]");
    if (!all) return;
    const d = all.dataset;
    showTags(d.chatAll.split(","), "gem", false, { quiet: d.quiet === "1", indoor: d.indoor === "1", words: (d.words || "").split(",").filter(Boolean) });
  });
  // 취향 버튼은 대화창에 그 말을 보냄
  window.chatAsk = ask;
}
