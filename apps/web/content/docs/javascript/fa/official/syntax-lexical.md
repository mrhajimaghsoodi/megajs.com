---
title: "Grammar واژگانی و Syntax"
description: "این صفحه token، source text، identifier، literal، automatic semicolon insertion و early error را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "Grammar واژگانی و Syntax — خلاصه رسمی ECMA-262 | MEGA JS"
seoDescription: "Grammar واژگانی و Syntax (syntax lexical): خلاصه رسمی ECMA-262 و TC39 برای JavaScript با semantics، الگوریتم spec، مثال HTML و نکته runtime قابل اتکا."
keywords: "JavaScript, Grammar واژگانی و Syntax, آموزش JavaScript, مرجع JavaScript, JavaScript Lexical and Syntactic Grammar, Lexical and Syntactic Grammar tutorial, syntax lexical"
order: 8
track: official
sources:
  - name: ECMA-262
    url: https://tc39.es/ecma262/
  - name: TC39
    url: https://tc39.es/
---
# Grammar واژگانی و Syntax

Grammar واژگانی و Syntax خلاصه‌ای specification-oriented از ECMA-262 و TC39 است. تمرکز آن روی token، source text، identifier، literal، automatic semicolon insertion و early error است، نه روی APIهای host مثل DOM مگر وقتی برای مقایسه با runtime لازم باشد.

## چگونه متن رسمی را بخوانیم

ECMA-262 زبان ECMAScript را با abstract operation، internal slot، completion record و الگوریتم‌های دقیق تعریف می‌کند. JavaScript در مرورگر این زبان را همراه Web APIهایی مثل DOM، fetch و event loop host اجرا می‌کند.

## اصطلاح‌های کلیدی

| Term | خلاصه author-facing |
| --- | --- |
| `Lexical Grammar` | source text را به token تبدیل می‌کند |
| `Automatic Semicolon Insertion` | در موقعیت‌های restricted grammar semicolon اضافه می‌کند |
| `Early Error` | program نامعتبر را پیش از runtime evaluation رد می‌کند |

## مثال‌های قابل اجرا

### مثال 1

```html
<section>
  <h2>Lexical and Syntactic Grammar trace</h2>
  <pre id="syntax-lexical-trace"></pre>
</section>
<script>
  const trace = [
    'Read source text',
    'Create execution context',
    'Evaluate expression',
    'Return completion record'
  ];
  document.querySelector('#syntax-lexical-trace').textContent = trace.join('\n');
</script>
```

### مثال 2

```html
<section>
  <h2>Lexical and Syntactic Grammar</h2>
  <p id="syntax-lexical-text">tokens, source text, identifiers, literals, automatic semicolon insertion, and early errors.</p>
  <output id="syntax-lexical-out"></output>
</section>
<script>
  const text = document.querySelector('#syntax-lexical-text').textContent;
  document.querySelector('#syntax-lexical-out').value =
    `JavaScript handled ${text.length} characters for Lexical and Syntactic Grammar`;
</script>
```

## نکته‌های spec و runtime

- در Grammar واژگانی و Syntax، واژه‌های spec مثل Realm، Job، Environment Record یا Internal Method را با objectهای واقعی DevTools یکی نگیرید.
- هرجا ECMA-262 به host hook اشاره می‌کند، behavior نهایی در browser، Node.js یا runtime دیگر ممکن است از محیط بیاید.
- برای کد production، متن official را با تست واقعی، MDN و compatibility data تکمیل کنید.

## گام بعدی

ادامه track رسمی: **Annexها و Compatibility**.
