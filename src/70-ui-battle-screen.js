// 70-ui-battle-screen.js — Dövüş ekranı (canvas + React bileşeni) ve uygulama kökü bileşeni.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

function Zy(e, t, n) {
  return (0, P.jsxs)(
    `div`,
    {
      className: `font-monox grid grid-cols-3 items-center gap-2 text-[11px]`,
      children: [
        (0, P.jsx)(`span`, { className: `text-right font-bold text-[#ff2a5f]`, children: t }),
        (0, P.jsx)(`span`, {
          className: `text-center tracking-widest text-slate-500`,
          children: e,
        }),
        (0, P.jsx)(`span`, { className: `text-left font-bold text-cyan-300`, children: n }),
      ],
    },
    e,
  );
}

function Qy() {
  let e = (0, N.useRef)(null),
    t = (0, N.useRef)(null),
    [n, r] = (0, N.useState)(!1),
    [i, a] = (0, N.useState)(!1),
    [o, s] = (0, N.useState)(null),
    [afSet, setAfSet] = (0, N.useState)(!1),
    [, afBump] = (0, N.useState)(0),
    c = wn(),
    [l] = Zr(),
    u = l.get(`mode`) === `bot`,
    af1 = AF_char(l.get(`p1`) || `umut`),
    af2 = AF_char(l.get(`p2`) || `sudem`),
    afd = [`easy`, `normal`, `hard`].includes(l.get(`diff`)) ? l.get(`diff`) : `normal`,
    d = `?mode=${u ? `bot` : `2p`}&p1=${af1.id}&p2=${af2.id}&diff=${afd}`;
  (0, N.useEffect)(() => {
    let n = e.current;
    if (!n) return;
    let i = !1,
      o = null;
    return (
      Eg(af1.id, af2.id).then((e) => {
        i ||
          ((o = new Xy(
            n,
            e,
            {
              onPauseChange: a,
              onMatchEnd: (e) => s(e),
              onUltiReady: (e) =>
                wi(
                  e === 0
                    ? `${af1.name} · ULTİ HAZIR! (${AF_k(0, `ult`)})`
                    : u
                      ? `${af2.name} (BOT) · ULTİ HAZIR!`
                      : `${af2.name} · ULTİ HAZIR! (${AF_k(1, `ult`)})`,
                  { description: `Özel atak hazır — kullan veya kaybet!` },
                ),
            },
            { vsBot: u, diff: afd, chars: [af1, af2] },
          )),
          (t.current = o),
          o.start(),
          r(!0));
      }),
      () => {
        ((i = !0), o?.dispose(), (t.current = null));
      }
    );
  }, [u, af1, af2, afd]);
  let f = () => {
      (X.uiClick(), t.current?.setPaused(!1));
    },
    p = () => {
      (X.uiClick(), s(null), t.current?.restart());
    },
    m = (e) => {
      (X.uiClick(), c(e));
    };
  return (0, P.jsxs)(`div`, {
    "data-testid": `battle-screen`,
    className: `scanlines relative flex min-h-svh flex-col bg-[#06070f]`,
    children: [
      (0, P.jsx)(`div`, {
        className: `flex flex-1 items-center justify-center p-2`,
        children: (0, P.jsx)(`canvas`, {
          ref: e,
          width: 1376,
          height: 768,
          "data-testid": `battle-canvas`,
          className: `h-auto max-h-[calc(100svh-56px)] w-full max-w-[1376px] border border-[#272744] bg-black`,
          style: { aspectRatio: `1376 / 768` },
        }),
      }),
      AF_S.hints &&
        (0, P.jsxs)(`footer`, {
          className: `font-monox flex flex-wrap items-center justify-center gap-x-6 gap-y-1 px-3 pb-2 text-[10px] tracking-wider text-slate-500`,
          children: [
            (0, P.jsxs)(`span`, {
              children: [
                (0, P.jsx)(`b`, { className: `text-[#ff2a5f]`, children: `P1` }),
                AF_footer(0),
              ],
            }),
            (0, P.jsx)(`span`, {
              children: u
                ? (0, P.jsxs)(P.Fragment, {
                    children: [
                      (0, P.jsx)(`b`, { className: `text-cyan-300`, children: `P2` }),
                      ` BOT (YAPAY ZEKA)`,
                    ],
                  })
                : (0, P.jsxs)(P.Fragment, {
                    children: [
                      (0, P.jsx)(`b`, { className: `text-cyan-300`, children: `P2` }),
                      AF_footer(1),
                    ],
                  }),
            }),
            (0, P.jsx)(`span`, { children: `ESC / P — DURAKLAT · F2 — HITBOX` }),
          ],
        }),
      afSet &&
        (0, P.jsx)(AF_Settings, {
          inGame: !0,
          onClose: () => {
            setAfSet(!1);
            afBump((v) => v + 1);
          },
        }),
      i &&
        !o &&
        (0, P.jsx)(`div`, {
          "data-testid": `pause-overlay`,
          className: `absolute inset-0 z-20 flex items-center justify-center bg-black/70 backdrop-blur-sm`,
          children: (0, P.jsxs)(`div`, {
            className: `w-[320px] rounded-xl border border-cyan-400/50 bg-[#121124]/95 p-6 text-center shadow-[0_0_40px_rgba(0,240,255,0.25)]`,
            children: [
              (0, P.jsx)(`h2`, {
                className: `font-display text-3xl font-black tracking-widest text-white`,
                children: `DURDURULDU`,
              }),
              (0, P.jsxs)(`div`, {
                className: `mt-5 flex flex-col gap-2.5`,
                children: [
                  (0, P.jsx)(uy, {
                    "data-testid": `pause-resume-button`,
                    onClick: f,
                    children: `DEVAM ET`,
                  }),
                  (0, P.jsx)(uy, {
                    "data-testid": `pause-settings-button`,
                    variant: `outline`,
                    onClick: () => {
                      (X.uiClick(), setAfSet(!0));
                    },
                    children: `AYARLAR`,
                  }),
                  (0, P.jsx)(uy, {
                    "data-testid": `pause-restart-button`,
                    variant: `outline`,
                    onClick: p,
                    children: `YENİDEN BAŞLAT`,
                  }),
                  (0, P.jsx)(uy, {
                    "data-testid": `pause-select-button`,
                    variant: `outline`,
                    onClick: () => m(`/select${d}`),
                    children: `KARAKTER SEÇİMİ`,
                  }),
                  (0, P.jsx)(uy, {
                    "data-testid": `pause-title-button`,
                    variant: `outline`,
                    onClick: () => m(`/`),
                    children: `ANA MENÜ`,
                  }),
                ],
              }),
            ],
          }),
        }),
      o &&
        (0, P.jsx)(`div`, {
          "data-testid": `result-overlay`,
          className: `absolute inset-0 z-20 flex items-center justify-center bg-black/75 backdrop-blur-sm`,
          children: (0, P.jsxs)(`div`, {
            className: `w-[440px] rounded-xl border bg-[#121124]/95 p-7 text-center`,
            style: {
              borderColor: o.winner === 2 ? af2.color : af1.color,
              boxShadow: `0 0 46px ${o.winner === 2 ? `rgba(0,240,255,0.3)` : `rgba(255,42,95,0.3)`}`,
            },
            children: [
              (0, P.jsx)(`p`, {
                className: `font-monox text-xs tracking-[0.4em] text-slate-400`,
                children: o.reason === `ko` ? `NAKAVT` : `SÜRE DOLDU`,
              }),
              (0, P.jsx)(`h2`, {
                "data-testid": `result-title`,
                className: `font-display mt-2 text-4xl font-black text-white`,
                children:
                  o.winner === 0 ? `BERABERE!` : o.winner === 1 ? `P1 KAZANDI!` : `P2 KAZANDI!`,
              }),
              (0, P.jsx)(`p`, {
                className: `font-monox mt-1 text-sm`,
                style: { color: o.winner === 2 ? af2.color : af1.color },
                children: o.winner === 1 ? af1.name : o.winner === 2 ? af2.name : `KAZANAN YOK`,
              }),
              (0, P.jsxs)(`div`, {
                className: `mt-5 space-y-1.5`,
                children: [
                  Zy(`RAUNT`, o.rounds ? o.rounds[0] : `-`, o.rounds ? o.rounds[1] : `-`),
                  Zy(`HASAR`, o.p1.damageDealt, o.p2.damageDealt),
                  Zy(`EN İYİ KOMBO`, `${o.p1.maxCombo}×`, `${o.p2.maxCombo}×`),
                  Zy(`KALAN CAN`, o.p1.hpLeft, o.p2.hpLeft),
                ],
              }),
              (0, P.jsxs)(`div`, {
                className: `mt-6 flex flex-col gap-2.5`,
                children: [
                  (0, P.jsx)(uy, {
                    "data-testid": `result-replay-button`,
                    onClick: p,
                    children: `TEKRAR OYNA`,
                  }),
                  (0, P.jsx)(uy, {
                    "data-testid": `result-select-button`,
                    variant: `outline`,
                    onClick: () => m(`/select${d}`),
                    children: `KARAKTER SEÇİMİ`,
                  }),
                  (0, P.jsx)(uy, {
                    "data-testid": `result-title-button`,
                    variant: `outline`,
                    onClick: () => m(`/`),
                    children: `ANA MENÜ`,
                  }),
                ],
              }),
            ],
          }),
        }),
      !n &&
        (0, P.jsx)(`div`, {
          className: `absolute inset-0 z-10 flex items-center justify-center bg-black`,
          children: (0, P.jsx)(`p`, {
            className: `font-monox animate-pulse text-sm tracking-[0.4em] text-cyan-300`,
            children: `YÜKLENİYOR...`,
          }),
        }),
    ],
  });
}

function $y() {
  return (0, P.jsxs)(P.Fragment, {
    children: [
      (0, P.jsxs)(Qn, {
        children: [
          (0, P.jsx)(Xn, { path: `/`, element: (0, P.jsx)(kg, {}) }),
          (0, P.jsx)(Xn, { path: `/select`, element: (0, P.jsx)(gy, {}) }),
          (0, P.jsx)(Xn, { path: `/battle`, element: (0, P.jsx)(Qy, {}) }),
          (0, P.jsx)(Xn, { path: `*`, element: (0, P.jsx)(Yn, { to: `/`, replace: !0 }) }),
        ],
      }),
      (0, P.jsx)(Aa, {}),
    ],
  });
}
