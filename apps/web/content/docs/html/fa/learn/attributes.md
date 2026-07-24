---
title: "ویژگی‌های HTML"
description: "این صفحه افزودن URL، label، state و تنظیمات با جفت‌های name-value را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش ویژگی‌های HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش ویژگی‌های HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, ویژگی‌های HTML, آموزش HTML, مرجع HTML, HTML attributes, href alt class id, HTML attribute syntax"
order: 6
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# ویژگی‌های HTML

ویژگی‌های HTML درباره افزودن URL، label، state و تنظیمات با جفت‌های name-value است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با ویژگی‌های HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `href`: مقصد link را مشخص می‌کند.
- `alt`: image را برای accessibility و fallback توصیف می‌کند.
- `class / id`: hook برای styling و script می‌سازد.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="attributes" aria-labelledby="attributes-title">
  <h2 id="attributes-title">HTML Attributes</h2>
  <p>adding URLs, labels, state, and configuration with name-value pairs.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Attributes quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>href</code></td><td>sets the destination for a link</td></tr>
    <tr><td><code>alt</code></td><td>describes an image for accessibility and fallback</td></tr>
    <tr><td><code>class / id</code></td><td>creates styling and scripting hooks</td></tr>
  </tbody>
</table>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Attributes practice</title>
  </head>
  <body>
    <section class="attributes" aria-labelledby="attributes-title">
      <h2 id="attributes-title">HTML Attributes</h2>
      <p>adding URLs, labels, state, and configuration with name-value pairs.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `href` | مقصد link را مشخص می‌کند | در ویژگی‌های HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `alt` | image را برای accessibility و fallback توصیف می‌کند | در ویژگی‌های HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `class / id` | hook برای styling و script می‌سازد | در ویژگی‌های HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از ویژگی‌های HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `href` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `attributes.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `href` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **تیترهای HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
