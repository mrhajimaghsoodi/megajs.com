---
title: "Moduleها در JavaScript"
description: "این صفحه تقسیم code با import و export همراه روشن نگه داشتن dependency را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Moduleها در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Moduleها در JavaScript (modules): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Moduleها در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Modules, Modules tutorial, modules"
order: 64
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Moduleها در JavaScript

Moduleها در JavaScript درباره تقسیم code با import و export همراه روشن نگه داشتن dependency است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Moduleها در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `import`: bindingهای export شده را وارد module می‌کند.
- `export`: bindingهای module را قابل استفاده می‌کند.
- `module scope`: bindingهای top-level را بیرون از global scope نگه می‌دارد.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<output id="modules-out"></output>
<script type="module">
  const moduleName = 'JavaScript Modules';
  const format = (value) => `Module scope: ${value}`;
  document.querySelector('#modules-out').value = format(moduleName);
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Modules quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>import</code></td><td>brings exported bindings into a module</td></tr>
    <tr><td><code>export</code></td><td>makes module bindings available</td></tr>
    <tr><td><code>module scope</code></td><td>keeps top-level bindings out of global scope</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('modules terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Modules practice</title>
  </head>
  <body>
    <output id="modules-out"></output>
    <script type="module">
      const moduleName = 'JavaScript Modules';
      const format = (value) => `Module scope: ${value}`;
      document.querySelector('#modules-out').value = format(moduleName);
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `import` | bindingهای export شده را وارد module می‌کند | در Moduleها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `export` | bindingهای module را قابل استفاده می‌کند | در Moduleها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `module scope` | bindingهای top-level را بیرون از global scope نگه می‌دارد | در Moduleها در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Moduleها در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `import` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `modules.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `import` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **JSON در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
