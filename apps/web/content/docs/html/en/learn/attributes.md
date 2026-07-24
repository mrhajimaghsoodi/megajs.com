---
title: "HTML Attributes"
description: "This page explains adding URLs, labels, state, and configuration with name-value pairs with examples, tables, and practical HTML notes."
seoTitle: "HTML Attributes Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Attributes with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. For precise authoring."
keywords: "HTML, HTML Attributes, HTML attributes, href alt class id, HTML attribute syntax"
order: 6
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Attributes

HTML Attributes focuses on adding URLs, labels, state, and configuration with name-value pairs. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Attributes, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `href`: sets the destination for a link.
- `alt`: describes an image for accessibility and fallback.
- `class / id`: creates styling and scripting hooks.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<section class="attributes" aria-labelledby="attributes-title">
  <h2 id="attributes-title">HTML Attributes</h2>
  <p>adding URLs, labels, state, and configuration with name-value pairs.</p>
</section>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Attributes quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>href</code></td><td>sets the destination for a link</td></tr>
    <tr><td><code>alt</code></td><td>describes an image for accessibility and fallback</td></tr>
    <tr><td><code>class / id</code></td><td>creates styling and scripting hooks</td></tr>
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
    <title>HTML Attributes practice</title>
  </head>
  <body>
    <section class="attributes" aria-labelledby="attributes-title">
      <h2 id="attributes-title">HTML Attributes</h2>
      <p>adding URLs, labels, state, and configuration with name-value pairs.</p>
    </section>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `href` | sets the destination for a link | In HTML Attributes, match it to the real page purpose, not just the visual result. |
| `alt` | describes an image for accessibility and fallback | In HTML Attributes, match it to the real page purpose, not just the visual result. |
| `class / id` | creates styling and scripting hooks | In HTML Attributes, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Attributes only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `href` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `attributes.html`, run the first example, then replace at least one use of `href` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Headings** so the learning path builds on this concept.
