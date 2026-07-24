---
title: "Grid View در RWD"
description: "این صفحه ساخت columnهای سیال با درصد، grid، gap و box-sizing را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Grid View در RWD در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Grid View در RWD (rwd grid): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Grid View در RWD, آموزش CSS, مرجع CSS, CSS RWD Grid View, RWD Grid View tutorial, rwd grid"
order: 80
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Grid View در RWD

Grid View در RWD درباره ساخت columnهای سیال با درصد، grid، gap و box-sizing است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Grid View در RWD کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `grid-template-columns`: columnهای responsive را تعریف می‌کند.
- `minmax()`: columnها را در limitها قابل استفاده نگه می‌دارد.
- `gap`: gutterهای یکدست اضافه می‌کند.
- برای این موضوع، trackهای قابل فهم، gap پایدار و placement قابل مشاهده در grid overlay معیار اصلی کیفیت CSS است.

## مثال‌های HTML و CSS

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value را تغییر دهید و computed style را مقایسه کنید.

### مثال 1: الگوی CSS متمرکز

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RWD Grid View practice</title>
    <style>
      .rwd-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
        gap: 1rem;
      }
    </style>
  </head>
  <body>
    <div class="rwd-grid">
      <section>Fluid column</section>
      <section>Fluid column</section>
      <section>Fluid column</section>
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
    <title>RWD Grid View practice</title>
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
      <caption>RWD Grid View quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>grid-template-columns</code></td><td>defines responsive columns</td></tr>
        <tr><td><code>minmax()</code></td><td>keeps columns usable at limits</td></tr>
        <tr><td><code>gap</code></td><td>adds consistent gutters</td></tr>
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
    <title>RWD Grid View practice</title>
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
      <h1>RWD Grid View checklist</h1>
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
| `grid-template-columns` | columnهای responsive را تعریف می‌کند | در Grid View در RWD آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `minmax()` | columnها را در limitها قابل استفاده نگه می‌دارد | در Grid View در RWD آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `gap` | gutterهای یکدست اضافه می‌کند | در Grid View در RWD آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Grid View در RWD.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `grid-template-columns` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `rwd-grid.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `grid-template-columns` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Media query در RWD** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
