# ANKARA FIGHTER

Tarayıcıda çalışan, tek klavyede iki oyunculu retro arcade dövüş oyunu.
**UMUT** (fotoğrafçı) ve **SUDEM** (McQueen hayranı), Ankara temalı arenada
99 saniyelik tek rauntta karşı karşıya.

## Çalıştırma

Oyun, sprite işleme sırasında canvas piksel okuması yaptığı için **yerel bir
sunucuyla** servis edilmelidir (dosyaya çift tıklayarak `file://` ile açmak
çalışmaz — tarayıcı güvenlik kısıtı).

**En kolayı:** `oyunu-baslat.bat` dosyasına çift tıkla — sunucuyu başlatır
ve oyunu tarayıcıda açar (http://localhost:8130). Kapatmak için açılan
"ANKARA FIGHTER Sunucu" penceresini kapat.

Elle başlatmak istersen:

```bash
# Python ile
python -m http.server 8000
```

```bash
# Node ile
npx serve .
```

veya VS Code **Live Server** eklentisiyle `index.html`'i açın.
Ardından tarayıcıda `http://localhost:8000` adresine gidin.

## Proje Yapısı

```
├── index.html              Giriş noktası
├── oyunu-baslat.bat        Çift tıkla → sunucu + tarayıcı açılır
├── css/
│   └── styles.css          Derlenmiş Tailwind CSS v4 + özel retro efektler
├── js/
│   ├── assets.js           Asset yolu manifesti (mutlak → göreli eşleme)
│   └── game.bundle.js      Derlenmiş oyun kodu (React 19 + React Router + Canvas 2D motoru)
├── assets/
│   ├── ankara_map.webp     Arena arka planı
│   ├── fotograf_canavari.webp  Umut'un kart görseli / ulti mermisi
│   ├── mcqueen.webp        Sudem'in kart görseli / ulti mermisi
│   ├── favicon.svg
│   ├── frames/             Karakter sprite kareleri, WebP (karakter başına 7 poz)
│   └── fonts/              Outfit, Plus Jakarta Sans, JetBrains Mono (woff2)
└── ANKARA-FIGHTER-ANALIZ.md   Ayrıntılı teknik analiz, test sonuçları, değişiklik günlüğü ve güncel durum
```

> Görseller WebP formatındadır (orijinal PNG'lere göre ~%83 küçük; toplam
> 5,3 MB → 0,9 MB). Oyun kodu görselleri `.png` yoluyla ister; `js/assets.js`
> manifesti bu istekleri `.webp` dosyalarına yönlendirir. Orijinal kayıpsız
> PNG'ler, ayrı bir lokasyonda yedeklenen tek dosyalık orijinal sürümün
> (`ankara-fighter.html`) içindeki base64 verisinden geri çıkarılabilir.

> **Not:** `js/game.bundle.js` minify edilmiş derleme çıktısıdır; orijinal
> TypeScript/JSX kaynakları mevcut değildir. Hasar/denge değerleri bundle
> içindeki veri tablolarından yine de düzenlenebilir (bkz. analiz dokümanı).

## Kontroller

| | P1 — UMUT | P2 — SUDEM |
|---|---|---|
| Hareket | A / D | ◄ / ► |
| Zıpla | W | ▲ |
| Eğil / masadan düş | S / 2×S | ▼ / 2×▼ |
| Yumruk | Z | Num 1 (J) |
| Tekme | X | Num 2 (K) |
| Güçlü yumruk | Sol Shift | Num 4 (U) |
| Ağır tekme | Sol Ctrl | Num 5 (I) |
| ULTİ | C | Num 0 (O) |

Genel: **ESC/P** duraklat · **F2** hitbox görünümü · **Enter/Space** menü onayı

### Dövüşçü seçim ekranı

- **A / D** — P1 karakterini değiştir (kartlardaki ◀/▶ düğmeleri de çalışır)
- **◄ / ►** — P2'nin (veya botun) karakterini değiştir
- **1 / 2 / 3** — Bot zorluğu: KOLAY / NORMAL / ZOR (yalnızca 1P modunda)
- **Z** — P1 hazır · **Num 1 / J** — P2 hazır · **Enter** — dövüşü başlat

## Özellikler (v3.1)

- **Bot zorluk seviyeleri:** KOLAY (yavaş düşünür, az saldırır), NORMAL,
  ZOR (hızlı tepki, agresif kombolar, sık ulti). Seçim savaş ekranındaki
  HUD'da da görünür.
- **Serbest karakter seçimi:** 1P modunda hem kendi karakterini hem botun
  karakterini seçebilirsin; 2P modunda her oyuncu kendi karakterini seçer.
  Ultiler karaktere bağlıdır (UMUT → Flaş Patlaması, SUDEM → Ka-Çov!).
- **Ayna maçı:** İki taraf aynı karakteri seçerse ikinci oyuncu farklı
  renk tonuyla ("SUDEM II" / "UMUT II") dövüşür.

## Sürüm

- **v3.1 + Street Fighter tarzı yürüyüş (13 Ekim 2026)** — Yürürken üst gövde sabit,
  bacaklar sırayla adım atıyor (ileri ve geri yürüyüş farklı). Yeni görsel
  gerektirmedi, idle karesi kodla bacaklara bölünüyor. Öncesi
  `js/game.bundle.js.bak-yuruyus-oncesi` olarak yedeklendi.
- **v3.1 + animasyon turu 1 (13 Ekim 2026)** — Yeni görsel gerektirmeyen animasyonlar
  eklendi: bekleme nefesi, geçici yürüme sekmesi, zıplama kalkış/iniş ezilmesi,
  saldırı hazırlığı (geri eğilme) ve atılma. Yalnızca görsel; oynanış değerleri
  değişmedi. Öncesi `js/game.bundle.js.bak-animasyon-oncesi` olarak yedeklendi.
  Hangi animasyonların kaldığı için `ANKARA-FIGHTER-ANALIZ.md` Bölüm 14.
- **v3.1 + eğilme düzeltmesi (13 Ekim 2026)** — Eğilirken (S / ▼) karakterlerin
  küçülmesi düzeltildi: `game.bundle.js` içindeki `crouch` ölçeği 0.56 → 0.71.
  Önceki bundle `js/game.bundle.js.bak` olarak yedeklendi. Tarayıcıda
  **Ctrl+F5** ile yenile. Ayrıntılar ve açık işler için
  `ANKARA-FIGHTER-ANALIZ.md` Bölüm 12–15.
- **v3.1** — Bot zorluk ayarı, serbest karakter seçimi, ayna maçı desteği,
  WebP görsel optimizasyonu (~8,3 MB → ~1,7 MB).
- v3.0 — Orijinal tek dosyalık sürümden ayrıştırıldı (orijinal dosya ayrı
  lokasyonda yedekli).
