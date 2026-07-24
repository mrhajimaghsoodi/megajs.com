---
title: "Transformهای دوبعدی CSS"
description: "این صفحه جابجایی، scale، rotate و skew کردن box بدون اثر بر normal flow را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Transformهای دوبعدی CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Transformهای دوبعدی CSS (transforms 2d): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه."
keywords: "CSS, Transformهای دوبعدی CSS, آموزش CSS, مرجع CSS, CSS 2D Transforms, 2D Transforms tutorial, transforms 2d"
order: 56
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Transformهای دوبعدی CSS

Transformهای دوبعدی CSS درباره جابجایی، scale، rotate و skew کردن box بدون اثر بر normal flow است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Transformهای دوبعدی CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `transform: translateX()`: box را visual روی محور x جابه‌جا می‌کند.
- `scale()`: box را به شکل visual resize می‌کند.
- `rotate()`: حول transform-origin می‌چرخاند.
- برای این موضوع، motion نرم، performant و سازگار با prefers-reduced-motion معیار اصلی کیفیت CSS است.

## مثال‌های HTML و CSS

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value را تغییر دهید و computed style را مقایسه کنید.

### مثال 1: الگوی CSS متمرکز

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS 2D Transforms practice</title>
    <style>
      .tile {
        display: inline-block;
        padding: 1rem;
        border-radius: .75rem;
        background: #dbeafe;
        transform: translateX(1rem) rotate(3deg) scale(1.04);
      }
    </style>
  </head>
  <body>
    <div class="tile">CSS 2D Transforms</div>
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
    <title>CSS 2D Transforms practice</title>
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
      <caption>CSS 2D Transforms quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>transform: translateX()</code></td><td>moves a box visually on the x axis</td></tr>
        <tr><td><code>scale()</code></td><td>resizes a box visually</td></tr>
        <tr><td><code>rotate()</code></td><td>rotates around transform-origin</td></tr>
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
    <title>CSS 2D Transforms practice</title>
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
      <h1>CSS 2D Transforms checklist</h1>
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
| `transform: translateX()` | box را visual روی محور x جابه‌جا می‌کند | در Transformهای دوبعدی CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `scale()` | box را به شکل visual resize می‌کند | در Transformهای دوبعدی CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `rotate()` | حول transform-origin می‌چرخاند | در Transformهای دوبعدی CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Transformهای دوبعدی CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `transform: translateX()` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `transforms-2d.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `transform: translateX()` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Transformهای سه‌بعدی CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
