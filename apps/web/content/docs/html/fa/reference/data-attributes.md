---
title: "attributeهای data در HTML"
description: "این صفحه استفاده از data-* برای داده سفارشی قابل خواندن توسط script بدون attribute نامعتبر را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "مرجع attributeهای data در HTML — سبک MDN | MEGA JS"
seoDescription: "مرجع attributeهای data در HTML با لحن MDN؛ شامل جدول کاربرد، مثال‌های HTML، محدودیت مرورگر و نکته authoring برای تصمیم دقیق در پروژه. برای پروژه‌های واقعی وب."
keywords: "HTML, attributeهای data در HTML, آموزش HTML, مرجع HTML, HTML data attributes, data-* dataset, custom data"
order: 13
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# attributeهای data در HTML

attributeهای data در HTML یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی استفاده از data-* برای داده سفارشی قابل خواندن توسط script بدون attribute نامعتبر است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد و اثر مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار element reference، attribute reference، راهنماهای form/media و APIهای DOM خوانده می‌شود. هنگام استفاده از attributeهای data در HTML، اول content model و پشتیبانی مرورگر را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `data-*` | داده string سفارشی ذخیره می‌کند | با validation، accessibility و رفتار browser تست شود. |
| `dataset` | DOM API برای data attributeها | با validation، accessibility و رفتار browser تست شود. |
| `camelCase` | نام‌های dashدار را در dataset نگاشت می‌کند | با validation، accessibility و رفتار browser تست شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>HTML Data Attributes</h2>
  <dl>
    <dt><code>data-*</code></dt>
    <dd>stores custom string data</dd>
    <dt><code>dataset</code></dt>
    <dd>DOM API for data attributes</dd>
    <dt><code>camelCase</code></dt>
    <dd>maps dashed names in dataset</dd>
  </dl>
</article>
```

### مثال 2

```html
<table>
  <caption>HTML Data Attributes quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>data-*</code></td><td>stores custom string data</td></tr>
    <tr><td><code>dataset</code></td><td>DOM API for data attributes</td></tr>
    <tr><td><code>camelCase</code></td><td>maps dashed names in dataset</td></tr>
  </tbody>
</table>
```

## نکته‌های دقیق authoring

- برای attributeهای data در HTML، نام‌ها و مقدارها باید با semantics واقعی محتوا هماهنگ باشند.
- اگر attribute یا element روی همه مرورگرها یکسان نیست، progressive enhancement و fallback بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار HTML specification و تست واقعی مرورگر بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره HTML Data Attributes, DOM interfaces و accessibility mapping نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **CORS تصویر و Canvas**.
