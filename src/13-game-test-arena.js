// Test zemini: bütün karakterler için ortak perspektif ve ayak temas referansı.
// Bir kez çizilir; menü, VS ve maç aynı görseli kullanır.
function AF_testArenaImage() {
  const c = document.createElement(`canvas`);
  c.width = 1376;
  c.height = 768;
  const g = c.getContext(`2d`), ufuk = 544, zemin = 704, merkez = 688;
  g.fillStyle = `#121124`;
  g.fillRect(0, 0, c.width, c.height);
  // Duvardaki sabit kareler ölçeği; zemindeki çizgiler derinliği gösterir.
  g.strokeStyle = `#272744`;
  g.lineWidth = 1;
  g.beginPath();
  for (let x = 0; x <= c.width; x += 64) { g.moveTo(x, 0); g.lineTo(x, ufuk); }
  for (let y = 32; y <= ufuk; y += 64) { g.moveTo(0, y); g.lineTo(c.width, y); }
  g.stroke();
  g.fillStyle = `#1c2440`;
  g.fillRect(0, ufuk, c.width, c.height - ufuk);
  g.strokeStyle = `#46516b`;
  g.beginPath();
  for (let x = -2200; x <= 3600; x += 160) {
    g.moveTo(merkez + (x - merkez) * 0.18, ufuk);
    g.lineTo(x, c.height);
  }
  for (const y of [544, 556, 573, 597, 630, 675, 736]) {
    g.moveTo(0, y); g.lineTo(c.width, y);
  }
  g.stroke();
  // Temas çizgisi fizik motorundaki y=704 ile aynıdır; yeni bir platform değildir.
  g.strokeStyle = `#94a3b8`;
  g.lineWidth = 2;
  g.beginPath(); g.moveTo(0, zemin); g.lineTo(c.width, zemin); g.stroke();
  g.setLineDash([5, 8]);
  g.strokeStyle = `#64748b`;
  g.beginPath(); g.moveTo(merkez, 176); g.lineTo(merkez, zemin); g.stroke();
  g.setLineDash([]);
  for (const [x, renk] of [[360, `#ff2a5f`], [1016, `#00c8ff`]]) {
    g.strokeStyle = renk;
    g.beginPath(); g.moveTo(x - 18, zemin); g.lineTo(x + 18, zemin);
    g.moveTo(x, zemin - 7); g.lineTo(x, zemin + 7); g.stroke();
  }
  g.font = `700 18px monospace`;
  g.textAlign = `center`;
  g.fillStyle = `#94a3b8`;
  g.fillText(`TEST ZEMİNİ`, merkez, 280);
  g.font = `12px monospace`;
  g.fillText(`ORTAK ÖLÇEK · PERSPEKTİF · AYAK TEMASI`, merkez, 303);
  g.textAlign = `left`;
  g.fillText(`TEMAS ÇİZGİSİ · 704`, 24, 750);
  return c.toDataURL(`image/png`);
}
