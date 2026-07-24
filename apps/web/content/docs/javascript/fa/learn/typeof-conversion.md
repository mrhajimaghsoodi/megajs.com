---
title: "typeof و Type Conversion"
description: "این صفحه بررسی value و تبدیل explicit با Number، String، Boolean و JSON را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش typeof و Type Conversion در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش typeof و Type Conversion (typeof conversion): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM."
keywords: "JavaScript, typeof و Type Conversion, آموزش JavaScript, مرجع JavaScript, JavaScript typeof and Type Conversion, typeof and Type Conversion tutorial, typeof conversion"
order: 53
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# typeof و Type Conversion

typeof و Type Conversion درباره بررسی value و تبدیل explicit با Number، String، Boolean و JSON است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی typeof و Type Conversion را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `JavaScript`: ویژگی زبان برای typeof و Type Conversion.
- `runtime`: code را اجرا و error را گزارش می‌کند.
- `DevTools Console`: valueها را هنگام یادگیری بررسی می‌کند.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<section>
  <h2>typeof and Type Conversion</h2>
  <p id="typeof-conversion-text">inspecting values and converting explicitly with Number, String, Boolean, and JSON.</p>
  <output id="typeof-conversion-out"></output>
</section>
<script>
  const text = document.querySelector('#typeof-conversion-text').textContent;
  document.querySelector('#typeof-conversion-out').value =
    `JavaScript handled ${text.length} characters for typeof and Type Conversion`;
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>typeof and Type Conversion quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>JavaScript</code></td><td>language feature used in typeof and Type Conversion</td></tr>
    <tr><td><code>runtime</code></td><td>executes code and reports errors</td></tr>
    <tr><td><code>DevTools Console</code></td><td>checks values while learning</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('typeof-conversion terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>typeof and Type Conversion practice</title>
  </head>
  <body>
    <section>
      <h2>typeof and Type Conversion</h2>
      <p id="typeof-conversion-text">inspecting values and converting explicitly with Number, String, Boolean, and JSON.</p>
      <output id="typeof-conversion-out"></output>
    </section>
    <script>
      const text = document.querySelector('#typeof-conversion-text').textContent;
      document.querySelector('#typeof-conversion-out').value =
        `JavaScript handled ${text.length} characters for typeof and Type Conversion`;
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `JavaScript` | ویژگی زبان برای typeof و Type Conversion | در typeof و Type Conversion آن را با runtime واقعی، DOM و error handling تست کنید. |
| `runtime` | code را اجرا و error را گزارش می‌کند | در typeof و Type Conversion آن را با runtime واقعی، DOM و error handling تست کنید. |
| `DevTools Console` | valueها را هنگام یادگیری بررسی می‌کند | در typeof و Type Conversion آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن typeof و Type Conversion بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `JavaScript` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `typeof-conversion.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `JavaScript` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Bitwise در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
