---
title: "APIهای HTML"
description: "این صفحه استفاده از APIهای مرورگر که معمولاً همراه HTML و eventهای DOM آموزش داده می‌شوند را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش APIهای HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش APIهای HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, APIهای HTML, آموزش HTML, مرجع HTML, HTML apis, HTML APIs tutorial"
order: 54
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# APIهای HTML

APIهای HTML درباره استفاده از APIهای مرورگر که معمولاً همراه HTML و eventهای DOM آموزش داده می‌شوند است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با APIهای HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `DOM`: سند parse شده که JavaScript بررسی می‌کند.
- `event listener`: به action کاربر یا مرورگر واکنش می‌دهد.
- `permission`: قابلیت‌های حساس مرورگر را محافظت می‌کند.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<section class="apis" aria-labelledby="apis-title">
  <h2 id="apis-title">HTML APIs</h2>
  <p>using browser APIs that are commonly taught with HTML examples and DOM events.</p>
</section>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML APIs quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>DOM</code></td><td>the parsed document JavaScript can inspect</td></tr>
    <tr><td><code>event listener</code></td><td>reacts to user or browser actions</td></tr>
    <tr><td><code>permission</code></td><td>protects sensitive browser capabilities</td></tr>
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
    <title>HTML APIs practice</title>
  </head>
  <body>
    <section class="apis" aria-labelledby="apis-title">
      <h2 id="apis-title">HTML APIs</h2>
      <p>using browser APIs that are commonly taught with HTML examples and DOM events.</p>
    </section>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `DOM` | سند parse شده که JavaScript بررسی می‌کند | در APIهای HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `event listener` | به action کاربر یا مرورگر واکنش می‌دهد | در APIهای HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `permission` | قابلیت‌های حساس مرورگر را محافظت می‌کند | در APIهای HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از APIهای HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `DOM` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `apis.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `DOM` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Web APIها در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
