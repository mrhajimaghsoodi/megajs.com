---
title: "مرجع Closure و Scope"
description: "این صفحه lexical environment، scope chain، lifetime closure، module و نکته memory را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "مرجع Closure و Scope — سبک MDN | MEGA JS"
seoDescription: "مرجع Closure و Scope (closures scope): مرجع MDNوار برای JavaScript با جدول syntax، مثال HTML، رفتار runtime و نکته DOM یا Web API همراه تمرین کاربردی."
keywords: "JavaScript, مرجع Closure و Scope, آموزش JavaScript, مرجع JavaScript, JavaScript Closures and Scope Reference, Closures and Scope Reference tutorial, closures scope"
order: 8
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# مرجع Closure و Scope

مرجع Closure و Scope یک صفحه مرجع به سبک MDN است. تمرکز آن روی lexical environment، scope chain، lifetime closure، module و نکته memory است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای DOM یا Web API را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN معمولاً این موضوع کنار JavaScript Guide، JavaScript Reference، built-in objectها و صفحه‌های Web API خوانده می‌شود. هنگام استفاده از مرجع Closure و Scope، ابتدا semantics زبان را جدا از قابلیت‌های host مثل DOM، fetch و storage ببینید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `lexical scope` | nameها را از nesting source resolve می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `closure` | دسترسی به bindingهای outer را نگه می‌دارد | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `hoisting` | declarationها را پیش از execution آماده می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>Closures and Scope Reference</h2>
  <dl>
    <dt><code>lexical scope</code></dt>
    <dd>resolves names from source nesting</dd>
    <dt><code>closure</code></dt>
    <dd>keeps access to outer bindings</dd>
    <dt><code>hoisting</code></dt>
    <dd>prepares declarations before execution</dd>
  </dl>
  <output id="closures-scope-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#closures-scope-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### مثال 2

```html
<button id="closures-scope-button" type="button">Count clicks</button>
<output id="closures-scope-out"></output>
<script>
  function createCounter() {
    let count = 0;
    return () => {
      count += 1;
      return count;
    };
  }
  const nextCount = createCounter();
  document.querySelector('#closures-scope-button').addEventListener('click', () => {
    document.querySelector('#closures-scope-out').value = `Clicked ${nextCount()} time(s)`;
  });
</script>
```

## نکته‌های دقیق authoring

- برای مرجع Closure و Scope، تفاوت JavaScript core با Web APIهای host را مشخص نگه دارید.
- اگر behavior به browser، locale، timezone یا permission وابسته است، آن را در UI و test پوشش دهید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، MDN Reference و در صورت نیاز متن ECMA-262 را کنار اجرای واقعی بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Closures and Scope Reference, JavaScript Reference, browser compatibility و Web API boundaries نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع Prototype و Inheritance**.
