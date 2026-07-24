---
title: "HTML CSS"
description: "This page explains connecting inline, internal, and external CSS to HTML markup safely with examples, tables, and practical HTML notes."
seoTitle: "HTML CSS Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML CSS with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML CSS, HTML CSS, link stylesheet, internal CSS"
order: 14
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML CSS

HTML CSS focuses on connecting inline, internal, and external CSS to HTML markup safely. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML CSS, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `style attribute`: applies one-off styles to one element.
- `<style>`: keeps page-specific CSS in the head.
- `<link rel="stylesheet">`: loads reusable external CSS.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<section class="css" aria-labelledby="css-title">
  <h2 id="css-title">HTML CSS</h2>
  <p>connecting inline, internal, and external CSS to HTML markup safely.</p>
</section>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML CSS quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>style attribute</code></td><td>applies one-off styles to one element</td></tr>
    <tr><td><code>&lt;style&gt;</code></td><td>keeps page-specific CSS in the head</td></tr>
    <tr><td><code>&lt;link rel=&quot;stylesheet&quot;&gt;</code></td><td>loads reusable external CSS</td></tr>
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
    <title>HTML CSS practice</title>
  </head>
  <body>
    <section class="css" aria-labelledby="css-title">
      <h2 id="css-title">HTML CSS</h2>
      <p>connecting inline, internal, and external CSS to HTML markup safely.</p>
    </section>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `style attribute` | applies one-off styles to one element | In HTML CSS, match it to the real page purpose, not just the visual result. |
| `<style>` | keeps page-specific CSS in the head | In HTML CSS, match it to the real page purpose, not just the visual result. |
| `<link rel="stylesheet">` | loads reusable external CSS | In HTML CSS, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML CSS only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `style attribute` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `css.html`, run the first example, then replace at least one use of `style attribute` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Links** so the learning path builds on this concept.
