---
title: "مرجع Selectorهای CSS"
description: "این صفحه syntax مربوط به selectorهای type، class، id، attribute، combinator، pseudo-class و pseudo-element را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "مرجع Selectorهای CSS — سبک MDN | MEGA JS"
seoDescription: "مرجع Selectorهای CSS (selectors ref): مرجع MDNوار با جدول کاربرد، مثال CSS، رفتار مرورگر و نکته DevTools برای تصمیم دقیق در پروژه واقعی همراه تمرین کاربردی."
keywords: "CSS, مرجع Selectorهای CSS, آموزش CSS, مرجع CSS, CSS selectors reference, MDN selectors, :has selector"
order: 3
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# مرجع Selectorهای CSS

مرجع Selectorهای CSS یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی syntax مربوط به selectorهای type، class، id، attribute، combinator، pseudo-class و pseudo-element است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، اثر cascade و رفتار مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار CSS property reference، selector reference، at-ruleها و راهنماهای layout خوانده می‌شود. هنگام استفاده از مرجع Selectorهای CSS، اول پشتیبانی مرورگر و computed value را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `:is()` | هر selector داخل لیست forgiving را match می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `:where()` | بدون افزودن specificity match می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `:has()` | بر اساس descendant یا relative match می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Selectors Reference practice</title>
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
      <h2>CSS Selectors Reference</h2>
      <dl>
        <dt><code>:is()</code></dt>
        <dd>matches any selector in a forgiving list</dd>
        <dt><code>:where()</code></dt>
        <dd>matches without adding specificity</dd>
        <dt><code>:has()</code></dt>
        <dd>matches based on descendants or relatives</dd>
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
    <title>CSS Selectors Reference practice</title>
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
      <caption>CSS Selectors Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>:is()</code></td><td>matches any selector in a forgiving list</td></tr>
        <tr><td><code>:where()</code></td><td>matches without adding specificity</td></tr>
        <tr><td><code>:has()</code></td><td>matches based on descendants or relatives</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای مرجع Selectorهای CSS، ابتدا cascade و specificity را ساده نگه دارید و بعد سراغ override بروید.
- اگر property یا selector در همه مرورگرها یکسان نیست، progressive enhancement و fallback قابل فهم بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار CSS specification و تست واقعی در DevTools بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره CSS Selectors Reference, CSSOM, browser compatibility و accessibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **Specificity و Cascade**.
