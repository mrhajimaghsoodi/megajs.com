---
title: "Position در CSS"
description: "این صفحه جای‌گذاری boxها با positionهای static، relative، absolute، fixed و sticky را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Position در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Position در CSS (position): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Position در CSS, آموزش CSS, مرجع CSS, CSS Position, Position tutorial, position"
order: 26
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Position در CSS

Position در CSS درباره جای‌گذاری boxها با positionهای static، relative، absolute، fixed و sticky است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Position در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `position: relative`: context offset و containing block می‌سازد.
- `position: absolute`: box را نسبت به containing block قرار می‌دهد.
- `position: sticky`: داخل scroll container می‌چسبد.
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
    <title>CSS Position practice</title>
    <style>
      .stage {
        position: relative;
        min-height: 10rem;
        border: 1px dashed #94a3b8;
      }
      button {
        position: absolute;
        inset-block-start: 2rem;
        inset-inline-start: 2rem;
        z-index: 2;
      }
    </style>
  </head>
  <body>
    <div class="stage">
      <button type="button">CSS Position</button>
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
    <title>CSS Position practice</title>
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
      <caption>CSS Position quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>position: relative</code></td><td>creates an offset context and containing block</td></tr>
        <tr><td><code>position: absolute</code></td><td>places a box relative to a containing block</td></tr>
        <tr><td><code>position: sticky</code></td><td>sticks within a scroll container</td></tr>
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
    <title>CSS Position practice</title>
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
      <h1>CSS Position checklist</h1>
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
| `position: relative` | context offset و containing block می‌سازد | در Position در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `position: absolute` | box را نسبت به containing block قرار می‌دهد | در Position در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `position: sticky` | داخل scroll container می‌چسبد | در Position در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Position در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `position: relative` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `position.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `position: relative` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Z-index در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
