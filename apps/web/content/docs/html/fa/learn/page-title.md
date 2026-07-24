---
title: "عنوان صفحه HTML"
description: "این صفحه نوشتن title مناسب برای tab، bookmark، history و search snippet را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش عنوان صفحه HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش عنوان صفحه HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, عنوان صفحه HTML, آموزش HTML, مرجع HTML, HTML title, page title SEO, title element"
order: 18
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# عنوان صفحه HTML

عنوان صفحه HTML درباره نوشتن title مناسب برای tab، bookmark، history و search snippet است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با عنوان صفحه HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `<title>`: متن تب مرورگر را تعیین می‌کند.
- `unique title`: صفحه‌های مشابه را در search و history جدا می‌کند.
- `title length`: کلمات مهم را قابل مشاهده نگه می‌دارد.
- برای این موضوع، معنای واضح برای کاربر، screen reader و search engine معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="page-title" aria-labelledby="page-title-title">
  <h2 id="page-title-title">HTML Page Title</h2>
  <p>writing title text that helps tabs, bookmarks, history, and search snippets.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Page Title quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;title&gt;</code></td><td>sets the browser tab text</td></tr>
    <tr><td><code>unique title</code></td><td>distinguishes similar pages in search and history</td></tr>
    <tr><td><code>title length</code></td><td>keeps important words visible</td></tr>
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
    <title>HTML Page Title practice</title>
  </head>
  <body>
    <section class="page-title" aria-labelledby="page-title-title">
      <h2 id="page-title-title">HTML Page Title</h2>
      <p>writing title text that helps tabs, bookmarks, history, and search snippets.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<title>` | متن تب مرورگر را تعیین می‌کند | در عنوان صفحه HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `unique title` | صفحه‌های مشابه را در search و history جدا می‌کند | در عنوان صفحه HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `title length` | کلمات مهم را قابل مشاهده نگه می‌دارد | در عنوان صفحه HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از عنوان صفحه HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `<title>` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `page-title.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `<title>` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **جدول‌های HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
