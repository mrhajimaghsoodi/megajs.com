---
title: "مرجع Grid در CSS"
description: "این صفحه gridهای explicit و implicit، track، line، area، auto-placement، subgrid و alignment را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "مرجع Grid در CSS — سبک MDN | MEGA JS"
seoDescription: "مرجع Grid در CSS (grid ref): مرجع MDNوار با جدول کاربرد، مثال CSS، رفتار مرورگر و نکته DevTools برای تصمیم دقیق در پروژه واقعی همراه تمرین کاربردی."
keywords: "CSS, مرجع Grid در CSS, آموزش CSS, مرجع CSS, CSS Grid reference, subgrid, grid template"
order: 13
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# مرجع Grid در CSS

مرجع Grid در CSS یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی gridهای explicit و implicit، track، line، area، auto-placement، subgrid و alignment است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، اثر cascade و رفتار مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار CSS property reference، selector reference، at-ruleها و راهنماهای layout خوانده می‌شود. هنگام استفاده از مرجع Grid در CSS، اول پشتیبانی مرورگر و computed value را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `grid-template-columns` | trackهای explicit برای column تعریف می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `grid-auto-flow` | جهت auto-placement را کنترل می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `subgrid` | trackهای grid والد را inherit می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grid Reference practice</title>
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
      <h2>Grid Reference</h2>
      <dl>
        <dt><code>grid-template-columns</code></dt>
        <dd>defines explicit column tracks</dd>
        <dt><code>grid-auto-flow</code></dt>
        <dd>controls auto-placement direction</dd>
        <dt><code>subgrid</code></dt>
        <dd>inherits parent grid tracks</dd>
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
    <title>Grid Reference practice</title>
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
      <caption>Grid Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>grid-template-columns</code></td><td>defines explicit column tracks</td></tr>
        <tr><td><code>grid-auto-flow</code></td><td>controls auto-placement direction</td></tr>
        <tr><td><code>subgrid</code></td><td>inherits parent grid tracks</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای مرجع Grid در CSS، ابتدا cascade و specificity را ساده نگه دارید و بعد سراغ override بروید.
- اگر property یا selector در همه مرورگرها یکسان نیست، progressive enhancement و fallback قابل فهم بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار CSS specification و تست واقعی در DevTools بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Grid Reference, CSSOM, browser compatibility و accessibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع طراحی واکنش‌گرا در CSS**.
