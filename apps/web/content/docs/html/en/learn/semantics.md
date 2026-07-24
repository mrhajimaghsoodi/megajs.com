---
title: "HTML Semantics"
description: "This page explains choosing elements that describe the role of content instead of only its appearance with examples, tables, and practical HTML notes."
seoTitle: "HTML Semantics Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Semantics with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML Semantics, semantic HTML, article section aside, HTML accessibility SEO"
order: 31
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Semantics

HTML Semantics focuses on choosing elements that describe the role of content instead of only its appearance. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Semantics, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `<article>`: stands for independent reusable content.
- `<section>`: groups a themed part with a heading.
- `<aside>`: contains related but secondary material.
- For this topic, clear meaning for users, screen readers, and search engines is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<section class="semantics" aria-labelledby="semantics-title">
  <h2 id="semantics-title">HTML Semantics</h2>
  <p>choosing elements that describe the role of content instead of only its appearance.</p>
</section>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Semantics quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;article&gt;</code></td><td>stands for independent reusable content</td></tr>
    <tr><td><code>&lt;section&gt;</code></td><td>groups a themed part with a heading</td></tr>
    <tr><td><code>&lt;aside&gt;</code></td><td>contains related but secondary material</td></tr>
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
    <title>HTML Semantics practice</title>
  </head>
  <body>
    <section class="semantics" aria-labelledby="semantics-title">
      <h2 id="semantics-title">HTML Semantics</h2>
      <p>choosing elements that describe the role of content instead of only its appearance.</p>
    </section>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `<article>` | stands for independent reusable content | In HTML Semantics, match it to the real page purpose, not just the visual result. |
| `<section>` | groups a themed part with a heading | In HTML Semantics, match it to the real page purpose, not just the visual result. |
| `<aside>` | contains related but secondary material | In HTML Semantics, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Semantics only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `<article>` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `semantics.html`, run the first example, then replace at least one use of `<article>` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Style Guide** so the learning path builds on this concept.
