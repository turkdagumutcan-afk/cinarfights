// 60-game-input.js — Klavye girişi (By sınıfı): basılı tuşlar, kenar olayları, çift dokunma.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

var Fy = AF_keymap(),
  Iy = new Set([...Object.keys(Fy), `Space`]),
  Ly = new Set([`Escape`, `KeyP`]),
  Ry = 280;

function zy() {
  return {
    left: !1,
    right: !1,
    down: !1,
    jumpEdge: !1,
    dropEdge: !1,
    attacks: [!1, !1, !1, !1],
    ultEdge: !1,
    projEdge: !1,
    rollEdge: 0,
    sweepEdge: !1,
    flipPress: !1, // takla tuşuna YENİ basıldı (tampon için)
    dirPress: 0, // yön tuşuna YENİ basıldı: -1 sol, 1 sağ (tampon için)
    guard: !1,
    dash: !1,
  };
}

var By = class {
  held = [new Set(), new Set()];
  edges = [zy(), zy()];
  pauseEdge = !1;
  boxesEdge = !1;
  lastDownTap = [0, 0];
  lastLeftTap = [0, 0];
  lastRightTap = [0, 0];
  constructor() {
    (window.addEventListener(`keydown`, this.onDown),
      window.addEventListener(`keyup`, this.onUp),
      window.addEventListener(`blur`, this.onBlur));
  }
  onDown = (e) => {
    if (AF_modal > 0) return;
    if (e.code === `F2`) {
      (e.preventDefault(), e.repeat || (this.boxesEdge = !0));
      return;
    }
    if (Ly.has(e.code)) {
      (e.preventDefault(), e.repeat || (this.pauseEdge = !0));
      return;
    }
    if (!Iy.has(e.code) || (e.preventDefault(), e.repeat)) return;
    let t = Fy[e.code];
    if (!t) return;
    this.held[t.player].add(t.action);
    let n = this.edges[t.player];
    // Takla için tuş + yön ayrı ayrı kaydedilir; birleştirme AF_tryAirFlip içindeki tamponda yapılır.
    if (t.action === `flip`) n.flipPress = !0;
    else if (t.action === `left`) n.dirPress = -1;
    else if (t.action === `right`) n.dirPress = 1;
    if (t.action === `jump`) n.jumpEdge = !0;
    else if (t.action === `down`) {
      let e = performance.now();
      (e - this.lastDownTap[t.player] <= Ry && (n.dropEdge = !0), (this.lastDownTap[t.player] = e));
    } else if (t.action === `left`) {
      let e2 = performance.now();
      (e2 - this.lastLeftTap[t.player] <= Ry && (n.rollEdge = -1),
        (this.lastLeftTap[t.player] = e2));
    } else if (t.action === `right`) {
      let e2 = performance.now();
      (e2 - this.lastRightTap[t.player] <= Ry && (n.rollEdge = 1),
        (this.lastRightTap[t.player] = e2));
    } else
      t.action === `ult`
        ? (n.ultEdge = !0)
        : t.action === `proj`
          ? (n.projEdge = !0)
          : t.action === `sweep`
            ? (n.sweepEdge = !0)
            : t.action.startsWith(`atk`) && (n.attacks[Number(t.action[3])] = !0);
  };
  onUp = (e) => {
    let t = Fy[e.code];
    t && this.held[t.player].delete(t.action);
  };
  onBlur = () => {
    (this.held[0].clear(), this.held[1].clear());
  };
  consume() {
    let e = (e) => ({
        left: this.held[e].has(`left`),
        right: this.held[e].has(`right`),
        down: this.held[e].has(`down`),
        jumpEdge: this.edges[e].jumpEdge,
        dropEdge: this.edges[e].dropEdge,
        attacks: [...this.edges[e].attacks],
        ultEdge: this.edges[e].ultEdge,
        projEdge: this.edges[e].projEdge,
        rollEdge: this.edges[e].rollEdge,
        sweepEdge: this.edges[e].sweepEdge,
        flipPress: this.edges[e].flipPress,
        dirPress: this.edges[e].dirPress,
        flip: this.held[e].has(`flip`),
        guard: this.held[e].has(`guard`),
        dash: this.held[e].has(`dash`),
      }),
      t = { p1: e(0), p2: e(1), pauseEdge: this.pauseEdge, boxesEdge: this.boxesEdge };
    return ((this.edges = [zy(), zy()]), (this.pauseEdge = !1), (this.boxesEdge = !1), t);
  }
  dispose() {
    (window.removeEventListener(`keydown`, this.onDown),
      window.removeEventListener(`keyup`, this.onUp),
      window.removeEventListener(`blur`, this.onBlur));
  }
};

function Vy() {
  return {
    left: !1,
    right: !1,
    down: !1,
    jumpEdge: !1,
    dropEdge: !1,
    attacks: [!1, !1, !1, !1],
    ultEdge: !1,
    projEdge: !1,
    rollEdge: 0,
    sweepEdge: !1,
    flipPress: !1,
    dirPress: 0,
    flip: !1,
    guard: !1,
    dash: !1,
  };
}
