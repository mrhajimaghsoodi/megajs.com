---
title: "Grid layout در CSS"
description: "این صفحه ترکیب repeat، minmax، auto-fit و area برای layoutهای production را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Grid layout در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Grid layout در CSS (grid layout): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Grid layout در CSS, آموزش CSS, مرجع CSS, CSS Grid Layout, Grid Layout tutorial, grid layout"
order: 77
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Grid layout در CSS

Grid layout در CSS درباره ترکیب repeat، minmax، auto-fit و area برای layoutهای production است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Grid layout در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `repeat(auto-fit, minmax())`: trackهای تکراری responsive می‌سازد.
- `minmax()`: boundهای flexible برای track تعیین می‌کند.
- `subgrid`: به grid تو در تو اجازه share کردن trackهای parent می‌دهد.
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
    <title>CSS Grid Layout practice</title>
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
      <section>CSS Grid Layout</section>
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
    <title>CSS Grid Layout practice</title>
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
      <caption>CSS Grid Layout quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>repeat(auto-fit, minmax())</code></td><td>creates responsive repeated tracks</td></tr>
        <tr><td><code>minmax()</code></td><td>sets flexible track bounds</td></tr>
        <tr><td><code>subgrid</code></td><td>lets nested grids share parent tracks</td></tr>
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
    <title>CSS Grid Layout practice</title>
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
      <h1>CSS Grid Layout checklist</h1>
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
| `repeat(auto-fit, minmax())` | trackهای تکراری responsive می‌سازد | در Grid layout در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `minmax()` | boundهای flexible برای track تعیین می‌کند | در Grid layout در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `subgrid` | به grid تو در تو اجازه share کردن trackهای parent می‌دهد | در Grid layout در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Grid layout در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `repeat(auto-fit, minmax())` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `grid-layout.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `repeat(auto-fit, minmax())` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **CSS واکنش‌گرا / RWD** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
