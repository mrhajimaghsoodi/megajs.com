---
title: "Methodهای get در Date"
description: "این صفحه خواندن year، month، day، time، valueهای وابسته به timezone و timestamp را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Methodهای get در Date در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Methodهای get در Date (date get): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Methodهای get در Date, آموزش JavaScript, مرجع JavaScript, JavaScript Date Get Methods, Date Get Methods tutorial, date get"
order: 38
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Methodهای get در Date

Methodهای get در Date درباره خواندن year، month، day، time، valueهای وابسته به timezone و timestamp است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Methodهای get در Date را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `Date`: timestamp را با accessorهای local و UTC نمایش می‌دهد.
- `Intl`: output وابسته به locale را format می‌کند.
- `timestamp`: millisecond از Unix epoch را می‌شمارد.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<time id="date-get-time"></time>
<script>
  const formatter = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' });
  const now = new Date('2026-07-24T12:00:00Z');
  document.querySelector('#date-get-time').textContent = formatter.format(now);
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>Date Get Methods quick reference</caption>
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
  console.log('date-get terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Date Get Methods practice</title>
  </head>
  <body>
    <time id="date-get-time"></time>
    <script>
      const formatter = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' });
      const now = new Date('2026-07-24T12:00:00Z');
      document.querySelector('#date-get-time').textContent = formatter.format(now);
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `Date` | timestamp را با accessorهای local و UTC نمایش می‌دهد | در Methodهای get در Date آن را با runtime واقعی، DOM و error handling تست کنید. |
| `Intl` | output وابسته به locale را format می‌کند | در Methodهای get در Date آن را با runtime واقعی، DOM و error handling تست کنید. |
| `timestamp` | millisecond از Unix epoch را می‌شمارد | در Methodهای get در Date آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Methodهای get در Date بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `Date` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `date-get.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `Date` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Methodهای set در Date** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
