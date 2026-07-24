---
title: "JSX in Depth"
description: "This page explains JSX compilation, expression rules, attribute naming, escaping, and authoring constraints with React examples, syntax tables, and practical component authoring notes."
seoTitle: "React JSX in Depth Reference — MDN-style React | MEGA JS Docs"
seoDescription: "React JSX in Depth Reference (jsx in depth): MDN-style React reference with author-focused definitions, JSX, Hooks, HTML examples, and project notes."
keywords: "React, JSX in Depth, React JSX in Depth, JSX in Depth tutorial, jsx in depth"
order: 3
track: reference
sources:
  - name: MDN React Framework Docs
    url: https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
---
# JSX in Depth

JSX in Depth is an author-focused MDN-style React reference page. It concentrates on JSX compilation, expression rules, attribute naming, escaping, and authoring constraints and favors precise definitions, usage tables, runtime behavior, and component boundaries over beginner sequencing.

## Place in the MDN reference

On MDN, React appears in the Client-side JavaScript frameworks material near components, props, state, events, forms, accessibility, and testing. When using JSX in Depth, separate React behavior from raw DOM behavior and build tooling.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `JSX` | syntax for describing UI in JavaScript | Check it in target browsers, tests, accessibility checks, and the real Console. |
| `attribute` | prop-like value written on JSX | Check it in target browsers, tests, accessibility checks, and the real Console. |
| `expression` | JavaScript value embedded in markup | Check it in target browsers, tests, accessibility checks, and the real Console. |

## Examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSX in Depth reference</title>
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
          { syntax: 'JSX', meaning: 'syntax for describing UI in JavaScript' },
          { syntax: 'attribute', meaning: 'prop-like value written on JSX' },
          { syntax: 'expression', meaning: 'JavaScript value embedded in markup' }
      ];
      function App() {
        return (
          <article className="card">
            <h1>JSX in Depth</h1>
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

### Example 2

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSX in Depth</title>
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
            <h1>JSX in Depth</h1>
            <p>{'JSX compilation, expression rules, attribute naming, escaping, and authoring constraints'}</p>
            <button onClick={() => setCount((value) => value + 1)}>Clicked {count} time(s)</button>
          </section>
        );
      }
      ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    </script>
  </body>
</html>
```

## Precise authoring notes

- For JSX in Depth, keep data flow between props, state, and context explicit.
- If behavior depends on browser support, focus, keyboard use, or async loading, cover that in UI and tests.
- For critical decisions, compare the relevant MDN page, react.dev reference, and a real browser runtime.

## Conceptual link to MDN

This page aligns with MDN topics around JSX in Depth, React framework guides, accessibility, and testing before implementation.

## Next step

Continue with **Props vs State**.
