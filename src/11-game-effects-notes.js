// 11-game-effects-notes.js — Ek ses efektleri, şimşek ve müzik notası efektleri.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

X.zap = function () {
  (this.noise(0.18, 0.3, 1800),
    this.tone(`sawtooth`, 1400, 180, 0.22, 0.16),
    this.tone(`square`, 90, 40, 0.25, 0.2, 0.02),
    this.tone(`sine`, 880, 1320, 0.12, 0.1, 0.05));
};

X.zapCast = function () {
  (this.noise(0.08, 0.3, 3000),
    this.tone(`sine`, 2200, 300, 0.45, 0.16),
    this.tone(`square`, 110, 55, 0.4, 0.22),
    [392, 523, 659].forEach((e, t) => this.tone(`triangle`, e, e, 0.2, 0.14, 0.12 + t * 0.19)));
};

function AF_rnd(e) {
  e = Math.sin(e * 12.9898) * 43758.5453;
  return e - Math.floor(e);
}

function AF_bolt(e, x0, y0, ang, len, seed, w) {
  let n = 5,
    x = x0,
    y = y0;
  (e.beginPath(), e.moveTo(x, y));
  for (let i = 1; i <= n; i++) {
    const a = ang + (AF_rnd(seed + i * 3.1) - 0.5) * 1.6,
      l = len / n;
    ((x += Math.cos(a) * l), (y += Math.sin(a) * l), e.lineTo(x, y));
  }
  ((e.lineWidth = w), e.stroke());
}

var AF_noteG = {};

function AF_noteGlyph(ci, shape) {
  const k = ci + `_` + shape;
  if (AF_noteG[k]) return AF_noteG[k];
  const NC = [`#4fd6ff`, `#c06cff`, `#6f9eff`][ci % 3],
    w = 22,
    h = 26,
    cv = document.createElement(`canvas`);
  ((cv.width = w), (cv.height = h));
  const x = cv.getContext(`2d`);
  ((x.lineJoin = `round`),
    (x.lineCap = `round`),
    (x.strokeStyle = `#160f44`),
    (x.lineWidth = 2.6),
    (x.fillStyle = NC));
  const nt = (hx, hy, st) => {
    (x.beginPath(),
      x.ellipse(hx, hy, 3.7, 2.8, -0.4, 0, Math.PI * 2),
      x.fill(),
      x.stroke(),
      x.beginPath(),
      x.rect(hx + 2, hy - st, 1.9, st),
      x.fill(),
      x.stroke());
  };
  if (shape === 1) {
    (nt(6.5, 18.5, 12.5),
      nt(14, 15.5, 12.5),
      x.beginPath(),
      x.moveTo(7.6, 4.5),
      x.lineTo(16.2, 3),
      x.lineTo(16.2, 6.3),
      x.lineTo(7.6, 7.8),
      x.closePath(),
      x.fill(),
      x.stroke());
  } else {
    (nt(9, 18.5, 13.5),
      x.beginPath(),
      x.moveTo(10.8, 4),
      x.quadraticCurveTo(17, 6, 15.6, 10.6),
      x.quadraticCurveTo(13.9, 6.6, 10.8, 6.6),
      x.closePath(),
      x.fill(),
      x.stroke());
  }
  // highlight top of fill
  ((x.globalCompositeOperation = `source-atop`),
    (x.fillStyle = `rgba(255,255,255,.4)`),
    x.fillRect(0, 0, w, 11),
    (x.globalCompositeOperation = `source-over`));
  const id = x.getImageData(0, 0, w, h),
    d = id.data;
  for (let m = 0; m < d.length; m += 4) d[m + 3] = d[m + 3] > 120 ? 255 : 0;
  x.putImageData(id, 0, 0);
  return (AF_noteG[k] = cv);
}

function AF_drawNote(e, t) {
  const dir = Math.sign(t.vx) || 1,
    ci = (t.col || 0) % 3,
    seed = Math.floor(t.t / 45) * 17 + ci * 101;
  const P = [
    {
      c0: `rgba(90,216,255,.7)`,
      c1: `rgba(120,120,255,.26)`,
      n: `#46d8ff`,
      b: `rgba(120,210,255,.55)`,
    },
    {
      c0: `rgba(196,120,255,.7)`,
      c1: `rgba(255,120,220,.26)`,
      n: `#c06cff`,
      b: `rgba(210,130,255,.55)`,
    },
    {
      c0: `rgba(110,160,255,.7)`,
      c1: `rgba(150,100,255,.26)`,
      n: `#6a9bff`,
      b: `rgba(140,170,255,.55)`,
    },
  ][ci];
  const BC = [`#5ad8ff`, `#c06cff`, `#7aa0ff`, `#ff9ae8`];
  e.scale(dir * 1.3, 1.3);
  e.globalCompositeOperation = `lighter`;
  let g = e.createRadialGradient(0, 0, 4, 0, 0, 86);
  (g.addColorStop(0, P.c0),
    g.addColorStop(0.5, P.c1),
    g.addColorStop(1, `rgba(120,120,255,0)`),
    (e.fillStyle = g),
    e.beginPath(),
    e.arc(0, 0, 86, 0, Math.PI * 2),
    e.fill());
  ((e.lineCap = `round`), (e.lineJoin = `round`));
  const bolts = [];
  for (let b = 0; b < 8; b++) {
    const ang = AF_rnd(seed + b * 5.7) * Math.PI * 2,
      back = b < 3;
    bolts.push([
      back ? Math.PI + (AF_rnd(seed + b) - 0.5) * 0.7 : ang,
      back ? 70 + AF_rnd(seed + b * 2) * 60 : 34 + AF_rnd(seed + b * 3) * 34,
      seed + b * 9,
    ]);
  }
  ((e.strokeStyle = P.b), bolts.forEach((b) => AF_bolt(e, 0, 0, b[0], b[1], b[2], 7)));
  bolts.forEach((b, bi) => {
    ((e.strokeStyle = BC[bi % 4]), AF_bolt(e, 0, 0, b[0], b[1], b[2], 2.4));
  });
  e.globalCompositeOperation = `source-over`;
  const G = AF_noteGlyph(ci, t.rot === 1 ? 1 : 0),
    ps = 2;
  ((e.imageSmoothingEnabled = !1), (e.shadowColor = P.n), (e.shadowBlur = 7));
  e.drawImage(
    G,
    Math.round((-G.width * ps) / 2),
    Math.round((-G.height * ps) / 2),
    G.width * ps,
    G.height * ps,
  );
  e.shadowBlur = 0;
}
