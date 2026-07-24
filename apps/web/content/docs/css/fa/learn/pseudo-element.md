---
title: "Pseudo-elementها در CSS"
description: "این صفحه style دادن قطعه‌های generated مثل before، after، marker و first line را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Pseudo-elementها در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Pseudo-elementها در CSS (pseudo element): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه."
keywords: "CSS, Pseudo-elementها در CSS, آموزش CSS, مرجع CSS, CSS Pseudo-elements, Pseudo-elements tutorial, pseudo element"
order: 34
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Pseudo-elementها در CSS

Pseudo-elementها در CSS درباره style دادن قطعه‌های generated مثل before، after، marker و first line است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Pseudo-elementها در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `::before`: content generated را قبل از element می‌سازد.
- `::after`: content generated را بعد از element می‌سازد.
- `::selection`: متن انتخاب‌شده را style می‌کند.
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
    <title>CSS Pseudo-elements practice</title>
    <style>
      .badge::before {
        content: "CSS";
        margin-inline-end: .5rem;
        color: #2563eb;
        font-weight: 700;
      }
      .badge::selection {
        background: #fde68a;
      }
    </style>
  </head>
  <body>
    <p class="badge">CSS Pseudo-elements uses generated content.</p>
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
    <title>CSS Pseudo-elements practice</title>
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
      <caption>CSS Pseudo-elements quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>::before</code></td><td>creates generated content before an element</td></tr>
        <tr><td><code>::after</code></td><td>creates generated content after an element</td></tr>
        <tr><td><code>::selection</code></td><td>styles selected text</td></tr>
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
    <title>CSS Pseudo-elements practice</title>
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
      <h1>CSS Pseudo-elements checklist</h1>
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
| `::before` | content generated را قبل از element می‌سازد | در Pseudo-elementها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `::after` | content generated را بعد از element می‌سازد | در Pseudo-elementها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `::selection` | متن انتخاب‌شده را style می‌کند | در Pseudo-elementها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Pseudo-elementها در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `::before` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `pseudo-element.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `::before` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Opacity در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
