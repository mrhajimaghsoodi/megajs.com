---
title: "HTML File Paths"
description: "This page explains linking images, stylesheets, scripts, and pages with reliable relative paths with examples, tables, and practical HTML notes."
seoTitle: "HTML File Paths Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML File Paths with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. For precise authoring."
keywords: "HTML, HTML File Paths, HTML file paths, relative path, absolute URL"
order: 26
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML File Paths

HTML File Paths focuses on linking images, stylesheets, scripts, and pages with reliable relative paths. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML File Paths, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `./file.png`: starts from the current folder.
- `../file.png`: moves up one folder before locating a file.
- `/assets/app.css`: starts from the site root.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<section class="file-paths" aria-labelledby="file-paths-title">
  <h2 id="file-paths-title">HTML File Paths</h2>
  <p>linking images, stylesheets, scripts, and pages with reliable relative paths.</p>
</section>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML File Paths quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>./file.png</code></td><td>starts from the current folder</td></tr>
    <tr><td><code>../file.png</code></td><td>moves up one folder before locating a file</td></tr>
    <tr><td><code>/assets/app.css</code></td><td>starts from the site root</td></tr>
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
    <title>HTML File Paths practice</title>
  </head>
  <body>
    <section class="file-paths" aria-labelledby="file-paths-title">
      <h2 id="file-paths-title">HTML File Paths</h2>
      <p>linking images, stylesheets, scripts, and pages with reliable relative paths.</p>
    </section>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `./file.png` | starts from the current folder | In HTML File Paths, match it to the real page purpose, not just the visual result. |
| `../file.png` | moves up one folder before locating a file | In HTML File Paths, match it to the real page purpose, not just the visual result. |
| `/assets/app.css` | starts from the site root | In HTML File Paths, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML File Paths only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `./file.png` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `file-paths.html`, run the first example, then replace at least one use of `./file.png` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Head** so the learning path builds on this concept.
