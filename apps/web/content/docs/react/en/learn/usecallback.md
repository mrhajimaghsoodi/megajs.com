---
title: "React useCallback Hook"
description: "This page explains memoizing callback identity for child components and Effects with React examples, syntax tables, and practical component authoring notes."
seoTitle: "React useCallback Hook Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn React useCallback Hook (usecallback) with live HTML using React CDN, JSX, W3Schools practice, components, props, state, and Hooks guidance."
keywords: "React, React useCallback Hook, React useCallback Hook, useCallback Hook tutorial, usecallback"
order: 56
track: learn
sources:
  - name: W3Schools React Tutorial
    url: https://www.w3schools.com/react/default.asp
---
# React useCallback Hook

React useCallback Hook focuses on memoizing callback identity for child components and Effects. This is an educational rewrite inspired by the W3Schools React learning path, and each example is a complete HTML document using React CDN and Babel for the live editor.

When you practice React useCallback Hook, do not stop at the visible UI. Inspect component rendering, state changes, props, Console warnings, and how JSX reaches the DOM.

## Core idea

- `useCallback`: caches a function identity.
- `dependency array`: controls when callback changes.
- `memoized child`: child that skips equal props.
- For this topic, measurement before optimization and accurate dependencies is the main sign that your React code is doing its job.

## Runnable HTML examples with React

Each example is a complete HTML document that loads react@18, react-dom@18, and @babel/standalone from CDN. Run it in the live editor, then change one state value, prop, or JSX branch.

### Example 1: Focused React pattern

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

### Example 2: Syntax options in context

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

### Example 3: Complete practice page

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

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `useCallback` | caches a function identity | In React useCallback Hook, test it against real rendering, empty state, interactions, and the Console. |
| `dependency array` | controls when callback changes | In React useCallback Hook, test it against real rendering, empty state, interactions, and the Console. |
| `memoized child` | child that skips equal props | In React useCallback Hook, test it against real rendering, empty state, interactions, and the Console. |

## Common mistakes

- Copying React useCallback Hook without checking Console warnings, keys, dependency arrays, or state updates.
- Mutating objects or arrays in state instead of creating fresh copies with spread, map, or filter.
- Forgetting to test `useCallback` with keyboard use, empty state, StrictMode, and target browsers.

## Practice step

Create a file named `usecallback.html`, run the first example, then change one part related to `useCallback`. If the UI does not change, inspect the Console and where `root.render` or the state update runs.

## Next step

Next, continue with **React useMemo Hook** so the React learning path builds on this concept.
