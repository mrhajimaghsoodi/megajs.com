---
title: "HTML Media"
description: "This page explains adding video, audio, plugins, and embedded media with captions and fallback with examples, tables, and practical HTML notes."
seoTitle: "HTML Media Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Media with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML Media, HTML media, HTML Media tutorial"
order: 49
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Media

HTML Media focuses on adding video, audio, plugins, and embedded media with captions and fallback. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Media, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `<video>`: embeds video with native controls.
- `<audio>`: embeds sound with native controls.
- `<source>`: offers multiple media formats.
- For this topic, accessible fallback, captions, and controls is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<video controls poster="lesson.jpg" width="720">
  <source src="lesson.webm" type="video/webm">
  <source src="lesson.mp4" type="video/mp4">
  <track src="lesson-en.vtt" kind="captions" srclang="en" label="English">
</video>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Media quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;video&gt;</code></td><td>embeds video with native controls</td></tr>
    <tr><td><code>&lt;audio&gt;</code></td><td>embeds sound with native controls</td></tr>
    <tr><td><code>&lt;source&gt;</code></td><td>offers multiple media formats</td></tr>
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
    <title>HTML Media practice</title>
  </head>
  <body>
    <video controls poster="lesson.jpg" width="720">
      <source src="lesson.webm" type="video/webm">
      <source src="lesson.mp4" type="video/mp4">
      <track src="lesson-en.vtt" kind="captions" srclang="en" label="English">
    </video>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `<video>` | embeds video with native controls | In HTML Media, match it to the real page purpose, not just the visual result. |
| `<audio>` | embeds sound with native controls | In HTML Media, match it to the real page purpose, not just the visual result. |
| `<source>` | offers multiple media formats | In HTML Media, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Media only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `<video>` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `media.html`, run the first example, then replace at least one use of `<video>` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Video** so the learning path builds on this concept.
