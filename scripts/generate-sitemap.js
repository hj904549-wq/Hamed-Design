// scripts/generate-sitemap.js
// همه‌ی فایل‌های html پروژه رو پیدا می‌کنه و sitemap.xml رو خودکار می‌سازه

const fs = require('fs');
const path = require('path');

const SITE_URL = (process.env.SITE_URL || 'https://example.com').replace(/\/$/, '');
const ROOT = process.cwd();

// پوشه‌هایی که نباید داخلشون دنبال html بگردیم
const IGNORE_DIRS = new Set(['node_modules', '.git', '.github', 'scripts']);

function findHtmlFiles(dir, base = '') {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (IGNORE_DIRS.has(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);
    const relPath = path.join(base, entry.name);

    if (entry.isDirectory()) {
      results = results.concat(findHtmlFiles(fullPath, relPath));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      results.push(relPath.replace(/\\/g, '/'));
    }
  }
  return results;
}

function buildUrlEntry(relPath) {
  // index.html رو به مسیر ریشه تبدیل می‌کنیم
  let urlPath = relPath === 'index.html' ? '' : relPath;
  if (urlPath.endsWith('/index.html')) {
    urlPath = urlPath.slice(0, -'index.html'.length);
  }
  const loc = `${SITE_URL}/${urlPath}`.replace(/\/+$/, urlPath === '' ? '' : '') || SITE_URL;

  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`;
}

const htmlFiles = findHtmlFiles(ROOT);

if (htmlFiles.length === 0) {
  console.log('هیچ فایل HTML پیدا نشد — sitemap ساخته نشد.');
  process.exit(0);
}

const urlEntries = htmlFiles.map(buildUrlEntry).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap, 'utf-8');
console.log(`sitemap.xml ساخته شد با ${htmlFiles.length} صفحه:`);
htmlFiles.forEach((f) => console.log('  -', f));
