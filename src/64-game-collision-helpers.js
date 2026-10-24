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
    w = t.w * AF_BOY * ((e.mod && e.mod.reach) || 1),
    h = t.h * AF_BOY,
    r =
      e.x +
      e.facing *
        (n.tipX -
          w * 0.3 +
          (((e.mod && e.mod.reachX) || 0) + (t.pose === `kick` ? AF_char(e.charId).kickX || 0 : 0)) * AF_BOY),
    i = e.y - n.tipY;
  return { x: r - w / 2, y: i - h / 2, w, h };
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
  if (AF_PLAT && e.airFlipStartY > 429 && upSpeed * upSpeed >= 2 * eg * (e.airFlipStartY - 429)) {
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

// Ulti hasarı risk/ödül ile: güvenilir ulti az, kaçması kolay ulti çok hasar verir; ulti başına
// ORTALAMA hasar (bot simülasyonu, _onizleme/denge.mjs) dördünde yakın tutulur.
// METEHAN notaları (2'şer) — yakında anında ve geniş, en güvenilir:
var AF_NOTA_SAYI = 10;

// Kombo hasar azalması: rakip sersemlikteyken gelen n. vuruşun çarpanı (applyHit)
var AF_COMBO_SCALE = [1, 1, 0.8, 0.7, 0.6, 0.5, 0.4];

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
    // köşede rakip itilemez: METEHAN geri seker (~150 px), aynı yerde yapışıp tekrar vuramaz.
    // Hasar pozuna girmez: normal duruşta kayar, bu sırada (bounceT) tuş girişi kilitli.
    e.state = `idle`;
    e.attack = null;
    e.bounceT = 260;
    e.vx = -a * 1100;
  }
}

// ---- Street Fighter tarzı hareket komutları ----
// Yönler karakterin baktığı tarafa göre "numpad" gösterimiyle tutulur: 2 = ↓, 3 = ↘ (aşağı-ileri), 6 = → (ileri).
//   ↓↘→ + Yumruk          → özel hareket (SUDEM yüzük, METEHAN koşu çarpması)
//   ↓↘→ ↓↘→ + Yumruk      → ulti (bar doluysa)
// Klavyede kolaylık: ↘ adımı atlanabilir (↓ sonra → yeter). Eski tek tuşlar (F, C, Boşluk) da çalışır.
var AF_QCF_MS = 420, // bir çeyrek dairenin en uzun süresi
  AF_QCF2_MS = 900, // çift çeyrek dairenin en uzun süresi
  AF_QCF_SON = 220; // son yön (→) ile tuş arasındaki en uzun süre

function AF_yon(e, t) {
  const ileri = e.facing > 0 ? t.right : t.left,
    geri = e.facing > 0 ? t.left : t.right;
  return t.down ? (ileri ? 3 : geri ? 1 : 2) : ileri ? 6 : geri ? 4 : 5;
}

// en sondan geriye: ... 2 → (3) → 6 dizisini arar; bulursa 2'nin zamanını döndürür
function AF_qcfBul(h, son, sinir) {
  let i = h.length - 1;
  while (i >= 0 && h[i].d !== 6) i--;
  if (i < 0 || h[i].t < son) return -1;
  const t6 = h[i].t;
  for (i--; i >= 0; i--) {
    if (h[i].t < t6 - sinir) return -1;
    if (h[i].d === 2) return i;
    if (h[i].d !== 3) return -1;
  }
  return -1;
}

function AF_motion(e, t, r) {
  const now = (e.mT = (e.mT || 0) + r),
    h = (e.mh ||= []),
    d = AF_yon(e, t);
  (!h.length || h[h.length - 1].d !== d) && h.push({ d, t: now });
  while (h.length && h[0].t < now - 1200) h.shift();
  const yumruk = t.attacks[0] || t.attacks[2];
  if (!yumruk || e.state === `ko`) return;
  const i = AF_qcfBul(h, now - AF_QCF_SON, AF_QCF_MS);
  if (i < 0) return;
  const c = AF_char(e.charId),
    yut = () => ((t.attacks[0] = !1), (t.attacks[2] = !1), (e.mh = []));
  // çift çeyrek daire: ilk 2'den önce bir 6 ve ondan önce bir 2 daha
  const j = AF_qcfBul(h.slice(0, i), now - AF_QCF2_MS, AF_QCF_MS);
  if (j >= 0 && now - h[j].t <= AF_QCF2_MS && e.meter >= 100) {
    yut();
    t.ultEdge = !0;
    return;
  }
  if (c.proj) {
    yut();
    t.projEdge = !0;
  } else if (c.run) {
    yut();
    t.dash = !0;
  }
}

// DUCE ulti: yıldız düşmeden önce yerde parlayan gölgenin süresi (ms) — tepki payı
var AF_STAR_UYARI = 520;

// ---- ALP ulti: siyah puma ----
// Yerde koşar (vuruş noktası alçak); rakibe ~300 px kala sıçrar. Sıçrayışta vuruş yüksekliği rakibin
// gövde ortasına doğru kayar ama en az 190*AF_BOY px olur: zıplayan rakibi de yakalar, eğilen rakibin
// üstünden geçer. Doğru cevap: zamanında eğilmek ya da korumak.
function AF_pumaStep(n, hedef, ms) {
  const hb = hedef.hurtbox(),
    ileri = Math.sign(n.vx) * (hedef.x - n.x);
  if (!n.leap && ileri > 0 && ileri < 300) ((n.leap = !0), X.jump && X.jump());
  if (!n.leap) return;
  const merkez = n.y - (hb.y + hb.h / 2),
    hedefY = Math.max(190 * AF_BOY, merkez);
  n.hy += (hedefY - n.hy) * Math.min(1, ms / 70);
}
