// 50-game-render-hud-ko.js — HUD çizimi, KO yatış geometrisi.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

var _y = `"JetBrains Mono Variable", "JetBrains Mono", monospace`;

function vy(e, t) {
  let n = e.replace(`#`, ``);
  return `rgba(${parseInt(n.slice(0, 2), 16)},${parseInt(n.slice(2, 4), 16)},${parseInt(n.slice(4, 6), 16)},${t})`;
}

function yy(e) {
  let t = e.ctx;
  (t.setTransform(1, 0, 0, 1, 0, 0),
    (t.imageSmoothingEnabled = !0),
    (t.fillStyle = `#05060f`),
    t.fillRect(0, 0, $h, 768));
  let n = 0,
    r = 0;
  if (e.shakeT > 0) {
    let t = e.shakeMag * (e.shakeT / e.shakeDur);
    ((n = (Math.random() * 2 - 1) * t), (r = (Math.random() * 2 - 1) * t * 0.7));
  }
  (t.save(),
    t.translate(n, r),
    t.drawImage(e.assets.bg, 0, 0, $h, 768),
    by(t, e.p1),
    by(t, e.p2),
    xy(t, e.p2),
    xy(t, e.p1));
  for (let n of e.projectiles) Ty(t, n);
  (Ey(t, e.lensFlashes),
    Dy(t, e.sparks),
    Oy(t, e.dmgs),
    e.showBoxes && Sy(t, e),
    t.restore(),
    My(t, e),
    Ny(t, e),
    Py(t, e),
    e.training && e.phase === `fight` && AF_drawTrain(t, e),
    e.flashA > 0 &&
      ((t.fillStyle = `rgba(255,255,255,${pg(e.flashA, 0, 0.92)})`), t.fillRect(0, 0, $h, 768)));
}

function by(e, t) {
  let n = t.x > 387 && t.x < 990 && t.y <= 489,
    r = t.ground === `table` || n ? 429 : 704,
    i = Math.max(0, r - t.y),
    a = 0.4 * pg(1 - i / 480, 0.12, 1),
    o = t.halfW * (1.4 + i / 420 + (t.state === `ko` ? 1.8 * Math.min(1, t.koT / 450) : 0));
  (e.save(),
    (e.fillStyle = `rgba(0,0,0,${a})`),
    e.beginPath(),
    e.ellipse(t.x, r + 3, o, o * 0.2, 0, 0, Math.PI * 2),
    e.fill(),
    e.restore());
}

function AF_legParts(r) {
  if (r.__lp !== undefined) return r.__lp;
  r.__lp = null;
  try {
    const w = r.w,
      h = r.h,
      c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    const g = c.getContext("2d", { willReadFrequently: true });
    g.drawImage(r.img, 0, 0);
    const d = g.getImageData(0, 0, w, h).data,
      solid = (x, y) => d[(y * w + x) * 4 + 3] > 60;
    const runs = (y) => {
      const o = [];
      let st = -1,
        pv = -9;
      for (let x = 0; x < w; x++)
        if (solid(x, y)) {
          if (st < 0) st = x;
          else if (x - pv > 3) {
            o.push([st, pv]);
            st = x;
          }
          pv = x;
        }
      if (st >= 0) o.push([st, pv]);
      return o;
    };
    const bot = r.by + r.bh - 1;
    let cr = -1;
    for (let y = Math.floor(r.by + r.bh * 0.5); y < bot - 20 && cr < 0; y++) {
      if (runs(y).length >= 2) {
        let ok = true;
        for (let k = 1; k < 20; k++)
          if (runs(y + k).length < 2) {
            ok = false;
            break;
          }
        if (ok) cr = y;
      }
    }
    if (cr < 0) return null;
    const rr = runs(cr + 10)
      .sort((a, b) => b[1] - b[0] - (a[1] - a[0]))
      .slice(0, 2)
      .sort((a, b) => a[0] - b[0]);
    if (rr.length < 2) return null;
    const sx = Math.floor((rr[0][1] + rr[1][0]) / 2),
      cut = cr - 10,
      ovl = 16;
    const mk = (x0, y0, ww, hh) => {
      const k = document.createElement("canvas");
      k.width = w;
      k.height = h;
      const q = k.getContext("2d");
      q.beginPath();
      q.rect(x0, y0, ww, hh);
      q.clip();
      q.drawImage(r.img, 0, 0);
      return k;
    };
    const sole = (x0, x1) => {
      let low = -1;
      for (let y = h - 1; y >= cut && low < 0; y--)
        for (let x = x0; x < x1; x++)
          if (solid(x, y)) {
            low = y;
            break;
          }
      if (low < 0) return [];
      let xl = 1e9,
        xr = -1;
      for (let y = Math.max(cut, low - 6); y <= low; y++)
        for (let x = x0; x < x1; x++)
          if (solid(x, y)) {
            if (x < xl) xl = x;
            if (x > xr) xr = x;
          }
      const yb = low + 1;
      return [
        [xl, yb],
        [xr, yb],
        [(xl + xr) / 2, yb],
      ];
    };
    r.__lp = {
      legL: mk(0, cut, sx, h - cut),
      legR: mk(sx, cut, w - sx, h - cut),
      upper: mk(0, 0, w, cut + ovl),
      px: sx,
      cut,
      soleL: sole(0, sx),
      soleR: sole(sx, w),
    };
  } catch (err) {
    r.__lp = null;
  }
  return r.__lp;
}

function AF_koGeom(r) {
  if (r.__ko !== undefined) return r.__ko;
  r.__ko = null;
  try {
    const w = r.w,
      h = r.h,
      c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    const g = c.getContext("2d", { willReadFrequently: true });
    g.drawImage(r.img, 0, 0);
    const d = g.getImageData(0, 0, w, h).data,
      sc = r.scale,
      ox = r.ax,
      oy = r.by + r.bh,
      top = r.by,
      bh = r.bh;
    const pts = [],
      hx = [],
      hx2 = [],
      fx = [];
    let hy = 0,
      hn = 0,
      py = 0,
      pn = 0,
      fy = 0,
      fn = 0;
    for (let y = 0; y < h; y += 2)
      for (let x = 0; x < w; x += 2)
        if (d[(y * w + x) * 4 + 3] > 60) {
          const lx = (x - ox) * sc,
            ly = (y - oy) * sc;
          pts.push([lx, ly, y]);
          if (y < top + bh * 0.15) {
            hx.push(lx);
            hy += ly;
            hn++;
          } else if (y >= top + bh * 0.42 && y < top + bh * 0.52) {
            hx2.push(lx);
            py += ly;
            pn++;
          } else if (y >= top + bh * 0.88) {
            fx.push(lx);
            fy += ly;
            fn++;
          }
        }
    if (!pts.length || !hn || !pn || !fn) return null;
    const med = (a) => {
      a.sort((p, q) => p - q);
      return a[a.length >> 1];
    };
    const Hx = med(hx2),
      Hy = py / pn,
      cutY = Hy / sc + oy; // kalça = gövde/bacak ayrım noktası (menteşe)
    // gövde ekseni kafa->kalça, bacak ekseni kalça->ayaklar; ikisi de ayrı ayrı yere paralel yatırılır
    const Au = Math.atan2(Hy - hy / hn, Hx - med(hx)),
      Al = Math.atan2(fy / fn - Hy, med(fx) - Hx);
    const ov = Math.round(h * 0.035),
      slH = Math.round(h * 0.12);
    const mk = (y0, y1) => {
      const k = document.createElement("canvas");
      k.width = w;
      k.height = h;
      const q = k.getContext("2d");
      q.beginPath();
      q.rect(0, y0, w, y1 - y0);
      q.clip();
      q.drawImage(r.img, 0, 0);
      return k;
    };
    const cy = Math.round(cutY),
      Dc = 0.12 * bh * sc;
    const dl = (p, a, b) => {
      const vx = b[0] - a[0],
        vy = b[1] - a[1];
      return Math.abs((p[0] - a[0]) * vy - (p[1] - a[1]) * vx) / Math.hypot(vx, vy);
    };
    const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
    const hull = (P) => {
      P = P.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
      const lo = [];
      for (const p of P) {
        while (lo.length >= 2 && cr(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop();
        lo.push(p);
      }
      const up = [];
      for (let i = P.length - 1; i >= 0; i--) {
        const p = P[i];
        while (up.length >= 2 && cr(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop();
        up.push(p);
      }
      return lo.slice(0, -1).concat(up.slice(0, -1));
    };
    r.__ko = {
      Au,
      Al,
      H: [Hx, Hy],
      up: mk(0, cy + ov),
      lo: mk(cy, h),
      sl: mk(cy, cy + slH),
      hu: hull(pts.filter((p) => p[2] < cy + ov)),
      hl: hull(pts.filter((p) => p[2] >= cy)),
      cu: hull(pts.filter((p) => p[2] < cy + ov && dl(p, [med(hx), hy / hn], [Hx, Hy]) < Dc)),
      cl: hull(pts.filter((p) => p[2] >= cy && dl(p, [Hx, Hy], [med(fx), fy / fn]) < Dc)),
    };
  } catch (err) {
    r.__ko = null;
  }
  return r.__ko;
}

function AF_koAng(t, g) {
  const n = Math.min(1, t.koT / 450);
  return [g.Au * n, g.Al * n];
}

function AF_koPt(g, p, th) {
  const dx = p[0] - g.H[0],
    dy = p[1] - g.H[1],
    s = Math.sin(th),
    c = Math.cos(th);
  return [g.H[0] + dx * c + dy * s, g.H[1] - dx * s + dy * c];
}

function AF_koLift(t) {
  const g = AF_koGeom(t.spr.frames.hurt);
  if (!g) return 0;
  const [a, b] = AF_koAng(t, g);
  let m = -1e9;
  for (const p of g.cu) {
    const y = AF_koPt(g, p, a)[1];
    if (y > m) m = y;
  }
  for (const p of g.cl) {
    const y = AF_koPt(g, p, b)[1];
    if (y > m) m = y;
  }
  return m;
}

function AF_koClamp(t) {
  const g = AF_koGeom(t.spr.frames.hurt);
  if (!g) return pg(t.x, 40, $h - 40);
  const [a, b] = AF_koAng(t, g);
  let mn = 1e9,
    mx = -1e9;
  const f = (P, th) => {
    for (const p of P) {
      const v = t.facing * AF_koPt(g, p, th)[0];
      if (v < mn) mn = v;
      if (v > mx) mx = v;
    }
  };
  f(g.hu, a);
  f(g.hl, b);
  return pg(t.x, 8 - mn, $h - 8 - mx);
}
