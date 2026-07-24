---
title: "HTML Favicon"
description: "Learn how browser tab icons are linked for brand recognition with real HTML examples and practical checks."
seoTitle: "HTML Favicon Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Favicon with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML favicon, rel icon, browser tab icon"
order: 17
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Favicon

In HTML Favicon, you learn how browser tab icons are linked for brand recognition. The focus is HTML favicon, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when you want bookmarks, tabs, and mobile shortcuts to feel polished. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML favicon?

- It gives HTML favicon a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `rel="icon"`, `sizes` and `type`.
- It improves real pages when you want bookmarks, tabs, and mobile shortcuts to feel polished, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<head>
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" href="/icon.svg" type="image/svg+xml">
</head>
```

### Example 2: Options in context

```html
<section class="favicon-notes" aria-labelledby="favicon-title">
  <h2 id="favicon-title">HTML Favicon options</h2>
  <table>
    <caption>Key syntax for HTML favicon</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>rel=&quot;icon&quot;</code></td>
      <td>registers an icon resource</td>
    </tr>
    <tr>
      <td><code>sizes</code></td>
      <td>declares bitmap icon dimensions</td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>tells the browser the file MIME type</td>
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
    <title>HTML Favicon practice</title>
  </head>
  <body>
    <head>
      <link rel="icon" href="/favicon.ico" sizes="any">
      <link rel="icon" href="/icon.svg" type="image/svg+xml">
    </head>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML favicon without unrelated layout code.
- Pay attention to `rel="icon"`: registers an icon resource.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `rel="icon"` | registers an icon resource | Use it while practicing HTML favicon. |
| `sizes` | declares bitmap icon dimensions | Use it while practicing HTML favicon. |
| `type` | tells the browser the file MIME type | Use it while practicing HTML favicon. |

## Browser, accessibility, and SEO notes

- Test HTML favicon in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML favicon only for appearance instead of matching the content role.
- Forgetting `rel="icon"` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `favicon.html`, copy the first example, then add one extra line that uses `rel="icon"` correctly in your own content.

## Next step

Next step: continue with **HTML Page Title** so the next concept builds on this one.
