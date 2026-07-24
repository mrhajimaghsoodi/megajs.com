---
title: "JavaScript RegExp"
description: "This page explains matching text patterns with literals, flags, groups, and safe validation boundaries with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "JavaScript RegExp Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn JavaScript RegExp (regexp) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance."
keywords: "JavaScript, JavaScript RegExp, JavaScript RegExp, RegExp tutorial, regexp"
order: 55
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# JavaScript RegExp

JavaScript RegExp focuses on matching text patterns with literals, flags, groups, and safe validation boundaries. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice JavaScript RegExp, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `/pattern/u`: creates a regular expression literal.
- `flags`: change matching behavior.
- `match()`: returns pattern matches from text.
- For this topic, alignment between syntax, values, runtime, and visible Console behavior is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<label>Username <input id="regexp-name" value="mega_js"></label>
<output id="regexp-out"></output>
<script>
  const username = document.querySelector('#regexp-name').value;
  const isValid = /^[a-z][a-z0-9_]{2,15}$/i.test(username);
  document.querySelector('#regexp-out').value = `Valid username: ${isValid}`;
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>JavaScript RegExp quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>/pattern/u</code></td><td>creates a regular expression literal</td></tr>
    <tr><td><code>flags</code></td><td>change matching behavior</td></tr>
    <tr><td><code>match()</code></td><td>returns pattern matches from text</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('regexp terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript RegExp practice</title>
  </head>
  <body>
    <label>Username <input id="regexp-name" value="mega_js"></label>
    <output id="regexp-out"></output>
    <script>
      const username = document.querySelector('#regexp-name').value;
      const isValid = /^[a-z][a-z0-9_]{2,15}$/i.test(username);
      document.querySelector('#regexp-out').value = `Valid username: ${isValid}`;
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `/pattern/u` | creates a regular expression literal | In JavaScript RegExp, test it against the real runtime, DOM behavior, and error handling path. |
| `flags` | change matching behavior | In JavaScript RegExp, test it against the real runtime, DOM behavior, and error handling path. |
| `match()` | returns pattern matches from text | In JavaScript RegExp, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying JavaScript RegExp without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `/pattern/u` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `regexp.html`, run the first example, then change one part related to `/pattern/u`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **JavaScript Errors** so the JavaScript learning path builds on this concept.
