---
title: "Videoهای واکنش‌گرا در CSS"
description: "این صفحه fluid نگه داشتن videoهای embedded و native با aspect-ratio و wrapper را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Videoهای واکنش‌گرا در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Videoهای واکنش‌گرا در CSS (rwd videos): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه."
keywords: "CSS, Videoهای واکنش‌گرا در CSS, آموزش CSS, مرجع CSS, CSS RWD Videos, RWD Videos tutorial, rwd videos"
order: 83
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Videoهای واکنش‌گرا در CSS

Videoهای واکنش‌گرا در CSS درباره fluid نگه داشتن videoهای embedded و native با aspect-ratio و wrapper است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Videoهای واکنش‌گرا در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `aspect-ratio: 16 / 9`: شکل responsive ویدیو را رزرو می‌کند.
- `width: 100%`: media را تابع عرض container می‌کند.
- `iframe`: اغلب به wrapper responsive نیاز دارد.
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
    <title>RWD Videos practice</title>
    <style>
      .video {
        aspect-ratio: 16 / 9;
        width: 100%;
        background: #0f172a;
        color: white;
        display: grid;
        place-items: center;
      }
    </style>
  </head>
  <body>
    <div class="video">Responsive video frame</div>
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
    <title>RWD Videos practice</title>
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
      <caption>RWD Videos quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>aspect-ratio: 16 / 9</code></td><td>reserves responsive video shape</td></tr>
        <tr><td><code>width: 100%</code></td><td>makes media follow container width</td></tr>
        <tr><td><code>iframe</code></td><td>often needs a responsive wrapper</td></tr>
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
    <title>RWD Videos practice</title>
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
      <h1>RWD Videos checklist</h1>
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
| `aspect-ratio: 16 / 9` | شکل responsive ویدیو را رزرو می‌کند | در Videoهای واکنش‌گرا در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `width: 100%` | media را تابع عرض container می‌کند | در Videoهای واکنش‌گرا در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `iframe` | اغلب به wrapper responsive نیاز دارد | در Videoهای واکنش‌گرا در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Videoهای واکنش‌گرا در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `aspect-ratio: 16 / 9` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `rwd-videos.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `aspect-ratio: 16 / 9` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Frameworkهای RWD** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
