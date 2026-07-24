---
title: "اعتبارسنجی Constraint در HTML"
description: "این صفحه stateهای validity native، constraintها، messageها و رفتار submit را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "مرجع اعتبارسنجی Constraint در HTML — سبک MDN | MEGA JS"
seoDescription: "مرجع اعتبارسنجی Constraint در HTML با لحن MDN؛ شامل جدول کاربرد، مثال‌های HTML، محدودیت مرورگر و نکته authoring برای تصمیم دقیق در پروژه. همراه تمرین کاربردی."
keywords: "HTML, اعتبارسنجی Constraint در HTML, آموزش HTML, مرجع HTML, HTML constraint validation, form validity, required pattern"
order: 9
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# اعتبارسنجی Constraint در HTML

اعتبارسنجی Constraint در HTML یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی stateهای validity native، constraintها، messageها و رفتار submit است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد و اثر مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار element reference، attribute reference، راهنماهای form/media و APIهای DOM خوانده می‌شود. هنگام استفاده از اعتبارسنجی Constraint در HTML، اول content model و پشتیبانی مرورگر را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `required` | مقدار باید وجود داشته باشد | با validation، accessibility و رفتار browser تست شود. |
| `pattern` | مقدار باید با regular expression سازگار باشد | با validation، accessibility و رفتار browser تست شود. |
| `validity` | DOM object گزارش‌دهنده state validation | با validation، accessibility و رفتار browser تست شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>HTML Constraint Validation</h2>
  <dl>
    <dt><code>required</code></dt>
    <dd>value must be present</dd>
    <dt><code>pattern</code></dt>
    <dd>value must match a regular expression</dd>
    <dt><code>validity</code></dt>
    <dd>DOM object that reports validation state</dd>
  </dl>
</article>
```

### مثال 2

```html
<table>
  <caption>HTML Constraint Validation quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>required</code></td><td>value must be present</td></tr>
    <tr><td><code>pattern</code></td><td>value must match a regular expression</td></tr>
    <tr><td><code>validity</code></td><td>DOM object that reports validation state</td></tr>
  </tbody>
</table>
```

## نکته‌های دقیق authoring

- برای اعتبارسنجی Constraint در HTML، نام‌ها و مقدارها باید با semantics واقعی محتوا هماهنگ باشند.
- اگر attribute یا element روی همه مرورگرها یکسان نیست، progressive enhancement و fallback بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار HTML specification و تست واقعی مرورگر بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره HTML Constraint Validation, DOM interfaces و accessibility mapping نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **راهنمای رسانه HTML**.
