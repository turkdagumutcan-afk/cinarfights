// 64-game-collision-helpers.js — Çarpışma yardımcıları ve UMUT havadan takla tetikleyicisi.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

function qy(e, t) {
  let n = Math.max(e.x, t.x),
    r = Math.min(e.x + e.w, t.x + t.w),
    i = Math.max(e.y, t.y),
    a = Math.min(e.y + e.h, t.y + t.h);
  return r <= n || a <= i ? null : { x: (n + r) / 2, y: (i + a) / 2 };
}

function Jy(e, t) {
  if (t.pose === `sweep`) {
    let r = e.x + e.facing * (t.hbx || 0),
      i = e.y - (t.hby || 0);
    return { x: r - t.w / 2, y: i - t.h / 2, w: t.w, h: t.h };
  }
  // mod.reach / mod.reachX: kısa kollu karakterlerde (METEHAN) vuruş kutusu biraz geniş ve önde
  let n = e.spr.frames[t.pose],
    w = t.w * ((e.mod && e.mod.reach) || 1),
    r = e.x + e.facing * (n.tipX - w * 0.3 + ((e.mod && e.mod.reachX) || 0)),
    i = e.y - n.tipY;
  return { x: r - w / 2, y: i - t.h / 2, w, h: t.h };
}

function Yy(e, t, n, r) {
  let i = pg(e, r.x, r.x + r.w),
    a = pg(t, r.y, r.y + r.h),
    o = e - i,
    s = t - a;
  return o * o + s * s > n * n ? null : { x: i, y: a };
}

// Normal zıplama (W / W+yön) rakibin üzerinden geçebilsin mi? false = yalnız takla geçer (varsayılan).
var AF_JUMP_CROSS = false;

// Zıplama kalkışında yön yoksa, yön tuşuna bu süre (ms) içinde basılırsa zıplama o yöne kilitlenir.
var AF_JUMP_DIR_GRACE = 90;

// Giriş tamponu: takla tuşu ile yön tuşu bu süre (ms) içinde basılırsa SIRASI FARK ETMEDEN birlikte sayılır.
// Ayrıca takla, o an yapılamıyorsa (iniş toparlanması, saldırı bitişi) süre dolana kadar beklemeye alınır.
var AF_FLIP_BUFFER = 130;

function AF_tryAirFlip(e, t, n, dt) {
  if (!t) return !1;
  e.bufFlipT = Math.max(0, e.bufFlipT - dt);
  e.bufDirT = Math.max(0, e.bufDirT - dt);
  if (t.flipPress) e.bufFlipT = AF_FLIP_BUFFER;
  if (t.dirPress) {
    e.bufDirT = AF_FLIP_BUFFER;
    e.bufDirDir = t.dirPress;
  }
  const held = (t.right ? 1 : 0) - (t.left ? 1 : 0);
  const dir = held || (e.bufDirT > 0 ? e.bufDirDir : 0);
  // Tetik: takla tuşu (basılı ya da yeni basıldı) + yön + en az bir YENİ basış.
  // (İki tuşu basılı tutmak tekrar tekrar takla atmaz.)
  const fresh = e.bufFlipT > 0 || e.bufDirT > 0;
  if (!fresh || !dir || !(t.flip || e.bufFlipT > 0)) return !1;
  if (
    !AF_char(e.charId).roll ||
    !e.grounded ||
    !e.spr.backFrames ||
    e.spr.backFrames.length !== 16 ||
    e.state === `ko` ||
    e.state === `hitstun` ||
    e.state === `attack` ||
    e.state === `guard` ||
    e.state === `roll` ||
    e.dashT > 0
  )
    return !1;
  e.bufFlipT = 0;
  e.bufDirT = 0;
  e.airFlip = !0;
  e.airFlipT = 0;
  e.airFlipDir = dir;
  e.airFlipCrossed = !1;
  e.flipLandDir = 0;
  e.flipLandT = 0;
  e.airFlipStartX = e.x;
  e.airFlipStartY = e.y;
  e.facing = dir;
  e.ground = null;
  e.state = `air`;
  e.jumpT = 0;
  e.vy = rg * (e.mod ? e.mod.jump : 1);
  const upSpeed = -e.vy,
    flightTime = (2 * upSpeed) / eg,
    speed = 530 * AF_spd(e);
  e.airFlipDur = Math.max(250, flightTime * 1000);
  if (e.airFlipStartY > 429 && upSpeed * upSpeed >= 2 * eg * (e.airFlipStartY - 429)) {
    const platformTime =
      (upSpeed + Math.sqrt(upSpeed * upSpeed - 2 * eg * (e.airFlipStartY - 429))) / eg;
    const landingX = e.airFlipStartX + dir * speed * platformTime;
    if (landingX > 381 && landingX < 996)
      e.airFlipDur = Math.min(e.airFlipDur, Math.max(250, platformTime * 1000));
  }
  e.vx = dir * speed;
  X.jump();
  return !0;
}

// ---- METEHAN koşu çarpması dengesi ----
var AF_DASH_CD = 1500; // koşular arası bekleme (ms)
var AF_DASH_CHAIN = [1, 0.6, 0.3]; // 3 sn içindeki 1./2./3.+ koşunun hasar çarpanı

function AF_dashImpact(g, e, n) {
  const a = e.x <= n.x ? 1 : -1,
    korudu = n.state === `guard` && n.facing === -a,
    duvar = n.x < 90 || n.x > $h - 90,
    k = AF_DASH_CHAIN[Math.min(AF_DASH_CHAIN.length - 1, e.dashChain || 0)];
  e.dashHit = !0;
  e.dashT = 0;
  e.dashCd = AF_DASH_CD;
  e.armor = 0;
  e.vx *= 0.2;
  g.shake(12, 180);
  g.applyHit(e, n, { ...AF_dashHit, damage: Math.max(1, Math.round(AF_dashHit.damage * k)) }, (e.x + n.x) / 2, e.y - 90);
  if (korudu) {
    // korunan koşu cezasız değil: kısa süre savunmasız kalır
    e.state = `hitstun`;
    e.attack = null;
    e.hitstunT = Math.max(e.hitstunT || 0, 350);
  } else if (duvar) {
    // köşede rakip itilemez: METEHAN geri seker (~150 px), aynı yerde yapışıp tekrar vuramaz
    e.state = `hitstun`;
    e.attack = null;
    e.hitstunT = Math.max(e.hitstunT || 0, 220);
    e.vx = -a * 1100;
  }
}
