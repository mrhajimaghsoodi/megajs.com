---
title: "مرجع Transform در CSS"
description: "این صفحه functionهای transform دوبعدی و سه‌بعدی، transform-origin، matrix، perspective و اثرهای compositing را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "مرجع Transform در CSS — سبک MDN | MEGA JS"
seoDescription: "مرجع Transform در CSS (transforms ref): مرجع MDNوار با جدول کاربرد، مثال CSS، رفتار مرورگر و نکته DevTools برای تصمیم دقیق در پروژه واقعی همراه تمرین کاربردی."
keywords: "CSS, مرجع Transform در CSS, آموزش CSS, مرجع CSS, CSS transforms, 2D transforms, 3D transforms"
order: 15
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# مرجع Transform در CSS

مرجع Transform در CSS یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی functionهای transform دوبعدی و سه‌بعدی، transform-origin، matrix، perspective و اثرهای compositing است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، اثر cascade و رفتار مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار CSS property reference، selector reference، at-ruleها و راهنماهای layout خوانده می‌شود. هنگام استفاده از مرجع Transform در CSS، اول پشتیبانی مرورگر و computed value را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `translate()` | box را به شکل visual جابه‌جا می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `matrix()` | یک matrix transform را نمایش می‌دهد | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `perspective()` | در فضای transform عمق اضافه می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transforms Reference practice</title>
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
      <h2>Transforms Reference</h2>
      <dl>
        <dt><code>translate()</code></dt>
        <dd>moves a box visually</dd>
        <dt><code>matrix()</code></dt>
        <dd>represents a transform matrix</dd>
        <dt><code>perspective()</code></dt>
        <dd>adds depth in transform space</dd>
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
    <title>Transforms Reference practice</title>
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
      <caption>Transforms Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>translate()</code></td><td>moves a box visually</td></tr>
        <tr><td><code>matrix()</code></td><td>represents a transform matrix</td></tr>
        <tr><td><code>perspective()</code></td><td>adds depth in transform space</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای مرجع Transform در CSS، ابتدا cascade و specificity را ساده نگه دارید و بعد سراغ override بروید.
- اگر property یا selector در همه مرورگرها یکسان نیست، progressive enhancement و fallback قابل فهم بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار CSS specification و تست واقعی در DevTools بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Transforms Reference, CSSOM, browser compatibility و accessibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **Transition و Animation در CSS**.
