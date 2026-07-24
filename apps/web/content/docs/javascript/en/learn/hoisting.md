---
title: "JavaScript Hoisting"
description: "This page explains understanding declaration instantiation before execution and the temporal dead zone with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "JavaScript Hoisting Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn JavaScript Hoisting (hoisting) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance."
keywords: "JavaScript, JavaScript Hoisting, JavaScript Hoisting, Hoisting tutorial, hoisting"
order: 59
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# JavaScript Hoisting

JavaScript Hoisting focuses on understanding declaration instantiation before execution and the temporal dead zone. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice JavaScript Hoisting, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `lexical scope`: resolves names from source nesting.
- `closure`: keeps access to outer bindings.
- `hoisting`: prepares declarations before execution.
- For this topic, alignment between syntax, values, runtime, and visible Console behavior is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<button id="hoisting-button" type="button">Count clicks</button>
<output id="hoisting-out"></output>
<script>
  function createCounter() {
    let count = 0;
    return () => {
      count += 1;
      return count;
    };
  }
  const nextCount = createCounter();
  document.querySelector('#hoisting-button').addEventListener('click', () => {
    document.querySelector('#hoisting-out').value = `Clicked ${nextCount()} time(s)`;
  });
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>JavaScript Hoisting quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>lexical scope</code></td><td>resolves names from source nesting</td></tr>
    <tr><td><code>closure</code></td><td>keeps access to outer bindings</td></tr>
    <tr><td><code>hoisting</code></td><td>prepares declarations before execution</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('hoisting terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Hoisting practice</title>
  </head>
  <body>
    <button id="hoisting-button" type="button">Count clicks</button>
    <output id="hoisting-out"></output>
    <script>
      function createCounter() {
        let count = 0;
        return () => {
          count += 1;
          return count;
        };
      }
      const nextCount = createCounter();
      document.querySelector('#hoisting-button').addEventListener('click', () => {
        document.querySelector('#hoisting-out').value = `Clicked ${nextCount()} time(s)`;
      });
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `lexical scope` | resolves names from source nesting | In JavaScript Hoisting, test it against the real runtime, DOM behavior, and error handling path. |
| `closure` | keeps access to outer bindings | In JavaScript Hoisting, test it against the real runtime, DOM behavior, and error handling path. |
| `hoisting` | prepares declarations before execution | In JavaScript Hoisting, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying JavaScript Hoisting without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `lexical scope` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `hoisting.html`, run the first example, then change one part related to `lexical scope`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **JavaScript Strict Mode** so the JavaScript learning path builds on this concept.
