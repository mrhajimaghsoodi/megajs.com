---
title: "Flexbox واکنش‌گرا در CSS"
description: "این صفحه wrap و re-balance کردن layoutهای flex در صفحه‌های باریک و عریض را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Flexbox واکنش‌گرا در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Flexbox واکنش‌گرا در CSS (flex responsive): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه."
keywords: "CSS, Flexbox واکنش‌گرا در CSS, آموزش CSS, مرجع CSS, CSS Responsive Flexbox, Responsive Flexbox tutorial, flex responsive"
order: 73
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Flexbox واکنش‌گرا در CSS

Flexbox واکنش‌گرا در CSS درباره wrap و re-balance کردن layoutهای flex در صفحه‌های باریک و عریض است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Flexbox واکنش‌گرا در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `flex-wrap: wrap`: به itemها اجازه خط جدید می‌دهد.
- `flex-basis`: اندازه ترجیحی item را تعیین می‌کند.
- `@media`: ruleهای flex را بر اساس viewport عوض می‌کند.
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
    <title>CSS Responsive Flexbox practice</title>
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
      <article>CSS Responsive Flexbox</article>
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
    <title>CSS Responsive Flexbox practice</title>
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
      <caption>CSS Responsive Flexbox quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>flex-wrap: wrap</code></td><td>allows items to create new lines</td></tr>
        <tr><td><code>flex-basis</code></td><td>sets a preferred item size</td></tr>
        <tr><td><code>@media</code></td><td>changes flex rules by viewport</td></tr>
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
    <title>CSS Responsive Flexbox practice</title>
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
      <h1>CSS Responsive Flexbox checklist</h1>
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
| `flex-wrap: wrap` | به itemها اجازه خط جدید می‌دهد | در Flexbox واکنش‌گرا در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `flex-basis` | اندازه ترجیحی item را تعیین می‌کند | در Flexbox واکنش‌گرا در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `@media` | ruleهای flex را بر اساس viewport عوض می‌کند | در Flexbox واکنش‌گرا در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Flexbox واکنش‌گرا در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `flex-wrap: wrap` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `flex-responsive.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `flex-wrap: wrap` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Grid** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
