// scripts/build/generate-feed.js
// Produces a real RSS 2.0 feed (feed.xml) from the site's article metadata.
// Run: node scripts/build/generate-feed.js   (also runs weekly in CI)

const fs = require('fs');
const path = require('path');

const SITE_URL = (process.env.SITE_URL || 'https://hj904549-wq.github.io/Hamed-Design/')
  .replace(/\/$/, '');

// Mirrors postsData in app.js (id -> metadata), but with machine-readable ISO dates.
const POSTS = [
  {
    id: 1,
    title: 'چگونه یک طراحی UI/UX عالی داشته باشیم؟',
    category: 'UI/UX',
    excerpt: 'در این مقاله به اصول کلیدی طراحی رابط کاربری و تجربه کاربری می‌پردازیم و نکات عملی برای خلق محصولات دیجیتال موفق را بررسی می‌کنیم.',
    image: `${SITE_URL}/img/blog-1.jpg`,
    publishedAt: '2025-01-15T00:00:00Z'
  },
  {
    id: 2,
    title: 'بهترین فریم‌ورک‌های جاوااسکریپت برای ۲۰۲۵',
    category: 'Development',
    excerpt: 'بررسی مقایسه‌ای فریم‌ورک‌های جاوااسکریپت و راهنمای انتخاب بهترین ابزار برای پروژه‌هایتان.',
    image: `${SITE_URL}/img/blog-2.webp`,
    publishedAt: '2025-01-08T00:00:00Z'
  },
  {
    id: 3,
    title: '۱۰ تکنیک طلایی برای افزایش سرعت وب‌سایت',
    category: 'Optimization',
    excerpt: 'با به‌کارگیری تکنیک‌های بهینه‌سازی، سرعت وب‌سایت خود را چند برابر کنید و سئو بهتری بگیرید.',
    image: `${SITE_URL}/img/blog-3.jpg`,
    publishedAt: '2024-12-30T00:00:00Z'
  },
  {
    id: 4,
    title: 'وردپرس یا React؟ کدام را برای پروژه خود انتخاب کنیم؟',
    category: 'WordPress',
    excerpt: 'در این مقاله به مقایسه سایت‌های وردپرسی و برنامه‌های React می‌پردازیم تا بهترین انتخاب را داشته باشید.',
    image: `${SITE_URL}/img/blog-4.jpg`,
    publishedAt: '2024-12-25T00:00:00Z'
  },
  {
    id: 5,
    title: 'سئو فنی برای توسعه‌دهندگان فرانت‌اند',
    category: 'SEO',
    excerpt: 'مفاهیم سئو فنی، Core Web Vitals و بهینه‌سازی خزیدن موتورهای جستجو را با مثال‌های عملی مرور می‌کنیم.',
    image: `${SITE_URL}/img/blog-5.jpg`,
    publishedAt: '2024-12-18T00:00:00Z'
  },
  {
    id: 6,
    title: 'انیمیشن‌های تعاملی با CSS و JavaScript',
    category: 'UI/UX',
    excerpt: 'با مثال‌های کاربردی از CSS و JavaScript، انیمیشن‌های جذاب و تعاملی برای وب‌سایت خود بسازید.',
    image: `${SITE_URL}/img/blog-6.jpg`,
    publishedAt: '2024-12-10T00:00:00Z'
  }
].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

function toRfc822(dateStr) {
  const d = new Date(dateStr);
  return d.toUTCString();
}

const items = POSTS.map((post) => {
  const postUrl = `${SITE_URL}/blog-post.html?id=${post.id}`;
  return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <category>${escapeXml(post.category)}</category>
      <pubDate>${toRfc822(post.publishedAt)}</pubDate>
      <enclosure url="${post.image}" length="0" type="image/jpeg" />
    </item>`;
}).join('\n');

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>حامد | وبلاگ طراحی و توسعه وب</title>
    <link>${SITE_URL}/blog.html</link>
    <description>مقالات تخصصی طراحی UI/UX، توسعه فرانت‌اند، وردپرس و بهینه‌سازی وب</description>
    <language>fa</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${SITE_URL}/img/Profile-image.jpg</url>
      <title>حامد | وبلاگ</title>
      <link>${SITE_URL}/blog.html</link>
    </image>
${items}
  </channel>
</rss>
`;

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

fs.writeFileSync(path.join(process.cwd(), 'feed.xml'), feed, 'utf-8');
console.log(`feed.xml written with ${POSTS.length} items`);