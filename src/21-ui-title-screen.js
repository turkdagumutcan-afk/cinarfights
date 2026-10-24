// 21-ui-title-screen.js — Açılış ("başlamak için bir tuşa bas") + ana menü (React bileşeni).
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).
// Arka plan assets/ui/menu_bg (8 kişilik grup, sağ taraf boş gökyüzü). Butonlar JoJo ASB
// "Mode Select" düzeninde: düz renkli eğik şeritler, beyaz çerçeve, sert gölge (neon/parlama yok).

// Açılış ekranı oturumda bir kez gösterilir; seçim ekranından ESC ile dönünce doğrudan menü açılır.
var AF_TITLE_SEEN = !1;
var AF_MENU_RENK = { bot: `#1f45b0`, "2p": `#d81e4f`, training: `#d9601a`, settings: `#5b34a8`, quit: `#5d626c` };

function kg() {
  let e = wn(),
    [t, n] = (0, N.useState)(0),
    [afOpen, setAfOpen] = (0, N.useState)(!1),
    [bye, setBye] = (0, N.useState)(!1),
    [acik, setAcik] = (0, N.useState)(AF_TITLE_SEEN),
    [, afV] = (0, N.useState)(0),
    r = (0, N.useRef)(0),
    acikR = (0, N.useRef)(acik);
  r.current = t;
  acikR.current = acik;
  const ac = (0, N.useCallback)(() => {
    AF_TITLE_SEEN = !0;
    X.ensure();
    X.uiClick();
    setAcik(!0);
  }, []);
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
  (0, N.useEffect)(() => {
    let h = (k) => {
      if (afOpen) return;
      // açılış: herhangi bir tuş menüyü açar (o tuş menüde bir şey seçmez)
      if (!acikR.current) {
        if ([`Tab`, `F5`, `F11`, `F12`].includes(k.code) || k.ctrlKey || k.altKey || k.metaKey) return;
        k.preventDefault();
        ac();
        return;
      }
      [`ArrowUp`, `KeyW`].includes(k.code)
        ? (k.preventDefault(), X.ensure(), X.uiClick(), n((e) => (e + Og.length - 1) % Og.length))
        : [`ArrowDown`, `KeyS`].includes(k.code)
          ? (k.preventDefault(), X.ensure(), X.uiClick(), n((e) => (e + 1) % Og.length))
          : k.code === `Enter` || k.code === `Space` || k.code === `KeyZ`
            ? (k.preventDefault(), a(Og[r.current].id))
            : k.code === `Escape`
              ? (k.preventDefault(), (AF_TITLE_SEEN = !1), setAcik(!1))
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
    window.addEventListener(`keydown`, h);
    return () => window.removeEventListener(`keydown`, h);
  }, [a, afOpen, ac]);
  const pct = (v) => `${v}%`,
    golge = `drop-shadow(5px 6px 0 rgba(12,8,20,.75))`;
  return (0, P.jsxs)(`div`, {
    "data-testid": `title-screen`,
    className: `flex h-svh items-center justify-center overflow-hidden bg-[#06070f] text-white`,
    onClick: () => acikR.current || ac(),
    children: [
      afOpen &&
        (0, P.jsx)(AF_Settings, {
          onClose: () => {
            (setAfOpen(!1), afV((v) => v + 1));
          },
        }),
      (0, P.jsxs)(`div`, {
        style: { position: `relative`, width: `min(100vw, calc(100svh * 1.7917))`, aspectRatio: `1376 / 768`, overflow: `hidden` },
        children: [
          (0, P.jsx)(`img`, {
            src: gg(`/assets/ui/menu_bg.png`),
            alt: ``,
            draggable: !1,
            style: {
              position: `absolute`,
              inset: 0,
              width: `100%`,
              height: `100%`,
              objectFit: `cover`,
              transform: acik ? `scale(1.03) translateX(-1%)` : `scale(1)`,
              transition: `transform 1.1s cubic-bezier(.2,.8,.2,1)`,
            },
          }),
          // sağdaki gökyüzünü butonlar için hafifçe karart
          (0, P.jsx)(`div`, {
            style: {
              position: `absolute`,
              inset: 0,
              pointerEvents: `none`,
              opacity: acik ? 1 : 0.35,
              transition: `opacity .8s`,
              background: `linear-gradient(to left, rgba(16,8,26,.55) 0%, rgba(16,8,26,.25) 28%, rgba(16,8,26,0) 42%)`,
            },
          }),
          !acik &&
            (0, P.jsx)(`p`, {
              "data-testid": `title-press`,
              className: `anim-blink font-display font-black italic`,
              style: {
                position: `absolute`,
                left: pct(66),
                right: pct(1),
                bottom: pct(17),
                textAlign: `center`,
                whiteSpace: `nowrap`,
                fontSize: `min(1.9vw, 3.4vh)`,
                letterSpacing: `.06em`,
                textShadow: `3px 3px 0 #1a0d24, 0 0 14px rgba(0,0,0,.6)`,
              },
              children: `BAŞLAMAK İÇİN BİR TUŞA BAS`,
            }),
          (0, P.jsx)(`div`, {
            role: `menu`,
            style: { position: `absolute`, right: pct(2.5), top: pct(27), width: pct(23), pointerEvents: acik ? `auto` : `none` },
            children: Og.map((o, idx) => {
              const sel = t === idx,
                renk = AF_MENU_RENK[o.id] || `#5d626c`;
              return (0, P.jsx)(
                `div`,
                {
                  // gölge clip-path'li çocukta kesilmesin diye kapsayıcıda
                  style: {
                    position: `relative`,
                    filter: golge,
                    marginBottom: `3.2%`,
                    transform: acik ? `translateX(${sel ? -7 : -idx * 1.5}%) scale(${sel ? 1.06 : 1})` : `translateX(130%)`,
                    transition: `transform .45s cubic-bezier(.2,.9,.25,1.12) ${acik ? idx * 60 : 0}ms`,
                  },
                  children: [
                    sel &&
                      (0, P.jsx)(
                        `span`,
                        {
                          style: {
                            position: `absolute`,
                            left: `-7%`,
                            top: `50%`,
                            transform: `translateY(-50%)`,
                            borderLeft: `min(1.6vw, 2.9vh) solid #f4efe6`,
                            borderTop: `min(1vw, 1.8vh) solid transparent`,
                            borderBottom: `min(1vw, 1.8vh) solid transparent`,
                          },
                        },
                        `ok`,
                      ),
                    (0, P.jsxs)(`button`, {
                    type: `button`,
                    role: `menuitem`,
                    "data-testid": `title-mode-${o.id}-button`,
                    tabIndex: acik ? 0 : -1,
                    onMouseEnter: () => n(idx),
                    onClick: (ev) => (ev.stopPropagation(), a(o.id)),
                    style: {
                      position: `relative`,
                      display: `block`,
                      width: `100%`,
                      aspectRatio: `5.6 / 1`,
                      border: 0,
                      padding: 0,
                      cursor: `pointer`,
                      background: `#f4efe6`,
                      clipPath: `polygon(7% 0, 100% 0, 93% 100%, 0 100%)`,
                    },
                    children: [
                      (0, P.jsx)(`span`, {
                        style: {
                          position: `absolute`,
                          inset: `5%`,
                          background: sel ? `#f4efe6` : renk,
                          clipPath: `polygon(6.8% 0, 100% 0, 93.2% 100%, 0 100%)`,
                        },
                      }),
                      (0, P.jsx)(`span`, {
                        className: `font-display font-black italic`,
                        style: {
                          position: `absolute`,
                          inset: 0,
                          display: `flex`,
                          alignItems: `center`,
                          justifyContent: `center`,
                          fontSize: `min(2vw, 3.6vh)`,
                          letterSpacing: `.03em`,
                          color: sel ? `#141020` : `#fff`,
                          textShadow: sel ? `none` : `2px 2px 0 rgba(0,0,0,.45)`,
                        },
                        children: o.label.replace(`VS`, ` VS `).replace(/\s+/g, ` `).trim(),
                      }),
                    ],
                  }, `b`),
                  ],
                },
                o.id,
              );
            }),
          }),
          // alt bilgi şeridi
          (0, P.jsxs)(`div`, {
            className: `font-display`,
            style: {
              position: `absolute`,
              left: 0,
              right: 0,
              bottom: 0,
              height: pct(6.5),
              display: `flex`,
              alignItems: `center`,
              justifyContent: `space-between`,
              padding: `0 2.4%`,
              background: `rgba(14,12,24,.9)`,
              fontSize: `min(1.4vw, 2.5vh)`,
              transform: acik ? `none` : `translateY(100%)`,
              transition: `transform .5s .2s`,
            },
            children: [
              (0, P.jsx)(`span`, {}),
              (0, P.jsx)(`span`, { style: { letterSpacing: `.08em`, color: `#e8e2d6` }, children: `▲▼ SEÇ   ·   ENTER ONAYLA   ·   ESC GERİ` }),
            ],
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
  });
}
