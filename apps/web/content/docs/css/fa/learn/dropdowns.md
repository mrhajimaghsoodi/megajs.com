---
title: "Dropdownها در CSS"
description: "این صفحه ساخت menuهای لایه‌ای با positioning، stateهای hover/focus و ساختار keyboard-aware را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Dropdownها در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Dropdownها در CSS (dropdowns): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Dropdownها در CSS, آموزش CSS, مرجع CSS, CSS Dropdowns, Dropdowns tutorial, dropdowns"
order: 38
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Dropdownها در CSS

Dropdownها در CSS درباره ساخت menuهای لایه‌ای با positioning، stateهای hover/focus و ساختار keyboard-aware است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Dropdownها در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `.menu:hover .panel`: panel را هنگام hover نمایش می‌دهد.
- `position: absolute`: لایه dropdown را جای‌گذاری می‌کند.
- `:focus-within`: menu را برای focus کیبورد باز نگه می‌دارد.
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
    <title>CSS Dropdowns practice</title>
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
      <button type="button">CSS Dropdowns</button>
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
    <title>CSS Dropdowns practice</title>
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
      <caption>CSS Dropdowns quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>.menu:hover .panel</code></td><td>reveals a panel during hover</td></tr>
        <tr><td><code>position: absolute</code></td><td>places the dropdown layer</td></tr>
        <tr><td><code>:focus-within</code></td><td>keeps menus open for keyboard focus</td></tr>
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
    <title>CSS Dropdowns practice</title>
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
      <h1>CSS Dropdowns checklist</h1>
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
| `.menu:hover .panel` | panel را هنگام hover نمایش می‌دهد | در Dropdownها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `position: absolute` | لایه dropdown را جای‌گذاری می‌کند | در Dropdownها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `:focus-within` | menu را برای focus کیبورد باز نگه می‌دارد | در Dropdownها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Dropdownها در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `.menu:hover .panel` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `dropdowns.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `.menu:hover .panel` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **گالری تصویر در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
