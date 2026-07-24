---
title: "Web fontها در CSS"
description: "این صفحه load کردن font سفارشی با @font-face، fallback، weight، استراتژی display و توجه به performance را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Web fontها در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Web fontها در CSS (web fonts): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Web fontها در CSS, آموزش CSS, مرجع CSS, CSS Web Fonts, Web Fonts tutorial, web fonts"
order: 55
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Web fontها در CSS

Web fontها در CSS درباره load کردن font سفارشی با @font-face، fallback، weight، استراتژی display و توجه به performance است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Web fontها در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `@font-face`: یک font family قابل دانلود تعریف می‌کند.
- `font-display`: رفتار swap و fallback را کنترل می‌کند.
- `woff2`: فرمت modern و فشرده web font.
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
    <title>CSS Web Fonts practice</title>
    <style>
      .prose {
        max-width: 62ch;
        font-family: system-ui, sans-serif;
        font-size: clamp(1rem, 2vw, 1.25rem);
        line-height: 1.7;
      }
    </style>
  </head>
  <body>
    <article class="prose">
      <h2>CSS Web Fonts</h2>
      <p>Readable CSS typography balances font-size, line-height, and line length.</p>
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
    <title>CSS Web Fonts practice</title>
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
      <caption>CSS Web Fonts quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>@font-face</code></td><td>defines a downloadable font family</td></tr>
        <tr><td><code>font-display</code></td><td>controls swap and fallback behavior</td></tr>
        <tr><td><code>woff2</code></td><td>modern compressed web font format</td></tr>
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
    <title>CSS Web Fonts practice</title>
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
      <h1>CSS Web Fonts checklist</h1>
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
| `@font-face` | یک font family قابل دانلود تعریف می‌کند | در Web fontها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `font-display` | رفتار swap و fallback را کنترل می‌کند | در Web fontها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `woff2` | فرمت modern و فشرده web font | در Web fontها در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Web fontها در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `@font-face` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `web-fonts.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `@font-face` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Transformهای دوبعدی CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
