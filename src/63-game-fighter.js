// 63-game-fighter.js — Dövüşçü sınıfı (Ky): durum, hurtbox, pose.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

var Ky = class {
  idx;
  spr;
  accent;
  x;
  y = 704;
  vx = 0;
  vy = 0;
  facing;
  hp = 150;
  ghostHp = 150;
  meter = 0;
  state = `idle`;
  ground = `g1`;
  attack = null;
  hitstunT = 0;
  hitFlash = 0;
  dropT = 0;
  koT = 0;
  animT = Math.random() * 1e3;
  comboPopT = 999;
  combo = 0;
  comboT = 0;
  maxCombo = 0;
  damageDealt = 0;
  ultiAuraT = 0;
  bufAtk = -1;
  bufAtkT = 0;
  bufUltT = 0;
  tableLock = !1;
  landT = 0;
  jumpT = 0;
  walkP = 0;
  walkB = 0;
  guardLow = !1;
  gp = 100;
  blockT = 0;
  pL = !1;
  pR = !1;
  tapT = 0;
  dashT = 0;
  dashHit = !1;
  dashCd = 0;
  dashChain = 0; // 3 sn içindeki art arda koşu sayısı (METEHAN)
  dashChainT = 0;
  bounceT = 0; // köşe çarpmasından geri sekme süresi (ms)
  projCd = 0;
  rollT = 0;
  rollDur = 700;
  rollGroundY = 0;
  rollH = 150;
  rollVx = 0;
  rollSpin = 1;
  rollCd = 0;
  rollInv = !1;
  rollBack = !1;
  airFlip = !1;
  airFlipT = 0;
  airFlipDur = 900;
  airFlipStartX = 0;
  airFlipStartY = 704;
  airFlipDir = 0;
  airFlipCrossed = !1;
  flipLandDir = 0;
  flipLandT = 0;
  bufFlipT = 0; // takla tuşu tamponu (ms)
  bufDirT = 0; // yön tuşu tamponu (ms)
  bufDirDir = 0; // tamponlanan yön
  jumpGraceT = 0; // zıplama sonrası yön kilitleme penceresi (ms)
  running = !1;
  armor = 0;
  pDash = !1;
  maxHp = 150;
  dashHit = !1;
  constructor(e, t, n) {
    ((this.idx = e), (this.spr = t));
    let r = n || AF_char(e === 0 ? `umut` : `sudem`);
    ((this.charId = r.id),
      (this.mod = r.mod || null),
      (this.name = r.name),
      (this.accent = r.color),
      (this.accent2 = r.color2),
      (this.x = e === 0 ? $h * 0.26 : $h * 0.74),
      (this.facing = e === 0 ? 1 : -1),
      (this.maxHp = (r.mod && r.mod.hp) || 150),
      (this.hp = this.maxHp),
      (this.ghostHp = this.maxHp));
  }
  get halfW() {
    return this.spr.halfW;
  }
  get grounded() {
    return this.ground !== null;
  }
  pose() {
    if (this.state === `ko` || this.state === `hitstun`) return `hurt`;
    if (this.state === `roll`) return `crouch`;
    if (this.state === `attack` && this.attack && this.attack.def.pose === `sweep`) return `crouch`;
    if (this.state === `attack` && this.attack) {
      let e = this.attack.def,
        t = this.attack.t;
      return e.pose === `ult`
        ? `ult`
        : t >= e.startup && t <= e.startup + e.active + e.recovery * 0.5
          ? e.pose
          : this.grounded
            ? `idle`
            : `jump`;
    }
    return this.grounded
      ? this.state === `crouch`
        ? `crouch`
        : this.state === `guard`
          ? this.guardLow
            ? this.spr.frames.guardlow
              ? `guardlow`
              : `crouch`
            : this.spr.frames.guard
              ? `guard`
              : `idle`
          : this.dashT > 0 && this.spr.frames.run
            ? `run`
            : `idle`
      : `jump`;
  }
  frame() {
    return this.spr.frames[this.pose()];
  }
  hurtbox() {
    let e = this.spr.frames.idle.visibleH * 0.94,
      t = this.pose() === `crouch`,
      n = this.halfW * 2 * (t ? 1.05 : 0.9),
      r = t ? e * 0.5 : this.frame().visibleH * 0.94;
    return { x: this.x - n / 2, y: this.y - r, w: n, h: r };
  }
};
