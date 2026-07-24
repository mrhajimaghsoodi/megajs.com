---
title: "HTML Lists"
description: "Learn how ordered, unordered, and description lists express grouped items with real HTML examples and practical checks."
seoTitle: "HTML Lists Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Lists with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML lists, ul ol dl li, ordered list unordered list"
order: 20
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Lists

In HTML Lists, you learn how ordered, unordered, and description lists express grouped items. The focus is HTML lists, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when content is naturally a set, sequence, or glossary. Read each example slowly, then change one value at a time to see what the browser does.

## What are HTML lists?

- It gives HTML lists a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `<ul>`, `<ol>` and `<dl>`.
- It improves real pages when content is naturally a set, sequence, or glossary, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<ul>
  <li>Use unordered lists when order does not matter.</li>
</ul>
<ol>
  <li>Create index.html.</li>
  <li>Open it in a browser.</li>
</ol>
<dl>
  <dt>HTML</dt>
  <dd>The markup language of the web.</dd>
</dl>
```

### Example 2: Options in context

```html
<section class="lists-notes" aria-labelledby="lists-title">
  <h2 id="lists-title">HTML Lists options</h2>
  <table>
    <caption>Key syntax for HTML lists</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;ul&gt;</code></td>
      <td>groups items where order does not matter</td>
    </tr>
    <tr>
      <td><code>&lt;ol&gt;</code></td>
      <td>groups ordered steps or rankings</td>
    </tr>
    <tr>
      <td><code>&lt;dl&gt;</code></td>
      <td>pairs terms with descriptions</td>
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
    <title>HTML Lists practice</title>
  </head>
  <body>
    <ul>
      <li>Use unordered lists when order does not matter.</li>
    </ul>
    <ol>
      <li>Create index.html.</li>
      <li>Open it in a browser.</li>
    </ol>
    <dl>
      <dt>HTML</dt>
      <dd>The markup language of the web.</dd>
    </dl>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML lists without unrelated layout code.
- Pay attention to `<ul>`: groups items where order does not matter.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `<ul>` | groups items where order does not matter | Use it while practicing HTML lists. |
| `<ol>` | groups ordered steps or rankings | Use it while practicing HTML lists. |
| `<dl>` | pairs terms with descriptions | Use it while practicing HTML lists. |

## Browser, accessibility, and SEO notes

- Test HTML lists in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML lists only for appearance instead of matching the content role.
- Forgetting `<ul>` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `lists.html`, copy the first example, then add one extra line that uses `<ul>` correctly in your own content.

## Next step

Next step: continue with **HTML Block and Inline Elements** so the next concept builds on this one.
