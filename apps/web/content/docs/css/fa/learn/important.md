---
title: "!important در CSS"
description: "این صفحه درک بالا بردن priority و چرایی پرهیز CSS نگه‌داری‌پذیر از important روزمره را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "آموزش !important در CSS در مسیر W3Schools | MEGA JS"
seoDescription: "آموزش !important در CSS (important): مثال HTML با <style>، جدول syntax، تمرین live مسیر W3Schools و نکته DevTools برای ساخت UI و آماده‌سازی پروژه واقعی."
keywords: "CSS, !important در CSS, آموزش CSS, مرجع CSS, CSS !important, !important tutorial, important"
order: 47
track: learn
sources:
  - name: W3Schools CSS Tutorial
    url: https://www.w3schools.com/css/default.asp
  - name: MDN CSS
    url: https://developer.mozilla.org/en-US/docs/Web/CSS
---
# !important در CSS

!important در CSS درباره درک بالا بردن priority و چرایی پرهیز CSS نگه‌داری‌پذیر از important روزمره است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools CSS Tutorial است و مثال‌ها با `<style>` نوشته شده‌اند تا در live editor همان لحظه اجرا شوند.

وقتی با !important در CSS کار می‌کنید، فقط ظاهر نهایی را نبینید؛ rule برنده در cascade، computed style در DevTools Styles panel، اندازه boxها و اثر layout را هم بررسی کنید.

## ایده اصلی

- `!important`: priority declaration را در origin خودش بالا می‌برد.
- `cascade layer`: می‌تواند priority را بدون important سازمان دهد.
- `specificity`: بین ruleهای important رقیب همچنان مهم است.
- برای این موضوع، هماهنگی selector، declaration، cascade و computed style معیار اصلی کیفیت CSS است.

## مثال‌های HTML و CSS

سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value را تغییر دهید و computed style را مقایسه کنید.

### مثال 1: الگوی CSS متمرکز

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS !important practice</title>
    <style>
      @layer base, components;
      @layer base {
        :where(.note) { color: #334155; }
      }
      @layer components {
        .note.featured { color: #1d4ed8; }
      }
    </style>
  </head>
  <body>
    <p class="note featured">
      Inspect which cascade layer and selector wins for CSS !important.
    </p>
  </body>
</html>
```

### مثال 2: گزینه‌ها در جدول style شده

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS !important practice</title>
    <style>
      table {
        border-collapse: collapse;
        width: min(100%, 42rem);
      }
      caption {
        font-weight: 700;
        margin-block-end: .5rem;
      }
      th,
      td {
        border: 1px solid #cbd5e1;
        padding: .65rem;
        text-align: start;
      }
      code {
        color: #1d4ed8;
      }
    </style>
  </head>
  <body>
    <table>
      <caption>CSS !important quick reference</caption>
      <thead>
        <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
      </thead>
      <tbody>
        <tr><td><code>!important</code></td><td>raises declaration priority in its cascade origin</td></tr>
        <tr><td><code>cascade layer</code></td><td>can organize priority without important</td></tr>
        <tr><td><code>specificity</code></td><td>still matters among competing important rules</td></tr>
      </tbody>
    </table>
  </body>
</html>
```

### مثال 3: صفحه تمرینی کامل

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS !important practice</title>
    <style>
      main {
        width: min(100% - 2rem, 52rem);
        margin-inline: auto;
        padding-block: 2rem;
      }
      .checklist {
        display: grid;
        gap: .75rem;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>CSS !important checklist</h1>
      <ul class="checklist">
        <li>Inspect the winning CSS rule.</li>
        <li>Check the computed style and box model.</li>
        <li>Resize the viewport and test keyboard focus.</li>
      </ul>
    </main>
  </body>
</html>
```

## جدول syntax و کاربرد

| Syntax | کاربرد | نکته authoring |
| --- | --- | --- |
| `!important` | priority declaration را در origin خودش بالا می‌برد | در !important در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `cascade layer` | می‌تواند priority را بدون important سازمان دهد | در !important در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |
| `specificity` | بین ruleهای important رقیب همچنان مهم است | در !important در CSS آن را با cascade، specificity و layout واقعی صفحه هماهنگ کنید. |

## اشتباه‌های رایج

- افزایش بی‌دلیل specificity یا استفاده سریع از !important به جای فهمیدن cascade در !important در CSS.
- کپی کردن مثال بدون تغییر tokenهای رنگ، spacing، breakpoint یا selector برای پروژه واقعی.
- فراموش کردن تست `!important` در DevTools، responsive mode، keyboard focus و حالت‌های hover/focus.

## تمرین کوتاه

یک فایل `important.html` بسازید، مثال اول را اجرا کنید و سپس حداقل یک declaration مرتبط با `!important` را با token یا نیاز پروژه خودتان جایگزین کنید. بعد در DevTools Styles panel rule برنده و box model را بررسی کنید.

## گام بعدی

بعد از این صفحه، **Functionهای ریاضی CSS** را بخوانید تا مسیر CSS مرحله‌به‌مرحله کامل‌تر شود.
