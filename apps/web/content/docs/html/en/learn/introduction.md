---
title: "Introduction to HTML"
description: "This page explains what HTML is, how browsers read it, and how this W3Schools-style path is organized with examples, tables, and practical HTML notes."
seoTitle: "Introduction to HTML Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn Introduction to HTML with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Practice now."
keywords: "HTML, Introduction to HTML, HTML introduction, HTML tutorial, web page structure"
order: 1
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# Introduction to HTML

Introduction to HTML focuses on what HTML is, how browsers read it, and how this W3Schools-style path is organized. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice Introduction to HTML, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `<!doctype html>`: starts a modern standards-mode document.
- `<html lang="en">`: wraps the document and declares language.
- `<head> / <body>`: separates metadata from visible content.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Introduction to HTML</title>
  </head>
  <body>
    <main>
      <h1>Introduction to HTML</h1>
    </main>
  </body>
</html>
```

### Example 2: Options in context

```html
<table>
  <caption>Introduction to HTML quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;!doctype html&gt;</code></td><td>starts a modern standards-mode document</td></tr>
    <tr><td><code>&lt;html lang=&quot;en&quot;&gt;</code></td><td>wraps the document and declares language</td></tr>
    <tr><td><code>&lt;head&gt; / &lt;body&gt;</code></td><td>separates metadata from visible content</td></tr>
  </tbody>
</table>
```

### Example 3: Complete practice page

```html
<main>
  <h1>Introduction to HTML checklist</h1>
  <p>Validate the document, inspect the DOM, and confirm the page purpose.</p>
</main>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `<!doctype html>` | starts a modern standards-mode document | In Introduction to HTML, match it to the real page purpose, not just the visual result. |
| `<html lang="en">` | wraps the document and declares language | In Introduction to HTML, match it to the real page purpose, not just the visual result. |
| `<head> / <body>` | separates metadata from visible content | In Introduction to HTML, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using Introduction to HTML only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `<!doctype html>` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `introduction.html`, run the first example, then replace at least one use of `<!doctype html>` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Basics** so the learning path builds on this concept.
