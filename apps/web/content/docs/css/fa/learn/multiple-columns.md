---
title: "ستون‌های چندگانه در CSS"
description: "این صفحه جریان دادن content در ستون‌های شبیه روزنامه با gap، rule و break را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش ستون‌های چندگانه در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش ستون‌های چندگانه در CSS (multiple columns): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه."
keywords: "CSS, ستون‌های چندگانه در CSS, آموزش CSS, مرجع CSS, CSS Multiple Columns, Multiple Columns tutorial, multiple columns"
order: 65
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# ستون‌های چندگانه در CSS

ستون‌های چندگانه در CSS درباره جریان دادن content در ستون‌های شبیه روزنامه با gap، rule و break است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با ستون‌های چندگانه در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `column-count`: تعداد column مطلوب را تعیین می‌کند.
- `column-gap`: فاصله بین columnها را تعیین می‌کند.
- `break-inside`: fragmentation داخل boxها را کنترل می‌کند.
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
    <title>CSS Multiple Columns practice</title>
    <style>
      .columns {
        column-count: 2;
        column-gap: 2rem;
        column-rule: 1px solid #cbd5e1;
      }
    </style>
  </head>
  <body>
    <article class="columns">
      <h2>CSS Multiple Columns</h2>
      <p>Multi-column layout fragments long text into readable columns.</p>
      <p>Use breaks carefully so headings stay with their content.</p>
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
    <title>CSS Multiple Columns practice</title>
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
      <caption>CSS Multiple Columns quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>column-count</code></td><td>sets the desired number of columns</td></tr>
        <tr><td><code>column-gap</code></td><td>sets space between columns</td></tr>
        <tr><td><code>break-inside</code></td><td>controls fragmentation inside boxes</td></tr>
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
    <title>CSS Multiple Columns practice</title>
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
      <h1>CSS Multiple Columns checklist</h1>
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
| `column-count` | تعداد column مطلوب را تعیین می‌کند | در ستون‌های چندگانه در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `column-gap` | فاصله بین columnها را تعیین می‌کند | در ستون‌های چندگانه در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `break-inside` | fragmentation داخل boxها را کنترل می‌کند | در ستون‌های چندگانه در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در ستون‌های چندگانه در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `column-count` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `multiple-columns.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `column-count` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **User Interface در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
