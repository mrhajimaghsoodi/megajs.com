---
title: "HTML Favicon"
description: "This page explains adding browser tab icons for brand recognition across tabs and bookmarks with examples, tables, and practical HTML notes."
seoTitle: "HTML Favicon Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Favicon with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML Favicon, HTML favicon, rel icon, browser tab icon"
order: 17
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Favicon

HTML Favicon focuses on adding browser tab icons for brand recognition across tabs and bookmarks. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Favicon, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `rel="icon"`: registers an icon resource.
- `sizes`: declares bitmap icon dimensions.
- `type`: tells the browser the file MIME type.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<section class="favicon" aria-labelledby="favicon-title">
  <h2 id="favicon-title">HTML Favicon</h2>
  <p>adding browser tab icons for brand recognition across tabs and bookmarks.</p>
</section>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Favicon quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>rel=&quot;icon&quot;</code></td><td>registers an icon resource</td></tr>
    <tr><td><code>sizes</code></td><td>declares bitmap icon dimensions</td></tr>
    <tr><td><code>type</code></td><td>tells the browser the file MIME type</td></tr>
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
    <title>HTML Favicon practice</title>
  </head>
  <body>
    <section class="favicon" aria-labelledby="favicon-title">
      <h2 id="favicon-title">HTML Favicon</h2>
      <p>adding browser tab icons for brand recognition across tabs and bookmarks.</p>
    </section>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `rel="icon"` | registers an icon resource | In HTML Favicon, match it to the real page purpose, not just the visual result. |
| `sizes` | declares bitmap icon dimensions | In HTML Favicon, match it to the real page purpose, not just the visual result. |
| `type` | tells the browser the file MIME type | In HTML Favicon, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Favicon only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `rel="icon"` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `favicon.html`, run the first example, then replace at least one use of `rel="icon"` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Page Title** so the learning path builds on this concept.
