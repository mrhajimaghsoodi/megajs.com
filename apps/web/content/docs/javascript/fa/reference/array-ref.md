---
title: "مرجع Array"
description: "این صفحه ساخت Array، indexing، iteration، methodهای mutating، methodهای copy و sparse array را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "مرجع Array — سبک MDN | MEGA JS"
seoDescription: "مرجع Array (array ref): مرجع MDNوار برای JavaScript با جدول syntax، مثال HTML، رفتار runtime و نکته DOM یا Web API همراه تمرین کاربردی برای پروژه واقعی وب."
keywords: "JavaScript, مرجع Array, آموزش JavaScript, مرجع JavaScript, JavaScript Array Reference, Array Reference tutorial, array ref"
order: 11
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# مرجع Array

مرجع Array یک صفحه مرجع به سبک MDN است. تمرکز آن روی ساخت Array، indexing، iteration، methodهای mutating، methodهای copy و sparse array است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای DOM یا Web API را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN معمولاً این موضوع کنار JavaScript Guide، JavaScript Reference، built-in objectها و صفحه‌های Web API خوانده می‌شود. هنگام استفاده از مرجع Array، ابتدا semantics زبان را جدا از قابلیت‌های host مثل DOM، fetch و storage ببینید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `Array` | valueهای مرتب را با index نگه می‌دارد | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `map()` | Array تبدیل‌شده می‌سازد | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `for...of` | روی valueهای Array iteration می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>Array Reference</h2>
  <dl>
    <dt><code>Array</code></dt>
    <dd>stores ordered values by index</dd>
    <dt><code>map()</code></dt>
    <dd>creates a transformed array</dd>
    <dt><code>for...of</code></dt>
    <dd>iterates array values</dd>
  </dl>
  <output id="array-ref-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#array-ref-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### مثال 2

```html
<section>
  <h2>Array Reference</h2>
  <ul id="array-ref-list"></ul>
</section>
<script>
  const lessons = ['variables', 'arrays', 'promises', 'DOM'];
  const uniqueLessons = new Set(lessons);
  document.querySelector('#array-ref-list').innerHTML =
    [...uniqueLessons].map((lesson) => `<li>${lesson.toUpperCase()}</li>`).join('');
</script>
```

## نکته‌های دقیق authoring

- برای مرجع Array، تفاوت JavaScript core با Web APIهای host را مشخص نگه دارید.
- اگر behavior به browser، locale، timezone یا permission وابسته است، آن را در UI و test پوشش دهید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، MDN Reference و در صورت نیاز متن ECMA-262 را کنار اجرای واقعی بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Array Reference, JavaScript Reference, browser compatibility و Web API boundaries نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع String، Number و Math**.
