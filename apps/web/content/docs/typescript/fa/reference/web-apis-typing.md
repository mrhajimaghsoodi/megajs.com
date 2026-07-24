---
title: "مرجع Typeهای Web API"
description: "این صفحه declarationهای lib.dom، fetch، event، storage، worker و compatibility مرورگر در code typed را با مثال TypeScript، جدول syntax و نکته‌های کاربردی برای authoring توضیح می‌دهد."
seoTitle: "مرجع Typeهای Web API - سبک MDN برای TypeScript | MEGA JS"
seoDescription: "مرجع Typeهای Web API (web apis typing): مرجع MDN-style برای TypeScript با runtime JavaScript، narrowing، DOM typing و مثال compiler همراه تمرین کاربردی."
keywords: "TypeScript, مرجع Typeهای Web API, آموزش TypeScript, مرجع TypeScript, TypeScript Web APIs Typing Reference, Web APIs Typing Reference tutorial, web apis typing"
order: 13
track: reference
sources:
  - name: MDN Web Docs - JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Guide - Data types
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
---
# مرجع Typeهای Web API

مرجع Typeهای Web API یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی declarationهای lib.dom، fetch، event، storage، worker و compatibility مرورگر در code typed است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، رفتار runtime در JavaScript و contractهای TypeScript را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN، JavaScript با primitiveها، objectها، functionها، moduleها، DOM و Web API توضیح داده می‌شود. هنگام استفاده از مرجع Typeهای Web API، به یاد داشته باشید TypeScript typeها را پیش از runtime بررسی و سپس erase می‌کند.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `HTMLElement` | type پایه برای بسیاری از elementهای DOM | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |
| `EventTarget` | type گسترده برای target رخداد | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |
| `lib.dom.d.ts` | library declaration برای DOM | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |

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
  { syntax: 'HTMLElement', meaning: 'base type for many DOM elements', source: 'MDN-style' },
  { syntax: 'EventTarget', meaning: 'broad event target type', source: 'MDN-style' },
  { syntax: 'lib.dom.d.ts', meaning: 'DOM declaration library', source: 'MDN-style' }
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
interface Lesson {
  title: string;
  minutes?: number;
  readonly track: 'learn' | 'reference' | 'official';
}
const lesson: Lesson = { title: 'Web APIs Typing Reference', minutes: 12, track: 'reference' };
log(lesson.title, lesson.minutes ?? 0, lesson.track);
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

- برای مرجع Typeهای Web API، مرز بین value واقعی JavaScript و type erased شده TypeScript را explicit نگه دارید.
- data خارجی مثل JSON، DOM و network را پیش از assertion با guard یا validation بررسی کنید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، TypeScript Handbook و اجرای واقعی در runtime هدف را کنار هم ببینید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Web APIs Typing Reference, JavaScript runtime types, DOM/Web API و browser compatibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع Type کردن DOM**.
