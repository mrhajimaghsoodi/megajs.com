---
title: "Container queryها در CSS"
description: "این صفحه style دادن component بر اساس اندازه container، style query، unitهای query و نیازهای containment را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "مرجع Container queryها در CSS — سبک MDN | MEGA JS"
seoDescription: "مرجع Container queryها در CSS (container queries): مرجع MDNوار با جدول کاربرد، مثال CSS، رفتار مرورگر و نکته DevTools برای تصمیم دقیق در پروژه واقعی."
keywords: "CSS, Container queryها در CSS, آموزش CSS, مرجع CSS, container queries, @container, CSS cqi"
order: 19
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# Container queryها در CSS

Container queryها در CSS یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی style دادن component بر اساس اندازه container، style query، unitهای query و نیازهای containment است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، اثر cascade و رفتار مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار CSS property reference، selector reference، at-ruleها و راهنماهای layout خوانده می‌شود. هنگام استفاده از Container queryها در CSS، اول پشتیبانی مرورگر و computed value را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `container-type: inline-size` | size query را روی container فعال می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `@container (min-width: 30rem)` | ruleها را بر اساس اندازه container اعمال می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `cqi` | unit مربوط به inline-size در container query | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Container Queries practice</title>
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
      <h2>Container Queries</h2>
      <dl>
        <dt><code>container-type: inline-size</code></dt>
        <dd>enables size queries on a container</dd>
        <dt><code>@container (min-width: 30rem)</code></dt>
        <dd>applies rules by container size</dd>
        <dt><code>cqi</code></dt>
        <dd>container query inline-size unit</dd>
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
    <title>Container Queries practice</title>
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
      <caption>Container Queries quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>container-type: inline-size</code></td><td>enables size queries on a container</td></tr>
        <tr><td><code>@container (min-width: 30rem)</code></td><td>applies rules by container size</td></tr>
        <tr><td><code>cqi</code></td><td>container query inline-size unit</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای Container queryها در CSS، ابتدا cascade و specificity را ساده نگه دارید و بعد سراغ override بروید.
- اگر property یا selector در همه مرورگرها یکسان نیست، progressive enhancement و fallback قابل فهم بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار CSS specification و تست واقعی در DevTools بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Container Queries, CSSOM, browser compatibility و accessibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع Nesting در CSS**.
