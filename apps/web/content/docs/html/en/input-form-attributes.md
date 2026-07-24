---
title: "HTML Input Form Attributes"
description: "Learn how controls can target or override form behavior individually with real HTML examples and practical checks."
seoTitle: "HTML Input Form Attributes Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Input Form Attributes with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages."
keywords: "HTML tutorial, HTML input form attributes, formaction formmethod, form attribute input"
order: 45
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Input Form Attributes

In HTML Input Form Attributes, you learn how controls can target or override form behavior individually. The focus is HTML input form attributes, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when one button or field must submit differently from the parent form. Read each example slowly, then change one value at a time to see what the browser does.

## What are HTML input form attributes?

- It gives HTML input form attributes a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `form`, `formaction` and `formmethod`.
- It improves real pages when one button or field must submit differently from the parent form, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<form id="profile-form" action="/profile" method="post"></form>
<input form="profile-form" name="displayName">
<button form="profile-form" formaction="/profile/preview">Preview</button>
```

### Example 2: Options in context

```html
<section class="input-form-attributes-notes" aria-labelledby="input-form-attributes-title">
  <h2 id="input-form-attributes-title">HTML Input Form Attributes options</h2>
  <table>
    <caption>Key syntax for HTML input form attributes</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>form</code></td>
      <td>associates a control with a form by id</td>
    </tr>
    <tr>
      <td><code>formaction</code></td>
      <td>overrides the form action for one submit button</td>
    </tr>
    <tr>
      <td><code>formmethod</code></td>
      <td>overrides GET or POST for one submit button</td>
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
    <title>HTML Input Form Attributes practice</title>
  </head>
  <body>
    <form id="profile-form" action="/profile" method="post"></form>
    <input form="profile-form" name="displayName">
    <button form="profile-form" formaction="/profile/preview">Preview</button>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML input form attributes without unrelated layout code.
- Pay attention to `form`: associates a control with a form by id.
- The second and third examples show how the same idea fits into a larger page with labels, validation, names, and suitable controls.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `form` | associates a control with a form by id | Use it while practicing HTML input form attributes. |
| `formaction` | overrides the form action for one submit button | Use it while practicing HTML input form attributes. |
| `formmethod` | overrides GET or POST for one submit button | Use it while practicing HTML input form attributes. |

## Browser, accessibility, and SEO notes

- Test HTML input form attributes in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- Test forms with only the keyboard; labels, focus order, and validation messages should be obvious.

## Common mistakes

- Using HTML input form attributes only for appearance instead of matching the content role.
- Forgetting `form` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `input-form-attributes.html`, copy the first example, then add one extra line that uses `form` correctly in your own content.

## Next step

Next step: continue with **HTML Graphics** so the next concept builds on this one.
