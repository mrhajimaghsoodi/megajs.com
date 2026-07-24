---
title: "Display و Flow Layout در CSS"
description: "این صفحه valueهای display، formatting block و inline، flow-root، float، fragmentation و normal flow را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "مرجع Display و Flow Layout در CSS — سبک MDN | MEGA JS"
seoDescription: "مرجع Display و Flow Layout در CSS (display flow): مرجع MDNوار با جدول کاربرد، مثال CSS، رفتار مرورگر و نکته DevTools برای تصمیم دقیق در پروژه واقعی."
keywords: "CSS, Display و Flow Layout در CSS, آموزش CSS, مرجع CSS, CSS display, flow layout, normal flow"
order: 10
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Display و Flow Layout در CSS

Display و Flow Layout در CSS یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی valueهای display، formatting block و inline، flow-root، float، fragmentation و normal flow است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، اثر cascade و رفتار مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار CSS property reference، selector reference، at-ruleها و راهنماهای layout خوانده می‌شود. هنگام استفاده از Display و Flow Layout در CSS، اول پشتیبانی مرورگر و computed value را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `display` | رفتار داخلی و بیرونی box را کنترل می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `flow-root` | یک block formatting context جدید می‌سازد | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `normal flow` | layout پیش‌فرض قبل از positioning یا float | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display and Flow Layout practice</title>
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
      <h2>Display and Flow Layout</h2>
      <dl>
        <dt><code>display</code></dt>
        <dd>controls internal and external box behavior</dd>
        <dt><code>flow-root</code></dt>
        <dd>creates a new block formatting context</dd>
        <dt><code>normal flow</code></dt>
        <dd>default layout before positioning or floats</dd>
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
    <title>Display and Flow Layout practice</title>
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
      <caption>Display and Flow Layout quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>display</code></td><td>controls internal and external box behavior</td></tr>
        <tr><td><code>flow-root</code></td><td>creates a new block formatting context</td></tr>
        <tr><td><code>normal flow</code></td><td>default layout before positioning or floats</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای Display و Flow Layout در CSS، ابتدا cascade و specificity را ساده نگه دارید و بعد سراغ override بروید.
- اگر property یا selector در همه مرورگرها یکسان نیست، progressive enhancement و fallback قابل فهم بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار CSS specification و تست واقعی در DevTools بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Display and Flow Layout, CSSOM, browser compatibility و accessibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع Positioning در CSS**.
