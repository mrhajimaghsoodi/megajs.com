---
title: "React Radio Buttons"
description: "This page explains modeling one choice from a named group with React examples, syntax tables, and practical component authoring notes."
seoTitle: "React Radio Buttons Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn React Radio Buttons (radio) with live HTML using React CDN, JSX, W3Schools practice, components, props, state, and Hooks guidance with practical drills."
keywords: "React, React Radio Buttons, React Radio Buttons, Radio Buttons tutorial, radio"
order: 38
track: learn
sources:
  - name: W3Schools React Tutorial
    url: https://www.w3schools.com/react/default.asp
---
# React Radio Buttons

React Radio Buttons focuses on modeling one choice from a named group. This is an educational rewrite inspired by the W3Schools React learning path, and each example is a complete HTML document using React CDN and Babel for the live editor.

When you practice React Radio Buttons, do not stop at the visible UI. Inspect component rendering, state changes, props, Console warnings, and how JSX reaches the DOM.

## Core idea

- `name`: groups radio buttons.
- `checked={value === option}`: marks selected option.
- `single choice`: one active option from a group.
- For this topic, controlled values, accessible validation, and submit without reload is the main sign that your React code is doing its job.

## Runnable HTML examples with React

Each example is a complete HTML document that loads react@18, react-dom@18, and @babel/standalone from CDN. Run it in the live editor, then change one state value, prop, or JSX branch.

### Example 1: Focused React pattern

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Radio Buttons</title>
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
            <h1>React Radio Buttons</h1>
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

### Example 2: Syntax options in context

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Radio Buttons table</title>
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
          { syntax: 'name', purpose: 'groups radio buttons' },
          { syntax: 'checked={value === option}', purpose: 'marks selected option' },
          { syntax: 'single choice', purpose: 'one active option from a group' }
      ];
      function App() {
        return (
          <section className="card">
            <h1>React Radio Buttons quick reference</h1>
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
    <title>React Radio Buttons practice</title>
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
        const terms = ['name', 'checked={value === option}', 'single choice'];
        return (
          <LessonCard title="React Radio Buttons practice" terms={terms}>
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
| `name` | groups radio buttons | In React Radio Buttons, test it against real rendering, empty state, interactions, and the Console. |
| `checked={value === option}` | marks selected option | In React Radio Buttons, test it against real rendering, empty state, interactions, and the Console. |
| `single choice` | one active option from a group | In React Radio Buttons, test it against real rendering, empty state, interactions, and the Console. |

## Common mistakes

- Copying React Radio Buttons without checking Console warnings, keys, dependency arrays, or state updates.
- Mutating objects or arrays in state instead of creating fresh copies with spread, map, or filter.
- Forgetting to test `name` with keyboard use, empty state, StrictMode, and target browsers.

## Practice step

Create a file named `radio.html`, run the first example, then change one part related to `name`. If the UI does not change, inspect the Console and where `root.render` or the state update runs.

## Next step

Next, continue with **Advanced React UI** so the React learning path builds on this concept.
