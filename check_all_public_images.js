import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

function getFileHash(filePath) {
  try {
    const fileBuffer = fs.readFileSync(filePath);
    const hashSum = crypto.createHash('md5');
    hashSum.update(fileBuffer);
    return hashSum.digest('hex');
  } catch (e) {
    return null;
  }
}

function getAllFiles(dir) {
  let files = [];
  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    if (fs.statSync(full).isDirectory()) {
      files = files.concat(getAllFiles(full));
    } else if (item.match(/\.(jpg|jpeg|png|webp|svg)$/i)) {
      files.push(full);
    }
  }
  return files;
}

const allImgFiles = getAllFiles('public/images');
const hashMap = {};

for (const f of allImgFiles) {
  const hash = getFileHash(f);
  if (hash) {
    if (!hashMap[hash]) hashMap[hash] = [];
    hashMap[hash].push(path.relative(process.cwd(), f));
  }
}

console.log(`Total image files in public/images: ${allImgFiles.length}`);
console.log(`Unique contents by MD5: ${Object.keys(hashMap).length}`);

const duplicateGroups = Object.entries(hashMap).filter(([_, list]) => list.length > 1);
console.log(`\nDuplicate image groups in entire public/images (${duplicateGroups.length}):`);
duplicateGroups.forEach(([hash, list], idx) => {
  console.log(`\nGroup ${idx + 1} [${hash.slice(0, 8)}]:`);
  list.forEach(p => console.log(`   ${p}`));
});
