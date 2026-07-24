---
title: "Web APIها در HTML"
description: "این صفحه وصل کردن markup به قابلیت‌های مرورگر با APIهای JavaScript را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "آموزش Web APIها در HTML در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Web APIها در HTML با مثال‌های HTML، جدول syntax، اشتباه‌های رایج و گام بعدی؛ مناسب تمرین مسیر W3Schools و ساخت صفحه accessible. برای پروژه‌های واقعی وب."
keywords: "HTML, Web APIها در HTML, آموزش HTML, مرجع HTML, HTML Web APIs, browser API, DOM API"
order: 55
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# Web APIها در HTML

Web APIها در HTML درباره وصل کردن markup به قابلیت‌های مرورگر با APIهای JavaScript است. این درس بازنویسی آموزشی و مستقل از موضوعات W3Schools است و مثال‌ها را طوری می‌چیند که بتوانید همان لحظه در live editor تغییرشان دهید.

وقتی با Web APIها در HTML کار می‌کنید، فقط خروجی visual را نبینید؛ DOM، accessibility tree، نام attributeها و اثر SEO را هم بررسی کنید. هدف این صفحه این است که syntax را با context واقعی یاد بگیرید.

## ایده اصلی

- `navigator`: قابلیت‌های مرورگر را expose می‌کند.
- `document`: به script اجازه query کردن DOM می‌دهد.
- `Promise`: نتیجه async API را نمایش می‌دهد.
- برای این موضوع، هماهنگی syntax با معنی واقعی محتوا معیار اصلی کیفیت markup است.

## مثال‌های HTML

سه مثال زیر از ساده به کامل حرکت می‌کنند. در هر مثال یک مقدار، متن یا attribute را تغییر دهید و نتیجه را در مرورگر ببینید.

### مثال 1: الگوی متمرکز

```html
<button id="web-apis-button" type="button">Run example</button>
<script defer>
  document.querySelector('#web-apis-button').addEventListener('click', () => {
    document.body.dataset.example = 'web-apis';
  });
</script>
```

### مثال 2: گزینه‌ها در context

```html
<table>
  <caption>HTML Web APIs quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>navigator</code></td><td>exposes browser capabilities</td></tr>
    <tr><td><code>document</code></td><td>lets scripts query the DOM</td></tr>
    <tr><td><code>Promise</code></td><td>represents async API results</td></tr>
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
    <title>HTML Web APIs practice</title>
  </head>
  <body>
    <button id="web-apis-button" type="button">Run example</button>
    <script defer>
      document.querySelector('#web-apis-button').addEventListener('click', () => {
        document.body.dataset.example = 'web-apis';
      });
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `navigator` | قابلیت‌های مرورگر را expose می‌کند | در Web APIها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `document` | به script اجازه query کردن DOM می‌دهد | در Web APIها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |
| `Promise` | نتیجه async API را نمایش می‌دهد | در Web APIها در HTML آن را با متن و هدف واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- استفاده از Web APIها در HTML فقط برای ظاهر، بدون اینکه نقش محتوایی یا accessibility روشن باشد.
- کپی کردن مثال و تغییر ندادن id، path، label، alt یا متن متناسب با پروژه واقعی.
- فراموش کردن تست `navigator` در مرورگر، keyboard و DevTools بعد از اینکه صفحه ظاهراً کار کرد.

## تمرین کوتاه

یک فایل `web-apis.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک نمونه از `navigator` را با محتوای پروژه خودتان جایگزین کنید. بعد با keyboard و DevTools نتیجه را بررسی کنید.

## گام بعدی

بعد از این صفحه، **API موقعیت جغرافیایی در HTML** را بخوانید تا همین مفهوم در مسیر آموزشی کامل‌تر شود.
