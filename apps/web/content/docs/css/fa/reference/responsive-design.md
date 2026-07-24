---
title: "مرجع طراحی واکنش‌گرا در CSS"
description: "این صفحه media query، container query، unitهای viewport، typography fluid، image و تصمیم‌های adaptive layout را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "مرجع طراحی واکنش‌گرا در CSS — سبک MDN | MEGA JS"
seoDescription: "مرجع طراحی واکنش‌گرا در CSS (responsive design): مرجع MDNوار با جدول کاربرد، مثال CSS، رفتار مرورگر و نکته DevTools برای تصمیم دقیق در پروژه واقعی."
keywords: "CSS, مرجع طراحی واکنش‌گرا در CSS, آموزش CSS, مرجع CSS, responsive CSS, media queries, container queries"
order: 14
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# مرجع طراحی واکنش‌گرا در CSS

مرجع طراحی واکنش‌گرا در CSS یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی media query، container query، unitهای viewport، typography fluid، image و تصمیم‌های adaptive layout است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، اثر cascade و رفتار مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار CSS property reference، selector reference، at-ruleها و راهنماهای layout خوانده می‌شود. هنگام استفاده از مرجع طراحی واکنش‌گرا در CSS، اول پشتیبانی مرورگر و computed value را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `@media` | CSS را بر اساس media condition اعمال می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `@container` | CSS را بر اساس container condition اعمال می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `clamp()` | مقدارهای fluid را محدود نگه می‌دارد | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Design Reference practice</title>
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
      <h2>Responsive Design Reference</h2>
      <dl>
        <dt><code>@media</code></dt>
        <dd>applies CSS by media condition</dd>
        <dt><code>@container</code></dt>
        <dd>applies CSS by container condition</dd>
        <dt><code>clamp()</code></dt>
        <dd>keeps fluid values bounded</dd>
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
    <title>Responsive Design Reference practice</title>
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
      <caption>Responsive Design Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>@media</code></td><td>applies CSS by media condition</td></tr>
        <tr><td><code>@container</code></td><td>applies CSS by container condition</td></tr>
        <tr><td><code>clamp()</code></td><td>keeps fluid values bounded</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای مرجع طراحی واکنش‌گرا در CSS، ابتدا cascade و specificity را ساده نگه دارید و بعد سراغ override بروید.
- اگر property یا selector در همه مرورگرها یکسان نیست، progressive enhancement و fallback قابل فهم بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار CSS specification و تست واقعی در DevTools بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Responsive Design Reference, CSSOM, browser compatibility و accessibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع Transform در CSS**.
