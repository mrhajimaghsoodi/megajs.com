---
title: "HTML Classes"
description: "Learn how reusable class names group elements for styling and behavior with real HTML examples and practical checks."
seoTitle: "HTML Classes Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Classes with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML classes, class attribute, CSS class selector"
order: 22
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Classes

In HTML Classes, you learn how reusable class names group elements for styling and behavior. The focus is HTML classes, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when many elements share the same visual or scripted pattern. Read each example slowly, then change one value at a time to see what the browser does.

## What are HTML classes?

- It gives HTML classes a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `class`, `multiple classes` and `CSS selector`.
- It improves real pages when many elements share the same visual or scripted pattern, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<article class="card featured">
  <h2 class="card-title">Reusable class names</h2>
  <p class="card-copy">Classes can be shared by many elements.</p>
</article>
```

### Example 2: Options in context

```html
<section class="classes-notes" aria-labelledby="classes-title">
  <h2 id="classes-title">HTML Classes options</h2>
  <table>
    <caption>Key syntax for HTML classes</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>class</code></td>
      <td>assigns one or more reusable names</td>
    </tr>
    <tr>
      <td><code>multiple classes</code></td>
      <td>combine small styling responsibilities</td>
    </tr>
    <tr>
      <td><code>CSS selector</code></td>
      <td>targets class names with a dot</td>
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
    <title>HTML Classes practice</title>
  </head>
  <body>
    <article class="card featured">
      <h2 class="card-title">Reusable class names</h2>
      <p class="card-copy">Classes can be shared by many elements.</p>
    </article>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML classes without unrelated layout code.
- Pay attention to `class`: assigns one or more reusable names.
- The second and third examples show how the same idea fits into a larger page with meaningful text, stable attributes, and readable structure.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `class` | assigns one or more reusable names | Use it while practicing HTML classes. |
| `multiple classes` | combine small styling responsibilities | Use it while practicing HTML classes. |
| `CSS selector` | targets class names with a dot | Use it while practicing HTML classes. |

## Browser, accessibility, and SEO notes

- Test HTML classes in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML classes only for appearance instead of matching the content role.
- Forgetting `class` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `classes.html`, copy the first example, then add one extra line that uses `class` correctly in your own content.

## Next step

Next step: continue with **HTML id Attribute** so the next concept builds on this one.
