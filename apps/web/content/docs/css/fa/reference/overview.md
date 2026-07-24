---
title: "نمای کلی مرجع CSS"
description: "این صفحه اینکه مرجع CSS به سبک MDN چگونه property، selector، value، at-rule و moduleها را سازمان می‌دهد را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "مرجع نمای کلی مرجع CSS — سبک MDN | MEGA JS"
seoDescription: "مرجع نمای کلی مرجع CSS (overview): مرجع MDNوار با جدول کاربرد، مثال CSS، رفتار مرورگر و نکته DevTools برای تصمیم دقیق در پروژه واقعی همراه تمرین کاربردی."
keywords: "CSS, نمای کلی مرجع CSS, آموزش CSS, مرجع CSS, CSS reference, MDN CSS, CSS docs"
order: 1
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# نمای کلی مرجع CSS

نمای کلی مرجع CSS یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی اینکه مرجع CSS به سبک MDN چگونه property، selector، value، at-rule و moduleها را سازمان می‌دهد است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، اثر cascade و رفتار مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار CSS property reference، selector reference، at-ruleها و راهنماهای layout خوانده می‌شود. هنگام استفاده از نمای کلی مرجع CSS، اول پشتیبانی مرورگر و computed value را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `property` | ویژگی CSS که value می‌پذیرد | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `descriptor` | نام شبیه declaration داخل بعضی at-ruleها | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `module` | حوزه specification مثل Color یا Grid | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Reference Overview practice</title>
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
      <h2>CSS Reference Overview</h2>
      <dl>
        <dt><code>property</code></dt>
        <dd>a CSS feature that accepts values</dd>
        <dt><code>descriptor</code></dt>
        <dd>a declaration-like name inside some at-rules</dd>
        <dt><code>module</code></dt>
        <dd>a specification area such as Color or Grid</dd>
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
    <title>CSS Reference Overview practice</title>
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
      <caption>CSS Reference Overview quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>property</code></td><td>a CSS feature that accepts values</td></tr>
        <tr><td><code>descriptor</code></td><td>a declaration-like name inside some at-rules</td></tr>
        <tr><td><code>module</code></td><td>a specification area such as Color or Grid</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای نمای کلی مرجع CSS، ابتدا cascade و specificity را ساده نگه دارید و بعد سراغ override بروید.
- اگر property یا selector در همه مرورگرها یکسان نیست، progressive enhancement و fallback قابل فهم بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار CSS specification و تست واقعی در DevTools بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره CSS Reference Overview, CSSOM, browser compatibility و accessibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **Cascade و Inheritance**.
