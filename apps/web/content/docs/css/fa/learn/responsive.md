---
title: "CSS واکنش‌گرا / RWD"
description: "این صفحه تطبیق CSS با device، اندازه viewport، media، image، video و constraintهای framework را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش CSS واکنش‌گرا / RWD در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش CSS واکنش‌گرا / RWD (responsive): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, CSS واکنش‌گرا / RWD, آموزش CSS, مرجع CSS, CSS responsive, Responsive CSS tutorial"
order: 78
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# CSS واکنش‌گرا / RWD

CSS واکنش‌گرا / RWD درباره تطبیق CSS با device، اندازه viewport، media، image، video و constraintهای framework است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با CSS واکنش‌گرا / RWD کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `@media`: CSS را بر اساس condition دستگاه یا viewport تغییر می‌دهد.
- `viewport`: ناحیه قابل مشاهده صفحه که CSS استفاده می‌کند.
- `fluid layout`: به جای یک اندازه ثابت پیوسته تطبیق می‌یابد.
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
    <title>Responsive CSS practice</title>
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
    <title>Responsive CSS practice</title>
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
      <caption>Responsive CSS quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>@media</code></td><td>changes CSS by device or viewport condition</td></tr>
        <tr><td><code>viewport</code></td><td>the visible page area used by CSS</td></tr>
        <tr><td><code>fluid layout</code></td><td>adapts continuously rather than at one size</td></tr>
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
    <title>Responsive CSS practice</title>
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
      <h1>Responsive CSS checklist</h1>
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
| `@media` | CSS را بر اساس condition دستگاه یا viewport تغییر می‌دهد | در CSS واکنش‌گرا / RWD آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `viewport` | ناحیه قابل مشاهده صفحه که CSS استفاده می‌کند | در CSS واکنش‌گرا / RWD آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `fluid layout` | به جای یک اندازه ثابت پیوسته تطبیق می‌یابد | در CSS واکنش‌گرا / RWD آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در CSS واکنش‌گرا / RWD.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `@media` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `responsive.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `@media` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Viewport در RWD** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
