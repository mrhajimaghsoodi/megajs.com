---
title: "مرجع Map، Set، WeakMap و WeakSet"
description: "این صفحه collectionهای keyدار، uniqueness، reference ضعیف، رفتار garbage collection و iteration را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "مرجع Map، Set، WeakMap و WeakSet — سبک MDN | MEGA JS"
seoDescription: "مرجع Map، Set، WeakMap و WeakSet (map set weak): مرجع MDNوار برای JavaScript با جدول syntax، مثال HTML، رفتار runtime و نکته DOM یا Web API همراه تمرین کاربردی."
keywords: "JavaScript, مرجع Map، Set، WeakMap و WeakSet, آموزش JavaScript, مرجع JavaScript, JavaScript Map, Set, WeakMap, and WeakSet, Map, Set, WeakMap, and WeakSet tutorial, map set weak"
order: 13
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# مرجع Map، Set، WeakMap و WeakSet

مرجع Map، Set، WeakMap و WeakSet یک صفحه مرجع به سبک MDN است. تمرکز آن روی collectionهای keyدار، uniqueness، reference ضعیف، رفتار garbage collection و iteration است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای DOM یا Web API را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN معمولاً این موضوع کنار JavaScript Guide، JavaScript Reference، built-in objectها و صفحه‌های Web API خوانده می‌شود. هنگام استفاده از مرجع Map، Set، WeakMap و WeakSet، ابتدا semantics زبان را جدا از قابلیت‌های host مثل DOM، fetch و storage ببینید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `Map` | entryهای key-value با key دلخواه نگه می‌دارد | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `Set` | valueهای یکتا نگه می‌دارد | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `WeakMap` | keyهای object را بدون جلوگیری از garbage collection نگه می‌دارد | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>Map, Set, WeakMap, and WeakSet Reference</h2>
  <dl>
    <dt><code>Map</code></dt>
    <dd>stores key-value entries with arbitrary keys</dd>
    <dt><code>Set</code></dt>
    <dd>stores unique values</dd>
    <dt><code>WeakMap</code></dt>
    <dd>allows object keys without preventing garbage collection</dd>
  </dl>
  <output id="map-set-weak-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#map-set-weak-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### مثال 2

```html
<section>
  <h2>Map, Set, WeakMap, and WeakSet Reference</h2>
  <ul id="map-set-weak-list"></ul>
</section>
<script>
  const lessons = ['variables', 'arrays', 'promises', 'DOM'];
  const uniqueLessons = new Set(lessons);
  document.querySelector('#map-set-weak-list').innerHTML =
    [...uniqueLessons].map((lesson) => `<li>${lesson.toUpperCase()}</li>`).join('');
</script>
```

## نکته‌های دقیق authoring

- برای مرجع Map، Set، WeakMap و WeakSet، تفاوت JavaScript core با Web APIهای host را مشخص نگه دارید.
- اگر behavior به browser، locale، timezone یا permission وابسته است، آن را در UI و test پوشش دهید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، MDN Reference و در صورت نیاز متن ECMA-262 را کنار اجرای واقعی بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Map, Set, WeakMap, and WeakSet Reference, JavaScript Reference, browser compatibility و Web API boundaries نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع RegExp**.
