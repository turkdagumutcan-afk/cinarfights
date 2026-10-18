// 10-game-constants-assets.js — Ses motoru (X), fizik sabitleri, renkler, poz listesi, sprite/asset yükleyiciler, karakter tanımları.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

var X = new (class {
  ctx = null;
  master = null;
  noiseBuf = null;
  ensure() {
    try {
      if (!this.ctx) {
        let e = window.AudioContext ?? window.webkitAudioContext;
        ((this.ctx = new e()),
          (this.master = this.ctx.createGain()),
          (this.master.gain.value = (0.4 * AF_S.vol) / 100),
          this.master.connect(this.ctx.destination));
        let t = Math.floor(this.ctx.sampleRate * 0.6);
        this.noiseBuf = this.ctx.createBuffer(1, t, this.ctx.sampleRate);
        let n = this.noiseBuf.getChannelData(0);
        for (let e = 0; e < t; e++) n[e] = Math.random() * 2 - 1;
      }
      this.ctx.state === `suspended` && this.ctx.resume();
    } catch {}
  }
  tone(e, t, n, r, i, a = 0) {
    try {
      if (!this.ctx || !this.master) return;
      let o = this.ctx.currentTime + a,
        s = this.ctx.createOscillator(),
        c = this.ctx.createGain();
      ((s.type = e),
        s.frequency.setValueAtTime(Math.max(1, t), o),
        s.frequency.exponentialRampToValueAtTime(Math.max(1, n), o + r),
        c.gain.setValueAtTime(i, o),
        c.gain.exponentialRampToValueAtTime(1e-4, o + r),
        s.connect(c).connect(this.master),
        s.start(o),
        s.stop(o + r + 0.02));
    } catch {}
  }
  noise(e, t, n = 0, r = 2e4, i = 0) {
    try {
      if (!this.ctx || !this.master || !this.noiseBuf) return;
      let a = this.ctx.currentTime + i,
        o = this.ctx.createBufferSource();
      o.buffer = this.noiseBuf;
      let s = this.ctx.createGain();
      (s.gain.setValueAtTime(t, a), s.gain.exponentialRampToValueAtTime(1e-4, a + e));
      let c = o;
      if (n > 0) {
        let e = this.ctx.createBiquadFilter();
        ((e.type = `highpass`), (e.frequency.value = n), c.connect(e), (c = e));
      }
      if (r < 2e4) {
        let e = this.ctx.createBiquadFilter();
        ((e.type = `lowpass`), (e.frequency.value = r), c.connect(e), (c = e));
      }
      (c.connect(s).connect(this.master), o.start(a), o.stop(a + e + 0.02));
    } catch {}
  }
  uiClick() {
    this.tone(`square`, 880, 660, 0.06, 0.12);
  }
  jump() {
    this.tone(`sine`, 180, 430, 0.16, 0.16);
  }
  land() {
    (this.tone(`sine`, 95, 55, 0.09, 0.2), this.noise(0.05, 0.06, 0, 900));
  }
  swing() {
    this.noise(0.06, 0.1, 1400);
  }
  hitLight() {
    (this.tone(`square`, 240, 70, 0.09, 0.22), this.noise(0.07, 0.16, 0, 5e3));
  }
  hitHeavy() {
    (this.tone(`square`, 130, 45, 0.2, 0.3), this.noise(0.16, 0.26, 0, 3200));
  }
  meterFull() {
    (this.tone(`square`, 880, 880, 0.07, 0.12), this.tone(`square`, 1320, 1320, 0.09, 0.12, 0.08));
  }
  fireball() {
    (this.tone(`sawtooth`, 95, 40, 0.55, 0.3),
      this.noise(0.45, 0.22, 0, 1800),
      this.tone(`square`, 55, 30, 0.4, 0.18, 0.05));
  }
  flashWave() {
    (this.noise(0.04, 0.3, 3500),
      this.tone(`sine`, 2600, 1700, 0.5, 0.14, 0.02),
      this.tone(`sine`, 120, 60, 0.4, 0.22, 0.02));
  }
  shutter(e = 0) {
    (this.noise(0.03, 0.22, 4e3, 2e4, e), this.tone(`square`, 1800, 900, 0.04, 0.08, e));
  }
  carRev() {
    (this.tone(`sawtooth`, 70, 260, 0.45, 0.2), this.tone(`square`, 140, 420, 0.35, 0.08, 0.05));
  }
  ringChime() {
    [988, 1319, 1568, 1976].forEach((e, t) => this.tone(`sine`, e, e, 0.25, 0.1, 0.15 + t * 0.06));
  }
  ko() {
    (this.tone(`sawtooth`, 220, 55, 1.1, 0.3),
      this.tone(`sawtooth`, 165, 40, 1.2, 0.24, 0.05),
      this.noise(0.5, 0.3, 0, 1400));
  }
  roundStart() {
    (this.tone(`sine`, 330, 330, 0.5, 0.2), this.tone(`sine`, 495, 495, 0.55, 0.16, 0.02));
  }
})();

var $h = 1376;

var eg = 2900;

var tg = 1.85;

var ng = 0.82;

// Karakter boy çarpanı: görseller 560 px kaynaktan küçültülerek çizilir, büyütmek kalite kaybettirmez.
// Boy, gövde genişliği, vuruş kutuları ve ulti görselleri bununla ölçeklenir; zıplama yüksekliği de aynı oranda artar.
var AF_BOY = 1.16;

var rg = -1300 * Math.sqrt(AF_BOY);

var ig = 1e3 / 60;

var ag = `UMUT`;

var og = `SUDEM`;

var sg = 250 * 0.91;

var cg = `#ff2a5f`;

var lg = `#ffffff`;

var ug = `#00f0ff`;

var dg = `#ffd24a`;

var fg = `#ffd700`;

var pg = (e, t, n) => Math.max(t, Math.min(n, e));

var mg = [
  `idle`,
  `crouch`,
  `punch`,
  `kick`,
  `hurt`,
  `jump`,
  `ult`,
  `run`,
  `guard`,
  `guardlow`,
  `cast`,
];

var hg = {
  idle: 1,
  punch: 0.97,
  kick: 0.98,
  hurt: 0.95,
  jump: 0.84,
  ult: 0.95,
  crouch: 0.71,
  run: 1,
  guard: 0.98,
  guardlow: 0.78,
  cast: 0.97,
};

function gg(e) {
  return window.__ANKARA_ASSETS__?.[e] ?? e;
}

var _g = { p1: `/assets/fotograf_canavari.png`, p2: `/assets/mcqueen.png` },
  vg = `/assets/ankara_map.png`,
  yg = (e, t) => `/assets/frames/${e}_${t}.png`;

function bg(e) {
  return new Promise((t, n) => {
    let r = new Image();
    ((r.onload = () => t(r)), (r.onerror = () => n(Error(`missing asset: ${e}`))), (r.src = gg(e)));
  });
}

function xg(e, t, n, r, r2) {
  let i = document.createElement(`canvas`);
  ((i.width = t), (i.height = n));
  let a = i.getContext(`2d`, { willReadFrequently: !0 });
  a.drawImage(e, 0, 0);
  let o = a.getImageData(0, 0, t, n).data,
    s = (e, n) => o[(n * t + e) * 4 + 3] > 60,
    c = t,
    l = n,
    u = -1,
    d = -1;
  for (let e = 0; e < n; e++)
    for (let n = 0; n < t; n++)
      s(n, e) && (n < c && (c = n), n > u && (u = n), e < l && (l = e), e > d && (d = e));
  u < 0 && ((c = 0), (l = 0), (u = t - 1), (d = n - 1));
  let f = d - l + 1,
    p = Array(t).fill(0),
    m = 0,
    h = l + Math.floor(f * 0.45);
  for (let e = l; e <= h; e++) for (let t = c; t <= u; t++) s(t, e) && (p[t]++, m++);
  let g = 0,
    _ = (c + u) / 2;
  for (let e = c; e <= u; e++)
    if (((g += p[e]), g >= m / 2)) {
      _ = e;
      break;
    }
  let v = 0,
    y = 0;
  for (let e = Math.max(c, u - 8); e <= u; e++)
    for (let t = l; t <= d; t++) s(e, t) && ((v += t), y++);
  let b = y ? v / y : l + f * 0.3,
    x = r / f;
  if (r2) {
    let e2 = document.createElement(`canvas`);
    ((e2.width = t), (e2.height = n));
    let t2 = e2.getContext(`2d`);
    ((t2.filter = `hue-rotate(165deg) saturate(1.15)`), t2.drawImage(e, 0, 0), (e = e2));
  }
  return {
    img: e,
    w: t,
    h: n,
    bx: c,
    by: l,
    bw: u - c + 1,
    bh: f,
    ax: _,
    scale: x,
    visibleH: f * x,
    tipX: (u - _) * x,
    tipY: (d - b) * x,
  };
}

function Sg(e, t) {
  let n = document.createElement(`canvas`);
  ((n.width = 240), (n.height = 320));
  let r = n.getContext(`2d`);
  ((r.strokeStyle = e), (r.lineWidth = 10), (r.lineCap = `round`));
  let i = t === `crouch` ? 110 : 0,
    a = (e) => {
      (r.beginPath(), r.moveTo(e[0], e[1]));
      for (let t = 2; t < e.length; t += 2) r.lineTo(e[t], e[t + 1]);
      r.stroke();
    };
  return (
    r.beginPath(),
    r.arc(110, 50 + i, 24, 0, Math.PI * 2),
    r.stroke(),
    a([110, 76 + i, 106, 180]),
    a(
      t === `punch` || t === `ult`
        ? [108, 110 + i, 230, 110 + i]
        : [108, 104 + i, 150, 130 + i, 168, 106 + i],
    ),
    a(t === `kick` ? [106, 180, 230, 180] : [106, 180, 150, 240 + i * 0.2, 140, 310]),
    a([106, 180, 70, 240 + i * 0.2, 78, 310]),
    n
  );
}

// Takla kareleri (back0-15) idle'dan daha iri çizilmişti (kafa ~1,65×). Çizim ölçeği bu çarpanla kafa boyunda eşitlenir.
var AF_BACK_SIZE = 0.62;

async function Cg(e, t, n, r2, same) {
  let r = await Promise.all(
      mg.map((t) =>
        (t === `run` && !AF_char(e).run) ||
        ((t === `guard` || t === `guardlow`) && !AF_char(e).guard) ||
        (t === `cast` && !AF_char(e).proj)
          ? Promise.resolve(null)
          : bg(yg(e, t)).catch(() => null),
      ),
    ),
    i = {},
    idleBh = 0;
  mg.forEach((e, a) => {
    let o = r[a];
    if ((e === `run` || e === `guard` || e === `guardlow` || e === `cast`) && !o) return;
    let s = o ?? Sg(n, e),
      c = o ? o.naturalWidth : 240,
      l = o ? o.naturalHeight : 320,
      rr = t * (hg[e] || 1);
    if (same && o) {
      let q = xg(s, c, l, 1, !1);
      e === `idle` && (idleBh = q.bh);
      rr = (t * q.bh) / idleBh;
    }
    i[e] = xg(s, c, l, rr, r2);
  });
  let rollFrames = null,
    rollScale = 1,
    rollPad = 0,
    backFrames = null,
    backScale = 1,
    backJumpH = 0,
    sweepFrames = null,
    sweepScale = 1,
    sweepAnchorX = 0;
  if (AF_char(e).roll) {
    let ri = await Promise.all(
      [0, 1, 2, 3, 4, 5, 6, 7].map((k) => bg(`/assets/frames/${e}_roll${k}.png`).catch(() => null)),
    );
    if (ri[0]) {
      ((rollFrames = ri), (rollScale = i.idle.visibleH / 310), (rollPad = 2));
    }
    let rb = await Promise.all(
      Array.from({ length: 16 }).map((_, k) =>
        bg(`/assets/frames/${e}_back${k}.png`).catch(() => null),
      ),
    );
    if (rb[0] && rb.every(Boolean)) {
      ((backFrames = rb),
        (backScale = (i.idle.visibleH / 286) * AF_BACK_SIZE),
        (backJumpH = i.idle.visibleH * 0.82));
    }
    let sw = await Promise.all(
      Array.from({ length: 12 }).map((_, k) =>
        bg(`/assets/frames/${e}_sweep${k}.png`).catch(() => null),
      ),
    );
    if (sw[0] && sw.every(Boolean)) {
      ((sweepFrames = sw), (sweepScale = i.idle.scale * 1.75), (sweepAnchorX = 190));
    }
  }
  // Çok kareli animasyonlar: <id>_punch0..N, _kick0..N, _run0..N (en az 2 kare varsa kullanılır).
  // Ölçek tek karelerle aynı (idle'a göre); vuruş kutusu yine tek "punch"/"kick" (tepe) karesinden hesaplanır.
  let seq = {};
  for (let p of [`punch`, `kick`, `run`]) {
    // yalnızca asset manifestinde olan kareleri iste (olmayanı istemek konsola 404 düşürür)
    let im = await Promise.all(
      Array.from({ length: 6 }).map((_, k) => {
        let yol = `/assets/frames/${e}_${p}${k}.png`;
        return window.__ANKARA_ASSETS__ && !(yol in window.__ANKARA_ASSETS__)
          ? null
          : bg(yol).catch(() => null);
      }),
    );
    let ok = [];
    for (let o of im) {
      if (!o) break;
      ok.push(o);
    }
    if (ok.length < 2) continue;
    seq[p] = ok.map((o) => {
      let w = o.naturalWidth,
        h = o.naturalHeight,
        rr = t * (hg[p] || 1);
      if (same && idleBh) rr = (t * xg(o, w, h, 1, !1).bh) / idleBh;
      return xg(o, w, h, rr, r2);
    });
    seq[p].peak = seq[p].reduce((b, f, k, a) => (f.bw > a[b].bw ? k : b), 0);
  }
  // dikey basıklık (yalnız eğilme pozları): çizimde ve vuruş/boy ölçülerinde birlikte uygulanır
  let sy = AF_char(e).crouchSy;
  if (sy)
    for (let p of [`crouch`, `guardlow`])
      i[p] && ((i[p].sy = sy), (i[p].visibleH *= sy), (i[p].tipY *= sy));
  let a = i.idle;
  return {
    frames: i,
    seq,
    // gövde yarı genişliği (vuruş alanı + itişme): karakterde elle verilmişse o, yoksa idle'dan
    halfW: AF_char(e).halfW ? AF_char(e).halfW * AF_BOY : Math.max(30, Math.min(58, a.bw * a.scale * 0.3)),
    hasRun: !!r[mg.indexOf(`run`)],
    rollFrames,
    rollScale,
    rollPad,
    backFrames,
    backScale,
    backJumpH,
    sweepFrames,
    sweepScale,
    sweepAnchorX,
  };
}

function wg() {
  let e = document.createElement(`canvas`);
  ((e.width = $h), (e.height = 768));
  let t = e.getContext(`2d`),
    n = t.createLinearGradient(0, 0, 0, 768);
  return (
    n.addColorStop(0, `#05060f`),
    n.addColorStop(1, `#1a2140`),
    (t.fillStyle = n),
    t.fillRect(0, 0, $h, 768),
    e
  );
}

// UMUT'a özel takla / yer taklası / süpürme tekme: yeni tasarımda karesi yok, GEÇİCİ olarak kapalı.
// Kod yerinde duruyor; true yapınca (eski karelerle) geri gelir.
var AF_UMUT_OZEL = !1;

var AF_CHARS = {
  umut: {
    id: `umut`,
    name: `UMUT`,
    color: `#ff2a5f`,
    color2: `#ff7aa8`,
    scale: 250,
    same: !0,
    halfW: 40,
    hp: 153, // dengeli temel; 720 maçlık simülasyonda %38 kaldığı için +3 can
    kickX: 3, // tekme menzili herkeste ~216 px (görsel farkı kapatır)
    guard: !0,
    roll: AF_UMUT_OZEL,
    // ulti mermilerinin çıkış noktası (idle boyuna oran): pozdaki en ön nokta ayakkabı olduğu için elle
    ultAt: { x: 0.42, y: 0.66 }, // fotoğraf alt kenarı eğilen rakibin üstünde kalır
    tag: `Fotoğrafçı · Hızlı yumruklar, dengeli`,
    stil: `DENGELİ`,
    zorluk: 1,
    ultName: `FLAŞ PATLAMASI`,
    ultHint: `flaş + uçan fotoğraflar`,
    img: () => gg(_g.p1),
    stats: [
      [`HIZ`, 0.75],
      [`GÜÇ`, 0.8],
      [`MENZİL`, 0.85],
    ],
  },
  sudem: {
    id: `sudem`,
    name: `SUDEM`,
    color: `#00f0ff`,
    color2: `#2dd4bf`,
    scale: sg,
    same: !0,
    halfW: 37,
    hp: 145, // küçük hedef (vurulabilir alanı ~%10 dar), karşılığında biraz az can
    kickX: 9, // tekme menzili herkeste ~216 px (görsel farkı kapatır)
    guard: !0,
    proj: !0, // F: sihirli yüzük (uzak menzil)
    crouchSy: 0.88, // eğilme pozu yüksek çizilmiş: dikeyde %88 (≈ diğerlerinin eğilme boyu)
    tag: `McQueen hayranı · Çevik tekmeler, uzaktan yüzük`,
    stil: `ÇEVİK · MENZİLLİ`,
    zorluk: 2,
    ultName: `KA-ÇOV!`,
    ultHint: `yarış arabası`,
    img: () => gg(_g.p2),
    stats: [
      [`HIZ`, 0.9],
      [`GÜÇ`, 0.65],
      [`MENZİL`, 0.8],
    ],
  },
  metehan: {
    id: `metehan`,
    name: `METEHAN`,
    color: `#ffd21f`,
    color2: `#fff08a`,
    scale: 232,
    same: !0,
    halfW: 42, // tank: en geniş gövde
    kickX: 8, // tekme menzili herkeste ~216 px (görsel farkı kapatır)
    guard: !0,
    run: !0,
    // reach: kısa kollar için vuruş kutusu çarpanı (genişlik) ve öne kaydırma (px)
    mod: { spd: 0.78, dmg: 1.15, sup: 1.25, jump: 1.03, kb: 1.15, hp: 165, reach: 1.15, reachX: 12 },
    tag: `Müzisyen · Tank: hantal ama çok sert vuruyor`,
    stil: `TANK · SERT VURUŞ`,
    zorluk: 2,
    ultName: `YILDIRIM NOTALARI`,
    ultHint: `gitardan yıldırımlı notalar`,
    img: () => gg(`/assets/metehan.png`),
    stats: [
      [`HIZ`, 0.45],
      [`GÜÇ`, 1],
      [`MENZİL`, 0.7],
    ],
  },
  ahmet: {
    id: `ahmet`,
    name: `AHMET`,
    color: `#ff7a1a`,
    color2: `#ffb36b`,
    scale: 252,
    same: !0,
    halfW: 40,
    kickX: 16, // tekme menzili herkeste ~216 px (görsel farkı kapatır)
    // güçlü ve dengeli (Ken): vuruşları %5 sert, biraz fazla can; hız normal (720 maçlık simülasyonla ayarlandı)
    mod: { spd: 1, dmg: 1.05, sup: 1, jump: 1, kb: 1, hp: 152 },
    guard: !0,
    tag: `Motorcu · Sakin, güçlü ve dengeli`,
    stil: `GÜÇLÜ · DENGELİ`,
    zorluk: 1,
    ultName: `GAZA BAS!`,
    ultHint: `arkadan gelen motor`,
    img: () => gg(`/assets/ahmet.png`),
    stats: [
      [`HIZ`, 0.7],
      [`GÜÇ`, 0.85],
      [`MENZİL`, 0.8],
    ],
  },
  selim: {
    id: `selim`,
    name: `SELİM`,
    color: `#a78bfa`,
    color2: `#d4c6ff`,
    scale: 250,
    same: !0,
    halfW: 40,
    kickX: 14, // tekme menzili herkeste ~216 px (görsel farkı kapatır)
    guard: !0,
    tag: `Ankaralı · Elleri cebinde, umursamaz`,
    stil: `SAKİN · TEKMECİ`,
    zorluk: 2,
    ultName: `RA-MA-ZAAN`,
    ultHint: `3 yanan sigara`,
    img: () => gg(`/assets/selim.png`),
    stats: [],
  },
};

// Arenalar: hepsi tek zemin (y 704). platform: ortadaki masa (x 387-990, üstü y 429) —
// şimdilik hiçbir arenada yok; kod duruyor, bir arenada true yapılırsa geri gelir.
var AF_ARENAS = {
  ankara: { id: `ankara`, name: `ANKARA`, img: `/assets/ankara_sehir.png`, platform: !1 },
  samsun: { id: `samsun`, name: `SAMSUN`, img: `/assets/samsun_arena.png`, platform: !1 },
  corum: { id: `corum`, name: `ÇORUM`, img: `/assets/corum_arena.png`, platform: !1 },
};
var AF_ARENA_SEL = [`ankara`, `samsun`, `corum`, `random`];
var AF_PLAT = !1; // o anki maçın arenasında masa var mı (maç motoru ayarlar)

function AF_arena(id) {
  if (id === `random`) {
    const k = Object.keys(AF_ARENAS);
    return AF_ARENAS[k[(Math.random() * k.length) | 0]];
  }
  return AF_ARENAS[id] ?? AF_ARENAS.ankara;
}

// Seçim ekranı çubukları: elle yazılmış değil, karakterin GERÇEK oyun değerlerinden hesaplanır.
function AF_statBars(c) {
  const m = c.mod || {},
    k = (v) => Math.max(0.08, Math.min(1, v)),
    spd = (m.spd || 1) / (m.sup || 1),
    dmg = m.dmg || 1,
    hp = m.hp || c.hp || 150;
  return [
    [`HIZ`, k(0.75 * spd)],
    [`GÜÇ`, k(0.7 + (dmg - 1) * 1.4)],
    [`CAN`, k((hp - 100) / 80)],
  ];
}

function AF_char(e) {
  return AF_CHARS[e] ?? AF_CHARS.umut;
}

function AF_def(e, d) {
  const m = e.mod;
  return m && m.sup !== 1
    ? { ...d, startup: Math.round(d.startup * m.sup), recovery: Math.round(d.recovery * m.sup) }
    : d;
}

function AF_spd(e) {
  return e.mod ? e.mod.spd : 1;
}
