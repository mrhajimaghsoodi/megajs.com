---
title: "Introduction to JavaScript"
description: "This page explains what JavaScript does in the browser, how it reaches the DOM, and how this W3Schools-style path is organized with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Introduction to JavaScript Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn Introduction to JavaScript (introduction) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime."
keywords: "JavaScript, Introduction to JavaScript, JavaScript introduction, JavaScript tutorial, browser scripting"
order: 1
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Introduction to JavaScript

Introduction to JavaScript focuses on what JavaScript does in the browser, how it reaches the DOM, and how this W3Schools-style path is organized. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice Introduction to JavaScript, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `<script>`: runs JavaScript inside an HTML document.
- `console.log()`: prints values in the DevTools Console.
- `DOM`: the live document tree JavaScript can read and change.
- For this topic, alignment between syntax, values, runtime, and visible Console behavior is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<section>
  <h2>Introduction to JavaScript</h2>
  <p id="introduction-text">what JavaScript does in the browser, how it reaches the DOM, and how this W3Schools-style path is organized.</p>
  <output id="introduction-out"></output>
</section>
<script>
  const text = document.querySelector('#introduction-text').textContent;
  document.querySelector('#introduction-out').value =
    `JavaScript handled ${text.length} characters for Introduction to JavaScript`;
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>Introduction to JavaScript quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;script&gt;</code></td><td>runs JavaScript inside an HTML document</td></tr>
    <tr><td><code>console.log()</code></td><td>prints values in the DevTools Console</td></tr>
    <tr><td><code>DOM</code></td><td>the live document tree JavaScript can read and change</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('introduction terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introduction to JavaScript practice</title>
  </head>
  <body>
    <section>
      <h2>Introduction to JavaScript</h2>
      <p id="introduction-text">what JavaScript does in the browser, how it reaches the DOM, and how this W3Schools-style path is organized.</p>
      <output id="introduction-out"></output>
    </section>
    <script>
      const text = document.querySelector('#introduction-text').textContent;
      document.querySelector('#introduction-out').value =
        `JavaScript handled ${text.length} characters for Introduction to JavaScript`;
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `<script>` | runs JavaScript inside an HTML document | In Introduction to JavaScript, test it against the real runtime, DOM behavior, and error handling path. |
| `console.log()` | prints values in the DevTools Console | In Introduction to JavaScript, test it against the real runtime, DOM behavior, and error handling path. |
| `DOM` | the live document tree JavaScript can read and change | In Introduction to JavaScript, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying Introduction to JavaScript without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `<script>` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `introduction.html`, run the first example, then change one part related to `<script>`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **JavaScript Getting Started** so the JavaScript learning path builds on this concept.
