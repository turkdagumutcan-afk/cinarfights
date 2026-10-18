"""İşlenmiş kareleri oyunun asset klasörüne WebP olarak yazar.

Çalıştırma: python tools/sprite/aktar.py  (idle 560 px; isle.py ile aynı ölçek mantığı)
Yazdığı yerler: assets/frames/<id>_<poz>.webp, assets/<portre>.webp, assets/fx/*.webp
Sonra js/assets.js'e yeni dosyaları ekle (?v= ile) ve npm run build.
"""
import json
import os
import sys
from pathlib import Path

os.environ.setdefault("HEDEF_BOY", "560")
REPO = Path(__file__).resolve().parents[2]
os.environ.setdefault("CIKTI", str(REPO / "_onizleme" / "oyun"))
sys.path.insert(0, str(Path(__file__).parent))
import isle  # noqa: E402
from PIL import Image  # noqa: E402

FR = REPO / "assets" / "frames"
FX = REPO / "assets" / "fx"
OYUN_ID = {"ahmet": "ahmet", "mete": "metehan", "sudem": "sudem", "umut": "umut"}
PORTRE = {"ahmet": "ahmet.webp", "mete": "metehan.webp", "sudem": "mcqueen.webp", "umut": "fotograf_canavari.webp"}
TEK = ["idle", "crouch", "jump", "hurt", "guard", "guardlow", "ult", "cast"]
yazilan = []


def webp(img: Image.Image, yol: Path):
    yol.parent.mkdir(parents=True, exist_ok=True)
    img.save(yol, "WEBP", quality=90, method=6)
    yazilan.append(str(yol.relative_to(REPO)).replace("\\", "/"))


def boyla(img: Image.Image, h: int) -> Image.Image:
    return img.resize((max(1, round(img.width * h / img.height)), h), Image.LANCZOS)


def en_genis(ks):
    return max(range(len(ks)), key=lambda i: ks[i].width)


sonuc, rapor = isle.isle()
isle.olcekle(sonuc)
for kar, pozlar in sonuc.items():
    gid = OYUN_ID[kar]
    for poz in TEK:
        if poz in pozlar:
            webp(pozlar[poz]["kareler"][0], FR / f"{gid}_{poz}.webp")
    # yumruk ve tekme dizileri (+ tepe karesi tek başına: vuruş kutusu bunu kullanır)
    seq = {"punch": pozlar["punch"]["kareler"]}
    if kar == "ahmet":
        ks, tepe = pozlar["kickstrip"]["kareler"], pozlar["kickpeak"]["kareler"][0]
        seq["kick"] = [ks[0], ks[1], tepe, ks[2], ks[0]]
    elif kar == "sudem":
        k = pozlar["kick"]["kareler"]
        seq["kick"] = [k[0], k[2], k[4]]
    else:
        seq["kick"] = pozlar["kick"]["kareler"]
    for ad, ks in seq.items():
        for i, k in enumerate(ks):
            webp(k, FR / f"{gid}_{ad}{i}.webp")
        webp(ks[en_genis(ks)], FR / f"{gid}_{ad}.webp")
    if "run" in pozlar:
        for i, k in enumerate(pozlar["run"]["kareler"]):
            webp(k, FR / f"{gid}_run{i}.webp")
        webp(pozlar["run"]["kareler"][0], FR / f"{gid}_run.webp")
    webp(boyla(pozlar["portre"]["kareler"][0], 640), REPO / "assets" / PORTRE[kar])

# ulti / mermi görselleri (oyunda çizim boyu ~ bunların yarısı)
webp(boyla(sonuc["ahmet"]["motor"]["kareler"][0], 300), FX / "ahmet_motor.webp")
webp(boyla(sonuc["sudem"]["araba"]["kareler"][0], 260), FX / "sudem_araba.webp")
webp(boyla(sonuc["sudem"]["yuzuk"]["kareler"][0], 160), FX / "sudem_yuzuk.webp")
for i, k in enumerate(sonuc["mete"]["nota"]["kareler"]):
    webp(boyla(k, 120), FX / f"metehan_nota{i}.webp")
for i, k in enumerate(sonuc["umut"]["foto"]["kareler"]):
    webp(boyla(k, 150), FX / f"umut_foto{i}.webp")

print(json.dumps({"yazilan": yazilan}, ensure_ascii=False))
