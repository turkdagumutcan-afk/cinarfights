// 61-game-bot-ai.js — Bot yapay zekâsı (Hy sınıfı).
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

var Hy = class {
  thinkT = 400;
  cool = 0;
  crouchT = 0;
  retreatT = 0;
  hold = { left: !1, right: !1 };
  guardT = 0;
  guardCool = 0;
  constructor(e) {
    this.cfg =
      e === `easy`
        ? {
            tMin: 280,
            tVar: 280,
            cMin: 760,
            cVar: 720,
            dodge: 0.18,
            crouch: 0.08,
            ult: 0.18,
            chase: 0.3,
            atk: 0.55,
            guard: 0.12,
          }
        : e === `hard`
          ? {
              tMin: 70,
              tVar: 60,
              cMin: 210,
              cVar: 240,
              dodge: 0.8,
              crouch: 0.4,
              ult: 0.65,
              chase: 0.8,
              atk: 1,
              guard: 0.5,
            }
          : {
              tMin: 110,
              tVar: 120,
              cMin: 380,
              cVar: 480,
              dodge: 0.45,
              crouch: 0.22,
              ult: 0.4,
              chase: 0.55,
              atk: 1,
              guard: 0.3,
            };
  }
  think(e, t) {
    let n = Vy();
    ((this.thinkT -= t),
      (this.cool -= t),
      (this.crouchT -= t),
      (this.retreatT -= t),
      (this.guardT -= t),
      (this.guardCool -= t));
    let r = e.p2,
      i = e.p1;
    if (e.phase !== `fight` || r.state === `ko`) return n;
    let a = i.x - r.x,
      o = Math.abs(a),
      s = a >= 0 ? `right` : `left`,
      c = a >= 0 ? `left` : `right`,
      l = r.spr.frames.punch.tipX + r.halfW * 0.4,
      u = r.spr.frames.kick.tipX + r.halfW * 0.4,
      d = Math.abs(i.y - r.y) < 70;
    if (this.thinkT <= 0)
      if (
        ((this.thinkT = this.cfg.tMin + Math.random() * this.cfg.tVar),
        (this.hold = { left: !1, right: !1 }),
        r.grounded &&
          this.guardCool <= 0 &&
          r.gp > 25 &&
          ((i.state === `attack` && i.attack && !i.attack.def.noHit && o < u + 80) ||
            e.projectiles.some(
              (e) =>
                e.owner === 0 &&
                e.delay <= 0 &&
                Math.sign(e.vx) === Math.sign(r.x - e.x) &&
                Math.abs(e.x - r.x) < 300,
            )) &&
          Math.random() < this.cfg.guard)
      )
        ((this.guardT = 360 + Math.random() * 260), (this.guardCool = this.guardT + 450));
      else if (
        e.projectiles.some(
          (e) =>
            e.owner === 0 &&
            e.delay <= 0 &&
            Math.sign(e.vx) === Math.sign(r.x - e.x) &&
            Math.abs(e.x - r.x) < 340,
        ) &&
        r.grounded &&
        Math.random() < this.cfg.dodge
      )
        n.jumpEdge = !0;
      else if (r.meter >= 100 && r.grounded && o > 260 && Math.random() < this.cfg.ult)
        n.ultEdge = !0;
      else if (
        r.charId === `umut` &&
        r.grounded &&
        r.projCd <= 0 &&
        o > 380 &&
        Math.random() < 0.03
      )
        n.projEdge = !0;
      else if (
        r.charId === `umut` &&
        r.grounded &&
        r.rollCd <= 0 &&
        o < 150 &&
        Math.random() < 0.02
      )
        n.rollEdge = r.x < i.x ? -1 : 1;
      else if (!d && i.y < r.y - 70)
        ((this.hold[s] = o > 40),
          r.grounded && o < 300 && Math.random() < this.cfg.chase && (n.jumpEdge = !0));
      else if (!d && i.y > r.y + 70 && r.ground === `table`)
        Math.random() < 0.5 ? (n.dropEdge = !0) : (this.hold[s] = !0);
      else if (o > u) this.hold[this.retreatT > 0 ? c : s] = !0;
      else if (i.state === `attack` && Math.random() < this.cfg.crouch) this.crouchT = 320;
      else if (this.cool <= 0 && Math.random() < this.cfg.atk) {
        let e = Math.random(),
          t = o <= l ? (e < 0.45 ? 0 : e < 0.8 ? 1 : e < 0.92 ? 2 : 3) : e < 0.75 ? 1 : 3;
        ((n.attacks[t] = !0),
          (this.cool = this.cfg.cMin + Math.random() * this.cfg.cVar),
          Math.random() < 0.2 && (this.retreatT = 380));
      } else Math.random() < 0.15 && (this.hold[c] = !0);
    return (
      (n.left = this.hold.left),
      (n.right = this.hold.right),
      (n.down = this.crouchT > 0),
      this.guardT > 0 &&
        r.grounded &&
        ((n.guard = !0),
        (n.left = n.right = n.down = !1),
        (n.attacks = [!1, !1, !1, !1]),
        (n.ultEdge = !1),
        (n.jumpEdge = !1),
        (n.dropEdge = !1)),
      n
    );
  }
};
