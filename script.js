// تعریف متن‌ها برای دو زبان
const messages = {
    fa: {
        title: 'دیاکو - آزمایش دیابت',
        titleResult: 'دیاکو - نتیجه آزمایش',
        titleBMI: 'دیاکو - محاسبه BMI',
        titleThanks: 'دیاکو - تشکر',
        titleAbout: 'دیاکو - درباره من و پروژه', // <-- کلید جدید برای Title مرورگر
        mainTitleAbout: 'دیاکو - درباره من و پروژه', // <-- کلید جدید برای H1 اصلی
        langBtn: 'English',
        themeBtn: '☀️',
        nameLabel: 'نام و نام خانوادگی',
        ageLabel: 'سن (سال)',
        glucoseLabel: 'غلظت گلوکز (mg/dL)',
        bmiLabel: 'BMI (شاخص توده بدنی)',
        pedigreeLabel: 'تابع خانوادگی دیابت (0.0 - 2.5)',
        ageCaption: 'بین 1 تا 120',
        glucoseCaption: 'بین 0 تا 400',
        bmiCaption: 'بین 10 تا 70 (مثلا 24.5)',
        pedigreeCaption: 'بین 0 تا 2.5 (مثلا 0.52)',
        bmiBtn: 'کمک برای محاسبه BMI',
        submitBtn: 'بررسی دیابت',
        nameError: 'نام فقط باید شامل حروف فارسی یا انگلیسی باشد',
        numberError: 'مقدار وارد شده معتبر نیست',
        requiredError: 'این فیلد الزامی است',
        rangeError: 'مقدار وارد شده در محدوده مجاز نیست',
        resultPositive: 'نتیجه: احتمال وجود دیابت',
        resultNegative: 'نتیجه: عدم احتمال دیابت',
        attentionCheckup: '<strong>توجه:</strong> این ابزار صرفاً یک مدل پیش‌بینی‌کننده بر اساس داده‌های آماری است و هرگز جایگزین تشخیص پزشک متخصص نمی‌شود. <strong>لطفاً برای اطمینان کامل از وضعیت سلامتی خود، چکاپ و آزمایش‌های سالانه را جدی بگیرید و با پزشک مشورت نمایید.</strong>',
        // تغییرات جدید برای پیام تشکر
        thanksHeaderTitle: 'از شما متشکریم!', 
        testAgainButton: 'آزمایش دوباره', 
        thankMessageNamed: (name) => `از جناب اقای/سرکار خانم <strong>${name} گرامی</strong> بابت شرکت در این آزمایش متشکریم.`,
        thankMessageGeneric: 'از شما <strong>آزمایش‌دهنده گرامی</strong> بابت شرکت در این آزمایش متشکریم.',
        // کلید جدید برای هدر شخصی‌سازی شده (اصلاح اعمال شده)
        thanksHeaderNamed: (name) => `سپاسگزاریم، ${name}!` ,
        // متن‌های دیگر
        subtitle: 'دیاکو یک ابزار آزمایش و <strong>غربالگری</strong> دیابت است. <strong>نتایج کامل نیستند</strong>، برای اطمینان کامل به پزشک مراجعه کنید.', 
        footerThanks: 'تشکر ویژه از دکتر سیامک سلیمی', 
        checkupReminder: 'لطفاً برای اطمینان کامل از وضعیت سلامتی خود، چکاپ و آزمایشات سالانه را نادیده نگیرید.',
        thanksLink: 'مشاهده صفحه تشکر',
        testAgainLink: 'آزمایش مجدد',
        resultPageTitle: 'دیاکو - نتیجه آزمایش',
        bmiSubtitle: '<strong>شاخص توده بدنی (BMI)</strong> یک معیار ساده برای ارزیابی وزن شما نسبت به قدتان است.',
        weightLabel: 'وزن (کیلوگرم)',
        heightLabel: 'قد (متر)',
        calculateBtn: 'محاسبه BMI',
        bmiResultLabel: 'BMI شما:',
        backToMain: 'بازگشت به فرم اصلی',
        aboutHeader: 'درباره پروژه',
        aboutAuthor: 'درباره من',
        aboutProject: 'این پروژه با هدف کمک به شناسایی اولیه دیابت طراحی شده است. این ابزار بر اساس یک مدل یادگیری ماشین ساده عمل می‌کند و نتیجه‌ای تقریبی را ارائه می‌دهد.',
        // کلید جدید برای متن "درباره من"
        aboutMe: `من **محمدرضا شهبازی** هستم، توسعه‌دهنده وب و علاقه‌مند به هوش مصنوعی و علم داده. پروژه دیاکو، تلاشی شخصی برای ترکیب مهارت‌های توسعه وب با مدل‌های ساده یادگیری ماشین است. هدف من، ساختن ابزارهای کاربردی و دقیق برای جامعه است.<br><br> برای دیدن پروژه‌های بیشتر یا ارتباط کاری با من، می‌توانید از طریق لینک‌های زیر در تماس باشید: <br> 🔗 **لینکدین:** <a href="https://www.linkedin.com/in/mohammadreza-shahbazi-313sh" target="_blank">mohammadreza-shahbazi-313sh</a> <br> 💻 **گیت‌هاب:** <a href="https://github.com/Mohammadreza-Shahbazi313" target="_blank">Mohammadreza-Shahbazi313</a> <br> 📧 **ایمیل:** <a href="mailto:eminemengland2000@gmail.com">eminemengland2000@gmail.com</a>`,
        accuracyInfo: 'دقت مدل:',
        accuracyDesc: 'این مدل یک نمونه اولیه (Proof-of-Concept) است که بر اساس وزن‌دهی به عوامل خطر شناخته‌شده دیابت توسعه یافته است. دقت مدل، با استناد به نتایج حاصل از یک دیتاست معتبر (مانند دیتاسِت Pima Indian Diabetes) و برای نمایش توانایی‌های الگوریتم، حدود **۸۵٪** در نظر گرفته شده است.',
        footerText: 'ساخته شده توسط محمدرضا شهبازی',
        githubTag: 'اگر حمایت کنید خوشحال می‌شم',
        logoClickMessage: 'برای دیدن اطلاعات بیشتر، روی لوگو کلیک کنید',
        inputDataHeader: 'داده‌های ورودی',
        bmiFormulaImg: 'per-bmi-calculate.jpg',
    },
    en: {
        title: 'Diaco - Diabetes Test',
        titleResult: 'Diaco - Test Result',
        titleBMI: 'Diaco - BMI Calculation',
        titleThanks: 'Diaco - Thank You',
        titleAbout: 'Diaco - About Me & Project', // <-- کلید جدید برای Title مرورگر
        mainTitleAbout: 'Diaco - About Me & Project', // <-- کلید جدید برای H1 اصلی
        langBtn: 'فارسی',
        themeBtn: '🌙',
        nameLabel: 'Full Name',
        ageLabel: 'Age (years)',
        glucoseLabel: 'Glucose Concentration (mg/dL)',
        bmiLabel: 'BMI (Body Mass Index)',
        pedigreeLabel: 'Diabetes Pedigree Function (0.0 - 2.5)',
        ageCaption: 'Between 1 to 120',
        glucoseCaption: 'Between 0 to 400',
        bmiCaption: 'Between 10 to 70 (e.g., 24.5)',
        pedigreeCaption: 'Between 0 to 2.5 (e.g., 0.52)',
        bmiBtn: 'Help with BMI Calculation',
        submitBtn: 'Check for Diabetes',
        nameError: 'Name should only contain letters',
        numberError: 'Invalid number value',
        requiredError: 'This field is required',
        rangeError: 'Value is outside the allowed range',
        resultPositive: 'Result: Potential Diabetes',
        resultNegative: 'Result: Low Diabetes Likelihood',
        attentionCheckup: '<strong>ATTENTION:</strong> This tool is solely a predictive model based on statistical data and is never a substitute for a specialist physician\'s diagnosis. <strong>Please take annual checkups and tests seriously and consult your doctor to ensure your full health status.</strong>',
        // تغییرات جدید برای پیام تشکر
        thanksHeaderTitle: 'Thank You!', 
        testAgainButton: 'Test Again', 
        thankMessageNamed: (name) => `We sincerely thank **${name}** for participating in this screening.`,
        thankMessageGeneric: 'We sincerely thank the **dear test-taker** for participating in this screening.',
        // کلید جدید برای هدر شخصی‌سازی شده (اصلاح اعمال شده)
        thanksHeaderNamed: (name) => `Thank You, ${name}!`,
        // متن‌های دیگر
        subtitle: 'Diaco is a diabetes testing and <strong>screening</strong> tool. <strong>Results are not complete</strong>; consult a doctor for full assurance.', 
        footerThanks: 'Special thanks to Dr. Siamak Salimy', 
        checkupReminder: 'Please do not neglect annual checkups and tests for complete assurance of your health status.',
        thanksLink: 'View Thank You Page',
        testAgainLink: 'Test Again',
        resultPageTitle: 'Diaco - Test Result',
        bmiSubtitle: '<strong>Body Mass Index (BMI)</strong> is a simple measure used to assess your body weight relative to your height.',
        weightLabel: 'Weight (kg)',
        heightLabel: 'Height (m)',
        calculateBtn: 'Calculate BMI',
        bmiResultLabel: 'Your BMI:',
        backToMain: 'Back to Main Form',
        aboutHeader: 'About the Project',
        aboutAuthor: 'About Me',
        aboutProject: 'This project is designed to assist in the early identification of diabetes. The tool operates based on a simple Machine Learning model and provides an approximate result.',
        // کلید جدید برای متن "درباره من"
        aboutMe: `I am **Mohammadreza Shahbazi**, a Web Developer and enthusiast of AI and Data Science. The Diaco project is a personal endeavor to merge web development skills with simple Machine Learning models. My goal is to build practical and accurate tools for the community.<br><br> You can connect with me for more projects or career opportunities using the links below: <br> 🔗 **LinkedIn:** <a href="https://www.linkedin.com/in/mohammadreza-shahbazi-313sh" target="_blank">mohammadreza-shahbazi-313sh</a> <br> 💻 **GitHub:** <a href="https://github.com/Mohammadreza-Shahbazi313" target="_blank">Mohammadreza-Shahbazi313</a> <br> 📧 **Email:** <a href="mailto:eminemengland2000@gmail.com">eminemengland2000@gmail.com</a>`,
        accuracyInfo: 'Model Accuracy:',
        accuracyDesc: 'This model is a Proof-of-Concept developed based on weighting known diabetes risk factors. The model\'s accuracy is set to approximately **85%** (referencing results from a reliable dataset like the Pima Indian Diabetes Dataset) to demonstrate the algorithm\'s potential capabilities.',
        footerText: 'Made by Mohammadreza Shahbazi',
        githubTag: 'I would be happy if you support me',
        logoClickMessage: 'Click on the logo for more information',
        inputDataHeader: 'Input Data',
        bmiFormulaImg: 'en-bmi-calculate.png',
    }
};

let currentLang = localStorage.getItem('appLang') || 'fa';

// --- تابع نمایش نتیجه و تغییر رنگ (جدید و جایگزین بخشی از loadResultData قدیمی) ---
function displayResultText(lang) {
    // اگر در صفحه نتیجه نیستیم، کاری نکن
    if (!document.getElementById('result-container')) return;

    const dataString = sessionStorage.getItem('diabetesResultData');
    if (!dataString) return;

    const data = JSON.parse(dataString);
    const m = messages[lang || currentLang];
    
    // المان‌های هدف
    const resultText = document.getElementById('prediction-result');
    const resultBox = document.getElementById('result-box');

    // --- بخش نمایش نتیجه پیش‌بینی ---
    if (resultText && resultBox) {
        if (data.isPositive) {
            resultText.textContent = m.resultPositive;
            resultText.classList.remove('result-negative');
            resultText.classList.add('result-positive');
            resultBox.classList.remove('result-negative-bg');
            resultBox.classList.add('result-positive-bg');
        } else {
            resultText.textContent = m.resultNegative;
            resultText.classList.remove('result-positive');
            resultText.classList.add('result-negative');
            resultBox.classList.remove('result-positive-bg');
            resultBox.classList.add('result-negative-bg');
        }
    }
}

// --- تابع تغییر زبان (اصلاح‌شده برای مدیریت فونت و عنوان صفحه) ---
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('appLang', lang);
    const m = messages[lang];
    const isRtl = lang === 'fa';
    
    // --- [شروع اصلاح ۱: مشکل فونت] ---
    // ۱. تنظیم جهت صفحه و کلاس فونت (بخش کلیدی برای رفع مشکل فونت)
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.body.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

    // **اضافه کردن کلاس lang-fa/lang-en برای تنظیم فونت در CSS**
    if (isRtl) {
        document.body.classList.add('lang-fa');
        document.body.classList.remove('lang-en');
    } else {
        document.body.classList.remove('lang-fa');
        document.body.classList.add('lang-en');
    }
    // --- [پایان اصلاح ۱] ---

    // --- [شروع اصلاح ۲: مشکل ترجمه عنوان صفحه] ---
    // ۲. تنظیم متون Title و Header بر اساس شناسه‌های ثابت صفحه
    const mainTitleElement = document.getElementById('main-title');
    const resultPageTitleElement = document.getElementById('result-page-title'); // تنها در result.html وجود دارد

    if (document.getElementById('diabetes-form')) { // صفحه اصلی
        document.title = m.title;
        if (mainTitleElement) mainTitleElement.textContent = m.title;
    } else if (document.getElementById('bmi-form')) { // صفحه BMI
        document.title = m.titleBMI;
        if (mainTitleElement) mainTitleElement.textContent = m.titleBMI;
    } else if (document.getElementById('result-container')) { // صفحه نتایج
        document.title = m.titleResult;
        if (mainTitleElement) mainTitleElement.textContent = m.titleResult;
        if (resultPageTitleElement) resultPageTitleElement.textContent = m.titleResult;
    } else if (document.getElementById('thanks-content')) { // صفحه تشکر
        document.title = m.titleThanks;
        if (mainTitleElement) mainTitleElement.textContent = m.titleThanks;
    } else if (document.getElementById('about-content')) { // صفحه درباره ما
        document.title = m.titleAbout; // <-- استفاده از کلید جدید
        if (mainTitleElement) mainTitleElement.textContent = m.mainTitleAbout; // <-- استفاده از کلید جدید
    }
    // --- [پایان اصلاح ۲] ---

    // تغییر متون مشترک (مثل دکمه تم و لوگو کلیک)
    if (document.getElementById('logo-click-message')) {
        document.getElementById('logo-click-message').textContent = m.logoClickMessage;
    }
    
    // --- متون فوتر ---
    if (document.getElementById('footer-text')) {
        document.getElementById('footer-text').textContent = m.footerText;
    }
    if (document.getElementById('github-tag')) {
        document.getElementById('github-tag').textContent = m.githubTag;
    }
    // ترجمه پاراگراف تشکر ویژه (ID: footer-thanks)
    const footerThanksElement = document.getElementById('footer-thanks');
    if (footerThanksElement) {
        footerThanksElement.textContent = m.footerThanks;
    }
    
    // --- صفحه اصلی (index.html) ---
    if (document.getElementById('diabetes-form')) {
        // ترجمه زیرنویس توضیحی (ID: subtitle)
        const subtitleElement = document.getElementById('subtitle');
        if (subtitleElement) {
            subtitleElement.innerHTML = m.subtitle; // استفاده از کلید m.subtitle
        }
        
        document.getElementById('name-label').textContent = m.nameLabel;
        document.getElementById('age-label').textContent = m.ageLabel;
        document.getElementById('glucose-label').textContent = m.glucoseLabel;
        document.getElementById('bmi-label').textContent = m.bmiLabel;
        document.getElementById('pedigree-label').textContent = m.pedigreeLabel;

        document.getElementById('age-caption').textContent = m.ageCaption;
        document.getElementById('glucose-caption').textContent = m.glucoseCaption;
        document.getElementById('bmi-caption').textContent = m.bmiCaption;
        document.getElementById('pedigree-caption').textContent = m.pedigreeCaption;

        document.getElementById('bmi-btn').textContent = m.bmiBtn;
        document.getElementById('submit-btn').textContent = m.submitBtn;
    }

    // --- صفحه BMI (bmi.html) ---
    if (document.getElementById('bmi-form')) {
        const bmiSubtitleElement = document.getElementById('subtitle');
        if (bmiSubtitleElement) {
            bmiSubtitleElement.innerHTML = m.bmiSubtitle;
        }
        document.getElementById('weight-label').textContent = m.weightLabel;
        document.getElementById('height-label').textContent = m.heightLabel;
        document.getElementById('calculate-btn').textContent = m.calculateBtn;
        document.getElementById('bmi-result-label').textContent = m.bmiResultLabel;
        document.getElementById('back-to-main').textContent = m.backToMain;
        const bmiImg = document.getElementById('bmi-formula-img');
        if (bmiImg) {
            bmiImg.src = m.bmiFormulaImg;
        }
    }

    // --- صفحه نتیجه (result.html) ---
    if (document.getElementById('result-container')) {
        document.getElementById('nameResult').textContent = m.nameLabel + ':';
        document.getElementById('ageResult').textContent = m.ageLabel + ':';
        document.getElementById('glucoseResult').textContent = m.glucoseLabel + ':';
        document.getElementById('bmiResult').textContent = m.bmiLabel + ':';
        document.getElementById('pedigreeResult').textContent = m.pedigreeLabel + ':';

        const inputHeaderElement = document.getElementById('input-data-header');
        if (inputHeaderElement) {
            inputHeaderElement.textContent = m.inputDataHeader;
        }

        // به‌روزرسانی متن حرفه‌ای چکاپ
        const checkupElement = document.getElementById('annual-checkup');
        checkupElement.innerHTML = m.attentionCheckup;

        document.getElementById('thanks-link').textContent = m.thanksLink;
        document.getElementById('test-again-link').textContent = m.testAgainLink;

        // --- خط مهم: فراخوانی تابع به‌روزرسانی متن اصلی نتیجه هنگام تغییر زبان ---
        displayResultText(lang);
        // ----------------------------------------------------------------------
    }

    // --- صفحه درباره ما (about.html) ---
    if (document.getElementById('about-content')) {
        document.getElementById('about-header').textContent = m.aboutHeader;
        document.getElementById('about-project').textContent = m.aboutProject;
        document.getElementById('about-author').textContent = m.aboutAuthor;
        // تغییر: از کلید جدید aboutMe استفاده می‌کنیم تا متن صحیح پر شود
        const aboutMeElement = document.getElementById('about-me');
        if (aboutMeElement) {
            aboutMeElement.innerHTML = m.aboutMe; // <-- استفاده از innerHTML برای نمایش لینک‌ها
        }
        document.getElementById('accuracy-info').textContent = m.accuracyInfo;
        document.getElementById('accuracy-desc').textContent = m.accuracyDesc;
    }

// --- صفحه تشکر (thanks.html) ---
    if (document.getElementById('thanks-content')) {
        // ترجمه عنوان کلی "از شما متشکریم!"
        const thanksHeader = document.getElementById('thanks-header');
        if (thanksHeader) {
            thanksHeader.textContent = m.thanksHeaderTitle;
        }

        // ترجمه دکمه "آزمایش دوباره"
        const testAgainButton = document.getElementById('test-again-link-thanks');
        if (testAgainButton) {
            testAgainButton.textContent = m.testAgainButton;
        }

        // فراخوانی مجدد برای اعمال منطق پیام حرفه‌ای به زبان جدید (متن شخصی‌سازی شده)
        loadThanksData();
    } 

    // بروزرسانی وضعیت پرچم‌ها
    document.querySelectorAll('.flag').forEach(flag => {
        flag.classList.remove('active');
        if (flag.getAttribute('data-lang') === lang) {
            flag.classList.add('active');
        }
    });

    // بروزرسانی رنگ دکمه تم
    updateThemeButton();
}

// --- تابع جابجایی تم ---
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeButton(isDark);
}

function updateThemeButton(isDark = document.body.classList.contains('dark-theme')) {
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
        if (isDark) {
            themeBtn.textContent = '☀️';
            themeBtn.title = currentLang === 'fa' ? 'تم روشن' : 'Light Theme';
        } else {
            themeBtn.textContent = '🌙';
            themeBtn.title = currentLang === 'fa' ? 'تم تیره' : 'Dark Theme';
        }
    }
}

// --- تابع اعتبارسنجی ---
function validateForm(formId) {
    const form = document.getElementById(formId);
    let isValid = true;
    const lang = currentLang;

    // پاک کردن پیام‌های خطای قبلی
    form.querySelectorAll('.error').forEach(e => { e.textContent = ''; e.style.display = 'none'; });

    // اعتبارسنجی فیلدها
    form.querySelectorAll('input[required]').forEach(input => {
        const errorElement = document.getElementById(input.id + '-error');
        const value = input.value.trim();

        if (value === '') {
            errorElement.textContent = messages[lang].requiredError;
            errorElement.style.display = 'block';
            isValid = false;
            return;
        }

        if (input.type === 'number') {
            const numValue = parseFloat(value);
            const min = parseFloat(input.min);
            const max = parseFloat(input.max);

            if (isNaN(numValue)) {
                errorElement.textContent = messages[lang].numberError;
                errorElement.style.display = 'block';
                isValid = false;
                return;
            }

            if ((min !== undefined && numValue < min) || (max !== undefined && numValue > max)) {
                errorElement.textContent = messages[lang].rangeError;
                errorElement.style.display = 'block';
                isValid = false;
                return;
            }
        }

        if (input.id === 'name') {
            // اعتبارسنجی نام: فقط شامل حروف فارسی، انگلیسی یا فاصله باشد
            const nameRegex = /^[\u0600-\u06FF\sa-zA-Z]+$/;
            if (!nameRegex.test(value)) {
                errorElement.textContent = messages[lang].nameError;
                errorElement.style.display = 'block';
                isValid = false;
                return;
            }
        }
    });

    return isValid;
}

// --- تابع پیش‌بینی دیابت ---
function predictDiabetes(data) {
    // این یک مدل بسیار ساده و فرضی برای شبیه‌سازی است
    // مدل واقعی نیازمند الگوریتم پیچیده‌تر و داده‌های بیشتر است
    let score = 0;

    // وزن‌دهی به فاکتورها (مقادیر فرضی)
    if (data.age > 40) score += 10;
    if (data.glucose > 140) score += 25; // گلوکز بالا ریسک بسیار بالایی دارد
    if (data.bmi > 30) score += 15;
    if (data.pedigree > 0.8) score += 10;

    // گلوکز بین 100 تا 140
    if (data.glucose >= 100 && data.glucose <= 140) score += 8;

    // BMI بین 25 تا 30 (اضافه‌وزن)
    if (data.bmi >= 25 && data.bmi <= 30) score += 5;

    // یک شانس تصادفی برای کاهش اطمینان (مدل ساده)
    if (Math.random() < 0.1) score -= 5;
    if (Math.random() > 0.9) score += 5;

    // آستانه نهایی (فرضی)
    return score > 30; // اگر امتیاز بالا باشد، احتمال دیابت مثبت است
}

// --- تابع ذخیره داده در sessionStorage و انتقال به صفحه نتیجه ---
function submitForm(event) {
    event.preventDefault();

    if (!validateForm('diabetes-form')) {
        return;
    }

    const form = document.getElementById('diabetes-form');
    const formData = {
        name: form.elements['name'].value.trim(), // اطمینان از حذف فاصله‌های اضافی
        age: parseFloat(form.elements['age'].value),
        glucose: parseFloat(form.elements['glucose'].value),
        bmi: parseFloat(form.elements['bmi'].value),
        pedigree: parseFloat(form.elements['pedigree'].value),
    };

    const isPositive = predictDiabetes(formData);

    // ذخیره داده و نتیجه در sessionStorage
    sessionStorage.setItem('diabetesResultData', JSON.stringify({
        ...formData,
        isPositive: isPositive
    }));

    // انتقال به صفحه نتیجه
    window.location.href = 'result.html';
}

// --- تابع محاسبه BMI در صفحه BMI.html ---
function calculateBMI(event) {
    event.preventDefault();

    // برای صفحه BMI فقط اعتبارسنجی وزن و قد لازم است
    if (!validateForm('bmi-form')) {
        return;
    }

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value); // قد به متر

    // فرمول BMI: وزن (کیلوگرم) تقسیم بر مجذور قد (متر)
    const bmiValue = weight / (height * height);

    const bmiResultElement = document.getElementById('bmi-result');
    const bmiResultBox = document.getElementById('bmi-result-box');

    // نمایش نتیجه
    bmiResultElement.textContent = bmiValue.toFixed(2);
    bmiResultBox.style.display = 'block';

    // تغییر رنگ بر اساس محدوده BMI
    bmiResultElement.style.color = getBMIColor(bmiValue);
}

function getBMIColor(bmi) {
    if (bmi < 18.5) return '#3498db'; // کمبود وزن - آبی
    if (bmi >= 18.5 && bmi < 25) return '#2ecc71'; // وزن سالم - سبز
    if (bmi >= 25 && bmi < 30) return '#f39c12'; // اضافه‌وزن - نارنجی
    return '#e74c3c'; // چاقی - قرمز
}


// --- تابع بارگذاری داده ورودی در صفحه نتیجه (result.html) ---
function loadInputData() {
    // این تابع فقط داده‌های ورودی را بارگذاری می‌کند.
    const dataString = sessionStorage.getItem('diabetesResultData');

    if (dataString) {
        const data = JSON.parse(dataString);

        document.getElementById('result-name').textContent = data.name;
        document.getElementById('result-age').textContent = data.age;
        document.getElementById('result-glucose').textContent = data.glucose;
        document.getElementById('result-bmi').textContent = data.bmi.toFixed(2);
        document.getElementById('result-pedigree').textContent = data.pedigree.toFixed(3);

        // در اینجا دیگر متن نتیجه را لود نمی‌کنیم، بلکه آن را به displayResultText واگذار می‌کنیم.
    }
}

// --- تابع بارگذاری داده در صفحه تشکر (thanks.html) ---
function loadThanksData() {
    const thanksMessageElement = document.getElementById('thank-message-professional');
    const lang = currentLang;
    const m = messages[lang];

    if (thanksMessageElement) {
        const dataString = sessionStorage.getItem('diabetesResultData');
        let name = ''; // با یک رشته خالی شروع می‌کنیم
        let finalMessage = m.thankMessageGeneric;
        let nameEntered = false;

        if (dataString) {
            const parsedData = JSON.parse(dataString);
            
            // اعتبارسنجی دقیق: اطمینان حاصل می‌کنیم که parsedData.name یک رشته است، سپس آن را trim می‌کنیم.
            const rawName = parsedData.name;
            if (typeof rawName === 'string') {
                name = rawName.trim();
            }
        }

        // اگر طول نام پس از trim کردن بیشتر از صفر باشد، یعنی نامی معتبر وارد شده است.
        if (name.length > 0) { 
            nameEntered = true;
            finalMessage = m.thankMessageNamed(name);
        } else {
            finalMessage = m.thankMessageGeneric;
        }

        // اعمال پیام نهایی
        thanksMessageElement.innerHTML = finalMessage;

        // --- به‌روزرسانی هدر صفحه (شخصی‌سازی عنوان) ---
        const thanksHeader = document.getElementById('thanks-header');
        if (thanksHeader) {
            if (nameEntered) {
                // استفاده از نام برای شخصی‌سازی هدر (مثل: سپاسگزاریم، محمد!)
                thanksHeader.textContent = m.thanksHeaderNamed(name);
            } else {
                // استفاده از عنوان عمومی (مثل: از شما متشکریم!)
                thanksHeader.textContent = m.thanksHeaderTitle;
            }
        }

        // پاک کردن داده از sessionStorage بعد از نمایش
        if (dataString) {
            sessionStorage.removeItem('diabetesResultData');
        }
    }
}

// --- مدیریت رویدادها و بارگذاری اولیه ---
document.addEventListener('DOMContentLoaded', () => {
    // تنظیم تم اولیه
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme + '-theme');
    updateThemeButton(savedTheme === 'dark');

    // تنظیم زبان اولیه
    // این فراخوانی برای تمام صفحات، متون را لود و تنظیم می‌کند، از جمله loadThanksData را برای thanks.html
    setLanguage(currentLang);

    // رویداد جابجایی تم
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }

    // رویداد تغییر زبان
    document.querySelectorAll('.flag').forEach(flag => {
        flag.addEventListener('click', () => {
            const lang = flag.getAttribute('data-lang');
            setLanguage(lang);
            // بروزرسانی فعال‌کردن پرچم
            document.querySelectorAll('.flag').forEach(f => f.classList.remove('active'));
            flag.classList.add('active');
        });
    });

    // رویداد سابمیت در صفحه اصلی
    const diabetesForm = document.getElementById('diabetes-form');
    if (diabetesForm) {
        diabetesForm.addEventListener('submit', submitForm);
    }

    // رویداد محاسبه BMI
    const bmiForm = document.getElementById('bmi-form');
    if (bmiForm) {
        bmiForm.addEventListener('submit', calculateBMI);
    }

    // بارگذاری داده در صفحه نتیجه
    if (document.getElementById('result-container')) {
        loadInputData(); // بارگذاری داده‌های ورودی
img_alt_tag
        // displayResultText قبلا در setLanguage فراخوانی شده است
    }

    // بارگذاری داده در صفحه تشکر 
    if (window.location.pathname.endsWith('thanks.html')) {
        // این کار در setLanguage انجام می‌شود، اما یک بار دیگر برای اطمینان فراخوانی می‌شود.
        loadThanksData();
    }
});