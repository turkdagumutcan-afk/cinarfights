// ÇINAR FIGHTS — derleme aracı.
// src/*.js dosyalarını AD SIRASIYLA birleştirip js/game.bundle.js üretir ve
// index.html içindeki ?v=<özet> önbellek etiketini otomatik günceller
// (artık elle ?v=tN yükseltmek ve Ctrl+F5 gerekmez).
//
//   node tools/build.mjs           -> üret
//   node tools/build.mjs --check   -> js/game.bundle.js güncel değilse hata ver (yazmaz)
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'src');
const outFile = path.join(root, 'js', 'game.bundle.js');
const assetsFile = path.join(root, 'js', 'assets.js');
const indexFile = path.join(root, 'index.html');
const check = process.argv.includes('--check');

const files = fs.readdirSync(srcDir).filter((f) => f.endsWith('.js')).sort();
if (!files.length) throw new Error('src/ içinde .js dosyası yok');

const banner = '/* ÇINAR FIGHTS — OTOMATİK ÜRETİLDİ. Elle düzenleme: src/ klasörünü düzenle, sonra `npm run build`. */\n';
const bundle = banner + files.map((f) => fs.readFileSync(path.join(srcDir, f), 'utf8').replace(/\r\n/g, '\n')).join('\n');

if (check) {
  const cur = fs.existsSync(outFile) ? fs.readFileSync(outFile, 'utf8').replace(/\r\n/g, '\n') : '';
  if (cur !== bundle) { console.error('js/game.bundle.js, src/ ile uyumsuz. `npm run build` çalıştır.'); process.exit(1); }
  console.log('js/game.bundle.js güncel.'); process.exit(0);
}

fs.writeFileSync(outFile, bundle);
const hash = crypto.createHash('sha1').update(bundle).update(fs.readFileSync(assetsFile)).digest('hex').slice(0, 8);
let html = fs.readFileSync(indexFile, 'utf8');
const stamped = html.replace(/(js\/(?:assets|game\.bundle)\.js)\?v=[^"']*/g, `$1?v=${hash}`);
if (stamped !== html) fs.writeFileSync(indexFile, stamped);
console.log(`${files.length} dosya -> js/game.bundle.js (${(bundle.length / 1024).toFixed(0)} KB), önbellek etiketi ?v=${hash}`);
