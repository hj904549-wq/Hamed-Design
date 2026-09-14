// Blog list — Sanity CMS progressive enhancement
// Renders any published Sanity articles at the top of #blogGrid,
// keeping the static fallback cards below (hybrid content source).
// Depends on scripts/sanity.js (loaded first) for sanityQuery/getSanityImageUrl/formatSanityDate.

const SANITY_CATEGORY_FILTERS = {
  uiux: "UI/UX",
  ui: "UI/UX",
  ux: "UI/UX",
  design: "UI/UX",
  development: "توسعه",
  dev: "توسعه",
  frontend: "توسعه",
  "front-end": "توسعه",
  js: "توسعه",
  "java-script": "توسعه",
  optimization: "بهینه‌سازی",
  performance: "بهینه‌سازی",
  speed: "بهینه‌سازی",
  wordpress: "وردپرس",
  seo: "سئو",
  css: "توسعه",
  "ui-ux": "UI/UX"
};

function createArticleCard(article) {
  const imageUrl = getSanityImageUrl(article.coverImage);
  const category = SANITY_CATEGORY_FILTERS[article.category] || article.category || "عمومی";
  const date = formatSanityDate(article.publishedAt);

  return `
    <article class="blog-page-card" data-category="${article.category || ''}" data-aos="fade-up">

      <div class="blog-image">
        ${
          imageUrl
            ? `<img src="${imageUrl}" alt="${article.title}" loading="lazy" />`
            : `<div class="blog-image-placeholder"></div>`
        }
        <span class="blog-category">${category}</span>
      </div>

      <div class="blog-content">
        <div class="blog-meta">
          ${date ? `<span><i class="ri-calendar-line"></i> ${date}</span>` : ""}
          <span><i class="ri-time-line"></i> ${article.readingTime || "۵"} دقیقه</span>
        </div>
        <h3>
          <a href="blog-post.html?slug=${encodeURIComponent(article.slug.current)}">${article.title}</a>
        </h3>
        <p>${article.excerpt || ""}</p>
        <a href="blog-post.html?slug=${encodeURIComponent(article.slug.current)}" class="read-more">
          ادامه مطلب <i class="ri-arrow-left-line"></i>
        </a>
      </div>

    </article>
  `;
}

async function loadArticles() {
  try {
    const articles = await sanityQuery(`
      *[_type=="article" && isPublished == true]
      | order(publishedAt desc)

      {
        title,
        excerpt,
        coverImage,
        category,
        slug,
        publishedAt,
        readingTime
      }
    `);

    const container = document.getElementById("blogGrid");

    if (!container) {
      console.error("blogGrid not found");
      return;
    }

    if (articles && articles.length > 0) {
      const sanityHtml = articles.map(createArticleCard).join("");
      // Prepend dynamic articles, keep static fallback cards below.
      container.innerHTML = sanityHtml + container.innerHTML;
    }
  } catch (error) {
    // Sanity failure is non-fatal: static fallback articles stay visible.
    console.error("Article Error:", error);
  }
}

loadArticles();