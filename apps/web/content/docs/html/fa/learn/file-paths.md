---
title: "مسیر فایل‌ها در HTML"
description: "این صفحه وصل کردن image، stylesheet، script و صفحه با path نسبی قابل اعتماد را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش مسیر فایل‌ها در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش مسیر فایل‌ها در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. همراه تمرین کاربردی."
keywords: "HTML, مسیر فایل‌ها در HTML, آموزش HTML, مرجع HTML, HTML file paths, relative path, absolute URL"
order: 26
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# مسیر فایل‌ها در HTML

مسیر فایل‌ها در HTML درباره وصل کردن image، stylesheet، script و صفحه با path نسبی قابل اعتماد است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با مسیر فایل‌ها در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `./file.png`: از folder فعلی شروع می‌کند.
- `../file.png`: یک folder بالا می‌رود و فایل را پیدا می‌کند.
- `/assets/app.css`: از root سایت شروع می‌کند.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="file-paths" aria-labelledby="file-paths-title">
  <h2 id="file-paths-title">HTML File Paths</h2>
  <p>linking images, stylesheets, scripts, and pages with reliable relative paths.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML File Paths quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>./file.png</code></td><td>starts from the current folder</td></tr>
    <tr><td><code>../file.png</code></td><td>moves up one folder before locating a file</td></tr>
    <tr><td><code>/assets/app.css</code></td><td>starts from the site root</td></tr>
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
    <title>HTML File Paths practice</title>
  </head>
  <body>
    <section class="file-paths" aria-labelledby="file-paths-title">
      <h2 id="file-paths-title">HTML File Paths</h2>
      <p>linking images, stylesheets, scripts, and pages with reliable relative paths.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `./file.png` | از folder فعلی شروع می‌کند | در مسیر فایل‌ها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `../file.png` | یک folder بالا می‌رود و فایل را پیدا می‌کند | در مسیر فایل‌ها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `/assets/app.css` | از root سایت شروع می‌کند | در مسیر فایل‌ها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از مسیر فایل‌ها در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `./file.png` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `file-paths.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `./file.png` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **بخش head در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
