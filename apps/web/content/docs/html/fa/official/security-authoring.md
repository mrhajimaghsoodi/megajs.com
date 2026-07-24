---
title: "نکته‌های Security و Authoring"
description: "این صفحه راهنمای امنیتی author-facing برای link، iframe، form، script و محتوای user-generated را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "نکته‌های Security و Authoring — خلاصه رسمی WHATWG | MEGA JS"
seoDescription: "نکته‌های Security و Authoring بر اساس WHATWG HTML؛ خلاصه specification-oriented برای authorها با مثال، constraintها و نکته‌های interop و security."
keywords: "HTML, نکته‌های Security و Authoring, آموزش HTML, مرجع HTML, HTML security, WHATWG authoring, iframe sandbox noopener"
order: 7
track: official
sources:
  - name: HTML Living Standard
    url: https://html.spec.whatwg.org/
---
# نکته‌های Security و Authoring

نکته‌های Security و Authoring خلاصه‌ای specification-oriented از HTML Living Standard است. هدف صفحه dump کامل specification نیست؛ بلکه راهنمای امنیتی author-facing برای link، iframe، form، script و محتوای user-generated را برای authorهایی توضیح می‌دهد که می‌خواهند markup قابل تعامل بنویسند.

## خواندن با نگاه specification

در متن رسمی، کلمه‌هایی مثل must، may، conformance، algorithm و parser معنی دقیق دارند. این خلاصه آن زبان را به تصمیم‌های عملی authoring تبدیل می‌کند، اما برای موارد edge باید خود specification را بررسی کنید.

## مفاهیم کلیدی

| اصطلاح | خلاصه author-facing |
| --- | --- |
| `rel="noopener"` | دسترسی opener از tab جدید را جلوگیری می‌کند |
| `sandbox` | قابلیت‌های iframe را محدود می‌کند |
| `autocomplete` | به form کمک می‌کند داده حساس را قابل پیش‌بینی مدیریت کند |

## مثال authoring

### مثال 1

```html
<section class="security-authoring" aria-labelledby="security-authoring-title">
  <h2 id="security-authoring-title">Security and Authoring Notes</h2>
  <p>author-facing security guidance for links, iframes, forms, scripts, and user-generated content.</p>
</section>
```

### مثال 2

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Security and Authoring Notes practice</title>
  </head>
  <body>
    <section class="security-authoring" aria-labelledby="security-authoring-title">
      <h2 id="security-authoring-title">Security and Authoring Notes</h2>
      <p>author-facing security guidance for links, iframes, forms, scripts, and user-generated content.</p>
    </section>
  </body>
</html>
```

## نکته‌های interop و security

- در نکته‌های Security و Authoring، به الگوریتم‌های parser و form و media فقط به عنوان جزئیات پیاده‌سازی نگاه نکنید؛ خروجی authoring شما باید با آن‌ها سازگار باشد.
- وقتی specification چند حالت مجاز دارد، حالت ساده‌تر و قابل تست‌تر را برای محتوای واقعی انتخاب کنید.
- برای محتوای user-generated، embedها، formها و linkهای خارجی، policy و محدودیت امنیتی را از ابتدا در markup لحاظ کنید.

## گام بعدی

این track را با بازگشت به reference و تست یک صفحه واقعی کامل کنید.
