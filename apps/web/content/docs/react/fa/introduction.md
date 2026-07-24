---
title: "مقدمه React"
description: "کامپوننت و UI اعلانی — هم‌راستا با react.dev Learn."
order: 1
sources:
  - name: react.dev
    url: https://react.dev/learn
  - name: MDN
    url: https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
---

# مقدمه React

React کتابخانه‌ای برای ساخت رابط کاربری از **component**هاست — توابعی که UI را برای یک state مشخص توصیف می‌کنند.

## مدل ذهنی

```jsx
function Hello({ name }) {
  return <h1>سلام، {name}</h1>;
}
```

- **Declarative** — توصیف می‌کنید UI *چه شکلی* باید باشد
- **Composition** — کامپوننت‌های کوچک داخل بزرگ‌تر می‌نشینند
- **State** — با تغییر داده، React درخت مرتبط را دوباره render می‌کند

## گام‌های بعدی این مسیر

Props و State ← Hooks ← Effects ← Lists و keys — همان اسکلت [react.dev/learn](https://react.dev/learn).
