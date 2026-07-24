---
title: "مدل Form و Submission"
description: "این صفحه ownership فرم، نام control، validation، controlهای موفق و algorithmهای encoding را با مثال، جدول و نکته‌های کاربردی برای HTML توضیح می‌دهد."
seoTitle: "مدل Form و Submission — خلاصه رسمی WHATWG | MEGA JS"
seoDescription: "مدل Form و Submission بر اساس WHATWG HTML؛ خلاصه specification-oriented برای authorها با مثال، constraintها و نکته‌های interop و security. همراه تمرین کاربردی."
keywords: "HTML, مدل Form و Submission, آموزش HTML, مرجع HTML, WHATWG forms, HTML form submission, successful controls"
order: 5
track: official
sources:
  - name: HTML Living Standard
    url: https://html.spec.whatwg.org/
---
# مدل Form و Submission

مدل Form و Submission خلاصه‌ای specification-oriented از HTML Living Standard است. هدف صفحه dump کامل specification نیست؛ بلکه ownership فرم، نام control، validation، controlهای موفق و algorithmهای encoding را برای authorهایی توضیح می‌دهد که می‌خواهند markup قابل تعامل بنویسند.

## خواندن با نگاه specification

در متن رسمی، کلمه‌هایی مثل must، may، conformance، algorithm و parser معنی دقیق دارند. این خلاصه آن زبان را به تصمیم‌های عملی authoring تبدیل می‌کند، اما برای موارد edge باید خود specification را بررسی کنید.

## مفاهیم کلیدی

| اصطلاح | خلاصه author-facing |
| --- | --- |
| `form owner` | form مرتبط با control |
| `successful controls` | controlهایی که در submit وارد می‌شوند |
| `encoding type` | format استفاده‌شده برای داده ارسالی |

## مثال authoring

### مثال 1

```html
<form action="/subscribe" method="post">
  <label for="forms-submission-email">Email</label>
  <input id="forms-submission-email" name="email" type="email" required autocomplete="email">
  <button type="submit">Subscribe</button>
</form>
```

### مثال 2

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forms and Submission Model practice</title>
  </head>
  <body>
    <form action="/subscribe" method="post">
      <label for="forms-submission-email">Email</label>
      <input id="forms-submission-email" name="email" type="email" required autocomplete="email">
      <button type="submit">Subscribe</button>
    </form>
  </body>
</html>
```

## نکته‌های interop و security

- در مدل Form و Submission، به الگوریتم‌های parser و form و media فقط به عنوان جزئیات پیاده‌سازی نگاه نکنید؛ خروجی authoring شما باید با آن‌ها سازگار باشد.
- وقتی specification چند حالت مجاز دارد، حالت ساده‌تر و قابل تست‌تر را برای محتوای واقعی انتخاب کنید.
- برای محتوای user-generated، embedها، formها و linkهای خارجی، policy و محدودیت امنیتی را از ابتدا در markup لحاظ کنید.

## گام بعدی

در ادامه **Embedding و Media در HTML** را مرور کنید.
