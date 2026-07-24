---
title: "Combinatorها در CSS"
description: "این صفحه انتخاب دقیق descendant، child، sibling و element مجاور را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Combinatorها در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Combinatorها در CSS (combinators): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Combinatorها در CSS, آموزش CSS, مرجع CSS, CSS Combinators, Combinators tutorial, combinators"
order: 32
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Combinatorها در CSS

Combinatorها در CSS درباره انتخاب دقیق descendant، child، sibling و element مجاور است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Combinatorها در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `A B`: descendantها را انتخاب می‌کند.
- `A > B`: فرزندهای مستقیم را انتخاب می‌کند.
- `A + B`: sibling مجاور بعدی را انتخاب می‌کند.
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
    <title>CSS Combinators practice</title>
    <style>
      article > h2 {
        color: #1d4ed8;
      }
      a[href^="https"]::after {
        content: " external";
        font-size: .8em;
      }
    </style>
  </head>
  <body>
    <article>
      <h2>CSS Combinators</h2>
      <p><a href="https://developer.mozilla.org/">Read MDN CSS</a></p>
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
    <title>CSS Combinators practice</title>
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
      <caption>CSS Combinators quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>A B</code></td><td>selects descendants</td></tr>
        <tr><td><code>A &gt; B</code></td><td>selects direct children</td></tr>
        <tr><td><code>A + B</code></td><td>selects the next adjacent sibling</td></tr>
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
    <title>CSS Combinators practice</title>
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
      <h1>CSS Combinators checklist</h1>
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
| `A B` | descendantها را انتخاب می‌کند | در Combinatorها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `A > B` | فرزندهای مستقیم را انتخاب می‌کند | در Combinatorها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `A + B` | sibling مجاور بعدی را انتخاب می‌کند | در Combinatorها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Combinatorها در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `A B` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `combinators.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `A B` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Pseudo-classها در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
