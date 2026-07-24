---
title: "Control Flow Reference"
description: "This page explains statements for decisions, loops, labels, exceptions, and control transfer with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Control Flow Reference — MDN-style | MEGA JS Docs"
seoDescription: "Control Flow Reference (control flow ref): MDN-style JavaScript reference with syntax tables, HTML examples, runtime behavior, and DOM or Web API notes."
keywords: "JavaScript, Control Flow Reference, JavaScript Control Flow Reference, Control Flow Reference tutorial, control flow ref"
order: 3
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# Control Flow Reference

Control Flow Reference is an MDN-style JavaScript reference page. It concentrates on statements for decisions, loops, labels, exceptions, and control transfer and favors precise definitions, usage tables, runtime behavior, and DOM or Web API boundaries over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near the JavaScript Guide, JavaScript Reference, built-in object pages, and Web API pages. When using Control Flow Reference, separate language semantics from host capabilities such as the DOM, fetch, and storage.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `if` | branches when a condition is true | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `for...of` | iterates iterable values | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `break` | exits a loop or switch early | Check it in target browsers, DevTools Console, tests, and the real error path. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>Control Flow Reference</h2>
  <dl>
    <dt><code>if</code></dt>
    <dd>branches when a condition is true</dd>
    <dt><code>for...of</code></dt>
    <dd>iterates iterable values</dd>
    <dt><code>break</code></dt>
    <dd>exits a loop or switch early</dd>
  </dl>
  <output id="control-flow-ref-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#control-flow-ref-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### Example 2

```html
<ol id="control-flow-ref-list"></ol>
<script>
  const scores = [92, 71, 88, 64];
  const passed = [];
  for (const score of scores) {
    if (score < 70) continue;
    passed.push(score >= 90 ? 'excellent' : 'passed');
  }
  document.querySelector('#control-flow-ref-list').innerHTML =
    passed.map((status) => `<li>${status}</li>`).join('');
</script>
```

## Precise authoring notes

- For Control Flow Reference, keep JavaScript core behavior distinct from host Web APIs.
- If behavior depends on browser support, locale, timezone, or permission state, cover that in UI and tests.
- For critical decisions, compare the relevant MDN page, MDN Reference entry, ECMA-262 text when needed, and a real runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Control Flow Reference, the JavaScript Reference, browser compatibility, and Web API boundaries before implementation.

## Next step

Continue with **Expressions and Operators Reference**.
