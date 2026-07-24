---
title: "attributeهای سراسری HTML"
description: "این صفحه attributeهایی که روی بیشتر elementهای HTML معتبرند را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "مرجع attributeهای سراسری HTML — سبک MDN | MEGA JS"
seoDescription: "مرجع attributeهای سراسری HTML با لحن MDN؛ شامل جدول کاربرد، مثال‌های HTML، محدودیت مرورگر و نکته authoring برای تصمیم دقیق در پروژه. برای پروژه‌های واقعی وب."
keywords: "HTML, attributeهای سراسری HTML, آموزش HTML, مرجع HTML, HTML global attributes, id class data, MDN global attributes"
order: 4
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# attributeهای سراسری HTML

attributeهای سراسری HTML یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی attributeهایی که روی بیشتر elementهای HTML معتبرند است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد و اثر مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار element reference، attribute reference، راهنماهای form/media و APIهای DOM خوانده می‌شود. هنگام استفاده از attributeهای سراسری HTML، اول content model و پشتیبانی مرورگر را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `id` | identifier یکتا در سند | با validation، accessibility و رفتار browser تست شود. |
| `class` | tokenهای دسته‌بندی جداشده با فاصله | با validation، accessibility و رفتار browser تست شود. |
| `data-*` | داده سفارشی غیر visual برای script | با validation، accessibility و رفتار browser تست شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>HTML Global Attributes</h2>
  <dl>
    <dt><code>id</code></dt>
    <dd>document-unique identifier</dd>
    <dt><code>class</code></dt>
    <dd>space-separated classification tokens</dd>
    <dt><code>data-*</code></dt>
    <dd>custom non-visible data for scripts</dd>
  </dl>
</article>
```

### مثال 2

```html
<table>
  <caption>HTML Global Attributes quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>id</code></td><td>document-unique identifier</td></tr>
    <tr><td><code>class</code></td><td>space-separated classification tokens</td></tr>
    <tr><td><code>data-*</code></td><td>custom non-visible data for scripts</td></tr>
  </tbody>
</table>
```

## نکته‌های دقیق authoring

- برای attributeهای سراسری HTML، نام‌ها و مقدارها باید با semantics واقعی محتوا هماهنگ باشند.
- اگر attribute یا element روی همه مرورگرها یکسان نیست، progressive enhancement و fallback بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار HTML specification و تست واقعی مرورگر بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره HTML Global Attributes, DOM interfaces و accessibility mapping نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **دسته‌بندی محتوای HTML**.
