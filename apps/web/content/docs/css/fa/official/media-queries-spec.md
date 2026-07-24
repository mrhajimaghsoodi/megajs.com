---
title: "Specification مربوط به Media Queries"
description: "این صفحه syntax و مدل evaluation رسمی برای media type، feature، range، preference کاربر و CSS responsive را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "Specification مربوط به Media Queries — خلاصه رسمی W3C | MEGA JS"
seoDescription: "Specification مربوط به Media Queries (media queries spec): خلاصه رسمی W3C CSS برای authorها با مثال، interop، computed style و راهنمای پیاده‌سازی پایدار در وب."
keywords: "CSS, Specification مربوط به Media Queries, آموزش CSS, مرجع CSS, Media Queries spec, W3C media queries, responsive specs"
order: 9
track: official
sources:
  - name: W3C CSS
    url: https://www.w3.org/Style/CSS/
  - name: CSS Snapshot 2024
    url: https://www.w3.org/TR/css-2024/
---
# Specification مربوط به Media Queries

Specification مربوط به Media Queries خلاصه‌ای specification-oriented از W3C CSS است. هدف صفحه dump کامل specification نیست؛ بلکه syntax و مدل evaluation رسمی برای media type، feature، range، preference کاربر و CSS responsive را برای authorهایی توضیح می‌دهد که می‌خواهند styleهای قابل تعامل و پایدار بنویسند.

## خواندن با نگاه specification

در specificationهای CSS، عبارت‌هایی مثل must، should، computed value، used value، grammar و conformance معنی دقیق دارند. این خلاصه آن زبان را به تصمیم‌های عملی authoring تبدیل می‌کند، اما برای edge caseها باید متن W3C را بررسی کنید.

## مفاهیم کلیدی

| اصطلاح | خلاصه author-facing |
| --- | --- |
| `@media` | ruleها را زیر یک media condition گروه می‌کند |
| `media feature` | جنبه قابل query از device یا preference کاربر |
| `range context` | syntax مقایسه فشرده برای media featureها |

## مثال authoring

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media Queries Specification practice</title>
    <style>
      .cards {
        display: grid;
        gap: 1rem;
      }
      @media (min-width: 48rem) {
        .cards {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    </style>
  </head>
  <body>
    <div class="cards">
      <article>Small first</article>
      <article>Then wider</article>
      <article>Inspect responsive mode</article>
    </div>
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
    <title>Media Queries Specification practice</title>
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
      <h1>Media Queries Specification checklist</h1>
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

- در Specification مربوط به Media Queries، به grammar و الگوریتم‌های computed style فقط به عنوان جزئیات پیاده‌سازی نگاه نکنید؛ CSS شما باید با آن‌ها سازگار باشد.
- وقتی specification چند حالت مجاز دارد، حالت ساده‌تر، قابل تست‌تر و قابل فهم‌تر در DevTools را برای پروژه واقعی انتخاب کنید.
- برای motion، color contrast، focus و responsive behavior، preference کاربر و accessibility را از ابتدا در CSS لحاظ کنید.

## گام بعدی

این track را با بازگشت به reference و تست یک layout واقعی کامل کنید.
