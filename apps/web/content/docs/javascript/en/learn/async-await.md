---
title: "JavaScript async await"
description: "This page explains writing Promise code with synchronous-looking control flow and clear try/catch blocks with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "JavaScript async await Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn JavaScript async await (async await) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance."
keywords: "JavaScript, JavaScript async await, JavaScript async await, async await tutorial, async await"
order: 74
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# JavaScript async await

JavaScript async await focuses on writing Promise code with synchronous-looking control flow and clear try/catch blocks. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice JavaScript async await, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `async function`: always returns a Promise.
- `await`: pauses within async code until a Promise settles.
- `try/catch`: handles awaited failures.
- For this topic, clear loading state, reliable error handling, and understandable microtask order is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<button id="async-await-load" type="button">Load async data</button>
<output id="async-await-out"></output>
<script>
  const wait = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 250));
  document.querySelector('#async-await-load').addEventListener('click', async () => {
    document.querySelector('#async-await-out').value = 'Loading...';
    const result = await wait('Promise fulfilled');
    document.querySelector('#async-await-out').value = result;
  });
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>JavaScript async await quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>async function</code></td><td>always returns a Promise</td></tr>
    <tr><td><code>await</code></td><td>pauses within async code until a Promise settles</td></tr>
    <tr><td><code>try/catch</code></td><td>handles awaited failures</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('async-await terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript async await practice</title>
  </head>
  <body>
    <button id="async-await-load" type="button">Load async data</button>
    <output id="async-await-out"></output>
    <script>
      const wait = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 250));
      document.querySelector('#async-await-load').addEventListener('click', async () => {
        document.querySelector('#async-await-out').value = 'Loading...';
        const result = await wait('Promise fulfilled');
        document.querySelector('#async-await-out').value = result;
      });
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `async function` | always returns a Promise | In JavaScript async await, test it against the real runtime, DOM behavior, and error handling path. |
| `await` | pauses within async code until a Promise settles | In JavaScript async await, test it against the real runtime, DOM behavior, and error handling path. |
| `try/catch` | handles awaited failures | In JavaScript async await, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying JavaScript async await without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `async function` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `async-await.html`, run the first example, then change one part related to `async function`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **JavaScript Timers** so the JavaScript learning path builds on this concept.
