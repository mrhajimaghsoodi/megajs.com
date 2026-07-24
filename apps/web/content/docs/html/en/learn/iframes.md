---
title: "HTML Iframes"
description: "This page explains embedding another page safely with titles, permissions, and loading choices with examples, tables, and practical HTML notes."
seoTitle: "HTML Iframes Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Iframes with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML Iframes, HTML iframe, iframe src title, embed page"
order: 24
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Iframes

HTML Iframes focuses on embedding another page safely with titles, permissions, and loading choices. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Iframes, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `src`: sets the embedded page URL.
- `title`: labels the frame for screen readers.
- `loading="lazy"`: defers offscreen frame loading.
- For this topic, matching syntax to the real meaning of the content is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID" title="HTML Iframes" loading="lazy" allowfullscreen></iframe>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Iframes quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>src</code></td><td>sets the embedded page URL</td></tr>
    <tr><td><code>title</code></td><td>labels the frame for screen readers</td></tr>
    <tr><td><code>loading=&quot;lazy&quot;</code></td><td>defers offscreen frame loading</td></tr>
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
    <title>HTML Iframes practice</title>
  </head>
  <body>
    <iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID" title="HTML Iframes" loading="lazy" allowfullscreen></iframe>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `src` | sets the embedded page URL | In HTML Iframes, match it to the real page purpose, not just the visual result. |
| `title` | labels the frame for screen readers | In HTML Iframes, match it to the real page purpose, not just the visual result. |
| `loading="lazy"` | defers offscreen frame loading | In HTML Iframes, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Iframes only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `src` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `iframes.html`, run the first example, then replace at least one use of `src` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML JavaScript** so the learning path builds on this concept.
