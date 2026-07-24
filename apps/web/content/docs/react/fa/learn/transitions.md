---
title: "Transitionها در React"
description: "این صفحه علامت‌گذاری updateهای غیر فوری با APIهای transition و feedback خوانا را با مثال React، جدول syntax و نکته‌های کاربردی برای component authoring توضیح می‌دهد."
seoTitle: "آموزش Transitionها در React در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Transitionها در React (transitions): مثال HTML با React CDN، JSX، تمرین live مسیر W3Schools، component، props، state و نکته Hooks همراه تمرین کاربردی."
keywords: "React, Transitionها در React, آموزش React, مرجع React, React Transitions, Transitions tutorial, transitions"
order: 46
track: learn
sources:
  - name: W3Schools React Tutorial
    url: https://www.w3schools.com/react/default.asp
---
# Transitionها در React

Transitionها در React درباره علامت‌گذاری updateهای غیر فوری با APIهای transition و feedback خوانا است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools React Tutorial است و مثال‌ها به شکل HTML کامل با React CDN و Babel نوشته شده‌اند تا در live editor اجرا شوند.

در تمرین Transitionها در React فقط ظاهر UI را نبینید؛ render شدن component، تغییر state، props، warningهای Console و رفتار JSX در DOM را هم بررسی کنید.

## ایده اصلی

- `useTransition`: updateهای غیر فوری را علامت می‌زند.
- `isPending`: progress مربوط به transition را نشان می‌دهد.
- `startTransition`: کار UI با priority پایین‌تر schedule می‌کند.
- برای این موضوع، هماهنگی JSX، props، state و behavior قابل مشاهده در UI نشانه اصلی کیفیت React code است.

## مثال‌های HTML قابل اجرا با React

هر مثال یک سند کامل HTML است که react@18، react-dom@18 و @babel/standalone را از CDN load می‌کند. آن را در live editor اجرا کنید و سپس یک state، prop یا JSX branch را تغییر دهید.

### مثال 1: الگوی React متمرکز

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Transitions</title>
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
        const [query, setQuery] = useState('');
        const [isPending, startTransition] = useTransition();
        const deferredQuery = useDeferredValue(query);
        const items = Array.from({ length: 8 }, (_, index) => deferredQuery + ' item ' + (index + 1));
        return (
          <section className="card">
            <h1>React Transitions</h1>
            <input value={query} onChange={(event) => startTransition(() => setQuery(event.target.value))} placeholder="Type a topic" />
            <p>{isPending ? 'Updating...' : 'Ready'}</p>
            <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
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
    <title>React Transitions table</title>
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
          { syntax: 'useTransition', purpose: 'marks non-urgent updates' },
          { syntax: 'isPending', purpose: 'shows transition progress' },
          { syntax: 'startTransition', purpose: 'schedules lower-priority UI work' }
      ];
      function App() {
        return (
          <section className="card">
            <h1>React Transitions quick reference</h1>
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
    <title>React Transitions practice</title>
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
        const terms = ['useTransition', 'isPending', 'startTransition'];
        return (
          <LessonCard title="React Transitions practice" terms={terms}>
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
| `useTransition` | updateهای غیر فوری را علامت می‌زند | در Transitionها در React آن را با render واقعی، state خالی، interaction و Console تست کنید. |
| `isPending` | progress مربوط به transition را نشان می‌دهد | در Transitionها در React آن را با render واقعی، state خالی، interaction و Console تست کنید. |
| `startTransition` | کار UI با priority پایین‌تر schedule می‌کند | در Transitionها در React آن را با render واقعی، state خالی، interaction و Console تست کنید. |

## اشتباه‌های رایج

- کپی کردن Transitionها در React بدون بررسی Console warning، key، dependency array یا update شدن state.
- mutate کردن object یا array در state به جای ساخت copy تازه با spread، map یا filter.
- فراموش کردن تست `useTransition` با keyboard، state خالی، StrictMode و browser هدف.

## تمرین کوتاه

یک فایل `transitions.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `useTransition` را تغییر دهید. اگر UI تغییر نکرد، Console و محل call شدن `root.render` یا update شدن state را بررسی کنید.

## گام بعدی

بعد از این صفحه، **forwardRef در React** را بخوانید تا مسیر React مرحله‌به‌مرحله کامل‌تر شود.
