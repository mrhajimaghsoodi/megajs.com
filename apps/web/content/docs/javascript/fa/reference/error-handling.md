---
title: "مرجع مدیریت Error"
description: "این صفحه Error object، throw، try/catch/finally، cause، stack trace و تصمیم recovery را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "مرجع مدیریت Error — سبک MDN | MEGA JS"
seoDescription: "مرجع مدیریت Error (error handling): مرجع MDNوار برای JavaScript با جدول syntax، مثال HTML، رفتار runtime و نکته DOM یا Web API همراه تمرین کاربردی."
keywords: "JavaScript, مرجع مدیریت Error, آموزش JavaScript, مرجع JavaScript, JavaScript Error Handling Reference, Error Handling Reference tutorial, error handling"
order: 15
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# مرجع مدیریت Error

مرجع مدیریت Error یک صفحه مرجع به سبک MDN است. تمرکز آن روی Error object، throw، try/catch/finally، cause، stack trace و تصمیم recovery است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای DOM یا Web API را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN معمولاً این موضوع کنار JavaScript Guide، JavaScript Reference، built-in objectها و صفحه‌های Web API خوانده می‌شود. هنگام استفاده از مرجع مدیریت Error، ابتدا semantics زبان را جدا از قابلیت‌های host مثل DOM، fetch و storage ببینید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `Error` | object شکست runtime را نمایش می‌دهد | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `throw` | condition استثنایی را signal می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `try/catch` | errorهای throw یا await شده را مدیریت می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>Error Handling Reference</h2>
  <dl>
    <dt><code>Error</code></dt>
    <dd>represents a runtime failure object</dd>
    <dt><code>throw</code></dt>
    <dd>signals an exceptional condition</dd>
    <dt><code>try/catch</code></dt>
    <dd>handles thrown or awaited errors</dd>
  </dl>
  <output id="error-handling-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#error-handling-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### مثال 2

```html
<button id="error-handling-run" type="button">Run safely</button>
<output id="error-handling-out"></output>
<script>
  document.querySelector('#error-handling-run').addEventListener('click', () => {
    try {
      JSON.parse('{ "valid": true }');
      document.querySelector('#error-handling-out').value = 'No error';
    } catch (error) {
      document.querySelector('#error-handling-out').value = error.message;
    }
  });
</script>
```

## نکته‌های دقیق authoring

- برای مرجع مدیریت Error، تفاوت JavaScript core با Web APIهای host را مشخص نگه دارید.
- اگر behavior به browser، locale، timezone یا permission وابسته است، آن را در UI و test پوشش دهید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، MDN Reference و در صورت نیاز متن ECMA-262 را کنار اجرای واقعی بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Error Handling Reference, JavaScript Reference, browser compatibility و Web API boundaries نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع Moduleها**.
