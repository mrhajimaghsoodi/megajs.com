#!/usr/bin/env node
/**
 * Seeds Learning Docs content folders (one folder per technology).
 * Structure mirrors MDN / W3Schools / official docs TOCs; FA is RTL-ready fluent Persian.
 */
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '../apps/web/content/docs');

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function write(file, content) {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, content.trimStart());
}

function page(title, description, order, sources, body) {
  const src =
    sources
      ?.map((s) => `  - name: ${s.name}\n    url: ${s.url}`)
      .join('\n') ?? '';
  return `---
title: "${title}"
description: "${description}"
order: ${order}
sources:
${src}
---

${body.trim()}
`;
}

const techs = [
  {
    id: 'html',
    order: 10,
    title: { fa: 'HTML', en: 'HTML' },
    description: {
      fa: 'ساختار صفحات وب — ترکیبی از MDN، W3Schools و WHATWG HTML Living Standard.',
      en: 'Document structure for the web — synthesized from MDN, W3Schools, and WHATWG.',
    },
    sources: [
      { name: 'MDN HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'W3Schools HTML', url: 'https://www.w3schools.com/html/' },
      { name: 'WHATWG HTML', url: 'https://html.spec.whatwg.org/' },
    ],
    nav: [
      { slug: 'introduction', title: { fa: 'مقدمه', en: 'Introduction' } },
      { slug: 'elements', title: { fa: 'عناصر و تگ‌ها', en: 'Elements & tags' } },
      { slug: 'forms', title: { fa: 'فرم‌ها', en: 'Forms' } },
      { slug: 'semantics', title: { fa: 'معناشناسی (Semantic)', en: 'Semantics' } },
      { slug: 'media', title: { fa: 'رسانه و تصویر', en: 'Media & images' } },
      { slug: 'accessibility', title: { fa: 'دسترس‌پذیری', en: 'Accessibility' } },
    ],
    pages: {
      introduction: {
        en: {
          title: 'Introduction to HTML',
          description: 'What HTML is and how documents are structured.',
          body: `# Introduction to HTML

HTML (HyperText Markup Language) describes the **structure** of web pages. Browsers parse HTML into a DOM tree and paint UI.

## Document skeleton

\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>
\`\`\`

## Core ideas

- **Elements** wrap content with opening/closing tags (\`<p>…</p>\`).
- **Attributes** configure elements (\`href\`, \`src\`, \`alt\`, \`class\`).
- Prefer **semantic** tags (\`<main>\`, \`<nav>\`, \`<article>\`) over anonymous \`<div>\` soup.

> Structure synthesized from MDN HTML overview and W3Schools HTML intro.`,
        },
        fa: {
          title: 'مقدمه HTML',
          description: 'HTML چیست و ساختار سند وب چگونه شکل می‌گیرد.',
          body: `# مقدمه HTML

HTML (HyperText Markup Language) **ساختار** صفحه وب را توصیف می‌کند. مرورگر HTML را به درخت DOM تبدیل و UI را رسم می‌کند.

## اسکلت سند

\`\`\`html
<!DOCTYPE html>
<html lang="fa" dir="rtl">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>سند</title>
  </head>
  <body>
    <h1>سلام</h1>
  </body>
</html>
\`\`\`

## مفاهیم اصلی

- **Element** محتوا را با تگ باز/بسته محصور می‌کند (\`<p>…</p>\`).
- **Attribute** رفتار عنصر را تنظیم می‌کند (\`href\`، \`src\`، \`alt\`، \`class\`).
- به‌جای انبوه \`div\`، از تگ‌های **semantic** مثل \`<main>\`، \`<nav>\` و \`<article>\` استفاده کنید.

> ساختار این صفحه با ترکیب نمای کلی MDN و مقدمه W3Schools نوشته شده است.`,
        },
      },
      elements: {
        en: {
          title: 'Elements & tags',
          description: 'Headings, text, lists, links, and nesting rules.',
          body: `# Elements & tags

## Text content

| Tag | Role |
| --- | --- |
| \`h1\`–\`h6\` | Headings (one primary \`h1\` per page is a strong default) |
| \`p\` | Paragraph |
| \`a\` | Hyperlink (\`href\`) |
| \`ul\` / \`ol\` / \`li\` | Lists |
| \`strong\` / \`em\` | Importance / stress emphasis |

## Nesting

Elements must nest correctly — close inner tags before outer ones.

\`\`\`html
<article>
  <h2>Title</h2>
  <p>Read the <a href="/docs/css">CSS</a> guide next.</p>
</article>
\`\`\`
`,
        },
        fa: {
          title: 'عناصر و تگ‌ها',
          description: 'عنوان‌ها، متن، لیست، لینک و قوانین تو در تو بودن.',
          body: `# عناصر و تگ‌ها

## محتوای متنی

| تگ | نقش |
| --- | --- |
| \`h1\` تا \`h6\` | عنوان‌ها (معمولاً یک \`h1\` اصلی در هر صفحه) |
| \`p\` | پاراگراف |
| \`a\` | لینک (\`href\`) |
| \`ul\` / \`ol\` / \`li\` | فهرست |
| \`strong\` / \`em\` | اهمیت / تأکید |

## Nesting

عناصر باید درست تو در تو شوند — اول تگ داخلی بسته شود.

\`\`\`html
<article>
  <h2>عنوان</h2>
  <p>بعد سراغ راهنمای <a href="/fa/docs/css">CSS</a> بروید.</p>
</article>
\`\`\`
`,
        },
      },
      forms: {
        en: {
          title: 'Forms',
          description: 'Inputs, labels, validation attributes.',
          body: `# Forms

\`\`\`html
<form action="/api/subscribe" method="post">
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required autocomplete="email" />
  <button type="submit">Subscribe</button>
</form>
\`\`\`

Always associate \`<label>\` with controls. Use native types (\`email\`, \`url\`, \`number\`) before custom widgets.
`,
        },
        fa: {
          title: 'فرم‌ها',
          description: 'ورودی‌ها، label و attributeهای اعتبارسنجی.',
          body: `# فرم‌ها

\`\`\`html
<form action="/api/subscribe" method="post">
  <label for="email">ایمیل</label>
  <input id="email" name="email" type="email" required autocomplete="email" />
  <button type="submit">عضویت</button>
</form>
\`\`\`

همیشه \`<label>\` را به کنترل وصل کنید. قبل از ویجت سفارشی، از typeهای بومی مثل \`email\` و \`number\` استفاده کنید.
`,
        },
      },
      semantics: {
        en: {
          title: 'Semantics',
          description: 'Landmark regions and meaningful markup.',
          body: `# Semantics

Prefer landmarks: \`header\`, \`nav\`, \`main\`, \`aside\`, \`footer\`, \`section\`, \`article\`.

Screen readers and SEO systems rely on this structure — not on CSS class names.
`,
        },
        fa: {
          title: 'معناشناسی (Semantic HTML)',
          description: 'نواحی landmark و نشانه‌گذاری معنادار.',
          body: `# معناشناسی (Semantic)

از landmarkها استفاده کنید: \`header\`، \`nav\`، \`main\`، \`aside\`، \`footer\`، \`section\`، \`article\`.

Screen readerها و سیستم‌های SEO به این ساختار تکیه می‌کنند — نه به نام کلاس CSS.
`,
        },
      },
      media: {
        en: {
          title: 'Media & images',
          description: 'img, picture, video, and responsive assets.',
          body: `# Media & images

\`\`\`html
<img src="/hero.jpg" alt="Developer learning path timeline" width="1200" height="630" />
\`\`\`

Provide meaningful \`alt\` text. Use \`<picture>\` / \`srcset\` for responsive images and \`<video controls>\` for self-hosted media.
`,
        },
        fa: {
          title: 'رسانه و تصویر',
          description: 'img، picture، video و دارایی‌های واکنش‌گرا.',
          body: `# رسانه و تصویر

\`\`\`html
<img src="/hero.jpg" alt="تایملاین مسیر یادگیری" width="1200" height="630" />
\`\`\`

\`alt\` معنادار بنویسید. برای تصویر واکنش‌گرا از \`<picture>\` / \`srcset\` و برای ویدیوی اختصاصی از \`<video controls>\` استفاده کنید.
`,
        },
      },
      accessibility: {
        en: {
          title: 'Accessibility',
          description: 'Keyboard, ARIA, and inclusive defaults.',
          body: `# Accessibility

- Ensure visible focus styles.
- Do not remove button semantics with clickable \`div\`s.
- Use ARIA only when native HTML is insufficient.

Start with correct HTML — ARIA cannot fix a broken outline.
`,
        },
        fa: {
          title: 'دسترس‌پذیری',
          description: 'کیبورد، ARIA و پیش‌فرض‌های فراگیر.',
          body: `# دسترس‌پذیری

- استایل focus را حذف نکنید.
- به‌جای \`div\` قابل کلیک، از \`button\` / \`a\` استفاده کنید.
- ARIA را فقط وقتی HTML بومی کافی نیست اضافه کنید.

اول HTML درست بنویسید — ARIA ساختار خراب را درست نمی‌کند.
`,
        },
      },
    },
  },
  {
    id: 'css',
    order: 20,
    title: { fa: 'CSS', en: 'CSS' },
    description: {
      fa: 'استایل، Layout و انیمیشن — MDN + W3Schools + CSS Specs.',
      en: 'Styling, layout, and motion — MDN + W3Schools + CSS specs.',
    },
    sources: [
      { name: 'MDN CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'W3Schools CSS', url: 'https://www.w3schools.com/css/' },
      { name: 'CSS Specifications', url: 'https://www.w3.org/Style/CSS/' },
    ],
    nav: [
      { slug: 'introduction', title: { fa: 'مقدمه', en: 'Introduction' } },
      { slug: 'selectors', title: { fa: 'سلکتورها', en: 'Selectors' } },
      { slug: 'box-model', title: { fa: 'Box Model', en: 'Box model' } },
      { slug: 'flexbox', title: { fa: 'Flexbox', en: 'Flexbox' } },
      { slug: 'grid', title: { fa: 'Grid', en: 'Grid' } },
      { slug: 'responsive', title: { fa: 'واکنش‌گرایی', en: 'Responsive' } },
    ],
    pages: {
      introduction: {
        en: {
          title: 'Introduction to CSS',
          description: 'Cascade, specificity, and applying styles.',
          body: `# Introduction to CSS

CSS (Cascading Style Sheets) controls presentation: color, typography, layout, and motion.

\`\`\`css
:root {
  --brand: #ffd400;
}
body {
  font-family: system-ui, sans-serif;
  color: #1a1a1a;
}
\`\`\`

The **cascade** resolves conflicts using origin, importance, specificity, and source order.
`,
        },
        fa: {
          title: 'مقدمه CSS',
          description: 'Cascade، specificity و اعمال استایل.',
          body: `# مقدمه CSS

CSS (Cascading Style Sheets) ظاهر را کنترل می‌کند: رنگ، تایپوگرافی، layout و حرکت.

\`\`\`css
:root {
  --brand: #ffd400;
}
body {
  font-family: Vazirmatn, system-ui, sans-serif;
  color: #1a1a1a;
  direction: rtl;
}
\`\`\`

**Cascade** تعارض‌ها را با origin، importance، specificity و ترتیب منبع حل می‌کند.
`,
        },
      },
      selectors: {
        en: {
          title: 'Selectors',
          description: 'Type, class, id, combinators, and pseudo-classes.',
          body: `# Selectors

\`\`\`css
article p { }
.card { }
#hero { }
a:hover { }
button:focus-visible { }
\`\`\`

Prefer class selectors for reusable UI. Reserve IDs for unique landmarks or JS hooks.
`,
        },
        fa: {
          title: 'سلکتورها',
          description: 'نوع، class، id، ترکیب‌کننده‌ها و pseudo-classها.',
          body: `# سلکتورها

\`\`\`css
article p { }
.card { }
#hero { }
a:hover { }
button:focus-visible { }
\`\`\`

برای UI قابل‌استفاده مجدد، class را ترجیح دهید. id را برای landmark یکتا یا hook جاوااسکریپت نگه دارید.
`,
        },
      },
      'box-model': {
        en: {
          title: 'Box model',
          description: 'content, padding, border, margin.',
          body: `# Box model

Every element is a box: **content → padding → border → margin**.

Use \`box-sizing: border-box\` globally so \`width\` includes padding and border.
`,
        },
        fa: {
          title: 'Box Model',
          description: 'content، padding، border و margin.',
          body: `# Box Model

هر عنصر یک جعبه است: **content ← padding ← border ← margin**.

\`box-sizing: border-box\` را سراسری بگذارید تا \`width\` شامل padding و border شود.
`,
        },
      },
      flexbox: {
        en: {
          title: 'Flexbox',
          description: 'One-dimensional layout.',
          body: `# Flexbox

\`\`\`css
.row {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
}
\`\`\`

Flex is ideal for toolbars, nav rows, and distributing space on one axis.
`,
        },
        fa: {
          title: 'Flexbox',
          description: 'چیدمان یک‌بعدی.',
          body: `# Flexbox

\`\`\`css
.row {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
}
\`\`\`

Flex برای نوار ابزار، ردیف nav و پخش فضا روی یک محور عالی است.
`,
        },
      },
      grid: {
        en: {
          title: 'CSS Grid',
          description: 'Two-dimensional layout.',
          body: `# CSS Grid

\`\`\`css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1.5rem;
}
\`\`\`
`,
        },
        fa: {
          title: 'CSS Grid',
          description: 'چیدمان دوبعدی.',
          body: `# CSS Grid

\`\`\`css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 1.5rem;
}
\`\`\`
`,
        },
      },
      responsive: {
        en: {
          title: 'Responsive design',
          description: 'Media queries and fluid type.',
          body: `# Responsive design

\`\`\`css
@media (min-width: 768px) {
  .sidebar { display: block; }
}
\`\`\`

Design mobile-first. Combine fluid units (\`%\`, \`rem\`, \`clamp()\`) with breakpoints.
`,
        },
        fa: {
          title: 'طراحی واکنش‌گرا',
          description: 'Media query و تایپوگرافی سیال.',
          body: `# طراحی واکنش‌گرا

\`\`\`css
@media (min-width: 768px) {
  .sidebar { display: block; }
}
\`\`\`

Mobile-first کار کنید. واحدهای سیال (\`%\`، \`rem\`، \`clamp()\`) را با breakpoint ترکیب کنید.
`,
        },
      },
    },
  },
];

// Additional techs defined compactly
const more = [
  ['javascript', 30, 'JavaScript', 'JS language core — MDN + ECMA-262 + W3Schools', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', ['introduction', 'types', 'functions', 'objects', 'async', 'dom']],
  ['typescript', 40, 'TypeScript', 'Typed JavaScript — TypeScript Handbook + MDN', 'https://www.typescriptlang.org/docs/', ['introduction', 'types', 'interfaces', 'generics', 'narrowing', 'modules']],
  ['tailwind', 50, 'Tailwind CSS', 'Utility-first CSS — Official Tailwind docs', 'https://tailwindcss.com/docs', ['introduction', 'utility-first', 'layout', 'responsive', 'customization', 'dark-mode']],
  ['react', 60, 'React', 'UI library — react.dev + MDN', 'https://react.dev/learn', ['introduction', 'components', 'props-state', 'hooks', 'effects', 'lists-keys']],
  ['nextjs', 70, 'Next.js', 'React framework — nextjs.org/docs', 'https://nextjs.org/docs', ['introduction', 'app-router', 'routing', 'data-fetching', 'server-components', 'deployment']],
  ['vue', 80, 'Vue.js', 'Progressive framework — vuejs.org', 'https://vuejs.org/guide/introduction.html', ['introduction', 'template-syntax', 'reactivity', 'components', 'composition-api', 'routing']],
  ['angular', 90, 'Angular', 'Platform framework — angular.dev', 'https://angular.dev/overview', ['introduction', 'components', 'templates', 'dependency-injection', 'signals', 'routing']],
  ['nodejs', 100, 'Node.js', 'JS runtime — nodejs.org/docs', 'https://nodejs.org/docs/latest/api/', ['introduction', 'modules', 'fs-path', 'http', 'events', 'npm']],
  ['nestjs', 110, 'NestJS', 'Node framework — docs.nestjs.com', 'https://docs.nestjs.com', ['introduction', 'modules', 'controllers', 'providers', 'pipes-guards', 'prisma']],
  ['electron', 120, 'Electron', 'Desktop apps — electronjs.org/docs', 'https://www.electronjs.org/docs/latest', ['introduction', 'main-renderer', 'ipc', 'packaging', 'security', 'native']],
  ['react-native', 130, 'React Native', 'Mobile — reactnative.dev', 'https://reactnative.dev/docs/getting-started', ['introduction', 'components', 'styling', 'navigation', 'native-modules', 'publishing']],
  ['axios', 200, 'Axios', 'HTTP client — axios docs', 'https://axios-http.com/docs/intro', ['introduction', 'requests', 'instances', 'interceptors', 'errors']],
  ['lodash', 210, 'Lodash', 'Utility library — lodash.com/docs', 'https://lodash.com/docs', ['introduction', 'collections', 'objects', 'fp']],
  ['express', 220, 'Express', 'Node web framework — expressjs.com', 'https://expressjs.com/', ['introduction', 'routing', 'middleware', 'error-handling']],
  ['jest', 230, 'Jest', 'Testing — jestjs.io', 'https://jestjs.io/docs/getting-started', ['introduction', 'matchers', 'async', 'mocking']],
  ['redux', 240, 'Redux', 'State container — redux.js.org', 'https://redux.js.org/introduction/getting-started', ['introduction', 'store', 'toolkit', 'async']],
  ['zustand', 250, 'Zustand', 'Small state store — docs', 'https://docs.pmnd.rs/zustand/getting-started/introduction', ['introduction', 'store', 'typescript', 'patterns']],
  ['tanstack-query', 260, 'TanStack Query', 'Async state — tanstack.com/query', 'https://tanstack.com/query/latest/docs/framework/react/overview', ['introduction', 'queries', 'mutations', 'caching']],
];

const topicTitles = {
  introduction: { fa: 'مقدمه', en: 'Introduction' },
  types: { fa: 'انواع داده', en: 'Types' },
  functions: { fa: 'توابع', en: 'Functions' },
  objects: { fa: 'اشیاء', en: 'Objects' },
  async: { fa: 'Async / Promise', en: 'Async / Promises' },
  dom: { fa: 'DOM', en: 'DOM' },
  interfaces: { fa: 'Interfaceها', en: 'Interfaces' },
  generics: { fa: 'Generics', en: 'Generics' },
  narrowing: { fa: 'Type Narrowing', en: 'Narrowing' },
  modules: { fa: 'ماژول‌ها', en: 'Modules' },
  'utility-first': { fa: 'Utility-first', en: 'Utility-first' },
  layout: { fa: 'Layout', en: 'Layout' },
  responsive: { fa: 'واکنش‌گرا', en: 'Responsive' },
  customization: { fa: 'سفارشی‌سازی', en: 'Customization' },
  'dark-mode': { fa: 'حالت تاریک', en: 'Dark mode' },
  components: { fa: 'کامپوننت‌ها', en: 'Components' },
  'props-state': { fa: 'Props و State', en: 'Props & state' },
  hooks: { fa: 'Hooks', en: 'Hooks' },
  effects: { fa: 'Effects', en: 'Effects' },
  'lists-keys': { fa: 'لیست و Keys', en: 'Lists & keys' },
  'app-router': { fa: 'App Router', en: 'App Router' },
  routing: { fa: 'مسیریابی', en: 'Routing' },
  'data-fetching': { fa: 'واکشی داده', en: 'Data fetching' },
  'server-components': { fa: 'Server Components', en: 'Server Components' },
  deployment: { fa: 'استقرار', en: 'Deployment' },
  'template-syntax': { fa: 'Syntax قالب', en: 'Template syntax' },
  reactivity: { fa: 'Reactive', en: 'Reactivity' },
  'composition-api': { fa: 'Composition API', en: 'Composition API' },
  templates: { fa: 'Templateها', en: 'Templates' },
  'dependency-injection': { fa: 'Dependency Injection', en: 'Dependency injection' },
  signals: { fa: 'Signals', en: 'Signals' },
  'fs-path': { fa: 'fs و path', en: 'fs & path' },
  http: { fa: 'HTTP', en: 'HTTP' },
  events: { fa: 'Events', en: 'Events' },
  npm: { fa: 'npm', en: 'npm' },
  controllers: { fa: 'Controllerها', en: 'Controllers' },
  providers: { fa: 'Providerها', en: 'Providers' },
  'pipes-guards': { fa: 'Pipes و Guards', en: 'Pipes & guards' },
  prisma: { fa: 'Prisma', en: 'Prisma' },
  'main-renderer': { fa: 'Main و Renderer', en: 'Main & renderer' },
  ipc: { fa: 'IPC', en: 'IPC' },
  packaging: { fa: 'Packaging', en: 'Packaging' },
  security: { fa: 'امنیت', en: 'Security' },
  native: { fa: 'Native', en: 'Native' },
  styling: { fa: 'استایل', en: 'Styling' },
  navigation: { fa: 'Navigation', en: 'Navigation' },
  'native-modules': { fa: 'Native Modules', en: 'Native modules' },
  publishing: { fa: 'انتشار', en: 'Publishing' },
  requests: { fa: 'Requestها', en: 'Requests' },
  instances: { fa: 'Instanceها', en: 'Instances' },
  interceptors: { fa: 'Interceptorها', en: 'Interceptors' },
  errors: { fa: 'خطاها', en: 'Errors' },
  collections: { fa: 'Collectionها', en: 'Collections' },
  fp: { fa: 'FP', en: 'FP helpers' },
  middleware: { fa: 'Middleware', en: 'Middleware' },
  'error-handling': { fa: 'مدیریت خطا', en: 'Error handling' },
  matchers: { fa: 'Matcherها', en: 'Matchers' },
  mocking: { fa: 'Mocking', en: 'Mocking' },
  store: { fa: 'Store', en: 'Store' },
  toolkit: { fa: 'Redux Toolkit', en: 'Redux Toolkit' },
  typescript: { fa: 'TypeScript', en: 'TypeScript' },
  patterns: { fa: 'الگوها', en: 'Patterns' },
  queries: { fa: 'Queryها', en: 'Queries' },
  mutations: { fa: 'Mutationها', en: 'Mutations' },
  caching: { fa: 'Caching', en: 'Caching' },
  selectors: { fa: 'سلکتورها', en: 'Selectors' },
  'box-model': { fa: 'Box Model', en: 'Box model' },
  flexbox: { fa: 'Flexbox', en: 'Flexbox' },
  grid: { fa: 'Grid', en: 'Grid' },
};

function sampleBody(name, slug, locale) {
  if (locale === 'en') {
    return `# ${topicTitles[slug]?.en || slug}

This page is part of the **${name}** documentation track on MEGA JS.

It follows the same topic order you find on the official docs and complementary references (MDN / W3Schools where applicable), rewritten for clarity.

## What you will learn

- Core concepts for **${topicTitles[slug]?.en || slug}**
- Practical code samples you can paste and adapt
- Notes that keep specialized terms in English when that is clearer

\`\`\`js
// Example placeholder — expand per topic in this folder
console.log('${name} / ${slug}');
\`\`\`

> Edit only the files under \`content/docs/${name.toLowerCase().replace(/\\.js$/,'')}/\` to change this technology independently.
`;
  }
  return `# ${topicTitles[slug]?.fa || slug}

این صفحه بخشی از مسیر مستندات **${name}** در MEGA JS است.

ترتیب موضوعات مشابه سایت مرجع (docs رسمی و در صورت نیاز MDN / W3Schools) حفظ شده و متن به فارسی روان بازنویسی شده است؛ اصطلاحات تخصصی در صورت نیاز انگلیسی مانده‌اند.

## چه چیزی یاد می‌گیرید

- مفاهیم اصلی **${topicTitles[slug]?.en || slug}**
- نمونه کد قابل کپی و تطبیق
- توضیحاتی که برای FA به‌صورت راست‌چین (\`dir="rtl"\`) نمایش داده می‌شوند

\`\`\`js
// نمونه — این فایل را در پوشه همین تکنولوژی گسترش دهید
console.log('${name} / ${slug}');
\`\`\`

> برای تغییر مستقل این تکنولوژی، فقط فایل‌های داخل پوشه خودش را ویرایش کنید.
`;
}

// Write HTML & CSS fully defined above
for (const tech of techs) {
  const dir = path.join(ROOT, tech.id);
  write(
    path.join(dir, 'meta.json'),
    JSON.stringify(
      {
        id: tech.id,
        order: tech.order,
        title: tech.title,
        description: tech.description,
        sources: tech.sources,
        nav: tech.nav,
      },
      null,
      2,
    ) + '\n',
  );
  for (const [slug, langs] of Object.entries(tech.pages)) {
    for (const locale of ['en', 'fa']) {
      const p = langs[locale];
      write(
        path.join(dir, locale, `${slug}.md`),
        page(p.title, p.description, tech.nav.findIndex((n) => n.slug === slug) + 1, tech.sources, p.body),
      );
    }
  }
}

for (const [id, order, name, desc, url, slugs] of more) {
  const dir = path.join(ROOT, id);
  const title = { fa: name, en: name };
  const description = {
    fa: `${desc} — ساختار مشابه docs مرجع؛ ترجمه فارسی روان.`,
    en: `${desc} — structure aligned with official docs.`,
  };
  const sources = [
    { name: `${name} Docs`, url },
    { name: 'MDN', url: 'https://developer.mozilla.org/' },
    { name: 'W3Schools', url: 'https://www.w3schools.com/' },
  ];
  const nav = slugs.map((slug) => ({
    slug,
    title: topicTitles[slug] || { fa: slug, en: slug },
  }));
  write(
    path.join(dir, 'meta.json'),
    JSON.stringify({ id, order, title, description, sources, nav }, null, 2) + '\n',
  );
  slugs.forEach((slug, i) => {
    for (const locale of ['en', 'fa']) {
      const t = topicTitles[slug] || { fa: slug, en: slug };
      const titlePage = locale === 'en' ? `${name}: ${t.en}` : `${name}: ${t.fa}`;
      write(
        path.join(dir, locale, `${slug}.md`),
        page(
          titlePage,
          locale === 'en' ? `${name} — ${t.en}` : `${name} — ${t.fa}`,
          i + 1,
          sources,
          sampleBody(name, slug, locale),
        ),
      );
    }
  });
}

console.log('Seeded docs into', ROOT);
