---
title: "HTML Images"
description: "Learn how img embeds visual content with accessible alternative text and stable sizing with real HTML examples and practical checks."
seoTitle: "HTML Images Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Images with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML images, img alt src, responsive images"
order: 16
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Images

In HTML Images, you learn how img embeds visual content with accessible alternative text and stable sizing. The focus is HTML images, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when a picture adds information, branding, charts, or decoration. Read each example slowly, then change one value at a time to see what the browser does.

## What are HTML images?

- It gives HTML images a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `src`, `alt` and `width / height`.
- It improves real pages when a picture adds information, branding, charts, or decoration, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<figure>
  <img src="/images/html-layout.png" alt="Diagram of an HTML page layout" width="640" height="360">
  <figcaption>HTML layout diagram</figcaption>
</figure>
```

### Example 2: Options in context

```html
<section class="images-notes" aria-labelledby="images-title">
  <h2 id="images-title">HTML Images options</h2>
  <table>
    <caption>Key syntax for HTML images</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>src</code></td>
      <td>points to the image file</td>
    </tr>
    <tr>
      <td><code>alt</code></td>
      <td>describes meaningful images or marks decorative ones empty</td>
    </tr>
    <tr>
      <td><code>width / height</code></td>
      <td>reserves layout space before loading</td>
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
    <title>HTML Images practice</title>
  </head>
  <body>
    <figure>
      <img src="/images/html-layout.png" alt="Diagram of an HTML page layout" width="640" height="360">
      <figcaption>HTML layout diagram</figcaption>
    </figure>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML images without unrelated layout code.
- Pay attention to `src`: points to the image file.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `src` | points to the image file | Use it while practicing HTML images. |
| `alt` | describes meaningful images or marks decorative ones empty | Use it while practicing HTML images. |
| `width / height` | reserves layout space before loading | Use it while practicing HTML images. |

## Browser, accessibility, and SEO notes

- Test HTML images in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML images only for appearance instead of matching the content role.
- Forgetting `src` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `images.html`, copy the first example, then add one extra line that uses `src` correctly in your own content.

## Next step

Next step: continue with **HTML Favicon** so the next concept builds on this one.
