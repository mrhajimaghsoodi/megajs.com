---
title: "مرجع Signatureهای Function"
description: "این صفحه call signature، callback، parameter اختیاری، overload، this parameter و return type را با مثال TypeScript، جدول syntax و نکته‌های کاربردی برای authoring توضیح می‌دهد."
seoTitle: "مرجع Signatureهای Function - سبک MDN برای TypeScript | MEGA JS"
seoDescription: "مرجع Signatureهای Function (functions signatures): مرجع MDN-style برای TypeScript با runtime JavaScript، narrowing، DOM typing و مثال compiler همراه تمرین."
keywords: "TypeScript, مرجع Signatureهای Function, آموزش TypeScript, مرجع TypeScript, TypeScript Function Signatures Reference, Function Signatures Reference tutorial, functions signatures"
order: 7
track: reference
sources:
  - name: MDN Web Docs - JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Guide - Data types
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
---
# مرجع Signatureهای Function

مرجع Signatureهای Function یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی call signature، callback، parameter اختیاری، overload، this parameter و return type است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، رفتار runtime در JavaScript و contractهای TypeScript را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN، JavaScript با primitiveها، objectها، functionها، moduleها، DOM و Web API توضیح داده می‌شود. هنگام استفاده از مرجع Signatureهای Function، به یاد داشته باشید TypeScript typeها را پیش از runtime بررسی و سپس erase می‌کند.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `call signature` | شکل type برای value قابل call | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |
| `return type` | type تولیدشده توسط function | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |
| `overload` | چند signature برای یک implementation | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |

## مثال‌ها

### مثال 1

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<script src="https://cdn.jsdelivr.net/npm/typescript@5.7.3/lib/typescript.js"></script>
</head>
<body>
<pre id="out"></pre>
<script>
const out = document.querySelector('#out');
const log = (...a) => { out.textContent += a.map(String).join(' ') + '\n'; };
const tsCode = `
type ReferenceTerm = {
  syntax: string;
  meaning: string;
  source: 'MDN-style' | 'TypeScript';
};
const terms: ReferenceTerm[] = [
  { syntax: 'call signature', meaning: 'type shape of a callable value', source: 'MDN-style' },
  { syntax: 'return type', meaning: 'type produced by a function', source: 'MDN-style' },
  { syntax: 'overload', meaning: 'multiple signatures for one implementation', source: 'MDN-style' }
];
terms.forEach((term) => log(term.source, term.syntax, '-', term.meaning));
`;
try {
  const result = ts.transpileModule(tsCode, {
    compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ESNext, strict: true }
  });
  // Run emitted JS in a Function with log in scope
  new Function('log', result.outputText)(log);
} catch (e) {
  log('Error:', e.message || e);
}
</script>
</body>
</html>
```

### مثال 2

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<script src="https://cdn.jsdelivr.net/npm/typescript@5.7.3/lib/typescript.js"></script>
</head>
<body>
<pre id="out"></pre>
<script>
const out = document.querySelector('#out');
const log = (...a) => { out.textContent += a.map(String).join(' ') + '\n'; };
const tsCode = `
type Formatter<T> = (value: T) => string;
const formatNumber: Formatter<number> = (value) => value.toFixed(2);
function label<T>(name: string, value: T, format: Formatter<T>): string {
  return name + ': ' + format(value);
}
log(label('score', 98.126, formatNumber));
`;
try {
  const result = ts.transpileModule(tsCode, {
    compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ESNext, strict: true }
  });
  // Run emitted JS in a Function with log in scope
  new Function('log', result.outputText)(log);
} catch (e) {
  log('Error:', e.message || e);
}
</script>
</body>
</html>
```

## نکته‌های دقیق authoring

- برای مرجع Signatureهای Function، مرز بین value واقعی JavaScript و type erased شده TypeScript را explicit نگه دارید.
- data خارجی مثل JSON، DOM و network را پیش از assertion با guard یا validation بررسی کنید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، TypeScript Handbook و اجرای واقعی در runtime هدف را کنار هم ببینید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Function Signatures Reference, JavaScript runtime types, DOM/Web API و browser compatibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **Class در JavaScript در برابر TypeScript**.
