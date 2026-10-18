// 65-game-match-engine.js — Maç motoru (Xy): güncelleme döngüsü, saldırı çözümü, separateBodies, çizim.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

var Xy = class {
  ctx;
  assets;
  vsBot;
  bot;
  p1;
  p2;
  phase = `intro`;
  phaseT = 0;
  timeLeft = 99;
  paused = !1;
  ended = !1;
  hitstopT = 0;
  shakeT = 0;
  shakeDur = 1;
  shakeMag = 0;
  flashA = 0;
  showBoxes = !1;
  sparks = [];
  dmgs = [];
  projectiles = [];
  lensFlashes = [];
  announce = null;
  cb;
  input = new By();
  raf = 0;
  last = 0;
  acc = 0;
  disposed = !1;
  fightAnnounced = !1;
  pendingWinner = 0;
  pendingReason = `ko`;
  constructor(e, t, n, r = {}) {
    ((this.ctx = e.getContext(`2d`)),
      (this.assets = t),
      (this.vsBot = !!r.vsBot),
      (this.diff = r.diff || `normal`),
      (this.chars = r.chars || [AF_char(`umut`), AF_char(`sudem`)]),
      // antrenman: süre/raunt yok, kimse nakavt olmaz, P2 kukla (66-game-training.js)
      (this.training = !!r.training),
      (this.arena = AF_arena(r.arena)),
      (AF_PLAT = this.arena.platform),
      (this.dummy = r.dummy || `stand`),
      (this.trainUlt = !0),
      (this.bot = this.vsBot || (this.training && this.dummy === `bot`) ? new Hy(this.diff) : null),
      (this.cb = n),
      (window.__AF_match = this), // test/hata ayıklama kancası (tools/test bunu kullanır)
      (this.p1 = new Ky(0, t.p1)),
      (this.p2 = new Ky(1, t.p2)),
      this.reset());
  }
  start() {
    (X.ensure(), (this.last = performance.now()), (this.raf = requestAnimationFrame(this.frame)));
  }
  dispose() {
    ((this.disposed = !0), cancelAnimationFrame(this.raf), this.input.dispose());
  }
  setPaused(e) {
    this.ended || ((this.paused = e), this.cb.onPauseChange(e));
  }
  togglePause() {
    this.setPaused(!this.paused);
  }
  // test kancası: dövüşçünün verilen saldırıdaki vuruş kutusunun ön ucu, gövde merkezinden (px)
  reachOf(f, id) {
    const k = Jy(f, Uy.find((x) => x.id === id));
    return f.facing > 0 ? k.x + k.w - f.x : f.x - k.x;
  }
  setDummy(m) {
    ((this.dummy = m), (this.bot = m === `bot` ? new Hy(this.diff) : null));
  }
  setTrainUlt(v) {
    this.trainUlt = !!v;
  }
  trainReset() {
    this.training && AF_trainReset(this);
  }
  restart() {
    (this.reset(), this.cb.onPauseChange(!1));
  }
  reset() {
    ((this.p1 = new Ky(0, this.assets.p1, this.chars?.[0])),
      (this.p2 = new Ky(1, this.assets.p2, this.chars?.[1])),
      this.chars &&
        this.chars[0].id === this.chars[1].id &&
        ((this.p2.name += ` II`),
        (this.p2.accent = this.chars[0].id === `umut` ? `#3ddc84` : `#ff5a7a`),
        (this.p2.accent2 = this.chars[0].id === `umut` ? `#8af5b9` : `#ff9ab0`)),
      (AF_PLAT = this.arena ? this.arena.platform : !1),
      (this.roundTime = AF_S.time > 0 && !this.training ? AF_S.time : 1 / 0),
      (this.train = { last: 0, combo: 0, dmg: 0, max: 0 }),
      (this.maxRounds = AF_S.rounds),
      (this.need = (AF_S.rounds + 1) >> 1),
      (this.wins = [0, 0]),
      (this.round = 1),
      (this.phase = `intro`),
      (this.phaseT = 0),
      (this.timeLeft = this.roundTime),
      (this.ended = !1),
      (this.paused = !1),
      (this.fightAnnounced = !1),
      (this.hitstopT = 0),
      (this.shakeT = 0),
      (this.flashA = 0),
      (this.sparks = []),
      (this.dmgs = []),
      (this.projectiles = []),
      (this.lensFlashes = []),
      (this.announce = { text: this.training ? `ANTRENMAN` : `RAUNT 1`, t: 0, dur: 800, size: 72, color: `#ffffff` }),
      (this.vsBot || (this.training && this.dummy === `bot`)) && (this.bot = new Hy(this.diff)),
      X.ensure(),
      X.roundStart());
  }
  frame = (e) => {
    if (this.disposed) return;
    let t = Math.min(50, e - this.last);
    for (this.last = e, this.acc += t; this.acc >= ig;) (this.step(ig), (this.acc -= ig));
    (yy(this), (this.raf = requestAnimationFrame(this.frame)));
  };
  step(e) {
    let t = this.input.consume();
    if (
      ((this.showBoxes = AF_S.boxes),
      t.pauseEdge && this.togglePause(),
      t.boxesEdge && AF_set(`boxes`, !AF_S.boxes),
      !this.paused)
    ) {
      if (
        ((this.phaseT += e),
        this.announce &&
          ((this.announce.t += e), this.announce.t >= this.announce.dur && (this.announce = null)),
        this.shakeT > 0 && (this.shakeT = Math.max(0, this.shakeT - e)),
        this.flashA > 0 && (this.flashA = Math.max(0, this.flashA - e * 0.0018)),
        this.hitstopT > 0)
      ) {
        ((this.hitstopT -= e), this.updateEffects(e * 0.3));
        return;
      }
      if (this.phase === `intro`) {
        (!this.fightAnnounced &&
          this.phaseT >= 850 &&
          ((this.fightAnnounced = !0),
          (this.announce = { text: `DÖVÜŞ!`, t: 0, dur: 650, size: 92, color: `#ffd700` }),
          X.roundStart()),
          this.phaseT >= 1450 && ((this.phase = `fight`), (this.phaseT = 0)),
          (this.p1.animT += e),
          (this.p2.animT += e));
        return;
      }
      if (this.phase === `fight`) {
        this.updateFighter(this.p1, t.p1, this.p2, e);
        let n = this.bot ? this.bot.think(this, e) : this.training ? AF_dummyInput(this) : t.p2;
        (this.updateFighter(this.p2, n, this.p1, e),
          this.separateBodies(this.p1, this.p2),
          this.resolveAttacks(),
          this.updateProjectiles(e),
          this.updateEffects(e),
          this.training && AF_trainTick(this, e),
          (this.timeLeft -= e / 1e3),
          this.timeLeft <= 0 && ((this.timeLeft = 0), this.onTimeUp()));
        return;
      }
      if (this.phase === `ko` || this.phase === `timeup`) {
        (this.updateFighter(this.p1, null, this.p2, e),
          this.updateFighter(this.p2, null, this.p1, e),
          this.updateEffects(e),
          this.phaseT >= 750 && AF_endRound(this));
        return;
      }
    }
  }
  updateFighter(e, t, n, r) {
    let i = r / 1e3;
    t && this.phase === `fight` && AF_motion(e, t, r); // ↓↘→ + Yumruk komutları (src/64)
    ((e.animT += r),
      e.airFlip && !e.grounded && (e.airFlipT += r),
      e.flipLandT > 0 &&
        ((e.flipLandT = Math.max(0, e.flipLandT - r)), e.flipLandT === 0 && (e.flipLandDir = 0)),
      AF_walkStep(e, r),
      (e.comboPopT += r),
      e.comboT > 0 && ((e.comboT -= r), e.comboT <= 0 && (e.combo = 0)),
      e.hitFlash > 0 && (e.hitFlash -= r),
      e.landT > 0 && (e.landT = Math.max(0, e.landT - r)),
      e.blockT > 0 && (e.blockT = Math.max(0, e.blockT - r)),
      e.dashCd > 0 && (e.dashCd = Math.max(0, e.dashCd - r)),
      e.projCd > 0 && (e.projCd = Math.max(0, e.projCd - r)),
      e.dashChainT > 0 && (e.dashChainT = Math.max(0, e.dashChainT - r)),
      e.bounceT > 0 && (e.bounceT = Math.max(0, e.bounceT - r)),
      e.dashT > 0 &&
        ((e.dashT = Math.max(0, e.dashT - r)), e.dashT === 0 && ((e.dashCd = AF_DASH_CD), (e.armor = 0))),
      e.state !== `guard` && e.gp < 100 && (e.gp = Math.min(100, e.gp + r * 0.012)),
      e.jumpT > 0 && (e.jumpT = Math.max(0, e.jumpT - r)),
      e.jumpGraceT > 0 && (e.jumpGraceT = Math.max(0, e.jumpGraceT - r)),
      e.ultiAuraT > 0 && (e.ultiAuraT -= r),
      e.state === `ko` && (e.koT += r),
      (e.dropT = Math.max(0, e.dropT - r)),
      e.bufAtkT > 0 &&
        ((e.bufAtkT = Math.max(0, e.bufAtkT - r)), e.bufAtkT === 0 && (e.bufAtk = -1)),
      e.bufUltT > 0 && (e.bufUltT = Math.max(0, e.bufUltT - r)),
      e.rollCd > 0 && (e.rollCd = Math.max(0, e.rollCd - r)));
    let a = e.state !== `ko`;
    if (e.state === `roll`) {
      e.rollT += r;
      let rp = e.rollT / e.rollDur;
      if (rp >= 1) {
        ((e.state = `idle`), (e.y = e.rollGroundY), (e.vx = 0), (e.rollInv = !1), (e.rollCd = 420));
      } else {
        ((e.x += e.rollVx * i),
          (e.x = Math.max(40, Math.min($h - 40, e.x))),
          (e.y = e.rollGroundY),
          (e.rollInv = rp > 0.15 && rp < 0.85));
      }
      return;
    }
    if (a && t && this.phase === `fight` && AF_tryAirFlip(e, t, n, r)) return;
    if (
      t &&
      t.rollEdge &&
      AF_char(e.charId).roll &&
      a &&
      e.grounded &&
      e.rollCd <= 0 &&
      this.phase === `fight` &&
      (e.state === `idle` || e.state === `walk` || e.state === `crouch`)
    ) {
      ((e.state = `roll`),
        (e.rollT = 0),
        (e.rollDur = 700),
        (e.rollGroundY = e.y),
        (e.rollH = 150),
        (e.rollVx = t.rollEdge * 520),
        (e.rollSpin = t.rollEdge),
        (e.rollBack = t.rollEdge !== e.facing),
        (e.rollInv = !1),
        X.jump && X.jump());
      return;
    }
    if (
      a &&
      e.grounded &&
      (e.state === `idle` || e.state === `walk` || e.state === `crouch` || e.state === `guard`) &&
      n.state !== `ko`
    ) {
      let t = Math.sign(n.x - e.x);
      t !== 0 && (e.facing = t);
    }
    if (e.state === `attack` && e.attack) {
      e.attack.t += r;
      let t = e.attack.def;
      e.attack.t >= t.startup + t.active + t.recovery &&
        ((e.attack = null), (e.state = e.grounded ? `idle` : `air`));
    }
    if (
      (e.state === `hitstun` &&
        ((e.hitstunT -= r), e.hitstunT <= 0 && e.grounded && (e.state = `idle`)),
      a && t && this.phase === `fight`)
    ) {
      for (let n = 0; n < 4; n++)
        if (t.attacks[n]) {
          ((e.bufAtk = n), (e.bufAtkT = 250));
          break;
        }
      t.ultEdge && (e.bufUltT = 250);
    }
    let dE = !!(t && t.dash) && !e.pDash;
    e.pDash = !!(t && t.dash);
    if (
      e.spr.frames.run &&
      dE &&
      a &&
      e.grounded &&
      e.dashCd <= 0 &&
      e.dashT <= 0 &&
      this.phase === `fight` &&
      e.state !== `attack` &&
      e.state !== `hitstun` &&
      e.state !== `guard`
    ) {
      // Koşu çarpması ulti barı harcamaz; 3 sn içindeki tekrarlar zayıflar ve zırhsızdır (köşe döngüsü olmasın).
      ((e.dashChain = e.dashChainT > 0 ? (e.dashChain || 0) + 1 : 0),
        (e.dashChainT = 3000),
        (e.dashT = 420),
        (e.armor = e.dashChain ? 0 : 1),
        (e.dashHit = !1),
        X.jump());
    }
    if (
      t &&
      t.projEdge &&
      AF_char(e.charId).proj &&
      a &&
      e.grounded &&
      e.projCd <= 0 &&
      this.phase === `fight` &&
      e.state !== `attack` &&
      e.state !== `hitstun` &&
      e.state !== `guard`
    )
      this.tryProjectile(e);
    if (
      t &&
      t.sweepEdge &&
      AF_char(e.charId).roll &&
      a &&
      e.grounded &&
      this.phase === `fight` &&
      e.state !== `attack` &&
      e.state !== `hitstun` &&
      e.state !== `guard` &&
      e.state !== `roll`
    ) {
      ((e.attack = { def: AF_sweepDef, t: 0, hit: !1 }), (e.state = `attack`), (e.vx = 0));
    }
    if (a && t && this.phase === `fight` && e.state !== `attack` && e.state !== `hitstun` && !(e.bounceT > 0))
      if (t.guard && AF_S.guard && e.grounded)
        (e.state !== `guard` && (e.vx = 0),
          (e.state = `guard`),
          (e.guardLow = !!t.down),
          (e.bufAtk = -1),
          (e.bufAtkT = 0),
          (e.bufUltT = 0));
      else if (e.bufAtk >= 0 && e.bufAtkT > 0)
        ((e.attack = { def: AF_def(e, Uy[e.bufAtk]), t: 0, hit: !1 }),
          (e.state = `attack`),
          e.grounded && (e.vx *= 0.25),
          X.swing(),
          (e.bufAtk = -1),
          (e.bufAtkT = 0));
      else if (e.bufUltT > 0 && e.grounded && e.meter >= 100)
        this.tryUltimate(e) && (e.bufUltT = 0);
      else if (e.grounded)
        if (t.dropEdge && e.ground === `table`)
          ((e.ground = null),
            (e.dropT = 400),
            (e.vy = 160),
            (e.y += 6),
            (e.state = `air`),
            X.swing());
        else if (t.down) ((e.state = `crouch`), (e.vx = 0));
        else {
          let d = !!t.right - +!!t.left;
          t.jumpEdge
            ? ((e.vy = rg * (e.mod ? e.mod.jump : 1)),
              // Street Fighter tarzı: ileri zıplama kalkışta yatay hıza kilitlenir (havada D'yi tutmak gerekmez).
              (e.vx = d * 330 * AF_spd(e)),
              // Yön tuşu zıplamadan hemen SONRA basılırsa da (≤ AF_JUMP_DIR_GRACE ms) aynı kilitlenme olur.
              (e.jumpGraceT = d === 0 ? AF_JUMP_DIR_GRACE : 0),
              (e.jumpT = 130),
              (e.airFlip = !1),
              (e.airFlipT = 0),
              (e.airFlipStartX = e.x),
              (e.airFlipStartY = e.y),
              (e.ground = null),
              (e.state = `air`),
              X.jump())
            : ((e.vx = d * 330 * AF_spd(e)), (e.state = d === 0 ? `idle` : `walk`));
        }
      else {
        let d = !!t.right - +!!t.left;
        const graceLock = e.jumpGraceT > 0 && d !== 0 && !e.airFlip;
        if (graceLock) e.jumpGraceT = 0;
        ((e.vx = e.airFlip
          ? e.airFlipDir * 530 * AF_spd(e)
          : graceLock
            ? d * 330 * AF_spd(e)
            : d === 0
              ? e.vx * 0.995
              : d * 330 * ng * AF_spd(e)),
          (e.state = `air`));
      }
    let o = e.y;
    if (!e.grounded) {
      let n = eg;
      (a && t && t.down && (n *= tg), (e.vy += n * i));
    }
    e.dashT > 0 &&
      e.grounded &&
      e.state !== `attack` &&
      e.state !== `hitstun` &&
      e.state !== `ko` &&
      ((e.vx = e.facing * 780), (e.state = `walk`));
    if (
      ((e.y += e.vy * i),
      (e.x += e.vx * i),
      e.airFlip &&
        n &&
        e.airFlipDir * (e.x - n.x) > Math.min(8, n.halfW * 0.16) &&
        (e.airFlipCrossed = !0),
      e.grounded &&
        (e.state === `hitstun` ||
          e.state === `attack` ||
          e.state === `ko` ||
          e.state === `guard` ||
          e.bounceT > 0) &&
        (e.vx *= 0.88 ** (r / 16.7)),
      e.ground === `table` &&
        (e.x < 375 || e.x > 1002) &&
        ((e.ground = null),
        (e.state === `idle` || e.state === `walk` || e.state === `crouch`) && (e.state = `air`)),
      !e.grounded && e.vy >= 0)
    ) {
      let t = AF_PLAT && e.x > 381 && e.x < 996;
      e.dropT <= 0 && t && o <= 429 && e.y >= 429
        ? ((e.y = 429), (e.vy = 0), (e.ground = `table`), this.onLand(e))
        : e.y >= 704 && ((e.y = 704), (e.vy = 0), (e.ground = `g1`), this.onLand(e));
    }
    (e.tableLock &&
      (e.state === `hitstun` ? (e.x = pg(e.x, 387 + e.halfW, 990 - e.halfW)) : (e.tableLock = !1)),
      (e.x = e.state === `ko` ? AF_koClamp(e) : pg(e.x, 40, $h - 40)),
      e.dashT > 0 &&
        !e.dashHit &&
        n.state !== `ko` &&
        Math.abs(e.x - n.x) < e.halfW + n.halfW + 14 &&
        Math.abs(e.y - n.y) < 135 &&
        AF_dashImpact(this, e, n),
      e.ghostHp > e.hp ? (e.ghostHp = Math.max(e.hp, e.ghostHp - r * 0.055)) : (e.ghostHp = e.hp));
  }
  onLand(e) {
    if (e.airFlip) {
      e.flipLandDir = e.airFlipCrossed ? e.airFlipDir : 0;
      e.flipLandT = e.flipLandDir ? 110 : 0;
    }
    ((e.airFlip = !1),
      (e.airFlipT = 0),
      (e.airFlipDir = 0),
      (e.airFlipCrossed = !1),
      e.state !== `ko` && (e.landT = 150),
      e.state === `air` && ((e.state = `idle`), X.land()));
  }
  separateBodies(e, t) {
    if (e.state === `ko` || t.state === `ko`) return;
    let a = e.hurtbox(),
      b = t.hurtbox();
    // Rakibin üzerinden YALNIZCA takla (airFlip) geçebilir. Normal zıplama (W, W+yön) rakibi aşamaz:
    // yan yana ya da baş hizasında bile görünmez bir duvar gibi durur (AF_JUMP_CROSS ile eski davranış açılır).
    // masa yoksa (AF_PLAT) havadaki herkes zemin seviyesindedir; yüksek zıplama masa seviyesi sayılmasın
    const level = (f) => (f.ground === `table` ? 429 : f.ground !== null ? 704 : AF_PLAT && f.y < 430 ? 429 : 704);
    const flipClear = (upper, lower) =>
      upper.airFlip &&
      upper.ground === null &&
      upper.state === `air` &&
      lower.y - upper.y >= lower.spr.frames.idle.visibleH * 0.34;
    const jumpClear = (upper, lower) =>
      AF_JUMP_CROSS &&
      upper.ground === null &&
      (upper.state === `air` || upper.state === `attack`) &&
      lower.y - upper.y >= lower.spr.frames.idle.visibleH * 0.35;
    const airBlock = (upper, lower) =>
      !AF_JUMP_CROSS &&
      upper.ground === null &&
      !upper.airFlip &&
      (upper.state === `air` || upper.state === `attack`) &&
      lower.ground !== null &&
      level(upper) === level(lower);
    if (flipClear(e, t) || flipClear(t, e) || jumpClear(e, t) || jumpClear(t, e)) return;
    const apart = a.y >= b.y + b.h || b.y >= a.y + a.h;
    if (apart && !(airBlock(e, t) || airBlock(t, e))) return;
    const overlap = (e.halfW + t.halfW) * 0.9 - Math.abs(e.x - t.x);
    if (overlap <= 0) return;
    const bounds = (f) => (f.ground === `table` ? [387 + f.halfW, 990 - f.halfW] : [40, $h - 40]);
    const jumper =
      e.flipLandT > 0 && e.flipLandDir && e.grounded
        ? e
        : t.flipLandT > 0 && t.flipLandDir && t.grounded
          ? t
          : null;
    if (jumper) {
      const rival = jumper === e ? t : e,
        dir = jumper.flipLandDir;
      if (dir * (jumper.x - rival.x) >= 0) {
        const [lo, hi] = bounds(jumper),
          room = Math.max(0, dir > 0 ? hi - jumper.x : jumper.x - lo);
        const shift = Math.min(overlap, room);
        jumper.x = pg(jumper.x + dir * shift, lo, hi);
        if (overlap > shift) {
          const [rl, rh] = bounds(rival);
          rival.x = pg(rival.x - dir * (overlap - shift), rl, rh);
        }
        return;
      }
    }
    let left = e.x <= t.x ? e : t,
      right = left === e ? t : e;
    const [ll, lh] = bounds(left),
      [rl, rh] = bounds(right);
    const lr = Math.max(0, left.x - ll),
      rr = Math.max(0, rh - right.x);
    let x = Math.min(lr, overlap / 2),
      y = Math.min(rr, overlap - x);
    x += Math.min(lr - x, overlap - x - y);
    y += Math.min(rr - y, overlap - x - y);
    left.x = pg(left.x - x, ll, lh);
    right.x = pg(right.x + y, rl, rh);
  }
  resolveAttacks() {
    let e = [
      [this.p1, this.p2],
      [this.p2, this.p1],
    ];
    // Önce iki vuruş da (vuruştan önceki durumla) kontrol edilir, sonra uygulanır:
    // aynı karede vuranlarda P1 önceliği olmasın, ikisi de birbirine vursun (karşılıklı vuruş).
    let hits = [];
    for (let [t, n] of e) {
      if (n.state === `ko`) continue;
      let e = t.attack;
      if (!e || e.hit || e.def.noHit) continue;
      let r = e.def;
      if (e.t < r.startup || e.t > r.startup + r.active) continue;
      let i = qy(Jy(t, r), n.hurtbox());
      i && ((e.hit = !0), hits.push([t, n, r, i]));
    }
    for (let [t, n, r, i] of hits) this.applyHit(t, n, r, i.x, i.y);
  }
  applyHit(e, t, n, r, i) {
    if (t.state === `ko` || this.phase !== `fight` || t.rollInv) return;
    e.mod &&
      n.pose !== `ult` &&
      (n = {
        ...n,
        damage: Math.max(1, Math.round(n.damage * e.mod.dmg)),
        kbx: Math.round(n.kbx * e.mod.kb),
      });
    let a = e.x <= t.x ? 1 : -1;
    if (t.state === `guard` && t.facing === -a && AF_block(this, e, t, n, a, r, i)) return;
    n = AF_scaleHit(n);
    if (t.dashT > 0 && t.armor > 0) {
      t.armor = 0;
      let ad = Math.max(1, Math.round(n.damage * 0.3));
      ((t.hp = Math.max(1, t.hp - ad)),
        (e.damageDealt += ad),
        this.addMeter(e, n.meter),
        (t.hitFlash = 140),
        (this.hitstopT = Math.min(120, 50 + ad * 3)),
        this.burst(r, i, 12, a, `#ffd24a`),
        AF_S.dmgnum && this.dmgNum(r, i - 30, ad, `#ffd24a`),
        X.hitLight());
      return;
    }
    if (t.dashT > 0) {
      ((t.dashT = 0), (t.dashCd = AF_DASH_CD), (t.armor = 0));
    }
    // Kombo hasar azalması (Street Fighter): rakip vuruş sersemliğindeyken gelen her vuruş biraz daha az
    // hasar verir: 1.-2. %100, 3. %80, 4. %70, 5. %60, 6. %50, sonra %40. Ultiler sayılır ama azalmaz.
    {
      const idx = t.state === `hitstun` ? (t.comboIdx || 0) + 1 : 0,
        k = AF_COMBO_SCALE[Math.min(idx, AF_COMBO_SCALE.length - 1)];
      t.comboIdx = idx;
      n.pose !== `ult` && k < 1 && (n = { ...n, damage: Math.max(1, Math.round(n.damage * k)) });
    }
    ((t.hp = Math.max(0, t.hp - n.damage)),
      (e.damageDealt += n.damage),
      this.addMeter(e, n.meter),
      this.addMeter(t, Math.round(n.meter * 0.45)),
      (e.combo += 1),
      (e.comboT = 1300),
      (e.comboPopT = 0),
      (e.maxCombo = Math.max(e.maxCombo, e.combo)),
      (t.combo = 0),
      (t.comboT = 0),
      (t.ground === `table` || t.tableLock) && (t.tableLock = !0),
      (t.state = `hitstun`),
      (t.airFlip = !1),
      (t.flipLandDir = 0),
      (t.attack = null),
      (t.hitstunT = n.hitstun),
      (t.vx = n.kbx * a),
      (t.vy = n.kby),
      n.kby < 0 && (t.ground = null),
      (t.hitFlash = 140),
      (this.hitstopT = Math.min(150, 70 + n.damage * 3)),
      this.shake(n.damage >= 12 ? 20 : 4 + n.damage * 1.1, 150 + n.damage * 5),
      this.burst(r, i, 10 + n.damage, a, e.accent),
      this.dmgNum(r, i - 30, n.damage, e.accent),
      n.damage >= 10 ? X.hitHeavy() : X.hitLight(),
      this.training && e.idx === 0 && AF_trainHit(this, e, n.damage),
      t.hp <= 0 && (this.training ? AF_trainKo(this, t) : this.onKo(e, t)));
  }
  addMeter(e, t) {
    if (t <= 0 || !AF_S.ult) return;
    let n = e.meter;
    ((e.meter = Math.min(100, e.meter + t)),
      e.meter >= 100 && n < 100 && (X.meterFull(), this.cb.onUltiReady(e.idx)));
  }
  tryProjectile(e) {
    if (
      e.state === `ko` ||
      e.state === `hitstun` ||
      e.state === `attack` ||
      !e.grounded ||
      e.projCd > 0 ||
      this.phase !== `fight`
    )
      return !1;
    // SUDEM: sihirli yüzük (F). Eski UMUT flaşı (kind "flash") kod olarak duruyor ama kimseye atanmadı.
    const yuzuk = e.charId === `sudem`;
    ((e.projCd = yuzuk ? 900 : 620),
      (e.attack = { def: AF_projCast, t: 0, hit: !0 }),
      (e.state = `attack`),
      (e.vx = 0));
    let t = e.spr.frames.cast || e.spr.frames.idle,
      n = e.x + e.facing * ((t.tipX || 40) + 10),
      r = e.y - (t.tipY || e.spr.frames.idle.visibleH * 0.52);
    if (yuzuk) {
      this.projectiles.push({
        kind: `ringshot`,
        owner: e.idx,
        x: n,
        y: r,
        vx: 660 * e.facing,
        vy: 0,
        r: 26,
        rot: 0,
        vr: 0,
        t: 0,
        delay: 80,
        baseY: r,
        dead: !1,
      });
      X.ringChime();
      return !0;
    }
    this.projectiles.push({
      kind: `flash`,
      owner: e.idx,
      x: n,
      y: r,
      vx: 740 * e.facing,
      vy: 0,
      r: 30,
      rot: 0,
      vr: 7 * e.facing,
      t: 0,
      delay: 90,
      baseY: r,
      dead: !1,
    });
    (this.lensFlashes.push({ x: n, y: r, t: 0 }),
      (this.flashA = Math.max(this.flashA, 0.4)),
      X.flashWave && X.flashWave(),
      this.shake(5, 140));
    return !0;
  }
  tryUltimate(e) {
    if (
      !AF_S.ult ||
      this.phase !== `fight` ||
      e.state === `ko` ||
      e.state === `hitstun` ||
      e.state === `attack` ||
      e.meter < 100 ||
      !e.grounded
    )
      return !1;
    ((e.meter = 0),
      (e.ultiAuraT = 520),
      (e.attack = { def: Wy, t: 0, hit: !0 }),
      (e.state = `attack`),
      (e.vx = 0));
    let t = e.spr.frames.ult,
      at = AF_char(e.charId).ultAt,
      iH = e.spr.frames.idle.visibleH,
      n = e.x + e.facing * (at ? at.x * iH : t.tipX),
      r = e.y - (at ? at.y * iH : t.tipY),
      i = (t, r, i, a, o, s, c) => ({
        kind: t,
        owner: e.idx,
        x: n,
        y: r,
        vx: i * e.facing,
        vy: a,
        r: o,
        rot: 0,
        vr: c * e.facing,
        t: 0,
        delay: s,
        baseY: r,
        dead: !1,
      });
    return (
      e.charId === `metehan`
        ? ((this.flashA = 0.55),
          Array.from({ length: AF_NOTA_SAYI }).forEach((_, k) => {
            let yy = r + (Math.random() - 0.5) * 150,
              p = i(
                `note`,
                yy,
                720 + Math.random() * 280,
                (Math.random() - 0.5) * 80,
                22 + Math.random() * 18,
                k * 32,
                0,
              );
            ((p.rot = k % 2), (p.col = k % 4), this.projectiles.push(p));
          }),
          this.lensFlashes.push({ x: n, y: r, t: 0 }),
          (this.announce = {
            text: `YILDIRIM NOTALARI!`,
            t: 0,
            dur: 900,
            size: 50,
            color: `#8ad8ff`,
          }),
          X.zapCast())
        : e.charId === `umut`
          ? (this.lensFlashes.push({ x: n, y: r, t: 0 }),
            (this.flashA = 0.78),
            // üç fotoğraf aynı yükseklikte (üst gövde) arka arkaya: eğilerek kaçılır (araba/motor zıplayarak)
            this.projectiles.push({ ...i(`photo`, r, 880, 0, 30, 60, 9), fi: 0 }),
            this.projectiles.push({ ...i(`photo`, r, 880, 0, 30, 170, -8), fi: 1 }),
            this.projectiles.push({ ...i(`photo`, r, 880, 0, 30, 280, 10), fi: 2 }),
            (this.announce = { text: `FLAŞ PATLAMASI!`, t: 0, dur: 900, size: 54, color: lg }),
            X.flashWave(),
            X.shutter(0.08),
            X.shutter(0.17),
            X.shutter(0.26))
          : e.charId === `ahmet`
            ? // GAZA BAS!: sürücüsüz motor ekranın AHMET'in arkasındaki kenarından gaz vererek gelir
              (this.projectiles.push({
                ...i(`motor`, e.y - 2, 1500, 0, 52, 150, 0),
                x: e.facing > 0 ? -100 : $h + 100,
              }),
              (this.announce = { text: `GAZA BAS!`, t: 0, dur: 900, size: 64, color: `#ff7a1a` }),
              X.carRev(),
              X.carRev())
            : (this.projectiles.push(i(`car`, e.y - 2, 980, 0, 48, 40, 0)),
              (this.announce = { text: `KA-ÇOV!`, t: 0, dur: 900, size: 64, color: dg }),
              X.carRev()),
      this.shake(10, 260),
      !0
    );
  }
  giveUlti(e) {
    (e === 0 ? this.p1 : this.p2).meter = 100;
  }
  setHp(e, t) {
    let n = e === 0 ? this.p1 : this.p2;
    ((n.hp = Math.max(1, t)), (n.ghostHp = n.hp));
  }
  updateProjectiles(e) {
    let t = e / 1e3;
    for (let n of this.projectiles) {
      if (n.dead) continue;
      if (n.delay > 0) {
        n.delay -= e;
        continue;
      }
      if (((n.t += e), (n.x += n.vx * t), (n.rot += n.vr * t), n.kind === `ring`))
        n.y = n.baseY + Math.sin(n.t * 0.012) * 16;
      else if (n.kind === `car` || n.kind === `motor`) {
        let e = AF_PLAT && n.x > 387 && n.x < 990 && n.y <= 430 ? 429 : 704;
        (n.y < e - 2
          ? ((n.vy += eg * t), (n.y = Math.min(e - 2, n.y + n.vy * t)))
          : ((n.vy = 0), (n.y = e - 2)),
          Math.random() < 0.6 &&
            this.sparks.push({
              x: n.x - Math.sign(n.vx) * 30,
              y: n.y - 6,
              vx: -n.vx * 0.15,
              vy: -60 - Math.random() * 80,
              size: 3 + Math.random() * 4,
              life: 260,
              max: 260,
              color:
                n.kind === `motor`
                  ? [`#ff9a1f`, `#ffd24a`, `#9aa0a6`][(Math.random() * 3) | 0]
                  : Math.random() < 0.5
                    ? `#ffd24a`
                    : `#ff3b2f`,
              rot: 0,
              spin: 4,
            }));
      } else n.y += n.vy * t;
      (n.kind === `note` &&
        Math.random() < 0.9 &&
        this.sparks.push({
          x: n.x - Math.sign(n.vx) * (10 + Math.random() * 50),
          y: n.y + (Math.random() - 0.5) * 60,
          vx: -n.vx * 0.12,
          vy: (Math.random() - 0.5) * 160,
          size: 2 + Math.random() * 4,
          life: 300,
          max: 300,
          color: [`#5ad8ff`, `#c06cff`, `#7aa0ff`, `#ff9ae8`, `#ffffff`][(Math.random() * 5) | 0],
          rot: 0,
          spin: 6,
        }),
        (n.kind === `ring` || n.kind === `ringshot`) &&
          Math.random() < 0.7 &&
          this.sparks.push({
            x: n.x + (Math.random() - 0.5) * 30,
            y: n.y + (Math.random() - 0.5) * 30,
            vx: -n.vx * 0.1,
            vy: (Math.random() - 0.5) * 60,
            size: 2 + Math.random() * 4,
            life: 380,
            max: 380,
            color: Math.random() < 0.5 ? `#ffe27a` : `#ff8fd8`,
            rot: 0,
            spin: 6,
          }));
      let r = n.owner === 0 ? this.p1 : this.p2,
        i = n.owner === 0 ? this.p2 : this.p1;
      if (i.state !== `ko`) {
        let e = n.kind === `car` || n.kind === `motor` ? n.y - 40 * AF_BOY : n.y,
          t = Yy(n.x, e, n.r * AF_BOY, i.hurtbox());
        t &&
          ((n.dead = !0),
          this.applyHit(r, i, n.kind === `ringshot` ? AF_ringShot : n.kind === `motor` ? AF_motorHit : Gy[n.kind], t.x, t.y),
          this.burst(
            t.x,
            t.y,
            20,
            Math.sign(n.vx),
            n.kind === `photo`
              ? `#ffffff`
              : n.kind === `car`
                ? `#ff3b2f`
                : n.kind === `motor`
                  ? `#ff7a1a`
                : n.kind === `flash`
                  ? `#8ad8ff`
                  : `#ffe27a`,
          ),
          (n.kind === `photo` || n.kind === `flash`) && (this.flashA = Math.max(this.flashA, 0.25)),
          n.kind === `note` &&
            ((this.flashA = Math.max(this.flashA, 0.14)),
            Math.random() < 0.3 && X.zap(),
            this.shake(6, 110),
            this.burst(t.x, t.y, 6, Math.sign(n.vx), Math.random() < 0.5 ? `#8ad8ff` : `#c06cff`)));
      }
      (n.x < -120 || n.x > 1496 || n.y > 900 || n.y < -200) && (n.dead = !0);
    }
    this.projectiles = this.projectiles.filter((e) => !e.dead);
    for (let t of this.lensFlashes) t.t += e;
    ((this.lensFlashes = this.lensFlashes.filter((e) => e.t < 420)),
      this.sparks.length > 420 && this.sparks.splice(0, this.sparks.length - 420));
  }
  updateEffects(e) {
    let t = e / 1e3;
    for (let n of this.sparks)
      ((n.life -= e),
        (n.x += n.vx * t),
        (n.y += n.vy * t),
        (n.vx *= 0.96),
        (n.vy = n.vy * 0.96 + 500 * t),
        (n.rot += n.spin * t));
    this.sparks = this.sparks.filter((e) => e.life > 0);
    for (let t of this.dmgs) t.life -= e;
    this.dmgs = this.dmgs.filter((e) => e.life > 0);
  }
  shake(e, t) {
    if (!AF_S.shake) return;
    ((this.shakeMag = Math.max(this.shakeT > 0 ? this.shakeMag : 0, e)),
      (this.shakeDur = t),
      (this.shakeT = t));
  }
  burst(e, t, n, r, i) {
    for (let a = 0; a < n; a++) {
      let n = 300 + Math.random() * 300;
      this.sparks.push({
        x: e + (Math.random() - 0.5) * 26,
        y: t + (Math.random() - 0.5) * 26,
        vx: (Math.random() - 0.25) * 420 + r * 170,
        vy: (Math.random() - 0.7) * 440,
        size: 3 + Math.random() * 5 + (a % 3 == 0 ? 3 : 0),
        life: n,
        max: n,
        color: a % 3 == 0 ? `#ffffff` : i,
        rot: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 10,
      });
    }
  }
  dmgNum(e, t, n, r) {
    AF_S.dmgnum &&
      this.dmgs.push({
        x: e + (Math.random() - 0.5) * 18,
        y: t,
        text: String(n),
        life: 750,
        max: 750,
        color: r,
        size: 20 + n * 1.1,
      });
  }
  onKo(e, t) {
    this.phase === `fight` &&
      ((this.phase = `ko`),
      (this.phaseT = 0),
      (this.pendingWinner = e.idx === 0 ? 1 : 2),
      (this.pendingReason = `ko`),
      (t.state = `ko`),
      (t.hp = 0),
      (t.attack = null),
      (t.ground = null),
      (t.hitstunT = 0),
      (t.tableLock = !1),
      (t.dashT = 0),
      (t.armor = 0),
      (t.running = !1),
      (t.dashHit = !1),
      (t.vy = Math.min(t.vy, -520)),
      (t.vx = (t.x <= e.x ? -1 : 1) * 420),
      (this.hitstopT = 0),
      (this.announce = { text: `K.O.!`, t: 0, dur: 900, size: 110, color: `#ff2a5f` }),
      X.ko(),
      this.shake(26, 500),
      (this.flashA = Math.max(this.flashA, 0.3)));
  }
  onTimeUp() {
    ((this.phase = `timeup`),
      (this.phaseT = 0),
      (this.pendingReason = `time`),
      (this.pendingWinner = this.p1.hp > this.p2.hp ? 1 : this.p2.hp > this.p1.hp ? 2 : 0),
      (this.announce = { text: `SÜRE DOLDU`, t: 0, dur: 1500, size: 64, color: `#ffd700` }),
      X.ko());
  }
  finish() {
    if (this.ended) return;
    ((this.ended = !0), (this.phase = `over`));
    let e = (e) => ({ damageDealt: e.damageDealt, maxCombo: e.maxCombo, hpLeft: Math.round(e.hp) }),
      t = {
        winner: this.wins[0] > this.wins[1] ? 1 : this.wins[1] > this.wins[0] ? 2 : 0,
        reason: this.pendingReason,
        rounds: [this.wins[0], this.wins[1]],
        p1: e(this.p1),
        p2: e(this.p2),
      };
    this.cb.onMatchEnd(t);
  }
  debugState() {
    let e = (e) => ({
      x: Math.round(e.x),
      y: Math.round(e.y),
      ground: e.ground,
      state: e.state,
      pose: e.pose(),
      hp: e.hp,
      meter: e.meter,
      hurtH: Math.round(e.hurtbox().h),
      standH: Math.round(e.spr.frames.idle.visibleH * 10) / 10,
    });
    return {
      vsBot: this.vsBot,
      round: this.round,
      wins: this.wins,
      phase: this.phase,
      timeLeft: Math.ceil(this.timeLeft),
      paused: this.paused,
      p1: e(this.p1),
      p2: e(this.p2),
      projectiles: this.projectiles.map((e) => e.kind),
    };
  }
};
