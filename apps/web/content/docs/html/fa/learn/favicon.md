---
title: "فاوآیکن HTML"
description: "این صفحه افزودن icon تب مرورگر برای تشخیص برند در tab و bookmark را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش فاوآیکن HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش فاوآیکن HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, فاوآیکن HTML, آموزش HTML, مرجع HTML, HTML favicon, rel icon, browser tab icon"
order: 17
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# فاوآیکن HTML

فاوآیکن HTML درباره افزودن icon تب مرورگر برای تشخیص برند در tab و bookmark است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با فاوآیکن HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `rel="icon"`: یک icon resource ثبت می‌کند.
- `sizes`: ابعاد icon bitmap را اعلام می‌کند.
- `type`: نوع MIME فایل را به مرورگر می‌گوید.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="favicon" aria-labelledby="favicon-title">
  <h2 id="favicon-title">HTML Favicon</h2>
  <p>adding browser tab icons for brand recognition across tabs and bookmarks.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Favicon quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>rel=&quot;icon&quot;</code></td><td>registers an icon resource</td></tr>
    <tr><td><code>sizes</code></td><td>declares bitmap icon dimensions</td></tr>
    <tr><td><code>type</code></td><td>tells the browser the file MIME type</td></tr>
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
    <title>HTML Favicon practice</title>
  </head>
  <body>
    <section class="favicon" aria-labelledby="favicon-title">
      <h2 id="favicon-title">HTML Favicon</h2>
      <p>adding browser tab icons for brand recognition across tabs and bookmarks.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `rel="icon"` | یک icon resource ثبت می‌کند | در فاوآیکن HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `sizes` | ابعاد icon bitmap را اعلام می‌کند | در فاوآیکن HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `type` | نوع MIME فایل را به مرورگر می‌گوید | در فاوآیکن HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از فاوآیکن HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `rel="icon"` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `favicon.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `rel="icon"` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **عنوان صفحه HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
