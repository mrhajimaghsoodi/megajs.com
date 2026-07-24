---
title: "Height و Width در CSS"
description: "این صفحه تعیین dimensionهای ثابت، fluid، minimum و maximum برای componentهای پایدار را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Height و Width در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Height و Width در CSS (height width): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Height و Width در CSS, آموزش CSS, مرجع CSS, CSS Height and Width, Height and Width tutorial, height width"
order: 13
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Height و Width در CSS

Height و Width در CSS درباره تعیین dimensionهای ثابت، fluid، minimum و maximum برای componentهای پایدار است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Height و Width در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `width`: اندازه inline ترجیحی را تعیین می‌کند.
- `max-width`: رشد را در صفحه‌های عریض محدود می‌کند.
- `min-height`: فضای block مفید رزرو می‌کند.
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
    <title>CSS Height and Width practice</title>
    <style>
      .demo {
        padding: 1rem;
        border-radius: .75rem;
        background: #f8fafc;
      }
      .demo code {
        color: #2563eb;
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <section class="demo">
      <h2>CSS Height and Width</h2>
      <p>Try changing <code>width</code> and inspect the computed style.</p>
    </section>
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
    <title>CSS Height and Width practice</title>
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
      <caption>CSS Height and Width quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>width</code></td><td>sets the preferred inline size</td></tr>
        <tr><td><code>max-width</code></td><td>caps growth on wide screens</td></tr>
        <tr><td><code>min-height</code></td><td>reserves useful block space</td></tr>
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
    <title>CSS Height and Width practice</title>
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
      <h1>CSS Height and Width checklist</h1>
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
| `width` | اندازه inline ترجیحی را تعیین می‌کند | در Height و Width در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `max-width` | رشد را در صفحه‌های عریض محدود می‌کند | در Height و Width در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `min-height` | فضای block مفید رزرو می‌کند | در Height و Width در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Height و Width در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `width` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `height-width.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `width` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Box Model در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
