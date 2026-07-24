---
title: "Tableها در CSS"
description: "این صفحه style دادن داده جدولی واقعی با border، spacing، caption و wrapper واکنش‌گرا را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Tableها در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Tableها در CSS (tables): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Tableها در CSS, آموزش CSS, مرجع CSS, CSS Tables, Tables tutorial, tables"
order: 22
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Tableها در CSS

Tableها در CSS درباره style دادن داده جدولی واقعی با border، spacing، caption و wrapper واکنش‌گرا است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Tableها در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `border-collapse`: borderهای مشترک جدول را کنترل می‌کند.
- `caption-side`: جای caption جدول را تعیین می‌کند.
- `overflow-x: auto`: به جدول عریض اجازه scroll امن می‌دهد.
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
    <title>CSS Tables practice</title>
    <style>
      .table-wrap {
        overflow-x: auto;
      }
      table {
        border-collapse: collapse;
        min-width: 28rem;
      }
      th,
      td {
        border: 1px solid #cbd5e1;
        padding: .65rem;
      }
    </style>
  </head>
  <body>
    <div class="table-wrap">
      <table>
        <caption>CSS Tables quick table</caption>
        <tr><th>Property</th><th>Value</th></tr>
        <tr><td>border-collapse</td><td>collapse</td></tr>
      </table>
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
    <title>CSS Tables practice</title>
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
      <caption>CSS Tables quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>border-collapse</code></td><td>controls shared table borders</td></tr>
        <tr><td><code>caption-side</code></td><td>places the table caption</td></tr>
        <tr><td><code>overflow-x: auto</code></td><td>allows wide tables to scroll safely</td></tr>
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
    <title>CSS Tables practice</title>
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
      <h1>CSS Tables checklist</h1>
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
| `border-collapse` | borderهای مشترک جدول را کنترل می‌کند | در Tableها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `caption-side` | جای caption جدول را تعیین می‌کند | در Tableها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `overflow-x: auto` | به جدول عریض اجازه scroll امن می‌دهد | در Tableها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Tableها در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `border-collapse` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `tables.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `border-collapse` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **چیدمان پایه در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
