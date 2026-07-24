---
title: "HTML id Attribute"
description: "This page explains creating one unique target for labels, fragments, CSS, and scripts with examples, tables, and practical HTML notes."
seoTitle: "HTML id Attribute Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML id Attribute with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Practice now."
keywords: "HTML, HTML id Attribute, HTML id, id attribute, fragment links"
order: 23
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML id Attribute

HTML id Attribute focuses on creating one unique target for labels, fragments, CSS, and scripts. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML id Attribute, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `id`: must be unique in the document.
- `for`: connects a label to an input id.
- `#fragment`: links directly to an element id.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<section class="id" aria-labelledby="id-title">
  <h2 id="id-title">HTML id Attribute</h2>
  <p>creating one unique target for labels, fragments, CSS, and scripts.</p>
</section>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML id Attribute quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>id</code></td><td>must be unique in the document</td></tr>
    <tr><td><code>for</code></td><td>connects a label to an input id</td></tr>
    <tr><td><code>#fragment</code></td><td>links directly to an element id</td></tr>
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
    <title>HTML id Attribute practice</title>
  </head>
  <body>
    <section class="id" aria-labelledby="id-title">
      <h2 id="id-title">HTML id Attribute</h2>
      <p>creating one unique target for labels, fragments, CSS, and scripts.</p>
    </section>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `id` | must be unique in the document | In HTML id Attribute, match it to the real page purpose, not just the visual result. |
| `for` | connects a label to an input id | In HTML id Attribute, match it to the real page purpose, not just the visual result. |
| `#fragment` | links directly to an element id | In HTML id Attribute, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML id Attribute only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `id` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `id.html`, run the first example, then replace at least one use of `id` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Iframes** so the learning path builds on this concept.
