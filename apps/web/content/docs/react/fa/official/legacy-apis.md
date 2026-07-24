---
title: "APIهای Legacy در React"
description: "این صفحه APIهای قدیمی حفظ‌شده در reference و روش نزدیک شدن authorها به migration را با مثال React، جدول syntax و نکته‌های کاربردی برای component authoring توضیح می‌دهد."
seoTitle: "APIهای Legacy در React — مرجع رسمی react.dev | MEGA JS"
seoDescription: "APIهای Legacy در React (legacy apis): خلاصه رسمی react.dev برای React API Reference با Hooks، Components، React DOM، Compiler و Rules of React همراه تمرین."
keywords: "React, APIهای Legacy در React, آموزش React, مرجع React, React Legacy React APIs, Legacy React APIs tutorial, legacy apis"
order: 19
track: official
sources:
  - name: React API Reference
    url: https://react.dev/reference/react
  - name: React Docs
    url: https://react.dev/
---
# APIهای Legacy در React

APIهای Legacy در React خلاصه‌ای از ساختار رسمی react.dev/reference است. تمرکز آن روی APIهای قدیمی حفظ‌شده در reference و روش نزدیک شدن authorها به migration است و هدف آن کمک به author برای خواندن API Reference بدون تبدیل کردن صفحه به dump کامل مستندات است.

## چگونه متن رسمی را بخوانیم

در react.dev، APIها بر اساس Hooks، Components، APIهای core، React DOM، Compiler، Rules of React و Legacy APIs گروه‌بندی می‌شوند. هر صفحه رسمی معمولاً signature، caveat، troubleshooting و example دارد؛ این خلاصه همان مسیر را برای تصمیم‌گیری سریع‌تر فشرده می‌کند.

## اصطلاح‌های کلیدی

| Term | خلاصه author-facing |
| --- | --- |
| `legacy API` | API قدیمی اما پشتیبانی‌شده React |
| `migration` | حرکت به سمت patternهای مدرن React |
| `compatibility` | رفتاری که برای appهای موجود حفظ می‌شود |

## مثال‌های قابل اجرا

### مثال 1

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Legacy React APIs official</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
      body { font-family: system-ui, sans-serif; margin: 1.5rem; line-height: 1.5; color: #1f2937; }
      button, input, select, textarea { font: inherit; margin: 0.25rem; }
      .card { border: 1px solid #d1d5db; border-radius: 0.75rem; padding: 1rem; max-width: 34rem; }
      .row { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; }
      .badge { display: inline-block; border-radius: 999px; background: #e0f2fe; color: #075985; padding: 0.15rem 0.5rem; }
      .muted { color: #64748b; }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <div id="modal-root"></div>
    <script type="text/babel">
      const { useState, useEffect, useContext, useMemo, useCallback, useRef, useReducer, useTransition, useDeferredValue, useId, Suspense, StrictMode, Fragment, memo, createContext } = React;
      const steps = [
        'Open the react.dev reference page',
        'Read the signature and caveats',
        'Run a small component example',
        'Add tests for the production behavior'
      ];
      function App() {
        return (
          <section className="card">
            <h1>Legacy React APIs reading trace</h1>
            <ol>{steps.map((step) => <li key={step}>{step}</li>)}</ol>
          </section>
        );
      }
      ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    </script>
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
    <title>Legacy React APIs</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
      body { font-family: system-ui, sans-serif; margin: 1.5rem; line-height: 1.5; color: #1f2937; }
      button, input, select, textarea { font: inherit; margin: 0.25rem; }
      .card { border: 1px solid #d1d5db; border-radius: 0.75rem; padding: 1rem; max-width: 34rem; }
      .row { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; }
      .badge { display: inline-block; border-radius: 999px; background: #e0f2fe; color: #075985; padding: 0.15rem 0.5rem; }
      .muted { color: #64748b; }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <div id="modal-root"></div>
    <script type="text/babel">
      const { useState, useEffect, useContext, useMemo, useCallback, useRef, useReducer, useTransition, useDeferredValue, useId, Suspense, StrictMode, Fragment, memo, createContext } = React;
      class LegacyGreeting extends React.Component {
        render() {
          return <p className="badge">Hello {this.props.name} from a class component.</p>;
        }
      }
      function App() {
        return (
          <section className="card">
            <h1>Legacy React APIs</h1>
            <LegacyGreeting name="React" />
          </section>
        );
      }
      ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    </script>
  </body>
</html>
```

## نکته‌های رسمی و runtime

- در APIهای Legacy در React، caveatهای official را با نسخه React، mode توسعه مثل StrictMode و test واقعی مقایسه کنید.
- اگر API مربوط به server، Compiler یا legacy است، قبل از استفاده production وضعیت پشتیبانی framework خود را بررسی کنید.
- برای code production، متن react.dev را با accessibility، performance و regression test تکمیل کنید.

## گام بعدی

بعد از پایان این track، یک صفحه reference را باز کنید و behavior آن را در browser تست کنید.
