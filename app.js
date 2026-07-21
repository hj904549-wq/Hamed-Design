// =========================================
// 1. دیکشنری ترجمه (کامل)
// =========================================
const translations = {
    fa: {
        // ===== ناوبری =====
        "nav-home": "خانه",
        "nav-services": "خدمات",
        "nav-portfolio": "نمونه کارها",
        "nav-packages": "پلن‌ها",
        "nav-process": "فرآیند کار",
        "nav-blog": "وبلاگ",
        "nav-contact": "تماس",

        // ===== وضعیت =====
        "status": "پذیرش پروژه‌های جدید",
        "hero-available": "آماده همکاری",

        // ===== هیرو =====
        "hero-greeting": "سلام، من",
        "hero-title": "طراح UI/UX و توسعه‌دهنده فرانت‌اند",
        "hero-desc": "من با تخصص در <strong>طراحی UI/UX</strong>، <strong>توسعه فرانت‌اند</strong> و <strong>بهینه‌سازی وردپرس</strong>، به کسب‌وکارها کمک می‌کنم تا در فضای آنلاین بدرخشند.",
        "hero-btn-work": "مشاهده پروژه‌ها",
        "hero-btn-talk": "شروع همکاری",
        "hero-btn-pricing": "مشاهده پلن‌ها",
        "hero-stat-exp": "۳+",
        "hero-stat-exp-label": "سال تجربه",
        "hero-stat-projects": "۲۵+",
        "hero-stat-projects-label": "پروژه",
        "hero-stat-clients": "۱۸",
        "hero-stat-clients-label": "مشتری",
        "hero-tech-label": "تکنولوژی‌های من:",

        // ===== خدمات =====
        "services-tag": "خدمات من",
        "services-title": "آنچه برای شما انجام می‌دهم",
        "services-subtitle": "از ایده تا اجرا، همه‌چیز در یک مسیر حرفه‌ای",
        "service-1-title": "طراحی UI/UX",
        "service-1-desc": "طراحی رابط کاربری جذاب و تجربه کاربری روان که مشتریان شما را مجذوب می‌کند.",
        "service-2-title": "توسعه فرانت‌اند",
        "service-2-desc": "کدنویسی تمیز و بهینه با استفاده از مدرن‌ترین تکنولوژی‌های وب.",
        "service-3-title": "وردپرس حرفه‌ای",
        "service-3-desc": "ساخت و بهینه‌سازی وب‌سایت‌های وردپرسی با سرعت لود فوق‌العاده.",
        "service-4-title": "بهینه‌سازی سرعت و سئو",
        "service-4-desc": "افزایش سرعت لود و بهبود رتبه سایت شما در نتایج جستجوی گوگل.",
        "service-5-title": "فروشگاه اینترنتی",
        "service-5-desc": "راه‌اندازی فروشگاه آنلاین کامل با درگاه پرداخت و مدیریت آسان.",
        "service-6-title": "پشتیبانی و نگهداری",
        "service-6-desc": "پشتیبانی ۲۴ ساعته، بروزرسانی و نگهداری وب‌سایت شما.",
        "service-time-1": "۲-۳ هفته",
        "service-time-2": "۳-۴ هفته",
        "service-time-3": "۱-۲ هفته",
        "service-time-4": "۱ هفته",
        "service-time-5": "۳-۵ هفته",
        "service-time-6": "ماهانه",
        "service-cta": "درخواست همکاری",

        // ===== نمونه کارها (صفحه اصلی) =====
        "portfolio-title-highlight": "نمونه",
        "portfolio-title": "کارهای من",
        "portfolio-status-online": "آنلاین",
        "portfolio-desc-1": "فروشگاه تخصصی کفش با فیلترهای پویا، سبد خرید و فرم تماس.",
        "portfolio-desc-2": "وب‌سایت کافه با منوی تعاملی و سبد خرید با ذخیره‌سازی محلی.",
        "portfolio-desc-3": "پلتفرم اجاره موتور با لیست پویا، سبد خرید و اسلایدر.",
        "portfolio-btn-demo": "مشاهده",
        "portfolio-btn-source": "کد",
        "portfolio-view-all": "مشاهده همه نمونه کارها",
        "filter-all": "همه",
        "filter-landing": "لندینگ",
        "filter-ecommerce": "فروشگاهی",
        "filter-ui": "UI/UX",
        "filter-webapp": "اپلیکیشن",

        // ===== فرآیند کار =====
        "process-tag": "فرآیند کار",
        "process-title": "چگونه با هم کار می‌کنیم؟",
        "process-subtitle": "روش من برای تبدیل ایده به محصول نهایی",
        "process-step-1-title": "بررسی نیاز",
        "process-step-1-desc": "جلسه مشاوره برای درک اهداف، نیازها و چشم‌انداز پروژه شما",
        "process-step-2-title": "طراحی اولیه",
        "process-step-2-desc": "ایجاد وایرفریم و طراحی UI/UX با دریافت بازخورد شما",
        "process-step-3-title": "توسعه",
        "process-step-3-desc": "کدنویسی و پیاده‌سازی با استفاده از تکنولوژی‌های مدرن",
        "process-step-4-title": "تست و بازبینی",
        "process-step-4-desc": "تست کامل، رفع باگ و بهینه‌سازی برای بهترین عملکرد",
        "process-step-5-title": "تحویل و پشتیبانی",
        "process-step-5-desc": "تحویل پروژه و پشتیبانی پس از راه‌اندازی",

        // ===== پلن‌ها =====
        "pricing-tag": "پلن‌های همکاری",
        "pricing-title": "پکیج‌های طلایی من",
        "pricing-subtitle": "پلن مناسب پروژه خود را انتخاب کنید",
        "pkg-1-badge": "اقتصادی",
        "pkg-1-title": "وب‌سایت شرکتی",
        "pkg-1-price": "شروع از ۸ میلیون تومان",
        "pkg-1-desc": "مناسب برای معرفی خدمات، پزشکان، وکلا و کسب‌وکارهای نوپا",
        "pkg-1-f1": "طراحی اختصاصی UI/UX",
        "pkg-1-f2": "پیاده‌سازی با وردپرس",
        "pkg-1-f3": "کاملاً واکنش‌گرا",
        "pkg-1-f4": "امنیت استاندارد",
        "pkg-1-f5": "درگاه پرداخت آنلاین",
        "pkg-1-btn": "درخواست همکاری",
        "pkg-2-badge": "پیشنهادی",
        "pkg-2-title": "فروشگاه اینترنتی",
        "pkg-2-price": "شروع از ۱۵ میلیون تومان",
        "pkg-2-desc": "یک فروشگاه کامل با سرعت لود فوق‌العاده و طراحی مدرن",
        "pkg-2-f1": "طراحی اختصاصی UI/UX",
        "pkg-2-f2": "اتصال به درگاه پرداخت",
        "pkg-2-f3": "بهینه‌سازی سرعت تخصصی",
        "pkg-2-f4": "پنل مدیریت فارسی",
        "pkg-2-f5": "پشتیبانی ۳ ماهه",
        "pkg-2-btn": "درخواست همکاری",
        "pkg-3-badge": "پیشرفته",
        "pkg-3-title": "طراحی اختصاصی",
        "pkg-3-price": "نیاز به مشاوره",
        "pkg-3-desc": "برای استارتاپ‌ها و سامانه‌های اختصاصی و اپلیکیشن‌های وب پیچیده",
        "pkg-3-f1": "توسعه با React / Next.js",
        "pkg-3-f2": "سرعت لود خارق‌العاده",
        "pkg-3-f3": "امنیت سازمانی",
        "pkg-3-f4": "انیمیشن‌های تعاملی",
        "pkg-3-f5": "پشتیبانی ۶ ماهه",
        "pkg-3-btn": "درخواست مشاوره",

        // ===== سوالات متداول =====
        "faq-tag": "سوالات متداول",
        "faq-title": "پاسخ به سوالات شما",
        "faq-q1": "چقدر زمان برای طراحی و توسعه سایت نیاز است؟",
        "faq-a1": "زمان پروژه بستگی به پیچیدگی و نوع پروژه دارد. برای وب‌سایت‌های شرکتی معمولاً ۲ تا ۴ هفته و برای فروشگاه‌های اینترنتی ۴ تا ۶ هفته زمان نیاز است.",
        "faq-q2": "آیا امکان تغییرات در حین پروژه وجود دارد؟",
        "faq-a2": "بله، من با مشتریان در تمام مراحل پروژه همکاری می‌کنم و بازخورد شما برای من بسیار مهم است. تغییرات در مرحله طراحی اولیه کاملاً رایگان است.",
        "faq-q3": "آیا پشتیبانی پس از تحویل پروژه دارید؟",
        "faq-a3": "بله، تمام پروژه‌ها حداقل ۳ ماه پشتیبانی رایگان دارند و برای پروژه‌های بزرگتر، پشتیبانی تا ۶ ماه ارائه می‌شود.",
        "faq-q4": "آیا پروژه بهینه‌سازی سئو هم می‌شود؟",
        "faq-a4": "بله، تمام پروژه‌ها با اصول سئو و بهینه‌سازی سرعت پیاده‌سازی می‌شوند تا در نتایج گوگل بهتر دیده شوند.",

        // ===== وبلاگ (صفحه اصلی) =====
        "blog-tag": "وبلاگ",
        "blog-title": "آخرین مقالات و مطالب",
        "blog-subtitle": "دانش و تجربیات من در زمینه طراحی و توسعه",
        "blog-title-1": "چگونه یک طراحی UI/UX عالی داشته باشیم؟",
        "blog-excerpt-1": "در این مقاله به اصول کلیدی طراحی رابط کاربری و تجربه کاربری می‌پردازیم...",
        "blog-title-2": "بهترین فریم‌ورک‌های جاوااسکریپت برای ۲۰۲۵",
        "blog-excerpt-2": "مقایسه React، Vue و Angular و کاربرد هرکدام در پروژه‌های مختلف...",
        "blog-title-3": "۱۰ تکنیک طلایی برای افزایش سرعت وب‌سایت",
        "blog-excerpt-3": "با این تکنیک‌ها سرعت سایت خود را تا ۵۰٪ افزایش دهید...",
        "blog-read-more": "ادامه مطلب",
        "blog-view-all": "مشاهده همه مقالات",

        // ===== وبلاگ (صفحه جداگانه) =====
        "blog-page-title": "وبلاگ تخصصی",
        "blog-page-desc": "مقالات، آموزش‌ها و تجربیات من در زمینه طراحی و توسعه وب",
        "blog-back-home": "بازگشت به صفحه اصلی",
        "blog-category-uiux": "UI/UX",
        "blog-category-dev": "توسعه",
        "blog-category-optimization": "بهینه‌سازی",
        "blog-category-wordpress": "وردپرس",
        "blog-category-seo": "سئو",
        "blog-sidebar-cta-title": "پروژه خود را با من شروع کنید",
        "blog-sidebar-cta-desc": "آیا به دنبال یک طراحی حرفه‌ای یا توسعه وب‌سایت هستید؟ من اینجا هستم تا به شما کمک کنم.",
        "blog-sidebar-cta-btn": "شروع همکاری",
        "blog-sidebar-categories": "دسته‌بندی مقالات",
        "blog-sidebar-popular": "پربازدیدترین‌ها",
        "blog-sidebar-newsletter": "خبرنامه",
        "blog-sidebar-newsletter-desc": "جدیدترین مقالات و آموزش‌ها را در ایمیل خود دریافت کنید.",
        "blog-sidebar-subscribe": "عضویت",
        "blog-newsletter-placeholder": "ایمیل خود را وارد کنید",

        // ===== متا مقالات وبلاگ =====
        "blog-meta-date-1": "۲۵ دی ۱۴۰۴",
        "blog-meta-read-1": "۵ دقیقه",
        "blog-meta-views-1": "۱,۲۰۰ بازدید",
        "blog-meta-date-2": "۱۸ دی ۱۴۰۴",
        "blog-meta-read-2": "۷ دقیقه",
        "blog-meta-views-2": "۹۵۰ بازدید",
        "blog-meta-date-3": "۱۰ دی ۱۴۰۴",
        "blog-meta-read-3": "۶ دقیقه",
        "blog-meta-views-3": "۲,۱۰۰ بازدید",
        "blog-meta-date-4": "۵ دی ۱۴۰۴",
        "blog-meta-read-4": "۴ دقیقه",
        "blog-meta-views-4": "۷۸۰ بازدید",
        "blog-meta-date-5": "۲۸ آذر ۱۴۰۴",
        "blog-meta-read-5": "۸ دقیقه",
        "blog-meta-views-5": "۱,۵۰۰ بازدید",
        "blog-meta-date-6": "۲۰ آذر ۱۴۰۴",
        "blog-meta-read-6": "۵ دقیقه",
        "blog-meta-views-6": "۶۴۰ بازدید",
        "blog-title-4": "وردپرس یا React؟ کدام را برای پروژه خود انتخاب کنیم؟",
        "blog-excerpt-4": "مقایسه جامع وردپرس و React برای پروژه‌های مختلف وب. مزایا، معایب و بهترین کاربرد هرکدام را در این مقاله بخوانید...",
        "blog-title-5": "سئو فنی برای توسعه‌دهندگان فرانت‌اند",
        "blog-excerpt-5": "هر آنچه یک توسعه‌دهنده فرانت‌اند باید درباره سئو بداند. از ساختار HTML گرفته تا Core Web Vitals و بهینه‌سازی عملکرد...",
        "blog-title-6": "انیمیشن‌های تعاملی با CSS و JavaScript",
        "blog-excerpt-6": "آموزش ساخت انیمیشن‌های جذاب و تعاملی با استفاده از CSS و JavaScript برای بهبود تجربه کاربری و جذاب‌تر کردن وب‌سایت‌ها...",
        "blog-cat-1": "UI/UX Design (۱۲)",
        "blog-cat-2": "توسعه فرانت‌اند (۸)",
        "blog-cat-3": "وردپرس (۶)",
        "blog-cat-4": "بهینه‌سازی (۱۰)",
        "blog-cat-5": "سئو (۵)",
        "blog-popular-1": "۱۰ تکنیک طلایی برای افزایش سرعت",
        "blog-popular-2": "چگونه یک طراحی UI/UX عالی داشته باشیم؟",
        "blog-popular-3": "سئو فنی برای توسعه‌دهندگان",
        "blog-popular-4": "بهترین فریم‌ورک‌های جاوااسکریپت",

        // ===== فیلترهای وبلاگ =====
        "blog-filter-all": "همه",
        "blog-filter-uiux": "UI/UX",
        "blog-filter-dev": "توسعه",
        "blog-filter-optimization": "بهینه‌سازی",
        "blog-filter-wordpress": "وردپرس",
        "blog-filter-seo": "سئو",

        // ===== عنوان‌های مقالات برای صفحه مقاله (ترجمه شده) =====
        "post-title-1": "چگونه یک طراحی UI/UX عالی داشته باشیم؟",
        "post-title-2": "بهترین فریم‌ورک‌های جاوااسکریپت برای ۲۰۲۵",
        "post-title-3": "۱۰ تکنیک طلایی برای افزایش سرعت وب‌سایت",
        "post-title-4": "وردپرس یا React؟ کدام را برای پروژه خود انتخاب کنیم؟",
        "post-title-5": "سئو فنی برای توسعه‌دهندگان فرانت‌اند",
        "post-title-6": "انیمیشن‌های تعاملی با CSS و JavaScript",

        // ===== محتوای مقالات =====
        "post-content-1": `<div dir="rtl"><h2>مقدمه</h2><p>طراحی UI/UX یکی از مهم‌ترین عوامل موفقیت یک محصول دیجیتال است. در این مقاله به بررسی اصول کلیدی و تکنیک‌های عملی برای خلق تجربه کاربری عالی می‌پردازیم.</p><h2>۱. شناخت کاربر</h2><p>اولین و مهم‌ترین قدم در طراحی UI/UX، شناخت کامل کاربران هدف است. بدون درک نیازها، مشکلات و رفتارهای کاربران، هیچ طراحی نمی‌تواند موفق باشد.</p><h2>۲. سادگی و مینیمالیسم</h2><p>طراحی ساده و مینیمال همیشه بهترین گزینه است. حذف المان‌های اضافی و تمرکز بر محتوای اصلی، تجربه کاربری را بهبود می‌بخشد.</p><blockquote>"طراحی خوب یعنی وقتی کاربر متوجه آن نمی‌شود." - دیتر رمز</blockquote><h2>۳. بازخورد و تعامل</h2><p>کاربران باید همیشه بدانند که چه اتفاقی در حال رخ دادن است. بازخوردهای بصری و تعاملی، حس کنترل و اعتماد را به کاربر منتقل می‌کنند.</p><h2>۴. تست و بهبود مستمر</h2><p>طراحی UI/UX یک فرآیند مداوم است. با تست کردن طرح‌ها با کاربران واقعی و جمع‌آوری بازخورد، می‌توانید به طور مداوم تجربه کاربری را بهبود بخشید.</p><h2>نتیجه‌گیری</h2><p>طراحی UI/UX عالی نیازمند ترکیبی از مهارت‌های فنی، درک روانشناسی کاربر و خلاقیت است. با رعایت اصول مطرح شده در این مقاله، می‌توانید محصولاتی خلق کنید که کاربران عاشق آن‌ها شوند.</p></div>`,
        "post-content-2": `<div dir="rtl"><h2>مقدمه</h2><p>انتخاب فریم‌ورک مناسب جاوااسکریپت یکی از مهم‌ترین تصمیم‌هایی است که یک توسعه‌دهنده باید بگیرد. در این مقاله به مقایسه سه فریم‌ورک محبوب React، Vue و Angular می‌پردازیم.</p><h2>۱. React</h2><p>React توسط فیسبوک توسعه داده شده و امروزه پرطرفدارترین کتابخانه جاوااسکریپت برای ساخت رابط‌های کاربری است.</p><ul><li>✅ Virtual DOM برای عملکرد بالا</li><li>✅ JSX برای نوشتن کد تمیزتر</li><li>✅ اکوسیستم غنی و پشتیبانی عالی</li><li>✅ React Native برای ساخت اپلیکیشن موبایل</li></ul><h2>۲. Vue.js</h2><p>Vue.js یک فریم‌ورک پیشرو و انعطاف‌پذیر است که توسط Evan You توسعه داده شده.</p><ul><li>✅ منحنی یادگیری ملایم</li><li>✅ انعطاف‌پذیری بالا</li><li>✅ عملکرد عالی</li><li>✅ مستندات کامل و روان</li></ul><h2>۳. Angular</h2><p>Angular یک فریم‌ورک کامل و قدرتمند است که توسط گوگل توسعه داده شده.</p><ul><li>✅ معماری MVC</li><li>✅ تزریق وابستگی</li><li>✅ TypeScript به عنوان زبان اصلی</li><li>✅ ابزارهای قدرتمند برای پروژه‌های بزرگ</li></ul><h2>مقایسه نهایی</h2><p>انتخاب بین این سه فریم‌ورک بستگی به نیازهای پروژه شما دارد. React برای پروژه‌های بزرگ و پیچیده عالی است، Vue برای شروع سریع و پروژه‌های کوچک تا متوسط مناسب است، و Angular برای پروژه‌های سازمانی با تیم‌های بزرگ بهترین گزینه است.</p></div>`,
        "post-content-3": `<div dir="rtl"><h2>مقدمه</h2><p>سرعت وب‌سایت یکی از مهم‌ترین عوامل در تجربه کاربری و سئو است. در این مقاله ۱۰ تکنیک عملی و اثبات‌شده برای افزایش سرعت وب‌سایت خود را به شما آموزش می‌دهیم.</p><h2>۱. بهینه‌سازی تصاویر</h2><p>تصاویر سنگین یکی از اصلی‌ترین دلایل کندی وب‌سایت‌ها هستند. با فشرده‌سازی تصاویر و استفاده از فرمت‌های مدرن مانند WebP می‌توانید حجم تصاویر را به شدت کاهش دهید.</p><h2>۲. استفاده از CDN</h2><p>شبکه توزیع محتوا (CDN) با ذخیره‌سازی فایل‌های استاتیک در سرورهای مختلف جهان، سرعت بارگذاری را برای کاربران در نقاط مختلف افزایش می‌دهد.</p><h2>۳. کش کردن مرورگر</h2><p>با کش کردن فایل‌های استاتیک در مرورگر کاربر، در بازدیدهای بعدی نیازی به دانلود مجدد آن‌ها نیست و سرعت بارگذاری به شدت افزایش می‌یابد.</p><blockquote>"هر یک ثانیه تأخیر در بارگذاری صفحه، نرخ تبدیل را ۷٪ کاهش می‌دهد."</blockquote><h2>۴. مینیمایز کردن CSS و JavaScript</h2><p>حذف فاصله‌ها، کامنت‌ها و کاراکترهای غیرضروری از فایل‌های CSS و JavaScript می‌تواند حجم آن‌ها را تا ۳۰٪ کاهش دهد.</p><h2>۵. لود تنبل (Lazy Loading)</h2><p>با لود تنبل، تصاویر و محتوای خارج از صفحه نمایش فقط زمانی بارگذاری می‌شوند که کاربر به آن‌ها اسکرول کند.</p><h2>۶. بهینه‌سازی فونت‌ها</h2><p>فونت‌های سفارشی می‌توانند تأثیر زیادی بر سرعت داشته باشند. استفاده از فونت‌های سیستمی یا نمایش فونت‌ها با روش‌های بهینه شده را در نظر بگیرید.</p><h2>۷. کاهش درخواست‌های HTTP</h2><p>تعداد درخواست‌های HTTP را با ترکیب فایل‌های CSS و JavaScript و استفاده از Sprite برای تصاویر کاهش دهید.</p><h2>۸. استفاده از Gzip</h2><p>فشرده‌سازی فایل‌ها با Gzip می‌تواند حجم انتقال داده را تا ۷۰٪ کاهش دهد.</p><h2>۹. بهینه‌سازی پایگاه داده</h2><p>پایگاه داده‌های سنگین و بهینه‌نشده می‌توانند سرعت وب‌سایت را کاهش دهند. ایندکس‌گذاری مناسب و بهینه‌سازی کوئری‌ها را جدی بگیرید.</p><h2>۱۰. استفاده از HTTP/2</h2><p>پروتکل HTTP/2 با قابلیت‌هایی مانند Multiplexing و Server Push، سرعت بارگذاری را به طور قابل توجهی افزایش می‌دهد.</p></div>`,
        "post-content-4": `<div dir="rtl"><h2>مقدمه</h2><p>یکی از سوالات رایج در بین توسعه‌دهندگان و صاحبان کسب‌وکار، انتخاب بین وردپرس و React برای پروژه وب است. در این مقاله به مقایسه این دو ابزار قدرتمند می‌پردازیم.</p><h2>وردپرس</h2><p>وردپرس یک سیستم مدیریت محتوای (CMS) محبوب است که بیش از ۴۰٪ از وب‌سایت‌های جهان با آن ساخته شده‌اند.</p><ul><li>✅ راه‌اندازی سریع و آسان</li><li>✅ هزاران قالب و افزونه آماده</li><li>✅ پنل مدیریت کاربرپسند</li><li>✅ مناسب برای وب‌سایت‌های محتوایی و فروشگاهی</li><li>✅ جامعه بزرگ و پشتیبانی گسترده</li></ul><h2>React</h2><p>React یک کتابخانه جاوااسکریپت برای ساخت رابط‌های کاربری است که توسط فیسبوک توسعه داده شده.</p><ul><li>✅ عملکرد فوق‌العاده بالا</li><li>✅ توسعه اپلیکیشن‌های تک‌صفحه‌ای (SPA)</li><li>✅ قابلیت استفاده مجدد از کامپوننت‌ها</li><li>✅ اکوسیستم غنی و ابزارهای پیشرفته</li><li>✅ مناسب برای اپلیکیشن‌های پیچیده</li></ul><h2>مقایسه و انتخاب</h2><p>انتخاب بین وردپرس و React بستگی به نیازهای پروژه شما دارد.</p><ul><li>🔹 اگر وب‌سایت محتوایی، فروشگاهی یا شرکتی نیاز دارید → <strong>وردپرس</strong></li><li>🔹 اگر اپلیکیشن وب پیچیده و تعاملی نیاز دارید → <strong>React</strong></li></ul><h2>نتیجه‌گیری</h2><p>هیچ کدام از این دو ابزار برتر از دیگری نیست. انتخاب درست بستگی به نیازها، بودجه و اهداف پروژه شما دارد.</p></div>`,
        "post-content-5": `<div dir="rtl"><h2>مقدمه</h2><p>سئو فقط مربوط به تولید محتوا نیست. توسعه‌دهندگان فرانت‌اند نقش بسیار مهمی در بهینه‌سازی وب‌سایت‌ها برای موتورهای جستجو دارند.</p><h2>۱. ساختار HTML معنادار</h2><p>استفاده صحیح از تگ‌های HTML مانند h1 تا h6، header، nav، main، article و section به موتورهای جستجو کمک می‌کند تا ساختار محتوای شما را بهتر درک کنند.</p><h2>۲. Core Web Vitals</h2><p>Core Web Vitals مجموعه‌ای از معیارهای عملکرد هستند که توسط گوگل معرفی شده‌اند:</p><ul><li>📊 Largest Contentful Paint (LCP)</li><li>📊 First Input Delay (FID)</li><li>📊 Cumulative Layout Shift (CLS)</li></ul><h2>۳. بهینه‌سازی تصاویر</h2><p>استفاده از فرمت‌های مدرن تصاویر (WebP، AVIF) و ویژگی‌های loading="lazy" بسیار مهم است.</p><h2>۴. Structured Data</h2><p>داده‌های ساختمند (Schema Markup) به موتورهای جستجو کمک می‌کنند تا محتوای شما را بهتر درک کنند.</p><blockquote>"سئو یک مسابقه نیست؛ یک همکاری بین شما و موتورهای جستجو برای ارائه بهترین تجربه به کاربران است."</blockquote><h2>۵. بهینه‌سازی فونت‌ها</h2><p>بارگذاری فونت‌های سفارشی می‌تواند تأثیر منفی بر سرعت داشته باشد. از display="swap" استفاده کنید.</p><h2>نتیجه‌گیری</h2><p>توسعه‌دهندگان فرانت‌اند با رعایت اصول سئو فنی می‌توانند تأثیر بسزایی در بهبود رتبه وب‌سایت‌ها داشته باشند.</p></div>`,
        "post-content-6": `<div dir="rtl"><h2>مقدمه</h2><p>انیمیشن‌های تعاملی یکی از راه‌های موثر برای جذب کاربران و بهبود تجربه کاربری هستند.</p><h2>۱. انیمیشن‌های CSS</h2><p>CSS انیمیشن‌ها ابزار قدرتمندی برای ایجاد حرکات روان و جذاب بدون نیاز به JavaScript هستند.</p><h2>۲. انیمیشن‌های JavaScript</h2><p>برای کنترل بیشتر و انیمیشن‌های پیچیده‌تر، JavaScript بهترین گزینه است. از کتابخانه‌های معروف مانند GSAP استفاده کنید.</p><h2>۳. Intersection Observer</h2><p>با استفاده از Intersection Observer API می‌توانید انیمیشن‌ها را دقیقاً زمانی اجرا کنید که کاربر به آن‌ها اسکرول می‌کند.</p><blockquote>"انیمیشن‌ها باید هدفمند باشند و به کاربر کمک کنند تا تعامل بهتری با محصول داشته باشد."</blockquote><h2>۴. بهینه‌سازی عملکرد</h2><p>برای انیمیشن‌های روان، از ویژگی‌های transform و opacity استفاده کنید.</p><h2>نتیجه‌گیری</h2><p>انیمیشن‌های تعاملی اگر به درستی استفاده شوند، می‌توانند تجربه کاربری را به سطح جدیدی ببرند.</p></div>`,

        // ===== نمونه کارها (صفحه جداگانه) =====
        "portfolio-page-title": "نمونه کارهای من",
        "portfolio-page-desc": "پروژه‌هایی که با عشق و تخصص طراحی و توسعه داده‌ام",
        "portfolio-back-home": "بازگشت به صفحه اصلی",
        "portfolio-stat-satisfaction": "رضایت مشتری",
        "portfolio-cta-title": "آماده همکاری هستید؟ با من تماس بگیرید",
        "portfolio-status-dev": "در حال توسعه",
        "portfolio-project-4-title": "Black Coffee",
        "portfolio-project-4-desc": "وب‌سایت مدرن و مینیمال برای کافی‌شاپ با طراحی جذاب و تجربه کاربری عالی.",
        "portfolio-tech-react": "React",
        "portfolio-tech-node": "Node.js",
        "portfolio-tech-tailwind": "Tailwind",

        // ===== بخش در حال ساخت =====
        "coming-soon-title": "در حال ساخت",
        "coming-soon-title-highlight": "پروژه‌های جدید",
        "coming-soon-desc": "تیم من در حال طراحی و توسعه پروژه‌های جذاب و مدرن است. به زودی شاهد نمونه‌کارهای جدید و خلاقانه‌ای خواهید بود که با جدیدترین تکنولوژی‌های روز دنیا ساخته می‌شوند.",
        "coming-soon-project-1": "فروشگاه آنلاین هوشمند",
        "coming-soon-project-2": "اپلیکیشن مدیریت پروژه",
        "coming-soon-project-3": "وب‌سایت شرکتی حرفه‌ای",

        // ===== تماس =====
        "contact-tag": "تماس با من",
        "contact-title": "بیایید با هم <span class=\"gradient-text\">تجربه‌ای خاص</span> خلق کنیم",
        "contact-subtitle": "راه‌های ارتباطی با من را مشاهده کنید",
        "contact-email-label": "ایمیل",
        "contact-phone-label": "شماره تماس",
        "contact-location-label": "موقعیت",
        "contact-location": "ایران، تهران",
        "contact-remote": "آماده همکاری ریموت در سراسر جهان",
        "contact-send": "ارسال پیام",

        // ===== فرم =====
        "form-name": "نام و نام خانوادگی",
        "form-email": "ایمیل",
        "form-phone": "شماره تماس",
        "form-package": "نوع پروژه",
        "form-select-placeholder": "لطفاً یک گزینه را انتخاب کنید",
        "form-option-1": "وب‌سایت شرکتی",
        "form-option-2": "فروشگاه اینترنتی",
        "form-option-3": "طراحی اختصاصی (React/Next.js)",
        "form-option-4": "بهینه‌سازی سرعت و سئو",
        "form-budget": "بودجه تقریبی",
        "budget-1": "زیر ۱۰ میلیون تومان",
        "budget-2": "۱۰ تا ۲۰ میلیون تومان",
        "budget-3": "۲۰ تا ۵۰ میلیون تومان",
        "budget-4": "بالای ۵۰ میلیون تومان",
        "form-desc": "توضیحات پروژه",
        "contact-subject-label": "موضوع",
        "contact-message-label": "پیام",

        // ===== فوتر =====
        "footer-desc": "طراح UI/UX و توسعه‌دهنده فرانت‌اند که تجربه‌های دیجیتال زیبا، واکنش‌گرا و کاربرپسند با فناوری‌های مدرن خلق می‌کند.",
        "footer-status": "پذیرش پروژه‌های جدید",
        "footer-quick-links": "لینک‌های سریع",
        "footer-connect": "شبکه‌های اجتماعی",
        "footer-newsletter": "خبرنامه",
        "footer-newsletter-desc": "با عضویت در خبرنامه، از آخرین پروژه‌ها، مقالات و نکات طراحی وب مطلع شوید.",
        "footer-subscribe": "عضویت",
        "footer-crafted": "طراحی و توسعه با عشق",
        "footer-tech": "با استفاده از HTML، CSS و JavaScript",
        "footer-privacy": "حریم خصوصی",
        "footer-terms": "قوانین و مقررات",
        "footer-all-rights": "تمامی حقوق محفوظ است",
        "footer-newsletter-placeholder": "ایمیل خود را وارد کنید"
    },
    en: {
        // ===== Navigation =====
        "nav-home": "Home",
        "nav-services": "Services",
        "nav-portfolio": "Portfolio",
        "nav-packages": "Pricing",
        "nav-process": "Process",
        "nav-blog": "Blog",
        "nav-contact": "Contact",

        // ===== Status =====
        "status": "Open for New Projects",
        "hero-available": "Available for Work",

        // ===== Hero =====
        "hero-greeting": "Hi, I'm",
        "hero-title": "UI/UX Designer & Front-End Developer",
        "hero-desc": "I specialize in <strong>UI/UX Design</strong>, <strong>Front-End Development</strong>, and <strong>WordPress Optimization</strong> to help businesses shine online.",
        "hero-btn-work": "View Projects",
        "hero-btn-talk": "Start Collaboration",
        "hero-btn-pricing": "View Pricing",
        "hero-stat-exp": "3+",
        "hero-stat-exp-label": "Years Experience",
        "hero-stat-projects": "25+",
        "hero-stat-projects-label": "Projects",
        "hero-stat-clients": "18",
        "hero-stat-clients-label": "Clients",
        "hero-tech-label": "My Tech Stack:",

        // ===== Services =====
        "services-tag": "My Services",
        "services-title": "What I Do For You",
        "services-subtitle": "From idea to execution, everything in one professional path",
        "service-1-title": "UI/UX Design",
        "service-1-desc": "Designing attractive interfaces and smooth user experiences that captivate your customers.",
        "service-2-title": "Front-End Development",
        "service-2-desc": "Clean and optimized coding using the latest web technologies.",
        "service-3-title": "WordPress Expert",
        "service-3-desc": "Building and optimizing WordPress websites with exceptional loading speed.",
        "service-4-title": "Speed & SEO Optimization",
        "service-4-desc": "Improving loading speed and search engine rankings for your website.",
        "service-5-title": "E-Commerce Store",
        "service-5-desc": "Complete online store setup with payment gateway and easy management.",
        "service-6-title": "Support & Maintenance",
        "service-6-desc": "24/7 support, updates and maintenance for your website.",
        "service-time-1": "2-3 weeks",
        "service-time-2": "3-4 weeks",
        "service-time-3": "1-2 weeks",
        "service-time-4": "1 week",
        "service-time-5": "3-5 weeks",
        "service-time-6": "Monthly",
        "service-cta": "Request Service",

        // ===== Portfolio (Main Page) =====
        "portfolio-title-highlight": "My",
        "portfolio-title": "Portfolio",
        "portfolio-status-online": "Live",
        "portfolio-desc-1": "E-Commerce store with dynamic filters, cart system, and contact form.",
        "portfolio-desc-2": "Coffee shop website with interactive menu and local storage cart.",
        "portfolio-desc-3": "Motorcycle rental platform with dynamic listings, cart, and slider.",
        "portfolio-btn-demo": "View",
        "portfolio-btn-source": "Code",
        "portfolio-view-all": "View All Projects",
        "filter-all": "All",
        "filter-landing": "Landing",
        "filter-ecommerce": "E-Commerce",
        "filter-ui": "UI/UX",
        "filter-webapp": "Web App",

        // ===== Process =====
        "process-tag": "Work Process",
        "process-title": "How We Work Together?",
        "process-subtitle": "My method to turn ideas into final products",
        "process-step-1-title": "Requirement Analysis",
        "process-step-1-desc": "Consultation to understand your goals, needs and project vision",
        "process-step-2-title": "Design",
        "process-step-2-desc": "Creating wireframes and UI/UX design with your feedback",
        "process-step-3-title": "Development",
        "process-step-3-desc": "Clean coding and implementation using modern technologies",
        "process-step-4-title": "Testing & Review",
        "process-step-4-desc": "Full testing, bug fixing and optimization for best performance",
        "process-step-5-title": "Delivery & Support",
        "process-step-5-desc": "Project delivery and support after launch",

        // ===== Pricing =====
        "pricing-tag": "Pricing Plans",
        "pricing-title": "My Golden Packages",
        "pricing-subtitle": "Choose the best plan for your project",
        "pkg-1-badge": "Economy",
        "pkg-1-title": "Corporate Website",
        "pkg-1-price": "Starting from $500",
        "pkg-1-desc": "Perfect for service businesses, doctors, lawyers, and startups",
        "pkg-1-f1": "Custom UI/UX Design",
        "pkg-1-f2": "WordPress Implementation",
        "pkg-1-f3": "Fully Responsive",
        "pkg-1-f4": "Standard Security",
        "pkg-1-f5": "Online Payment Gateway",
        "pkg-1-btn": "Request Service",
        "pkg-2-badge": "Popular",
        "pkg-2-title": "E-Commerce Store",
        "pkg-2-price": "Starting from $1000",
        "pkg-2-desc": "A complete store with amazing loading speed and modern design",
        "pkg-2-f1": "Custom UI/UX Design",
        "pkg-2-f2": "Payment Gateway Integration",
        "pkg-2-f3": "Advanced Speed Optimization",
        "pkg-2-f4": "Persian Admin Panel",
        "pkg-2-f5": "3-Month Support",
        "pkg-2-btn": "Request Service",
        "pkg-3-badge": "Premium",
        "pkg-3-title": "Custom Development",
        "pkg-3-price": "Need Consultation",
        "pkg-3-desc": "For startups, custom systems, and complex web applications",
        "pkg-3-f1": "React / Next.js Development",
        "pkg-3-f2": "Amazing Loading Speed",
        "pkg-3-f3": "Enterprise Security",
        "pkg-3-f4": "Interactive Animations",
        "pkg-3-f5": "6-Month Support",
        "pkg-3-btn": "Request Consultation",

        // ===== FAQ =====
        "faq-tag": "FAQ",
        "faq-title": "Frequently Asked Questions",
        "faq-q1": "How long does it take to design and develop a website?",
        "faq-a1": "Project time depends on complexity and type. Corporate websites usually take 2-4 weeks and e-commerce stores 4-6 weeks.",
        "faq-q2": "Is it possible to make changes during the project?",
        "faq-a2": "Yes, I collaborate with clients throughout all stages and your feedback is very important. Changes in the design phase are completely free.",
        "faq-q3": "Do you provide support after project delivery?",
        "faq-a3": "Yes, all projects come with at least 3 months of free support, and for larger projects, support extends to 6 months.",
        "faq-q4": "Is the project optimized for SEO?",
        "faq-a4": "Yes, all projects are built with SEO principles and speed optimization to rank better in Google results.",

        // ===== Blog (Main Page) =====
        "blog-tag": "Blog",
        "blog-title": "Latest Articles",
        "blog-subtitle": "My knowledge and experience in design and development",
        "blog-title-1": "How to Create Great UI/UX Design?",
        "blog-excerpt-1": "In this article, we cover the key principles of user interface and user experience design...",
        "blog-title-2": "Best JavaScript Frameworks for 2025",
        "blog-excerpt-2": "Comparing React, Vue and Angular and their use cases in different projects...",
        "blog-title-3": "10 Golden Techniques to Speed Up Your Website",
        "blog-excerpt-3": "Increase your site speed by up to 50% with these techniques...",
        "blog-read-more": "Read More",
        "blog-view-all": "View All Articles",

        // ===== Blog (Separate Page) =====
        "blog-page-title": "Tech Blog",
        "blog-page-desc": "Articles, tutorials and my experiences in web design and development",
        "blog-back-home": "Back to Home",
        "blog-category-uiux": "UI/UX",
        "blog-category-dev": "Development",
        "blog-category-optimization": "Optimization",
        "blog-category-wordpress": "WordPress",
        "blog-category-seo": "SEO",
        "blog-sidebar-cta-title": "Start Your Project With Me",
        "blog-sidebar-cta-desc": "Looking for professional design or web development? I'm here to help you.",
        "blog-sidebar-cta-btn": "Start Collaboration",
        "blog-sidebar-categories": "Categories",
        "blog-sidebar-popular": "Most Popular",
        "blog-sidebar-newsletter": "Newsletter",
        "blog-sidebar-newsletter-desc": "Get the latest articles and tutorials in your inbox.",
        "blog-sidebar-subscribe": "Subscribe",
        "blog-newsletter-placeholder": "Enter your email",

        // ===== Blog Post Meta =====
        "blog-meta-date-1": "Jan 25, 2025",
        "blog-meta-read-1": "5 min read",
        "blog-meta-views-1": "1,200 views",
        "blog-meta-date-2": "Jan 18, 2025",
        "blog-meta-read-2": "7 min read",
        "blog-meta-views-2": "950 views",
        "blog-meta-date-3": "Jan 10, 2025",
        "blog-meta-read-3": "6 min read",
        "blog-meta-views-3": "2,100 views",
        "blog-meta-date-4": "Jan 5, 2025",
        "blog-meta-read-4": "4 min read",
        "blog-meta-views-4": "780 views",
        "blog-meta-date-5": "Dec 28, 2024",
        "blog-meta-read-5": "8 min read",
        "blog-meta-views-5": "1,500 views",
        "blog-meta-date-6": "Dec 20, 2024",
        "blog-meta-read-6": "5 min read",
        "blog-meta-views-6": "640 views",
        "blog-title-4": "WordPress or React? Which one to choose for your project?",
        "blog-excerpt-4": "A comprehensive comparison of WordPress and React for different web projects. Read about the pros, cons, and best use cases...",
        "blog-title-5": "Technical SEO for Front-End Developers",
        "blog-excerpt-5": "Everything a front-end developer needs to know about SEO. From HTML structure to Core Web Vitals and performance optimization...",
        "blog-title-6": "Interactive Animations with CSS and JavaScript",
        "blog-excerpt-6": "Learn how to create engaging interactive animations using CSS and JavaScript to improve user experience and make websites more attractive...",
        "blog-cat-1": "UI/UX Design (12)",
        "blog-cat-2": "Front-End Development (8)",
        "blog-cat-3": "WordPress (6)",
        "blog-cat-4": "Optimization (10)",
        "blog-cat-5": "SEO (5)",
        "blog-popular-1": "10 Golden Techniques to Speed Up Your Website",
        "blog-popular-2": "How to Create Great UI/UX Design?",
        "blog-popular-3": "Technical SEO for Developers",
        "blog-popular-4": "Best JavaScript Frameworks",

        // ===== Blog Filters =====
        "blog-filter-all": "All",
        "blog-filter-uiux": "UI/UX",
        "blog-filter-dev": "Development",
        "blog-filter-optimization": "Optimization",
        "blog-filter-wordpress": "WordPress",
        "blog-filter-seo": "SEO",

        // ===== Post Titles =====
        "post-title-1": "How to Create Great UI/UX Design?",
        "post-title-2": "Best JavaScript Frameworks for 2025",
        "post-title-3": "10 Golden Techniques to Speed Up Your Website",
        "post-title-4": "WordPress or React? Which one to choose for your project?",
        "post-title-5": "Technical SEO for Front-End Developers",
        "post-title-6": "Interactive Animations with CSS and JavaScript",

        // ===== Post Content (English) =====
        "post-content-1": `<div dir="ltr"><h2>Introduction</h2><p>UI/UX design is one of the most important factors in the success of a digital product. In this article, we explore the key principles and practical techniques for creating an excellent user experience.</p><h2>1. Understanding the User</h2><p>The first and most important step in UI/UX design is understanding your target users. Without knowing their needs, problems, and behaviors, no design can be successful.</p><h2>2. Simplicity and Minimalism</h2><p>Simple and minimalist design is always the best choice. Removing unnecessary elements and focusing on the main content improves the user experience.</p><blockquote>"Good design is when the user doesn't notice it." - Dieter Rams</blockquote><h2>3. Feedback and Interaction</h2><p>Users should always know what is happening. Visual and interactive feedback gives users a sense of control and trust.</p><h2>4. Continuous Testing and Improvement</h2><p>UI/UX design is an ongoing process. By testing designs with real users and gathering feedback, you can continuously improve the user experience.</p><h2>Conclusion</h2><p>Great UI/UX design requires a combination of technical skills, understanding of user psychology, and creativity. By following the principles discussed in this article, you can create products that users will love.</p></div>`,
        "post-content-2": `<div dir="ltr"><h2>Introduction</h2><p>Choosing the right JavaScript framework is one of the most important decisions a developer can make. In this article, we compare three popular frameworks: React, Vue, and Angular.</p><h2>1. React</h2><p>React, developed by Facebook, is currently the most popular JavaScript library for building user interfaces.</p><ul><li>✅ Virtual DOM for high performance</li><li>✅ JSX for cleaner code</li><li>✅ Rich ecosystem and excellent support</li><li>✅ React Native for mobile apps</li></ul><h2>2. Vue.js</h2><p>Vue.js is a progressive and flexible framework developed by Evan You.</p><ul><li>✅ Gentle learning curve</li><li>✅ High flexibility</li><li>✅ Great performance</li><li>✅ Excellent documentation</li></ul><h2>3. Angular</h2><p>Angular is a complete and powerful framework developed by Google.</p><ul><li>✅ MVC architecture</li><li>✅ Dependency Injection</li><li>✅ TypeScript as the main language</li><li>✅ Powerful tools for large projects</li></ul><h2>Final Comparison</h2><p>Choosing between these frameworks depends on your project needs. React is great for large and complex projects, Vue is suitable for quick starts and small to medium projects, and Angular is the best choice for enterprise projects with large teams.</p></div>`,
        "post-content-3": `<div dir="ltr"><h2>Introduction</h2><p>Website speed is one of the most important factors in user experience and SEO. In this article, we teach you 10 practical and proven techniques to speed up your website.</p><h2>1. Image Optimization</h2><p>Heavy images are one of the main causes of slow websites. Compressing images and using modern formats like WebP can significantly reduce image size.</p><h2>2. Use CDN</h2><p>Content Delivery Network (CDN) stores static files on servers around the world, increasing loading speed for users in different locations.</p><h2>3. Browser Caching</h2><p>Caching static files in the user's browser eliminates the need to re-download them on subsequent visits.</p><blockquote>"Every second of delay in page loading reduces conversion rate by 7%."</blockquote><h2>4. Minify CSS and JavaScript</h2><p>Removing unnecessary spaces, comments, and characters from CSS and JavaScript files can reduce their size by up to 30%.</p><h2>5. Lazy Loading</h2><p>With lazy loading, images and content outside the viewport are only loaded when the user scrolls to them.</p><h2>6. Font Optimization</h2><p>Custom fonts can significantly impact speed. Consider using system fonts or optimized font loading methods.</p><h2>7. Reduce HTTP Requests</h2><p>Reduce the number of HTTP requests by combining CSS and JavaScript files and using sprites for images.</p><h2>8. Use Gzip</h2><p>Compressing files with Gzip can reduce data transfer size by up to 70%.</p><h2>9. Database Optimization</h2><p>Heavy and unoptimized databases can slow down your website. Proper indexing and query optimization are essential.</p><h2>10. Use HTTP/2</h2><p>HTTP/2 protocol with features like Multiplexing and Server Push significantly improves loading speed.</p></div>`,
        "post-content-4": `<div dir="ltr"><h2>Introduction</h2><p>One of the common questions among developers and business owners is choosing between WordPress and React for a web project. In this article, we compare these two powerful tools.</p><h2>WordPress</h2><p>WordPress is a popular Content Management System (CMS) that powers over 40% of websites worldwide.</p><ul><li>✅ Quick and easy setup</li><li>✅ Thousands of ready-made themes and plugins</li><li>✅ User-friendly admin panel</li><li>✅ Suitable for content and e-commerce websites</li><li>✅ Large community and extensive support</li></ul><h2>React</h2><p>React is a JavaScript library for building user interfaces, developed by Facebook.</p><ul><li>✅ Exceptional performance</li><li>✅ Single Page Application (SPA) development</li><li>✅ Reusable components</li><li>✅ Rich ecosystem and advanced tools</li><li>✅ Suitable for complex applications</li></ul><h2>Comparison and Selection</h2><p>Choosing between WordPress and React depends on your project needs.</p><ul><li>🔹 If you need a content, e-commerce, or corporate website → <strong>WordPress</strong></li><li>🔹 If you need a complex and interactive web application → <strong>React</strong></li></ul><h2>Conclusion</h2><p>Neither tool is superior to the other. The right choice depends on your project needs, budget, and goals.</p></div>`,
        "post-content-5": `<div dir="ltr"><h2>Introduction</h2><p>SEO is not just about content creation. Front-end developers play a very important role in optimizing websites for search engines.</p><h2>1. Semantic HTML Structure</h2><p>Proper use of HTML tags like h1 to h6, header, nav, main, article, and section helps search engines better understand your content structure.</p><h2>2. Core Web Vitals</h2><p>Core Web Vitals are a set of performance metrics introduced by Google:</p><ul><li>📊 Largest Contentful Paint (LCP)</li><li>📊 First Input Delay (FID)</li><li>📊 Cumulative Layout Shift (CLS)</li></ul><h2>3. Image Optimization</h2><p>Using modern image formats (WebP, AVIF) and loading="lazy" is very important.</p><h2>4. Structured Data</h2><p>Structured data (Schema Markup) helps search engines better understand your content.</p><blockquote>"SEO is not a competition; it's a collaboration between you and search engines to provide the best experience for users."</blockquote><h2>5. Font Optimization</h2><p>Loading custom fonts can negatively impact speed. Use display="swap".</p><h2>Conclusion</h2><p>Front-end developers following technical SEO principles can significantly improve website rankings.</p></div>`,
        "post-content-6": `<div dir="ltr"><h2>Introduction</h2><p>Interactive animations are an effective way to engage users and improve user experience.</p><h2>1. CSS Animations</h2><p>CSS animations are powerful tools for creating smooth and attractive movements without JavaScript.</p><h2>2. JavaScript Animations</h2><p>For more control and complex animations, JavaScript is the best option. Use popular libraries like GSAP.</p><h2>3. Intersection Observer</h2><p>Using the Intersection Observer API, you can run animations exactly when the user scrolls to them.</p><blockquote>"Animations should be purposeful and help users interact better with the product."</blockquote><h2>4. Performance Optimization</h2><p>For smooth animations, use transform and opacity properties.</p><h2>Conclusion</h2><p>If used correctly, interactive animations can take user experience to the next level.</p></div>`,

        // ===== Portfolio (Separate Page) =====
        "portfolio-page-title": "My Portfolio",
        "portfolio-page-desc": "Projects I've designed and developed with love and expertise",
        "portfolio-back-home": "Back to Home",
        "portfolio-stat-satisfaction": "Client Satisfaction",
        "portfolio-cta-title": "Ready to collaborate? Contact me",
        "portfolio-status-dev": "In Development",
        "portfolio-project-4-title": "Black Coffee",
        "portfolio-project-4-desc": "Modern and minimalist website for a coffee shop with stunning design and great user experience.",
        "portfolio-tech-react": "React",
        "portfolio-tech-node": "Node.js",
        "portfolio-tech-tailwind": "Tailwind",

        // ===== Coming Soon =====
        "coming-soon-title": "Coming Soon",
        "coming-soon-title-highlight": "New Projects",
        "coming-soon-desc": "Our team is designing and developing exciting and modern projects. Soon you will see new and creative portfolio projects built with the latest technologies.",
        "coming-soon-project-1": "Smart Online Store",
        "coming-soon-project-2": "Project Management App",
        "coming-soon-project-3": "Professional Corporate Website",

        // ===== Contact =====
        "contact-tag": "Contact Me",
        "contact-title": "Let's create <span class=\"gradient-text\">something special</span> together",
        "contact-subtitle": "Ways to get in touch with me",
        "contact-email-label": "Email",
        "contact-phone-label": "Phone",
        "contact-location-label": "Location",
        "contact-location": "Tehran, Iran",
        "contact-remote": "🌍 Open to remote work worldwide",
        "contact-send": "Send Message",

        // ===== Form =====
        "form-name": "Full Name",
        "form-email": "Email",
        "form-phone": "Phone Number",
        "form-package": "Project Type",
        "form-select-placeholder": "Please select an option",
        "form-option-1": "Corporate Website",
        "form-option-2": "E-Commerce Store",
        "form-option-3": "Custom Development (React/Next.js)",
        "form-option-4": "SEO & Speed Optimization",
        "form-budget": "Estimated Budget",
        "budget-1": "Under $500",
        "budget-2": "$500 - $1000",
        "budget-3": "$1000 - $3000",
        "budget-4": "Above $3000",
        "form-desc": "Project Description",
        "contact-subject-label": "Subject",
        "contact-message-label": "Message",

        // ===== Footer =====
        "footer-desc": "UI/UX Designer & Front-End Developer crafting beautiful, responsive digital experiences with modern technologies.",
        "footer-status": "Accepting New Projects",
        "footer-quick-links": "Quick Links",
        "footer-connect": "Social Connect",
        "footer-newsletter": "Newsletter",
        "footer-newsletter-desc": "Subscribe to get the latest projects, articles, and web design tips.",
        "footer-subscribe": "Subscribe",
        "footer-crafted": "Crafted with",
        "footer-tech": "using HTML, CSS & JavaScript",
        "footer-privacy": "Privacy Policy",
        "footer-terms": "Terms of Service",
        "footer-all-rights": "All Rights Reserved",
        "footer-newsletter-placeholder": "Enter your email"
    }
};

// START_ARTICLES
// =========================================
// 2. داده‌های مقالات
// =========================================
const postsData = {
    1: {
        id: 1,
        title: 'چگونه یک طراحی UI/UX عالی داشته باشیم؟',
        category: 'UI/UX',
        categoryClass: 'uiux',
        date: '۲۵ دی ۱۴۰۴',
        readTime: '۵ دقیقه',
        views: '۱,۲۰۰ بازدید',
        image: './img/blog-1.jpg',
        tags: ['UI/UX', 'طراحی', 'تجربه کاربری']
    },
    2: {
        id: 2,
        title: 'بهترین فریم‌ورک‌های جاوااسکریپت برای ۲۰۲۵',
        category: 'توسعه',
        categoryClass: 'development',
        date: '۱۸ دی ۱۴۰۴',
        readTime: '۷ دقیقه',
        views: '۹۵۰ بازدید',
        image: './img/blog-2.webp',
        tags: ['JavaScript', 'React', 'Vue', 'Angular', 'توسعه']
    },
    3: {
        id: 3,
        title: '۱۰ تکنیک طلایی برای افزایش سرعت وب‌سایت',
        category: 'بهینه‌سازی',
        categoryClass: 'optimization',
        date: '۱۰ دی ۱۴۰۴',
        readTime: '۶ دقیقه',
        views: '۲,۱۰۰ بازدید',
        image: './img/blog-3.jpg',
        tags: ['سرعت', 'بهینه‌سازی', 'سئو', 'عملکرد']
    },
    4: {
        id: 4,
        title: 'وردپرس یا React؟ کدام را برای پروژه خود انتخاب کنیم؟',
        category: 'وردپرس',
        categoryClass: 'wordpress',
        date: '۵ دی ۱۴۰۴',
        readTime: '۴ دقیقه',
        views: '۷۸۰ بازدید',
        image: './img/blog-4.jpg',
        tags: ['وردپرس', 'React', 'مقایسه', 'انتخاب']
    },
    5: {
        id: 5,
        title: 'سئو فنی برای توسعه‌دهندگان فرانت‌اند',
        category: 'سئو',
        categoryClass: 'seo',
        date: '۲۸ آذر ۱۴۰۴',
        readTime: '۸ دقیقه',
        views: '۱,۵۰۰ بازدید',
        image: './img/blog-5.jpg',
        tags: ['سئو', 'فرانت‌اند', 'Core Web Vitals', 'بهینه‌سازی']
    },
    6: {
        id: 6,
        title: 'انیمیشن‌های تعاملی با CSS و JavaScript',
        category: 'UI/UX',
        categoryClass: 'uiux',
        date: '۲۰ آذر ۱۴۰۴',
        readTime: '۵ دقیقه',
        views: '۶۴۰ بازدید',
        image: './img/blog-6.jpg',
        tags: ['انیمیشن', 'CSS', 'JavaScript', 'UI/UX']
    }
};
// END_ARTICLES

// =========================================
// 3. سیستم ترجمه
// =========================================
let currentLang = localStorage.getItem("language") || "fa";

function loadPostContent() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    const container = document.getElementById('postContent');

    if (!container) return;

    const lang = document.documentElement.lang || 'fa';

    if (postId && postsData[postId]) {
        const post = postsData[postId];
        const contentKey = 'post-content-' + postId;
        const titleKey = 'post-title-' + postId;

        let translatedTitle = post.title;
        if (translations[lang] && translations[lang][titleKey]) {
            translatedTitle = translations[lang][titleKey];
        }

        let content = '';
        if (translations[lang] && translations[lang][contentKey]) {
            content = translations[lang][contentKey];
        } else {
            content = translations['fa'][contentKey] || '<p>محتوای مقاله یافت نشد</p>';
        }

        const dir = lang === 'fa' ? 'rtl' : 'ltr';

        container.innerHTML = `
            <header class="blog-post-header" data-aos="fade-down">
                <a href="blog.html" class="back-to-home">
                    <i class="ri-arrow-right-line"></i>
                    <span>${lang === 'fa' ? 'بازگشت به وبلاگ' : 'Back to Blog'}</span>
                </a>
                <span class="post-category">${post.category}</span>
                <h1>${translatedTitle}</h1>
                <div class="post-meta">
                    <span><i class="ri-calendar-line"></i> ${post.date}</span>
                    <span><i class="ri-time-line"></i> ${post.readTime}</span>
                    <span><i class="ri-eye-line"></i> ${post.views}</span>
                </div>
            </header>

            <div class="blog-post-container">
                <img src="${post.image}" alt="${translatedTitle}" class="blog-post-image" loading="lazy" />
                
                <div class="blog-post-content" dir="${dir}">
                    ${content}
                    
                    <div class="post-tags">
                        ${post.tags.map(tag => `<span>#${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `
            <header class="blog-post-header" data-aos="fade-down">
                <a href="blog.html" class="back-to-home">
                    <i class="ri-arrow-right-line"></i>
                    <span>${lang === 'fa' ? 'بازگشت به وبلاگ' : 'Back to Blog'}</span>
                </a>
            </header>
            <div class="not-found">
                <h2>🔍 ${lang === 'fa' ? 'مقاله‌ای یافت نشد' : 'Article Not Found'}</h2>
                <p>${lang === 'fa' ? 'متأسفیم، مقاله‌ای که به دنبال آن هستید وجود ندارد یا حذف شده است.' : 'Sorry, the article you are looking for does not exist or has been removed.'}</p>
                <a href="blog.html" class="back-btn">
                    <i class="ri-arrow-right-line"></i>
                    ${lang === 'fa' ? 'بازگشت به وبلاگ' : 'Back to Blog'}
                </a>
            </div>
        `;
    }

    if (typeof AOS !== 'undefined') {
        setTimeout(() => AOS.refresh(), 100);
    }
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("language", lang);

    const html = document.documentElement;
    html.setAttribute("lang", lang);
    html.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");

    const heroName = document.getElementById("hero-name");
    if (heroName) {
        heroName.textContent = lang === "fa" ? "حامد" : "Hamed";
    }

    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang] && translations[lang][key]) {
            const text = translations[lang][key];
            if (text.includes('<strong>') || text.includes('<span') || text.includes('<i>') || text.includes('<div')) {
                el.innerHTML = text;
            } else {
                el.textContent = text;
            }
        }
    });

    const langCurrent = document.getElementById("lang-current-label");
    if (langCurrent) {
        langCurrent.textContent = lang === "en" ? "EN" : "FA";
    }

    document.querySelectorAll(".lang-option").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    closeDropdown();

    if (document.getElementById('postContent')) {
        loadPostContent();
    }

    if (typeof AOS !== "undefined") {
        setTimeout(() => AOS.refresh(), 300);
    }
}

// =========================================
// 4. کنترل‌های زبان
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

    document.addEventListener("click", function(e) {
        if (!e.target.closest(".language-selector")) {
            closeDropdown();
        }
    });

    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && langDropdown.classList.contains("open")) {
            closeDropdown();
        }
    });
}

// =========================================
// 5. تنظیم زبان اولیه
// =========================================
setLanguage(currentLang);

// =========================================
// 6. دکمه تغییر تم
// =========================================
const themeBtn = document.getElementById("theme-switch-btn");
let isDarkMode = localStorage.getItem("theme") !== "light";

function applyTheme(dark) {
    if (dark) {
        document.body.classList.remove("light-mode");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.add("light-mode");
        localStorage.setItem("theme", "light");
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
// 7. منوی موبایل
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
                if (index === 0) bar.style.transform = "translateY(7px) rotate(45deg)";
                else if (index === 1) bar.style.opacity = "0";
                else if (index === 2) bar.style.transform = "translateY(-7px) rotate(-45deg)";
            });
        } else {
            bars.forEach(bar => {
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
        if (isMenuOpen) toggleMenu(false);
    });
}

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isMenuOpen) toggleMenu(false);
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && isMenuOpen) toggleMenu(false);
});

// =========================================
// 8. اسکرول نرم و هایلایت منو
// =========================================
function updateActiveLink() {
    const sections = document.querySelectorAll("section[id], main[id]");
    const navLinks = document.querySelectorAll(".desktop-menu .nav-link, .mobile-menu-inner .nav-link");
    let currentId = "";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            currentId = section.getAttribute("id");
        }
    });
    
    navLinks.forEach(link => {
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
                window.scrollTo({ top: targetElement.offsetTop - 30, behavior: 'smooth' });
                if (isMenuOpen) toggleMenu(false);
            }
        }
    });
});

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// =========================================
// 9. نوار پیشرفت اسکرول
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
// 10. دکمه بازگشت به بالا
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
    if (window.scrollY > 300) backBtn.classList.add('visible');
}

// =========================================
// 11. EmailJS - ارسال ایمیل
// =========================================
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'TbmVf_fy2WS8a__28',
    SERVICE_ID: 'service_x7htl7m',
    TEMPLATE_ID: 'template_p6pzsrr'
};

(function initEmailJS() {
    if (typeof emailjs === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.async = true;
        document.head.appendChild(script);
        
        script.onload = function() {
            emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
            console.log('✅ EmailJS loaded');
        };
    } else {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }
})();

// =========================================
// 12. فرم تماس (با EmailJS)
// =========================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const projectType = document.getElementById('contact-project-type').value;
        const budget = document.getElementById('contact-budget').value;
        const message = document.getElementById('contact-message').value.trim();
        
        // ===== اعتبارسنجی =====
        if (!name || !email || !message) {
            showToast('❌ لطفاً تمام فیلدهای ضروری (نام، ایمیل، پیام) را پر کنید');
            return;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showToast('❌ لطفاً یک ایمیل معتبر وارد کنید');
            return;
        }
        
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="ri-loader-4-line ri-spin"></i> در حال ارسال...';
        submitBtn.disabled = true;
        
        try {
            const templateParams = {
                from_name: name,
                from_email: email,
                project_type: projectType || 'Not specified',
                budget: budget || 'Not specified',
                message: message,
                to_name: 'Hamed',
                reply_to: email
            };
            
            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams
            );
            
            showToast(`✅ تشکر ${name}! پیام شما با موفقیت ارسال شد. به زودی با شما تماس می‌گیرم.`);
            contactForm.reset();
            
        } catch (error) {
            console.error('❌ Error sending email:', error);
            showToast('❌ خطا در ارسال پیام. لطفاً دوباره تلاش کنید.');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// =========================================
// 13. خبرنامه (با EmailJS)
// =========================================
const newsletterForm = document.getElementById('newsletterForm');
const newsletterForms = document.querySelectorAll('.newsletter-form');

newsletterForms.forEach(form => {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const input = this.querySelector('input[type="email"]');
        if (!input) return;
        
        const email = input.value.trim();
        const submitBtn = this.querySelector('button');
        const originalText = submitBtn.innerHTML;
        
        if (!email) {
            showToast('❌ لطفاً ایمیل خود را وارد کنید');
            return;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showToast('❌ لطفاً یک ایمیل معتبر وارد کنید');
            return;
        }
        
        submitBtn.innerHTML = '<i class="ri-loader-4-line ri-spin"></i>';
        submitBtn.disabled = true;
        
        try {
            const templateParams = {
                from_email: email,
                to_name: 'Hamed',
                subject: 'Newsletter Subscription',
                message: `New email for newsletter: ${email}`
            };
            
            await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams
            );
            
            showToast('✅ با موفقیت عضو شدید! 🎉');
            input.value = '';
            
        } catch (error) {
            console.error('❌ Newsletter subscription error:', error);
            showToast('❌ خطا در عضویت. لطفاً دوباره تلاش کنید.');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
});

// =========================================
// 14. دکمه‌های سفارش
// =========================================
document.querySelectorAll('.order-trigger').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const packageName = this.getAttribute('data-package');
        const select = document.getElementById('contact-project-type');
        if (select && packageName) {
            const options = select.options;
            for (let i = 0; i < options.length; i++) {
                if (options[i].value === packageName || options[i].text.includes(packageName)) {
                    select.value = options[i].value;
                    break;
                }
            }
        }
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
});

// =========================================
// 15. فیلتر پروژه‌ها
// =========================================
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.dataset.filter;
        document.querySelectorAll('.portfolio-card').forEach(card => {
            if (filter === 'all' || card.dataset.category === filter) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// =========================================
// 16. FAQ Toggle
// =========================================
function toggleFaq(element) {
    const item = element.closest('.faq-item');
    const isActive = item.classList.contains('active');
    
    document.querySelectorAll('.faq-item').forEach(el => {
        el.classList.remove('active');
    });
    
    if (!isActive) {
        item.classList.add('active');
    }
}

// =========================================
// 17. Toast Notification
// =========================================
function showToast(message) {
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'toastSlideDown 0.4s ease forwards';
        setTimeout(() => toast.remove(), 400);
    }, 5000);
}

// =========================================
// 18. فعال‌سازی AOS
// =========================================
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 500,
        once: true,
        offset: 40,
        easing: 'ease-out',
        delay: 0,
        mirror: false
    });
    
    window.addEventListener('load', function () {
        setTimeout(function () { AOS.refresh(); }, 100);
    });
    
    window.addEventListener('resize', function () { AOS.refresh(); });
}

// =========================================
// 19. ایجاد ذرات
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
    
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    
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
            p.style.transform = `translate(${currentX + offsetX}px, ${currentY + offsetY}px)`;
        });
        requestAnimationFrame(animateParticles);
    }
    animateParticles();
    
    function updateParticlesForTheme() {
        const isLight = document.body.classList.contains('light-mode');
        const opacity = isLight ? '0.12' : '0.25';
        particles.forEach(p => { p.style.opacity = opacity; });
    }
    
    const observer = new MutationObserver(() => updateParticlesForTheme());
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    updateParticlesForTheme();
})();

// =========================================
// 20. بارگذاری مقاله هنگام لود صفحه
// =========================================
document.addEventListener('DOMContentLoaded', function() {
    loadPostContent();
});

// =========================================
// 21. فیلتر دسته‌بندی وبلاگ
// =========================================
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryFilter = urlParams.get("category");

    if (categoryFilter) {
        document.querySelectorAll(".blog-filter-btn").forEach((btn) => {
            btn.classList.remove("active");
            if (btn.dataset.filter === categoryFilter) {
                btn.classList.add("active");
            }
        });

        document.querySelectorAll(".blog-page-card").forEach((card) => {
            if (card.dataset.category === categoryFilter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        const filterNames = {
            uiux: "UI/UX",
            development: "توسعه",
            optimization: "بهینه‌سازی",
            wordpress: "وردپرس",
            seo: "سئو"
        };
        const headerTitle = document.querySelector(".blog-page-header h1");
        const lang = document.documentElement.lang || 'fa';
        if (headerTitle && filterNames[categoryFilter]) {
            headerTitle.innerHTML = `📝 ${filterNames[categoryFilter]} - ${lang === 'fa' ? 'مقالات' : 'Articles'}`;
        }
    }

    document.querySelectorAll(".blog-filter-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
            const filter = this.dataset.filter;
            if (filter === "all") {
                window.location.href = window.location.pathname;
            } else {
                window.location.href = `?category=${filter}`;
            }
        });
    });
});

// =========================================
// 22. کنسول لاگ با ایمیل اصلاح‌شده
// =========================================
console.log('🚀 Hamed - Professional Web Design & Development');
console.log('📞 Contact us for projects: hj904549@gmail.com');
