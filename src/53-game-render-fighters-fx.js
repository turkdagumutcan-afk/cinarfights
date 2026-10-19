// 53-game-render-fighters-fx.js — Dövüşçü çizimi (xy), parçacıklar, HUD parçaları, duyuru yazıları.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

function AF_drawBody(e, t, r) {
  const X = -r.ax * r.scale,
    Y = -(r.by + r.bh) * r.scale * (r.sy || 1),
    Wd = r.w * r.scale,
    Ht = r.h * r.scale * (r.sy || 1);
  if (t.state === "ko") {
    const g = AF_koGeom(r);
    if (g) {
      const [a, b] = AF_koAng(t, g),
        H = g.H;
      const part = (img, th) => {
        e.save();
        e.translate(H[0], H[1]);
        e.rotate(-th);
        e.translate(-H[0], -H[1]);
        e.drawImage(img, X, Y, Wd, Ht);
        e.restore();
      };
      for (let k = 1; k < 5; k++) part(g.sl, a + ((b - a) * k) / 5); // kalça bükümündeki boşluğu doldur
      part(g.lo, b);
      part(g.up, a);
      return;
    }
  }
  if (t.walkB > 0.001 && t.grounded && t.state !== "attack" && t.pose() === "idle") {
    const lp = AF_legParts(r);
    if (lp) {
      const B = t.walkB,
        ph = t.walkP,
        fwd = t.vx * t.facing >= 0,
        A = (((fwd ? 12 : 9) * Math.PI) / 180) * B,
        sn = Math.sin(ph),
        cs = Math.cos(ph);
      const px = (lp.px - r.ax) * r.scale,
        py = (lp.cut - (r.by + r.bh)) * r.scale;
      const leg = (img, th, lift) => {
        e.save();
        e.translate(px, py);
        e.rotate(th);
        e.scale(1, 1 - 0.07 * lift * B);
        e.translate(-px, -py);
        e.drawImage(img, X, Y, Wd, Ht);
        e.restore();
      };
      const low = (sole, th, lift) => {
        const s_ = 1 - 0.07 * lift * B,
          sn_ = Math.sin(th),
          cn_ = Math.cos(th);
        let m = -1e9;
        for (const q of sole) {
          const ddx = (q[0] - r.ax) * r.scale - px,
            ddy = (q[1] - (r.by + r.bh)) * r.scale - py,
            yy = py + ddx * sn_ + ddy * s_ * cn_;
          if (yy > m) m = yy;
        }
        return m;
      };
      const thL = -A * sn,
        thR = A * sn,
        lfL = Math.max(0, cs),
        lfR = Math.max(0, -cs);
      const lw = Math.max(low(lp.soleL, thL, lfL), low(lp.soleR, thR, lfR));
      e.save();
      if (lw > -1e8) e.translate(0, -lw); // en alçak ayak her karede zemin çizgisinde
      leg(lp.legL, thL, lfL);
      leg(lp.legR, thR, lfR);
      e.drawImage(lp.upper, X, Y, Wd, Ht);
      e.restore();
      return;
    }
  }
  e.drawImage(r.img, X, Y, Wd, Ht);
}

function AF_applyAnim(e, t) {
  if (t.state === "ko") return;

  const D = Math.PI / 180,
    T = t.animT;
  let dx = 0,
    dy = 0,
    rot = 0,
    sx = 1,
    sy = 1;
  if (t.landT > 0) {
    const k = t.landT / 150;
    sy *= 1 - 0.13 * k;
    sx *= 1 + 0.09 * k;
  }
  if (t.jumpT > 0 && !t.grounded) {
    const k = t.jumpT / 130;
    sy *= 1 + 0.08 * k;
    sx *= 1 - 0.05 * k;
  }
  const a = t.attack;
  if (t.state === "attack" && a && a.def.pose !== "ult" && a.def.startup > 0) {
    const d = a.def,
      amp = Math.min(8, d.startup / 25);
    if (a.t < d.startup) {
      const p = a.t / d.startup,
        q = p * p;
      dx = -amp * q;
      rot = -Math.min(5, d.startup / 40) * q * D;
      sy *= 1 - 0.025 * q;
    } else {
      const q = Math.min(1, (a.t - d.startup) / (d.active + d.recovery * 0.6)),
        r = 1 - q;
      dx = amp * r;
      rot = Math.min(4, d.startup / 50) * r * D;
    }
  } else if (t.state === "guard") {
    const k = t.blockT / 140;
    dx = -4 - 7 * k;
    rot = (-3 - 2 * k) * D;
    sy *= 0.985;
  } else if (t.pose() === "run") {
    dy = -Math.abs(Math.sin(t.walkP * 2)) * 4;
  } else if (t.walkB > 0.001 && t.grounded && t.pose() === "idle") {
    // sekme ve eğilme yok: kalça hareketi, basılı ayağın zemine oturmasından doğal olarak çıkar (AF_drawBody)
    dy = 0;
    rot = 0;
  } else if ((t.state === "idle" || t.state === "crouch") && t.grounded) {
    const b = Math.sin(T * 0.0042),
      k = t.state === "crouch" ? 0.6 : 1;
    sy *= 1 + b * 0.013 * k;
    sx *= 1 - b * 0.006 * k;
  }
  e.translate(dx * t.facing, dy);
  if (rot) e.rotate(rot * t.facing);
  e.scale(sx, sy);
}

// Çok kareli yumruk/tekme/koşu: saldırının evresine göre kare seçer.
// Hazırlık (startup) -> tepeye kadarki kareler, aktif -> tepe karesi, toparlanma -> tepeden sonraki kareler.
function AF_seqFrame(t) {
  const S = t.spr.seq;
  if (!S || t.state === `ko`) return null;
  const a = t.attack;
  if (t.state === `attack` && a && (a.def.pose === `punch` || a.def.pose === `kick`) && S[a.def.pose]) {
    const q = S[a.def.pose],
      pk = q.peak,
      d = a.def,
      tt = a.t;
    let f;
    if (tt < d.startup) {
      const L = q.slice(0, pk);
      f = L.length ? L[Math.min(L.length - 1, Math.floor((tt / d.startup) * L.length))] : q[pk];
    } else if (tt <= d.startup + d.active) f = q[pk];
    else {
      const L = q.slice(pk + 1),
        p = (tt - d.startup - d.active) / Math.max(1, d.recovery);
      f = L.length ? L[Math.min(L.length - 1, Math.floor(p * L.length))] : q[pk];
    }
    // az kareli tekmede (SUDEM, 3 kare) tepe anında hız izi: hareket ani değil çok hızlı görünür
    const hiz = q.length <= 3 && f === q[pk] && tt <= d.startup + d.active + 60 ? q : null;
    return { f, hiz };
  }
  if (t.pose() === `run` && S.run) return { f: S.run[Math.floor(t.animT / 85) % S.run.length], hiz: null };
  return null;
}

function AF_speedTrail(e, t, q) {
  const f = q[q.peak],
    kalca = -f.visibleH * 0.45;
  for (const [aci, saydam] of [
    [0.34, 0.16],
    [0.17, 0.3],
  ]) {
    e.save();
    e.globalAlpha = saydam;
    e.translate(0, kalca);
    e.rotate(aci);
    e.translate(0, -kalca);
    AF_drawBody(e, t, f);
    e.restore();
  }
}

function AF_rollIndex(p) {
  const c = [4, 9, 12, 18, 24, 29, 34, 40],
    x = p * 40;
  for (let i = 0; i < 8; i++) if (x < c[i]) return i;
  return 7;
}

function xy(e, t) {
  if (t.state === `air` && t.airFlip && t.spr.backFrames) {
    (e.save(), e.translate(t.x, t.y), e.scale(t.facing, 1), (e.imageSmoothingEnabled = !1));
    let p = pg(t.airFlipT / t.airFlipDur, 0, 1),
      frames = t.spr.backFrames,
      img = frames[Math.min(frames.length - 1, Math.floor(p * frames.length))],
      scale = t.spr.backScale,
      w = img.width * scale,
      h = img.height * scale;
    t.hitFlash > 0 && (e.filter = `brightness(2.4) saturate(0.5)`);
    // Karenin en alt noktası (ayak) dövüşçünün y'sinde; yükseklik zaten gerçek yerçekimi yayından gelir.
    e.drawImage(img, -w / 2, -h, w, h);
    ((e.filter = `none`), e.restore());
    return;
  }
  if (t.state === `attack` && t.attack && t.attack.def.pose === `sweep` && t.spr.sweepFrames) {
    (e.save(), e.translate(t.x, t.y), e.scale(t.facing, 1), (e.imageSmoothingEnabled = !1));
    let d = t.attack.def,
      p = Math.min(1, t.attack.t / (d.startup + d.active + d.recovery)),
      s = t.spr.sweepScale,
      img = t.spr.sweepFrames[Math.min(11, (p * 12) | 0)],
      iw = img.width,
      ih = img.height;
    (e.drawImage(img, -t.spr.sweepAnchorX * s, -ih * s, iw * s, ih * s), e.restore());
    return;
  }
  if (t.state === `roll` && (t.spr.rollFrames || t.spr.backFrames)) {
    (e.save(), e.translate(t.x, t.y), e.scale(t.facing, 1), (e.imageSmoothingEnabled = !1));
    let p = Math.min(1, t.rollT / t.rollDur);
    if (t.rollBack && t.spr.backFrames) {
      let s = t.spr.backScale,
        img = t.spr.backFrames[Math.min(15, (p * 16) | 0)],
        iw = img.width,
        ih = img.height,
        arc = t.spr.backJumpH * Math.sin(Math.PI * p);
      e.drawImage(img, -(iw * s) / 2, -ih * s - arc, iw * s, ih * s);
    } else if (t.spr.rollFrames) {
      let s = t.spr.rollScale,
        img = t.spr.rollFrames[AF_rollIndex(p)],
        iw = img.width,
        ih = img.height,
        pad = t.spr.rollPad * s;
      e.drawImage(img, -(iw * s) / 2, -ih * s + pad, iw * s, ih * s);
    }
    e.restore();
    return;
  }
  let n = t.pose(),
    r = t.spr.frames[n],
    hiz = null;
  {
    const sq = AF_seqFrame(t);
    sq && ((r = sq.f), (hiz = sq.hiz));
  }
  if ((e.save(), e.translate(t.x, t.y), t.state === `ko`))
    (e.beginPath(), e.rect(-2e3, -2e3, 4e3, 2e3), e.clip(), e.translate(0, -AF_koLift(t)));
  if ((t.state === `hitstun` && e.translate((Math.random() - 0.5) * 8, 0), t.ultiAuraT > 0)) {
    let n = t.idx === 0 ? `#ffffff` : dg;
    (e.save(), (e.globalCompositeOperation = `lighter`));
    let i = r.visibleH,
      a = e.createRadialGradient(0, -i * 0.5, 10, 0, -i * 0.5, i * 0.95);
    (a.addColorStop(0, vy(n, 0.45)),
      a.addColorStop(1, vy(n, 0)),
      (e.fillStyle = a),
      e.fillRect(-i, -i * 1.5, i * 2, i * 2),
      e.restore());
  }
  (AF_applyAnim(e, t),
    e.scale(t.facing, 1),
    t.hitFlash > 0 && (e.filter = `brightness(2.4) saturate(0.5)`),
    hiz && AF_speedTrail(e, t, hiz),
    AF_drawBody(e, t, r),
    (e.filter = `none`),
    t.state !== `roll` && AF_guardFx(e, t, r),
    e.restore());
}

function Sy(e, t) {
  (e.save(), (e.lineWidth = 2));
  for (let n of [t.p1, t.p2]) {
    let t = n.hurtbox();
    ((e.strokeStyle = `rgba(0,255,140,0.9)`), e.strokeRect(t.x, t.y, t.w, t.h));
    let r = n.attack;
    if (r && !r.def.noHit && r.t >= r.def.startup && r.t <= r.def.startup + r.def.active) {
      let t = Jy(n, r.def);
      ((e.fillStyle = `rgba(255,40,60,0.35)`),
        e.fillRect(t.x, t.y, t.w, t.h),
        (e.strokeStyle = `rgba(255,40,60,0.95)`),
        e.strokeRect(t.x, t.y, t.w, t.h));
    }
  }
  ((e.strokeStyle = `rgba(255,215,0,0.8)`),
    e.beginPath(),
    e.moveTo(0, 704),
    e.lineTo($h, 704),
    AF_PLAT && (e.moveTo(387, 429), e.lineTo(990, 429)),
    e.stroke(),
    (e.font = `700 12px ${_y}`),
    (e.fillStyle = `#ffd700`),
    e.fillText(`HITBOX (F2) · ${Uy.length} vuruş`, 16, 756),
    e.restore());
}

var Cy = null;

function wy() {
  if (Cy) return Cy;
  let e = document.createElement(`canvas`);
  ((e.width = 90), (e.height = 42));
  let t = e.getContext(`2d`),
    n = (e, n, r, i, a) => {
      ((t.fillStyle = a), t.fillRect(e * 3, n * 3, r * 3, i * 3));
    };
  (n(3, 6, 25, 5, `#d8141b`),
    n(1, 7, 2, 3, `#d8141b`),
    n(0, 4, 4, 2, `#a80c10`),
    n(7, 3, 14, 3, `#e81c22`),
    n(9, 2, 9, 1, `#e81c22`),
    n(18, 3, 4, 3, `#ffffff`),
    n(19, 4, 1, 1, `#2a6bff`),
    n(21, 4, 1, 1, `#2a6bff`),
    n(27, 8, 2, 2, `#fff6c0`),
    n(23, 9, 4, 1, `#7a0508`),
    n(3, 10, 25, 1, `#7a0508`),
    n(8, 7, 4, 1, `#ffd21f`),
    n(11, 8, 4, 1, `#ffd21f`),
    n(14, 7, 4, 1, `#ffd21f`),
    n(17, 8, 3, 1, `#ff9a1f`));
  for (let e of [5, 21])
    (n(e, 10, 5, 4, `#111111`), n(e + 1, 11, 3, 2, `#c9c9c9`), n(e + 2, 11, 1, 2, `#ff3b2f`));
  return ((t.font = `900 12px ${_y}`), (t.fillStyle = `#ffd21f`), (Cy = e), e);
}

// Ulti/mermi görseli (assets/fx). Yoksa null döner ve eski çizim kullanılır.
function AF_fxImg(t) {
  const k =
    t.kind === `motor`
      ? `ahmet_motor`
      : t.kind === `car`
        ? `sudem_araba`
        : t.kind === `ringshot`
          ? `sudem_yuzuk`
          : t.kind === `note`
            ? `metehan_nota${(t.col || 0) % 4}`
            : t.kind === `photo`
              ? `umut_foto${(t.fi || 0) % 3}`
              : t.kind === `cig`
                ? `selim_sigara${(t.fi || 0) % 3}`
                : t.kind === `puma`
                  ? `alp_puma${t.leap ? 1 : 0}`
                  : null;
  return k && AF_FX[k] ? AF_FX[k] : null;
}

function Ty(e, t) {
  if (t.delay > 0) return;
  let n = Math.sign(t.vx) || 1;
  const im = AF_fxImg(t);
  if (im) {
    // boy (px) ve yatay çapa (görselin solunda iz/duman var, gövde sağda)
    const [h, ax, zemin] =
      t.kind === `motor`
        ? [170, 0.58, !0]
        : t.kind === `car`
          ? [136, 0.6, !0]
          : t.kind === `ringshot`
            ? [62, 0.66, !1]
            : t.kind === `note`
              ? [54, 0.5, !1]
              : t.kind === `cig`
                ? [34, 0.6, !1]
                : t.kind === `puma`
                  ? [t.leap ? 118 : 96, 0.62, !0]
                  : [66, 0.55, !1];
    const H = h * AF_BOY,
      w = (im.width * H) / im.height;
    (e.save(), e.translate(t.x, t.y - (t.kind === `puma` ? Math.max(0, t.hy - 70) : 0)), e.scale(n, 1));
    t.kind === `note` && e.rotate(Math.sin(t.t * 0.014 + (t.col || 0)) * 0.3);
    t.kind === `photo` && e.rotate(Math.sin(t.t * 0.012 + (t.fi || 0)) * 0.25);
    (e.drawImage(im, -w * ax, zemin ? -H : -H / 2, w, H), e.restore());
    return;
  }
  if ((e.save(), e.translate(t.x, t.y), t.kind === `photo`)) {
    (e.rotate(t.rot),
      (e.shadowColor = `rgba(255,255,255,0.9)`),
      (e.shadowBlur = 16),
      (e.fillStyle = `#fbfbf4`),
      e.fillRect(-22, -26, 44, 52),
      (e.shadowBlur = 0));
    let n = e.createLinearGradient(0, -21, 0, 13);
    (n.addColorStop(0, `#0d1a46`),
      n.addColorStop(1, `#2b3f86`),
      (e.fillStyle = n),
      e.fillRect(-18, -21, 36, 34),
      (e.fillStyle = `#f6f0d6`),
      e.beginPath(),
      e.arc(8, -12, 5, 0, Math.PI * 2),
      e.fill(),
      (e.fillStyle = `#e8a73a`),
      e.fillRect(-14, 0, 20, 13),
      (e.fillStyle = `#c22`),
      e.fillRect(-6, 3, 4, 6));
  } else if (t.kind === `car`) {
    let t = wy();
    (e.scale(n, 1), (e.imageSmoothingEnabled = !1), (e.globalCompositeOperation = `lighter`));
    let r = e.createRadialGradient(0, -20, 4, 0, -20, 70);
    (r.addColorStop(0, `rgba(255,80,40,0.35)`),
      r.addColorStop(1, `rgba(255,80,40,0)`),
      (e.fillStyle = r),
      e.fillRect(-80, -90, 160, 110),
      (e.globalCompositeOperation = `source-over`),
      e.drawImage(t, -t.width / 2, -t.height),
      (e.fillStyle = `rgba(255,210,31,0.75)`));
    for (let n = 0; n < 3; n++) e.fillRect(-t.width / 2 - 26 - n * 10, -30 + n * 9, 18, 3);
    (e.scale(n, 1),
      (e.font = `900 12px ${_y}`),
      (e.textAlign = `center`),
      (e.fillStyle = `#ffd21f`),
      e.fillText(`95`, 0, -25));
  } else if (t.kind === `note`) AF_drawNote(e, t);
  else if (t.kind === `flash`) {
    e.globalCompositeOperation = `lighter`;
    let g = e.createRadialGradient(0, 0, 3, 0, 0, t.r * 2.6);
    (g.addColorStop(0, `rgba(175,228,255,0.68)`),
      g.addColorStop(0.45, `rgba(70,150,255,0.33)`),
      g.addColorStop(1, `rgba(40,120,255,0)`));
    ((e.fillStyle = g), e.beginPath(), e.arc(0, 0, t.r * 2.6, 0, Math.PI * 2), e.fill());
    ((e.strokeStyle = `rgba(140,205,255,0.55)`), (e.lineWidth = 3));
    for (let k = 0; k < 3; k++) {
      let yy = (k - 1) * 11;
      (e.beginPath(),
        e.moveTo(-n * (t.r + 4), yy),
        e.lineTo(-n * (t.r + 30 + k * 12), yy),
        e.stroke());
    }
    ((e.globalCompositeOperation = `source-over`), e.rotate(t.rot));
    ((e.fillStyle = `#12326c`), e.beginPath(), e.arc(0, 0, t.r, 0, Math.PI * 2), e.fill());
    e.fillStyle = `#2f74d6`;
    for (let k = 0; k < 6; k++) {
      (e.rotate(Math.PI / 3),
        e.beginPath(),
        e.moveTo(0, -t.r * 0.92),
        e.lineTo(t.r * 0.52, -t.r * 0.16),
        e.lineTo(-t.r * 0.12, -t.r * 0.16),
        e.closePath(),
        e.fill());
    }
    ((e.fillStyle = `#cfeaff`), e.beginPath());
    for (let k = 0; k < 6; k++) {
      let aa = (k * Math.PI) / 3 + Math.PI / 6,
        rr = t.r * 0.34,
        xx = Math.cos(aa) * rr,
        yy = Math.sin(aa) * rr;
      k ? e.lineTo(xx, yy) : e.moveTo(xx, yy);
    }
    (e.closePath(), e.fill());
    ((e.lineWidth = 2.5),
      (e.strokeStyle = `#9fe0ff`),
      e.beginPath(),
      e.arc(0, 0, t.r, 0, Math.PI * 2),
      e.stroke());
  } else {
    let n = Math.abs(Math.cos(t.t * 0.01));
    e.globalCompositeOperation = `lighter`;
    let r = e.createRadialGradient(0, 0, 4, 0, 0, t.r * 2.2);
    (r.addColorStop(0, `rgba(255,226,122,0.55)`),
      r.addColorStop(1, `rgba(255,143,216,0)`),
      (e.fillStyle = r),
      e.beginPath(),
      e.arc(0, 0, t.r * 2.2, 0, Math.PI * 2),
      e.fill(),
      (e.lineWidth = 9),
      (e.strokeStyle = `#ffd24a`),
      (e.shadowColor = `#ffe27a`),
      (e.shadowBlur = 20),
      e.beginPath(),
      e.ellipse(0, 0, Math.max(5, t.r * n), t.r, 0, 0, Math.PI * 2),
      e.stroke(),
      (e.lineWidth = 3),
      (e.strokeStyle = `#fff7d6`),
      e.stroke(),
      (e.shadowBlur = 0),
      (e.fillStyle = `#ff8fd8`),
      e.fillRect(-5, -t.r - 8, 10, 10));
  }
  e.restore();
}

function Ey(e, t) {
  (e.save(), (e.globalCompositeOperation = `lighter`));
  for (let n of t) {
    let t = n.t / 420,
      r = 1 - t,
      i = e.createRadialGradient(n.x, n.y, 2, n.x, n.y, 40 + t * 220);
    (i.addColorStop(0, `rgba(255,255,255,${r})`),
      i.addColorStop(0.4, `rgba(200,230,255,${r * 0.5})`),
      i.addColorStop(1, `rgba(200,230,255,0)`),
      (e.fillStyle = i),
      e.beginPath(),
      e.arc(n.x, n.y, 40 + t * 220, 0, Math.PI * 2),
      e.fill(),
      (e.strokeStyle = `rgba(255,255,255,${r})`),
      (e.lineWidth = 3));
    for (let r = 0; r < 8; r++) {
      let i = (r / 8) * Math.PI * 2,
        a = 30 + t * 180 * (r % 2 ? 0.6 : 1);
      (e.beginPath(),
        e.moveTo(n.x + Math.cos(i) * 12, n.y + Math.sin(i) * 12),
        e.lineTo(n.x + Math.cos(i) * a, n.y + Math.sin(i) * a),
        e.stroke());
    }
  }
  e.restore();
}

function Dy(e, t) {
  (e.save(), (e.globalCompositeOperation = `lighter`));
  for (let n of t) {
    let t = n.life / n.max;
    (e.save(),
      e.translate(n.x, n.y),
      e.rotate(n.rot),
      (e.globalAlpha = Math.min(1, t * 1.4)),
      (e.fillStyle = n.color));
    let r = n.size * (0.5 + t * 0.5);
    (e.fillRect(-r / 2, -r / 2, r, r), e.restore());
  }
  e.restore();
}

function Oy(e, t) {
  for (let n of t) {
    let t = n.life / n.max,
      r = n.y - (1 - t) * 74,
      i = t > 0.35 ? 1 : t / 0.35;
    ((e.font = `800 ${Math.round(n.size)}px ${_y}`),
      (e.textAlign = `center`),
      (e.lineWidth = 6),
      (e.strokeStyle = `rgba(5,6,15,${i})`),
      e.strokeText(n.text, n.x, r),
      (e.fillStyle = vy(n.color, i)),
      e.fillText(n.text, n.x, r));
  }
}

function ky(e, t, n, r, i, a, o) {
  (e.beginPath(),
    o
      ? (e.moveTo(t, n), e.lineTo(t + r - a, n), e.lineTo(t + r, n + i), e.lineTo(t + a, n + i))
      : (e.moveTo(t + a, n), e.lineTo(t + r, n), e.lineTo(t + r - a, n + i), e.lineTo(t, n + i)),
    e.closePath());
}

function Ay(e, t, n, r, i, a, o, s, c, l) {
  (ky(e, t, n, r, i, 14, s), (e.fillStyle = `rgba(10,10,20,0.85)`), e.fill(), e.save(), e.clip());
  let u = r * Math.max(a, o);
  ((e.fillStyle = `rgba(255,255,255,0.75)`), e.fillRect(s ? t + r - u : t, n, u, i));
  let d = r * a,
    f = e.createLinearGradient(t, 0, t + r, 0);
  (f.addColorStop(0, s ? l : c),
    f.addColorStop(1, s ? c : l),
    (e.fillStyle = f),
    e.fillRect(s ? t + r - d : t, n, d, i));
  let p = e.createLinearGradient(0, n, 0, n + i);
  (p.addColorStop(0, `rgba(255,255,255,0.3)`),
    p.addColorStop(0.5, `rgba(255,255,255,0.04)`),
    p.addColorStop(1, `rgba(0,0,0,0.25)`),
    (e.fillStyle = p),
    e.fillRect(t, n, r, i),
    e.restore(),
    ky(e, t, n, r, i, 14, s),
    (e.strokeStyle = `rgba(255,255,255,0.75)`),
    (e.lineWidth = 2),
    e.stroke());
}

function jy(e, t, n, r, i, a, o, s, c, l, u) {
  (ky(e, t, n, r, i, 6, o), (e.fillStyle = `rgba(10,10,20,0.85)`), e.fill());
  let d = a >= 1;
  (e.save(),
    e.clip(),
    (e.shadowColor = d ? c : `transparent`),
    (e.shadowBlur = d ? 14 : 0),
    (e.fillStyle = d ? c : s));
  let f = r * Math.min(1, a);
  (e.fillRect(o ? t + r - f : t, n, f, i), (e.shadowBlur = 0), (e.fillStyle = `rgba(5,6,15,0.8)`));
  for (let a of [0.25, 0.5, 0.75]) e.fillRect(t + r * a - 1, n, 2, i);
  if (
    (e.restore(),
    ky(e, t, n, r, i, 6, o),
    (e.strokeStyle = d ? c : `rgba(255,255,255,0.45)`),
    (e.lineWidth = d ? 2 : 1.5),
    e.stroke(),
    d)
  ) {
    let a = 0.65 + Math.sin(l * 0.012) * 0.35;
    ((e.font = `800 13px ${_y}`),
      (e.fillStyle = vy(c, a)),
      (e.textAlign = o ? `right` : `left`),
      e.fillText(`ULTİ HAZIR! (${u})`, o ? t + r : t, n + i + 16));
  }
}

function My(e, t) {
  ((e.font = `800 16px ${_y}`),
    (e.textAlign = `left`),
    (e.fillStyle = t.p1.accent2),
    e.fillText(`P1 · ${t.p1.name}`, 34, 22),
    (e.textAlign = `right`),
    (e.fillStyle = t.p2.accent2),
    e.fillText(
      t.vsBot
        ? `${t.p2.name} · BOT · ${t.diff === `easy` ? `KOLAY` : t.diff === `hard` ? `ZOR` : `NORMAL`}`
        : `${t.p2.name} · P2`,
      $h - 34,
      22,
    ),
    Ay(
      e,
      30,
      30,
      540,
      26,
      t.p1.hp / t.p1.maxHp,
      t.p1.ghostHp / t.p1.maxHp,
      !1,
      t.p1.accent,
      t.p1.accent2,
    ),
    Ay(
      e,
      $h - 30 - 540,
      30,
      540,
      26,
      t.p2.hp / t.p2.maxHp,
      t.p2.ghostHp / t.p2.maxHp,
      !0,
      t.p2.accent,
      t.p2.accent2,
    ),
    jy(e, 34, 64, 330, 11, t.p1.meter / 100, !1, t.p1.accent, lg, t.p1.animT, AF_k(0, `ult`)),
    jy(
      e,
      $h - 34 - 330,
      64,
      330,
      11,
      t.p2.meter / 100,
      !0,
      t.p2.accent,
      dg,
      t.p2.animT,
      AF_k(1, `ult`),
    ));
  let n = $h / 2 - 66;
  ((e.fillStyle = `rgba(4,5,12,0.72)`),
    e.fillRect(n, 22, 132, 58),
    (e.strokeStyle = `rgba(255,255,255,0.85)`),
    (e.lineWidth = 2),
    e.strokeRect(n, 22, 132, 58));
  let r = Math.max(0, Math.ceil(t.timeLeft)),
    i = r <= 10,
    a = i ? 1 + Math.sin(t.p1.animT * 0.02) * 0.08 : 1;
  (e.save(),
    e.translate($h / 2, 51),
    e.scale(a, a),
    (e.font = `800 40px ${_y}`),
    (e.textAlign = `center`),
    (e.fillStyle = i ? `#ff4d5e` : fg),
    e.fillText(isFinite(r) ? String(r) : `∞`, 0, 14),
    e.restore(),
    AF_roundHud(e, t));
}

function Ny(e, t) {
  for (let n of [t.p1, t.p2]) {
    if (n.combo < 2 || n.comboT <= 0 || n.state === `ko`) continue;
    let t = 1 + 0.45 * Math.max(0, 1 - n.comboPopT / 160),
      r = n.idx === 0 ? 200 : $h - 200;
    (e.save(),
      e.translate(r, 126),
      e.scale(t, t),
      (e.font = `800 30px ${_y}`),
      (e.textAlign = `center`),
      (e.lineWidth = 7),
      (e.strokeStyle = `rgba(5,6,15,0.9)`));
    let i = `${n.combo} VURUŞ!`;
    (e.strokeText(i, 0, 0), (e.fillStyle = n.accent), e.fillText(i, 0, 0), e.restore());
  }
}

function Py(e, t) {
  let n = t.announce;
  if (!n) return;
  let r = n.t / n.dur,
    i = r < 0.12 ? r / 0.12 : r > 0.7 ? Math.max(0, (1 - r) / 0.3) : 1,
    a = 1 + Math.max(0, 1 - n.t / 120) * 0.35;
  (e.save(),
    e.translate($h / 2, 300),
    e.scale(a, a),
    (e.globalAlpha = i),
    (e.font = `800 ${n.size}px ${_y}`),
    (e.textAlign = `center`),
    (e.lineWidth = 12),
    (e.strokeStyle = `rgba(5,6,15,0.92)`),
    e.strokeText(n.text, 0, 0),
    (e.fillStyle = n.color),
    e.fillText(n.text, 0, 0),
    e.restore());
}
