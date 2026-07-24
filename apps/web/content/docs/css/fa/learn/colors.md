---
title: "رنگ‌ها در CSS"
description: "این صفحه استفاده از رنگ‌های named، hex، rgb، hsl، alpha و تابع‌های رنگ مدرن را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش رنگ‌ها در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش رنگ‌ها در CSS (colors): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, رنگ‌ها در CSS, آموزش CSS, مرجع CSS, CSS Colors, Colors tutorial, colors"
order: 7
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# رنگ‌ها در CSS

رنگ‌ها در CSS درباره استفاده از رنگ‌های named، hex، rgb، hsl، alpha و تابع‌های رنگ مدرن است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با رنگ‌ها در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `#2563eb`: یک رنگ RGB را با notation هگز تعیین می‌کند.
- `rgb(37 99 235 / .9)`: RGB را همراه alpha با syntax مدرن تعیین می‌کند.
- `hsl(220 85% 56%)`: hue، saturation و lightness را تعیین می‌کند.
- برای این موضوع، contrast کافی و tokenهای رنگ قابل نگه‌داری معیار اصلی کیفیت CSS است.

## مثال‌های HTML و CSS

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value را تغییر دهید و computed style را مقایسه کنید.

### مثال 1: الگوی CSS متمرکز

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Colors practice</title>
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
      <h2>CSS Colors</h2>
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
    <title>CSS Colors practice</title>
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
      <caption>CSS Colors quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>#2563eb</code></td><td>sets an RGB color with hex notation</td></tr>
        <tr><td><code>rgb(37 99 235 / .9)</code></td><td>sets RGB with alpha in modern syntax</td></tr>
        <tr><td><code>hsl(220 85% 56%)</code></td><td>sets hue, saturation, and lightness</td></tr>
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
    <title>CSS Colors practice</title>
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
      <h1>CSS Colors checklist</h1>
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
| `#2563eb` | یک رنگ RGB را با notation هگز تعیین می‌کند | در رنگ‌ها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `rgb(37 99 235 / .9)` | RGB را همراه alpha با syntax مدرن تعیین می‌کند | در رنگ‌ها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `hsl(220 85% 56%)` | hue، saturation و lightness را تعیین می‌کند | در رنگ‌ها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در رنگ‌ها در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `#2563eb` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `colors.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `#2563eb` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **پس‌زمینه و border در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
