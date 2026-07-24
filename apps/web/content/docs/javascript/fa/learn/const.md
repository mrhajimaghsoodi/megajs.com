---
title: "کلمه const در JavaScript"
description: "این صفحه تعریف bindingهایی که نباید reassignment شوند، حتی اگر object بتواند mutate شود را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد."
seoTitle: "آموزش کلمه const در JavaScript در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش کلمه const در JavaScript (const): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime."
keywords: "JavaScript, کلمه const در JavaScript, آموزش JavaScript, مرجع JavaScript, JavaScript const, const tutorial, const"
order: 11
track: learn
sources:
  - name: W3Schools JavaScript Tutorial
    url: https://www.w3schools.com/js/default.asp
  - name: MDN JavaScript
    url: https://developer.mozilla.org/en-US/docs/Web/JavaScript
---
# کلمه const در JavaScript

کلمه const در JavaScript درباره تعریف bindingهایی که نباید reassignment شوند، حتی اگر object بتواند mutate شود است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با `<script>` نوشته شده‌اند تا در live editor اجرا شوند.

وقتی کلمه const در JavaScript را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.

## ایده اصلی

- `const`: binding غیرقابل reassignment تعریف می‌کند.
- `mutation`: می‌تواند محتوای object را تغییر دهد.
- `initializer`: برای const declaration الزامی است.
- برای این موضوع، هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console نشانه اصلی کیفیت JavaScript است.

## مثال‌های HTML و JavaScript

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.

### مثال 1: الگوی JavaScript متمرکز

```html
<section>
  <h2>JavaScript const</h2>
  <output id="const-out"></output>
</section>
<script>
  const profile = { name: 'Ada', lessons: 3 };
  let status = profile.lessons >= 3 ? 'ready' : 'learning';
  document.querySelector('#const-out').value =
    `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
</script>
```

### مثال 2: گزینه‌های syntax در context

```html
<table>
  <caption>JavaScript const quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>const</code></td><td>declares a binding that cannot be reassigned</td></tr>
    <tr><td><code>mutation</code></td><td>can still change object contents</td></tr>
    <tr><td><code>initializer</code></td><td>is required for const declarations</td></tr>
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('const terms:', rows.length);
</script>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript const practice</title>
  </head>
  <body>
    <section>
      <h2>JavaScript const</h2>
      <output id="const-out"></output>
    </section>
    <script>
      const profile = { name: 'Ada', lessons: 3 };
      let status = profile.lessons >= 3 ? 'ready' : 'learning';
      document.querySelector('#const-out').value =
        `${profile.name} is ${status}; type is ${typeof profile.lessons}`;
    </script>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `const` | binding غیرقابل reassignment تعریف می‌کند | در کلمه const در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `mutation` | می‌تواند محتوای object را تغییر دهد | در کلمه const در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |
| `initializer` | برای const declaration الزامی است | در کلمه const در JavaScript آن را با runtime واقعی، DOM و error handling تست کنید. |

## اشتباه‌های رایج

- کپی کردن کلمه const در JavaScript بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.
- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.
- فراموش کردن تست `const` با keyboard، state خالی، error و browserهای هدف.

## تمرین کوتاه

یک فایل `const.html` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با `const` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Operatorها در JavaScript** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.
