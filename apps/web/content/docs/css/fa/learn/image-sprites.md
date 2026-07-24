---
title: "Image sprite در CSS"
description: "این صفحه استفاده از یک فایل image با background-position برای iconهای کوچک و optimization قدیمی را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Image sprite در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Image sprite در CSS (image sprites): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, Image sprite در CSS, آموزش CSS, مرجع CSS, CSS Image Sprites, Image Sprites tutorial, image sprites"
order: 40
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Image sprite در CSS

Image sprite در CSS درباره استفاده از یک فایل image با background-position برای iconهای کوچک و optimization قدیمی است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Image sprite در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `background-position`: sprite sheet را پشت box جابه‌جا می‌کند.
- `background-size`: sprite sheet را قابل پیش‌بینی scale می‌کند.
- `width / height`: viewport icon را تعیین می‌کند.
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
    <title>CSS Image Sprites practice</title>
    <style>
      .demo {
        padding: 1rem;
        border-radius: .75rem;
        background: #f8fafc;
      }
      .demo code {
        color: #2563eb;
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <section class="demo">
      <h2>CSS Image Sprites</h2>
      <p>Try changing <code>background-position</code> and inspect the computed style.</p>
    </section>
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
    <title>CSS Image Sprites practice</title>
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
      <caption>CSS Image Sprites quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>background-position</code></td><td>moves the sprite sheet behind the box</td></tr>
        <tr><td><code>background-size</code></td><td>scales the sprite sheet predictably</td></tr>
        <tr><td><code>width / height</code></td><td>sets the icon viewport</td></tr>
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
    <title>CSS Image Sprites practice</title>
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
      <h1>CSS Image Sprites checklist</h1>
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
| `background-position` | sprite sheet را پشت box جابه‌جا می‌کند | در Image sprite در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `background-size` | sprite sheet را قابل پیش‌بینی scale می‌کند | در Image sprite در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `width / height` | viewport icon را تعیین می‌کند | در Image sprite در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Image sprite در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `background-position` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `image-sprites.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `background-position` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Selectorهای attribute در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
