---
title: "مقدمه HTML"
description: "HTML چیست و ساختار سند وب چگونه شکل می‌گیرد."
order: 1
sources:
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: WHATWG HTML
    url: https://html.spec.whatwg.org/
---

# مقدمه HTML

HTML (HyperText Markup Language) **ساختار** صفحه وب را توصیف می‌کند. مرورگر HTML را به درخت DOM تبدیل و UI را رسم می‌کند.

## اسکلت سند

```html
<!DOCTYPE html>
<html lang="fa" dir="rtl">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>سند</title>
  </head>
  <body>
    <h1>سلام</h1>
  </body>
</html>
```

## مفاهیم اصلی

- **Element** محتوا را با تگ باز/بسته محصور می‌کند (`<p>…</p>`).
- **Attribute** رفتار عنصر را تنظیم می‌کند (`href`، `src`، `alt`، `class`).
- به‌جای انبوه `div`، از تگ‌های **semantic** مثل `<main>`، `<nav>` و `<article>` استفاده کنید.

> ساختار این صفحه با ترکیب نمای کلی MDN و مقدمه W3Schools نوشته شده است.
