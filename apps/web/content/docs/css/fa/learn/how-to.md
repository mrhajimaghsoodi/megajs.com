---
title: "روش افزودن CSS"
description: "این صفحه استفاده از CSS inline، internal و external همراه نگه‌داری‌پذیری styleهای production را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش روش افزودن CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش روش افزودن CSS (how to): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, روش افزودن CSS, آموزش CSS, مرجع CSS, CSS How To Add CSS, How To Add CSS tutorial, how to"
order: 5
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# روش افزودن CSS

روش افزودن CSS درباره استفاده از CSS inline، internal و external همراه نگه‌داری‌پذیری styleهای production است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با روش افزودن CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `<link rel="stylesheet">`: یک stylesheet قابل استفاده مجدد را load می‌کند.
- `<style>`: CSS دمو یا مخصوص صفحه را کنار HTML نگه می‌دارد.
- `style=""`: declarationهای inline و تک‌باره اضافه می‌کند.
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
    <title>How To Add CSS practice</title>
    <style>
      .demo {
        padding: 1rem;
        border-radius: .75rem;
        background: #f8fafc;
      }
      .demo code {
        color: #2563eb;
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <section class="demo">
      <h2>How To Add CSS</h2>
      <p>Try changing <code>&lt;link rel=&quot;stylesheet&quot;&gt;</code> and inspect the computed style.</p>
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
    <title>How To Add CSS practice</title>
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
      <caption>How To Add CSS quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>&lt;link rel=&quot;stylesheet&quot;&gt;</code></td><td>loads a reusable stylesheet</td></tr>
        <tr><td><code>&lt;style&gt;</code></td><td>keeps page-level demo CSS with the HTML</td></tr>
        <tr><td><code>style=&quot;&quot;</code></td><td>adds one-off inline declarations</td></tr>
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
    <title>How To Add CSS practice</title>
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
      <h1>How To Add CSS checklist</h1>
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
| `<link rel="stylesheet">` | یک stylesheet قابل استفاده مجدد را load می‌کند | در روش افزودن CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `<style>` | CSS دمو یا مخصوص صفحه را کنار HTML نگه می‌دارد | در روش افزودن CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `style=""` | declarationهای inline و تک‌باره اضافه می‌کند | در روش افزودن CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در روش افزودن CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `<link rel="stylesheet">` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `how-to.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `<link rel="stylesheet">` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **کامنت‌ها در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
