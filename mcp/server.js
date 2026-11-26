#!/usr/bin/env node
// CrowdFlow MCP 서버 (SDK 없이 MCP 규격을 직접 구현)
//
// 어떻게 동작하나
// 1. Claude 데스크톱(클라이언트)이 이 파일을 실행하고, 표준입력(stdin)으로 요청을, 표준출력(stdout)으로 답을 주고받음
// 2. 메시지 하나 = JSON 한 줄 (JSON-RPC 2.0 형식). 줄바꿈으로 메시지를 구분
// 3. 요청 종류(method)
//    - initialize   : 처음 인사. 서로 쓰는 규격 버전과 할 수 있는 일을 알려줌
//    - tools/list   : "무슨 도구 있어?" → 도구 목록(이름·설명·입력 형식) 보내기
//    - tools/call   : "이 도구 실행해" → 실행 결과 보내기
//    - ping         : 살아 있는지 확인
//    - notifications/... : 알림. 답을 보내지 않음 (id가 없음)
// 4. stdout에는 규격 메시지만 써야 함. 디버그 출력은 반드시 stderr로 (섞이면 클라이언트가 못 읽음)

const readline = require("readline");
const { TOOLS, FORECAST_COUNT } = require("./tools");

const SERVER_INFO = { name: "crowdflow", version: "0.2.0" };
const SUPPORTED_VERSIONS = ["2025-06-18", "2025-03-26", "2024-11-05"];

// JSON-RPC 오류 번호 (규격에 정해진 값)
const ERR = { PARSE: -32700, INVALID_REQUEST: -32600, METHOD_NOT_FOUND: -32601, INVALID_PARAMS: -32602 };

const log = (...a) => process.stderr.write(`[crowdflow] ${a.join(" ")}\n`);
const send = (msg) => process.stdout.write(JSON.stringify(msg) + "\n");
const reply = (id, result) => send({ jsonrpc: "2.0", id, result });
const fail = (id, code, message) => send({ jsonrpc: "2.0", id, error: { code, message } });

// 요청 하나 처리
function handle(msg) {
  const { id, method, params = {} } = msg;
  const isNotification = id === undefined;

  if (msg.jsonrpc !== "2.0" || typeof method !== "string") {
    if (!isNotification) fail(id, ERR.INVALID_REQUEST, "JSON-RPC 2.0 요청이 아니에요");
    return;
  }
  if (isNotification) return; // notifications/initialized 등: 받기만 함

  switch (method) {
    case "initialize": {
      // 클라이언트가 원하는 버전을 우리가 알면 그대로, 아니면 우리가 아는 최신 버전으로 답함
      const asked = params.protocolVersion;
      const protocolVersion = SUPPORTED_VERSIONS.includes(asked) ? asked : SUPPORTED_VERSIONS[0];
      return reply(id, {
        protocolVersion,
        capabilities: { tools: {} }, // 우리는 도구(tools)만 제공
        serverInfo: SERVER_INFO,
        instructions: `속초 여행 추천 도구. 사용자가 취향을 말로 하면 recommend_from_request에 그 말을 그대로 넣는다. 날짜는 YYYY-MM-DD. 혼잡 예측은 실시간이 아닌 예측값이고 ${FORECAST_COUNT}곳만 있다. 사용자에게 말할 때는 '붐비다' 대신 '사람 많다·사람 적다'라고 쓴다`,
      });
    }
    case "ping":
      return reply(id, {});
    case "tools/list":
      return reply(id, { tools: TOOLS.map(({ name, description, inputSchema }) => ({ name, description, inputSchema })) });
    case "tools/call": {
      const tool = TOOLS.find((t) => t.name === params.name);
      if (!tool) return fail(id, ERR.INVALID_PARAMS, `없는 도구예요: ${params.name}`);
      try {
        const result = tool.run(params.arguments || {});
        log("tools/call", tool.name, JSON.stringify(params.arguments || {}));
        // 결과는 content 배열로. AI가 읽을 수 있게 JSON 글자로 담아 보냄
        return reply(id, { content: [{ type: "text", text: JSON.stringify(result, null, 2) }] });
      } catch (e) {
        // 도구 실행 중 오류(장소 못 찾음 등)는 규격상 isError로 알려서 AI가 다시 시도하게 함
        return reply(id, { content: [{ type: "text", text: e.message }], isError: true });
      }
    }
    default:
      return fail(id, ERR.METHOD_NOT_FOUND, `모르는 요청이에요: ${method}`);
  }
}

// 표준입력을 한 줄씩 읽어서 처리
const rl = readline.createInterface({ input: process.stdin });
rl.on("line", (line) => {
  line = line.replace(/^﻿/, ""); // 일부 터미널이 맨 앞에 붙이는 보이지 않는 표시(BOM) 제거
  if (!line.trim()) return;
  let msg;
  try {
    msg = JSON.parse(line);
  } catch {
    return fail(null, ERR.PARSE, "JSON을 읽을 수 없어요");
  }
  handle(msg);
});
log(`시작 · 도구 ${TOOLS.length}개`);
