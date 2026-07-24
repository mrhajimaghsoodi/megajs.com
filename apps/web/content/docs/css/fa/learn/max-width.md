---
title: "Max-width در CSS"
description: "این صفحه محدود کردن طول خط و رشد component همراه fluid ماندن layout را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Max-width در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Max-width در CSS (max width): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Max-width در CSS, آموزش CSS, مرجع CSS, CSS Max-width, Max-width tutorial, max width"
order: 25
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Max-width در CSS

Max-width در CSS درباره محدود کردن طول خط و رشد component همراه fluid ماندن layout است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Max-width در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `max-width: 70ch`: measure خوانای متن را محدود می‌کند.
- `width: min(100%, 64rem)`: sizing سیال و محدود را ترکیب می‌کند.
- `margin-inline: auto`: یک block محدود را center می‌کند.
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
    <title>CSS Max-width practice</title>
    <style>
      .panel {
        max-width: 36ch;
        overflow: auto;
        padding: 1rem;
        border: 1px solid #cbd5e1;
      }
      .panel code {
        overflow-wrap: anywhere;
      }
    </style>
  </head>
  <body>
    <div class="panel">
      <h2>CSS Max-width</h2>
      <code>very-long-token-that-needs-safe-wrapping-in-a-small-container</code>
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
    <title>CSS Max-width practice</title>
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
      <caption>CSS Max-width quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>max-width: 70ch</code></td><td>limits readable text measure</td></tr>
        <tr><td><code>width: min(100%, 64rem)</code></td><td>combines fluid and capped sizing</td></tr>
        <tr><td><code>margin-inline: auto</code></td><td>centers a capped block</td></tr>
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
    <title>CSS Max-width practice</title>
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
      <h1>CSS Max-width checklist</h1>
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
| `max-width: 70ch` | measure خوانای متن را محدود می‌کند | در Max-width در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `width: min(100%, 64rem)` | sizing سیال و محدود را ترکیب می‌کند | در Max-width در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `margin-inline: auto` | یک block محدود را center می‌کند | در Max-width در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Max-width در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `max-width: 70ch` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `max-width.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `max-width: 70ch` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Position در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
