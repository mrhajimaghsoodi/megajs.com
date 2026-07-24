---
title: "Performance در React"
description: "این صفحه اندازه‌گیری render، memoization، هزینه list، اندازه bundle و کار مرورگر را با مثال React، جدول syntax و نکته‌های کاربردی برای component authoring توضیح می‌دهد."
seoTitle: "مرجع Performance در React — سبک MDN برای React | MEGA JS"
seoDescription: "مرجع Performance در React (performance react): مرجع MDN-style برای React با تعریف author-focused، JSX، Hooks، مثال HTML و نکته پروژه واقعی همراه تمرین کاربردی."
keywords: "React, Performance در React, آموزش React, مرجع React, React Performance, Performance tutorial, performance react"
order: 17
track: reference
sources:
  - name: MDN React Framework Docs
    url: https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
---
# Performance در React

Performance در React یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی اندازه‌گیری render، memoization، هزینه list، اندازه bundle و کار مرورگر است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای component را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN، React در بخش Client-side JavaScript frameworks کنار مفهوم component، props، state، event، form، accessibility و testing توضیح داده می‌شود. هنگام استفاده از Performance در React، رفتار React را از behavior خام DOM و ابزار build جدا ببینید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `controlled component` | form element هدایت‌شده با state در React | در مرورگر هدف، test، accessibility check و Console واقعی بررسی شود. |
| `onChange` | تغییر input کاربر را دریافت می‌کند | در مرورگر هدف، test، accessibility check و Console واقعی بررسی شود. |
| `validation` | input را پیش از پذیرش بررسی می‌کند | در مرورگر هدف، test، accessibility check و Console واقعی بررسی شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Performance reference</title>
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
      const terms = [
          { syntax: 'controlled component', meaning: 'form element driven by React state' },
          { syntax: 'onChange', meaning: 'captures user input changes' },
          { syntax: 'validation', meaning: 'checks input before accepting it' }
      ];
      function App() {
        return (
          <article className="card">
            <h1>React Performance</h1>
            <dl>{terms.map((term) => <Fragment key={term.syntax}><dt><code>{term.syntax}</code></dt><dd>{term.meaning}</dd></Fragment>)}</dl>
            <p className="muted">{terms.length} React reference terms loaded.</p>
          </article>
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
    <title>React Performance</title>
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
        const [form, setForm] = useState({ name: 'Ada', level: 'beginner', notes: 'Practice React', agreed: true });
        const update = (event) => {
          const { name, type, checked, value } = event.target;
          setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
        };
        return (
          <form className="card" onSubmit={(event) => event.preventDefault()}>
            <h1>React Performance</h1>
            <label>Name <input name="name" value={form.name} onChange={update} /></label>
            <label>Level
              <select name="level" value={form.level} onChange={update}>
                <option value="beginner">beginner</option>
                <option value="advanced">advanced</option>
              </select>
            </label>
            <label><input name="agreed" type="checkbox" checked={form.agreed} onChange={update} /> Ready</label>
            <textarea name="notes" value={form.notes} onChange={update} rows="3" />
            <p className="badge">{form.name} is {form.level}; ready: {String(form.agreed)}</p>
          </form>
        );
      }
      ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    </script>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای Performance در React، data flow بین props، state و context را explicit نگه دارید.
- اگر behavior به browser، focus، keyboard یا async loading وابسته است، آن را در UI و test پوشش دهید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، مستندات react.dev و اجرای واقعی در browser را کنار هم بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره React Performance, React framework guides, accessibility و testing نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **TypeScript با React**.
