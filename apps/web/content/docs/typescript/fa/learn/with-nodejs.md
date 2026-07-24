---
title: "TypeScript با Node.js"
description: "این صفحه اجرای TypeScript در پروژه‌های Node.js همراه module و ابزار build را با مثال TypeScript، جدول syntax و نکته‌های کاربردی برای authoring توضیح می‌دهد."
seoTitle: "آموزش TypeScript با Node.js در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش TypeScript با Node.js (with nodejs): مثال HTML با typescript.js CDN، تمرین live مسیر W3Schools، type، interface، generics و نکته compiler همراه تمرین."
keywords: "TypeScript, TypeScript با Node.js, آموزش TypeScript, مرجع TypeScript, TypeScript with Node.js, with Node.js tutorial, with nodejs"
order: 27
track: learn
sources:
  - name: W3Schools TypeScript Tutorial
    url: https://www.w3schools.com/typescript/index.php
---
# TypeScript با Node.js

TypeScript با Node.js درباره اجرای TypeScript در پروژه‌های Node.js همراه module و ابزار build است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools TypeScript Tutorial است و مثال‌ها به شکل HTML کامل با typescript.js CDN نوشته شده‌اند تا در live editor اجرا شوند.

هنگام تمرین TypeScript با Node.js فقط به خروجی JavaScript نگاه نکنید؛ پیام compiler، inference، narrowing و تفاوت type با runtime را هم بررسی کنید.

## ایده اصلی

- `moduleResolution`: شیوه پیدا کردن importها توسط TypeScript.
- `NodeNext`: mode مربوط به module با آگاهی از Node.js.
- `ts-node / tsx`: ابزارهایی برای اجرای TypeScript هنگام development.
- برای این موضوع، هماهنگی type، value runtime، inference و خروجی قابل مشاهده نشانه اصلی کیفیت TypeScript code است.

## مثال‌های HTML قابل اجرا با TypeScript

هر مثال یک سند کامل HTML است که TypeScript را از CDN load می‌کند، source را با `ts.transpileModule` به JavaScript تبدیل می‌کند و خروجی را در همان صفحه نشان می‌دهد.

### مثال 1: الگوی TypeScript متمرکز

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
  title: 'TypeScript with Node.js',
  track: 'learn',
  terms: ['moduleResolution', 'NodeNext', 'ts-node / tsx'],
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

### مثال 2: گزینه‌های syntax در context

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
type Term = { syntax: string; purpose: string };
const terms: Term[] = [
  { syntax: 'moduleResolution', purpose: 'how TypeScript finds imports' },
  { syntax: 'NodeNext', purpose: 'Node.js-aware module mode' },
  { syntax: 'ts-node / tsx', purpose: 'tools that run TypeScript during development' }
];
for (const term of terms) {
  log(term.syntax + ' => ' + term.purpose);
}
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

### مثال 3: صفحه تمرینی کامل

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
interface PracticeStep {
  id: number;
  action: string;
  done: boolean;
}
const steps: PracticeStep[] = [
  { id: 1, action: 'Read TypeScript with Node.js', done: true },
  { id: 2, action: 'Change the TypeScript source', done: false },
  { id: 3, action: 'Compare types with runtime output', done: false },
];
const remaining = steps.filter((step) => !step.done);
log('Practice page:', 'with-nodejs');
log('Remaining steps:', remaining.map((step) => step.action).join(' | '));
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

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `moduleResolution` | شیوه پیدا کردن importها توسط TypeScript | در TypeScript با Node.js آن را با strict mode، input نامعتبر و خروجی JavaScript تست کنید. |
| `NodeNext` | mode مربوط به module با آگاهی از Node.js | در TypeScript با Node.js آن را با strict mode، input نامعتبر و خروجی JavaScript تست کنید. |
| `ts-node / tsx` | ابزارهایی برای اجرای TypeScript هنگام development | در TypeScript با Node.js آن را با strict mode، input نامعتبر و خروجی JavaScript تست کنید. |

## اشتباه‌های رایج

- کپی کردن TypeScript با Node.js بدون فعال کردن `strict` یا بدون نگاه به output واقعی JavaScript.
- استفاده از `any` یا assertion برای پنهان کردن data نامطمئن به جای `unknown`، guard و validation.
- فراموش کردن تست `moduleResolution` با input نامعتبر، null/undefined و boundaryهای module یا DOM.

## تمرین کوتاه

یک فایل `with-nodejs.ts` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `moduleResolution` را تغییر دهید. اگر compiler warning یا output عجیب شد، type annotation و value runtime را جدا بررسی کنید.

## گام بعدی

بعد از این صفحه، **TypeScript با React** را بخوانید تا مسیر TypeScript مرحله‌به‌مرحله کامل‌تر شود.
