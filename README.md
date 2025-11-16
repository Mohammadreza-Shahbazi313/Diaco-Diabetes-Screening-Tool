

# 🩺 Diaco - Diabetes Screening Tool (V1)

A **bilingual (English/Persian) diabetes screening tool** built with pure **HTML, CSS, and JavaScript**.
This project is designed as a **foundational Proof-of-Concept (V1)** focusing on dynamic UI, form validation, and client-side logic based on known risk factors.

---
## 🚀 Live Demo
Experience it live on **GitHub Pages** 👇  
👉 [**Open Diaco (Live)**](https://Mohammadreza-Shahbazi313.github.io/Diaco-Diabetes-Screening-Tool/)
---

## 🧱 Project Structure

The Diaco project is a multi-page static application:

```

Diaco-Diabetes-Screening-Tool/
├── index.html       \# Main form (Data Entry)
├── result.html      \# Result display page (Positive/Negative)
├── bmi.html         \# BMI calculator utility
├── about.html       \# About the project and author
├── thanks.html      \# Final thank you page
├── style.css        \# All styles (inc. Light/Dark modes & RTL/LTR)
├── script.js        \# Core app logic, translation, validation & PoC model
├── logo.png         \# Project logo
├── per-bmi-calculate.jpg \# Persian formula image
└── en-bmi-calculate.png  \# English formula image

````

---

## ⚙️ Features
✅ **Fully Bilingual:** Seamless switching between English (LTR) and Persian (RTL).
✅ **Risk Analysis:** A Proof-of-Concept (PoC) model that assesses risk based on key factors (Age, Glucose, BMI, Pedigree).
✅ **Light/Dark Mode:** Dynamic theme switching for user comfort.
✅ **BMI Calculator:** A built-in utility page to help users calculate their BMI.
✅ **Client-Side Validation:** Robust form validation to ensure data integrity.
✅ **Responsive Design:** Clean, centered layout that works well on mobile and desktop.
✅ **Vanilla JS:** Built with zero dependencies for maximum performance and readability.

---

## 🧠 How It Works
- **HTML** defines the structure for all 5 pages.
- **CSS** handles the complete look and feel, including dynamic themes and RTL/LTR direction switching.
- **JavaScript** (`script.js`) controls all application logic:
  - A central `messages` object holds all translations.
  - `setLanguage()` updates all text, CSS classes (`lang-fa`/`lang-en`), and page direction.
  - `validateForm()` ensures all data is correct before submission.
  - `submitForm()` saves data to **`sessionStorage`** and redirects to `result.html`.
  - `displayResultText()` reads from `sessionStorage` and shows the translated result.
  - `loadThanksData()` shows the personalized thank you message and clears the session.

---

## 💻 Run Locally
You can run the project on your computer easily:

```bash
# 1. Clone the repo
git clone [https://github.com/Mohammadreza-Shahbazi313/Diaco-Diabetes-Screening-Tool.git](https://github.com/Mohammadreza-Shahbazi313/Diaco-Diabetes-Screening-Tool.git)

# 2. Navigate into the project folder
cd Diaco-Diabetes-Screening-Tool

# 3. Open in your browser
start index.html  # (on Windows)
open index.html   # (on macOS)
````
-----

## 📈 V2 Roadmap (Planned)

  - [ ] **Feature:** Display diabetes probability as a **percentage** (e.g., "65% Risk").
  - [ ] **Bugfix:** Finalize name personalization logic on the "Thank You" page.
  - [ ] **Upgrade:** Replace the current PoC logic with a true Machine Learning model.

-----

## 👨‍💻 Author

**Mohammadreza Shahbazi (M.SH)** 📧 [eminemengland2000@gmail.com](mailto:eminemengland2000@gmail.com)  
🌐 [LinkedIn](https://www.linkedin.com/in/mohammadreza-shahbazi-313sh/)  
💬 [Telegram](https://t.me/STANsoSAD)

-----

> *“Keep coding. Keep growing.”* 💻🌿
> © 2025 Mohammadreza Shahbazi (M.SH) — All rights reserved.

```
```
