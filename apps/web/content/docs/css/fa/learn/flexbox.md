---
title: "Flexbox"
description: "این صفحه چیدن row و column یک‌بعدی با توزیع و alignment انعطاف‌پذیر را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Flexbox در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Flexbox (flexbox): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی همراه تمرین کاربردی."
keywords: "CSS, Flexbox, آموزش CSS, مرجع CSS, CSS flexbox, CSS Flexbox tutorial"
order: 70
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Flexbox

Flexbox درباره چیدن row و column یک‌بعدی با توزیع و alignment انعطاف‌پذیر است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Flexbox کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `display: flex`: یک context layout یک‌بعدی می‌سازد.
- `main axis`: جهتی که flex itemها در آن چیده می‌شوند.
- `cross axis`: محور عمود بر main axis.
- برای این موضوع، alignment روشن روی main axis و cross axis، همراه wrapping قابل پیش‌بینی معیار اصلی کیفیت CSS است.

## مثال‌های HTML و CSS

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value را تغییر دهید و computed style را مقایسه کنید.

### مثال 1: الگوی CSS متمرکز

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Flexbox practice</title>
    <style>
      .stack {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        gap: 1rem;
      }
      article {
        flex: 1 1 12rem;
        padding: 1rem;
        background: #eef2ff;
        border-radius: .75rem;
      }
    </style>
  </head>
  <body>
    <div class="stack">
      <article>CSS Flexbox</article>
      <article>flex: 1 1 12rem</article>
      <article>wraps when narrow</article>
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
    <title>CSS Flexbox practice</title>
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
      <caption>CSS Flexbox quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>display: flex</code></td><td>creates a one-dimensional layout context</td></tr>
        <tr><td><code>main axis</code></td><td>direction flex items are laid out</td></tr>
        <tr><td><code>cross axis</code></td><td>axis perpendicular to the main axis</td></tr>
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
    <title>CSS Flexbox practice</title>
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
      <h1>CSS Flexbox checklist</h1>
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
| `display: flex` | یک context layout یک‌بعدی می‌سازد | در Flexbox آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `main axis` | جهتی که flex itemها در آن چیده می‌شوند | در Flexbox آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `cross axis` | محور عمود بر main axis | در Flexbox آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Flexbox.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `display: flex` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `flexbox.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `display: flex` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Flex container در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
