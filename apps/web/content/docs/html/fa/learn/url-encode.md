---
title: "کدگذاری URL در HTML"
description: "این صفحه کدگذاری کاراکترهای ناامن URL برای link، query و مقدار form قابل اعتماد را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش کدگذاری URL در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش کدگذاری URL در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, کدگذاری URL در HTML, آموزش HTML, مرجع HTML, HTML URL encoding, percent encoding, query string HTML"
order: 37
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# کدگذاری URL در HTML

کدگذاری URL در HTML درباره کدگذاری کاراکترهای ناامن URL برای link، query و مقدار form قابل اعتماد است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با کدگذاری URL در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `%20`: فاصله را در URL نشان می‌دهد.
- `query string`: جفت key-value را بعد از ? می‌فرستد.
- `encodeURIComponent()`: مقدار dynamic در JavaScript را امن encode می‌کند.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="url-encode" aria-labelledby="url-encode-title">
  <h2 id="url-encode-title">HTML URL Encoding</h2>
  <p>encoding unsafe URL characters for reliable links, queries, and form values.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML URL Encoding quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>%20</code></td><td>represents a space in a URL</td></tr>
    <tr><td><code>query string</code></td><td>passes key-value pairs after ?</td></tr>
    <tr><td><code>encodeURIComponent()</code></td><td>encodes dynamic JavaScript values safely</td></tr>
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
    <title>HTML URL Encoding practice</title>
  </head>
  <body>
    <section class="url-encode" aria-labelledby="url-encode-title">
      <h2 id="url-encode-title">HTML URL Encoding</h2>
      <p>encoding unsafe URL characters for reliable links, queries, and form values.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `%20` | فاصله را در URL نشان می‌دهد | در کدگذاری URL در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `query string` | جفت key-value را بعد از ? می‌فرستد | در کدگذاری URL در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `encodeURIComponent()` | مقدار dynamic در JavaScript را امن encode می‌کند | در کدگذاری URL در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از کدگذاری URL در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `%20` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `url-encode.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `%20` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **HTML و XHTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
