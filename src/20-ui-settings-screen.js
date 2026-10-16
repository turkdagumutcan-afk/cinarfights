// 20-ui-settings-screen.js — AYARLAR ekranı (React bileşeni).
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

function AF_Settings({ onClose, inGame }) {
  const [, bump] = (0, N.useState)(0),
    [tab, setTab] = (0, N.useState)(0),
    [cap, setCap] = (0, N.useState)(null);
  const up = () => bump((v) => v + 1);
  (0, N.useEffect)(() => {
    AF_modal++;
    return () => {
      AF_modal--;
    };
  }, []);
  (0, N.useEffect)(() => {
    const h = (e) => {
      if (e.code === `Tab`) return;
      e.stopImmediatePropagation();
      if (cap) {
        e.preventDefault();
        if (e.code === `Escape`) {
          setCap(null);
          return;
        }
        if (AF_BAD.has(e.code) || e.repeat) return;
        AF_rebind(cap.p, cap.a, e.code);
        setCap(null);
        up();
        X.uiClick();
        return;
      }
      if (e.code === `Escape`) {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener(`keydown`, h, !0);
    return () => window.removeEventListener(`keydown`, h, !0);
  }, [cap, onClose]);
  const C = { bg: `#121124`, line: `#272744`, cy: `#00f0ff`, pk: `#ff2a5f`, mut: `#8b92b8` };
  const btn = (on, label, fn, key, col) =>
    (0, P.jsx)(
      `button`,
      {
        type: `button`,
        onClick: () => {
          X.ensure();
          X.uiClick();
          fn();
        },
        style: {
          padding: `6px 12px`,
          minWidth: 46,
          borderRadius: 6,
          border: `2px solid ${on ? col || C.cy : C.line}`,
          background: on ? `rgba(0,240,255,.16)` : `rgba(0,0,0,.35)`,
          color: on ? `#fff` : C.mut,
          fontWeight: 800,
          fontSize: 13,
          cursor: `pointer`,
          fontFamily: `inherit`,
          letterSpacing: `.04em`,
        },
        children: label,
      },
      key,
    );
  const row = (label, ctl, note) =>
    (0, P.jsxs)(
      `div`,
      {
        style: {
          display: `flex`,
          alignItems: `center`,
          justifyContent: `space-between`,
          gap: 12,
          padding: `10px 0`,
          borderBottom: `1px solid ${C.line}`,
          flexWrap: `wrap`,
        },
        children: [
          (0, P.jsxs)(`div`, {
            style: { minWidth: 160 },
            children: [
              (0, P.jsx)(`div`, {
                style: { color: `#fff`, fontWeight: 700, fontSize: 14 },
                children: label,
              }),
              note &&
                (0, P.jsx)(`div`, {
                  style: { color: C.mut, fontSize: 11, marginTop: 2 },
                  children: note,
                }),
            ],
          }),
          (0, P.jsx)(`div`, {
            style: { display: `flex`, gap: 6, flexWrap: `wrap` },
            children: ctl,
          }),
        ],
      },
      label,
    );
  const onoff = (k, label, note) =>
    row(
      label,
      [
        btn(
          AF_S[k],
          `AÇIK`,
          () => {
            AF_set(k, !0);
            up();
          },
          `a`,
        ),
        btn(
          !AF_S[k],
          `KAPALI`,
          () => {
            AF_set(k, !1);
            up();
          },
          `b`,
          C.pk,
        ),
      ],
      note,
    );
  const pick = (k, label, vals, fmt, note) =>
    row(
      label,
      vals.map((v) =>
        btn(
          AF_S[k] === v,
          fmt(v),
          () => {
            AF_set(k, v);
            up();
          },
          String(v),
        ),
      ),
      note,
    );
  const NEW = inGame ? `Yeni maçta geçerli` : void 0;
  const tabs = [`SES`, `OYUN`, `GÖRÜNTÜ`, `KONTROLLER`];
  let body;
  if (tab === 0)
    body = [
      row(
        `Ses seviyesi`,
        [
          (0, P.jsx)(`input`, {
            key: `v`,
            type: `range`,
            min: 0,
            max: 100,
            step: 5,
            value: AF_S.vol,
            onChange: (e) => {
              AF_set(`vol`, +e.target.value);
              up();
            },
            onPointerUp: () => {
              X.ensure();
              X.hitLight();
            },
            "data-testid": `settings-volume`,
            style: { width: 200, accentColor: C.cy },
          }),
          (0, P.jsxs)(`span`, {
            key: `n`,
            style: { color: `#fff`, fontWeight: 800, minWidth: 46, textAlign: `right` },
            children: [`%${AF_S.vol}`],
          }),
        ],
        `Efekt sesleri (müzik yok)`,
      ),
      row(`Sessize al`, [
        btn(
          AF_S.vol === 0,
          `SESSİZ`,
          () => {
            AF_set(`vol`, 0);
            up();
          },
          `m`,
          C.pk,
        ),
        btn(
          AF_S.vol > 0,
          `SESLİ`,
          () => {
            AF_set(`vol`, AF_S.vol || 100);
            up();
          },
          `u`,
        ),
      ]),
    ];
  else if (tab === 1)
    body = [
      pick(
        `rounds`,
        `Raunt sayısı`,
        AF_OPT.rounds,
        (v) => `${v}`,
        (NEW ? NEW + ` · ` : ``) + `Kazanmak için ${(AF_S.rounds + 1) >> 1} raunt gerekir`,
      ),
      pick(
        `time`,
        `Raunt süresi`,
        AF_OPT.time,
        (v) => (v ? `${v} sn` : `∞`),
        NEW || `∞ = süre sınırı yok`,
      ),
      pick(`dmg`, `Hasar çarpanı`, AF_OPT.dmg, (v) => `×${v}`, `Vuruşların verdiği hasar`),
      onoff(`guard`, `Koruma (guard)`, `Kapatılırsa kimse koruma yapamaz`),
      onoff(`ult`, `Ulti (özel saldırı)`, `Kapatılırsa ulti barı dolmaz`),
    ];
  else if (tab === 2)
    body = [
      onoff(`shake`, `Ekran sarsıntısı`),
      onoff(`dmgnum`, `Hasar sayıları`, `Vuruşta uçan rakamlar`),
      onoff(`scan`, `Tarama çizgileri (CRT)`, `Retro ekran efekti`),
      onoff(`hints`, `Kontrol ipuçları`, `Savaş ekranının altındaki tuş çubuğu`),
      onoff(`boxes`, `Hitbox görünümü`, `F2 ile de açılıp kapanır`),
    ];
  else {
    const A = [
      [`left`, `Sol`],
      [`right`, `Sağ`],
      [`jump`, `Zıpla`],
      [`down`, `Eğil`],
      [`atk0`, `Yumruk`],
      [`atk1`, `Tekme`],
      [`atk2`, `Güçlü yumruk`],
      [`atk3`, `Ağır tekme`],
      [`guard`, `Koruma`],
      [`ult`, `Ulti`],
      [`proj`, `Sihirli Yüzük (SUDEM)`],
      [`sweep`, `Süpürme Tekme (şimdilik kapalı)`],
      [`dash`, `Koşu Çarpması (METEHAN)`],
      [`flip`, `Hava taklası (şimdilik kapalı)`],
    ];
    const col = (p, title, color) =>
      (0, P.jsxs)(`div`, {
        style: { flex: `1 1 260px`, minWidth: 240 },
        children: [
          (0, P.jsx)(`div`, {
            style: {
              color,
              fontWeight: 800,
              letterSpacing: `.12em`,
              fontSize: 12,
              marginBottom: 6,
            },
            children: title,
          }),
          A.map(([a, lab]) => {
            const on = cap && cap.p === p && cap.a === a;
            return (0, P.jsxs)(
              `div`,
              {
                style: {
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `space-between`,
                  gap: 8,
                  padding: `4px 0`,
                },
                children: [
                  (0, P.jsx)(`span`, { style: { color: `#fff`, fontSize: 13 }, children: lab }),
                  (0, P.jsx)(`button`, {
                    type: `button`,
                    "data-testid": `bind-${p}-${a}`,
                    onClick: () => {
                      X.ensure();
                      X.uiClick();
                      setCap(on ? null : { p, a });
                    },
                    style: {
                      minWidth: 128,
                      padding: `5px 10px`,
                      borderRadius: 6,
                      border: `2px solid ${on ? `#ffd700` : C.line}`,
                      background: on ? `rgba(255,215,0,.14)` : `rgba(0,0,0,.4)`,
                      color: on ? `#ffd700` : `#e8eaff`,
                      fontWeight: 800,
                      fontSize: 12,
                      cursor: `pointer`,
                      fontFamily: `inherit`,
                    },
                    children: on ? `TUŞA BAS…` : AF_S.keys[p][a].map((c) => AF_kl(c)).join(` / `),
                  }),
                ],
              },
              a,
            );
          }),
        ],
      });
    body = [
      (0, P.jsxs)(`div`, {
        key: `k`,
        style: { display: `flex`, gap: 24, flexWrap: `wrap`, paddingTop: 8 },
        children: [col(`p1`, `OYUNCU 1`, C.pk), col(`p2`, `OYUNCU 2`, C.cy)],
      }),
      (0, P.jsx)(`p`, {
        key: `n`,
        style: { color: C.mut, fontSize: 11, marginTop: 12, lineHeight: 1.5 },
        children: `Bir tuşa tıkla, sonra yeni tuşa bas. Başka bir eyleme ait tuşu seçersen iki eylemin tuşu yer değiştirir. ESC iptal eder. Menü tuşları (Enter, ESC, P, F2, seçim ekranındaki Z / Num 1) sabittir.`,
      }),
      (0, P.jsx)(`div`, {
        key: `r`,
        style: { marginTop: 10 },
        children: btn(
          !1,
          `TUŞLARI VARSAYILANA DÖNDÜR`,
          () => {
            const k = AF_clone(AF_DEFKEYS);
            AF_S.keys = k;
            AF_save();
            AF_apply(`keys`);
            setCap(null);
            up();
          },
          `rk`,
        ),
      }),
    ];
  }
  return (0, P.jsx)(`div`, {
    "data-testid": `settings-modal`,
    style: {
      position: `fixed`,
      inset: 0,
      zIndex: 80,
      background: `rgba(0,0,0,.82)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      padding: 12,
    },
    onClick: (e) => {
      e.target === e.currentTarget && onClose();
    },
    children: (0, P.jsxs)(`div`, {
      className: `font-monox`,
      style: {
        width: `min(760px,100%)`,
        maxHeight: `92vh`,
        overflow: `auto`,
        background: `rgba(18,17,36,.98)`,
        border: `1px solid ${C.cy}88`,
        borderRadius: 14,
        boxShadow: `0 0 40px rgba(0,240,255,.25)`,
        padding: `20px 22px`,
      },
      children: [
        (0, P.jsx)(`h2`, {
          className: `font-display`,
          style: {
            margin: 0,
            color: `#fff`,
            fontSize: 30,
            fontWeight: 900,
            letterSpacing: `.14em`,
            textAlign: `center`,
          },
          children: `AYARLAR`,
        }),
        (0, P.jsx)(`div`, {
          style: {
            display: `flex`,
            gap: 6,
            justifyContent: `center`,
            margin: `14px 0 6px`,
            flexWrap: `wrap`,
          },
          children: tabs.map((t, i) =>
            (0, P.jsx)(
              `button`,
              {
                type: `button`,
                "data-testid": `settings-tab-${i}`,
                onClick: () => {
                  X.ensure();
                  X.uiClick();
                  setCap(null);
                  setTab(i);
                },
                style: {
                  padding: `7px 16px`,
                  borderRadius: 8,
                  border: `2px solid ${tab === i ? C.cy : C.line}`,
                  background: tab === i ? `rgba(0,240,255,.16)` : `transparent`,
                  color: tab === i ? `#fff` : C.mut,
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: `.1em`,
                  cursor: `pointer`,
                  fontFamily: `inherit`,
                },
                children: t,
              },
              t,
            ),
          ),
        }),
        (0, P.jsx)(`div`, { style: { minHeight: 250 }, children: body }),
        (0, P.jsxs)(`div`, {
          style: {
            display: `flex`,
            justifyContent: `space-between`,
            gap: 10,
            marginTop: 16,
            flexWrap: `wrap`,
          },
          children: [
            btn(
              !1,
              `HEPSİNİ SIFIRLA`,
              () => {
                AF_resetAll();
                setCap(null);
                up();
              },
              `rs`,
              C.pk,
            ),
            (0, P.jsx)(`button`, {
              type: `button`,
              "data-testid": `settings-close`,
              onClick: () => {
                X.uiClick();
                onClose();
              },
              style: {
                padding: `9px 28px`,
                borderRadius: 8,
                border: `2px solid ${C.cy}`,
                background: C.cy,
                color: `#06070f`,
                fontWeight: 900,
                fontSize: 14,
                letterSpacing: `.12em`,
                cursor: `pointer`,
                fontFamily: `inherit`,
              },
              children: `KAPAT`,
            }),
          ],
        }),
        (0, P.jsx)(`p`, {
          style: { textAlign: `center`, color: C.mut, fontSize: 10, marginTop: 10 },
          children: `Ayarlar bu tarayıcıda otomatik kaydedilir`,
        }),
      ],
    }),
  });
}
