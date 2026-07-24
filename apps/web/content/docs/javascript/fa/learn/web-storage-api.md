---
title: "Web Storage API"
description: "این صفحه پایدار کردن preference و draft سبک با مرزهای serialization روشن را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Web Storage API در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Web Storage API (web storage api): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, Web Storage API, آموزش JavaScript, مرجع JavaScript, JavaScript Web Storage API, Web Storage API tutorial, web storage api"
order: 94
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Web Storage API

Web Storage API درباره پایدار کردن preference و draft سبک با مرزهای serialization روشن است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Web Storage API را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `Web API`: قابلیتی از مرورگر که از JavaScript استفاده می‌شود.
- `DOM`: document object model که JavaScript update می‌کند.
- `event loop`: کار user، network، timer و rendering را schedule می‌کند.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<form id="web-storage-api-form">
  <label>Task <input name="task" value="Practice JavaScript"></label>
  <button type="submit">Save</button>
</form>
<output id="web-storage-api-out"></output>
<script>
  const form = document.querySelector('#web-storage-api-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = new FormData(form).get('task');
    localStorage.setItem('web-storage-api-task', task);
    document.querySelector('#web-storage-api-out').value = `Saved: ${task}`;
  });
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>Web Storage API quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>Web API</code></td><td>browser-provided capability used from JavaScript</td></tr>
    <tr><td><code>DOM</code></td><td>the document object model JavaScript updates</td></tr>
    <tr><td><code>event loop</code></td><td>schedules user, network, timer, and rendering work</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('web-storage-api terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Storage API practice</title>
  </head>
  <body>
    <form id="web-storage-api-form">
      <label>Task <input name="task" value="Practice JavaScript"></label>
      <button type="submit">Save</button>
    </form>
    <output id="web-storage-api-out"></output>
    <script>
      const form = document.querySelector('#web-storage-api-form');
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const task = new FormData(form).get('task');
        localStorage.setItem('web-storage-api-task', task);
        document.querySelector('#web-storage-api-out').value = `Saved: ${task}`;
      });
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `Web API` | قابلیتی از مرورگر که از JavaScript استفاده می‌شود | در Web Storage API آن را با runtime واقعی، DOM و error handling تست کنید. |
| `DOM` | document object model که JavaScript update می‌کند | در Web Storage API آن را با runtime واقعی، DOM و error handling تست کنید. |
| `event loop` | کار user، network، timer و rendering را schedule می‌کند | در Web Storage API آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Web Storage API بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `Web API` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `web-storage-api.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `Web API` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Web Workerها** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
