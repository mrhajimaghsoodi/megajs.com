---
title: "Pagination در CSS"
description: "این صفحه style دادن لیست navigation صفحه با current state، spacing، hit target و wrap responsive را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Pagination در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Pagination در CSS (pagination): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Pagination در CSS, آموزش CSS, مرجع CSS, CSS Pagination, Pagination tutorial, pagination"
order: 64
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Pagination در CSS

Pagination در CSS درباره style دادن لیست navigation صفحه با current state، spacing، hit target و wrap responsive است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Pagination در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `.pagination`: linkهای صفحه را گروه می‌کند.
- `[aria-current="page"]`: صفحه فعال را مشخص می‌کند.
- `inline-size`: عرض clickable به شکل logical تعیین می‌کند.
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
    <title>CSS Pagination practice</title>
    <style>
      .nav {
        display: flex;
        gap: .75rem;
        flex-wrap: wrap;
      }
      .nav a {
        color: #1d4ed8;
        padding: .5rem .75rem;
        border-radius: 999px;
      }
      .nav a:focus-visible,
      .nav a:hover {
        outline: 2px solid currentColor;
        background: #dbeafe;
      }
    </style>
  </head>
  <body>
    <nav class="nav" aria-label="CSS Pagination">
      <a href="#" aria-current="page">Start</a>
      <a href="#">Reference</a>
      <a href="#">Practice</a>
    </nav>
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
    <title>CSS Pagination practice</title>
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
      <caption>CSS Pagination quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>.pagination</code></td><td>groups page links</td></tr>
        <tr><td><code>[aria-current=&quot;page&quot;]</code></td><td>marks the active page</td></tr>
        <tr><td><code>inline-size</code></td><td>sets logical clickable width</td></tr>
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
    <title>CSS Pagination practice</title>
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
      <h1>CSS Pagination checklist</h1>
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
| `.pagination` | linkهای صفحه را گروه می‌کند | در Pagination در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `[aria-current="page"]` | صفحه فعال را مشخص می‌کند | در Pagination در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `inline-size` | عرض clickable به شکل logical تعیین می‌کند | در Pagination در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Pagination در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `.pagination` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `pagination.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `.pagination` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **ستون‌های چندگانه در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
