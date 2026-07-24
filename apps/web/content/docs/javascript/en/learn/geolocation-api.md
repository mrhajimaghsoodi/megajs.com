---
title: "Geolocation API"
description: "This page explains requesting location with permission, success callbacks, errors, and privacy wording with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Geolocation API Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn Geolocation API (geolocation api) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance."
keywords: "JavaScript, Geolocation API, JavaScript Geolocation API, Geolocation API tutorial, geolocation api"
order: 93
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Geolocation API

Geolocation API focuses on requesting location with permission, success callbacks, errors, and privacy wording. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice Geolocation API, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `Web API`: browser-provided capability used from JavaScript.
- `DOM`: the document object model JavaScript updates.
- `event loop`: schedules user, network, timer, and rendering work.
- For this topic, alignment between syntax, values, runtime, and visible Console behavior is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<button id="geolocation-api-locate" type="button">Use mock location</button>
<output id="geolocation-api-out"></output>
<script>
  document.querySelector('#geolocation-api-locate').addEventListener('click', () => {
    const position = { coords: { latitude: 35.6892, longitude: 51.3890 } };
    document.querySelector('#geolocation-api-out').value =
      `lat ${position.coords.latitude}, lon ${position.coords.longitude}`;
  });
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>Geolocation API quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>Web API</code></td><td>browser-provided capability used from JavaScript</td></tr>
    <tr><td><code>DOM</code></td><td>the document object model JavaScript updates</td></tr>
    <tr><td><code>event loop</code></td><td>schedules user, network, timer, and rendering work</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('geolocation-api terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Geolocation API practice</title>
  </head>
  <body>
    <button id="geolocation-api-locate" type="button">Use mock location</button>
    <output id="geolocation-api-out"></output>
    <script>
      document.querySelector('#geolocation-api-locate').addEventListener('click', () => {
        const position = { coords: { latitude: 35.6892, longitude: 51.3890 } };
        document.querySelector('#geolocation-api-out').value =
          `lat ${position.coords.latitude}, lon ${position.coords.longitude}`;
      });
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `Web API` | browser-provided capability used from JavaScript | In Geolocation API, test it against the real runtime, DOM behavior, and error handling path. |
| `DOM` | the document object model JavaScript updates | In Geolocation API, test it against the real runtime, DOM behavior, and error handling path. |
| `event loop` | schedules user, network, timer, and rendering work | In Geolocation API, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying Geolocation API without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `Web API` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `geolocation-api.html`, run the first example, then change one part related to `Web API`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **Web Storage API** so the JavaScript learning path builds on this concept.
