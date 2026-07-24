---
title: "عنصر div در HTML"
description: "این صفحه استفاده از container عمومی فقط وقتی element معنایی مناسب نیست را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش عنصر div در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش عنصر div در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, عنصر div در HTML, آموزش HTML, مرجع HTML, HTML div, div element, semantic HTML div"
order: 39
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# عنصر div در HTML

عنصر div در HTML درباره استفاده از container عمومی فقط وقتی element معنایی مناسب نیست است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با عنصر div در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `<div>`: محتوا را بدون معنای built-in گروه می‌کند.
- `class on div`: wrapper عمومی را targetable می‌کند.
- `semantic alternative`: قبل از div باید جایگزین معنایی بررسی شود.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="div" aria-labelledby="div-title">
  <h2 id="div-title">HTML div Element</h2>
  <p>using generic containers only when no semantic element fits the content.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML div Element quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;div&gt;</code></td><td>groups content with no built-in meaning</td></tr>
    <tr><td><code>class on div</code></td><td>makes generic wrappers targetable</td></tr>
    <tr><td><code>semantic alternative</code></td><td>should be checked before choosing div</td></tr>
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
    <title>HTML div Element practice</title>
  </head>
  <body>
    <section class="div" aria-labelledby="div-title">
      <h2 id="div-title">HTML div Element</h2>
      <p>using generic containers only when no semantic element fits the content.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<div>` | محتوا را بدون معنای built-in گروه می‌کند | در عنصر div در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `class on div` | wrapper عمومی را targetable می‌کند | در عنصر div در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `semantic alternative` | قبل از div باید جایگزین معنایی بررسی شود | در عنصر div در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از عنصر div در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `<div>` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `div.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `<div>` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **فرم‌های HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
