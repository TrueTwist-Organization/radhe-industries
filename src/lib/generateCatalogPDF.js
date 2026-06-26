import jsPDF from 'jspdf';

const BRAND_BLUE = [11, 79, 147];
const BRAND_ORANGE = [255, 138, 0];
const WHITE = [255, 255, 255];
const DARK = [5, 26, 46];
const GRAY = [100, 110, 130];
const LIGHT_BG = [244, 246, 251];
const BORDER = [220, 225, 235];

function setFont(doc, size, style = 'normal', color = DARK) {
  doc.setFontSize(size);
  doc.setFont('helvetica', style);
  doc.setTextColor(...color);
}

function drawRect(doc, x, y, w, h, color, radius = 0) {
  doc.setFillColor(...color);
  if (radius > 0) {
    doc.roundedRect(x, y, w, h, radius, radius, 'F');
  } else {
    doc.rect(x, y, w, h, 'F');
  }
}

function drawCover(doc, title, subtitle, color1 = BRAND_BLUE, color2 = BRAND_ORANGE) {
  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();

  // Background gradient simulation
  drawRect(doc, 0, 0, W, H, color1);
  drawRect(doc, 0, H * 0.55, W, H * 0.45, [color1[0] + 10, color1[1] + 30, color1[2] + 60]);

  // Orange accent bar
  drawRect(doc, 0, H - 12, W, 12, BRAND_ORANGE);

  // Badge
  setFont(doc, 9, 'bold', BRAND_ORANGE);
  doc.text('PRODUCT CATALOG 2025–26', 20, 38);

  // Title
  setFont(doc, 38, 'bold', WHITE);
  doc.text(title, 20, 62);
  setFont(doc, 24, 'bold', WHITE);
  doc.text(subtitle, 20, 78);

  // Accent line
  drawRect(doc, 20, 86, 50, 3, BRAND_ORANGE);

  // Description
  setFont(doc, 11, 'normal', [200, 210, 230]);
  const desc =
    title.includes('SUBMERSIBLE')
      ? 'High-performance submersible pumps from 3 HP to 15 HP for borewell applications.'
      : 'Compact self-priming monoset pumps from 0.5 HP to 5 HP for home, garden & farm.';
  doc.text(desc, 20, 100, { maxWidth: W - 40 });

  // Company name at bottom
  setFont(doc, 18, 'bold', BRAND_ORANGE);
  doc.text('RADHE INDUSTRIES', 20, H - 38);
  setFont(doc, 9, 'normal', [180, 190, 210]);
  doc.text('Delivering Excellence in Every Pump', 20, H - 28);
  doc.text('Edition: 2025–2026', W - 20, H - 28, { align: 'right' });
}

function sectionHeader(doc, label, title, y) {
  setFont(doc, 8, 'bold', BRAND_ORANGE);
  doc.text(label.toUpperCase(), 15, y);
  setFont(doc, 16, 'bold', DARK);
  doc.text(title, 15, y + 8);
  drawRect(doc, 15, y + 11, 40, 2.5, BRAND_ORANGE);
  return y + 18;
}

function featureCards(doc, features, startY) {
  const W = doc.internal.pageSize.getWidth();
  const cardW = (W - 40) / 3;
  let y = startY;
  features.forEach((f, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 15 + col * (cardW + 5);
    const cy = y + row * 32;
    drawRect(doc, x, cy, cardW, 28, LIGHT_BG, 3);
    setFont(doc, 13, 'normal', DARK);
    doc.text(f.icon, x + 4, cy + 9);
    setFont(doc, 9, 'bold', DARK);
    doc.text(f.title, x + 14, cy + 9);
    setFont(doc, 7.5, 'normal', GRAY);
    doc.text(f.desc, x + 4, cy + 16, { maxWidth: cardW - 8 });
  });
  return y + Math.ceil(features.length / 3) * 32 + 4;
}

function drawTable(doc, headers, rows, startY) {
  const W = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const colWidths = headers.map(h => h.width);
  const tableW = colWidths.reduce((a, b) => a + b, 0);
  const startX = (W - tableW) / 2;
  const rowH = 10;
  let y = startY;

  // Header row
  drawRect(doc, startX, y, tableW, rowH, DARK);
  let x = startX;
  headers.forEach(h => {
    setFont(doc, 7, 'bold', WHITE);
    doc.text(h.label, x + h.width / 2, y + 6.5, { align: 'center' });
    x += h.width;
  });
  y += rowH;

  // Data rows
  rows.forEach((row, ri) => {
    if (y + rowH > pageH - 20) {
      doc.addPage();
      y = 20;
    }
    drawRect(doc, startX, y, tableW, rowH, ri % 2 === 0 ? WHITE : LIGHT_BG);
    // border
    doc.setDrawColor(...BORDER);
    doc.setLineWidth(0.2);
    doc.rect(startX, y, tableW, rowH);

    x = startX;
    row.forEach((cell, ci) => {
      const isFirst = ci === 0;
      setFont(doc, isFirst ? 8 : 7.5, isFirst ? 'bold' : 'normal', DARK);
      doc.text(String(cell), x + colWidths[ci] / 2, y + 6.5, { align: 'center' });
      x += colWidths[ci];
    });
    y += rowH;
  });

  return y + 6;
}

function specGrid(doc, specs, startY) {
  const W = doc.internal.pageSize.getWidth();
  const cols = 2;
  const cardW = (W - 35) / cols;
  let y = startY;
  specs.forEach((s, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = 15 + col * (cardW + 5);
    const cy = y + row * 18;
    drawRect(doc, x, cy, cardW, 14, LIGHT_BG, 2);
    setFont(doc, 7, 'bold', GRAY);
    doc.text(s.label.toUpperCase(), x + 4, cy + 5);
    setFont(doc, 9, 'bold', DARK);
    doc.text(s.value, x + 4, cy + 11);
  });
  return y + Math.ceil(specs.length / cols) * 18 + 4;
}

function appGrid(doc, apps, startY) {
  const W = doc.internal.pageSize.getWidth();
  const cardW = (W - 35) / 2;
  let y = startY;
  apps.forEach((a, i) => {
    const col = i % 2;
    const row = Math.floor(i / 2);
    const x = 15 + col * (cardW + 5);
    const cy = y + row * 24;
    drawRect(doc, x, cy, cardW, 20, LIGHT_BG, 2);
    setFont(doc, 11, 'normal', DARK);
    doc.text(a.icon, x + 4, cy + 9);
    setFont(doc, 8, 'bold', DARK);
    doc.text(a.title, x + 14, cy + 7);
    setFont(doc, 7, 'normal', GRAY);
    doc.text(a.desc, x + 14, cy + 13, { maxWidth: cardW - 18 });
  });
  return y + Math.ceil(apps.length / 2) * 24 + 4;
}

function drawContactSection(doc, startY) {
  const W = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  let y = startY;
  if (y + 50 > pageH - 10) { doc.addPage(); y = 20; }
  drawRect(doc, 0, y, W, 55, DARK);
  setFont(doc, 14, 'bold', WHITE);
  doc.text('Get In Touch', 15, y + 12);
  setFont(doc, 9, 'normal', [180, 190, 210]);
  doc.text('For pricing, availability, installation advice — contact us directly.', 15, y + 20);
  const contacts = [
    { label: 'Phone / WhatsApp', value: '+91 92747 67732' },
    { label: 'Contact Person', value: 'Darshan Patel' },
    { label: 'Website', value: 'radheindustries.in' },
  ];
  const cardW = (W - 40) / 3;
  contacts.forEach((c, i) => {
    const cx = 15 + i * (cardW + 5);
    drawRect(doc, cx, y + 26, cardW, 20, [255, 255, 255, 20], 2);
    doc.setDrawColor(...BRAND_ORANGE);
    doc.setLineWidth(0.3);
    doc.roundedRect(cx, y + 26, cardW, 20, 2, 2);
    setFont(doc, 7, 'bold', BRAND_ORANGE);
    doc.text(c.label.toUpperCase(), cx + 4, y + 33);
    setFont(doc, 9, 'bold', WHITE);
    doc.text(c.value, cx + 4, y + 41);
  });
  return y + 60;
}

function footer(doc, y) {
  const W = doc.internal.pageSize.getWidth();
  setFont(doc, 7, 'normal', [160, 170, 180]);
  doc.text(
    '© 2026 Radhe Industries. All Rights Reserved. Specifications subject to change without notice.',
    W / 2, y + 6,
    { align: 'center' }
  );
}

// ─── SUBMERSIBLE PDF ─────────────────────────────────────────────────────────
export function generateSubmersiblePDF() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const W = doc.internal.pageSize.getWidth();

  // Page 1 — Cover
  drawCover(doc, 'SUBMERSIBLE', 'PUMP CATALOG', DARK, BRAND_ORANGE);

  // Page 2 — About + Features
  doc.addPage();
  let y = 20;
  y = sectionHeader(doc, 'About Our Products', 'Why Choose Radhe Industries?', y);
  setFont(doc, 9, 'normal', GRAY);
  doc.text(
    'Radhe Industries supplies premium submersible pumps from Kirloskar, Crompton, Lubi, Shakti, Havells & V-Guard. Our range covers 3 HP to 15 HP for deep borewell applications.',
    15, y, { maxWidth: W - 30 }
  );
  y += 14;
  y = featureCards(doc, [
    { icon: '★', title: 'Top Brand Motors', desc: 'Kirloskar, Crompton, Lubi — trusted across India.' },
    { icon: '⚡', title: 'Energy Efficient', desc: 'ISI-marked motors with high efficiency ratings.' },
    { icon: '✔', title: 'Full Service Support', desc: 'Expert pump selection & after-sale support.' },
    { icon: '~', title: 'Deep Borewell Ready', desc: '4" & 6" casing for up to 220m head.' },
    { icon: '✓', title: 'ISI Certified', desc: 'All products meet BIS quality standards.' },
    { icon: '■', title: 'Ready Stock', desc: 'Fast delivery across Gujarat & nearby states.' },
  ], y);

  // Page 3 — Model Table
  doc.addPage();
  y = 20;
  y = sectionHeader(doc, 'Complete Product Range', 'Submersible Pump Models', y);
  y = drawTable(doc,
    [
      { label: 'Model', width: 28 },
      { label: 'HP', width: 18 },
      { label: 'Stages', width: 18 },
      { label: 'Max Head', width: 26 },
      { label: 'Discharge', width: 28 },
      { label: 'Phase', width: 32 },
      { label: 'Bore Casing', width: 26 },
      { label: 'Category', width: 24 },
    ],
    [
      ['CRN-3HP', '3 HP', '7', '90 m', '2,000 LPH', 'Single/Three', '4" Casing', 'Entry Level'],
      ['CRN-5HP', '5 HP', '10', '120 m', '3,000 LPH', 'Single/Three', '4" Casing', 'Best Seller'],
      ['CRN-7.5HP', '7.5 HP', '12', '150 m', '4,500 LPH', 'Three Phase', '6" Casing', 'Popular'],
      ['CRN-10HP', '10 HP', '14', '180 m', '6,000 LPH', 'Three Phase', '6" Casing', 'Heavy Duty'],
      ['CRN-12.5HP', '12.5 HP', '16', '200 m', '7,500 LPH', 'Three Phase', '6" Casing', 'Industrial'],
      ['CRN-15HP', '15 HP', '18', '220 m', '9,000 LPH', 'Three Phase', '6" Casing', 'Pro Max'],
      ['CRN-5HP (V6)', '5 HP V6', '6', '70 m', '2,500 LPH', 'Single Phase', '4" Casing', 'V6 Series'],
      ['CRN-7.5HP (V6)', '7.5 HP V6', '8', '90 m', '3,500 LPH', 'Single Phase', '4" Casing', 'V6 Series'],
    ],
    y
  );

  // General Specs
  y += 4;
  y = sectionHeader(doc, 'Technical Details', 'General Specifications', y);
  y = specGrid(doc, [
    { label: 'Motor Type', value: 'Water Cooled Submersible' },
    { label: 'Voltage', value: 'Single: 220V | Three: 415V' },
    { label: 'Frequency', value: '50 Hz' },
    { label: 'Insulation Class', value: 'Class F' },
    { label: 'Body Material', value: 'SS 304 / Noryl' },
    { label: 'Impeller', value: 'SS / Engineered Plastic' },
    { label: 'Motor Protection', value: 'IP68 (Waterproof)' },
    { label: 'Warranty', value: '1 Year Motor Warranty' },
    { label: 'Certifications', value: 'BIS / ISI Marked' },
    { label: 'Cooling', value: 'By Pumped Water' },
  ], y);

  // Page 4 — Applications + Contact
  doc.addPage();
  y = 20;
  y = sectionHeader(doc, 'Use Cases', 'Applications', y);
  y = appGrid(doc, [
    { icon: '~', title: 'Agriculture & Irrigation', desc: 'Farm irrigation, drip systems, sprinkler networks.' },
    { icon: '■', title: 'Residential Water Supply', desc: 'Borewell water supply for homes & apartments.' },
    { icon: '▲', title: 'Construction Sites', desc: 'Dewatering and construction water supply.' },
    { icon: '●', title: 'Industrial Use', desc: 'Water supply for factories & processing units.' },
    { icon: '+', title: 'Community Projects', desc: 'Village & panchayat water supply schemes.' },
    { icon: '*', title: 'Hotels & Resorts', desc: 'High-head water delivery for multi-floor buildings.' },
  ], y);
  y += 6;
  y = drawContactSection(doc, y);
  footer(doc, doc.internal.pageSize.getHeight() - 12);

  doc.save('Radhe-Industries-Submersible-Pump-Catalog.pdf');
}

// ─── MONOSET PDF ─────────────────────────────────────────────────────────────
export function generateMonosetPDF() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const W = doc.internal.pageSize.getWidth();

  // Page 1 — Cover
  drawCover(doc, 'MONOSET', 'PUMP CATALOG', [11, 79, 147], BRAND_ORANGE);

  // Page 2 — About + Features
  doc.addPage();
  let y = 20;
  y = sectionHeader(doc, 'About Our Products', 'Why Choose Radhe Industries?', y);
  setFont(doc, 9, 'normal', GRAY);
  doc.text(
    'Radhe Industries supplies premium monoset pumps from Kirloskar, Crompton, Lubi, Shakti, Havells & V-Guard. Our range from 0.5 HP to 5 HP is perfect for homes, gardens & small farms.',
    15, y, { maxWidth: W - 30 }
  );
  y += 14;
  y = featureCards(doc, [
    { icon: '~', title: 'Self-Priming', desc: 'Starts without manual water filling.' },
    { icon: '⚡', title: 'Low Power Use', desc: 'Energy-efficient motor saves electricity.' },
    { icon: '✔', title: 'Easy Install', desc: 'Surface mount — no borewell needed.' },
    { icon: '★', title: 'Top Brand Quality', desc: 'Kirloskar, Crompton, Lubi trusted motors.' },
    { icon: '✓', title: 'ISI Certified', desc: 'BIS certified for quality & safety.' },
    { icon: '■', title: 'Ready Stock', desc: 'Fast delivery across Gujarat.' },
  ], y);

  // Page 3 — Model Table
  doc.addPage();
  y = 20;
  y = sectionHeader(doc, 'Complete Product Range', 'Monoset Pump Models', y);
  y = drawTable(doc,
    [
      { label: 'Model', width: 28 },
      { label: 'HP', width: 20 },
      { label: 'Max Head', width: 26 },
      { label: 'Discharge', width: 28 },
      { label: 'Suction', width: 22 },
      { label: 'Phase', width: 30 },
      { label: 'Outlet', width: 26 },
      { label: 'Category', width: 20 },
    ],
    [
      ['CRN-0.5HP', '0.5 HP', '25 m', '800 LPH', '6 m', 'Single Phase', '25mm (1")', 'Starter'],
      ['CRN-1HP', '1 HP', '35 m', '1,500 LPH', '7 m', 'Single Phase', '25mm (1")', 'Best Seller'],
      ['CRN-1.5HP', '1.5 HP', '42 m', '2,200 LPH', '7 m', 'Single Phase', '32mm (1.25")', 'Popular'],
      ['CRN-2HP', '2 HP', '48 m', '3,000 LPH', '8 m', 'Single Phase', '32mm (1.25")', 'Home Plus'],
      ['CRN-3HP', '3 HP', '58 m', '4,200 LPH', '8 m', 'Three Phase', '40mm (1.5")', 'Farm Ready'],
      ['CRN-3HP SP', '3 HP (SP)', '55 m', '4,000 LPH', '8 m', 'Single Phase', '40mm (1.5")', 'Single Phase'],
      ['CRN-4HP', '4 HP', '65 m', '5,500 LPH', '8 m', 'Three Phase', '50mm (2")', 'Heavy Duty'],
      ['CRN-5HP', '5 HP', '75 m', '7,000 LPH', '8 m', 'Three Phase', '50mm (2")', 'Pro Max'],
    ],
    y
  );

  // General Specs
  y += 4;
  y = sectionHeader(doc, 'Technical Details', 'General Specifications', y);
  y = specGrid(doc, [
    { label: 'Pump Type', value: 'Self-Priming Monoblock' },
    { label: 'Voltage', value: 'Single: 220V | Three: 415V' },
    { label: 'Frequency', value: '50 Hz' },
    { label: 'Motor Insulation', value: 'Class B / Class F' },
    { label: 'Body Material', value: 'Cast Iron / SS / Aluminium' },
    { label: 'Impeller Type', value: 'Radial Flow' },
    { label: 'Mount Type', value: 'Surface / Horizontal' },
    { label: 'Warranty', value: '1 Year Motor Warranty' },
    { label: 'Certifications', value: 'BIS / ISI Marked' },
    { label: 'Max Liquid Temp', value: 'Up to 60 degree C' },
  ], y);

  // Page 4 — Applications + Contact
  doc.addPage();
  y = 20;
  y = sectionHeader(doc, 'Use Cases', 'Applications', y);
  y = appGrid(doc, [
    { icon: '■', title: 'Home Water Supply', desc: 'Overhead tank filling and daily domestic use.' },
    { icon: '~', title: 'Garden & Lawn', desc: 'Garden watering, drip and sprinkler systems.' },
    { icon: '+', title: 'Small Farm Irrigation', desc: 'Surface water from canals, ponds & open wells.' },
    { icon: '●', title: 'Commercial Buildings', desc: 'Water transfer in shops, offices & hotels.' },
    { icon: '▲', title: 'Poultry & Dairy', desc: 'Clean water supply for livestock facilities.' },
    { icon: '*', title: 'Construction & Cleaning', desc: 'Water for construction & industrial cleaning.' },
  ], y);
  y += 6;
  y = drawContactSection(doc, y);
  footer(doc, doc.internal.pageSize.getHeight() - 12);

  doc.save('Radhe-Industries-Monoset-Pump-Catalog.pdf');
}
