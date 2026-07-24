---
title: "مرجع Background و Border در CSS"
description: "این صفحه لایه‌های background، image، clipping، border، radius، outline و border image تزئینی را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "مرجع Background و Border در CSS — سبک MDN | MEGA JS"
seoDescription: "مرجع Background و Border در CSS (backgrounds borders ref): مرجع MDNوار با جدول کاربرد، مثال CSS، رفتار مرورگر و نکته DevTools برای تصمیم دقیق در پروژه واقعی."
keywords: "CSS, مرجع Background و Border در CSS, آموزش CSS, مرجع CSS, CSS backgrounds, CSS borders, background clip"
order: 9
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# مرجع Background و Border در CSS

مرجع Background و Border در CSS یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی لایه‌های background، image، clipping، border، radius، outline و border image تزئینی است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، اثر cascade و رفتار مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار CSS property reference، selector reference، at-ruleها و راهنماهای layout خوانده می‌شود. هنگام استفاده از مرجع Background و Border در CSS، اول پشتیبانی مرورگر و computed value را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `background-clip` | ناحیه paint را تعیین می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `background-origin` | origin جای‌گذاری image را تعیین می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `border-radius` | گوشه‌های border را گرد می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Backgrounds and Borders Reference practice</title>
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
      <h2>Backgrounds and Borders Reference</h2>
      <dl>
        <dt><code>background-clip</code></dt>
        <dd>sets the painting area</dd>
        <dt><code>background-origin</code></dt>
        <dd>sets image positioning origin</dd>
        <dt><code>border-radius</code></dt>
        <dd>rounds border corners</dd>
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
    <title>Backgrounds and Borders Reference practice</title>
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
      <caption>Backgrounds and Borders Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>background-clip</code></td><td>sets the painting area</td></tr>
        <tr><td><code>background-origin</code></td><td>sets image positioning origin</td></tr>
        <tr><td><code>border-radius</code></td><td>rounds border corners</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای مرجع Background و Border در CSS، ابتدا cascade و specificity را ساده نگه دارید و بعد سراغ override بروید.
- اگر property یا selector در همه مرورگرها یکسان نیست، progressive enhancement و fallback قابل فهم بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار CSS specification و تست واقعی در DevTools بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Backgrounds and Borders Reference, CSSOM, browser compatibility و accessibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **Display و Flow Layout در CSS**.
