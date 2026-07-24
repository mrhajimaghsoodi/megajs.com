---
title: "JavaScript Data Types"
description: "This page explains working with primitive values, objects, typeof, null, undefined, and conversion boundaries with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "JavaScript Data Types Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn JavaScript Data Types (data types) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance."
keywords: "JavaScript, JavaScript Data Types, JavaScript Data Types, Data Types tutorial, data types"
order: 15
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# JavaScript Data Types

JavaScript Data Types focuses on working with primitive values, objects, typeof, null, undefined, and conversion boundaries. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice JavaScript Data Types, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `typeof`: returns a string describing a value category.
- `null / undefined`: represent empty or missing values differently.
- `object`: stores keyed references and behavior.
- For this topic, alignment between syntax, values, runtime, and visible Console behavior is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<section>
  <h2>JavaScript Data Types</h2>
  <output id="data-types-out"></output>
</section>
<script>
  const profile = { name: 'Ada', lessons: 3 };
  let status = profile.lessons >= 3 ? 'ready' : 'learning';
  document.querySelector('#data-types-out').value =
    `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>JavaScript Data Types quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>typeof</code></td><td>returns a string describing a value category</td></tr>
    <tr><td><code>null / undefined</code></td><td>represent empty or missing values differently</td></tr>
    <tr><td><code>object</code></td><td>stores keyed references and behavior</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('data-types terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Data Types practice</title>
  </head>
  <body>
    <section>
      <h2>JavaScript Data Types</h2>
      <output id="data-types-out"></output>
    </section>
    <script>
      const profile = { name: 'Ada', lessons: 3 };
      let status = profile.lessons >= 3 ? 'ready' : 'learning';
      document.querySelector('#data-types-out').value =
        `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `typeof` | returns a string describing a value category | In JavaScript Data Types, test it against the real runtime, DOM behavior, and error handling path. |
| `null / undefined` | represent empty or missing values differently | In JavaScript Data Types, test it against the real runtime, DOM behavior, and error handling path. |
| `object` | stores keyed references and behavior | In JavaScript Data Types, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying JavaScript Data Types without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `typeof` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `data-types.html`, run the first example, then change one part related to `typeof`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **Functions and Object Basics** so the JavaScript learning path builds on this concept.
