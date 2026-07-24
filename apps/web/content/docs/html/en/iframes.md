---
title: "HTML Iframes"
description: "Learn how another document can be embedded inside the current page with real HTML examples and practical checks."
seoTitle: "HTML Iframes Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Iframes with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML iframe, iframe src title, embed page"
order: 24
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Iframes

In HTML Iframes, you learn how another document can be embedded inside the current page. The focus is HTML iframes, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when trusted external content such as maps or videos must appear inline. Read each example slowly, then change one value at a time to see what the browser does.

## What are HTML iframes?

- It gives HTML iframes a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `src`, `title` and `loading="lazy"`.
- It improves real pages when trusted external content such as maps or videos must appear inline, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<iframe
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="HTML tutorial video"
  loading="lazy"
  allowfullscreen>
</iframe>
```

### Example 2: Options in context

```html
<section class="iframes-notes" aria-labelledby="iframes-title">
  <h2 id="iframes-title">HTML Iframes options</h2>
  <table>
    <caption>Key syntax for HTML iframes</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>src</code></td>
      <td>sets the embedded page URL</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td>labels the frame for screen readers</td>
    </tr>
    <tr>
      <td><code>loading=&quot;lazy&quot;</code></td>
      <td>defers offscreen frame loading</td>
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
    <title>HTML Iframes practice</title>
  </head>
  <body>
    <iframe
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      title="HTML tutorial video"
      loading="lazy"
      allowfullscreen>
    </iframe>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML iframes without unrelated layout code.
- Pay attention to `src`: sets the embedded page URL.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `src` | sets the embedded page URL | Use it while practicing HTML iframes. |
| `title` | labels the frame for screen readers | Use it while practicing HTML iframes. |
| `loading="lazy"` | defers offscreen frame loading | Use it while practicing HTML iframes. |

## Browser, accessibility, and SEO notes

- Test HTML iframes in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML iframes only for appearance instead of matching the content role.
- Forgetting `src` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `iframes.html`, copy the first example, then add one extra line that uses `src` correctly in your own content.

## Next step

Next step: continue with **HTML JavaScript** so the next concept builds on this one.
