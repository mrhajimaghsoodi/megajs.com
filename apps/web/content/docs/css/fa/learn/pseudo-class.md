---
title: "Pseudo-classها در CSS"
description: "این صفحه style دادن stateها، موقعیت‌های ساختاری و تعامل‌های کاربر را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Pseudo-classها در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Pseudo-classها در CSS (pseudo class): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Pseudo-classها در CSS, آموزش CSS, مرجع CSS, CSS Pseudo-classes, Pseudo-classes tutorial, pseudo class"
order: 33
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Pseudo-classها در CSS

Pseudo-classها در CSS درباره style دادن stateها، موقعیت‌های ساختاری و تعامل‌های کاربر است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Pseudo-classها در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `:hover`: state hover با pointer را match می‌کند.
- `:focus-visible`: focus قابل استفاده کیبورد را match می‌کند.
- `:nth-child()`: elementها را با موقعیت sibling match می‌کند.
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
    <title>CSS Pseudo-classes practice</title>
    <style>
      .choice {
        padding: .8rem 1rem;
        border: 1px solid #94a3b8;
      }
      button:hover,
      button:focus-visible {
        background: #dbeafe;
        outline: 2px solid #2563eb;
      }
    </style>
  </head>
  <body>
    <button class="choice" type="button">CSS Pseudo-classes</button>
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
    <title>CSS Pseudo-classes practice</title>
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
      <caption>CSS Pseudo-classes quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>:hover</code></td><td>matches pointer hover state</td></tr>
        <tr><td><code>:focus-visible</code></td><td>matches useful keyboard focus</td></tr>
        <tr><td><code>:nth-child()</code></td><td>matches elements by sibling position</td></tr>
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
    <title>CSS Pseudo-classes practice</title>
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
      <h1>CSS Pseudo-classes checklist</h1>
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
| `:hover` | state hover با pointer را match می‌کند | در Pseudo-classها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `:focus-visible` | focus قابل استفاده کیبورد را match می‌کند | در Pseudo-classها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `:nth-child()` | elementها را با موقعیت sibling match می‌کند | در Pseudo-classها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Pseudo-classها در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `:hover` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `pseudo-class.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `:hover` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Pseudo-elementها در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
