---
title: "Introduction to React"
description: "Components, declarative UI — aligned with react.dev Learn."
order: 1
sources:
  - name: react.dev
    url: https://react.dev/learn
  - name: MDN
    url: https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
---

# Introduction to React

React is a library for building user interfaces from **components** — functions that describe UI for a given state.

## Mental model

```jsx
function Hello({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

- **Declarative** — you describe *what* the UI should look like
- **Composition** — small components nest into larger ones
- **State** — when data changes, React re-renders the affected tree

## Next steps in this track

Props & state → Hooks → Effects → Lists & keys — the same spine as [react.dev/learn](https://react.dev/learn).
