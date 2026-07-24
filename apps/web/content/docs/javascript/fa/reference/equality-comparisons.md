---
title: "مرجع Equality و Comparison"
description: "این صفحه strict equality، SameValue، SameValueZero، Object.is، ordering و tradeoffهای coercion را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "مرجع Equality و Comparison — سبک MDN | MEGA JS"
seoDescription: "مرجع Equality و Comparison (equality comparisons): مرجع MDNوار برای JavaScript با جدول syntax، مثال HTML، رفتار runtime و نکته DOM یا Web API همراه تمرین."
keywords: "JavaScript, مرجع Equality و Comparison, آموزش JavaScript, مرجع JavaScript, JavaScript Equality and Comparisons Reference, Equality and Comparisons Reference tutorial, equality comparisons"
order: 19
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# مرجع Equality و Comparison

مرجع Equality و Comparison یک صفحه مرجع به سبک MDN است. تمرکز آن روی strict equality، SameValue، SameValueZero، Object.is، ordering و tradeoffهای coercion است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای DOM یا Web API را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN معمولاً این موضوع کنار JavaScript Guide، JavaScript Reference، built-in objectها و صفحه‌های Web API خوانده می‌شود. هنگام استفاده از مرجع Equality و Comparison، ابتدا semantics زبان را جدا از قابلیت‌های host مثل DOM، fetch و storage ببینید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `===` | بدون coercion نوع مقایسه می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `Object.is()` | از semantics نوع SameValue استفاده می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `truthy/falsy` | رفتار conversion به Boolean را توضیح می‌دهد | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>Equality and Comparisons Reference</h2>
  <dl>
    <dt><code>===</code></dt>
    <dd>compares without type coercion</dd>
    <dt><code>Object.is()</code></dt>
    <dd>uses SameValue semantics</dd>
    <dt><code>truthy/falsy</code></dt>
    <dd>describes boolean conversion behavior</dd>
  </dl>
  <output id="equality-comparisons-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#equality-comparisons-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### مثال 2

```html
<label>
  Search lesson
  <input id="equality-comparisons-query" value="script">
</label>
<output id="equality-comparisons-result"></output>
<script>
  const title = 'JavaScript live editor';
  const query = document.querySelector('#equality-comparisons-query').value.trim();
  const found = title.toLowerCase().includes(query.toLowerCase());
  document.querySelector('#equality-comparisons-result').value =
    `"${query}" found: ${found === true}`;
</script>
```

## نکته‌های دقیق authoring

- برای مرجع Equality و Comparison، تفاوت JavaScript core با Web APIهای host را مشخص نگه دارید.
- اگر behavior به browser، locale، timezone یا permission وابسته است، آن را در UI و test پوشش دهید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، MDN Reference و در صورت نیاز متن ECMA-262 را کنار اجرای واقعی بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Equality and Comparisons Reference, JavaScript Reference, browser compatibility و Web API boundaries نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع Typed Arrayها**.
