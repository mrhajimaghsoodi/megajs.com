---
title: "Inline-block در CSS"
description: "این صفحه ترکیب جریان inline با width، height، padding و vertical alignment را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Inline-block در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Inline-block در CSS (inline block): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Inline-block در CSS, آموزش CSS, مرجع CSS, CSS Inline-block, Inline-block tutorial, inline block"
order: 30
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Inline-block در CSS

Inline-block در CSS درباره ترکیب جریان inline با width، height، padding و vertical alignment است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Inline-block در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `display: inline-block`: inline جریان دارد اما dimensionهای box را می‌پذیرد.
- `vertical-align`: boxهای inline-level را align می‌کند.
- `white-space`: gapهای ناشی از inline formatting را کنترل می‌کند.
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
    <title>CSS Inline-block practice</title>
    <style>
      .cluster {
        display: flex;
        flex-wrap: wrap;
        gap: .75rem;
      }
      span {
        display: inline-block;
        padding: .75rem 1rem;
        background: #eef2ff;
      }
    </style>
  </head>
  <body>
    <div class="cluster">
      <span>block-like sizing</span>
      <span>inline flow</span>
      <span>gap controlled by CSS</span>
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
    <title>CSS Inline-block practice</title>
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
      <caption>CSS Inline-block quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>display: inline-block</code></td><td>flows inline but accepts box dimensions</td></tr>
        <tr><td><code>vertical-align</code></td><td>aligns inline-level boxes</td></tr>
        <tr><td><code>white-space</code></td><td>controls gaps caused by inline formatting</td></tr>
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
    <title>CSS Inline-block practice</title>
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
      <h1>CSS Inline-block checklist</h1>
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
| `display: inline-block` | inline جریان دارد اما dimensionهای box را می‌پذیرد | در Inline-block در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `vertical-align` | boxهای inline-level را align می‌کند | در Inline-block در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `white-space` | gapهای ناشی از inline formatting را کنترل می‌کند | در Inline-block در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Inline-block در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `display: inline-block` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `inline-block.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `display: inline-block` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Align در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
