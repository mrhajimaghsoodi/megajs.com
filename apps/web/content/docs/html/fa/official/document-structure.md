---
title: "ساختار سند HTML"
description: "این صفحه doctype، html، head، body، metadata، section و outline سند برای authorها را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "ساختار سند HTML — خلاصه رسمی WHATWG | MEGA JS"
seoDescription: "ساختار سند HTML بر اساس WHATWG HTML؛ خلاصه specification-oriented برای authorها با مثال، constraintها و نکته‌های interop و security. برای پروژه‌های واقعی وب."
keywords: "HTML, ساختار سند HTML, آموزش HTML, مرجع HTML, HTML document structure, WHATWG document, doctype html"
order: 2
track: official
sources:
  - name: HTML Living Standard
    url: https://html.spec.whatwg.org/
---
# ساختار سند HTML

ساختار سند HTML خلاصه‌ای specification-oriented از HTML Living Standard است. هدف صفحه dump کامل specification نیست؛ بلکه doctype، html، head، body، metadata، section و outline سند برای authorها را برای authorهایی توضیح می‌دهد که می‌خواهند markup قابل تعامل بنویسند.

## خواندن با نگاه specification

در متن رسمی، کلمه‌هایی مثل must، may، conformance، algorithm و parser معنی دقیق دارند. این خلاصه آن زبان را به تصمیم‌های عملی authoring تبدیل می‌کند، اما برای موارد edge باید خود specification را بررسی کنید.

## مفاهیم کلیدی

| اصطلاح | خلاصه author-facing |
| --- | --- |
| `<!doctype html>` | پیش‌درآمد لازم برای سند HTML |
| `<html>` | element ریشه سند |
| `<head>` | container metadata پیش از محتوای body |

## مثال authoring

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document Structure</title>
  </head>
  <body>
    <main>
      <h1>Document Structure</h1>
    </main>
  </body>
</html>
```

### مثال 2

```html
<main>
  <h1>Document Structure checklist</h1>
  <p>Validate the document, inspect the DOM, and confirm the page purpose.</p>
</main>
```

## نکته‌های interop و security

- در ساختار سند HTML، به الگوریتم‌های parser و form و media فقط به عنوان جزئیات پیاده‌سازی نگاه نکنید؛ خروجی authoring شما باید با آن‌ها سازگار باشد.
- وقتی specification چند حالت مجاز دارد، حالت ساده‌تر و قابل تست‌تر را برای محتوای واقعی انتخاب کنید.
- برای محتوای user-generated، embedها، formها و linkهای خارجی، policy و محدودیت امنیتی را از ابتدا در markup لحاظ کنید.

## گام بعدی

در ادامه **Elementها و Content Model** را مرور کنید.
