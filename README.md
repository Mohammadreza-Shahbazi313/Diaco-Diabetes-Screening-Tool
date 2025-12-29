

# Diaco — Diabetes Screening Tool (v2)🩺

Small, bilingual (FA/EN) web PoC. v2 replaces heuristic checks with a Logistic Regression model, shows percentage risk (donut chart), and adds full i18n, theme, UI improvements and security hardening.


A **bilingual (English/Persian) diabetes screening tool** built with pure **HTML, CSS, and JavaScript**.
This project is designed as a **foundational Proof-of-Concept (V1)** focusing on dynamic UI, form validation, and client-side logic based on known risk factors.


---

## 🚀 Live (v2)
Try the latest v2 on GitHub Pages:  

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
├── model_from_excel.json       # optional external LR model (fallback to embedded model)
├── logo.png         \# Project logo
├── CHANGELOG.md               # v1 → v2 changes
├── per-bmi-calculate.jpg \# Persian formula image
└── en-bmi-calculate.png  \# English formula image

````

---

## ⚙️ Features (v2)
- ✅ Bilingual UI (Persian/English) with automatic RTL/LTR handling.
- ✅ Logistic Regression model (probability output). Supports:
  - ✅ External model JSON (model_from_excel.json)
  - ✅ Embedded fallback model inside script.js
- ✅ Risk visualization via a donut chart (Chart.js) with color-coded levels:
  - ✅ Green: Low risk, Orange: Moderate risk, Red: High risk
- ✅ Input script detection (Persian/Latin) — applies .input-fa / .input-en for proper font/direction.
- ✅ Robust form validation with bilingual error messages.
- ✅ Theme switch (Light/Dark) with an ARIA-friendly toggle and local storage persistence.
- ✅ SessionFlow: sessionStorage for cross-page state, with localStorage fallback.
- ✅ XSS protection (escapeHtml) for user-provided names and content inserted via innerHTML.
- ✅ Responsive, mobile-friendly layout with Vazir font for Persian input.
- ✅ Minimal external dependencies (Chart.js only) and graceful fallbacks.

---


## 🧠 How It Works (v2)
- `index.html` contains the data-entry form. Submitting saves a session object to `sessionStorage` and redirects to `result.html`.
- `script.js` provides:
  - `setLanguage(lang)` — updates UI text, d
  - irection, and stores selection in localStorage.
  - `validateForm(formId)` — required/range/regex checks with bilingual messages.
  - `submitForm()` — writes `diabetesResultData` to sessionStorage.
  - ML pipeline:
    - `loadLRModel()` — tries to fetch `model_from_excel.json` (external).
    - `predictFromModel(values)` — uses fetched model (if available).
    - `predictFromModelEmbedded(values)` — deterministic embedded LR fallback.
    - Inputs are standardized using `scaler_mean` and `scaler_scale` before computing `sigmoid(z)`.
  - Visualization:
    - `renderDonutEmbedded(percent, canvasId, labelId)` — builds and updates the Chart.js donut.
  - Thanks page:
    - `loadThanksData()` — reads session, detects script of `name` via `detectNameScript()`, escapes it via `escapeHtml()` and renders a localized thank-you message; then clears sessionStorage.
- Storage: Language and theme persist in `localStorage`. Session data flows via `sessionStorage` with optional `diaco_lastData` fallback in `localStorage`.


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

## Release — v2 (summary)
This release (v2) converts the internal logic to a Logistic Regression model (probability output), adds a donut visualization, implements full bilingual support (FA/EN) with automatic script detection, improves UI (Vazir font, theme toggle), and adds security hardening (XSS escape, validation). See `CHANGELOG.md` for detailed entries and commit history.


-----

## 👨‍💻 Author

**Mohammadreza Shahbazi (M.SH)**  

📧 [eminemengland2000@gmail.com](mailto:eminemengland2000@gmail.com)  
🌐 [LinkedIn](https://www.linkedin.com/in/mohammadreza-shahbazi-313sh/)  
💬 [Telegram](https://t.me/STANsoSAD)

-----

> *“Keep coding. Keep growing.”* 💻🌿
> © 2025 Mohammadreza Shahbazi (M.SH) — All rights reserved.

```
```
