---
title: "مرجع Box Model در CSS"
description: "این صفحه تولید box، dimensionها، margin collapse، padding، border، outline و box-sizing را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "مرجع Box Model در CSS — سبک MDN | MEGA JS"
seoDescription: "مرجع Box Model در CSS (box model ref): مرجع MDNوار با جدول کاربرد، مثال CSS، رفتار مرورگر و نکته DevTools برای تصمیم دقیق در پروژه واقعی همراه تمرین کاربردی."
keywords: "CSS, مرجع Box Model در CSS, آموزش CSS, مرجع CSS, CSS box model, box sizing, margin collapse"
order: 5
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# مرجع Box Model در CSS

مرجع Box Model در CSS یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی تولید box، dimensionها، margin collapse، padding، border، outline و box-sizing است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، اثر cascade و رفتار مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار CSS property reference، selector reference، at-ruleها و راهنماهای layout خوانده می‌شود. هنگام استفاده از مرجع Box Model در CSS، اول پشتیبانی مرورگر و computed value را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `content-box` | فقط ناحیه content را size می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `border-box` | padding و border را در dimensionها حساب می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `margin collapse` | marginهای عمودی در normal flow ترکیب می‌شوند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Box Model Reference practice</title>
    <style>
      .reference-card {
        max-width: 42rem;
        padding: 1rem;
        border: 1px solid #cbd5e1;
        border-radius: .75rem;
      }
      dt {
        font-weight: 700;
        color: #2563eb;
      }
      dd {
        margin-block-end: .75rem;
      }
    </style>
  </head>
  <body>
    <article class="reference-card">
      <h2>CSS Box Model Reference</h2>
      <dl>
        <dt><code>content-box</code></dt>
        <dd>sizes only the content area</dd>
        <dt><code>border-box</code></dt>
        <dd>includes padding and border in dimensions</dd>
        <dt><code>margin collapse</code></dt>
        <dd>vertical margins combine in normal flow</dd>
      </dl>
    </article>
  </body>
</html>
```

### مثال 2

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Box Model Reference practice</title>
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
      <caption>CSS Box Model Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>content-box</code></td><td>sizes only the content area</td></tr>
        <tr><td><code>border-box</code></td><td>includes padding and border in dimensions</td></tr>
        <tr><td><code>margin collapse</code></td><td>vertical margins combine in normal flow</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای مرجع Box Model در CSS، ابتدا cascade و specificity را ساده نگه دارید و بعد سراغ override بروید.
- اگر property یا selector در همه مرورگرها یکسان نیست، progressive enhancement و fallback قابل فهم بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار CSS specification و تست واقعی در DevTools بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره CSS Box Model Reference, CSSOM, browser compatibility و accessibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **Valueها و Unitهای CSS**.
