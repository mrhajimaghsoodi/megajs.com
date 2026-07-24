---
title: "JavaScript Functions"
description: "This page explains declaring reusable behavior, passing arguments, returning values, and keeping side effects visible with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "JavaScript Functions Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn JavaScript Functions (functions) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance."
keywords: "JavaScript, JavaScript Functions, JavaScript Functions, Functions tutorial, functions"
order: 17
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# JavaScript Functions

JavaScript Functions focuses on declaring reusable behavior, passing arguments, returning values, and keeping side effects visible. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice JavaScript Functions, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `function`: declares reusable behavior.
- `return`: sends a value back to the caller.
- `parameter`: names an input inside the function.
- For this topic, clear inputs and outputs, limited side effects, and understandable scope is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<button id="functions-button" type="button">Count clicks</button>
<output id="functions-out"></output>
<script>
  function createCounter() {
    let count = 0;
    return () => {
      count += 1;
      return count;
    };
  }
  const nextCount = createCounter();
  document.querySelector('#functions-button').addEventListener('click', () => {
    document.querySelector('#functions-out').value = `Clicked ${nextCount()} time(s)`;
  });
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>JavaScript Functions quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>function</code></td><td>declares reusable behavior</td></tr>
    <tr><td><code>return</code></td><td>sends a value back to the caller</td></tr>
    <tr><td><code>parameter</code></td><td>names an input inside the function</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('functions terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Functions practice</title>
  </head>
  <body>
    <button id="functions-button" type="button">Count clicks</button>
    <output id="functions-out"></output>
    <script>
      function createCounter() {
        let count = 0;
        return () => {
          count += 1;
          return count;
        };
      }
      const nextCount = createCounter();
      document.querySelector('#functions-button').addEventListener('click', () => {
        document.querySelector('#functions-out').value = `Clicked ${nextCount()} time(s)`;
      });
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `function` | declares reusable behavior | In JavaScript Functions, test it against the real runtime, DOM behavior, and error handling path. |
| `return` | sends a value back to the caller | In JavaScript Functions, test it against the real runtime, DOM behavior, and error handling path. |
| `parameter` | names an input inside the function | In JavaScript Functions, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying JavaScript Functions without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `function` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `functions.html`, run the first example, then change one part related to `function`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **JavaScript Objects** so the JavaScript learning path builds on this concept.
