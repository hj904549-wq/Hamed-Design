// =========================================
    // 1. دیکشنری ترجمه
    // =========================================
    const translations = {
        en: {
            // Navigation
            "nav-home": "Home",
            "nav-about": "About",
            "nav-skills": "Skills",
            "nav-portfolio": "Portfolio",
            "nav-education": "Education",
            "nav-contact": "Contact",
            
            // Status
            "status": "Available for work",
            
            // Hero
            "hero-greeting": "Hi, I'm",
            "hero-title": "I'm a UI/UX Designer",
            "hero-desc": "I create beautiful, responsive web experiences using modern technologies.",
            "hero-btn-work": "View My Work",
            "hero-btn-talk": "Let's Talk",
            
            // About
            "about-title-highlight": "About",
            "about-title": "Me",
            "about-subtitle": "Designer & Developer with a passion for clean, human-centered interfaces",
            "about-stat-exp": "Years Experience",
            "about-stat-projects": "Projects Done",
            "about-stat-clients": "Happy Clients",
            "about-badge": "Who I Am",
            "about-heading": "UI/UX Designer & Front-End Developer",
            "about-p1": "I'm Hamed, a creative UI/UX designer and front-end developer based in Iran. With over 3 years of experience, I specialize in crafting beautiful, responsive, and user-friendly digital experiences.",
            "about-p2": "From concept to pixel-perfect implementation, I combine design thinking with modern web technologies to build products that people love to use.",
            "about-feature-1": "UI/UX Design",
            "about-feature-2": "Front-End Dev",
            "about-feature-3": "Responsive Design",
            "about-feature-4": "React / Vue",
            "about-btn-talk": "Let's Talk",
            "about-btn-resume": "My Resume",
            
            // Skills
            "skills-title": "My Skills",
            "skills-desc": "I'm a passionate web developer with over 3 years of experience creating modern, responsive and pixel-perfect UI experiences.",
            "skill-uiux": "UI/UX Design",
            
            // Portfolio
            "portfolio-title-highlight": "My",
            "portfolio-title": "Portfolio",
            "portfolio-status-online": "Online",
            "portfolio-desc-1": "Premium Footwear E-Commerce with dynamic product showcase, cart system, favorites, and contact form. Built with HTML/CSS/JavaScript featuring Swiper.js.",
            "portfolio-desc-2": "Responsive Coffee Shop Website with interactive menu, shopping cart, and contact form. Built using vanilla HTML/CSS/JS with localStorage.",
            "portfolio-desc-3": "Motorcycle Rental Platform with dynamic bike listings, shopping cart, destination slider, and blog system. Built with HTML/CSS/JavaScript.",
            "portfolio-btn-demo": "View Demo",
            "portfolio-btn-source": "Source code",
            "portfolio-stat-single": "Single-page",
            "portfolio-stat-v1": "Version 1",
            "portfolio-view-all": "View All Portfolio",
            
            // Education
            "edu-tag": "My Journey",
            "edu-title": "Education",
            "edu-subtitle": "A strong foundation in computer science and modern web development",
            "edu-stat-certs": "Certificates",
            "edu-stat-learning": "Years Learning",
            "edu-stat-projects": "Projects Built",
            "edu-item1-title": "High School Diploma",
            "edu-item1-school": "Bright Future School",
            "edu-item1-desc": "Currently in 9th grade. Studying Mathematics, Physics, and Computer Science. Passionate about coding, web development, and design.",
            "edu-item2-title": "Web Development & UI/UX",
            "edu-item2-school": "Online — Self‑Taught",
            "edu-item2-desc": "Learning HTML, CSS, JavaScript, React, and UI/UX design principles. Building real‑world projects and responsive websites.",
            "edu-item3-title": "Programming Fundamentals",
            "edu-item3-school": "Self‑Taught",
            "edu-item3-desc": "Started coding with Python and basic web technologies. Built first mini‑projects and gained confidence in programming.",
            "edu-item4-title": "Computer Science (Planned)",
            "edu-item4-school": "Future University",
            "edu-item4-desc": "Planning to pursue a Bachelor's degree in Computer Science. Focus on software engineering, AI, and human‑computer interaction.",
            "edu-badge-progress": "In Progress",
            "edu-badge-student": "Student",
            "edu-badge-learning": "Learning",
            "edu-badge-completed": "Completed",
            "edu-badge-goal": "Goal",
            "edu-progress": "Progress",
            "edu-progress-prep": "Preparation",
            
            // Contact
            "contact-tag": "Get in Touch",
            "contact-title-start": "Let's",
            "contact-title-highlight": "Connect",
            "contact-subtitle": "Have a project in mind or just want to say hello? I'd love to hear from you!",
            "contact-email-label": "Email",
            "contact-send": "Send Message",
            "contact-follow": "Follow",
            "contact-connect": "Connect",
            "contact-location-label": "Location",
            "contact-location": "Iran, Tehran",
            "contact-remote": "🌍 Available for remote work",
            "contact-form-name": "Your Name",
            "contact-form-email": "Email Address",
            "contact-form-subject": "Subject",
            "contact-form-message": "Message",
            "contact-form-send": "Send Message",
            
            // Footer
            "footer-desc": "UI/UX Designer & Front-End Developer crafting beautiful, responsive digital experiences with modern technologies.",
            "footer-status": "Available for work",
            "footer-quick-links": "Quick Links",
            "footer-connect": "Connect With Me",
            "footer-newsletter": "Stay Updated",
            "footer-newsletter-desc": "Subscribe to get the latest projects, articles, and design insights.",
            "footer-subscribe": "Subscribe",
            "footer-crafted": "Crafted with",
            "footer-tech": "using HTML, CSS & JavaScript",
            "footer-privacy": "Privacy Policy",
            "footer-terms": "Terms of Service"
        },
        fa: {
            // Navigation
            "nav-home": "خانه",
            "nav-about": "درباره من",
            "nav-skills": "مهارت‌ها",
            "nav-portfolio": "نمونه کارها",
            "nav-education": "تحصیلات",
            "nav-contact": "تماس",
            
            // Status
            "status": "در دسترس برای همکاری",
            
            // Hero
            "hero-greeting": "سلام، من",
            "hero-title": "طراح UI/UX هستم",
            "hero-desc": "تجربه‌های وب زیبا و واکنش‌گرا با استفاده از فناوری‌های مدرن ایجاد می‌کنم.",
            "hero-btn-work": "مشاهده کارهای من",
            "hero-btn-talk": "بیایید صحبت کنیم",
            
            // About
            "about-title-highlight": "درباره",
            "about-title": "من",
            "about-subtitle": "طراح و توسعه‌دهنده با علاقه به رابط‌های کاربری تمیز و انسان‌محور",
            "about-stat-exp": "سال تجربه",
            "about-stat-projects": "پروژه انجام شده",
            "about-stat-clients": "مشتری راضی",
            "about-badge": "من کیستم",
            "about-heading": "طراح UI/UX و توسعه‌دهنده فرانت‌اند",
            "about-p1": "من حامد هستم، یک طراح خلاق UI/UX و توسعه‌دهنده فرانت‌اند در ایران. با بیش از ۳ سال تجربه، در ایجاد تجربه‌های دیجیتال زیبا، واکنش‌گرا و کاربرپسند تخصص دارم.",
            "about-p2": "از مفهوم تا پیاده‌سازی دقیق، تفکر طراحی را با فناوری‌های مدرن وب ترکیب می‌کنم تا محصولاتی بسازم که مردم دوست دارند از آنها استفاده کنند.",
            "about-feature-1": "طراحی UI/UX",
            "about-feature-2": "توسعه فرانت‌اند",
            "about-feature-3": "طراحی واکنش‌گرا",
            "about-feature-4": "React / Vue",
            "about-btn-talk": "بیایید صحبت کنیم",
            "about-btn-resume": "رزومه من",
            
            // Skills
            "skills-title": "مهارت‌های من",
            "skills-desc": "من یک توسعه‌دهنده وب پرشور با بیش از ۳ سال تجربه در ایجاد تجربه‌های UI مدرن، واکنش‌گرا و دقیق هستم.",
            "skill-uiux": "طراحی UI/UX",
            
            // Portfolio
            "portfolio-title-highlight": "نمونه",
            "portfolio-title": "کارهای من",
            "portfolio-status-online": "فعال",
            "portfolio-desc-1": "فروشگاه آنلاین کفش با نمایش محصولات پویا، سیستم سبد خرید، علاقه‌مندی‌ها و فرم تماس. ساخته شده با HTML/CSS/JavaScript و Swiper.js.",
            "portfolio-desc-2": "وب‌سایت کافی‌شاپ واکنش‌گرا با منوی تعاملی، سبد خرید و فرم تماس. ساخته شده با HTML/CSS/JS و localStorage.",
            "portfolio-desc-3": "پلتفرم اجاره موتورسیکلت با لیست پویا، سبد خرید، اسلایدر مقصد و سیستم وبلاگ. ساخته شده با HTML/CSS/JavaScript.",
            "portfolio-btn-demo": "مشاهده دمو",
            "portfolio-btn-source": "کد منبع",
            "portfolio-stat-single": "تک‌صفحه",
            "portfolio-stat-v1": "نسخه ۱",
            "portfolio-view-all": "مشاهده همه پروژه‌ها",
            
            // Education
            "edu-tag": "مسیر من",
            "edu-title": "تحصیلات",
            "edu-subtitle": "یک پایه قوی در علوم کامپیوتر و توسعه وب مدرن",
            "edu-stat-certs": "گواهینامه",
            "edu-stat-learning": "سال یادگیری",
            "edu-stat-projects": "پروژه ساخته شده",
            "edu-item1-title": "دیپلم دبیرستان",
            "edu-item1-school": "مدرسه آینده درخشان",
            "edu-item1-desc": "در حال حاضر در پایه نهم. در حال تحصیل ریاضیات، فیزیک و علوم کامپیوتر. علاقه‌مند به برنامه‌نویسی، توسعه وب و طراحی.",
            "edu-item2-title": "توسعه وب و UI/UX",
            "edu-item2-school": "آنلاین — خودآموز",
            "edu-item2-desc": "یادگیری HTML، CSS، JavaScript، React و اصول طراحی UI/UX. ساخت پروژه‌های واقعی و وب‌سایت‌های واکنش‌گرا.",
            "edu-item3-title": "مبانی برنامه‌نویسی",
            "edu-item3-school": "خودآموز",
            "edu-item3-desc": "شروع برنامه‌نویسی با پایتون و فناوری‌های پایه وب. ساخت اولین پروژه‌های کوچک و کسب اعتماد به نفس در برنامه‌نویسی.",
            "edu-item4-title": "علوم کامپیوتر (برنامه)",
            "edu-item4-school": "دانشگاه آینده",
            "edu-item4-desc": "برنامه برای ادامه تحصیل در مقطع کارشناسی علوم کامپیوتر. تمرکز بر مهندسی نرم‌افزار، هوش مصنوعی و تعامل انسان و کامپیوتر.",
            "edu-badge-progress": "در حال انجام",
            "edu-badge-student": "دانش‌آموز",
            "edu-badge-learning": "در حال یادگیری",
            "edu-badge-completed": "تکمیل شده",
            "edu-badge-goal": "هدف",
            "edu-progress": "پیشرفت",
            "edu-progress-prep": "آماده‌سازی",
            
            // Contact
            "contact-tag": "ارتباط با من",
            "contact-title-start": "بیایید",
            "contact-title-highlight": "ارتباط برقرار کنیم",
            "contact-subtitle": "پروژه‌ای در ذهن دارید یا فقط می‌خواهید سلام کنید؟ خوشحال می‌شوم از شما بشنوم!",
            "contact-email-label": "ایمیل",
            "contact-send": "ارسال پیام",
            "contact-follow": "دنبال کنید",
            "contact-connect": "ارتباط",
            "contact-location-label": "موقعیت",
            "contact-location": "ایران، تهران",
            "contact-remote": "🌍 در دسترس برای کار از راه دور",
            "contact-form-name": "نام شما",
            "contact-form-email": "آدرس ایمیل",
            "contact-form-subject": "موضوع",
            "contact-form-message": "پیام",
            "contact-form-send": "ارسال پیام",
            
            // Footer
            "footer-desc": "طراح UI/UX و توسعه‌دهنده فرانت‌اند که تجربه‌های دیجیتال زیبا و واکنش‌گرا را با فناوری‌های مدرن خلق می‌کند.",
            "footer-status": "در دسترس برای همکاری",
            "footer-quick-links": "لینک‌های سریع",
            "footer-connect": "ارتباط با من",
            "footer-newsletter": "به‌روز بمانید",
            "footer-newsletter-desc": "برای دریافت آخرین پروژه‌ها، مقالات و بینش‌های طراحی عضو شوید.",
            "footer-subscribe": "عضویت",
            "footer-crafted": "ساخته شده با",
            "footer-tech": "با استفاده از HTML، CSS و JavaScript",
            "footer-privacy": "سیاست حریم خصوصی",
            "footer-terms": "شرایط خدمات"
        }
    };

    // =========================================
    // 2. سیستم ترجمه
    // =========================================
    let currentLang = localStorage.getItem("language") || "en";

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem("language", lang);
        
        // تغییر جهت صفحه
        const html = document.documentElement;
        html.setAttribute("lang", lang);
        html.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
        
        // به‌روزرسانی متن‌ها
        document.querySelectorAll("[data-key]").forEach(el => {
            const key = el.getAttribute("data-key");
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        
        // به‌روزرسانی دکمه زبان
        const langBtn = document.getElementById("lang-toggle-btn");
        if (langBtn) {
            const currentSpan = langBtn.querySelector(".lang-current");
            if (currentSpan) {
                currentSpan.textContent = lang === "en" ? "EN" : "FA";
            }
        }
        
        // به‌روزرسانی گزینه‌های فعال
        document.querySelectorAll(".lang-option").forEach(btn => {
            btn.classList.toggle("active", btn.dataset.lang === lang);
        });
        
        // بستن dropdown
        closeDropdown();
        
        // ریفرش AOS
        if (typeof AOS !== "undefined") {
            setTimeout(() => AOS.refresh(), 300);
        }
    }

    // =========================================
    // 3. کنترل‌های زبان
    // =========================================
    const langToggle = document.getElementById("lang-toggle-btn");
    const langDropdown = document.getElementById("langDropdown");

    function toggleDropdown(e) {
        e.stopPropagation();
        langDropdown.classList.toggle("open");
        langToggle.classList.toggle("active");
    }

    function closeDropdown() {
        langDropdown.classList.remove("open");
        langToggle.classList.remove("active");
    }

    if (langToggle && langDropdown) {
        langToggle.addEventListener("click", toggleDropdown);
        
        document.querySelectorAll(".lang-option").forEach(btn => {
            btn.addEventListener("click", function(e) {
                e.stopPropagation();
                const lang = this.dataset.lang;
                if (lang && lang !== currentLang) {
                    setLanguage(lang);
                } else {
                    closeDropdown();
                }
            });
        });
        
        // بستن با کلیک خارج
        document.addEventListener("click", function(e) {
            if (!e.target.closest(".language-selector")) {
                closeDropdown();
            }
        });
        
        // بستن با ESC
        document.addEventListener("keydown", function(e) {
            if (e.key === "Escape" && langDropdown.classList.contains("open")) {
                closeDropdown();
            }
        });
    }

    // =========================================
    // 4. تنظیم زبان اولیه
    // =========================================
    setLanguage(currentLang);


(function () {
    "use strict";
    

    // =========================================
    // 1. تغییر تم
    // =========================================
    const themeBtn = document.getElementById("theme-switch-btn");
    const sunIcon = document.querySelector(".theme-btn .sun");
    const moonIcon = document.querySelector(".theme-btn .moon");

    let isDarkMode = localStorage.getItem("theme") !== "light";

    function applyTheme(dark) {
        if (dark) {
            document.body.classList.remove("light-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.add("light-mode");
            localStorage.setItem("theme", "light");
        }
        if (sunIcon && moonIcon) {
            if (dark) {
                sunIcon.style.opacity = "1";
                sunIcon.style.transform = "rotate(0deg) scale(1)";
                moonIcon.style.opacity = "0";
                moonIcon.style.transform = "rotate(90deg) scale(0)";
            } else {
                sunIcon.style.opacity = "0";
                sunIcon.style.transform = "rotate(-90deg) scale(0)";
                moonIcon.style.opacity = "1";
                moonIcon.style.transform = "rotate(0deg) scale(1)";
            }
        }
        isDarkMode = dark;
    }

    applyTheme(isDarkMode);

    if (themeBtn) {
        themeBtn.addEventListener("click", function () {
            applyTheme(!isDarkMode);
        });
    }

    // =========================================
    // 2. منوی موبایل
    // =========================================
    const menuBtn = document.getElementById("menu-toggle-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const overlay = document.getElementById("menu-overlay");
    let isMenuOpen = false;

    function toggleMenu(open) {
        isMenuOpen = open !== undefined ? open : !isMenuOpen;

        if (mobileMenu) {
            mobileMenu.style.left = isMenuOpen ? "0" : "-100%";
        }
        if (overlay) {
            overlay.style.opacity = isMenuOpen ? "1" : "0";
            overlay.style.pointerEvents = isMenuOpen ? "auto" : "none";
        }
        if (menuBtn) {
            const bars = menuBtn.querySelectorAll(".bar");
            if (isMenuOpen) {
                bars.forEach((bar, index) => {
                    if (index === 0) {
                        bar.style.transform = "translateY(7px) rotate(45deg)";
                    } else if (index === 1) {
                        bar.style.opacity = "0";
                    } else if (index === 2) {
                        bar.style.transform = "translateY(-7px) rotate(-45deg)";
                    }
                });
            } else {
                bars.forEach((bar) => {
                    bar.style.transform = "none";
                    bar.style.opacity = "1";
                });
            }
        }
    }

    if (menuBtn) {
        menuBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            toggleMenu();
        });
    }

    if (overlay) {
        overlay.addEventListener("click", function () {
            if (isMenuOpen) {
                toggleMenu(false);
            }
        });
    }

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && isMenuOpen) {
            toggleMenu(false);
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768 && isMenuOpen) {
            toggleMenu(false);
        }
    });

    // =========================================
    // 3. اسکرول نرم و هایلایت منو
    // =========================================
    function updateActiveLink() {
        const sections = document.querySelectorAll("section[id], main[id]");
        const navLinks = document.querySelectorAll(".desktop-menu .nav-link, .mobile-menu-inner .nav-link");
        let currentId = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentId = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + currentId) {
                link.classList.add("active");
            }
        });
    }

    document.querySelectorAll('.desktop-menu .nav-link, .mobile-menu-inner .nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 30;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    if (isMenuOpen) toggleMenu(false);
                }
            }
        });
    });

    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('load', updateActiveLink);

    // =========================================
    // 4. فرم تماس
    // =========================================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('✅ Thank you for your message! I\'ll get back to you soon.');
            this.reset();
        });
    }

    // =========================================
    // 5. نوار پیشرفت اسکرول (نرم)
    // =========================================
    let ticking = false;

    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercent = (scrollTop / docHeight) * 100;
                const progressBar = document.getElementById('scrollProgress');
                if (progressBar) {
                    progressBar.style.width = scrollPercent + '%';
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // =========================================
    // 6. دکمه بازگشت به بالا
    // =========================================
    const backBtn = document.getElementById('backToTop');
    if (backBtn) {
        const btn = backBtn.querySelector('.back-to-top-btn');

        btn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                backBtn.classList.add('visible');
            } else {
                backBtn.classList.remove('visible');
            }
        });

        if (window.scrollY > 300) {
            backBtn.classList.add('visible');
        }
    }

    // =========================================
    // 7. خبرنامه
    // =========================================
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const input = this.querySelector('input');
            if (input.value.trim()) {
                alert('✅ Thank you for subscribing! 🎉');
                input.value = '';
            } else {
                alert('Please enter your email address.');
            }
        });
    }

    // =========================================
    // 8. فعال‌سازی AOS با تنظیمات بهینه
    // =========================================
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 500,
            once: true,          // فقط یک بار اجرا شود (برای موبایل بهتر است)
            offset: 40,
            easing: 'ease-out',
            delay: 0,
            disable: false,
            mirror: false        // هنگام اسکرول به بالا دوباره اجرا نشود
        });

        // ریفرش بعد از لود کامل
        window.addEventListener('load', function () {
            setTimeout(function () {
                AOS.refresh();
            }, 100);
        });

        // ریفرش بعد از تغییر اندازه صفحه
        window.addEventListener('resize', function () {
            AOS.refresh();
        });
    }

    // =========================================
    // 9. ایجاد ذرات
    // =========================================
    (function createParticles() {
        const container = document.getElementById('particleContainer');
        if (!container) return;

        const count = 40;
        const particles = [];

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            const size = Math.random() * 10 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';

            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';

            const duration = Math.random() * 17 + 18;
            particle.style.animationDuration = duration + 's';

            particle.style.animationDelay = (Math.random() * 20) + 's';

            const rotate = Math.random() * 360;
            particle.style.setProperty('--rotate', rotate + 'deg');

            if (size > 7 && Math.random() > 0.6) {
                particle.classList.add('glow');
            }

            container.appendChild(particle);
            particles.push(particle);
        }

        let mouseX = 0,
            mouseY = 0;
        let currentX = 0,
            currentY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
        });

        function animateParticles() {
            currentX += (mouseX * 30 - currentX) * 0.02;
            currentY += (mouseY * 30 - currentY) * 0.02;

            particles.forEach((p, index) => {
                const offsetX = (index / particles.length) * 20;
                const offsetY = ((index * 2) / particles.length) * 20;
                const finalX = currentX + offsetX;
                const finalY = currentY + offsetY;
                p.style.transform = `translate(${finalX}px, ${finalY}px)`;
            });

            requestAnimationFrame(animateParticles);
        }

        animateParticles();

        function updateParticlesForTheme() {
            const isLight = document.body.classList.contains('light-mode');
            const opacity = isLight ? '0.12' : '0.25';
            particles.forEach(p => {
                p.style.opacity = opacity;
            });
        }

        const observer = new MutationObserver(() => {
            updateParticlesForTheme();
        });
        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ['class']
        });

        updateParticlesForTheme();
    })();

})();