---
title: "Transformهای سه‌بعدی CSS"
description: "این صفحه استفاده از perspective، rotate سه‌بعدی، transform-style و backface visibility را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Transformهای سه‌بعدی CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Transformهای سه‌بعدی CSS (transforms 3d): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه."
keywords: "CSS, Transformهای سه‌بعدی CSS, آموزش CSS, مرجع CSS, CSS 3D Transforms, 3D Transforms tutorial, transforms 3d"
order: 57
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Transformهای سه‌بعدی CSS

Transformهای سه‌بعدی CSS درباره استفاده از perspective، rotate سه‌بعدی، transform-style و backface visibility است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Transformهای سه‌بعدی CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `perspective`: به فرزندهای transformed سه‌بعدی depth می‌دهد.
- `rotateY()`: حول محور y می‌چرخاند.
- `transform-style: preserve-3d`: transformهای فرزند را در فضای 3D نگه می‌دارد.
- برای این موضوع، motion نرم، performant و سازگار با prefers-reduced-motion معیار اصلی کیفیت CSS است.

## مثال‌های HTML و CSS

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value را تغییر دهید و computed style را مقایسه کنید.

### مثال 1: الگوی CSS متمرکز

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS 3D Transforms practice</title>
    <style>
      .tile {
        display: inline-block;
        padding: 1rem;
        border-radius: .75rem;
        background: #dbeafe;
        transform: translateX(1rem) rotate(3deg) scale(1.04);
      }
    </style>
  </head>
  <body>
    <div class="tile">CSS 3D Transforms</div>
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
    <title>CSS 3D Transforms practice</title>
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
      <caption>CSS 3D Transforms quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>perspective</code></td><td>adds depth to 3D transformed children</td></tr>
        <tr><td><code>rotateY()</code></td><td>rotates around the y axis</td></tr>
        <tr><td><code>transform-style: preserve-3d</code></td><td>keeps child transforms in 3D space</td></tr>
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
    <title>CSS 3D Transforms practice</title>
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
      <h1>CSS 3D Transforms checklist</h1>
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
| `perspective` | به فرزندهای transformed سه‌بعدی depth می‌دهد | در Transformهای سه‌بعدی CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `rotateY()` | حول محور y می‌چرخاند | در Transformهای سه‌بعدی CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `transform-style: preserve-3d` | transformهای فرزند را در فضای 3D نگه می‌دارد | در Transformهای سه‌بعدی CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Transformهای سه‌بعدی CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `perspective` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `transforms-3d.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `perspective` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Transitionها در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
