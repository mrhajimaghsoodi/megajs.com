---
title: "HTML Video"
description: "This page explains playing video with controls, multiple sources, captions, posters, and fallback links with examples, tables, and practical HTML notes."
seoTitle: "HTML Video Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Video with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML Video, HTML video, video controls track, video captions"
order: 50
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Video

HTML Video focuses on playing video with controls, multiple sources, captions, posters, and fallback links. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Video, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `<video controls>`: shows native playback controls.
- `<source>`: offers a format candidate.
- `<track>`: adds captions or subtitles.
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
  <caption>HTML Video quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;video controls&gt;</code></td><td>shows native playback controls</td></tr>
    <tr><td><code>&lt;source&gt;</code></td><td>offers a format candidate</td></tr>
    <tr><td><code>&lt;track&gt;</code></td><td>adds captions or subtitles</td></tr>
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
    <title>HTML Video practice</title>
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
| `<video controls>` | shows native playback controls | In HTML Video, match it to the real page purpose, not just the visual result. |
| `<source>` | offers a format candidate | In HTML Video, match it to the real page purpose, not just the visual result. |
| `<track>` | adds captions or subtitles | In HTML Video, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Video only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `<video controls>` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `video.html`, run the first example, then replace at least one use of `<video controls>` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Audio** so the learning path builds on this concept.
