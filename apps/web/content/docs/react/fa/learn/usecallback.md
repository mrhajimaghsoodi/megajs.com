---
title: "Hook با نام useCallback"
description: "این صفحه memoize کردن identity callback برای child component و Effect را با مثال React، جدول syntax و نکته‌های کاربردی برای component authoring توضیح می‌دهد."
seoTitle: "آموزش Hook با نام useCallback در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Hook با نام useCallback (usecallback): مثال HTML با React CDN، JSX، تمرین live مسیر W3Schools، component، props، state و نکته Hooks همراه تمرین کاربردی."
keywords: "React, Hook با نام useCallback, آموزش React, مرجع React, React useCallback Hook, useCallback Hook tutorial, usecallback"
order: 56
track: learn
sources:
  - name: W3Schools React Tutorial
    url: https://www.w3schools.com/react/default.asp
---
# Hook با نام useCallback

Hook با نام useCallback درباره memoize کردن identity callback برای child component و Effect است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools React Tutorial است و مثال‌ها به شکل HTML کامل با React CDN و Babel نوشته شده‌اند تا در live editor اجرا شوند.

در تمرین Hook با نام useCallback فقط ظاهر UI را نبینید؛ render شدن component، تغییر state، props، warningهای Console و رفتار JSX در DOM را هم بررسی کنید.

## ایده اصلی

- `useCallback`: identity function را cache می‌کند.
- `dependency array`: کنترل می‌کند callback چه زمانی تغییر کند.
- `memoized child`: child که props برابر را skip می‌کند.
- برای این موضوع، اندازه‌گیری قبل از optimization و dependencyهای دقیق نشانه اصلی کیفیت React code است.

## مثال‌های HTML قابل اجرا با React

هر مثال یک سند کامل HTML است که react@18، react-dom@18 و @babel/standalone را از CDN load می‌کند. آن را در live editor اجرا کنید و سپس یک state، prop یا JSX branch را تغییر دهید.

### مثال 1: الگوی React متمرکز

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React useCallback Hook</title>
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
      const Result = memo(function Result({ total }) {
        return <p className="badge">Derived total: {total}</p>;
      });
      function App() {
        const [count, setCount] = useState(1);
        const total = useMemo(() => count * 42, [count]);
        const increase = useCallback(() => setCount((value) => value + 1), []);
        return (
          <section className="card">
            <h1>React useCallback Hook</h1>
            <button onClick={increase}>Increase</button>
            <Result total={total} />
          </section>
        );
      }
      ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    </script>
  </body>
</html>
```

### مثال 2: گزینه‌های syntax در context

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React useCallback Hook table</title>
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
      const rows = [
          { syntax: 'useCallback', purpose: 'caches a function identity' },
          { syntax: 'dependency array', purpose: 'controls when callback changes' },
          { syntax: 'memoized child', purpose: 'child that skips equal props' }
      ];
      function App() {
        return (
          <section className="card">
            <h1>React useCallback Hook quick reference</h1>
            <table>
              <thead><tr><th>Syntax</th><th>Purpose</th></tr></thead>
              <tbody>{rows.map((row) => <tr key={row.syntax}><td><code>{row.syntax}</code></td><td>{row.purpose}</td></tr>)}</tbody>
            </table>
          </section>
        );
      }
      ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    </script>
  </body>
</html>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React useCallback Hook practice</title>
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
      function LessonCard({ title, terms, children }) {
        return (
          <article className="card">
            <h1>{title}</h1>
            <ul>{terms.map((term) => <li key={term}>{term}</li>)}</ul>
            {children}
          </article>
        );
      }
      function App() {
        const [done, setDone] = useState(false);
        const terms = ['useCallback', 'dependency array', 'memoized child'];
        return (
          <LessonCard title="React useCallback Hook practice" terms={terms}>
            <label><input type="checkbox" checked={done} onChange={(event) => setDone(event.target.checked)} /> I changed the demo</label>
            <p className="badge">{done ? 'Practice complete' : 'Keep experimenting'}</p>
          </LessonCard>
        );
      }
      ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `useCallback` | identity function را cache می‌کند | در Hook با نام useCallback آن را با render واقعی، state خالی، interaction و Console تست کنید. |
| `dependency array` | کنترل می‌کند callback چه زمانی تغییر کند | در Hook با نام useCallback آن را با render واقعی، state خالی، interaction و Console تست کنید. |
| `memoized child` | child که props برابر را skip می‌کند | در Hook با نام useCallback آن را با render واقعی، state خالی، interaction و Console تست کنید. |

## اشتباه‌های رایج

- کپی کردن Hook با نام useCallback بدون بررسی Console warning، key، dependency array یا update شدن state.
- mutate کردن object یا array در state به جای ساخت copy تازه با spread، map یا filter.
- فراموش کردن تست `useCallback` با keyboard، state خالی، StrictMode و browser هدف.

## تمرین کوتاه

یک فایل `usecallback.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `useCallback` را تغییر دهید. اگر UI تغییر نکرد، Console و محل call شدن `root.render` یا update شدن state را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Hook با نام useMemo** را بخوانید تا مسیر React مرحله‌به‌مرحله کامل‌تر شود.
