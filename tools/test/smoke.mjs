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
// UMUT'un taklası / yer taklası / süpürmesi şimdilik kapalı (src/10: AF_UMUT_OZEL). Açılınca bunu da true yap.
const TAKLA_ACIK = false;
const skip = (name) => console.log(`ATLANDI ${name.padEnd(58)} (takla şimdilik kapalı)`);
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function open({ p1 = 'umut', p2 = 'sudem', mode = '2p', pre, arena = 'ankara' } = {}) {
  const page = await browser.newPage();
  page.errors = [];
  page.on('pageerror', (e) => page.errors.push('pageerror: ' + e.message));
  page.on('console', (m) => m.type() === 'error' && page.errors.push('console: ' + m.text()));
  if (pre) await page.addInitScript(pre);
  await page.goto(`${base}/index.html#/battle?mode=${mode}&p1=${p1}&p2=${p2}&diff=normal&arena=${arena}`, { waitUntil: 'load' });
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

// ---- Normal zıplama (W / W+yön) rakibin üstünden GEÇEMEZ; yalnız takla geçer ----
const noCross = (tr, b) => !crossed(tr) && b.p1.x < b.p2.x && Math.min(...tr.map((s) => s.x2 - s.x)) > 0;
for (const [name, gap, steps] of [
  ['yalnız W, rakibin dibinde (60px)', 60, async (p) => { await p.tap('w', 55); await wait(1500); }],
  ['W+D basılı tutarak (90px)', 90, async (p) => { await p.down('d'); await p.down('w'); await wait(55); await p.up('w'); await wait(1500); await p.up('d'); }],
  ['W+D tek dokunuş, D hemen bırakılır (90px)', 90, async (p) => { await p.down('d'); await p.down('w'); await wait(55); await p.up('w'); await wait(100); await p.up('d'); await wait(1500); }],
  ['ÖNCE W sonra D (40ms gecikmeli) (90px)', 90, async (p) => { await p.down('w'); await wait(40); await p.down('d'); await wait(40); await p.up('w'); await wait(1500); await p.up('d'); }],
  ['D basılı, W vur: yakın (40px)', 40, async (p) => { await p.down('d'); await p.tap('w', 55); await wait(1500); await p.up('d'); }],
  ['W+D uzaktan (220px), tepe noktasında rakibin üstüne varır', 220, async (p) => { await p.down('d'); await p.down('w'); await wait(55); await p.up('w'); await wait(1500); await p.up('d'); }],
]) await test(`Zıplama geçemez: ${name}`, async (o) => {
  // tuş bırakıldıktan sonra oyunun bir kare işlemesini bekle (yoksa durum hâlâ 'walk' okunabiliyordu)
  const p = await o(); await p.approach(gap); await p.clr(); await steps(p); await wait(100); const t = await p.tr(); const b = await p.st();
  return { ok: noCross(t, b) && b.p1.s === 'idle', note: `bitiş dx=${(b.p1.x - b.p2.x).toFixed(0)} en yakın=${Math.min(...t.map((s) => s.x2 - s.x)).toFixed(0)}` };
});
await test('Zıplama geçemez: P2 ▲+◄ ile de geçemez (masa dışında, sol köşede)', async (o) => {
  const p = await o(); // p1'i sol kenara yasla, p2'yi masanın dışına (x<387) yanına getir
  await p.down('a'); const t0 = Date.now(); while (Date.now() - t0 < 6000 && (await p.st()).p1.x > 120) await wait(20); await p.up('a');
  await p.down('ArrowLeft'); const t1 = Date.now(); while (Date.now() - t1 < 8000) { const s = await p.st(); if (s.p2.x - s.p1.x <= 90) break; await wait(15); } await p.up('ArrowLeft'); await wait(150); await p.clr();
  await p.down('ArrowLeft'); await p.down('ArrowUp'); await wait(55); await p.up('ArrowUp'); await wait(1500); await p.up('ArrowLeft');
  const t = await p.tr(); const b = await p.st(); return { ok: noCross(t, b), note: `bitiş dx=${(b.p1.x - b.p2.x).toFixed(0)}` };
});

// ---- Havada takla (E + yön, sıra fark etmez) ----
const flipTest = (name, steps, expect = true) => (expect && !TAKLA_ACIK ? skip(`Takla: ${name}`) : test(`Takla: ${name}`, async (o) => {
  const p = await o(); await p.clr(); await steps(p); await wait(500); const t = await p.tr(); const n = flips(t);
  return { ok: expect ? n === 1 : n === 0, note: `takla sayısı ${n}` };
}));
await flipTest('E basılı, sonra D', async (p) => { await p.down('e'); await wait(30); await p.down('d'); await wait(300); await p.up('d'); await p.up('e'); });
await flipTest('D basılı, sonra E', async (p) => { await p.down('d'); await wait(30); await p.down('e'); await wait(300); await p.up('e'); await p.up('d'); });
await flipTest('E dokun-bırak, 60ms sonra D dokun (tampon)', async (p) => { await p.tap('e', 40); await wait(60); await p.tap('d', 40); });
await flipTest('D dokun-bırak, 60ms sonra E dokun (tampon)', async (p) => { await p.tap('d', 40); await wait(60); await p.tap('e', 40); });
await flipTest('E, 400ms sonra D: tampon dışı -> takla YOK', async (p) => { await p.tap('e', 40); await wait(400); await p.tap('d', 40); }, false);
await flipTest('Yalnız E: takla/zıplama YOK', async (p) => { await p.tap('e', 120); }, false);
await flipTest('W+D normal zıplama: takla YOK', async (p) => { await p.down('d'); await p.tap('w', 55); await wait(200); await p.up('d'); }, false);
await flipTest('Eski tuş R+D artık takla YAPMAZ', async (p) => { await p.down('r'); await p.down('d'); await wait(200); await p.up('d'); await p.up('r'); }, false);
await flipTest('E+D basılı tutmak art arda takla atmaz (1 takla)', async (p) => { await p.down('e'); await p.down('d'); await wait(2200); await p.up('d'); await p.up('e'); });

if (!TAKLA_ACIK) skip('Takla boyutu: kafa boyu idle ile aynı (±%10)'); else await test('Takla boyutu: kafa boyu idle ile aynı (±%10)', async (o) => {
  const p = await o(); // kaynak karelerde kafa genişliği: idle ≈103 px, back0-15 ≈70 px (ölçülmüş); çizimde eşit olmalı
  const r = await p.evaluate(() => { const f = window.__AF_match.p1.spr; return { idle: 103 * f.frames.idle.scale, back: 70 * f.backScale }; });
  return { ok: Math.abs(r.back / r.idle - 1) <= 0.1, note: `kafa idle ${r.idle.toFixed(1)}px takla ${r.back.toFixed(1)}px` };
});
if (!TAKLA_ACIK) skip('Takla: rakibin üstünden geçip karşıya iniyor, ışınlanma yok'); else await test('Takla: rakibin üstünden geçip karşıya iniyor, ışınlanma yok', async (o) => {
  const p = await o(); await p.approach(110); await p.clr(); await p.down('d'); await p.down('e'); await wait(120); await p.up('e'); await wait(1300); await p.up('d'); await wait(300);
  const t = await p.tr(); const b = await p.st(); let jump = 0; for (let i = 1; i < t.length; i++) jump = Math.max(jump, Math.abs(t[i].x - t[i - 1].x));
  return { ok: crossed(t) && b.p1.s === 'idle' && b.p1.f === -1 && jump < 40 && Math.abs(b.p1.x - b.p2.x) >= 60, note: `dx=${(b.p1.x - b.p2.x).toFixed(0)} bakış=${b.p1.f} maks adım=${jump.toFixed(0)}px` };
});
if (!TAKLA_ACIK) skip('Takla: uzak rakip -> yine de tek takla, aynı tarafa iner'); else await test('Takla: uzak rakip -> yine de tek takla, aynı tarafa iner', async (o) => {
  const p = await o(); await p.clr(); await p.down('d'); await p.down('e'); await wait(150); await p.up('e'); await wait(1300); await p.up('d');
  const t = await p.tr(); const b = await p.st(); return { ok: !crossed(t) && b.p1.x < b.p2.x && b.p1.s === 'idle', note: `dx=${(b.p1.x - b.p2.x).toFixed(0)}` };
});
if (!TAKLA_ACIK) skip('Takla: P2 (UMUT) Numpad6 ve N ile'); else await test('Takla: P2 (UMUT) Numpad6 ve N ile', async (o) => {
  const p = await o({ p1: 'sudem', p2: 'umut' }); await p.clr();
  await p.down('ArrowLeft'); await p.down('Numpad6'); await wait(150); await p.up('Numpad6'); await p.up('ArrowLeft'); await wait(1500);
  const a = flips(await p.tr(), 'af2'); await p.clr();
  await p.down('ArrowRight'); await p.down('n'); await wait(150); await p.up('n'); await p.up('ArrowRight'); await wait(1500);
  const b = flips(await p.tr(), 'af2'); return { ok: a === 1 && b === 1, note: `Numpad6=${a} N=${b}` };
});
if (!TAKLA_ACIK) skip('Ayar göçü: kayıtlı eski R tuşu -> yeni varsayılan E'); else await test('Ayar göçü: kayıtlı eski R tuşu -> yeni varsayılan E', async (o) => {
  const pre = () => localStorage.setItem('ankara-fighter-ayarlar-v1', JSON.stringify({ keys: { p1: { flip: ['KeyR'] }, p2: { flip: ['KeyT'] } } }));
  const p = await o({ pre }); await p.clr(); await p.down('d'); await p.down('r'); await wait(200); await p.up('r');
  const viaR = flips(await p.tr()); await p.down('e'); await wait(200); await p.up('e'); await p.up('d'); await wait(300);
  const viaE = flips(await p.tr()); return { ok: viaR === 0 && viaE === 1, note: `R=${viaR} E=${viaE}` };
});

// ---- Korunan hareketler ----
if (!TAKLA_ACIK) skip('D+D: yerdeki ileri takla rakibin İÇİNDEN GEÇMİYOR'); else await test('D+D: yerdeki ileri takla rakibin İÇİNDEN GEÇMİYOR', async (o) => {
  const p = await o(); await p.approach(120); await p.clr(); await p.tap('d', 40); await wait(80); await p.tap('d', 40); await wait(1000);
  const t = await p.tr(); const gap = Math.min(...t.map((s) => s.x2 - s.x)); return { ok: t.some((s) => s.s === 'roll') && gap > 0, note: `en küçük mesafe ${gap.toFixed(0)}` };
});
if (!TAKLA_ACIK) skip('A+A: yerdeki geri takla çalışıyor'); else await test('A+A: yerdeki geri takla çalışıyor', async (o) => {
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
for (const who of TAKLA_ACIK ? ['sudem', 'metehan', 'ahmet'] : ['umut', 'sudem', 'metehan', 'ahmet']) await test(`Takla ${TAKLA_ACIK ? "yalnız UMUT'a özel" : 'kapalı'}: ${who.toUpperCase()} E+D ile takla ATMAZ`, async (o) => {
  const p = await o({ p1: who, p2: who === 'umut' ? 'sudem' : 'umut' }); await p.clr(); await p.down('d'); await p.down('e'); await wait(300); await p.up('e'); await p.up('d'); await wait(300);
  return { ok: flips(await p.tr()) === 0, note: '' };
});
if (!TAKLA_ACIK) await test('Yer taklası kapalı: UMUT D+D ile takla ATMAZ', async (o) => {
  const p = await o(); await p.clr(); await p.tap('d', 40); await wait(80); await p.tap('d', 40); await wait(900);
  return { ok: !(await p.tr()).some((s) => s.s === 'roll'), note: '' };
});

// ---- Yeni tasarım (Ekim 2026): 4 karakter, çok kareli yumruk/tekme, özel hareketler ----
const fight = (p) => p.evaluate(async () => { const m = window.__AF_match; for (let i = 0; i < 80 && m.phase !== 'fight'; i++) await new Promise((r) => setTimeout(r, 100)); return m.phase; });
await test('4 karakter yükleniyor, yumruk/tekme kare dizileri var', async (o) => {
  const out = [];
  for (const [a, b] of [['umut', 'sudem'], ['metehan', 'ahmet']]) {
    const p = await o({ p1: a, p2: b });
    out.push(...(await p.evaluate(() => [window.__AF_match.p1, window.__AF_match.p2].map((f) => `${f.charId}:${f.spr.seq.punch?.length || 0}/${f.spr.seq.kick?.length || 0}`))));
    if (p.errors.length) return { ok: false, note: p.errors[0] };
    await p.close();
  }
  const ok = out.every((x) => /:5\/(5|3)$/.test(x));
  return { ok, note: out.join(' ') };
});
await test('SUDEM F: sihirli yüzük uzağa gider ve vurur', async (o) => {
  const p = await o({ p1: 'sudem', p2: 'umut' }); await fight(p); await p.tap('f', 50); await wait(250);
  const kinds = await p.evaluate(() => window.__AF_match.projectiles.map((x) => x.kind)); await wait(1500);
  const hp = await p.evaluate(() => window.__AF_match.p2.hp);
  return { ok: kinds.includes('ringshot') && hp < 150, note: `mermi=${kinds.join(',')} rakip can=${hp}` };
});
await test('UMUT F: flaş artık yok (yalnız ultide)', async (o) => {
  const p = await o(); await fight(p); await p.tap('f', 50); await wait(250);
  const kinds = await p.evaluate(() => window.__AF_match.projectiles.map((x) => x.kind));
  return { ok: kinds.length === 0, note: `mermi=${kinds.join(',') || 'yok'}` };
});
await test('AHMET ulti GAZA BAS!: motor arkadan gelip vurur', async (o) => {
  const p = await o({ p1: 'ahmet', p2: 'sudem' }); await fight(p);
  // ulti doğrudan tetiklenir; motorun çıkış noktası AHMET'in arkasında ve yakın (≤200 px) olmalı
  const k = await p.evaluate(() => { const m = window.__AF_match; m.giveUlti(0); m.tryUltimate(m.p1); return m.projectiles.map((x) => `${x.kind}@${Math.round(x.x)}${x.x < m.p1.x && m.p1.x - x.x <= 200 ? '<arka' : ''}`); }); await wait(2200);
  const hp = await p.evaluate(() => window.__AF_match.p2.hp);
  return { ok: k.some((x) => x.startsWith('motor@') && x.endsWith('<arka')) && hp <= 145 - 25, note: `mermi=${k.join(',')} rakip can=${hp}` };
});
await test('UMUT ulti: fotoğraflar gövde ortasından çıkar (yerden değil)', async (o) => {
  const p = await o(); await fight(p); await p.evaluate(() => window.__AF_match.giveUlti(0)); await p.tap('c', 50); await wait(150);
  const h = await p.evaluate(() => { const m = window.__AF_match; return m.projectiles.filter((x) => x.kind === 'photo').map((x) => Math.round(m.p1.y - x.baseY)); });
  return { ok: h.length === 3 && h.every((v) => v >= 100), note: `yerden yükseklik ${h.join(',')}` };
});
await test('METEHAN koşusu ulti barı harcamaz', async (o) => {
  const p = await o({ p1: 'metehan', p2: 'umut' }); await fight(p);
  const m0 = await p.evaluate(() => { window.__AF_match.p1.meter = 40; return 40; }); await p.tap(' ', 60); await wait(120);
  const r = await p.evaluate(() => ({ m: window.__AF_match.p1.meter, d: window.__AF_match.p1.dashT }));
  return { ok: r.m >= m0 && r.d > 0, note: `bar ${m0} -> ${r.m}` };
});
await test('METEHAN köşe döngüsü yok: 6 sn koşu spamı rakibi bitirmez', async (o) => {
  const p = await o({ p1: 'metehan', p2: 'umut' }); await fight(p);
  await p.evaluate(() => { const m = window.__AF_match; m.p2.x = 1336 - 10; m.p1.x = 1336 - 200; });
  const hp0 = await p.evaluate(() => window.__AF_match.p2.hp);
  await p.clr(); await p.down('d'); const t0 = Date.now(); while (Date.now() - t0 < 6000) { await p.tap(' ', 40); await wait(110); } await p.up('d');
  const hp = await p.evaluate(() => window.__AF_match.p2.hp);
  // köşede geri sekerken METEHAN hasar pozuna (hitstun) girmemeli
  const sekme = (await p.tr()).filter((s) => s.s === 'hitstun').length;
  return { ok: hp0 - hp <= 30 && sekme === 0, note: `6 sn'de hasar ${hp0 - hp}, hasar pozu kare sayısı ${sekme}` };
});

// ---- Menü / antrenman ----
await test('Seçim ekranı: ESC önce HAZIR\'ı iptal eder, sonra ana menüye döner', async () => {
  const p = await browser.newPage(); p.errors = []; p.on('pageerror', (e) => p.errors.push(e.message));
  try {
    await p.goto(`${base}/index.html#/select?mode=2p`, { waitUntil: 'load' }); await p.waitForSelector('[data-testid=select-screen]');
    await p.keyboard.press('z'); await wait(150);
    const hazir = await p.textContent('[data-testid=p1-ready-indicator]');
    await p.keyboard.press('Escape'); await wait(150);
    const iptal = await p.textContent('[data-testid=p1-ready-indicator]'); const hala = await p.evaluate(() => location.hash);
    await p.keyboard.press('Escape'); await wait(300); const son = await p.evaluate(() => location.hash);
    const btn = await p.$('[data-testid=select-back-button]');
    return { ok: /✓/.test(hazir) && !/✓/.test(iptal) && hala.startsWith('#/select') && (son === '#/' || son === '') && !btn && !p.errors.length, note: `${hazir.trim()} -> ${iptal.trim()} -> ${son || '#/'}` };
  } finally { await p.close(); }
});
await test('Antrenman: süre yok, kukla nakavt olmaz, can dolar, istatistik tutulur', async (o) => {
  const p = await o({ mode: 'training', p1: 'umut', p2: 'sudem' });
  await p.evaluate(() => { const m = window.__AF_match; m.p2.x = m.p1.x + 150; m.p2.hp = 3; });
  await p.tap('z', 50); await wait(500);
  const a = await p.evaluate(() => { const m = window.__AF_match; return { t: m.timeLeft, phase: m.phase, hp: m.p2.hp, max: m.p2.maxHp, last: m.train.last }; });
  await p.evaluate(() => { window.__AF_match.p2.hp = 50; }); await wait(1400);
  const dolan = await p.evaluate(() => window.__AF_match.p2.hp);
  return { ok: a.t === Infinity && a.phase === 'fight' && a.hp > 3 && a.last > 0 && dolan === a.max, note: `faz=${a.phase} can=${a.hp} son vuruş=${a.last} dolum=${dolan}` };
});
await test('Antrenman: R konumları sıfırlar, kukla eğilme/koruma modları', async (o) => {
  const p = await o({ mode: 'training', p1: 'ahmet', p2: 'metehan' });
  await p.evaluate(() => { const m = window.__AF_match; m.p1.x = 900; m.p2.x = 1100; });
  await p.tap('r', 50); await wait(100);
  const x = await p.evaluate(() => Math.round(window.__AF_match.p1.x));
  await p.evaluate(() => window.__AF_match.setDummy('crouch')); await wait(200);
  const c = await p.evaluate(() => window.__AF_match.p2.state);
  await p.evaluate(() => window.__AF_match.setDummy('guard')); await wait(200);
  const g = await p.evaluate(() => window.__AF_match.p2.state);
  return { ok: x === Math.round(1376 * 0.26) && c === 'crouch' && g === 'guard', note: `x=${x} eğil=${c} koru=${g}` };
});

await test('Aynı anda yumruk: P1 önceliği yok, ikisi de vurur (10 deneme)', async (o) => {
  const p = await o({ p1: 'umut', p2: 'umut' }); await fight(p);
  let ikisi = 0;
  for (let i = 0; i < 10; i++) {
    const r = await p.evaluate(async () => {
      const m = window.__AF_match;
      for (const f of [m.p1, m.p2]) { f.hp = f.maxHp; f.state = 'idle'; f.attack = null; f.vx = 0; f.hitstunT = 0; f.y = 704; f.ground = 'g1'; }
      m.p1.x = 600; m.p2.x = 720; m.p1.facing = 1; m.p2.facing = -1;
      await new Promise((r) => setTimeout(r, 80));
      for (const c of ['KeyZ', 'Numpad1']) window.dispatchEvent(new KeyboardEvent('keydown', { code: c, bubbles: true }));
      await new Promise((r) => setTimeout(r, 40));
      for (const c of ['KeyZ', 'Numpad1']) window.dispatchEvent(new KeyboardEvent('keyup', { code: c, bubbles: true }));
      await new Promise((r) => setTimeout(r, 600));
      return m.p1.hp < m.p1.maxHp && m.p2.hp < m.p2.maxHp;
    });
    r && ikisi++;
  }
  return { ok: ikisi === 10, note: `ikisi de vurdu: ${ikisi}/10` };
});

// ---- Denge (18 Ekim) ----
await test('Gövde genişlikleri: METEHAN en geniş, kimse 36 px altında değil', async (o) => {
  const w = {};
  for (const [a, b] of [['umut', 'sudem'], ['metehan', 'ahmet']]) {
    const p = await o({ p1: a, p2: b });
    Object.assign(w, await p.evaluate(() => Object.fromEntries([window.__AF_match.p1, window.__AF_match.p2].map((f) => [f.charId, Math.round(f.halfW)]))));
    await p.close();
  }
  const ok = Object.values(w).every((v) => v >= 36) && w.metehan === Math.max(...Object.values(w));
  return { ok, note: Object.entries(w).map(([k, v]) => `${k}=${v}`).join(' ') };
});
await test('Tekme menzilleri eşit (±4 px), görsel farkı dengeyi bozmuyor', async (o) => {
  const r = {};
  for (const [a, b] of [['umut', 'sudem'], ['metehan', 'ahmet']]) {
    const p = await o({ p1: a, p2: b });
    Object.assign(r, await p.evaluate(() => {
      const m = window.__AF_match;
      return Object.fromEntries([m.p1, m.p2].map((f) => [f.charId, Math.round(m.reachOf(f, 'kick'))]));
    }));
    await p.close();
  }
  const v = Object.values(r);
  return { ok: Math.max(...v) - Math.min(...v) <= 4, note: Object.entries(r).map(([k, v]) => `${k}=${v}`).join(' ') };
});
await test('Bot METEHAN koşu çarpmasını kullanıyor', async (o) => {
  const p = await o({ mode: 'bot', p1: 'umut', p2: 'metehan' }); await fight(p);
  const kostu = await p.evaluate(async () => {
    const m = window.__AF_match;
    for (let i = 0; i < 500; i++) { m.p1.x = Math.min(1336, Math.max(40, m.p2.x - 380)); m.p1.hp = m.p1.maxHp; if (m.p2.dashT > 0) return true; await new Promise((r) => setTimeout(r, 50)); }
    return false;
  });
  return { ok: kostu, note: kostu ? 'koştu' : '25 sn içinde koşmadı' };
});

await test('Ultiler: risk/ödül hasarı (20–27), korunursa en fazla 7', async (o) => {
  const out = [];
  for (const c of ['umut', 'sudem', 'metehan', 'ahmet']) {
    const p = await o({ p1: c, p2: c === 'umut' ? 'sudem' : 'umut' });
    out.push(await p.evaluate((c) => {
      const m = window.__AF_match; m.disposed = !0;
      const bos = () => ({ left: !1, right: !1, down: !1, jumpEdge: !1, dropEdge: !1, attacks: [!1, !1, !1, !1], ultEdge: !1, projEdge: !1, rollEdge: 0, sweepEdge: !1, flipPress: !1, dirPress: 0, flip: !1, guard: !1, dash: !1 });
      const dene = (koru) => {
        for (const f of [m.p1, m.p2]) { f.hp = f.maxHp; f.state = 'idle'; f.attack = null; f.vx = 0; f.y = 704; f.ground = 'g1'; f.gp = 100; f.chipAcc = 0; }
        m.projectiles = []; m.p1.x = 300; m.p2.x = 750; m.p1.facing = 1; m.p2.facing = -1; m.p1.meter = 100;
        const h0 = m.p2.hp;
        for (let k = 0; k < 240; k++) { const a = bos(), b = bos(); k === 0 && (a.ultEdge = !0); koru && (b.guard = !0); m.input.consume = () => ({ p1: a, p2: b, pauseEdge: !1, boxesEdge: !1 }); m.step(1e3 / 60); }
        return h0 - m.p2.hp;
      };
      return [c, dene(!1), dene(!0)];
    }, c));
    await p.close();
  }
  const bek = { umut: 21, sudem: 24, metehan: 20, ahmet: 25 };
  return { ok: out.every(([c, a, b]) => a === bek[c] && b <= 7), note: out.map(([c, a, b]) => `${c}=${a}/${b}`).join(' ') };
});

// ---- Hareket komutları (↓↘→ + Yumruk) ----
const qcf = async (p, asagi, ileri, yumruk) => { await p.down(asagi); await wait(40); await p.down(ileri); await wait(40); await p.up(asagi); await wait(30); await p.tap(yumruk, 40); await p.up(ileri); };
await test('↓↘→ + Z: SUDEM yüzük atar (P1, sağa bakarken)', async (o) => {
  const p = await o({ p1: 'sudem', p2: 'umut' }); await fight(p); await qcf(p, 's', 'd', 'z'); await wait(150);
  const k = await p.evaluate(() => window.__AF_match.projectiles.map((x) => x.kind));
  return { ok: k.includes('ringshot'), note: `mermi=${k.join(',') || 'yok'}` };
});
await test('↓↘→ + Num1: SUDEM yüzük atar (P2, sola bakarken)', async (o) => {
  const p = await o({ p1: 'umut', p2: 'sudem' }); await fight(p); await qcf(p, 'ArrowDown', 'ArrowLeft', 'Numpad1'); await wait(150);
  const k = await p.evaluate(() => window.__AF_match.projectiles.map((x) => x.kind));
  return { ok: k.includes('ringshot'), note: `mermi=${k.join(',') || 'yok'}` };
});
await test('↓↘→ + Z: METEHAN koşu çarpması', async (o) => {
  const p = await o({ p1: 'metehan', p2: 'umut' }); await fight(p); await qcf(p, 's', 'd', 'z'); await wait(60);
  const d = await p.evaluate(() => window.__AF_match.p1.dashT);
  return { ok: d > 0, note: `koşu=${Math.round(d)}ms` };
});
await test('↓↘→↓↘→ + Z: ulti (bar doluyken)', async (o) => {
  const p = await o({ p1: 'umut', p2: 'sudem' }); await fight(p); await p.evaluate(() => window.__AF_match.giveUlti(0));
  await p.down('s'); await wait(40); await p.down('d'); await wait(40); await p.up('s'); await wait(40); await p.up('d'); await wait(40);
  await qcf(p, 's', 'd', 'z'); await wait(150);
  const r = await p.evaluate(() => ({ m: window.__AF_match.p1.meter, k: window.__AF_match.projectiles.map((x) => x.kind) }));
  return { ok: r.m === 0 && r.k.includes('photo'), note: `bar=${r.m} mermi=${r.k.join(',') || 'yok'}` };
});
await test('Özel hareketi olmayan UMUT: ↓↘→ + Z normal yumruk atar', async (o) => {
  const p = await o(); await fight(p); await qcf(p, 's', 'd', 'z'); await wait(60);
  const r = await p.evaluate(() => ({ s: window.__AF_match.p1.state, id: window.__AF_match.p1.attack?.def.id }));
  return { ok: r.s === 'attack' && r.id === 'punch', note: `${r.s}/${r.id}` };
});

// ---- Arenalar ----
for (const [ar, beklenen] of [['ankara', 'g1'], ['samsun', 'g1'], ['corum', 'g1']]) await test(`Arena ${ar.toUpperCase()}: tek zemin, masa yok (yere iner)`, async (o) => {
  const p = await o({ pre: undefined, mode: '2p', p1: 'umut', p2: 'sudem', arena: ar });
  await p.evaluate(() => { const m = window.__AF_match, a = m.p1; a.x = 690; a.y = 300; a.vy = 0; a.ground = null; a.state = 'air'; m.p2.x = 1250; });
  await wait(1200);
  const r = await p.evaluate(() => ({ g: window.__AF_match.p1.ground, y: Math.round(window.__AF_match.p1.y), ar: window.__AF_match.arena.id }));
  return { ok: r.g === beklenen && r.ar === ar, note: `arena=${r.ar} zemin=${r.g} y=${r.y}` };
});

await browser.close(); server.close();
const bad = results.filter((r) => !r.ok);
console.log(`\n${results.length - bad.length}/${results.length} test geçti.`);
process.exit(bad.length ? 1 : 0);
