---
title: "HTML Performance Tips"
description: "This page explains loading hints, image dimensions, lazy loading, script placement, and document weight with examples, tables, and practical HTML notes."
seoTitle: "HTML HTML Performance Tips Reference — MDN-style | MEGA JS Docs"
seoDescription: "HTML HTML Performance Tips Reference in an MDN-style tone with usage tables, HTML examples, browser constraints, and authoring notes for precise projects."
keywords: "HTML, HTML Performance Tips, HTML performance, lazy loading defer, web performance"
order: 16
track: reference
sources:
  - name: MDN Web Docs — HTML
    url: https://developer.mozilla.org/en-US/docs/Web/HTML
---
# HTML Performance Tips

HTML Performance Tips is an author-focused MDN-style reference page. It concentrates on loading hints, image dimensions, lazy loading, script placement, and document weight and favors precise definitions, usage tables, browser behavior, and implementation trade-offs over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near element references, attribute references, form/media guides, and DOM APIs. Before using HTML Performance Tips, check the content model, browser behavior, and accessibility expectations.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `loading="lazy"` | defers offscreen media | Validate it with accessibility checks and real browser behavior. |
| `defer` | executes scripts after parsing | Validate it with accessibility checks and real browser behavior. |
| `width / height` | prevents layout shifts for media | Validate it with accessibility checks and real browser behavior. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>HTML Performance Tips</h2>
  <dl>
    <dt><code>loading=&quot;lazy&quot;</code></dt>
    <dd>defers offscreen media</dd>
    <dt><code>defer</code></dt>
    <dd>executes scripts after parsing</dd>
    <dt><code>width / height</code></dt>
    <dd>prevents layout shifts for media</dd>
  </dl>
</article>
```

### Example 2

```html
<table>
  <caption>HTML Performance Tips quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>loading=&quot;lazy&quot;</code></td><td>defers offscreen media</td></tr>
    <tr><td><code>defer</code></td><td>executes scripts after parsing</td></tr>
    <tr><td><code>width / height</code></td><td>prevents layout shifts for media</td></tr>
  </tbody>
</table>
```

## Authoring notes

- For HTML Performance Tips, names and values should match the real semantics of the content.
- If an element or attribute is not uniform across browsers, use progressive enhancement and useful fallback.
- For sensitive decisions, compare the MDN page with the HTML specification and an actual browser test.

## Conceptual MDN links

This page is conceptually close to MDN topics for HTML Performance Tips, DOM interfaces, accessibility mapping, and browser compatibility data.

## Next step

Next reference page: **HTML Scripting Guide**.
