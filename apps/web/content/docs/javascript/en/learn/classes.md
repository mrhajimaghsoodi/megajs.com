---
title: "JavaScript Classes"
description: "This page explains using class syntax over prototypes for constructors, methods, fields, and inheritance with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "JavaScript Classes Tutorial — W3Schools-style | MEGA JS Docs"
seoDescription: "Learn JavaScript Classes (classes) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance."
keywords: "JavaScript, JavaScript Classes, JavaScript Classes, Classes tutorial, classes"
order: 63
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# JavaScript Classes

JavaScript Classes focuses on using class syntax over prototypes for constructors, methods, fields, and inheritance. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly `<script>` block.

When you practice JavaScript Classes, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.

## Core idea

- `class`: syntax for constructor and prototype methods.
- `prototype`: object used for property lookup inheritance.
- `extends`: creates a subclass relationship.
- For this topic, alignment between syntax, values, runtime, and visible Console behavior is the main sign that your JavaScript is doing its job.

## HTML and JavaScript examples

The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.

### Example 1: Focused JavaScript pattern

```html
<article>
  <h2 id="classes-title">JavaScript Classes</h2>
  <output id="classes-out"></output>
</article>
<script>
  class Lesson {
    constructor(title) {
      this.title = title;
    }
    label() {
      return `Lesson: ${this.title}`;
    }
  }
  const lesson = new Lesson(document.querySelector('#classes-title').textContent);
  document.querySelector('#classes-out').value = lesson.label();
</script>
```

### Example 2: Syntax options in context

```html
<table>
  <caption>JavaScript Classes quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>class</code></td><td>syntax for constructor and prototype methods</td></tr>
    <tr><td><code>prototype</code></td><td>object used for property lookup inheritance</td></tr>
    <tr><td><code>extends</code></td><td>creates a subclass relationship</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('classes terms:', rows.length);
</script>
```

### Example 3: Complete practice page

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Classes practice</title>
  </head>
  <body>
    <article>
      <h2 id="classes-title">JavaScript Classes</h2>
      <output id="classes-out"></output>
    </article>
    <script>
      class Lesson {
        constructor(title) {
          this.title = title;
        }
        label() {
          return `Lesson: ${this.title}`;
        }
      }
      const lesson = new Lesson(document.querySelector('#classes-title').textContent);
      document.querySelector('#classes-out').value = lesson.label();
    </script>
  </body>
</html>
```

## Syntax and usage table

| Syntax | Purpose | Authoring note |
| --- | --- | --- |
| `class` | syntax for constructor and prototype methods | In JavaScript Classes, test it against the real runtime, DOM behavior, and error handling path. |
| `prototype` | object used for property lookup inheritance | In JavaScript Classes, test it against the real runtime, DOM behavior, and error handling path. |
| `extends` | creates a subclass relationship | In JavaScript Classes, test it against the real runtime, DOM behavior, and error handling path. |

## Common mistakes

- Copying JavaScript Classes without checking values in DevTools Console or reading runtime errors.
- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.
- Forgetting to test `class` with keyboard use, empty state, errors, and target browsers.

## Practice step

Create a file named `classes.html`, run the first example, then change one part related to `class`. Inspect values, errors, and DOM changes in DevTools Console.

## Next step

Next, continue with **JavaScript Modules** so the JavaScript learning path builds on this concept.
