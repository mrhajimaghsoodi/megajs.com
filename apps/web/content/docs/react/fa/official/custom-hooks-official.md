---
title: "Hookهای سفارشی در React رسمی"
description: "این صفحه استخراج logic قابل استفاده مجدد همراه رعایت Rules of Hooks و naming convention را با مثال React، جدول syntax و نکته‌های کاربردی برای component authoring توضیح می‌دهد."
seoTitle: "Hookهای سفارشی در React رسمی — مرجع رسمی react.dev | MEGA JS"
seoDescription: "Hookهای سفارشی در React رسمی (custom hooks official): خلاصه رسمی react.dev برای React API Reference با Hooks، Components، React DOM، Compiler و Rules of React."
keywords: "React, Hookهای سفارشی در React رسمی, آموزش React, مرجع React, React Custom Hooks in Official React, Custom Hooks in Official React tutorial, custom hooks official"
order: 13
track: official
sources:
  - name: React API Reference
    url: https://react.dev/reference/react
  - name: React Docs
    url: https://react.dev/
---
# Hookهای سفارشی در React رسمی

Hookهای سفارشی در React رسمی خلاصه‌ای از ساختار رسمی react.dev/reference است. تمرکز آن روی استخراج logic قابل استفاده مجدد همراه رعایت Rules of Hooks و naming convention است و هدف آن کمک به author برای خواندن API Reference بدون تبدیل کردن صفحه به dump کامل مستندات است.

## چگونه متن رسمی را بخوانیم

در react.dev، APIها بر اساس Hooks، Components، APIهای core، React DOM، Compiler، Rules of React و Legacy APIs گروه‌بندی می‌شوند. هر صفحه رسمی معمولاً signature، caveat، troubleshooting و example دارد؛ این خلاصه همان مسیر را برای تصمیم‌گیری سریع‌تر فشرده می‌کند.

## اصطلاح‌های کلیدی

| Term | خلاصه author-facing |
| --- | --- |
| `React` | ویژگی کتابخانه React برای Hookهای سفارشی در React رسمی |
| `component` | واحد قابل استفاده مجدد UI |
| `props` | inputهایی که به component پاس داده می‌شوند |

## مثال‌های قابل اجرا

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Hooks in Official React official</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
      body { font-family: system-ui, sans-serif; margin: 1.5rem; line-height: 1.5; color: #1f2937; }
      button, input, select, textarea { font: inherit; margin: 0.25rem; }
      .card { border: 1px solid #d1d5db; border-radius: 0.75rem; padding: 1rem; max-width: 34rem; }
      .row { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; }
      .badge { display: inline-block; border-radius: 999px; background: #e0f2fe; color: #075985; padding: 0.15rem 0.5rem; }
      .muted { color: #64748b; }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <div id="modal-root"></div>
    <script type="text/babel">
      const { useState, useEffect, useContext, useMemo, useCallback, useRef, useReducer, useTransition, useDeferredValue, useId, Suspense, StrictMode, Fragment, memo, createContext } = React;
      const steps = [
        'Open the react.dev reference page',
        'Read the signature and caveats',
        'Run a small component example',
        'Add tests for the production behavior'
      ];
      function App() {
        return (
          <section className="card">
            <h1>Custom Hooks in Official React reading trace</h1>
            <ol>{steps.map((step) => <li key={step}>{step}</li>)}</ol>
          </section>
        );
      }
      ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    </script>
  </body>
</html>
```

### مثال 2

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom Hooks in Official React</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
      body { font-family: system-ui, sans-serif; margin: 1.5rem; line-height: 1.5; color: #1f2937; }
      button, input, select, textarea { font: inherit; margin: 0.25rem; }
      .card { border: 1px solid #d1d5db; border-radius: 0.75rem; padding: 1rem; max-width: 34rem; }
      .row { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; }
      .badge { display: inline-block; border-radius: 999px; background: #e0f2fe; color: #075985; padding: 0.15rem 0.5rem; }
      .muted { color: #64748b; }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <div id="modal-root"></div>
    <script type="text/babel">
      const { useState, useEffect, useContext, useMemo, useCallback, useRef, useReducer, useTransition, useDeferredValue, useId, Suspense, StrictMode, Fragment, memo, createContext } = React;
      function App() {
        const [count, setCount] = useState(0);
        return (
          <section className="card">
            <h1>Custom Hooks in Official React</h1>
            <p>{'extracting reusable logic while following the Rules of Hooks and naming conventions'}</p>
            <button onClick={() => setCount((value) => value + 1)}>Clicked {count} time(s)</button>
          </section>
        );
      }
      ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    </script>
  </body>
</html>
```

## نکته‌های رسمی و runtime

- در Hookهای سفارشی در React رسمی، caveatهای official را با نسخه React، mode توسعه مثل StrictMode و test واقعی مقایسه کنید.
- اگر API مربوط به server، Compiler یا legacy است، قبل از استفاده production وضعیت پشتیبانی framework خود را بررسی کنید.
- برای code production، متن react.dev را با accessibility، performance و regression test تکمیل کنید.

## گام بعدی

ادامه track رسمی: **مرجع Componentهای داخلی**.
