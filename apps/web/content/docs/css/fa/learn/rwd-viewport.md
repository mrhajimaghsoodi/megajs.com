---
title: "Viewport در RWD"
description: "این صفحه تنظیم viewport و درک CSS pixel، zoom و device width را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Viewport در RWD در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Viewport در RWD (rwd viewport): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Viewport در RWD, آموزش CSS, مرجع CSS, CSS RWD Viewport, RWD Viewport tutorial, rwd viewport"
order: 79
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Viewport در RWD

Viewport در RWD درباره تنظیم viewport و درک CSS pixel، zoom و device width است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Viewport در RWD کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `<meta name="viewport">`: رفتار viewport موبایل را تعیین می‌کند.
- `width=device-width`: viewport CSS را با device width هماهنگ می‌کند.
- `initial-scale=1`: با zoom معمولی شروع می‌کند.
- برای این موضوع، رفتار پایدار در viewportهای مختلف و احترام به preference کاربر معیار اصلی کیفیت CSS است.

## مثال‌های HTML و CSS

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value را تغییر دهید و computed style را مقایسه کنید.

### مثال 1: الگوی CSS متمرکز

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RWD Viewport practice</title>
    <style>
      body {
        margin: 0;
        font-family: system-ui, sans-serif;
      }
      main {
        width: min(100% - 2rem, 48rem);
        margin-inline: auto;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>RWD Viewport</h1>
      <p>Add the viewport meta tag so CSS pixels match mobile expectations.</p>
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
    <title>RWD Viewport practice</title>
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
      <caption>RWD Viewport quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>&lt;meta name=&quot;viewport&quot;&gt;</code></td><td>sets mobile viewport behavior</td></tr>
        <tr><td><code>width=device-width</code></td><td>matches CSS viewport to device width</td></tr>
        <tr><td><code>initial-scale=1</code></td><td>starts at normal zoom</td></tr>
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
    <title>RWD Viewport practice</title>
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
      <h1>RWD Viewport checklist</h1>
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
| `<meta name="viewport">` | رفتار viewport موبایل را تعیین می‌کند | در Viewport در RWD آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `width=device-width` | viewport CSS را با device width هماهنگ می‌کند | در Viewport در RWD آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `initial-scale=1` | با zoom معمولی شروع می‌کند | در Viewport در RWD آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Viewport در RWD.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `<meta name="viewport">` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `rwd-viewport.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `<meta name="viewport">` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Grid View در RWD** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
