---
title: "مرجع Nesting در CSS"
description: "این صفحه syntax بومی nesting در CSS، selector ampersand، selectorهای گروهی و خوانایی cascade را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "مرجع Nesting در CSS — سبک MDN | MEGA JS"
seoDescription: "مرجع Nesting در CSS (nesting ref): مرجع MDNوار با جدول کاربرد، مثال CSS، رفتار مرورگر و نکته DevTools برای تصمیم دقیق در پروژه واقعی همراه تمرین کاربردی."
keywords: "CSS, مرجع Nesting در CSS, آموزش CSS, مرجع CSS, CSS nesting, native nesting, & selector"
order: 20
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# مرجع Nesting در CSS

مرجع Nesting در CSS یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی syntax بومی nesting در CSS، selector ampersand، selectorهای گروهی و خوانایی cascade است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، اثر cascade و رفتار مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار CSS property reference، selector reference، at-ruleها و راهنماهای layout خوانده می‌شود. هنگام استفاده از مرجع Nesting در CSS، اول پشتیبانی مرورگر و computed value را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `&` | به selector والد اشاره می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `.card { & h2 {} }` | ruleهای descendant را nest می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `@media` | می‌تواند ruleهای conditional را nest کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Nesting Reference practice</title>
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
      <h2>CSS Nesting Reference</h2>
      <dl>
        <dt><code>&amp;</code></dt>
        <dd>refers to the parent selector</dd>
        <dt><code>.card { &amp; h2 {} }</code></dt>
        <dd>nests descendant rules</dd>
        <dt><code>@media</code></dt>
        <dd>can nest conditional rules</dd>
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
    <title>CSS Nesting Reference practice</title>
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
      <caption>CSS Nesting Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>&amp;</code></td><td>refers to the parent selector</td></tr>
        <tr><td><code>.card { &amp; h2 {} }</code></td><td>nests descendant rules</td></tr>
        <tr><td><code>@media</code></td><td>can nest conditional rules</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای مرجع Nesting در CSS، ابتدا cascade و specificity را ساده نگه دارید و بعد سراغ override بروید.
- اگر property یا selector در همه مرورگرها یکسان نیست، progressive enhancement و fallback قابل فهم بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار CSS specification و تست واقعی در DevTools بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره CSS Nesting Reference, CSSOM, browser compatibility و accessibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع At-ruleهای CSS**.
