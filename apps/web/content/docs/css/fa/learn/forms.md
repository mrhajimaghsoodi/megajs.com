---
title: "Formها در CSS"
description: "این صفحه style دادن control، label، validation state، focus ring و فاصله دسترس‌پذیر را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Formها در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Formها در CSS (forms): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی همراه تمرین."
keywords: "CSS, Formها در CSS, آموزش CSS, مرجع CSS, CSS Forms, Forms tutorial, forms"
order: 42
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Formها در CSS

Formها در CSS درباره style دادن control، label، validation state، focus ring و فاصله دسترس‌پذیر است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Formها در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `input:invalid`: controlهای نامعتبر form را style می‌کند.
- `accent-color`: accent color controlهای native را تعیین می‌کند.
- `fieldset`: controlهای مرتبط را visual گروه می‌کند.
- برای این موضوع، focus واضح، hit target مناسب و stateهای hover/focus/disabled معیار اصلی کیفیت CSS است.

## مثال‌های HTML و CSS

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value را تغییر دهید و computed style را مقایسه کنید.

### مثال 1: الگوی CSS متمرکز

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Forms practice</title>
    <style>
      label {
        display: grid;
        gap: .35rem;
      }
      input {
        padding: .65rem;
        border: 1px solid #94a3b8;
        border-radius: .5rem;
      }
      input:invalid {
        border-color: #dc2626;
      }
    </style>
  </head>
  <body>
    <form>
      <label>Email <input type="email" required placeholder="name@example.com"></label>
      <button type="submit">Subscribe</button>
    </form>
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
    <title>CSS Forms practice</title>
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
      <caption>CSS Forms quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>input:invalid</code></td><td>styles invalid form controls</td></tr>
        <tr><td><code>accent-color</code></td><td>sets native control accent color</td></tr>
        <tr><td><code>fieldset</code></td><td>groups related controls visually</td></tr>
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
    <title>CSS Forms practice</title>
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
      <h1>CSS Forms checklist</h1>
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
| `input:invalid` | controlهای نامعتبر form را style می‌کند | در Formها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `accent-color` | accent color controlهای native را تعیین می‌کند | در Formها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `fieldset` | controlهای مرتبط را visual گروه می‌کند | در Formها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Formها در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `input:invalid` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `forms.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `input:invalid` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Counterها در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
