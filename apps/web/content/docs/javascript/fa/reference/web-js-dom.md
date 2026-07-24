---
title: "مرجع JavaScript و DOM"
description: "این صفحه APIهای مرورگر پیرامون document، event، form، storage، fetch و مرز Web API را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "مرجع JavaScript و DOM — سبک MDN | MEGA JS"
seoDescription: "مرجع JavaScript و DOM (web js dom): مرجع MDNوار برای JavaScript با جدول syntax، مثال HTML، رفتار runtime و نکته DOM یا Web API همراه تمرین کاربردی."
keywords: "JavaScript, مرجع JavaScript و DOM, آموزش JavaScript, مرجع JavaScript, JavaScript and the DOM Reference, and the DOM Reference tutorial, web js dom"
order: 22
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# مرجع JavaScript و DOM

مرجع JavaScript و DOM یک صفحه مرجع به سبک MDN است. تمرکز آن روی APIهای مرورگر پیرامون document، event، form، storage، fetch و مرز Web API است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای DOM یا Web API را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN معمولاً این موضوع کنار JavaScript Guide، JavaScript Reference، built-in objectها و صفحه‌های Web API خوانده می‌شود. هنگام استفاده از مرجع JavaScript و DOM، ابتدا semantics زبان را جدا از قابلیت‌های host مثل DOM، fetch و storage ببینید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `Web API` | قابلیتی از مرورگر که از JavaScript استفاده می‌شود | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `DOM` | document object model که JavaScript update می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `event loop` | کار user، network، timer و rendering را schedule می‌کند | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>JavaScript and the DOM Reference</h2>
  <dl>
    <dt><code>Web API</code></dt>
    <dd>browser-provided capability used from JavaScript</dd>
    <dt><code>DOM</code></dt>
    <dd>the document object model JavaScript updates</dd>
    <dt><code>event loop</code></dt>
    <dd>schedules user, network, timer, and rendering work</dd>
  </dl>
  <output id="web-js-dom-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#web-js-dom-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### مثال 2

```html
<button id="web-js-dom-toggle" type="button">Toggle state</button>
<p id="web-js-dom-status">Waiting for an event.</p>
<script>
  const button = document.querySelector('#web-js-dom-toggle');
  const status = document.querySelector('#web-js-dom-status');
  button.addEventListener('click', (event) => {
    status.textContent = `Handled ${event.type} on #${event.currentTarget.id}`;
    status.classList.toggle('is-active');
  });
</script>
```

## نکته‌های دقیق authoring

- برای مرجع JavaScript و DOM، تفاوت JavaScript core با Web APIهای host را مشخص نگه دارید.
- اگر behavior به browser، locale، timezone یا permission وابسته است، آن را در UI و test پوشش دهید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، MDN Reference و در صورت نیاز متن ECMA-262 را کنار اجرای واقعی بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره JavaScript and the DOM Reference, JavaScript Reference, browser compatibility و Web API boundaries نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **Cheatsheet JavaScript**.
