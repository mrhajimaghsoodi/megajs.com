---
title: "Objectهای Ordinary و Exotic"
description: "این صفحه internal methodهای object، property descriptor، ordinary object، Array، Proxy و module namespace object را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "Objectهای Ordinary و Exotic — خلاصه رسمی ECMA-262 | MEGA JS"
seoDescription: "Objectهای Ordinary و Exotic (ordinary exotic objects): خلاصه رسمی ECMA-262 و TC39 برای JavaScript با semantics، الگوریتم spec، مثال HTML و نکته runtime قابل."
keywords: "JavaScript, Objectهای Ordinary و Exotic, آموزش JavaScript, مرجع JavaScript, JavaScript Ordinary and Exotic Objects, Ordinary and Exotic Objects tutorial, ordinary exotic objects"
order: 4
track: official
sources:
  - name: ECMA-262
    url: https://tc39.es/ecma262/
  - name: TC39
    url: https://tc39.es/
---
# Objectهای Ordinary و Exotic

Objectهای Ordinary و Exotic خلاصه‌ای specification-oriented از ECMA-262 و TC39 است. تمرکز آن روی internal methodهای object، property descriptor، ordinary object، Array، Proxy و module namespace object است، نه روی APIهای host مثل DOM مگر وقتی برای مقایسه با runtime لازم باشد.

## چگونه متن رسمی را بخوانیم

ECMA-262 زبان ECMAScript را با abstract operation، internal slot، completion record و الگوریتم‌های دقیق تعریف می‌کند. JavaScript در مرورگر این زبان را همراه Web APIهایی مثل DOM، fetch و event loop host اجرا می‌کند.

## اصطلاح‌های کلیدی

| Term | خلاصه author-facing |
| --- | --- |
| `Ordinary Object` | از internal methodهای پیش‌فرض object استفاده می‌کند |
| `Exotic Object` | یک یا چند internal method را customize می‌کند |
| `Property Descriptor` | value، getter، setter و flagهای attribute را توصیف می‌کند |

## مثال‌های قابل اجرا

### مثال 1

```html
<section>
  <h2>Ordinary and Exotic Objects trace</h2>
  <pre id="ordinary-exotic-objects-trace"></pre>
</section>
<script>
  const trace = [
    'Read source text',
    'Create execution context',
    'Evaluate expression',
    'Return completion record'
  ];
  document.querySelector('#ordinary-exotic-objects-trace').textContent = trace.join('\n');
</script>
```

### مثال 2

```html
<article>
  <h2 id="ordinary-exotic-objects-title">Ordinary and Exotic Objects</h2>
  <output id="ordinary-exotic-objects-out"></output>
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
  const lesson = new Lesson(document.querySelector('#ordinary-exotic-objects-title').textContent);
  document.querySelector('#ordinary-exotic-objects-out').value = lesson.label();
</script>
```

## نکته‌های spec و runtime

- در Objectهای Ordinary و Exotic، واژه‌های spec مثل Realm، Job، Environment Record یا Internal Method را با objectهای واقعی DevTools یکی نگیرید.
- هرجا ECMA-262 به host hook اشاره می‌کند، behavior نهایی در browser، Node.js یا runtime دیگر ممکن است از محیط بیاید.
- برای کد production، متن official را با تست واقعی، MDN و compatibility data تکمیل کنید.

## گام بعدی

ادامه track رسمی: **Function Object و Call**.
