---
title: "HTML Attribute Reference"
description: "Learn how attributes configure elements and which elements accept them with real HTML examples and practical checks."
seoTitle: "HTML Attribute Reference Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Attribute Reference with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages."
keywords: "HTML tutorial, HTML attributes reference, global attributes, boolean attributes"
order: 63
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Attribute Reference

In HTML Attribute Reference, you learn how attributes configure elements and which elements accept them. The focus is HTML attribute reference, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when you need the exact spelling, value type, or valid element. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML attribute reference?

- It gives HTML attribute reference a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `global attributes`, `element-specific attributes` and `boolean attributes`.
- It improves real pages when you need the exact spelling, value type, or valid element, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<img src="avatar.png" alt="Profile avatar" width="96" height="96">
<a href="/profile" rel="author">Author profile</a>
<input name="email" type="email" required>
```

### Example 2: Options in context

```html
<section class="attributes-ref-notes" aria-labelledby="attributes-ref-title">
  <h2 id="attributes-ref-title">HTML Attribute Reference options</h2>
  <table>
    <caption>Key syntax for HTML attribute reference</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>global attributes</code></td>
      <td>work on most HTML elements</td>
    </tr>
    <tr>
      <td><code>element-specific attributes</code></td>
      <td>belong only to certain tags</td>
    </tr>
    <tr>
      <td><code>boolean attributes</code></td>
      <td>are true when present</td>
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
    <title>HTML Attribute Reference practice</title>
  </head>
  <body>
    <img src="avatar.png" alt="Profile avatar" width="96" height="96">
    <a href="/profile" rel="author">Author profile</a>
    <input name="email" type="email" required>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML attribute reference without unrelated layout code.
- Pay attention to `global attributes`: work on most HTML elements.
- The second and third examples show how the same idea fits into a larger page with exact syntax, purpose, and limitations for each item.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `global attributes` | work on most HTML elements | Use it while practicing HTML attribute reference. |
| `element-specific attributes` | belong only to certain tags | Use it while practicing HTML attribute reference. |
| `boolean attributes` | are true when present | Use it while practicing HTML attribute reference. |

## Browser, accessibility, and SEO notes

- Test HTML attribute reference in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML attribute reference only for appearance instead of matching the content role.
- Forgetting `global attributes` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `attributes-ref.html`, copy the first example, then add one extra line that uses `global attributes` correctly in your own content.

## Next step

Next step: continue with **HTML Global Attributes** so the next concept builds on this one.
