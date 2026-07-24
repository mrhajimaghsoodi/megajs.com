---
title: "تصویرها در HTML"
description: "این صفحه قراردادن image با alt مفید، اندازه پایدار و گزینه‌های responsive را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش تصویرها در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش تصویرها در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, تصویرها در HTML, آموزش HTML, مرجع HTML, HTML images, img alt src, responsive images"
order: 16
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# تصویرها در HTML

تصویرها در HTML درباره قراردادن image با alt مفید، اندازه پایدار و گزینه‌های responsive است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با تصویرها در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `src`: به فایل image اشاره می‌کند.
- `alt`: image معنادار را توصیف یا تزئینی را خالی می‌کند.
- `width / height`: قبل از load شدن فضا رزرو می‌کند.
- برای این موضوع، معنای واضح برای کاربر، screen reader و search engine معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<img src="hero-640.jpg" srcset="hero-640.jpg 640w, hero-1280.jpg 1280w" sizes="(max-width: 700px) 100vw, 700px" alt="HTML layout sketch" width="700" height="394">
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Images quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>src</code></td><td>points to the image file</td></tr>
    <tr><td><code>alt</code></td><td>describes meaningful images or marks decorative ones empty</td></tr>
    <tr><td><code>width / height</code></td><td>reserves layout space before loading</td></tr>
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
    <title>HTML Images practice</title>
  </head>
  <body>
    <img src="hero-640.jpg" srcset="hero-640.jpg 640w, hero-1280.jpg 1280w" sizes="(max-width: 700px) 100vw, 700px" alt="HTML layout sketch" width="700" height="394">
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `src` | به فایل image اشاره می‌کند | در تصویرها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `alt` | image معنادار را توصیف یا تزئینی را خالی می‌کند | در تصویرها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `width / height` | قبل از load شدن فضا رزرو می‌کند | در تصویرها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از تصویرها در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `src` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `images.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `src` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **فاوآیکن HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
