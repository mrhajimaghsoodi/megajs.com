---
title: "JavaScript Dates"
description: "This page explains creating Date objects and understanding local time, UTC, timestamps, and parsing risks with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "JavaScript Dates Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn JavaScript Dates (dates) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance with practical."
keywords: "JavaScript, JavaScript Dates, JavaScript Dates, Dates tutorial, dates"
order: 36
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# JavaScript Dates

JavaScript Dates focuses on creating Date objects and understanding local time, UTC, timestamps, and parsing risks. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice JavaScript Dates, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `Date`: represents a timestamp with local and UTC accessors.
- `Intl`: formats locale-aware output.
- `timestamp`: counts milliseconds from the Unix epoch.
- For this topic, alignment between syntax, values, runtime, and visible Console behavior is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<time id="dates-time"></time>
<script>
  const formatter = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' });
  const now = new Date('2026-07-24T12:00:00Z');
  document.querySelector('#dates-time').textContent = formatter.format(now);
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>JavaScript Dates quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>Date</code></td><td>represents a timestamp with local and UTC accessors</td></tr>
    <tr><td><code>Intl</code></td><td>formats locale-aware output</td></tr>
    <tr><td><code>timestamp</code></td><td>counts milliseconds from the Unix epoch</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('dates terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Dates practice</title>
  </head>
  <body>
    <time id="dates-time"></time>
    <script>
      const formatter = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' });
      const now = new Date('2026-07-24T12:00:00Z');
      document.querySelector('#dates-time').textContent = formatter.format(now);
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `Date` | represents a timestamp with local and UTC accessors | In JavaScript Dates, test it against the real runtime, DOM behavior, and error handling path. |
| `Intl` | formats locale-aware output | In JavaScript Dates, test it against the real runtime, DOM behavior, and error handling path. |
| `timestamp` | counts milliseconds from the Unix epoch | In JavaScript Dates, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying JavaScript Dates without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `Date` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `dates.html`, run the first example, then change one part related to `Date`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **Date Formats** so the JavaScript learning path builds on this concept.
