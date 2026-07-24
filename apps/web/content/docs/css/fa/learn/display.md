---
title: "Display در CSS"
description: "این صفحه انتخاب رفتار display مثل block، inline، flex، grid، none و flow-root را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Display در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Display در CSS (display): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Display در CSS, آموزش CSS, مرجع CSS, CSS Display, Display tutorial, display"
order: 24
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Display در CSS

Display در CSS درباره انتخاب رفتار display مثل block، inline، flex، grid، none و flow-root است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Display در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `display: block`: یک participant در block formatting context می‌سازد.
- `display: flex`: یک flex formatting context می‌سازد.
- `display: none`: box و descendants را از layout خارج می‌کند.
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
    <title>CSS Display practice</title>
    <style>
      .cluster {
        display: flex;
        flex-wrap: wrap;
        gap: .75rem;
      }
      span {
        display: inline-block;
        padding: .75rem 1rem;
        background: #eef2ff;
      }
    </style>
  </head>
  <body>
    <div class="cluster">
      <span>block-like sizing</span>
      <span>inline flow</span>
      <span>gap controlled by CSS</span>
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
    <title>CSS Display practice</title>
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
      <caption>CSS Display quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>display: block</code></td><td>starts a block formatting context participant</td></tr>
        <tr><td><code>display: flex</code></td><td>creates a flex formatting context</td></tr>
        <tr><td><code>display: none</code></td><td>removes the box and descendants from layout</td></tr>
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
    <title>CSS Display practice</title>
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
      <h1>CSS Display checklist</h1>
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
| `display: block` | یک participant در block formatting context می‌سازد | در Display در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `display: flex` | یک flex formatting context می‌سازد | در Display در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `display: none` | box و descendants را از layout خارج می‌کند | در Display در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Display در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `display: block` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `display.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `display: block` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Max-width در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
