---
title: "Opacity در CSS"
description: "این صفحه کنترل شفافیت و درک اثر آن روی stacking و accessibility را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Opacity در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Opacity در CSS (opacity): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Opacity در CSS, آموزش CSS, مرجع CSS, CSS Opacity, Opacity tutorial, opacity"
order: 35
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Opacity در CSS

Opacity در CSS درباره کنترل شفافیت و درک اثر آن روی stacking و accessibility است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Opacity در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `opacity: .75`: کل subtree یک element را نیمه‌شفاف می‌کند.
- `rgba()`: alpha را به یک مقدار رنگ اضافه می‌کند.
- `visibility`: بدون حذف فضای layout پنهان می‌کند.
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
    <title>CSS Opacity practice</title>
    <style>
      .card {
        opacity: .92;
        padding: 1rem;
        border-radius: 1rem;
        box-shadow: 0 1rem 2rem rgb(15 23 42 / .16);
      }
    </style>
  </head>
  <body>
    <article class="card">
      <h2>CSS Opacity</h2>
      <p>Opacity affects the entire rendered subtree.</p>
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
    <title>CSS Opacity practice</title>
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
      <caption>CSS Opacity quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>opacity: .75</code></td><td>makes an entire element subtree translucent</td></tr>
        <tr><td><code>rgba()</code></td><td>adds alpha to a single color value</td></tr>
        <tr><td><code>visibility</code></td><td>hides without removing layout space</td></tr>
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
    <title>CSS Opacity practice</title>
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
      <h1>CSS Opacity checklist</h1>
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
| `opacity: .75` | کل subtree یک element را نیمه‌شفاف می‌کند | در Opacity در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `rgba()` | alpha را به یک مقدار رنگ اضافه می‌کند | در Opacity در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `visibility` | بدون حذف فضای layout پنهان می‌کند | در Opacity در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Opacity در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `opacity: .75` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `opacity.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `opacity: .75` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **الگوهای UI در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
