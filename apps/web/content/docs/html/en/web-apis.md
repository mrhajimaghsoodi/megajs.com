---
title: "HTML Web APIs"
description: "Learn how JavaScript APIs such as Clipboard, Fetch, and DOM APIs extend pages with real HTML examples and practical checks."
seoTitle: "HTML Web APIs Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Web APIs with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML Web APIs, Clipboard API DOM, browser API tutorial"
order: 55
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Web APIs

In HTML Web APIs, you learn how JavaScript APIs such as Clipboard, Fetch, and DOM APIs extend pages. The focus is HTML Web APIs, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when plain HTML needs controlled access to browser features. Read each example slowly, then change one value at a time to see what the browser does.

## What are HTML Web APIs?

- It gives HTML Web APIs a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `Clipboard API`, `DOM API` and `Fetch API`.
- It improves real pages when plain HTML needs controlled access to browser features, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<button id="copy" type="button">Copy link</button>
<script>
  document.querySelector('#copy').addEventListener('click', async () => {
    await navigator.clipboard.writeText(location.href);
  });
</script>
```

### Example 2: Options in context

```html
<section class="web-apis-notes" aria-labelledby="web-apis-title">
  <h2 id="web-apis-title">HTML Web APIs options</h2>
  <table>
    <caption>Key syntax for HTML Web APIs</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>Clipboard API</code></td>
      <td>copies or reads clipboard data with permission rules</td>
    </tr>
    <tr>
      <td><code>DOM API</code></td>
      <td>finds and updates elements</td>
    </tr>
    <tr>
      <td><code>Fetch API</code></td>
      <td>loads data from servers</td>
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
    <title>HTML Web APIs practice</title>
  </head>
  <body>
    <button id="copy" type="button">Copy link</button>
    <script>
      document.querySelector('#copy').addEventListener('click', async () => {
        await navigator.clipboard.writeText(location.href);
      });
    </script>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML Web APIs without unrelated layout code.
- Pay attention to `Clipboard API`: copies or reads clipboard data with permission rules.
- The second and third examples show how the same idea fits into a larger page with event handlers, permissions, state, and error handling.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `Clipboard API` | copies or reads clipboard data with permission rules | Use it while practicing HTML Web APIs. |
| `DOM API` | finds and updates elements | Use it while practicing HTML Web APIs. |
| `Fetch API` | loads data from servers | Use it while practicing HTML Web APIs. |

## Browser, accessibility, and SEO notes

- Test HTML Web APIs in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- Many Web APIs depend on HTTPS, permissions, or browser support, so always handle errors.

## Common mistakes

- Using HTML Web APIs only for appearance instead of matching the content role.
- Forgetting `Clipboard API` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `web-apis.html`, copy the first example, then add one extra line that uses `Clipboard API` correctly in your own content.

## Next step

Next step: continue with **HTML Geolocation API** so the next concept builds on this one.
