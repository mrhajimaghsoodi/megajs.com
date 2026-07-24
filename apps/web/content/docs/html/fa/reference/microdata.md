---
title: "Microdata در HTML"
description: "این صفحه item scope، item type و item property برای structured data embedded را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "مرجع Microdata در HTML — سبک MDN | MEGA JS"
seoDescription: "مرجع Microdata در HTML با لحن MDN؛ شامل جدول کاربرد، مثال‌های HTML، محدودیت مرورگر و نکته authoring برای تصمیم دقیق در پروژه. برای پروژه‌های واقعی وب."
keywords: "HTML, Microdata در HTML, آموزش HTML, مرجع HTML, HTML microdata, itemscope itemprop, structured data"
order: 11
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# Microdata در HTML

Microdata در HTML یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی item scope، item type و item property برای structured data embedded است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد و اثر مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار element reference، attribute reference، راهنماهای form/media و APIهای DOM خوانده می‌شود. هنگام استفاده از Microdata در HTML، اول content model و پشتیبانی مرورگر را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `itemscope` | یک item می‌سازد | با validation، accessibility و رفتار browser تست شود. |
| `itemtype` | نوع vocabulary را مشخص می‌کند | با validation، accessibility و رفتار browser تست شود. |
| `itemprop` | یک property روی item نام‌گذاری می‌کند | با validation، accessibility و رفتار browser تست شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>HTML Microdata</h2>
  <dl>
    <dt><code>itemscope</code></dt>
    <dd>creates an item</dd>
    <dt><code>itemtype</code></dt>
    <dd>identifies the vocabulary type</dd>
    <dt><code>itemprop</code></dt>
    <dd>names a property on the item</dd>
  </dl>
</article>
```

### مثال 2

```html
<table>
  <caption>HTML Microdata quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>itemscope</code></td><td>creates an item</td></tr>
    <tr><td><code>itemtype</code></td><td>identifies the vocabulary type</td></tr>
    <tr><td><code>itemprop</code></td><td>names a property on the item</td></tr>
  </tbody>
</table>
```

## نکته‌های دقیق authoring

- برای Microdata در HTML، نام‌ها و مقدارها باید با semantics واقعی محتوا هماهنگ باشند.
- اگر attribute یا element روی همه مرورگرها یکسان نیست، progressive enhancement و fallback بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار HTML specification و تست واقعی مرورگر بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره HTML Microdata, DOM interfaces و accessibility mapping نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **Microformats در HTML**.
