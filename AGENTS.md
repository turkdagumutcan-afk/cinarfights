# ÇINAR FIGHTS — ortak ajan kuralları (Codex + Claude Code)

> Tek kaynak bu dosya. Codex doğrudan okur, `CLAUDE.md` bunu `@AGENTS.md` ile içe aktarır. Kural değişikliğini **yalnız burada** yap.

Tarayıcıda 2 kişilik retro dövüş oyunu (React 19 + Canvas 2D, 1376×768). Arayüz ve yorumlar **Türkçe**. Kullanıcıya Türkçe yanıt ver, kısa ve net ol.

## Yapı (tek kaynak: GitHub `turkdagumutcan-afk/cinarfights`)
- **Düzenlenen yer: `src/`** — dosya adı sırası = çalışma sırası. Numara önekini değiştirme.
- `js/game.bundle.js` **ÜRETİLİR**. Asla elle düzenleme, asla okuma. `npm run build` yazar (ve `index.html`'e `?v=<hash>` koyar).
- `00-vendor-*`, `30-vendor-*` üçüncü taraf kütüphane (ham minify): **okuma, düzenleme**.
- `assets/`, `css/styles.css` ikili/derlenmiş: okuma. Görsel adları `js/assets.js`'te.
- Yeni Tailwind sınıfı derlenmiş CSS`te yoksa etkisizdir: `css/ek.css`e ekle.
- Dökümanlar: `docs/ANALIZ.md` (özellikle §16–17), `README.md`, kurulum ve iş akışı: `docs/KURULUM.md`.

| Dosya | İçerik |
|---|---|
| `10-12` | sabitler, asset yükleme, efektler, sprite önbelleği |
| `20-21`, `40` | ayarlar / başlık / karakter seçim ekranları |
| `50-53` | HUD, **ayar+tuş haritası (`51`)**, raunt+guard (`52`), çizim |
| `60` girdi · `61` bot · `62` saldırı tabloları · `63` Fighter · `64` çarpışma+takla tetikleyici · `65` **maç motoru** | |
| `66` antrenman (kukla, can/ulti dolumu, panel) · `70` dövüş ekranı · `99` bootstrap | |

## İş akışı (her değişiklikte)
1. `git switch -c <konu>` (main'e doğrudan değişiklik yapma)
2. Önce arama (`rg`/`Grep`) ile ilgili yeri bul (`src/[1-9]*` içinde), sonra yalnızca o aralığı oku.
3. `src/`'de düzenle → `npm run build` → localhost:8130'da dene (`oyunu-baslat.bat` ya da `npm start`)
4. `npm test` (46 tarayıcı testi + takla kapalıyken 12 "ATLANDI") — geçmeyen testi "geçti" diye raporlama; test edemediğini açıkça söyle. Chromium kurulu değilse `CHROMIUM_PATH` ile Edge kullanılabilir (`docs/KURULUM.md` §4).
5. Commit → push → Pull Request. Birleştirmeyi kullanıcı yapar.
- Görsel/sürüm değiştiğinde tarayıcı için `Ctrl+F5` hatırlat.
- Kullanıcının daha yeni/pushlanmamış yerel dosyalarını silme/ezme; önce yedek al.
- Yeni ekran/arayüz öğesi: renk, yazı tipi ve bileşenleri `docs/TASARIM.html`'den al (P1 pembe-kırmızı `#ff2a5f`, P2 camgöbeği `#00c8ff`, yüzeyler lacivert).

## Kısaltılmış semboller (minify kalıntısı)
`Ky` Fighter · `Xy` maç/motor (`updateFighter`, `separateBodies`, `onLand`, `resolveAttacks`, `applyHit`) · `Hy` bot · `By` girdi sınıfı (`Fy` tuş haritası) · `xy()` dövüşçü çizimi · `Cg` sprite yükleyici · `X` ses · `pg` clamp · `$h`=1376 arena genişliği · `eg`=2900 yerçekimi · `rg`=−1300 zıplama hızı · `Uy` saldırı tablosu · `AF_*` bu projede eklenen yardımcılar (`AF_S` ayarlar, `AF_DEFKEYS` varsayılan tuşlar, `AF_tryAirFlip` takla).

## Oyun sabitleri
Zemin y=704 · masa (orta platform; şu an hiçbir arenada yok, `AF_PLAT`) x 387–990, y≈429 · karakter boy çarpanı `AF_BOY`=1,16 (idle ≈290 px, zıplama yayı ≈326 px) · rakibin üzerinden **yalnız takla** geçer (`separateBodies`, eşik 0,34; normal zıplama için `AF_JUMP_CROSS=false`) · takla çizim ölçeği `AF_BACK_SIZE`=0,62 · giriş tamponu `AF_FLIP_BUFFER`=130 ms, `AF_JUMP_DIR_GRACE`=90 ms.
Kontroller: P1 A/D/W/S, Z X, Shift/Ctrl, V koruma, C ulti, F yüzük (SUDEM), Space koşu (METEHAN), SF komutları ↓↘→+Yumruk özel / ↓↘→↓↘→+Yumruk ulti (`AF_motion`, src/64); P2 oklar + Numpad. Hepsi Ayarlar'dan değişir.
Karakterler: UMUT, SUDEM, METEHAN, AHMET, SELİM, ALP (`src/10` `AF_CHARS`). UMUT'un taklası/yer taklası/süpürmesi **geçici kapalı** (`AF_UMUT_OZEL=false`). Kare dizileri `<id>_punch0..4`, `_kick0..N`, `_run0..3` (`Cg` → `spr.seq`, çizim `AF_seqFrame`). Ulti görselleri `assets/fx/`. Ayrıntı: `docs/ANALIZ.md` §18.

## Okunmayacak dosyalar (iki ajan için de)
`js/game.bundle.js`, `src/00-vendor-*`, `src/30-vendor-*`, `assets/**`, `css/styles.css`, `node_modules/**`, `*.bak*`. Claude'da `.claude/settings.json` bunları engeller; Codex'te engel yok, bu kurala elle uy.

## İki ajanla çalışma (ChatGPT Plus / Codex + Claude Code)
- Varsayılan işçi **Codex**. Claude Code ikinci görüş, zor fizik/çarpışma hatası ve kod incelemesi için.
- Aynı anda aynı dalda iki ajan çalışmaz. Her iş kendi dalında; dalı devralan önce `git status` + `git log main..HEAD` bakar.
- Devir notu = commit mesajı + PR açıklaması: ne yapıldı, ne test edildi, ne kaldı. Ayrı not dosyası tutma.
- Diğer ajanın commit'lenmemiş değişikliğini silme/ezme; emin değilsen kullanıcıya sor.
- Kişisel araç ayarları (`.codex/`, `.claude/*` — `settings.json` hariç) repoya girmez.

## Şu anki odak
Karakter geliştirme (yeni karakter, kare dizisi, imza hareket) **şimdilik yapılmıyor**. Kullanıcı açıkça isteyene kadar karakter işi önermeyin.

## Token tasarrufu
- Büyük dosyayı baştan sona okuma: önce ara (`rg`/`Grep`) → yalnız ilgili aralığı oku.
- Tek seferde tek konu; konu bitince yeni oturum aç.
- Test çıktısını tamamen yapıştırma; yalnızca başarısız satırları göster.
- Mükemmeliyetçilik freni: bir değişiklik "çalışıyor + test geçti" ise dur; ince ayarları ayrı PR'a yaz (`docs/ANALIZ.md` §17.7'ye not düş).
