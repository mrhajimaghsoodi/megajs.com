---
title: "HTML Head"
description: "Learn how metadata, title, viewport, styles, and resource hints live outside visible content with real HTML examples and practical checks."
seoTitle: "HTML Head Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Head with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML head, meta title link, HTML metadata"
order: 27
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Head

In HTML Head, you learn how metadata, title, viewport, styles, and resource hints live outside visible content. The focus is HTML head element, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when you configure the document before the browser paints body content. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML head element?

- It gives HTML head element a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `<meta charset>`, `<title>` and `<link>`.
- It improves real pages when you configure the document before the browser paints body content, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Head Example</title>
  <link rel="stylesheet" href="/styles.css">
</head>
```

### Example 2: Options in context

```html
<section class="head-notes" aria-labelledby="head-title">
  <h2 id="head-title">HTML Head options</h2>
  <table>
    <caption>Key syntax for HTML head element</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;meta charset&gt;</code></td>
      <td>declares character encoding early</td>
    </tr>
    <tr>
      <td><code>&lt;title&gt;</code></td>
      <td>sets the document title</td>
    </tr>
    <tr>
      <td><code>&lt;link&gt;</code></td>
      <td>connects styles, icons, and preloads</td>
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
    <title>HTML Head practice</title>
  </head>
  <body>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>HTML Head Example</title>
      <link rel="stylesheet" href="/styles.css">
    </head>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML head element without unrelated layout code.
- Pay attention to `<meta charset>`: declares character encoding early.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `<meta charset>` | declares character encoding early | Use it while practicing HTML head element. |
| `<title>` | sets the document title | Use it while practicing HTML head element. |
| `<link>` | connects styles, icons, and preloads | Use it while practicing HTML head element. |

## Browser, accessibility, and SEO notes

- Test HTML head element in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML head element only for appearance instead of matching the content role.
- Forgetting `<meta charset>` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `head.html`, copy the first example, then add one extra line that uses `<meta charset>` correctly in your own content.

## Next step

Next step: continue with **HTML Layout** so the next concept builds on this one.
