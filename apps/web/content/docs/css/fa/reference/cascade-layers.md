---
title: "Cascade layerها در CSS"
description: "این صفحه استفاده از @layer برای تعریف گروه‌های priority قابل پیش‌بینی قبل از conflictهای specificity و source order را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "مرجع Cascade layerها در CSS — سبک MDN | MEGA JS"
seoDescription: "مرجع Cascade layerها در CSS (cascade layers): مرجع MDNوار با جدول کاربرد، مثال CSS، رفتار مرورگر و نکته DevTools برای تصمیم دقیق در پروژه واقعی همراه تمرین."
keywords: "CSS, Cascade layerها در CSS, آموزش CSS, مرجع CSS, CSS cascade layers, @layer, CSS architecture"
order: 18
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Cascade layerها در CSS

Cascade layerها در CSS یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی استفاده از @layer برای تعریف گروه‌های priority قابل پیش‌بینی قبل از conflictهای specificity و source order است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، اثر cascade و رفتار مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار CSS property reference، selector reference، at-ruleها و راهنماهای layout خوانده می‌شود. هنگام استفاده از Cascade layerها در CSS، اول پشتیبانی مرورگر و computed value را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `@layer reset, base, components` | ترتیب layerها را اعلام می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `@layer components` | ruleها را داخل layer نام‌دار می‌گذارد | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `unlayered rules` | از ruleهای normal داخل layer بالاترند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cascade Layers practice</title>
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
      <h2>Cascade Layers</h2>
      <dl>
        <dt><code>@layer reset, base, components</code></dt>
        <dd>declares layer order</dd>
        <dt><code>@layer components</code></dt>
        <dd>places rules inside a named layer</dd>
        <dt><code>unlayered rules</code></dt>
        <dd>outrank normal layered rules</dd>
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
    <title>Cascade Layers practice</title>
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
      <caption>Cascade Layers quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>@layer reset, base, components</code></td><td>declares layer order</td></tr>
        <tr><td><code>@layer components</code></td><td>places rules inside a named layer</td></tr>
        <tr><td><code>unlayered rules</code></td><td>outrank normal layered rules</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای Cascade layerها در CSS، ابتدا cascade و specificity را ساده نگه دارید و بعد سراغ override بروید.
- اگر property یا selector در همه مرورگرها یکسان نیست، progressive enhancement و fallback قابل فهم بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار CSS specification و تست واقعی در DevTools بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Cascade Layers, CSSOM, browser compatibility و accessibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **Container queryها در CSS**.
