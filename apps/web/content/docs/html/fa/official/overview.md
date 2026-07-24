---
title: "نمای کلی HTML Living Standard"
description: "این صفحه مدل استاندارد زنده، conformance classها و روش مطالعه برای authorها را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "نمای کلی HTML Living Standard — خلاصه رسمی WHATWG | MEGA JS"
seoDescription: "نمای کلی HTML Living Standard بر اساس WHATWG HTML؛ خلاصه specification-oriented برای authorها با مثال، constraintها و نکته‌های interop و security."
keywords: "HTML, نمای کلی HTML Living Standard, آموزش HTML, مرجع HTML, HTML Living Standard, WHATWG HTML, official HTML"
order: 1
track: official
sources:
  - name: HTML Living Standard
    url: https://html.spec.whatwg.org/
---
# نمای کلی HTML Living Standard

نمای کلی HTML Living Standard خلاصه‌ای specification-oriented از HTML Living Standard است. هدف صفحه dump کامل specification نیست؛ بلکه مدل استاندارد زنده، conformance classها و روش مطالعه برای authorها را برای authorهایی توضیح می‌دهد که می‌خواهند markup قابل تعامل بنویسند.

## خواندن با نگاه specification

در متن رسمی، کلمه‌هایی مثل must، may، conformance، algorithm و parser معنی دقیق دارند. این خلاصه آن زبان را به تصمیم‌های عملی authoring تبدیل می‌کند، اما برای موارد edge باید خود specification را بررسی کنید.

## مفاهیم کلیدی

| اصطلاح | خلاصه author-facing |
| --- | --- |
| `Living Standard` | specification پیوسته نگه‌داری‌شده HTML |
| `conformance` | الزام‌ها برای document و tool |
| `authoring` | قاعده‌های نوشتن document قابل تعامل |

## مثال authoring

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>HTML Living Standard Overview</title>
  </head>
  <body>
    <main>
      <h1>HTML Living Standard Overview</h1>
    </main>
  </body>
</html>
```

### مثال 2

```html
<main>
  <h1>HTML Living Standard Overview checklist</h1>
  <p>Validate the document, inspect the DOM, and confirm the page purpose.</p>
</main>
```

## نکته‌های interop و security

- در نمای کلی HTML Living Standard، به الگوریتم‌های parser و form و media فقط به عنوان جزئیات پیاده‌سازی نگاه نکنید؛ خروجی authoring شما باید با آن‌ها سازگار باشد.
- وقتی specification چند حالت مجاز دارد، حالت ساده‌تر و قابل تست‌تر را برای محتوای واقعی انتخاب کنید.
- برای محتوای user-generated، embedها، formها و linkهای خارجی، policy و محدودیت امنیتی را از ابتدا در markup لحاظ کنید.

## گام بعدی

در ادامه **ساختار سند HTML** را مرور کنید.
