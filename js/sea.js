// 첫 화면 배경: 동해를 실시간으로 그리는 WebGL 셰이더 (사진·라이브러리 없음)
// 레퍼런스(실제 노을·밤바다 사진, three.js 바다 예제)에서 배운 것:
//  - 바다는 하늘보다 훨씬 어둡고, 해(달) 아래로 좁은 빛 기둥만 반짝임
//  - 해는 작고 수평선에 걸림. 둘레는 테두리 없이 부드럽게 번짐
//  - 구름은 어두운 실루엣, 해 쪽 가장자리만 빛남
//  - 사실감은 큰 파도보다 잔물결 디테일. 색은 영화식 톤 매핑(ACES)으로 계단 없이
// canvas의 data-mode: "sunset"(붉은 노을) | "night"(달밤)
(function () {
  const canvas = document.getElementById("sea");
  if (!canvas) return;
  const gl = canvas.getContext("webgl", { antialias: false, alpha: false });
  if (!gl) return;

  const VERT = `attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }`;
  const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform float uHorizon; // 수평선: 아래에서 잰 px
uniform float uRef;     // 장면 기준 높이 px (창 크기가 바뀔 때만 바뀜)
uniform float uNight;

float hash(vec2 p) { p = fract(p * vec2(234.34, 435.345)); p += dot(p, p + 34.23); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) { float v = 0.0, a = 0.5; for (int i = 0; i < 6; i++) { v += a * noise(p); p = p * 2.02 + 17.1; a *= 0.5; } return v; }

vec3 lightDir() { return normalize(mix(vec3(0.18, 0.012, 1.0), vec3(0.52, 0.075, 1.0), uNight)); }

// 파도: 마루가 뾰족한 물결을 여러 방향으로 겹침. 큰 너울 2겹 + 잔물결 여러 겹
float wave(vec2 uv) {
  uv += (noise(uv) - 0.5) * 1.6;
  vec2 w = 1.0 - abs(sin(uv));
  return pow(w.x * w.y, 0.65);
}
float seaH(vec2 p, float t, int oct) {
  float h = 0.0, amp = 0.42, freq = 0.16, chop = 4.0;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 7; i++) {
    if (i >= oct) break;
    float d = wave((p + t) * freq) + wave((p - t) * freq);
    h += pow(d * 0.5, chop) * amp * 2.0;
    p = m * p; freq *= 1.9; amp *= 0.24; chop = mix(chop, 1.0, 0.2);
  }
  return h;
}

vec3 sky(vec3 d, bool withSun) {
  vec3 L = lightDir();
  float y = max(d.y, 0.0);
  float s = max(dot(d, L), 0.0);
  float halo = withSun ? 1.0 : 0.15;
  vec3 c;
  if (uNight < 0.5) {
    // 붉은 노을: 수평선 다홍 → 주홍 → 자주 → 먹빛
    c = mix(vec3(1.25, 0.32, 0.12), vec3(0.95, 0.22, 0.14), smoothstep(0.0, 0.05, y));
    c = mix(c, vec3(0.42, 0.10, 0.17), smoothstep(0.03, 0.18, y));
    c = mix(c, vec3(0.09, 0.04, 0.09), smoothstep(0.14, 0.6, y));
    c += vec3(1.4, 0.55, 0.18) * exp(-acos(min(s, 1.0)) * 7.0) * 0.9 * halo;   // 해 둘레 번짐 (테두리 없음)
    c += vec3(1.2, 0.35, 0.10) * exp(-abs(d.y) * 18.0) * 0.25;           // 수평선 따라 붉은 띠
  } else {
    // 달밤: 짙은 청록 → 남색, 달 둘레 은빛
    c = mix(vec3(0.95, 0.72, 0.66), vec3(0.55, 0.62, 0.86), smoothstep(0.0, 0.06, y)); // 수평선: 남은 노을빛 → 연한 청보라
    c = mix(c, vec3(0.20, 0.33, 0.70), smoothstep(0.05, 0.22, y));                       // 가운데: 군청
    c = mix(c, vec3(0.06, 0.12, 0.33), smoothstep(0.2, 0.75, y));                        // 위: 짙은 남색
    c += vec3(0.55, 0.70, 0.80) * exp(-acos(min(s, 1.0)) * 6.0) * 0.45 * halo;
    c += vec3(0.75, 0.85, 0.95) * exp(-acos(min(s, 1.0)) * 28.0) * 0.5 * halo; // 달무리
    float st = step(0.9975, hash(floor(d.xz / (d.y + 0.05) * 160.0))) * smoothstep(0.08, 0.3, y);
    c += vec3(0.9) * st * smoothstep(0.3, 0.6, y) * (0.6 + 0.4 * sin(uTime * 2.0 + hash(floor(d.xz * 300.0)) * 6.0));
  }
  if (withSun) {
    float r = uNight < 0.5 ? 0.0115 : 0.024;
    float disc = smoothstep(r, r * 0.82, acos(min(s, 1.0)));
    c = mix(c, uNight < 0.5 ? vec3(2.4, 1.6, 0.9) : vec3(1.6, 1.65, 1.6), disc);
  }
  // 구름: 길게 누운 어두운 실루엣, 해 쪽 가장자리만 밝게
  if (d.y > 0.0) {
    vec2 cp = d.xz / (d.y + 0.06) * vec2(0.35, 1.0) + vec2(uTime * 0.006, 0.0);
    float n = fbm(cp * 0.9);
    float cl = smoothstep(0.5, 0.78, n) * smoothstep(0.004, 0.04, d.y) * (1.0 - smoothstep(0.3, 0.7, d.y));
    float rim = pow(s, 14.0) * smoothstep(0.55, 0.68, n);
    vec3 dark = uNight < 0.5 ? vec3(0.16, 0.05, 0.09) : vec3(0.30, 0.34, 0.58);
    vec3 lit = uNight < 0.5 ? vec3(1.6, 0.6, 0.25) : vec3(0.85, 0.80, 0.85);
    c = mix(c, dark, cl * (uNight < 0.5 ? 0.88 : 0.45));
    c += lit * rim * cl * 1.2;
  }
  return c;
}

vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }

void main() {
  vec2 uv = (gl_FragCoord.xy - vec2(0.5 * uRes.x, uHorizon)) / uRef;
  float t = uTime * 0.42;
  vec3 ro = vec3(0.0, 2.4, uTime * 1.1);
  vec3 rd = normalize(vec3(uv.x, uv.y - 0.01, 1.3));
  vec3 L = lightDir();
  vec3 col;
  if (rd.y >= 0.0) {
    col = sky(rd, true);
  } else {
    float dist = 0.0;
    vec3 p = ro;
    for (int i = 0; i < 96; i++) {
      p = ro + rd * dist;
      float gap = p.y - seaH(p.xz, t, 3);
      if (gap < 0.0015 * dist || dist > 300.0) break;
      dist += max(gap * 0.6, 0.006 + dist * 0.0025);
    }
    float eps = 0.02 + dist * 0.006;
    int oct = dist < 12.0 ? 6 : (dist < 35.0 ? 5 : 4);
    float h0 = seaH(p.xz, t, oct);
    vec3 n = normalize(vec3(h0 - seaH(p.xz + vec2(eps, 0.0), t, oct), eps, h0 - seaH(p.xz + vec2(0.0, eps), t, oct)));
    vec3 refl = reflect(rd, n); refl.y = abs(refl.y);
    float fres = pow(1.0 - max(dot(n, -rd), 0.0), 5.0) * 0.6 + 0.02;
    vec3 water = uNight < 0.5 ? vec3(0.025, 0.02, 0.04) : vec3(0.03, 0.08, 0.22);
    // 마루 쪽은 빛이 비쳐 조금 밝음
    water += (uNight < 0.5 ? vec3(0.22, 0.06, 0.04) : vec3(0.06, 0.14, 0.30)) * pow(clamp(h0 * 0.9, 0.0, 1.0), 2.0) * max(dot(n, L), 0.0);
    col = mix(water, sky(refl, false) * 0.55, fres);
    // 해(달) 아래 좁은 빛 기둥: 잔물결마다 반짝임
    float spec = pow(max(dot(refl, L), 0.0), 280.0) * 3.5 + pow(max(dot(refl, L), 0.0), 60.0) * 0.12;
    col += (uNight < 0.5 ? vec3(1.6, 0.75, 0.35) : vec3(0.85, 0.95, 1.0)) * spec;
    // 파도 거품: 앞쪽 마루에 하얗게, 해 빛을 받으면 물듦
    float crest = smoothstep(0.62, 0.95, seaH(p.xz, t, 4));
    float froth = smoothstep(0.42, 0.75, fbm(p.xz * 2.2 + vec2(t * 1.3, -t)));
    float foam = clamp(crest * froth * 1.7, 0.0, 1.0) * exp(-dist * 0.035);
    vec3 foamCol = uNight < 0.5 ? vec3(0.95, 0.62, 0.48) : vec3(0.78, 0.84, 0.95);
    col = mix(col, foamCol, foam * 0.9);
    // 먼 바다는 수평선 빛으로 녹아듦
    col = mix(col, sky(normalize(vec3(rd.x, 0.001, rd.z)), false), 1.0 - exp(-pow(dist * 0.0075, 2.0)));
  }
  col = aces(col * (uNight < 0.5 ? 0.95 : 1.35));
  vec2 q = gl_FragCoord.xy / uRes;
  col *= 0.78 + 0.22 * pow(16.0 * q.x * q.y * (1.0 - q.x) * (1.0 - q.y), 0.18);  // 가장자리 살짝 어둡게
  col += (hash(gl_FragCoord.xy) - 0.5) / 400.0;                            // 색 띠 없애는 미세 잡음
  gl_FragColor = vec4(col, 1.0);
}`;

  const shader = (type, src) => {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) { console.warn(gl.getShaderInfoLog(sh)); return null; }
    return sh;
  };
  let U = {};
  // 프로그램·버퍼 만들기. 휴대폰이 백그라운드에 갔다 오며 WebGL을 잃었다가 되찾으면 다시 부름
  const init = () => {
    const vs = shader(gl.VERTEX_SHADER, VERT), fsh = shader(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fsh) return false;
    const prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fsh);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return false;
    gl.useProgram(prog);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    for (const n of ["uRes", "uTime", "uHorizon", "uRef", "uNight"]) U[n] = gl.getUniformLocation(prog, n);
    return true;
  };
  if (!init()) return;

  // 해상도: 화면보다 낮게 그리고 늘림. 터치 기기는 더 낮게·30fps. 그리는 점은 25만 개를 넘지 않게. 계속 느리면 한 단계씩 낮춤
  const touch = window.matchMedia("(pointer: coarse)").matches;
  const MAX_PX = 250000;
  let scale = touch ? 0.5 : 0.75;
  let refH = 0, horizon = 0.3;
  const measure = () => {
    refH = canvas.clientHeight; // 창 크기가 바뀔 때만 기준 높이를 다시 잡음 (대화가 펼쳐질 때는 그대로)
    horizon = Number(getComputedStyle(canvas).getPropertyValue("--horizon")) || 0.3;
  };
  const resize = () => {
    const cw = canvas.clientWidth, ch = canvas.clientHeight;
    const k = Math.min(scale, Math.sqrt(MAX_PX / Math.max(1, cw * ch)));
    const w = Math.max(1, Math.round(cw * k)), h = Math.max(1, Math.round(ch * k));
    if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
    gl.viewport(0, 0, w, h);
    return k;
  };
  // 시간이 아주 커지면 셰이더 소수 정밀도가 떨어져 잔물결이 격자처럼 깨짐 → 10분마다 살짝 사라졌다 처음부터
  let start = performance.now();
  const RESET_MS = 10 * 60 * 1000;
  const draw = (now) => {
    if (now - start > RESET_MS && canvas.classList.contains("on")) {
      canvas.classList.remove("on");
      setTimeout(() => { start = performance.now(); canvas.classList.add("on"); }, 1400);
    }
    const k = resize();
    gl.uniform2f(U.uRes, canvas.width, canvas.height);
    gl.uniform1f(U.uTime, (now - start) / 1000 + 30);
    gl.uniform1f(U.uRef, refH * k);
    gl.uniform1f(U.uHorizon, horizon * refH * k);
    gl.uniform1f(U.uNight, canvas.dataset.mode === "night" ? 1 : 0);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };

  measure();
  draw(performance.now()); // 탭이 가려진 채 열려도 첫 장면은 그려 둠 (까만 화면 방지)
  canvas.classList.add("on");
  let lost = false;
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.addEventListener("resize", () => { measure(); if (still && !lost) draw(performance.now()); });
  if (still) {
    draw(performance.now());
    new ResizeObserver(() => { if (!lost) draw(performance.now()); }).observe(canvas); // 대화가 펼쳐져도 멈춘 그림이 늘어나지 않게
  }

  let visible = true, raf = 0, last = 0, slow = 0;
  const frameMs = touch ? 33 : 0;
  const loop = (now) => {
    raf = 0;
    if (!visible || document.hidden || lost) return;
    raf = requestAnimationFrame(loop);
    if (now - last < frameMs) return;
    if (now - last > 40) { if (++slow > 20 && scale > 0.35) { scale = Math.max(0.35, Math.round((scale - 0.1) * 100) / 100); slow = 0; } } else slow = 0;
    last = now;
    draw(now);
  };
  const kick = () => { if (!still && !raf && visible && !document.hidden && !lost) { last = performance.now(); raf = requestAnimationFrame(loop); } };
  canvas.addEventListener("webglcontextlost", (e) => { e.preventDefault(); lost = true; if (raf) cancelAnimationFrame(raf); raf = 0; });
  canvas.addEventListener("webglcontextrestored", () => { lost = false; if (init()) { if (still) draw(performance.now()); else kick(); } });
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; kick(); }).observe(canvas);
  document.addEventListener("visibilitychange", kick);
  kick();
})();
