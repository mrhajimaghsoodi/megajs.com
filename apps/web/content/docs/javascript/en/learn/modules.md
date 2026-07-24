---
title: "JavaScript Modules"
description: "This page explains splitting code with import and export while keeping dependencies explicit with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "JavaScript Modules Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn JavaScript Modules (modules) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance."
keywords: "JavaScript, JavaScript Modules, JavaScript Modules, Modules tutorial, modules"
order: 64
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# JavaScript Modules

JavaScript Modules focuses on splitting code with import and export while keeping dependencies explicit. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice JavaScript Modules, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `import`: brings exported bindings into a module.
- `export`: makes module bindings available.
- `module scope`: keeps top-level bindings out of global scope.
- For this topic, alignment between syntax, values, runtime, and visible Console behavior is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<output id="modules-out"></output>
<script type="module">
  const moduleName = 'JavaScript Modules';
  const format = (value) => `Module scope: ${value}`;
  document.querySelector('#modules-out').value = format(moduleName);
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>JavaScript Modules quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>import</code></td><td>brings exported bindings into a module</td></tr>
    <tr><td><code>export</code></td><td>makes module bindings available</td></tr>
    <tr><td><code>module scope</code></td><td>keeps top-level bindings out of global scope</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('modules terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Modules practice</title>
  </head>
  <body>
    <output id="modules-out"></output>
    <script type="module">
      const moduleName = 'JavaScript Modules';
      const format = (value) => `Module scope: ${value}`;
      document.querySelector('#modules-out').value = format(moduleName);
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `import` | brings exported bindings into a module | In JavaScript Modules, test it against the real runtime, DOM behavior, and error handling path. |
| `export` | makes module bindings available | In JavaScript Modules, test it against the real runtime, DOM behavior, and error handling path. |
| `module scope` | keeps top-level bindings out of global scope | In JavaScript Modules, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying JavaScript Modules without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `import` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `modules.html`, run the first example, then change one part related to `import`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **JavaScript JSON** so the JavaScript learning path builds on this concept.
