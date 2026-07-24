---
title: "Elementها و Content Model"
description: "این صفحه تعریف element، category، محتوای مجاز، مدل transparent و constraintهای authoring را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "Elementها و Content Model — خلاصه رسمی WHATWG | MEGA JS"
seoDescription: "Elementها و Content Model بر اساس WHATWG HTML؛ خلاصه specification-oriented برای authorها با مثال، constraintها و نکته‌های interop و security. با تمرین."
keywords: "HTML, Elementها و Content Model, آموزش HTML, مرجع HTML, HTML content model, WHATWG elements, permitted content"
order: 3
track: official
sources:
  - name: HTML Living Standard
    url: https://html.spec.whatwg.org/
---
# Elementها و Content Model

Elementها و Content Model خلاصه‌ای specification-oriented از HTML Living Standard است. هدف صفحه dump کامل specification نیست؛ بلکه تعریف element، category، محتوای مجاز، مدل transparent و constraintهای authoring را برای authorهایی توضیح می‌دهد که می‌خواهند markup قابل تعامل بنویسند.

## خواندن با نگاه specification

در متن رسمی، کلمه‌هایی مثل must، may، conformance، algorithm و parser معنی دقیق دارند. این خلاصه آن زبان را به تصمیم‌های عملی authoring تبدیل می‌کند، اما برای موارد edge باید خود specification را بررسی کنید.

## مفاهیم کلیدی

| اصطلاح | خلاصه author-facing |
| --- | --- |
| `content model` | توصیف می‌کند چه childهایی مجازند |
| `transparent` | محتوای مجاز را از context می‌گیرد |
| `palpable content` | محتوای قابل درک یا معنادار |

## مثال authoring

### مثال 1

```html
<section class="elements-content-model" aria-labelledby="elements-content-model-title">
  <h2 id="elements-content-model-title">Elements and Content Model</h2>
  <p>element definitions, categories, permitted content, transparent models, and authoring constraints.</p>
</section>
```

### مثال 2

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elements and Content Model practice</title>
  </head>
  <body>
    <section class="elements-content-model" aria-labelledby="elements-content-model-title">
      <h2 id="elements-content-model-title">Elements and Content Model</h2>
      <p>element definitions, categories, permitted content, transparent models, and authoring constraints.</p>
    </section>
  </body>
</html>
```

## نکته‌های interop و security

- در Elementها و Content Model، به الگوریتم‌های parser و form و media فقط به عنوان جزئیات پیاده‌سازی نگاه نکنید؛ خروجی authoring شما باید با آن‌ها سازگار باشد.
- وقتی specification چند حالت مجاز دارد، حالت ساده‌تر و قابل تست‌تر را برای محتوای واقعی انتخاب کنید.
- برای محتوای user-generated، embedها، formها و linkهای خارجی، policy و محدودیت امنیتی را از ابتدا در markup لحاظ کنید.

## گام بعدی

در ادامه **Parsing و Tokenization در HTML** را مرور کنید.
