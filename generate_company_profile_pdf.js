import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '.');

const htmlPath = path.join(rootDir, 'OPHRON_Company_Profile.html');
const pdfPath = path.join(rootDir, 'OPHRON_Company_Profile.pdf');
const brainDir = 'C:\\Users\\SUDARSANA NARAYANAN\\.gemini\\antigravity-ide\\brain\\1a883b47-64a0-45fe-8415-ef6d62006456';
const brainPdfPath = path.join(brainDir, 'OPHRON_Company_Profile.pdf');

// Function to convert local image to base64 data URI for reliable offline printing
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

const logoGold = getBase64Image('public/images/brand/ophron-gold-emblem-transparent.png');
const isaacPortrait = getBase64Image('src/components/isaac_portrait.png');
const heroMarble = getBase64Image('public/images/hero/hero_marble_polish_desktop.jpg');
const heroVenue = getBase64Image('public/images/hero/hero_event_venue_desktop.jpg');
const heroManpower = getBase64Image('public/images/hero/hero_manpower_suite_desktop.jpg');
const heroTech = getBase64Image('public/images/hero/hero_tech_dashboard_desktop.jpg');

const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OPHRON — Corporate Company Profile &amp; Capability Statement</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,600&family=JetBrains+Mono:wght@400;500;600&display=swap');

    @page {
      size: A4;
      margin: 14mm 14mm 16mm 14mm;
      @bottom-right {
        content: counter(page);
        font-family: 'JetBrains Mono', monospace;
        font-size: 8pt;
        color: #B7A38B;
      }
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 9.5pt;
      line-height: 1.55;
      color: #032147;
      background: #FFFFFF;
      margin: 0;
      padding: 0;
    }

    /* Page Breaks */
    .page-break {
      page-break-before: always;
      break-before: page;
    }

    .avoid-break {
      page-break-inside: avoid;
      break-inside: avoid;
    }

    /* Cover Page */
    .cover-page {
      background: #032147;
      color: #EDE5DA;
      min-height: 268mm;
      padding: 24mm 18mm 20mm 18mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 4px;
      page-break-after: always;
      break-after: page;
      position: relative;
      overflow: hidden;
    }

    .cover-gold-bar {
      height: 4px;
      width: 80px;
      background: linear-gradient(90deg, #F5EFEB, #B7A38B);
      margin-bottom: 8mm;
    }

    .cover-emblem {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12mm;
    }

    .cover-emblem img {
      height: 44px;
      width: auto;
    }

    .cover-emblem-text {
      font-family: 'Cinzel', serif;
      font-size: 14pt;
      font-weight: 700;
      letter-spacing: 0.22em;
      color: #EDE5DA;
    }

    .cover-tagline-eyebrow {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5pt;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: #B7A38B;
      font-weight: 600;
      margin-bottom: 4mm;
    }

    .cover-title {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 32pt;
      font-weight: 700;
      line-height: 1.08;
      color: #FFFFFF;
      margin-bottom: 6mm;
      letter-spacing: -0.01em;
    }

    .cover-title span {
      font-style: italic;
      color: #B7A38B;
    }

    .cover-subtitle {
      font-family: 'Inter', sans-serif;
      font-size: 11.5pt;
      font-weight: 300;
      line-height: 1.5;
      color: rgba(237, 229, 218, 0.9);
      margin-bottom: 12mm;
      max-width: 90%;
    }

    .cover-meta-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      background: rgba(245, 239, 230, 0.06);
      border: 1px solid rgba(183, 163, 139, 0.35);
      border-radius: 8px;
      padding: 12pt 16pt;
      margin-top: 8mm;
    }

    .cover-meta-item {
      font-size: 8.5pt;
    }

    .cover-meta-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.5pt;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: #B7A38B;
      font-weight: 600;
      margin-bottom: 2px;
    }

    .cover-meta-val {
      font-weight: 600;
      color: #FFFFFF;
    }

    .cover-credentials-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid rgba(183, 163, 139, 0.25);
      padding-top: 6mm;
      margin-top: 6mm;
      font-family: 'JetBrains Mono', monospace;
      font-size: 8pt;
      color: #B7A38B;
    }

    /* Section Divider Page */
    .section-divider {
      background: #032147;
      color: #EDE5DA;
      min-height: 268mm;
      padding: 30mm 20mm;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 4px;
      page-break-after: always;
      break-after: page;
      position: relative;
    }

    .divider-num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 36pt;
      font-weight: 800;
      color: #B7A38B;
      line-height: 1;
      margin-bottom: 4mm;
    }

    .divider-title {
      font-family: 'Playfair Display', serif;
      font-size: 26pt;
      font-weight: 700;
      color: #FFFFFF;
      line-height: 1.15;
      margin-bottom: 6mm;
    }

    .divider-lead {
      font-family: 'Inter', sans-serif;
      font-size: 11pt;
      line-height: 1.6;
      color: rgba(237, 229, 218, 0.85);
      max-width: 85%;
    }

    /* Headers & Typography */
    .header-bar {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      border-bottom: 1.5pt solid #B7A38B;
      padding-bottom: 4pt;
      margin-bottom: 6mm;
    }

    .header-bar .logo-tag {
      font-family: 'Cinzel', serif;
      font-size: 9pt;
      font-weight: 700;
      color: #032147;
      letter-spacing: 0.15em;
    }

    .header-bar .section-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.5pt;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #B7A38B;
      font-weight: 600;
    }

    h1 {
      font-family: 'Playfair Display', serif;
      font-size: 19pt;
      font-weight: 700;
      color: #032147;
      margin: 0 0 3mm 0;
      letter-spacing: -0.01em;
      line-height: 1.2;
    }

    h2 {
      font-family: 'Montserrat', sans-serif;
      font-size: 13pt;
      font-weight: 700;
      color: #032147;
      margin: 5mm 0 2.5mm 0;
      letter-spacing: -0.01em;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    h2::before {
      content: "◆";
      font-size: 8pt;
      color: #B7A38B;
    }

    h3 {
      font-family: 'Montserrat', sans-serif;
      font-size: 10.5pt;
      font-weight: 700;
      color: #032147;
      margin: 3mm 0 1.5mm 0;
    }

    p {
      margin: 0 0 5pt 0;
      color: #1a2e4c;
      font-size: 9.2pt;
      line-height: 1.55;
    }

    .lead-p {
      font-size: 10pt;
      font-weight: 500;
      color: #032147;
      line-height: 1.55;
      margin-bottom: 4mm;
    }

    /* Cards & Containers */
    .card {
      background: #FDFBF8;
      border: 1px solid rgba(183, 163, 139, 0.4);
      border-radius: 6px;
      padding: 10pt 12pt;
      margin-bottom: 4mm;
    }

    .card-navy {
      background: #032147;
      color: #EDE5DA;
      border: 1px solid #B7A38B;
      border-radius: 6px;
      padding: 12pt 14pt;
      margin-bottom: 4mm;
    }

    .card-navy h2, .card-navy h3 {
      color: #FFFFFF;
    }

    .card-navy p {
      color: rgba(237, 229, 218, 0.9);
    }

    .stat-strip {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      margin: 4mm 0 6mm 0;
    }

    .stat-card {
      background: #F5EFEB;
      border: 1px solid rgba(183, 163, 139, 0.5);
      border-radius: 6px;
      padding: 8pt;
      text-align: center;
    }

    .stat-num {
      font-family: 'Playfair Display', serif;
      font-size: 18pt;
      font-weight: 800;
      color: #032147;
      line-height: 1;
      margin-bottom: 2pt;
    }

    .stat-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 7pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #7A6246;
    }

    /* 2 & 3 Column Grid */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-bottom: 4mm;
    }

    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
      margin-bottom: 4mm;
    }

    /* Lists */
    ul {
      margin: 2mm 0 4mm 0;
      padding-left: 14pt;
    }

    li {
      margin-bottom: 2.5pt;
      font-size: 9pt;
      color: #1a2e4c;
    }

    li::marker {
      color: #B7A38B;
    }

    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 3mm 0 5mm 0;
      font-size: 8.5pt;
    }

    thead th {
      background: #032147;
      color: #EDE5DA;
      text-align: left;
      padding: 5pt 7pt;
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.5pt;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      border-bottom: 1.5pt solid #B7A38B;
    }

    tbody td {
      padding: 4.5pt 7pt;
      border-bottom: 0.5pt solid rgba(3, 33, 71, 0.12);
      vertical-align: top;
    }

    tbody tr:nth-child(even) {
      background: #FAF7F2;
    }

    .tag-pill {
      display: inline-block;
      font-family: 'JetBrains Mono', monospace;
      font-size: 7pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      padding: 1.5pt 5pt;
      border-radius: 3px;
      background: rgba(3, 33, 71, 0.08);
      color: #032147;
      border: 0.5pt solid rgba(183, 163, 139, 0.4);
    }

    .tag-pill-gold {
      background: #B7A38B;
      color: #032147;
      border: none;
    }

    /* TOC */
    .toc-item {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      padding: 4pt 0;
      border-bottom: 0.5pt dashed rgba(183, 163, 139, 0.4);
      font-size: 9pt;
    }

    .toc-title {
      font-weight: 600;
      color: #032147;
    }

    .toc-dots {
      flex: 1;
      margin: 0 6pt;
      border-bottom: 0.5pt dotted rgba(3, 33, 71, 0.2);
    }

    .toc-page {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5pt;
      font-weight: 700;
      color: #B7A38B;
    }

    /* Images */
    .img-box {
      border-radius: 6px;
      overflow: hidden;
      border: 1px solid rgba(183, 163, 139, 0.4);
      margin-bottom: 3mm;
    }

    .img-box img {
      width: 100%;
      height: 140px;
      object-fit: cover;
      display: block;
    }
  </style>
</head>
<body>

  <!-- ===================================================================== -->
  <!-- 1. COVER PAGE                                                         -->
  <!-- ===================================================================== -->
  <div class="cover-page">
    <div>
      <div class="cover-gold-bar"></div>
      <div class="cover-emblem">
        ${logoGold ? `<img src="${logoGold}" alt="OPHRON Emblem">` : ''}
        <span class="cover-emblem-text">OPHRON SYSTEMS</span>
      </div>

      <div class="cover-tagline-eyebrow">Enterprise Capability Statement · Singapore Operations</div>
      <div class="cover-title">Hospitality Operational<br><span>Infrastructure Platform</span></div>
      <div class="cover-subtitle">
        One partner. One ecosystem. Better operations. Unifying People, Hygiene, Facility Services, Technology, and Commercial Intelligence across Singapore &amp; international hospitality venues.
      </div>
    </div>

    <div>
      <div class="cover-meta-grid">
        <div class="cover-meta-item">
          <div class="cover-meta-label">Primary Entity</div>
          <div class="cover-meta-val">OPHRON Systems (Singapore)</div>
        </div>
        <div class="cover-meta-item">
          <div class="cover-meta-label">Document Classification</div>
          <div class="cover-meta-val">Official Corporate Profile &amp; Capability Brief</div>
        </div>
        <div class="cover-meta-item">
          <div class="cover-meta-label">Operational Coverage</div>
          <div class="cover-meta-val">140+ Active SG Contracts · 20+ Yrs Expertise</div>
        </div>
        <div class="cover-meta-item">
          <div class="cover-meta-label">Regulatory Compliance</div>
          <div class="cover-meta-val">NEA Licensed Operator · bizSAFE Level 3</div>
        </div>
        <div class="cover-meta-item">
          <div class="cover-meta-label">24/7 Operations Hotline</div>
          <div class="cover-meta-val">+65 9295 1155 · WhatsApp Available</div>
        </div>
        <div class="cover-meta-item">
          <div class="cover-meta-label">Official Website</div>
          <div class="cover-meta-val">ophronsystems.com · ophron.sg</div>
        </div>
      </div>

      <div class="cover-credentials-bar">
        <span>★ 100% SLA ACCOUNTABILITY</span>
        <span>SINGAPORE HQ: 26 SIN MING LANE #05-124</span>
        <span>PAN PACIFIC · YOTEL · ATLAS</span>
      </div>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- 2. EXECUTIVE SUMMARY & TABLE OF CONTENTS                              -->
  <!-- ===================================================================== -->
  <div class="header-bar">
    <span class="logo-tag">OPHRON SYSTEMS</span>
    <span class="section-tag">§01 Executive Overview &amp; Contents</span>
  </div>

  <h1>Executive Overview &amp; Table of Contents</h1>
  <p class="lead-p">
    OPHRON is Singapore’s premier Hospitality Operational Infrastructure Platform. Instead of forcing hoteliers, F&amp;B directors, and facility executives to coordinate 5+ fragmented vendors, OPHRON delivers a single accountable partnership, consolidated contractual visibility, and enterprise-grade service delivery.
  </p>

  <div class="stat-strip">
    <div class="stat-card">
      <div class="stat-num">20+</div>
      <div class="stat-label">Years Field Expertise</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">140+</div>
      <div class="stat-label">Active SG Contracts</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">bizSAFE 3</div>
      <div class="stat-label">WSH Council Certified</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">NEA</div>
      <div class="stat-label">Licensed Operator</div>
    </div>
  </div>

  <h2>Table of Contents</h2>
  <div class="card">
    <div class="toc-item"><span class="toc-title">01. Executive Overview &amp; Core Value Proposition</span><span class="toc-dots"></span><span class="toc-page">Page 02</span></div>
    <div class="toc-item"><span class="toc-title">02. The Operational Problem Landscape in Singapore</span><span class="toc-dots"></span><span class="toc-page">Page 03</span></div>
    <div class="toc-item"><span class="toc-title">03. The OPHRON Solution: 5 Core Business Pillars</span><span class="toc-dots"></span><span class="toc-page">Page 04</span></div>
    <div class="toc-item"><span class="toc-title">04. Detailed Specialized Services Catalog (14 Services)</span><span class="toc-dots"></span><span class="toc-page">Page 05–07</span></div>
    <div class="toc-item"><span class="toc-title">05. Enterprise Differentiation &amp; Compliance Standards</span><span class="toc-dots"></span><span class="toc-page">Page 08</span></div>
    <div class="toc-item"><span class="toc-title">06. 4-Stage Operational Onboarding Roadmap</span><span class="toc-dots"></span><span class="toc-page">Page 09</span></div>
    <div class="toc-item"><span class="toc-title">07. Industry Solutions &amp; Sector Blueprints</span><span class="toc-dots"></span><span class="toc-page">Page 10</span></div>
    <div class="toc-item"><span class="toc-title">08. Proprietary Technology &amp; Operational Intelligence Platform</span><span class="toc-dots"></span><span class="toc-page">Page 11</span></div>
    <div class="toc-item"><span class="toc-title">09. Proven Field Performance, Testimonials &amp; Case Studies</span><span class="toc-dots"></span><span class="toc-page">Page 12</span></div>
    <div class="toc-item"><span class="toc-title">10. Executive Leadership &amp; Isaac Vivian Founder Profile</span><span class="toc-dots"></span><span class="toc-page">Page 13</span></div>
    <div class="toc-item"><span class="toc-title">11. Operational FAQ &amp; Commercial Objection Handling</span><span class="toc-dots"></span><span class="toc-page">Page 14</span></div>
    <div class="toc-item"><span class="toc-title">12. Corporate Engagement &amp; 24/7 Contact Protocol</span><span class="toc-dots"></span><span class="toc-page">Page 15</span></div>
  </div>

  <div class="card-navy avoid-break">
    <h3 style="color: #B7A38B; margin-top:0;">The OPHRON Mandate</h3>
    <p style="margin-bottom:0;">
      "We believe hospitality excellence is built from the back of house forward. When manpower, hygiene, facilities, technology, and commercial intelligence operate in total harmony, service standards soar, audit risks drop to zero, and operating margins expand."
    </p>
  </div>

  <!-- ===================================================================== -->
  <!-- 3. THE PROBLEM LANDSCAPE                                              -->
  <!-- ===================================================================== -->
  <div class="page-break"></div>
  <div class="header-bar">
    <span class="logo-tag">OPHRON SYSTEMS</span>
    <span class="section-tag">§02 Operational Reality</span>
  </div>

  <h1>The Problem: The Cost of Operational Fragmentation</h1>
  <p class="lead-p">
    Singapore hospitality venues operate in a high-density, unforgiving environment. When operations depend on 5+ disconnected vendors, hidden friction accumulates into significant financial and reputational losses.
  </p>

  <div class="grid-2">
    <div class="card">
      <div class="tag-pill" style="color: #C0392B;">Friction Point 01</div>
      <h3>Vendor Silos &amp; Finger-Pointing</h3>
      <p>Cleaning contractors blame staffing agencies for unwashed stewarding backlogs. Maintenance contractors blame kitchen crews for duct grime. When emergencies strike, no single party accepts accountability.</p>
    </div>
    <div class="card">
      <div class="tag-pill" style="color: #C0392B;">Friction Point 02</div>
      <h3>High Labor Turnover &amp; WSQ Gaps</h3>
      <p>Constant retraining of transient workers causes hygiene standard drops, broken glassware, and regulatory demerit points from NEA/SFA inspections.</p>
    </div>
  </div>

  <div class="grid-2">
    <div class="card">
      <div class="tag-pill" style="color: #C0392B;">Friction Point 03</div>
      <h3>Zero Digital Transparency</h3>
      <p>Manual paper logbooks, unverified attendance records, and invisible chemical dilution ratios leave management blind to actual shift performance until an audit fails.</p>
    </div>
    <div class="card">
      <div class="tag-pill" style="color: #C0392B;">Friction Point 04</div>
      <h3>Commercial Margin Leakage</h3>
      <p>Managing 5+ contracts with separate procurement terms, markups, overtime penalties, and invoicing cycles inflates corporate overhead by an estimated 18% to 28%.</p>
    </div>
  </div>

  <div class="card-navy avoid-break">
    <h3 style="color: #B7A38B; margin-top:0;">The OPHRON Consolidation Advantage</h3>
    <p>
      By unifying workforce, sanitation, equipment maintenance, and AI reporting under a single SLA contract, OPHRON eliminates operational finger-pointing, secures 100% regulatory compliance, and reduces administrative overhead.
    </p>
  </div>

  <!-- ===================================================================== -->
  <!-- 4. THE 5 CORE BUSINESS PILLARS                                        -->
  <!-- ===================================================================== -->
  <div class="page-break"></div>
  <div class="header-bar">
    <span class="logo-tag">OPHRON SYSTEMS</span>
    <span class="section-tag">§03 The 5 Core Pillars</span>
  </div>

  <h1>The 5 Pillars of the OPHRON Ecosystem</h1>
  <p class="lead-p">
    OPHRON is not simply a cleaning company or manpower agency. It is an integrated operational infrastructure platform organized across five cohesive strategic pillars:
  </p>

  <div class="card avoid-break">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <span class="tag-pill tag-pill-gold">Pillar 01 · People</span>
      <span class="tag-pill">6 Core Services</span>
    </div>
    <h2>OPHRON PEOPLE — Hospitality Workforce Infrastructure</h2>
    <p><strong>Purpose:</strong> Eliminates staffing bottlenecks, absenteeism, and labor crunches across hotels, banquets, and commercial kitchens.</p>
    <ul>
      <li>WSQ-certified hospitality crews &amp; stewarding specialists</li>
      <li>Kitchen helpers, dishwashing utility &amp; back-of-house staffing</li>
      <li>Dedicated room attendants, housekeeping &amp; executive banquet teams</li>
    </ul>
  </div>

  <div class="card avoid-break">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <span class="tag-pill tag-pill-gold">Pillar 02 · Hygiene</span>
      <span class="tag-pill">7 Core Services · Core Focus</span>
    </div>
    <h2>OPHRON HYGIENE — Sanitation, Degreasing &amp; Stone Restoration</h2>
    <p><strong>Purpose:</strong> Guarantees 100% SFA/NEA audit readiness, fire-safe exhaust systems, and diamond marble gloss.</p>
    <ul>
      <li>Commercial kitchen deep degreasing, exhaust hoods &amp; grease trap pumping</li>
      <li>Heavy-duty planetary diamond marble grinding &amp; powder polishing (98+ GU gloss)</li>
      <li>Indoor Air Quality (IAQ) UV-C sanitization &amp; hospital-grade ULV cold fogging</li>
    </ul>
  </div>

  <div class="card avoid-break">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <span class="tag-pill tag-pill-gold">Pillar 03 · Facilities</span>
      <span class="tag-pill">7 Core Services</span>
    </div>
    <h2>OPHRON FACILITIES — Property, Façade &amp; Venue Operations</h2>
    <p><strong>Purpose:</strong> Minimizes physical asset downtime, ensures building longevity, and executes 60-minute banquet resets.</p>
    <ul>
      <li>IRATA-certified rope access high-rise façade cleaning &amp; glass maintenance</li>
      <li>Luxury event venue turnaround, rapid resetting &amp; post-renovation handovers</li>
      <li>Integrated Facility Management (IFM Lite), reactive repairs &amp; waste management</li>
    </ul>
  </div>

  <div class="grid-2 avoid-break">
    <div class="card">
      <span class="tag-pill tag-pill-gold">Pillar 04 · Tech</span>
      <h3>OPHRON TECHNOLOGY</h3>
      <p>Real-time shift management dashboards, digital attendance verification, IoT IAQ environmental sensors, and automated SFA compliance records.</p>
    </div>
    <div class="card">
      <span class="tag-pill tag-pill-gold">Pillar 05 · Intelligence</span>
      <h3>COMMERCIAL INTELLIGENCE</h3>
      <p>Data-driven advisory maximizing labor yield, auditing supplier waste, logging SLA benchmarks, and lowering total operational cost of ownership.</p>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- 5. DETAILED SERVICES CATALOG (PART 1)                                 -->
  <!-- ===================================================================== -->
  <div class="page-break"></div>
  <div class="header-bar">
    <span class="logo-tag">OPHRON SYSTEMS</span>
    <span class="section-tag">§04 Specialized Services (1 to 5)</span>
  </div>

  <h1>Specialized Services &amp; SOP Protocols (Part I)</h1>
  <p class="lead-p">
    Every OPHRON service is executed under strict Standard Operating Procedures (SOPs), industrial machinery, and supervisor-signed quality handovers.
  </p>

  <!-- Service 1 -->
  <div class="card avoid-break">
    <div style="display:flex; justify-content:space-between;">
      <h3>01. Events &amp; Luxury Venue Turnover &amp; Maintenance</h3>
      <span class="tag-pill tag-pill-gold">Rapid 60-Min Resets</span>
    </div>
    <p><strong>Target Venues:</strong> Grand ballrooms, hotel banquet halls, VIP lounges, convention centers, luxury wedding venues.</p>
    <p><strong>Core Capabilities:</strong> Rapid reset between event bookings, VIP table setting, crystal glassware polishing, post-event deep extraction, spill response teams, and zero-downtime transition management.</p>
  </div>

  <!-- Service 2 -->
  <div class="card avoid-break">
    <div style="display:flex; justify-content:space-between;">
      <h3>02. Commercial Dishwashing &amp; Kitchen Stewarding</h3>
      <span class="tag-pill tag-pill-gold">100% SFA/NEA Audit Ready</span>
    </div>
    <p><strong>Target Venues:</strong> High-volume hotel central kitchens, Michelin-starred restaurants, cloud kitchens, casino dining halls.</p>
    <p><strong>Core Capabilities:</strong> Flight &amp; conveyor dishwashing machine operation, flight tray sorting, pot wash deep scrubbing, chemical titration dosing, grease trap maintenance, and end-of-shift kitchen line sterilization.</p>
  </div>

  <!-- Service 3 -->
  <div class="card avoid-break">
    <div style="display:flex; justify-content:space-between;">
      <h3>03. Powder &amp; Diamond Marble Polishing &amp; Stone Restoration</h3>
      <span class="tag-pill tag-pill-gold">98+ GU Mirror Gloss Finish</span>
    </div>
    <p><strong>Target Venues:</strong> 5-star hotel lobbies, premium shopping atriums, luxury residences, commercial executive suites.</p>
    <p><strong>Core Capabilities:</strong> Heavy-duty planetary grinding with 50-3000 grit diamond resin pads, lippage removal, Italian marble crystallisation powders, non-slip vitrification, and granite/terrazzo resurfacing.</p>
  </div>

  <!-- Service 4 -->
  <div class="card avoid-break">
    <div style="display:flex; justify-content:space-between;">
      <h3>04. High-Rise Façade Cleaning &amp; Rope Access Abseiling</h3>
      <span class="tag-pill tag-pill-gold">IRATA Level 1-3 Certified</span>
    </div>
    <p><strong>Target Venues:</strong> Commercial skyscrapers, hotel glass curtain towers, luxury mixed developments, airport terminals.</p>
    <p><strong>Core Capabilities:</strong> Industrial rope access technicians, dual-rope safety anchoring, spot-free deionized pure water filtration poles, exterior glass sealant inspection, and high-pressure cladding wash.</p>
  </div>

  <!-- Service 5 -->
  <div class="card avoid-break">
    <div style="display:flex; justify-content:space-between;">
      <h3>05. Commercial Kitchen Exhaust Hood &amp; Duct Degreasing</h3>
      <span class="tag-pill tag-pill-gold">SCDF Fire Code Compliance</span>
    </div>
    <p><strong>Target Venues:</strong> Hotel main kitchens, restaurant exhaust networks, food courts, central production kitchens.</p>
    <p><strong>Core Capabilities:</strong> High-pressure heated caustic foaming, complete duct run degreasing, exhaust fan impeller decoking, access panel installation, and certified before/after SCDF compliance documentation.</p>
  </div>

  <!-- ===================================================================== -->
  <!-- 6. DETAILED SERVICES CATALOG (PART 2)                                 -->
  <!-- ===================================================================== -->
  <div class="page-break"></div>
  <div class="header-bar">
    <span class="logo-tag">OPHRON SYSTEMS</span>
    <span class="section-tag">§04 Specialized Services (6 to 10)</span>
  </div>

  <h1>Specialized Services &amp; SOP Protocols (Part II)</h1>

  <!-- Service 6 -->
  <div class="card avoid-break">
    <div style="display:flex; justify-content:space-between;">
      <h3>06. Disinfection, Sanitization &amp; Indoor Air Quality (IAQ)</h3>
      <span class="tag-pill tag-pill-gold">NEA Approved Biocides</span>
    </div>
    <p><strong>Target Venues:</strong> Medical clinics, preschools, hotel guest corridors, corporate headquarters, convention centers.</p>
    <p><strong>Core Capabilities:</strong> Ultra-low volume (ULV) cold mist fogging with broad-spectrum hospital-grade virucides, continuous UV-C air scrubbers, HEPA filtration, and ATP bioluminescence surface swab testing.</p>
  </div>

  <!-- Service 7 -->
  <div class="card avoid-break">
    <div style="display:flex; justify-content:space-between;">
      <h3>07. Carpet &amp; Upholstery Deep Steam Extraction</h3>
      <span class="tag-pill tag-pill-gold">Rapid 2-Hour Dry Time</span>
    </div>
    <p><strong>Target Venues:</strong> Hotel guest suites, executive boardrooms, banquet ballrooms, luxury lounges, cinemas.</p>
    <p><strong>Core Capabilities:</strong> Dual-motor hot water extraction (85°C), wool-safe enzyme pre-conditioning, industrial stain elimination (wine, coffee, tannin), anti-microbial deodorization, and fiber encapsulation maintenance.</p>
  </div>

  <!-- Service 8 -->
  <div class="card avoid-break">
    <div style="display:flex; justify-content:space-between;">
      <h3>08. Post-Construction &amp; Renovation Turnover Cleaning</h3>
      <span class="tag-pill tag-pill-gold">100% Handover Guarantee</span>
    </div>
    <p><strong>Target Venues:</strong> New hotel builds, retail fit-outs, restaurant renovations, commercial office refurbishments.</p>
    <p><strong>Core Capabilities:</strong> Heavy cement slurry removal, grout haze elimination, paint speck scraping on glass/fixtures, high-level structural dust vacuuming, and defect snagging reports prior to authority handover.</p>
  </div>

  <!-- Service 9 -->
  <div class="card avoid-break">
    <div style="display:flex; justify-content:space-between;">
      <h3>09. Hospitality Manpower, Stewarding &amp; Housekeeping</h3>
      <span class="tag-pill tag-pill-gold">WSQ Trained &amp; Vetted</span>
    </div>
    <p><strong>Target Venues:</strong> Luxury hotel chains, boutique resorts, private members' clubs, high-end F&amp;B groups.</p>
    <p><strong>Core Capabilities:</strong> Full-time and ad-hoc operational crew deployment, room attendants, public area attendants, front-of-house banquet captains, stewarding supervisors, and MOM-compliant workforce administration.</p>
  </div>

  <!-- Service 10 -->
  <div class="card avoid-break">
    <div style="display:flex; justify-content:space-between;">
      <h3>10. Commercial Office &amp; Showroom Daily Maintenance</h3>
      <span class="tag-pill tag-pill-gold">Supervisor Signed Daily Log</span>
    </div>
    <p><strong>Target Venues:</strong> Grade A commercial towers, multinational corporate offices, luxury automobile showrooms, art galleries.</p>
    <p><strong>Core Capabilities:</strong> Day porter services, evening deep sanitation, touchpoint disinfection, pantry replenishment, executive boardroom prep, waste stream recycling, and robotic autonomous floor scrubbing.</p>
  </div>

  <!-- ===================================================================== -->
  <!-- 7. DETAILED SERVICES CATALOG (PART 3)                                 -->
  <!-- ===================================================================== -->
  <div class="page-break"></div>
  <div class="header-bar">
    <span class="logo-tag">OPHRON SYSTEMS</span>
    <span class="section-tag">§04 Specialized Services (11 to 14)</span>
  </div>

  <h1>Specialized Services &amp; SOP Protocols (Part III)</h1>

  <!-- Service 11 -->
  <div class="card avoid-break">
    <div style="display:flex; justify-content:space-between;">
      <h3>11. Cleanroom, Medical &amp; Healthcare Facility Hygiene</h3>
      <span class="tag-pill tag-pill-gold">ISO Class 5-8 Sterility</span>
    </div>
    <p><strong>Target Venues:</strong> Day surgery centers, medical specialist suites, dental clinics, biomedical labs, pharmaceutical packaging.</p>
    <p><strong>Core Capabilities:</strong> Gamma-irradiated lint-free microfibre wipes, cleanroom detergent protocols, bioburden reduction, positive air pressure barrier protocol maintenance, and certified autoclave sterilization records.</p>
  </div>

  <!-- Service 12 -->
  <div class="card avoid-break">
    <div style="display:flex; justify-content:space-between;">
      <h3>12. Industrial Warehouse &amp; Logistics Floor Scrubbing</h3>
      <span class="tag-pill tag-pill-gold">Heavy Duty Ride-On Power</span>
    </div>
    <p><strong>Target Venues:</strong> Cold storage hubs, bonded logistics facilities, central food distribution centers, factory hangars.</p>
    <p><strong>Core Capabilities:</strong> Industrial ride-on cylindrical scrubbers with dual sweepers, tire mark degreasing, epoxy coating maintenance, high-bay dust clearing, and oil containment protocols.</p>
  </div>

  <!-- Service 13 -->
  <div class="card avoid-break">
    <div style="display:flex; justify-content:space-between;">
      <h3>13. Smart Hospitality Technology, POS &amp; AI Analytics</h3>
      <span class="tag-pill tag-pill-gold">Real-Time SaaS Dashboards</span>
    </div>
    <p><strong>Target Venues:</strong> Hotel front desk operations, multi-unit F&amp;B chains, smart venues, facility control rooms.</p>
    <p><strong>Core Capabilities:</strong> Real-time shift scheduling software, automated attendance tracking, IoT IAQ compliance monitors, POS terminal optimization, and executive operational SLA reporting platforms.</p>
  </div>

  <!-- Service 14 -->
  <div class="card avoid-break">
    <div style="display:flex; justify-content:space-between;">
      <h3>14. Yacht &amp; Marine Vessel Interior/Exterior Detailing</h3>
      <span class="tag-pill tag-pill-gold">Marine Saltwater Protection</span>
    </div>
    <p><strong>Target Venues:</strong> Marina luxury yachts, private charters, cruise hospitality decks, waterfront clubhouse facilities.</p>
    <p><strong>Core Capabilities:</strong> Teak deck restoration, marine-grade gelcoat compounding &amp; wax sealing, stainless steel salt de-oxidation, bilge sanitation, and ultra-luxury cabin interior upholstery detailing.</p>
  </div>

  <!-- ===================================================================== -->
  <!-- 8. ENTERPRISE DIFFERENTIATION                                         -->
  <!-- ===================================================================== -->
  <div class="page-break"></div>
  <div class="header-bar">
    <span class="logo-tag">OPHRON SYSTEMS</span>
    <span class="section-tag">§05 Enterprise Standards</span>
  </div>

  <h1>Why OPHRON: The 5-Point Enterprise Guarantee</h1>
  <p class="lead-p">
    OPHRON's business model is engineered around accountability, verified regulatory credentials, and supervisor-signed service delivery.
  </p>

  <table>
    <thead>
      <tr>
        <th style="width: 25%;">Pillar Metric</th>
        <th style="width: 35%;">Traditional Fragmented Vendors</th>
        <th style="width: 40%;">The OPHRON Integrated Model</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Accountability</strong></td>
        <td>Multiple suppliers blaming each other; uncoordinated response.</td>
        <td><strong>One Accountable Operating Partner</strong> with unified SLA and single contract point of contact.</td>
      </tr>
      <tr>
        <td><strong>Shift Supervision</strong></td>
        <td>Absent or unsupervised transient workers on ad-hoc basis.</td>
        <td><strong>Dedicated Site Supervisors</strong> with digital check-ins and signed handover logs every shift.</td>
      </tr>
      <tr>
        <td><strong>Compliance Verification</strong></td>
        <td>Unreliable paper records; sudden demerit points from SFA/NEA audits.</td>
        <td><strong>100% Guaranteed SFA/NEA Audit Readiness</strong> with real-time digital compliance logs.</td>
      </tr>
      <tr>
        <td><strong>Workforce Standards</strong></td>
        <td>Untrained workers causing breakage and service delays.</td>
        <td><strong>WSQ-Trained &amp; Vetted Crews</strong> briefed on client-specific venue SOPs and service etiquette.</td>
      </tr>
      <tr>
        <td><strong>Emergency Response</strong></td>
        <td>Next-day or delayed emergency attendance.</td>
        <td><strong>24/7 Incident Hotline (+65 9295 1155)</strong> with rapid 60-minute emergency deployment across Singapore.</td>
      </tr>
    </tbody>
  </table>

  <h2>Official Certifications &amp; Accreditations</h2>
  <div class="grid-3">
    <div class="card">
      <div class="tag-pill tag-pill-gold">NEA Licensed</div>
      <h3>NEA Licensed Cleaning Operator</h3>
      <p>Full regulatory licensing under Singapore's National Environment Agency framework, adhering to Progressive Wage Model (PWM) standards.</p>
    </div>
    <div class="card">
      <div class="tag-pill tag-pill-gold">bizSAFE Level 3</div>
      <h3>bizSAFE 3 Certified</h3>
      <p>Comprehensive Risk Assessment (RA) and workplace safety health systems approved by the Singapore WSH Council.</p>
    </div>
    <div class="card">
      <div class="tag-pill tag-pill-gold">WSQ Certified</div>
      <h3>WSQ Framework Compliant</h3>
      <p>Staff certified under Workforce Skills Qualifications in food hygiene, stone care, and hazardous chemical handling.</p>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- 9. 4-STAGE ONBOARDING ROADMAP                                         -->
  <!-- ===================================================================== -->
  <div class="page-break"></div>
  <div class="header-bar">
    <span class="logo-tag">OPHRON SYSTEMS</span>
    <span class="section-tag">§06 Implementation Roadmap</span>
  </div>

  <h1>The 4-Stage Operational Onboarding Roadmap</h1>
  <p class="lead-p">
    Transitioning your venue operations to OPHRON is seamless, risk-free, and designed with zero disruption to daily guest experiences.
  </p>

  <div class="card avoid-break">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <span class="tag-pill tag-pill-gold">Stage 01</span>
      <span class="tag-pill">Week 1 · Assessment</span>
    </div>
    <h2>01. Comprehensive Operational Audit &amp; Gap Scoping</h2>
    <p>Our senior operations engineers conduct an on-site walkthrough of your facilities, analyzing current vendor contracts, labor yield bottlenecks, chemical dilution stations, and SFA audit vulnerability points.</p>
  </div>

  <div class="card avoid-break">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <span class="tag-pill tag-pill-gold">Stage 02</span>
      <span class="tag-pill">Week 2 · Custom Blueprint</span>
    </div>
    <h2>02. Ecosystem Blueprint &amp; SLA Design</h2>
    <p>We configure your venue's bespoke operational blueprint: crew headcount, shift rosters, machinery allocations, chemical dosing protocols, and clear measurable Key Performance Indicators (KPIs) tied to a single consolidated invoice.</p>
  </div>

  <div class="card avoid-break">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <span class="tag-pill tag-pill-gold">Stage 03</span>
      <span class="tag-pill">Week 3 · Deployment</span>
    </div>
    <h2>03. Phased Deployment &amp; Supervisor Assignment</h2>
    <p>WSQ-trained crew deployment commences with a dedicated Lead Supervisor assigned to your venue. On-site shadow shifts ensure complete operational continuity without guest impact.</p>
  </div>

  <div class="card avoid-break">
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <span class="tag-pill tag-pill-gold">Stage 04</span>
      <span class="tag-pill">Continuous Optimization</span>
    </div>
    <h2>04. Live Digital Monitoring &amp; Monthly Review</h2>
    <p>Operations are tracked via live SaaS shift dashboards. Monthly executive reviews analyze attendance logs, hygiene scores, and margin efficiencies to ensure continuous operational yield enhancement.</p>
  </div>

  <!-- ===================================================================== -->
  <!-- 10. INDUSTRY SOLUTIONS & SECTOR BLUEPRINTS                            -->
  <!-- ===================================================================== -->
  <div class="page-break"></div>
  <div class="header-bar">
    <span class="logo-tag">OPHRON SYSTEMS</span>
    <span class="section-tag">§07 Industry Solutions</span>
  </div>

  <h1>Sector Blueprints: Engineered for Hospitality</h1>
  <p class="lead-p">
    Every hospitality sector faces distinct operational pressures. OPHRON tailors its service ecosystem to match each sector's specific cadence.
  </p>

  <div class="grid-2">
    <div class="card">
      <div class="tag-pill tag-pill-gold">Hotels &amp; Resorts</div>
      <h3>Luxury Hotels &amp; Serviced Residences</h3>
      <p>Seamless housekeeping room attendants, public area marble grinding, banquet stewarding surge crews, and façade rope access abseiling.</p>
    </div>
    <div class="card">
      <div class="tag-pill tag-pill-gold">Fine Dining &amp; F&amp;B</div>
      <h3>Fine Dining &amp; Commercial Kitchens</h3>
      <p>Nightly line degreasing, certified kitchen exhaust decoking, flight dishwashing utility, and 100% SFA Grade A audit documentation.</p>
    </div>
  </div>

  <div class="grid-2">
    <div class="card">
      <div class="tag-pill tag-pill-gold">Venues &amp; Ballrooms</div>
      <h3>Event Venues &amp; Nightlife Hubs</h3>
      <p>Rapid 60-minute banquet hall resets, crystal glassware polishing, VIP restroom attendants, and post-event heavy carpet extraction.</p>
    </div>
    <div class="card">
      <div class="tag-pill tag-pill-gold">Corporate &amp; Medical</div>
      <h3>Commercial Towers &amp; Medical Suites</h3>
      <p>Day porter executive floor sanitization, Grade A showroom maintenance, ISO cleanroom sterility, and autonomous robotic scrubbing.</p>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- 11. TECHNOLOGY & OPERATIONAL INTELLIGENCE                             -->
  <!-- ===================================================================== -->
  <div class="page-break"></div>
  <div class="header-bar">
    <span class="logo-tag">OPHRON SYSTEMS</span>
    <span class="section-tag">§08 Platform &amp; Technology</span>
  </div>

  <h1>Proprietary Technology &amp; AI Intelligence</h1>
  <p class="lead-p">
    OPHRON integrates enterprise hardware and software to give executive leadership complete real-time visibility over field operations.
  </p>

  <div class="card-navy avoid-break">
    <h2 style="color:#B7A38B;">OphronOS Operational Intelligence Suite</h2>
    <p>A unified digital platform connecting floor-level IoT sensors, digital attendance biometric clocks, and automated compliance logging into a single executive dashboard.</p>
  </div>

  <div class="grid-2">
    <div class="card">
      <h3>Live Shift &amp; Crew Roster Engine</h3>
      <p>Automated shift check-ins, biometric attendance logging, and real-time crew re-allocation during peak event surges to prevent understaffing.</p>
    </div>
    <div class="card">
      <h3>Digital SFA / NEA Audit Vault</h3>
      <p>Paperless compliance records tracking grease trap pumping, exhaust duct maintenance, biocide lot numbers, and chemical titration logs.</p>
    </div>
  </div>

  <div class="grid-2">
    <div class="card">
      <h3>IoT IAQ Environmental Telemetry</h3>
      <p>Continuous monitoring of indoor air quality, particulate matter (PM2.5), CO2 levels, and UV-C sterilization runtimes across guest corridors.</p>
    </div>
    <div class="card">
      <h3>Commercial Margin &amp; Cost Index</h3>
      <p>Automated monthly reports calculating vendor consolidation savings, labor yield productivity, and consumable supply optimization.</p>
    </div>
  </div>

  <!-- ===================================================================== -->
  <!-- 12. PROVEN FIELD PERFORMANCE & TESTIMONIALS                          -->
  <!-- ===================================================================== -->
  <div class="page-break"></div>
  <div class="header-bar">
    <span class="logo-tag">OPHRON SYSTEMS</span>
    <span class="section-tag">§09 Proven Field Performance</span>
  </div>

  <h1>Proven Field Performance &amp; Client Trust</h1>
  <p class="lead-p">
    OPHRON powers daily operations across Singapore’s most prestigious hospitality institutions, luxury hotel groups, and award-winning dining venues.
  </p>

  <div class="card avoid-break">
    <div style="color: #B7A38B; font-size: 11pt; margin-bottom: 2pt;">★★★★★ <span style="color:#032147; font-size:9pt; font-weight:700;">PAN PACIFIC HOTELS GROUP</span></div>
    <p><em>"Consolidating our stewarding and floor maintenance under OPHRON eliminated finger-pointing across our banquet operations. Our turnover time between major ballrooms improved by over 40%, and our hygiene audit scores remain spotless."</em></p>
    <div style="font-size: 8pt; font-family: 'JetBrains Mono', monospace; color: #7A6246;">— Director of Hospitality Operations · Luxury Hotel Partner</div>
  </div>

  <div class="card avoid-break">
    <div style="color: #B7A38B; font-size: 11pt; margin-bottom: 2pt;">★★★★★ <span style="color:#032147; font-size:9pt; font-weight:700;">YOTEL SINGAPORE</span></div>
    <p><em>"OPHRON’s trained housekeeping crews and dedicated supervisors have maintained exemplary standards. Their real-time digital shift logs provide full transparency that traditional contractors simply couldn't offer."</em></p>
    <div style="font-size: 8pt; font-family: 'JetBrains Mono', monospace; color: #7A6246;">— Executive Housekeeper · Orchard Road Location</div>
  </div>

  <div class="card avoid-break">
    <div style="color: #B7A38B; font-size: 11pt; margin-bottom: 2pt;">★★★★★ <span style="color:#032147; font-size:9pt; font-weight:700;">ATLAS BAR SINGAPORE</span></div>
    <p><em>"Precision, speed, and discretion are critical for our venue. OPHRON’s specialized marble care and nightly deep hygiene protocols keep our historic interior pristine without ever interrupting our guest service."</em></p>
    <div style="font-size: 8pt; font-family: 'JetBrains Mono', monospace; color: #7A6246;">— General Manager · Bugis Singapore</div>
  </div>

  <!-- ===================================================================== -->
  <!-- 13. EXECUTIVE LEADERSHIP & FOUNDER PROFILE                            -->
  <!-- ===================================================================== -->
  <div class="page-break"></div>
  <div class="header-bar">
    <span class="logo-tag">OPHRON SYSTEMS</span>
    <span class="section-tag">§10 Executive Leadership</span>
  </div>

  <h1>Leadership: 20+ Years of Operational Discipline</h1>
  <p class="lead-p">
    OPHRON was founded on a simple premise: Singapore’s hospitality industry deserves an operating partner that takes total responsibility for operational performance.
  </p>

  <div class="card-navy avoid-break" style="display: flex; gap: 16px; align-items: center;">
    ${isaacPortrait ? `<div style="flex: 0 0 100px;"><img src="${isaacPortrait}" style="width:100px; height:120px; object-fit:cover; border-radius:6px; border:1px solid #B7A38B;" alt="Isaac Vivian"></div>` : ''}
    <div>
      <div class="tag-pill tag-pill-gold" style="margin-bottom: 4px;">Founder &amp; Chief Executive Officer</div>
      <h2 style="margin: 2px 0 6px 0; color: #FFFFFF;">Isaac Vivian</h2>
      <p style="font-size: 8.8pt; line-height: 1.5; color: rgba(237, 229, 218, 0.9);">
        Over two decades leading large-scale hospitality operations, facilities maintenance, and commercial hygiene infrastructure across Singapore and regional markets. Isaac established OPHRON to solve the fundamental inefficiencies of fragmented vendor management through unified accountability, certified workforce training, and modern software-driven operational transparency.
      </p>
    </div>
  </div>

  <div class="card avoid-break">
    <h3>The Founder’s 3 Pillars of Service Delivery</h3>
    <ul>
      <li><strong>1. Supervisor-Signed Accountability:</strong> Every shift has a named supervisor responsible for quality. Work is never signed off blindly.</li>
      <li><strong>2. Respect for the Workforce:</strong> Proper training, Progressive Wage Model adherence, and career progression create dedicated, high-retention crews.</li>
      <li><strong>3. Radical Transparency:</strong> Real-time digital compliance logs and zero hidden fees build multi-year institutional trust with hotel and F&amp;B leadership.</li>
    </ul>
  </div>

  <!-- ===================================================================== -->
  <!-- 14. OPERATIONAL FAQ & OBJECTION HANDLING                              -->
  <!-- ===================================================================== -->
  <div class="page-break"></div>
  <div class="header-bar">
    <span class="logo-tag">OPHRON SYSTEMS</span>
    <span class="section-tag">§11 Frequently Asked Questions</span>
  </div>

  <h1>Frequently Asked Questions &amp; Policies</h1>

  <div class="card avoid-break">
    <h3>Q1: Can we consolidate multiple services under one single contract?</h3>
    <p><strong>Yes.</strong> Most OPHRON clients combine 2 to 5 service lines (e.g. kitchen stewarding, marble care, and high-rise façade cleaning) under a single consolidated SLA agreement with unified billing, one point of contact, and measurable cost savings.</p>
  </div>

  <div class="card avoid-break">
    <h3>Q2: Can OPHRON work alongside our existing suppliers?</h3>
    <p><strong>Yes.</strong> We frequently integrate into existing venue setups, taking over specific high-risk operational areas (such as kitchen degreasing or marble restoration) before gradually expanding into broader infrastructure management.</p>
  </div>

  <div class="card avoid-break">
    <h3>Q3: How quickly can OPHRON deploy trained crews to our venue?</h3>
    <p>Standard scheduled operational onboarding takes approximately <strong>7 to 14 days</strong> for comprehensive site scoping and crew briefing. For urgent emergency call-outs, our 24/7 hotline provides response within <strong>60 minutes</strong> across Singapore.</p>
  </div>

  <div class="card avoid-break">
    <h3>Q4: What certifications and regulatory licenses does OPHRON hold?</h3>
    <p>OPHRON is a <strong>licensed Cleaning Operator with the National Environment Agency (NEA)</strong>, certified under <strong>bizSAFE Level 3</strong> by the WSH Council, and deploys <strong>IRATA-certified</strong> technicians for high-rise rope access works.</p>
  </div>

  <!-- ===================================================================== -->
  <!-- 15. CORPORATE ENGAGEMENT & CONTACT                                    -->
  <!-- ===================================================================== -->
  <div class="page-break"></div>
  <div class="cover-page" style="min-height: 268mm; justify-content: space-between;">
    <div>
      <div class="cover-gold-bar"></div>
      <div class="cover-tagline-eyebrow">Initiate Your Operational Review</div>
      <div class="cover-title">Let’s elevate your venue’s<br><span>operational performance.</span></div>
      <div class="cover-subtitle">
        Contact Singapore’s hospitality operations team today to schedule an on-site operational assessment, review your vendor agreements, and receive a customized ecosystem blueprint.
      </div>

      <div class="cover-meta-grid" style="margin-top: 6mm;">
        <div class="cover-meta-item">
          <div class="cover-meta-label">Primary 24/7 Hotline</div>
          <div class="cover-meta-val">+65 9295 1155</div>
        </div>
        <div class="cover-meta-item">
          <div class="cover-meta-label">WhatsApp Business</div>
          <div class="cover-meta-val">+65 9295 1155 · +65 9646 6300</div>
        </div>
        <div class="cover-meta-item">
          <div class="cover-meta-label">Official Email</div>
          <div class="cover-meta-val">contact@ophronsystems.com</div>
        </div>
        <div class="cover-meta-item">
          <div class="cover-meta-label">Headquarters Address</div>
          <div class="cover-meta-val">26 Sin Ming Lane, #05-124 Midview City, Singapore 573971</div>
        </div>
        <div class="cover-meta-item">
          <div class="cover-meta-label">Web Platforms</div>
          <div class="cover-meta-val">ophronsystems.com · ophron.sg</div>
        </div>
        <div class="cover-meta-item">
          <div class="cover-meta-label">Response Guarantee</div>
          <div class="cover-meta-val">Within 24 Hours for Written Enquiries</div>
        </div>
      </div>
    </div>

    <div>
      <div class="card-navy" style="background: rgba(245,239,230,0.08); border-color: rgba(183,163,139,0.5); margin-bottom: 0;">
        <h3 style="color:#B7A38B; margin-top:0;">OPHRON Systems — One Partner. One Ecosystem. Better Operations.</h3>
        <p style="font-size: 8pt; margin-bottom:0; color: rgba(237,229,218,0.75);">
          © 2026 OPHRON Systems Pte. Ltd. All rights reserved. NEA Licensed Operator · bizSAFE Level 3 Certified. Printed and formatted for executive business presentations, procurement tenders, and enterprise client onboarding.
        </p>
      </div>
    </div>
  </div>

</body>
</html>`;

fs.writeFileSync(htmlPath, fullHtml, 'utf8');
console.log('HTML generated at:', htmlPath);

// Run Edge headless to print to PDF
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const cmd = `"${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${pdfPath}" --print-to-pdf-no-header "${htmlPath}"`;

try {
  console.log('Generating PDF via headless browser...');
  execSync(cmd, { stdio: 'inherit' });
  console.log('SUCCESS: Generated PDF at:', pdfPath);

  if (fs.existsSync(pdfPath)) {
    fs.copyFileSync(pdfPath, brainPdfPath);
    console.log('SUCCESS: Copied PDF to brain artifacts:', brainPdfPath);
  }
} catch (err) {
  console.error('Error generating PDF:', err);
}
