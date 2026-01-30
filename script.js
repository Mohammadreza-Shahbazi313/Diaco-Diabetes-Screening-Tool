
const messages = {
  fa: {
    title: 'دیاکو - آزمایش دیابت',
    titleResult: 'دیاکو - نتیجه آزمایش',
    titleBMI: 'دیاکو - محاسبه BMI',
    titleThanks: 'دیاکو - تشکر',
    titleAbout: 'دیاکو - درباره من و پروژه',
    mainTitleAbout: 'دیاکو — درباره پروژه و تغییرات v2',
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
    aboutAuthor: 'دربارهٔ توسعه‌دهنده',
    aboutProject: `نسخهٔ دوم (v2) دیاکو، یک به‌روزرسانی فنی از نمونهٔ اولیهٔ قبلی است که منطق قاعده‌محور را با یک
    مدل رگرسیون لجستیک جایگزین می‌کند و خروجی را به‌صورت احتمال نمایش می‌دهد. تغییرات کلیدی شامل: 
    <ul>
      <li>پشتیبانی از مدل خارجی JSON (model_from_excel.json) و fallback داخلی (embedded).</li>
      <li>نمایش درصد ریسک با نمودار Donut و رنگ‌بندی سه‌گانه (سبز/نارنجی/قرمز).</li>
      <li>سیستم کامل i18n (فارسی/انگلیسی) به همراه تشخیص اسکریپت نام کاربر (FA/EN).</li>
      <li>تم روشن/تاریک با toggle و ذخیرهٔ تنظیم در localStorage.</li>
      <li>بهبودهای UI برای ورودی‌های فارسی (فونت Vazir، هماهنگی جهت و placeholder).</li>
      <li>ایمن‌سازی ورودی‌ها: نرمال‌سازی داده‌ها، اعتبارسنجی جامع و جلوگیری از XSS.</li>
    </ul>
    <p>این نسخه برای اهداف آموزشی و نمونه‌کار طراحی شده و <strong>هرگز</strong> جایگزین تشخیص پزشک نیست (لطفاً disclaimer را رعایت کنید).</p>`,
    aboutMe: `من <strong>محمدرضا شهبازی</strong> هستم — توسعه‌دهندهٔ وب و علاقه‌مند به هوش مصنوعی و علم داده. این نسخهٔ دیاکو نشان‌دهندهٔ تلاش برای پیاده‌سازی یک گردش کار کاملِ کوچک ML در سمت کاربر (client-side): از نرمال‌سازی ورودی و مدل رگرسیون لجستیک تا نمایش بصری نتایج و نگهداری وضعیت بین صفحات. <br><br>
    اگر مایل به مشاهدهٔ سورس، مدل تولیدشده یا همکاری هستید، لطفاً از لینک‌های زیر استفاده کنید: <br>
    🔗 <a href="https://github.com/Mohammadreza-Shahbazi313" target="_blank" rel="noopener">GitHub</a> — سورس و CHANGELOG. <br>
    📧 <a href="mailto:eminemengland2000@gmail.com">eminemengland2000@gmail.com</a> — تماس برای همکاری یا سوالات فنی.`,
    accuracyInfo: 'دقت مدل:',
    accuracyDesc: `نسخهٔ v2 از یک مدل رگرسیون لجستیک بهره می‌برد که برای نمایش نمونهٔ Proof-of-Concept (PoC) طراحی شده است. 
    دقت گزارش‌شده با استناد به ارزیابی روی دیتاست مرجع (مثل Pima Indian) حدود ۸۵٪ اعلام شده است؛ اما توجه داشته باشید که این مقدار صرفاً جهت نشان‌دادن عملکرد مدل در محیط آموزشی آورده شده و عملکرد واقعی روی جمعیت‌های متفاوت می‌تواند بسیار متفاوت باشد. برای تصمیم‌گیری پزشکی به‌هیچ‌وجه تنها به این ابزار اتکا نکنید.`,
    
    footerText: 'ساخته شده توسط محمدرضا شهبازی',
    githubTag: 'اگر حمایت کنید خوشحال می‌شم',
    logoClickMessage: 'برای دیدن اطلاعات بیشتر، روی لوگو کلیک کنید',
    inputDataHeader: 'داده‌های ورودی',
    bmiFormulaImg: 'per-bmi-calculate.jpg',
    fastingNotice: '<strong>نکتهٔ مهم:</strong> مقدار <em>گلوکز ناشتا</em> را وارد کنید (بعد از حداقل ۸ ساعت ناشتا بودن).',
    nameTooltip: 'این فیلد اختیاری است',
    riskMessage_low: 'خطر پایین',
    riskMessage_mid: 'خطر متوسط — توصیه به بررسی',
    riskMessage_high: 'در معرض خطر — مراجعه به پزشک',
    themeLabel_light: 'روشن',
    themeLabel_dark: 'تاریک',
    medicalDisclaimer: `<strong>توجه مهم — Disclaimer / هشدار پزشکی:</strong>
    <p style="margin:6px 0;">
    این ابزار صرفاً یک نمونه‌کار آموزشی است و <strong>هرگز</strong> جایگزین تشخیص یا مشورت پزشکی نیست.
    برای بررسی قطعی وضعیت سلامت حتماً به پزشک مراجعه کنید.
    </p>`,

  },
  en: {
    title: 'Diaco - Diabetes Test',
    titleResult: 'Diaco - Test Result',
    titleBMI: 'Diaco - BMI Calculation',
    titleThanks: 'Diaco - Thank You',
    titleAbout: 'Diaco - About Me & Project',
    mainTitleAbout: 'Diaco — About the project & v2 changes',
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
    thankMessageNamed: (name) => `We sincerely thank ${name} for participating in this screening.`,
    thankMessageGeneric: 'We sincerely thank the dear test-taker for participating in this screening.',
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
    aboutAuthor: 'About the Developer',
    aboutProject: `Version 2 (v2) of Diaco upgrades the original heuristic checks to a Logistic Regression model that outputs probability scores. Key improvements:
    <ul>
      <li>Support for external JSON LR model (model_from_excel.json) with embedded fallback.</li>
      <li>Risk shown as a percentage via a donut chart (color-coded: green/orange/red).</li>
      <li>Full bilingual i18n (FA/EN) with input-script detection for names.</li>
      <li>Light/Dark theme toggle persisted in localStorage.</li>
      <li>UX improvements for Persian inputs (Vazir font, direction & placeholder sync).</li>
      <li>Security hardening: input normalization, comprehensive validation and XSS mitigation.</li>
    </ul>
    <p>This release is intended for demonstration and educational purposes and is <strong>not</strong> a medical diagnostic tool.</p>`,
    aboutMe: `I am <strong>Mohammadreza Shahbazi</strong>, a Web Developer with an interest in AI and Data Science. Diaco v2 demonstrates a compact client-side ML workflow: feature standardization, logistic regression inference, and client-side visualization with persistence across pages.<br><br>
    For source code, model files, or collaboration inquiries, please use the links below: <br>
    🔗 <a href="https://github.com/Mohammadreza-Shahbazi313" target="_blank" rel="noopener">GitHub</a> — source & CHANGELOG. <br>
    📧 <a href="mailto:eminemengland2000@gmail.com">eminemengland2000@gmail.com</a>`,
    accuracyInfo: 'Model accuracy:',
    accuracyDesc: `Diaco v2 uses a logistic regression model provided as a PoC. The reported accuracy (~85%) is based on evaluation on a reference dataset (e.g., Pima Indian dataset) to demonstrate model behavior. Real-world performance varies; this tool must not be used as a substitute for medical testing or professional advice.`,

    footerText: 'Made by Mohammadreza Shahbazi',
    githubTag: 'I would be happy if you support me',
    logoClickMessage: 'Click on the logo for more information',
    bmiFormulaImg: 'en-bmi-calculate.png',
    fastingNotice: '<strong>Important:</strong> Please enter <em>fasting glucose</em> value (after at least 8 hours fasting).',
    nameTooltip: 'This field is optional.',
    riskMessage_low: 'Low risk',
    riskMessage_mid: 'Moderate risk — check-up recommended',
    riskMessage_high: 'High risk — medical consultation advised',
    riskMessage_low: 'Low risk',
    riskMessage_mid: 'Moderate risk — check-up recommended',
    riskMessage_high: 'High risk — medical consultation advised',
    inputDataHeader: 'Input Data',
    themeLabel_light: 'Light',
    themeLabel_dark: 'Dark',
    thankMessageNamed: (name) => `We sincerely thank <strong>${name}</strong> for participating in this screening.`,
    medicalDisclaimer: `<strong>Important — Medical disclaimer:</strong>
    <p style="margin:6px 0;">
    This tool is provided for educational and demonstration purposes only and is <strong>not</strong> a medical diagnostic tool.
    For any medical concerns or a definitive diagnosis, please consult a qualified healthcare professional.
    </p>`,
    
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



  const nameLabelEl = document.getElementById('name-label');
  let nameTooltipEl = document.getElementById('name-tooltip');

  if (nameLabelEl && nameTooltipEl) {


    if (!nameLabelEl.contains(nameTooltipEl)) {
      nameLabelEl.appendChild(nameTooltipEl);
    }


    const plainLabelText = m.nameLabel || 'نام و نام خانوادگی';

    const firstNode = nameLabelEl.childNodes[0];
    if (firstNode && firstNode.nodeType === Node.TEXT_NODE) {
      firstNode.nodeValue = plainLabelText + ' ';
    } else {

      nameLabelEl.innerHTML = `${plainLabelText} <span id="name-tooltip" class="field-note inline" role="note" aria-live="polite" aria-atomic="true" style="display:none;"></span>`;
      nameTooltipEl = document.getElementById('name-tooltip');
    }


    const tooltipText = (m.nameTooltip || '').trim();
    if (tooltipText) {
      nameTooltipEl.textContent = tooltipText;
      nameTooltipEl.style.display = 'inline-block';
      nameTooltipEl.setAttribute('aria-hidden', 'false');
    } else {
      nameTooltipEl.textContent = '';
      nameTooltipEl.style.display = 'none';
      nameTooltipEl.setAttribute('aria-hidden', 'true');
    }
  }




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
      inputHeaderElement.textContent = (m.inputDataHeader || messages['fa'].inputDataHeader || '');
    }


    const checkupElement = document.getElementById('annual-checkup');
    if (checkupElement) {
      checkupElement.innerHTML = m.attentionCheckup;
    }


    document.getElementById('thanks-link').textContent = m.thanksLink;
    document.getElementById('test-again-link').textContent = m.testAgainLink;


    displayResultText(lang);

  }
if (document.getElementById('about-content')) {
  
  const aboutHeaderEl = document.getElementById('about-header');
  if (aboutHeaderEl) aboutHeaderEl.textContent = m.aboutHeader;

  const aboutProjectEl = document.getElementById('about-project');
  if (aboutProjectEl) aboutProjectEl.innerHTML = m.aboutProject || '';

  const disclaimerEl = document.getElementById('medical-disclaimer');
  if (disclaimerEl) disclaimerEl.innerHTML = m.medicalDisclaimer || '';

  const aboutAuthorEl = document.getElementById('about-author');
  if (aboutAuthorEl) aboutAuthorEl.textContent = m.aboutAuthor;

  const aboutMeEl = document.getElementById('about-me');
  if (aboutMeEl) aboutMeEl.innerHTML = m.aboutMe || '';

  const accuracyInfoEl = document.getElementById('accuracy-info');
  if (accuracyInfoEl) accuracyInfoEl.textContent = m.accuracyInfo;

  const accuracyDescEl = document.getElementById('accuracy-desc');
  if (accuracyDescEl) accuracyDescEl.innerHTML = m.accuracyDesc || '';
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


  try {
    const riskPercentEl = document.getElementById('riskPercent');
    const riskMsgEl = document.getElementById('riskMessage');
    if (riskPercentEl && riskMsgEl) {
      const pctText = (riskPercentEl.textContent || '').toString().trim();
      const pct = parseInt(pctText.replace('%', ''), 10);
      if (!isNaN(pct)) {
        const key = pct >= 65 ? 'riskMessage_high' : (pct >= 35 ? 'riskMessage_mid' : 'riskMessage_low');
        riskMsgEl.textContent = messages[currentLang][key] || messages['fa'][key] || '';
      }
    }
  } catch (e) { /* noop */ }


  updateThemeButton();
}


function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeButton(isDark);
}

function updateThemeButton(isDark = document.body.classList.contains('dark-theme')) {
  const themeBtn = document.getElementById('theme-btn');

  if (typeof window.refreshThemeToggleLabel === 'function') window.refreshThemeToggleLabel(); 

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

  try {
    localStorage.setItem('diaco_lastData', JSON.stringify({
      data: formData,
      ts: Date.now()
    }));
  } catch (e) { /* noop */ }


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


    document.getElementById('result-name').textContent = data.name || '';
    document.getElementById('result-age').textContent = data.age || '';
    document.getElementById('result-glucose').textContent = data.glucose || '';
    document.getElementById('result-bmi').textContent = (typeof data.bmi === 'number') ? data.bmi.toFixed(2) : '';
    document.getElementById('result-pedigree').textContent = (typeof data.pedigree === 'number') ? data.pedigree.toFixed(3) : '';


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


    if (prob !== null && typeof prob !== 'undefined') {
      // const percent = Math.max(0, Math.min(100, Math.round(prob * 100)));
      const percent = probToPercent(prob);



      if (typeof renderDonutEmbedded === 'function') {
        renderDonutEmbedded(percent, 'riskDonut', 'riskPercent');
      } else if (typeof renderDonut === 'function') {
        renderDonut(percent, 'riskDonut', 'riskPercent');
      }


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



function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[&<>"'`=\/]/g, function(s) {
    return ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;'
    })[s];
  });
}



function detectNameScript(name) {
  if (!name || typeof name !== 'string') return null;
  const persianRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]/g;
  const latinRegex = /[A-Za-z]/g;
  const persianMatches = name.match(persianRegex) || [];
  const latinMatches = name.match(latinRegex) || [];
  if (persianMatches.length === 0 && latinMatches.length === 0) return null;
  if (persianMatches.length > latinMatches.length) return 'fa';
  if (latinMatches.length > persianMatches.length) return 'en';
  return (currentLang === 'fa') ? 'fa' : 'en';
}

function loadThanksData() {
  const thanksMessageElement = document.getElementById('thank-message-professional');
  const thanksHeaderEl = document.getElementById('thanks-header');
  if (!thanksMessageElement || !thanksHeaderEl) return;

  
  let raw = null;
  try { raw = sessionStorage.getItem('diabetesResultData'); } catch (e) { raw = null; }

  if (!raw) {
    try {
      const backup = localStorage.getItem('diaco_lastData');
      if (backup) {
        const parsed = JSON.parse(backup);
        if (parsed && parsed.data) raw = JSON.stringify(parsed.data);
      }
    } catch (e) { raw = null; }
  }

 
  const pageLang = currentLang || (document.documentElement.lang || 'fa');
  const mPageLang = messages[pageLang] || messages['fa'];

  let name = '';
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {

        if (parsed.name) {
          name = String(parsed.name).trim();
        } else if (parsed.data && parsed.data.name) {
          name = String(parsed.data.name).trim();
        } else if (parsed.data && parsed.data.name === undefined) {
          
          name = String(parsed.name || '').trim();
        }
      }
    } catch (e) {
      name = '';
    }
  }

  let finalMessageHtml = mPageLang.thankMessageGeneric || '';
  let headerText = mPageLang.thanksHeaderTitle || '';

  if (name && name.length > 0) {
    const safeName = escapeHtml(name);
    const mUse = messages[pageLang] || messages['fa'];

    try {
      if (typeof mUse.thankMessageNamed === 'function') {
        finalMessageHtml = mUse.thankMessageNamed(safeName);
      } else if (mUse.thankMessageNamed) {
        finalMessageHtml = mUse.thankMessageNamed;
      } else {
        finalMessageHtml = mUse.thankMessageGeneric || finalMessageHtml;
      }
    } catch (e) {
      finalMessageHtml = mUse.thankMessageGeneric || finalMessageHtml;
    }
  // }
  
  try {
    if (typeof mUse.thanksHeaderNamed === 'function') {
      headerText = mUse.thanksHeaderNamed(safeName);
    } else if (mUse.thanksHeaderNamed) {
      headerText = mUse.thanksHeaderNamed;
    } else {
      headerText = mUse.thanksHeaderTitle || headerText;
    }
  } catch (e) {
    headerText = mUse.thanksHeaderTitle || headerText;
  }
} else {
  finalMessageHtml = mPageLang.thankMessageGeneric || finalMessageHtml;
  headerText = mPageLang.thanksHeaderTitle || headerText;
}


thanksMessageElement.innerHTML = finalMessageHtml;
thanksHeaderEl.textContent = headerText;

try { sessionStorage.removeItem('diabetesResultData'); } catch (e) { /* noop */ }
try { localStorage.removeItem('diaco_lastData'); } catch (e) { /* noop */ }
}



function initFancyThemeToggle() {
  const SUN_ICON = "https://img.icons8.com/external-justicon-lineal-color-justicon/64/external-sun-weather-justicon-lineal-color-justicon-1.png";
  const MOON_ICON = "https://img.icons8.com/color/48/moon-satellite.png";

  if (document.getElementById('theme-toggle-wrapper')) return;

  const oldBtn = document.getElementById('theme-btn');
  const place = (oldBtn && oldBtn.parentNode) ? oldBtn.parentNode : (document.querySelector('.left-section') || document.body);

  const wrapper = document.createElement('div');
  wrapper.innerHTML = `
    <div id="theme-toggle-wrapper" class="theme-toggle-wrapper" aria-hidden="false">
      <label class="theme-toggle" for="theme-checkbox" aria-labelledby="theme-toggle-label">
        <input id="theme-checkbox" class="theme-checkbox" type="checkbox" role="switch" aria-checked="false" />
        <span class="theme-track" aria-hidden="true">
          <span class="theme-knob" aria-hidden="true">
            <img id="theme-knob-icon" src="${SUN_ICON}" alt="theme icon" width="20" height="20" />
          </span>
        </span>
        <span id="theme-toggle-label" class="theme-toggle-label" aria-live="polite"></span>
      </label>
    </div>
  `;

  if (oldBtn && oldBtn.parentNode) {
    oldBtn.parentNode.replaceChild(wrapper.firstElementChild, oldBtn);
  } else {
    place.insertBefore(wrapper.firstElementChild, place.firstChild);
  }

  const checkbox = document.getElementById('theme-checkbox');
  const labelEl = document.getElementById('theme-toggle-label');
  const knobImg = document.getElementById('theme-knob-icon');

  if (!checkbox || !labelEl || !knobImg) return;

  const saved = localStorage.getItem('theme');
  const initialDark = (saved === 'dark') || document.body.classList.contains('dark-theme');

  if (initialDark) {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }

  function updateToggleUI() {
    const isDark = document.body.classList.contains('dark-theme');
    checkbox.checked = !!isDark;
    checkbox.setAttribute('aria-checked', isDark ? 'true' : 'false');

    knobImg.src = isDark ? MOON_ICON : SUN_ICON;
    knobImg.alt = isDark ? 'dark theme' : 'light theme';

    let m = (typeof messages !== 'undefined' && messages[currentLang]) ? messages[currentLang] : messages['fa'];
    labelEl.textContent = isDark ? (m.themeLabel_dark || 'تاریک') : (m.themeLabel_light || 'روشن');

    try { if (typeof updateThemeButton === 'function') updateThemeButton(isDark); } catch (e) { }
  }

  updateToggleUI();

  checkbox.addEventListener('change', function () {
    const isDark = this.checked;
    if (isDark) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
    updateToggleUI();
  });

  window.refreshThemeToggleLabel = updateToggleUI;
}


if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFancyThemeToggle);
} else {
  initFancyThemeToggle();
}

document.addEventListener('DOMContentLoaded', () => {

  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.add(savedTheme + '-theme');
  updateThemeButton(savedTheme === 'dark');


  setLanguage(currentLang);

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

});


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


function sigmoid(z) { return 1 / (1 + Math.exp(-z)); }


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
  return sigmoid(z);
}


function probToPercent(prob) {
  if (typeof prob !== 'number' || isNaN(prob)) return 0;
  const pct = Math.floor(prob * 100);
  return Math.min(99, Math.max(0, pct));
}



let donutChart = null;
function getColorForPercent(pct) {
  if (pct >= 65) return '#e74c3c';
  if (pct >= 35) return '#f39c12';
  return '#2ecc71';
}
function renderDonut(percent, canvasId = 'riskDonut', labelId = 'riskPercent') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const color = getColorForPercent(percent);
  const data = {
    datasets: [{
      data: [percent, Math.max(0, 100 - percent)],
      backgroundColor: [color, '#e6e6e6'],
      borderWidth: 0
    }]
  };
  const options = { cutout: '70%', plugins: { legend: { display: false } }, maintainAspectRatio: false };
  if (donutChart) donutChart.destroy();
  donutChart = new Chart(ctx, { type: 'doughnut', data, options });
  const lbl = document.getElementById(labelId);
  if (lbl) lbl.textContent = percent.toFixed(0) + '%';
}

function handlePredictionAndShow(e) {
  if (e && e.preventDefault) e.preventDefault();
  const glucose = Number(document.getElementById('glucose').value);
  const bmi = Number(document.getElementById('bmi').value);
  const age = Number(document.getElementById('age').value);
  const pedigree = Number(document.getElementById('pedigree').value);

  const prob = predictFromModel([glucose, bmi, age, pedigree]);
  if (prob === null) { alert('Model not loaded. Put model_from_excel.json next to script.js and refresh.'); return; }
  // const percent = Math.max(0, Math.min(100, Math.round(prob * 100)));
  const percent = probToPercent(prob);
  renderDonut(percent, 'riskDonut', 'riskPercent');

  const msgEl = document.getElementById('riskMessage');
  if (msgEl) {
    const m = messages[currentLang] || messages['fa'];
    const key = percent >= 65 ? 'riskMessage_high' : (percent >= 35 ? 'riskMessage_mid' : 'riskMessage_low');
    msgEl.textContent = m[key] || messages['fa'][key] || '';
  }
}

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


function _sigmoid(z) { return 1 / (1 + Math.exp(-z)); }


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


let __assistant_donut_chart = null;
function getColorForPercent(pct) {
  if (pct >= 65) return '#e74c3c';
  if (pct >= 35) return '#f39c12';
  return '#2ecc71';
}

function renderDonutEmbedded(percent, canvasId = 'riskDonut', labelId = 'riskPercent') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const parent = canvas.parentElement;
  if (parent) parent.style.height = parent.style.height || '220px';


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


function attachEmbeddedPrediction() {
  const diabetesForm = document.getElementById('diabetes-form');
  if (!diabetesForm) return;

  diabetesForm.addEventListener('submit', function (e) {
    try { e.preventDefault(); } catch (_) { }

    const glucose = Number(document.getElementById('glucose')?.value || 0);
    const bmi = Number(document.getElementById('bmi')?.value || 0);
    const age = Number(document.getElementById('age')?.value || 0);
    const pedigree = Number(document.getElementById('pedigree')?.value || 0);

    const prob = predictFromModelEmbedded([glucose, bmi, age, pedigree]);
    if (prob === null) { alert('Embedded model not available'); return; }

    // const percent = Math.max(0, Math.min(100, Math.round(prob * 100)));
    const percent = probToPercent(prob);


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

      const form = document.getElementById('diabetes-form');
      form.parentNode.insertBefore(riskArea, form.nextSibling);
    }

    renderDonutEmbedded(percent, 'riskDonut', 'riskPercent');

    const msgEl = document.getElementById('riskMessage');
    if (msgEl) {
      const m = messages[currentLang] || messages['fa'];
      const key = percent >= 65 ? 'riskMessage_high' : (percent >= 35 ? 'riskMessage_mid' : 'riskMessage_low');
      msgEl.textContent = m[key] || messages['fa'][key] || '';
    }



    riskArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}


if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', attachEmbeddedPrediction);
else attachEmbeddedPrediction();


window.LR_MODEL = {
  "features": ["Glucose", "BMI", "Age", "DiabetesPedigreeFunction"],
  "coef": [1.0627147491079607, 0.6159082371269606, 0.2875955304896891, 0.1965362662301343],
  "intercept": -0.8500588559470118,
  "scaler_mean": [120.91061452513966, 32.13463687150836, 33.5512104283054, 0.4805288640595905],
  "scaler_scale": [31.26416876550776, 7.799533929898061, 11.783651973905455, 0.3349411849829437]
};

function _sigmoid(z) {
  return 1 / (1 + Math.exp(-z));
}

window.predictFromModelEmbedded = function (valuesArray) {
  const means = LR_MODEL.scaler_mean;
  const scales = LR_MODEL.scaler_scale;
  const coefs = LR_MODEL.coef;
  const intercept = LR_MODEL.intercept;

  let z = intercept;

  for (let i = 0; i < coefs.length; i++) {
    const x = Number(valuesArray[i] || 0);
    const xnorm = (x - means[i]) / scales[i];
    z += coefs[i] * xnorm;
  }

  return _sigmoid(z);
};



window.__assistant_donut_chart = null;

window.renderDonutEmbedded = function (percent, canvasId = 'riskDonut', labelId = 'riskPercent') {
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
    labels: ['Risk', 'Remaining'],
    datasets: [{
      data: [percent, 100 - percent],
      backgroundColor: [color, '#e6e6e6'],
      borderWidth: 0
    }]
  };

  const options = {
    cutout: '70%',
    plugins: { legend: { display: false } },
    maintainAspectRatio: false,
    responsive: true,
    animation: { duration: 700 }
  };

  if (window.__assistant_donut_chart)
    window.__assistant_donut_chart.destroy();

  window.__assistant_donut_chart = new Chart(ctx, {
    type: 'doughnut',
    data,
    options
  });

  document.getElementById(labelId).textContent = percent.toFixed(0) + '%';

  const msgEl = document.getElementById('riskMessage');
  if (msgEl) {
    const m = messages[currentLang] || messages['fa'];
    const key = percent >= 65 ? 'riskMessage_high' : (percent >= 35 ? 'riskMessage_mid' : 'riskMessage_low');
    msgEl.textContent = m[key] || messages['fa'][key] || '';
  }

};

