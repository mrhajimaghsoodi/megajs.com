---
title: "مرجع Moduleها"
description: "این صفحه خواندن syntax مربوط به module در TypeScript، resolution، رفتار emit، import فقط برای type و مرز ESM/CJS را با مثال TypeScript، جدول syntax و نکته‌های کاربردی برای authoring توضیح می‌دهد."
seoTitle: "مرجع Moduleها - مستندات رسمی TypeScript | MEGA JS"
seoDescription: "مرجع Moduleها (modules reference): خلاصه رسمی TypeScript Docs با Handbook، Reference، Modules، declaration file، tsconfig و نکته compiler همراه تمرین کاربردی."
keywords: "TypeScript, مرجع Moduleها, آموزش TypeScript, مرجع TypeScript, TypeScript Modules Reference, Modules Reference tutorial, modules reference"
order: 18
track: official
sources:
  - name: TypeScript Docs
    url: https://www.typescriptlang.org/docs/
  - name: TypeScript Handbook
    url: https://www.typescriptlang.org/docs/handbook/intro.html
---
# مرجع Moduleها

مرجع Moduleها خلاصه‌ای از ساختار رسمی typescriptlang.org/docs است. تمرکز آن روی خواندن syntax مربوط به module در TypeScript، resolution، رفتار emit، import فقط برای type و مرز ESM/CJS است و هدف آن کمک به author برای خواندن Handbook و Reference بدون تبدیل صفحه به dump کامل مستندات است.

## چگونه متن رسمی را بخوانیم

در TypeScript Docs، بخش Get Started مسیر ورود را می‌سازد، Handbook مفاهیم روزمره و type-level را توضیح می‌دهد، Reference رفتار module و compiler را دقیق‌تر می‌کند، و Project Configuration تنظیمات production را پوشش می‌دهد.

## اصطلاح‌های کلیدی

| Term | خلاصه author-facing |
| --- | --- |
| `import type` | فقط یک type را import می‌کند |
| `moduleResolution` | ruleهای پیدا کردن فایل‌های module |
| `ESM` | سیستم استاندارد module در JavaScript |

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
log('Modules Reference official reading trace');
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
type ModuleInfo = { mode: 'ESM' | 'CommonJS'; typeOnlyImports: boolean };
const info: ModuleInfo = { mode: 'ESM', typeOnlyImports: true };
log('Module mode:', info.mode);
log('Uses import type:', info.typeOnlyImports);
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

- در مرجع Moduleها، caveatهای official را با نسخه TypeScript، گزینه‌های tsconfig و runtime واقعی JavaScript مقایسه کنید.
- اگر موضوع به module، declaration file یا JS project مربوط است، behavior package manager و bundler خود را هم بررسی کنید.
- برای code production، متن official را با typecheck در CI، test و validation data خارجی تکمیل کنید.

## گام بعدی

ادامه track رسمی: **Declaration Fileها**.
