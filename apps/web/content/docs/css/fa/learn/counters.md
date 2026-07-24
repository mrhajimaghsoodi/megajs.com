---
title: "Counterها در CSS"
description: "این صفحه شماره‌گذاری heading، step، card و labelهای generated با counterهای CSS را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Counterها در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Counterها در CSS (counters): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Counterها در CSS, آموزش CSS, مرجع CSS, CSS Counters, Counters tutorial, counters"
order: 43
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Counterها در CSS

Counterها در CSS درباره شماره‌گذاری heading، step، card و labelهای generated با counterهای CSS است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Counterها در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `counter-reset`: counter را می‌سازد یا reset می‌کند.
- `counter-increment`: counter را برای هر element افزایش می‌دهد.
- `counter()`: مقدار فعلی counter را چاپ می‌کند.
- برای این موضوع، هماهنگی selector، declaration، cascade و computed style معیار اصلی کیفیت CSS است.

## مثال‌های HTML و CSS

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value را تغییر دهید و computed style را مقایسه کنید.

### مثال 1: الگوی CSS متمرکز

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Counters practice</title>
    <style>
      .steps {
        counter-reset: step;
        list-style: none;
        padding: 0;
      }
      .steps li {
        counter-increment: step;
        margin-block: .5rem;
      }
      .steps li::before {
        content: counter(step) ". ";
        font-weight: 700;
        color: #2563eb;
      }
    </style>
  </head>
  <body>
    <ol class="steps">
      <li>Write the selector.</li>
      <li>Add declarations.</li>
      <li>Inspect the cascade.</li>
    </ol>
  </body>
</html>
```

### مثال 2: گزینه‌ها در جدول style شده

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Counters practice</title>
    <style>
      table {
        border-collapse: collapse;
        width: min(100%, 42rem);
      }
      caption {
        font-weight: 700;
        margin-block-end: .5rem;
      }
      th,
      td {
        border: 1px solid #cbd5e1;
        padding: .65rem;
        text-align: start;
      }
      code {
        color: #1d4ed8;
      }
    </style>
  </head>
  <body>
    <table>
      <caption>CSS Counters quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>counter-reset</code></td><td>creates or resets a counter</td></tr>
        <tr><td><code>counter-increment</code></td><td>increments a counter per element</td></tr>
        <tr><td><code>counter()</code></td><td>prints the current counter value</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Counters practice</title>
    <style>
      main {
        width: min(100% - 2rem, 52rem);
        margin-inline: auto;
        padding-block: 2rem;
      }
      .checklist {
        display: grid;
        gap: .75rem;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>CSS Counters checklist</h1>
      <ul class="checklist">
        <li>Inspect the winning CSS rule.</li>
        <li>Check the computed style and box model.</li>
        <li>Resize the viewport and test keyboard focus.</li>
      </ul>
    </main>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `counter-reset` | counter را می‌سازد یا reset می‌کند | در Counterها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `counter-increment` | counter را برای هر element افزایش می‌دهد | در Counterها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `counter()` | مقدار فعلی counter را چاپ می‌کند | در Counterها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Counterها در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `counter-reset` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `counters.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `counter-reset` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Layout سایت در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
