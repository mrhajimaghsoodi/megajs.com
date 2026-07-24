---
title: "HTML Geolocation API"
description: "Learn how location is requested only after user permission with real HTML examples and practical checks."
seoTitle: "HTML Geolocation API Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Geolocation API with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages."
keywords: "HTML tutorial, HTML geolocation, navigator geolocation, getCurrentPosition"
order: 56
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Geolocation API

In HTML Geolocation API, you learn how location is requested only after user permission. The focus is HTML Geolocation API, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when a map, delivery, weather, or store-locator feature truly needs location. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML Geolocation API?

- It gives HTML Geolocation API a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `navigator.geolocation`, `getCurrentPosition()` and `coords`.
- It improves real pages when a map, delivery, weather, or store-locator feature truly needs location, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<button id="locate" type="button">Find my location</button>
<output id="result"></output>
<script>
  const result = document.querySelector('#result');
  document.querySelector('#locate').addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      result.value = pos.coords.latitude + ', ' + pos.coords.longitude;
    });
  });
</script>
```

### Example 2: Options in context

```html
<section class="geolocation-notes" aria-labelledby="geolocation-title">
  <h2 id="geolocation-title">HTML Geolocation API options</h2>
  <table>
    <caption>Key syntax for HTML Geolocation API</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>navigator.geolocation</code></td>
      <td>entry point for location requests</td>
    </tr>
    <tr>
      <td><code>getCurrentPosition()</code></td>
      <td>asks for one current location result</td>
    </tr>
    <tr>
      <td><code>coords</code></td>
      <td>contains latitude, longitude, and accuracy</td>
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
    <title>HTML Geolocation API practice</title>
  </head>
  <body>
    <button id="locate" type="button">Find my location</button>
    <output id="result"></output>
    <script>
      const result = document.querySelector('#result');
      document.querySelector('#locate').addEventListener('click', () => {
        navigator.geolocation.getCurrentPosition((pos) => {
          result.value = pos.coords.latitude + ', ' + pos.coords.longitude;
        });
      });
    </script>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML Geolocation API without unrelated layout code.
- Pay attention to `navigator.geolocation`: entry point for location requests.
- The second and third examples show how the same idea fits into a larger page with event handlers, permissions, state, and error handling.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `navigator.geolocation` | entry point for location requests | Use it while practicing HTML Geolocation API. |
| `getCurrentPosition()` | asks for one current location result | Use it while practicing HTML Geolocation API. |
| `coords` | contains latitude, longitude, and accuracy | Use it while practicing HTML Geolocation API. |

## Browser, accessibility, and SEO notes

- Test HTML Geolocation API in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- Many Web APIs depend on HTTPS, permissions, or browser support, so always handle errors.

## Common mistakes

- Using HTML Geolocation API only for appearance instead of matching the content role.
- Forgetting `navigator.geolocation` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `geolocation.html`, copy the first example, then add one extra line that uses `navigator.geolocation` correctly in your own content.

## Next step

Next step: continue with **HTML Drag and Drop API** so the next concept builds on this one.
