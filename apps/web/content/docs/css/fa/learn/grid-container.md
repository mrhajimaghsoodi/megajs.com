---
title: "Grid container در CSS"
description: "این صفحه تعریف row، column، gap، flow و areaهای named روی parent grid را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Grid container در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Grid container در CSS (grid container): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه."
keywords: "CSS, Grid container در CSS, آموزش CSS, مرجع CSS, CSS Grid Container, Grid Container tutorial, grid container"
order: 75
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Grid container در CSS

Grid container در CSS درباره تعریف row، column، gap، flow و areaهای named روی parent grid است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Grid container در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `display: grid`: یک grid formatting context می‌سازد.
- `grid-template-columns`: trackهای column را تعریف می‌کند.
- `grid-template-areas`: regionها را برای placement نام‌گذاری می‌کند.
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
    <title>CSS Grid Container practice</title>
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
      <section>CSS Grid Container</section>
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
    <title>CSS Grid Container practice</title>
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
      <caption>CSS Grid Container quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>display: grid</code></td><td>creates a grid formatting context</td></tr>
        <tr><td><code>grid-template-columns</code></td><td>defines column tracks</td></tr>
        <tr><td><code>grid-template-areas</code></td><td>names regions for placement</td></tr>
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
    <title>CSS Grid Container practice</title>
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
      <h1>CSS Grid Container checklist</h1>
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
| `display: grid` | یک grid formatting context می‌سازد | در Grid container در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `grid-template-columns` | trackهای column را تعریف می‌کند | در Grid container در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `grid-template-areas` | regionها را برای placement نام‌گذاری می‌کند | در Grid container در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Grid container در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `display: grid` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `grid-container.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `display: grid` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Grid itemها در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
