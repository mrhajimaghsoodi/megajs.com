---
title: "Methodهای set در Date"
description: "این صفحه تغییر بخش‌های date همراه شناخت overflow، mutation و رفتار local time را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Methodهای set در Date در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Methodهای set در Date (date set): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Methodهای set در Date, آموزش JavaScript, مرجع JavaScript, JavaScript Date Set Methods, Date Set Methods tutorial, date set"
order: 39
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Methodهای set در Date

Methodهای set در Date درباره تغییر بخش‌های date همراه شناخت overflow، mutation و رفتار local time است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Methodهای set در Date را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `Date`: timestamp را با accessorهای local و UTC نمایش می‌دهد.
- `Intl`: output وابسته به locale را format می‌کند.
- `timestamp`: millisecond از Unix epoch را می‌شمارد.
- برای این موضوع، data flow خوانا، mutation کنترل‌شده و خروجی قابل تست نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<time id="date-set-time"></time>
<script>
  const formatter = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' });
  const now = new Date('2026-07-24T12:00:00Z');
  document.querySelector('#date-set-time').textContent = formatter.format(now);
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>Date Set Methods quick reference</caption>
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
  console.log('date-set terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Date Set Methods practice</title>
  </head>
  <body>
    <time id="date-set-time"></time>
    <script>
      const formatter = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' });
      const now = new Date('2026-07-24T12:00:00Z');
      document.querySelector('#date-set-time').textContent = formatter.format(now);
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `Date` | timestamp را با accessorهای local و UTC نمایش می‌دهد | در Methodهای set در Date آن را با runtime واقعی، DOM و error handling تست کنید. |
| `Intl` | output وابسته به locale را format می‌کند | در Methodهای set در Date آن را با runtime واقعی، DOM و error handling تست کنید. |
| `timestamp` | millisecond از Unix epoch را می‌شمارد | در Methodهای set در Date آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Methodهای set در Date بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `Date` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `date-set.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `Date` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Math در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
