// Portfolio — Sanity CMS rendering
// Fills #portfolio-container with Sanity projects.
// Depends on scripts/sanity.js (loaded first).
// Note: renderSanityPost (app.js) still has its own sanityImageUrl — app.js doesn't load the shared one.

function createProjectCard(project) {
  const imageUrl = getSanityImageUrl(project.coverImage);

  return `
    <div class="portfolio-page-card" data-aos="flip-up">

      <div class="card-image">
        <img
          src="${imageUrl}"
          alt="${project.title}"
          loading="lazy"
        />

        <div class="project-status">
          <span class="dot"></span>
          <span>آنلاین</span>
        </div>
      </div>

      <div class="tech-stack">
        ${
          project.technologies?.map(
            tech => `<span>${tech}</span>`
          ).join("")
        }
      </div>

      <h3>${project.title}</h3>

      <p>
        ${project.shortDescription}
      </p>

      <div class="action-buttons">
        ${
          project.liveUrl
          ?
          `<a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn-primary">
             <i class="ri-external-link-line"></i>
             مشاهده
           </a>`
          :
          ""
        }

        ${
          project.githubUrl
          ?
          `<a href="${project.githubUrl}" target="_blank" rel="noopener" class="btn-ghost">
             <i class="ri-github-line"></i>
             کد
           </a>`
          :
          ""
        }

      </div>

    </div>
  `;
}

async function loadProjects() {
  try {
    const projects = await sanityQuery(`
      *[_type == "project"]
      | order(order asc)

      {
        title,
        shortDescription,
        coverImage,
        technologies,
        liveUrl,
        githubUrl
      }
    `);

    const container = document.getElementById("portfolio-container");

    if (!container) {
      console.error("portfolio-container not found");
      return;
    }

    if (projects && projects.length > 0) {
      container.innerHTML = projects.map(createProjectCard).join("");
    } else {
      container.innerHTML = `
        <div class="portfolio-empty">
          <i class="ri-folder-open-line"></i>
          <p>هنوز پروژه‌ای اضافه نشده است.</p>
        </div>
      `;
    }
  } catch (error) {
    console.error("Sanity Error:", error);
  }
}

loadProjects();