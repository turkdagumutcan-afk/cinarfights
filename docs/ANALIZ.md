# ÇINAR FIGHTS (eski adı ANKARA FIGHTER) — Proje Analiz Dokümanı

> **Proje:** çok dosyalı statik web oyunu (`index.html` + `css/` + `js/` + `assets/`); orijinal tek dosyalık `ankara-fighter.html` ayrı lokasyonda yedekli
> **Tür:** Tarayıcıda çalışan, tek klavyede 2 kişilik retro arcade dövüş oyunu
> **Sürüm:** v3.1 (başlık ekranındaki etikete göre) + 13 Ekim 2026 eğilme düzeltmesi (bkz. Bölüm 12)
> **Dil:** Türkçe arayüz
> **Analiz tarihi:** 13 Ekim 2026 · **Son güncelleme:** 16 Ekim 2026 (açık kaynak yapı, takla tuşu, giriş tamponu — Bölüm 17)

> **Not:** Bu doküman ilk olarak tek dosyalık v3.0 üzerinden yazılmıştı. Bölüm 1, 2, 3, 10 ve 11 güncel çok dosyalı yapıya göre düzeltildi. Güncel durum özeti için **Bölüm 12–17**'ye bakın. **Dosya yapısı ve geliştirme düzeni için en güncel bölüm 17'dir.**

---

## 1. Genel Bakış

ANKARA FIGHTER, Street Fighter tarzı 2 boyutlu bir dövüş oyunudur. Oyun artık **çok dosyalı** bir yapıdadır (`index.html`, `css/styles.css`, `js/game.bundle.js`, `js/assets.js`, `assets/`). Sprite işleme sırasında canvas piksel okuması yaptığı için `file://` ile açılamaz, **yerel sunucu** gerekir (`oyunu-baslat.bat` bunu otomatik yapar). Orijinal tek dosyalık sürümde kod, stiller ve görseller (base64 17 PNG) tek HTML içine gömülüydü.

İki karakter vardır: **UMUT** (fotoğrafçı) ve **SUDEM** (McQueen hayranı). Arka plan Ankara temalıdır (`ankara_map.png`) ve sahnede üzerine zıplanabilen bir **masa platformu** bulunur. Oyun ya bota karşı (1 oyuncu) ya da aynı klavyede yerel 2 oyuncu olarak oynanır.

---

## 2. Teknoloji Yığını

| Katman | Teknoloji |
|---|---|
| UI çatısı | **React 19** (production/minified bundle, sürüm dizesi: 19.2.8) |
| Sayfa yönlendirme | **React Router** (`/`, `/select`, `/battle` rotaları) |
| Stil | **Tailwind CSS v4.3.3** (derlenmiş tek `<style>` bloğu) + neon/retro özel CSS (scanline, grid-floor efektleri) |
| Oyun motoru | **Özel yazılmış Canvas 2D motoru** — fizik, çarpışma, animasyon, parçacık efektleri tamamen elle kodlanmış |
| Ses | **Web Audio API** ile tamamen sentezlenmiş efektler (ses dosyası yok: yumruk, zıplama, K.O., deklanşör, motor sesi vb. osilatörle üretiliyor) |
| Varlıklar | `assets/` altında WebP dosyaları. `js/assets.js` manifesti, oyun kodunun istediği `/assets/....png` yollarını `.webp` dosyalarına yönlendirir (`window.__ANKARA_ASSETS__`). Orijinalde base64 PNG'ler gömülüydü (~7,4 MB). |
| Dağıtım izi | Orijinal tek dosyada Cloudflare challenge + analytics betikleri vardı (dosya Cloudflare arkasındaki bir siteden kaydedilmişti). Güncel `index.html` bu betikleri **içermiyor**. |

**Yazı tipleri:** JetBrains Mono (monospace UI metinleri) + display font.

---

## 3. Dosya Yapısı

> 16 Ekim 2026'dan itibaren geçerli yapı (ayrıntı: Bölüm 17). Eski "yalnızca minify bundle" düzeni bitti.

```
├── index.html              Giriş noktası (CSS + assets.js + game.bundle.js bağlar; ?v= etiketini build yazar)
├── oyunu-baslat.bat        Çift tıkla → Python (yoksa Node) ile :8130'da sunucu + tarayıcı
├── README.md               Kullanım, kontroller, geliştirme
├── CLAUDE.md               Claude Code için proje kuralları (yapı, iş akışı, token tasarrufu)
├── package.json            npm run build / check / start / test
├── docs/ANALIZ.md          Bu doküman
├── .claude/settings.json   Claude Code: büyük/ikili dosyaları okuma (token tasarrufu)
├── src/                    ← DÜZENLENEN KAYNAK (20 dosya, dosya adı sırası = çalışma sırası)
├── tools/
│   ├── build.mjs           src/*.js → js/game.bundle.js birleştirir + ?v= etiketi
│   ├── serve.mjs           önbelleksiz yerel sunucu (npm start)
│   └── test/smoke.mjs      tarayıcıda gerçek duman testleri (Playwright)
├── css/styles.css          Derlenmiş Tailwind v4 + özel retro efektler (~92 KB)
├── js/
│   ├── assets.js           Asset yol manifesti (.png → .webp)
│   └── game.bundle.js      ÜRETİLİR — elle düzenleme (src/ üzerinden build)
└── assets/
    ├── ankara_map.webp, title_bg.webp, fotograf_canavari.webp, mcqueen.webp, metehan.webp, favicon.svg
    ├── frames/             Karakter pozları (WebP); UMUT: roll0-7, back0-15, sweep0-11, cast, guard…
    └── fonts/              Outfit, Plus Jakarta Sans, JetBrains Mono (woff2)
```

**Kaynak kod:** Orijinal TypeScript/JSX hiç olmadı; 16 Ekim'de minify bundle, AST ile okunabilir parçalara (`src/`) bölündü ve davranışının birebir aynı olduğu doğrulandı (bkz. Bölüm 17). React / framer-motion gibi üçüncü taraf kısımlar (`src/00-…`, `src/30-…`) hâlâ minify; oyun kodu biçimlendirilmiş durumda.

---

## 4. Ekranlar ve Akış

```
/  (Başlık ekranı)
│   1 PLAYER (VS BOT)  veya  2 PLAYERS (LOCAL)
▼
/select  (Dövüşçü seçimi)
│   İki oyuncu da "HAZIR" olunca otomatik başlar
▼
/battle?mode=bot|2p  (Dövüş)
│   "RAUNT 1... DÖVÜŞ!" → en iyi 3 raunt, her raunt 99 saniye
▼
Sonuç paneli: TEKRAR OYNA / KARAKTER SEÇİMİ / ANA MENÜ
```

- **Başlık ekranı:** Neon retro tasarım, scanline ve grid-floor efektleri, ok tuşları/W-S ile menü gezinme, 1-2 rakamlarıyla hızlı mod seçimi.
- **Seçim ekranı:** SF2 tarzı. Ortada sabit Türkiye haritası (1P/2P işaretli), altında karakter ızgarası (UMUT, SUDEM, RASTGELE, 3 kilitli), yanlarda 3D dönen karakter kartları (istatistik çubukları, kontrol özeti), hazır-ol mekaniği (P1 → Z, P2 → Num 1 veya J).
- **Sonuç paneli:** Kazanan, nakavt/süre bilgisi ve istatistikler: **HASAR**, **EN İYİ KOMBO**, **KALAN CAN**.

---

## 5. Karakterler

| | **UMUT** (P1) | **SUDEM** (P2) |
|---|---|---|
| Tema rengi | Kırmızı-pembe `#ff2a5f` | Camgöbeği `#00f0ff` |
| Tanıtım | "Fotoğrafçı · Hızlı yumruklar, kör edici flaş" | "McQueen hayranı · Çevik tekmeler, oyuncak araba" |
| HIZ | 0.75 | **0.90** |
| GÜÇ | **0.80** | 0.65 |
| MENZİL | **0.85** | 0.80 |
| Ulti | **FLAŞ PATLAMASI!** — ekran beyaz flaşla parlar + 3 adet uçan fotoğraf mermisi (gecikmeli, farklı açılarda) | **KA-ÇOV!** — yerde kayan oyuncak araba + havada süzülen sihirli yüzük (2 mermi) |

### Ulti mermileri (hasar verileri)

| Mermi | Hasar | Geri tepme | Sersemletme |
|---|---|---|---|
| FOTOĞRAF (×3) | 9 | orta | 440 ms |
| OYUNCAK ARABA | 14 | güçlü | 600 ms |
| SİHİRLİ YÜZÜK | 12 | güçlü | 640 ms |

Araba yerçekimine tabidir, masa platformunun üstünden de gidebilir ve ardında kıvılcım bırakır; yüzük sinüs dalgasıyla süzülür ve parıltı saçar.

---

## 6. Kontroller

> **16 Ekim güncellemesi:** Takla tuşu artık **E** (P2: **Numpad 6** veya **N**); ayrıntı Bölüm 17.

### Oyuncu 1 — UMUT
| Tuş | İşlev |
|---|---|
| A / D | Sol / sağ hareket |
| W | Zıpla |
| S | Eğil (2× hızlı basış: masadan aşağı düş) |
| Z | Yumruk |
| X | Tekme |
| Sol Shift | Güçlü yumruk |
| Sol Ctrl | Ağır tekme |
| V (basılı tut) | KORUMA (guard) |
| C | ULTİ (Flaş Patlaması) |

### Oyuncu 2 — SUDEM
| Tuş | İşlev |
|---|---|
| ◄ / ► | Hareket |
| ▲ | Zıpla |
| ▼ | Eğil (2×: masadan düş) |
| Num 1 (veya J) | Yumruk |
| Num 2 (veya K) | Tekme |
| Num 4 (veya U) | Güçlü yumruk |
| Num 5 (veya I) | Ağır tekme |
| Num 3 (veya L) (basılı tut) | KORUMA (guard) |
| Num 0 (veya O) | ULTİ (Ka-Çov!) |

### Genel
| Tuş | İşlev |
|---|---|
| ESC / P | Duraklat (DEVAM ET / ANA MENÜ menüsü) |
| F2 | Hitbox hata ayıklama görünümü |
| Enter / Space | Menü onayı |

---

## 7. Dövüş Sistemi (Motor Detayları)

### Temel değerler
- **Can:** 150 HP (ayrıca yavaşça eriyen "hayalet can" çubuğu — aldığın hasarı görsel olarak gösterir)
- **Süre:** Her raunt 99 saniye; süre dolarsa kalan cana göre raunt kazananı belirlenir, eşitse raunt **berabere** (Bölüm 12 "3 raunt sistemi")
- **Ulti göstergesi:** 0–100; saldırı isabetlerinde dolar, 100'de ulti kullanılabilir (kullanınca sıfırlanır)
- **Yürüme hızı:** 330 px/sn; havada yön kontrolü azaltılmış

### Saldırı tablosu

| Saldırı | Hasar | Hazırlık | Aktif | Toparlanma | Sersemletme | Ulti dolumu |
|---|---|---|---|---|---|---|
| YUMRUK | 7 | 70 ms | 100 ms | 170 ms | 330 ms | +8 |
| TEKME | 11 | 140 ms | 120 ms | 270 ms | 500 ms | +11 |
| GÜÇLÜ YUMRUK | 12 | 150 ms | 110 ms | 260 ms | 480 ms | +12 |
| AĞIR TEKME | 15 | 210 ms | 120 ms | 340 ms | 640 ms | +14 |

Her saldırının ayrı vuruş kutusu boyutu ve geri tepme vektörü (yatay + dikey savrulma) vardır. Ağır tekme rakibi havaya fırlatır.

### Gelişmiş mekanikler
- **Girdi tamponu:** Saldırı/ulti girişleri 250 ms tamponlanır — animasyon bitince otomatik çıkar (dövüş oyunu standardı).
- **Çift dokunuş:** 280 ms içinde 2× aşağı → masa platformundan aşağı düşme.
- **Hızlı düşüş:** Havada aşağı basılı tutunca yerçekimi artar.
- **Sahne:** Ana zemin y=704; **masa platformu** y=429, x≈381–996 aralığında. Platforma üstten inilir, altından geçilir.
- **Kombo sayacı:** Ard arda vuruşlar kombo olarak sayılır ve ekranda gösterilir; maç sonunda "EN İYİ KOMBO" raporlanır.
- **Koruma (guard):** V / Num 3 (L) basılı tutulur. Ayrıntı Bölüm 12 "Koruma (guard)".
- **Gövde itişmesi:** Karakterler üst üste binemez; iç içe girince yumuşakça itilirler.
- **Efektler:** Ekran sarsıntısı, vuruş flaşı, kıvılcım parçacıkları (en fazla 420), uçan hasar sayıları, lens parlaması (flaş ultisinde), K.O.'da savrulma animasyonu.

### Bot yapay zekâsı (1P modu)
Sudem'i yöneten bot ~110–230 ms'de bir "düşünür" ve şunları yapar:
- Yaklaşan mermiden %45 ihtimalle zıplayarak kaçar
- Ultisi doluysa ve mesafe uzaksa (%40) ulti atar
- Rakip yukarıdaysa zıplayarak takip eder; masadaysa ve rakip aşağıdaysa düşer
- Menzildeyse saldırı seçer (mesafeye göre yumruk/tekme ağırlıklı rastgele seçim), ~380–860 ms bekleme süresi
- Rakip saldırırken %22 ihtimalle eğilir, bazen geri çekilir
- Rakip saldırı menzilindeyken ya da mermi yaklaşırken korur (KOLAY %12, NORMAL %30, ZOR %50), 360–620 ms tutar, ardından 450 ms yeniden korumaz

---

## 8. Kod Mimarisi (Gözlemler)

Kod minify edilmiş olsa da yapı net biçimde ayrışıyor:

- **`Fy` (keymap):** Tuş → `{player, action}` eşlemesi; tek bir global klavye yöneticisi (`By` sınıfı) basılı tuşları ve "edge" (tek karelik) olayları iki oyuncu için ayrı tutar. Pencere odak kaybında tuşlar sıfırlanır.
- **`Uy` / `Wy` / `Gy`:** Saldırı tanımları, ulti kullanım hareketi ve mermi tanımları — veri odaklı tasarım (tüm denge ayarları tek yerde).
- **`Ky` (Fighter sınıfı):** Konum, hız, durum makinesi (`idle / walk / crouch / air / attack / hitstun / ko`), can, ulti göstergesi, kombo istatistikleri.
- **`Hy` (Bot sınıfı):** Zamanlayıcı tabanlı karar mekanizması.
- **Maç motoru:** `update` döngüsü → girişler, fizik, saldırı çözümleme (`resolveAttacks`), mermiler, parçacıklar, kamera sarsıntısı; `debugState()` ile test edilebilirlik (data-testid öznitelikleri de her ekranda mevcut — otomatik test için hazırlanmış).
- **Render:** React yalnızca ekran/menü katmanını yönetir; dövüşün kendisi tek `<canvas>` üzerine 2D context ile çizilir (1360×768 sanal çözünürlük).
- **Ses (`X` nesnesi):** `uiClick`, `swing`, `jump`, `land`, `ko`, `flashWave`, `shutter`, `carRev`, `ringChime` — hepsi anlık sentez.

---

## 9. Güçlü Yönler

1. **Taşınabilirlik:** Tek dosya, sıfır bağımlılık, çevrimdışı çalışır (Cloudflare betikleri hariç — onlar başarısız olsa da oyun etkilenmez).
2. **Sağlam dövüş temelleri:** Startup/active/recovery kare verileri, girdi tamponu, hitstun, geri tepme, kombo — gerçek dövüş oyunu mimarisi.
3. **Veri odaklı denge:** Tüm hasar/süre değerleri tek tabloda; denge ayarı çok kolay.
4. **Karakter asimetrisi:** İki karakterin istatistikleri ve ultileri gerçekten farklı; Sudem hızlı/zayıf, Umut güçlü/menzilli.
5. **Detaylı sunum:** Parçacıklar, ekran sarsıntısı, hayalet can çubuğu, neon retro estetik, Türkçe mizah ("KA-ÇOV!").
6. **Test edilebilirlik:** `data-testid` öznitelikleri ve `debugState()` fonksiyonu, F2 hitbox görünümü.

## 10. Geliştirilebilecek Noktalar

1. ~~**Dosya boyutu:** 8,3 MB'ın ~7,4 MB'ı PNG'ler.~~ → **v3.1'de yapıldı:** görseller WebP'ye çevrildi (toplam 5,3 MB → 0,9 MB).
2. ~~Tek raunt~~ → **En iyi 3 raunt sistemi eklendi** (Bölüm 12).
3. ~~Blok/savunma yok~~ → **Koruma (guard) eklendi** (Bölüm 12). Hâlâ yok: çizilmiş koruma karesi, havada koruma, tutuş/guard-breaker saldırıları.
4. **Tek sahne, 2 karakter:** İçerik genişletmeye açık (yeni karakter eklemek veri tablosu + 7 kare görsel gerektiriyor).
5. **Mobil desteği yok:** Yalnızca klavye girişi; dokunmatik kontroller eklenmemiş.
6. ~~**Bot tek zorluk seviyesinde:** Zorluk seçeneği (kolay/zor) yok.~~ → **v3.1'de eklendi** (KOLAY/NORMAL/ZOR + serbest karakter seçimi).
7. **Kaynak kod yok → (16 Ekim'de kısmen çözüldü):** Orijinal TS/JSX yok, ama oyun kodu artık `src/` altında okunabilir. Kalan iş: kısaltılmış sembol adlarını (`Ky`, `Xy`…) kademeli olarak anlamlı adlarla değiştirmek.

---

## 11. Nasıl Çalıştırılır?

`file://` ile **açılmaz** (canvas piksel okuma kısıtı). `oyunu-baslat.bat` dosyasına çift tıklamak yeterli: Python (yoksa Node) ile `http://localhost:8130` adresinde sunucuyu başlatır ve tarayıcıda açar. Elle: `python -m http.server 8000` veya `npx serve .`. Ayrıntı için `README.md`.

> Kod değişikliğinden sonra tarayıcıda **Ctrl+F5** kullanın; eski `game.bundle.js` önbellekten gelebilir.

---


## 12. Değişiklik Günlüğü

> Bu bölümde adı geçen `.bak-*` yedekleri ve eski arena görseli (`ankara_map.eski.webp`) 16 Ekim temizliğinde kaldırıldı. 16 Ekim'den sonraki sürümler git geçmişinde (`git log`).

### 13 Ekim 2026

| Yapılan | Dosya | Ayrıntı |
|---|---|---|
| Proje analizi | — | `README.md` ve bu doküman okunarak proje yapısı, mekanikler ve v3.1 özellikleri çıkarıldı. |
| Oyun testi | — | Bölüm 13'e bakın. Engelleyici hata bulunmadı. |
| **Eğilme (S) sorunu düzeltildi** | `js/game.bundle.js` | Karakterler S'ye basınca küçülüyordu. Aşağıda ayrıntı var. |
| Animasyon analizi | — | Değişiklik yapılmadan eksikler çıkarıldı. Bölüm 14'e bakın. |
| Yedek | `js/game.bundle.js.bak` | Eğilme düzeltmesinden önceki orijinal bundle. Geri dönmek için adını `game.bundle.js` yapmak yeterli. |
| **Animasyon ekleme (1. tur)** | `js/game.bundle.js` | Yeni sprite gerektirmeyen animasyonlar eklendi. Aşağıdaki "Animasyon ekleme" bölümüne bakın. |
| Yedek 2 | `js/game.bundle.js.bak-animasyon-oncesi` | Eğilme düzeltmesi **var**, animasyonlar **yok** hali. Animasyonları geri almak için bu dosyanın adını `game.bundle.js` yapın. |
| **Street Fighter tarzı yürüyüş** | `js/game.bundle.js` | Sprite'ı bacaklara bölen adım döngüsü. Aşağıdaki "Yürüme animasyonu" bölümüne bakın. |
| Yedek 3 | `js/game.bundle.js.bak-yuruyus-oncesi` | Animasyon turu 1 **var**, bacak bölmeli yürüyüş **yok** hali (yürümede yalnızca sekme ve eğilme). |
| **Gerçek Türkiye haritası** | `js/game.bundle.js` | Karakter seçim ekranındaki harita gerçek sınırla değiştirildi. Aşağıdaki "Seçim ekranı haritası" bölümüne bakın. |
| Yedek 4 | `js/game.bundle.js.bak-harita-oncesi` | Bacak bölmeli yürüyüş **var**, seçim ekranında hâlâ **eski elle çizilmiş harita** olan hali (haritadan önceki). |
| **Zemin teması ve K.O. yatışı** | `js/game.bundle.js` | Yürürken ayaklar zeminde havada kalıyordu, K.O. olan karakter yarım olarak zeminin altına gömülüyordu. İkisi de düzeltildi. Aşağıdaki "Zemin teması ve K.O. yatışı" bölümüne bakın. |
| Yedek 5 | `js/game.bundle.js.bak-zemin-oncesi` | Harita ve Sakarya **var**, zemin/K.O. düzeltmesi **yok** hali. |
| **Koruma (guard)** | `js/game.bundle.js` | Basılı tutulan koruma tuşu, stamina, bot koruması. Aşağıdaki "Koruma (guard)" bölümüne bakın. |
| Yedek 6 | `js/game.bundle.js.bak-koruma-oncesi` | Zemin/K.O. düzeltmesi **var**, koruma **yok** hali. |
| **3 raunt sistemi** | `js/game.bundle.js`, `index.html` | Street Fighter tarzı "en iyi 3": 2 raunt kazanan maçı alır. Aşağıdaki "3 raunt sistemi" bölümüne bakın. |
| Yedek 7 | `js/game.bundle.js.bak-raunt-oncesi` | Koruma **var**, raunt sistemi **yok** (tek raunt) hali. |
| **Ayarlar (settings)** | `js/game.bundle.js` | Başlık menüsünde ve duraklatma menüsünde AYARLAR. Ses, raunt, süre, hasar, koruma, ulti, görüntü ve tuş atama. Aşağıdaki "Ayarlar (settings)" bölümüne bakın. |
| Yedek 8 | `js/game.bundle.js.bak-ayarlar-oncesi` | 3 raunt sistemi **var**, ayarlar menüsü **yok** hali. |
| **SF2 tarzı karakter seçimi** | `js/game.bundle.js` | Sabit piksel Türkiye haritası (bayraklı şehirler, 1P/2P işaretleri), 6 kutuluk karakter ızgarası, seçilen karakter 3D dönüyor, RASTGELE seçeneği. Aşağıdaki "SF2 tarzı karakter seçimi" bölümüne bakın. |
| Yedek 9 | `js/game.bundle.js.bak-secim-oncesi` | Ayarlar menüsü **var**, yeni seçim ekranı **yok**. |
| **Yeni karakter: METEHAN** | `js/game.bundle.js`, `js/assets.js`, `assets/metehan.webp`, `assets/frames/metehan_*.webp` | Müzisyen, hantal ve sert vuran karakter, yıldırımlı nota ultisi. Aşağıdaki "Yeni karakter: METEHAN" bölümüne bakın. |
| Yedek 10 | `js/game.bundle.js.bak-metehan-oncesi` | SF2 tarzı seçim ekranı **var**, Metehan **yok**. |
| **Arena arka planı değişti** | `assets/ankara_map.webp` | Kullanıcının verdiği yeni görsel (hilal ay, **Atakule** sağda görünür) eski görselin (dolunay, Atakule yok) yerine kondu. Boyut aynı (1376×768), kod değişmedi. Eski görsel 16 Ekim temizliğinde kaldırıldı. |

#### Eğilme düzeltmesi (ayrıntı)

- **Sebep:** `crouch` sprite'ları, `idle` sprite'larına göre yaklaşık **1,4 kat büyük** çizilmiş (kafa ve ayakkabı ölçüsünden ölçüldü: UMUT ≈1,38×, SUDEM ≈1,45×). Oyun kodu bunu dengelemek için eğilme karesini `0.56` ile çarpıyordu. Bu değer çok düşük olduğundan kafa ve gövde de küçülüyordu (yaklaşık %22–28 fazla küçük).
- **Değişiklik:** Bundle içindeki poz ölçek tablosunda `crouch:.56` → `crouch:.71`.

  ```js
  hg={idle:1,punch:.97,kick:.98,hurt:.95,jump:.84,ult:.95,crouch:.71}
  ```
- **Doğrulama:** UMUT ve SUDEM için önce/sonra ekran görüntüsü alındı. Eğilirken kafa ve gövde boyutu idle ile aynı, karakter çömeliyor. Konsolda hata yok.
- **Bilinçli bırakılan:** Eğilmiş karakterin **hurtbox**'ı (vurulabilir alan) değiştirilmedi, hâlâ ayakta boyun %50'si. Görsel büyüdüğü için kafa, yüksek bir yumruğun hizasında görünüp yumruğu ıskalatabilir. Hurtbox'ı görsele uydurmak eğilmenin yumruktan kaçma gücünü azaltır. Bu bir denge kararıdır, kullanıcıya bırakıldı.
- **Diğer pozlar:** zıplama (`.84`), hurt (`.95`), yumruk (`.97`), tekme (`.98`) ve ulti (`.95`) ölçekleri oyundaki boyutlarıyla yan yana konup kontrol edildi, tutarlı görünüyorlar.

#### Animasyon ekleme (1. tur)

Yeni sprite gerektirmeyen, tamamen kodla üretilen animasyonlar eklendi. Hepsi **yalnızca görsel**: hitbox, hurtbox, hasar ve çarpışma değerleri aynı kaldı.

- **Yer:** `xy()` çizim fonksiyonunun hemen öncesine yeni `AF_applyAnim(e,t)` fonksiyonu eklendi. Karakterin ayaklarını merkez alarak ötele/döndür/ölçekle dönüşümü uygular. K.O. durumunda uygulanmaz.
- **Yeni alanlar (`Fighter`):** `landT` (iniş ezilmesi sayacı, 150 ms) ve `jumpT` (kalkış uzaması sayacı, 130 ms). `updateFighter`'da azalıyor, `onLand` ve zıplama anında kuruluyor.

| Animasyon | Nasıl çalışıyor |
|---|---|
| **Bekleme nefesi** (#2) | `animT` ile sinüs: dikey ölçek ±%1,3, yatay ters yönde ±%0,6, yaklaşık 1,5 sn periyot. Eğilirken %60 şiddetinde. Her karakterin `animT` başlangıcı rastgele, yani ikisi senkron nefes almıyor. |
| **Yürüme** (#1, geçici) | Sekme (7 px'e kadar), ileri yürürken öne 3°, geri yürürken arkaya 1,5° eğilme, hafif sallanma ve adım ritmiyle ölçek oynaması. Gerçek bacak hareketi değil, kare gelince değişecek. |
| **Zıplama kalkışı** (#6) | İlk 130 ms'de dikey uzama %8, yatay daralma %5. |
| **Zıplama inişi** (#6) | İlk 150 ms'de dikey ezilme %13, yatay genişleme %9. K.O. dışındaki tüm inişlerde (fırlatılıp inme dahil). |
| **Saldırı hazırlığı** (#3) | Başlangıç süresi boyunca karakter geriye çekilir ve arkaya eğilir (en fazla 8 px ve 5°, ağır saldırıda daha belirgin). Başlangıç süresi uzadıkça şiddet artıyor. |
| **Saldırı atılması** (#3) | Vuruş karesine geçince ileri atılır ve yavaşça yerine döner (en fazla 8 px, 4°). Ulti hariç tüm saldırılarda. |

**Test:** Canvas'tan kare kare kayıtla yürüme, zıplama ve güçlü yumruk, ayrıca bekleme için kareler arası piksel farkı incelendi. Tam maç akışı (1P/2P, K.O., menüler, ultiler, tekrar oyna) tekrar çalıştırıldı, konsolda hata yok.

**Bilinen sınırlar:**
- Saldırı atılması görsel bir kayma, vuruş kutusu eski konumunda kalıyor. Fark en fazla 8 px.
- Saldırının ilk kısmında hâlâ idle karesi gösteriliyor, hazırlık yalnızca kayma ve eğilme ile veriliyor.

#### Yürüme animasyonu (Street Fighter tarzı)

Street Fighter'daki gibi **üst gövde sabit** kalır (guard duruşu korunur), **bacaklar sırayla adım atar**. Yeni sprite gerekmedi: idle karesi kodla bacaklara bölünüyor.

- **Bölme (`AF_legParts`):** İlk kullanımda idle karesi analiz edilir. Alttan itibaren bacakların iki ayrı parçaya ayrıldığı ilk satır (kasık, yaklaşık y=406) ve iki bacak arasındaki boşluğun ortası (yaklaşık x=162) bulunur. Üç parça üretilir: **üst gövde** (kasığın biraz altına kadar), **arka bacak** (sol parça) ve **ön bacak** (sağ parça). Üst gövde, bacakların üstüne çizilerek kalça birleşimi gizlenir. UMUT ve SUDEM'de aynı ayrım noktası çıktı. Ayna maçındaki renk değişmiş sprite'larda da çalışır. Analiz başarısız olursa eski yürüyüşe (yalnızca sekme) geri düşer.
- **Adım döngüsü (`AF_drawBody`):** İki bacak kalçadan döndürülür, ters fazda ve ileri yürürken ±12°, geri yürürken ±9°. Havadaki (öne savrulan) bacak %7 kısalır, yani ayak yerden kalkar.
- **Faz (`AF_walkStep`):** Adım fazı zamanla değil **gidilen mesafeyle** ilerler, yani ayaklar yer hızıyla uyumlu hareket eder (yaklaşık 178 px'te bir tam adım döngüsü). Geri yürürken faz tersine akar. Yürüme başlayınca/bitince 90–110 ms'lik yumuşak geçiş var, bacaklar aniden zıplamıyor.
- **Gövde:** Her adımda 3,5 px'e kadar sekme, ileri yürürken öne 2°, geri yürürken arkaya 1° eğilme (`AF_applyAnim`).
- **Yeni alanlar (`Fighter`):** `walkP` (adım fazı), `walkB` (yürüme karışım ağırlığı 0–1).
- **Test:** UMUT ve SUDEM için ileri/geri yürüme kareleri kaydedildi, yakın çekimde kalça birleşiminde dikiş izi görülmedi. Menü, K.O., ulti, tekrar oyna regresyon testleri geçti, konsolda hata yok.
- **Sınırı:** Bu bir "kesilmiş bacak" yöntemi, çizilmiş yürüme kareleri kadar doğal değil. Dizlerin bükülmesi, ayağın yere basması gibi ayrıntılar yok. İleride gerçek yürüme kareleri çizilirse kod bunların yerine kolayca bağlanabilir.

#### Seçim ekranı haritası (gerçek Türkiye)

Karakter seçim ekranının ortasındaki neon harita, 42 noktalı elle çizilmiş şekil yerine **gerçek Türkiye sınırıyla** değiştirildi.

- **Veri:** Natural Earth (npm `world-atlas` paketi, 50m ölçeği). Türkiye'nin iki ana parçası (Anadolu ve Trakya) alındı, adacıklar atıldı. Sınır, harita kutusunda piksel hassasiyetiyle (Douglas–Peucker, 0,9 px) sadeleştirildi: **280 nokta** (Anadolu 242, Trakya 38).
- **Projeksiyon:** Enlem düzeltmeli (x ekseni cos 39° ile ölçekli), böylece şekil gerçek haritadaki gibi görünür. Harita kutusu 680×300 px, Türkiye genişliğe sığıyor (yükseklik yaklaşık 293 px).
- **Şehirler (gerçek koordinatlar):**

| Şehir | Enlem, boylam |
|---|---|
| İstanbul | 41,0082 K · 28,9784 D |
| Ankara (arena, altın yıldız ve halkalar) | 39,9334 K · 32,8597 D |
| Kayseri | 38,7312 K · 35,4787 D |
| Samsun | 41,2867 K · 36,3300 D |
| Sakarya | 40,7569 K · 30,3783 D |
| Çorum | 40,5506 K · 34,9556 D |

  Eski şehirler (İzmir, Antalya, Trabzon, Diyarbakır) kaldırıldı. Sakarya, ilk haritadan sonra ayrıca eklendi (etiketi noktanın sağ altında, sola hizalı).
- **Kodda:** `dy` artık tek çokgen yerine **halka dizisi** (düz `x,y,x,y...` listeleri), `fy` şehir listesi (her şehre `ox`/`oy` etiket kaydırması ve `al` hizalama alanı eklendi), `py` Ankara konumu. Çizim kodu birden çok halkayı çiziyor, çizgi köşeleri yuvarlak (`lineJoin=round`), böylece keskin köşelerde uzayan sivri çizgiler olmuyor. Şehir noktaları koyu halkayla kıyı çizgisinin üstünde okunur.
- **Etiketler:** İstanbul etiketi noktanın soluna (sağa hizalı), Samsun etiketi noktanın altına alındı, çünkü ikisi de kıyıda ve varsayılan konumda çizgiye biniyordu.
- **Test:** 1P ve 2P seçim ekranlarında harita çiziliyor, tam maç akışı (K.O., menüler, ulti, tekrar oyna) ve ayna maçı geçti, konsolda hata yok.
- **Eklenmedi:** Karadeniz, Akdeniz gibi deniz yazıları. İstenirse eklenebilir.

#### Zemin teması ve K.O. yatışı

İki sorun vardı: (1) yürürken karakter zemin çizgisinin biraz üstünde kalıyordu, (2) K.O. olan karakter geriye savrulup hurt karesi 90° döndürülünce vücudun yarısı zemin çizgisinin altına, ekran kenarına gömülüyordu. Hepsi yalnızca görsel, oynanış değerleri değişmedi.

- **Yürürken zemin teması:** Her karede iki ayağın tabanındaki en alçak nokta hesaplanıyor ve çizim o kadar kaydırılıyor. En alçak ayak her zaman zemin çizgisinde (F2 sarı çizgi). Önceki sürümdeki yürüme sekmesi ve öne eğilme de kaldırıldı, kalça hareketi basılı ayağın yere oturmasından doğal olarak çıkıyor.
- **K.O. yatışı:** Hurt karesi artık tek parça döndürülmüyor. Kalçadan **gövde (kafa ve kollar)** ve **bacaklar** diye ikiye bölünüyor. Gövde ekseni (kafa → kalça) ve bacak ekseni (kalça → ayaklar) ayrı ayrı yere **paralel** hale getiriliyor. Kalçadaki açık boşluk, bacağın üst dilimi birkaç ara açıyla çizilerek dolduruluyor.
- **Yere oturma:** Yatan vücudun en alçak noktası her karede zemin çizgisine (`y=704`) oturtuluyor. Yere temas hesabı yalnızca gövde ve bacak çekirdeğinden yapılıyor, yana sarkan kol/elin sprite'ı havada tutmaması için. Sarkan elin zemin altına inen kısmı zemin çizgisinde kırpılıyor, yani hiçbir şey zeminin altına çıkmıyor.
- **Ekran içinde kalma:** K.O. olan karakterin yatan gövdesi ekran kenarından taşmıyor (yatay sınır, yatış geometrisinden hesaplanıyor). Gölge de yatan vücuda göre genişliyor.
- **Test:** UMUT ve SUDEM, sol kenarda, ortada ve sağ kenarda K.O. edildi, hepsi yere paralel yatıyor. Yürüyüşte ayak tabanı zemin çizgisinde. Başlık/seçim/maç/duraklatma/tekrar oyna/ayna maçı testleri geçti, konsolda hata yok.
- **Bilinen sınır:** K.O. yatışında bacak dizleri hafif bükülü kalıyor, ayak ucu zeminden birkaç piksel yukarıda olabilir (sprite'ın kendi pozu). Kazanan, kenarda K.O. olan karakterin üstüne binebilir (K.O.'lu gövde çarpışmaya katılmıyor). Çizilmiş "yatma" karesi hazır olursa kod onunla değiştirilebilir.

#### Koruma (guard)

- **Tuşlar:** P1 **V**, P2 **Num 3** (alternatif **L**). **Basılı tutulur**, bırakınca biter. Aşağı (S / ▼) ile birlikte basılırsa **eğilerek** korur (eğilme karesi, hurtbox küçülür). Koruma yerde çalışır, havada çalışmaz. Koruma sırasında saldırı ve ulti başlatılamaz, yürünemez.
- **Ne korur:** Karşıya bakarken gelen her şey (yumruk, tekme, güçlü yumruk, ağır tekme ve ulti mermileri: fotoğraf, araba, yüzük).
- **Korunan vuruş:** Hasarın %12'si (ulti mermilerinde %30) "sıyrık" olarak yenir, en az 1. **Sıyrıkla ölünmez**, can en az 1'de kalır. Fırlatma ve hitstun yok, yalnızca hafif geri itilme (korunan taraf geriye kayar, saldırgan biraz geri tepme alır). Rakibin ve kendi ulti barına küçük pay eklenir. Ekranda **BLOK -N** yazısı, mavi kıvılcım, kısa hitstop.
- **Koruma barı (stamina):** Her karakterin 100'lük bir koruma barı var. Karakterin başının üstünde, **yalnızca dolu değilken ya da korurken** görünür (mavi, 35'in altında kırmızı). Korunan her vuruş hasarının **2,6 katı** kadar (ulti mermisi 3,5 katı) bar götürür: yumruk 18, tekme 29, güçlü yumruk 31, ağır tekme 39. Koruma yapılmazken saniyede 12 dolar.
- **Koruma kırılması:** Bar vuruşu karşılayamayacak kadar azsa koruma kırılır, **vuruş tam hasarla geçer**, ekranda KORUMA KIRILDI! yazar ve bar 30'a döner (ağır tekmeyi karşılamaya yetmez).
- **Görsel:** Yeni çizim gerekmedi. Koruyan karakter hafif geri yaslanır, önünde mavi parlak yay (kalkan) görünür, vuruş yiyince yay parlar ve karakter biraz geri sarsılır.
- **Bot:** Koruma desteği var, sadece rakip saldırı menzilindeyken ya da mermi yaklaşırken devreye girer: KOLAY %12, NORMAL %30, ZOR %50. Koruma 360–620 ms sürer, ardından 450 ms yeniden korumaz (sonsuz koruma yok).
- **Kontrol yazıları:** Başlık ekranı, seçim kartları ve savaş altı bilgi çubuğu güncellendi.
- **Test:** Korunan yumruk/tekme hasarı ve bar düşüşü ölçüldü (yumruk: 1 can + 18 bar). Bar bitince koruma kırıldı. Eğilerek koruma çalıştı. Üç bot zorluğunda bot koruma yaptı (KOLAY ~%5, NORMAL ~%24, ZOR ~%22 süre). Başlık, seçim, maç, duraklatma, tekrar oyna, ayna maçı, K.O. testleri geçti, konsolda hata yok.
- **Bilinen sınırlar:** Çizilmiş koruma karesi yok. Havada koruma yok. Dengeleme (sıyrık oranı, bar boyutu, bot oranları) oyunda gerçek gözle denenmedi, değerler bundle'daki `AF_block` ve bot ayarlarında. Eğilerek korumanın alçak/yüksek ayrımı yok (ikisi de her vuruşu karşılar).

#### 3 raunt sistemi (en iyi 3)

- **Kural:** Maç **2 raunt kazanan** oyuncuya aittir, en fazla 3 raunt oynanır. Her rauntta süre 99 saniye. Raunt, K.O. ile ya da süre dolunca (kalan cana göre) biter.
- **Raunt arası:** K.O./süre dolması yazısından sonra (yaklaşık 1,9 sn) iki karakter başlangıç yerine döner, **canlar ve koruma barı doluyor**, süre 99'a döner. Ekranda **RAUNT 2** (1–1 ise kırmızı **SON RAUNT!**) çıkar, ardından DÖVÜŞ!. Hafif beyaz ışıma geçişi var.
- **Ulti barı raunttan rauntta taşınır** (Street Fighter 4/5 gibi). Hasar ve kombo istatistikleri de maç boyunca toplanır.
- **Beraberlik:** Süre dolunca can eşitse o raunt **iki tarafa da bir galibiyet** yazar. Örneğin 1. raunt berabere = 1–1, son raunta gidilir. Üst üste iki beraberlik (2–2) maçı **BERABERE** bitirir.
- **HUD:** Süre kutusunun altında `RAUNT n` yazısı ve iki yanda ikişer yuvarlak (kazanılan raunt renkli dolu yanar).
- **Sonuç ekranı:** Başlık maç kazananını gösterir ("P1 KAZANDI!"). İstatistik tablosuna **RAUNT** satırı eklendi (örn. 2 – 1). "KALAN CAN" son rauntın canı. Seçim ekranı alt yazısı "EN İYİ 3 RAUNT" oldu.
- **Menüler:** Duraklatma menüsündeki YENİDEN BAŞLAT ve sonuç ekranındaki TEKRAR OYNA, raunt sayacını ve galibiyetleri sıfırlayıp 1. rauntla başlatır.
- **Bot:** Her raunt yeni bot örneği oluşur (düşünme süreleri sıfırlanır), zorluk aynı kalır.
- **Test:** 1. raunt K.O. sonrası 2. raunta geçiş, 1–1 sonrası SON RAUNT, 2–1 ile maç bitişi, süre dolunca beraberlik (1–1 ve 2–2), tekrar oyna sıfırlaması denendi. Eski testler (başlık, seçim, bot maçları, duraklatma, ayna maçı, K.O. yatışı) geçti, konsolda hata yok. Gerçek zamanlı oynanışta raunt geçişinin hissi (yazı süreleri) gerçek gözle denenmedi.
- **Eklenmedi:** "UMUT RAUNDU KAZANDI" yazısı ve kazanan zafer pozu (zafer karesi yok). Raunt sayısı ve süre ayar menüsü yok, sabit 3 / 99 sn.

#### Ayarlar (settings)

- **Nereden açılır:** Başlık ekranında **AYARLAR** düğmesi (ya da **3** tuşu), maç sırasında duraklatma menüsünde (**ESC / P**) AYARLAR. ESC ya da KAPAT ile kapanır. Dışarı tıklamak da kapatır.
- **Kayıt:** Ayarlar tarayıcının `localStorage` alanında (`ankara-fighter-ayarlar-v1`) otomatik saklanır, sayfa yenilenince ya da oyun yeniden açılınca korunur. Bozuk ya da eksik kayıt varsayılana döner. **HEPSİNİ SIFIRLA** her şeyi varsayılana çeker.
- **SES:** Ses seviyesi (%0–100) ve sessize alma. Müzik yok, yalnızca efekt sesleri.
- **OYUN:**
  - Raunt sayısı: **1 / 3 / 5** (kazanmak için 1 / 2 / 3 raunt). Varsayılan 3.
  - Raunt süresi: **30 / 60 / 99 sn / ∞** (süre sınırı yok, sayaçta ∞ yazar). Varsayılan 99.
  - Hasar çarpanı: **×0.5 / ×1 / ×1.5 / ×2**. Vuruş hasarı ölçeklenir, en az 1. Varsayılan ×1.
  - Koruma (guard) açık/kapalı. Kapalıyken kimse (bot dahil) koruma yapamaz.
  - Ulti açık/kapalı. Kapalıyken ulti barı dolmaz.
  - Raunt sayısı ve süre **yeni maçta** geçerli (duraklatma menüsünden değiştirilirse "yeniden başlat"tan sonra). Diğerleri anında etki eder.
- **GÖRÜNTÜ:** Ekran sarsıntısı, hasar sayıları, tarama çizgileri (CRT), kontrol ipuçları çubuğu, hitbox görünümü (F2 ile de değişir ve ayarda saklanır). Hepsi açık/kapalı.
- **KONTROLLER:** Her oyuncu için 10 eylemin (sol, sağ, zıpla, eğil, yumruk, tekme, güçlü yumruk, ağır tekme, koruma, ulti) tuşu değiştirilebilir. Eyleme tıkla, sonra yeni tuşa bas. Başka bir eyleme ait tuş seçilirse iki eylemin tuşu **yer değiştirir**. ESC iptal eder. Ayrılmış tuşlar atanamaz: Enter, ESC, P, F2, Tab, Meta. P2'nin varsayılanında her eylem için iki tuş var (örn. Num 1 ve J), yeniden atanınca o eylem tek tuşa iner. "Tuşları varsayılana döndür" düğmesi var. Başlık ekranı, seçim kartları, savaş altı çubuğu, ulti hazır bildirimi ve ulti barındaki tuş yazısı **atanan tuşlara göre** kendini günceller.
- **Sabit kalanlar:** Menü tuşları (W/S/Enter, seçim ekranında A/D, ◄/►, Z, Num 1 / J, 1/2/3 zorluk), ESC/P duraklatma. Bot zorluğu seçim ekranında yapılır, ayarlarda yok.
- **Kodda:** `AF_S` ayar nesnesi, `AF_set/AF_apply/AF_save`, `AF_keymap` (tuş haritası, eski `Fy` tablosunun yerine), `AF_Settings` (React modal). Arayüz derlenmiş CSS'te olmayan sınıflar yüzünden satır içi stillerle yazıldı.
- **Test:** Modal açılması, sekmeler, tuş atama (çakışmada yer değiştirme, ESC ile iptal), kayıt ve yeniden okuma, bozuk kayıt, sıfırlama, ses/raunt/süre/hasar/koruma/ulti/sarsıntı/tarama/ipucu/hitbox ayarlarının oyuna yansıması, duraklatma menüsünden ayar açıp ESC ile yalnızca modalı kapatma denendi. Eski testler geçti, konsolda hata yok.
- **Bilinen sınırlar:** Seçim ekranından ayarlar açılmıyor (başlık ve duraklatma menüsünden açılır). Gamepad desteği yok. Tuş atamada aynı tuşu iki oyuncuya vermek takasla engellenir ama klavyenin aynı anda basılabilen tuş sınırı (ghosting) kullanıcının donanımına bağlı. Ayarlar tarayıcı başınadır, cihazlar arası senkron yok.

#### SF2 tarzı karakter seçimi

Street Fighter II "PLAYER SELECT" ekranından esinlenildi. Seçim ekranı yeniden yazıldı (`gy`, `AF_Map`, `AF_Grid`, `AF_Turntable`, `AF_Card`).

- **Harita:** Türkiye sabit, piksel görünümlü (düşük çözünürlükte çizilip büyütülüyor), koyu kırmızı gölge, denizde tarama çizgisi. Her şehirde dalgalanan Türk bayrağı ve isim etiketi. Altın yıldızlı **ANKARA · ARENA** halkalarla vurgulanır. Kırmızı **1P** ve mavi **2P** işaretleri seçilen karakterin memleket şehrinde durur.
- **Memleket şehirleri:** `AF_HOME = {umut:'İSTANBUL', sudem:'SAMSUN'}`. Bunlar **yer tutucu**, gerçek memleketleri değil. İstenen şehir adı bu nesnede değiştirilir.
- **Izgara:** 3×2 kutu. UMUT, SUDEM, RASTGELE (?) ve 3 kilitli "YAKINDA" kutu (ileride yeni karakter için). Sol tık: P1, sağ tık ya da Shift+tık: P2. Seçili kutuda yanıp sönen 1P / 2P çerçevesi, HAZIR olunca ✓.
- **3D dönüş:** Kart içinde CSS 3D döner tabla (9 katmanlı sprite). Karakter değişince 360° döner, HAZIR basınca 2 tur atar, sonra hafifçe sallanır. RASTGELE seçiliyken altın bir "?" döner.
- **RASTGELE:** Haritadaki işaret şehirler arasında zıplar. HAZIR'a basınca ya da dövüş başlayınca karakter rastgele belirlenir.
- **Tuşlar:** A/D (P1) ve ◄/► (P2) artık UMUT → SUDEM → RASTGELE döngüsünde gezinir. Z / Num 1 hazır, Enter dövüş, 1/2/3 bot zorluğu. Ayarlardan atanan tuşlar kartlardaki kontrol özetine yansır.
- **Karar:** Kullanıcı önce "dönen dünya (globe)" seçti, sonra serbest yazıda "harita sabit kalsın, karakterler dönsün" dedi. İkinci cevap uygulandı. Globe istenirse haritaya eklenebilir.
- **Test:** Klavye ve fare ile seçim, sağ tık / Shift+tık, kilitli kutuların tıklanamaması, RASTGELE'nin hazır ve dövüş anında çözülmesi, bot modu, 1360×768'de taşma olmadığı ve eski testler (raunt, koruma, ayarlar) denendi. Konsolda hata yok.
- **Bilinen sınırlar:** Gerçek bir "dünya" modeli yok. 3D dönüş sprite katmanlarıyla yapılıyor, gerçek 3D model değil. Çok dar ekranlarda kartlar sığmayabilir.

#### Yeni karakter: METEHAN

Kullanıcının verdiği pixel-art görselden eklendi. Samsunlu, 165 cm, 90 kg, müzisyen.

- **Görsel:** İki kaynak görsel kullanıldı: **dövüş duruşu** (gitar sırtta, bir yumruk kalkık) ve **ulti pozu** (gitar çalarken). Krem arka plan ve ulti görselindeki çimen/nota akışı temiz silindi, 1/3 küçültülüp `assets/metehan.webp` (seçim portresi = dövüş duruşu) ve `assets/frames/metehan_{idle,crouch,jump,punch,kick,hurt,ult}.webp` olarak kaydedildi. `js/assets.js` manifestine 8 satır eklendi.
- **Pozlar:** `idle` = dövüş duruşu. `ult` = gitar çalma görseli (notalar oyun tarafından çiziliyor). Ulti karesi, bekleme karesiyle **aynı boya** ölçeklendi; böylece ulti atarken karakter kısalmıyor, boyu sabit kalıyor (ekranda 232 px, kafa üst noktası idle ile aynı y'de). Diğerleri dövüş duruşundan kol/bacak ayrılarak türetildi (UMUT/SUDEM tarzı): **zıplama** bacaklar sıkıştırıldı, **eğilme** kullanıcının verdiği gerçek çömelme pozundan (aynı görseldeki ayakta figüre göre ölçeklendi; oyunda idle 232 px iken eğilme 187 px, yani karakter çömeliyor), **yumruk** ve **tekme** için kullanıcı, karakterin stilinde hazır iki referans sprite (gitar sırtta, kol/bacak tam uzanmış) verdi; bunlar kırpılıp kafa ölçüsüne göre idle ile aynı boya ölçeklendi ve doğrudan kare olarak kullanıldı — uzuvlar artık bütün ve doğal, gitar iki pozda da sırtta, **acı** geriye yatık, **ileri koşu** (`run`) kullanıcının verdiği dash görselinden (gitar sırtta, öne eğik atılma). Bu pozlar hâlâ tek görselden üretilmiş yaklaşık pozlar; elle çizilmiş gerçek kareler gelirse aynı adlarla değiştirilince kod değişmeden çalışır.
- **Ölçek:** Yükseklik 232 (SUDEM 227, UMUT 250). Tüm pozlar aynı ölçekte çiziliyor (`same:true`), eğilmede küçülme sorunu yok. `Cg` fonksiyonuna bu seçenek eklendi.
- **Denge (`mod`):** Yürüme hızı ×0,78, zıplama ×1,03 (üst plakaya çıkabilsin diye; ×0,93 iken 22 px yetişemiyordu), saldırı başlangıç ve toparlanma süreleri ×1,25 (hantal). Verdiği hasar ×1,30, geri tepme ×1,15. Hasar çarpanı ayar menüsündeki hasar çarpanıyla çarpılır. Örnek: yumruk 7 → 9, ulti notası 11 → 14.
- **Ulti: YILDIRIM NOTALARI:** Gitarın sapından aynı hizada düz bir çizgide 3 nota 190 ms arayla fırlar (♪, ♫, ♪). Etrafında kıvrılan sarı yıldırım çizgileri, arkasında kıvılcım izi vardır. Gitardan **yoğun bir nota akışı** fışkırır: 14 nota peşpeşe (32 ms arayla), farklı renk (camgöbeği/mor/mavi), boy, hız ve dikey yayılımla. Her nota 3 hasar (en fazla ~42, eski 3 notalı ulti ile aynı denge), etrafında gökkuşağı yıldırım. Notalar **8-bit piksel** stilinde (blok blok, keskin kenar; küçük tuval + eşikleme ile üretilip imageSmoothing kapalı büyütülüyor). İsabette hafif sarsıntı ve renkli parçacık. Bot da kullanır (ulti mantığı ortak).
- **Seçim ekranı:** Izgarada üçüncü kutu METEHAN, RASTGELE dördüncü oldu. Harita işareti **SAMSUN**. SUDEM'in yer tutucu şehri SAMSUN'dan **KAYSERİ**'ye alındı (ikisi üst üste biniyordu). A/D döngüsü UMUT → SUDEM → METEHAN → RASTGELE.
- **Test:** Seçim, 1P/2P/bot maçı, yumruk (9 hasar), tekme, eğilme, zıplama, yürüme hızı (500 ms'de 129 px, UMUT 165 px), ulti (3 isabet, 42 hasar), K.O. yatışı, ayna maçı (METEHAN vs METEHAN) ve eski testler (raunt, koruma, ayarlar) geçti. Konsolda hata yok.
- **Koşu çarpması (Metehan) — zırhlı giriş, atanabilir tuş:** Hantal karaktere Street Fighter tarzı "güçlü ama riskli giriş" aracı. **Koşu** kontrolü Ayarlar → Kontroller'de görünür, yeniden atanabilir (varsayılan P1 = Space, P2 = Sağ Shift / Numpad 7).
  - **Her basışta değil:** Tuşa **bir kez basınca** Metehan sabit süreli (~420 ms) öne atılır (hız 780, koşu karesi). Atılma bitince ~750 ms **bekleme** başlar; basılı tutmak veya spam işe yaramaz.
  - **Süper zırh:** Atılma sırasında **1 vuruşu yer** — hasarın yalnızca %40'ını alır, sendelemez, yoluna devam eder (altın parçacık + flaş). İkinci vuruş zırhı kırar: tam hasar alır, sersemler ve atılma biter. Yani zonlanamaz ama okunursa cezalandırılır.
  - **Çarpma:** Düşmana değerse orta hasar (temel 5 → ×1,3 = **~7**) + **güçlü geri savurma** (kbx 720, ~150 px) + sersemleme. İş öldürmek değil, mesafe açıp baskı kurmak.
  - **Tanklık (C):** Metehan'ın canı **175** (diğerleri 150). Can barı normalize, aynı genişlikte ama vuruş başına daha az iniyor. Motorda `maxHp` (karakter `mod.hp`'den), `AF_resetFighter` ve HUD barları `maxHp` kullanır.
  - Motorda: keymap `dash` eylemi (press-edge `pDash`), `dashT` (atılma), `dashCd` (bekleme), `armor` (zırh), `AF_dashHit`; zırh ve kırılma `applyHit` içinde. Öncesi `js/game.bundle.js.bak-ac-oncesi`.
  - **Denge düzeltmesi (space-spam istismarı):** Space'e basıp düşmanı sürekli uzağa savurup yaklaşamadan maçı çabuk bitirme istismarı kapatıldı. (1) Atılma artık **ulti barından 25 harcar** ve bar ≥25 değilse çalışmaz → sonsuz spam yok (dolu bardan en fazla ~4 atılma, sonra normal dövüşüp bar doldurmak gerek; round başında spam yapılamaz). (2) Savurma **makul** seviyeye indi (kbx 720→470, ~87 px; artık ekran boyu uçurmuyor, düşman tekrar yaklaşabiliyor, Metehan yakın kalıp cezalanabiliyor). (3) Çarpma hasarı 5→4, sersemleme 400→300 ms (ıskalarsa daha açık), bekleme 750→850 ms. Zırh ve 175 can aynı kaldı. Öncesi `js/game.bundle.js.bak-nerf-oncesi`.
- **Bilinen sınırlar:** Dövüş pozlarında gitar sırtta, ulti pozunda elde (gitar çalıyor). Hurtbox idle görselinden hesaplanıyor; tekmenin görsel menzili uzun ama vuruş kutusu kod değeriyle sınırlı. Ulti artık tek tük değil **yoğun renkli nota akışı** (14 nota), mavi/mor/camgöbeği, gökkuşağı yıldırımlı — referans görseldeki gibi. Toplam hasar eski dengede (~42).

#### K.O. donma düzeltmesi

Karakter öldüğünde yaşanan "donma" hissi için iki düzeltme yapıldı:
- **Gerçek hata:** Metehan **atılma (dash) sırasında ölürse**, atılma hız-geçersiz kılması `ko` durumunu kontrol etmiyordu → ölü karakter yere yığılmak yerine kayıyor/koşuyordu. `onKo` artık `dashT/armor/running/dashHit` değerlerini sıfırlıyor ve hız geçersiz kılması `state!=='ko'` şartı alıyor. Ölü karakter artık düzgün yatıyor.
- **His (ölüm anı donması):** Ölüm anında **vuruş-duraklaması (hitstop)** sahneyi ~150 ms donduruyordu → "round bitince donma". `onKo`'da hitstop **0**'landı: artık ölüm anında donma yok, karakter **doğrudan savrulup düşüyor** (fırlatma -320→-520, geriye savrulma artırıldı; ekranda uçup takla atarak yere yığılıyor). K.O. sonrası bekleme ~1,9 sn'den **~0,75 sn**'ye indirildi (ölüm→düşüş→sonraki akış hızlı); "K.O.!" yazısı 900 ms. Ayrıca tarayıcı önbelleği sorunları için `index.html`'de script'lere `?v=ko3` sürüm etiketi eklendi (yeni kod her zaman yüklenir). Böylece "öl ve düş" akışı akıcı.
- **Doğrulama:** Raunt K.O., maç sonu K.O. (sonuç paneli çıkıyor), süre dolması/beraberlik, bot K.O. ve atılma-sırasında-ölme denendi; hiçbiri takılmıyor, konsolda hata yok. Öncesi `js/game.bundle.js.bak-ko-oncesi`.

#### Yeni başlık ekranı (ÇINAR FIGHTS)

- **Arka plan:** Kullanıcının verdiği çınar ağacı / gece şehir görseli (`assets/title_bg.webp`). UI'nin oturduğu orta şerit, görseldeki hazır (mockup) başlık ve menü yazıları çift görünmesin diye bulanıklaştırılıp koyulaştırıldı; kenarlardaki ağaç/şehir net kaldı.
- **Başlık:** "ANKARA FIGHTER" → **ÇINAR FIGHTS** (iki satır, mevcut neon fontlar korundu; kullanıcı "fontları değiştirme" dedi).
- **Menü (çalışır):** `1VSBOT` (bota karşı), `1VS1` (iki oyuncu), `AYARLAR` (ayar modalı), `ÇIKIŞ` (window.close dener; engellenirse tıklayınca kapanan "GÖRÜŞÜRÜZ" ekranı). Klavye: ▲/▼ veya W/S seç, Enter başlat, 1/2/3/4 kısayol.
- **Motorda:** `Og` listesi güncellendi (4 öğe + yeni etiketler), `kg` başlık bileşeni yeniden yazıldı (arka plan görseli, başlık, menü, `quit`/`bye` durumu). Testid'ler korundu (`title-mode-bot/2p/settings/quit-button`). `js/assets.js`'e `title_bg` eklendi. `index.html` script sürümü `?v=t1`.
- **Test:** 4 menü öğesi görünür ve çalışıyor (1VSBOT→select bot, 1VS1→select 2p, AYARLAR→modal, ÇIKIŞ→geri dönülebilir), klavye navigasyonu, konsolda hata yok; r1 geçti. Öncesi `js/game.bundle.js.bak-baslik-oncesi`.

---

## 13. Test Sonuçları (13 Ekim 2026)

**Ortam:** Bulut ortamında yerel sunucu + Chromium (Playwright). Gerçek klavye hissi ve **ses dinlenemedi**. Bu yüzden kullanıcı bilgisayarında ayrıca denenmesi önerilir.

**Genel:** Konsol hatası yok, 404 veren dosya yok, `assets.js` WebP yönlendirmesi çalışıyor.

| Alan | Sonuç |
|---|---|
| Başlık ekranı | ✅ Çalışıyor (1/2 kısayolları dahil) |
| Seçim ekranı (1P ve 2P) | ✅ Karakter değiştirme, HAZIR, bot zorluğu çalışıyor |
| Hareket, zıplama, eğilme | ✅ Çalışıyor (eğilme ölçeği 12'deki gibi düzeltildi) |
| Yumruk ve tekme | ✅ Hasar sayıları ve geri tepme görünüyor |
| UMUT ultisi | ✅ FLAŞ PATLAMASI! çalışıyor (fotoğraf mermisi 9 hasar) |
| SUDEM ultisi | ✅ KA-ÇOV! çalışıyor (araba 14, yüzük 12 hasar) |
| F2 hitbox görünümü | ✅ Çalışıyor |
| Duraklatma menüsü | ✅ ESC ve P çalışıyor. Devam et, yeniden başlat, karakter seçimi, ana menü doğru yere gidiyor |
| K.O. sonucu | ✅ NAKAVT paneli hasar, kombo ve kalan canı doğru gösteriyor |
| Süre dolması | ✅ 2P'de 99 sn sonra BERABERE |
| Tekrar oyna | ✅ Sonuç ekranından yeni maç başlıyor |
| Ayna maçı | ✅ İkinci taraf "SUDEM II" olarak farklı renkle çıkıyor |
| ZOR bot | ✅ Rastgele tuş basarak yenilemedi, bot nakavt etti |

**Küçük gözlemler (hata değil):**
- 2P'de iki oyuncu da hazır olunca 300 ms sonra hâlâ seçim ekranındaydı, Enter ile başladı. 1P'de Z'den sonra hemen başlıyor. Doküman "otomatik başlar" diyor, bu fark ölçülmedi, kesin değil.
- K.O. olan karakterin ayakları ekranın sol kenarından dışarı taşıdı (bkz. Bölüm 14, "Kod okumasında fark edilenler").
- Tarayıcı AudioContext uyarısı normal: ses, ilk kullanıcı etkileşiminden sonra başlıyor.

---

## 14. Animasyon Analizi (değişiklik yapılmadan)

### Mevcut sistem

Her karakterin **7 sabit karesi** var: `idle`, `crouch`, `jump`, `punch`, `kick`, `hurt`, `ult`. `Fighter.pose()` durum makinesinden bir poz seçer, `xy()` fonksiyonu o kareyi tek parça çizer. **Ara kare ve tween yok**, poz anında değişir. Karakterlerin `animT` zamanlayıcısı yalnızca HUD'da kullanılıyor (ulti çubuğu, süre titremesi), karakter çiziminde hiç kullanılmıyor.

Pozun seçimi: `ko`/`hitstun` → hurt · `attack` → saldırı karesi (yalnızca aktif + toparlanmanın ilk yarısında) yoksa `idle`/`jump` · havada → `jump` · eğilme → `crouch` · diğer → `idle`.

### Eksik animasyonlar (öncelik sırasıyla)

| # | Eksik | Şu an ne oluyor | Çözüm |
|---|---|---|---|
| 1 | Yürüme | `walk` durumu var ama poz `idle`. Karakter ayaklarını oynatmadan kayıyor, ileri/geri aynı | Yeni kare (4–6) ister. Karesiz: sekme + öne eğilme |
| 2 | Bekleme (nefes) | Ayakta tamamen donuk | Karesiz: `animT` ile hafif dikey sinüs/ölçek |
| 3 | Saldırı hazırlığı ve geçişi | Başlangıç süresi boyunca idle, sonra kare sıçraması, sonra idle | Kare ister. Karesiz: öne eğilme |
| 4 | Güçlü yumruk, ağır tekme | Normal yumruk/tekmeyle **aynı kare** (4 saldırı, 2 görsel) | 2 yeni kare. Karesiz: büyütme/aura |
| 5 | Yere düşme ve kalkma | Ağır tekme fırlatır ama aynı hurt karesi döndürülmeden iner. K.O.'da hurt karesi 90° döndürülüyor, yatma karesi yok | Yatma/kalkma karesi. Basit düşme için döndürme yeterli olabilir |
| 6 | Zıplama evreleri | Çıkış, tepe, düşüş aynı kare. İnişte ezilme/toz yok | İniş ezilmesi karesiz, tepe/düşüş kareleri ister |
| 7 | Eğilerek saldırı, eğilirken vurulma | Eğilirken yumruk ayağa kalkıp ayakta yumruk oluyor. Eğilirken vurulunca ayakta hurt karesi | Alt yumruk/tekme ve eğik hurt kareleri |
| 8 | Zafer, yenilgi, giriş pozu | Kazanan K.O. sonrası beklemede. HAZIR/DÖVÜŞ! sırasında özel poz yok | Zafer ve giriş kareleri |
| 9 | Blok | Mekanik **eklendi** (Bölüm 12). Çizilmiş kare yok, eğik duruş + kalkan efekti kodla | Çizilmiş koruma/blok karesi |
| 10 | Yön çevirme | Anında ters dönüyor | Düşük öncelik |

### Uygulama durumu

| # | Animasyon | Durum |
|---|---|---|
| 1 | Yürüme | ✅ Street Fighter tarzı bacak bölmeli adım döngüsü eklendi (Bölüm 12). Çizilmiş yürüme kareleri istenirse sonradan bağlanabilir |
| 2 | Bekleme (nefes) | ✅ Eklendi |
| 3 | Saldırı hazırlığı ve geçişi | 🟡 Geri eğilme + atılma eklendi, ara kare yok |
| 4 | Güçlü yumruk, ağır tekme kareleri | ⬜ Başlanmadı |
| 5 | Yere düşme ve kalkma | 🟡 K.O.'da yere paralel yatış eklendi (gövde ve bacak ayrı yatırılıyor, zemine oturuyor). Kalkma ve çizilmiş yatma karesi yok |
| 6 | Zıplama evreleri | 🟡 Kalkış uzaması + iniş ezilmesi eklendi, tepe/düşüş kareleri yok |
| 7 | Eğilerek saldırı, eğik hurt | ⬜ Başlanmadı |
| 8 | Zafer, yenilgi, giriş pozu | ⬜ Başlanmadı |
| 9 | Blok | 🟡 Mekanik ve kodla görsel eklendi (V / Num 3), çizilmiş koruma karesi yok |
| 10 | Yön çevirme | ⬜ Başlanmadı |

### Kod okumasında fark edilenler (test edilmedi)

- **Kazananın kayması (olası):** K.O./süre dolunca girdi kapanıyor, ama yatay hız yalnızca `hitstun`/`attack`/`ko` durumlarında sönüyor. K.O. anında yürüyorsan kazanan sahneyi boydan boya kayabilir, eğilirken veya saldırırken donup kalabilir.
- **K.O. ekran dışı:** Karakter x ekseninde ekran kenarına kısıtlı ama 90° dönünce gövdesi kenardan dışarı taşıyor (testte görüldü).

### Öneri

Yeni görsel olmadan yapılabilecekler: **#1 (geçici), #2, #6'nın iniş ezilmesi, #3'ün eğilmesi**. En çok fark yaratacak yeni görseller: **yürüme döngüsü, yere düşme/kalkma, güçlü yumruk ve ağır tekme kareleri**.

---

## 15. Güncel Durum

### Tamamlanan
- ✅ Tek dosyadan çok dosyalı yapıya ayrıştırma (v3.0)
- ✅ Bot zorluk seviyeleri, serbest karakter seçimi, ayna maçı (v3.1)
- ✅ WebP optimizasyonu
- ✅ Oyun testi (Bölüm 13), engelleyici hata yok
- ✅ Eğilme boyutu düzeltmesi (`crouch` 0.56 → 0.71)
- ✅ Animasyon analizi (Bölüm 14)
- ✅ Animasyon 1. tur: bekleme nefesi, kalkış/iniş ezilmesi, saldırı hazırlık ve atılma (Bölüm 12)
- ✅ Street Fighter tarzı yürüyüş: üst gövde sabit, bacaklar sırayla adım atıyor (Bölüm 12)
- ✅ Gerçek Türkiye haritası: seçim ekranında gerçek sınır, İstanbul/Ankara/Kayseri/Samsun/Çorum/Sakarya (Bölüm 12)
- ✅ Ayarlar menüsü: ses, raunt sayısı/süre, hasar, koruma, ulti, görüntü seçenekleri, tuş atama, kalıcı kayıt (Bölüm 12)
- ✅ 3 raunt sistemi (en iyi 3, 2 kazanan): raunt arası sıfırlama, HUD yuvarlakları, beraberlik kuralı, sonuç ekranında raunt skoru (Bölüm 12)
- ✅ Koruma (guard): V / Num 3, koruma barı, kırılma, bot koruması (Bölüm 12)
- ✅ SF2 tarzı karakter seçimi: sabit piksel Türkiye haritası, 6 kutuluk ızgara, 3D dönen karakter, RASTGELE (Bölüm 12)
- ✅ Yeni karakter METEHAN: hantal/sert vuran müzisyen; renkli 8-bit nota ultisi; koşu/yürüme/eğilme/yumruk/tekme kareleri; zırhlı koşu çarpması (süper zırf + geri savurma) ve 175 can (tank) — Street Fighter tarzı kimlik (Bölüm 12)
- ✅ Zemin teması: yürürken ayaklar zemin çizgisinde. K.O. olan karakter yere paralel yatıyor, zeminin altına girmiyor, ekranda kalıyor (Bölüm 12)

### Açık / karar bekleyen
| Konu | Durum |
|---|---|
| Kalan animasyonlar (Bölüm 14, Uygulama durumu) | Çoğu yeni sprite gerektiriyor. Sprite hazır olunca ya da karesiz basit düşme/zafer pozu istenirse devam edilir |
| Animasyon 1. tur görsel ayarı | Şiddetler (nefes, sekme, ezilme, atılma) beğenilmezse değerleri kolayca değiştirilebilir. Oyunda gerçek gözle denenmesi gerek |
| Eğilmiş karakterin hurtbox'ı | Bilinçli değiştirilmedi, denge kararı kullanıcıda |
| Kazananın kayması | Kod okumasıyla bulundu, doğrulanıp düzeltilmedi (K.O. ekran dışı taşması düzeltildi) |
| 2P otomatik başlama davranışı | Kesin değil, istenirse ölçülür |
| İkinci sahne/karakter, mobil kontrol | Başlanmadı (Bölüm 10). Best of 3 raunt, blok ve ayarlar eklendi |
| Seçim ekranı memleket şehirleri | UMUT → İSTANBUL, SAMSUN → yer tutucu, kullanıcıdan gerçek şehirler beklenir. Globe istenirse ayrıca yapılır |
| METEHAN pozları | Yumruk/tekme/eğilme tek görselden türetildi, gerçek poz çizimleri gelince değiştirilir |
| Orijinal TypeScript/JSX kaynağı | Yok, her değişiklik minify edilmiş bundle üzerinden yapılıyor |

---

## 16. Güncel Durum — 15 Ekim 2026 (ÇINAR FIGHTS)

> Bu bölüm 13 Ekim'den sonra eklenen her şeyi özetler. Yukarıdaki eski bölümler
> (özellikle 6, 7, 14) kısmen güncelliğini yitirmiştir; çakışma olursa **bu bölüm esastır.**
> Kod yapısı ve çalışma düzeni 16 Ekim'de değişti — "Mimari hatırlatma" ve "Çalıştırma" için **Bölüm 17** esastır.

### Oyunun adı
Oyun **"ANKARA FIGHTER" → "ÇINAR FIGHTS"** olarak yeniden adlandırıldı. Yeni bir başlık ekranı
eklendi (arka plan görseli + neon "ÇINAR" / "FIGHTS" başlıkları, 4 maddelik menü: 1VSBOT, 1VS1,
AYARLAR, ÇIKIŞ). Menü klavye (ok/W-S + Enter) ve fare ile gezilebilir.

### Karakterler (3 karakter)
- **UMUT** — Fotoğrafçı. En gelişmiş kit (aşağıdaki özel hareketlerin hepsi UMUT'ta).
- **SUDEM** — McQueen hayranı. Çevik tekmeler, oyuncak araba ultisi.
- **METEHAN** — Müzisyen (yeni, 3. karakter). Koşu çarpması (armored dash), renkli 8-bit nota
  ultisi, tank HP (175). `mod` ile hız/güç/hp çarpanları var; `same:!0` + `run:!0` bayrakları.

### UMUT özel hareketleri (hepsi bu süreçte eklendi)
| Hareket | Tuş (P1 / P2) | Kareler | Özet |
|---|---|---|---|
| **Koruma (guard)** | V / Num3-L | umut_guard, umut_guardlow | Eski "mavi plaka" görseli kaldırıldı; poz-tabanlı (ayakta + eğilerek). Hasar azaltma, `gp` dayanıklılık barı, kırılınca "KORUMA KIRILDI!" korundu. |
| **Flaş Dalgası (projectile)** | F / Num9-H | umut_cast | Uzaktan mavi diyafram mermisi. ~7 hasar, bloklanabilir, ~620ms bekleme + küçük meter maliyeti. Motorun `projectiles` sistemini kullanır. |
| **İleri takla (frontflip)** | çift-ileri (D D / → →) | umut_roll0..7 (8) | Öne 360° takla, **sağa** hareket. Ortada kısa dokunulmazlık, bekleme süresi. |
| **Geri takla (backflip)** | çift-geri (A A / ← ←) | umut_back0..15 (16) | Geriye 360° takla, **sola** hareket. Ayrı 16 karelik set (frontflip'in tersi/aynası değil). |
| **Süpürme Tekme (spinning sweep)** | G / Num8-M | umut_sweep0..11 (12) | Dönerek alçak tekme. 7-8. karelerde hitbox aktif, bacak seviyesinde. 9 hasar, tek-vuruş, bloklanabilir, hitstun. |
| **Koşu çarpması (dash)** | Space / ShiftRight-Num7 | (metehan koşar) | Esas METEHAN hareketi; armored charge, meter maliyeti. |

### Güncel kontroller (özet)
**P1 (UMUT):** A/D hareket · W zıpla · S eğil · Z yumruk · X tekme · Shift/Ctrl güçlü/ağır ·
V koruma · C ulti · F flaş · G süpürme · Space dash · **A A** geri takla · **D D** ileri takla.
**P2:** Oklar hareket · Num1/2 yumruk/tekme · Num4/5 güçlü/ağır · Num3/L koruma · Num0/O ulti ·
Num9/H flaş · Num8/M süpürme · ShiftRight/Num7 dash · **← ←** geri takla · **→ →** ileri takla.
Tüm tuşlar Ayarlar > Kontroller'den değiştirilebilir.

### Diğer değişiklikler
- **KO:** Round sonundaki "donma" kaldırıldı; karakter direkt ölüp düşüyor (daha büyük savrulma).
- **Harita/zemin, raunt, ayarlar menüsü** önceki turlarda düzenlendi.
- **Önbellek:** `index.html` script'lerine `?v=tN` sürüm etiketi eklendi (tarayıcı eski JS'i
  cache'lemesin diye). Her güncellemede N artıyor.

### Sprite üretim yöntemi (arkadaşın için önemli)
Yeni hareketler, AI ile üretilmiş referans sprite sheet'lerinden **Python (PIL + scipy)** ile
çıkarıldı. Yöntem:
1. **Arka plan ayırma:** Düz renk arka plan için kenardan flood-fill; alfası hazır sheet'lerde
   doğrudan alfa kullanılır. Renk-eşiği ile ayırmaktan kaçınıldı (karakterin koyu parçalarını,
   örn. ekose gömleğin lacivert karelerini siliyordu).
2. **Kare ayırma:** Grid'e göre (bağlantıya göre değil) — uzuv kopsa bile o karedeki tüm parçalar
   korunur. Numara rozetleri boyutla elenir.
3. **Hizalama:** Her kare ortak boyutlu şeffaf canvas'a; yatayda gövde merkezi, dikeyde en-alt
   nokta canvas tabanında. Zemin çizgisi olmayan sheet'lerde yükseklik **zıplama yayı (arc)** ile
   kodda yönetilir, ölçekle değil.
4. **Ölçek tutarlılığı:** Kaynak kareler farklı ölçekte çizilmişse, **kafa boyutu** ölçüt alınarak
   her kare tek seferlik normalize edilir (render yine tek global scale kullanır).
5. **Entegrasyon:** Kareler `assets/frames/`'e WebP olarak, `js/assets.js` manifestine eklenir;
   `js/game.bundle.js` içinde `Cg` yükleyici + `xy` çizim + state/tetikleyici kodu eklenir.

### Mimari hatırlatma (değişmedi)
- **Orijinal TypeScript/JSX kaynağı YOK.** Tüm mantık **minify edilmiş `js/game.bundle.js`** içinde.
  Her değişiklik bu bundle'da birebir string değişimiyle yapılıyor (`node --check` ile doğrulanıyor).
- Önemli semboller: `Ky` Fighter, `Xy` maç/motor, `xy()` çizim, `Cg` sprite yükleyici,
  `AF_sweepDef`/`AF_projCast` saldırı tanımları, `Jy` hitbox, `resolveAttacks`/`applyHit` vuruş,
  `separateBodies` pushbox, `AF_keymap`/`Fy` tuş haritası, `AF_S` ayarlar.
- Asset yolları `js/assets.js` manifestinden `/assets/...png → ...webp` olarak eşlenir.

### Çalıştırma
`oyunu-baslat.bat` → `python -m http.server 8130` → tarayıcıda `localhost:8130`.
(Değişiklikten sonra `Ctrl+F5` ile sayfayı yenile.)

---

## 17. Açık Kaynak Yapı ve Güncel Çalışma Düzeni — 16 Ekim 2026

> Bu bölüm 15 Ekim sonrası değişikliklerin özetidir. Çakışma olursa **bu bölüm esastır** (Bölüm 16'daki "Mimari hatırlatma" ve "Çalıştırma" dahil).

### 17.1 Tek kaynak: GitHub
Kaynak gerçek `https://github.com/turkdagumutcan-afk/cinarfights` deposudur. Çalışma sırası: **dal aç → `src/`'de düzenle → `npm run build` → `npm test` → push → birleştir → arkadaş `git pull`**. Bilgisayardaki kopya depodan çekilir; elle iki kopya tutulmaz.

### 17.2 `src/` yapısı
`js/game.bundle.js` artık elle yazılmaz; `tools/build.mjs`, `src/*.js` dosyalarını **dosya adı sırasıyla** birleştirir. Sıra çalışma sırasıdır (aynı kapsamdaki `var`/`function`/`class` tanımları birbirine bağlıdır), bu yüzden önek numaraları değiştirilmemeli.

| Önek | Dosyalar | İçerik |
|---|---|---|
| 00 | `00-vendor-runtime-libs.js` | React 19, Router, framer-motion vb. (ham minify — OKUMA) |
| 10-12 | constants-assets, effects-notes, sprite-cache-menu | sabitler, asset yükleme, efektler, sprite önbelleği |
| 20-21 | ui-settings-screen, ui-title-screen | ayarlar ve başlık ekranı |
| 30 | `30-vendor-ui-kit.js` | UI yardımcı kütüphane (ham minify — OKUMA) |
| 40 | ui-character-select | karakter seçim ekranı |
| 50-53 | render-hud-ko, settings-keymap-rounds, round-guard, render-fighters-fx | HUD, ayar/tuş haritası, raunt, guard, çizim |
| 60-65 | input, bot-ai, attack-defs, fighter, collision-helpers, match-engine | girdi, bot, saldırı tabloları, Fighter sınıfı, çarpışma, motor |
| 70 | ui-battle-screen | dövüş ekranı (canvas döngüsü) |
| 99 | app-bootstrap | uygulama başlatma |

Bölme **AST eşdeğerlik testiyle** doğrulandı: GitHub `main` (8bb94c5) ile 1227 üst düzey ifade, normalize AST karşılaştırmasında aynı.

### 17.3 Komutlar
| Komut | Ne yapar |
|---|---|
| `npm run build` | `src/` → `js/game.bundle.js`, `index.html`'e `?v=<hash>` yazar (elle `?v=tN` gerekmez) |
| `npm run check` | build edilmiş dosya `src/` ile uyumlu mu (değiştirmeden) |
| `npm start` | önbelleksiz sunucu, `localhost:8130` (`oyunu-baslat.bat` aynen çalışır) |
| `npm test` | build + 30 gerçek tarayıcı testi (Playwright, headless Chromium) |

Test kancası: `window.__AF_match` (çalışan maç nesnesi; yalnızca testler/hata ayıklama için).

### 17.4 Takla tuşu (R yerine E)
- P1 takla: **E** — W/A/D'nin hemen yanında, sol elle en rahat boş tuş.
- P2 takla: **Numpad 6** veya **N**.
- Eski kayıtlı R/T ataması yüklenirken otomatik yeni varsayılana taşınır (Ayarlar > Kontroller'den yine değiştirilebilir).

### 17.5 Giriş tamponu (konsol hissi)
- **Sıra fark etmez:** takla + yön, 130 ms içinde hangi sırayla basılırsa basılsın tetiklenir (`AF_FLIP_BUFFER`). İki tuşu basılı tutmak tekrar tekrar takla atmaz.
- Takla, o an yapılamıyorsa (iniş toparlanması, saldırı bitişi) 130 ms boyunca beklemeye alınır.
- **W + yön:** zıplama kalkış anındaki yönle "kilitlenir" (`vx` baştan tam hız). Yön tuşu zıplamadan hemen sonraya (≤ 90 ms, `AF_JUMP_DIR_GRACE`) kalırsa yine kilitlenir. Böylece W→D, D→W ve aynı anda basış aynı sonucu verir.
- ~~Rakibin üzerinden geçiş eşiği 0,35~~ → **16 Ekim güncellemesi (bkz. 17.8):** rakibin üzerinden yalnızca takla geçer.
- Sınır: gamepad desteklenmiyor; klavye "ghosting" (aynı anda 3+ tuşta bazı klavyeler basışı yutar) donanıma bağlıdır, kodla çözülmez.

### 17.6 Sembol sözlüğü (minify adlar)
`Ky` Fighter sınıfı · `Xy` maç/motor (`updateFighter`, `separateBodies`, `onLand`, `resolveAttacks`, `applyHit`) · `Hy` bot yapay zekâsı · `By` girdi sınıfı (`Fy` tuş haritası, `Iy` izinli kodlar, `zy()/Vy()` kenar nesneleri) · `xy()` dövüşçü çizimi · `Cg` sprite yükleyici · `X` ses motoru · `pg` clamp · `$h` arena genişliği 1376 · `eg` yerçekimi 2900 · `rg` zıplama hızı −1300 · `ng` havada yön çarpanı 0,82 · `Uy` saldırı tablosu · `Gy` mermi haritası · `AF_*` bu projede eklenen yardımcılar (`AF_S` ayarlar, `AF_DEFKEYS` varsayılan tuşlar, `AF_keymap`, `AF_load/AF_save`, `AF_tryAirFlip`, `AF_sweepDef`, `AF_projCast`, `AF_dashHit`).

### 17.7 Bilinen sınırlar / açık işler
- Orijinal TS/JSX kaynağı yok; vendor dosyaları (00, 30) ham minify kalır. Oyun kodu sembollerinin anlamlı adlarla değiştirilmesi isteğe bağlı, kademeli iş.
- Gamepad yok; mobil kontrol yok.
- `assets/` dosyaları bu yeniden yapılandırmada **değiştirilmedi**. ~~GitHub'daki görsellerle bu bilgisayardaki bazı görseller aynı adda ama farklı boyutta~~ → **16 Ekim akşamı çözüldü:** fark yalnızca görsellere sonradan eklenmiş C2PA (içerik kimliği) etiketiydi, piksel verisi aynı. Esas olan GitHub'daki sürüm.
- **Kararsız test:** "Zıplama geçemez: W+D basılı tutarak (90px)" bazı çalıştırmalarda `KALDI` verip sonraki çalıştırmada aynı ölçümlerle (`dx=-62`, en yakın 26) geçiyor. Zamanlamaya bağlı; test sağlamlaştırılmalı (ayrı PR).

### 17.8 Takla düzeltmeleri (16 Ekim, öğleden sonra)
- **Geçiş kuralı:** `separateBodies` artık yalnızca `airFlip` (E + yön) olan oyuncunun rakibin üzerinden geçmesine izin verir (eşik 0,34 × idle boyu). Normal zıplama (W, W+yön, yönü basılı tutarak W) rakibi aşamaz: baş hizasında bile görünmez bir duvar gibi durur, iter ve yanına iner. Kural aynı zemin seviyesindeki (yer–yer, masa–masa) dövüşçüler için geçerlidir; masadaki biri yerdeki rakibin üstünde yürüyebilir. Eski davranış için `AF_JUMP_CROSS = true` (`src/64-game-collision-helpers.js`).
- **Boyut:** takla kareleri (`umut_back0-15`) idle'dan ~1,65× iri çizilmişti (kafa genişliği: idle ≈103 px × 0,36, takla ≈70 px × 0,874). Çizim ölçeği `AF_BACK_SIZE = 0.62` ile kafa boyunda eşitlendi. Çizim, karenin en alt noktasını (ayak) dövüşçünün `y` değerine oturtuyor; yükseklik gerçek yerçekimi yayından geliyor. Yerdeki A A / D D takla da aynı ölçeği kullanır.
- Testler: 30/30 (zıplama-geçemez 7 test, takla-boyutu 1 test eklendi; eski "zıpla-geç" testleri kaldırıldı).

## 18. Yeni Tasarım ve AHMET — 17 Ekim 2026

> Bu bölüm §17'yi günceller; çakışma olursa bu bölüm esastır.

### 18.1 Görseller
- Dört karakterin bütün pozları Gemini ile yeniden çizildi (kaynak: kullanıcının `cınarfight tasarımlar` klasörü). Yeşil arka plan silindi, şeritler karelere bölündü, idle boyu 560 px olacak şekilde karakter başına tek ölçekle boyutlandırıldı, WebP olarak `assets/frames/` ve `assets/fx/`'e yazıldı. İşleme betikleri: `tools/sprite/isle.py` (önizleme → `_onizleme/`, git yoksayar) ve `tools/sprite/aktar.py` (oyuna yazar). Kurulum: `pip install pillow numpy`. Tasarım klasörü varsayılan `Masaüstü/cınarfight tasarımlar`; başka yerdeyse `KAYNAK` ortam değişkeni. Yeni poz eklerken `isle.py` içindeki `KARAKTERLER` tablosuna dosya adını yaz; `aktar.py`'den sonra yeni dosyaları `js/assets.js`'e ekle.
- Yeni dosya düzeni: `<id>_idle/crouch/jump/hurt/guard/guardlow/ult.webp`, `<id>_punch0..4` + `<id>_punch` (tepe karesi), `<id>_kick0..N` + `<id>_kick`, METEHAN `metehan_run0..3`, SUDEM `sudem_cast`. Portreler eski adlarıyla (`fotograf_canavari`, `mcqueen`, `metehan`) + yeni `ahmet.webp`.
- `js/assets.js` girdileri `?v=3` ile önbellekten kurtarıldı.

### 18.2 Çok kareli animasyon
- `Cg` (src/10) her karakter için `spr.seq.punch/kick/run` dizilerini yükler (yalnız manifestte olan dosyaları ister, 404 yok). Tepe karesi en geniş karedir; vuruş kutusu yine tek `punch`/`kick` karesinden (`Jy`).
- `AF_seqFrame` (src/53): hazırlıkta tepeye kadarki kareler, aktif evrede tepe, toparlanmada sonrakiler. SUDEM tekmesi 3 kare (2 ve 4. karelerde yanlış bacak vardı) + `AF_speedTrail` hız izi.

### 18.3 Karakterler ve özel hareketler
| Karakter | Değişiklik |
|---|---|
| UMUT | F flaşı kaldırıldı (flaş yalnız ultide). Takla / yer taklası / süpürme `AF_UMUT_OZEL=false` ile geçici kapalı; kod duruyor. |
| SUDEM | F = **Sihirli Yüzük** (`ringshot`, 6 hasar, 900 ms bekleme). Ulti KA-ÇOV!: yalnız yarış arabası (06). |
| METEHAN | Tank dengesi: vuruş kutusu %15 geniş + 12 px önde (`mod.reach/reachX`); koşu ulti barı harcamaz, 1,5 sn bekleme, 3 sn içindeki tekrarlar %60/%30 hasar ve zırhsız, köşede geri seker, korunursa 350 ms savunmasız (`AF_dashImpact`, src/64). |
| AHMET (yeni) | Motorcu, dengeli. Ulti **GAZA BAS!**: sürücüsüz motor ekranın arkasındaki kenarından gelir (`AF_motorHit`, 16 hasar). |

- **Memleketler (seçim haritası `AF_HOME`):** UMUT ve SUDEM ANKARA (arena yıldızı), METEHAN SAMSUN, AHMET ÇORUM.
- **Düzeltmeler (17 Ekim, akşam):** UMUT ultisinde fotoğraflar ayakkabı hizasından çıkıyordu (ulti pozunun en ön noktası ayak) → `ultAt` ile gövde ortası (~155 px). SUDEM eğilmesi yüksekti (%78) → `crouchSy: 0.88` (≈%69). METEHAN köşede geri sekerken hasar pozuna giriyordu → `bounceT` (normal duruş, kısa girdi kilidi). SUDEM ve AHMET ultileri bilerek yerden gider.

### 18.4 Testler
28 test + takla kapalıyken 12 `ATLANDI`. Yeni testler: UMUT ulti yüksekliği, 4 karakter yükleme + kare dizileri, SUDEM yüzüğü, UMUT'ta F flaşı yok, AHMET motoru, METEHAN koşu bedeli ve köşe döngüsü (6 sn spam ≤ 30 hasar). Takla açılınca `tools/test/smoke.mjs` içindeki `TAKLA_ACIK` da `true` yapılmalı.

### 18.5 Açık işler
- UMUT'un takla/süpürme kareleri yeni tarzda çizilince `AF_UMUT_OZEL=true`.
- Tişörtlerdeki marka logoları (Ford Mustang, McQueen, Adidas) depo herkese açılmadan değiştirilecek.

## 19. Antrenman Modu ve Menü Geri Dönüşü — 17 Ekim 2026

- **Ana menü:** 1VSBOT · 1VS1 · **ANTRENMAN** · AYARLAR · ÇIKIŞ (kısayollar 1–5).
- **Seçim ekranı:** sol üstte `◀ GERİ`; `ESC` / `Backspace` önce "HAZIR"ı iptal eder, ikinci basışta ana menüye döner.
- **Antrenman (`mode=training`)** — `src/66-game-training.js`:
  - P2 kukla; karakterini P1 seçer (bot modu gibi). Süre ve raunt yok; kimse nakavt olmaz (`AF_trainKo`), vuruş bitince 1 sn sonra can dolar.
  - Kukla davranışı (ESC menüsü): DURUR / EĞİLİR / KORUR / DÖVÜŞÜR (BOT). Ulti barı varsayılan HEP DOLU (menüden NORMAL).
  - Panel: son vuruş, kombo, kombo hasarı, en yüksek kombo hasarı. `R` konumları ve canları sıfırlar.
- **Test düzeltmesi:** zıplama testleri tuş bırakıldıktan hemen sonra durumu okuyordu (bazen hâlâ `walk`); 100 ms bekleme eklendi, artık kararsız değil.
- Testler: 31 (+ takla kapalıyken 12 `ATLANDI`).

## 20. Arenalar: SAMSUN — 17 Ekim 2026

- `AF_ARENAS` (src/10): `ankara` (gece, ortada masa) ve `samsun` (gün batımı, aslanlar ve savaşçı heykeli, **tek zemin**). Görsel `assets/samsun_arena.webp`; kaynak görsel %7 büyütülüp zemin kenarı y=704'e oturtuldu.
- Seçim ekranında **ARENA** seçici (ANKARA / SAMSUN / RASTGELE, `Tab` ile değişir). URL'de `&arena=`; rastgele seçim dövüş ekranında bir kez belirlenir, yeniden başlatınca aynı arena kalır.
- Masa sabitleri tek anahtara bağlandı: `AF_PLAT` (maç motoru arenaya göre ayarlar). Kapalıyken masaya iniş, gölge, araba/motor zemini ve F2 çizgisi masayı yok sayar.
- Yeni arena eklemek: 1376×768 görsel, zemin kenarı y=704; `AF_ARENAS`'a kayıt + `AF_ARENA_SEL`'e id + `js/assets.js`. Masa yoksa `platform: false`.
- Testler: 33 (arena başına masa/zemin testi eklendi).


## 21. Aynı anda vuruş (17 Ekim 2026)

- Ölçüm: P1 ve P2 tuş tepkisi aynı (ikisi de ort. ~9 ms, fark yok). Ama aynı karede vuruşta P1 20/20 kazanıyordu: `resolveAttacks` önce P1'in vuruşunu uyguluyor, P2'nin saldırısı hasar alınca siliniyordu.
- Düzeltme: iki vuruş önce kontrol edilir, sonra birlikte uygulanır (karşılıklı vuruş). Test: 10/10 ikisi de vurur. Testler: 34.

## 22. Denetim ve denge düzeltmeleri (18 Ekim 2026)

- Otomatik denetim (4 karakter × 2 arena × bot/antrenman, rastgele girdi): hata, NaN, sınır dışı, takılma yok.
- **Gövde genişliği** (`halfW`, vuruş alanı ve itişme) idle görselinden hesaplanıyordu; METEHAN (33) ve AHMET (32) en dar çıkıyordu → karakterde elle: UMUT 40, SUDEM 37, METEHAN 42 (tank), AHMET 40.
- **SUDEM tekmesi** asıl silahı olduğu hâlde UMUT'unkinden kısaydı → `kickX: 20` (tekme vuruş kutusu öne). Menzil (px): SUDEM 197, UMUT 183, METEHAN 178, AHMET 170. Ölçüm kancası `match.reachOf(f, id)`.
- **Bot METEHAN** koşu çarpmasını hiç kullanmıyordu → 220–520 px mesafede %12 olasılıkla koşar.
- Testler: 37.

## 23. Arenalar: ANKARA / SAMSUN / ÇORUM (18 Ekim 2026)

- Üç arena, hepsi **tek zemin** (masa / 2. zemin kaldırıldı; `AF_PLAT` her arenada false, kod duruyor).
- ANKARA: yeni şehir görseli `assets/ankara_sehir.webp` (eski Anıtkabir arenası listeden çıktı). ÇORUM: `assets/corum_arena.webp`. Görseller zemin kenarı y=704'e oturacak şekilde büyütüldü (Ankara ×1,07, Çorum ×1,12).
- Seçim: ANKARA · SAMSUN · ÇORUM · RASTGELE (`Tab`). Testler: 38.

## 24. Karakterler %16 büyük (18 Ekim 2026)

- `AF_BOY = 1.16` (src/10): karakter boyu (250 → ~290 px), elle verilen gövde genişlikleri, vuruş kutuları (`Jy`), ulti/mermi çizimi ve çarpışma yarıçapı bununla ölçeklenir. Zıplama hızı `rg` × √1,16 → yay ≈326 px. Görseller 560 px kaynaktan küçültüldüğü için kalite kaybı yok.
- Hata düzeltmesi: `separateBodies` havadaki oyuncuyu y<430 ise "masa seviyesi" sayıyordu; yüksek zıplamada rakibin üstünden geçiliyordu. Artık yalnız masa varsa (`AF_PLAT`) öyle sayılır.
- Testler: 38/38.
