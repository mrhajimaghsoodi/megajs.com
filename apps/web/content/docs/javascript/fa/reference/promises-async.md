---
title: "مرجع Promise و Async"
description: "این صفحه stateهای Promise، job، async function، await، مدیریت rejection و helperهای concurrency را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "مرجع Promise و Async — سبک MDN | MEGA JS"
seoDescription: "مرجع Promise و Async (promises async): مرجع MDNوار برای JavaScript با جدول syntax، مثال HTML، رفتار runtime و نکته DOM یا Web API همراه تمرین کاربردی."
keywords: "JavaScript, مرجع Promise و Async, آموزش JavaScript, مرجع JavaScript, JavaScript Promises and Async Reference, Promises and Async Reference tutorial, promises async"
order: 7
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# مرجع Promise و Async

مرجع Promise و Async یک صفحه مرجع به سبک MDN است. تمرکز آن روی stateهای Promise، job، async function، await، مدیریت rejection و helperهای concurrency است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای DOM یا Web API را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN معمولاً این موضوع کنار JavaScript Guide، JavaScript Reference، built-in objectها و صفحه‌های Web API خوانده می‌شود. هنگام استفاده از مرجع Promise و Async، ابتدا semantics زبان را جدا از قابلیت‌های host مثل DOM، fetch و storage ببینید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `Promise` | completion یا failure آینده را نمایش می‌دهد | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `microtask` | بعد از task فعلی و پیش از فرصت rendering اجرا می‌شود | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `async/await` | جریان Promise را با ساختار کنترل روشن‌تر بیان می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>Promises and Async Reference</h2>
  <dl>
    <dt><code>Promise</code></dt>
    <dd>represents future completion or failure</dd>
    <dt><code>microtask</code></dt>
    <dd>runs after the current task before rendering opportunities</dd>
    <dt><code>async/await</code></dt>
    <dd>expresses Promise flow with clearer control structure</dd>
  </dl>
  <output id="promises-async-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#promises-async-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### مثال 2

```html
<button id="promises-async-load" type="button">Load async data</button>
<output id="promises-async-out"></output>
<script>
  const wait = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 250));
  document.querySelector('#promises-async-load').addEventListener('click', async () => {
    document.querySelector('#promises-async-out').value = 'Loading...';
    const result = await wait('Promise fulfilled');
    document.querySelector('#promises-async-out').value = result;
  });
</script>
```

## نکته‌های دقیق authoring

- برای مرجع Promise و Async، تفاوت JavaScript core با Web APIهای host را مشخص نگه دارید.
- اگر behavior به browser، locale، timezone یا permission وابسته است، آن را در UI و test پوشش دهید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، MDN Reference و در صورت نیاز متن ECMA-262 را کنار اجرای واقعی بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Promises and Async Reference, JavaScript Reference, browser compatibility و Web API boundaries نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع Closure و Scope**.
