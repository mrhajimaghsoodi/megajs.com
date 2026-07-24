---
title: "Prototypes and Inheritance Reference"
description: "This page explains prototype chains, property lookup, constructors, class sugar, and inheritance patterns with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Prototypes and Inheritance Reference — MDN-style | MEGA JS Docs"
seoDescription: "Prototypes and Inheritance Reference (prototypes inheritance): MDN-style JavaScript reference with syntax tables, HTML examples, runtime behavior, and DOM."
keywords: "JavaScript, Prototypes and Inheritance Reference, JavaScript Prototypes and Inheritance Reference, Prototypes and Inheritance Reference tutorial, prototypes inheritance"
order: 9
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# Prototypes and Inheritance Reference

Prototypes and Inheritance Reference is an MDN-style JavaScript reference page. It concentrates on prototype chains, property lookup, constructors, class sugar, and inheritance patterns and favors precise definitions, usage tables, runtime behavior, and DOM or Web API boundaries over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near the JavaScript Guide, JavaScript Reference, built-in object pages, and Web API pages. When using Prototypes and Inheritance Reference, separate language semantics from host capabilities such as the DOM, fetch, and storage.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `class` | syntax for constructor and prototype methods | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `prototype` | object used for property lookup inheritance | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `extends` | creates a subclass relationship | Check it in target browsers, DevTools Console, tests, and the real error path. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>Prototypes and Inheritance Reference</h2>
  <dl>
    <dt><code>class</code></dt>
    <dd>syntax for constructor and prototype methods</dd>
    <dt><code>prototype</code></dt>
    <dd>object used for property lookup inheritance</dd>
    <dt><code>extends</code></dt>
    <dd>creates a subclass relationship</dd>
  </dl>
  <output id="prototypes-inheritance-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#prototypes-inheritance-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### Example 2

```html
<article>
  <h2 id="prototypes-inheritance-title">Prototypes and Inheritance Reference</h2>
  <output id="prototypes-inheritance-out"></output>
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
  const lesson = new Lesson(document.querySelector('#prototypes-inheritance-title').textContent);
  document.querySelector('#prototypes-inheritance-out').value = lesson.label();
</script>
```

## Precise authoring notes

- For Prototypes and Inheritance Reference, keep JavaScript core behavior distinct from host Web APIs.
- If behavior depends on browser support, locale, timezone, or permission state, cover that in UI and tests.
- For critical decisions, compare the relevant MDN page, MDN Reference entry, ECMA-262 text when needed, and a real runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Prototypes and Inheritance Reference, the JavaScript Reference, browser compatibility, and Web API boundaries before implementation.

## Next step

Continue with **Built-in Objects Reference**.
