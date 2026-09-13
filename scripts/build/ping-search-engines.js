// scripts/ping-search-engines.js
// به گوگل و بینگ اطلاع می‌ده که sitemap آپدیت شده (پروتکل قدیمی ولی هنوز کار می‌کنه)

const https = require('https');

const SITE_URL = (process.env.SITE_URL || 'https://example.com').replace(/\/$/, '');
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

const engines = [
  {
    name: 'Google',
    url: `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
  },
  {
    name: 'Bing',
    url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
  },
];

function ping(engine) {
  return new Promise((resolve) => {
    https
      .get(engine.url, (res) => {
        console.log(`${engine.name}: وضعیت ${res.statusCode}`);
        resolve();
      })
      .on('error', (err) => {
        console.log(`${engine.name}: خطا — ${err.message}`);
        resolve();
      });
  });
}

(async () => {
  console.log(`اطلاع‌رسانی sitemap: ${SITEMAP_URL}\n`);
  for (const engine of engines) {
    await ping(engine);
  }
})();
