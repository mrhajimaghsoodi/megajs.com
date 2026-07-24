---
title: "Upgrade پروژه‌های React"
description: "این صفحه حرکت از patternهای قدیمی React به React 18 createRoot و عادت‌های مدرن docs را با مثال React، جدول syntax و نکته‌های کاربردی برای component authoring توضیح می‌دهد."
seoTitle: "آموزش Upgrade پروژه‌های React در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Upgrade پروژه‌های React (upgrade): مثال HTML با React CDN، JSX، تمرین live مسیر W3Schools، component، props، state و نکته Hooks همراه تمرین کاربردی."
keywords: "React, Upgrade پروژه‌های React, آموزش React, مرجع React, React Upgrade React Projects, Upgrade React Projects tutorial, upgrade"
order: 6
track: learn
sources:
  - name: W3Schools React Tutorial
    url: https://www.w3schools.com/react/default.asp
---
# Upgrade پروژه‌های React

Upgrade پروژه‌های React درباره حرکت از patternهای قدیمی React به React 18 createRoot و عادت‌های مدرن docs است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools React Tutorial است و مثال‌ها به شکل HTML کامل با React CDN و Babel نوشته شده‌اند تا در live editor اجرا شوند.

در تمرین Upgrade پروژه‌های React فقط ظاهر UI را نبینید؛ render شدن component، تغییر state، props، warningهای Console و رفتار JSX در DOM را هم بررسی کنید.

## ایده اصلی

- `React 18`: نسخه مدرن React با createRoot.
- `legacy render`: API قدیمی ReactDOM.render.
- `StrictMode`: checkهای development برای component امن‌تر.
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
    <title>Upgrade React Projects</title>
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
            <h1>Upgrade React Projects</h1>
            <p>{'moving from older React patterns to React 18 createRoot and modern docs habits'}</p>
            <button onClick={() => setCount((value) => value + 1)}>Clicked {count} time(s)</button>
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
    <title>Upgrade React Projects table</title>
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
          { syntax: 'React 18', purpose: 'modern React version with createRoot' },
          { syntax: 'legacy render', purpose: 'older ReactDOM.render API' },
          { syntax: 'StrictMode', purpose: 'development checks for safer components' }
      ];
      function App() {
        return (
          <section className="card">
            <h1>Upgrade React Projects quick reference</h1>
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
    <title>Upgrade React Projects practice</title>
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
        const terms = ['React 18', 'legacy render', 'StrictMode'];
        return (
          <LessonCard title="Upgrade React Projects practice" terms={terms}>
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
| `React 18` | نسخه مدرن React با createRoot | در Upgrade پروژه‌های React آن را با render واقعی، state خالی، interaction و Console تست کنید. |
| `legacy render` | API قدیمی ReactDOM.render | در Upgrade پروژه‌های React آن را با render واقعی، state خالی، interaction و Console تست کنید. |
| `StrictMode` | checkهای development برای component امن‌تر | در Upgrade پروژه‌های React آن را با render واقعی، state خالی، interaction و Console تست کنید. |

## اشتباه‌های رایج

- کپی کردن Upgrade پروژه‌های React بدون بررسی Console warning، key، dependency array یا update شدن state.
- mutate کردن object یا array در state به جای ساخت copy تازه با spread، map یا filter.
- فراموش کردن تست `React 18` با keyboard، state خالی، StrictMode و browser هدف.

## تمرین کوتاه

یک فایل `upgrade.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `React 18` را تغییر دهید. اگر UI تغییر نکرد، Console و محل call شدن `root.render` یا update شدن state را بررسی کنید.

## گام بعدی

بعد از این صفحه، **ES6 برای React** را بخوانید تا مسیر React مرحله‌به‌مرحله کامل‌تر شود.
