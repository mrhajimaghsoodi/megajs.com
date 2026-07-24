---
title: "HTML Attributes"
description: "Learn how name-value pairs add URLs, labels, state, and configuration to elements with real HTML examples and practical checks."
seoTitle: "HTML Attributes Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Attributes with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML attributes, href alt class id, HTML attribute syntax"
order: 6
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Attributes

In HTML Attributes, you learn how name-value pairs add URLs, labels, state, and configuration to elements. The focus is HTML attributes, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when an element needs more information than its tag name can express. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML attributes?

- It gives HTML attributes a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `href`, `alt` and `class / id`.
- It improves real pages when an element needs more information than its tag name can express, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<a href="https://example.com" target="_blank" rel="noopener">
  Visit example.com
</a>
<img src="logo.svg" alt="Company logo" width="160" height="48">
```

### Example 2: Options in context

```html
<section class="attributes-notes" aria-labelledby="attributes-title">
  <h2 id="attributes-title">HTML Attributes options</h2>
  <table>
    <caption>Key syntax for HTML attributes</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>href</code></td>
      <td>sets the destination for a link</td>
    </tr>
    <tr>
      <td><code>alt</code></td>
      <td>describes an image for accessibility and fallback</td>
    </tr>
    <tr>
      <td><code>class / id</code></td>
      <td>creates styling and scripting hooks</td>
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
    <title>HTML Attributes practice</title>
  </head>
  <body>
    <a href="https://example.com" target="_blank" rel="noopener">
      Visit example.com
    </a>
    <img src="logo.svg" alt="Company logo" width="160" height="48">
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML attributes without unrelated layout code.
- Pay attention to `href`: sets the destination for a link.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `href` | sets the destination for a link | Use it while practicing HTML attributes. |
| `alt` | describes an image for accessibility and fallback | Use it while practicing HTML attributes. |
| `class / id` | creates styling and scripting hooks | Use it while practicing HTML attributes. |

## Browser, accessibility, and SEO notes

- Test HTML attributes in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML attributes only for appearance instead of matching the content role.
- Forgetting `href` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `attributes.html`, copy the first example, then add one extra line that uses `href` correctly in your own content.

## Next step

Next step: continue with **HTML Headings** so the next concept builds on this one.
