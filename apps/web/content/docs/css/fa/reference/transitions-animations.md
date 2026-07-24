---
title: "Transition و Animation در CSS"
description: "این صفحه transition state، keyframe، timing function، preference motion، performance و composition را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "مرجع Transition و Animation در CSS — سبک MDN | MEGA JS"
seoDescription: "مرجع Transition و Animation در CSS (transitions animations): مرجع MDNوار با جدول کاربرد، مثال CSS، رفتار مرورگر و نکته DevTools برای تصمیم دقیق در پروژه واقعی."
keywords: "CSS, Transition و Animation در CSS, آموزش CSS, مرجع CSS, CSS animations, CSS transitions, reduced motion"
order: 16
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Transition و Animation در CSS

Transition و Animation در CSS یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی transition state، keyframe، timing function، preference motion، performance و composition است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، اثر cascade و رفتار مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار CSS property reference، selector reference، at-ruleها و راهنماهای layout خوانده می‌شود. هنگام استفاده از Transition و Animation در CSS، اول پشتیبانی مرورگر و computed value را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `transition` | تغییر بین stateها را animate می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `@keyframes` | stepهای timeline animation را تعریف می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `prefers-reduced-motion` | preference کاهش motion را تشخیص می‌دهد | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Transitions and Animations practice</title>
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
      <h2>Transitions and Animations</h2>
      <dl>
        <dt><code>transition</code></dt>
        <dd>animates a change between states</dd>
        <dt><code>@keyframes</code></dt>
        <dd>defines animation timeline steps</dd>
        <dt><code>prefers-reduced-motion</code></dt>
        <dd>detects reduced motion preference</dd>
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
    <title>Transitions and Animations practice</title>
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
      <caption>Transitions and Animations quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>transition</code></td><td>animates a change between states</td></tr>
        <tr><td><code>@keyframes</code></td><td>defines animation timeline steps</td></tr>
        <tr><td><code>prefers-reduced-motion</code></td><td>detects reduced motion preference</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای Transition و Animation در CSS، ابتدا cascade و specificity را ساده نگه دارید و بعد سراغ override بروید.
- اگر property یا selector در همه مرورگرها یکسان نیست، progressive enhancement و fallback قابل فهم بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار CSS specification و تست واقعی در DevTools بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Transitions and Animations, CSSOM, browser compatibility و accessibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **Custom propertyها در CSS**.
