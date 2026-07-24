---
title: "Specification مربوط به CSS Selectors"
description: "این صفحه grammar رسمی selector، مدل matching، ruleهای specificity، pseudo-class و pseudo-element را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "Specification مربوط به CSS Selectors — خلاصه رسمی W3C | MEGA JS"
seoDescription: "Specification مربوط به CSS Selectors (selectors spec): خلاصه رسمی W3C CSS برای authorها با مثال، interop، computed style و راهنمای پیاده‌سازی پایدار در وب."
keywords: "CSS, Specification مربوط به CSS Selectors, آموزش CSS, مرجع CSS, CSS Selectors spec, W3C selectors, selector grammar"
order: 4
track: official
sources:
  - name: W3C CSS
    url: https://www.w3.org/Style/CSS/
  - name: CSS Snapshot 2024
    url: https://www.w3.org/TR/css-2024/
---
# Specification مربوط به CSS Selectors

Specification مربوط به CSS Selectors خلاصه‌ای specification-oriented از W3C CSS است. هدف صفحه dump کامل specification نیست؛ بلکه grammar رسمی selector، مدل matching، ruleهای specificity، pseudo-class و pseudo-element را برای authorهایی توضیح می‌دهد که می‌خواهند styleهای قابل تعامل و پایدار بنویسند.

## خواندن با نگاه specification

در specificationهای CSS، عبارت‌هایی مثل must، should، computed value، used value، grammar و conformance معنی دقیق دارند. این خلاصه آن زبان را به تصمیم‌های عملی authoring تبدیل می‌کند، اما برای edge caseها باید متن W3C را بررسی کنید.

## مفاهیم کلیدی

| اصطلاح | خلاصه author-facing |
| --- | --- |
| `selector list` | selectorهای جداشده با comma که declaration مشترک دارند |
| `compound selector` | دنباله simple selectorها بدون combinator |
| `relative selector` | selector ارزیابی‌شده از anchor element |

## مثال authoring

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Selectors Specification practice</title>
    <style>
      article:has(a[href^="https"]) {
        border-inline-start: .25rem solid #2563eb;
        padding-inline-start: 1rem;
      }
      article :is(h2, p) {
        margin-block: .5rem;
      }
    </style>
  </head>
  <body>
    <article>
      <h2>CSS Selectors Specification</h2>
      <p><a href="https://www.w3.org/Style/CSS/">W3C CSS</a></p>
    </article>
  </body>
</html>
```

### مثال 2

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Selectors Specification practice</title>
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
      <h1>CSS Selectors Specification checklist</h1>
      <ul class="checklist">
        <li>Inspect the winning CSS rule.</li>
        <li>Check the computed style and box model.</li>
        <li>Resize the viewport and test keyboard focus.</li>
      </ul>
    </main>
  </body>
</html>
```

## نکته‌های interop و accessibility

- در Specification مربوط به CSS Selectors، به grammar و الگوریتم‌های computed style فقط به عنوان جزئیات پیاده‌سازی نگاه نکنید؛ CSS شما باید با آن‌ها سازگار باشد.
- وقتی specification چند حالت مجاز دارد، حالت ساده‌تر، قابل تست‌تر و قابل فهم‌تر در DevTools را برای پروژه واقعی انتخاب کنید.
- برای motion، color contrast، focus و responsive behavior، preference کاربر و accessibility را از ابتدا در CSS لحاظ کنید.

## گام بعدی

در ادامه **Specification مربوط به CSS Box Model** را مرور کنید.
