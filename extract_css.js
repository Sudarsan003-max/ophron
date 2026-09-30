import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distHtmlPath = path.join(__dirname, 'dist', 'index.html');
const targetCssPath = path.join(__dirname, 'ophron-theme', 'assets', 'css', 'ophron-style.css');

if (fs.existsSync(distHtmlPath)) {
  const html = fs.readFileSync(distHtmlPath, 'utf8');
  const styleMatch = html.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  if (styleMatch && styleMatch[1]) {
    fs.writeFileSync(targetCssPath, styleMatch[1], 'utf8');
    console.log('Successfully extracted compiled CSS to:', targetCssPath, 'Size:', (styleMatch[1].length / 1024).toFixed(1) + ' KB');
  } else {
    console.log('No <style> tag found in dist/index.html');
  }
} else {
  console.log('dist/index.html does not exist. Run npm run build first.');
}
