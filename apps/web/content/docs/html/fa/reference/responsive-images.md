---
title: "تصویرهای واکنش‌گرای HTML"
description: "این صفحه رفتار srcset، sizes، picture و انتخاب image را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "مرجع تصویرهای واکنش‌گرای HTML — سبک MDN | MEGA JS"
seoDescription: "مرجع تصویرهای واکنش‌گرای HTML با لحن MDN؛ شامل جدول کاربرد، مثال‌های HTML، محدودیت مرورگر و نکته authoring برای تصمیم دقیق در پروژه. برای پروژه‌های واقعی وب."
keywords: "HTML, تصویرهای واکنش‌گرای HTML, آموزش HTML, مرجع HTML, HTML responsive images, srcset sizes, picture element"
order: 8
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# تصویرهای واکنش‌گرای HTML

تصویرهای واکنش‌گرای HTML یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی رفتار srcset، sizes، picture و انتخاب image است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد و اثر مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار element reference، attribute reference، راهنماهای form/media و APIهای DOM خوانده می‌شود. هنگام استفاده از تصویرهای واکنش‌گرای HTML، اول content model و پشتیبانی مرورگر را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `srcset` | کاندیدهای image را فهرست می‌کند | با validation، accessibility و رفتار browser تست شود. |
| `sizes` | عرض‌های rendered مورد انتظار را توصیف می‌کند | با validation، accessibility و رفتار browser تست شود. |
| `<picture>` | source را بر اساس media یا type عوض می‌کند | با validation، accessibility و رفتار browser تست شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>HTML Responsive Images</h2>
  <dl>
    <dt><code>srcset</code></dt>
    <dd>lists image candidates</dd>
    <dt><code>sizes</code></dt>
    <dd>describes intended rendered widths</dd>
    <dt><code>&lt;picture&gt;</code></dt>
    <dd>switches sources by media or type</dd>
  </dl>
</article>
```

### مثال 2

```html
<table>
  <caption>HTML Responsive Images quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>srcset</code></td><td>lists image candidates</td></tr>
    <tr><td><code>sizes</code></td><td>describes intended rendered widths</td></tr>
    <tr><td><code>&lt;picture&gt;</code></td><td>switches sources by media or type</td></tr>
  </tbody>
</table>
```

## نکته‌های دقیق authoring

- برای تصویرهای واکنش‌گرای HTML، نام‌ها و مقدارها باید با semantics واقعی محتوا هماهنگ باشند.
- اگر attribute یا element روی همه مرورگرها یکسان نیست، progressive enhancement و fallback بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار HTML specification و تست واقعی مرورگر بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره HTML Responsive Images, DOM interfaces و accessibility mapping نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **اعتبارسنجی Constraint در HTML**.
