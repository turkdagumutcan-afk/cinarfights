# Geliştirici kurulumu (Windows)

Bu rehber, depoyu GitHub'dan ilk kez indiren birinin oyunu çalıştırıp geliştirmeye başlaması içindir.
Adımlar sırayla yapılır; her biri bir kez yapılır, sonra yalnızca "Günlük iş akışı" bölümü kullanılır.

## 1. Gerekenler

| Araç | Neden | Kurulum |
|---|---|---|
| **Git** | depoyu indirmek, dal açmak, push | `winget install --id Git.Git -e` |
| **Node.js 20+** (LTS) | build, yerel sunucu, testler (24 ile denendi) | `winget install --id OpenJS.NodeJS.LTS -e` |
| **GitHub CLI** (isteğe bağlı) | terminalden PR açmak/birleştirmek | `winget install --id GitHub.cli -e` |

Kurulumdan sonra terminali kapatıp yeniden aç (PATH güncellensin), sonra kontrol et:

```bash
git --version
node --version
```

### C: diski doluysa her şeyi D: diskine kur

Programlar ve önbellekler varsayılan olarak C:'ye yazar. C: doluysa:

```bash
winget install --id Git.Git -e --location "D:\Program Files\Git"
winget install --id GitHub.cli -e --location "D:\Program Files\GitHub CLI"
```

npm önbelleğini ve test tarayıcısını D:'ye taşı (bir kez yapılır, kalıcıdır; ardından terminali yeniden aç):

```bash
npm config set cache "D:\gelistirme-onbellek\npm-cache"
setx PLAYWRIGHT_BROWSERS_PATH "D:\gelistirme-onbellek\ms-playwright"
```

## 2. Depoyu indir

D: diskinde bir klasörde (ör. `D:\oyun`):

```bash
git clone https://github.com/turkdagumutcan-afk/cinarfights.git
cd cinarfights
```

İlk commit'ten önce adını ve e-postanı bir kez tanıt (GitHub hesabındakiyle aynı olsun):

```bash
git config --global user.name "github-kullanici-adin"
git config --global user.email "github-e-postan"
```

## 3. Oyunu çalıştır

```bash
npm start
```

Tarayıcıda http://localhost:8130 aç. Ya da `oyunu-baslat.bat` dosyasına çift tıkla.
Oyunu çalıştırmak için `npm install` **gerekmez**.

## 4. Testleri kur ve çalıştır

```bash
npm install
npx playwright install chromium
npm test
```

Beklenen son satır: `39/39 test geçti.` (UMUT'un taklası kapalıyken 12 test `ATLANDI` yazar, bu normal.)

- `npm install` yalnızca Playwright'ı (test aracı) indirir.
- `npx playwright install chromium` ~450 MB'lık test tarayıcısını indirir. Yer yoksa bunu atla ve
  bilgisayardaki Edge ile çalıştır:

  ```bash
  $env:CHROMIUM_PATH="C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"; npm test
  ```


## 5. Günlük iş akışı

Her değişiklik kendi dalında yapılır, `main`'e doğrudan commit atılmaz.

```bash
git switch main
git pull
git switch -c kisa-konu-adi
```

1. `src/` altında düzenle (hangi dosya ne yapar: `CLAUDE.md` tablosu ve `docs/ANALIZ.md` §17.2).
2. `npm run build` — `js/game.bundle.js` ve `index.html` güncellenir. Bu iki dosyayı **elle düzenleme**.
3. `npm start` ile oyunda dene, tarayıcıda `Ctrl+F5`.
4. `npm test` — 39/39 olmalı.
5. Commit ve push:

   Önce `git status` ile listeye bak; yalnızca bu işle ilgili dosyaları ekle.

   ```bash
   git status
   git add src js/game.bundle.js index.html
   git commit -m "Ne değişti, kısaca"
   git push -u origin kisa-konu-adi
   ```

6. GitHub'da **Pull Request** aç. Diğer kişi bakar, **Merge pull request** ile birleştirir.
7. Birleştikten sonra iki taraf da `git switch main` ve `git pull` yapar.

## 6. İki kişi aynı anda çalışırken

- Aynı `src/` dosyasında aynı anda çalışmamaya dikkat edin; kim neyi aldığını önceden söyleyin.
- PR'ları küçük tutun ve çabuk birleştirin; uzun yaşayan dal çakışma üretir.
- **`js/game.bundle.js` veya `index.html`'de çakışma** çıkarsa elle çözmeye uğraşma: önce `src/`
  içindeki çakışmaları çöz, sonra `npm run build` çalıştır; bu iki dosya baştan üretilir.
- Görsel (`assets/`) değiştiren PR'da hangi görselin değiştiğini açıklamaya yaz; ikili dosyalar
  satır satır karşılaştırılamaz.

## 7. Claude Code ile çalışmak

- `CLAUDE.md` proje kurallarını, `.claude/settings.json` Claude'un okumaması gereken büyük/üretilen
  dosyaları tanımlar. İkisi de depoda; ayrıca bir şey kurmak gerekmez.
- Oturumu deponun kök klasöründe (`cinarfights`) aç ki bu iki dosya devreye girsin.
