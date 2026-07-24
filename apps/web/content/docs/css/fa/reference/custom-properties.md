---
title: "Custom propertyها در CSS"
description: "این صفحه variableهای CSS، inheritance، fallback value، design token، theming runtime و API componentها را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "مرجع Custom propertyها در CSS — سبک MDN | MEGA JS"
seoDescription: "مرجع Custom propertyها در CSS (custom properties): مرجع MDNوار با جدول کاربرد، مثال CSS، رفتار مرورگر و نکته DevTools برای تصمیم دقیق در پروژه واقعی."
keywords: "CSS, Custom propertyها در CSS, آموزش CSS, مرجع CSS, CSS variables, custom properties, @property"
order: 17
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Custom propertyها در CSS

Custom propertyها در CSS یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی variableهای CSS، inheritance، fallback value، design token، theming runtime و API componentها است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، اثر cascade و رفتار مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار CSS property reference، selector reference، at-ruleها و راهنماهای layout خوانده می‌شود. هنگام استفاده از Custom propertyها در CSS، اول پشتیبانی مرورگر و computed value را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `--space-4` | یک token custom property اعلام می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `var(--space-4, 1rem)` | token را همراه fallback می‌خواند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `@property` | custom property typed ثبت می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Properties practice</title>
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
      <h2>Custom Properties</h2>
      <dl>
        <dt><code>--space-4</code></dt>
        <dd>declares a custom property token</dd>
        <dt><code>var(--space-4, 1rem)</code></dt>
        <dd>reads a token with fallback</dd>
        <dt><code>@property</code></dt>
        <dd>registers typed custom properties</dd>
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
    <title>Custom Properties practice</title>
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
      <caption>Custom Properties quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>--space-4</code></td><td>declares a custom property token</td></tr>
        <tr><td><code>var(--space-4, 1rem)</code></td><td>reads a token with fallback</td></tr>
        <tr><td><code>@property</code></td><td>registers typed custom properties</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای Custom propertyها در CSS، ابتدا cascade و specificity را ساده نگه دارید و بعد سراغ override بروید.
- اگر property یا selector در همه مرورگرها یکسان نیست، progressive enhancement و fallback قابل فهم بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار CSS specification و تست واقعی در DevTools بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Custom Properties, CSSOM, browser compatibility و accessibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **Cascade layerها در CSS**.
