---
title: "React Events"
description: "This page explains handling user actions with event props and SyntheticEvent objects with React examples, syntax tables, and practical component authoring notes."
seoTitle: "React Events Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn React Events (events) with live HTML using React CDN, JSX, W3Schools practice, components, props, state, and Hooks guidance with practical drills."
keywords: "React, React Events, React Events, Events tutorial, events"
order: 28
track: learn
sources:
  - name: W3Schools React Tutorial
    url: https://www.w3schools.com/react/default.asp
---
# React Events

React Events focuses on handling user actions with event props and SyntheticEvent objects. This is an educational rewrite inspired by the W3Schools React learning path, and each example is a complete HTML document using React CDN and Babel for the live editor.

When you practice React Events, do not stop at the visible UI. Inspect component rendering, state changes, props, Console warnings, and how JSX reaches the DOM.

## Core idea

- `onClick`: handles click events.
- `SyntheticEvent`: React event wrapper.
- `preventDefault()`: stops default browser behavior.
- For this topic, alignment between JSX, props, state, and visible UI behavior is the main sign that your React code is doing its job.

## Runnable HTML examples with React

Each example is a complete HTML document that loads react@18, react-dom@18, and @babel/standalone from CDN. Run it in the live editor, then change one state value, prop, or JSX branch.

### Example 1: Focused React pattern

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Events</title>
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
        const [message, setMessage] = useState('Waiting for click');
        return (
          <section className="card">
            <h1>React Events</h1>
            <button onClick={(event) => setMessage('Handled ' + event.type + ' on ' + event.currentTarget.tagName)}>Click</button>
            <p>{message}</p>
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
    <title>React Events table</title>
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
          { syntax: 'onClick', purpose: 'handles click events' },
          { syntax: 'SyntheticEvent', purpose: 'React event wrapper' },
          { syntax: 'preventDefault()', purpose: 'stops default browser behavior' }
      ];
      function App() {
        return (
          <section className="card">
            <h1>React Events quick reference</h1>
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
    <title>React Events practice</title>
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
        const terms = ['onClick', 'SyntheticEvent', 'preventDefault()'];
        return (
          <LessonCard title="React Events practice" terms={terms}>
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
| `onClick` | handles click events | In React Events, test it against real rendering, empty state, interactions, and the Console. |
| `SyntheticEvent` | React event wrapper | In React Events, test it against real rendering, empty state, interactions, and the Console. |
| `preventDefault()` | stops default browser behavior | In React Events, test it against real rendering, empty state, interactions, and the Console. |

## Common mistakes

- Copying React Events without checking Console warnings, keys, dependency arrays, or state updates.
- Mutating objects or arrays in state instead of creating fresh copies with spread, map, or filter.
- Forgetting to test `onClick` with keyboard use, empty state, StrictMode, and target browsers.

## Practice step

Create a file named `events.html`, run the first example, then change one part related to `onClick`. If the UI does not change, inspect the Console and where `root.render` or the state update runs.

## Next step

Next, continue with **React Conditional Rendering** so the React learning path builds on this concept.
