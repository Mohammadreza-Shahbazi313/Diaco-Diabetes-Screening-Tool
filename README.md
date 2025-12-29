

# Diaco — Diabetes Screening Tool (v2)🩺

**v2 — Logistic Regression, percentage risk (donut), full FA/EN i18n, theme & security.**

Diaco is a small bilingual (Persian / English) client-side proof-of-concept that helps demonstrate an early diabetes screening flow. Version 2 upgrades the original V1 heuristic to a Logistic Regression model (probability output), visualizes risk as a donut chart, improves Persian UX (Vazir font, input-script detection), and adds security hardening and robust i18n.


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
├── result.html      \# Result display page (percentage + donut)
├── bmi.html         \# BMI calculator utility
├── about.html       \# About the project and author
├── thanks.html      \# Final thank you page
├── style.css        \# All styles (inc. Light/Dark modes & RTL/LTR)
├── script.js        \# Core logic, i18n, validation, ML pipeline & donut rendering
├── model_from_excel.json       # optional external LR model (fallback to embedded model)
├── logo.png         \# Project logo
├── CHANGELOG.md               # v1 → v2 changes
├── README.md
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

## 🩺 Important — Medical disclaimer
**This project is educational and experimental.** It is **not** a medical diagnostic tool and must **not** be used as a substitute for professional medical advice, diagnosis, or treatment. For any health concerns, consult a qualified physician.

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

## 💻 Run locally (recommended)
Because this is a multi-file static app that fetches optional JSON and uses module-like fetches, **serve it with a local static server** rather than opening files directly.

Options:

1. **VS Code — Live Server** (recommended)
   - Install *Live Server* extension.
   - Open folder and click *Go Live*.

2. **Python** (works on macOS / Linux / Windows with Python installed)
   ```bash
   # Python 3.x
   python -m http.server 8000
   # then open http://localhost:8000/index.html
   Node (serve):

3. npm i -g serve
  serve .
  # open the provided URL
     
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
