# CHANGELOG

## [2.0.0] - 2025-12-22
### Added
- Replaced heuristic scoring with Logistic Regression model (probability output).
- External JSON model support (`model_from_excel.json`) and embedded fallback model.
- Donut chart risk visualization using Chart.js.
- Full i18n (Persian/English): labels, captions, error messages, thanks/result pages.
- Input script detection (.input-fa / .input-en) and automatic font/direction adjustments.
- Dark/Light theme with ARIA-friendly toggle and persisted setting.

### Fixed
- Preserved user name across language switches on the Thanks page.
- Fixed direction/placeholder mismatches when switching languages.
- Prevented chart reset/loss on language change.
- Resolved font conflicts and input readability issues.

### Security
- Implemented `escapeHtml` to sanitize user-entered names before injecting into DOM.
- Added robust validation for numeric ranges and required fields.

### Notes
- model_from_excel.json is optional; embedded model guarantees functionality.
