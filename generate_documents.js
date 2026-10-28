const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, 'Project_Documents');

// Helper to create directory
function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// Word-compatible HTML Document wrapper
function createWordDoc(title, bodyContent) {
  return `<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset='utf-8'>
<title>${title}</title>
<style>
  body { font-family: 'Calibri', 'Arial', sans-serif; font-size: 11pt; line-height: 1.5; color: #111111; }
  h1 { font-size: 20pt; color: #e10600; border-bottom: 2px solid #e10600; padding-bottom: 6px; margin-top: 18pt; margin-bottom: 8pt; font-family: 'Arial', sans-serif; }
  h2 { font-size: 14pt; color: #8b0000; border-bottom: 1px solid #cccccc; padding-bottom: 4px; margin-top: 14pt; margin-bottom: 6pt; }
  h3 { font-size: 12pt; color: #111111; margin-top: 10pt; margin-bottom: 4pt; }
  table { border-collapse: collapse; width: 100%; margin-top: 10pt; margin-bottom: 14pt; font-size: 10pt; }
  th { background-color: #e10600; color: #ffffff; font-weight: bold; padding: 8px 10px; border: 1px solid #b30000; text-align: left; }
  td { border: 1px solid #cccccc; padding: 7px 10px; vertical-align: top; }
  tr:nth-child(even) { background-color: #f9f9f9; }
  .header-card { background-color: #f4f4f4; border-left: 5px solid #e10600; padding: 12px 16px; margin-bottom: 18pt; }
  .header-card table { margin: 0; }
  .header-card td { border: none; padding: 4px 8px; font-size: 10pt; background: transparent; }
  .badge { background-color: #e10600; color: white; padding: 2px 6px; font-size: 9pt; font-weight: bold; border-radius: 3px; }
  ul, ol { margin-top: 4pt; margin-bottom: 10pt; padding-left: 20pt; }
  li { margin-bottom: 4pt; }
  p { margin-top: 0; margin-bottom: 8pt; }
  .footer-note { font-size: 9pt; color: #666666; margin-top: 24pt; border-top: 1px solid #dddddd; padding-top: 8pt; text-align: center; }
</style>
</head>
<body>
${bodyContent}
<div class='footer-note'>
  Formula 1 Race Intelligence &bull; Project Author: Tanisha Patel &bull; Confidential & Academic Project Deliverable
</div>
</body>
</html>`;
}

function saveDoc(folder, filename, title, mdContent, htmlContent) {
  const dirPath = path.join(BASE_DIR, folder);
  ensureDir(dirPath);

  // Write Markdown file
  fs.writeFileSync(path.join(dirPath, `${filename}.md`), mdContent, 'utf8');

  // Write Word-compatible HTML file
  fs.writeFileSync(path.join(dirPath, `${filename}.doc`), createWordDoc(title, htmlContent), 'utf8');
  console.log(`Generated: ${folder}/${filename}`);
}

// Run generators
require('./generate_phase1_3.js');
require('./generate_phase4_6.js');
require('./generate_phase7_8.js');

console.log('All documents generated successfully!');
