# ÇINAR FIGHTS

Tarayıcıda çalışan, tek klavyede iki oyunculu retro arcade dövüş oyunu (eski adı ANKARA FIGHTER).
**UMUT** (fotoğrafçı), **SUDEM** (McQueen hayranı), **METEHAN** (müzisyen), **AHMET** (motorcu) ve **SELİM** (Ankaralı, elleri cebinde)
**ANKARA, SAMSUN ve ÇORUM** arenalarında **en iyi 3 raunt** (2 raunt kazanan maçı alır, her raunt 99 saniye) karşı karşıya.
Modlar: **1VSBOT**, **1VS1** (tek klavye) ve **ANTRENMAN** (kuklaya karşı).

## Çalıştırma

Oyun, sprite işleme sırasında canvas piksel okuması yaptığı için **yerel bir
sunucuyla** servis edilmelidir (`index.html`'e çift tıklayıp `file://` ile açmak
çalışmaz — tarayıcı güvenlik kısıtı).

**En kolayı (Windows):** `oyunu-baslat.bat` dosyasına çift tıkla — sunucuyu başlatır
ve oyunu tarayıcıda açar (http://localhost:8130). Kapatmak için açılan sunucu penceresini kapat.

**Node.js varsa:**

```bash
npm start        # önbelleksiz sunucu → http://localhost:8130
```

Elle: `python -m http.server 8130` (ya da VS Code **Live Server**).
Değişiklikten sonra `Ctrl+F5` ile yenile.

## Geliştirme (arkadaşlarla birlikte)

> **İlk kez mi kuruyorsun?** Adım adım Windows rehberi: [`docs/KURULUM.md`](docs/KURULUM.md)
> (Git/Node kurulumu, C: doluysa D: diskine kurma, testler, günlük iş akışı, çakışma çözme).

Oyun kodu `src/` altında **okunabilir parçalar** halinde durur; `js/game.bundle.js` onlardan **üretilir**
(elle düzenleme — bir sonraki build ezer).

```bash
git clone https://github.com/turkdagumutcan-afk/cinarfights.git
cd cinarfights
npm install            # yalnızca testler için (Playwright); oyunu çalıştırmak için gerekmez
npm run build          # src/*.js → js/game.bundle.js (+ index.html'e ?v= önbellek etiketi)
npm test               # build + 44 gerçek tarayıcı testi (ilk seferde: npx playwright install chromium)
```

Test tarayıcısını indirecek yer yoksa Edge ile: `$env:CHROMIUM_PATH="C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"; npm test`

İş akışı: **yeni dal aç → `src/`'de düzenle → `npm run build` → oyunda dene → `npm test` → push → Pull Request.**
Dosya adı öneki (`10-`, `63-`…) çalışma sırasıdır; numaraları değiştirme. Ayrıntı: `docs/ANALIZ.md` Bölüm 17, Claude Code için `CLAUDE.md`.

## Proje Yapısı

```
├── index.html              Giriş noktası (?v= etiketini build yazar)
├── oyunu-baslat.bat        Çift tıkla → sunucu + tarayıcı açılır
├── package.json            build / check / start / test komutları
├── CLAUDE.md               Claude Code proje kuralları ve token tasarrufu
├── docs/ANALIZ.md          Ayrıntılı teknik analiz, değişiklik günlüğü, güncel durum
├── docs/TASARIM.html       Arayüz tasarım sistemi: renkler, yazı tipleri, efektler, bileşenler (tarayıcıda aç)
├── src/                    ← DÜZENLENEN KAYNAK (21 dosya; 00/30 = üçüncü taraf, ham minify)
├── tools/
│   ├── build.mjs           src → js/game.bundle.js
│   ├── serve.mjs           önbelleksiz yerel sunucu
│   ├── sprite/             Gemini görsellerini oyun karelerine çeviren betikler (Python + Pillow)
│   └── test/smoke.mjs      tarayıcı duman testleri
├── css/styles.css          Derlenmiş Tailwind CSS v4 + özel retro efektler
├── js/
│   ├── assets.js           Asset yolu manifesti (.png → .webp)
│   └── game.bundle.js      ÜRETİLEN oyun paketi
└── assets/                 Görseller (WebP), kareler (frames/), yazı tipleri (fonts/)
```

> Görseller WebP formatındadır. Oyun kodu görselleri `.png` yoluyla ister;
> `js/assets.js` manifesti bu istekleri `.webp` dosyalarına yönlendirir.

> **Not:** Orijinal TypeScript/JSX kaynağı hiç olmadı. `src/`, minify paketin AST ile
> bölünmüş hâlidir; oyun kodu biçimlendirilmiş, React gibi üçüncü taraf kısımlar hâlâ minify'dır.

## Kontroller

| | P1 | P2 |
|---|---|---|
| Hareket | A / D | ◄ / ► |
| Zıpla | W | ▲ |
| Eğil | S | ▼ |
| Yumruk | Z | Num 1 (J) |
| Tekme | X | Num 2 (K) |
| Güçlü yumruk | Sol Shift | Num 4 (U) |
| Ağır tekme | Sol Ctrl | Num 5 (I) |
| Koruma (basılı tut; eğilerek alçak koruma) | V | Num 3 (L) |
| ULTİ (bar dolunca) | C | Num 0 (O) |
| Sihirli yüzük (SUDEM) | F | Num 9 (H) |
| Koşu çarpması (METEHAN) | Boşluk | Sağ Shift / Num 7 |

**Street Fighter komutları** (yönler karakterin baktığı tarafa göre; ↘ adımı klavyede atlanabilir):

| Komut | Etki |
|---|---|
| **↓ ↘ → + Yumruk** | Özel hareket: SUDEM yüzük, METEHAN koşu çarpması |
| **↓ ↘ → ↓ ↘ → + Yumruk** | ULTİ (bar doluyken) |

P1 için ↓ = S, → = D (sola bakarken A); P2 için oklar. Tek tuşlar (F, Boşluk, C) de çalışmaya devam eder.

Genel: **ESC/P** duraklat · **F2** hitbox görünümü · **Enter/Space** menü onayı · Antrenmanda **R** konumları sıfırlar

**Ultiler:** UMUT **FLAŞ PATLAMASI** (3 fotoğraf, eğilerek kaçılır) · SUDEM **KA-ÇOV!** (yarış arabası, zıplayarak kaçılır) ·
METEHAN **YILDIRIM NOTALARI** (yakında anında) · AHMET **GAZA BAS!** (arkadan gelen motor, zıplayarak kaçılır) ·
SELİM **RA-MA-ZAAN** (baş, göğüs ve diz hizasında 3 sigara; en iyi savunma koruma).
Kaçması kolay ulti daha çok hasar verir; ulti başına ortalama hasar dördünde eşittir.

> UMUT'un takla / yer taklası / süpürme hareketi yeni çizimler gelene kadar **geçici olarak kapalı**.

> Bu tuşlar **varsayılandır**. Başlık ekranındaki **AYARLAR** (ya da duraklatma menüsü) → **KONTROLLER** sekmesinden istediğin tuşu atayabilirsin.

### Ayarlar

Başlık ekranında **AYARLAR** (veya **3** tuşu) ve maç sırasında **ESC → AYARLAR**. Ayarlar tarayıcıda otomatik saklanır.

| Sekme | İçerik |
|---|---|
| SES | Ses seviyesi, sessize alma |
| OYUN | Raunt sayısı (1/3/5), raunt süresi (30/60/99/∞), hasar çarpanı (×0.5–×2), koruma ve ulti açma/kapama |
| GÖRÜNTÜ | Ekran sarsıntısı, hasar sayıları, tarama çizgileri, kontrol ipuçları, hitbox |
| KONTROLLER | Her iki oyuncu için tüm tuşları yeniden atama |

### Dövüşçü seçim ekranı

- **Street Fighter II tarzı:** ortada Türkiye haritası (memleketler: UMUT ve SUDEM Ankara, METEHAN Samsun, AHMET Çorum), altında karakter ızgarası, kartta dönen portre. Kartta karakterin **stili** (DENGELİ, TANK…), **zorluk** yıldızları ve gerçek değerlerden hesaplanan **HIZ / GÜÇ / CAN** çubukları.
- **Fare:** kutuya sol tık → P1, sağ tık veya Shift+tık → P2 · **?** rastgele karakter
- **A / D** — P1 karakteri · **◄ / ►** — P2 (veya bot / kukla) karakteri
- **Tab** — arena: ANKARA / SAMSUN / ÇORUM / RASTGELE
- **1 / 2 / 3** — bot zorluğu (1VSBOT)
- **Z** — P1 hazır · **Num 1 / J** — P2 hazır · **Enter** — başlat · **ESC / ◀ GERİ** — önce hazırı iptal, sonra ana menü

## Özellikler (v3.1)

- **Bot zorluk seviyeleri:** KOLAY (yavaş düşünür, az saldırır), NORMAL,
  ZOR (hızlı tepki, agresif kombolar, sık ulti). Seçim savaş ekranındaki
  HUD'da da görünür.
- **Serbest karakter seçimi:** 1P modunda hem kendi karakterini hem botun
  karakterini seçebilirsin; 2P modunda her oyuncu kendi karakterini seçer.
  Ultiler karaktere bağlıdır (UMUT → Flaş Patlaması, SUDEM → Ka-Çov!, METEHAN → Yıldırım Notaları).
- **Ayna maçı:** İki taraf aynı karakteri seçerse ikinci oyuncu farklı
  renk tonuyla ("SUDEM II" / "UMUT II") dövüşür.

## Sürüm

- **17–18 Ekim 2026 — Yeni tasarım:** dört karakterin bütün pozları yeniden çizildi, yumruk ve tekme çok kareli animasyon; yeni karakter **AHMET** (ulti GAZA BAS!); SUDEM'e sihirli yüzük; **ANTRENMAN** modu; seçim ekranında geri dönüş; arenalar **ANKARA (şehir) / SAMSUN / ÇORUM** (tek zemin); karakterler %16 büyük; aynı anda vuruşta ikisi de vurur; **denge** (720 bot maçında her karakter %45–52; ayrıntı `docs/ANALIZ.md` §22–27). 39 tarayıcı testi.

> Aşağıda adı geçen `.bak-*-oncesi` yedekleri ve eski arena görseli (`ankara_map.eski.webp`) 16 Ekim temizliğinde kaldırıldı. 16 Ekim'den sonraki sürümler GitHub'daki git geçmişinde.

- **16 Ekim 2026 — Açık kaynak yapı:** oyun kodu `src/` altında okunabilir parçalara bölündü (davranış birebir aynı, AST ile doğrulandı); `npm run build/test/start`; otomatik önbellek etiketi; 26 tarayıcı testi.
  Takla tuşu **R → E** (P2: Num 6 / N); takla ve W+yön için sıra-bağımsız giriş tamponu.
- **16 Ekim (öğleden sonra):** rakibin üzerinden yalnız takla geçer, normal zıplama geçemez; takla sırasında karakterin iri çizilmesi düzeltildi.
- **15 Ekim 2026 — ÇINAR FIGHTS:** yeni ad ve başlık ekranı, METEHAN, koruma, flaş dalgası, süpürme tekme, ileri/geri yer taklası, havadan takla.

- **v3.1 + METEHAN (13 Ekim 2026)** — Yeni karakter: Samsunlu müzisyen METEHAN (165 cm, 90 kg). Yavaş ama hasarı yüksek. Ulti: **YILDIRIM NOTALARI** (gitardan 3 yıldırımlı nota). Öncesi `js/game.bundle.js.bak-metehan-oncesi`.
- **v3.1 + SF2 tarzı karakter seçimi (13 Ekim 2026)** — Sabit piksel Türkiye haritası, karakter ızgarası, 3D dönen karakterler, RASTGELE seçeneği. Öncesi `js/game.bundle.js.bak-secim-oncesi`.
- **v3.1 + ayarlar menüsü (13 Ekim 2026)** — Başlık ve duraklatma menüsünde AYARLAR: ses, raunt sayısı ve süresi, hasar, koruma/ulti, görüntü seçenekleri ve tuş atama. Ayarlar tarayıcıda saklanır. Öncesi `js/game.bundle.js.bak-ayarlar-oncesi`.
- **v3.1 + 3 raunt sistemi (13 Ekim 2026)** — Street Fighter tarzı "en iyi 3": 2 raunt kazanan maçı alır. Raunt arasında canlar yenilenir, ulti barı taşınır, süre kutusunun altında raunt yuvarlakları görünür. Öncesi `js/game.bundle.js.bak-raunt-oncesi`.
- **v3.1 + koruma / guard (13 Ekim 2026)** — V (P1) ve Num 3 / L (P2) basılı tutulunca karakter korunur: hasarın çoğu engellenir, koruma barı vuruşlarla tükenir, bar bitince koruma kırılır. Bot da korur. Öncesi `js/game.bundle.js.bak-koruma-oncesi`.
- **v3.1 + yeni arena görseli (13 Ekim 2026)** — Arka planda artık Atakule görünüyor, ay hilal oldu. Eski görsel `assets/ankara_map.eski.webp`.
- **v3.1 + zemin düzeltmesi (13 Ekim 2026)** — Yürürken ayaklar artık zemin çizgisinde,
  K.O. olan karakter zemine paralel yatıyor ve zeminin altına girmiyor. Öncesi
  `js/game.bundle.js.bak-zemin-oncesi` olarak yedeklendi.
- **v3.1 + gerçek Türkiye haritası (13 Ekim 2026)** — Karakter seçim ekranındaki
  harita, gerçek Türkiye sınırıyla değiştirildi. Şehirler: İstanbul, Ankara
  (arena), Kayseri, Samsun, Çorum, Sakarya. Öncesi `js/game.bundle.js.bak-harita-oncesi`
  olarak yedeklendi.
- **v3.1 + Street Fighter tarzı yürüyüş (13 Ekim 2026)** — Yürürken üst gövde sabit,
  bacaklar sırayla adım atıyor (ileri ve geri yürüyüş farklı). Yeni görsel
  gerektirmedi, idle karesi kodla bacaklara bölünüyor. Öncesi
  `js/game.bundle.js.bak-yuruyus-oncesi` olarak yedeklendi.
- **v3.1 + animasyon turu 1 (13 Ekim 2026)** — Yeni görsel gerektirmeyen animasyonlar
  eklendi: bekleme nefesi, geçici yürüme sekmesi, zıplama kalkış/iniş ezilmesi,
  saldırı hazırlığı (geri eğilme) ve atılma. Yalnızca görsel; oynanış değerleri
  değişmedi. Öncesi `js/game.bundle.js.bak-animasyon-oncesi` olarak yedeklendi.
  Hangi animasyonların kaldığı için `docs/ANALIZ.md` Bölüm 14.
- **v3.1 + eğilme düzeltmesi (13 Ekim 2026)** — Eğilirken (S / ▼) karakterlerin
  küçülmesi düzeltildi: `game.bundle.js` içindeki `crouch` ölçeği 0.56 → 0.71.
  Önceki bundle `js/game.bundle.js.bak` olarak yedeklendi. Tarayıcıda
  **Ctrl+F5** ile yenile. Ayrıntılar ve açık işler için
  `docs/ANALIZ.md` Bölüm 12–15.
- **v3.1** — Bot zorluk ayarı, serbest karakter seçimi, ayna maçı desteği,
  WebP görsel optimizasyonu (~8,3 MB → ~1,7 MB).
- v3.0 — Orijinal tek dosyalık sürümden ayrıştırıldı (orijinal dosya ayrı
  lokasyonda yedekli).
