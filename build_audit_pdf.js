import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { marked } from 'marked';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mdPath = path.join(__dirname, 'ophron-audit-report.md');
const htmlPath = path.join(__dirname, 'ophron-audit-report.html');
const pdfPath = path.join(__dirname, 'ophron-audit-report.pdf');
const brainPdfPath = 'C:\\Users\\SUDARSANA NARAYANAN\\.gemini\\antigravity-ide\\brain\\301e133f-c16f-4f27-9290-369e140124f5\\ophron-audit-report.pdf';

const mdContent = fs.readFileSync(mdPath, 'utf8');

// Parse markdown to HTML
const bodyHtml = marked.parse(mdContent);

const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>OPHRON — Website Security & Quality Audit Report</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

    @page {
      size: A4;
      margin: 18mm 16mm 18mm 16mm;
    }

    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 10pt;
      line-height: 1.6;
      color: #032147;
      background: #FFFFFF;
      margin: 0;
      padding: 0;
    }

    /* Cover Page */
    .cover-page {
      background: #032147;
      color: #EDE5DA;
      padding: 40mm 20mm 25mm 20mm;
      min-height: 260mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      page-break-after: always;
      border-radius: 4px;
      margin-bottom: 20mm;
    }

    .cover-emblem {
      font-size: 11pt;
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.25em;
      color: #B7A38B;
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 12mm;
    }

    .cover-title {
      font-size: 28pt;
      font-weight: 800;
      line-height: 1.15;
      color: #FFFFFF;
      margin-bottom: 6mm;
      letter-spacing: -0.02em;
    }

    .cover-subtitle {
      font-size: 14pt;
      font-weight: 400;
      color: #B7A38B;
      margin-bottom: 16mm;
      line-height: 1.4;
    }

    .cover-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10mm;
    }

    .cover-table td {
      padding: 6pt 0;
      border-bottom: 0.5pt solid rgba(183, 163, 139, 0.25);
      font-size: 9.5pt;
      color: rgba(237, 229, 218, 0.85);
    }

    .cover-table td:first-child {
      font-weight: 700;
      color: #B7A38B;
      width: 40%;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 8.5pt;
      font-family: 'JetBrains Mono', monospace;
    }

    .cover-badge {
      display: inline-block;
      background: rgba(192, 57, 43, 0.2);
      border: 1.5pt solid #C0392B;
      color: #E74C3C;
      font-size: 8.5pt;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      padding: 5pt 12pt;
      margin-top: 14mm;
      font-family: 'JetBrains Mono', monospace;
      border-radius: 4px;
    }

    /* Headings */
    h1 {
      font-size: 20pt;
      font-weight: 800;
      color: #032147;
      border-bottom: 2pt solid #B7A38B;
      padding-bottom: 6pt;
      margin-top: 12mm;
      margin-bottom: 6mm;
      letter-spacing: -0.02em;
      page-break-after: avoid;
    }

    h2 {
      font-size: 14pt;
      font-weight: 700;
      color: #032147;
      border-left: 3.5pt solid #B7A38B;
      padding-left: 8pt;
      margin-top: 10mm;
      margin-bottom: 4mm;
      page-break-after: avoid;
    }

    h3 {
      font-size: 11.5pt;
      font-weight: 700;
      color: #032147;
      margin-top: 7mm;
      margin-bottom: 3mm;
      page-break-after: avoid;
    }

    p {
      margin: 0 0 6pt 0;
      color: #1a2e4c;
    }

    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 5mm 0;
      font-size: 9pt;
      page-break-inside: avoid;
      background: #FFFFFF;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }

    thead tr {
      background: #032147;
      color: #EDE5DA;
    }

    thead th {
      padding: 7pt 9pt;
      font-weight: 700;
      text-align: left;
      font-size: 8.5pt;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      border-bottom: 2pt solid #B7A38B;
    }

    tbody tr {
      border-bottom: 0.5pt solid rgba(3, 33, 71, 0.12);
    }

    tbody tr:nth-child(even) {
      background: #F8F6F2;
    }

    tbody td {
      padding: 6pt 9pt;
      vertical-align: top;
      line-height: 1.5;
    }

    /* Code & Pre */
    pre {
      background: #F4F1EC;
      border: 0.5pt solid rgba(3, 33, 71, 0.15);
      border-left: 3pt solid #B7A38B;
      padding: 8pt 10pt;
      font-family: 'JetBrains Mono', monospace;
      font-size: 8pt;
      line-height: 1.5;
      overflow-x: auto;
      border-radius: 4px;
      margin: 4mm 0;
      page-break-inside: avoid;
      color: #032147;
    }

    code {
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5pt;
      background: #EDE5DA;
      color: #032147;
      padding: 1pt 4pt;
      border-radius: 3px;
      font-weight: 500;
    }

    pre code {
      background: none;
      padding: 0;
    }

    /* Blockquotes */
    blockquote {
      border-left: 3pt solid #B7A38B;
      margin: 4mm 0;
      padding: 6pt 10pt;
      background: #F8F5F0;
      font-size: 9.5pt;
      color: #032147;
      border-radius: 0 4px 4px 0;
    }

    ul, ol {
      padding-left: 18pt;
      margin: 3mm 0 6mm 0;
    }

    li {
      margin-bottom: 3pt;
    }

    hr {
      border: none;
      border-top: 1pt solid #EDE5DA;
      margin: 8mm 0;
    }

    strong {
      color: #032147;
      font-weight: 700;
    }
  </style>
</head>
<body>

  <!-- Cover Page -->
  <div class="cover-page">
    <div>
      <div class="cover-emblem">OPHRON · Operational Infrastructure Platform</div>
      <div class="cover-title">Website Security &amp; Quality<br>Post-Remediation Re-Audit Report</div>
      <div class="cover-subtitle">Dual-Track Assessment: Blue Team Defense + Red Team Adversarial Simulation</div>

      <table class="cover-table">
        <tr><td>Target Asset</td><td>OPHRON Source Codebase (React 19 / Vite 7 / Tailwind)</td></tr>
        <tr><td>Report Version</td><td>2.0 — Post-Remediation Re-Audit Release</td></tr>
        <tr><td>Classification</td><td>CONFIDENTIAL — EXECUTIVE AUDIT RECORD</td></tr>
        <tr><td>Audit Date</td><td>September 2026</td></tr>
        <tr><td>Findings Status</td><td>18 Total Analyzed · 18 Remediated (0 Open Issues / 0 Vulnerabilities)</td></tr>
        <tr><td>Quality Gates</td><td>TypeScript Clean (0 errors) · Production Build Clean</td></tr>
        <tr><td>Platform URL</td><td>ophronsystems.com</td></tr>
        <tr><td>Lead Auditor</td><td>Antigravity Senior Security &amp; QA Lead Engine</td></tr>
      </table>
    </div>

    <div>
      <div class="cover-badge" style="background: rgba(39, 174, 96, 0.15); border-color: #27AE60; color: #2ECC71;">Status: 100% Remediated — 0 Active Vulnerabilities</div>
    </div>
  </div>

  <!-- Report Content -->
  <div class="report-content">
    ${bodyHtml}
  </div>

</body>
</html>`;

fs.writeFileSync(htmlPath, fullHtml, 'utf8');
console.log('HTML generated at:', htmlPath);

// Run Edge headless to print to PDF
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const cmd = `"${edgePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${pdfPath}" --print-to-pdf-no-header "${htmlPath}"`;

try {
  execSync(cmd, { stdio: 'inherit' });
  console.log('SUCCESS: Generated PDF at:', pdfPath);

  // Copy to brain artifacts
  fs.copyFileSync(pdfPath, brainPdfPath);
  console.log('SUCCESS: Copied PDF to brain artifacts:', brainPdfPath);
} catch (err) {
  console.error('Error generating PDF:', err);
}
