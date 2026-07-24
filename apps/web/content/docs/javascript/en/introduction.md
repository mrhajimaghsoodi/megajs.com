---
title: "Introduction to JavaScript"
description: "Language overview aligned with MDN and ECMAScript concepts."
order: 1
sources:
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
  - name: W3Schools JavaScript
    url: https://www.w3schools.com/js/
  - name: ECMA-262
    url: https://tc39.es/ecma262/
---

# Introduction to JavaScript

JavaScript is the programming language of the web — and, with Node.js, of servers, CLIs, and desktop shells.

## Where it runs

- **Browsers** — DOM, events, fetch
- **Node.js** — files, HTTP, tooling
- **Embedded runtimes** — Edge, Deno, Bun (same language, different APIs)

## First program

```js
const message = 'Hello MEGA JS';
console.log(message);
```

## Language pillars

1. **Values & types** — string, number, boolean, null, undefined, object, symbol, bigint
2. **Functions** — first-class, closures, arrow functions
3. **Objects & prototypes** — the foundation of almost everything
4. **Asynchrony** — callbacks → Promises → `async`/`await`
5. **Modules** — `import` / `export`

> Topic order follows the MDN JavaScript Guide and W3Schools JS tutorial spine, rewritten for this docs track.
