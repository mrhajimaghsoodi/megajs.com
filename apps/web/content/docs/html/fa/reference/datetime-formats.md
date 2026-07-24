---
title: "فرمت‌های تاریخ و زمان HTML"
description: "این صفحه مقدارهای machine-readable معتبر برای date، time، week، month و datetime را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "مرجع فرمت‌های تاریخ و زمان HTML — سبک MDN | MEGA JS"
seoDescription: "مرجع فرمت‌های تاریخ و زمان HTML با لحن MDN؛ شامل جدول کاربرد، مثال‌های HTML، محدودیت مرورگر و نکته authoring برای تصمیم دقیق در پروژه. برای پروژه‌های واقعی وب."
keywords: "HTML, فرمت‌های تاریخ و زمان HTML, آموزش HTML, مرجع HTML, HTML datetime formats, time element, input date"
order: 7
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# فرمت‌های تاریخ و زمان HTML

فرمت‌های تاریخ و زمان HTML یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی مقدارهای machine-readable معتبر برای date، time، week، month و datetime است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد و اثر مرورگر را کنار هم می‌گذارد.

## جایگاه در مرجع MDN

در MDN معمولاً این موضوع کنار element reference، attribute reference، راهنماهای form/media و APIهای DOM خوانده می‌شود. هنگام استفاده از فرمت‌های تاریخ و زمان HTML، اول content model و پشتیبانی مرورگر را ببینید، سپس تصمیم authoring بگیرید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `YYYY-MM-DD` | رشته date معتبر | با validation، accessibility و رفتار browser تست شود. |
| `HH:mm` | رشته time معتبر | با validation، accessibility و رفتار browser تست شود. |
| `datetime` | مقدار time قابل خواندن ماشین | با validation، accessibility و رفتار browser تست شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>HTML Date and Time Formats</h2>
  <dl>
    <dt><code>YYYY-MM-DD</code></dt>
    <dd>valid date string</dd>
    <dt><code>HH:mm</code></dt>
    <dd>valid time string</dd>
    <dt><code>datetime</code></dt>
    <dd>machine-readable time value</dd>
  </dl>
</article>
```

### مثال 2

```html
<table>
  <caption>HTML Date and Time Formats quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>YYYY-MM-DD</code></td><td>valid date string</td></tr>
    <tr><td><code>HH:mm</code></td><td>valid time string</td></tr>
    <tr><td><code>datetime</code></td><td>machine-readable time value</td></tr>
  </tbody>
</table>
```

## نکته‌های دقیق authoring

- برای فرمت‌های تاریخ و زمان HTML، نام‌ها و مقدارها باید با semantics واقعی محتوا هماهنگ باشند.
- اگر attribute یا element روی همه مرورگرها یکسان نیست، progressive enhancement و fallback بنویسید.
- برای تصمیم‌های حساس، صفحه MDN مربوط را کنار HTML specification و تست واقعی مرورگر بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره HTML Date and Time Formats, DOM interfaces و accessibility mapping نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **تصویرهای واکنش‌گرای HTML**.
