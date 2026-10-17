// 52-game-round-guard.js — Raunt akışı, koruma (guard) efekti ve yürüyüş adımı.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

function AF_resetFighter(f) {
  f.x = f.idx === 0 ? $h * 0.26 : $h * 0.74;
  f.y = 704;
  f.vx = 0;
  f.vy = 0;
  f.facing = f.idx === 0 ? 1 : -1;
  f.hp = f.maxHp;
  f.ghostHp = f.maxHp;
  f.state = `idle`;
  f.ground = `g1`;
  f.attack = null;
  f.hitstunT = 0;
  f.hitFlash = 0;
  f.dropT = 0;
  f.koT = 0;
  f.combo = 0;
  f.comboT = 0;
  f.comboPopT = 999;
  f.ultiAuraT = 0;
  f.bufAtk = -1;
  f.bufAtkT = 0;
  f.bufUltT = 0;
  f.projCd = 0;
  f.rollCd = 0;
  f.rollInv = !1;
  f.rollT = 0;
  f.airFlip = !1;
  f.airFlipT = 0;
  f.airFlipDir = 0;
  f.airFlipCrossed = !1;
  f.flipLandDir = 0;
  f.flipLandT = 0;
  f.bufFlipT = 0;
  f.bufDirT = 0;
  f.bufDirDir = 0;
  f.jumpGraceT = 0;
  f.tableLock = !1;
  f.landT = 0;
  f.jumpT = 0;
  f.walkP = 0;
  f.walkB = 0;
  f.gp = 100;
  f.blockT = 0;
  f.guardLow = !1;
}

function AF_endRound(g) {
  const w = g.pendingWinner;
  if (w === 1) g.wins[0]++;
  else if (w === 2) g.wins[1]++;
  else {
    g.wins[0]++;
    g.wins[1]++;
  }
  if (g.wins[0] >= g.need || g.wins[1] >= g.need || g.round >= g.maxRounds) {
    g.finish();
    return;
  }
  g.round++;
  AF_resetFighter(g.p1);
  AF_resetFighter(g.p2);
  g.phase = `intro`;
  g.phaseT = 0;
  g.timeLeft = g.roundTime;
  g.fightAnnounced = !1;
  g.hitstopT = 0;
  g.shakeT = 0;
  g.flashA = 0.55;
  g.sparks = [];
  g.dmgs = [];
  g.projectiles = [];
  g.lensFlashes = [];
  g.announce = {
    text: AF_roundText(g),
    t: 0,
    dur: 800,
    size: 72,
    color: AF_final(g) ? `#ff2a5f` : `#ffffff`,
  };
  g.vsBot && (g.bot = new Hy(g.diff));
  X.roundStart();
}

function AF_roundHud(e, t) {
  const cx = $h / 2;
  e.save();
  e.textAlign = `center`;
  e.font = `800 13px ${_y}`;
  e.fillStyle = `rgba(255,255,255,.8)`;
  e.fillText(t.maxRounds > 1 ? `RAUNT ${t.round}` : `TEK RAUNT`, cx, 98);
  for (let sd = 0; sd < 2; sd++) {
    const p = sd === 0 ? t.p1 : t.p2;
    for (let k = 0; k < t.need; k++) {
      const x = cx + (sd === 0 ? -1 : 1) * (62 + k * 22),
        won = t.wins[sd] > k;
      e.beginPath();
      e.arc(x, 94, 7, 0, Math.PI * 2);
      e.fillStyle = won ? p.accent : `rgba(4,5,12,.8)`;
      e.fill();
      if (won) {
        e.save();
        e.shadowColor = p.accent;
        e.shadowBlur = 10;
        e.fill();
        e.restore();
      }
      e.lineWidth = 2;
      e.strokeStyle = won ? `#ffffff` : `rgba(255,255,255,.45)`;
      e.stroke();
    }
  }
  e.restore();
}

function AF_block(g, e, t, n, a, r, i) {
  const ult = n.pose === `ult`,
    drain = n.damage * (ult ? 3.5 : 2.6);
  if (t.gp < drain) {
    t.gp = 30;
    g.dmgs.push({
      x: t.x,
      y: t.y - t.spr.frames.idle.visibleH * 0.95,
      text: `KORUMA KIRILDI!`,
      life: 900,
      max: 900,
      color: `#ff5a5a`,
      size: 24,
    });
    return !1;
  }
  t.gp -= drain;
  // ulti koruma hasarı: %25, kesirler biriktirilir (çok parçalı ultiler korumayı delmesin; 24'lük ulti en fazla 6)
  let raw;
  if (ult) {
    t.chipAcc = (t.chipAcc || 0) + n.damage * 0.25;
    raw = Math.floor(t.chipAcc);
    t.chipAcc -= raw;
  } else raw = Math.max(1, Math.round(n.damage * 0.12));
  const chip = Math.min(Math.max(0, t.hp - 1), raw);
  t.hp -= chip;
  e.damageDealt += chip;
  g.addMeter(e, Math.round(n.meter * 0.4));
  g.addMeter(t, Math.round(n.meter * 0.3));
  t.blockT = 140;
  t.vx = a * Math.min(420, n.kbx * 0.5);
  ult || (e.vx = -a * 160);
  g.hitstopT = Math.min(90, 40 + n.damage * 2);
  g.shake(2 + n.damage * 0.3, 100);
  g.burst(r, i, 6 + (n.damage >> 1), a, `#9fd8ff`);
  g.dmgs.push({
    x: r,
    y: i - 30,
    text: chip > 0 ? `BLOK -${chip}` : `BLOK`,
    life: 600,
    max: 600,
    color: `#9fd8ff`,
    size: 18,
  });
  X.hitLight();
  return !0;
}

function AF_guardFx(e, t, r) {
  if (t.state === `ko`) return;
  const g = t.state === `guard`;
  if (g || t.gp < 99) {
    const w = 56,
      y = -t.spr.frames.idle.visibleH - 20;
    e.save();
    e.fillStyle = `rgba(4,5,12,.85)`;
    e.fillRect(-w / 2 - 2, y - 2, w + 4, 9);
    e.strokeStyle = `rgba(255,255,255,.55)`;
    e.lineWidth = 1;
    e.strokeRect(-w / 2 - 2, y - 2, w + 4, 9);
    e.fillStyle = t.gp > 35 ? `#7cc8ff` : `#ff5a5a`;
    e.fillRect(-w / 2, y, (w * Math.max(0, t.gp)) / 100, 5);
    e.restore();
  }
}

function AF_walkStep(t, dt) {
  const wk = t.state === "walk" && t.grounded;
  t.walkB = wk ? Math.min(1, t.walkB + dt / 90) : Math.max(0, t.walkB - dt / 110);
  if (wk) t.walkP += (t.vx * t.facing >= 0 ? 1 : -1) * Math.abs(t.vx) * (dt / 1e3) * 0.0353;
}
