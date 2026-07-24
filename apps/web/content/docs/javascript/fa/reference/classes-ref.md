---
title: "مرجع Classها"
description: "این صفحه syntax کلاس، constructor، field، method، private name، عضو static و inheritance را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "مرجع Classها — سبک MDN | MEGA JS"
seoDescription: "مرجع Classها (classes ref): مرجع MDNوار برای JavaScript با جدول syntax، مثال HTML، رفتار runtime و نکته DOM یا Web API همراه تمرین کاربردی برای پروژه واقعی وب."
keywords: "JavaScript, مرجع Classها, آموزش JavaScript, مرجع JavaScript, JavaScript Classes Reference, Classes Reference tutorial, classes ref"
order: 6
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# مرجع Classها

مرجع Classها یک صفحه مرجع به سبک MDN است. تمرکز آن روی syntax کلاس، constructor، field، method، private name، عضو static و inheritance است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای DOM یا Web API را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN معمولاً این موضوع کنار JavaScript Guide، JavaScript Reference، built-in objectها و صفحه‌های Web API خوانده می‌شود. هنگام استفاده از مرجع Classها، ابتدا semantics زبان را جدا از قابلیت‌های host مثل DOM، fetch و storage ببینید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `class` | syntax برای constructor و methodهای prototype | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `prototype` | objectی برای inheritance در lookup property | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |
| `extends` | رابطه subclass می‌سازد | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |

## مثال‌ها

### مثال 1

```html
<article class="reference-card">
  <h2>Classes Reference</h2>
  <dl>
    <dt><code>class</code></dt>
    <dd>syntax for constructor and prototype methods</dd>
    <dt><code>prototype</code></dt>
    <dd>object used for property lookup inheritance</dd>
    <dt><code>extends</code></dt>
    <dd>creates a subclass relationship</dd>
  </dl>
  <output id="classes-ref-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#classes-ref-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### مثال 2

```html
<article>
  <h2 id="classes-ref-title">Classes Reference</h2>
  <output id="classes-ref-out"></output>
</article>
<script>
  class Lesson {
    constructor(title) {
      this.title = title;
    }
    label() {
      return `Lesson: ${this.title}`;
    }
  }
  const lesson = new Lesson(document.querySelector('#classes-ref-title').textContent);
  document.querySelector('#classes-ref-out').value = lesson.label();
</script>
```

## نکته‌های دقیق authoring

- برای مرجع Classها، تفاوت JavaScript core با Web APIهای host را مشخص نگه دارید.
- اگر behavior به browser، locale، timezone یا permission وابسته است، آن را در UI و test پوشش دهید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، MDN Reference و در صورت نیاز متن ECMA-262 را کنار اجرای واقعی بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Classes Reference, JavaScript Reference, browser compatibility و Web API boundaries نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع Promise و Async**.
