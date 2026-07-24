---
title: "Z-index در CSS"
description: "این صفحه مدیریت ترتیب stacking و stacking contextها برای interfaceهای لایه‌ای را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Z-index در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Z-index در CSS (z index): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Z-index در CSS, آموزش CSS, مرجع CSS, CSS Z-index, Z-index tutorial, z index"
order: 27
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Z-index در CSS

Z-index در CSS درباره مدیریت ترتیب stacking و stacking contextها برای interfaceهای لایه‌ای است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Z-index در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `z-index`: boxهای positioned را در stacking context مرتب می‌کند.
- `stacking context`: مقایسه z-index را isolate می‌کند.
- `isolation: isolate`: stacking context عمدی می‌سازد.
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
    <title>CSS Z-index practice</title>
    <style>
      .stage {
        position: relative;
        min-height: 10rem;
        border: 1px dashed #94a3b8;
      }
      button {
        position: absolute;
        inset-block-start: 2rem;
        inset-inline-start: 2rem;
        z-index: 2;
      }
    </style>
  </head>
  <body>
    <div class="stage">
      <button type="button">CSS Z-index</button>
    </div>
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
    <title>CSS Z-index practice</title>
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
      <caption>CSS Z-index quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>z-index</code></td><td>orders positioned boxes in a stacking context</td></tr>
        <tr><td><code>stacking context</code></td><td>isolates z-index comparisons</td></tr>
        <tr><td><code>isolation: isolate</code></td><td>creates a deliberate stacking context</td></tr>
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
    <title>CSS Z-index practice</title>
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
      <h1>CSS Z-index checklist</h1>
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
| `z-index` | boxهای positioned را در stacking context مرتب می‌کند | در Z-index در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `stacking context` | مقایسه z-index را isolate می‌کند | در Z-index در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `isolation: isolate` | stacking context عمدی می‌سازد | در Z-index در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Z-index در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `z-index` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `z-index.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `z-index` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Overflow در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
