---
title: "useMemo Reference"
description: "This page explains caching expensive calculations while keeping dependencies accurate with React examples, syntax tables, and practical component authoring notes."
seoTitle: "useMemo Reference — Official react.dev Reference | MEGA JS Docs"
seoDescription: "useMemo Reference (usememo ref): official react.dev React API Reference summary with Hooks, Components, React DOM, Compiler, and Rules of React with practical."
keywords: "React, useMemo Reference, React useMemo Reference, useMemo Reference tutorial, usememo ref"
order: 8
track: official
sources:
  - name: React API Reference
    url: https://react.dev/reference/react
  - name: React Docs
    url: https://react.dev/
---
# useMemo Reference

useMemo Reference summarizes the official react.dev/reference structure. It focuses on caching expensive calculations while keeping dependencies accurate and helps authors read the API Reference without turning this page into a full documentation dump.

## How to read the official text

On react.dev, APIs are grouped into Hooks, Components, core APIs, React DOM, Compiler, Rules of React, and Legacy APIs. Official pages usually include signatures, caveats, troubleshooting, and examples; this summary compresses that path for faster decisions.

## Key terms

| Term | Author-facing summary |
| --- | --- |
| `ref` | reference to a DOM node or mutable value |
| `React DOM` | React package for browser DOM rendering |
| `createRoot` | creates a browser root for React |

## Runnable examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>useMemo Reference official</title>
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
      const steps = [
        'Open the react.dev reference page',
        'Read the signature and caveats',
        'Run a small component example',
        'Add tests for the production behavior'
      ];
      function App() {
        return (
          <section className="card">
            <h1>useMemo Reference reading trace</h1>
            <ol>{steps.map((step) => <li key={step}>{step}</li>)}</ol>
          </section>
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
    <title>useMemo Reference</title>
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
        const inputRef = useRef(null);
        const [message, setMessage] = useState('Ref is ready');
        return (
          <section className="card">
            <h1>useMemo Reference</h1>
            <input ref={inputRef} defaultValue="Focus me with useRef" />
            <button onClick={() => { inputRef.current.focus(); setMessage('Focused through ref.current'); }}>Focus input</button>
            <p>{message}</p>
          </section>
        );
      }
      ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    </script>
  </body>
</html>
```

## Official and runtime notes

- In useMemo Reference, compare official caveats with your React version, development mode such as StrictMode, and real tests.
- If an API is server-related, Compiler-related, or legacy, check your framework support before production use.
- For production code, pair the react.dev text with accessibility checks, performance measurement, and regression tests.

## Next step

Continue the official track with **useCallback Reference**.
