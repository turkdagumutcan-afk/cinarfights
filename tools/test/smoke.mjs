// ÇINAR FIGHTS — gerçek tarayıcı duman testi.   Çalıştır: npm test
// Oyunu başsız Chromium'da açar, tuşlara basar, window.__AF_match üzerinden konum/durum ölçer.
// Ortam: CHROMIUM_PATH (tarayıcı yolu), PLAYWRIGHT_MODULE (playwright yüklü değilse tam yol).
import { createServer } from '../serve.mjs';

const pw = await import('playwright').catch(() => import(process.env.PLAYWRIGHT_MODULE || 'playwright'));
const chromium = (pw.chromium || pw.default.chromium);
const server = createServer();
await new Promise((r) => server.listen(0, r));
const base = `http://localhost:${server.address().port}`;
const browser = await chromium.launch({ args: ['--no-sandbox'], executablePath: process.env.CHROMIUM_PATH || undefined });
const results = [];
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function open({ p1 = 'umut', p2 = 'sudem', mode = '2p', pre } = {}) {
  const page = await browser.newPage();
  page.errors = [];
  page.on('pageerror', (e) => page.errors.push('pageerror: ' + e.message));
  page.on('console', (m) => m.type() === 'error' && page.errors.push('console: ' + m.text()));
  if (pre) await page.addInitScript(pre);
  await page.goto(`${base}/index.html#/battle?mode=${mode}&p1=${p1}&p2=${p2}&diff=normal`, { waitUntil: 'load' });
  await page.waitForFunction(() => window.__AF_match?.phase === 'fight', null, { timeout: 20000 });
  await page.evaluate(() => {
    window.__tr = [];
    const rec = () => { const m = window.__AF_match; if (m) { const a = m.p1, b = m.p2;
      window.__tr.push({ x: a.x, y: a.y, g: a.ground, s: a.state, af: a.airFlip, f: a.facing, x2: b.x, y2: b.y, g2: b.ground, af2: b.airFlip }); } requestAnimationFrame(rec); };
    requestAnimationFrame(rec);
  });
  page.st = () => page.evaluate(() => { const m = window.__AF_match; const g = (f) => ({ x: f.x, y: f.y, s: f.state, g: f.ground, f: f.facing, af: f.airFlip, hp: f.hp });
    return { p1: g(m.p1), p2: g(m.p2) }; });
  page.tr = () => page.evaluate(() => window.__tr.slice());
  page.clr = () => page.evaluate(() => { window.__tr = []; });
  page.down = (k) => page.keyboard.down(k);
  page.up = (k) => page.keyboard.up(k);
  page.tap = async (k, ms = 45) => { await page.keyboard.down(k); await wait(ms); await page.keyboard.up(k); };
  // p1 sağa/sola yürüyüp rakiple aradaki mesafeyi `gap` px'e indirir
  page.approach = async (gap, key = 'd') => {
    await page.keyboard.down(key); const t0 = Date.now();
    while (Date.now() - t0 < 6000) { const s = await page.st(); if (Math.abs(s.p2.x - s.p1.x) <= gap) break; await wait(15); }
    await page.keyboard.up(key); await wait(120);
  };
  return page;
}
const crossed = (tr) => { const sg = tr.map((s) => Math.sign(s.x - s.x2)).filter(Boolean); return sg.length > 1 && sg[0] !== sg[sg.length - 1]; };
const flips = (tr, k = 'af') => tr.reduce((n, s, i) => n + (s[k] && !(tr[i - 1] && tr[i - 1][k]) ? 1 : 0), 0);

async function test(name, fn) {
  let page; const t0 = Date.now();
  try { const r = await fn((o) => open(o).then((p) => (page = p))); const errs = page ? page.errors : [];
    const ok = r === true || (r && r.ok !== false);
    results.push({ name, ok: ok && !errs.length, note: (r && r.note) || '', errs });
  } catch (e) { results.push({ name, ok: false, note: String(e.message || e).slice(0, 200), errs: page ? page.errors : [] }); }
  finally { if (page) await page.close(); }
  const r = results.at(-1); console.log(`${r.ok ? 'GEÇTİ ' : 'KALDI '} ${name.padEnd(58)} ${r.note}${r.errs.length ? '  HATA: ' + r.errs[0] : ''}  (${((Date.now() - t0) / 1000).toFixed(1)}s)`);
}

// ---- Temel ----
await test('Yükleme: JS/konsol hatası yok, maç başlıyor', async (o) => { const p = await o(); await wait(1500); return true; });
await test('Bot modu 3 sn hatasız çalışıyor', async (o) => { const p = await o({ mode: 'bot' }); await wait(3000); return true; });
await test('W: yerinde zıplama (yatay kayma yok, ~280px, iniyor)', async (o) => {
  const p = await o(); const a = await p.st(); await p.tap('w', 55); await wait(1500); const t = await p.tr(); const b = await p.st();
  const h = 704 - Math.min(...t.map((s) => s.y)); return { ok: Math.abs(b.p1.x - a.p1.x) < 1 && h > 250 && b.p1.s === 'idle', note: `yükseklik ${h.toFixed(0)}` };
});

// ---- Zıplayarak rakibin üstünden geçme (W+D / W+A) ----
for (const [name, steps] of [
  ['W+D basılı tutarak (90px)', async (p) => { await p.down('d'); await p.down('w'); await wait(55); await p.up('w'); await wait(1400); await p.up('d'); }],
  ['W+D tek dokunuş, D hemen bırakılır (90px)', async (p) => { await p.down('d'); await p.down('w'); await wait(55); await p.up('w'); await wait(100); await p.up('d'); await wait(1400); }],
  ['ÖNCE W sonra D (40ms gecikmeli) (90px)', async (p) => { await p.down('w'); await wait(40); await p.down('d'); await wait(40); await p.up('w'); await wait(1400); await p.up('d'); }],
]) await test(`Zıpla-geç: ${name}`, async (o) => {
  const p = await o(); await p.approach(90); await p.clr(); await steps(p); const t = await p.tr(); const b = await p.st();
  return { ok: crossed(t) && b.p1.s === 'idle', note: `bitiş dx=${(b.p1.x - b.p2.x).toFixed(0)}` };
});
await test('Zıpla-geç: W+A sola (rakibin sağından)', async (o) => {
  const p = await o({ p1: 'sudem', p2: 'umut' }); // p1 solda başlar; önce sağa geç
  await p.approach(90); await p.down('d'); await p.down('w'); await wait(55); await p.up('w'); await wait(1500); await p.up('d'); await wait(300);
  let s = await p.st(); if (s.p1.x < s.p2.x) return { ok: false, note: 'hazırlık geçişi olmadı' };
  while (s.p1.x - s.p2.x > 100) { await p.tap('a', 40); s = await p.st(); }
  await p.clr(); await p.down('a'); await p.down('w'); await wait(55); await p.up('w'); await wait(1400); await p.up('a');
  const t = await p.tr(); const b = await p.st(); return { ok: crossed(t) && b.p1.x < b.p2.x, note: `bitiş dx=${(b.p1.x - b.p2.x).toFixed(0)}` };
});

// ---- Havada takla (E + yön, sıra fark etmez) ----
const flipTest = (name, steps, expect = true) => test(`Takla: ${name}`, async (o) => {
  const p = await o(); await p.clr(); await steps(p); await wait(500); const t = await p.tr(); const n = flips(t);
  return { ok: expect ? n === 1 : n === 0, note: `takla sayısı ${n}` };
});
await flipTest('E basılı, sonra D', async (p) => { await p.down('e'); await wait(30); await p.down('d'); await wait(300); await p.up('d'); await p.up('e'); });
await flipTest('D basılı, sonra E', async (p) => { await p.down('d'); await wait(30); await p.down('e'); await wait(300); await p.up('e'); await p.up('d'); });
await flipTest('E dokun-bırak, 60ms sonra D dokun (tampon)', async (p) => { await p.tap('e', 40); await wait(60); await p.tap('d', 40); });
await flipTest('D dokun-bırak, 60ms sonra E dokun (tampon)', async (p) => { await p.tap('d', 40); await wait(60); await p.tap('e', 40); });
await flipTest('E, 400ms sonra D: tampon dışı -> takla YOK', async (p) => { await p.tap('e', 40); await wait(400); await p.tap('d', 40); }, false);
await flipTest('Yalnız E: takla/zıplama YOK', async (p) => { await p.tap('e', 120); }, false);
await flipTest('W+D normal zıplama: takla YOK', async (p) => { await p.down('d'); await p.tap('w', 55); await wait(200); await p.up('d'); }, false);
await flipTest('Eski tuş R+D artık takla YAPMAZ', async (p) => { await p.down('r'); await p.down('d'); await wait(200); await p.up('d'); await p.up('r'); }, false);
await flipTest('E+D basılı tutmak art arda takla atmaz (1 takla)', async (p) => { await p.down('e'); await p.down('d'); await wait(2200); await p.up('d'); await p.up('e'); });

await test('Takla: rakibin üstünden geçip karşıya iniyor, ışınlanma yok', async (o) => {
  const p = await o(); await p.approach(110); await p.clr(); await p.down('d'); await p.down('e'); await wait(120); await p.up('e'); await wait(1300); await p.up('d'); await wait(300);
  const t = await p.tr(); const b = await p.st(); let jump = 0; for (let i = 1; i < t.length; i++) jump = Math.max(jump, Math.abs(t[i].x - t[i - 1].x));
  return { ok: crossed(t) && b.p1.s === 'idle' && b.p1.f === -1 && jump < 40 && Math.abs(b.p1.x - b.p2.x) >= 60, note: `dx=${(b.p1.x - b.p2.x).toFixed(0)} bakış=${b.p1.f} maks adım=${jump.toFixed(0)}px` };
});
await test('Takla: uzak rakip -> yine de tek takla, aynı tarafa iner', async (o) => {
  const p = await o(); await p.clr(); await p.down('d'); await p.down('e'); await wait(150); await p.up('e'); await wait(1300); await p.up('d');
  const t = await p.tr(); const b = await p.st(); return { ok: !crossed(t) && b.p1.x < b.p2.x && b.p1.s === 'idle', note: `dx=${(b.p1.x - b.p2.x).toFixed(0)}` };
});
await test('Takla: P2 (UMUT) Numpad6 ve N ile', async (o) => {
  const p = await o({ p1: 'sudem', p2: 'umut' }); await p.clr();
  await p.down('ArrowLeft'); await p.down('Numpad6'); await wait(150); await p.up('Numpad6'); await p.up('ArrowLeft'); await wait(1500);
  const a = flips(await p.tr(), 'af2'); await p.clr();
  await p.down('ArrowRight'); await p.down('n'); await wait(150); await p.up('n'); await p.up('ArrowRight'); await wait(1500);
  const b = flips(await p.tr(), 'af2'); return { ok: a === 1 && b === 1, note: `Numpad6=${a} N=${b}` };
});
await test('Ayar göçü: kayıtlı eski R tuşu -> yeni varsayılan E', async (o) => {
  const pre = () => localStorage.setItem('ankara-fighter-ayarlar-v1', JSON.stringify({ keys: { p1: { flip: ['KeyR'] }, p2: { flip: ['KeyT'] } } }));
  const p = await o({ pre }); await p.clr(); await p.down('d'); await p.down('r'); await wait(200); await p.up('r');
  const viaR = flips(await p.tr()); await p.down('e'); await wait(200); await p.up('e'); await p.up('d'); await wait(300);
  const viaE = flips(await p.tr()); return { ok: viaR === 0 && viaE === 1, note: `R=${viaR} E=${viaE}` };
});

// ---- Korunan hareketler ----
await test('D+D: yerdeki ileri takla rakibin İÇİNDEN GEÇMİYOR', async (o) => {
  const p = await o(); await p.approach(120); await p.clr(); await p.tap('d', 40); await wait(80); await p.tap('d', 40); await wait(1000);
  const t = await p.tr(); const gap = Math.min(...t.map((s) => s.x2 - s.x)); return { ok: t.some((s) => s.s === 'roll') && gap > 0, note: `en küçük mesafe ${gap.toFixed(0)}` };
});
await test('A+A: yerdeki geri takla çalışıyor', async (o) => {
  const p = await o(); await p.clr(); await p.tap('a', 40); await wait(80); await p.tap('a', 40); await wait(900); return (await p.tr()).some((s) => s.s === 'roll');
});
await test('Arena kenarı: duvara zıpla ve takla, sınır dışına çıkmaz', async (o) => {
  const p = await o(); await p.down('a'); const t0 = Date.now(); while (Date.now() - t0 < 6000 && (await p.st()).p1.x > 60) await wait(20); await p.clr();
  await p.down('w'); await wait(55); await p.up('w'); await wait(1300); await p.up('a'); await wait(200);
  await p.down('a'); await p.down('e'); await wait(150); await p.up('e'); await wait(1300); await p.up('a');
  const t = await p.tr(); return { ok: t.every((s) => s.x >= 39.9 && s.x <= 1336.1 && Number.isFinite(s.y)), note: `min x ${Math.min(...t.map((s) => s.x)).toFixed(1)}` };
});
await test('İniş: rakibin dibine zıplayıp inince iç içe geçme/titreme yok', async (o) => {
  const p = await o(); await p.approach(75); await p.clr(); await p.tap('w', 55); await wait(1500); await wait(600); // rakibin hemen önünde yerinde zıpla ve in
  const t = await p.tr(); const sep = Math.min(...t.map((s) => Math.abs(s.x - s.x2))); let rev = 0;
  for (let i = 2; i < t.length; i++) { const a = t[i - 1].x - t[i - 2].x, b = t[i].x - t[i - 1].x; if (Math.abs(a) > 0.4 && Math.abs(b) > 0.4 && Math.sign(a) !== Math.sign(b)) rev++; }
  return { ok: sep >= 60 && rev === 0, note: `mesafe ${sep.toFixed(0)} titreme ${rev}` };
});
for (const who of ['sudem', 'metehan']) await test(`Takla yalnız UMUT'a özel: ${who.toUpperCase()} E+D ile takla ATMAZ`, async (o) => {
  const p = await o({ p1: who, p2: 'umut' }); await p.clr(); await p.down('d'); await p.down('e'); await wait(300); await p.up('e'); await p.up('d'); await wait(300);
  return { ok: flips(await p.tr()) === 0, note: '' };
});

await browser.close(); server.close();
const bad = results.filter((r) => !r.ok);
console.log(`\n${results.length - bad.length}/${results.length} test geçti.`);
process.exit(bad.length ? 1 : 0);
