---
title: "مرجع عنصرهای HTML"
description: "این صفحه کاتالوگ elementها، categoryهای element و انتخاب tag معنایی را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "مرجع عنصرهای HTML — سبک MDN | MEGA JS"
seoDescription: "مرجع عنصرهای HTML با لحن MDN؛ شامل جدول کاربرد، مثال‌های HTML، محدودیت مرورگر و نکته authoring برای تصمیم دقیق در پروژه. برای پروژه‌های واقعی وب."
keywords: "HTML, مرجع عنصرهای HTML, آموزش HTML, مرجع HTML, HTML elements reference, MDN elements, HTML tags"
order: 2
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# مرجع عنصرهای HTML

مرجع عنصرهای HTML یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی کاتالوگ elementها، categoryهای element و انتخاب tag معنایی است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد و اثر مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار element reference، attribute reference، راهنماهای form/media و APIهای DOM خوانده می‌شود. هنگام استفاده از مرجع عنصرهای HTML، اول content model و پشتیبانی مرورگر را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `<main>` | landmark محتوای اصلی یکتا | با validation، accessibility و رفتار browser تست شود. |
| `<article>` | محتوای مستقل و قابل بازنشر | با validation، accessibility و رفتار browser تست شود. |
| `<button>` | control دکمه تعاملی | با validation، accessibility و رفتار browser تست شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>HTML Elements Reference</h2>
  <dl>
    <dt><code>&lt;main&gt;</code></dt>
    <dd>unique main content landmark</dd>
    <dt><code>&lt;article&gt;</code></dt>
    <dd>self-contained composition</dd>
    <dt><code>&lt;button&gt;</code></dt>
    <dd>interactive button control</dd>
  </dl>
</article>
```

### مثال 2

```html
<table>
  <caption>HTML Elements Reference quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;main&gt;</code></td><td>unique main content landmark</td></tr>
    <tr><td><code>&lt;article&gt;</code></td><td>self-contained composition</td></tr>
    <tr><td><code>&lt;button&gt;</code></td><td>interactive button control</td></tr>
  </tbody>
</table>
```

## نکته‌های دقیق authoring

- برای مرجع عنصرهای HTML، نام‌ها و مقدارها باید با semantics واقعی محتوا هماهنگ باشند.
- اگر attribute یا element روی همه مرورگرها یکسان نیست، progressive enhancement و fallback بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار HTML specification و تست واقعی مرورگر بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره HTML Elements Reference, DOM interfaces و accessibility mapping نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع attributeهای HTML**.
