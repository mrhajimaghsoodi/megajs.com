---
title: "Specificity و Cascade"
description: "این صفحه وزن selector، cascade layer، source order و استراتژی override نگه‌داری‌پذیر را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "مرجع Specificity و Cascade — سبک MDN | MEGA JS"
seoDescription: "مرجع Specificity و Cascade (specificity cascade): مرجع MDNوار با جدول کاربرد، مثال CSS، رفتار مرورگر و نکته DevTools برای تصمیم دقیق در پروژه واقعی."
keywords: "CSS, Specificity و Cascade, آموزش CSS, مرجع CSS, CSS specificity, cascade layers, CSS order"
order: 4
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Specificity و Cascade

Specificity و Cascade یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی وزن selector، cascade layer، source order و استراتژی override نگه‌داری‌پذیر است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، اثر cascade و رفتار مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار CSS property reference، selector reference، at-ruleها و راهنماهای layout خوانده می‌شود. هنگام استفاده از Specificity و Cascade، اول پشتیبانی مرورگر و computed value را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `specificity` | وزن selector در cascade | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `@layer` | priority ruleها را با layerهای نام‌دار سازمان می‌دهد | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `source order` | وقتی priority برابر است tie را می‌شکند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Specificity and Cascade practice</title>
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
      <h2>Specificity and Cascade</h2>
      <dl>
        <dt><code>specificity</code></dt>
        <dd>selector weight in the cascade</dd>
        <dt><code>@layer</code></dt>
        <dd>organizes rule priority by named layers</dd>
        <dt><code>source order</code></dt>
        <dd>breaks ties when priority is otherwise equal</dd>
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
    <title>Specificity and Cascade practice</title>
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
      <caption>Specificity and Cascade quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>specificity</code></td><td>selector weight in the cascade</td></tr>
        <tr><td><code>@layer</code></td><td>organizes rule priority by named layers</td></tr>
        <tr><td><code>source order</code></td><td>breaks ties when priority is otherwise equal</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای Specificity و Cascade، ابتدا cascade و specificity را ساده نگه دارید و بعد سراغ override بروید.
- اگر property یا selector در همه مرورگرها یکسان نیست، progressive enhancement و fallback قابل فهم بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار CSS specification و تست واقعی در DevTools بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Specificity and Cascade, CSSOM, browser compatibility و accessibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع Box Model در CSS**.
