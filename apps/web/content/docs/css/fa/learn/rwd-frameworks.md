---
title: "Frameworkهای RWD"
description: "این صفحه درک اینکه utility framework و component system چگونه تصمیم‌های responsive CSS را encode می‌کنند را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Frameworkهای RWD در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Frameworkهای RWD (rwd frameworks): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Frameworkهای RWD, آموزش CSS, مرجع CSS, CSS RWD Frameworks, RWD Frameworks tutorial, rwd frameworks"
order: 84
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Frameworkهای RWD

Frameworkهای RWD درباره درک اینکه utility framework و component system چگونه تصمیم‌های responsive CSS را encode می‌کنند است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Frameworkهای RWD کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `breakpoints`: rangeهای viewport نام‌دار تعریف می‌کند.
- `container query`: به اندازه container component واکنش می‌دهد.
- `utility class`: یک تصمیم style را به class نگاشت می‌کند.
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
    <title>RWD Frameworks practice</title>
    <style>
      .card-shell {
        container-type: inline-size;
      }
      .card {
        padding: 1rem;
        background: #f8fafc;
      }
      @container (min-width: 28rem) {
        .card {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 1rem;
        }
      }
    </style>
  </head>
  <body>
    <div class="card-shell">
      <article class="card">
        <strong>RWD Frameworks</strong>
        <p>Resize the container, not just the viewport.</p>
      </article>
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
    <title>RWD Frameworks practice</title>
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
      <caption>RWD Frameworks quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>breakpoints</code></td><td>define named viewport ranges</td></tr>
        <tr><td><code>container query</code></td><td>responds to component container size</td></tr>
        <tr><td><code>utility class</code></td><td>maps one style decision to a class</td></tr>
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
    <title>RWD Frameworks practice</title>
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
      <h1>RWD Frameworks checklist</h1>
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
| `breakpoints` | rangeهای viewport نام‌دار تعریف می‌کند | در Frameworkهای RWD آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `container query` | به اندازه container component واکنش می‌دهد | در Frameworkهای RWD آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `utility class` | یک تصمیم style را به class نگاشت می‌کند | در Frameworkهای RWD آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Frameworkهای RWD.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `breakpoints` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `rwd-frameworks.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `breakpoints` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

در پایان مسیر learn، وارد track مرجع شوید و همین موضوعات را با نگاه دقیق‌تر MDN بررسی کنید.
