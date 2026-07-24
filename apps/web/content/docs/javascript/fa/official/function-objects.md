---
title: "Function Object و Call"
description: "این صفحه function object، رفتار call و construct، closure، this binding و constructor کلاس را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "Function Object و Call — خلاصه رسمی ECMA-262 | MEGA JS"
seoDescription: "Function Object و Call (function objects): خلاصه رسمی ECMA-262 و TC39 برای JavaScript با semantics، الگوریتم spec، مثال HTML و نکته runtime قابل اتکا."
keywords: "JavaScript, Function Object و Call, آموزش JavaScript, مرجع JavaScript, JavaScript Function Objects and Calls, Function Objects and Calls tutorial, function objects"
order: 5
track: official
sources:
  - name: ECMA-262
    url: https://tc39.es/ecma262/
  - name: TC39
    url: https://tc39.es/
---
# Function Object و Call

Function Object و Call خلاصه‌ای specification-oriented از ECMA-262 و TC39 است. تمرکز آن روی function object، رفتار call و construct، closure، this binding و constructor کلاس است، نه روی APIهای host مثل DOM مگر وقتی برای مقایسه با runtime لازم باشد.

## چگونه متن رسمی را بخوانیم

ECMA-262 زبان ECMAScript را با abstract operation، internal slot، completion record و الگوریتم‌های دقیق تعریف می‌کند. JavaScript در مرورگر این زبان را همراه Web APIهایی مثل DOM، fetch و event loop host اجرا می‌کند.

## اصطلاح‌های کلیدی

| Term | خلاصه author-facing |
| --- | --- |
| `[[Call]]` | internal method هنگام call شدن function |
| `[[Construct]]` | internal method هنگام استفاده با new |
| `ThisMode` | رفتار this binding از نوع lexical، strict یا global را مشخص می‌کند |

## مثال‌های قابل اجرا

### مثال 1

```html
<section>
  <h2>Function Objects and Calls trace</h2>
  <pre id="function-objects-trace"></pre>
</section>
<script>
  const trace = [
    'Read source text',
    'Create execution context',
    'Evaluate expression',
    'Return completion record'
  ];
  document.querySelector('#function-objects-trace').textContent = trace.join('\n');
</script>
```

### مثال 2

```html
<button id="function-objects-button" type="button">Count clicks</button>
<output id="function-objects-out"></output>
<script>
  function createCounter() {
    let count = 0;
    return () => {
      count += 1;
      return count;
    };
  }
  const nextCount = createCounter();
  document.querySelector('#function-objects-button').addEventListener('click', () => {
    document.querySelector('#function-objects-out').value = `Clicked ${nextCount()} time(s)`;
  });
</script>
```

## نکته‌های spec و runtime

- در Function Object و Call، واژه‌های spec مثل Realm، Job، Environment Record یا Internal Method را با objectهای واقعی DevTools یکی نگیرید.
- هرجا ECMA-262 به host hook اشاره می‌کند، behavior نهایی در browser، Node.js یا runtime دیگر ممکن است از محیط بیاید.
- برای کد production، متن official را با تست واقعی، MDN و compatibility data تکمیل کنید.

## گام بعدی

ادامه track رسمی: **Promise، Job و Microtask**.
