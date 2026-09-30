import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '.');

const themeDir = path.join(rootDir, 'ophron-theme');

// Ensure directories exist
const dirs = [
  themeDir,
  path.join(themeDir, 'assets'),
  path.join(themeDir, 'assets', 'css'),
  path.join(themeDir, 'assets', 'js'),
  path.join(themeDir, 'assets', 'images'),
  path.join(themeDir, 'assets', 'images', 'brand'),
  path.join(themeDir, 'inc'),
  path.join(themeDir, 'template-parts'),
];

dirs.forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

console.log('Created WordPress theme directory structure at:', themeDir);

// Copy images from public/images
const publicImagesDir = path.join(rootDir, 'public', 'images');
const targetImagesDir = path.join(themeDir, 'assets', 'images');

function copyFolderSync(from, to) {
  if (!fs.existsSync(from)) return;
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from).forEach(element => {
    const stat = fs.lstatSync(path.join(from, element));
    if (stat.isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else if (stat.isDirectory()) {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}

copyFolderSync(publicImagesDir, targetImagesDir);

// Also copy images from src/components if any (portraits, logos)
const srcComponents = path.join(rootDir, 'src', 'components');
fs.readdirSync(srcComponents).forEach(file => {
  if (/\.(png|jpg|jpeg|svg|webp)$/i.test(file)) {
    fs.copyFileSync(path.join(srcComponents, file), path.join(targetImagesDir, file));
  }
});

console.log('Assets and images synchronized.');
