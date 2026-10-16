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
  let n = e.spr.frames[t.pose],
    r = e.x + e.facing * (n.tipX - t.w * 0.3),
    i = e.y - n.tipY;
  return { x: r - t.w / 2, y: i - t.h / 2, w: t.w, h: t.h };
}

function Yy(e, t, n, r) {
  let i = pg(e, r.x, r.x + r.w),
    a = pg(t, r.y, r.y + r.h),
    o = e - i,
    s = t - a;
  return o * o + s * s > n * n ? null : { x: i, y: a };
}

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
    e.charId !== `umut` ||
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
