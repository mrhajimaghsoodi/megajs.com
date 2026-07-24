---
title: "HTML Entities"
description: "Learn how reserved characters and special spaces are written safely with real HTML examples and practical checks."
seoTitle: "HTML Entities Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Entities with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML entities, amp lt gt nbsp, reserved characters HTML"
order: 33
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Entities

In HTML Entities, you learn how reserved characters and special spaces are written safely. The focus is HTML entities, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when text must show symbols that HTML would otherwise parse as markup. Read each example slowly, then change one value at a time to see what the browser does.

## What are HTML entities?

- It gives HTML entities a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `&amp;`, `&lt; / &gt;` and `&nbsp;`.
- It improves real pages when text must show symbols that HTML would otherwise parse as markup, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<p>Use &amp; for an ampersand and &lt; for a less-than sign.</p>
<p>Keep these words together with&nbsp;a non-breaking space.</p>
```

### Example 2: Options in context

```html
<section class="entities-notes" aria-labelledby="entities-title">
  <h2 id="entities-title">HTML Entities options</h2>
  <table>
    <caption>Key syntax for HTML entities</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&amp;amp;</code></td>
      <td>prints an ampersand</td>
    </tr>
    <tr>
      <td><code>&amp;lt; / &amp;gt;</code></td>
      <td>prints less-than and greater-than signs</td>
    </tr>
    <tr>
      <td><code>&amp;nbsp;</code></td>
      <td>keeps words from breaking apart</td>
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
    <title>HTML Entities practice</title>
  </head>
  <body>
    <p>Use &amp; for an ampersand and &lt; for a less-than sign.</p>
    <p>Keep these words together with&nbsp;a non-breaking space.</p>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML entities without unrelated layout code.
- Pay attention to `&amp;`: prints an ampersand.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `&amp;` | prints an ampersand | Use it while practicing HTML entities. |
| `&lt; / &gt;` | prints less-than and greater-than signs | Use it while practicing HTML entities. |
| `&nbsp;` | keeps words from breaking apart | Use it while practicing HTML entities. |

## Browser, accessibility, and SEO notes

- Test HTML entities in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML entities only for appearance instead of matching the content role.
- Forgetting `&amp;` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `entities.html`, copy the first example, then add one extra line that uses `&amp;` correctly in your own content.

## Next step

Next step: continue with **HTML Symbols** so the next concept builds on this one.
