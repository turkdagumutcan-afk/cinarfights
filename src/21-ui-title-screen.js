// 21-ui-title-screen.js — Başlık ekranı (React bileşeni).
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

function kg() {
  let e = wn(),
    [t, n] = (0, N.useState)(0),
    [afOpen, setAfOpen] = (0, N.useState)(!1),
    [bye, setBye] = (0, N.useState)(!1),
    [, afV] = (0, N.useState)(0),
    r = (0, N.useRef)(0);
  r.current = t;
  let i = (0, N.useRef)(!1),
    a = (0, N.useCallback)(
      (t) => {
        if (t === `settings`) {
          (X.ensure(), X.uiClick(), setAfOpen(!0));
          return;
        }
        if (t === `quit`) {
          (X.ensure(),
            X.uiClick(),
            setBye(!0),
            window.setTimeout(() => {
              try {
                window.close();
              } catch {}
            }, 80));
          return;
        }
        i.current ||
          ((i.current = !0),
          X.ensure(),
          X.uiClick(),
          window.setTimeout(() => e(`/select?mode=${t}`), 220));
      },
      [e],
    );
  return (
    (0, N.useEffect)(() => {
      let h = (k) => {
        if (afOpen) return;
        [`ArrowUp`, `KeyW`].includes(k.code)
          ? (k.preventDefault(), X.ensure(), X.uiClick(), n((e) => (e + Og.length - 1) % Og.length))
          : [`ArrowDown`, `KeyS`].includes(k.code)
            ? (k.preventDefault(), X.ensure(), X.uiClick(), n((e) => (e + 1) % Og.length))
            : k.code === `Enter` || k.code === `Space`
              ? (k.preventDefault(), a(Og[r.current].id))
              : k.code === `Digit1` || k.code === `Numpad1`
                ? a(`bot`)
                : k.code === `Digit2` || k.code === `Numpad2`
                  ? a(`2p`)
                  : k.code === `Digit3` || k.code === `Numpad3`
                    ? a(`training`)
                    : k.code === `Digit4` || k.code === `Numpad4`
                      ? a(`settings`)
                      : (k.code === `Digit5` || k.code === `Numpad5`) && a(`quit`);
      };
      return (
        window.addEventListener(`keydown`, h),
        () => window.removeEventListener(`keydown`, h)
      );
    }, [a, afOpen]),
    (0, P.jsxs)(`div`, {
      "data-testid": `title-screen`,
      className: `scanlines relative flex min-h-svh flex-col items-center justify-center overflow-hidden bg-[#06070f]`,
      children: [
        afOpen &&
          (0, P.jsx)(AF_Settings, {
            onClose: () => {
              (setAfOpen(!1), afV((v) => v + 1));
            },
          }),
        (0, P.jsx)(`img`, {
          src: gg(`/assets/title_bg.png`),
          alt: ``,
          onError: (e) => (e.currentTarget.style.display = `none`),
          style: {
            position: `absolute`,
            inset: 0,
            width: `100%`,
            height: `100%`,
            objectFit: `cover`,
            pointerEvents: `none`,
          },
        }),
        (0, P.jsx)(`div`, {
          style: {
            position: `absolute`,
            inset: 0,
            pointerEvents: `none`,
            background: `radial-gradient(ellipse at 50% 40%, rgba(4,6,15,.28), rgba(4,6,15,.86))`,
          },
        }),
        (0, P.jsxs)(Qh.div, {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: `relative z-10 flex flex-col items-center px-6 text-center`,
          children: [
            (0, P.jsx)(`h1`, {
              className: `anim-flicker neon-cyan font-display text-6xl font-black leading-none tracking-tight text-white sm:text-8xl`,
              children: `ÇINAR`,
            }),
            (0, P.jsx)(`h1`, {
              className: `anim-flicker neon-red font-display -mt-2 text-6xl font-black italic leading-none tracking-tight text-white sm:text-8xl`,
              children: `FIGHTS`,
            }),
            (0, P.jsx)(`div`, {
              className: `mt-6 h-px w-64 bg-gradient-to-r from-transparent via-cyan-400 to-transparent`,
            }),
            (0, P.jsx)(`div`, {
              className: `mt-8 flex w-[360px] max-w-[88vw] flex-col gap-3`,
              role: `menu`,
              children: Og.map((o, idx) => {
                let sel = t === idx;
                return (0, P.jsxs)(
                  `button`,
                  {
                    type: `button`,
                    role: `menuitem`,
                    "data-testid": `title-mode-${o.id}-button`,
                    onMouseEnter: () => n(idx),
                    onClick: () => a(o.id),
                    className: `font-display group relative rounded-lg border-2 px-6 py-3.5 text-left text-xl font-black tracking-wider transition-[background-color,border-color,box-shadow,transform] duration-200 ${sel ? `scale-[1.03] border-cyan-300 bg-cyan-400/15 text-white shadow-[0_0_28px_rgba(0,240,255,0.45)]` : `border-[#272744] bg-black/55 text-slate-200 hover:text-white`}`,
                    children: [
                      (0, P.jsx)(`span`, {
                        className: `mr-2 inline-block transition-opacity duration-200 ${sel ? `anim-blink text-amber-300 opacity-100` : `opacity-0`}`,
                        children: `▶`,
                      }),
                      o.label,
                      (0, P.jsx)(`span`, {
                        className: `font-monox mt-0.5 block pl-6 text-[10px] font-normal tracking-widest text-slate-400`,
                        children: o.hint,
                      }),
                    ],
                  },
                  o.id,
                );
              }),
            }),
            (0, P.jsx)(`p`, {
              "data-testid": `title-cta`,
              className: `font-monox mt-5 text-[11px] tracking-[0.25em] text-amber-300/90`,
              children: `W/S veya ▲/▼ SEÇ · ENTER BAŞLA`,
            }),
          ],
        }),
        bye &&
          (0, P.jsx)(`div`, {
            onClick: () => setBye(!1),
            style: {
              position: `fixed`,
              inset: 0,
              zIndex: 60,
              background: `rgba(0,0,0,.9)`,
              display: `flex`,
              flexDirection: `column`,
              gap: 10,
              alignItems: `center`,
              justifyContent: `center`,
              padding: 24,
              textAlign: `center`,
              cursor: `pointer`,
            },
            className: `font-display text-2xl font-black text-white`,
            children: [
              (0, P.jsx)(`div`, { children: `GÖRÜŞÜRÜZ!` }, `a`),
              (0, P.jsx)(
                `div`,
                {
                  className: `font-monox text-sm font-normal text-slate-300`,
                  children: `Oyunu kapatmak için bu sekmeyi/pencereyi kapat · geri dönmek için tıkla`,
                },
                `b`,
              ),
            ],
          }),
      ],
    })
  );
}
