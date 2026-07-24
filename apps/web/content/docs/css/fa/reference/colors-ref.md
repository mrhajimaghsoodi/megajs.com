---
title: "مرجع رنگ در CSS"
description: "این صفحه color space، alpha، currentColor، gradient، system color و تصمیم‌های contrast-aware را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "مرجع رنگ در CSS — سبک MDN | MEGA JS"
seoDescription: "مرجع رنگ در CSS (colors ref): مرجع MDNوار با جدول کاربرد، مثال CSS، رفتار مرورگر و نکته DevTools برای تصمیم دقیق در پروژه واقعی همراه تمرین کاربردی."
keywords: "CSS, مرجع رنگ در CSS, آموزش CSS, مرجع CSS, CSS colors reference, color mix, OKLCH"
order: 7
track: reference
sources:
  - name: MDN Web Docs — CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# مرجع رنگ در CSS

مرجع رنگ در CSS یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی color space، alpha، currentColor، gradient، system color و تصمیم‌های contrast-aware است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، اثر cascade و رفتار مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار CSS property reference، selector reference، at-ruleها و راهنماهای layout خوانده می‌شود. هنگام استفاده از مرجع رنگ در CSS، اول پشتیبانی مرورگر و computed value را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `currentColor` | رنگ فعلی متن را استفاده می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `color-mix()` | دو رنگ را در یک color space ترکیب می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |
| `oklch()` | رنگ را به شکل perceptual بیان می‌کند | با DevTools Styles panel، responsive mode و browserهای هدف تست شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Colors Reference practice</title>
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
      <h2>CSS Colors Reference</h2>
      <dl>
        <dt><code>currentColor</code></dt>
        <dd>uses the current text color</dd>
        <dt><code>color-mix()</code></dt>
        <dd>mixes two colors in a color space</dd>
        <dt><code>oklch()</code></dt>
        <dd>expresses color perceptually</dd>
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
    <title>CSS Colors Reference practice</title>
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
      <caption>CSS Colors Reference quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>currentColor</code></td><td>uses the current text color</td></tr>
        <tr><td><code>color-mix()</code></td><td>mixes two colors in a color space</td></tr>
        <tr><td><code>oklch()</code></td><td>expresses color perceptually</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای مرجع رنگ در CSS، ابتدا cascade و specificity را ساده نگه دارید و بعد سراغ override بروید.
- اگر property یا selector در همه مرورگرها یکسان نیست، progressive enhancement و fallback قابل فهم بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار CSS specification و تست واقعی در DevTools بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره CSS Colors Reference, CSSOM, browser compatibility و accessibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع Typography در CSS**.
