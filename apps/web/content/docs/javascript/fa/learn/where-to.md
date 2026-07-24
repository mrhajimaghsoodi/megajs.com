---
title: "کجا JavaScript بنویسیم"
description: "این صفحه انتخاب script داخلی، فایل defer شده، module و محل load امن در مرورگر را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش کجا JavaScript بنویسیم در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش کجا JavaScript بنویسیم (where to): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, کجا JavaScript بنویسیم, آموزش JavaScript, مرجع JavaScript, JavaScript Where To Place JavaScript, Where To Place JavaScript tutorial, where to"
order: 3
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# کجا JavaScript بنویسیم

کجا JavaScript بنویسیم درباره انتخاب script داخلی، فایل defer شده، module و محل load امن در مرورگر است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی کجا JavaScript بنویسیم را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `<script defer>`: فایل را پس از parsing بدون block کردن HTML load می‌کند.
- `type="module"`: module scope و import/export را فعال می‌کند.
- `DOMContentLoaded`: وقتی DOM اولیه آماده شد fire می‌شود.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<section>
  <h2>Where To Place JavaScript</h2>
  <p id="where-to-text">choosing inline scripts, deferred files, modules, and browser-safe loading locations.</p>
  <output id="where-to-out"></output>
</section>
<script>
  const text = document.querySelector('#where-to-text').textContent;
  document.querySelector('#where-to-out').value =
    `JavaScript handled ${text.length} characters for Where To Place JavaScript`;
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>Where To Place JavaScript quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;script defer&gt;</code></td><td>loads a file after parsing without blocking HTML</td></tr>
    <tr><td><code>type=&quot;module&quot;</code></td><td>enables module scope and import/export</td></tr>
    <tr><td><code>DOMContentLoaded</code></td><td>fires when the initial DOM is ready</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('where-to terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Where To Place JavaScript practice</title>
  </head>
  <body>
    <section>
      <h2>Where To Place JavaScript</h2>
      <p id="where-to-text">choosing inline scripts, deferred files, modules, and browser-safe loading locations.</p>
      <output id="where-to-out"></output>
    </section>
    <script>
      const text = document.querySelector('#where-to-text').textContent;
      document.querySelector('#where-to-out').value =
        `JavaScript handled ${text.length} characters for Where To Place JavaScript`;
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `<script defer>` | فایل را پس از parsing بدون block کردن HTML load می‌کند | در کجا JavaScript بنویسیم آن را با runtime واقعی، DOM و error handling تست کنید. |
| `type="module"` | module scope و import/export را فعال می‌کند | در کجا JavaScript بنویسیم آن را با runtime واقعی، DOM و error handling تست کنید. |
| `DOMContentLoaded` | وقتی DOM اولیه آماده شد fire می‌شود | در کجا JavaScript بنویسیم آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن کجا JavaScript بنویسیم بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `<script defer>` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `where-to.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `<script defer>` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Output در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
