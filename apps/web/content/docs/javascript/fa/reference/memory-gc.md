---
title: "Memory و Garbage Collection"
description: "این صفحه reachability، closure، weak collection، DOM جداشده، leak و profiling در DevTools را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "مرجع Memory و Garbage Collection — سبک MDN | MEGA JS"
seoDescription: "مرجع Memory و Garbage Collection (memory gc): مرجع MDNوار برای JavaScript با جدول syntax، مثال HTML، رفتار runtime و نکته DOM یا Web API همراه تمرین کاربردی."
keywords: "JavaScript, Memory و Garbage Collection, آموزش JavaScript, مرجع JavaScript, JavaScript Memory and Garbage Collection, Memory and Garbage Collection tutorial, memory gc"
order: 18
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# Memory و Garbage Collection

Memory و Garbage Collection یک صفحه مرجع به سبک MDN است. تمرکز آن روی reachability، closure، weak collection، DOM جداشده، leak و profiling در DevTools است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای DOM یا Web API را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN معمولاً این موضوع کنار JavaScript Guide، JavaScript Reference، built-in objectها و صفحه‌های Web API خوانده می‌شود. هنگام استفاده از Memory و Garbage Collection، ابتدا semantics زبان را جدا از قابلیت‌های host مثل DOM، fetch و storage ببینید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `JavaScript` | ویژگی زبان برای Memory و Garbage Collection | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `runtime` | code را اجرا و error را گزارش می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `DevTools Console` | valueها را هنگام یادگیری بررسی می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>Memory and Garbage Collection</h2>
  <dl>
    <dt><code>JavaScript</code></dt>
    <dd>language feature used in Memory and Garbage Collection</dd>
    <dt><code>runtime</code></dt>
    <dd>executes code and reports errors</dd>
    <dt><code>DevTools Console</code></dt>
    <dd>checks values while learning</dd>
  </dl>
  <output id="memory-gc-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#memory-gc-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### مثال 2

```html
<button id="memory-gc-measure" type="button">Measure loop</button>
<output id="memory-gc-out"></output>
<script>
  document.querySelector('#memory-gc-measure').addEventListener('click', () => {
    const start = performance.now();
    const values = Array.from({ length: 1000 }, (_, index) => index * 2);
    const end = performance.now();
    document.querySelector('#memory-gc-out').value =
      `Created ${values.length} values in ${(end - start).toFixed(2)} ms`;
  });
</script>
```

## نکته‌های دقیق authoring

- برای Memory و Garbage Collection، تفاوت JavaScript core با Web APIهای host را مشخص نگه دارید.
- اگر behavior به browser، locale، timezone یا permission وابسته است، آن را در UI و test پوشش دهید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، MDN Reference و در صورت نیاز متن ECMA-262 را کنار اجرای واقعی بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Memory and Garbage Collection, JavaScript Reference, browser compatibility و Web API boundaries نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع Equality و Comparison**.
