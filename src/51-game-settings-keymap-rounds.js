// 51-game-settings-keymap-rounds.js — Ayar deposu, varsayılan tuş haritası, tuş etiketleri, raunt metinleri.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

var AF_DEFKEYS = {
  p1: {
    left: [`KeyA`],
    right: [`KeyD`],
    jump: [`KeyW`],
    down: [`KeyS`],
    atk0: [`KeyZ`],
    atk1: [`KeyX`],
    atk2: [`ShiftLeft`],
    atk3: [`ControlLeft`],
    guard: [`KeyV`],
    ult: [`KeyC`],
    proj: [`KeyF`],
    sweep: [`KeyG`],
    dash: [`Space`],
    flip: [`KeyE`], // W/A/D'nin hemen yanında; sol elle en rahat ulaşılan boş tuş
  },
  p2: {
    left: [`ArrowLeft`],
    right: [`ArrowRight`],
    jump: [`ArrowUp`],
    down: [`ArrowDown`],
    atk0: [`Numpad1`, `KeyJ`],
    atk1: [`Numpad2`, `KeyK`],
    atk2: [`Numpad4`, `KeyU`],
    atk3: [`Numpad5`, `KeyI`],
    guard: [`Numpad3`, `KeyL`],
    ult: [`Numpad0`, `KeyO`],
    proj: [`Numpad9`, `KeyH`],
    sweep: [`Numpad8`, `KeyM`],
    dash: [`ShiftRight`, `Numpad7`],
    flip: [`Numpad6`, `KeyN`], // Numpad'de 4/5'in yanı; numpad yoksa J/H'nin altındaki N
  },
};

var AF_DEF = {
  vol: 100,
  rounds: 3,
  time: 99,
  dmg: 1,
  guard: !0,
  ult: !0,
  shake: !0,
  dmgnum: !0,
  scan: !0,
  boxes: !1,
  hints: !0,
  keys: AF_DEFKEYS,
};

var AF_OPT = { rounds: [1, 3, 5], time: [30, 60, 99, 0], dmg: [0.5, 1, 1.5, 2] };

var AF_KEY = `ankara-fighter-ayarlar-v1`;

var AF_modal = 0;

var AF_BAD = new Set([
  `Escape`,
  `KeyP`,
  `F2`,
  `Enter`,
  `NumpadEnter`,
  `Tab`,
  `MetaLeft`,
  `MetaRight`,
  `ContextMenu`,
]);

function AF_clone(o) {
  return JSON.parse(JSON.stringify(o));
}

function AF_load() {
  const s = AF_clone(AF_DEF);
  try {
    const r = JSON.parse(localStorage.getItem(AF_KEY) || `null`);
    if (r && typeof r === `object`) {
      if (typeof r.vol === `number` && r.vol >= 0 && r.vol <= 100) s.vol = Math.round(r.vol);
      for (const k of Object.keys(AF_OPT)) if (AF_OPT[k].includes(r[k])) s[k] = r[k];
      for (const k of [`guard`, `ult`, `shake`, `dmgnum`, `scan`, `boxes`, `hints`])
        if (typeof r[k] === `boolean`) s[k] = r[k];
      if (r.keys && typeof r.keys === `object`)
        for (const p of [`p1`, `p2`])
          for (const a of Object.keys(AF_DEFKEYS[p])) {
            const v = r.keys[p] && r.keys[p][a];
            // Eski varsayılan takla tuşları (R / T) kayıtlıysa yeni varsayılana geç.
            if (a === `flip` && Array.isArray(v) && v.length === 1 && (v[0] === `KeyR` || v[0] === `KeyT`))
              continue;
            if (
              Array.isArray(v) &&
              v.length &&
              v.every((x) => typeof x === `string` && x.length < 24 && !AF_BAD.has(x))
            )
              s.keys[p][a] = v.slice(0, 3);
          }
    }
  } catch {}
  return s;
}

var AF_S = AF_load();

function AF_save() {
  try {
    localStorage.setItem(AF_KEY, JSON.stringify(AF_S));
  } catch {}
}

function AF_keymap() {
  const m = {};
  for (const [pi, p] of [
    [0, `p1`],
    [1, `p2`],
  ])
    for (const a of Object.keys(AF_S.keys[p]))
      for (const c of AF_S.keys[p][a]) m[c] = { player: pi, action: a };
  return m;
}

function AF_apply(k) {
  if (!k || k === `vol`)
    try {
      X.master && (X.master.gain.value = (0.4 * AF_S.vol) / 100);
    } catch {}
  if (!k || k === `scan`)
    try {
      let st = document.getElementById(`af-scan`);
      if (AF_S.scan) {
        st && st.remove();
      } else if (!st) {
        st = document.createElement(`style`);
        st.id = `af-scan`;
        st.textContent = `.scanlines:after{display:none!important}`;
        document.head.appendChild(st);
      }
    } catch {}
  if (!k || k === `keys`)
    try {
      Fy = AF_keymap();
      Iy = new Set([...Object.keys(Fy), `Space`]);
    } catch {}
}

function AF_set(k, v) {
  AF_S[k] = v;
  AF_save();
  AF_apply(k);
}

function AF_resetAll() {
  AF_S = AF_clone(AF_DEF);
  AF_save();
  AF_apply();
}

function AF_rebind(p, a, code) {
  const K = AF_S.keys,
    old = K[p][a][0];
  for (const q of [`p1`, `p2`])
    for (const b of Object.keys(K[q])) {
      const i = K[q][b].indexOf(code);
      if (i >= 0) {
        K[q][b].splice(i, 1);
        if (!K[q][b].length && old && !(q === p && b === a)) K[q][b].push(old);
      }
    }
  K[p][a] = [code];
  AF_save();
  AF_apply(`keys`);
}

function AF_kl(c, short) {
  if (!c) return `—`;
  const f = {
    ArrowLeft: `◄`,
    ArrowRight: `►`,
    ArrowUp: `▲`,
    ArrowDown: `▼`,
    ShiftLeft: short ? `SHIFT` : `SOL SHIFT`,
    ShiftRight: short ? `SHIFT` : `SAĞ SHIFT`,
    ControlLeft: short ? `CTRL` : `SOL CTRL`,
    ControlRight: short ? `CTRL` : `SAĞ CTRL`,
    AltLeft: `SOL ALT`,
    AltRight: `SAĞ ALT`,
    Space: `BOŞLUK`,
    Backspace: `SİL`,
    Comma: `,`,
    Period: `.`,
    Slash: `/`,
    Semicolon: `;`,
    Quote: `'`,
    BracketLeft: `[`,
    BracketRight: `]`,
    Backslash: `\\`,
    Minus: `-`,
    Equal: `=`,
    Backquote: `\``,
    NumpadAdd: `NUM +`,
    NumpadSubtract: `NUM -`,
    NumpadMultiply: `NUM *`,
    NumpadDivide: `NUM /`,
    NumpadDecimal: `NUM .`,
  };
  if (f[c]) return f[c];
  let m = /^Key([A-Z])$/.exec(c);
  if (m) return m[1];
  m = /^Digit(\d)$/.exec(c);
  if (m) return m[1];
  m = /^Numpad(\d)$/.exec(c);
  if (m) return `NUM ` + m[1];
  return c.toUpperCase();
}

function AF_k(pi, a, short) {
  return AF_kl(AF_S.keys[pi === 0 ? `p1` : `p2`][a][0], short !== !1);
}

function AF_pair(a, b) {
  return a.startsWith(`NUM `) && b.startsWith(`NUM `)
    ? `NUM ${a.slice(4)}/${b.slice(4)}`
    : `${a}/${b}`;
}

function AF_legend(pi) {
  const k = (a) => AF_k(pi, a),
    takla = AF_UMUT_OZEL ? ` · ${k(`flip`)}+YÖN TAKLA · ${k(`sweep`)} SÜPÜRME` : ``;
  return [
    `${k(`left`)}/${k(`right`)} HAREKET · ${k(`jump`)} ZIPLA · ${k(`down`)} EĞİL · ${k(`guard`)} KORUMA`,
    `${k(`atk0`)} YUMRUK · ${k(`atk1`)} TEKME · ${AF_pair(k(`atk2`), k(`atk3`))} GÜÇLÜ · ${k(`proj`)} YÜZÜK (SUDEM) · ${k(`dash`)} KOŞU (METEHAN)${takla} · ${k(`ult`)} ULTİ`,
  ];
}

function AF_footer(pi) {
  const k = (a) => AF_k(pi, a),
    takla = AF_UMUT_OZEL ? ` · ${k(`flip`)}+YÖN TAKLA · ${k(`sweep`)} SÜPÜRME` : ``;
  return ` ${k(`left`)}/${k(`right`)} · ${k(`jump`)} ZIPLA · ${k(`down`)} EĞİL · ${k(`atk0`)} YUMRUK · ${k(`atk1`)} TEKME · ${AF_pair(k(`atk2`), k(`atk3`))} GÜÇLÜ · ${k(`guard`)} KORUMA · ${k(`proj`)} YÜZÜK · ${k(`dash`)} KOŞU${takla} · ${k(`ult`)} ULTİ · ↓↘→+YUMRUK ÖZEL · ↓↘→↓↘→+YUMRUK ULTİ`;
}

function AF_cardLines(pi, s) {
  const k = (a) => AF_k(pi, a);
  const P = k(`atk0`);
  const ozel = s.proj
    ? `↓↘→+${P} ya da ${k(`proj`)} — sihirli yüzük`
    : s.run
      ? `↓↘→+${P} ya da ${k(`dash`)} — koşu çarpması`
      : s.roll
        ? `${k(`flip`)}+yön takla · ${k(`sweep`)} süpürme`
        : null;
  return [
    `${k(`left`)}/${k(`right`)} hareket · ${k(`jump`)} zıpla · ${k(`down`)} eğil`,
    `${k(`atk0`)} yumruk · ${k(`atk1`)} tekme · ${AF_pair(k(`atk2`), k(`atk3`))} güçlü`,
    `${k(`guard`)} — koruma (basılı tut)`,
    ozel,
    `↓↘→↓↘→+${P} ya da ${k(`ult`)} — ${s.ultName}`,
  ].filter(Boolean);
}

function AF_scaleHit(n) {
  const m = AF_S.dmg;
  return m === 1 ? n : { ...n, damage: Math.max(1, Math.round(n.damage * m)) };
}

function AF_final(g) {
  return g.need > 1 && g.wins[0] === g.need - 1 && g.wins[1] === g.need - 1;
}

function AF_roundText(g) {
  return AF_final(g) ? `SON RAUNT!` : `RAUNT ${g.round}`;
}
