---
title: "JavaScript Variables"
description: "This page explains naming values and understanding reassignment, initialization, and readable state with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "JavaScript Variables Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn JavaScript Variables (variables) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance."
keywords: "JavaScript, JavaScript Variables, JavaScript Variables, Variables tutorial, variables"
order: 9
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# JavaScript Variables

JavaScript Variables focuses on naming values and understanding reassignment, initialization, and readable state. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice JavaScript Variables, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `let count = 0`: declares a changeable binding.
- `const name = "Ada"`: declares a non-reassignable binding.
- `scope`: limits where a binding is visible.
- For this topic, alignment between syntax, values, runtime, and visible Console behavior is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<section>
  <h2>JavaScript Variables</h2>
  <output id="variables-out"></output>
</section>
<script>
  const profile = { name: 'Ada', lessons: 3 };
  let status = profile.lessons >= 3 ? 'ready' : 'learning';
  document.querySelector('#variables-out').value =
    `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>JavaScript Variables quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>let count = 0</code></td><td>declares a changeable binding</td></tr>
    <tr><td><code>const name = &quot;Ada&quot;</code></td><td>declares a non-reassignable binding</td></tr>
    <tr><td><code>scope</code></td><td>limits where a binding is visible</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('variables terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Variables practice</title>
  </head>
  <body>
    <section>
      <h2>JavaScript Variables</h2>
      <output id="variables-out"></output>
    </section>
    <script>
      const profile = { name: 'Ada', lessons: 3 };
      let status = profile.lessons >= 3 ? 'ready' : 'learning';
      document.querySelector('#variables-out').value =
        `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `let count = 0` | declares a changeable binding | In JavaScript Variables, test it against the real runtime, DOM behavior, and error handling path. |
| `const name = "Ada"` | declares a non-reassignable binding | In JavaScript Variables, test it against the real runtime, DOM behavior, and error handling path. |
| `scope` | limits where a binding is visible | In JavaScript Variables, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying JavaScript Variables without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `let count = 0` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `variables.html`, run the first example, then change one part related to `let count = 0`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **JavaScript let** so the JavaScript learning path builds on this concept.
