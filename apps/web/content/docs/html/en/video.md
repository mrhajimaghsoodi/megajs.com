---
title: "HTML Video"
description: "Learn how the video element plays files with controls, sources, posters, captions, and fallback text with real HTML examples and practical checks."
seoTitle: "HTML Video Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Video with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML video, video controls source track, video captions HTML"
order: 50
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Video

In HTML Video, you learn how the video element plays files with controls, sources, posters, captions, and fallback text. The focus is HTML video, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when you host a video file and need accessible playback in the browser. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML video?

- It gives HTML video a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `controls`, `<source>` and `<track kind="captions">`.
- It improves real pages when you host a video file and need accessible playback in the browser, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Sources and tracks

```html
<video controls poster="poster.jpg" width="640">
  <source src="intro.mp4" type="video/mp4">
  <source src="intro.webm" type="video/webm">
  <track src="intro.vtt" kind="captions" srclang="en" label="English">
</video>
```

### Example 2: Downloadable fallback

```html
<video controls preload="metadata" poster="course-poster.jpg">
  <source src="course-intro.webm" type="video/webm">
  <source src="course-intro.mp4" type="video/mp4">
  <p>Your browser cannot play this video. <a href="course-intro.mp4">Download it</a>.</p>
</video>
```

### Example 3: Multilingual captions

```html
<figure>
  <video controls width="720">
    <source src="demo.mp4" type="video/mp4">
    <track src="demo-fa.vtt" kind="subtitles" srclang="fa" label="فارسی">
    <track src="demo-en.vtt" kind="captions" srclang="en" label="English">
  </video>
  <figcaption>Course introduction with captions.</figcaption>
</figure>
```

## Example explained

- The first example shows the core pattern for HTML video without unrelated layout code.
- Pay attention to `controls`: shows built-in playback controls.
- The second and third examples show how the same idea fits into a larger page with sources, controls, captions, and useful fallback.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `controls` | shows built-in playback controls | Use it while practicing HTML video. |
| `<source>` | offers multiple video formats | Use it while practicing HTML video. |
| `<track kind="captions">` | adds captions for accessibility | Use it while practicing HTML video. |

## Browser, accessibility, and SEO notes

- Test HTML video in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- Use controls, captions or subtitles, and fallback links for media; be careful with autoplay.

## Common mistakes

- Using HTML video only for appearance instead of matching the content role.
- Forgetting `controls` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `video.html`, copy the first example, then add one extra line that uses `controls` correctly in your own content.

## Next step

Next step: continue with **HTML Audio** so the next concept builds on this one.
