// 40-ui-character-select.js — Karakter seçim ekranı: Türkiye haritası verisi, kartlar, ızgara, seçim ekranı.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

var dy = [
    [
      0.8244, 0.0903, 0.841, 0.1035, 0.8464, 0.0935, 0.8617, 0.0952, 0.8754, 0.1024, 0.8828, 0.0806,
      0.8924, 0.083, 0.8942, 0.0941, 0.9116, 0.1229, 0.9118, 0.134, 0.9147, 0.1397, 0.9229, 0.141,
      0.9267, 0.1464, 0.9279, 0.1607, 0.9373, 0.1817, 0.9423, 0.2141, 0.9392, 0.2368, 0.934, 0.2511,
      0.9415, 0.3001, 0.9392, 0.3063, 0.9538, 0.3225, 0.9724, 0.3198, 0.9783, 0.3266, 1.0006,
      0.3802, 0.9883, 0.3619, 0.9812, 0.3778, 0.9778, 0.4158, 0.9582, 0.4228, 0.9613, 0.4474,
      0.9664, 0.459, 0.9647, 0.4822, 0.9661, 0.4916, 0.9714, 0.5067, 0.973, 0.5766, 0.981, 0.5847,
      0.9682, 0.651, 0.9868, 0.6764, 0.9883, 0.6818, 0.986, 0.6898, 0.9875, 0.7244, 0.9994, 0.7503,
      0.9973, 0.7583, 0.9977, 0.7699, 0.9893, 0.7648, 0.972, 0.7956, 0.9678, 0.784, 0.9672, 0.7532,
      0.963, 0.7451, 0.9576, 0.7432, 0.9482, 0.7573, 0.9398, 0.7567, 0.9312, 0.754, 0.9087, 0.7349,
      0.9003, 0.7416, 0.8917, 0.7343, 0.8748, 0.7721, 0.8696, 0.7751, 0.8671, 0.7565, 0.8612,
      0.7459, 0.8537, 0.76, 0.8245, 0.7783, 0.8113, 0.7813, 0.795, 0.7751, 0.7816, 0.777, 0.7448,
      0.819, 0.7097, 0.8414, 0.6782, 0.8398, 0.661, 0.8134, 0.6476, 0.8074, 0.6073, 0.8476, 0.5877,
      0.846, 0.581, 0.8295, 0.5659, 0.8228, 0.5626, 0.8384, 0.5595, 0.8765, 0.5647, 0.911, 0.5563,
      0.9132, 0.5509, 0.9207, 0.5494, 0.9469, 0.5415, 0.9571, 0.5377, 0.9736, 0.5252, 0.9604,
      0.5285, 0.9477, 0.5208, 0.8994, 0.5246, 0.8843, 0.5409, 0.8449, 0.5404, 0.822, 0.5335, 0.8061,
      0.5128, 0.8349, 0.5108, 0.846, 0.5062, 0.8546, 0.4986, 0.8581, 0.4617, 0.8206, 0.4403, 0.8536,
      0.4219, 0.9016, 0.4081, 0.9191, 0.3672, 0.9326, 0.3601, 0.9417, 0.3463, 0.9318, 0.3379,
      0.9188, 0.3189, 0.8643, 0.2832, 0.8231, 0.2456, 0.8128, 0.2422, 0.8236, 0.241, 0.8657, 0.2351,
      0.9056, 0.2318, 0.9096, 0.2236, 0.8997, 0.1946, 0.9231, 0.1699, 0.897, 0.1657, 0.8856, 0.1601,
      0.8398, 0.1565, 0.8363, 0.1524, 0.8428, 0.1482, 0.8425, 0.1306, 0.8225, 0.121, 0.8212, 0.1152,
      0.8409, 0.1058, 0.849, 0.1055, 0.8433, 0.1093, 0.8306, 0.0943, 0.8331, 0.0865, 0.8425, 0.0757,
      0.8368, 0.0763, 0.8314, 0.0851, 0.8252, 0.1051, 0.8182, 0.1177, 0.7875, 0.07, 0.7891, 0.0654,
      0.7958, 0.0648, 0.7797, 0.0675, 0.7724, 0.08, 0.7667, 0.0792, 0.7535, 0.0715, 0.7392, 0.0631,
      0.7316, 0.0594, 0.6982, 0.055, 0.6898, 0.0556, 0.6853, 0.0635, 0.6793, 0.0639, 0.64, 0.0485,
      0.627, 0.0451, 0.6281, 0.0412, 0.6151, 0.0345, 0.606, 0.0291, 0.6135, 0.0136, 0.5936, 0.0165,
      0.5793, 0.0203, 0.5795, 0.0211, 0.5682, 0.018, 0.5493, 0.0184, 0.5396, 0.0217, 0.5372, 0.0255,
      0.5388, 0.0295, 0.5501, 0.0299, 0.5717, 0.0341, 0.5847, 0.037, 0.5717, 0.0441, 0.5787, 0.0568,
      0.5723, 0.0591, 0.5666, 0.0499, 0.5671, 0.0466, 0.562, 0.0389, 0.5264, 0.0466, 0.5162, 0.0522,
      0.4989, 0.0416, 0.4873, 0.0437, 0.4633, 0.0345, 0.4361, 0.0468, 0.401, 0.046, 0.3959, 0.0422,
      0.394, 0.0042, 0.4088, 0.0033, 0.4005, 0.0065, 0.3794, 0.0079, 0.3276, 0.015, 0.3223, 0.0236,
      0.2953, 0.0376, 0.2637, 0.0522, 0.2645, 0.0579, 0.2556, 0.0665, 0.2551, 0.0692, 0.2675,
      0.0769, 0.2764, 0.0903, 0.2751, 0.0966, 0.2667, 0.0905, 0.2513, 0.0924, 0.2467, 0.098, 0.2462,
      0.1041, 0.25, 0.1009, 0.267, 0.1028, 0.2686, 0.12, 0.2635, 0.1383, 0.2675, 0.1584, 0.2653,
      0.1609, 0.2602, 0.1467, 0.243, 0.1557, 0.2281, 0.2031, 0.2114, 0.2033, 0.2079, 0.1774, 0.2003,
      0.1641, 0.1804, 0.1605, 0.1696, 0.163, 0.1432, 0.1659, 0.1364, 0.1751, 0.1354, 0.2069, 0.1472,
      0.2297, 0.1399, 0.2545, 0.1575, 0.278, 0.154, 0.283, 0.1461, 0.289, 0.1211, 0.3223, 0.079,
      0.334, 0.0574, 0.3862, 0.0145, 0.4642, 0.0221, 0.4779, 0.0054, 0.4859, 0.011, 0.4836, 0.0221,
      0.4842, 0.0323, 0.4934, 0.0574, 0.5074, 0.0722, 0.5266, 0.0598, 0.5337, 0.0647, 0.5404,
      0.1043, 0.5524, 0.1281, 0.558, 0.13, 0.5653, 0.1159, 0.5722, 0.1143, 0.5837, 0.1278, 0.5877,
      0.1421, 0.6249, 0.1583, 0.6326, 0.1704, 0.6577, 0.1823, 0.7133, 0.1542, 0.7337, 0.1734,
      0.7507, 0.1796, 0.758, 0.1766, 0.7804, 0.154, 0.7875, 0.141, 0.8015, 0.13, 0.8192, 0.1049,
    ],
    [
      0.1055, 0.0202, 0.1041, 0.0377, 0.1152, 0.0844, 0.1231, 0.0981, 0.1611, 0.1351, 0.1557,
      0.1693, 0.1463, 0.1747, 0.1139, 0.158, 0.1007, 0.172, 0.0913, 0.1685, 0.078, 0.1747, 0.0744,
      0.1955, 0.0652, 0.2192, 0.0393, 0.2486, 0.0157, 0.3069, 0.009, 0.3144, 0.0121, 0.2945, 0.0117,
      0.2772, 0.0221, 0.257, 0.0366, 0.2413, 0.0405, 0.2287, 0.0038, 0.2311, 0.0002, 0.213, 0.004,
      0.2095, 0.0159, 0.1777, 0.0159, 0.1335, 0.0303, 0.1157, 0.0314, 0.1081, 0.0291, 0.0774,
      0.0153, 0.0593, 0.0157, 0.0507, 0.0255, 0.0423, 0.0311, 0.0207, 0.0453, 0.0167, 0.0522,
      0.0062, 0.0644, 0.0008, 0.08, 0.0275, 0.0984, 0.0175,
    ],
  ],
  fy = [
    { n: `İSTANBUL`, x: 0.1569, y: 0.1694, ox: -12, oy: -4, al: `right` },
    { n: `SAKARYA`, x: 0.2314, y: 0.2084, ox: 6, oy: 17, al: `left` },
    { n: `KAYSERİ`, x: 0.5031, y: 0.5231, ox: 0, oy: 0, al: `center` },
    { n: `SAMSUN`, x: 0.5484, y: 0.1261, ox: 0, oy: 21, al: `center` },
    { n: `ÇORUM`, x: 0.4752, y: 0.2405, ox: 0, oy: 0, al: `center` },
  ],
  py = { x: 0.3636, y: 0.3364 };

function my() {
  let e = (0, N.useRef)(null);
  return (
    (0, N.useEffect)(() => {
      let t = e.current;
      if (!t) return;
      let n = t.getContext(`2d`),
        r = (t.width = 760),
        i = (t.height = 360),
        a = 0,
        o = (e) => {
          (n.clearRect(0, 0, r, i), (n.strokeStyle = `rgba(0,240,255,0.07)`), (n.lineWidth = 1));
          for (let e = 0; e <= r; e += 38)
            (n.beginPath(), n.moveTo(e, 0), n.lineTo(e, i), n.stroke());
          for (let e = 0; e <= i; e += 38)
            (n.beginPath(), n.moveTo(0, e), n.lineTo(r, e), n.stroke());
          let t = r - 80,
            s = i - 60;
          n.beginPath();
          for (const rg of dy) {
            for (let q = 0; q < rg.length; q += 2) {
              const X = 40 + rg[q] * t,
                Y = 30 + rg[q + 1] * s;
              q ? n.lineTo(X, Y) : n.moveTo(X, Y);
            }
            n.closePath();
          }
          ((n.fillStyle = `rgba(0,240,255,0.06)`),
            n.fill(),
            (n.shadowColor = `#00f0ff`),
            (n.shadowBlur = 22),
            (n.strokeStyle = `#4ff5ff`),
            (n.lineWidth = 2.5),
            (n.lineJoin = `round`),
            (n.lineCap = `round`),
            n.stroke(),
            (n.shadowBlur = 0),
            (n.font = `600 11px "JetBrains Mono Variable", monospace`),
            (n.fillStyle = `rgba(148,163,184,0.85)`),
            (n.textAlign = `left`),
            n.fillText(`TÜRKİYE · 36°–42° K`, 40, i - 10),
            (n.textAlign = `center`));
          for (let e of fy) {
            let r = 40 + e.x * t,
              i = 30 + e.y * s;
            ((n.fillStyle = `rgba(148,163,184,0.9)`),
              n.beginPath(),
              n.arc(r, i, 3, 0, Math.PI * 2),
              n.fill(),
              (n.lineWidth = 1.3),
              (n.strokeStyle = `#05060f`),
              n.stroke(),
              (n.textAlign = e.al || `center`),
              n.fillText(e.n, r + (e.ox || 0), i - 7 + (e.oy || 0)),
              (n.textAlign = `center`));
          }
          let l = 40 + py.x * t,
            u = 30 + py.y * s,
            d = (e * 0.0016) % 1;
          for (let e = 0; e < 3; e++) {
            let t = (d + e / 3) % 1;
            ((n.strokeStyle = `rgba(255,215,0,${(1 - t) * 0.8})`),
              (n.lineWidth = 2),
              n.beginPath(),
              n.arc(l, u, 6 + t * 30, 0, Math.PI * 2),
              n.stroke());
          }
          ((n.fillStyle = `#ffd700`),
            (n.shadowColor = `#ffd700`),
            (n.shadowBlur = 16),
            n.beginPath(),
            n.arc(l, u, 5, 0, Math.PI * 2),
            n.fill(),
            (n.shadowBlur = 0),
            (n.font = `800 14px "JetBrains Mono Variable", monospace`),
            (n.fillStyle = `#ffd700`),
            n.fillText(`★ ANKARA`, l, u - 16),
            (a = requestAnimationFrame(o)));
        };
      return ((a = requestAnimationFrame(o)), () => cancelAnimationFrame(a));
    }, []),
    (0, P.jsx)(`canvas`, {
      ref: e,
      "data-testid": `select-map-canvas`,
      className: `w-full max-w-[760px] rounded-lg border border-[#272744] bg-black/30`,
    })
  );
}

function hy({
  side: e,
  img: t,
  name: n,
  tag: r,
  color: i,
  ready: a,
  onReady: o,
  controls: s,
  stats: c,
}) {
  return (0, P.jsxs)(Qh.div, {
    initial: { opacity: 0, x: e === 1 ? -30 : 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4 },
    "data-testid": `p${e}-card`,
    className: `flex w-full flex-col rounded-xl border bg-[#121124]/90 p-4 lg:w-[300px]`,
    style: { borderColor: a ? i : `#272744`, boxShadow: a ? `0 0 24px ${i}55` : `none` },
    children: [
      (0, P.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, P.jsxs)(`span`, {
            className: `font-monox text-xs tracking-widest`,
            style: { color: i },
            children: [`OYUNCU `, e],
          }),
          (0, P.jsx)(`span`, {
            "data-testid": `p${e}-ready-indicator`,
            className: `font-monox rounded border px-2 py-0.5 text-[10px] tracking-widest`,
            style: { borderColor: i, color: a ? `#06070f` : i, background: a ? i : `transparent` },
            children: a ? `HAZIR ✓` : `BEKLİYOR`,
          }),
        ],
      }),
      (0, P.jsx)(`div`, {
        className: `relative mt-3 flex h-44 items-center justify-center overflow-hidden rounded-lg bg-black/50`,
        children: (0, P.jsx)(`img`, {
          src: t,
          alt: n,
          onError: (e) => (e.currentTarget.style.display = `none`),
          className: `max-h-40 object-contain`,
          style: { filter: `drop-shadow(0 0 18px ${i}66)` },
        }),
      }),
      (0, P.jsx)(`h2`, { className: `font-display mt-3 text-xl font-black`, children: n }),
      (0, P.jsx)(`p`, { className: `text-xs text-slate-400`, children: r }),
      (0, P.jsx)(`div`, {
        className: `mt-3 space-y-1.5`,
        children: c.map(([e, t]) =>
          (0, P.jsxs)(
            `div`,
            {
              className: `font-monox flex items-center gap-2 text-[10px]`,
              children: [
                (0, P.jsx)(`span`, { className: `w-14 text-slate-500`, children: e }),
                (0, P.jsx)(`div`, {
                  className: `h-1.5 flex-1 rounded bg-black/60`,
                  children: (0, P.jsx)(`div`, {
                    className: `h-full rounded`,
                    style: { width: `${t * 100}%`, background: i },
                  }),
                }),
              ],
            },
            e,
          ),
        ),
      }),
      (0, P.jsx)(`div`, {
        className: `font-monox mt-3 space-y-0.5 text-[10px] text-slate-400`,
        children: s.map((e) => (0, P.jsx)(`p`, { children: e }, e)),
      }),
      (0, P.jsx)(uy, {
        "data-testid": `p${e}-ready-button`,
        variant: a ? `default` : `outline`,
        className: `font-display mt-4 font-bold tracking-widest`,
        style: a ? { background: i, color: `#06070f` } : { borderColor: i, color: i },
        onClick: o,
        children: a ? `HAZIR ✓` : `HAZIR`,
      }),
    ],
  });
}

var AF_HOME = { umut: `ANKARA`, sudem: `ANKARA`, metehan: `SAMSUN`, ahmet: `ÇORUM`, selim: `ANKARA`, alp: `SAKARYA`, duce: `KAYSERİ`, zuzu: `ANKARA` };

var AF_SEL = [`umut`, `sudem`, `metehan`, `ahmet`, `selim`, `alp`, `zuzu`, `duce`, `random`];

function AF_pick() {
  const k = AF_SEL.filter((c) => c !== `random`);
  return k[(Math.random() * k.length) | 0];
}

function AF_Map({ p1, p2 }) {
  const ref = (0, N.useRef)(null),
    st = (0, N.useRef)({ p1, p2 });
  st.current = { p1, p2 };
  (0, N.useEffect)(() => {
    const cv = ref.current;
    if (!cv) return;
    const g = cv.getContext(`2d`),
      W = (cv.width = 760),
      H = (cv.height = 360),
      K = 4,
      sw = W / K,
      sh = H / K;
    const mk = () => {
      const c = document.createElement(`canvas`);
      c.width = sw;
      c.height = sh;
      return c;
    };
    const A = mk(),
      B = mk(),
      a = A.getContext(`2d`),
      b = B.getContext(`2d`);
    const path = new Path2D();
    for (const rg of dy) {
      for (let q = 0; q < rg.length; q += 2) {
        const x = (40 + rg[q] * 680) / K,
          y = (30 + rg[q + 1] * 300) / K;
        q ? path.lineTo(x, y) : path.moveTo(x, y);
      }
      path.closePath();
    }
    b.fillStyle = `#7d1d1d`;
    b.fill(path);
    const gr = a.createLinearGradient(0, 0, 0, sh);
    gr.addColorStop(0, `#a9c653`);
    gr.addColorStop(0.55, `#5fae3e`);
    gr.addColorStop(1, `#2f8a4a`);
    a.fillStyle = gr;
    a.fill(path);
    let seed = 7;
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    for (let i = 0; i < 900; i++) {
      const x = rnd() * sw,
        y = rnd() * sh;
      if (a.isPointInPath(path, x, y)) {
        a.fillStyle = rnd() < 0.55 ? `rgba(20,70,20,.35)` : `rgba(255,255,170,.28)`;
        a.fillRect(x | 0, y | 0, 1, 1);
      }
    }
    a.lineJoin = `round`;
    a.lineWidth = 0.9;
    a.strokeStyle = `#050a05`;
    a.stroke(path);
    const fl = document.createElement(`canvas`);
    fl.width = 18;
    fl.height = 12;
    const f = fl.getContext(`2d`);
    f.fillStyle = `#e30a17`;
    f.fillRect(0, 0, 18, 12);
    f.fillStyle = `#fff`;
    f.beginPath();
    f.arc(6.5, 6, 3.6, 0, 7);
    f.fill();
    f.fillStyle = `#e30a17`;
    f.beginPath();
    f.arc(7.7, 6, 2.9, 0, 7);
    f.fill();
    f.fillStyle = `#fff`;
    f.beginPath();
    f.arc(11.2, 6, 1.35, 0, 7);
    f.fill();
    // ANKARA şehir listesinde değil, arena yıldızının yerinde (py)
    const city = (n) => fy.find((c) => c.n === n) || (n === `ANKARA` ? { n, x: py.x, y: py.y } : null);
    const cx = (c) => 40 + c.x * 680,
      cy = (c) => 30 + c.y * 300;
    const lab = (t, x, y, col, al) => {
      g.font = `800 11px "JetBrains Mono Variable", monospace`;
      g.textAlign = al || `center`;
      g.lineWidth = 3.5;
      g.strokeStyle = `#050a05`;
      g.lineJoin = `round`;
      g.strokeText(t, x, y);
      g.fillStyle = col;
      g.fillText(t, x, y);
    };
    const where = {
      İSTANBUL: [`right`, -9, -4],
      SAKARYA: [`left`, 9, 10],
      KAYSERİ: [`center`, 0, 16],
      SAMSUN: [`center`, 0, 16],
      ÇORUM: [`center`, 0, 16],
    };
    let raf = 0;
    const draw = (t) => {
      const s = st.current;
      const sea = g.createLinearGradient(0, 0, 0, H);
      sea.addColorStop(0, `#0a1a78`);
      sea.addColorStop(1, `#0b1250`);
      g.fillStyle = sea;
      g.fillRect(0, 0, W, H);
      g.fillStyle = `rgba(255,255,255,.035)`;
      for (let y = 0; y < H; y += 6) g.fillRect(0, y, W, 1);
      g.imageSmoothingEnabled = !1;
      g.drawImage(B, 5, 8, W, H);
      g.drawImage(A, 0, 0, W, H);
      g.imageSmoothingEnabled = !0;
      const names = fy.map((c) => c.n);
      const resolve = (id, rand) => (rand ? names[((t / 140) | 0) % names.length] : AF_HOME[id]);
      const mkr = [
        [s.p1, `1P`, `#ff2a5f`],
        [s.p2, `2P`, `#00c8ff`],
      ].map(([p, tag, col]) => ({
        tag,
        col,
        city: resolve(p.id, p.rand),
        ready: p.ready,
        bot: p.bot,
        dummy: p.dummy,
      }));
      for (const c of fy) {
        const x = cx(c),
          y = cy(c),
          w = where[c.n] || [`center`, 0, 16];
        g.fillStyle = `#050a05`;
        g.fillRect(x - 1, y - 20, 2, 21);
        g.fillStyle = `rgba(0,0,0,.45)`;
        g.beginPath();
        g.ellipse(x, y + 1, 4, 1.8, 0, 0, 7);
        g.fill();
        for (let i = 0; i < 9; i++) {
          g.drawImage(
            fl,
            i * 2,
            0,
            2,
            12,
            x + 1 + i * 2,
            y - 20 + Math.sin(t * 0.006 + i * 0.7) * 1.1,
            2,
            12,
          );
        }
        g.strokeStyle = `#050a05`;
        g.lineWidth = 1.2;
        g.strokeRect(x + 0.5, y - 20.5, 19, 13);
        const own = mkr.filter((m) => m.city === c.n);
        lab(c.n, x + w[1], y + w[2], own.length ? own[own.length - 1].col : `#ffffff`, w[0]);
      }
      const ax = 40 + py.x * 680,
        ay = 30 + py.y * 300,
        d = (t * 0.0016) % 1;
      for (let i = 0; i < 3; i++) {
        const q = (d + i / 3) % 1;
        g.strokeStyle = `rgba(255,215,0,${(1 - q) * 0.8})`;
        g.lineWidth = 2;
        g.beginPath();
        g.arc(ax, ay, 6 + q * 28, 0, 7);
        g.stroke();
      }
      g.fillStyle = `#ffd700`;
      g.shadowColor = `#ffd700`;
      g.shadowBlur = 14;
      g.beginPath();
      g.arc(ax, ay, 5, 0, 7);
      g.fill();
      g.shadowBlur = 0;
      g.lineWidth = 1.5;
      g.strokeStyle = `#050a05`;
      g.stroke();
      lab(`★ ANKARA · ARENA`, ax, ay + 19, `#ffd700`);
      for (const m of mkr) {
        const c = city(m.city);
        if (!c) continue;
        const same = mkr[0].city === mkr[1].city,
          off = same ? (m.tag === `1P` ? -17 : 17) : 0,
          x = cx(c) + off + 9,
          y = cy(c) - 38 + Math.sin(t * 0.008 + (m.tag === `1P` ? 0 : 2)) * 2.5;
        g.save();
        g.fillStyle = m.col;
        g.strokeStyle = `#050a05`;
        g.lineWidth = 2;
        g.beginPath();
        g.roundRect(x - 15, y - 9, 30, 17, 3);
        g.fill();
        g.stroke();
        g.beginPath();
        g.moveTo(x - 5, y + 8);
        g.lineTo(x, y + 15);
        g.lineTo(x + 5, y + 8);
        g.closePath();
        g.fill();
        g.font = `900 12px "JetBrains Mono Variable", monospace`;
        g.textAlign = `center`;
        g.fillStyle = `#fff`;
        g.fillText(m.bot ? (m.dummy ? `KUKLA` : `BOT`) : m.tag, x, y + 4);
        g.setLineDash([4, 3]);
        g.lineDashOffset = -t * 0.02;
        g.strokeStyle = m.col;
        g.lineWidth = 2;
        g.strokeRect(cx(c) - 4 + off * 0.4, cy(c) - 23, 28, 28);
        g.restore();
      }
      g.font = `700 10px "JetBrains Mono Variable", monospace`;
      g.textAlign = `left`;
      g.fillStyle = `rgba(190,205,255,.75)`;
      g.fillText(`TÜRKİYE`, 12, H - 10);
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (0, P.jsx)(`canvas`, {
    ref,
    "data-testid": `select-map-canvas`,
    style: {
      width: `100%`,
      maxWidth: 560,
      borderRadius: 8,
      border: `4px solid #0a0a14`,
      boxShadow: `0 0 0 2px #00f0ff55, 0 0 26px rgba(0,240,255,.2)`,
      imageRendering: `auto`,
    },
  });
}

function AF_Turntable({ sig, color, ready, src, mystery }) {
  const ref = (0, N.useRef)(null),
    st = (0, N.useRef)({ t0: -1e9, dur: 900, turns: 1 }),
    rd = (0, N.useRef)(ready);
  rd.current = ready;
  (0, N.useEffect)(() => {
    st.current = { t0: performance.now(), dur: 950, turns: 1 };
  }, [sig]);
  (0, N.useEffect)(() => {
    if (ready) st.current = { t0: performance.now(), dur: 1300, turns: 2 };
  }, [ready]);
  (0, N.useEffect)(() => {
    let raf = 0;
    const loop = (t) => {
      const el = ref.current;
      if (el) {
        const s = st.current,
          e = t - s.t0;
        let a;
        if (e < s.dur) {
          const p = Math.max(0, e) / s.dur;
          a = 360 * s.turns * (1 - Math.pow(1 - p, 3));
        } else a = Math.sin(t * 0.0016) * (rd.current ? 9 : 17) * Math.min(1, (e - s.dur) / 600);
        el.style.transform = `rotateY(${a}deg)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);
  const L = 9,
    layers = [];
  for (let i = 0; i < L; i++) {
    const edge = i === 0 || i === L - 1,
      z = (i - (L - 1) / 2) * 2.8;
    const flt = edge ? `drop-shadow(0 0 16px ${color}77)` : `brightness(.32) saturate(.6)`;
    layers.push(
      (0, P.jsx)(
        `div`,
        {
          style: {
            position: `absolute`,
            inset: 0,
            transform: `translateZ(${z}px)`,
            display: `flex`,
            alignItems: `flex-end`,
            justifyContent: `center`,
            filter: flt,
          },
          children: mystery
            ? (0, P.jsx)(`span`, {
                style: {
                  fontSize: 230,
                  lineHeight: `260px`,
                  fontWeight: 900,
                  color: `#ffd24a`,
                  fontFamily: `"Outfit Variable", Outfit, sans-serif`,
                  marginBottom: 20,
                },
                children: `?`,
              })
            : (0, P.jsx)(`img`, {
                src,
                alt: ``,
                draggable: !1,
                onError: (e) => (e.currentTarget.style.display = `none`),
                style: {
                  height: `100%`,
                  width: `100%`,
                  objectFit: `contain`,
                  objectPosition: `50% 100%`,
                },
              }),
        },
        i,
      ),
    );
  }
  return (0, P.jsxs)(`div`, {
    style: {
      position: `relative`,
      height: 288,
      perspective: 900,
      display: `flex`,
      alignItems: `flex-end`,
      justifyContent: `center`,
      background: `radial-gradient(ellipse at 50% 100%, ${color}40, transparent 62%), rgba(0,0,0,.5)`,
      borderRadius: 8,
      overflow: `hidden`,
      paddingBottom: 6,
    },
    children: [
      (0, P.jsx)(`div`, {
        style: {
          position: `absolute`,
          bottom: 6,
          left: `50%`,
          width: 170,
          height: 22,
          marginLeft: -85,
          borderRadius: `50%`,
          background: `radial-gradient(ellipse, rgba(0,0,0,.75), transparent 70%)`,
        },
      }),
      (0, P.jsx)(`div`, {
        ref,
        style: {
          position: `relative`,
          width: `86%`,
          height: `80%`,
          marginBottom: 14,
          transformStyle: `preserve-3d`,
        },
        children: layers,
      }),
    ],
  });
}

function AF_Card({
  side: e,
  charId: t,
  onPrev: pv,
  onNext: nx,
  ready: r,
  onReady: i,
  isBot: a,
  dummy: dm,
  canSwitch: o,
}) {
  const rnd = t === `random`,
    s = AF_char(t),
    c = rnd ? `#ffd24a` : s.color;
  const l = rnd
    ? [
        `Karakter, dövüş başlarken rastgele seçilir`,
        `HAZIR'a basınca ya da dövüş başlayınca belli olur`,
      ]
    : a
      ? [dm ? `Antrenman kuklası — karakterini sen seç` : `Bot yönetir — karakterini sen seç`, `Ulti: ${s.ultName} (${s.ultHint})`]
      : AF_cardLines(e === 1 ? 0 : 1, s);
  const arrow = (tid, fn, txt) =>
    (0, P.jsx)(`button`, {
      type: `button`,
      "data-testid": tid,
      onClick: fn,
      disabled: !o,
      className: `font-display rounded border border-[#272744] px-2.5 py-1 text-sm font-black hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30`,
      style: { color: c },
      children: txt,
    });
  return (0, P.jsxs)(Qh.div, {
    initial: { opacity: 0, x: e === 1 ? -30 : 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4 },
    "data-testid": `p${e}-card`,
    className: `flex w-full flex-col rounded-xl border bg-[#121124]/90 p-4 lg:w-[300px]`,
    style: { borderColor: r ? c : `#272744`, boxShadow: r ? `0 0 24px ${c}55` : `none` },
    children: [
      (0, P.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, P.jsx)(`span`, {
            className: `font-monox text-xs tracking-widest`,
            style: { color: e === 1 ? `#ff2a5f` : `#00c8ff` },
            children: a ? (dm ? `KUKLA` : `BOT`) : `OYUNCU ${e}`,
          }),
          (0, P.jsx)(`span`, {
            "data-testid": `p${e}-ready-indicator`,
            className: `font-monox rounded border px-2 py-0.5 text-[10px] tracking-widest`,
            style: { borderColor: c, color: r ? `#06070f` : c, background: r ? c : `transparent` },
            children: r ? `HAZIR ✓` : `BEKLİYOR`,
          }),
        ],
      }),
      (0, P.jsx)(`div`, {
        className: `mt-3`,
        children: (0, P.jsx)(AF_Turntable, {
          sig: t,
          color: c,
          ready: r,
          src: rnd ? `` : s.img(),
          mystery: rnd,
        }),
      }),
      (0, P.jsxs)(`div`, {
        className: `mt-3 flex items-center justify-between gap-2`,
        children: [
          arrow(`p${e}-prev-char`, pv, `◀`),
          (0, P.jsx)(`h2`, {
            "data-testid": `p${e}-char-name`,
            className: `font-display text-xl font-black tracking-wide`,
            style: { color: c, textShadow: `2px 2px 0 #000` },
            children: rnd ? `RASTGELE` : s.name,
          }),
          arrow(`p${e}-next-char`, nx, `▶`),
        ],
      }),
      (0, P.jsxs)(`div`, {
        "data-testid": `p${e}-char-style`,
        className: `font-monox mt-1 flex items-center justify-between gap-2 text-[10px] tracking-wider`,
        children: [
          (0, P.jsx)(`span`, { className: `whitespace-nowrap`, style: { color: c }, children: rnd ? `SÜRPRİZ` : s.stil }),
          !rnd &&
            (0, P.jsx)(`span`, {
              className: `whitespace-nowrap text-slate-400`,
              children: `ZORLUK ${`★`.repeat(s.zorluk || 1)}${`☆`.repeat(3 - (s.zorluk || 1))}`,
            }),
        ],
      }),
      (0, P.jsx)(`div`, {
        className: `mt-3 space-y-1.5`,
        children: (rnd ? [] : AF_statBars(s)).map(([e, t]) =>
          (0, P.jsxs)(
            `div`,
            {
              className: `font-monox flex items-center gap-2 text-[10px]`,
              children: [
                (0, P.jsx)(`span`, { className: `w-14 text-slate-500`, children: e }),
                (0, P.jsx)(`div`, {
                  className: `h-1.5 flex-1 rounded bg-black/60`,
                  children: (0, P.jsx)(`div`, {
                    className: `h-full rounded`,
                    style: { width: `${t * 100}%`, background: c },
                  }),
                }),
              ],
            },
            e,
          ),
        ),
      }),
      (0, P.jsx)(`div`, {
        className: `font-monox mt-3 space-y-0.5 text-[10px] text-slate-400`,
        children: l.map((e) => (0, P.jsx)(`p`, { children: e }, e)),
      }),
      (0, P.jsx)(uy, {
        "data-testid": `p${e}-ready-button`,
        variant: r ? `default` : `outline`,
        disabled: a,
        className: `font-display mt-4 font-bold tracking-widest disabled:opacity-80`,
        style: r ? { background: c, color: `#06070f` } : { borderColor: c, color: c },
        onClick: i,
        children: a ? (dm ? `KUKLA HAZIR ✓` : `BOT HAZIR ✓`) : r ? `HAZIR ✓` : `HAZIR`,
      }),
    ],
  });
}

function AF_Grid({ p1c, p2c, r1, r2, bot, dummy, onPick }) {
  const cells = [`umut`, `sudem`, `metehan`, `ahmet`, `selim`, `alp`, `random`, 0];
  const tag = (txt, col, side) =>
    (0, P.jsx)(`span`, {
      className: `anim-blink font-monox`,
      style: {
        position: `absolute`,
        top: -11,
        [side]: -4,
        background: col,
        color: `#fff`,
        fontSize: 11,
        fontWeight: 900,
        padding: `1px 6px`,
        borderRadius: 3,
        border: `2px solid #050a05`,
        zIndex: 3,
      },
      children: txt,
    });
  return (0, P.jsx)(`div`, {
    "data-testid": `char-grid`,
    style: {
      display: `grid`,
      gridTemplateColumns: `repeat(4, 92px)`,
      gap: 10,
      justifyContent: `center`,
      padding: `14px 8px 4px`,
    },
    children: cells.map((id, i) => {
      const lock = !id,
        rnd = id === `random`,
        ch = !lock && !rnd ? AF_char(id) : null;
      const sel1 = !!id && p1c === id,
        sel2 = !!id && p2c === id;
      return (0, P.jsxs)(`button`, {
        type: `button`,
        key: i,
        "data-testid": lock ? `grid-locked-${i}` : `grid-${id}`,
        disabled: lock,
        onClick: (e) => {
          lock || onPick(e.shiftKey ? 2 : 1, id);
        },
        onContextMenu: (e) => {
          e.preventDefault();
          lock || onPick(2, id);
        },
        style: {
          position: `relative`,
          width: 92,
          height: 92,
          padding: 0,
          border: `3px solid ${lock ? `#1b1b30` : `#3a3a66`}`,
          borderRadius: 6,
          background: lock
            ? `#0b0b18`
            : rnd
              ? `radial-gradient(circle, #3a2a00, #120c00)`
              : `#10102a`,
          overflow: `visible`,
          cursor: lock ? `not-allowed` : `pointer`,
        },
        children: [
          (0, P.jsxs)(`div`, {
            style: { position: `absolute`, inset: 0, overflow: `hidden`, borderRadius: 3 },
            children: [
              ch &&
                (0, P.jsx)(`div`, {
                  style: {
                    position: `absolute`,
                    inset: 0,
                    backgroundImage: `url(${ch.img()})`,
                    backgroundSize: `215% auto`,
                    backgroundPosition: `50% 2%`,
                    backgroundRepeat: `no-repeat`,
                    filter: sel1 || sel2 ? `none` : `brightness(.7)`,
                  },
                }),
              rnd &&
                (0, P.jsx)(`div`, {
                  style: {
                    position: `absolute`,
                    inset: 0,
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    fontSize: 60,
                    fontWeight: 900,
                    color: `#ffd24a`,
                    textShadow: `3px 3px 0 #000`,
                    fontFamily: `"Outfit Variable", Outfit, sans-serif`,
                  },
                  children: `?`,
                }),
              lock &&
                (0, P.jsx)(`div`, {
                  style: {
                    position: `absolute`,
                    inset: 0,
                    display: `flex`,
                    flexDirection: `column`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    color: `#2c2c4a`,
                    fontWeight: 900,
                  },
                  children: [
                    (0, P.jsx)(`span`, {
                      key: `q`,
                      style: { fontSize: 46, lineHeight: 1 },
                      children: `?`,
                    }),
                    (0, P.jsx)(`span`, {
                      key: `y`,
                      className: `font-monox`,
                      style: { fontSize: 9, letterSpacing: `.15em`, marginTop: 2 },
                      children: `YAKINDA`,
                    }),
                  ],
                }),
              !lock &&
                (0, P.jsx)(`div`, {
                  className: `font-monox`,
                  style: {
                    position: `absolute`,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `rgba(0,0,0,.72)`,
                    color: `#fff`,
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: `.12em`,
                    padding: `2px 0`,
                    textAlign: `center`,
                  },
                  children: rnd ? `RASTGELE` : ch.name,
                }),
            ],
          }),
          sel1 &&
            (0, P.jsx)(`div`, {
              className: `anim-blink`,
              style: {
                position: `absolute`,
                inset: -5,
                border: `4px solid #ff2a5f`,
                borderRadius: 8,
                boxShadow: `0 0 14px #ff2a5f`,
                zIndex: 2,
                pointerEvents: `none`,
              },
            }),
          sel2 &&
            (0, P.jsx)(`div`, {
              className: `anim-blink`,
              style: {
                position: `absolute`,
                inset: sel1 ? -1 : -5,
                border: `4px ${sel1 ? `dashed` : `solid`} #00c8ff`,
                borderRadius: 8,
                boxShadow: `0 0 14px #00c8ff`,
                zIndex: 2,
                pointerEvents: `none`,
              },
            }),
          sel1 && tag(r1 ? `1P ✓` : `1P`, `#ff2a5f`, `left`),
          sel2 && tag(bot ? (dummy ? `KUKLA` : `BOT`) : r2 ? `2P ✓` : `2P`, `#00a8d8`, `right`),
        ],
      });
    }),
  });
}


// ---- Street Fighter V tarzı seçim ekranı (piksel) ----
// Büyük yarı vücut seçim pozları: assets/ui/secim_<id>.webp (sağa bakar; P2 için aynalanır)
function AF_SelPose({ side, id, ready, color }) {
  const L = side === 1,
    rnd = id === `random`;
  return (0, P.jsx)(`div`, {
    style: {
      position: `absolute`,
      bottom: 0,
      [L ? `left` : `right`]: `1%`,
      height: `min(84vh, 680px)`,
      width: `min(40vw, 520px)`,
      pointerEvents: `none`,
      zIndex: 1,
      display: `flex`,
      alignItems: `flex-end`,
      justifyContent: L ? `flex-start` : `flex-end`,
    },
    children: rnd
      ? (0, P.jsx)(`span`, {
          style: {
            fontSize: `min(40vh, 320px)`,
            lineHeight: 1,
            fontWeight: 900,
            color: `#ffd24a`,
            textShadow: `6px 6px 0 #000, 0 0 30px #ffd24a88`,
            fontFamily: `"Outfit Variable", Outfit, sans-serif`,
            margin: `0 12%`,
          },
          children: `?`,
        })
      : (0, P.jsx)(
          Qh.img,
          {
            src: gg(`/assets/ui/secim_${id}.png`),
            alt: ``,
            draggable: !1,
            "data-testid": `p${side}-pose`,
            initial: { opacity: 0, x: L ? -90 : 90, scaleX: L ? 1 : -1 },
            animate: { opacity: 1, x: 0, scaleX: L ? 1 : -1 },
            transition: { duration: 0.28, ease: `easeOut` },
            style: {
              height: `100%`,
              width: `auto`,
              imageRendering: `pixelated`,
              // ekranın ortasına bakan kenar yumuşak kaybolur (kollar/saçlar kesik görünmez)
              WebkitMaskImage: `linear-gradient(to right, #000 78%, transparent 99%)`,
              maskImage: `linear-gradient(to right, #000 78%, transparent 99%)`,
              filter: ready ? `drop-shadow(0 0 14px ${color}) brightness(1.08)` : `drop-shadow(0 0 6px #000)`,
            },
          },
          id,
        ),
  });
}

function AF_SelSide({ side, id, ready, isBot, dummy, onPrev, onNext, onReady, canSwitch }) {
  const L = side === 1,
    rnd = id === `random`,
    s = rnd ? null : AF_char(id),
    c = rnd ? `#ffd24a` : s.color,
    pc = L ? `#ff2a5f` : `#00c8ff`;
  const arrow = (tid, fn, txt) =>
    (0, P.jsx)(`button`, {
      type: `button`,
      "data-testid": tid,
      onClick: fn,
      disabled: !canSwitch,
      className: `font-display rounded border border-white/20 bg-black/50 px-2 py-0.5 text-sm font-black hover:bg-white/10 disabled:opacity-30`,
      style: { color: c },
      children: txt,
    });
  const yildiz = (n) => `★`.repeat(n || 1) + `☆`.repeat(3 - (n || 1));
  const ult = s ? `↓↘→↓↘→ ya da ${AF_k(side - 1, `ult`, !0)} — ${s.ultName}` : `Karakter dövüş başında belli olur`;
  return (0, P.jsxs)(`div`, {
    "data-testid": `p${side}-card`,
    style: {
      position: `absolute`,
      bottom: 18,
      [L ? `left` : `right`]: 26,
      width: 340,
      textAlign: L ? `left` : `right`,
      zIndex: 4,
    },
    children: [
      (0, P.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        style: { justifyContent: L ? `flex-start` : `flex-end` },
        children: [
          (0, P.jsx)(`span`, {
            className: `font-monox text-xs font-bold tracking-widest`,
            style: { color: pc, textShadow: `1px 1px 0 #000` },
            children: isBot ? (dummy ? `KUKLA` : `BOT`) : `${side}P`,
          }),
          (0, P.jsx)(`span`, {
            "data-testid": `p${side}-ready-indicator`,
            className: `font-monox rounded border px-2 py-0.5 text-[10px] tracking-widest`,
            style: { borderColor: c, color: ready ? `#06070f` : c, background: ready ? c : `rgba(0,0,0,.55)` },
            children: ready ? `HAZIR ✓` : `BEKLİYOR`,
          }),
        ],
      }),
      (0, P.jsxs)(`div`, {
        className: `flex items-center gap-3`,
        style: { justifyContent: `flex-start`, flexDirection: L ? `row` : `row-reverse` },
        children: [
          (0, P.jsx)(`h2`, {
            "data-testid": `p${side}-char-name`,
            className: `font-display text-5xl font-black tracking-wide`,
            style: { color: c, textShadow: `3px 3px 0 #000, 0 0 22px ${c}88` },
            children: rnd ? `RASTGELE` : s.name,
          }),
          // P2 satırı ters dizildiği için okların sırası da ters verilir (ekranda yine ◀ ▶)
          ...(L
            ? [arrow(`p${side}-prev-char`, onPrev, `◀`), arrow(`p${side}-next-char`, onNext, `▶`)]
            : [arrow(`p${side}-next-char`, onNext, `▶`), arrow(`p${side}-prev-char`, onPrev, `◀`)]),
        ],
      }),
      (0, P.jsx)(`p`, {
        "data-testid": `p${side}-char-style`,
        className: `font-monox text-[11px] tracking-widest`,
        style: { color: `#e2e8f0`, textShadow: `1px 1px 0 #000` },
        children: rnd ? `SÜRPRİZ` : `${s.stil} · OYNANIŞ ${yildiz(s.zorluk)} · ${AF_HOME[s.id] || ``}`,
      }),
      !rnd &&
        (0, P.jsx)(`div`, {
          className: `mt-2 space-y-1`,
          children: AF_statBars(s).map(([e, t]) =>
            (0, P.jsxs)(
              `div`,
              {
                className: `font-monox flex items-center gap-2 text-[10px]`,
                style: { flexDirection: L ? `row` : `row-reverse` },
                children: [
                  (0, P.jsx)(`span`, { className: `w-9 text-slate-300`, style: { textShadow: `1px 1px 0 #000` }, children: e }),
                  (0, P.jsx)(`div`, {
                    className: `h-2 flex-1 rounded-sm bg-black/70`,
                    style: { border: `1px solid #ffffff22`, transform: L ? `none` : `scaleX(-1)` },
                    children: (0, P.jsx)(`div`, { className: `h-full rounded-sm`, style: { width: `${t * 100}%`, background: c } }),
                  }),
                ],
              },
              e,
            ),
          ),
        }),
      (0, P.jsx)(`p`, {
        className: `font-monox mt-2 text-[10px] text-slate-300`,
        style: { textShadow: `1px 1px 0 #000` },
        children: ult,
      }),
      (0, P.jsx)(uy, {
        "data-testid": `p${side}-ready-button`,
        variant: ready ? `default` : `outline`,
        disabled: isBot && !canSwitch && !ready,
        className: `font-display mt-2 w-40 font-bold tracking-widest disabled:opacity-80`,
        style: ready ? { background: c, color: `#06070f` } : { borderColor: c, color: c, background: `rgba(0,0,0,.55)` },
        onClick: onReady,
        children: isBot
          ? `${dummy ? `KUKLA` : `BOT`} ${ready ? `HAZIR ✓` : canSwitch ? `ONAYLA` : `SIRADA`}`
          : ready
            ? `HAZIR ✓`
            : `HAZIR`,
      }),
    ],
  });
}


// ---- Karakter seçimi (yeni yerleşim): solda 1P kartı, sağda 2P kartı, ortada RASTGELE + 4+4 ızgara ----
// Kart arkasında karakterin memleket arenası; çerçeve dili ana menüyle aynı (krem çerçeve, sert gölge).
var AF_YAKINDA = {}; // kilitli ("YAKINDA") karakterler: { id: `AD` }
var AF_GRID_UST = [`umut`, `sudem`, `metehan`, `ahmet`];
var AF_GRID_ALT = [`selim`, `alp`, `zuzu`, `duce`];
var AF_HOME_ARENA = { ANKARA: `ankara`, SAMSUN: `samsun`, ÇORUM: `corum`, SAKARYA: `sakarya` };
var AF_KREM = `#f4efe6`;
// Izgara kutusunda yüz kırpması: [büyütme %, yatay %, dikey %] — portredeki kafa konumundan
// hesaplandı (_onizleme/yuz_merkez.py); portre değişince yeniden üret.
var AF_YUZ = {
  umut: [180, 59, 7],
  sudem: [190, 56, 6],
  metehan: [180, 66, 7],
  ahmet: [180, 58, 7],
  selim: [180, 78, 8],
  alp: [165, 43, 8],
  zuzu: [180, 46, 6],
  duce: [145, 56, 11],
};
var AF_SERT = `drop-shadow(5px 6px 0 rgba(10,6,18,.8))`;

// W/S (ve ▲/▼) ile ızgarada dikey gezinme; kilitli kutular atlanır
function AF_gridStep(c, d) {
  const ok = (id) => AF_SEL.includes(id);
  if (d === `U`) {
    if (c === `random`) return c;
    const i = AF_GRID_ALT.indexOf(c);
    return i >= 0 ? AF_GRID_UST[i] : `random`;
  }
  if (c === `random`) return AF_GRID_UST[0];
  const i = AF_GRID_UST.indexOf(c);
  if (i < 0) return c;
  for (let k = i; k >= 0; k--) if (ok(AF_GRID_ALT[k])) return AF_GRID_ALT[k];
  return c;
}

function AF_SelCard({ side, id, ready, isBot, dummy, onReady }) {
  const L = side === 1,
    rnd = id === `random`,
    s = rnd ? null : AF_char(id),
    renk = rnd ? `#ffd24a` : s.color,
    pc = L ? `#ff2a5f` : `#00c8ff`,
    home = s ? AF_HOME[s.id] || `` : ``,
    arena = AF_ARENAS[AF_HOME_ARENA[home]];
  return (0, P.jsx)(`div`, {
    style: { position: `absolute`, [L ? `left` : `right`]: `2.6%`, top: `14%`, width: `30%`, height: `73%`, filter: AF_SERT },
    children: (0, P.jsxs)(`div`, {
      "data-testid": `p${side}-card`,
      onClick: onReady,
      style: {
        position: `absolute`,
        inset: 0,
        border: `0.45vw solid ${AF_KREM}`,
        background: `#1a1426`,
        overflow: `hidden`,
        cursor: `pointer`,
      },
      children: [
        arena &&
          (0, P.jsx)(`div`, {
            style: {
              position: `absolute`,
              inset: 0,
              backgroundImage: `url(${gg(arena.img)})`,
              backgroundSize: `cover`,
              backgroundPosition: `50% 40%`,
              filter: `brightness(.62) saturate(1.05)`,
            },
          }),
        rnd
          ? (0, P.jsx)(`div`, {
              className: `font-display font-black`,
              style: {
                position: `absolute`,
                inset: 0,
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                paddingBottom: `22%`,
                fontSize: `min(15vw, 26vh)`,
                color: `#ffd24a`,
                textShadow: `6px 6px 0 #000`,
              },
              children: `?`,
            })
          : // portreler farklı genişlikte: esnek kutuyla yatayda ortalanır, alt bilgi paneline oturur
            (0, P.jsx)(`div`, {
              style: { position: `absolute`, left: 0, right: 0, top: `5%`, bottom: `16%`, display: `flex`, justifyContent: `center`, alignItems: `flex-end` },
              children: (0, P.jsx)(
                Qh.img,
                {
                  src: gg(`/assets/ui/secim_${id}.png`),
                  alt: ``,
                  draggable: !1,
                  "data-testid": `p${side}-pose`,
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.22, ease: `easeOut` },
                  style: {
                    height: `100%`,
                    width: `auto`,
                    maxWidth: `none`,
                    transform: L ? `none` : `scaleX(-1)`,
                    filter: ready ? `brightness(1.08)` : `none`,
                  },
                },
                id,
              ),
            }),
        // üst etiketler: oyuncu + hazır durumu
        (0, P.jsxs)(`div`, {
          style: { position: `absolute`, top: `2.5%`, left: `3%`, right: `3%`, display: `flex`, justifyContent: `space-between`, flexDirection: L ? `row` : `row-reverse` },
          children: [
            (0, P.jsx)(`span`, {
              className: `font-display font-black italic`,
              style: { background: pc, color: `#fff`, padding: `0 .6em`, fontSize: `min(1.5vw, 2.7vh)`, boxShadow: `3px 3px 0 #000` },
              children: isBot ? (dummy ? `KUKLA` : `BOT`) : `${side}P`,
            }),
            (0, P.jsx)(`span`, {
              "data-testid": `p${side}-ready-indicator`,
              className: `font-display font-black italic`,
              style: {
                background: ready ? AF_KREM : `rgba(0,0,0,.6)`,
                color: ready ? `#141020` : AF_KREM,
                padding: `0 .6em`,
                fontSize: `min(1.2vw, 2.2vh)`,
                boxShadow: `3px 3px 0 #000`,
              },
              children: ready ? `HAZIR ✓` : `SEÇİYOR`,
            }),
          ],
        }),
        // alt bilgi: isim, memleket · stil, çubuklar
        (0, P.jsxs)(`div`, {
          style: {
            position: `absolute`,
            left: 0,
            right: 0,
            bottom: 0,
            padding: `4% 6% 5%`,
            background: `linear-gradient(to top, rgba(14,10,22,.96) 70%, rgba(14,10,22,0))`,
            textAlign: L ? `left` : `right`,
          },
          children: [
            (0, P.jsx)(`div`, {
              "data-testid": `p${side}-char-name`,
              className: `font-display font-black italic`,
              style: { fontSize: `min(3.6vw, 6.4vh)`, lineHeight: 1, color: renk, textShadow: `3px 3px 0 #000` },
              children: rnd ? `RASTGELE` : s.name,
            }),
            (0, P.jsx)(`div`, {
              "data-testid": `p${side}-char-style`,
              className: `font-display font-bold`,
              style: { fontSize: `min(1.05vw, 1.9vh)`, letterSpacing: `.08em`, color: `#e8e2d6`, marginTop: `1.5%` },
              children: rnd ? `DÖVÜŞ BAŞINDA BELLİ OLUR` : `${home} · ${s.stil}`,
            }),
            !rnd &&
              (0, P.jsx)(`div`, {
                style: { marginTop: `3%`, display: `grid`, gap: `.45vh` },
                children: AF_statBars(s).map(([e, t]) =>
                  (0, P.jsxs)(
                    `div`,
                    {
                      className: `font-display font-bold`,
                      style: { display: `flex`, alignItems: `center`, gap: `3%`, flexDirection: L ? `row` : `row-reverse`, fontSize: `min(.95vw, 1.7vh)`, color: `#c9c2b6` },
                      children: [
                        (0, P.jsx)(`span`, { style: { width: `13%`, textAlign: L ? `left` : `right` }, children: e }),
                        (0, P.jsx)(`div`, {
                          style: { flex: 1, height: `.9vh`, background: `rgba(255,255,255,.12)`, transform: L ? `none` : `scaleX(-1)` },
                          children: (0, P.jsx)(`div`, { style: { width: `${t * 100}%`, height: `100%`, background: renk } }),
                        }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
          ],
        }),
      ],
    }),
  });
}

function AF_SelTile({ id, p1c, p2c, r1, r2, bot, dummy, onPick, big }) {
  const kilit = !!AF_YAKINDA[id],
    rnd = id === `random`,
    s1 = p1c === id,
    s2 = p2c === id,
    ad = rnd ? `RASTGELE` : kilit ? AF_YAKINDA[id] : AF_char(id).name;
  const etiket = (txt, col, sag) =>
    (0, P.jsx)(`span`, {
      className: `font-display font-black italic ${(sag ? r2 : r1) ? `` : `anim-blink`}`,
      style: {
        position: `absolute`,
        top: `-14%`,
        [sag ? `right` : `left`]: `-6%`,
        background: col,
        color: `#fff`,
        padding: `0 .35em`,
        fontSize: `min(.95vw, 1.7vh)`,
        boxShadow: `2px 2px 0 #000`,
        zIndex: 3,
      },
      children: txt,
    });
  return (0, P.jsxs)(`button`, {
    type: `button`,
    "data-testid": kilit ? `grid-locked-${id}` : `grid-${id}`,
    disabled: kilit,
    onClick: (e) => kilit || onPick(e.shiftKey ? 2 : 1, id),
    onContextMenu: (e) => {
      e.preventDefault();
      kilit || onPick(2, id);
    },
    style: {
      position: `relative`,
      width: `100%`,
      aspectRatio: big ? `1.6 / 1` : `1 / 1`,
      padding: 0,
      border: 0,
      background: `none`,
      cursor: kilit ? `not-allowed` : `pointer`,
      filter: AF_SERT,
      transform: s1 || s2 ? `translateY(-4%) scale(1.06)` : `none`,
      transition: `transform .15s`,
    },
    children: [
      (0, P.jsxs)(`div`, {
        style: {
          position: `absolute`,
          inset: 0,
          border: `0.3vw solid ${s1 && s2 ? `#fff` : s1 ? `#ff2a5f` : s2 ? `#00c8ff` : AF_KREM}`,
          background: rnd ? `#ffd24a` : `#2a2236`,
          overflow: `hidden`,
        },
        children: [
          !rnd &&
            (0, P.jsx)(`div`, {
              style: {
                position: `absolute`,
                inset: 0,
                backgroundImage: `url(${gg(`/assets/ui/secim_${id}.png`)})`,
                backgroundSize: `${(AF_YUZ[id] || [200])[0]}% auto`,
                backgroundPosition: `${(AF_YUZ[id] || [0, 50])[1]}% ${(AF_YUZ[id] || [0, 50, 4])[2]}%`,
                backgroundRepeat: `no-repeat`,
                filter: kilit ? `grayscale(1) brightness(.4)` : s1 || s2 ? `none` : `brightness(.82)`,
              },
            }),
          rnd &&
            (0, P.jsx)(`div`, {
              className: `font-display font-black`,
              style: { position: `absolute`, inset: 0, display: `flex`, alignItems: `center`, justifyContent: `center`, paddingBottom: `14%`, fontSize: `min(4vw, 7vh)`, color: `#141020` },
              children: `?`,
            }),
          kilit &&
            (0, P.jsx)(`div`, {
              className: `font-display font-black`,
              style: { position: `absolute`, inset: 0, display: `flex`, alignItems: `center`, justifyContent: `center`, paddingBottom: `16%`, fontSize: `min(2.2vw, 4vh)`, color: AF_KREM },
              children: `🔒`,
            }),
          (0, P.jsx)(`div`, {
            className: `font-display font-black italic`,
            style: {
              position: `absolute`,
              left: 0,
              right: 0,
              bottom: 0,
              background: rnd ? `#141020` : `rgba(14,10,22,.85)`,
              color: rnd ? `#ffd24a` : AF_KREM,
              fontSize: `min(.85vw, 1.55vh)`,
              letterSpacing: `.06em`,
              padding: `3% 0`,
              textAlign: `center`,
            },
            children: kilit ? `YAKINDA` : ad,
          }),
        ],
      }),
      s1 && etiket(r1 ? `1P ✓` : `1P`, `#ff2a5f`, !1),
      s2 && etiket(bot ? (dummy ? `KUKLA` : `BOT`) : r2 ? `2P ✓` : `2P`, `#00a8d8`, !0),
    ],
  });
}

// Alttaki ok biçimli tuş göstergesi
function AF_SelHint({ twoP, bot, r1 }) {
  const tus = (k) =>
    (0, P.jsx)(`span`, {
      style: { background: AF_KREM, color: `#141020`, padding: `0 .45em`, margin: `0 .35em 0 1.1em`, boxShadow: `2px 2px 0 #000`, fontStyle: `normal` },
      children: k,
    });
  return (0, P.jsx)(`div`, {
    style: { position: `absolute`, left: `17%`, right: `17%`, bottom: `3%`, height: `7%`, filter: AF_SERT },
    children: (0, P.jsx)(`div`, {
      style: { position: `absolute`, inset: 0, background: AF_KREM, clipPath: `polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)` },
      children: (0, P.jsxs)(`div`, {
        "data-testid": `select-status`,
        className: `font-display font-black italic`,
        style: {
          position: `absolute`,
          inset: `.35vw`,
          right: `.6vw`,
          background: `#1c1528`,
          clipPath: `polygon(0 0, 95.2% 0, 100% 50%, 95.2% 100%, 0 100%)`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          paddingRight: `4%`,
          color: AF_KREM,
          fontSize: `min(1.25vw, 2.2vh)`,
          letterSpacing: `.05em`,
          whiteSpace: `nowrap`,
        },
        children: [
          tus(`X`),
          `RASTGELE`,
          tus(`ESC`),
          `GERİ`,
          tus(`ENTER`),
          bot && r1 ? `RAKİBİ ONAYLA` : `SEÇ`,
          twoP &&
            (0, P.jsx)(
              `span`,
              { style: { marginLeft: `1.6em`, color: `#7fdcff`, fontSize: `.85em` }, children: `2P: ◄ ► ▲ ▼ · NUM 1` },
              `p2`,
            ),
        ],
      }),
    }),
  });
}

var AF_DIFFS = [
  [`easy`, `KOLAY`, `#3ddc84`],
  [`normal`, `NORMAL`, `#ffd24a`],
  [`hard`, `ZOR`, `#ff2a5f`],
];

function gy() {
  let nav = wn(),
    [q] = Zr(),
    mode = q.get(`mode`),
    train = mode === `training`,
    bot = mode === `bot` || train; // antrenmanda P2 (kukla) bot gibi P1 tarafından seçilir
  const norm = (v) => (v === `random` ? v : AF_char(v).id);
  const [p1c, sp1] = (0, N.useState)(norm(q.get(`p1`) || `umut`)),
    [p2c, sp2] = (0, N.useState)(norm(q.get(`p2`) || `sudem`)),
    [df, setDf] = (0, N.useState)(
      [`easy`, `normal`, `hard`].includes(q.get(`diff`)) ? q.get(`diff`) : `normal`,
    ),
    [ar, setAr] = (0, N.useState)(AF_ARENA_SEL.includes(q.get(`arena`)) ? q.get(`arena`) : `ankara`),
    [r1, setR1] = (0, N.useState)(!1),
    [r2, setR2] = (0, N.useState)(!1); // bot/kukla da seçilir: P1 önce kendini, sonra rakibi onaylar
  const lock = (0, N.useRef)(!1),
    rf = (0, N.useRef)({});
  rf.current = { p1c, p2c, df, bot, r1, r2, ar };
  const start = (0, N.useCallback)(() => {
    if (lock.current) return;
    lock.current = !0;
    X.ensure();
    X.uiClick();
    const t = rf.current,
      a = t.p1c === `random` ? AF_pick() : t.p1c,
      b = t.p2c === `random` ? AF_pick() : t.p2c;
    sp1(a);
    sp2(b);
    setR1(!0);
    setR2(!0);
    window.setTimeout(
      () => nav(`/arena?mode=${train ? `training` : t.bot ? `bot` : `2p`}&p1=${a}&p2=${b}&diff=${t.df}&arena=${t.ar}`),
      450,
    );
  }, [nav]);
  const ready1 = (0, N.useCallback)(() => {
    if (lock.current) return;
    X.ensure();
    X.uiClick();
    const t = rf.current;
    // Bot modunda P1 hazır olduktan sonra Z rakibi (bot/kukla) onaylar
    if (t.bot && t.r1) {
      if (t.r2) return;
      if (t.p2c === `random`) {
        const c = AF_pick();
        sp2(c);
        t.p2c = c;
      }
      setR2(!0);
      return;
    }
    if (!t.r1 && t.p1c === `random`) {
      const c = AF_pick();
      sp1(c);
      t.p1c = c;
    }
    setR1((v) => !v);
  }, []);
  const ready2 = (0, N.useCallback)(() => {
    if (lock.current || (bot && !rf.current.r1)) return;
    X.ensure();
    X.uiClick();
    const t = rf.current;
    if (!t.r2 && t.p2c === `random`) {
      const c = AF_pick();
      sp2(c);
      t.p2c = c;
    }
    setR2((v) => !v);
  }, [bot]);
  const step = (c, d) =>
    typeof d === `string` ? AF_gridStep(c, d) : AF_SEL[(AF_SEL.indexOf(c) + d + AF_SEL.length) % AF_SEL.length];
  // X: 1P (bot modunda 1P hazırsa rakip) RASTGELE'ye geçer; NUM 2: 2P RASTGELE
  const rnd1 = (0, N.useCallback)(() => {
    const t = rf.current;
    if (lock.current) return;
    if (!t.r1) (X.ensure(), X.uiClick(), sp1(`random`));
    else if (t.bot && !t.r2) (X.ensure(), X.uiClick(), sp2(`random`));
  }, []);
  const rnd2 = (0, N.useCallback)(() => {
    const t = rf.current;
    if (lock.current || t.bot || t.r2) return;
    X.ensure();
    X.uiClick();
    sp2(`random`);
  }, []);
  const mv1 = (0, N.useCallback)((d) => {
    const t = rf.current;
    if (lock.current) return;
    // Bot modunda P1 hazırsa A/D rakibi gezer
    if (t.r1) {
      if (!t.bot || t.r2) return;
      X.ensure();
      X.uiClick();
      sp2((c) => step(c, d));
      return;
    }
    X.ensure();
    X.uiClick();
    sp1((c) => step(c, d));
  }, []);
  const mv2 = (0, N.useCallback)((d) => {
    if (lock.current || rf.current.r2) return;
    X.ensure();
    X.uiClick();
    sp2((c) => step(c, d));
  }, []);
  const pick = (0, N.useCallback)((side, id) => {
    if (lock.current) return;
    const t = rf.current;
    if (side === 1) {
      if (t.r1) return;
      X.ensure();
      X.uiClick();
      sp1(id);
    } else {
      if (t.r2) return;
      X.ensure();
      X.uiClick();
      sp2(id);
    }
  }, []);
  const asel = (0, N.useCallback)((e) => {
    if (lock.current) return;
    X.ensure();
    X.uiClick();
    setAr(e);
  }, []);
  const dsel = (0, N.useCallback)((e) => {
    X.ensure();
    X.uiClick();
    setDf(e);
  }, []);
  // ◀ GERİ / ESC / Backspace: önce "HAZIR" iptal edilir, ikinci basışta ana menüye dönülür
  const back = (0, N.useCallback)(() => {
    if (lock.current) return;
    X.ensure();
    X.uiClick();
    const t = rf.current;
    if (t.bot && t.r2) setR2(!1);
    else if (t.r1) setR1(!1);
    else if (t.r2) setR2(!1);
    else nav(`/`);
  }, [nav]);
  const d = r1 && r2;
  (0, N.useEffect)(() => {
    d && start();
  }, [d, start]);
  (0, N.useEffect)(() => {
    const h = (e) => {
      [
        `ArrowUp`,
        `ArrowDown`,
        `ArrowLeft`,
        `ArrowRight`,
        `Numpad0`,
        `Numpad1`,
        `Numpad2`,
        `Numpad4`,
        `Numpad5`,
      ].includes(e.code) && e.preventDefault();
      e.code === `Escape` || e.code === `Backspace`
        ? (e.preventDefault(), back())
        : e.code === `KeyZ`
        ? ready1()
        : e.code === `Numpad1` || e.code === `KeyJ`
          ? ready2()
          : e.code === `Enter`
            ? ready1()
            : e.code === `KeyX`
            ? rnd1()
            : e.code === `Numpad2`
            ? rnd2()
            : e.code === `KeyW`
            ? mv1(`U`)
            : e.code === `KeyS`
            ? mv1(`D`)
            : e.code === `ArrowUp`
            ? mv2(`U`)
            : e.code === `ArrowDown`
            ? mv2(`D`)
            : e.code === `KeyA`
              ? mv1(-1)
              : e.code === `KeyD`
                ? mv1(1)
                : e.code === `ArrowLeft`
                  ? mv2(-1)
                  : e.code === `ArrowRight`
                    ? mv2(1)
                    : bot && e.code === `Digit1`
                      ? dsel(`easy`)
                      : bot && e.code === `Digit2`
                        ? dsel(`normal`)
                        : bot && e.code === `Digit3` && dsel(`hard`);
    };
    window.addEventListener(`keydown`, h);
    return () => window.removeEventListener(`keydown`, h);
  }, [ready1, ready2, start, mv1, mv2, dsel, asel, bot, back, rnd1, rnd2]);
  const pct = (v) => `${v}%`,
    tileProps = { p1c, p2c, r1, r2, bot, dummy: train, onPick: pick };
  return (0, P.jsx)(`div`, {
    "data-testid": `select-screen`,
    className: `flex h-svh items-center justify-center overflow-hidden bg-[#06070f] text-white`,
    children: (0, P.jsxs)(`div`, {
      style: { position: `relative`, width: `min(100vw, calc(100svh * 1.7917))`, aspectRatio: `1376 / 768`, overflow: `hidden` },
      children: [
        // arka plan: menüdeki grup sahnesi, bulanık ve karartılmış (aynı dünya, dikkat kartlarda)
        (0, P.jsx)(`img`, {
          src: gg(`/assets/ui/menu_bg.png`),
          alt: ``,
          draggable: !1,
          style: { position: `absolute`, inset: `-4%`, width: `108%`, height: `108%`, objectFit: `cover`, filter: `blur(7px) brightness(.5) saturate(1.15)` },
        }),
        (0, P.jsxs)(`div`, {
          style: { position: `absolute`, left: 0, right: 0, top: pct(2.5), textAlign: `center` },
          children: [
            (0, P.jsx)(`h1`, {
              className: `font-display font-black italic`,
              style: { fontSize: `min(3.6vw, 6.4vh)`, lineHeight: 1.05, color: AF_KREM, textShadow: `4px 4px 0 #1a0d24`, letterSpacing: `.04em` },
              children: `KARAKTER SEÇİMİ`,
            }),
            (0, P.jsx)(`p`, {
              "data-testid": `select-mode-label`,
              className: `font-display font-bold`,
              style: { fontSize: `min(1vw, 1.8vh)`, letterSpacing: `.22em`, color: `#d9d2c4`, textShadow: `2px 2px 0 #000` },
              children:
                (train ? `ANTRENMAN · KUKLAYA KARŞI` : bot ? `1 OYUNCU · BOTA KARŞI` : `2 OYUNCU · YEREL`) +
                (train ? ` · SÜRE YOK` : ` · EN İYİ 3 RAUNT`),
            }),
          ],
        }),
        (0, P.jsx)(AF_SelCard, { side: 1, id: p1c, ready: r1, isBot: !1, onReady: ready1 }),
        (0, P.jsx)(AF_SelCard, { side: 2, id: p2c, ready: r2, isBot: bot, dummy: train, onReady: bot ? ready1 : ready2 }),
        // orta sütun: RASTGELE üstte, altında 4 + 4 ızgara
        (0, P.jsxs)(`div`, {
          "data-testid": `char-grid`,
          style: { position: `absolute`, left: pct(36.5), width: pct(27), top: pct(20) },
          children: [
            (0, P.jsx)(`div`, {
              style: { width: `30%`, margin: `0 auto 9%` },
              children: (0, P.jsx)(AF_SelTile, { id: `random`, ...tileProps }),
            }),
            ...[AF_GRID_UST, AF_GRID_ALT].map((row, ri) =>
              (0, P.jsx)(
                `div`,
                {
                  style: { display: `grid`, gridTemplateColumns: `repeat(4, 1fr)`, gap: `5%`, marginBottom: `6%` },
                  children: row.map((id) => (0, P.jsx)(AF_SelTile, { id, ...tileProps }, id)),
                },
                ri,
              ),
            ),
            bot &&
              !train &&
              (0, P.jsxs)(`div`, {
                "data-testid": `difficulty-picker`,
                className: `font-display font-black italic`,
                style: { display: `flex`, alignItems: `center`, justifyContent: `center`, gap: `4%`, marginTop: `4%`, fontSize: `min(1vw, 1.8vh)` },
                children: [
                  (0, P.jsx)(`span`, { style: { color: `#d9d2c4`, letterSpacing: `.1em` }, children: `BOT · 1/2/3` }, `b`),
                  ...AF_DIFFS.map(([e, t, n]) =>
                    (0, P.jsx)(
                      `button`,
                      {
                        type: `button`,
                        "data-testid": `diff-${e}`,
                        onClick: () => dsel(e),
                        className: `font-display font-black italic`,
                        style: {
                          border: `2px solid ${df === e ? AF_KREM : n}`,
                          background: df === e ? n : `rgba(0,0,0,.5)`,
                          color: df === e ? `#141020` : n,
                          padding: `.2em .8em`,
                          boxShadow: `3px 3px 0 #000`,
                          cursor: `pointer`,
                        },
                        children: t,
                      },
                      e,
                    ),
                  ),
                ],
              }),
            p1c === p2c &&
              p1c !== `random` &&
              (0, P.jsx)(`p`, {
                className: `font-display font-bold`,
                style: { textAlign: `center`, marginTop: `3%`, fontSize: `min(.9vw, 1.6vh)`, color: `#ffd24a`, textShadow: `2px 2px 0 #000` },
                children: `AYNA MAÇI — 2P FARKLI RENK TONUYLA`,
              }),
          ],
        }),
        (0, P.jsx)(AF_SelHint, { twoP: !bot, bot, r1 }),
      ],
    }),
  });
}

// ---- Harita seçimi: üstte büyük vitrin (solda önceki, ortada seçili, sağda sonraki; 3B açılı),
// altta eşit boy kartlar (seçilen yukarı kalkar), en altta ok biçimli tuş şeridi ----
var AF_ARENA_BILGI = {
  ankara: [`Başkent`, `Akşam`, `Yağmurlu`],
  samsun: [`Karadeniz kıyısı`, `Gün batımı`, `Açık`],
  corum: [`Hitit diyarı`, `Gün batımı`, `Açık`],
  sakarya: [`Sapanca Gölü`, `Sabah`, `Sisli`],
};

function AF_ArenaSelect() {
  const nav = wn(),
    [q] = Zr(),
    ilk = AF_ARENA_SEL.indexOf(q.get(`arena`) || `ankara`),
    [ix, setIx] = (0, N.useState)(ilk < 0 ? 0 : ilk),
    [secildi, setSecildi] = (0, N.useState)(!1),
    lock = (0, N.useRef)(!1),
    rf = (0, N.useRef)(ix);
  rf.current = ix;
  const n = AF_ARENA_SEL.length,
    qs = (ar) =>
      `mode=${q.get(`mode`) || `2p`}&p1=${q.get(`p1`) || `umut`}&p2=${q.get(`p2`) || `sudem`}&diff=${q.get(`diff`) || `normal`}&arena=${ar}`;
  const mv = (0, N.useCallback)((d) => {
    if (lock.current) return;
    X.ensure();
    X.uiClick();
    setIx((v) => (v + d + n) % n);
  }, []);
  const ok = (0, N.useCallback)(() => {
    if (lock.current) return;
    lock.current = !0;
    X.ensure();
    X.uiClick();
    setSecildi(!0);
    const id = AF_ARENA_SEL[rf.current],
      ar = id === `random` ? AF_arena(`random`).id : id;
    window.setTimeout(() => nav(`/battle?${qs(ar)}`), 520);
  }, [nav]);
  const geri = (0, N.useCallback)(() => {
    if (lock.current) return;
    X.ensure();
    X.uiClick();
    nav(`/select?${qs(AF_ARENA_SEL[rf.current])}`);
  }, [nav]);
  (0, N.useEffect)(() => {
    const h = (e) => {
      [`ArrowLeft`, `ArrowRight`, `Numpad1`, `Space`].includes(e.code) && e.preventDefault();
      e.code === `KeyA` || e.code === `ArrowLeft`
        ? mv(-1)
        : e.code === `KeyD` || e.code === `ArrowRight`
          ? mv(1)
          : [`KeyZ`, `Numpad1`, `KeyJ`, `Enter`, `Space`].includes(e.code)
            ? ok()
            : (e.code === `Escape` || e.code === `Backspace`) && (e.preventDefault(), geri());
    };
    window.addEventListener(`keydown`, h);
    return () => window.removeEventListener(`keydown`, h);
  }, [mv, ok, geri]);
  const pct = (v) => `${v}%`,
    ad = (id) => (id === `random` ? `RASTGELE` : AF_ARENAS[id].name),
    resim = (id, ekstra) =>
      id === `random`
        ? (0, P.jsx)(`div`, {
            className: `font-display font-black`,
            style: { position: `absolute`, inset: 0, display: `flex`, alignItems: `center`, justifyContent: `center`, background: `#ffd24a`, color: `#141020`, fontSize: ekstra },
            children: `?`,
          })
        : (0, P.jsx)(`div`, {
            style: { position: `absolute`, inset: 0, backgroundImage: `url(${gg(AF_ARENAS[id].img)})`, backgroundSize: `cover`, backgroundPosition: `50% 50%` },
          });
  // vitrin: -1 önceki (sol), 0 seçili (orta), +1 sonraki (sağ)
  const vitrin = [-1, 0, 1].map((k) => {
    const id = AF_ARENA_SEL[(ix + k + n) % n],
      orta = k === 0;
    return (0, P.jsx)(
      `div`,
      {
        style: {
          position: `absolute`,
          top: orta ? pct(13) : pct(17),
          height: orta ? pct(50) : pct(42),
          left: orta ? pct(24) : k < 0 ? pct(1.5) : pct(76.5),
          width: orta ? pct(52) : pct(22),
          transform: orta ? `none` : `perspective(900px) rotateY(${k < 0 ? 28 : -28}deg)`,
          transformOrigin: k < 0 ? `right center` : `left center`,
          filter: orta ? AF_SERT : `${AF_SERT} brightness(.55)`,
          zIndex: orta ? 2 : 1,
        },
        children: (0, P.jsxs)(`div`, {
          "data-testid": orta ? `arena-preview` : undefined,
          style: { position: `absolute`, inset: 0, border: `${orta ? 0.45 : 0.3}vw solid ${AF_KREM}`, overflow: `hidden`, background: `#1a1426` },
          children: [
            resim(id, orta ? `min(12vw, 21vh)` : `min(6vw, 11vh)`),
            !orta &&
              (0, P.jsx)(`div`, {
                className: `font-display font-black italic`,
                style: {
                  position: `absolute`,
                  inset: 0,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  color: AF_KREM,
                  fontSize: `min(2.4vw, 4.2vh)`,
                  textShadow: `3px 3px 0 #000`,
                },
                children: ad(id),
              }),
          ],
        }),
      },
      `${k}:${id}`,
    );
  });
  const id = AF_ARENA_SEL[ix],
    rnd = id === `random`,
    bilgi = rnd ? [`Sürpriz`, `?`, `?`] : AF_ARENA_BILGI[id] || [``, ``, ``];
  const tus = (k) =>
    (0, P.jsx)(`span`, {
      style: { background: AF_KREM, color: `#141020`, padding: `0 .45em`, margin: `0 .35em 0 1.1em`, boxShadow: `2px 2px 0 #000`, fontStyle: `normal` },
      children: k,
    });
  return (0, P.jsx)(`div`, {
    "data-testid": `arena-screen`,
    className: `flex h-svh items-center justify-center overflow-hidden bg-[#06070f] text-white`,
    children: (0, P.jsxs)(`div`, {
      style: { position: `relative`, width: `min(100vw, calc(100svh * 1.7917))`, aspectRatio: `1376 / 768`, overflow: `hidden` },
      children: [
        (0, P.jsx)(`img`, {
          src: gg(`/assets/ui/menu_bg.png`),
          alt: ``,
          draggable: !1,
          style: { position: `absolute`, inset: `-4%`, width: `108%`, height: `108%`, objectFit: `cover`, filter: `blur(7px) brightness(.45) saturate(1.15)` },
        }),
        (0, P.jsx)(`h1`, {
          className: `font-display font-black italic`,
          style: {
            position: `absolute`,
            left: 0,
            right: 0,
            top: pct(2),
            textAlign: `center`,
            fontSize: `min(3.6vw, 6.4vh)`,
            lineHeight: 1.05,
            color: AF_KREM,
            textShadow: `4px 4px 0 #1a0d24`,
            letterSpacing: `.04em`,
          },
          children: `HARİTA SEÇİMİ`,
        }),
        ...vitrin,
        // seçili haritanın adı ve bilgisi (vitrinin altında)
        (0, P.jsxs)(`div`, {
          style: { position: `absolute`, left: pct(24), width: pct(52), top: pct(64.5), textAlign: `center`, zIndex: 3 },
          children: [
            (0, P.jsx)(`div`, {
              "data-testid": `arena-name`,
              className: `font-display font-black italic`,
              style: { fontSize: `min(2.6vw, 4.6vh)`, lineHeight: 1, color: AF_KREM, textShadow: `3px 3px 0 #000` },
              children: rnd ? `RASTGELE` : `${AF_ARENAS[id].name} · ${bilgi[0].toLocaleUpperCase(`tr`)}`,
            }),
            (0, P.jsx)(`div`, {
              className: `font-display font-bold`,
              style: { fontSize: `min(1vw, 1.8vh)`, letterSpacing: `.12em`, color: `#d9d2c4`, marginTop: `.4%`, textShadow: `2px 2px 0 #000` },
              children: `SAAT: ${bilgi[1].toLocaleUpperCase(`tr`)}  ·  HAVA: ${bilgi[2].toLocaleUpperCase(`tr`)}`,
            }),
          ],
        }),
        // eşit boy kartlar; seçili olan yukarı kalkar, onaylanınca bir kez zıplar
        (0, P.jsx)(`div`, {
          "data-testid": `arena-cards`,
          style: { position: `absolute`, left: pct(26), right: pct(26), top: pct(75), height: pct(13), display: `flex`, gap: `2.2%` },
          children: AF_ARENA_SEL.map((a, k) => {
            const sec = k === ix;
            return (0, P.jsx)(
              Qh.button,
              {
                type: `button`,
                "data-testid": `arena-${a}`,
                onClick: () => (sec ? ok() : (X.ensure(), X.uiClick(), setIx(k))),
                animate: { y: sec ? (secildi ? [-14, -30, -14] : -14) : 0, scale: sec ? 1.06 : 1 },
                transition: { duration: secildi && sec ? 0.4 : 0.18, ease: `easeOut` },
                style: { position: `relative`, flex: 1, height: `100%`, padding: 0, border: 0, background: `none`, cursor: `pointer`, filter: AF_SERT },
                children: (0, P.jsxs)(`div`, {
                  style: {
                    position: `absolute`,
                    inset: 0,
                    border: `0.28vw solid ${sec ? AF_KREM : `#6b6276`}`,
                    overflow: `hidden`,
                    filter: sec ? `none` : `brightness(.6) saturate(.8)`,
                  },
                  children: [
                    resim(a, `min(3vw, 5vh)`),
                    a !== `random` &&
                      (0, P.jsx)(`div`, {
                        className: `font-display font-black italic`,
                        style: {
                          position: `absolute`,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: `rgba(14,10,22,.85)`,
                          color: AF_KREM,
                          fontSize: `min(.85vw, 1.55vh)`,
                          letterSpacing: `.06em`,
                          padding: `3% 0`,
                          textAlign: `center`,
                        },
                        children: ad(a),
                      }),
                  ],
                }),
              },
              a,
            );
          }),
        }),
        // ok biçimli tuş şeridi
        (0, P.jsx)(`div`, {
          style: { position: `absolute`, left: pct(17), right: pct(17), bottom: pct(3), height: pct(7), filter: AF_SERT },
          children: (0, P.jsx)(`div`, {
            style: { position: `absolute`, inset: 0, background: AF_KREM, clipPath: `polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)` },
            children: (0, P.jsxs)(`div`, {
              className: `font-display font-black italic`,
              style: {
                position: `absolute`,
                inset: `.35vw`,
                right: `.6vw`,
                background: `#1c1528`,
                clipPath: `polygon(0 0, 95.2% 0, 100% 50%, 95.2% 100%, 0 100%)`,
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                paddingRight: `4%`,
                color: AF_KREM,
                fontSize: `min(1.25vw, 2.2vh)`,
                letterSpacing: `.05em`,
                whiteSpace: `nowrap`,
              },
              children: [tus(`◄`), `ÖNCEKİ`, tus(`ENTER`), `SEÇ`, tus(`►`), `SONRAKİ`, tus(`ESC`), `GERİ`],
            }),
          }),
        }),
      ],
    }),
  });
}
