---
title: "Float در CSS"
description: "این صفحه درک layout قدیمی float، wrap شدن متن و clearing را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش Float در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Float در CSS (float): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی همراه تمرین."
keywords: "CSS, Float در CSS, آموزش CSS, مرجع CSS, CSS Float, Float tutorial, float"
order: 29
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Float در CSS

Float در CSS درباره درک layout قدیمی float، wrap شدن متن و clearing است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با Float در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `float: inline-start`: box را به سمت شروع logical float می‌کند.
- `clear: both`: زیر floatهای قبلی می‌رود.
- `flow-root`: floatها را بدون clearfix hack نگه می‌دارد.
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
    <title>CSS Float practice</title>
    <style>
      .article {
        display: flow-root;
      }
      img {
        float: inline-start;
        width: 8rem;
        margin-inline-end: 1rem;
        border-radius: .75rem;
      }
    </style>
  </head>
  <body>
    <article class="article">
      <img src="https://placehold.co/160x120" alt="CSS float example">
      <p>Text wraps around the floated image, while flow-root contains the float.</p>
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
    <title>CSS Float practice</title>
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
      <caption>CSS Float quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>float: inline-start</code></td><td>floats a box to the logical start side</td></tr>
        <tr><td><code>clear: both</code></td><td>moves below previous floats</td></tr>
        <tr><td><code>flow-root</code></td><td>contains floats without clearfix hacks</td></tr>
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
    <title>CSS Float practice</title>
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
      <h1>CSS Float checklist</h1>
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
| `float: inline-start` | box را به سمت شروع logical float می‌کند | در Float در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `clear: both` | زیر floatهای قبلی می‌رود | در Float در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `flow-root` | floatها را بدون clearfix hack نگه می‌دارد | در Float در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در Float در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `float: inline-start` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `float.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `float: inline-start` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Inline-block در CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
