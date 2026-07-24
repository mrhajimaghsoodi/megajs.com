---
title: "HTML Audio"
description: "This page explains playing audio files with controls, multiple sources, and fallback download text with examples, tables, and practical HTML notes."
seoTitle: "HTML Audio Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn HTML Audio with HTML examples, syntax tables, common mistakes, and next steps in a W3Schools-style path for accessible pages. Use it in real projects."
keywords: "HTML, HTML Audio, HTML audio, audio source, audio controls"
order: 51
track: learn
sources:
  - name: W3Schools HTML Tutorial
    url: https://www.w3schools.com/html/default.asp
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Audio

HTML Audio focuses on playing audio files with controls, multiple sources, and fallback download text. This is an educational rewrite inspired by the W3Schools HTML learning path, with examples you can edit immediately in the live editor.

When you practice HTML Audio, do not stop at the visual result. Inspect the DOM, check accessibility, name attributes deliberately, and consider the SEO effect of the markup.

## Core idea

- `<audio controls>`: shows native audio controls.
- `<source>`: offers mp3, ogg, or other formats.
- `preload`: hints how much audio to load early.
- For this topic, accessible fallback, captions, and controls is the main sign that your markup is doing its job.

## HTML examples

The three examples move from a focused pattern to a complete page. Change one value, text node, or attribute and compare the browser output.

### Example 1: Focused pattern

```html
<audio controls preload="metadata">
  <source src="episode.mp3" type="audio/mpeg">
  <source src="episode.ogg" type="audio/ogg">
  <a href="episode.mp3">Download audio</a>
</audio>
```

### Example 2: Options in context

```html
<table>
  <caption>HTML Audio quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;audio controls&gt;</code></td><td>shows native audio controls</td></tr>
    <tr><td><code>&lt;source&gt;</code></td><td>offers mp3, ogg, or other formats</td></tr>
    <tr><td><code>preload</code></td><td>hints how much audio to load early</td></tr>
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
    <title>HTML Audio practice</title>
  </head>
  <body>
    <audio controls preload="metadata">
      <source src="episode.mp3" type="audio/mpeg">
      <source src="episode.ogg" type="audio/ogg">
      <a href="episode.mp3">Download audio</a>
    </audio>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `<audio controls>` | shows native audio controls | In HTML Audio, match it to the real page purpose, not just the visual result. |
| `<source>` | offers mp3, ogg, or other formats | In HTML Audio, match it to the real page purpose, not just the visual result. |
| `preload` | hints how much audio to load early | In HTML Audio, match it to the real page purpose, not just the visual result. |

## Common mistakes

- Using HTML Audio only for appearance without a clear content or accessibility role.
- Copying the example without changing ids, paths, labels, alt text, or visible copy for the real project.
- Forgetting to test `<audio controls>` in the browser, with the keyboard, and in DevTools after the page appears to work.

## Practice step

Create a file named `audio.html`, run the first example, then replace at least one use of `<audio controls>` with content from your own project. Test it with the keyboard and DevTools.

## Next step

Next, continue with **HTML Plug-ins** so the learning path builds on this concept.
