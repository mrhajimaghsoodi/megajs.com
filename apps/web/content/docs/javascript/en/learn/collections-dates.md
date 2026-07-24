---
title: "Arrays, Collections, and Dates"
description: "This page explains storing ordered data, transforming collections, sorting, iterating, and handling time with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Arrays, Collections, and Dates Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn Arrays, Collections, and Dates (collections dates) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM."
keywords: "JavaScript, Arrays, Collections, and Dates, JavaScript collections-dates, Arrays, Collections, and Dates tutorial"
order: 31
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Arrays, Collections, and Dates

Arrays, Collections, and Dates focuses on storing ordered data, transforming collections, sorting, iterating, and handling time. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice Arrays, Collections, and Dates, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `value`: a JavaScript value used in Arrays, Collections, and Dates.
- `expression`: code that produces a value.
- `runtime`: the browser or engine executing code.
- For this topic, alignment between syntax, values, runtime, and visible Console behavior is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<time id="collections-dates-time"></time>
<script>
  const formatter = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' });
  const now = new Date('2026-07-24T12:00:00Z');
  document.querySelector('#collections-dates-time').textContent = formatter.format(now);
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>Arrays, Collections, and Dates quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>value</code></td><td>a JavaScript value used in Arrays, Collections, and Dates</td></tr>
    <tr><td><code>expression</code></td><td>code that produces a value</td></tr>
    <tr><td><code>runtime</code></td><td>the browser or engine executing code</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('collections-dates terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arrays, Collections, and Dates practice</title>
  </head>
  <body>
    <time id="collections-dates-time"></time>
    <script>
      const formatter = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' });
      const now = new Date('2026-07-24T12:00:00Z');
      document.querySelector('#collections-dates-time').textContent = formatter.format(now);
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `value` | a JavaScript value used in Arrays, Collections, and Dates | In Arrays, Collections, and Dates, test it against the real runtime, DOM behavior, and error handling path. |
| `expression` | code that produces a value | In Arrays, Collections, and Dates, test it against the real runtime, DOM behavior, and error handling path. |
| `runtime` | the browser or engine executing code | In Arrays, Collections, and Dates, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying Arrays, Collections, and Dates without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `value` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `collections-dates.html`, run the first example, then change one part related to `value`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **JavaScript Arrays** so the JavaScript learning path builds on this concept.
