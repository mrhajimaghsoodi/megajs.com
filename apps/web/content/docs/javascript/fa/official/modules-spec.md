---
title: "Moduleهای ECMAScript در Spec"
description: "این صفحه module record، resolve شدن import/export، linking، evaluation و top-level await را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "Moduleهای ECMAScript در Spec — خلاصه رسمی ECMA-262 | MEGA JS"
seoDescription: "Moduleهای ECMAScript در Spec (modules spec): خلاصه رسمی ECMA-262 و TC39 برای JavaScript با semantics، الگوریتم spec، مثال HTML و نکته runtime قابل اتکا."
keywords: "JavaScript, Moduleهای ECMAScript در Spec, آموزش JavaScript, مرجع JavaScript, JavaScript ECMAScript Modules in the Spec, ECMAScript Modules in the Spec tutorial, modules spec"
order: 7
track: official
sources:
  - name: ECMA-262
    url: https://tc39.es/ecma262/
  - name: TC39
    url: https://tc39.es/
---
# Moduleهای ECMAScript در Spec

Moduleهای ECMAScript در Spec خلاصه‌ای specification-oriented از ECMA-262 و TC39 است. تمرکز آن روی module record، resolve شدن import/export، linking، evaluation و top-level await است، نه روی APIهای host مثل DOM مگر وقتی برای مقایسه با runtime لازم باشد.

## چگونه متن رسمی را بخوانیم

ECMA-262 زبان ECMAScript را با abstract operation، internal slot، completion record و الگوریتم‌های دقیق تعریف می‌کند. JavaScript در مرورگر این زبان را همراه Web APIهایی مثل DOM، fetch و event loop host اجرا می‌کند.

## اصطلاح‌های کلیدی

| Term | خلاصه author-facing |
| --- | --- |
| `Source Text Module Record` | record مشخصات برای یک ECMAScript module |
| `Link` | dependencyهای module را پیش از evaluation resolve و وصل می‌کند |
| `Evaluate` | پس از linking بدنه module را اجرا می‌کند |

## مثال‌های قابل اجرا

### مثال 1

```html
<section>
  <h2>ECMAScript Modules in the Spec trace</h2>
  <pre id="modules-spec-trace"></pre>
</section>
<script>
  const trace = [
    'Read source text',
    'Create execution context',
    'Evaluate expression',
    'Return completion record'
  ];
  document.querySelector('#modules-spec-trace').textContent = trace.join('\n');
</script>
```

### مثال 2

```html
<output id="modules-spec-out"></output>
<script type="module">
  const moduleName = 'ECMAScript Modules in the Spec';
  const format = (value) => `Module scope: ${value}`;
  document.querySelector('#modules-spec-out').value = format(moduleName);
</script>
```

## نکته‌های spec و runtime

- در Moduleهای ECMAScript در Spec، واژه‌های spec مثل Realm، Job، Environment Record یا Internal Method را با objectهای واقعی DevTools یکی نگیرید.
- هرجا ECMA-262 به host hook اشاره می‌کند، behavior نهایی در browser، Node.js یا runtime دیگر ممکن است از محیط بیاید.
- برای کد production، متن official را با تست واقعی، MDN و compatibility data تکمیل کنید.

## گام بعدی

ادامه track رسمی: **Grammar واژگانی و Syntax**.
