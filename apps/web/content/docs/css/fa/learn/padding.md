---
title: "Padding در CSS"
description: "این صفحه ساخت فاصله داخلی بین content و border بدون تغییر رابطه‌های بیرونی را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Padding در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Padding در CSS (padding): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Padding در CSS, آموزش CSS, مرجع CSS, CSS Padding, Padding tutorial, padding"
order: 12
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Padding در CSS

Padding در CSS درباره ساخت فاصله داخلی بین content و border بدون تغییر رابطه‌های بیرونی است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Padding در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `padding`: فضای داخل border را تعیین می‌کند.
- `padding-inline`: فاصله logical چپ/راست را تعیین می‌کند.
- `box-sizing`: کنترل می‌کند padding چگونه روی dimension اثر بگذارد.
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
    <title>CSS Padding practice</title>
    <style>
      .box {
        box-sizing: border-box;
        width: min(100%, 28rem);
        margin: 2rem auto;
        padding: 1.5rem;
        border: 3px solid #0f766e;
      }
    </style>
  </head>
  <body>
    <section class="box">
      <h2>CSS Padding</h2>
      <p>Open the DevTools box model view and compare margin, border, and padding.</p>
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
    <title>CSS Padding practice</title>
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
      <caption>CSS Padding quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>padding</code></td><td>sets space inside the border</td></tr>
        <tr><td><code>padding-inline</code></td><td>sets logical left/right spacing</td></tr>
        <tr><td><code>box-sizing</code></td><td>controls how padding affects dimensions</td></tr>
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
    <title>CSS Padding practice</title>
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
      <h1>CSS Padding checklist</h1>
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
| `padding` | فضای داخل border را تعیین می‌کند | در Padding در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `padding-inline` | فاصله logical چپ/راست را تعیین می‌کند | در Padding در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `box-sizing` | کنترل می‌کند padding چگونه روی dimension اثر بگذارد | در Padding در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Padding در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `padding` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `padding.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `padding` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Height و Width در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
