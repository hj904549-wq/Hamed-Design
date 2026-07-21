function updateMeta(title, description) {
    if (document.title !== title) {
        document.title = title;
    }

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute("content", description);
    } else {
        const newMetaDescription = document.createElement('meta');
        newMetaDescription.name = 'description';
        newMetaDescription.content = description;
        document.head.appendChild(newMetaDescription);
    }
}

function createArticleElement(title, content) {
    const article = document.createElement('article');
    const articleTitle = document.createElement('h1');
    articleTitle.textContent = title;
    article.appendChild(articleTitle);

    const articleContent = document.createElement('div');
    articleContent.innerHTML = content;
    article.appendChild(articleContent);
    return article;
}

function loadArticles(articles) {
    const container = document.getElementById('article-container');
    articles.forEach(article => {
        const articleElement = createArticleElement(article.title, article.content);
        container.appendChild(articleElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const articles = [
        { title: 'Article 1', content: '<p>This is the content of article 1.</p>' },
        { title: 'Article 2', content: '<p>This is the content of article 2.</p>' }
    ];

    updateMeta('Dynamic Page Title', 'Dynamic page description for SEO optimization.');
    loadArticles(articles);
});