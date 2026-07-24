---
title: "معناشناسی HTML"
description: "این صفحه انتخاب elementهایی که نقش محتوا را توصیف می‌کنند نه فقط ظاهر آن را را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش معناشناسی HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش معناشناسی HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, معناشناسی HTML, آموزش HTML, مرجع HTML, semantic HTML, article section aside, HTML accessibility SEO"
order: 31
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# معناشناسی HTML

معناشناسی HTML درباره انتخاب elementهایی که نقش محتوا را توصیف می‌کنند نه فقط ظاهر آن را است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با معناشناسی HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `<article>`: محتوای مستقل و قابل استفاده مجدد است.
- `<section>`: بخشی موضوعی با heading را گروه می‌کند.
- `<aside>`: محتوای مرتبط اما فرعی را نگه می‌دارد.
- برای این موضوع، معنای واضح برای کاربر، screen reader و search engine معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="semantics" aria-labelledby="semantics-title">
  <h2 id="semantics-title">HTML Semantics</h2>
  <p>choosing elements that describe the role of content instead of only its appearance.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Semantics quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;article&gt;</code></td><td>stands for independent reusable content</td></tr>
    <tr><td><code>&lt;section&gt;</code></td><td>groups a themed part with a heading</td></tr>
    <tr><td><code>&lt;aside&gt;</code></td><td>contains related but secondary material</td></tr>
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
    <title>HTML Semantics practice</title>
  </head>
  <body>
    <section class="semantics" aria-labelledby="semantics-title">
      <h2 id="semantics-title">HTML Semantics</h2>
      <p>choosing elements that describe the role of content instead of only its appearance.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<article>` | محتوای مستقل و قابل استفاده مجدد است | در معناشناسی HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<section>` | بخشی موضوعی با heading را گروه می‌کند | در معناشناسی HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `<aside>` | محتوای مرتبط اما فرعی را نگه می‌دارد | در معناشناسی HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از معناشناسی HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `<article>` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `semantics.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `<article>` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **راهنمای سبک HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
