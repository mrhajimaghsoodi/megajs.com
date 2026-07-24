---
title: "مرجع Accessibility در CSS"
description: "این صفحه focus visibility، contrast رنگ، کاهش motion، حفظ semantics و ریسک‌های source order را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "مرجع Accessibility در CSS — سبک MDN | MEGA JS"
seoDescription: "مرجع Accessibility در CSS (accessibility css): مرجع MDNوار با جدول کاربرد، مثال CSS، رفتار مرورگر و نکته DevTools برای تصمیم دقیق در پروژه واقعی."
keywords: "CSS, مرجع Accessibility در CSS, آموزش CSS, مرجع CSS, CSS accessibility, focus visible, color contrast"
order: 23
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# مرجع Accessibility در CSS

مرجع Accessibility در CSS یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی focus visibility، contrast رنگ، کاهش motion، حفظ semantics و ریسک‌های source order است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، اثر cascade و رفتار مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار CSS property reference، selector reference، at-ruleها و راهنماهای layout خوانده می‌شود. هنگام استفاده از مرجع Accessibility در CSS، اول پشتیبانی مرورگر و computed value را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `:focus-visible` | focus مرتبط با keyboard را style می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `prefers-reduced-motion` | preferenceهای motion را رعایت می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `forced-colors` | modeهای high contrast را پشتیبانی می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Accessibility Reference practice</title>
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
      <h2>CSS Accessibility Reference</h2>
      <dl>
        <dt><code>:focus-visible</code></dt>
        <dd>styles keyboard-relevant focus</dd>
        <dt><code>prefers-reduced-motion</code></dt>
        <dd>honors motion preferences</dd>
        <dt><code>forced-colors</code></dt>
        <dd>supports high contrast modes</dd>
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
    <title>CSS Accessibility Reference practice</title>
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
      <caption>CSS Accessibility Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>:focus-visible</code></td><td>styles keyboard-relevant focus</td></tr>
        <tr><td><code>prefers-reduced-motion</code></td><td>honors motion preferences</td></tr>
        <tr><td><code>forced-colors</code></td><td>supports high contrast modes</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای مرجع Accessibility در CSS، ابتدا cascade و specificity را ساده نگه دارید و بعد سراغ override بروید.
- اگر property یا selector در همه مرورگرها یکسان نیست، progressive enhancement و fallback قابل فهم بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار CSS specification و تست واقعی در DevTools بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره CSS Accessibility Reference, CSSOM, browser compatibility و accessibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **چیت‌شیت CSS**.
