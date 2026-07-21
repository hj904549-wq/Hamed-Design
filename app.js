document.addEventListener('DOMContentLoaded', function() {
    const pageTitle = document.querySelector('title');
    if (pageTitle) {
        pageTitle.textContent = 'Optimized Page Title | Your Site Name';
    }

    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'This is an optimized description for better SEO performance.';
    document.head.appendChild(metaDescription);

    const mainSection = document.querySelector('main');
    if (mainSection) {
        const accessibilityMessage = document.createElement('div');
        accessibilityMessage.role = 'alert';
        accessibilityMessage.textContent = 'Welcome to our optimized website!';
        mainSection.insertBefore(accessibilityMessage, mainSection.firstChild);
    }

    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.hasAttribute('alt')) {
            img.setAttribute('alt', 'Descriptive text for SEO and accessibility');
        }
    });

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('focus', function() {
            link.style.outline = '2px solid blue';
        });
        link.addEventListener('blur', function() {
            link.style.outline = 'none';
        });
    });

    const dynamicContent = () => {
        const container = document.getElementById('dynamic-content');
        if (container) {
            const newElement = document.createElement('article');
            newElement.setAttribute('role', 'article');
            newElement.innerHTML = '<h2>Dynamic Content Title</h2><p>This content is dynamically generated for better user engagement.</p>';
            container.appendChild(newElement);
        }
    };

    dynamicContent();
});