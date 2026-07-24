---
title: "Selectorها در CSS"
description: "این صفحه انتخاب elementها با type، class، id، attribute، state و رابطه را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Selectorها در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Selectorها در CSS (selectors): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Selectorها در CSS, آموزش CSS, مرجع CSS, CSS Selectors, Selectors tutorial, selectors"
order: 4
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Selectorها در CSS

Selectorها در CSS درباره انتخاب elementها با type، class، id، attribute، state و رابطه است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Selectorها در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `.card`: elementهای دارای class کارت را انتخاب می‌کند.
- `#main`: element دارای id یکتا را انتخاب می‌کند.
- `article > h2`: headingهای فرزند مستقیم را انتخاب می‌کند.
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
    <title>CSS Selectors practice</title>
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
      <h2>CSS Selectors</h2>
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
    <title>CSS Selectors practice</title>
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
      <caption>CSS Selectors quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>.card</code></td><td>selects elements with a card class</td></tr>
        <tr><td><code>#main</code></td><td>selects the element with a unique id</td></tr>
        <tr><td><code>article &gt; h2</code></td><td>selects direct child headings</td></tr>
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
    <title>CSS Selectors practice</title>
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
      <h1>CSS Selectors checklist</h1>
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
| `.card` | elementهای دارای class کارت را انتخاب می‌کند | در Selectorها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `#main` | element دارای id یکتا را انتخاب می‌کند | در Selectorها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `article > h2` | headingهای فرزند مستقیم را انتخاب می‌کند | در Selectorها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Selectorها در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `.card` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `selectors.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `.card` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **روش افزودن CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
