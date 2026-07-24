---
title: "مقدمه CSS"
description: "Cascade، specificity و اعمال استایل."
order: 1
sources:
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
  - name: W3Schools CSS
    url: https://www.w3schools.com/css/
  - name: CSS Specifications
    url: https://www.w3.org/Style/CSS/
---

# مقدمه CSS

CSS (Cascading Style Sheets) ظاهر را کنترل می‌کند: رنگ، تایپوگرافی، layout و حرکت.

```css
:root {
  --brand: #ffd400;
}
body {
  font-family: Vazirmatn, system-ui, sans-serif;
  color: #1a1a1a;
  direction: rtl;
}
```

**Cascade** تعارض‌ها را با origin، importance، specificity و ترتیب منبع حل می‌کند.
