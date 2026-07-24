---
title: "Primitive Wrapperها و TypeScript"
description: "این صفحه wrapperهای String، Number، Boolean، annotationهای primitive و دلیل ترجیح typeهای lowercase را با مثال TypeScript، جدول syntax و نکته‌های کاربردی برای authoring توضیح می‌دهد."
seoTitle: "مرجع Primitive Wrapperها و TypeScript - سبک MDN برای TypeScript | MEGA JS"
seoDescription: "مرجع Primitive Wrapperها و TypeScript (primitive wrappers): مرجع MDN-style برای TypeScript با runtime JavaScript، narrowing، DOM typing و مثال compiler."
keywords: "TypeScript, Primitive Wrapperها و TypeScript, آموزش TypeScript, مرجع TypeScript, TypeScript Primitive Wrappers and TypeScript, Primitive Wrappers and TypeScript tutorial, primitive wrappers"
order: 3
track: reference
sources:
  - name: MDN Web Docs - JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Guide - Data types
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
---
# Primitive Wrapperها و TypeScript

Primitive Wrapperها و TypeScript یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی wrapperهای String، Number، Boolean، annotationهای primitive و دلیل ترجیح typeهای lowercase است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، رفتار runtime در JavaScript و contractهای TypeScript را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN، JavaScript با primitiveها، objectها، functionها، moduleها، DOM و Web API توضیح داده می‌شود. هنگام استفاده از Primitive Wrapperها و TypeScript، به یاد داشته باشید TypeScript typeها را پیش از runtime بررسی و سپس erase می‌کند.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `narrowing` | refine کردن type با evidence در runtime | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |
| `type operator` | operator استفاده‌شده در جایگاه type | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |
| `literal type` | type مربوط به یک value دقیق | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |

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
  { syntax: 'narrowing', meaning: 'refining a type through runtime evidence', source: 'MDN-style' },
  { syntax: 'type operator', meaning: 'operator used in type positions', source: 'MDN-style' },
  { syntax: 'literal type', meaning: 'type for one exact value', source: 'MDN-style' }
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
const lesson: string = 'Primitive Wrappers and TypeScript';
const attempts: number = 3;
const complete: boolean = attempts > 2;
log(lesson, 'complete:', complete);
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

- برای Primitive Wrapperها و TypeScript، مرز بین value واقعی JavaScript و type erased شده TypeScript را explicit نگه دارید.
- data خارجی مثل JSON، DOM و network را پیش از assertion با guard یا validation بررسی کنید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، TypeScript Handbook و اجرای واقعی در runtime هدف را کنار هم ببینید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Primitive Wrappers and TypeScript, JavaScript runtime types, DOM/Web API و browser compatibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع typeof و instanceof**.
