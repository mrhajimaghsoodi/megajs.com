---
title: "HTML References"
description: "Learn how reference pages help you look up exact elements, attributes, and events with real HTML examples and practical checks."
seoTitle: "HTML References Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML References with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML references, HTML tag reference, HTML attributes reference"
order: 61
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML References

In HTML References, you learn how reference pages help you look up exact elements, attributes, and events. The focus is HTML references, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when you know the concept and need exact syntax or browser details. Read each example slowly, then change one value at a time to see what the browser does.

## What are HTML references?

- It gives HTML references a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `tag reference`, `attribute reference` and `event reference`.
- It improves real pages when you know the concept and need exact syntax or browser details, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<p>Use references when you need exact element, attribute, or event details.</p>
<a href="/docs/html/tag-list">Open the tag list</a>
```

### Example 2: Options in context

```html
<section class="references-notes" aria-labelledby="references-title">
  <h2 id="references-title">HTML References options</h2>
  <table>
    <caption>Key syntax for HTML references</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>tag reference</code></td>
      <td>lists elements and their purpose</td>
    </tr>
    <tr>
      <td><code>attribute reference</code></td>
      <td>shows where attributes are valid</td>
    </tr>
    <tr>
      <td><code>event reference</code></td>
      <td>lists browser and user events</td>
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
    <title>HTML References practice</title>
  </head>
  <body>
    <p>Use references when you need exact element, attribute, or event details.</p>
    <a href="/docs/html/tag-list">Open the tag list</a>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML references without unrelated layout code.
- Pay attention to `tag reference`: lists elements and their purpose.
- The second and third examples show how the same idea fits into a larger page with exact syntax, purpose, and limitations for each item.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `tag reference` | lists elements and their purpose | Use it while practicing HTML references. |
| `attribute reference` | shows where attributes are valid | Use it while practicing HTML references. |
| `event reference` | lists browser and user events | Use it while practicing HTML references. |

## Browser, accessibility, and SEO notes

- Test HTML references in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML references only for appearance instead of matching the content role.
- Forgetting `tag reference` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `references.html`, copy the first example, then add one extra line that uses `tag reference` correctly in your own content.

## Next step

Next step: continue with **HTML Tag List** so the next concept builds on this one.
