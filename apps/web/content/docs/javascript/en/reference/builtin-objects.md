---
title: "Built-in Objects Reference"
description: "This page explains global objects and constructors such as Object, Function, Date, JSON, Promise, and Reflect with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Built-in Objects Reference — MDN-style | MEGA JS Docs"
seoDescription: "Built-in Objects Reference (builtin objects): MDN-style JavaScript reference with syntax tables, HTML examples, runtime behavior, and DOM or Web API notes."
keywords: "JavaScript, Built-in Objects Reference, JavaScript Built-in Objects Reference, Built-in Objects Reference tutorial, builtin objects"
order: 10
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# Built-in Objects Reference

Built-in Objects Reference is an MDN-style JavaScript reference page. It concentrates on global objects and constructors such as Object, Function, Date, JSON, Promise, and Reflect and favors precise definitions, usage tables, runtime behavior, and DOM or Web API boundaries over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near the JavaScript Guide, JavaScript Reference, built-in object pages, and Web API pages. When using Built-in Objects Reference, separate language semantics from host capabilities such as the DOM, fetch, and storage.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `JavaScript` | language feature used in Built-in Objects Reference | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `runtime` | executes code and reports errors | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `DevTools Console` | checks values while learning | Check it in target browsers, DevTools Console, tests, and the real error path. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>Built-in Objects Reference</h2>
  <dl>
    <dt><code>JavaScript</code></dt>
    <dd>language feature used in Built-in Objects Reference</dd>
    <dt><code>runtime</code></dt>
    <dd>executes code and reports errors</dd>
    <dt><code>DevTools Console</code></dt>
    <dd>checks values while learning</dd>
  </dl>
  <output id="builtin-objects-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#builtin-objects-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### Example 2

```html
<article>
  <h2 id="builtin-objects-title">Built-in Objects Reference</h2>
  <output id="builtin-objects-out"></output>
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
  const lesson = new Lesson(document.querySelector('#builtin-objects-title').textContent);
  document.querySelector('#builtin-objects-out').value = lesson.label();
</script>
```

## Precise authoring notes

- For Built-in Objects Reference, keep JavaScript core behavior distinct from host Web APIs.
- If behavior depends on browser support, locale, timezone, or permission state, cover that in UI and tests.
- For critical decisions, compare the relevant MDN page, MDN Reference entry, ECMA-262 text when needed, and a real runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Built-in Objects Reference, the JavaScript Reference, browser compatibility, and Web API boundaries before implementation.

## Next step

Continue with **Array Reference**.
