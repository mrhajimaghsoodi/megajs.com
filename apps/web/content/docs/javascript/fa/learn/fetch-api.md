---
title: "Fetch API"
description: "این صفحه درخواست data با fetch، Response object، JSON، error و loading state را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Fetch API در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Fetch API (fetch api): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime همراه تمرین کاربردی."
keywords: "JavaScript, Fetch API, آموزش JavaScript, مرجع JavaScript, JavaScript Fetch API, Fetch API tutorial, fetch api"
order: 92
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Fetch API

Fetch API درباره درخواست data با fetch، Response object، JSON، error و loading state است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Fetch API را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `fetch()`: درخواست HTTP را شروع می‌کند.
- `Response`: status، header و body را می‌پوشاند.
- `response.json()`: JSON را از body پاسخ parse می‌کند.
- برای این موضوع، loading state روشن، error handling قابل اعتماد و ترتیب microtask قابل فهم نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<button id="fetch-api-fetch" type="button">Mock fetch</button>
<pre id="fetch-api-out"></pre>
<script>
  async function loadLesson() {
    const response = await Promise.resolve({
      ok: true,
      async json() {
        return { title: 'Fetch API', source: 'mock response' };
      },
    });
    return response.json();
  }
  document.querySelector('#fetch-api-fetch').addEventListener('click', async () => {
    const data = await loadLesson();
    document.querySelector('#fetch-api-out').textContent = JSON.stringify(data, null, 2);
  });
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>Fetch API quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>fetch()</code></td><td>starts an HTTP request</td></tr>
    <tr><td><code>Response</code></td><td>wraps status, headers, and body</td></tr>
    <tr><td><code>response.json()</code></td><td>parses JSON from the response body</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('fetch-api terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch API practice</title>
  </head>
  <body>
    <button id="fetch-api-fetch" type="button">Mock fetch</button>
    <pre id="fetch-api-out"></pre>
    <script>
      async function loadLesson() {
        const response = await Promise.resolve({
          ok: true,
          async json() {
            return { title: 'Fetch API', source: 'mock response' };
          },
        });
        return response.json();
      }
      document.querySelector('#fetch-api-fetch').addEventListener('click', async () => {
        const data = await loadLesson();
        document.querySelector('#fetch-api-out').textContent = JSON.stringify(data, null, 2);
      });
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `fetch()` | درخواست HTTP را شروع می‌کند | در Fetch API آن را با runtime واقعی، DOM و error handling تست کنید. |
| `Response` | status، header و body را می‌پوشاند | در Fetch API آن را با runtime واقعی، DOM و error handling تست کنید. |
| `response.json()` | JSON را از body پاسخ parse می‌کند | در Fetch API آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Fetch API بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `fetch()` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `fetch-api.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `fetch()` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Geolocation API** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
