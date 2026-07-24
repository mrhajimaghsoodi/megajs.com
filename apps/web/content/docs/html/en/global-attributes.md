---
title: "HTML Global Attributes"
description: "Learn how id, class, style, title, hidden, lang, and data-* work almost everywhere with real HTML examples and practical checks."
seoTitle: "HTML Global Attributes Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Global Attributes with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages."
keywords: "HTML tutorial, HTML global attributes, data attribute, id class title hidden"
order: 64
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Global Attributes

In HTML Global Attributes, you learn how id, class, style, title, hidden, lang, and data-* work almost everywhere. The focus is HTML global attributes, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when you need shared hooks, language hints, or custom data on any element. Read each example slowly, then change one value at a time to see what the browser does.

## What are HTML global attributes?

- It gives HTML global attributes a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `id / class`, `lang / dir` and `data-*`.
- It improves real pages when you need shared hooks, language hints, or custom data on any element, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<section id="profile" class="card" hidden>
  <h2 title="Visible profile name">Profile</h2>
  <p data-user-id="42">Custom data belongs in data-* attributes.</p>
</section>
```

### Example 2: Options in context

```html
<section class="global-attributes-notes" aria-labelledby="global-attributes-title">
  <h2 id="global-attributes-title">HTML Global Attributes options</h2>
  <table>
    <caption>Key syntax for HTML global attributes</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>id / class</code></td>
      <td>provide unique and reusable hooks</td>
    </tr>
    <tr>
      <td><code>lang / dir</code></td>
      <td>declare language and text direction</td>
    </tr>
    <tr>
      <td><code>data-*</code></td>
      <td>stores custom data for scripts</td>
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
    <title>HTML Global Attributes practice</title>
  </head>
  <body>
    <section id="profile" class="card" hidden>
      <h2 title="Visible profile name">Profile</h2>
      <p data-user-id="42">Custom data belongs in data-* attributes.</p>
    </section>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML global attributes without unrelated layout code.
- Pay attention to `id / class`: provide unique and reusable hooks.
- The second and third examples show how the same idea fits into a larger page with exact syntax, purpose, and limitations for each item.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `id / class` | provide unique and reusable hooks | Use it while practicing HTML global attributes. |
| `lang / dir` | declare language and text direction | Use it while practicing HTML global attributes. |
| `data-*` | stores custom data for scripts | Use it while practicing HTML global attributes. |

## Browser, accessibility, and SEO notes

- Test HTML global attributes in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- For SEO, write headings, link text, titles, and semantic structure that still make sense without CSS.

## Common mistakes

- Using HTML global attributes only for appearance instead of matching the content role.
- Forgetting `id / class` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `global-attributes.html`, copy the first example, then add one extra line that uses `id / class` correctly in your own content.

## Next step

Next step: continue with **HTML Event Reference** so the next concept builds on this one.
