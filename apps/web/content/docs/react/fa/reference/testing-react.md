---
title: "Test کردن React"
description: "این صفحه test کردن behavior، user event، مرز component، UI async و fixtureهای test را با مثال React، جدول syntax و نکته‌های کاربردی برای component authoring توضیح می‌دهد."
seoTitle: "مرجع Test کردن React — سبک MDN برای React | MEGA JS"
seoDescription: "مرجع Test کردن React (testing react): مرجع MDN-style برای React با تعریف author-focused، JSX، Hooks، مثال HTML و نکته پروژه واقعی همراه تمرین کاربردی."
keywords: "React, Test کردن React, آموزش React, مرجع React, React Testing React, Testing React tutorial, testing react"
order: 16
track: reference
sources:
  - name: MDN React Framework Docs
    url: https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
---
# Test کردن React

Test کردن React یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی test کردن behavior، user event، مرز component، UI async و fixtureهای test است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای component را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN، React در بخش Client-side JavaScript frameworks کنار مفهوم component، props، state، event، form، accessibility و testing توضیح داده می‌شود. هنگام استفاده از Test کردن React، رفتار React را از behavior خام DOM و ابزار build جدا ببینید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `React` | ویژگی کتابخانه React برای Test کردن React | در مرورگر هدف، test، accessibility check و Console واقعی بررسی شود. |
| `component` | واحد قابل استفاده مجدد UI | در مرورگر هدف، test، accessibility check و Console واقعی بررسی شود. |
| `props` | inputهایی که به component پاس داده می‌شوند | در مرورگر هدف، test، accessibility check و Console واقعی بررسی شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testing React reference</title>
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
          { syntax: 'React', meaning: 'library feature used in Testing React' },
          { syntax: 'component', meaning: 'reusable unit of UI' },
          { syntax: 'props', meaning: 'inputs passed into a component' }
      ];
      function App() {
        return (
          <article className="card">
            <h1>Testing React</h1>
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
    <title>Testing React</title>
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
            <h1>Testing React</h1>
            <p>{'testing behavior, user events, component boundaries, async UI, and test fixtures'}</p>
            <button onClick={() => setCount((value) => value + 1)}>Clicked {count} time(s)</button>
          </section>
        );
      }
      ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    </script>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای Test کردن React، data flow بین props، state و context را explicit نگه دارید.
- اگر behavior به browser، focus، keyboard یا async loading وابسته است، آن را در UI و test پوشش دهید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، مستندات react.dev و اجرای واقعی در browser را کنار هم بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Testing React, React framework guides, accessibility و testing نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **Performance در React**.
