---
title: "Annexها و Compatibility"
description: "این صفحه رفتار normative optional، annexهای web compatibility، featureهای legacy و نکته implementation را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "Annexها و Compatibility — خلاصه رسمی ECMA-262 | MEGA JS"
seoDescription: "Annexها و Compatibility (annexes compatibility): خلاصه رسمی ECMA-262 و TC39 برای JavaScript با semantics، الگوریتم spec، مثال HTML و نکته runtime قابل اتکا."
keywords: "JavaScript, Annexها و Compatibility, آموزش JavaScript, مرجع JavaScript, JavaScript Annexes and Compatibility, Annexes and Compatibility tutorial, annexes compatibility"
order: 9
track: official
sources:
  - name: ECMA-262
    url: https://tc39.es/ecma262/
  - name: TC39
    url: https://tc39.es/
---
# Annexها و Compatibility

Annexها و Compatibility خلاصه‌ای specification-oriented از ECMA-262 و TC39 است. تمرکز آن روی رفتار normative optional، annexهای web compatibility، featureهای legacy و نکته implementation است، نه روی APIهای host مثل DOM مگر وقتی برای مقایسه با runtime لازم باشد.

## چگونه متن رسمی را بخوانیم

ECMA-262 زبان ECMAScript را با abstract operation، internal slot، completion record و الگوریتم‌های دقیق تعریف می‌کند. JavaScript در مرورگر این زبان را همراه Web APIهایی مثل DOM، fetch و event loop host اجرا می‌کند.

## اصطلاح‌های کلیدی

| Term | خلاصه author-facing |
| --- | --- |
| `Annex B` | رفتار legacy برای web compatibility را تعریف می‌کند |
| `normative optional` | رفتاری مجاز که implementation طبق ruleهای spec می‌تواند انتخاب کند |
| `legacy feature` | رفتار قدیمی حفظ‌شده برای محتوای موجود وب |

## مثال‌های قابل اجرا

### مثال 1

```html
<section>
  <h2>Annexes and Compatibility trace</h2>
  <pre id="annexes-compatibility-trace"></pre>
</section>
<script>
  const trace = [
    'Read source text',
    'Create execution context',
    'Evaluate expression',
    'Return completion record'
  ];
  document.querySelector('#annexes-compatibility-trace').textContent = trace.join('\n');
</script>
```

### مثال 2

```html
<section>
  <h2>Annexes and Compatibility</h2>
  <p id="annexes-compatibility-text">normative optional behavior, web compatibility annexes, legacy features, and implementation notes.</p>
  <output id="annexes-compatibility-out"></output>
</section>
<script>
  const text = document.querySelector('#annexes-compatibility-text').textContent;
  document.querySelector('#annexes-compatibility-out').value =
    `JavaScript handled ${text.length} characters for Annexes and Compatibility`;
</script>
```

## نکته‌های spec و runtime

- در Annexها و Compatibility، واژه‌های spec مثل Realm، Job، Environment Record یا Internal Method را با objectهای واقعی DevTools یکی نگیرید.
- هرجا ECMA-262 به host hook اشاره می‌کند، behavior نهایی در browser، Node.js یا runtime دیگر ممکن است از محیط بیاید.
- برای کد production، متن official را با تست واقعی، MDN و compatibility data تکمیل کنید.

## گام بعدی

بعد از پایان این track، یک صفحه reference را باز کنید و behavior آن را در Console تست کنید.
