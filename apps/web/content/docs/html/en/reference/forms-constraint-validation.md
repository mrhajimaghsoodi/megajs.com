---
title: "HTML Constraint Validation"
description: "This page explains native form validity states, constraints, messages, and submission behavior with examples, tables, and practical HTML notes."
seoTitle: "HTML HTML Constraint Validation Reference — MDN-style | MEGA JS Docs"
seoDescription: "HTML HTML Constraint Validation Reference in an MDN-style tone with usage tables, HTML examples, browser constraints, and authoring notes for precise projects."
keywords: "HTML, HTML Constraint Validation, HTML constraint validation, form validity, required pattern"
order: 9
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Constraint Validation

HTML Constraint Validation is an author-focused MDN-style reference page. It concentrates on native form validity states, constraints, messages, and submission behavior and favors precise definitions, usage tables, browser behavior, and implementation trade-offs over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near element references, attribute references, form/media guides, and DOM APIs. Before using HTML Constraint Validation, check the content model, browser behavior, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `required` | value must be present | Validate it with accessibility checks and real browser behavior. |
| `pattern` | value must match a regular expression | Validate it with accessibility checks and real browser behavior. |
| `validity` | DOM object that reports validation state | Validate it with accessibility checks and real browser behavior. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>HTML Constraint Validation</h2>
  <dl>
    <dt><code>required</code></dt>
    <dd>value must be present</dd>
    <dt><code>pattern</code></dt>
    <dd>value must match a regular expression</dd>
    <dt><code>validity</code></dt>
    <dd>DOM object that reports validation state</dd>
  </dl>
</article>
```

### Example 2

```html
<table>
  <caption>HTML Constraint Validation quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>required</code></td><td>value must be present</td></tr>
    <tr><td><code>pattern</code></td><td>value must match a regular expression</td></tr>
    <tr><td><code>validity</code></td><td>DOM object that reports validation state</td></tr>
  </tbody>
</table>
```

## Authoring notes

- For HTML Constraint Validation, names and values should match the real semantics of the content.
- If an element or attribute is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the HTML specification and an actual browser test.

## Conceptual MDN links

This page is conceptually close to MDN topics for HTML Constraint Validation, DOM interfaces, accessibility mapping, and browser compatibility data.

## Next step

Next reference page: **HTML Media Guide**.
