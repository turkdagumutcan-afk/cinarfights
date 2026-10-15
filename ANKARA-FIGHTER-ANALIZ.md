# ÇINAR FIGHTS (eski adı ANKARA FIGHTER) — Proje Analiz Dokümanı

> **Proje:** çok dosyalı statik web oyunu (`index.html` + `css/` + `js/` + `assets/`); orijinal tek dosyalık `ankara-fighter.html` ayrı lokasyonda yedekli
> **Tür:** Tarayıcıda çalışan, tek klavyede 2 kişilik retro arcade dövüş oyunu
> **Sürüm:** v3.1 (başlık ekranındaki etikete göre) + 13 Ekim 2026 eğilme düzeltmesi (bkz. Bölüm 12)
> **Dil:** Türkçe arayüz
> **Analiz tarihi:** 13 Ekim 2026 · **Son güncelleme:** 13 Ekim 2026 (test, eğilme düzeltmesi, animasyon analizi)

> **Not:** Bu doküman ilk olarak tek dosyalık v3.0 üzerinden yazılmıştı. Bölüm 1, 2, 3, 10 ve 11 güncel çok dosyalı yapıya göre düzeltildi. Güncel durum özeti için **Bölüm 12–15**'e bakın.

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

```
├── index.html              Giriş noktası (CSS + assets.js + game.bundle.js bağlar)
├── oyunu-baslat.bat        Çift tıkla → Python (yoksa Node) ile :8130'da sunucu + tarayıcı
├── README.md               Kullanım, kontroller, sürüm notları
├── ANKARA-FIGHTER-ANALIZ.md   Bu doküman
├── .claude/launch.json     Geliştirme ortamı başlatma ayarı
├── css/styles.css          Derlenmiş Tailwind v4 + özel retro efektler (~92 KB)
├── js/
│   ├── assets.js           Asset yol manifesti (.png → .webp)
│   ├── game.bundle.js      Derlenmiş oyun (React 19 + Router + Canvas 2D motoru, ~522 KB)
│   └── game.bundle.js.bak  13 Ekim eğilme düzeltmesinden ÖNCEKİ orijinal (yedek)
└── assets/
    ├── ankara_map.webp, fotograf_canavari.webp, mcqueen.webp, favicon.svg
    ├── frames/             Karakter başına 7 poz (idle, crouch, jump, punch, kick, hurt, ult), WebP
    └── fonts/              Outfit, Plus Jakarta Sans, JetBrains Mono (woff2)
```

**Kaynak kod:** Orijinal TypeScript/JSX yok; yalnızca minify edilmiş `game.bundle.js` var. Küçük ayarlar bundle içindeki veri tablolarından yapılabiliyor (13 Ekim'deki eğilme düzeltmesi buna örnek).

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
│   "HAZIR... DÖVÜŞ!" → 99 saniyelik maç
▼
Sonuç paneli: TEKRAR OYNA / KARAKTER SEÇİMİ / ANA MENÜ
```

- **Başlık ekranı:** Neon retro tasarım, scanline ve grid-floor efektleri, ok tuşları/W-S ile menü gezinme, 1-2 rakamlarıyla hızlı mod seçimi.
- **Seçim ekranı:** Karakter kartları (istatistik çubukları, kontrol özeti), hazır-ol mekaniği (P1 → Z, P2 → Num 1 veya J).
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
- **Süre:** 99 saniye; süre dolarsa kalan cana göre kazanan belirlenir, eşitse **BERABERE**
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
- **Gövde itişmesi:** Karakterler üst üste binemez; iç içe girince yumuşakça itilirler.
- **Efektler:** Ekran sarsıntısı, vuruş flaşı, kıvılcım parçacıkları (en fazla 420), uçan hasar sayıları, lens parlaması (flaş ultisinde), K.O.'da savrulma animasyonu.

### Bot yapay zekâsı (1P modu)
Sudem'i yöneten bot ~110–230 ms'de bir "düşünür" ve şunları yapar:
- Yaklaşan mermiden %45 ihtimalle zıplayarak kaçar
- Ultisi doluysa ve mesafe uzaksa (%40) ulti atar
- Rakip yukarıdaysa zıplayarak takip eder; masadaysa ve rakip aşağıdaysa düşer
- Menzildeyse saldırı seçer (mesafeye göre yumruk/tekme ağırlıklı rastgele seçim), ~380–860 ms bekleme süresi
- Rakip saldırırken %22 ihtimalle eğilir, bazen geri çekilir

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
2. **Tek raunt:** Maç tek rauntluk; klasik "Best of 3" raunt sistemi yok.
3. **Blok/savunma yok:** Eğilme var ama aktif blok mekaniği yok — rekabetçi derinlik için eklenebilir.
4. **Tek sahne, 2 karakter:** İçerik genişletmeye açık (yeni karakter eklemek veri tablosu + 7 kare görsel gerektiriyor).
5. **Mobil desteği yok:** Yalnızca klavye girişi; dokunmatik kontroller eklenmemiş.
6. ~~**Bot tek zorluk seviyesinde:** Zorluk seçeneği (kolay/zor) yok.~~ → **v3.1'de eklendi** (KOLAY/NORMAL/ZOR + serbest karakter seçimi).
7. **Kaynak kod yok:** Elimizdeki dosya derlenmiş çıktı; orijinal TypeScript/JSX kaynakları olmadan büyük değişiklikler zahmetli olur (küçük denge ayarları yine de veri tablolarından yapılabilir).

---

## 11. Nasıl Çalıştırılır?

`file://` ile **açılmaz** (canvas piksel okuma kısıtı). `oyunu-baslat.bat` dosyasına çift tıklamak yeterli: Python (yoksa Node) ile `http://localhost:8130` adresinde sunucuyu başlatır ve tarayıcıda açar. Elle: `python -m http.server 8000` veya `npx serve .`. Ayrıntı için `README.md`.

> Kod değişikliğinden sonra tarayıcıda **Ctrl+F5** kullanın; eski `game.bundle.js` önbellekten gelebilir.

---


## 12. Değişiklik Günlüğü

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
| 9 | Blok | Mekanik de yok | Önce mekanik, sonra 2 kare |
| 10 | Yön çevirme | Anında ters dönüyor | Düşük öncelik |

### Uygulama durumu

| # | Animasyon | Durum |
|---|---|---|
| 1 | Yürüme | ✅ Street Fighter tarzı bacak bölmeli adım döngüsü eklendi (Bölüm 12). Çizilmiş yürüme kareleri istenirse sonradan bağlanabilir |
| 2 | Bekleme (nefes) | ✅ Eklendi |
| 3 | Saldırı hazırlığı ve geçişi | 🟡 Geri eğilme + atılma eklendi, ara kare yok |
| 4 | Güçlü yumruk, ağır tekme kareleri | ⬜ Başlanmadı |
| 5 | Yere düşme ve kalkma | ⬜ Başlanmadı |
| 6 | Zıplama evreleri | 🟡 Kalkış uzaması + iniş ezilmesi eklendi, tepe/düşüş kareleri yok |
| 7 | Eğilerek saldırı, eğik hurt | ⬜ Başlanmadı |
| 8 | Zafer, yenilgi, giriş pozu | ⬜ Başlanmadı |
| 9 | Blok | ⬜ Başlanmadı |
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

### Açık / karar bekleyen
| Konu | Durum |
|---|---|
| Kalan animasyonlar (Bölüm 14, Uygulama durumu) | Çoğu yeni sprite gerektiriyor. Sprite hazır olunca ya da karesiz basit düşme/zafer pozu istenirse devam edilir |
| Animasyon 1. tur görsel ayarı | Şiddetler (nefes, sekme, ezilme, atılma) beğenilmezse değerleri kolayca değiştirilebilir. Oyunda gerçek gözle denenmesi gerek |
| Eğilmiş karakterin hurtbox'ı | Bilinçli değiştirilmedi, denge kararı kullanıcıda |
| Kazananın kayması, K.O. ekran dışı | Kod okumasıyla bulundu, doğrulanıp düzeltilmedi |
| 2P otomatik başlama davranışı | Kesin değil, istenirse ölçülür |
| Best of 3 raunt, blok, ikinci sahne/karakter, mobil kontrol | Başlanmadı (Bölüm 10) |
| Orijinal TypeScript/JSX kaynağı | Yok, her değişiklik minify edilmiş bundle üzerinden yapılıyor |

---

## 16. Güncel Durum — 15 Ekim 2026 (ÇINAR FIGHTS)

> Bu bölüm 13 Ekim'den sonra eklenen her şeyi özetler. Yukarıdaki eski bölümler
> (özellikle 6, 7, 14) kısmen güncelliğini yitirmiştir; çakışma olursa **bu bölüm esastır.**

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
