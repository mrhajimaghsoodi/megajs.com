---
title: "HTML URL Encoding"
description: "This page explains encoding unsafe URL characters for reliable links, queries, and form values with examples, tables, and practical HTML notes."
seoTitle: "HTML URL Encoding Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML URL Encoding with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Practice now."
keywords: "HTML, HTML URL Encoding, HTML URL encoding, percent encoding, query string HTML"
order: 37
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML URL Encoding

HTML URL Encoding focuses on encoding unsafe URL characters for reliable links, queries, and form values. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML URL Encoding, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `%20`: represents a space in a URL.
- `query string`: passes key-value pairs after ?.
- `encodeURIComponent()`: encodes dynamic JavaScript values safely.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<section class="url-encode" aria-labelledby="url-encode-title">
  <h2 id="url-encode-title">HTML URL Encoding</h2>
  <p>encoding unsafe URL characters for reliable links, queries, and form values.</p>
</section>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML URL Encoding quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>%20</code></td><td>represents a space in a URL</td></tr>
    <tr><td><code>query string</code></td><td>passes key-value pairs after ?</td></tr>
    <tr><td><code>encodeURIComponent()</code></td><td>encodes dynamic JavaScript values safely</td></tr>
  </tbody>
</table>
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
    <section class="url-encode" aria-labelledby="url-encode-title">
      <h2 id="url-encode-title">HTML URL Encoding</h2>
      <p>encoding unsafe URL characters for reliable links, queries, and form values.</p>
    </section>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `%20` | represents a space in a URL | In HTML URL Encoding, match it to the real page purpose, not just the visual result. |
| `query string` | passes key-value pairs after ? | In HTML URL Encoding, match it to the real page purpose, not just the visual result. |
| `encodeURIComponent()` | encodes dynamic JavaScript values safely | In HTML URL Encoding, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML URL Encoding only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `%20` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `url-encode.html`, run the first example, then replace at least one use of `%20` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML and XHTML** so the learning path builds on this concept.
