const fs = require('fs');
const path = require('path');
const dist = path.join(__dirname, '..', 'dist');

function getHtmlFiles(dir) {
  const files = [];
  for (const f of fs.readdirSync(dir, {withFileTypes:true})) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) files.push(...getHtmlFiles(full));
    else if (f.name.endsWith('.html')) files.push(full);
  }
  return files;
}
const htmlFiles = getHtmlFiles(dist);

// Collect all internal hrefs
const linkRe = /href="\/([^"]*?)"/g;
const allLinks = new Set();
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  let m;
  while ((m = linkRe.exec(html)) !== null) {
    const raw = m[1].split('?')[0].split('#')[0].replace(/\/$/, '');
    if (raw && !raw.startsWith('api') && !raw.includes('.')) allLinks.add('/' + raw);
  }
}

// Build a set of page paths (without .html)
const pagePaths = new Set();
for (const file of htmlFiles) {
  const rel = path.relative(dist, file).replace(/\\/g,'/');
  // /pokemon-emerald.html -> /pokemon-emerald
  // /ar/pokemon-emerald.html -> /ar/pokemon-emerald
  // /index.html -> /
  const pagePath = '/' + rel.replace(/\.html$/, '').replace(/\/index$/, '');
  pagePaths.add(pagePath);
}

// Find orphans: pages that exist but no other page links to them
const orphans = [];
for (const page of pagePaths) {
  if (page === '/' || page === '/404') continue;
  if (!allLinks.has(page)) {
    orphans.push(page);
  }
}

console.log('Total HTML files:', htmlFiles.length);
console.log('Total pages (derived):', pagePaths.size);
console.log('Total unique internal links:', allLinks.size);
console.log('Orphan pages:', orphans.length);
if (orphans.length > 0) {
  console.log('Orphan sample (first 20):');
  orphans.slice(0,20).forEach(o => console.log('  ', o));
}
