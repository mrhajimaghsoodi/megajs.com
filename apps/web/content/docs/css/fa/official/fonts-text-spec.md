---
title: "Specificationهای CSS Fonts و Text"
description: "این صفحه انتخاب رسمی font، web font، layout متن، spacing، wrapping، decoration و رفتار نوشتار را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "Specificationهای CSS Fonts و Text — خلاصه رسمی W3C | MEGA JS"
seoDescription: "Specificationهای CSS Fonts و Text (fonts text spec): خلاصه رسمی W3C CSS برای authorها با مثال، interop، computed style و راهنمای پیاده‌سازی پایدار در وب واقعی."
keywords: "CSS, Specificationهای CSS Fonts و Text, آموزش CSS, مرجع CSS, CSS Fonts spec, CSS Text spec, W3C typography"
order: 7
track: official
sources:
  - name: W3C CSS
    url: https://www.w3.org/Style/CSS/
  - name: CSS Snapshot 2024
    url: https://www.w3.org/TR/css-2024/
---
# Specificationهای CSS Fonts و Text

Specificationهای CSS Fonts و Text خلاصه‌ای specification-oriented از W3C CSS است. هدف صفحه dump کامل specification نیست؛ بلکه انتخاب رسمی font، web font، layout متن، spacing، wrapping، decoration و رفتار نوشتار را برای authorهایی توضیح می‌دهد که می‌خواهند styleهای قابل تعامل و پایدار بنویسند.

## خواندن با نگاه specification

در specificationهای CSS، عبارت‌هایی مثل must، should، computed value، used value، grammar و conformance معنی دقیق دارند. این خلاصه آن زبان را به تصمیم‌های عملی authoring تبدیل می‌کند، اما برای edge caseها باید متن W3C را بررسی کنید.

## مفاهیم کلیدی

| اصطلاح | خلاصه author-facing |
| --- | --- |
| `@font-face` | یک font resource برای matching تعریف می‌کند |
| `font matching` | algorithm انتخاب font face |
| `line breaking` | ruleهای wrap شدن lineهای متن |

## مثال authoring

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Fonts and Text Specifications practice</title>
    <style>
      .prose {
        max-width: 62ch;
        font-family: system-ui, sans-serif;
        font-size: clamp(1rem, 2vw, 1.25rem);
        line-height: 1.7;
      }
    </style>
  </head>
  <body>
    <article class="prose">
      <h2>CSS Fonts and Text Specifications</h2>
      <p>Readable CSS typography balances font-size, line-height, and line length.</p>
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
    <title>CSS Fonts and Text Specifications practice</title>
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
      <h1>CSS Fonts and Text Specifications checklist</h1>
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

- در Specificationهای CSS Fonts و Text، به grammar و الگوریتم‌های computed style فقط به عنوان جزئیات پیاده‌سازی نگاه نکنید؛ CSS شما باید با آن‌ها سازگار باشد.
- وقتی specification چند حالت مجاز دارد، حالت ساده‌تر، قابل تست‌تر و قابل فهم‌تر در DevTools را برای پروژه واقعی انتخاب کنید.
- برای motion، color contrast، focus و responsive behavior، preference کاربر و accessibility را از ابتدا در CSS لحاظ کنید.

## گام بعدی

در ادامه **Moduleهای Layout در CSS** را مرور کنید.
