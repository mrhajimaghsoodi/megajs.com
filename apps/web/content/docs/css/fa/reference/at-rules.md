---
title: "مرجع At-ruleهای CSS"
description: "این صفحه ruleهای conditional، grouping، import، font، keyframes، layer، container، media و support را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "مرجع At-ruleهای CSS — سبک MDN | MEGA JS"
seoDescription: "مرجع At-ruleهای CSS (at rules): مرجع MDNوار با جدول کاربرد، مثال CSS، رفتار مرورگر و نکته DevTools برای تصمیم دقیق در پروژه واقعی همراه تمرین کاربردی."
keywords: "CSS, مرجع At-ruleهای CSS, آموزش CSS, مرجع CSS, CSS at-rules, @media, @supports"
order: 21
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# مرجع At-ruleهای CSS

مرجع At-ruleهای CSS یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی ruleهای conditional، grouping، import، font، keyframes، layer، container، media و support است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، اثر cascade و رفتار مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار CSS property reference، selector reference، at-ruleها و راهنماهای layout خوانده می‌شود. هنگام استفاده از مرجع At-ruleهای CSS، اول پشتیبانی مرورگر و computed value را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `@media` | ruleها را بر اساس media condition گروه می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `@supports` | پیش از اعمال CSS پشتیبانی feature را تست می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `@font-face` | font face قابل دانلود تعریف می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS At-rules Reference practice</title>
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
      <h2>CSS At-rules Reference</h2>
      <dl>
        <dt><code>@media</code></dt>
        <dd>groups rules by media condition</dd>
        <dt><code>@supports</code></dt>
        <dd>tests feature support before applying CSS</dd>
        <dt><code>@font-face</code></dt>
        <dd>defines downloadable font faces</dd>
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
    <title>CSS At-rules Reference practice</title>
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
      <caption>CSS At-rules Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>@media</code></td><td>groups rules by media condition</td></tr>
        <tr><td><code>@supports</code></td><td>tests feature support before applying CSS</td></tr>
        <tr><td><code>@font-face</code></td><td>defines downloadable font faces</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای مرجع At-ruleهای CSS، ابتدا cascade و specificity را ساده نگه دارید و بعد سراغ override بروید.
- اگر property یا selector در همه مرورگرها یکسان نیست، progressive enhancement و fallback قابل فهم بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار CSS specification و تست واقعی در DevTools بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره CSS At-rules Reference, CSSOM, browser compatibility و accessibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع Functionهای CSS**.
