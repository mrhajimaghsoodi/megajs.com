---
title: "Unitها در CSS"
description: "این صفحه انتخاب آگاهانه px، rem، em، درصد، vw، vh، ch و unitهای viewport مدرن را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Unitها در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Unitها در CSS (units): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی همراه تمرین."
keywords: "CSS, Unitها در CSS, آموزش CSS, مرجع CSS, CSS Units, Units tutorial, units"
order: 45
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Unitها در CSS

Unitها در CSS درباره انتخاب آگاهانه px، rem، em، درصد، vw، vh، ch و unitهای viewport مدرن است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Unitها در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `rem`: از font-size ریشه scale می‌شود.
- `em`: از font-size فعلی scale می‌شود.
- `vh / vw`: از dimensionهای viewport scale می‌شود.
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
    <title>CSS Units practice</title>
    <style>
      .fluid {
        width: min(100%, 42rem);
        padding: clamp(1rem, 4vw, 3rem);
        font-size: clamp(1rem, 2vw, 1.4rem);
        margin-inline: auto;
      }
    </style>
  </head>
  <body>
    <section class="fluid">
      <h2>CSS Units</h2>
      <p>Resize the viewport and watch clamp(), min(), rem, and vw interact.</p>
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
    <title>CSS Units practice</title>
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
      <caption>CSS Units quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>rem</code></td><td>scales from the root font size</td></tr>
        <tr><td><code>em</code></td><td>scales from the current font size</td></tr>
        <tr><td><code>vh / vw</code></td><td>scale from viewport dimensions</td></tr>
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
    <title>CSS Units practice</title>
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
      <h1>CSS Units checklist</h1>
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
| `rem` | از font-size ریشه scale می‌شود | در Unitها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `em` | از font-size فعلی scale می‌شود | در Unitها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `vh / vw` | از dimensionهای viewport scale می‌شود | در Unitها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Unitها در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `rem` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `units.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `rem` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Specificity در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
