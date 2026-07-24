---
title: "نمادها در HTML"
description: "این صفحه افزودن symbolهای copyright، currency، math، arrow و موارد دیگر با entity را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش نمادها در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش نمادها در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, نمادها در HTML, آموزش HTML, مرجع HTML, HTML symbols, copyright degree arrow, HTML entity symbols"
order: 34
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# نمادها در HTML

نمادها در HTML درباره افزودن symbolهای copyright، currency، math، arrow و موارد دیگر با entity است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با نمادها در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `&copy;`: نماد copyright را چاپ می‌کند.
- `&deg;`: نماد درجه را چاپ می‌کند.
- `&rarr;`: فلش راست را چاپ می‌کند.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="symbols" aria-labelledby="symbols-title">
  <h2 id="symbols-title">HTML Symbols</h2>
  <p>adding copyright, currency, math, arrow, and other symbols with entities.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Symbols quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&amp;copy;</code></td><td>prints the copyright symbol</td></tr>
    <tr><td><code>&amp;deg;</code></td><td>prints the degree symbol</td></tr>
    <tr><td><code>&amp;rarr;</code></td><td>prints a right arrow</td></tr>
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
    <title>HTML Symbols practice</title>
  </head>
  <body>
    <section class="symbols" aria-labelledby="symbols-title">
      <h2 id="symbols-title">HTML Symbols</h2>
      <p>adding copyright, currency, math, arrow, and other symbols with entities.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `&copy;` | نماد copyright را چاپ می‌کند | در نمادها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `&deg;` | نماد درجه را چاپ می‌کند | در نمادها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `&rarr;` | فلش راست را چاپ می‌کند | در نمادها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از نمادها در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `&copy;` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `symbols.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `&copy;` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **ایموجی‌ها در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
