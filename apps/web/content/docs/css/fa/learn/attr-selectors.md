---
title: "Selectorهای attribute در CSS"
description: "این صفحه match کردن attributeها به شکل exact، partial، prefix، suffix، token یا language را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Selectorهای attribute در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Selectorهای attribute در CSS (attr selectors): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی."
keywords: "CSS, Selectorهای attribute در CSS, آموزش CSS, مرجع CSS, CSS Attribute Selectors, Attribute Selectors tutorial, attr selectors"
order: 41
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Selectorهای attribute در CSS

Selectorهای attribute در CSS درباره match کردن attributeها به شکل exact، partial، prefix، suffix، token یا language است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Selectorهای attribute در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `[type="email"]`: یک مقدار attribute دقیق را match می‌کند.
- `[href^="https"]`: prefix مقدار را match می‌کند.
- `[data-state~="open"]`: یک token جداشده با فاصله را match می‌کند.
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
    <title>CSS Attribute Selectors practice</title>
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
      <h2>CSS Attribute Selectors</h2>
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
    <title>CSS Attribute Selectors practice</title>
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
      <caption>CSS Attribute Selectors quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>[type=&quot;email&quot;]</code></td><td>matches an exact attribute value</td></tr>
        <tr><td><code>[href^=&quot;https&quot;]</code></td><td>matches a value prefix</td></tr>
        <tr><td><code>[data-state~=&quot;open&quot;]</code></td><td>matches a space-separated token</td></tr>
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
    <title>CSS Attribute Selectors practice</title>
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
      <h1>CSS Attribute Selectors checklist</h1>
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
| `[type="email"]` | یک مقدار attribute دقیق را match می‌کند | در Selectorهای attribute در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `[href^="https"]` | prefix مقدار را match می‌کند | در Selectorهای attribute در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `[data-state~="open"]` | یک token جداشده با فاصله را match می‌کند | در Selectorهای attribute در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Selectorهای attribute در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `[type="email"]` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `attr-selectors.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `[type="email"]` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Formها در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
