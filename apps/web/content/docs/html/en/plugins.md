---
title: "HTML Plug-ins"
description: "Learn how old plugin patterns compare with modern object, embed, iframe, and native media with real HTML examples and practical checks."
seoTitle: "HTML Plug-ins Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Plug-ins with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML plugins, object embed, legacy HTML plugins"
order: 52
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Plug-ins

In HTML Plug-ins, you learn how old plugin patterns compare with modern object, embed, iframe, and native media. The focus is HTML plug-ins, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when you maintain legacy embeds or show a PDF fallback. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML plug-ins?

- It gives HTML plug-ins a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `<object>`, `<embed>` and `native media`.
- It improves real pages when you maintain legacy embeds or show a PDF fallback, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<object data="brochure.pdf" type="application/pdf" width="100%" height="500">
  <p><a href="brochure.pdf">Download the PDF brochure</a></p>
</object>
```

### Example 2: Options in context

```html
<section class="plugins-notes" aria-labelledby="plugins-title">
  <h2 id="plugins-title">HTML Plug-ins options</h2>
  <table>
    <caption>Key syntax for HTML plug-ins</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;object&gt;</code></td>
      <td>embeds external resources with fallback content</td>
    </tr>
    <tr>
      <td><code>&lt;embed&gt;</code></td>
      <td>places external content with fewer fallback options</td>
    </tr>
    <tr>
      <td><code>native media</code></td>
      <td>usually replaces old plugin players</td>
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
    <title>HTML Plug-ins practice</title>
  </head>
  <body>
    <object data="brochure.pdf" type="application/pdf" width="100%" height="500">
      <p><a href="brochure.pdf">Download the PDF brochure</a></p>
    </object>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML plug-ins without unrelated layout code.
- Pay attention to `<object>`: embeds external resources with fallback content.
- The second and third examples show how the same idea fits into a larger page with sources, controls, captions, and useful fallback.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `<object>` | embeds external resources with fallback content | Use it while practicing HTML plug-ins. |
| `<embed>` | places external content with fewer fallback options | Use it while practicing HTML plug-ins. |
| `native media` | usually replaces old plugin players | Use it while practicing HTML plug-ins. |

## Browser, accessibility, and SEO notes

- Test HTML plug-ins in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- Use controls, captions or subtitles, and fallback links for media; be careful with autoplay.

## Common mistakes

- Using HTML plug-ins only for appearance instead of matching the content role.
- Forgetting `<object>` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `plugins.html`, copy the first example, then add one extra line that uses `<object>` correctly in your own content.

## Next step

Next step: continue with **HTML YouTube Videos** so the next concept builds on this one.
