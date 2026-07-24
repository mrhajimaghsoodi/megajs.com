---
title: "Specificity در CSS"
description: "این صفحه پیش‌بینی selector برنده قبل از source order و cascade layer را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Specificity در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Specificity در CSS (specificity): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Specificity در CSS, آموزش CSS, مرجع CSS, CSS Specificity, Specificity tutorial, specificity"
order: 46
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Specificity در CSS

Specificity در CSS درباره پیش‌بینی selector برنده قبل از source order و cascade layer است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Specificity در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `0-1-0`: وزن specificity در سطح class.
- `:where()`: specificity اضافه نمی‌کند.
- `#id`: specificity در سطح id اضافه می‌کند.
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
    <title>CSS Specificity practice</title>
    <style>
      @layer base, components;
      @layer base {
        :where(.note) { color: #334155; }
      }
      @layer components {
        .note.featured { color: #1d4ed8; }
      }
    </style>
  </head>
  <body>
    <p class="note featured">
      Inspect which cascade layer and selector wins for CSS Specificity.
    </p>
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
    <title>CSS Specificity practice</title>
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
      <caption>CSS Specificity quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>0-1-0</code></td><td>class-level specificity weight</td></tr>
        <tr><td><code>:where()</code></td><td>adds no specificity</td></tr>
        <tr><td><code>#id</code></td><td>adds id-level specificity</td></tr>
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
    <title>CSS Specificity practice</title>
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
      <h1>CSS Specificity checklist</h1>
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
| `0-1-0` | وزن specificity در سطح class | در Specificity در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `:where()` | specificity اضافه نمی‌کند | در Specificity در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `#id` | specificity در سطح id اضافه می‌کند | در Specificity در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Specificity در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `0-1-0` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `specificity.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `0-1-0` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **!important در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
