---
title: "Scope در JavaScript"
description: "این صفحه دانستن محل زندگی bindingها در global، module، function و block scope را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش Scope در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش Scope در JavaScript (scope): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime همراه تمرین."
keywords: "JavaScript, Scope در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript Scope, Scope tutorial, scope"
order: 58
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# Scope در JavaScript

Scope در JavaScript درباره دانستن محل زندگی bindingها در global، module، function و block scope است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی Scope در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `lexical scope`: nameها را از nesting source resolve می‌کند.
- `closure`: دسترسی به bindingهای outer را نگه می‌دارد.
- `hoisting`: declarationها را پیش از execution آماده می‌کند.
- برای این موضوع، ورودی و خروجی روشن، side effect محدود و scope قابل فهم نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<button id="scope-button" type="button">Count clicks</button>
<output id="scope-out"></output>
<script>
  function createCounter() {
    let count = 0;
    return () => {
      count += 1;
      return count;
    };
  }
  const nextCount = createCounter();
  document.querySelector('#scope-button').addEventListener('click', () => {
    document.querySelector('#scope-out').value = `Clicked ${nextCount()} time(s)`;
  });
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript Scope quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>lexical scope</code></td><td>resolves names from source nesting</td></tr>
    <tr><td><code>closure</code></td><td>keeps access to outer bindings</td></tr>
    <tr><td><code>hoisting</code></td><td>prepares declarations before execution</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('scope terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Scope practice</title>
  </head>
  <body>
    <button id="scope-button" type="button">Count clicks</button>
    <output id="scope-out"></output>
    <script>
      function createCounter() {
        let count = 0;
        return () => {
          count += 1;
          return count;
        };
      }
      const nextCount = createCounter();
      document.querySelector('#scope-button').addEventListener('click', () => {
        document.querySelector('#scope-out').value = `Clicked ${nextCount()} time(s)`;
      });
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `lexical scope` | nameها را از nesting source resolve می‌کند | در Scope در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `closure` | دسترسی به bindingهای outer را نگه می‌دارد | در Scope در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `hoisting` | declarationها را پیش از execution آماده می‌کند | در Scope در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن Scope در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `lexical scope` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `scope.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `lexical scope` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Hoisting در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
