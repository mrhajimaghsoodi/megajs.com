---
title: "Closures and Scope Reference"
description: "This page explains lexical environments, scope chains, closure lifetime, modules, and memory considerations with HTML examples, syntax tables, and practical JavaScript notes."
seoTitle: "Closures and Scope Reference — MDN-style | MEGA JS Docs"
seoDescription: "Closures and Scope Reference (closures scope): MDN-style JavaScript reference with syntax tables, HTML examples, runtime behavior, and DOM or Web API notes."
keywords: "JavaScript, Closures and Scope Reference, JavaScript Closures and Scope Reference, Closures and Scope Reference tutorial, closures scope"
order: 8
track: reference
sources:
  - name: MDN Web Docs — JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
  - name: MDN JavaScript Reference
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
---
# Closures and Scope Reference

Closures and Scope Reference is an MDN-style JavaScript reference page. It concentrates on lexical environments, scope chains, closure lifetime, modules, and memory considerations and favors precise definitions, usage tables, runtime behavior, and DOM or Web API boundaries over beginner sequencing.

## Place in the MDN reference

On MDN, this topic usually sits near the JavaScript Guide, JavaScript Reference, built-in object pages, and Web API pages. When using Closures and Scope Reference, separate language semantics from host capabilities such as the DOM, fetch, and storage.

## Reference table

| Item | Meaning | Compatibility note |
| --- | --- | --- |
| `lexical scope` | resolves names from source nesting | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `closure` | keeps access to outer bindings | Check it in target browsers, DevTools Console, tests, and the real error path. |
| `hoisting` | prepares declarations before execution | Check it in target browsers, DevTools Console, tests, and the real error path. |

## Examples

### Example 1

```html
<article class="reference-card">
  <h2>Closures and Scope Reference</h2>
  <dl>
    <dt><code>lexical scope</code></dt>
    <dd>resolves names from source nesting</dd>
    <dt><code>closure</code></dt>
    <dd>keeps access to outer bindings</dd>
    <dt><code>hoisting</code></dt>
    <dd>prepares declarations before execution</dd>
  </dl>
  <output id="closures-scope-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#closures-scope-count').value = `${terms.length} JavaScript reference terms loaded`;
</script>
```

### Example 2

```html
<button id="closures-scope-button" type="button">Count clicks</button>
<output id="closures-scope-out"></output>
<script>
  function createCounter() {
    let count = 0;
    return () => {
      count += 1;
      return count;
    };
  }
  const nextCount = createCounter();
  document.querySelector('#closures-scope-button').addEventListener('click', () => {
    document.querySelector('#closures-scope-out').value = `Clicked ${nextCount()} time(s)`;
  });
</script>
```

## Precise authoring notes

- For Closures and Scope Reference, keep JavaScript core behavior distinct from host Web APIs.
- If behavior depends on browser support, locale, timezone, or permission state, cover that in UI and tests.
- For critical decisions, compare the relevant MDN page, MDN Reference entry, ECMA-262 text when needed, and a real runtime.

## Conceptual link to MDN

This page aligns with MDN topics around Closures and Scope Reference, the JavaScript Reference, browser compatibility, and Web API boundaries before implementation.

## Next step

Continue with **Prototypes and Inheritance Reference**.
