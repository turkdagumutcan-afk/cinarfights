// 12-game-sprite-cache-menu.js — Karakter sprite önbelleği ve ana menü seçenekleri.
// Dosya sırası = çalışma sırası (tools/build.mjs sıralı birleştirir).

var AF_sprC = {},
  AF_bgC = null;

function AF_loadChar(e, t) {
  let n = e + (t ? `#m` : ``);
  return (AF_sprC[n] ||= Cg(
    AF_char(e).id,
    AF_char(e).scale,
    AF_char(e).color,
    t,
    !!AF_char(e).same,
  ));
}

function Eg(e, t) {
  return Dg(e, t);
}

// Ulti / mermi görselleri (assets/fx). Yüklenemezse eski kodla çizilen hâli kullanılır.
var AF_FX = {},
  AF_FX_LIST = [
    `ahmet_motor`,
    `sudem_araba`,
    `sudem_yuzuk`,
    `metehan_nota0`,
    `metehan_nota1`,
    `metehan_nota2`,
    `metehan_nota3`,
    `umut_foto0`,
    `umut_foto1`,
    `umut_foto2`,
  ],
  AF_fxP = null;

function AF_loadFx() {
  return (AF_fxP ||= Promise.all(
    AF_FX_LIST.map((k) =>
      bg(`/assets/fx/${k}.png`)
        .then((im) => (AF_FX[k] = im))
        .catch(() => null),
    ),
  ));
}

async function Dg(e = `umut`, t = `sudem`) {
  AF_bgC ||= bg(vg).catch(() => null);
  let [n, r, i] = await Promise.all([AF_loadChar(e, !1), AF_loadChar(t, e === t), AF_bgC, AF_loadFx()]);
  return { p1: n, p2: r, bg: i ?? wg() };
}

var Og = [
  { id: `bot`, label: `1VSBOT`, hint: `Karakterini ve rakip botu kendin seç` },
  { id: `2p`, label: `1VS1`, hint: `Tek klavyede arkadaşınla kapış` },
  { id: `settings`, label: `AYARLAR`, hint: `Ses, raunt, hasar ve kontrolleri düzenle` },
  { id: `quit`, label: `ÇIKIŞ`, hint: `Oyunu kapat ve masaüstüne dön` },
];
