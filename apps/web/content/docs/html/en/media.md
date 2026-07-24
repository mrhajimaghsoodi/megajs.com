---
title: "HTML Media"
description: "Learn how audio, video, tracks, and embeds bring time-based content into pages with real HTML examples and practical checks."
seoTitle: "HTML Media Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Media with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML media, video audio track, web media"
order: 49
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Media

In HTML Media, you learn how audio, video, tracks, and embeds bring time-based content into pages. The focus is HTML media, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when a lesson, demo, podcast, or external player belongs inside the page. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML media?

- It gives HTML media a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `<video>`, `<audio>` and `<track>`.
- It improves real pages when a lesson, demo, podcast, or external player belongs inside the page, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<video controls width="640">
  <source src="lesson.mp4" type="video/mp4">
  <track src="captions.vtt" kind="captions" srclang="en" label="English">
  Your browser does not support the video element.
</video>
```

### Example 2: Options in context

```html
<section class="media-notes" aria-labelledby="media-title">
  <h2 id="media-title">HTML Media options</h2>
  <table>
    <caption>Key syntax for HTML media</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;video&gt;</code></td>
      <td>embeds video playback</td>
    </tr>
    <tr>
      <td><code>&lt;audio&gt;</code></td>
      <td>embeds audio playback</td>
    </tr>
    <tr>
      <td><code>&lt;track&gt;</code></td>
      <td>adds captions or subtitles</td>
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
    <title>HTML Media practice</title>
  </head>
  <body>
    <video controls width="640">
      <source src="lesson.mp4" type="video/mp4">
      <track src="captions.vtt" kind="captions" srclang="en" label="English">
      Your browser does not support the video element.
    </video>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML media without unrelated layout code.
- Pay attention to `<video>`: embeds video playback.
- The second and third examples show how the same idea fits into a larger page with sources, controls, captions, and useful fallback.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `<video>` | embeds video playback | Use it while practicing HTML media. |
| `<audio>` | embeds audio playback | Use it while practicing HTML media. |
| `<track>` | adds captions or subtitles | Use it while practicing HTML media. |

## Browser, accessibility, and SEO notes

- Test HTML media in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- Use controls, captions or subtitles, and fallback links for media; be careful with autoplay.

## Common mistakes

- Using HTML media only for appearance instead of matching the content role.
- Forgetting `<video>` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `media.html`, copy the first example, then add one extra line that uses `<video>` correctly in your own content.

## Next step

Next step: continue with **HTML Video** so the next concept builds on this one.
