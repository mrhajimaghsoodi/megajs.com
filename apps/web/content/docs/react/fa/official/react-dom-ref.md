---
title: "مرجع React DOM"
description: "این صفحه createRoot و hydrateRoot در client به همراه APIهای server rendering در React DOM را با مثال React، جدول syntax و نکته‌های کاربردی برای component authoring توضیح می‌دهد."
seoTitle: "مرجع React DOM — مرجع رسمی react.dev | MEGA JS"
seoDescription: "مرجع React DOM (react dom ref): خلاصه رسمی react.dev برای React API Reference با Hooks، Components، React DOM، Compiler و Rules of React همراه تمرین کاربردی."
keywords: "React, مرجع React DOM, آموزش React, مرجع React, React DOM Reference, DOM Reference tutorial, react dom ref"
order: 16
track: official
sources:
  - name: React API Reference
    url: https://react.dev/reference/react
  - name: React Docs
    url: https://react.dev/
---
# مرجع React DOM

مرجع React DOM خلاصه‌ای از ساختار رسمی react.dev/reference است. تمرکز آن روی createRoot و hydrateRoot در client به همراه APIهای server rendering در React DOM است و هدف آن کمک به author برای خواندن API Reference بدون تبدیل کردن صفحه به dump کامل مستندات است.

## چگونه متن رسمی را بخوانیم

در react.dev، APIها بر اساس Hooks، Components، APIهای core، React DOM، Compiler، Rules of React و Legacy APIs گروه‌بندی می‌شوند. هر صفحه رسمی معمولاً signature، caveat، troubleshooting و example دارد؛ این خلاصه همان مسیر را برای تصمیم‌گیری سریع‌تر فشرده می‌کند.

## اصطلاح‌های کلیدی

| Term | خلاصه author-facing |
| --- | --- |
| `ref` | reference به DOM node یا value mutable |
| `React DOM` | package مربوط به React برای render در DOM مرورگر |
| `createRoot` | root مرورگر برای React می‌سازد |

## مثال‌های قابل اجرا

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React DOM Reference official</title>
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
            <h1>React DOM Reference reading trace</h1>
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
    <title>React DOM Reference</title>
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
        const inputRef = useRef(null);
        const [message, setMessage] = useState('Ref is ready');
        return (
          <section className="card">
            <h1>React DOM Reference</h1>
            <input ref={inputRef} defaultValue="Focus me with useRef" />
            <button onClick={() => { inputRef.current.focus(); setMessage('Focused through ref.current'); }}>Focus input</button>
            <p>{message}</p>
          </section>
        );
      }
      ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    </script>
  </body>
</html>
```

## نکته‌های رسمی و runtime

- در مرجع React DOM، caveatهای official را با نسخه React، mode توسعه مثل StrictMode و test واقعی مقایسه کنید.
- اگر API مربوط به server، Compiler یا legacy است، قبل از استفاده production وضعیت پشتیبانی framework خود را بررسی کنید.
- برای code production، متن react.dev را با accessibility، performance و regression test تکمیل کنید.

## گام بعدی

ادامه track رسمی: **مرجع React Compiler**.
