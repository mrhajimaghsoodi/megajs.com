---
title: "HTML Head"
description: "This page explains placing metadata, titles, viewport settings, styles, and resource links in the head with examples, tables, and practical HTML notes."
seoTitle: "HTML Head Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Head with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML Head, HTML head, meta title link, HTML metadata"
order: 27
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Head

HTML Head focuses on placing metadata, titles, viewport settings, styles, and resource links in the head. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Head, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `<meta charset>`: declares character encoding early.
- `<title>`: sets the document title.
- `<link>`: connects styles, icons, and preloads.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<section class="head" aria-labelledby="head-title">
  <h2 id="head-title">HTML Head</h2>
  <p>placing metadata, titles, viewport settings, styles, and resource links in the head.</p>
</section>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Head quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;meta charset&gt;</code></td><td>declares character encoding early</td></tr>
    <tr><td><code>&lt;title&gt;</code></td><td>sets the document title</td></tr>
    <tr><td><code>&lt;link&gt;</code></td><td>connects styles, icons, and preloads</td></tr>
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
    <title>HTML Head practice</title>
  </head>
  <body>
    <section class="head" aria-labelledby="head-title">
      <h2 id="head-title">HTML Head</h2>
      <p>placing metadata, titles, viewport settings, styles, and resource links in the head.</p>
    </section>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `<meta charset>` | declares character encoding early | In HTML Head, match it to the real page purpose, not just the visual result. |
| `<title>` | sets the document title | In HTML Head, match it to the real page purpose, not just the visual result. |
| `<link>` | connects styles, icons, and preloads | In HTML Head, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Head only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `<meta charset>` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `head.html`, run the first example, then replace at least one use of `<meta charset>` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Layout** so the learning path builds on this concept.
