// scripts/check-meta-tags.js
// بررسی می‌کنه هر صفحه HTML یه <title> و <meta name="description"> معتبر داشته باشه
// اگه چیزی مشکل داشته باشه، هشدار می‌ده (ولی بیلد رو فیل نمی‌کنه — می‌تونی سخت‌گیرترش کنی)

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
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

const htmlFiles = findHtmlFiles(ROOT);
let issueCount = 0;

for (const file of htmlFiles) {
  const content = fs.readFileSync(path.join(ROOT, file), 'utf-8');
  const issues = [];

  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  if (!titleMatch || titleMatch[1].trim().length === 0) {
    issues.push('❌ تگ <title> وجود نداره یا خالیه');
  } else if (titleMatch[1].trim().length > 60) {
    issues.push(`⚠️ title خیلی طولانیه (${titleMatch[1].trim().length} کاراکتر، بهتره زیر ۶۰ باشه)`);
  }

  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  if (!descMatch || descMatch[1].trim().length === 0) {
    issues.push('❌ تگ <meta name="description"> وجود نداره یا خالیه');
  } else if (descMatch[1].trim().length > 160) {
    issues.push(`⚠️ description خیلی طولانیه (${descMatch[1].trim().length} کاراکتر، بهتره زیر ۱۶۰ باشه)`);
  }

  const h1Matches = content.match(/<h1[\s>]/gi) || [];
  if (h1Matches.length === 0) {
    issues.push('⚠️ هیچ <h1> توی صفحه نیست');
  } else if (h1Matches.length > 1) {
    issues.push(`⚠️ ${h1Matches.length} تا <h1> توی صفحه هست (بهتره فقط یکی باشه)`);
  }

  if (issues.length > 0) {
    console.log(`\n📄 ${file}`);
    issues.forEach((i) => console.log('   ' + i));
    issueCount += issues.length;
  }
}

console.log(`\n----------------------------------------`);
console.log(`بررسی ${htmlFiles.length} صفحه تمام شد — ${issueCount} مورد نیاز به توجه.`);

// اگه می‌خوای در صورت وجود مشکل، بیلد فیل بشه، خط زیر رو از کامنت درار:
// if (issueCount > 0) process.exit(1);
