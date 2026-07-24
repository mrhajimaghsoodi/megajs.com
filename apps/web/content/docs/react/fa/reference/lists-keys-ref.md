---
title: "مرجع List و Key"
description: "این صفحه identity پایدار برای array، render کردن list، محل key و رفتار reorder را با مثال React، جدول syntax و نکته‌های کاربردی برای component authoring توضیح می‌دهد."
seoTitle: "مرجع List و Key — سبک MDN برای React | MEGA JS"
seoDescription: "مرجع List و Key (lists keys ref): مرجع MDN-style برای React با تعریف author-focused، JSX، Hooks، مثال HTML و نکته پروژه واقعی همراه تمرین کاربردی."
keywords: "React, مرجع List و Key, آموزش React, مرجع React, React Lists and Keys Reference, Lists and Keys Reference tutorial, lists keys ref"
order: 6
track: reference
sources:
  - name: MDN React Framework Docs
    url: https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
---
# مرجع List و Key

مرجع List و Key یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی identity پایدار برای array، render کردن list، محل key و رفتار reorder است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای component را کنار هم می‌گذارد.

## جایگاه در MDN

در MDN، React در بخش Client-side JavaScript frameworks کنار مفهوم component، props، state، event، form، accessibility و testing توضیح داده می‌شود. هنگام استفاده از مرجع List و Key، رفتار React را از behavior خام DOM و ابزار build جدا ببینید.

## جدول مرجع

| مورد | معنی | نکته سازگاری |
| --- | --- | --- |
| `ref` | reference به DOM node یا value mutable | در مرورگر هدف، test، accessibility check و Console واقعی بررسی شود. |
| `React DOM` | package مربوط به React برای render در DOM مرورگر | در مرورگر هدف، test، accessibility check و Console واقعی بررسی شود. |
| `createRoot` | root مرورگر برای React می‌سازد | در مرورگر هدف، test، accessibility check و Console واقعی بررسی شود. |

## مثال‌ها

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lists and Keys Reference reference</title>
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
          { syntax: 'ref', meaning: 'reference to a DOM node or mutable value' },
          { syntax: 'React DOM', meaning: 'React package for browser DOM rendering' },
          { syntax: 'createRoot', meaning: 'creates a browser root for React' }
      ];
      function App() {
        return (
          <article className="card">
            <h1>Lists and Keys Reference</h1>
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
    <title>Lists and Keys Reference</title>
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
        const [filter, setFilter] = useState('all');
        const lessons = [
          { id: 'jsx', title: 'JSX', done: true },
          { id: 'props', title: 'props', done: true },
          { id: 'hooks', title: 'Hooks', done: false }
        ];
        const visible = lessons.filter((lesson) => filter === 'all' || lesson.done);
        return (
          <section className="card">
            <h1>Lists and Keys Reference</h1>
            <button onClick={() => setFilter(filter === 'all' ? 'done' : 'all')}>Toggle filter</button>
            <ul>{visible.map((lesson) => <li key={lesson.id}>{lesson.title} - {lesson.done ? 'done' : 'next'}</li>)}</ul>
          </section>
        );
      }
      ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    </script>
  </body>
</html>
```

## نکته‌های دقیق authoring

- برای مرجع List و Key، data flow بین props، state و context را explicit نگه دارید.
- اگر behavior به browser، focus، keyboard یا async loading وابسته است، آن را در UI و test پوشش دهید.
- برای تصمیم‌های حساس، صفحه MDN مربوط، مستندات react.dev و اجرای واقعی در browser را کنار هم بررسی کنید.

## ارتباط مفهومی با MDN

این صفحه به موضوعات MDN درباره Lists and Keys Reference, React framework guides, accessibility و testing نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.

## گام بعدی

صفحه مرجع بعدی: **مرجع Form کنترل‌شده**.
