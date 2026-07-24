---
title: "مرجع attributeهای HTML"
description: "این صفحه attributeهایی که link، media، form، script و embed را تنظیم می‌کنند را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "مرجع attributeهای HTML — سبک MDN | MEGA JS"
seoDescription: "مرجع attributeهای HTML با لحن MDN؛ شامل جدول کاربرد، مثال‌های HTML، محدودیت مرورگر و نکته authoring برای تصمیم دقیق در پروژه. برای پروژه‌های واقعی وب."
keywords: "HTML, مرجع attributeهای HTML, آموزش HTML, مرجع HTML, HTML attributes reference, MDN attributes, HTML attribute"
order: 3
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# مرجع attributeهای HTML

مرجع attributeهای HTML یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی attributeهایی که link، media، form، script و embed را تنظیم می‌کنند است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد و اثر مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار element reference، attribute reference، راهنماهای form/media و APIهای DOM خوانده می‌شود. هنگام استفاده از مرجع attributeهای HTML، اول content model و پشتیبانی مرورگر را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `href` | URL برای link و resource linked | با validation، accessibility و رفتار browser تست شود. |
| `src` | URL برای resource embedded | با validation، accessibility و رفتار browser تست شود. |
| `disabled` | control را از تعامل و ارسال خارج می‌کند | با validation، accessibility و رفتار browser تست شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>HTML Attributes Reference</h2>
  <dl>
    <dt><code>href</code></dt>
    <dd>URL for links and linked resources</dd>
    <dt><code>src</code></dt>
    <dd>URL for embedded resources</dd>
    <dt><code>disabled</code></dt>
    <dd>removes a control from interaction and submission</dd>
  </dl>
</article>
```

### مثال 2

```html
<table>
  <caption>HTML Attributes Reference quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>href</code></td><td>URL for links and linked resources</td></tr>
    <tr><td><code>src</code></td><td>URL for embedded resources</td></tr>
    <tr><td><code>disabled</code></td><td>removes a control from interaction and submission</td></tr>
  </tbody>
</table>
```

## نکته‌های دقیق authoring

- برای مرجع attributeهای HTML، نام‌ها و مقدارها باید با semantics واقعی محتوا هماهنگ باشند.
- اگر attribute یا element روی همه مرورگرها یکسان نیست، progressive enhancement و fallback بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار HTML specification و تست واقعی مرورگر بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره HTML Attributes Reference, DOM interfaces و accessibility mapping نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **attributeهای سراسری HTML**.
