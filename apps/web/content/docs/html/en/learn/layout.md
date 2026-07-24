---
title: "HTML Layout"
description: "This page explains structuring a page with header, navigation, main content, sidebars, and footer with examples, tables, and practical HTML notes."
seoTitle: "HTML Layout Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Layout with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML Layout, HTML layout, header nav main footer, semantic layout"
order: 28
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Layout

HTML Layout focuses on structuring a page with header, navigation, main content, sidebars, and footer. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Layout, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `<header>`: contains introductory page or section content.
- `<nav>`: groups major navigation links.
- `<main>`: contains the unique main page content.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<section class="layout" aria-labelledby="layout-title">
  <h2 id="layout-title">HTML Layout</h2>
  <p>structuring a page with header, navigation, main content, sidebars, and footer.</p>
</section>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Layout quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;header&gt;</code></td><td>contains introductory page or section content</td></tr>
    <tr><td><code>&lt;nav&gt;</code></td><td>groups major navigation links</td></tr>
    <tr><td><code>&lt;main&gt;</code></td><td>contains the unique main page content</td></tr>
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
    <title>HTML Layout practice</title>
  </head>
  <body>
    <section class="layout" aria-labelledby="layout-title">
      <h2 id="layout-title">HTML Layout</h2>
      <p>structuring a page with header, navigation, main content, sidebars, and footer.</p>
    </section>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `<header>` | contains introductory page or section content | In HTML Layout, match it to the real page purpose, not just the visual result. |
| `<nav>` | groups major navigation links | In HTML Layout, match it to the real page purpose, not just the visual result. |
| `<main>` | contains the unique main page content | In HTML Layout, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Layout only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `<header>` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `layout.html`, run the first example, then replace at least one use of `<header>` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Responsive Web Design** so the learning path builds on this concept.
