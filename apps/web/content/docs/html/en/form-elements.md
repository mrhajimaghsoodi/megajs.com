---
title: "HTML Form Elements"
description: "Learn how labels, inputs, selects, textareas, buttons, and fieldsets work together with real HTML examples and practical checks."
seoTitle: "HTML Form Elements Tutorial | MEGA JS Docs"
seoDescription: "Master HTML Form Elements with practical examples, focused syntax notes, browser checks, and a short exercise for real accessible web pages. Practice it today."
keywords: "HTML tutorial, HTML form elements, input select textarea, fieldset legend"
order: 42
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Form Elements

In HTML Form Elements, you learn how labels, inputs, selects, textareas, buttons, and fieldsets work together. The focus is HTML form elements, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when a form needs controls that match the question being asked. Read each example slowly, then change one value at a time to see what the browser does.

## What are HTML form elements?

- It gives HTML form elements a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `<input>`, `<select>` and `<fieldset> / <legend>`.
- It improves real pages when a form needs controls that match the question being asked, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<fieldset>
  <legend>Contact preference</legend>
  <label><input type="radio" name="contact" value="email"> Email</label>
  <label><input type="radio" name="contact" value="phone"> Phone</label>
</fieldset>
<textarea name="message" rows="4"></textarea>
```

### Example 2: Options in context

```html
<section class="form-elements-notes" aria-labelledby="form-elements-title">
  <h2 id="form-elements-title">HTML Form Elements options</h2>
  <table>
    <caption>Key syntax for HTML form elements</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>&lt;input&gt;</code></td>
      <td>handles many single-value controls</td>
    </tr>
    <tr>
      <td><code>&lt;select&gt;</code></td>
      <td>offers a controlled list of choices</td>
    </tr>
    <tr>
      <td><code>&lt;fieldset&gt; / &lt;legend&gt;</code></td>
      <td>groups related controls accessibly</td>
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
    <title>HTML Form Elements practice</title>
  </head>
  <body>
    <fieldset>
      <legend>Contact preference</legend>
      <label><input type="radio" name="contact" value="email"> Email</label>
      <label><input type="radio" name="contact" value="phone"> Phone</label>
    </fieldset>
    <textarea name="message" rows="4"></textarea>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML form elements without unrelated layout code.
- Pay attention to `<input>`: handles many single-value controls.
- The second and third examples show how the same idea fits into a larger page with labels, validation, names, and suitable controls.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `<input>` | handles many single-value controls | Use it while practicing HTML form elements. |
| `<select>` | offers a controlled list of choices | Use it while practicing HTML form elements. |
| `<fieldset> / <legend>` | groups related controls accessibly | Use it while practicing HTML form elements. |

## Browser, accessibility, and SEO notes

- Test HTML form elements in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- Test forms with only the keyboard; labels, focus order, and validation messages should be obvious.

## Common mistakes

- Using HTML form elements only for appearance instead of matching the content role.
- Forgetting `<input>` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `form-elements.html`, copy the first example, then add one extra line that uses `<input>` correctly in your own content.

## Next step

Next step: continue with **HTML Input Types** so the next concept builds on this one.
