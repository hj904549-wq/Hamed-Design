console.log("portfolio-sanity loaded");


function getSanityImageUrl(image) {
  if (!image?.asset?._ref) return "";

  const ref = image.asset._ref;

  const parts = ref.split("-");

  const id = parts[1];
  const dimensions = parts[2];
  const format = parts[3];

  return `https://cdn.sanity.io/images/h4g60wzb/production/${id}-${dimensions}.${format}`;
}


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
          `<a href="${project.liveUrl}" target="_blank" class="btn-primary">
             <i class="ri-external-link-line"></i>
             مشاهده
           </a>`
          :
          ""
        }


        ${
          project.githubUrl
          ?
          `<a href="${project.githubUrl}" target="_blank" class="btn-ghost">
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


    const container =
      document.getElementById("portfolio-container");


    container.innerHTML =
      projects
      .map(createProjectCard)
      .join("");


    console.log("Projects rendered:", projects);


  } catch(error) {

    console.error("Sanity Error:", error);

  }

}


loadProjects();