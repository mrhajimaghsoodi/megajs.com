---
title: "HTML Images"
description: "This page explains embedding images with useful alternative text, dimensions, and responsive options with examples, tables, and practical HTML notes."
seoTitle: "HTML Images Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Images with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML Images, HTML images, img alt src, responsive images"
order: 16
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Images

HTML Images focuses on embedding images with useful alternative text, dimensions, and responsive options. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Images, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `src`: points to the image file.
- `alt`: describes meaningful images or marks decorative ones empty.
- `width / height`: reserves layout space before loading.
- For this topic, clear meaning for users, screen readers, and search engines is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<img src="hero-640.jpg" srcset="hero-640.jpg 640w, hero-1280.jpg 1280w" sizes="(max-width: 700px) 100vw, 700px" alt="HTML layout sketch" width="700" height="394">
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Images quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>src</code></td><td>points to the image file</td></tr>
    <tr><td><code>alt</code></td><td>describes meaningful images or marks decorative ones empty</td></tr>
    <tr><td><code>width / height</code></td><td>reserves layout space before loading</td></tr>
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
    <title>HTML Images practice</title>
  </head>
  <body>
    <img src="hero-640.jpg" srcset="hero-640.jpg 640w, hero-1280.jpg 1280w" sizes="(max-width: 700px) 100vw, 700px" alt="HTML layout sketch" width="700" height="394">
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `src` | points to the image file | In HTML Images, match it to the real page purpose, not just the visual result. |
| `alt` | describes meaningful images or marks decorative ones empty | In HTML Images, match it to the real page purpose, not just the visual result. |
| `width / height` | reserves layout space before loading | In HTML Images, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Images only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `src` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `images.html`, run the first example, then replace at least one use of `src` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Favicon** so the learning path builds on this concept.
