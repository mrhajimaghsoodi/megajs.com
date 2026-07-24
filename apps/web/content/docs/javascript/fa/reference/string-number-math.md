---
title: "مرجع String، Number و Math"
description: "این صفحه APIهای text، parsing عددی، formatting، rounding، بررسی NaN و utilityهای Math را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "مرجع String، Number و Math — سبک MDN | MEGA JS"
seoDescription: "مرجع String، Number و Math (string number math): مرجع MDNوار برای JavaScript با جدول syntax، مثال HTML، رفتار runtime و نکته DOM یا Web API همراه تمرین کاربردی."
keywords: "JavaScript, مرجع String، Number و Math, آموزش JavaScript, مرجع JavaScript, JavaScript String, Number, and Math Reference, String, Number, and Math Reference tutorial, string number math"
order: 12
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# مرجع String، Number و Math

مرجع String، Number و Math یک صفحه مرجع به سبک MDN است. تمرکز آن روی APIهای text، parsing عددی، formatting، rounding، بررسی NaN و utilityهای Math است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای DOM یا Web API را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN معمولاً این موضوع کنار JavaScript Guide، JavaScript Reference، built-in objectها و صفحه‌های Web API خوانده می‌شود. هنگام استفاده از مرجع String، Number و Math، ابتدا semantics زبان را جدا از قابلیت‌های host مثل DOM، fetch و storage ببینید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `String` | text را به صورت sequence از code unitهای UTF-16 نگه می‌دارد | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `template literal` | expressionها را داخل text interpolate می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `includes()` | وجود substring را بررسی می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>String, Number, and Math Reference</h2>
  <dl>
    <dt><code>String</code></dt>
    <dd>stores text as a sequence of UTF-16 code units</dd>
    <dt><code>template literal</code></dt>
    <dd>interpolates expressions inside text</dd>
    <dt><code>includes()</code></dt>
    <dd>checks for a substring</dd>
  </dl>
  <output id="string-number-math-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#string-number-math-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### مثال 2

```html
<label>
  Search lesson
  <input id="string-number-math-query" value="script">
</label>
<output id="string-number-math-result"></output>
<script>
  const title = 'JavaScript live editor';
  const query = document.querySelector('#string-number-math-query').value.trim();
  const found = title.toLowerCase().includes(query.toLowerCase());
  document.querySelector('#string-number-math-result').value =
    `"${query}" found: ${found === true}`;
</script>
```

## نکته‌های دقیق authoring

- برای مرجع String، Number و Math، تفاوت JavaScript core با Web APIهای host را مشخص نگه دارید.
- اگر behavior به browser، locale، timezone یا permission وابسته است، آن را در UI و test پوشش دهید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، MDN Reference و در صورت نیاز متن ECMA-262 را کنار اجرای واقعی بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره String, Number, and Math Reference, JavaScript Reference, browser compatibility و Web API boundaries نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع Map، Set، WeakMap و WeakSet**.
