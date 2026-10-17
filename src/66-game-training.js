// 66-game-training.js — Antrenman modu: kukla davranışı, can/ulti dolumu, istatistik paneli.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).
// Maç motoru (Xy) yalnızca g.training açıkken bu yardımcıları çağırır.

var AF_DUMMY = [
  [`stand`, `DURUR`],
  [`crouch`, `EĞİLİR`],
  [`guard`, `KORUR`],
  [`bot`, `DÖVÜŞÜR (BOT)`],
];

var AF_TRAIN_REFILL = 1000; // vuruş/kombo bitince canın dolması için bekleme (ms)

function AF_dummyName(m) {
  return (AF_DUMMY.find((d) => d[0] === m) || AF_DUMMY[0])[1];
}

// Kuklanın tuş girdisi (bot modunda motor kendi Hy botunu kullanır)
function AF_dummyInput(g) {
  const n = Vy();
  g.dummy === `crouch` && (n.down = !0);
  g.dummy === `guard` && (n.guard = !0);
  return n;
}

// Antrenmanda kimse nakavt olmaz: can 0'a inince hemen dolar
function AF_trainKo(g, t) {
  t.hp = t.maxHp;
  t.ghostHp = t.maxHp;
}

// P1'in vuruşlarını say: son vuruş, kombo ve kombonun toplam hasarı
function AF_trainHit(g, e, dmg) {
  const s = g.train;
  s.last = dmg;
  s.combo = e.combo;
  s.dmg = e.combo <= 1 ? dmg : s.dmg + dmg;
  s.max = Math.max(s.max, s.dmg);
}

function AF_trainTick(g, ms) {
  for (const f of [g.p1, g.p2]) {
    // vuruş almayı bırakınca kısa süre sonra can dolar
    if (f.state === `hitstun` || f.hp >= f.maxHp) f.trainT = 0;
    else if ((f.trainT = (f.trainT || 0) + ms) >= AF_TRAIN_REFILL) {
      f.hp = f.maxHp;
      f.trainT = 0;
    }
  }
  // ulti barı hep dolu (seçenek); ulti sırasında değil, bittikten sonra dolar
  if (g.trainUlt) for (const f of [g.p1, g.p2]) f.state !== `attack` && (f.meter = 100);
}

function AF_trainReset(g) {
  for (const f of [g.p1, g.p2]) {
    f.x = f.idx === 0 ? $h * 0.26 : $h * 0.74;
    f.y = 704;
    f.vx = 0;
    f.vy = 0;
    f.ground = `g1`;
    f.state = `idle`;
    f.attack = null;
    f.hitstunT = 0;
    f.hp = f.maxHp;
    f.ghostHp = f.maxHp;
    f.facing = f.idx === 0 ? 1 : -1;
    f.dashT = 0;
    f.bounceT = 0;
  }
  g.projectiles = [];
  g.train.combo = 0;
  g.train.dmg = 0;
}

// Ekranın üst ortasında, süre kutusunun altında küçük panel
function AF_drawTrain(e, g) {
  const s = g.train,
    x = $h / 2,
    y = 132,
    w = 300,
    h = 78;
  e.save();
  e.fillStyle = `rgba(6,7,15,.78)`;
  e.strokeStyle = `rgba(0,240,255,.55)`;
  e.lineWidth = 1.5;
  e.beginPath();
  e.roundRect(x - w / 2, y, w, h, 8);
  e.fill();
  e.stroke();
  e.textAlign = `center`;
  e.font = `800 13px ${_y}`;
  e.fillStyle = `#00f0ff`;
  e.fillText(`ANTRENMAN · KUKLA ${AF_dummyName(g.dummy)}`, x, y + 20);
  e.font = `700 13px ${_y}`;
  e.fillStyle = `#f8fafc`;
  e.fillText(`SON VURUŞ ${s.last}   KOMBO ${s.combo}×   HASAR ${s.dmg}`, x, y + 42);
  e.fillStyle = `#94a3b8`;
  e.font = `600 11px ${_y}`;
  e.fillText(`EN YÜKSEK KOMBO HASARI ${s.max} · R SIFIRLA · ESC SEÇENEKLER`, x, y + 64);
  e.restore();
}
