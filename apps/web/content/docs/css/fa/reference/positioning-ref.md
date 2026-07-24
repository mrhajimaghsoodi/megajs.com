---
title: "مرجع Positioning در CSS"
description: "این صفحه valueهای position، containing block، propertyهای inset، sticky behavior و stacking context را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "مرجع Positioning در CSS — سبک MDN | MEGA JS"
seoDescription: "مرجع Positioning در CSS (positioning ref): مرجع MDNوار با جدول کاربرد، مثال CSS، رفتار مرورگر و نکته DevTools برای تصمیم دقیق در پروژه واقعی همراه تمرین."
keywords: "CSS, مرجع Positioning در CSS, آموزش CSS, مرجع CSS, CSS positioning, sticky, z-index"
order: 11
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# مرجع Positioning در CSS

مرجع Positioning در CSS یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی valueهای position، containing block، propertyهای inset، sticky behavior و stacking context است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، اثر cascade و رفتار مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار CSS property reference، selector reference، at-ruleها و راهنماهای layout خوانده می‌شود. هنگام استفاده از مرجع Positioning در CSS، اول پشتیبانی مرورگر و computed value را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `position: sticky` | نسبت به scroll container می‌چسبد | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `inset` | offsetهای logical یا physical تعیین می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `z-index` | boxها را در stacking context مرتب می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Positioning Reference practice</title>
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
      <h2>CSS Positioning Reference</h2>
      <dl>
        <dt><code>position: sticky</code></dt>
        <dd>sticks relative to a scroll container</dd>
        <dt><code>inset</code></dt>
        <dd>sets logical or physical offsets</dd>
        <dt><code>z-index</code></dt>
        <dd>orders boxes in stacking contexts</dd>
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
    <title>CSS Positioning Reference practice</title>
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
      <caption>CSS Positioning Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>position: sticky</code></td><td>sticks relative to a scroll container</td></tr>
        <tr><td><code>inset</code></td><td>sets logical or physical offsets</td></tr>
        <tr><td><code>z-index</code></td><td>orders boxes in stacking contexts</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای مرجع Positioning در CSS، ابتدا cascade و specificity را ساده نگه دارید و بعد سراغ override بروید.
- اگر property یا selector در همه مرورگرها یکسان نیست، progressive enhancement و fallback قابل فهم بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار CSS specification و تست واقعی در DevTools بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره CSS Positioning Reference, CSSOM, browser compatibility و accessibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع Flexbox**.
