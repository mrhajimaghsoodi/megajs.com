---
title: "نقل‌قول‌ها در HTML"
description: "این صفحه نمایش quote، abbreviation، address و citation با elementهای دقیق را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش نقل‌قول‌ها در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش نقل‌قول‌ها در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, نقل‌قول‌ها در HTML, آموزش HTML, مرجع HTML, HTML quotations, blockquote q abbr cite, HTML citation"
order: 11
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# نقل‌قول‌ها در HTML

نقل‌قول‌ها در HTML درباره نمایش quote، abbreviation، address و citation با elementهای دقیق است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با نقل‌قول‌ها در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `<blockquote>`: نقل‌قول طولانی‌تر را می‌پوشاند.
- `<q>`: نقل‌قول کوتاه inline را مشخص می‌کند.
- `<abbr title>`: abbreviation را برای کاربر باز می‌کند.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="quotations" aria-labelledby="quotations-title">
  <h2 id="quotations-title">HTML Quotations</h2>
  <p>representing quotes, abbreviations, addresses, and citations with precise elements.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Quotations quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;blockquote&gt;</code></td><td>wraps a longer quoted passage</td></tr>
    <tr><td><code>&lt;q&gt;</code></td><td>marks a short inline quote</td></tr>
    <tr><td><code>&lt;abbr title&gt;</code></td><td>expands abbreviations for users</td></tr>
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
    <title>HTML Quotations practice</title>
  </head>
  <body>
    <section class="quotations" aria-labelledby="quotations-title">
      <h2 id="quotations-title">HTML Quotations</h2>
      <p>representing quotes, abbreviations, addresses, and citations with precise elements.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<blockquote>` | نقل‌قول طولانی‌تر را می‌پوشاند | در نقل‌قول‌ها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<q>` | نقل‌قول کوتاه inline را مشخص می‌کند | در نقل‌قول‌ها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<abbr title>` | abbreviation را برای کاربر باز می‌کند | در نقل‌قول‌ها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از نقل‌قول‌ها در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `<blockquote>` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `quotations.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `<blockquote>` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **کامنت‌های HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
