---
title: "Embedding و Media در HTML"
description: "این صفحه image، media element، iframe embedding، fallback، lazy loading و hookهای policy را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "Embedding و Media در HTML — خلاصه رسمی WHATWG | MEGA JS"
seoDescription: "Embedding و Media در HTML بر اساس WHATWG HTML؛ خلاصه specification-oriented برای authorها با مثال، constraintها و نکته‌های interop و security. با تمرین."
keywords: "HTML, Embedding و Media در HTML, آموزش HTML, مرجع HTML, WHATWG media, HTML embedding, iframe img video"
order: 6
track: official
sources:
  - name: HTML Living Standard
    url: https://html.spec.whatwg.org/
---
# Embedding و Media در HTML

Embedding و Media در HTML خلاصه‌ای specification-oriented از HTML Living Standard است. هدف صفحه dump کامل specification نیست؛ بلکه image، media element، iframe embedding، fallback، lazy loading و hookهای policy را برای authorهایی توضیح می‌دهد که می‌خواهند markup قابل تعامل بنویسند.

## خواندن با نگاه specification

در متن رسمی، کلمه‌هایی مثل must، may، conformance، algorithm و parser معنی دقیق دارند. این خلاصه آن زبان را به تصمیم‌های عملی authoring تبدیل می‌کند، اما برای موارد edge باید خود specification را بررسی کنید.

## مفاهیم کلیدی

| اصطلاح | خلاصه author-facing |
| --- | --- |
| `<img>` | resource تصویر را embed می‌کند |
| `<iframe>` | یک browsing context تو در تو می‌سازد |
| `<source>` | candidateهای media یا image را انتخاب می‌کند |

## مثال authoring

### مثال 1

```html
<iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID" title="Embedding and Media" loading="lazy" allowfullscreen></iframe>
```

### مثال 2

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Embedding and Media practice</title>
  </head>
  <body>
    <iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID" title="Embedding and Media" loading="lazy" allowfullscreen></iframe>
  </body>
</html>
```

## نکته‌های interop و security

- در Embedding و Media در HTML، به الگوریتم‌های parser و form و media فقط به عنوان جزئیات پیاده‌سازی نگاه نکنید؛ خروجی authoring شما باید با آن‌ها سازگار باشد.
- وقتی specification چند حالت مجاز دارد، حالت ساده‌تر و قابل تست‌تر را برای محتوای واقعی انتخاب کنید.
- برای محتوای user-generated، embedها، formها و linkهای خارجی، policy و محدودیت امنیتی را از ابتدا در markup لحاظ کنید.

## گام بعدی

در ادامه **نکته‌های Security و Authoring** را مرور کنید.
