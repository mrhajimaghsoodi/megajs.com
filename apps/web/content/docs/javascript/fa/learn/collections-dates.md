---
title: "آرایه، مجموعه و تاریخ"
description: "این صفحه نگه‌داری data مرتب، تبدیل collection، sort، iteration و کار با time را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش آرایه، مجموعه و تاریخ در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش آرایه، مجموعه و تاریخ (collections dates): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, آرایه، مجموعه و تاریخ, آموزش JavaScript, مرجع JavaScript, JavaScript collections-dates, Arrays, Collections, and Dates tutorial"
order: 31
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# آرایه، مجموعه و تاریخ

آرایه، مجموعه و تاریخ درباره نگه‌داری data مرتب، تبدیل collection، sort، iteration و کار با time است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی آرایه، مجموعه و تاریخ را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `value`: یک value در JavaScript برای آرایه، مجموعه و تاریخ.
- `expression`: codeی که value تولید می‌کند.
- `runtime`: مرورگر یا engine اجراکننده code.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<time id="collections-dates-time"></time>
<script>
  const formatter = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' });
  const now = new Date('2026-07-24T12:00:00Z');
  document.querySelector('#collections-dates-time').textContent = formatter.format(now);
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>Arrays, Collections, and Dates quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>value</code></td><td>a JavaScript value used in Arrays, Collections, and Dates</td></tr>
    <tr><td><code>expression</code></td><td>code that produces a value</td></tr>
    <tr><td><code>runtime</code></td><td>the browser or engine executing code</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('collections-dates terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arrays, Collections, and Dates practice</title>
  </head>
  <body>
    <time id="collections-dates-time"></time>
    <script>
      const formatter = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' });
      const now = new Date('2026-07-24T12:00:00Z');
      document.querySelector('#collections-dates-time').textContent = formatter.format(now);
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `value` | یک value در JavaScript برای آرایه، مجموعه و تاریخ | در آرایه، مجموعه و تاریخ آن را با runtime واقعی، DOM و error handling تست کنید. |
| `expression` | codeی که value تولید می‌کند | در آرایه، مجموعه و تاریخ آن را با runtime واقعی، DOM و error handling تست کنید. |
| `runtime` | مرورگر یا engine اجراکننده code | در آرایه، مجموعه و تاریخ آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن آرایه، مجموعه و تاریخ بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `value` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `collections-dates.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `value` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Arrayها در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
