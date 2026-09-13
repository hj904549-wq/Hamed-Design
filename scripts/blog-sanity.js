console.log("blog-sanity loaded");


function getSanityImageUrl(image){

  if(!image?.asset?._ref) return "";

  const ref = image.asset._ref;

  const parts = ref.split("-");

  const id = parts[1];
  const dimensions = parts[2];
  const format = parts[3];

  return `https://cdn.sanity.io/images/h4g60wzb/production/${id}-${dimensions}.${format}`;
}



function createArticleCard(article){

  const imageUrl = getSanityImageUrl(article.coverImage);


  return `

    <article class="blog-card">

      <div class="blog-image">
        <img 
          src="${imageUrl}"
          alt="${article.title}"
          loading="lazy"
        >
      </div>


      <div class="blog-content">

        <span class="blog-category">
          ${article.category || "عمومی"}
        </span>


        <h3>
          ${article.title}
        </h3>


        <p>
          ${article.excerpt || ""}
        </p>


        <a href="blog-post.html?slug=${article.slug.current}">
          مطالعه مقاله
        </a>

      </div>

    </article>

  `;
}



async function loadArticles(){

  try{

    const articles = await sanityQuery(`

      *[_type=="article" && isPublished == true]
      | order(publishedAt desc)

      {
        title,
        excerpt,
        coverImage,
        category,
        slug,
        publishedAt
      }

    `);


    console.log("Articles:", articles);


    const container = document.getElementById("blogGrid");


    if(!container) {
      console.error("blogGrid not found");
      return;
    }


    container.innerHTML = articles
      .map(createArticleCard)
      .join("");


  }


  catch(error){

    console.error("Article Error:", error);

  }

}


loadArticles();