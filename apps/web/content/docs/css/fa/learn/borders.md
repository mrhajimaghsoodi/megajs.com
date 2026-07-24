---
title: "Borderها در CSS"
description: "این صفحه رسم لبه‌ها با width، style، color، radius و سمت‌های logical را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Borderها در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Borderها در CSS (borders): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Borderها در CSS, آموزش CSS, مرجع CSS, CSS Borders, Borders tutorial, borders"
order: 10
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Borderها در CSS

Borderها در CSS درباره رسم لبه‌ها با width، style، color، radius و سمت‌های logical است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Borderها در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `border: 1px solid #ddd`: width، style و color برای border تعیین می‌کند.
- `border-radius`: گوشه‌های box را گرد می‌کند.
- `border-inline`: لبه‌های logical در جهت inline را target می‌کند.
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
    <title>CSS Borders practice</title>
    <style>
      .card {
        padding: 1rem;
        border: 2px solid #2563eb;
        border-radius: 1rem;
        outline: 3px solid rgb(37 99 235 / .18);
        outline-offset: .25rem;
      }
    </style>
  </head>
  <body>
    <article class="card">
      <h2>CSS Borders</h2>
      <p>The border box, outline, and radius are visible in DevTools.</p>
    </article>
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
    <title>CSS Borders practice</title>
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
      <caption>CSS Borders quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>border: 1px solid #ddd</code></td><td>sets border width, style, and color</td></tr>
        <tr><td><code>border-radius</code></td><td>rounds the corners of a box</td></tr>
        <tr><td><code>border-inline</code></td><td>targets logical inline edges</td></tr>
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
    <title>CSS Borders practice</title>
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
      <h1>CSS Borders checklist</h1>
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
| `border: 1px solid #ddd` | width، style و color برای border تعیین می‌کند | در Borderها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `border-radius` | گوشه‌های box را گرد می‌کند | در Borderها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `border-inline` | لبه‌های logical در جهت inline را target می‌کند | در Borderها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Borderها در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `border: 1px solid #ddd` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `borders.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `border: 1px solid #ddd` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Marginها در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
