---
title: "HTML URL Encoding"
description: "Learn how unsafe characters become percent-encoded inside links and query strings with real HTML examples and practical checks."
seoTitle: "HTML URL Encoding Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML URL Encoding with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Build confidence."
keywords: "HTML tutorial, HTML URL encoding, percent encoding, query string HTML"
order: 37
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML URL Encoding

In HTML URL Encoding, you learn how unsafe characters become percent-encoded inside links and query strings. The focus is URL encoding in HTML, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when URLs contain spaces, Persian text, reserved symbols, or form query values. Read each example slowly, then change one value at a time to see what the browser does.

## What is URL encoding in HTML?

- It gives URL encoding in HTML a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `%20`, `query string` and `encodeURIComponent()`.
- It improves real pages when URLs contain spaces, Persian text, reserved symbols, or form query values, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<a href="/search?q=learn%20HTML&level=beginner">Search for learn HTML</a>
<form action="/search" method="get">
  <input name="q" value="HTML tables">
</form>
```

### Example 2: Options in context

```html
<section class="url-encode-notes" aria-labelledby="url-encode-title">
  <h2 id="url-encode-title">HTML URL Encoding options</h2>
  <table>
    <caption>Key syntax for URL encoding in HTML</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>%20</code></td>
      <td>represents a space in a URL</td>
    </tr>
    <tr>
      <td><code>query string</code></td>
      <td>passes key-value pairs after ?</td>
    </tr>
    <tr>
      <td><code>encodeURIComponent()</code></td>
      <td>encodes dynamic JavaScript values safely</td>
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
    <title>HTML URL Encoding practice</title>
  </head>
  <body>
    <a href="/search?q=learn%20HTML&level=beginner">Search for learn HTML</a>
    <form action="/search" method="get">
      <input name="q" value="HTML tables">
    </form>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for URL encoding in HTML without unrelated layout code.
- Pay attention to `%20`: represents a space in a URL.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `%20` | represents a space in a URL | Use it while practicing URL encoding in HTML. |
| `query string` | passes key-value pairs after ? | Use it while practicing URL encoding in HTML. |
| `encodeURIComponent()` | encodes dynamic JavaScript values safely | Use it while practicing URL encoding in HTML. |

## Browser, accessibility, and SEO notes

- Test URL encoding in HTML in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using URL encoding in HTML only for appearance instead of matching the content role.
- Forgetting `%20` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `url-encode.html`, copy the first example, then add one extra line that uses `%20` correctly in your own content.

## Next step

Next step: continue with **HTML and XHTML** so the next concept builds on this one.
