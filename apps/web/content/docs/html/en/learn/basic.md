---
title: "HTML Basic Examples"
description: "This page explains combining headings, paragraphs, links, and images into a first useful page with examples, tables, and practical HTML notes."
seoTitle: "HTML Basic Examples Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Basic Examples with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Practice now."
keywords: "HTML, HTML Basic Examples, HTML examples, basic HTML tags, HTML h1 p a img"
order: 4
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Basic Examples

HTML Basic Examples focuses on combining headings, paragraphs, links, and images into a first useful page. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Basic Examples, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `<h1>`: names the main topic of the page.
- `<p>`: wraps a readable text paragraph.
- `<a> / <img>`: connects pages and embeds images.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<section class="basic" aria-labelledby="basic-title">
  <h2 id="basic-title">HTML Basic Examples</h2>
  <p>combining headings, paragraphs, links, and images into a first useful page.</p>
</section>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Basic Examples quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;h1&gt;</code></td><td>names the main topic of the page</td></tr>
    <tr><td><code>&lt;p&gt;</code></td><td>wraps a readable text paragraph</td></tr>
    <tr><td><code>&lt;a&gt; / &lt;img&gt;</code></td><td>connects pages and embeds images</td></tr>
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
    <title>HTML Basic Examples practice</title>
  </head>
  <body>
    <section class="basic" aria-labelledby="basic-title">
      <h2 id="basic-title">HTML Basic Examples</h2>
      <p>combining headings, paragraphs, links, and images into a first useful page.</p>
    </section>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `<h1>` | names the main topic of the page | In HTML Basic Examples, match it to the real page purpose, not just the visual result. |
| `<p>` | wraps a readable text paragraph | In HTML Basic Examples, match it to the real page purpose, not just the visual result. |
| `<a> / <img>` | connects pages and embeds images | In HTML Basic Examples, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Basic Examples only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `<h1>` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `basic.html`, run the first example, then replace at least one use of `<h1>` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Elements** so the learning path builds on this concept.
