---
title: "HTML Form Attributes"
description: "Learn how action, method, autocomplete, and target control submission behavior with real HTML examples and practical checks."
seoTitle: "HTML Form Attributes Tutorial | MEGA JS Docs"
seoDescription: "Learn HTML Form Attributes with step-by-step HTML examples, syntax tables, common mistakes, and practice tips for building accessible real pages."
keywords: "HTML tutorial, HTML form attributes, form action method, autocomplete form"
order: 41
sources:
  - name: W3Schools HTML
    url: https://www.w3schools.com/html/
  - name: MDN HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Form Attributes

In HTML Form Attributes, you learn how action, method, autocomplete, and target control submission behavior. The focus is HTML form attributes, so the examples use the exact tags, attributes, or browser APIs you will meet in real pages.

Use this lesson when the same fields must submit to the correct endpoint in the correct way. Read each example slowly, then change one value at a time to see what the browser does.

## What are HTML form attributes?

- It gives HTML form attributes a clear semantic purpose instead of relying on visual styling alone.
- The important syntax in this chapter includes `action`, `method` and `autocomplete`.
- It improves real pages when the same fields must submit to the correct endpoint in the correct way, especially after you test the result in a browser.
- Good markup here gives CSS and JavaScript predictable targets without hiding meaning from users.

## Syntax and examples

Start with the smallest useful pattern, then compare it with the more complete examples below.

### Example 1: Core pattern

```html
<form action="/signup" method="post" autocomplete="on" target="_self">
  <label for="name">Name</label>
  <input id="name" name="name" required>
  <button type="submit">Create account</button>
</form>
```

### Example 2: Options in context

```html
<section class="form-attributes-notes" aria-labelledby="form-attributes-title">
  <h2 id="form-attributes-title">HTML Form Attributes options</h2>
  <table>
    <caption>Key syntax for HTML form attributes</caption>
    <thead>
      <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
    </thead>
    <tbody>
    <tr>
      <td><code>action</code></td>
      <td>sets where form data goes</td>
    </tr>
    <tr>
      <td><code>method</code></td>
      <td>chooses GET or POST submission</td>
    </tr>
    <tr>
      <td><code>autocomplete</code></td>
      <td>allows useful browser autofill</td>
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
    <title>HTML Form Attributes practice</title>
  </head>
  <body>
    <form action="/signup" method="post" autocomplete="on" target="_self">
      <label for="name">Name</label>
      <input id="name" name="name" required>
      <button type="submit">Create account</button>
    </form>
  </body>
</html>
```

## Example explained

- The first example shows the core pattern for HTML form attributes without unrelated layout code.
- Pay attention to `action`: sets where form data goes.
- The second and third examples show how the same idea fits into a larger page with labels, validation, names, and suitable controls.
- If the browser output is surprising, inspect the element in DevTools and compare the DOM with the source markup.

## More examples and options

| Syntax or option | What it does | When to use it |
| --- | --- | --- |
| `action` | sets where form data goes | Use it while practicing HTML form attributes. |
| `method` | chooses GET or POST submission | Use it while practicing HTML form attributes. |
| `autocomplete` | allows useful browser autofill | Use it while practicing HTML form attributes. |

## Browser, accessibility, and SEO notes

- Test HTML form attributes in a small file; default browser styling is not the same thing as good markup.
- For accessibility, provide meaningful text, labels, alt text, captions, or titles when the feature needs them.
- Test forms with only the keyboard; labels, focus order, and validation messages should be obvious.

## Common mistakes

- Using HTML form attributes only for appearance instead of matching the content role.
- Forgetting `action` or writing values that do not match the real page purpose.
- Copying an example without changing text, paths, ids, names, or labels for your project.
- Skipping keyboard, small-screen, and DevTools checks after the page appears to work.

## Practice tip

Create a file named `form-attributes.html`, copy the first example, then add one extra line that uses `action` correctly in your own content.

## Next step

Next step: continue with **HTML Form Elements** so the next concept builds on this one.
