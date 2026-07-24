---
title: "Legacy React APIs"
description: "This page explains older APIs preserved in the reference and how authors should approach migration with React examples, syntax tables, and practical component authoring notes."
seoTitle: "Legacy React APIs — Official react.dev Reference | MEGA JS Docs"
seoDescription: "Legacy React APIs (legacy apis): official react.dev React API Reference summary with Hooks, Components, React DOM, Compiler, and Rules of React with practical."
keywords: "React, Legacy React APIs, React Legacy React APIs, Legacy React APIs tutorial, legacy apis"
order: 19
track: official
sources:
  - name: React API Reference
    url: https://react.dev/reference/react
  - name: React Docs
    url: https://react.dev/
---
# Legacy React APIs

Legacy React APIs summarizes the official react.dev/reference structure. It focuses on older APIs preserved in the reference and how authors should approach migration and helps authors read the API Reference without turning this page into a full documentation dump.

## How to read the official text

On react.dev, APIs are grouped into Hooks, Components, core APIs, React DOM, Compiler, Rules of React, and Legacy APIs. Official pages usually include signatures, caveats, troubleshooting, and examples; this summary compresses that path for faster decisions.

## Key terms

| Term | Author-facing summary |
| --- | --- |
| `legacy API` | older supported React API |
| `migration` | moving toward modern React patterns |
| `compatibility` | behavior preserved for existing apps |

## Runnable examples

### Example 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Legacy React APIs official</title>
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
            <h1>Legacy React APIs reading trace</h1>
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
    <title>Legacy React APIs</title>
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
      class LegacyGreeting extends React.Component {
        render() {
          return <p className="badge">Hello {this.props.name} from a class component.</p>;
        }
      }
      function App() {
        return (
          <section className="card">
            <h1>Legacy React APIs</h1>
            <LegacyGreeting name="React" />
          </section>
        );
      }
      ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    </script>
  </body>
</html>
```

## Official and runtime notes

- In Legacy React APIs, compare official caveats with your React version, development mode such as StrictMode, and real tests.
- If an API is server-related, Compiler-related, or legacy, check your framework support before production use.
- For production code, pair the react.dev text with accessibility checks, performance measurement, and regression tests.

## Next step

After this track, open a reference page and test its behavior in a browser.
