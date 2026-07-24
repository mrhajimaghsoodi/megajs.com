---
title: "Fetch API"
description: "This page explains requesting data with fetch, Response objects, JSON, errors, and loading states with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Fetch API Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn Fetch API (fetch api) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance with practical."
keywords: "JavaScript, Fetch API, JavaScript Fetch API, Fetch API tutorial, fetch api"
order: 92
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Fetch API

Fetch API focuses on requesting data with fetch, Response objects, JSON, errors, and loading states. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice Fetch API, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `fetch()`: starts an HTTP request.
- `Response`: wraps status, headers, and body.
- `response.json()`: parses JSON from the response body.
- For this topic, clear loading state, reliable error handling, and understandable microtask order is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<button id="fetch-api-fetch" type="button">Mock fetch</button>
<pre id="fetch-api-out"></pre>
<script>
  async function loadLesson() {
    const response = await Promise.resolve({
      ok: true,
      async json() {
        return { title: 'Fetch API', source: 'mock response' };
      },
    });
    return response.json();
  }
  document.querySelector('#fetch-api-fetch').addEventListener('click', async () => {
    const data = await loadLesson();
    document.querySelector('#fetch-api-out').textContent = JSON.stringify(data, null, 2);
  });
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>Fetch API quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>fetch()</code></td><td>starts an HTTP request</td></tr>
    <tr><td><code>Response</code></td><td>wraps status, headers, and body</td></tr>
    <tr><td><code>response.json()</code></td><td>parses JSON from the response body</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('fetch-api terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch API practice</title>
  </head>
  <body>
    <button id="fetch-api-fetch" type="button">Mock fetch</button>
    <pre id="fetch-api-out"></pre>
    <script>
      async function loadLesson() {
        const response = await Promise.resolve({
          ok: true,
          async json() {
            return { title: 'Fetch API', source: 'mock response' };
          },
        });
        return response.json();
      }
      document.querySelector('#fetch-api-fetch').addEventListener('click', async () => {
        const data = await loadLesson();
        document.querySelector('#fetch-api-out').textContent = JSON.stringify(data, null, 2);
      });
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `fetch()` | starts an HTTP request | In Fetch API, test it against the real runtime, DOM behavior, and error handling path. |
| `Response` | wraps status, headers, and body | In Fetch API, test it against the real runtime, DOM behavior, and error handling path. |
| `response.json()` | parses JSON from the response body | In Fetch API, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying Fetch API without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `fetch()` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `fetch-api.html`, run the first example, then change one part related to `fetch()`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **Geolocation API** so the JavaScript learning path builds on this concept.
