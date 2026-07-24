---
title: "شناسه id در HTML"
description: "این صفحه ساخت یک target یکتا برای label، fragment، CSS و script را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش شناسه id در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش شناسه id در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, شناسه id در HTML, آموزش HTML, مرجع HTML, HTML id, id attribute, fragment links"
order: 23
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# شناسه id در HTML

شناسه id در HTML درباره ساخت یک target یکتا برای label، fragment، CSS و script است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با شناسه id در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `id`: در سند باید یکتا باشد.
- `for`: label را به id یک input وصل می‌کند.
- `#fragment`: مستقیم به id یک element لینک می‌دهد.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="id" aria-labelledby="id-title">
  <h2 id="id-title">HTML id Attribute</h2>
  <p>creating one unique target for labels, fragments, CSS, and scripts.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML id Attribute quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>id</code></td><td>must be unique in the document</td></tr>
    <tr><td><code>for</code></td><td>connects a label to an input id</td></tr>
    <tr><td><code>#fragment</code></td><td>links directly to an element id</td></tr>
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
    <title>HTML id Attribute practice</title>
  </head>
  <body>
    <section class="id" aria-labelledby="id-title">
      <h2 id="id-title">HTML id Attribute</h2>
      <p>creating one unique target for labels, fragments, CSS, and scripts.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `id` | در سند باید یکتا باشد | در شناسه id در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `for` | label را به id یک input وصل می‌کند | در شناسه id در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `#fragment` | مستقیم به id یک element لینک می‌دهد | در شناسه id در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از شناسه id در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `id` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `id.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `id` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **آی‌فریم‌ها در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
