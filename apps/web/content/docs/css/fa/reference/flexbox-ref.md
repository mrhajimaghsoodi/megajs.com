---
title: "مرجع Flexbox"
description: "این صفحه flex formatting context، axisها، wrapping، alignment، sizing انعطاف‌پذیر و order itemها را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "مرجع Flexbox — سبک MDN | MEGA JS"
seoDescription: "مرجع Flexbox (flexbox ref): مرجع MDNوار با جدول کاربرد، مثال CSS، رفتار مرورگر و نکته DevTools برای تصمیم دقیق در پروژه واقعی همراه تمرین کاربردی."
keywords: "CSS, مرجع Flexbox, آموزش CSS, مرجع CSS, Flexbox reference, CSS flex, flex basis"
order: 12
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# مرجع Flexbox

مرجع Flexbox یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی flex formatting context، axisها، wrapping، alignment، sizing انعطاف‌پذیر و order itemها است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، اثر cascade و رفتار مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار CSS property reference، selector reference، at-ruleها و راهنماهای layout خوانده می‌شود. هنگام استفاده از مرجع Flexbox، اول پشتیبانی مرورگر و computed value را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `flex-basis` | اندازه اولیه روی main axis را تعیین می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `flex-grow` | فضای آزاد مثبت را توزیع می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `align-items` | itemها را روی cross axis align می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Reference practice</title>
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
      <h2>Flexbox Reference</h2>
      <dl>
        <dt><code>flex-basis</code></dt>
        <dd>sets initial main-axis size</dd>
        <dt><code>flex-grow</code></dt>
        <dd>distributes positive free space</dd>
        <dt><code>align-items</code></dt>
        <dd>aligns items on the cross axis</dd>
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
    <title>Flexbox Reference practice</title>
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
      <caption>Flexbox Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>flex-basis</code></td><td>sets initial main-axis size</td></tr>
        <tr><td><code>flex-grow</code></td><td>distributes positive free space</td></tr>
        <tr><td><code>align-items</code></td><td>aligns items on the cross axis</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای مرجع Flexbox، ابتدا cascade و specificity را ساده نگه دارید و بعد سراغ override بروید.
- اگر property یا selector در همه مرورگرها یکسان نیست، progressive enhancement و fallback قابل فهم بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار CSS specification و تست واقعی در DevTools بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Flexbox Reference, CSSOM, browser compatibility و accessibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع Grid در CSS**.
