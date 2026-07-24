---
title: "HTML Comments Reference"
description: "This page explains comment syntax, parser restrictions, and safe authoring notes with examples, tables, and practical HTML notes."
seoTitle: "HTML Comments Reference — MDN-style | MEGA JS Docs"
seoDescription: "HTML Comments Reference in an MDN-style tone with usage tables, HTML examples, browser constraints, and authoring notes for precise projects. Practice now."
keywords: "HTML, HTML Comments Reference, HTML comments reference, comment syntax, HTML parser"
order: 6
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Comments Reference

HTML Comments Reference is an author-focused MDN-style reference page. It concentrates on comment syntax, parser restrictions, and safe authoring notes and favors precise definitions, usage tables, browser behavior, and implementation trade-offs over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near element references, attribute references, form/media guides, and DOM APIs. Before using HTML Comments Reference, check the content model, browser behavior, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `<!--` | starts a comment token | Validate it with accessibility checks and real browser behavior. |
| `-->` | ends a comment token | Validate it with accessibility checks and real browser behavior. |
| `--` | must not appear inside comments | Validate it with accessibility checks and real browser behavior. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>HTML Comments Reference</h2>
  <dl>
    <dt><code>&lt;!--</code></dt>
    <dd>starts a comment token</dd>
    <dt><code>--&gt;</code></dt>
    <dd>ends a comment token</dd>
    <dt><code>--</code></dt>
    <dd>must not appear inside comments</dd>
  </dl>
</article>
```

### Example 2

```html
<table>
  <caption>HTML Comments Reference quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>&lt;!--</code></td><td>starts a comment token</td></tr>
    <tr><td><code>--&gt;</code></td><td>ends a comment token</td></tr>
    <tr><td><code>--</code></td><td>must not appear inside comments</td></tr>
  </tbody>
</table>
```

## Authoring notes

- For HTML Comments Reference, names and values should match the real semantics of the content.
- If an element or attribute is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the HTML specification and an actual browser test.

## Conceptual MDN links

This page is conceptually close to MDN topics for HTML Comments Reference, DOM interfaces, accessibility mapping, and browser compatibility data.

## Next step

Next reference page: **HTML Date and Time Formats**.
