import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '.');

const htmlPath = path.join(rootDir, 'OPHRON_Corporate_Profile_Clean.html');
const pdfPath = path.join(rootDir, 'OPHRON_Company_Profile.pdf');
const brochurePdfPath = path.join(rootDir, 'OPHRON_Corporate_Brochure.pdf');
const legacyPdfPath = path.join(rootDir, 'Medscale-Systems-Website-Copy.pdf');
const brainDir = 'C:\\\\Users\\\\SUDARSANA NARAYANAN\\\\.gemini\\\\antigravity-ide\\\\brain\\\\1a883b47-64a0-45fe-8415-ef6d62006456';

// Function to convert local image to base64
function getBase64Image(relPath) {
  try {
    const fullPath = path.join(rootDir, relPath);
    if (fs.existsSync(fullPath)) {
      const ext = path.extname(fullPath).toLowerCase().replace('.', '');
      const mime = ext === 'svg' ? 'image/svg+xml' : ext === 'png' ? 'image/png' : 'image/jpeg';
      const b64 = fs.readFileSync(fullPath).toString('base64');
      return `data:${mime};base64,${b64}`;
    }
  } catch (e) {
    console.error('Error reading image for base64:', relPath, e);
  }
  return '';
}

const logoGold = getBase64Image('public/images/brand/ophron-gold-emblem-transparent.png');
const logoNavy = getBase64Image('public/images/brand/ophron-navy-emblem-transparent.png');

const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OPHRON — Corporate Profile &amp; Capability Statement</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,600&family=JetBrains+Mono:wght@500;600;700&display=swap');

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
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      margin: 0;
      padding: 0;
      background: #EDE5DA;
      color: #032147;
      font-size: 8.8pt;
      line-height: 1.45;
    }

    /* Page Container */
    .page {
      width: 210mm;
      height: 297mm;
      max-height: 297mm;
      overflow: hidden;
      position: relative;
      page-break-after: always;
      break-after: page;
      padding: 18mm 20mm 16mm 20mm;
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
      background: #FAF7F2;
      color: #032147;
    }

    /* Header Nav Strip */
    .top-strip {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(183, 163, 139, 0.45);
      padding-bottom: 3.5mm;
      margin-bottom: 5mm;
      font-family: 'JetBrains Mono', monospace;
      font-size: 7pt;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #B7A38B;
      font-weight: 700;
    }

    .top-strip .brand-box {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .top-strip .brand-box img {
      height: 18px;
      width: auto;
    }

    .top-strip .brand-text {
      font-family: 'Cinzel', serif;
      font-size: 9.5pt;
      font-weight: 700;
      letter-spacing: 0.22em;
      color: inherit;
    }

    /* Footer Strip */
    .bottom-strip {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid rgba(183, 163, 139, 0.35);
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
      font-size: 24pt;
      font-weight: 700;
      line-height: 1.1;
      margin: 0 0 2.5mm 0;
      letter-spacing: -0.02em;
    }

    h2 {
      font-family: 'Montserrat', sans-serif;
      font-size: 13pt;
      font-weight: 700;
      margin: 0 0 2mm 0;
      letter-spacing: -0.01em;
    }

    h3 {
      font-family: 'Montserrat', sans-serif;
      font-size: 10pt;
      font-weight: 700;
      margin: 0 0 1.5mm 0;
      letter-spacing: -0.01em;
    }

    .lead {
      font-size: 9.5pt;
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
      gap: 4px;
      padding: 2.5pt 7pt;
      border-radius: 999px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 6.8pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      border: 1px solid rgba(183, 163, 139, 0.45);
      background: rgba(245, 239, 230, 0.08);
      color: #EDE5DA;
      margin-bottom: 2.5mm;
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

    /* Grids */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4mm;
    }

    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 3.5mm;
    }

    .grid-4 {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3mm;
    }

    /* Cards */
    .card {
      background: #FFFFFF;
      border: 1px solid rgba(183, 163, 139, 0.35);
      border-radius: 6px;
      padding: 3.5mm 4mm;
      box-shadow: 0 2px 8px rgba(3,33,71,0.03);
    }

    .card-dark {
      background: #021A36;
      border: 1px solid rgba(183, 163, 139, 0.35);
      border-radius: 6px;
      padding: 3.5mm 4mm;
      color: #EDE5DA;
    }

    .card-gold {
      background: linear-gradient(135deg, #F5EFEB 0%, #E3D1BE 45%, #CBB59B 100%);
      border: 1px solid rgba(255,255,255,0.8);
      border-radius: 6px;
      padding: 3.5mm 4mm;
      color: #032147;
    }

    /* Stat Box */
    .stat-box {
      text-align: center;
      padding: 3mm 2mm;
      background: rgba(245, 239, 230, 0.06);
      border: 1px solid rgba(183, 163, 139, 0.35);
      border-radius: 6px;
    }

    .stat-val {
      font-family: 'Playfair Display', serif;
      font-size: 19pt;
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
      font-weight: 700;
    }

    /* Bullet List */
    .check-item {
      display: flex;
      align-items: flex-start;
      gap: 5px;
      font-size: 8pt;
      margin-bottom: 1.5mm;
      line-height: 1.35;
    }

    .check-dot {
      color: #B7A38B;
      font-weight: 800;
      font-size: 8pt;
      line-height: 1;
      shrink: 0;
    }

    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 8pt;
      margin: 2mm 0;
    }

    thead th {
      background: #032147;
      color: #EDE5DA;
      text-align: left;
      padding: 4pt 6pt;
      font-family: 'JetBrains Mono', monospace;
      font-size: 7pt;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      border-bottom: 1.5pt solid #B7A38B;
    }

    tbody td {
      padding: 4pt 6pt;
      border-bottom: 0.5pt solid rgba(183, 163, 139, 0.3);
      vertical-align: top;
    }

    tbody tr:nth-child(even) {
      background: rgba(245, 239, 230, 0.5);
    }
  </style>
</head>
<body>

  <!-- ===================================================================== -->
  <!-- PAGE 1: COVER PAGE                                                    -->
  <!-- ===================================================================== -->
  <div class="page page-dark" style="justify-content:space-between;">
    <div>
      <div style="height:4px; width:70px; background:linear-gradient(90deg, #F5EFEB, #B7A38B); margin-bottom:10mm;"></div>
      
      <div style="display:flex; align-items:center; gap:14px; margin-bottom:12mm;">
        ${logoGold ? `<img src="${logoGold}" style="height:44px; width:auto;" alt="OPHRON">` : ''}
        <div>
          <div style="font-family:'Cinzel', serif; font-size:16pt; font-weight:700; letter-spacing:0.25em; color:#FFFFFF;">OPHRON</div>
          <div style="font-family:'JetBrains Mono', monospace; font-size:7pt; letter-spacing:0.2em; color:#B7A38B; text-transform:uppercase;">Operational Infrastructure Platform</div>
        </div>
      </div>

      <div class="pill">Official Corporate Profile · Singapore Operations</div>

      <div style="font-family:'Playfair Display', serif; font-size:36pt; font-weight:700; line-height:1.05; color:#FFFFFF; margin:5mm 0 6mm 0; letter-spacing:-0.02em;">
        One partner.<br>
        One ecosystem.<br>
        <span class="gold-italic">Better operations.</span>
      </div>

      <p style="font-size:11pt; font-weight:300; line-height:1.6; color:rgba(237,229,218,0.9); max-width:88%; margin-bottom:8mm;">
        Unifying People, Hygiene, Facility Services, Technology, and Commercial Intelligence into a single strategic operating platform for Singapore’s hotels, restaurants, and hospitality groups.
      </p>
    </div>

    <div>
      <!-- 4 Stat Boxes -->
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
        <span>★ 100% SLA COMPLIANCE</span>
        <span>HQ: 26 SIN MING LANE #05-124</span>
        <span>OPHRONSYSTEMS.COM</span>
      </div>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 2: EXECUTIVE OVERVIEW & VALUE PROPOSITION                        -->
  <!-- ===================================================================== -->
  <div class="page page-light">
    <div>
      <div class="top-strip">
        <div class="brand-box">
          ${logoNavy ? `<img src="${logoNavy}" alt="OPHRON">` : ''}
          <span class="brand-text">OPHRON</span>
        </div>
        <span>02 · Strategic Executive Overview</span>
      </div>

      <div class="pill pill-dark">Consolidated Operating Model</div>
      <h1>Eliminating Operational <span class="gold-italic">Fragmentation.</span></h1>
      <p class="lead">
        Instead of coordinating 5+ disconnected contractors, OPHRON gives hotel and F&amp;B leadership a single accountable operating partner, one transparent contract, and total digital visibility.
      </p>

      <!-- 2 Column Comparison -->
      <div class="grid-2" style="margin-top:2mm; margin-bottom:4mm;">
        
        <!-- Traditional Silos Card -->
        <div class="card" style="background:#FFFFFF; border-color:rgba(192,57,43,0.35);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2mm;">
            <span style="font-family:'JetBrains Mono', monospace; font-size:7pt; font-weight:700; color:#C0392B; text-transform:uppercase;">Traditional Fragmented Silos</span>
            <span style="color:#C0392B; font-weight:800; font-size:9pt;">✕</span>
          </div>
          <h3 style="color:#C0392B; margin-bottom:2mm; font-size:9pt;">Multiple Contractors, Zero Ownership</h3>
          <div class="check-item"><span style="color:#C0392B; font-weight:700;">✕</span><span><strong>Vendor Blame-Shifting:</strong> Cleaning and stewarding crews blame each other during banquet delays.</span></div>
          <div class="check-item"><span style="color:#C0392B; font-weight:700;">✕</span><span><strong>Labor Volatility:</strong> Untrained transient staff cause hygiene standards to slip and fail SFA audits.</span></div>
          <div class="check-item"><span style="color:#C0392B; font-weight:700;">✕</span><span><strong>Manual Blindspots:</strong> Unverified paper records leave executives blind to shift attendance.</span></div>
          <div class="check-item"><span style="color:#C0392B; font-weight:700;">✕</span><span><strong>Margin Leakage:</strong> Managing 5+ separate invoices inflates administrative overhead by ~25%.</span></div>
        </div>

        <!-- The OPHRON Advantage Card -->
        <div class="card-dark">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2mm;">
            <span style="font-family:'JetBrains Mono', monospace; font-size:7pt; font-weight:700; color:#B7A38B; text-transform:uppercase;">The OPHRON Master Platform</span>
            <span style="color:#2ECC71; font-weight:800; font-size:9pt;">✓</span>
          </div>
          <h3 style="color:#FFFFFF; margin-bottom:2mm; font-size:9pt;">Unified Operating Infrastructure</h3>
          <div class="check-item"><span class="check-dot">✓</span><span><strong>Single Accountable Partner:</strong> 1 Contract, 1 Point of Contact, 1 Consolidated SLA.</span></div>
          <div class="check-item"><span class="check-dot">✓</span><span><strong>WSQ-Trained Workforce:</strong> Dedicated site supervisors signing off on quality every shift.</span></div>
          <div class="check-item"><span class="check-dot">✓</span><span><strong>Live Digital Dashboards:</strong> Real-time attendance telemetry and automated compliance logs.</span></div>
          <div class="check-item"><span class="check-dot">✓</span><span><strong>Measurable Commercial Yield:</strong> Optimized labor deployment and reduced procurement costs.</span></div>
        </div>

      </div>

      <!-- 3 Key Pillars of Delivery -->
      <div class="grid-3" style="margin-top:2mm;">
        <div class="card" style="border-left:3px solid #B7A38B;">
          <h3 style="font-size:8.5pt; margin-bottom:1mm;">1. Supervisor Accountability</h3>
          <p style="font-size:7.5pt; margin:0; color:#444;">Every shift is managed by a named on-site supervisor with signed digital handover reports.</p>
        </div>
        <div class="card" style="border-left:3px solid #B7A38B;">
          <h3 style="font-size:8.5pt; margin-bottom:1mm;">2. 100% Audit Readiness</h3>
          <p style="font-size:7.5pt; margin:0; color:#444;">Guaranteed compliance with SFA Food Hygiene Grade A and NEA Progressive Wage standards.</p>
        </div>
        <div class="card" style="border-left:3px solid #B7A38B;">
          <h3 style="font-size:8.5pt; margin-bottom:1mm;">3. 60-Min Rapid Response</h3>
          <p style="font-size:7.5pt; margin:0; color:#444;">24/7 dedicated Singapore incident hotline (+65 9295 1155) for rapid emergency deployments.</p>
        </div>
      </div>
    </div>

    <div class="bottom-strip">
      <span>OPHRON SYSTEMS · CORPORATE PROFILE</span>
      <span>PAGE 02</span>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 3: THE 5 STRATEGIC BUSINESS PILLARS                              -->
  <!-- ===================================================================== -->
  <div class="page page-dark">
    <div>
      <div class="top-strip">
        <div class="brand-box">
          ${logoGold ? `<img src="${logoGold}" alt="OPHRON">` : ''}
          <span class="brand-text" style="color:#EDE5DA;">OPHRON</span>
        </div>
        <span>03 · The 5 Strategic Pillars</span>
      </div>

      <div class="pill">OphronOS Architecture</div>
      <h1 style="color:#FFFFFF;">The 5 Strategic <span class="gold-italic">Business Pillars.</span></h1>
      <p class="lead" style="color:rgba(237,229,218,0.85);">
        A structured operational ecosystem engineered specifically for Singapore’s hospitality and commercial facilities.
      </p>

      <!-- 5 Pillars Detailed Stack -->
      <div style="display:flex; flex-direction:column; gap:2.5mm; margin-top:2mm;">
        
        <div class="card-dark" style="border-left:3px solid #B7A38B; padding:3mm 4.5mm;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <h3 style="color:#FFFFFF; margin:0; font-size:9.5pt;">01. OPHRON PEOPLE — Workforce Infrastructure</h3>
            <span class="pill pill-gold" style="margin:0; font-size:6.5pt;">6 Service Lines</span>
          </div>
          <p style="font-size:7.5pt; margin:1mm 0 0 0; color:rgba(237,229,218,0.85);">
            WSQ-trained hotel housekeeping, banquet captains, kitchen stewarding crews, dishwashing utility, and outsourced operational labor on demand.
          </p>
        </div>

        <div class="card-dark" style="border-left:3px solid #B7A38B; padding:3mm 4.5mm; background:rgba(183,163,139,0.12); border-color:#B7A38B;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <h3 style="color:#FFFFFF; margin:0; font-size:9.5pt;">02. OPHRON HYGIENE — Sanitation &amp; Stone Restoration</h3>
            <span class="pill pill-gold" style="margin:0; font-size:6.5pt;">★ Core Focus · 7 Service Lines</span>
          </div>
          <p style="font-size:7.5pt; margin:1mm 0 0 0; color:rgba(237,229,218,0.9);">
            Commercial kitchen deep degreasing, SCDF exhaust duct decoking, 98+ GU diamond marble polishing, and IAQ UV-C air sanitation.
          </p>
        </div>

        <div class="card-dark" style="border-left:3px solid #B7A38B; padding:3mm 4.5mm;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <h3 style="color:#FFFFFF; margin:0; font-size:9.5pt;">03. OPHRON FACILITIES — Façade &amp; Venue Management</h3>
            <span class="pill pill-gold" style="margin:0; font-size:6.5pt;">7 Service Lines</span>
          </div>
          <p style="font-size:7.5pt; margin:1mm 0 0 0; color:rgba(237,229,218,0.85);">
            IRATA-certified rope access high-rise façade cleaning, 60-minute luxury venue resets, Integrated Facility Management (IFM Lite), and repairs.
          </p>
        </div>

        <div class="grid-2" style="gap:2.5mm;">
          <div class="card-dark" style="border-left:3px solid #B7A38B; padding:3mm 4mm;">
            <h3 style="color:#FFFFFF; margin-bottom:1mm; font-size:8.8pt;">04. OPHRON TECHNOLOGY</h3>
            <p style="font-size:7.2pt; margin:0; color:rgba(237,229,218,0.8);">
              Real-time shift rosters, biometric attendance logs, IoT air quality sensors, and automated SFA compliance records.
            </p>
          </div>
          <div class="card-dark" style="border-left:3px solid #B7A38B; padding:3mm 4mm;">
            <h3 style="color:#FFFFFF; margin-bottom:1mm; font-size:8.8pt;">05. COMMERCIAL INTELLIGENCE</h3>
            <p style="font-size:7.2pt; margin:0; color:rgba(237,229,218,0.8);">
              Labor yield optimization, supplier waste auditing, operational SLA benchmarking, and cost reduction analytics.
            </p>
          </div>
        </div>

      </div>
    </div>

    <div class="bottom-strip">
      <span>OPHRON SYSTEMS · CORPORATE PROFILE</span>
      <span>PAGE 03</span>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 4: SPECIALIZED SERVICES CATALOG (PART 1)                         -->
  <!-- ===================================================================== -->
  <div class="page page-light">
    <div>
      <div class="top-strip">
        <div class="brand-box">
          ${logoNavy ? `<img src="${logoNavy}" alt="OPHRON">` : ''}
          <span class="brand-text">OPHRON</span>
        </div>
        <span>04 · Specialized Services Catalog (1 to 6)</span>
      </div>

      <div class="pill pill-dark">SOP &amp; Equipment Protocols</div>
      <h1>Specialized Operations <span class="gold-italic">Catalog.</span></h1>
      <p class="lead">
        Every service is backed by industrial-grade machinery, certified chemical dosing, and supervisor-signed quality handovers.
      </p>

      <!-- 6 Service Cards Grid -->
      <div class="grid-3" style="gap:3mm; margin-top:2mm;">
        
        <div class="card" style="border-top:3px solid #B7A38B;">
          <span style="font-family:'JetBrains Mono', monospace; font-size:6.5pt; color:#B7A38B; font-weight:700;">STONE CARE</span>
          <h3 style="font-size:8.5pt; margin:1mm 0 1.5mm 0;">01. Diamond Marble Polishing</h3>
          <p style="font-size:7.2pt; margin:0 0 2mm 0; color:#555;">Planetary grinding up to 3000 grit diamond resin pads for 98+ GU mirror gloss finish.</p>
          <div class="check-item"><span class="check-dot">✓</span><span>Calacatta, Carrara &amp; Terrazzo</span></div>
          <div class="check-item"><span class="check-dot">✓</span><span>Non-slip vitrification sealing</span></div>
        </div>

        <div class="card" style="border-top:3px solid #B7A38B;">
          <span style="font-family:'JetBrains Mono', monospace; font-size:6.5pt; color:#B7A38B; font-weight:700;">KITCHEN HYGIENE</span>
          <h3 style="font-size:8.5pt; margin:1mm 0 1.5mm 0;">02. Commercial Dishwashing</h3>
          <p style="font-size:7.2pt; margin:0 0 2mm 0; color:#555;">High-volume conveyor &amp; flight dishwashing machine operation with automated chemical titration.</p>
          <div class="check-item"><span class="check-dot">✓</span><span>100% SFA/NEA audit compliance</span></div>
          <div class="check-item"><span class="check-dot">✓</span><span>Grease trap maintenance &amp; dosing</span></div>
        </div>

        <div class="card" style="border-top:3px solid #B7A38B;">
          <span style="font-family:'JetBrains Mono', monospace; font-size:6.5pt; color:#B7A38B; font-weight:700;">VENUE OPERATIONS</span>
          <h3 style="font-size:8.5pt; margin:1mm 0 1.5mm 0;">03. Luxury Venue Turnaround</h3>
          <p style="font-size:7.2pt; margin:0 0 2mm 0; color:#555;">Rapid 60-minute resets between major banquet bookings, VIP crystal glassware detailing.</p>
          <div class="check-item"><span class="check-dot">✓</span><span>Zero-downtime ballroom resets</span></div>
          <div class="check-item"><span class="check-dot">✓</span><span>Post-event deep steam extraction</span></div>
        </div>

        <div class="card" style="border-top:3px solid #B7A38B;">
          <span style="font-family:'JetBrains Mono', monospace; font-size:6.5pt; color:#B7A38B; font-weight:700;">ROPE ACCESS</span>
          <h3 style="font-size:8.5pt; margin:1mm 0 1.5mm 0;">04. High-Rise Façade Cleaning</h3>
          <p style="font-size:7.2pt; margin:0 0 2mm 0; color:#555;">IRATA-certified level 1–3 rope access technicians for commercial curtain wall glass maintenance.</p>
          <div class="check-item"><span class="check-dot">✓</span><span>Deionized pure water wash poles</span></div>
          <div class="check-item"><span class="check-dot">✓</span><span>Dual-rope safety anchoring</span></div>
        </div>

        <div class="card" style="border-top:3px solid #B7A38B;">
          <span style="font-family:'JetBrains Mono', monospace; font-size:6.5pt; color:#B7A38B; font-weight:700;">FIRE SAFETY</span>
          <h3 style="font-size:8.5pt; margin:1mm 0 1.5mm 0;">05. Kitchen Exhaust Degreasing</h3>
          <p style="font-size:7.2pt; margin:0 0 2mm 0; color:#555;">Heated caustic foam decoking of complete duct runs, fans, and hood plenums.</p>
          <div class="check-item"><span class="check-dot">✓</span><span>SCDF Fire Code compliance cert</span></div>
          <div class="check-item"><span class="check-dot">✓</span><span>Before/After photographic logs</span></div>
        </div>

        <div class="card" style="border-top:3px solid #B7A38B;">
          <span style="font-family:'JetBrains Mono', monospace; font-size:6.5pt; color:#B7A38B; font-weight:700;">AIR PURIFICATION</span>
          <h3 style="font-size:8.5pt; margin:1mm 0 1.5mm 0;">06. Disinfection &amp; IAQ Sanitization</h3>
          <p style="font-size:7.2pt; margin:0 0 2mm 0; color:#555;">Hospital-grade ULV cold mist fogging and continuous UV-C air scrubbers with NEA biocides.</p>
          <div class="check-item"><span class="check-dot">✓</span><span>ATP surface bioluminescence swab</span></div>
          <div class="check-item"><span class="check-dot">✓</span><span>PM2.5 &amp; VOC air quality clearance</span></div>
        </div>

      </div>
    </div>

    <div class="bottom-strip">
      <span>OPHRON SYSTEMS · CORPORATE PROFILE</span>
      <span>PAGE 04</span>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 5: SPECIALIZED SERVICES CATALOG (PART 2)                         -->
  <!-- ===================================================================== -->
  <div class="page page-light">
    <div>
      <div class="top-strip">
        <div class="brand-box">
          ${logoNavy ? `<img src="${logoNavy}" alt="OPHRON">` : ''}
          <span class="brand-text">OPHRON</span>
        </div>
        <span>05 · Specialized Services Catalog (7 to 12)</span>
      </div>

      <div class="pill pill-dark">Full Enterprise Coverage</div>
      <h1>Specialized Operations <span class="gold-italic">Catalog (Cont.).</span></h1>
      <p class="lead">
        Comprehensive facility, industrial, and workforce capabilities across all hospitality touchpoints.
      </p>

      <!-- 6 Service Cards Grid -->
      <div class="grid-3" style="gap:3mm; margin-top:2mm;">
        
        <div class="card" style="border-top:3px solid #B7A38B;">
          <span style="font-family:'JetBrains Mono', monospace; font-size:6.5pt; color:#B7A38B; font-weight:700;">TEXTILE CARE</span>
          <h3 style="font-size:8.5pt; margin:1mm 0 1.5mm 0;">07. Carpet Deep Steam Extraction</h3>
          <p style="font-size:7.2pt; margin:0 0 2mm 0; color:#555;">85°C dual-motor hot water extraction with rapid 2-hour dry time guarantee.</p>
          <div class="check-item"><span class="check-dot">✓</span><span>Wine, tannin &amp; grease removal</span></div>
          <div class="check-item"><span class="check-dot">✓</span><span>Anti-microbial fabric encapsulation</span></div>
        </div>

        <div class="card" style="border-top:3px solid #B7A38B;">
          <span style="font-family:'JetBrains Mono', monospace; font-size:6.5pt; color:#B7A38B; font-weight:700;">HANDOVERS</span>
          <h3 style="font-size:8.5pt; margin:1mm 0 1.5mm 0;">08. Post-Renovation Cleaning</h3>
          <p style="font-size:7.2pt; margin:0 0 2mm 0; color:#555;">Heavy slurry clearing, paint scraping, and fine dust elimination prior to authority handover.</p>
          <div class="check-item"><span class="check-dot">✓</span><span>Defect snagging documentation</span></div>
          <div class="check-item"><span class="check-dot">✓</span><span>100% Handover sign-off guarantee</span></div>
        </div>

        <div class="card" style="border-top:3px solid #B7A38B;">
          <span style="font-family:'JetBrains Mono', monospace; font-size:6.5pt; color:#B7A38B; font-weight:700;">STAFFING</span>
          <h3 style="font-size:8.5pt; margin:1mm 0 1.5mm 0;">09. Hospitality Workforce Crews</h3>
          <p style="font-size:7.2pt; margin:0 0 2mm 0; color:#555;">WSQ-trained housekeeping, stewarding crews, banquet attendants, and kitchen helpers.</p>
          <div class="check-item"><span class="check-dot">✓</span><span>MOM Progressive Wage compliant</span></div>
          <div class="check-item"><span class="check-dot">✓</span><span>On-demand shift surge scaling</span></div>
        </div>

        <div class="card" style="border-top:3px solid #B7A38B;">
          <span style="font-family:'JetBrains Mono', monospace; font-size:6.5pt; color:#B7A38B; font-weight:700;">OFFICE &amp; SHOWROOM</span>
          <h3 style="font-size:8.5pt; margin:1mm 0 1.5mm 0;">10. Commercial Daily Maintenance</h3>
          <p style="font-size:7.2pt; margin:0 0 2mm 0; color:#555;">Day porters, evening sanitation, executive boardroom prep, and autonomous robotic scrubbing.</p>
          <div class="check-item"><span class="check-dot">✓</span><span>Grade A tower executive standards</span></div>
          <div class="check-item"><span class="check-dot">✓</span><span>Supervisor daily signed log</span></div>
        </div>

        <div class="card" style="border-top:3px solid #B7A38B;">
          <span style="font-family:'JetBrains Mono', monospace; font-size:6.5pt; color:#B7A38B; font-weight:700;">STERILITY</span>
          <h3 style="font-size:8.5pt; margin:1mm 0 1.5mm 0;">11. Medical &amp; Cleanroom Care</h3>
          <p style="font-size:7.2pt; margin:0 0 2mm 0; color:#555;">ISO Class 5–8 cleanrooms, day surgery centers, and pharmaceutical hygiene maintenance.</p>
          <div class="check-item"><span class="check-dot">✓</span><span>Gamma-irradiated microfibre wipes</span></div>
          <div class="check-item"><span class="check-dot">✓</span><span>Bioburden reduction verification</span></div>
        </div>

        <div class="card" style="border-top:3px solid #B7A38B;">
          <span style="font-family:'JetBrains Mono', monospace; font-size:6.5pt; color:#B7A38B; font-weight:700;">INDUSTRIAL</span>
          <h3 style="font-size:8.5pt; margin:1mm 0 1.5mm 0;">12. Industrial Warehouse Scrubbing</h3>
          <p style="font-size:7.2pt; margin:0 0 2mm 0; color:#555;">Ride-on cylindrical scrubbers for logistics hubs, cold rooms, and heavy epoxy floor care.</p>
          <div class="check-item"><span class="check-dot">✓</span><span>Tire mark degreasing &amp; scrubbing</span></div>
          <div class="check-item"><span class="check-dot">✓</span><span>High-bay dust removal</span></div>
        </div>

      </div>
    </div>

    <div class="bottom-strip">
      <span>OPHRON SYSTEMS · CORPORATE PROFILE</span>
      <span>PAGE 05</span>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 6: INDUSTRIES SERVED & ENTERPRISE MATRIX                         -->
  <!-- ===================================================================== -->
  <div class="page page-dark">
    <div>
      <div class="top-strip">
        <div class="brand-box">
          ${logoGold ? `<img src="${logoGold}" alt="OPHRON">` : ''}
          <span class="brand-text" style="color:#EDE5DA;">OPHRON</span>
        </div>
        <span>06 · Industries &amp; Enterprise Standards</span>
      </div>

      <div class="pill">Enterprise Credibility</div>
      <h1 style="color:#FFFFFF;">Industries Served &amp; <span class="gold-italic">Enterprise Standards.</span></h1>
      <p class="lead" style="color:rgba(237,229,218,0.85);">
        Custom operational blueprints tailored to the specific regulatory and guest expectations of Singapore’s premium sectors.
      </p>

      <!-- 4 Sector Blueprints -->
      <div class="grid-2" style="gap:3.5mm; margin-top:2mm; margin-bottom:4mm;">
        
        <div class="card-dark" style="border-left:3px solid #B7A38B;">
          <div class="pill pill-gold" style="margin-bottom:1.5mm; font-size:6.5pt;">Hotels &amp; Resorts</div>
          <h3 style="color:#FFFFFF; font-size:9pt; margin-bottom:1mm;">Luxury Hotels &amp; Serviced Residences</h3>
          <p style="font-size:7.5pt; margin:0; color:rgba(237,229,218,0.85);">
            Housekeeping room attendants, public area marble restoration, banquet stewarding surge crews, and façade rope access abseiling.
          </p>
        </div>

        <div class="card-dark" style="border-left:3px solid #B7A38B;">
          <div class="pill pill-gold" style="margin-bottom:1.5mm; font-size:6.5pt;">F&amp;B &amp; Dining</div>
          <h3 style="color:#FFFFFF; font-size:9pt; margin-bottom:1mm;">Fine Dining &amp; Central Kitchens</h3>
          <p style="font-size:7.5pt; margin:0; color:rgba(237,229,218,0.85);">
            Nightly line degreasing, grease trap pumping, dishwashing crews, and 100% SFA Grade A inspection compliance.
          </p>
        </div>

        <div class="card-dark" style="border-left:3px solid #B7A38B;">
          <div class="pill pill-gold" style="margin-bottom:1.5mm; font-size:6.5pt;">Event Venues</div>
          <h3 style="color:#FFFFFF; font-size:9pt; margin-bottom:1mm;">Grand Ballrooms &amp; Nightlife Hubs</h3>
          <p style="font-size:7.5pt; margin:0; color:rgba(237,229,218,0.85);">
            60-minute rapid banquet hall resets, VIP crystal glassware detailing, restroom attendants, and post-event extraction.
          </p>
        </div>

        <div class="card-dark" style="border-left:3px solid #B7A38B;">
          <div class="pill pill-gold" style="margin-bottom:1.5mm; font-size:6.5pt;">Commercial &amp; Medical</div>
          <h3 style="color:#FFFFFF; font-size:9pt; margin-bottom:1mm;">Grade A Towers &amp; Cleanrooms</h3>
          <p style="font-size:7.5pt; margin:0; color:rgba(237,229,218,0.85);">
            Executive day porters, showroom shine, ISO Class 5–8 medical sterility, and autonomous robotic floor scrubbing.
          </p>
        </div>

      </div>

      <!-- Comparison Table -->
      <table style="color:#EDE5DA;">
        <thead>
          <tr>
            <th style="width: 25%;">Operational Pillar</th>
            <th style="width: 35%;">Traditional Fragmented Vendors</th>
            <th style="width: 40%; background:#B7A38B; color:#032147;">The OPHRON Integrated Model</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Accountability</strong></td>
            <td>Multiple contractors; blame-shifting during delays.</td>
            <td style="color:#FFFFFF; font-weight:600;">One single point of contact &amp; unified SLA.</td>
          </tr>
          <tr>
            <td><strong>Supervision</strong></td>
            <td>Unsupervised ad-hoc staff without briefing.</td>
            <td style="color:#FFFFFF; font-weight:600;">Dedicated site supervisor signing off each shift.</td>
          </tr>
          <tr>
            <td><strong>Compliance</strong></td>
            <td>Paper records; surprise SFA audit penalties.</td>
            <td style="color:#FFFFFF; font-weight:600;">100% SFA/NEA audit-ready digital logs.</td>
          </tr>
          <tr>
            <td><strong>Hotline Response</strong></td>
            <td>Delayed attendance or next-day callbacks.</td>
            <td style="color:#FFFFFF; font-weight:600;">24/7 Hotline (+65 9295 1155) · 60-min emergency response.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bottom-strip">
      <span>OPHRON SYSTEMS · CORPORATE PROFILE</span>
      <span>PAGE 06</span>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 7: PROVEN IMPACT, LEADERSHIP & CLIENT TRUST                      -->
  <!-- ===================================================================== -->
  <div class="page page-dark">
    <div>
      <div class="top-strip">
        <div class="brand-box">
          ${logoGold ? `<img src="${logoGold}" alt="OPHRON">` : ''}
          <span class="brand-text" style="color:#EDE5DA;">OPHRON</span>
        </div>
        <span>07 · Proven Impact &amp; Executive Leadership</span>
      </div>

      <div class="pill">20+ Years Operational Discipline</div>
      <h1 style="color:#FFFFFF;">Trusted by Singapore’s <span class="gold-italic">Leading Venues.</span></h1>
      <p class="lead" style="color:rgba(237,229,218,0.85);">
        Hear from the directors and executives who rely on OPHRON’s unified operating infrastructure daily.
      </p>

      <!-- 3 Testimonial Cards -->
      <div style="display:flex; flex-direction:column; gap:2.5mm; margin-top:2mm; margin-bottom:4mm;">
        
        <div class="card-dark" style="padding:3mm 4mm; border-left:3px solid #B7A38B;">
          <div style="color:#B7A38B; font-size:8.5pt; margin-bottom:1mm;">★★★★★ <strong style="color:#FFFFFF; font-size:8pt; margin-left:4px;">PAN PACIFIC HOTELS GROUP</strong></div>
          <p style="font-size:7.5pt; margin:0; font-style:italic; color:rgba(237,229,218,0.9);">
            "Consolidating stewarding and floor maintenance under OPHRON reduced our ballroom turnover time by over 40%. Our hygiene audit scores remain spotless."
          </p>
          <div style="font-size:6.5pt; font-family:'JetBrains Mono', monospace; color:#B7A38B; margin-top:1.5mm;">— Director of Hospitality Operations</div>
        </div>

        <div class="card-dark" style="padding:3mm 4mm; border-left:3px solid #B7A38B;">
          <div style="color:#B7A38B; font-size:8.5pt; margin-bottom:1mm;">★★★★★ <strong style="color:#FFFFFF; font-size:8pt; margin-left:4px;">YOTEL SINGAPORE</strong></div>
          <p style="font-size:7.5pt; margin:0; font-style:italic; color:rgba(237,229,218,0.9);">
            "OPHRON’s trained housekeeping crews and dedicated supervisors have maintained exemplary standards. Real-time digital logs give us total transparency."
          </p>
          <div style="font-size:6.5pt; font-family:'JetBrains Mono', monospace; color:#B7A38B; margin-top:1.5mm;">— Executive Housekeeper</div>
        </div>

        <div class="card-dark" style="padding:3mm 4mm; border-left:3px solid #B7A38B;">
          <div style="color:#B7A38B; font-size:8.5pt; margin-bottom:1mm;">★★★★★ <strong style="color:#FFFFFF; font-size:8pt; margin-left:4px;">ATLAS BAR SINGAPORE</strong></div>
          <p style="font-size:7.5pt; margin:0; font-style:italic; color:rgba(237,229,218,0.9);">
            "Precision, speed, and discretion. OPHRON’s specialized marble care keeps our historic interior pristine without ever interrupting guest service."
          </p>
          <div style="font-size:6.5pt; font-family:'JetBrains Mono', monospace; color:#B7A38B; margin-top:1.5mm;">— General Manager</div>
        </div>

      </div>

      <!-- Founder & Leadership Card -->
      <div class="card-dark" style="background:rgba(245,239,230,0.06); border-color:#B7A38B; padding:4mm 5mm;">
        <span style="font-family:'JetBrains Mono', monospace; font-size:6.5pt; color:#B7A38B; text-transform:uppercase; font-weight:700;">Executive Leadership</span>
        <h3 style="color:#FFFFFF; margin:0.5mm 0 1.5mm 0; font-size:10pt;">Isaac Vivian · Founder &amp; Chief Executive Officer</h3>
        <p style="font-size:7.5pt; margin:0; line-height:1.45; color:rgba(237,229,218,0.9);">
          Over two decades leading hospitality operations, commercial facilities maintenance, and specialized hygiene infrastructure in Singapore. Founded OPHRON to deliver unified accountability, Progressive Wage workforce respect, and modern technology-enabled operational transparency.
        </p>
      </div>
    </div>

    <div class="bottom-strip">
      <span>OPHRON SYSTEMS · CORPORATE PROFILE</span>
      <span>PAGE 07</span>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- PAGE 8: 4-STAGE ROADMAP & CORPORATE CONTACT                           -->
  <!-- ===================================================================== -->
  <div class="page page-dark" style="background:#021A36; justify-content:space-between;">
    <div>
      <div class="top-strip">
        <div class="brand-box">
          ${logoGold ? `<img src="${logoGold}" alt="OPHRON">` : ''}
          <span class="brand-text" style="color:#EDE5DA;">OPHRON</span>
        </div>
        <span>08 · Engagement &amp; Contact Protocol</span>
      </div>

      <div class="pill">Start Your Operational Review</div>
      <div style="font-family:'Playfair Display', serif; font-size:28pt; font-weight:700; line-height:1.08; color:#FFFFFF; margin:3mm 0 4mm 0;">
        Let’s elevate your venue’s<br>
        <span class="gold-italic">operational performance.</span>
      </div>

      <p style="font-size:10pt; font-weight:300; line-height:1.55; color:rgba(237,229,218,0.9); max-width:88%; margin-bottom:5mm;">
        Schedule an on-site operational assessment today. Our engineers will audit your current service lines, identify margin leaks, and present a tailored single-contract ecosystem blueprint.
      </p>

      <!-- 4-Stage Onboarding Roadmap -->
      <div class="card-dark" style="background:rgba(245,239,230,0.05); margin-bottom:5mm; border-color:rgba(183,163,139,0.35);">
        <div style="font-family:'JetBrains Mono', monospace; font-size:7pt; color:#B7A38B; font-weight:700; text-transform:uppercase; margin-bottom:2mm;">
          4-Stage Rapid Onboarding Process
        </div>
        <div class="grid-4" style="gap:2.5mm;">
          <div style="font-size:7.5pt;"><strong>01. Audit</strong><br><span style="color:#bbb;">On-site walkthrough &amp; contract gap analysis.</span></div>
          <div style="font-size:7.5pt;"><strong>02. Blueprint</strong><br><span style="color:#bbb;">Custom SLA &amp; unified roster design.</span></div>
          <div style="font-size:7.5pt;"><strong>03. Deploy</strong><br><span style="color:#bbb;">Trained crew &amp; supervisor handover.</span></div>
          <div style="font-size:7.5pt;"><strong>04. Monitor</strong><br><span style="color:#bbb;">Live dashboards &amp; monthly reviews.</span></div>
        </div>
      </div>

      <!-- Contact Grid -->
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

</body>
</html>`;

fs.writeFileSync(htmlPath, fullHtml, 'utf8');
console.log('Clean Corporate Profile HTML generated at:', htmlPath);

// Run Edge headless to print to PDF
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const cmd = `"${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${pdfPath}" --print-to-pdf-no-header "${htmlPath}"`;

try {
  console.log('Generating Clean Corporate Profile PDF via headless browser...');
  execSync(cmd, { stdio: 'inherit' });
  console.log('SUCCESS: Generated PDF at:', pdfPath);

  // Copy to brochure, legacy, and brain artifacts
  fs.copyFileSync(pdfPath, brochurePdfPath);
  fs.copyFileSync(pdfPath, legacyPdfPath);
  fs.copyFileSync(pdfPath, path.join(brainDir, 'OPHRON_Company_Profile.pdf'));
  fs.copyFileSync(pdfPath, path.join(brainDir, 'OPHRON_Corporate_Brochure.pdf'));
  console.log('SUCCESS: Synchronized all PDF outputs.');
} catch (err) {
  console.error('Error generating PDF:', err);
}
