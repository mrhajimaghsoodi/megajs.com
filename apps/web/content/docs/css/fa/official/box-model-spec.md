---
title: "Specification مربوط به CSS Box Model"
description: "این صفحه مدل رسمی برای box، margin، padding، border، sizing، outline و interactionهای fragmentation را با مثال، جدول و نکته‌های کاربردی برای CSS توضیح می‌دهد."
seoTitle: "Specification مربوط به CSS Box Model — خلاصه رسمی W3C | MEGA JS"
seoDescription: "Specification مربوط به CSS Box Model (box model spec): خلاصه رسمی W3C CSS برای authorها با مثال، interop، computed style و راهنمای پیاده‌سازی پایدار در وب."
keywords: "CSS, Specification مربوط به CSS Box Model, آموزش CSS, مرجع CSS, CSS Box Model spec, W3C box model, CSS sizing"
order: 5
track: official
sources:
  - name: W3C CSS
    url: https://www.w3.org/Style/CSS/
  - name: CSS Snapshot 2024
    url: https://www.w3.org/TR/css-2024/
---
# Specification مربوط به CSS Box Model

Specification مربوط به CSS Box Model خلاصه‌ای specification-oriented از W3C CSS است. هدف صفحه dump کامل specification نیست؛ بلکه مدل رسمی برای box، margin، padding، border، sizing، outline و interactionهای fragmentation را برای authorهایی توضیح می‌دهد که می‌خواهند styleهای قابل تعامل و پایدار بنویسند.

## خواندن با نگاه specification

در specificationهای CSS، عبارت‌هایی مثل must، should، computed value، used value، grammar و conformance معنی دقیق دارند. این خلاصه آن زبان را به تصمیم‌های عملی authoring تبدیل می‌کند، اما برای edge caseها باید متن W3C را بررسی کنید.

## مفاهیم کلیدی

| اصطلاح | خلاصه author-facing |
| --- | --- |
| `principal box` | box اصلی generated توسط element |
| `margin area` | فضای بیرون border area |
| `box edge` | مرز content، padding، border یا margin |

## مثال authoring

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Box Model Specification practice</title>
    <style>
      .spec-box {
        box-sizing: border-box;
        inline-size: 18rem;
        padding: 1rem;
        border: .5rem solid #2563eb;
        margin: 1rem;
      }
    </style>
  </head>
  <body>
    <div class="spec-box">CSS Box Model Specification</div>
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
    <title>CSS Box Model Specification practice</title>
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
      <h1>CSS Box Model Specification checklist</h1>
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

- در Specification مربوط به CSS Box Model، به grammar و الگوریتم‌های computed style فقط به عنوان جزئیات پیاده‌سازی نگاه نکنید؛ CSS شما باید با آن‌ها سازگار باشد.
- وقتی specification چند حالت مجاز دارد، حالت ساده‌تر، قابل تست‌تر و قابل فهم‌تر در DevTools را برای پروژه واقعی انتخاب کنید.
- برای motion، color contrast، focus و responsive behavior، preference کاربر و accessibility را از ابتدا در CSS لحاظ کنید.

## گام بعدی

در ادامه **Specification مربوط به CSS Color** را مرور کنید.
