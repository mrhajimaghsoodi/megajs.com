---
title: "Formatهای Date"
description: "این صفحه فرمت کردن date برای کاربر همراه جداسازی storage، display و locale را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Formatهای Date در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Formatهای Date (date formats): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Formatهای Date, آموزش JavaScript, مرجع JavaScript, JavaScript Date Formats, Date Formats tutorial, date formats"
order: 37
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Formatهای Date

Formatهای Date درباره فرمت کردن date برای کاربر همراه جداسازی storage، display و locale است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Formatهای Date را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `Date`: timestamp را با accessorهای local و UTC نمایش می‌دهد.
- `Intl`: output وابسته به locale را format می‌کند.
- `timestamp`: millisecond از Unix epoch را می‌شمارد.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<time id="date-formats-time"></time>
<script>
  const formatter = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' });
  const now = new Date('2026-07-24T12:00:00Z');
  document.querySelector('#date-formats-time').textContent = formatter.format(now);
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>Date Formats quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>Date</code></td><td>represents a timestamp with local and UTC accessors</td></tr>
    <tr><td><code>Intl</code></td><td>formats locale-aware output</td></tr>
    <tr><td><code>timestamp</code></td><td>counts milliseconds from the Unix epoch</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('date-formats terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Date Formats practice</title>
  </head>
  <body>
    <time id="date-formats-time"></time>
    <script>
      const formatter = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' });
      const now = new Date('2026-07-24T12:00:00Z');
      document.querySelector('#date-formats-time').textContent = formatter.format(now);
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `Date` | timestamp را با accessorهای local و UTC نمایش می‌دهد | در Formatهای Date آن را با runtime واقعی، DOM و error handling تست کنید. |
| `Intl` | output وابسته به locale را format می‌کند | در Formatهای Date آن را با runtime واقعی، DOM و error handling تست کنید. |
| `timestamp` | millisecond از Unix epoch را می‌شمارد | در Formatهای Date آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Formatهای Date بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `Date` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `date-formats.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `Date` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Methodهای get در Date** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
