---
title: "HTML Quirks Mode"
description: "This page explains DOCTYPE switching, standards mode, limited quirks, and legacy layout behavior with examples, tables, and practical HTML notes."
seoTitle: "HTML HTML Quirks Mode Reference — MDN-style | MEGA JS Docs"
seoDescription: "HTML HTML Quirks Mode Reference in an MDN-style tone with usage tables, HTML examples, browser constraints, and authoring notes for precise projects."
keywords: "HTML, HTML Quirks Mode, HTML quirks mode, doctype standards mode, compatMode"
order: 18
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Quirks Mode

HTML Quirks Mode is an author-focused MDN-style reference page. It concentrates on DOCTYPE switching, standards mode, limited quirks, and legacy layout behavior and favors precise definitions, usage tables, browser behavior, and implementation trade-offs over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near element references, attribute references, form/media guides, and DOM APIs. Before using HTML Quirks Mode, check the content model, browser behavior, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `<!doctype html>` | selects standards mode | Validate it with accessibility checks and real browser behavior. |
| `quirks mode` | emulates legacy browser behavior | Validate it with accessibility checks and real browser behavior. |
| `document.compatMode` | reports the current rendering mode | Validate it with accessibility checks and real browser behavior. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>HTML Quirks Mode</h2>
  <dl>
    <dt><code>&lt;!doctype html&gt;</code></dt>
    <dd>selects standards mode</dd>
    <dt><code>quirks mode</code></dt>
    <dd>emulates legacy browser behavior</dd>
    <dt><code>document.compatMode</code></dt>
    <dd>reports the current rendering mode</dd>
  </dl>
</article>
```

### Example 2

```html
<table>
  <caption>HTML Quirks Mode quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;!doctype html&gt;</code></td><td>selects standards mode</td></tr>
    <tr><td><code>quirks mode</code></td><td>emulates legacy browser behavior</td></tr>
    <tr><td><code>document.compatMode</code></td><td>reports the current rendering mode</td></tr>
  </tbody>
</table>
```

## Authoring notes

- For HTML Quirks Mode, names and values should match the real semantics of the content.
- If an element or attribute is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the HTML specification and an actual browser test.

## Conceptual MDN links

This page is conceptually close to MDN topics for HTML Quirks Mode, DOM interfaces, accessibility mapping, and browser compatibility data.

## Next step

Next reference page: **HTML Cheatsheet**.
