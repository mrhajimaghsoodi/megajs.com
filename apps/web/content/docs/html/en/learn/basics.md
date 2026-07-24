---
title: "HTML Basics"
description: "This page explains the foundation of a complete HTML document and the core tags used on real pages with examples, tables, and practical HTML notes."
seoTitle: "HTML Basics Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Basics with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML Basics, HTML basics, HTML Basics tutorial"
order: 2
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Basics

HTML Basics focuses on the foundation of a complete HTML document and the core tags used on real pages. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Basics, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `<!doctype html>`: keeps browsers in standards mode.
- `<meta charset="UTF-8">`: keeps multilingual text readable.
- `<title>`: names the page outside the visible body.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>HTML Basics</title>
  </head>
  <body>
    <main>
      <h1>HTML Basics</h1>
    </main>
  </body>
</html>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Basics quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;!doctype html&gt;</code></td><td>keeps browsers in standards mode</td></tr>
    <tr><td><code>&lt;meta charset=&quot;UTF-8&quot;&gt;</code></td><td>keeps multilingual text readable</td></tr>
    <tr><td><code>&lt;title&gt;</code></td><td>names the page outside the visible body</td></tr>
  </tbody>
</table>
```

### Example 3: Complete practice page

```html
<main>
  <h1>HTML Basics checklist</h1>
  <p>Validate the document, inspect the DOM, and confirm the page purpose.</p>
</main>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `<!doctype html>` | keeps browsers in standards mode | In HTML Basics, match it to the real page purpose, not just the visual result. |
| `<meta charset="UTF-8">` | keeps multilingual text readable | In HTML Basics, match it to the real page purpose, not just the visual result. |
| `<title>` | names the page outside the visible body | In HTML Basics, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Basics only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `<!doctype html>` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `basics.html`, run the first example, then replace at least one use of `<!doctype html>` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Editors** so the learning path builds on this concept.
