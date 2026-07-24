---
title: "Backgroundها در CSS"
description: "این صفحه رنگ، image، gradient، repeat، size و رفتار attachment را پشت محتوا paint کردن را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Backgroundها در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Backgroundها در CSS (backgrounds): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Backgroundها در CSS, آموزش CSS, مرجع CSS, CSS Backgrounds, Backgrounds tutorial, backgrounds"
order: 9
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Backgroundها در CSS

Backgroundها در CSS درباره رنگ، image، gradient، repeat، size و رفتار attachment را پشت محتوا paint کردن است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Backgroundها در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `background-color`: رنگ پس‌زمینه element را paint می‌کند.
- `background-image`: یک لایه image یا gradient اضافه می‌کند.
- `background-size: cover`: image را برای پوشاندن box مقیاس می‌دهد.
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
    <title>CSS Backgrounds practice</title>
    <style>
      .swatch {
        padding: 1.25rem;
        color: white;
        border-radius: 1rem;
        background: linear-gradient(135deg, #2563eb, hsl(280 80% 55%));
      }
    </style>
  </head>
  <body>
    <div class="swatch">
      <h2>CSS Backgrounds</h2>
      <p>Change the gradient colors and inspect the computed background.</p>
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
    <title>CSS Backgrounds practice</title>
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
      <caption>CSS Backgrounds quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>background-color</code></td><td>paints the element background color</td></tr>
        <tr><td><code>background-image</code></td><td>adds an image or gradient layer</td></tr>
        <tr><td><code>background-size: cover</code></td><td>scales an image to cover the box</td></tr>
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
    <title>CSS Backgrounds practice</title>
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
      <h1>CSS Backgrounds checklist</h1>
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
| `background-color` | رنگ پس‌زمینه element را paint می‌کند | در Backgroundها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `background-image` | یک لایه image یا gradient اضافه می‌کند | در Backgroundها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `background-size: cover` | image را برای پوشاندن box مقیاس می‌دهد | در Backgroundها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Backgroundها در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `background-color` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `backgrounds.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `background-color` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Borderها در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
