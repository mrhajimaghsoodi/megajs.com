---
title: "Functionهای ریاضی CSS"
description: "این صفحه استفاده از calc، min، max و clamp برای مقدارهای سیال اما محدود را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Functionهای ریاضی CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Functionهای ریاضی CSS (math functions): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه."
keywords: "CSS, Functionهای ریاضی CSS, آموزش CSS, مرجع CSS, CSS Math Functions, Math Functions tutorial, math functions"
order: 48
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Functionهای ریاضی CSS

Functionهای ریاضی CSS درباره استفاده از calc، min، max و clamp برای مقدارهای سیال اما محدود است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Functionهای ریاضی CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `calc()`: مقدارهای CSS را با math ترکیب می‌کند.
- `min()`: کوچک‌ترین مقدار را انتخاب می‌کند.
- `clamp()`: minimum، preferred و maximum تعیین می‌کند.
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
    <title>CSS Math Functions practice</title>
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
      <h2>CSS Math Functions</h2>
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
    <title>CSS Math Functions practice</title>
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
      <caption>CSS Math Functions quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>calc()</code></td><td>combines CSS values with math</td></tr>
        <tr><td><code>min()</code></td><td>chooses the smallest value</td></tr>
        <tr><td><code>clamp()</code></td><td>sets minimum, preferred, and maximum values</td></tr>
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
    <title>CSS Math Functions practice</title>
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
      <h1>CSS Math Functions checklist</h1>
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
| `calc()` | مقدارهای CSS را با math ترکیب می‌کند | در Functionهای ریاضی CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `min()` | کوچک‌ترین مقدار را انتخاب می‌کند | در Functionهای ریاضی CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `clamp()` | minimum، preferred و maximum تعیین می‌کند | در Functionهای ریاضی CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Functionهای ریاضی CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `calc()` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `math-functions.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `calc()` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **CSS پیشرفته** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
