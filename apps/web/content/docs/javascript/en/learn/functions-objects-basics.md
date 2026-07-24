---
title: "Functions and Object Basics"
description: "This page explains organizing behavior with functions, objects, properties, methods, and browser events with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Functions and Object Basics Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn Functions and Object Basics (functions objects basics) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM."
keywords: "JavaScript, Functions and Object Basics, JavaScript functions-objects-basics, Functions and Object Basics tutorial"
order: 16
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Functions and Object Basics

Functions and Object Basics focuses on organizing behavior with functions, objects, properties, methods, and browser events. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice Functions and Object Basics, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `value`: a JavaScript value used in Functions and Object Basics.
- `expression`: code that produces a value.
- `runtime`: the browser or engine executing code.
- For this topic, clear inputs and outputs, limited side effects, and understandable scope is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<button id="functions-objects-basics-button" type="button">Count clicks</button>
<output id="functions-objects-basics-out"></output>
<script>
  function createCounter() {
    let count = 0;
    return () => {
      count += 1;
      return count;
    };
  }
  const nextCount = createCounter();
  document.querySelector('#functions-objects-basics-button').addEventListener('click', () => {
    document.querySelector('#functions-objects-basics-out').value = `Clicked ${nextCount()} time(s)`;
  });
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>Functions and Object Basics quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>value</code></td><td>a JavaScript value used in Functions and Object Basics</td></tr>
    <tr><td><code>expression</code></td><td>code that produces a value</td></tr>
    <tr><td><code>runtime</code></td><td>the browser or engine executing code</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('functions-objects-basics terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Functions and Object Basics practice</title>
  </head>
  <body>
    <button id="functions-objects-basics-button" type="button">Count clicks</button>
    <output id="functions-objects-basics-out"></output>
    <script>
      function createCounter() {
        let count = 0;
        return () => {
          count += 1;
          return count;
        };
      }
      const nextCount = createCounter();
      document.querySelector('#functions-objects-basics-button').addEventListener('click', () => {
        document.querySelector('#functions-objects-basics-out').value = `Clicked ${nextCount()} time(s)`;
      });
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `value` | a JavaScript value used in Functions and Object Basics | In Functions and Object Basics, test it against the real runtime, DOM behavior, and error handling path. |
| `expression` | code that produces a value | In Functions and Object Basics, test it against the real runtime, DOM behavior, and error handling path. |
| `runtime` | the browser or engine executing code | In Functions and Object Basics, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying Functions and Object Basics without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `value` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `functions-objects-basics.html`, run the first example, then change one part related to `value`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **JavaScript Functions** so the JavaScript learning path builds on this concept.
