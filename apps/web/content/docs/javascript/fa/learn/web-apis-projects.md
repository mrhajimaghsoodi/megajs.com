---
title: "Web API و پروژه‌ها"
description: "این صفحه وصل کردن JavaScript به network، location، storage، worker، form و یک پروژه کوچک را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Web API و پروژه‌ها در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Web API و پروژه‌ها (web apis projects): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Web API و پروژه‌ها, آموزش JavaScript, مرجع JavaScript, JavaScript web-apis-projects, Web APIs and Projects tutorial"
order: 91
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Web API و پروژه‌ها

Web API و پروژه‌ها درباره وصل کردن JavaScript به network، location، storage، worker، form و یک پروژه کوچک است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Web API و پروژه‌ها را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `fetch()`: resource شبکه را request می‌کند.
- `localStorage`: data رشته‌ای کوچک را ذخیره می‌کند.
- `Worker`: code را بیرون از main thread اجرا می‌کند.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<section>
  <h2>Web APIs and Projects</h2>
  <p id="web-apis-projects-text">connecting JavaScript to network, location, storage, workers, forms, and a small project.</p>
  <output id="web-apis-projects-out"></output>
</section>
<script>
  const text = document.querySelector('#web-apis-projects-text').textContent;
  document.querySelector('#web-apis-projects-out').value =
    `JavaScript handled ${text.length} characters for Web APIs and Projects`;
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>Web APIs and Projects quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>fetch()</code></td><td>requests network resources</td></tr>
    <tr><td><code>localStorage</code></td><td>stores small string data</td></tr>
    <tr><td><code>Worker</code></td><td>runs code off the main thread</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('web-apis-projects terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web APIs and Projects practice</title>
  </head>
  <body>
    <section>
      <h2>Web APIs and Projects</h2>
      <p id="web-apis-projects-text">connecting JavaScript to network, location, storage, workers, forms, and a small project.</p>
      <output id="web-apis-projects-out"></output>
    </section>
    <script>
      const text = document.querySelector('#web-apis-projects-text').textContent;
      document.querySelector('#web-apis-projects-out').value =
        `JavaScript handled ${text.length} characters for Web APIs and Projects`;
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `fetch()` | resource شبکه را request می‌کند | در Web API و پروژه‌ها آن را با runtime واقعی، DOM و error handling تست کنید. |
| `localStorage` | data رشته‌ای کوچک را ذخیره می‌کند | در Web API و پروژه‌ها آن را با runtime واقعی، DOM و error handling تست کنید. |
| `Worker` | code را بیرون از main thread اجرا می‌کند | در Web API و پروژه‌ها آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Web API و پروژه‌ها بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `fetch()` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `web-apis-projects.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `fetch()` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Fetch API** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
