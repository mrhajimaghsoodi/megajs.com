---
title: "HTML Tag List"
description: "Learn how elements are grouped by purpose so you can choose semantic markup with real HTML examples and practical checks."
seoTitle: "HTML Tag List Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Tag List with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML tag list, HTML tags, semantic tags"
order: 62
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Tag List

In HTML Tag List, you learn how elements are grouped by purpose so you can choose semantic markup. The focus is HTML tag list, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when you cannot remember which tag best matches the content role. Read each example slowly, then change one value at a time to see what the browser does.

## What is HTML tag list?

- It gives HTML tag list a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `document tags`, `text tags` and `form/media tags`.
- It improves real pages when you cannot remember which tag best matches the content role, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<main>
  <article>Use for independent content.</article>
  <aside>Use for related side content.</aside>
  <footer>Use for footer information.</footer>
</main>
```

### Example 2: Options in context

```html
<section class="tag-list-notes" aria-labelledby="tag-list-title">
  <h2 id="tag-list-title">HTML Tag List options</h2>
  <table>
    <caption>Key syntax for HTML tag list</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>document tags</code></td>
      <td>html, head, body, main structure</td>
    </tr>
    <tr>
      <td><code>text tags</code></td>
      <td>headings, paragraphs, emphasis, code</td>
    </tr>
    <tr>
      <td><code>form/media tags</code></td>
      <td>controls and embedded content</td>
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
    <title>HTML Tag List practice</title>
  </head>
  <body>
    <main>
      <article>Use for independent content.</article>
      <aside>Use for related side content.</aside>
      <footer>Use for footer information.</footer>
    </main>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML tag list without unrelated layout code.
- Pay attention to `document tags`: html, head, body, main structure.
- The second and third examples show how the same idea fits into a larger page with exact syntax, purpose, and limitations for each item.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `document tags` | html, head, body, main structure | Use it while practicing HTML tag list. |
| `text tags` | headings, paragraphs, emphasis, code | Use it while practicing HTML tag list. |
| `form/media tags` | controls and embedded content | Use it while practicing HTML tag list. |

## Browser, accessibility, and SEO notes

- Test HTML tag list in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML tag list only for appearance instead of matching the content role.
- Forgetting `document tags` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `tag-list.html`, copy the first example, then add one extra line that uses `document tags` correctly in your own content.

## Next step

Next step: continue with **HTML Attribute Reference** so the next concept builds on this one.
