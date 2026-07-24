---
title: "تیترهای HTML"
description: "این صفحه ساخت outline قابل اسکن با h1 تا h6 بدون پرش معنایی را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش تیترهای HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش تیترهای HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, تیترهای HTML, آموزش HTML, مرجع HTML, HTML headings, h1 h2 h3, SEO heading structure"
order: 7
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# تیترهای HTML

تیترهای HTML درباره ساخت outline قابل اسکن با h1 تا h6 بدون پرش معنایی است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با تیترهای HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `<h1>`: یک heading اصلی برای صفحه.
- `<h2>`: بخش‌های اصلی زیر h1.
- `<h3>-<h6>`: زیربخش‌های عمیق‌تر با ترتیب درست.
- برای این موضوع، معنای واضح برای کاربر، screen reader و search engine معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<article>
  <h1>HTML course</h1>
  <h2>HTML Headings</h2>
  <p>building a scannable outline with h1 through h6 without skipping meaning.</p>
</article>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Headings quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;h1&gt;</code></td><td>one main page heading</td></tr>
    <tr><td><code>&lt;h2&gt;</code></td><td>major sections under the h1</td></tr>
    <tr><td><code>&lt;h3&gt;-&lt;h6&gt;</code></td><td>deeper subsections in order</td></tr>
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
    <title>HTML Headings practice</title>
  </head>
  <body>
    <article>
      <h1>HTML course</h1>
      <h2>HTML Headings</h2>
      <p>building a scannable outline with h1 through h6 without skipping meaning.</p>
    </article>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<h1>` | یک heading اصلی برای صفحه | در تیترهای HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<h2>` | بخش‌های اصلی زیر h1 | در تیترهای HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<h3>-<h6>` | زیربخش‌های عمیق‌تر با ترتیب درست | در تیترهای HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از تیترهای HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `<h1>` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `headings.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `<h1>` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **پاراگراف‌های HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
