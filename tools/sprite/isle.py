"""Çınar Fights sprite işleyici.

Tasarım klasöründeki (karakter başına AHMET / METE / SUDEM / UMUT alt klasörü)
yeşil arka planlı görselleri şeffaf PNG karelere çevirir, şeritleri karelere böler,
karakter başına tek ölçekle boyutlandırır ve önizleme (şerit + GIF) üretir.
Projeye hiçbir şey yazmaz; çıktı: _onizleme/ (git yoksayar). Oyuna yazmak için: aktar.py
Kurulum: pip install pillow numpy
Ortam değişkenleri: KAYNAK (tasarım klasörü), CIKTI, HEDEF_BOY
"""
import json
import os
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFont

KAYNAK = Path(os.environ.get("KAYNAK", str(Path.home() / "Desktop" / "cınarfight tasarımlar")))
CIKTI = Path(os.environ.get("CIKTI", str(Path(__file__).resolve().parents[2] / "_onizleme")))
HEDEF_BOY = int(os.environ.get("HEDEF_BOY", "250"))  # idle boyu (px); oyuna aktarımda 560

# poz: (dosya adı kökü, tür, ayar)
#  tür: "tek" tek görsel | "serit" kareli şerit (n kare)
KARAKTERLER = {
    "ahmet": {
        "idle": ("ahmet istenilen sabit", "tek"),
        "crouch": ("ahmet eğilme", "tek"),
        "jump": ("ahmet zıplama", "tek"),
        "punch": ("ahmet yumruk şeridi", "serit", {"n": 5}),
        "kickstrip": ("ahmet istenilen bacak", "serit", {"n": 6, "izgara": True, "al": [0, 2, 3]}),
        "kickpeak": ("sol bacak istenilen", "tek"),
        "hurt": ("ahmet hurt", "tek"),
        "guard": ("ahmet koruma", "tek"),
        "guardlow": ("ahmet koruma eğilme", "tek"),
        "ult": ("ahmet ulti duruş", "tek"),
        "portre": ("ahmet portre", "tek", {"ayri": True}),
        "motor": ("ahmet motor", "tek", {"ayri": True}),
    },
    "mete": {
        "idle": ("mete duruş", "tek"),
        "crouch": ("mete eğilme", "tek"),
        "jump": ("mete zıplama", "tek"),
        "punch": ("mete yumruk seridi", "serit", {"n": 5}),
        "kick": ("mete tekme şeridi", "serit", {"n": 5}),
        "run": ("mete koşu döngüsü", "serit", {"n": 4, "boy": 0.80}),  # şeritte duruş karesi yok: öne eğik koşu ≈ %80 boy
        "hurt": ("mete hasar", "tek"),
        "guard": ("mete koruma", "tek"),
        "guardlow": ("mete koruma eğilme", "tek"),
        "ult": ("mete ulti", "tek"),
        "portre": ("mete portre", "tek", {"ayri": True}),
        "nota": ("mete notalar", "serit", {"n": 4, "ayri": True}),
    },
    "sudem": {
        "idle": ("sudem duruş", "tek"),
        "crouch": ("sudem eğilme", "tek"),
        "jump": ("sudem zıplama", "tek"),
        "punch": ("sudem yumruk şeridi", "serit", {"n": 5}),
        "kick": ("sudem tekme şeridi", "serit", {"n": 5}),
        "hurt": ("sudem hasar", "tek"),
        "guard": ("sudem koruma", "tek"),
        "guardlow": ("sudem koruma eğilme", "tek"),
        "cast": ("sudem yüzük", "tek"),
        "ult": ("sudem ulti", "tek"),
        "portre": ("sudem portre", "tek", {"ayri": True}),
        "araba": ("sudem araba", "tek", {"ayri": True}),
        "yuzuk": ("sudem yüzük mermi", "tek", {"ayri": True}),
    },
    "umut": {
        "idle": ("umut duruş", "tek", {"diger": ["umtu duruş"]}),
        "crouch": ("umut eğilme", "tek"),
        "jump": ("umut zıplama", "tek"),
        "punch": ("umut yumruk şeridi", "serit", {"n": 5}),
        "kick": ("umut tekme şeridi", "serit", {"n": 5}),
        "hurt": ("umut hasar", "tek"),
        "guard": ("umut koruma", "tek"),
        "guardlow": ("umut koruma eğilme", "tek"),
        "ult": ("umut ulti", "tek"),
        "portre": ("umut portre", "tek", {"ayri": True}),
        "foto": ("umut fotoğraf", "serit", {"n": 3, "ayri": True}),
    },
    "alp": {
        "idle": ("alp duruş", "tek"),
        "crouch": ("alp eğilme", "tek", {"oran": 0.69}),  # yatay görsel: boyu idle'ın %69'una sabitlenir
        "jump": ("alp zıplama", "tek"),
        "punch": ("alp yumruk şeridi", "serit", {"n": 5}),
        "kick": ("alp tekme şeridi", "serit", {"n": 5}),
        "hurt": ("alp hasar", "tek"),
        "guard": ("alp koruma", "tek"),
        "guardlow": ("alp koruma eğilme", "tek"),
        "ult": ("alp ulti", "tek"),
        "portre": ("alp portre", "tek", {"ayri": True}),
        "puma": ("alp puma", "serit", {"n": 2, "ayri": True}),
    },
    "selim": {
        "idle": ("selim duruş", "tek"),
        "crouch": ("selim eğilme", "tek"),
        "jump": ("selim zıplama", "tek"),
        "punch": ("selim yumruk şeridi", "serit", {"n": 5}),
        "kick": ("selim tekme şeridi", "serit", {"n": 5}),
        "hurt": ("selim hasar", "tek"),
        "guard": ("selim koruma", "tek"),
        "guardlow": ("selim koruma eğilme", "tek"),
        "ult": ("selim ulti", "tek", {"diger": ["selim ulti "]}),
        "portre": ("selim portre", "tek", {"ayri": True}),
        "sigara": ("selim sigara", "serit", {"n": 3, "ayri": True}),
    },
}

# klasör adı karakter id'sinden farklıysa (Türkçe büyük İ)
KLASOR = {"selim": "SELİM"}


def dosya_bul(klasor: Path, kok: str, diger=()):
    adaylar = [kok, *diger]
    for f in klasor.iterdir():
        if not f.is_file():
            continue
        ad = f.name
        # "x.png", "x", "x..png", "x.PNG", "x.jpg"
        sade = ad
        for uz in (".png", ".PNG", ".jpg", ".jpeg", ".webp"):
            if sade.endswith(uz):
                sade = sade[: -len(uz)]
        sade = sade.rstrip(".")
        if sade in adaylar or sade.strip() in adaylar:
            return f
    return None


def yesil_sil(img: Image.Image) -> Image.Image:
    a = np.asarray(img.convert("RGB")).astype(np.float32)
    r, g, b = a[..., 0], a[..., 1], a[..., 2]
    fark = g - np.maximum(r, b)  # yeşillik
    alfa = np.clip(1.0 - (fark - 40.0) / 70.0, 0.0, 1.0)
    alfa[(g > 120) & (fark > 110)] = 0.0
    # yeşil taşmasını temizle (kenar halesi)
    g2 = np.minimum(g, np.maximum(r, b) + 8)
    out = np.dstack([r, g2, b, alfa * 255.0]).clip(0, 255).astype(np.uint8)
    o = Image.fromarray(out, "RGBA")
    return o


def kucuk_lekeleri_temizle(o: Image.Image, esik=12) -> Image.Image:
    """Çok sönük alfa değerlerini sıfırla (arka plan kırıntıları)."""
    a = np.asarray(o).copy()
    a[..., 3] = np.where(a[..., 3] < esik, 0, a[..., 3])
    return Image.fromarray(a, "RGBA")


def kirp(o: Image.Image):
    bb = o.getchannel("A").point(lambda v: 255 if v > 40 else 0).getbbox()
    return o.crop(bb) if bb else o


def bilesenler(maske: np.ndarray, k=3):
    """Bağlı parçalar (k×k blok ölçeğinde). Etiket haritası blok boyutunda döner."""
    from collections import deque
    H, W = maske.shape
    h, w = (H + k - 1) // k, (W + k - 1) // k
    pad = np.zeros((h * k, w * k), bool)
    pad[:H, :W] = maske
    blok = pad.reshape(h, k, w, k).any(axis=(1, 3))
    etiket = np.zeros((h, w), np.int32)
    parcalar = []
    no = 0
    for y0 in range(h):
        for x0 in range(w):
            if blok[y0, x0] and not etiket[y0, x0]:
                no += 1
                q = deque([(y0, x0)])
                etiket[y0, x0] = no
                xs, alan = [], 0
                minx = maxx = x0
                while q:
                    y, x = q.popleft()
                    alan += 1
                    minx, maxx = min(minx, x), max(maxx, x)
                    for dy in (-1, 0, 1):
                        for dx in (-1, 0, 1):
                            yy, xx = y + dy, x + dx
                            if 0 <= yy < h and 0 <= xx < w and blok[yy, xx] and not etiket[yy, xx]:
                                etiket[yy, xx] = no
                                q.append((yy, xx))
                parcalar.append({"no": no, "alan": alan, "x0": minx, "x1": maxx, "cx": (minx + maxx) / 2})
    return etiket, parcalar, k


def serit_bol(o: Image.Image, n: int):
    """Önce bağlı parçalarla böl (kareler yatayda iç içe geçse de çalışır)."""
    al = np.asarray(o.getchannel("A")) > 40
    etiket, parcalar, k = bilesenler(al)
    if parcalar:
        buyukler = sorted(parcalar, key=lambda p: -p["alan"])
        ana = [p for p in buyukler if p["alan"] >= buyukler[0]["alan"] * 0.12]
        if len(ana) >= n:
            ana = sorted(ana, key=lambda p: p["cx"])
            # fazla ana parçayı (kopmuş el vb.) en yakın komşuya kat
            gruplar = [[p] for p in ana]
            while len(gruplar) > n:
                i = min(range(len(gruplar)), key=lambda t: sum(p["alan"] for p in gruplar[t]))
                cx = gruplar[i][0]["cx"]
                adaylar = [j for j in range(len(gruplar)) if j != i]
                j = min(adaylar, key=lambda t: abs(gruplar[t][0]["cx"] - cx))
                gruplar[j] += gruplar.pop(i)
                gruplar.sort(key=lambda g: g[0]["cx"])
            merkez = [np.mean([p["cx"] for p in g]) for g in gruplar]
            atama = {}
            for gi, g in enumerate(gruplar):
                for p in g:
                    atama[p["no"]] = gi
            for p in parcalar:  # küçük parçalar (parıltı, kıvılcım): en yakın kare
                if p["no"] not in atama:
                    atama[p["no"]] = int(np.argmin([abs(p["cx"] - m) for m in merkez]))
            H, W = al.shape
            tam = np.kron(etiket, np.ones((k, k), np.int32))[:H, :W]
            arr = np.asarray(o)
            kareler = []
            for gi in range(len(gruplar)):
                nolar = [no for no, g in atama.items() if g == gi]
                m = np.isin(tam, nolar)
                a2 = arr.copy()
                a2[..., 3] = np.where(m, a2[..., 3], 0)
                kareler.append(kirp(Image.fromarray(a2, "RGBA")))
            return kareler, len(gruplar)
    return serit_bol_kolon(o, n)


def izgara_bol(o: Image.Image, n: int):
    """Eşit genişlikte n hücre; her hücrede en büyük parça + onun kutusundaki parçalar."""
    W = o.width
    kareler = []
    for i in range(n):
        h = o.crop((round(i * W / n), 0, round((i + 1) * W / n), o.height))
        al = np.asarray(h.getchannel("A")) > 40
        e, p, k = bilesenler(al, 2)
        if not p:
            kareler.append(kirp(h))
            continue
        en = max(p, key=lambda q: q["alan"])
        tut = [q["no"] for q in p if q["no"] == en["no"] or (q["x0"] >= en["x0"] and q["x1"] <= en["x1"])]
        tam = np.kron(e, np.ones((k, k), np.int32))[: al.shape[0], : al.shape[1]]
        a2 = np.asarray(h).copy()
        a2[..., 3] = np.where(np.isin(tam, tut), a2[..., 3], 0)
        kareler.append(kirp(Image.fromarray(a2, "RGBA")))
    return kareler, n


def serit_bol_kolon(o: Image.Image, n: int):
    al = np.asarray(o.getchannel("A")) > 40
    kol = al.sum(axis=0) > 2
    W = len(kol)
    seg, i = [], 0
    while i < W:
        if kol[i]:
            j = i
            while j < W and kol[j]:
                j += 1
            seg.append([i, j])
            i = j
        else:
            i += 1
    # küçük parçaları (parıltı, kıvılcım) en yakın büyük parçaya kat
    def gen(s):
        return s[1] - s[0]
    while len(seg) > n:
        k = min(range(len(seg)), key=lambda t: gen(seg[t]))
        if k == 0:
            hedef = 1
        elif k == len(seg) - 1:
            hedef = k - 1
        else:
            sol = seg[k][0] - seg[k - 1][1]
            sag = seg[k + 1][0] - seg[k][1]
            hedef = k - 1 if sol <= sag else k + 1
        a, b = sorted([k, hedef])
        seg[a] = [seg[a][0], seg[b][1]]
        del seg[b]
    kareler = []
    for s0, s1 in seg:
        kareler.append(kirp(o.crop((s0, 0, s1, o.height))))
    return kareler, len(seg)


def isle():
    CIKTI.mkdir(parents=True, exist_ok=True)
    rapor = {}
    sonuc = {}
    secili = [k for k in os.environ.get("KARAKTER", "").split(",") if k]  # boşsa hepsi
    for kar, pozlar in KARAKTERLER.items():
        if secili and kar not in secili:
            continue
        klasor = KAYNAK / KLASOR.get(kar, kar.upper())
        sonuc[kar] = {}
        rapor[kar] = {}
        for poz, tanim in pozlar.items():
            kok, tur = tanim[0], tanim[1]
            ayar = tanim[2] if len(tanim) > 2 else {}
            f = dosya_bul(klasor, kok, ayar.get("diger", ()))
            if not f:
                rapor[kar][poz] = "DOSYA YOK: " + kok
                continue
            img = Image.open(f)
            o = kucuk_lekeleri_temizle(yesil_sil(img))
            if tur == "tek":
                kareler = [kirp(o)]
                bilgi = f"{f.name} {img.size}"
            else:
                kareler, adet = (izgara_bol if ayar.get("izgara") else serit_bol)(o, ayar["n"])
                bilgi = f"{f.name} {img.size} -> {adet} kare"
                if adet != ayar["n"]:
                    bilgi += f" (BEKLENEN {ayar['n']})"
                if "al" in ayar:
                    kareler = [kareler[i] for i in ayar["al"]]
            sonuc[kar][poz] = {"kareler": kareler, "kaynak_boy": img.size, "ayri": ayar.get("ayri", False), "tur": tur, "boy": ayar.get("boy", 1.0), "oran": ayar.get("oran")}
            rapor[kar][poz] = bilgi
    return sonuc, rapor


def olcekle(sonuc):
    """Karakter başına ölçek: tek görseller kendi tuval boyuna göre
    (Gemini tuvali), şeritler 1. karesi (duruş) idle boyuna eşit olacak şekilde."""
    olcek_rapor = {}
    for kar, pozlar in sonuc.items():
        idle = pozlar["idle"]
        idle_h = idle["kareler"][0].height
        # tuval büyüklüğü = sqrt(alan): dikey (1024x1536) ve yatay (1536x1024) Gemini çıktıları aynı
        # piksel yoğunluğundadır; yükseklik yerine alan kullanmak yatay görselleri de doğru ölçekler
        idle_tuval = (idle["kaynak_boy"][0] * idle["kaynak_boy"][1]) ** 0.5
        oran = idle_h / idle_tuval  # karakter / tuval
        olcek_rapor[kar] = {}
        for poz, v in pozlar.items():
            if v["ayri"]:
                continue
            if v["tur"] == "serit":
                s = HEDEF_BOY * v["boy"] / max(k.height for k in v["kareler"])
            elif v.get("oran"):
                s = HEDEF_BOY * v["oran"] / v["kareler"][0].height
            else:
                # aynı karakter-tuval oranı varsayımı
                s = HEDEF_BOY / (oran * (v["kaynak_boy"][0] * v["kaynak_boy"][1]) ** 0.5)
            v["olcek"] = s
            v["kareler"] = [k.resize((max(1, round(k.width * s)), max(1, round(k.height * s))), Image.LANCZOS) for k in v["kareler"]]
            olcek_rapor[kar][poz] = [k.size for k in v["kareler"]]
    return olcek_rapor


def kaydet(sonuc):
    for kar, pozlar in sonuc.items():
        d = CIKTI / kar
        d.mkdir(parents=True, exist_ok=True)
        for poz, v in pozlar.items():
            for i, k in enumerate(v["kareler"]):
                ad = f"{kar}_{poz}{i if len(v['kareler']) > 1 else ''}.png"
                k.save(d / ad)


def font(boy):
    for f in ("C:/Windows/Fonts/consolab.ttf", "C:/Windows/Fonts/arialbd.ttf"):
        try:
            return ImageFont.truetype(f, boy)
        except OSError:
            pass
    return ImageFont.load_default()


ZEMIN = (0x06, 0x07, 0x0F)
CIZGI = (0x27, 0x27, 0x44)
CAMGOBEGI = (0x00, 0xF0, 0xFF)


def onizleme_sayfasi(sonuc):
    """Her karakter için bir satır: tüm pozlar ortak zemin çizgisinde."""
    satir_pozlar = ["idle", "punch", "kick", "kickstrip", "kickpeak", "crouch", "jump", "hurt", "guard", "guardlow", "cast", "run", "ult"]
    f_baslik, f_etiket = font(28), font(15)
    satirlar = []
    for kar, pozlar in sonuc.items():
        hucreler = []
        for poz in satir_pozlar:
            if poz not in pozlar or pozlar[poz]["ayri"]:
                continue
            ks = pozlar[poz]["kareler"]
            if poz == "punch" or poz == "kick":
                ks = [ks[len(ks) // 2]] if poz == "punch" else [max(ks, key=lambda k: k.width)]
                etiket = poz + " (tepe)"
            elif poz == "kickstrip":
                continue
            elif poz == "run":
                ks = ks[:1]
                etiket = "run"
            else:
                etiket = poz
            hucreler.append((etiket, ks[0], poz == "jump"))
        gen = sum(k.width for _, k, _ in hucreler) + 40 * (len(hucreler) + 1)
        yuk = 420
        s = Image.new("RGB", (gen, yuk), ZEMIN)
        dr = ImageDraw.Draw(s)
        zemin_y = 360
        dr.line([(0, zemin_y), (gen, zemin_y)], fill=CIZGI, width=2)
        # idle boyu kılavuzu
        dr.line([(0, zemin_y - HEDEF_BOY), (gen, zemin_y - HEDEF_BOY)], fill=(40, 30, 60), width=1)
        dr.text((16, 10), kar.upper(), font=f_baslik, fill=CAMGOBEGI)
        x = 40
        for etiket, k, havada in hucreler:
            y = zemin_y - k.height - (60 if havada else 0)
            s.paste(k, (x, y), k)
            dr.text((x, zemin_y + 14), etiket, font=f_etiket, fill=(148, 163, 184))
            dr.text((x, zemin_y + 34), f"{k.height}px", font=f_etiket, fill=(100, 116, 139))
            x += k.width + 40
        satirlar.append(s)
    W = max(s.width for s in satirlar)
    H = sum(s.height for s in satirlar)
    sayfa = Image.new("RGB", (W, H), ZEMIN)
    y = 0
    for s in satirlar:
        sayfa.paste(s, (0, y))
        y += s.height
    sayfa.save(CIKTI / "onizleme_pozlar.png")
    return sayfa.size


def efekt_sayfasi(sonuc):
    parcalar = []
    for kar, ad in (("ahmet", "portre"), ("mete", "portre"), ("sudem", "portre"), ("umut", "portre")):
        k = sonuc[kar][ad]["kareler"][0]
        parcalar.append((f"{kar} portre", k.resize((round(k.width * 320 / k.height), 320), Image.LANCZOS)))
    sayfa1 = yan_yana(parcalar, "SEÇİM EKRANI PORTRELERİ")
    ef = []
    for kar, ad in (("ahmet", "motor"), ("sudem", "araba"), ("sudem", "yuzuk"), ("mete", "nota"), ("umut", "foto")):
        for i, k in enumerate(sonuc[kar][ad]["kareler"]):
            h = 160 if ad in ("motor", "araba") else 90
            ef.append((f"{ad}{i if len(sonuc[kar][ad]['kareler']) > 1 else ''}", k.resize((round(k.width * h / k.height), h), Image.LANCZOS)))
    sayfa2 = yan_yana(ef, "ULTİ / MERMİ GÖRSELLERİ")
    W = max(sayfa1.width, sayfa2.width)
    s = Image.new("RGB", (W, sayfa1.height + sayfa2.height), ZEMIN)
    s.paste(sayfa1, (0, 0))
    s.paste(sayfa2, (0, sayfa1.height))
    s.save(CIKTI / "onizleme_portre_efekt.png")


def yan_yana(parcalar, baslik, satir_max=2000):
    f_b, f_e = font(26), font(14)
    # satırlara böl
    satirlar, cur, w = [], [], 40
    for p in parcalar:
        if cur and w + p[1].width + 30 > satir_max:
            satirlar.append(cur)
            cur, w = [], 40
        cur.append(p)
        w += p[1].width + 30
    satirlar.append(cur)
    yuks = [max(k.height for _, k in r) + 50 for r in satirlar]
    W = max(sum(k.width + 30 for _, k in r) + 40 for r in satirlar)
    s = Image.new("RGB", (W, sum(yuks) + 50), ZEMIN)
    d = ImageDraw.Draw(s)
    d.text((16, 10), baslik, font=f_b, fill=CAMGOBEGI)
    y = 50
    for r, h in zip(satirlar, yuks):
        x = 30
        for et, k in r:
            s.paste(k, (x, y + (h - 50 - k.height)), k)
            d.text((x, y + h - 40), et, font=f_e, fill=(148, 163, 184))
            x += k.width + 30
        y += h
    return s


def gif_yap(sonuc):
    """Karakter başına: yumruk + tekme animasyonu, ortak zemin çizgisinde."""
    for kar, pozlar in sonuc.items():
        seriler = []
        if "punch" in pozlar:
            seriler.append(("YUMRUK", pozlar["punch"]["kareler"], [90, 70, 160, 80, 120]))
        if kar == "ahmet":
            ks = pozlar["kickstrip"]["kareler"]
            peak = pozlar["kickpeak"]["kareler"][0]
            seriler.append(("TEKME", [ks[0], ks[1], peak, ks[2], ks[0]], [90, 80, 200, 80, 120]))
        elif kar == "sudem":
            k = pozlar["kick"]["kareler"]
            seriler.append(("TEKME", [k[0], k[2], k[4]], [90, 220, 140]))
        else:
            seriler.append(("TEKME", pozlar["kick"]["kareler"], [90, 80, 200, 80, 120]))
        if "run" in pozlar:
            r = pozlar["run"]["kareler"]
            seriler.append(("KOŞU", r * 3, [90] * (len(r) * 3)))
        tum = [k for _, ks, _ in seriler for k in ks]
        W = max(k.width for k in tum) + 120
        H = max(k.height for k in tum) + 90
        f_e = font(20)
        kareler, sureler = [], []
        for ad, ks, ss in seriler:
            for k, sure in zip(ks, ss):
                c = Image.new("RGB", (W, H), ZEMIN)
                d = ImageDraw.Draw(c)
                d.line([(0, H - 40), (W, H - 40)], fill=CIZGI, width=2)
                d.text((12, 8), f"{kar.upper()} · {ad}", font=f_e, fill=CAMGOBEGI)
                c.paste(k, (40, H - 40 - k.height), k)
                kareler.append(c)
                sureler.append(sure)
            # seri arası duruş
            c = Image.new("RGB", (W, H), ZEMIN)
            d = ImageDraw.Draw(c)
            d.line([(0, H - 40), (W, H - 40)], fill=CIZGI, width=2)
            d.text((12, 8), f"{kar.upper()} · {ad}", font=f_e, fill=CAMGOBEGI)
            k0 = ks[0]
            c.paste(k0, (40, H - 40 - k0.height), k0)
            kareler.append(c)
            sureler.append(500)
        kareler[0].save(CIKTI / f"{kar}_animasyon.gif", save_all=True, append_images=kareler[1:], duration=sureler, loop=0, disposal=2)


if __name__ == "__main__":
    sonuc, rapor = isle()
    olc = olcekle(sonuc)
    kaydet(sonuc)
    boy = onizleme_sayfasi(sonuc)
    efekt_sayfasi(sonuc)
    gif_yap(sonuc)
    print(json.dumps({"rapor": rapor, "olcek": olc, "onizleme": boy}, ensure_ascii=False, indent=1))
