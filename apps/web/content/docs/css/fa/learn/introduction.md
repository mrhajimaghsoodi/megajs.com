---
title: "مقدمه CSS"
description: "این صفحه اینکه CSS چه می‌کند، ruleها چگونه به elementها می‌رسند و cascade چگونه declarationها را به computed style تبدیل می‌کند را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش مقدمه CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش مقدمه CSS (introduction): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, مقدمه CSS, آموزش CSS, مرجع CSS, CSS introduction, CSS tutorial, cascade computed style"
order: 1
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# مقدمه CSS

مقدمه CSS درباره اینکه CSS چه می‌کند، ruleها چگونه به elementها می‌رسند و cascade چگونه declarationها را به computed style تبدیل می‌کند است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با مقدمه CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `selector { property: value; }`: یک selector را به یک یا چند declaration وصل می‌کند.
- `cascade`: از میان ruleهای رقیب declaration برنده را انتخاب می‌کند.
- `computed style`: مقدار نهایی است که مرورگر بعد از resolve کردن CSS اعمال می‌کند.
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
    <title>Introduction to CSS practice</title>
    <style>
      :root {
        color-scheme: light dark;
        --accent: #2563eb;
      }
      main {
        max-width: 44rem;
        margin-inline: auto;
        padding: 2rem;
      }
      h1 {
        color: var(--accent);
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Introduction to CSS</h1>
      <p>CSS rules cascade from selectors into computed style.</p>
    </main>
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
    <title>Introduction to CSS practice</title>
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
      <caption>Introduction to CSS quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>selector { property: value; }</code></td><td>connects a selector to one or more declarations</td></tr>
        <tr><td><code>cascade</code></td><td>chooses the winning declaration from competing rules</td></tr>
        <tr><td><code>computed style</code></td><td>the final value the browser applies after resolving CSS</td></tr>
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
    <title>Introduction to CSS practice</title>
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
      <h1>Introduction to CSS checklist</h1>
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
| `selector { property: value; }` | یک selector را به یک یا چند declaration وصل می‌کند | در مقدمه CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `cascade` | از میان ruleهای رقیب declaration برنده را انتخاب می‌کند | در مقدمه CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `computed style` | مقدار نهایی است که مرورگر بعد از resolve کردن CSS اعمال می‌کند | در مقدمه CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در مقدمه CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `selector { property: value; }` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `introduction.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `selector { property: value; }` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **مبانی syntax در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
