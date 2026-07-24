---
title: "HTML Input Types"
description: "Learn how choosing text, email, number, date, checkbox, radio, file, and submit changes behavior with real HTML examples and practical checks."
seoTitle: "HTML Input Types Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Input Types with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages. Practice it today."
keywords: "HTML tutorial, HTML input types, input type email number date, form controls"
order: 43
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Input Types

In HTML Input Types, you learn how choosing text, email, number, date, checkbox, radio, file, and submit changes behavior. The focus is HTML input types, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when the browser should show the right keyboard, validation, and control UI. Read each example slowly, then change one value at a time to see what the browser does.

## What are HTML input types?

- It gives HTML input types a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `type="email"`, `type="number"` and `type="checkbox"`.
- It improves real pages when the browser should show the right keyboard, validation, and control UI, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Common input controls

```html
<input type="text" name="fullName">
<input type="email" name="email">
<input type="number" name="quantity" min="1" max="10">
<input type="date" name="startDate">
```

### Example 2: Checkout form

```html
<form action="/checkout" method="post">
  <label for="email">Email</label>
  <input id="email" name="email" type="email" autocomplete="email" required>
  <label for="quantity">Quantity</label>
  <input id="quantity" name="quantity" type="number" min="1" max="10" value="1">
  <button type="submit">Continue</button>
</form>
```

### Example 3: Checkbox, radio, and file input

```html
<fieldset>
  <legend>Preferences</legend>
  <label><input type="checkbox" name="newsletter" checked> Email newsletter</label>
  <label><input type="radio" name="plan" value="basic"> Basic</label>
  <label><input type="radio" name="plan" value="pro"> Pro</label>
  <label>Avatar <input type="file" name="avatar" accept="image/*"></label>
</fieldset>
```

## Example explained

- The first example shows the core pattern for HTML input types without unrelated layout code.
- Pay attention to `type="email"`: validates email-like values and shows email keyboards.
- The second and third examples show how the same idea fits into a larger page with labels, validation, names, and suitable controls.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `type="email"` | validates email-like values and shows email keyboards | Use it while practicing HTML input types. |
| `type="number"` | provides numeric input controls and min/max support | Use it while practicing HTML input types. |
| `type="checkbox"` | captures independent yes/no choices | Use it while practicing HTML input types. |

## Browser, accessibility, and SEO notes

- Test HTML input types in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- Test forms with only the keyboard; labels, focus order, and validation messages should be obvious.

## Common mistakes

- Using HTML input types only for appearance instead of matching the content role.
- Forgetting `type="email"` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `input-types.html`, copy the first example, then add one extra line that uses `type="email"` correctly in your own content.

## Next step

Next step: continue with **HTML Input Attributes** so the next concept builds on this one.
