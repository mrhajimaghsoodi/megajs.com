---
title: "HTML File Paths"
description: "Learn how relative, root-relative, and absolute URLs locate resources with real HTML examples and practical checks."
seoTitle: "HTML File Paths Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML File Paths with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML file paths, relative path, absolute URL"
order: 26
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML File Paths

In HTML File Paths, you learn how relative, root-relative, and absolute URLs locate resources. The focus is HTML file paths, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when links, images, and stylesheets break after files move folders. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML file paths?

- It gives HTML file paths a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `./file.png`, `../file.png` and `/assets/app.css`.
- It improves real pages when links, images, and stylesheets break after files move folders, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<img src="./images/logo.svg" alt="Logo">
<link rel="stylesheet" href="../styles/site.css">
<a href="/docs/html/introduction">Absolute path from the site root</a>
```

### Example 2: Options in context

```html
<section class="file-paths-notes" aria-labelledby="file-paths-title">
  <h2 id="file-paths-title">HTML File Paths options</h2>
  <table>
    <caption>Key syntax for HTML file paths</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>./file.png</code></td>
      <td>starts from the current folder</td>
    </tr>
    <tr>
      <td><code>../file.png</code></td>
      <td>moves up one folder before locating a file</td>
    </tr>
    <tr>
      <td><code>/assets/app.css</code></td>
      <td>starts from the site root</td>
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
    <title>HTML File Paths practice</title>
  </head>
  <body>
    <img src="./images/logo.svg" alt="Logo">
    <link rel="stylesheet" href="../styles/site.css">
    <a href="/docs/html/introduction">Absolute path from the site root</a>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML file paths without unrelated layout code.
- Pay attention to `./file.png`: starts from the current folder.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `./file.png` | starts from the current folder | Use it while practicing HTML file paths. |
| `../file.png` | moves up one folder before locating a file | Use it while practicing HTML file paths. |
| `/assets/app.css` | starts from the site root | Use it while practicing HTML file paths. |

## Browser, accessibility, and SEO notes

- Test HTML file paths in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML file paths only for appearance instead of matching the content role.
- Forgetting `./file.png` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `file-paths.html`, copy the first example, then add one extra line that uses `./file.png` correctly in your own content.

## Next step

Next step: continue with **HTML Head** so the next concept builds on this one.
