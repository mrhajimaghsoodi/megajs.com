---
title: "HTML Web Workers API"
description: "Learn how heavy JavaScript runs away from the UI thread with real HTML examples and practical checks."
seoTitle: "HTML Web Workers API Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Web Workers API with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages."
keywords: "HTML tutorial, HTML web workers, Worker postMessage, JavaScript background thread"
order: 59
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Web Workers API

In HTML Web Workers API, you learn how heavy JavaScript runs away from the UI thread. The focus is HTML Web Workers API, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when calculations would otherwise freeze typing, scrolling, or animation. Read each example slowly, then change one value at a time to see what the browser does.

## What are HTML Web Workers API?

- It gives HTML Web Workers API a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `new Worker()`, `postMessage()` and `onmessage`.
- It improves real pages when calculations would otherwise freeze typing, scrolling, or animation, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<button id="calculate" type="button">Calculate</button>
<script>
  const worker = new Worker('/workers/calculate.js');
  const calculate = document.querySelector('#calculate');
  calculate.addEventListener('click', () => worker.postMessage({ limit: 100000 }));
  worker.onmessage = (event) => console.log(event.data);
</script>
```

### Example 2: Options in context

```html
<section class="web-workers-notes" aria-labelledby="web-workers-title">
  <h2 id="web-workers-title">HTML Web Workers API options</h2>
  <table>
    <caption>Key syntax for HTML Web Workers API</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>new Worker()</code></td>
      <td>starts a background script</td>
    </tr>
    <tr>
      <td><code>postMessage()</code></td>
      <td>sends data between page and worker</td>
    </tr>
    <tr>
      <td><code>onmessage</code></td>
      <td>receives results asynchronously</td>
    </tr>
    </tbody>
  </table>
</section>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Web Workers API practice</title>
  </head>
  <body>
    <button id="calculate" type="button">Calculate</button>
    <script>
      const worker = new Worker('/workers/calculate.js');
      const calculate = document.querySelector('#calculate');
      calculate.addEventListener('click', () => worker.postMessage({ limit: 100000 }));
      worker.onmessage = (event) => console.log(event.data);
    </script>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML Web Workers API without unrelated layout code.
- Pay attention to `new Worker()`: starts a background script.
- The second and third examples show how the same idea fits into a larger page with event handlers, permissions, state, and error handling.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `new Worker()` | starts a background script | Use it while practicing HTML Web Workers API. |
| `postMessage()` | sends data between page and worker | Use it while practicing HTML Web Workers API. |
| `onmessage` | receives results asynchronously | Use it while practicing HTML Web Workers API. |

## Browser, accessibility, and SEO notes

- Test HTML Web Workers API in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- Many Web APIs depend on HTTPS, permissions, or browser support, so always handle errors.

## Common mistakes

- Using HTML Web Workers API only for appearance instead of matching the content role.
- Forgetting `new Worker()` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `web-workers.html`, copy the first example, then add one extra line that uses `new Worker()` correctly in your own content.

## Next step

Next step: continue with **HTML Server-Sent Events** so the next concept builds on this one.
