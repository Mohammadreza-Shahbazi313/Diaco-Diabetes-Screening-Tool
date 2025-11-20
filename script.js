
const messages = {
    fa: {
        title: 'دیاکو - آزمایش دیابت',
        titleResult: 'دیاکو - نتیجه آزمایش',
        titleBMI: 'دیاکو - محاسبه BMI',
        titleThanks: 'دیاکو - تشکر',
        titleAbout: 'دیاکو - درباره من و پروژه',
        mainTitleAbout: 'دیاکو - درباره من و پروژه',
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
        thanksHeaderTitle: 'از شما متشکریم!',
        testAgainButton: 'آزمایش دوباره',
        thankMessageNamed: (name) => `از جناب اقای/سرکار خانم <strong>${name} گرامی</strong> بابت شرکت در این آزمایش متشکریم.`,
        thankMessageGeneric: 'از شما <strong>آزمایش‌دهنده گرامی</strong> بابت شرکت در این آزمایش متشکریم.',
        thanksHeaderNamed: (name) => `سپاسگزاریم، ${name}!`,
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
        aboutMe: `من **محمدرضا شهبازی** هستم، توسعه‌دهنده وب و علاقه‌مند به هوش مصنوعی و علم داده. پروژه دیاکو، تلاشی شخصی برای ترکیب مهارت‌های توسعه وب با مدل‌های ساده یادگیری ماشین است. هدف من، ساختن ابزارهای کاربردی و دقیق برای جامعه است.<br><br> برای دیدن پروژه‌های بیشتر یا ارتباط کاری با من، می‌توانید از طریق لینک‌های زیر در تماس باشید: <br> 🔗 **لینکدین:** <a href="https://www.linkedin.com/in/mohammadreza-shahbazi-313sh" target="_blank">mohammadreza-shahbazi-313sh</a> <br> 💻 **گیت‌هاب:** <a href="https://github.com/Mohammadreza-Shahbazi313" target="_blank">Mohammadreza-Shahbazi313</a> <br> 📧 **ایمیل:** <a href="mailto:eminemengland2000@gmail.com">eminemengland2000@gmail.com</a>`,
        accuracyInfo: 'دقت مدل:',
        accuracyDesc: 'این مدل یک نمونه اولیه (Proof-of-Concept) است که بر اساس وزن‌دهی به عوامل خطر شناخته‌شده دیابت توسعه یافته است. دقت مدل، با استناد به نتایج حاصل از یک دیتاست معتبر (مانند دیتاسِت Pima Indian Diabetes) و برای نمایش توانایی‌های الگوریتم، حدود **۸۵٪** در نظر گرفته شده است.',
        footerText: 'ساخته شده توسط محمدرضا شهبازی',
        githubTag: 'اگر حمایت کنید خوشحال می‌شم',
        logoClickMessage: 'برای دیدن اطلاعات بیشتر، روی لوگو کلیک کنید',
        inputDataHeader: 'داده‌های ورودی',
        bmiFormulaImg: 'per-bmi-calculate.jpg',
        fastingNotice: '<strong>نکتهٔ مهم:</strong> مقدار <em>گلوکز ناشتا</em> را وارد کنید (بعد از حداقل ۸ ساعت ناشتا بودن).',
    },
    en: {
        title: 'Diaco - Diabetes Test',
        titleResult: 'Diaco - Test Result',
        titleBMI: 'Diaco - BMI Calculation',
        titleThanks: 'Diaco - Thank You',
        titleAbout: 'Diaco - About Me & Project',
        mainTitleAbout: 'Diaco - About Me & Project',
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
        thanksHeaderTitle: 'Thank You!',
        testAgainButton: 'Test Again',
        thankMessageNamed: (name) => `We sincerely thank **${name}** for participating in this screening.`,
        thankMessageGeneric: 'We sincerely thank the **dear test-taker** for participating in this screening.',
        thanksHeaderNamed: (name) => `Thank You, ${name}!`,
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
        aboutMe: `I am **Mohammadreza Shahbazi**, a Web Developer and enthusiast of AI and Data Science. The Diaco project is a personal endeavor to merge web development skills with simple Machine Learning models. My goal is to build practical and accurate tools for the community.<br><br> You can connect with me for more projects or career opportunities using the links below: <br> 🔗 **LinkedIn:** <a href="https://www.linkedin.com/in/mohammadreza-shahbazi-313sh" target="_blank">mohammadreza-shahbazi-313sh</a> <br> 💻 **GitHub:** <a href="https://github.com/Mohammadreza-Shahbazi313" target="_blank">Mohammadreza-Shahbazi313</a> <br> 📧 **Email:** <a href="mailto:eminemengland2000@gmail.com">eminemengland2000@gmail.com</a>`,
        accuracyInfo: 'Model Accuracy:',
        accuracyDesc: 'This model is a Proof-of-Concept developed based on weighting known diabetes risk factors. The model\'s accuracy is set to approximately **85%** (referencing results from a reliable dataset like the Pima Indian Diabetes Dataset) to demonstrate the algorithm\'s potential capabilities.',
        footerText: 'Made by Mohammadreza Shahbazi',
        githubTag: 'I would be happy if you support me',
        logoClickMessage: 'Click on the logo for more information',
        bmiFormulaImg: 'en-bmi-calculate.png',
        fastingNotice: '<strong>Important:</strong> Please enter <em>fasting glucose</em> value (after at least 8 hours fasting).',
    }
};

let currentLang = localStorage.getItem('appLang') || 'fa';



function displayResultText(lang) {

    if (!document.getElementById('result-container')) return;

    const dataString = sessionStorage.getItem('diabetesResultData');
    if (!dataString) return;

    const data = JSON.parse(dataString);
    const m = messages[lang || currentLang];

    const resultText = document.getElementById('prediction-result');
    const resultBox = document.getElementById('result-box');

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

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('appLang', lang);
    const m = messages[lang];
    const isRtl = lang === 'fa';


    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.body.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

    if (isRtl) {
        document.body.classList.add('lang-fa');
        document.body.classList.remove('lang-en');
    } else {
        document.body.classList.remove('lang-fa');
        document.body.classList.add('lang-en');
    }

    const mainTitleElement = document.getElementById('main-title');
    const resultPageTitleElement = document.getElementById('result-page-title');

    if (document.getElementById('diabetes-form')) {
        document.title = m.title;
        if (mainTitleElement) mainTitleElement.textContent = m.title;
    } else if (document.getElementById('bmi-form')) {
        document.title = m.titleBMI;
        if (mainTitleElement) mainTitleElement.textContent = m.titleBMI;
    } else if (document.getElementById('result-container')) {
        document.title = m.titleResult;
        if (mainTitleElement) mainTitleElement.textContent = m.titleResult;
        if (resultPageTitleElement) resultPageTitleElement.textContent = m.titleResult;
    } else if (document.getElementById('thanks-content')) {
        document.title = m.titleThanks;
        if (mainTitleElement) mainTitleElement.textContent = m.titleThanks;
    } else if (document.getElementById('about-content')) {
        document.title = m.titleAbout;
        if (mainTitleElement) mainTitleElement.textContent = m.mainTitleAbout;
    }

    const glucoseNoteEl = document.getElementById('glucose-note');
if (glucoseNoteEl) {
    const noteHtml = messages[lang].fastingNotice || messages[currentLang].fastingNotice;
    glucoseNoteEl.innerHTML = noteHtml;
    glucoseNoteEl.style.display = noteHtml ? 'block' : 'none';
}


    if (document.getElementById('logo-click-message')) {
        document.getElementById('logo-click-message').textContent = m.logoClickMessage;
    }


    if (document.getElementById('footer-text')) {
        document.getElementById('footer-text').textContent = m.footerText;
    }
    if (document.getElementById('github-tag')) {
        document.getElementById('github-tag').textContent = m.githubTag;
    }

    const footerThanksElement = document.getElementById('footer-thanks');
    if (footerThanksElement) {
        footerThanksElement.textContent = m.footerThanks;
    }


    if (document.getElementById('diabetes-form')) {

        const subtitleElement = document.getElementById('subtitle');
        if (subtitleElement) {
            subtitleElement.innerHTML = m.subtitle;
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

        const checkupElement = document.getElementById('annual-checkup');
        checkupElement.innerHTML = m.attentionCheckup;

        document.getElementById('thanks-link').textContent = m.thanksLink;
        document.getElementById('test-again-link').textContent = m.testAgainLink;


        displayResultText(lang);

    }

    if (document.getElementById('about-content')) {
        document.getElementById('about-header').textContent = m.aboutHeader;
        document.getElementById('about-project').textContent = m.aboutProject;
        document.getElementById('about-author').textContent = m.aboutAuthor;

        const aboutMeElement = document.getElementById('about-me');
        if (aboutMeElement) {
            aboutMeElement.innerHTML = m.aboutMe;
        }
        document.getElementById('accuracy-info').textContent = m.accuracyInfo;
        document.getElementById('accuracy-desc').textContent = m.accuracyDesc;
    }


    const backToMainEl = document.getElementById('back-to-main');
if (backToMainEl) {
    backToMainEl.textContent = m.backToMain;
}

    if (document.getElementById('thanks-content')) {

        const thanksHeader = document.getElementById('thanks-header');
        if (thanksHeader) {
            thanksHeader.textContent = m.thanksHeaderTitle;
        }


        const testAgainButton = document.getElementById('test-again-link-thanks');
        if (testAgainButton) {
            testAgainButton.textContent = m.testAgainButton;
        }


        loadThanksData();
    }

    document.querySelectorAll('.flag').forEach(flag => {
        flag.classList.remove('active');
        if (flag.getAttribute('data-lang') === lang) {
            flag.classList.add('active');
        }
    });


    updateThemeButton();
}


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


function validateForm(formId) {
    const form = document.getElementById(formId);
    let isValid = true;
    const lang = currentLang;

    form.querySelectorAll('.error').forEach(e => { e.textContent = ''; e.style.display = 'none'; });

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


function predictDiabetes(data) {

    let score = 0;


    if (data.age > 40) score += 10;
    if (data.glucose > 140) score += 25;
    if (data.bmi > 30) score += 15;
    if (data.pedigree > 0.8) score += 10;


    if (data.glucose >= 100 && data.glucose <= 140) score += 8;


    if (data.bmi >= 25 && data.bmi <= 30) score += 5;


    if (Math.random() < 0.1) score -= 5;
    if (Math.random() > 0.9) score += 5;


    return score > 30;
}


function submitForm(event) {
    event.preventDefault();

    if (!validateForm('diabetes-form')) {
        return;
    }

    const form = document.getElementById('diabetes-form');
    const formData = {
        name: form.elements['name'].value.trim(),
        age: parseFloat(form.elements['age'].value),
        glucose: parseFloat(form.elements['glucose'].value),
        bmi: parseFloat(form.elements['bmi'].value),
        pedigree: parseFloat(form.elements['pedigree'].value),
    };

    const isPositive = predictDiabetes(formData);

    sessionStorage.setItem('diabetesResultData', JSON.stringify({
        ...formData,
        isPositive: isPositive
    }));


    window.location.href = 'result.html';
}


function calculateBMI(event) {
    event.preventDefault();


    if (!validateForm('bmi-form')) {
        return;
    }

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);


    const bmiValue = weight / (height * height);

    const bmiResultElement = document.getElementById('bmi-result');
    const bmiResultBox = document.getElementById('bmi-result-box');


    bmiResultElement.textContent = bmiValue.toFixed(2);
    bmiResultBox.style.display = 'block';


    bmiResultElement.style.color = getBMIColor(bmiValue);
}


function getBMIColor(bmi) {
    if (bmi < 18.5) return '#3498db';
    if (bmi >= 18.5 && bmi < 25) return '#2ecc71';
    if (bmi >= 25 && bmi < 30) return '#f39c12';
    return '#e74c3c';
}



function loadInputData() {

    const dataString = sessionStorage.getItem('diabetesResultData');

    if (dataString) {
        const data = JSON.parse(dataString);

        // پر کردن جدول مقادیر ورودی
        document.getElementById('result-name').textContent = data.name || '';
        document.getElementById('result-age').textContent = data.age || '';
        document.getElementById('result-glucose').textContent = data.glucose || '';
        document.getElementById('result-bmi').textContent = (typeof data.bmi === 'number') ? data.bmi.toFixed(2) : '';
        document.getElementById('result-pedigree').textContent = (typeof data.pedigree === 'number') ? data.pedigree.toFixed(3) : '';

        // --- محاسبه احتمال با مدل ---
        // اول سعی کن fetch-based model را استفاده کنی، اگر نبود از مدل تعبیه‌شده استفاده کن
        let prob = null;
        try {
            if (typeof predictFromModel === 'function') {
                prob = predictFromModel([data.glucose, data.bmi, data.age, data.pedigree]);
            }
        } catch (e) { console.warn('predictFromModel error', e); }

        if ((prob === null || typeof prob === 'undefined') && typeof predictFromModelEmbedded === 'function') {
            try {
                prob = predictFromModelEmbedded([data.glucose, data.bmi, data.age, data.pedigree]);
            } catch (e) { console.warn('predictFromModelEmbedded error', e); prob = null; }
        }

        // اگر احتمال محاسبه شد، رسم donut و به‌روزرسانی متن نتیجه
        if (prob !== null && typeof prob !== 'undefined') {
            const percent = Math.max(0, Math.min(100, Math.round(prob * 100)));

            // رسم نمودار (elementهای riskDonut/riskPercent باید در result.html حاضر باشند)
            if (typeof renderDonutEmbedded === 'function') {
                renderDonutEmbedded(percent, 'riskDonut', 'riskPercent');
            } else if (typeof renderDonut === 'function') {
                renderDonut(percent, 'riskDonut', 'riskPercent');
            }

            // بروزرسانی عنوان نتیجه و استایل با توجه به درصد یا آستانه 0.5
            const resultTextEl = document.getElementById('prediction-result');
            const resultBoxEl = document.getElementById('result-box');
            const m = messages[currentLang] || messages['fa'];

            if (percent >= 50) {
                if (resultTextEl) {
                    resultTextEl.textContent = m.resultPositive;
                    resultTextEl.classList.remove('result-negative');
                    resultTextEl.classList.add('result-positive');
                }
                if (resultBoxEl) {
                    resultBoxEl.classList.remove('result-negative-bg');
                    resultBoxEl.classList.add('result-positive-bg');
                }
            } else {
                if (resultTextEl) {
                    resultTextEl.textContent = m.resultNegative;
                    resultTextEl.classList.remove('result-positive');
                    resultTextEl.classList.add('result-negative');
                }
                if (resultBoxEl) {
                    resultBoxEl.classList.remove('result-positive-bg');
                    resultBoxEl.classList.add('result-negative-bg');
                }
            }
        } else {
            console.warn('No model probability available to render donut.');
        }

    }
}




function loadThanksData() {
    const thanksMessageElement = document.getElementById('thank-message-professional');
    const lang = currentLang;
    const m = messages[lang];

    if (thanksMessageElement) {
        const dataString = sessionStorage.getItem('diabetesResultData');
        let name = '';
        let finalMessage = m.thankMessageGeneric;
        let nameEntered = false;

        if (dataString) {
            const parsedData = JSON.parse(dataString);


            const rawName = parsedData.name;
            if (typeof rawName === 'string') {
                name = rawName.trim();
            }
        }


        if (name.length > 0) {
            nameEntered = true;
            finalMessage = m.thankMessageNamed(name);
        } else {
            finalMessage = m.thankMessageGeneric;
        }


        thanksMessageElement.innerHTML = finalMessage;


        const thanksHeader = document.getElementById('thanks-header');
        if (thanksHeader) {
            if (nameEntered) {

                thanksHeader.textContent = m.thanksHeaderNamed(name);
            } else {

                thanksHeader.textContent = m.thanksHeaderTitle;
            }
        }





        if (dataString) {
            sessionStorage.removeItem('diabetesResultData');
        }
    }
}




document.addEventListener('DOMContentLoaded', () => {

    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme + '-theme');
    updateThemeButton(savedTheme === 'dark');


    setLanguage(currentLang);


    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }


    document.querySelectorAll('.flag').forEach(flag => {
        flag.addEventListener('click', () => {
            const lang = flag.getAttribute('data-lang');
            setLanguage(lang);

            document.querySelectorAll('.flag').forEach(f => f.classList.remove('active'));
            flag.classList.add('active');
        });
    });


    const diabetesForm = document.getElementById('diabetes-form');

    if (diabetesForm) {
        diabetesForm.addEventListener('submit', submitForm);
    }


    const bmiForm = document.getElementById('bmi-form');
    if (bmiForm) {
        bmiForm.addEventListener('submit', calculateBMI);
    }


    if (document.getElementById('result-container')) {
        loadInputData();
    }


    if (window.location.pathname.endsWith('thanks.html')) {

        loadThanksData();
    }

});

// load model JSON (async)
let LR_model = null;
async function loadLRModel() {
  try {
    const res = await fetch('model_from_excel.json');
    LR_model = await res.json();
    console.log('Loaded LR model:', LR_model);
  } catch (err) {
    console.error('Error loading model_from_excel.json', err);
  }
}
loadLRModel();

// sigmoid
function sigmoid(z){ return 1 / (1 + Math.exp(-z)); }

// predict: features must be in same order as model.features
function predictFromModel(valuesArray) {
  if (!LR_model) return null;
  const means = LR_model.scaler_mean;
  const scales = LR_model.scaler_scale;
  const coefs = LR_model.coef;
  const intercept = LR_model.intercept;
  let z = intercept;
  for (let i = 0; i < coefs.length; i++) {
    const x = Number(valuesArray[i]) || 0;
    const xnorm = (x - means[i]) / scales[i];
    z += coefs[i] * xnorm;
  }
  return sigmoid(z); // 0..1
}

// Donut chart (Chart.js)
let donutChart = null;
function getColorForPercent(pct) {
  if (pct >= 65) return '#e74c3c';
  if (pct >= 35) return '#f39c12';
  return '#2ecc71';
}
function renderDonut(percent, canvasId='riskDonut', labelId='riskPercent'){
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const color = getColorForPercent(percent);
  const data = {
    datasets:[{
      data:[percent, Math.max(0, 100-percent)],
      backgroundColor:[color, '#e6e6e6'],
      borderWidth:0
    }]
  };
  const options = { cutout:'70%', plugins:{legend:{display:false}}, maintainAspectRatio:false };
  if (donutChart) donutChart.destroy();
  donutChart = new Chart(ctx, { type:'doughnut', data, options });
  const lbl = document.getElementById(labelId);
  if (lbl) lbl.textContent = percent.toFixed(0) + '%';
}

// Hook into your form submit (IDs must match your inputs)
function handlePredictionAndShow(e){
  if (e && e.preventDefault) e.preventDefault();
  const glucose = Number(document.getElementById('glucose').value);
  const bmi = Number(document.getElementById('bmi').value);
  const age = Number(document.getElementById('age').value);
  const pedigree = Number(document.getElementById('pedigree').value);

  const prob = predictFromModel([glucose, bmi, age, pedigree]);
  if (prob === null) { alert('Model not loaded. Put model_from_excel.json next to script.js and refresh.'); return; }
  const percent = Math.max(0, Math.min(100, Math.round(prob*100)));
  renderDonut(percent, 'riskDonut', 'riskPercent');

  const msgEl = document.getElementById('riskMessage');
  if (msgEl) {
    const msg = percent >= 65 ? 'در معرض خطر — مراجعه به پزشک' :
                percent >= 35 ? 'خطر متوسط — توصیه به بررسی' : 'خطر پایین';
    msgEl.textContent = msg;
  }
}

// bind form
// const diabetesForm = document.getElementById('diabetes-form');
// if (diabetesForm) diabetesForm.addEventListener('submit', handlePredictionAndShow);


/* === EMBEDDED LR MODEL + DONUT (added by assistant) === */
const LR_MODEL = {
  "features": [
    "Glucose",
    "BMI",
    "Age",
    "DiabetesPedigreeFunction"
  ],
  "coef": [
    1.0627,
    0.6159,
    0.2876,
    0.1965
  ],
  "intercept": -0.85006,
  "scaler_mean": [
    120.9106,
    32.1346,
    33.5512,
    0.4805
  ],
  "scaler_scale": [
    31.2642,
    7.7995,
    11.7837,
    0.3349
  ]
};

// sigmoid
function _sigmoid(z) { return 1 / (1 + Math.exp(-z)); }

// predict using embedded model (features array must follow model.features order)
function predictFromModelEmbedded(valuesArray) {
  if (!LR_MODEL) return null;
  const means = LR_MODEL.scaler_mean;
  const scales = LR_MODEL.scaler_scale;
  const coefs = LR_MODEL.coef;
  const intercept = LR_MODEL.intercept;
  let z = intercept;
  for (let i = 0; i < coefs.length; i++) {
    const x = Number(valuesArray[i]) || 0;
    const xnorm = (x - means[i]) / scales[i];
    z += coefs[i] * xnorm;
  }
  return _sigmoid(z);
}

// Donut render (Chart.js required). This function ensures canvas has proper height and destroys previous chart.
let __assistant_donut_chart = null;
function getColorForPercent(pct) {
  if (pct >= 65) return '#e74c3c';    // red
  if (pct >= 35) return '#f39c12';    // orange
  return '#2ecc71';                   // green
}

function renderDonutEmbedded(percent, canvasId='riskDonut', labelId='riskPercent') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  // ensure container height so Chart.js can draw
  const parent = canvas.parentElement;
  if (parent) parent.style.height = parent.style.height || '220px';

  // set explicit canvas css size to help Chart.js render correctly
  canvas.style.width = '220px';
  canvas.style.height = '220px';

  const ctx = canvas.getContext('2d');
  const color = getColorForPercent(percent);

  const data = {
    labels: ['Risk', 'Remaining'],
    datasets: [{ data: [percent, Math.max(0, 100 - percent)], backgroundColor: [color, '#e6e6e6'], borderWidth: 0 }]
  };

  const options = {
    cutout: '70%',
    plugins: { legend: { display: false } },
    responsive: true,
    maintainAspectRatio: false,
    animation: { animateRotate: true, duration: 800 }
  };

  if (__assistant_donut_chart) __assistant_donut_chart.destroy();
  __assistant_donut_chart = new Chart(ctx, { type: 'doughnut', data: data, options: options });

  const lbl = document.getElementById(labelId);
  if (lbl) lbl.textContent = percent.toFixed(0) + '%';
}

// binding helper: find form and attach listener (safe: allows existing handlers to run first)
function attachEmbeddedPrediction() {
  const diabetesForm = document.getElementById('diabetes-form');
  if (!diabetesForm) return;

  diabetesForm.addEventListener('submit', function(e) {
    try { e.preventDefault(); } catch(_){ }

    const glucose = Number(document.getElementById('glucose')?.value || 0);
    const bmi = Number(document.getElementById('bmi')?.value || 0);
    const age = Number(document.getElementById('age')?.value || 0);
    const pedigree = Number(document.getElementById('pedigree')?.value || 0);

    const prob = predictFromModelEmbedded([glucose, bmi, age, pedigree]);
    if (prob === null) { alert('Embedded model not available'); return; }

    const percent = Math.max(0, Math.min(100, Math.round(prob * 100)));
    // ensure risk area exists (if not, create one below the form)
    let riskArea = document.getElementById('riskArea');
    if (!riskArea) {
      riskArea = document.createElement('div');
      riskArea.id = 'riskArea';
      riskArea.style.maxWidth = '420px';
      riskArea.style.margin = '18px auto';
      riskArea.innerHTML = `
        <div style="position:relative; height:220px;">
          <canvas id="riskDonut" width="220" height="220"></canvas>
        </div>
        <div id="riskPercent" style="text-align:center; font-weight:700; margin-top:8px">%</div>
        <div id="riskMessage" style="text-align:center; color:#444; margin-top:6px"></div>
      `;
      // insert after the form
      const form = document.getElementById('diabetes-form');
      form.parentNode.insertBefore(riskArea, form.nextSibling);
    }

    renderDonutEmbedded(percent, 'riskDonut', 'riskPercent');

    const msgEl = document.getElementById('riskMessage');
    if (msgEl) {
      const msg = percent >= 65 ? 'در معرض خطر — مراجعه به پزشک' :
                  percent >= 35 ? 'خطر متوسط — توصیه به بررسی' : 'خطر پایین';
      msgEl.textContent = msg;
    }

    // optionally scroll into view
    riskArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

// attach when DOM ready
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', attachEmbeddedPrediction);
else attachEmbeddedPrediction();

/* === end embedded block === */

// ===============================
// Logistic Regression Model (Embedded)
// ===============================

window.LR_MODEL = {
    "features":["Glucose","BMI","Age","DiabetesPedigreeFunction"],
    "coef":[1.0627147491079607,0.6159082371269606,0.2875955304896891,0.1965362662301343],
    "intercept":-0.8500588559470118,
    "scaler_mean":[120.91061452513966,32.13463687150836,33.5512104283054,0.4805288640595905],
    "scaler_scale":[31.26416876550776,7.799533929898061,11.783651973905455,0.3349411849829437]
};

function _sigmoid(z){
    return 1/(1+Math.exp(-z));
}

window.predictFromModelEmbedded = function(valuesArray){
    const means = LR_MODEL.scaler_mean;
    const scales = LR_MODEL.scaler_scale;
    const coefs = LR_MODEL.coef;
    const intercept = LR_MODEL.intercept;

    let z = intercept;

    for(let i=0;i<coefs.length;i++){
        const x = Number(valuesArray[i] || 0);
        const xnorm = (x - means[i]) / scales[i];
        z += coefs[i] * xnorm;
    }

    return _sigmoid(z);
};

// ===============================
// Donut Chart Renderer
// ===============================

window.__assistant_donut_chart = null;

window.renderDonutEmbedded = function(percent, canvasId='riskDonut', labelId='riskPercent'){
    const canvas = document.getElementById(canvasId);

    if (!canvas) {
        const container = document.createElement('div');
        container.id = 'riskArea';
        container.style.maxWidth = '420px';
        container.style.margin = '18px auto';

        container.innerHTML = `
           <div style="position:relative;height:220px;">
              <canvas id="${canvasId}" width="220" height="220"></canvas>
           </div>
           <div id="${labelId}" style="text-align:center;font-weight:700;margin-top:8px"></div>
           <div id="riskMessage" style="text-align:center;color:#444;margin-top:6px"></div>
        `;
        document.body.appendChild(container);
    }

    const c = document.getElementById(canvasId);
    const ctx = c.getContext('2d');

    const color =
        percent >= 65 ? '#e74c3c' :
        percent >= 35 ? '#f39c12' :
        '#2ecc71';

    const data = {
        labels:['Risk','Remaining'],
        datasets:[{
            data:[percent, 100-percent],
            backgroundColor:[color, '#e6e6e6'],
            borderWidth:0
        }]
    };

    const options = {
        cutout:'70%',
        plugins:{ legend:{ display:false }},
        maintainAspectRatio:false,
        responsive:true,
        animation:{ duration:700 }
    };

    if (window.__assistant_donut_chart)
        window.__assistant_donut_chart.destroy();

    window.__assistant_donut_chart = new Chart(ctx, {
        type:'doughnut',
        data,
        options
    });

    document.getElementById(labelId).textContent = percent.toFixed(0) + '%';

    const msg = document.getElementById('riskMessage');
    msg.textContent =
        percent >= 65 ? 'در معرض خطر — مراجعه به پزشک' :
        percent >= 35 ? 'خطر متوسط — توصیه به بررسی' :
        'خطر پایین';
};
