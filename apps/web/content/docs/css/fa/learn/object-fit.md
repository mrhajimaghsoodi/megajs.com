---
title: "Object-fit در CSS"
description: "این صفحه جا دادن replaced content مثل image و video داخل frameهای ثابت media را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Object-fit در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Object-fit در CSS (object fit): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Object-fit در CSS, آموزش CSS, مرجع CSS, CSS Object-fit, Object-fit tutorial, object fit"
order: 61
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Object-fit در CSS

Object-fit در CSS درباره جا دادن replaced content مثل image و video داخل frameهای ثابت media است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Object-fit در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `object-fit: cover`: frame را با crop پر می‌کند.
- `object-fit: contain`: کل content را داخل frame جا می‌دهد.
- `object-position`: نقطه focal قابل مشاهده را انتخاب می‌کند.
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
    <title>CSS Object-fit practice</title>
    <style>
      .gallery {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
        gap: 1rem;
      }
      img {
        width: 100%;
        aspect-ratio: 4 / 3;
        object-fit: cover;
        border-radius: .75rem;
      }
    </style>
  </head>
  <body>
    <div class="gallery">
      <img src="https://placehold.co/400x300" alt="CSS media frame">
      <img src="https://placehold.co/300x400" alt="CSS cropped frame">
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
    <title>CSS Object-fit practice</title>
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
      <caption>CSS Object-fit quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>object-fit: cover</code></td><td>fills the frame while cropping</td></tr>
        <tr><td><code>object-fit: contain</code></td><td>fits all content inside the frame</td></tr>
        <tr><td><code>object-position</code></td><td>chooses the visible focal point</td></tr>
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
    <title>CSS Object-fit practice</title>
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
      <h1>CSS Object-fit checklist</h1>
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
| `object-fit: cover` | frame را با crop پر می‌کند | در Object-fit در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `object-fit: contain` | کل content را داخل frame جا می‌دهد | در Object-fit در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `object-position` | نقطه focal قابل مشاهده را انتخاب می‌کند | در Object-fit در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Object-fit در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `object-fit: cover` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `object-fit.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `object-fit: cover` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Masking در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
