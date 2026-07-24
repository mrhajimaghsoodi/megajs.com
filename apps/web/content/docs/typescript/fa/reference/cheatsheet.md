---
title: "Cheatsheet مرجع TypeScript"
description: "این صفحه مرور فشرده runtime type، narrowing، declaration، type کردن DOM، module و assertion امن را با مثال TypeScript، جدول syntax و نکته‌های کاربردی برای authoring توضیح می‌دهد."
seoTitle: "Cheatsheet مرجع TypeScript - سبک MDN برای TypeScript | MEGA JS"
seoDescription: "Cheatsheet مرجع TypeScript (cheatsheet): مرجع MDN-style برای TypeScript با runtime JavaScript، narrowing، DOM typing و مثال compiler همراه تمرین کاربردی."
keywords: "TypeScript, Cheatsheet مرجع TypeScript, آموزش TypeScript, مرجع TypeScript, TypeScript MDN-style Cheatsheet, MDN-style Cheatsheet tutorial, cheatsheet"
order: 18
track: reference
sources:
  - name: MDN Web Docs - JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Guide - Data types
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures
---
# Cheatsheet مرجع TypeScript

Cheatsheet مرجع TypeScript یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی مرور فشرده runtime type، narrowing، declaration، type کردن DOM، module و assertion امن است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، رفتار runtime در JavaScript و contractهای TypeScript را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN، JavaScript با primitiveها، objectها، functionها، moduleها، DOM و Web API توضیح داده می‌شود. هنگام استفاده از Cheatsheet مرجع TypeScript، به یاد داشته باشید TypeScript typeها را پیش از runtime بررسی و سپس erase می‌کند.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `TypeScript` | ویژگی typed JavaScript برای Cheatsheet مرجع TypeScript | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |
| `type` | توصیف static که پیش از runtime check می‌شود | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |
| `runtime` | رفتار JavaScript پس از erase شدن TypeScript | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |

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
  { syntax: 'TypeScript', meaning: 'typed JavaScript feature used in TypeScript MDN-style Cheatsheet', source: 'MDN-style' },
  { syntax: 'type', meaning: 'static description checked before runtime', source: 'MDN-style' },
  { syntax: 'runtime', meaning: 'JavaScript behavior after TypeScript is erased', source: 'MDN-style' }
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
type Lesson = {
  title: string;
  track: 'learn' | 'reference' | 'official';
  terms: string[];
};
const lesson: Lesson = {
  title: 'TypeScript MDN-style Cheatsheet',
  track: 'reference',
  terms: ['TypeScript', 'type', 'runtime'],
};
log(lesson.title, lesson.track, lesson.terms.join(', '));
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

- برای Cheatsheet مرجع TypeScript، مرز بین value واقعی JavaScript و type erased شده TypeScript را explicit نگه دارید.
- data خارجی مثل JSON، DOM و network را پیش از assertion با guard یا validation بررسی کنید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، TypeScript Handbook و اجرای واقعی در runtime هدف را کنار هم ببینید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره TypeScript MDN-style Cheatsheet, JavaScript runtime types, DOM/Web API و browser compatibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

پس از پایان مرجع، برای نگاه رسمی وارد track TypeScript Docs شوید.
