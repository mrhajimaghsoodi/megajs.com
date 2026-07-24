---
title: "Variableها در CSS"
description: "این صفحه استفاده از custom property و var() برای token، theme، component و overrideهای runtime را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Variableها در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Variableها در CSS (variables): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Variableها در CSS, آموزش CSS, مرجع CSS, CSS Variables, Variables tutorial, variables"
order: 67
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Variableها در CSS

Variableها در CSS درباره استفاده از custom property و var() برای token، theme، component و overrideهای runtime است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Variableها در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `--brand-color`: یک custom property تعریف می‌کند.
- `var(--brand-color)`: مقدار custom property را می‌خواند.
- `:root`: design tokenهای global را نگه می‌دارد.
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
    <title>CSS Variables practice</title>
    <style>
      :root {
        --brand: #2563eb;
        --surface: #eff6ff;
      }
      button {
        background: var(--brand);
        color: white;
        border: 0;
        border-radius: .75rem;
        padding: .75rem 1rem;
      }
      .panel {
        background: var(--surface);
        padding: 1rem;
      }
    </style>
  </head>
  <body>
    <section class="panel">
      <h2>CSS Variables</h2>
      <button type="button">Uses var()</button>
    </section>
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
    <title>CSS Variables practice</title>
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
      <caption>CSS Variables quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>--brand-color</code></td><td>defines a custom property</td></tr>
        <tr><td><code>var(--brand-color)</code></td><td>reads a custom property value</td></tr>
        <tr><td><code>:root</code></td><td>stores global design tokens</td></tr>
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
    <title>CSS Variables practice</title>
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
      <h1>CSS Variables checklist</h1>
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
| `--brand-color` | یک custom property تعریف می‌کند | در Variableها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `var(--brand-color)` | مقدار custom property را می‌خواند | در Variableها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `:root` | design tokenهای global را نگه می‌دارد | در Variableها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Variableها در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `--brand-color` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `variables.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `--brand-color` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Box-sizing در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
