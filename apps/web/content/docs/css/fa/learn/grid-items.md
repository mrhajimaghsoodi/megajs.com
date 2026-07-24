---
title: "Grid itemها در CSS"
description: "این صفحه قرار دادن childها روی line، span، area و موقعیت alignment در grid را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Grid itemها در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Grid itemها در CSS (grid items): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Grid itemها در CSS, آموزش CSS, مرجع CSS, CSS Grid Items, Grid Items tutorial, grid items"
order: 76
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Grid itemها در CSS

Grid itemها در CSS درباره قرار دادن childها روی line، span، area و موقعیت alignment در grid است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Grid itemها در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `grid-column`: item را روی columnها قرار می‌دهد.
- `grid-row`: item را روی rowها قرار می‌دهد.
- `place-self`: یک grid item را align می‌کند.
- برای این موضوع، trackهای قابل فهم، gap پایدار و placement قابل مشاهده در grid overlay معیار اصلی کیفیت CSS است.

## مثال‌های HTML و CSS

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value را تغییر دهید و computed style را مقایسه کنید.

### مثال 1: الگوی CSS متمرکز

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Grid Items practice</title>
    <style>
      .layout {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
        gap: 1rem;
      }
      .layout > * {
        padding: 1rem;
        border-radius: .75rem;
        background: #f1f5f9;
      }
    </style>
  </head>
  <body>
    <main class="layout">
      <section>CSS Grid Items</section>
      <section>Grid adapts tracks.</section>
      <section>Inspect grid overlay.</section>
    </main>
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
    <title>CSS Grid Items practice</title>
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
      <caption>CSS Grid Items quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>grid-column</code></td><td>places an item across columns</td></tr>
        <tr><td><code>grid-row</code></td><td>places an item across rows</td></tr>
        <tr><td><code>place-self</code></td><td>aligns a single grid item</td></tr>
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
    <title>CSS Grid Items practice</title>
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
      <h1>CSS Grid Items checklist</h1>
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
| `grid-column` | item را روی columnها قرار می‌دهد | در Grid itemها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `grid-row` | item را روی rowها قرار می‌دهد | در Grid itemها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `place-self` | یک grid item را align می‌کند | در Grid itemها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Grid itemها در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `grid-column` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `grid-items.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `grid-column` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Grid layout در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
