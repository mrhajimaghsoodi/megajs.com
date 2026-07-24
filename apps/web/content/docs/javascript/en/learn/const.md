---
title: "JavaScript const"
description: "This page explains declaring bindings that should not be reassigned while objects may still mutate with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "JavaScript const Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn JavaScript const (const) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance with practical."
keywords: "JavaScript, JavaScript const, JavaScript const, const tutorial, const"
order: 11
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# JavaScript const

JavaScript const focuses on declaring bindings that should not be reassigned while objects may still mutate. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice JavaScript const, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `const`: declares a binding that cannot be reassigned.
- `mutation`: can still change object contents.
- `initializer`: is required for const declarations.
- For this topic, alignment between syntax, values, runtime, and visible Console behavior is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<section>
  <h2>JavaScript const</h2>
  <output id="const-out"></output>
</section>
<script>
  const profile = { name: 'Ada', lessons: 3 };
  let status = profile.lessons >= 3 ? 'ready' : 'learning';
  document.querySelector('#const-out').value =
    `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>JavaScript const quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>const</code></td><td>declares a binding that cannot be reassigned</td></tr>
    <tr><td><code>mutation</code></td><td>can still change object contents</td></tr>
    <tr><td><code>initializer</code></td><td>is required for const declarations</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('const terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript const practice</title>
  </head>
  <body>
    <section>
      <h2>JavaScript const</h2>
      <output id="const-out"></output>
    </section>
    <script>
      const profile = { name: 'Ada', lessons: 3 };
      let status = profile.lessons >= 3 ? 'ready' : 'learning';
      document.querySelector('#const-out').value =
        `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `const` | declares a binding that cannot be reassigned | In JavaScript const, test it against the real runtime, DOM behavior, and error handling path. |
| `mutation` | can still change object contents | In JavaScript const, test it against the real runtime, DOM behavior, and error handling path. |
| `initializer` | is required for const declarations | In JavaScript const, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying JavaScript const without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `const` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `const.html`, run the first example, then change one part related to `const`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **JavaScript Operators** so the JavaScript learning path builds on this concept.
