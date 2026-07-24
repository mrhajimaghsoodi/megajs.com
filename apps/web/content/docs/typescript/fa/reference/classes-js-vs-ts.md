---
title: "Class در JavaScript در برابر TypeScript"
description: "این صفحه fieldهای class، constructor، modifierهای visibility، clauseهای implements و JavaScript خروجی را با مثال TypeScript، جدول syntax و نکته‌های کاربردی برای authoring توضیح می‌دهد."
seoTitle: "مرجع Class در JavaScript در برابر TypeScript - سبک MDN برای TypeScript | MEGA JS"
seoDescription: "مرجع Class در JavaScript در برابر TypeScript (classes js vs ts): مرجع MDN-style برای TypeScript با runtime JavaScript، narrowing، DOM typing و مثال compiler."
keywords: "TypeScript, Class در JavaScript در برابر TypeScript, آموزش TypeScript, مرجع TypeScript, TypeScript Classes in JavaScript vs TypeScript, Classes in JavaScript vs TypeScript tutorial, classes js vs ts"
order: 8
track: reference
sources:
  - name: MDN Web Docs - JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Guide - Data types
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
---
# Class در JavaScript در برابر TypeScript

Class در JavaScript در برابر TypeScript یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی fieldهای class، constructor، modifierهای visibility، clauseهای implements و JavaScript خروجی است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، رفتار runtime در JavaScript و contractهای TypeScript را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN، JavaScript با primitiveها، objectها، functionها، moduleها، DOM و Web API توضیح داده می‌شود. هنگام استفاده از Class در JavaScript در برابر TypeScript، به یاد داشته باشید TypeScript typeها را پیش از runtime بررسی و سپس erase می‌کند.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `structural typing` | compatibility بر اساس شکل | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |
| `prototype` | object مربوط به inheritance در runtime | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |
| `interface` | contract static برای object | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |

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
  { syntax: 'structural typing', meaning: 'compatibility by shape', source: 'MDN-style' },
  { syntax: 'prototype', meaning: 'runtime inheritance object', source: 'MDN-style' },
  { syntax: 'interface', meaning: 'static object contract', source: 'MDN-style' }
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
interface Printable {
  label(): string;
}
class LessonCard implements Printable {
  constructor(private title: string, public level: 'basic' | 'advanced') {}
  label(): string {
    return this.title + ' is ' + this.level;
  }
}
log(new LessonCard('Classes in JavaScript vs TypeScript', 'advanced').label());
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

- برای Class در JavaScript در برابر TypeScript، مرز بین value واقعی JavaScript و type erased شده TypeScript را explicit نگه دارید.
- data خارجی مثل JSON، DOM و network را پیش از assertion با guard یا validation بررسی کنید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، TypeScript Handbook و اجرای واقعی در runtime هدف را کنار هم ببینید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Classes in JavaScript vs TypeScript, JavaScript runtime types, DOM/Web API و browser compatibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **ES Module و TypeScript**.
