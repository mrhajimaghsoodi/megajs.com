---
title: "Media queryها در CSS"
description: "این صفحه تطبیق styleها با عرض viewport، نوع pointer، color scheme، preference motion و print را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Media queryها در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Media queryها در CSS (media queries): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Media queryها در CSS, آموزش CSS, مرجع CSS, CSS Media Queries, Media Queries tutorial, media queries"
order: 69
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Media queryها در CSS

Media queryها در CSS درباره تطبیق styleها با عرض viewport، نوع pointer، color scheme، preference motion و print است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Media queryها در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `@media (min-width: 768px)`: ruleها را در viewport عریض‌تر اعمال می‌کند.
- `(prefers-reduced-motion)`: preference حساسیت به motion را تشخیص می‌دهد.
- `(prefers-color-scheme: dark)`: preference dark mode را target می‌کند.
- برای این موضوع، رفتار پایدار در viewportهای مختلف و احترام به preference کاربر معیار اصلی کیفیت CSS است.

## مثال‌های HTML و CSS

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value را تغییر دهید و computed style را مقایسه کنید.

### مثال 1: الگوی CSS متمرکز

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Media Queries practice</title>
    <style>
      .cards {
        display: grid;
        gap: 1rem;
      }
      @media (min-width: 48rem) {
        .cards {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    </style>
  </head>
  <body>
    <div class="cards">
      <article>Small first</article>
      <article>Then wider</article>
      <article>Inspect responsive mode</article>
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
    <title>CSS Media Queries practice</title>
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
      <caption>CSS Media Queries quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>@media (min-width: 768px)</code></td><td>applies rules at wider viewports</td></tr>
        <tr><td><code>(prefers-reduced-motion)</code></td><td>detects motion sensitivity preference</td></tr>
        <tr><td><code>(prefers-color-scheme: dark)</code></td><td>targets dark mode preference</td></tr>
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
    <title>CSS Media Queries practice</title>
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
      <h1>CSS Media Queries checklist</h1>
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
| `@media (min-width: 768px)` | ruleها را در viewport عریض‌تر اعمال می‌کند | در Media queryها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `(prefers-reduced-motion)` | preference حساسیت به motion را تشخیص می‌دهد | در Media queryها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `(prefers-color-scheme: dark)` | preference dark mode را target می‌کند | در Media queryها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Media queryها در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `@media (min-width: 768px)` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `media-queries.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `@media (min-width: 768px)` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Flexbox** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
