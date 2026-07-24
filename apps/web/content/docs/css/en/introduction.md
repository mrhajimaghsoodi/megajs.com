---
title: "Introduction to CSS"
description: "Cascade, specificity, and applying styles."
order: 1
sources:
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
  - name: W3Schools CSS
    url: https://www.w3schools.com/css/
  - name: CSS Specifications
    url: https://www.w3.org/Style/CSS/
---

# Introduction to CSS

CSS (Cascading Style Sheets) controls presentation: color, typography, layout, and motion.

```css
:root {
  --brand: #ffd400;
}
body {
  font-family: system-ui, sans-serif;
  color: #1a1a1a;
}
```

The **cascade** resolves conflicts using origin, importance, specificity, and source order.
