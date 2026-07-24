---
title: "Transitionها در CSS"
description: "این صفحه animate کردن تغییر property بین stateها با duration، delay و easing را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Transitionها در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Transitionها در CSS (transitions): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Transitionها در CSS, آموزش CSS, مرجع CSS, CSS Transitions, Transitions tutorial, transitions"
order: 58
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Transitionها در CSS

Transitionها در CSS درباره animate کردن تغییر property بین stateها با duration، delay و easing است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Transitionها در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `transition-property`: propertyهای animated را انتخاب می‌کند.
- `transition-duration`: مدت تغییر را تعیین می‌کند.
- `transition-timing-function`: easing تغییر را تعیین می‌کند.
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
    <title>CSS Transitions practice</title>
    <style>
      .button {
        padding: .8rem 1rem;
        border: 0;
        border-radius: .75rem;
        background: #2563eb;
        color: white;
        transition: transform 180ms ease, background-color 180ms ease;
      }
      .button:hover {
        transform: translateY(-2px);
        background: #1d4ed8;
      }
    </style>
  </head>
  <body>
    <button class="button" type="button">CSS Transitions</button>
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
    <title>CSS Transitions practice</title>
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
      <caption>CSS Transitions quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>transition-property</code></td><td>chooses the animated properties</td></tr>
        <tr><td><code>transition-duration</code></td><td>sets how long the change takes</td></tr>
        <tr><td><code>transition-timing-function</code></td><td>sets easing for the change</td></tr>
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
    <title>CSS Transitions practice</title>
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
      <h1>CSS Transitions checklist</h1>
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
| `transition-property` | propertyهای animated را انتخاب می‌کند | در Transitionها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `transition-duration` | مدت تغییر را تعیین می‌کند | در Transitionها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `transition-timing-function` | easing تغییر را تعیین می‌کند | در Transitionها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Transitionها در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `transition-property` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `transitions.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `transition-property` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Animationها در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
