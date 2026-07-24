---
title: "HTML Styles"
description: "This page explains using the style attribute for quick demos before moving CSS to better places with examples, tables, and practical HTML notes."
seoTitle: "HTML Styles Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Styles with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML Styles, HTML styles, style attribute, inline CSS"
order: 9
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Styles

HTML Styles focuses on using the style attribute for quick demos before moving CSS to better places. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Styles, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `style`: contains CSS declarations on one element.
- `color`: sets text color.
- `background-color`: sets an element background.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<section class="styles" aria-labelledby="styles-title">
  <h2 id="styles-title">HTML Styles</h2>
  <p>using the style attribute for quick demos before moving CSS to better places.</p>
</section>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Styles quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>style</code></td><td>contains CSS declarations on one element</td></tr>
    <tr><td><code>color</code></td><td>sets text color</td></tr>
    <tr><td><code>background-color</code></td><td>sets an element background</td></tr>
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
    <title>HTML Styles practice</title>
  </head>
  <body>
    <section class="styles" aria-labelledby="styles-title">
      <h2 id="styles-title">HTML Styles</h2>
      <p>using the style attribute for quick demos before moving CSS to better places.</p>
    </section>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `style` | contains CSS declarations on one element | In HTML Styles, match it to the real page purpose, not just the visual result. |
| `color` | sets text color | In HTML Styles, match it to the real page purpose, not just the visual result. |
| `background-color` | sets an element background | In HTML Styles, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Styles only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `style` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `styles.html`, run the first example, then replace at least one use of `style` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Text Formatting** so the learning path builds on this concept.
