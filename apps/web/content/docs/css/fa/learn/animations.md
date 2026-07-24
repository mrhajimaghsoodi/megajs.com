---
title: "Animationها در CSS"
description: "این صفحه ساخت timelineهای keyframe با duration، iteration، direction و fill behavior را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Animationها در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Animationها در CSS (animations): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Animationها در CSS, آموزش CSS, مرجع CSS, CSS Animations, Animations tutorial, animations"
order: 59
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Animationها در CSS

Animationها در CSS درباره ساخت timelineهای keyframe با duration، iteration، direction و fill behavior است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Animationها در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `@keyframes`: stepهای animation را تعریف می‌کند.
- `animation-duration`: طول یک cycle animation را تعیین می‌کند.
- `animation-iteration-count`: تعداد repeat شدن animation را تعیین می‌کند.
- برای این موضوع، motion نرم، performant و سازگار با prefers-reduced-motion معیار اصلی کیفیت CSS است.

## مثال‌های HTML و CSS

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value را تغییر دهید و computed style را مقایسه کنید.

### مثال 1: الگوی CSS متمرکز

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animations practice</title>
    <style>
      @keyframes pulse {
        from { transform: scale(1); }
        to { transform: scale(1.08); }
      }
      @media (prefers-reduced-motion: no-preference) {
        .dot { animation: pulse 700ms ease-in-out infinite alternate; }
      }
      .dot {
        width: 4rem;
        aspect-ratio: 1;
        border-radius: 50%;
        background: #2563eb;
      }
    </style>
  </head>
  <body>
    <div class="dot" aria-label="CSS Animations"></div>
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
    <title>CSS Animations practice</title>
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
      <caption>CSS Animations quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>@keyframes</code></td><td>defines animation steps</td></tr>
        <tr><td><code>animation-duration</code></td><td>sets one animation cycle length</td></tr>
        <tr><td><code>animation-iteration-count</code></td><td>sets how often animation repeats</td></tr>
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
    <title>CSS Animations practice</title>
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
      <h1>CSS Animations checklist</h1>
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
| `@keyframes` | stepهای animation را تعریف می‌کند | در Animationها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `animation-duration` | طول یک cycle animation را تعیین می‌کند | در Animationها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `animation-iteration-count` | تعداد repeat شدن animation را تعیین می‌کند | در Animationها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Animationها در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `@keyframes` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `animations.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `@keyframes` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Tooltipها در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
