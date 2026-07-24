---
title: "Box-sizing در CSS"
description: "این صفحه کنترل اینکه dimensionهای declare شده شامل padding و border باشند یا نه را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Box-sizing در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Box-sizing در CSS (box sizing): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Box-sizing در CSS, آموزش CSS, مرجع CSS, CSS Box Sizing, Box Sizing tutorial, box sizing"
order: 68
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Box-sizing در CSS

Box-sizing در CSS درباره کنترل اینکه dimensionهای declare شده شامل padding و border باشند یا نه است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Box-sizing در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `box-sizing: border-box`: padding و border را داخل width حساب می‌کند.
- `content-box`: فقط content box را size می‌کند.
- `* { box-sizing: border-box; }`: baseline قابل پیش‌بینی برای sizing می‌سازد.
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
    <title>CSS Box Sizing practice</title>
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
      <h2>CSS Box Sizing</h2>
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
    <title>CSS Box Sizing practice</title>
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
      <caption>CSS Box Sizing quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>box-sizing: border-box</code></td><td>includes padding and border in width</td></tr>
        <tr><td><code>content-box</code></td><td>sizes only the content box</td></tr>
        <tr><td><code>* { box-sizing: border-box; }</code></td><td>sets a predictable sizing baseline</td></tr>
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
    <title>CSS Box Sizing practice</title>
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
      <h1>CSS Box Sizing checklist</h1>
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
| `box-sizing: border-box` | padding و border را داخل width حساب می‌کند | در Box-sizing در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `content-box` | فقط content box را size می‌کند | در Box-sizing در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `* { box-sizing: border-box; }` | baseline قابل پیش‌بینی برای sizing می‌سازد | در Box-sizing در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Box-sizing در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `box-sizing: border-box` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `box-sizing.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `box-sizing: border-box` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Media queryها در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
