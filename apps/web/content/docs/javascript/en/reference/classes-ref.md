---
title: "Classes Reference"
description: "This page explains class syntax, constructors, fields, methods, private names, static members, and inheritance with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Classes Reference — MDN-style | MEGA JS Docs"
seoDescription: "Classes Reference (classes ref): MDN-style JavaScript reference with syntax tables, HTML examples, runtime behavior, and DOM or Web API notes with practical."
keywords: "JavaScript, Classes Reference, JavaScript Classes Reference, Classes Reference tutorial, classes ref"
order: 6
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# Classes Reference

Classes Reference is an MDN-style JavaScript reference page. It concentrates on class syntax, constructors, fields, methods, private names, static members, and inheritance and favors precise definitions, usage tables, runtime behavior, and DOM or Web API boundaries over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near the JavaScript Guide, JavaScript Reference, built-in object pages, and Web API pages. When using Classes Reference, separate language semantics from host capabilities such as the DOM, fetch, and storage.

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
  <h2>Classes Reference</h2>
  <dl>
    <dt><code>class</code></dt>
    <dd>syntax for constructor and prototype methods</dd>
    <dt><code>prototype</code></dt>
    <dd>object used for property lookup inheritance</dd>
    <dt><code>extends</code></dt>
    <dd>creates a subclass relationship</dd>
  </dl>
  <output id="classes-ref-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#classes-ref-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### Example 2

```html
<article>
  <h2 id="classes-ref-title">Classes Reference</h2>
  <output id="classes-ref-out"></output>
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
  const lesson = new Lesson(document.querySelector('#classes-ref-title').textContent);
  document.querySelector('#classes-ref-out').value = lesson.label();
</script>
```

## Precise authoring notes

- For Classes Reference, keep JavaScript core behavior distinct from host Web APIs.
- If behavior depends on browser support, locale, timezone, or permission state, cover that in UI and tests.
- For critical decisions, compare the relevant MDN page, MDN Reference entry, ECMA-262 text when needed, and a real runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Classes Reference, the JavaScript Reference, browser compatibility, and Web API boundaries before implementation.

## Next step

Continue with **Promises and Async Reference**.
