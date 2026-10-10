import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '.');

const htmlPath = path.join(rootDir, 'OPHRON_Corporate_Brochure.html');
const pdfPath = path.join(rootDir, 'OPHRON_Corporate_Brochure.pdf');
const brainDir = 'C:\\Users\\SUDARSANA NARAYANAN\\.gemini\\antigravity-ide\\brain\\1a883b47-64a0-45fe-8415-ef6d62006456';
const brainPdfPath = path.join(brainDir, 'OPHRON_Corporate_Brochure.pdf');

// Function to convert local image to base64 data URI
function getBase64Image(relPath) {
  try {
    const fullPath = path.join(rootDir, relPath);
    if (fs.existsSync(fullPath)) {
      const ext = path.extname(fullPath).toLowerCase().replace('.', '');
      const mime = ext === 'svg' ? 'image/svg+xml' : ext === 'png' ? 'image/png' : ext === 'webp' ? 'image/webp' : 'image/jpeg';
      const b64 = fs.readFileSync(fullPath).toString('base64');
      return `data:${mime};base64,${b64}`;
    }
  } catch (e) {
    console.error('Error reading image for base64:', relPath, e);
  }
  return '';
}

// Load high-resolution assets
const logoGold = getBase64Image('public/images/brand/ophron-gold-emblem-transparent.png');
const isaacPortrait = getBase64Image('src/components/isaac_portrait.png');
const heroMarble = getBase64Image('public/images/hero/hero_marble_polish_desktop.jpg');
const heroVenue = getBase64Image('public/images/hero/hero_event_venue_desktop.jpg');
const heroManpower = getBase64Image('public/images/hero/hero_manpower_suite_desktop.jpg');
const heroTech = getBase64Image('public/images/hero/hero_tech_dashboard_desktop.jpg');

const kitchenImg = getBase64Image('public/images/hygiene_kitchen_compliance_4k.jpg');
const facadeImg = getBase64Image('public/images/facade_glass_tower_4k.jpg');
const carpetImg = getBase64Image('public/images/carpet_deep_clean_4k.jpg');
const cleanroomImg = getBase64Image('public/images/cleanroom_healthcare_4k.jpg');
const warehouseImg = getBase64Image('public/images/industrial_warehouse_4k.jpg');
const yachtImg = getBase64Image('public/images/yacht_marina_detailing_4k.jpg');

const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OPHRON — Luxury Corporate Brochure</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,600&family=JetBrains+Mono:wght@500;600;700&display=swap');

    @page {
      size: A4;
      margin: 0;
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      margin: 0;
      padding: 0;
      background: #EDE5DA;
      color: #032147;
      font-size: 9pt;
      line-height: 1.45;
    }

    .page {
      width: 210mm;
      height: 297mm;
      max-height: 297mm;
      overflow: hidden;
      position: relative;
      page-break-after: always;
      break-after: page;
      padding: 18mm 18mm 16mm 18mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: #EDE5DA;
    }

    .page-dark {
      background: #032147;
      color: #EDE5DA;
    }

    .page-light {
      background: #F8F5F0;
      color: #032147;
    }

    /* Header Nav Strip */
    .top-strip {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(183, 163, 139, 0.4);
      padding-bottom: 3.5mm;
      margin-bottom: 5mm;
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.5pt;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: #B7A38B;
      font-weight: 600;
    }

    .top-strip .brand {
      font-family: 'Cinzel', serif;
      font-size: 9.5pt;
      font-weight: 700;
      letter-spacing: 0.2em;
    }

    /* Footer Strip */
    .bottom-strip {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid rgba(183, 163, 139, 0.3);
      padding-top: 3.5mm;
      font-family: 'JetBrains Mono', monospace;
      font-size: 7pt;
      letter-spacing: 0.12em;
      color: #7A6246;
      font-weight: 600;
    }

    .page-dark .bottom-strip {
      color: rgba(237, 229, 218, 0.6);
      border-top-color: rgba(183, 163, 139, 0.25);
    }

    /* Typography */
    h1 {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 26pt;
      font-weight: 700;
      line-height: 1.1;
      margin: 0 0 3mm 0;
      letter-spacing: -0.02em;
    }

    h2 {
      font-family: 'Montserrat', sans-serif;
      font-size: 14pt;
      font-weight: 700;
      margin: 0 0 2mm 0;
      letter-spacing: -0.01em;
    }

    h3 {
      font-family: 'Montserrat', sans-serif;
      font-size: 10.5pt;
      font-weight: 700;
      margin: 0 0 1.5mm 0;
    }

    .lead {
      font-size: 10.5pt;
      font-weight: 400;
      line-height: 1.5;
      margin-bottom: 4mm;
      opacity: 0.9;
    }

    .gold-italic {
      font-family: 'Playfair Display', serif;
      font-style: italic;
      color: #B7A38B;
      font-weight: 400;
    }

    /* Badges & Pills */
    .pill {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 2.5pt 8pt;
      border-radius: 999px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 7pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      border: 1px solid rgba(183, 163, 139, 0.4);
      background: rgba(245, 239, 230, 0.08);
      color: #EDE5DA;
      margin-bottom: 3mm;
    }

    .pill-gold {
      background: #B7A38B;
      color: #032147;
      border: none;
    }

    .pill-dark {
      background: #032147;
      color: #EDE5DA;
      border: none;
    }

    /* Grid Layouts */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5mm;
    }

    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4mm;
    }

    .grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3.5mm;
    }

    .grid-5 {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 3mm;
    }

    /* Cards */
    .card {
      background: #FFFFFF;
      border: 1px solid rgba(183, 163, 139, 0.35);
      border-radius: 8px;
      padding: 4mm 4.5mm;
      box-shadow: 0 4px 15px rgba(0,0,0,0.03);
    }

    .card-dark {
      background: #021A36;
      border: 1px solid rgba(183, 163, 139, 0.35);
      border-radius: 8px;
      padding: 4.5mm 5mm;
      color: #EDE5DA;
    }

    .card-gold {
      background: linear-gradient(135deg, #F5EFEB 0%, #E3D1BE 50%, #CBB59B 100%);
      border: 1px solid rgba(255,255,255,0.8);
      border-radius: 8px;
      padding: 4.5mm 5mm;
      color: #032147;
    }

    /* Metric Cards */
    .stat-box {
      text-align: center;
      padding: 3.5mm 2mm;
      background: rgba(245, 239, 230, 0.08);
      border: 1px solid rgba(183, 163, 139, 0.3);
      border-radius: 6px;
    }

    .stat-val {
      font-family: 'Playfair Display', serif;
      font-size: 20pt;
      font-weight: 700;
      line-height: 1;
      color: #FFFFFF;
      margin-bottom: 1.5mm;
    }

    .stat-box-light .stat-val {
      color: #032147;
    }

    .stat-lbl {
      font-family: 'JetBrains Mono', monospace;
      font-size: 6.5pt;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #B7A38B;
      font-weight: 600;
    }

    /* Image Containers */
    .photo-card {
      border-radius: 8px;
      overflow: hidden;
      position: relative;
      border: 1px solid rgba(183, 163, 139, 0.3);
      box-shadow: 0 6px 20px rgba(0,0,0,0.1);
    }

    .photo-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .photo-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent 40%, rgba(3,33,71,0.92) 100%);
      padding: 3mm 4mm;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      color: #FFFFFF;
    }

    /* Bullet Tag */
    .check-item {
      display: flex;
      align-items: flex-start;
      gap: 6px;
      font-size: 8pt;
      margin-bottom: 2mm;
    }

    .check-dot {
      color: #B7A38B;
      font-weight: 800;
      font-size: 8pt;
      line-height: 1;
    }

    /* Quote Cards */
    .quote-box {
      border-left: 3px solid #B7A38B;
      padding-left: 4mm;
      margin: 3mm 0;
      font-style: italic;
      font-size: 8.5pt;
      line-height: 1.45;
    }
  </style>
</head>
<body>

  <!-- ===================================================================== -->
  <!-- PAGE 1: COVER PAGE (CINEMATIC LUXURY)                                 -->
  <!-- ===================================================================== -->
  <div class="page page-dark" style="padding:0; position:relative; background:#032147;">
    <!-- Background Image with Gradient Scrim -->
    ${heroMarble ? `
    <div style="position:absolute; inset:0; z-index:1;">
      <img src="${heroMarble}" style="width:100%; height:100%; object-fit:cover; opacity:0.35;" alt="Hero Backdrop">
      <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(3,33,71,0.95) 0%, rgba(3,33,71,0.70) 40%, rgba(3,33,71,0.96) 100%);"></div>
    </div>
    ` : ''}

    <div style="position:relative; z-index:10; padding:22mm 18mm 18mm 18mm; height:100%; display:flex; flex-direction:column; justify-content:space-between;">
      
      <!-- Top Brand -->
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(183,163,139,0.3); padding-bottom:4mm; margin-bottom:12mm;">
          <div style="display:flex; align-items:center; gap:10px;">
            ${logoGold ? `<img src="${logoGold}" style="height:32px; width:auto;" alt="OPHRON">` : ''}
            <span style="font-family:'Cinzel', serif; font-size:12pt; font-weight:700; letter-spacing:0.25em; color:#EDE5DA;">OPHRON</span>
          </div>
          <span style="font-family:'JetBrains Mono', monospace; font-size:7.5pt; letter-spacing:0.18em; color:#B7A38B;">SINGAPORE · GLOBAL</span>
        </div>

        <div class="pill">Hospitality Operational Infrastructure Platform</div>
        
        <div style="font-family:'Playfair Display', serif; font-size:38pt; font-weight:700; line-height:1.02; color:#FFFFFF; margin:4mm 0 6mm 0; letter-spacing:-0.02em;">
          One partner.<br>
          One ecosystem.<br>
          <span class="gold-italic">Better operations.</span>
        </div>

        <p style="font-size:11.5pt; font-weight:300; line-height:1.55; color:rgba(237,229,218,0.9); max-width:85%; margin-bottom:8mm;">
          Unifying People, Hygiene, Facility Services, Technology, and Commercial Intelligence into a single strategic operating platform for Singapore's leading hotels, restaurants, and hospitality groups.
        </p>
      </div>

      <!-- Bottom Stats Grid -->
      <div>
        <div class="grid-4" style="margin-bottom:6mm;">
          <div class="stat-box">
            <div class="stat-val">20+</div>
            <div class="stat-lbl">Years Field Expertise</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">140+</div>
            <div class="stat-lbl">Active SG Contracts</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">bizSAFE 3</div>
            <div class="stat-lbl">WSH Council Certified</div>
          </div>
          <div class="stat-box">
            <div class="stat-val">NEA</div>
            <div class="stat-lbl">Licensed Operator</div>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid rgba(183,163,139,0.3); padding-top:4mm; font-family:'JetBrains Mono', monospace; font-size:7.5pt; color:#B7A38B;">
          <span>★ PAN PACIFIC · YOTEL · ATLAS</span>
          <span>HOTLINE: +65 9295 1155</span>
          <span>OPHRONSYSTEMS.COM</span>
        </div>
      </div>

    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 2: EXECUTIVE OVERVIEW & PROBLEM VS SOLUTION                      -->
  <!-- ===================================================================== -->
  <div class="page page-light">
    <div>
      <div class="top-strip">
        <span class="brand">OPHRON</span>
        <span>02 · Strategic Executive Overview</span>
      </div>

      <div class="pill pill-dark">The Fragmented Vendor Problem</div>
      <h1>Eliminating Operational <span class="gold-italic">Fragmentation.</span></h1>
      <p class="lead">
        Singapore hospitality venues lose up to 28% in margin efficiency by coordinating 5+ disconnected contractors. OPHRON replaces vendor friction with a single accountable operating partner.
      </p>

      <!-- 2 Column Comparison -->
      <div class="grid-2" style="margin-top:4mm;">
        
        <!-- Problem Card -->
        <div class="card" style="background:#FFF9F9; border-color:rgba(192,57,43,0.3);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2.5mm;">
            <span style="font-family:'JetBrains Mono', monospace; font-size:7.5pt; font-weight:700; color:#C0392B; text-transform:uppercase;">Traditional Vendors</span>
            <span style="color:#C0392B; font-weight:800;">✕</span>
          </div>
          <h3 style="color:#C0392B; margin-bottom:2mm;">5+ Disconnected Silos</h3>
          <div class="check-item"><span style="color:#C0392B;">✕</span><span><strong>Blame Shifting:</strong> Cleaning and staffing agencies blame each other during banquet delays.</span></div>
          <div class="check-item"><span style="color:#C0392B;">✕</span><span><strong>Labor Volatility:</strong> Untrained transient staff cause hygiene audit failures.</span></div>
          <div class="check-item"><span style="color:#C0392B;">✕</span><span><strong>Zero Transparency:</strong> Paper logs and unverified attendance records.</span></div>
          <div class="check-item"><span style="color:#C0392B;">✕</span><span><strong>Contract Inefficiency:</strong> Multiple invoices, markups, and procurement overheads.</span></div>
        </div>

        <!-- Solution Card -->
        <div class="card-dark">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2.5mm;">
            <span style="font-family:'JetBrains Mono', monospace; font-size:7.5pt; font-weight:700; color:#B7A38B; text-transform:uppercase;">The OPHRON Model</span>
            <span style="color:#2ECC71; font-weight:800;">✓</span>
          </div>
          <h3 style="color:#FFFFFF; margin-bottom:2mm;">One Unified Ecosystem</h3>
          <div class="check-item"><span class="check-dot">✓</span><span><strong>Single Accountable Partner:</strong> 1 Contract, 1 Point of Contact, 1 Consolidated SLA.</span></div>
          <div class="check-item"><span class="check-dot">✓</span><span><strong>WSQ Certified Workforce:</strong> Pre-trained, briefed crews with named site supervisors.</span></div>
          <div class="check-item"><span class="check-dot">✓</span><span><strong>Live Digital Dashboards:</strong> Real-time shift tracking &amp; automated SFA compliance.</span></div>
          <div class="check-item"><span class="check-dot">✓</span><span><strong>Measurable Savings:</strong> Streamlined commercial intelligence &amp; labor yield optimization.</span></div>
        </div>

      </div>

      <!-- Feature Strip Image -->
      <div style="margin-top:5mm;" class="grid-2">
        <div class="photo-card" style="height:54mm;">
          ${heroManpower ? `<img src="${heroManpower}" alt="OPHRON Workforce">` : ''}
          <div class="photo-overlay">
            <span style="font-family:'JetBrains Mono', monospace; font-size:7pt; color:#B7A38B; font-weight:700;">HOSPITALITY INFRASTRUCTURE</span>
            <span style="font-weight:700; font-size:9pt;">WSQ-Certified Operational Teams</span>
          </div>
        </div>
        <div class="photo-card" style="height:54mm;">
          ${heroVenue ? `<img src="${heroVenue}" alt="Venue Turnaround">` : ''}
          <div class="photo-overlay">
            <span style="font-family:'JetBrains Mono', monospace; font-size:7pt; color:#B7A38B; font-weight:700;">RAPID EVENT RESETS</span>
            <span style="font-weight:700; font-size:9pt;">60-Minute Ballroom Turnaround</span>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-strip">
      <span>OPHRON SYSTEMS · CORPORATE CAPABILITY PROFILE</span>
      <span>PAGE 02</span>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 3: THE 5 CORE BUSINESS PILLARS                                   -->
  <!-- ===================================================================== -->
  <div class="page page-dark">
    <div>
      <div class="top-strip">
        <span class="brand">OPHRON</span>
        <span>03 · The OphronOS Ecosystem</span>
      </div>

      <div class="pill">Integrated Infrastructure</div>
      <h1 style="color:#FFFFFF;">The 5 Strategic <span class="gold-italic">Business Pillars.</span></h1>
      <p class="lead" style="color:rgba(237,229,218,0.85);">
        A cohesive operational framework engineered specifically for Singapore’s fast-paced hospitality demands.
      </p>

      <!-- 5 Pillars Matrix -->
      <div style="display:flex; flex-direction:column; gap:3mm; margin-top:3mm;">
        
        <!-- Pillar 1 -->
        <div class="card-dark" style="border-left:3px solid #B7A38B; padding:3.5mm 5mm;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <h3 style="color:#FFFFFF; margin:0;">01. OPHRON PEOPLE — Workforce Infrastructure</h3>
            <span class="pill pill-gold" style="margin:0; font-size:6.5pt;">6 Services</span>
          </div>
          <p style="font-size:8pt; margin:1.5mm 0; color:rgba(237,229,218,0.85);">
            WSQ-certified banquet crews, stewarding personnel, kitchen utility, and dedicated hotel housekeeping on demand.
          </p>
        </div>

        <!-- Pillar 2 -->
        <div class="card-dark" style="border-left:3px solid #B7A38B; padding:3.5mm 5mm; background:rgba(183,163,139,0.12); border-color:#B7A38B;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <h3 style="color:#FFFFFF; margin:0;">02. OPHRON HYGIENE — Sanitation &amp; Stone Care</h3>
            <span class="pill pill-gold" style="margin:0; font-size:6.5pt;">★ Core Focus · 7 Services</span>
          </div>
          <p style="font-size:8pt; margin:1.5mm 0; color:rgba(237,229,218,0.9);">
            Commercial kitchen deep degreasing, SCDF exhaust duct cleaning, 98+ GU diamond marble polishing, and IAQ UV-C air sanitation.
          </p>
        </div>

        <!-- Pillar 3 -->
        <div class="card-dark" style="border-left:3px solid #B7A38B; padding:3.5mm 5mm;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <h3 style="color:#FFFFFF; margin:0;">03. OPHRON FACILITIES — Façade &amp; Property Maintenance</h3>
            <span class="pill pill-gold" style="margin:0; font-size:6.5pt;">7 Services</span>
          </div>
          <p style="font-size:8pt; margin:1.5mm 0; color:rgba(237,229,218,0.85);">
            IRATA rope access high-rise façade cleaning, 60-minute luxury venue resets, IFM Lite, and post-renovation handovers.
          </p>
        </div>

        <!-- Pillar 4 & 5 Grid -->
        <div class="grid-2" style="gap:3mm;">
          <div class="card-dark" style="border-left:3px solid #B7A38B; padding:3.5mm 4.5mm;">
            <h3 style="color:#FFFFFF; margin-bottom:1mm; font-size:9.5pt;">04. OPHRON TECHNOLOGY</h3>
            <p style="font-size:7.5pt; margin:0; color:rgba(237,229,218,0.8);">
              Real-time shift management dashboards, digital biometric clocks, IoT IAQ monitors, and automated SFA audit records.
            </p>
          </div>
          <div class="card-dark" style="border-left:3px solid #B7A38B; padding:3.5mm 4.5mm;">
            <h3 style="color:#FFFFFF; margin-bottom:1mm; font-size:9.5pt;">05. COMMERCIAL INTELLIGENCE</h3>
            <p style="font-size:7.5pt; margin:0; color:rgba(237,229,218,0.8);">
              Labor yield optimization, supplier waste auditing, operational SLA benchmarking, and cost reduction modeling.
            </p>
          </div>
        </div>

      </div>
    </div>

    <div class="bottom-strip">
      <span>OPHRON SYSTEMS · CORPORATE CAPABILITY PROFILE</span>
      <span>PAGE 03</span>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 4: SPECIALIZED SERVICES SHOWCASE (VISUAL GALLERY)                -->
  <!-- ===================================================================== -->
  <div class="page page-light">
    <div>
      <div class="top-strip">
        <span class="brand">OPHRON</span>
        <span>04 · Specialized Services Portfolio</span>
      </div>

      <div class="pill pill-dark">High-Precision Field Delivery</div>
      <h1>Specialized <span class="gold-italic">Operational Services.</span></h1>
      <p class="lead">
        14 specialized operational service lines executed with industrial machinery, WSQ protocols, and supervisor-signed handovers.
      </p>

      <!-- 6 Service Cards Visual Grid -->
      <div class="grid-3" style="gap:3.5mm; margin-top:3mm;">
        
        <!-- Service 1 -->
        <div class="card" style="padding:0; overflow:hidden;">
          <div style="height:28mm; overflow:hidden;">
            ${heroMarble ? `<img src="${heroMarble}" style="width:100%; height:100%; object-fit:cover;" alt="Marble">` : ''}
          </div>
          <div style="padding:3mm 3.5mm;">
            <span style="font-family:'JetBrains Mono', monospace; font-size:6.5pt; color:#B7A38B; font-weight:700;">STONE CARE</span>
            <h3 style="font-size:8.5pt; margin:1mm 0;">Diamond Marble Polishing</h3>
            <p style="font-size:7.5pt; margin:0; color:#555;">Planetary grinding to 3000 grit for 98+ GU mirror-finish reflection.</p>
          </div>
        </div>

        <!-- Service 2 -->
        <div class="card" style="padding:0; overflow:hidden;">
          <div style="height:28mm; overflow:hidden;">
            ${kitchenImg ? `<img src="${kitchenImg}" style="width:100%; height:100%; object-fit:cover;" alt="Kitchen">` : ''}
          </div>
          <div style="padding:3mm 3.5mm;">
            <span style="font-family:'JetBrains Mono', monospace; font-size:6.5pt; color:#B7A38B; font-weight:700;">HYGIENE COMPLIANCE</span>
            <h3 style="font-size:8.5pt; margin:1mm 0;">Kitchen Exhaust Degreasing</h3>
            <p style="font-size:7.5pt; margin:0; color:#555;">Heated caustic foam decoking with certified SCDF fire compliance logs.</p>
          </div>
        </div>

        <!-- Service 3 -->
        <div class="card" style="padding:0; overflow:hidden;">
          <div style="height:28mm; overflow:hidden;">
            ${facadeImg ? `<img src="${facadeImg}" style="width:100%; height:100%; object-fit:cover;" alt="Façade">` : ''}
          </div>
          <div style="padding:3mm 3.5mm;">
            <span style="font-family:'JetBrains Mono', monospace; font-size:6.5pt; color:#B7A38B; font-weight:700;">ROPE ACCESS</span>
            <h3 style="font-size:8.5pt; margin:1mm 0;">High-Rise Façade Abseiling</h3>
            <p style="font-size:7.5pt; margin:0; color:#555;">IRATA technicians &amp; deionized pure water glass filtration systems.</p>
          </div>
        </div>

        <!-- Service 4 -->
        <div class="card" style="padding:0; overflow:hidden;">
          <div style="height:28mm; overflow:hidden;">
            ${heroVenue ? `<img src="${heroVenue}" style="width:100%; height:100%; object-fit:cover;" alt="Events">` : ''}
          </div>
          <div style="padding:3mm 3.5mm;">
            <span style="font-family:'JetBrains Mono', monospace; font-size:6.5pt; color:#B7A38B; font-weight:700;">FACILITY RESETS</span>
            <h3 style="font-size:8.5pt; margin:1mm 0;">Luxury Venue Turnaround</h3>
            <p style="font-size:7.5pt; margin:0; color:#555;">Rapid 60-min ballroom resets, crystal glassware, and post-event extraction.</p>
          </div>
        </div>

        <!-- Service 5 -->
        <div class="card" style="padding:0; overflow:hidden;">
          <div style="height:28mm; overflow:hidden;">
            ${carpetImg ? `<img src="${carpetImg}" style="width:100%; height:100%; object-fit:cover;" alt="Carpet">` : ''}
          </div>
          <div style="padding:3mm 3.5mm;">
            <span style="font-family:'JetBrains Mono', monospace; font-size:6.5pt; color:#B7A38B; font-weight:700;">DEEP RESTORATION</span>
            <h3 style="font-size:8.5pt; margin:1mm 0;">Carpet &amp; Upholstery Steam</h3>
            <p style="font-size:7.5pt; margin:0; color:#555;">85°C dual-motor hot extraction with 2-hour rapid dry time guarantee.</p>
          </div>
        </div>

        <!-- Service 6 -->
        <div class="card" style="padding:0; overflow:hidden;">
          <div style="height:28mm; overflow:hidden;">
            ${cleanroomImg ? `<img src="${cleanroomImg}" style="width:100%; height:100%; object-fit:cover;" alt="Medical">` : ''}
          </div>
          <div style="padding:3mm 3.5mm;">
            <span style="font-family:'JetBrains Mono', monospace; font-size:6.5pt; color:#B7A38B; font-weight:700;">STERILITY CONTROL</span>
            <h3 style="font-size:8.5pt; margin:1mm 0;">Medical &amp; Cleanroom Care</h3>
            <p style="font-size:7.5pt; margin:0; color:#555;">ISO Class 5-8 bioburden reduction with certified ULV cold fogging.</p>
          </div>
        </div>

      </div>
    </div>

    <div class="bottom-strip">
      <span>OPHRON SYSTEMS · CORPORATE CAPABILITY PROFILE</span>
      <span>PAGE 04</span>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 5: INDUSTRIES SERVED & ENTERPRISE STANDARDS                      -->
  <!-- ===================================================================== -->
  <div class="page page-dark">
    <div>
      <div class="top-strip">
        <span class="brand">OPHRON</span>
        <span>05 · Sector Blueprints &amp; Standards</span>
      </div>

      <div class="pill">Enterprise Credibility</div>
      <h1 style="color:#FFFFFF;">Industries Served &amp; <span class="gold-italic">Enterprise Standards.</span></h1>
      <p class="lead" style="color:rgba(237,229,218,0.85);">
        Custom operational blueprints tailored to the specific regulatory and guest expectations of Singapore’s premium sectors.
      </p>

      <!-- 4 Sector Cards -->
      <div class="grid-2" style="gap:3.5mm; margin-top:2mm;">
        
        <div class="card-dark">
          <div class="pill pill-gold" style="margin-bottom:2mm; font-size:6.5pt;">Hotels &amp; Resorts</div>
          <h3 style="color:#FFFFFF; font-size:9.5pt; margin-bottom:1.5mm;">5-Star Hotels &amp; Residences</h3>
          <p style="font-size:7.5pt; margin:0; color:rgba(237,229,218,0.85);">
            Housekeeping room attendants, public area marble restoration, banquet stewarding surge crews, and IRATA façade cleaning.
          </p>
        </div>

        <div class="card-dark">
          <div class="pill pill-gold" style="margin-bottom:2mm; font-size:6.5pt;">F&amp;B &amp; Dining</div>
          <h3 style="color:#FFFFFF; font-size:9.5pt; margin-bottom:1.5mm;">Fine Dining &amp; Central Kitchens</h3>
          <p style="font-size:7.5pt; margin:0; color:rgba(237,229,218,0.85);">
            Nightly line degreasing, grease trap pumping, dishwashing crews, and 100% SFA Grade A inspection compliance.
          </p>
        </div>

        <div class="card-dark">
          <div class="pill pill-gold" style="margin-bottom:2mm; font-size:6.5pt;">Event Venues</div>
          <h3 style="color:#FFFFFF; font-size:9.5pt; margin-bottom:1.5mm;">Grand Ballrooms &amp; Nightlife</h3>
          <p style="font-size:7.5pt; margin:0; color:rgba(237,229,218,0.85);">
            60-minute rapid banquet hall resets, VIP crystal glassware detailing, restroom attendants, and post-event extraction.
          </p>
        </div>

        <div class="card-dark">
          <div class="pill pill-gold" style="margin-bottom:2mm; font-size:6.5pt;">Commercial &amp; Medical</div>
          <h3 style="color:#FFFFFF; font-size:9.5pt; margin-bottom:1.5mm;">Grade A Towers &amp; Cleanrooms</h3>
          <p style="font-size:7.5pt; margin:0; color:rgba(237,229,218,0.85);">
            Executive day porters, showroom shine, ISO Class 5-8 medical sterility, and autonomous robotic floor scrubbing.
          </p>
        </div>

      </div>

      <!-- Certifications Banner -->
      <div class="card-gold" style="margin-top:4mm;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div>
            <h3 style="margin:0 0 1mm 0; color:#032147; font-size:10pt;">Official Regulatory Accreditations</h3>
            <p style="font-size:7.5pt; margin:0; color:#333;">
              NEA Licensed Cleaning Operator · bizSAFE Level 3 Certified (WSH Council) · IRATA Certified Rope Access.
            </p>
          </div>
          <div class="pill pill-dark" style="margin:0; font-size:7pt;">100% SLA Guarantee</div>
        </div>
      </div>
    </div>

    <div class="bottom-strip">
      <span>OPHRON SYSTEMS · CORPORATE CAPABILITY PROFILE</span>
      <span>PAGE 05</span>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 6: PROPRIETARY TECHNOLOGY & DIGITAL INTELLIGENCE                 -->
  <!-- ===================================================================== -->
  <div class="page page-light">
    <div>
      <div class="top-strip">
        <span class="brand">OPHRON</span>
        <span>06 · Technology &amp; AI Intelligence</span>
      </div>

      <div class="pill pill-dark">Proprietary Software</div>
      <h1>Smart Operations &amp; <span class="gold-italic">AI Intelligence.</span></h1>
      <p class="lead">
        OPHRON equips hospitality executives with live digital telemetry across shifts, attendance, air quality, and compliance audits.
      </p>

      <!-- Dashboard Mockup Image -->
      <div class="photo-card" style="height:58mm; margin-bottom:4mm;">
        ${heroTech ? `<img src="${heroTech}" alt="OphronOS Dashboard">` : ''}
        <div class="photo-overlay">
          <span style="font-family:'JetBrains Mono', monospace; font-size:7.5pt; color:#B7A38B; font-weight:700;">OPHRONOS PLATFORM</span>
          <span style="font-weight:700; font-size:11pt;">Real-Time Operations Command Dashboard</span>
        </div>
      </div>

      <!-- 4 Tech Feature Boxes -->
      <div class="grid-2" style="gap:3.5mm;">
        <div class="card">
          <h3 style="font-size:9pt; margin-bottom:1mm;">Live Shift Roster Engine</h3>
          <p style="font-size:7.5pt; margin:0; color:#444;">
            Biometric attendance clock-in, automated shift coverage alerts, and dynamic crew re-balancing during banquet spikes.
          </p>
        </div>
        <div class="card">
          <h3 style="font-size:9pt; margin-bottom:1mm;">Digital SFA Audit Vault</h3>
          <p style="font-size:7.5pt; margin:0; color:#444;">
            Paperless compliance logs tracking grease trap pumping, exhaust duct certificates, and chemical dilution lot numbers.
          </p>
        </div>
        <div class="card">
          <h3 style="font-size:9pt; margin-bottom:1mm;">IoT IAQ Air Quality Sensors</h3>
          <p style="font-size:7.5pt; margin:0; color:#444;">
            Continuous environmental monitoring (PM2.5, CO2, Humidity) ensuring optimal indoor air quality in guest zones.
          </p>
        </div>
        <div class="card">
          <h3 style="font-size:9pt; margin-bottom:1mm;">Commercial Margin Index</h3>
          <p style="font-size:7.5pt; margin:0; color:#444;">
            Automated monthly analytics benchmarking labor yield productivity, supplier savings, and cost of ownership.
          </p>
        </div>
      </div>
    </div>

    <div class="bottom-strip">
      <span>OPHRON SYSTEMS · CORPORATE CAPABILITY PROFILE</span>
      <span>PAGE 06</span>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 7: PROVEN IMPACT, LEADERSHIP & TRUST PROOF                       -->
  <!-- ===================================================================== -->
  <div class="page page-dark">
    <div>
      <div class="top-strip">
        <span class="brand">OPHRON</span>
        <span>07 · Proven Impact &amp; Leadership</span>
      </div>

      <div class="pill">20+ Years Operational Discipline</div>
      <h1 style="color:#FFFFFF;">Trusted by Singapore’s <span class="gold-italic">Leading Venues.</span></h1>
      <p class="lead" style="color:rgba(237,229,218,0.85);">
        Hear from the executives and hospitality directors who rely on OPHRON’s integrated infrastructure daily.
      </p>

      <!-- 3 Testimonial Cards -->
      <div style="display:flex; flex-direction:column; gap:2.5mm; margin-top:2mm;">
        
        <div class="card-dark" style="padding:3mm 4.5mm;">
          <div style="color:#B7A38B; font-size:9pt; margin-bottom:1mm;">★★★★★ <strong style="color:#FFFFFF; font-size:8pt; margin-left:4px;">PAN PACIFIC HOTELS GROUP</strong></div>
          <p style="font-size:7.5pt; margin:0; font-style:italic; color:rgba(237,229,218,0.9);">
            "Consolidating stewarding and floor maintenance under OPHRON reduced our ballroom turnover time by over 40%. Our hygiene audit scores remain spotless."
          </p>
          <div style="font-size:6.5pt; font-family:'JetBrains Mono', monospace; color:#B7A38B; margin-top:1.5mm;">— Director of Hospitality Operations</div>
        </div>

        <div class="card-dark" style="padding:3mm 4.5mm;">
          <div style="color:#B7A38B; font-size:9pt; margin-bottom:1mm;">★★★★★ <strong style="color:#FFFFFF; font-size:8pt; margin-left:4px;">YOTEL SINGAPORE</strong></div>
          <p style="font-size:7.5pt; margin:0; font-style:italic; color:rgba(237,229,218,0.9);">
            "OPHRON’s trained housekeeping crews and dedicated supervisors have maintained exemplary standards. Real-time digital logs give us total transparency."
          </p>
          <div style="font-size:6.5pt; font-family:'JetBrains Mono', monospace; color:#B7A38B; margin-top:1.5mm;">— Executive Housekeeper</div>
        </div>

        <div class="card-dark" style="padding:3mm 4.5mm;">
          <div style="color:#B7A38B; font-size:9pt; margin-bottom:1mm;">★★★★★ <strong style="color:#FFFFFF; font-size:8pt; margin-left:4px;">ATLAS BAR SINGAPORE</strong></div>
          <p style="font-size:7.5pt; margin:0; font-style:italic; color:rgba(237,229,218,0.9);">
            "Precision, speed, and discretion. OPHRON’s specialized marble care keeps our historic interior pristine without ever interrupting guest service."
          </p>
          <div style="font-size:6.5pt; font-family:'JetBrains Mono', monospace; color:#B7A38B; margin-top:1.5mm;">— General Manager</div>
        </div>

      </div>

      <!-- Founder Card -->
      <div class="card-dark" style="margin-top:3.5mm; display:flex; gap:12px; align-items:center; background:rgba(245,239,230,0.06); border-color:#B7A38B;">
        ${isaacPortrait ? `<img src="${isaacPortrait}" style="width:65px; height:75px; object-fit:cover; border-radius:6px; border:1px solid #B7A38B; shrink-0;" alt="Isaac Vivian">` : ''}
        <div>
          <span style="font-family:'JetBrains Mono', monospace; font-size:6.5pt; color:#B7A38B; text-transform:uppercase; font-weight:700;">Executive Leadership</span>
          <h3 style="color:#FFFFFF; margin:0.5mm 0; font-size:9.5pt;">Isaac Vivian · Founder &amp; CEO</h3>
          <p style="font-size:7.2pt; margin:0; line-height:1.4; color:rgba(237,229,218,0.85);">
            20+ years commanding large-scale hospitality operations in Singapore. Pioneer of supervisor-signed accountability and unified operations infrastructure.
          </p>
        </div>
      </div>
    </div>

    <div class="bottom-strip">
      <span>OPHRON SYSTEMS · CORPORATE CAPABILITY PROFILE</span>
      <span>PAGE 07</span>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 8: CONTACT & ENGAGEMENT BLUEPRINT (CLOSING PAGE)                 -->
  <!-- ===================================================================== -->
  <div class="page page-dark" style="position:relative; background:#021A36;">
    <div style="height:100%; display:flex; flex-direction:column; justify-content:space-between;">
      
      <div>
        <div class="top-strip">
          <span class="brand">OPHRON</span>
          <span>08 · Engagement &amp; Contact</span>
        </div>

        <div class="pill">Start Your Operational Review</div>
        <div style="font-family:'Playfair Display', serif; font-size:30pt; font-weight:700; line-height:1.08; color:#FFFFFF; margin:3mm 0 4mm 0;">
          Let’s elevate your venue’s<br>
          <span class="gold-italic">operational performance.</span>
        </div>

        <p style="font-size:10pt; font-weight:300; line-height:1.55; color:rgba(237,229,218,0.9); max-width:85%; margin-bottom:6mm;">
          Schedule an on-site operational assessment today. Our engineers will audit your current service lines, identify margin leaks, and present a tailored single-contract blueprint.
        </p>

        <!-- 4-Stage Roadmap Summary -->
        <div class="card-dark" style="background:rgba(245,239,230,0.05); margin-bottom:5mm; border-color:rgba(183,163,139,0.3);">
          <div style="font-family:'JetBrains Mono', monospace; font-size:7pt; color:#B7A38B; font-weight:700; text-transform:uppercase; margin-bottom:2mm;">
            4-Stage Rapid Onboarding Process
          </div>
          <div class="grid-4" style="gap:2.5mm;">
            <div style="font-size:7.5pt;"><strong>01. Audit</strong><br><span style="color:#aaa;">Site walkthrough &amp; contract gap analysis.</span></div>
            <div style="font-size:7.5pt;"><strong>02. Blueprint</strong><br><span style="color:#aaa;">Custom SLA &amp; unified roster design.</span></div>
            <div style="font-size:7.5pt;"><strong>03. Deploy</strong><br><span style="color:#aaa;">Trained crew &amp; supervisor handover.</span></div>
            <div style="font-size:7.5pt;"><strong>04. Monitor</strong><br><span style="color:#aaa;">Live dashboards &amp; monthly reviews.</span></div>
          </div>
        </div>

        <!-- Contact Channels Grid -->
        <div class="grid-2" style="gap:4mm;">
          
          <div class="card-dark" style="border-left:3px solid #B7A38B;">
            <span style="font-family:'JetBrains Mono', monospace; font-size:7pt; color:#B7A38B; text-transform:uppercase; font-weight:700;">Direct 24/7 Hotline</span>
            <div style="font-size:13pt; font-weight:700; color:#FFFFFF; margin:1mm 0;">+65 9295 1155</div>
            <span style="font-size:7.5pt; color:rgba(237,229,218,0.7);">WhatsApp: +65 9295 1155 · +65 9646 6300</span>
          </div>

          <div class="card-dark" style="border-left:3px solid #B7A38B;">
            <span style="font-family:'JetBrains Mono', monospace; font-size:7pt; color:#B7A38B; text-transform:uppercase; font-weight:700;">Corporate Headquarters</span>
            <div style="font-size:9.5pt; font-weight:600; color:#FFFFFF; margin:1mm 0;">26 Sin Ming Lane #05-124</div>
            <span style="font-size:7.5pt; color:rgba(237,229,218,0.7);">Midview City, Singapore 573971</span>
          </div>

        </div>
      </div>

      <!-- Bottom Signoff -->
      <div>
        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid rgba(183,163,139,0.3); padding-top:4mm; font-family:'JetBrains Mono', monospace; font-size:7.5pt; color:#B7A38B;">
          <span>EMAIL: CONTACT@OPHRONSYSTEMS.COM</span>
          <span>WEB: OPHRONSYSTEMS.COM · OPHRON.SG</span>
          <span>© 2026 OPHRON SYSTEMS</span>
        </div>
      </div>

    </div>
  </div>

</body>
</html>`;

fs.writeFileSync(htmlPath, fullHtml, 'utf8');
console.log('Brochure HTML generated at:', htmlPath);

// Run Edge headless to print to PDF
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const cmd = `"${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${pdfPath}" --print-to-pdf-no-header "${htmlPath}"`;

try {
  console.log('Generating Corporate Brochure PDF via headless browser...');
  execSync(cmd, { stdio: 'inherit' });
  console.log('SUCCESS: Generated Brochure PDF at:', pdfPath);

  if (fs.existsSync(pdfPath)) {
    fs.copyFileSync(pdfPath, brainPdfPath);
    console.log('SUCCESS: Copied Brochure PDF to brain artifacts:', brainPdfPath);
  }
} catch (err) {
  console.error('Error generating Brochure PDF:', err);
}
