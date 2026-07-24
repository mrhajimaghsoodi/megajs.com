---
title: "Valueها و Unitهای CSS"
description: "این صفحه number، dimension، درصد، length، angle، time، function و valueهای typed در CSS را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "مرجع Valueها و Unitهای CSS — سبک MDN | MEGA JS"
seoDescription: "مرجع Valueها و Unitهای CSS (values units): مرجع MDNوار با جدول کاربرد، مثال CSS، رفتار مرورگر و نکته DevTools برای تصمیم دقیق در پروژه واقعی همراه تمرین."
keywords: "CSS, Valueها و Unitهای CSS, آموزش CSS, مرجع CSS, CSS values, CSS units, rem em clamp"
order: 6
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Valueها و Unitهای CSS

Valueها و Unitهای CSS یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی number، dimension، درصد، length، angle، time، function و valueهای typed در CSS است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، اثر cascade و رفتار مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار CSS property reference، selector reference، at-ruleها و راهنماهای layout خوانده می‌شود. هنگام استفاده از Valueها و Unitهای CSS، اول پشتیبانی مرورگر و computed value را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `rem` | unit طول نسبی به root | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `clamp()` | یک مقدار preferred را محدود می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `<length-percentage>` | length یا درصد می‌پذیرد | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Values and Units practice</title>
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
      <h2>CSS Values and Units</h2>
      <dl>
        <dt><code>rem</code></dt>
        <dd>root-relative length unit</dd>
        <dt><code>clamp()</code></dt>
        <dd>bounds a preferred value</dd>
        <dt><code>&lt;length-percentage&gt;</code></dt>
        <dd>accepts lengths or percentages</dd>
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
    <title>CSS Values and Units practice</title>
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
      <caption>CSS Values and Units quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>rem</code></td><td>root-relative length unit</td></tr>
        <tr><td><code>clamp()</code></td><td>bounds a preferred value</td></tr>
        <tr><td><code>&lt;length-percentage&gt;</code></td><td>accepts lengths or percentages</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای Valueها و Unitهای CSS، ابتدا cascade و specificity را ساده نگه دارید و بعد سراغ override بروید.
- اگر property یا selector در همه مرورگرها یکسان نیست، progressive enhancement و fallback قابل فهم بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار CSS specification و تست واقعی در DevTools بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره CSS Values and Units, CSSOM, browser compatibility و accessibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع رنگ در CSS**.
