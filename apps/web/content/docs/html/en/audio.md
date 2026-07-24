---
title: "HTML Audio"
description: "Learn how audio files play with controls, multiple sources, and fallback text with real HTML examples and practical checks."
seoTitle: "HTML Audio Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Audio with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML audio, audio controls source, audio player HTML"
order: 51
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Audio

In HTML Audio, you learn how audio files play with controls, multiple sources, and fallback text. The focus is HTML audio, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when you publish music, narration, pronunciation, or podcast clips. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML audio?

- It gives HTML audio a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `<audio controls>`, `<source>` and `fallback text`.
- It improves real pages when you publish music, narration, pronunciation, or podcast clips, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<audio controls>
  <source src="podcast.mp3" type="audio/mpeg">
  <source src="podcast.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
```

### Example 2: Options in context

```html
<section class="audio-notes" aria-labelledby="audio-title">
  <h2 id="audio-title">HTML Audio options</h2>
  <table>
    <caption>Key syntax for HTML audio</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;audio controls&gt;</code></td>
      <td>creates an audio player</td>
    </tr>
    <tr>
      <td><code>&lt;source&gt;</code></td>
      <td>offers alternate audio formats</td>
    </tr>
    <tr>
      <td><code>fallback text</code></td>
      <td>helps unsupported browsers</td>
    </tr>
    </tbody>
  </table>
</section>
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
    <audio controls>
      <source src="podcast.mp3" type="audio/mpeg">
      <source src="podcast.ogg" type="audio/ogg">
      Your browser does not support the audio element.
    </audio>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML audio without unrelated layout code.
- Pay attention to `<audio controls>`: creates an audio player.
- The second and third examples show how the same idea fits into a larger page with sources, controls, captions, and useful fallback.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `<audio controls>` | creates an audio player | Use it while practicing HTML audio. |
| `<source>` | offers alternate audio formats | Use it while practicing HTML audio. |
| `fallback text` | helps unsupported browsers | Use it while practicing HTML audio. |

## Browser, accessibility, and SEO notes

- Test HTML audio in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- Use controls, captions or subtitles, and fallback links for media; be careful with autoplay.

## Common mistakes

- Using HTML audio only for appearance instead of matching the content role.
- Forgetting `<audio controls>` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `audio.html`, copy the first example, then add one extra line that uses `<audio controls>` correctly in your own content.

## Next step

Next step: continue with **HTML Plug-ins** so the next concept builds on this one.
