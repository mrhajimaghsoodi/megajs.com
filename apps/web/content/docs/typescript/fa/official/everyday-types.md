---
title: "Everyday Types"
description: "این صفحه استفاده از annotationهای رایج TypeScript برای primitive، array، object، union، alias و interface را با مثال TypeScript، جدول syntax و نکته‌های کاربردی برای authoring توضیح می‌دهد."
seoTitle: "Everyday Types - مستندات رسمی TypeScript | MEGA JS"
seoDescription: "Everyday Types (everyday types): خلاصه رسمی TypeScript Docs با Handbook، Reference، Modules، declaration file، tsconfig و نکته compiler همراه تمرین کاربردی."
keywords: "TypeScript, Everyday Types, آموزش TypeScript, مرجع TypeScript, TypeScript Everyday Types, Everyday Types tutorial, everyday types"
order: 6
track: official
sources:
  - name: TypeScript Docs
    url: https://www.typescriptlang.org/docs/
  - name: TypeScript Handbook
    url: https://www.typescriptlang.org/docs/handbook/intro.html
---
# Everyday Types

Everyday Types خلاصه‌ای از ساختار رسمی typescriptlang.org/docs است. تمرکز آن روی استفاده از annotationهای رایج TypeScript برای primitive، array، object، union، alias و interface است و هدف آن کمک به author برای خواندن Handbook و Reference بدون تبدیل صفحه به dump کامل مستندات است.

## چگونه متن رسمی را بخوانیم

در TypeScript Docs، بخش Get Started مسیر ورود را می‌سازد، Handbook مفاهیم روزمره و type-level را توضیح می‌دهد، Reference رفتار module و compiler را دقیق‌تر می‌کند، و Project Configuration تنظیمات production را پوشش می‌دهد.

## اصطلاح‌های کلیدی

| Term | خلاصه author-facing |
| --- | --- |
| `narrowing` | refine کردن type با evidence در runtime |
| `type operator` | operator استفاده‌شده در جایگاه type |
| `literal type` | type مربوط به یک value دقیق |

## مثال‌های قابل اجرا

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
type OfficialStep = 'open docs' | 'read handbook' | 'compile sample' | 'check tsconfig';
const steps: OfficialStep[] = ['open docs', 'read handbook', 'compile sample', 'check tsconfig'];
log('Everyday Types official reading trace');
for (const [index, step] of steps.entries()) {
  log(index + 1, step);
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
const lesson: string = 'Everyday Types';
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

## نکته‌های رسمی و compiler

- در Everyday Types، caveatهای official را با نسخه TypeScript، گزینه‌های tsconfig و runtime واقعی JavaScript مقایسه کنید.
- اگر موضوع به module، declaration file یا JS project مربوط است، behavior package manager و bundler خود را هم بررسی کنید.
- برای code production، متن official را با typecheck در CI، test و validation data خارجی تکمیل کنید.

## گام بعدی

ادامه track رسمی: **Narrowing در Handbook**.
