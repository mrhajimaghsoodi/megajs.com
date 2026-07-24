---
title: "Cascade و Inheritance"
description: "این صفحه اینکه origin، importance، layer، specificity، order، inheritance و initial value چگونه CSS را resolve می‌کنند را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "مرجع Cascade و Inheritance — سبک MDN | MEGA JS"
seoDescription: "مرجع Cascade و Inheritance (cascade inheritance): مرجع MDNوار با جدول کاربرد، مثال CSS، رفتار مرورگر و نکته DevTools برای تصمیم دقیق در پروژه واقعی."
keywords: "CSS, Cascade و Inheritance, آموزش CSS, مرجع CSS, CSS cascade, inheritance, computed value"
order: 2
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Cascade و Inheritance

Cascade و Inheritance یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی اینکه origin، importance، layer، specificity، order، inheritance و initial value چگونه CSS را resolve می‌کنند است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، اثر cascade و رفتار مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار CSS property reference، selector reference، at-ruleها و راهنماهای layout خوانده می‌شود. هنگام استفاده از Cascade و Inheritance، اول پشتیبانی مرورگر و computed value را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `cascade` | declaration برنده را انتخاب می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `inherit` | computed value والد را استفاده می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `initial` | initial value آن property را استفاده می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cascade and Inheritance practice</title>
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
      <h2>Cascade and Inheritance</h2>
      <dl>
        <dt><code>cascade</code></dt>
        <dd>chooses the winning declaration</dd>
        <dt><code>inherit</code></dt>
        <dd>uses the parent computed value</dd>
        <dt><code>initial</code></dt>
        <dd>uses the property initial value</dd>
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
    <title>Cascade and Inheritance practice</title>
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
      <caption>Cascade and Inheritance quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>cascade</code></td><td>chooses the winning declaration</td></tr>
        <tr><td><code>inherit</code></td><td>uses the parent computed value</td></tr>
        <tr><td><code>initial</code></td><td>uses the property initial value</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای Cascade و Inheritance، ابتدا cascade و specificity را ساده نگه دارید و بعد سراغ override بروید.
- اگر property یا selector در همه مرورگرها یکسان نیست، progressive enhancement و fallback قابل فهم بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار CSS specification و تست واقعی در DevTools بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Cascade and Inheritance, CSSOM, browser compatibility و accessibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع Selectorهای CSS**.
