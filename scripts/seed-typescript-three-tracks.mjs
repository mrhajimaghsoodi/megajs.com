import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_ROOT = path.join(ROOT, 'apps/web/content/docs/typescript');
const LOCALES = ['fa', 'en'];

const SOURCE_W3 = {
  name: 'W3Schools TypeScript Tutorial',
  url: 'https://www.w3schools.com/typescript/index.php',
};
const SOURCE_MDN = {
  name: 'MDN Web Docs - JavaScript',
  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
};
const SOURCE_MDN_TYPES = {
  name: 'MDN JavaScript Guide - Data types',
  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures',
};
const SOURCE_TS = {
  name: 'TypeScript Docs',
  url: 'https://www.typescriptlang.org/docs/',
};
const SOURCE_TS_HANDBOOK = {
  name: 'TypeScript Handbook',
  url: 'https://www.typescriptlang.org/docs/handbook/intro.html',
};

const TRACK_SOURCES = {
  learn: [SOURCE_W3],
  reference: [SOURCE_MDN, SOURCE_MDN_TYPES],
  official: [SOURCE_TS, SOURCE_TS_HANDBOOK],
};

function t(syntax, en, fa) {
  return { syntax, en, fa };
}

function page(slug, enTitle, faTitle, enFocus, faFocus, terms = termsFor(slug, enTitle, faTitle), keywords = keywordsFor(slug, enTitle)) {
  return { slug, enTitle, faTitle, enFocus, faFocus, terms, keywords };
}

const LEARN_INTRO = page(
  'introduction',
  'TypeScript Intro',
  'مقدمه TypeScript',
  'what TypeScript adds to JavaScript, why static types help authors, and how this W3Schools-style path is organized',
  'اینکه TypeScript چه چیزی به JavaScript اضافه می‌کند، چرا static type به author کمک می‌کند و این مسیر W3Schools-style چگونه چیده شده است',
  [
    t('TypeScript', 'JavaScript with static type checking', 'JavaScript همراه static type checking'),
    t('type annotation', 'syntax that declares the expected shape of a value', 'syntax برای اعلام شکل مورد انتظار یک value'),
    t('ts.transpileModule()', 'browser demo helper that compiles TypeScript to JavaScript', 'helper نمایشی مرورگر که TypeScript را به JavaScript compile می‌کند'),
  ],
  ['TypeScript introduction', 'TypeScript tutorial', 'W3Schools TypeScript'],
);

const LEARN_SECTIONS = [
  section('getting-started', 'TypeScript Getting Started', 'شروع کار با TypeScript', 'installing TypeScript, running a first typed file, and understanding simple type feedback', 'نصب TypeScript، اجرای اولین فایل typed و فهم feedback ساده type', [
    ['get-started', 'TypeScript Get Started', 'شروع سریع TypeScript', 'creating a small TypeScript file, compiling it, and seeing JavaScript output', 'ساخت یک فایل کوچک TypeScript، compile کردن آن و دیدن خروجی JavaScript'],
    ['simple-types', 'TypeScript Simple Types', 'Typeهای ساده در TypeScript', 'using string, number, boolean, bigint, symbol, null, and undefined annotations', 'استفاده از annotationهای string، number، boolean، bigint، symbol، null و undefined'],
    ['explicit-inference', 'Explicit Types and Inference', 'Type صریح و Inference', 'choosing between explicit annotations and compiler inference', 'انتخاب بین annotation صریح و inference توسط compiler'],
    ['special-types', 'TypeScript Special Types', 'Typeهای ویژه در TypeScript', 'using any, unknown, never, void, and undefined intentionally', 'استفاده آگاهانه از any، unknown، never، void و undefined'],
  ]),
  section('collections-objects', 'Collections and Objects', 'Collection و Objectها', 'typing arrays, tuples, object shapes, and enums without losing JavaScript runtime behavior', 'type کردن array، tuple، شکل object و enum بدون از دست دادن رفتار runtime در JavaScript', [
    ['arrays', 'TypeScript Arrays', 'Arrayها در TypeScript', 'typing homogeneous arrays and read-only array APIs', 'type کردن arrayهای همگن و APIهای readonly برای array'],
    ['tuples', 'TypeScript Tuples', 'Tupleها در TypeScript', 'modeling fixed-length ordered data with precise element positions', 'مدل کردن data مرتب با طول ثابت و position دقیق هر element'],
    ['object-types', 'TypeScript Object Types', 'Object Typeها در TypeScript', 'describing object properties, optional fields, readonly fields, and nested shapes', 'توصیف propertyهای object، field اختیاری، field readonly و شکل‌های nested'],
    ['enums', 'TypeScript Enums', 'Enumها در TypeScript', 'choosing enum, const enum, or union literals for named choices', 'انتخاب enum، const enum یا union literal برای choiceهای نام‌دار'],
  ]),
  section('aliases-unions-functions', 'Aliases, Unions, and Functions', 'Alias، Union و Functionها', 'authoring reusable type names, variant values, function signatures, and assertions', 'author کردن نام type قابل استفاده مجدد، valueهای variant، signature تابع و assertion', [
    ['aliases-interfaces', 'Type Aliases and Interfaces', 'Type Alias و Interface', 'choosing interface or type alias for reusable shapes and public contracts', 'انتخاب interface یا type alias برای شکل‌های قابل استفاده مجدد و contract عمومی'],
    ['union-types', 'TypeScript Union Types', 'Union Typeها در TypeScript', 'allowing controlled alternatives while narrowing before use', 'اجازه دادن به alternative کنترل‌شده و narrowing پیش از استفاده'],
    ['functions', 'TypeScript Functions', 'Functionها در TypeScript', 'typing parameters, return values, callbacks, overloads, and optional inputs', 'type کردن parameter، return value، callback، overload و input اختیاری'],
    ['casting', 'TypeScript Casting', 'Casting در TypeScript', 'using assertion syntax when the compiler cannot infer a trusted type', 'استفاده از syntax assertion وقتی compiler نمی‌تواند type مطمئن را infer کند'],
  ]),
  section('oop-generics', 'OOP and Generics', 'OOP و Generics', 'typing classes, reusable generic helpers, utility types, keyof, and nullability', 'type کردن class، helperهای generic قابل استفاده مجدد، utility types، keyof و nullability', [
    ['classes', 'TypeScript Classes', 'Classها در TypeScript', 'using fields, constructors, access modifiers, implements, and inheritance', 'استفاده از field، constructor، access modifier، implements و inheritance'],
    ['basic-generics', 'TypeScript Basic Generics', 'Generics پایه در TypeScript', 'writing reusable functions and containers with type parameters', 'نوشتن function و container قابل استفاده مجدد با type parameter'],
    ['utility-types', 'TypeScript Utility Types', 'Utility Typeها در TypeScript', 'using Partial, Pick, Omit, Record, ReturnType, and related helpers', 'استفاده از Partial، Pick، Omit، Record، ReturnType و helperهای مرتبط'],
    ['keyof-op', 'TypeScript keyof', 'عملگر keyof در TypeScript', 'deriving property-name unions from object types', 'ساخت union از نام propertyها بر اساس object type'],
    ['nullables', 'TypeScript Null', 'Null در TypeScript', 'handling null and undefined under strictNullChecks', 'مدیریت null و undefined زیر strictNullChecks'],
  ]),
  section('tooling-ecosystem', 'Tooling and Ecosystem', 'Tooling و Ecosystem', 'using Definitely Typed, TypeScript 5 updates, configuration, Node.js, React, and editor tooling', 'استفاده از Definitely Typed، updateهای TypeScript 5، configuration، Node.js، React و tooling ادیتور', [
    ['definitely-typed', 'Definitely Typed', 'Definitely Typed', 'installing community declaration packages for untyped JavaScript libraries', 'نصب declaration packageهای community برای libraryهای JavaScript بدون type'],
    ['ts5-updates', 'TypeScript 5 Updates', 'Updateهای TypeScript 5', 'recognizing modern TypeScript 5 features and migration considerations', 'شناخت featureهای مدرن TypeScript 5 و نکته‌های migration'],
    ['configuration', 'TypeScript Configuration', 'Configuration در TypeScript', 'setting compiler behavior with tsconfig.json and strict options', 'تنظیم رفتار compiler با tsconfig.json و optionهای strict'],
    ['with-nodejs', 'TypeScript with Node.js', 'TypeScript با Node.js', 'running TypeScript in Node.js projects with modules and build tools', 'اجرای TypeScript در پروژه‌های Node.js همراه module و ابزار build'],
    ['with-react', 'TypeScript with React', 'TypeScript با React', 'typing props, events, hooks, JSX, and reusable React component APIs', 'type کردن props، event، hook، JSX و APIهای component قابل استفاده مجدد React'],
    ['tooling', 'TypeScript Tooling', 'Tooling در TypeScript', 'using language service feedback, editor hints, linting, formatting, and build checks', 'استفاده از feedback language service، hint ادیتور، lint، format و build check'],
  ]),
  section('advanced', 'Advanced TypeScript', 'TypeScript پیشرفته', 'using advanced type operations, guards, inference, declarations, decorators, migration, and best practices', 'استفاده از operationهای type پیشرفته، guard، inference، declaration، decorator، migration و best practice', [
    ['advanced-types', 'TypeScript Advanced Types', 'Typeهای پیشرفته در TypeScript', 'combining union, intersection, literal, indexed, mapped, and conditional types', 'ترکیب union، intersection، literal، indexed، mapped و conditional type'],
    ['type-guards', 'TypeScript Type Guards', 'Type Guardها در TypeScript', 'narrowing values with typeof, instanceof, in, predicates, and control flow', 'narrow کردن value با typeof، instanceof، in، predicate و control flow'],
    ['conditional-types', 'TypeScript Conditional Types', 'Conditional Typeها در TypeScript', 'selecting types with extends checks and infer clauses', 'انتخاب type با checkهای extends و clauseهای infer'],
    ['mapped-types', 'TypeScript Mapped Types', 'Mapped Typeها در TypeScript', 'transforming object keys and modifiers into new type shapes', 'تبدیل key و modifierهای object به شکل type جدید'],
    ['type-inference', 'TypeScript Type Inference', 'Type Inference در TypeScript', 'understanding contextual typing, generic inference, and widening', 'درک contextual typing، generic inference و widening'],
    ['literal-types', 'TypeScript Literal Types', 'Literal Typeها در TypeScript', 'using exact string, number, boolean, and template literal values as types', 'استفاده از value دقیق string، number، boolean و template literal به عنوان type'],
    ['namespaces', 'TypeScript Namespaces', 'Namespaceها در TypeScript', 'organizing legacy global-style TypeScript code before modern modules', 'سازمان‌دهی code قدیمی TypeScript به سبک global پیش از module مدرن'],
    ['index-signatures', 'TypeScript Index Signatures', 'Index Signatureها در TypeScript', 'typing dictionary-like objects and dynamic property access', 'type کردن objectهای شبیه dictionary و دسترسی dynamic به property'],
    ['declaration-merging', 'Declaration Merging', 'Declaration Merging', 'understanding how interfaces, namespaces, and declarations can merge', 'درک اینکه interface، namespace و declaration چگونه merge می‌شوند'],
    ['async-programming', 'TypeScript Async', 'Async در TypeScript', 'typing Promise flows, async functions, rejected paths, and concurrency helpers', 'type کردن جریان Promise، async function، مسیر rejected و helperهای concurrency'],
    ['decorators', 'TypeScript Decorators', 'Decoratorها در TypeScript', 'reading decorator syntax, metadata expectations, and version caveats', 'خواندن syntax decorator، انتظارهای metadata و caveatهای version'],
    ['in-js-projects', 'TypeScript in JavaScript Projects', 'TypeScript در پروژه‌های JavaScript', 'checking JavaScript with allowJs, checkJs, and JSDoc types', 'check کردن JavaScript با allowJs، checkJs و JSDoc type'],
    ['migration', 'TypeScript Migration', 'Migration به TypeScript', 'moving JavaScript codebases to TypeScript incrementally and safely', 'انتقال تدریجی و امن codebaseهای JavaScript به TypeScript'],
    ['error-handling', 'TypeScript Error Handling', 'Error Handling در TypeScript', 'typing thrown values, Result-style returns, unknown errors, and recovery branches', 'type کردن thrown value، return به سبک Result، errorهای unknown و branchهای recovery'],
    ['best-practices', 'TypeScript Best Practices', 'Best Practiceهای TypeScript', 'keeping type design readable, strict, maintainable, and close to runtime facts', 'خوانا، strict، قابل نگه‌داری و نزدیک به واقعیت runtime نگه داشتن طراحی type'],
  ]),
];

const REFERENCE_PAGES = [
  page('overview', 'TypeScript Reference Overview', 'نمای کلی مرجع TypeScript', 'how an MDN-style TypeScript reference connects JavaScript runtime types to author-facing static types', 'اینکه یک مرجع TypeScript به سبک MDN چگونه typeهای runtime در JavaScript را به static typeهای author-facing وصل می‌کند', undefined, ['TypeScript reference', 'MDN TypeScript style', 'JavaScript types']),
  page('js-type-system', 'JavaScript Type System for TypeScript', 'Type System جاوااسکریپت برای TypeScript', 'JavaScript primitive types, object types, runtime tags, and what TypeScript can or cannot know', 'primitive typeها، object typeها، tagهای runtime در JavaScript و آنچه TypeScript می‌تواند یا نمی‌تواند بداند'),
  page('primitive-wrappers', 'Primitive Wrappers and TypeScript', 'Primitive Wrapperها و TypeScript', 'String, Number, Boolean wrappers, primitive annotations, and why lowercase types are preferred', 'wrapperهای String، Number، Boolean، annotationهای primitive و دلیل ترجیح typeهای lowercase'),
  page('typeof-instanceof', 'typeof and instanceof Reference', 'مرجع typeof و instanceof', 'using JavaScript runtime operators as TypeScript narrowing evidence', 'استفاده از operatorهای runtime در JavaScript به عنوان evidence برای narrowing در TypeScript'),
  page('equality-coercion', 'Equality, Coercion, and Types', 'Equality، Coercion و Typeها', 'strict equality, coercion boundaries, literal unions, and type-safe comparisons', 'strict equality، مرز coercion، union literal و comparison امن از نظر type'),
  page('objects-prototypes-types', 'Objects, Prototypes, and Static Types', 'Object، Prototype و Static Typeها', 'object shapes, prototype lookup, structural typing, and runtime property checks', 'شکل object، lookup در prototype، structural typing و check کردن property در runtime'),
  page('functions-signatures', 'Function Signatures Reference', 'مرجع Signatureهای Function', 'call signatures, callbacks, optional parameters, overloads, this parameters, and return types', 'call signature، callback، parameter اختیاری، overload، this parameter و return type'),
  page('classes-js-vs-ts', 'Classes in JavaScript vs TypeScript', 'Class در JavaScript در برابر TypeScript', 'class fields, constructors, visibility modifiers, implements clauses, and emitted JavaScript', 'fieldهای class، constructor، modifierهای visibility، clauseهای implements و JavaScript خروجی'),
  page('modules-esm', 'ES Modules and TypeScript', 'ES Module و TypeScript', 'import/export forms, type-only imports, module resolution, and browser or bundler behavior', 'شکل‌های import/export، import فقط برای type، module resolution و رفتار browser یا bundler'),
  page('iterators-typed', 'Iterators, Iterables, and Typed Collections', 'Iterator، Iterable و Collectionهای Typed', 'iterator protocols, generator return types, arrays, maps, sets, and readonly collection APIs', 'protocolهای iterator، return type برای generator، array، map، set و APIهای collection readonly'),
  page('errors-exceptions', 'Errors and Exceptions Typing', 'Type کردن Error و Exception', 'Error objects, unknown catch variables, thrown values, stack traces, and safe recovery branches', 'Error object، variableهای catch از نوع unknown، valueهای thrown، stack trace و branchهای recovery امن'),
  page('memory-gc-notes', 'Memory and GC Notes for Type Authors', 'نکته‌های Memory و GC برای Type Authorها', 'reachability, weak collections, object identity, closures, and why types do not change garbage collection', 'reachability، weak collection، identity object، closure و اینکه typeها garbage collection را تغییر نمی‌دهند'),
  page('web-apis-typing', 'Web APIs Typing Reference', 'مرجع Typeهای Web API', 'DOM lib declarations, fetch, events, storage, workers, and browser compatibility in typed code', 'declarationهای lib.dom، fetch، event، storage، worker و compatibility مرورگر در code typed'),
  page('dom-typing', 'DOM Typing Reference', 'مرجع Type کردن DOM', 'querySelector, HTMLElement narrowing, event targets, forms, dataset, and null checks', 'querySelector، narrowing برای HTMLElement، event target، form، dataset و null check'),
  page('json-data', 'JSON Data and TypeScript', 'JSON Data و TypeScript', 'parsing unknown JSON, validating runtime data, modeling DTOs, and avoiding unsafe assertions', 'parse کردن JSON از نوع unknown، validate کردن data در runtime، مدل کردن DTO و پرهیز از assertion ناامن'),
  page('async-promises-types', 'Async, Promises, and Types', 'Async، Promise و Typeها', 'Promise<T>, async return types, awaited values, rejection modeling, and concurrent helpers', 'Promise<T>، return type در async، valueهای awaited، مدل کردن rejection و helperهای concurrent'),
  page('symbols-bigint-types', 'Symbols, BigInt, and Unique Types', 'Symbol، BigInt و Typeهای Unique', 'symbol, unique symbol, bigint, literal numeric types, and runtime support boundaries', 'symbol، unique symbol، bigint، typeهای literal عددی و مرز پشتیبانی runtime'),
  page('cheatsheet', 'TypeScript MDN-style Cheatsheet', 'Cheatsheet مرجع TypeScript', 'a compact review of runtime types, narrowing, declarations, DOM typing, modules, and safe assertions', 'مرور فشرده runtime type، narrowing، declaration، type کردن DOM، module و assertion امن'),
];

const OFFICIAL_PAGES = [
  page('overview', 'Official TypeScript Docs Overview', 'نمای کلی مستندات رسمی TypeScript', 'how typescriptlang.org/docs organizes Get Started, Handbook, Reference, Modules, declarations, JS projects, and configuration', 'اینکه typescriptlang.org/docs چگونه Get Started، Handbook، Reference، Modules، declarationها، پروژه‌های JS و configuration را سازمان می‌دهد', undefined, ['TypeScript official docs', 'TypeScript handbook', 'typescriptlang']),
  page('get-started-js', 'Get Started with JavaScript Projects', 'شروع با پروژه‌های JavaScript', 'adding TypeScript checking to an existing JavaScript project', 'افزودن checkهای TypeScript به یک پروژه JavaScript موجود'),
  page('get-started-new', 'Get Started with a New TypeScript Project', 'شروع یک پروژه TypeScript جدید', 'creating a new TypeScript project with compiler settings and a first build', 'ساخت پروژه TypeScript جدید با تنظیمات compiler و اولین build'),
  page('get-started-tooling', 'Get Started with Tooling', 'شروع با Tooling', 'using editor integration, build tools, package scripts, and TypeScript language service feedback', 'استفاده از integration ادیتور، ابزار build، package script و feedback مربوط به TypeScript language service'),
  page('handbook-basics', 'Handbook Basics', 'Basics در Handbook', 'reading the Handbook foundation: values, types, annotations, and compiler feedback', 'خواندن پایه‌های Handbook: value، type، annotation و feedback compiler'),
  page('everyday-types', 'Everyday Types', 'Everyday Types', 'using common TypeScript annotations for primitives, arrays, objects, unions, aliases, and interfaces', 'استفاده از annotationهای رایج TypeScript برای primitive، array، object، union، alias و interface'),
  page('narrowing-official', 'Narrowing in the Handbook', 'Narrowing در Handbook', 'following official control-flow narrowing with typeof, truthiness, equality, in, instanceof, and predicates', 'دنبال کردن narrowing رسمی با control flow، typeof، truthiness، equality، in، instanceof و predicate'),
  page('functions-official', 'Functions in the Handbook', 'Functionها در Handbook', 'typing parameters, return values, call signatures, overloads, void, and function compatibility', 'type کردن parameter، return value، call signature، overload، void و compatibility تابع'),
  page('object-types-official', 'Object Types in the Handbook', 'Object Typeها در Handbook', 'typing properties, optional fields, readonly fields, index signatures, extension, and intersections', 'type کردن property، field اختیاری، field readonly، index signature، extension و intersection'),
  page('type-from-types', 'Creating Types from Types', 'ساخت Type از Typeها', 'deriving new types with keyof, typeof, indexed access, conditional, mapped, and template literal types', 'ساخت type جدید با keyof، typeof، indexed access، conditional، mapped و template literal types'),
  page('generics-official', 'Generics in the Handbook', 'Generics در Handbook', 'writing generic functions, interfaces, classes, constraints, defaults, and inference-friendly APIs', 'نوشتن function، interface، class، constraint، default و APIهای inference-friendly با generics'),
  page('keyof-official', 'keyof Type Operator', 'Type Operator با نام keyof', 'creating unions of property keys and using them in generic constraints', 'ساخت union از keyهای property و استفاده از آن‌ها در constraintهای generic'),
  page('typeof-official', 'typeof Type Operator', 'Type Operator با نام typeof', 'referring to the type of a value in type positions without changing runtime code', 'اشاره به type یک value در جایگاه type بدون تغییر code runtime'),
  page('indexed-access', 'Indexed Access Types', 'Indexed Access Typeها', 'looking up property and array element types with bracket syntax', 'lookup کردن type مربوط به property و element array با syntax کروشه'),
  page('conditional-official', 'Conditional Types', 'Conditional Typeها', 'selecting and transforming types with extends checks, distributivity, and infer', 'انتخاب و transform کردن type با checkهای extends، distributivity و infer'),
  page('mapped-official', 'Mapped Types', 'Mapped Typeها', 'creating object type transformations over key unions and modifiers', 'ساخت transformهای object type روی union key و modifierها'),
  page('template-literal-types', 'Template Literal Types', 'Template Literal Typeها', 'building string unions and event-name patterns from type-level template literals', 'ساخت unionهای string و pattern نام event از template literal در سطح type'),
  page('modules-reference', 'Modules Reference', 'مرجع Moduleها', 'reading TypeScript module syntax, resolution, emit behavior, type-only imports, and ESM/CJS boundaries', 'خواندن syntax مربوط به module در TypeScript، resolution، رفتار emit، import فقط برای type و مرز ESM/CJS'),
  page('declaration-files', 'Declaration Files', 'Declaration Fileها', 'authoring and consuming .d.ts files for JavaScript libraries and public package APIs', 'author و consume کردن فایل‌های .d.ts برای libraryهای JavaScript و API عمومی package'),
  page('jsdoc-checking', 'JSDoc Checking', 'Check کردن با JSDoc', 'using JSDoc annotations, allowJs, checkJs, and gradual typing in JavaScript files', 'استفاده از annotationهای JSDoc، allowJs، checkJs و gradual typing در فایل‌های JavaScript'),
  page('tsconfig-json', 'tsconfig.json', 'tsconfig.json', 'defining project roots, compiler options, included files, references, and inheritance', 'تعریف root پروژه، compiler option، فایل‌های include شده، referenceها و inheritance'),
  page('compiler-options', 'Compiler Options', 'Compiler Optionها', 'choosing strictness, module, target, lib, emit, interop, declaration, and incremental settings', 'انتخاب strictness، module، target، lib، emit، interop، declaration و تنظیمات incremental'),
  page('project-references', 'Project References', 'Project Referenceها', 'splitting large TypeScript workspaces into referenced projects with composite builds', 'تقسیم workspace بزرگ TypeScript به پروژه‌های referenced با buildهای composite'),
  page('tsc-cli', 'tsc CLI', 'CLI با نام tsc', 'running the TypeScript compiler from scripts, watch mode, build mode, and CI checks', 'اجرای TypeScript compiler از scriptها، watch mode، build mode و checkهای CI'),
];

function section(slug, enTitle, faTitle, enFocus, faFocus, childrenTuples) {
  return {
    slug,
    enTitle,
    faTitle,
    enFocus,
    faFocus,
    terms: sectionTerms(slug, enTitle, faTitle),
    children: childrenTuples.map(([childSlug, childEnTitle, childFaTitle, childEnFocus, childFaFocus, terms]) => (
      page(childSlug, childEnTitle, childFaTitle, childEnFocus, childFaFocus, terms)
    )),
  };
}

function sectionTerms(slug, enTitle, faTitle) {
  if (slug === 'getting-started') {
    return [
      t('tsc', 'the TypeScript compiler command', 'دستور compiler در TypeScript'),
      t('strict', 'compiler mode for stronger type checking', 'mode مربوط به compiler برای check قوی‌تر type'),
      t('inference', 'compiler discovery of a value type', 'کشف type یک value توسط compiler'),
    ];
  }
  if (slug === 'collections-objects') {
    return [
      t('Array<T>', 'generic array type form', 'شکل generic برای type آرایه'),
      t('tuple', 'fixed-position array type', 'type آرایه با position ثابت'),
      t('enum', 'named set of runtime values', 'مجموعه نام‌دار valueهای runtime'),
    ];
  }
  if (slug === 'aliases-unions-functions') {
    return [
      t('interface', 'named object contract', 'contract نام‌دار برای object'),
      t('type alias', 'name for any type expression', 'نامی برای هر expression از نوع type'),
      t('union', 'one of several possible types', 'یکی از چند type ممکن'),
    ];
  }
  if (slug === 'oop-generics') {
    return [
      t('class', 'runtime constructor with static checking', 'constructor در runtime همراه static checking'),
      t('generics', 'reusable types with parameters', 'typeهای قابل استفاده مجدد با parameter'),
      t('keyof', 'operator that returns property-name unions', 'operator که union نام propertyها را برمی‌گرداند'),
    ];
  }
  if (slug === 'tooling-ecosystem') {
    return [
      t('tsconfig', 'project file for compiler options', 'فایل پروژه برای compiler optionها'),
      t('declaration file (.d.ts)', 'type-only description of JavaScript APIs', 'توصیف فقط-type از APIهای JavaScript'),
      t('language service', 'editor engine for TypeScript feedback', 'engine ادیتور برای feedbackهای TypeScript'),
    ];
  }
  return [
    t('conditional types', 'types selected by assignability checks', 'typeهایی که با check مربوط به assignability انتخاب می‌شوند'),
    t('mapped types', 'object types transformed over keys', 'object typeهایی که روی keyها transform می‌شوند'),
    t('narrowing', 'refining a broad type through code flow', 'refine کردن type گسترده با جریان code'),
  ];
}

function termsFor(slug, enTitle, faTitle) {
  const exact = {
    'get-started': [
      t('npm install typescript', 'adds TypeScript to a project', 'TypeScript را به پروژه اضافه می‌کند'),
      t('npx tsc', 'runs the compiler locally', 'compiler محلی را اجرا می‌کند'),
      t('.ts', 'TypeScript source file extension', 'پسوند فایل source برای TypeScript'),
    ],
    'simple-types': [
      t('string', 'text value type', 'type مربوط به value متنی'),
      t('number', 'floating-point number type', 'type مربوط به number اعشاری'),
      t('boolean', 'true or false type', 'type مربوط به true یا false'),
    ],
    'explicit-inference': [
      t(': string', 'explicit type annotation', 'annotation صریح برای type'),
      t('inference', 'compiler-chosen type from initializer', 'type انتخاب‌شده توسط compiler از initializer'),
      t('widening', 'turning a literal into a broader type', 'تبدیل literal به type گسترده‌تر'),
    ],
    'special-types': [
      t('unknown', 'safe top type that must be narrowed', 'top type امن که باید narrow شود'),
      t('never', 'type for impossible values', 'type مربوط به value غیرممکن'),
      t('any', 'escape hatch that disables checking', 'راه فرار که check را غیرفعال می‌کند'),
    ],
    arrays: [
      t('string[]', 'array of strings', 'آرایه‌ای از stringها'),
      t('Array<number>', 'generic array syntax', 'syntax generic برای array'),
      t('readonly', 'prevents mutation through the typed API', 'mutation را از طریق API typed منع می‌کند'),
    ],
    tuples: [
      t('[string, number]', 'tuple with fixed positions', 'tuple با positionهای ثابت'),
      t('readonly tuple', 'tuple that cannot be mutated', 'tuple که mutate نمی‌شود'),
      t('optional element', 'tuple slot that may be omitted', 'slot در tuple که می‌تواند حذف شود'),
    ],
    'object-types': [
      t('{ name: string }', 'object property type', 'type مربوط به property در object'),
      t('optional property', 'property marked with ?', 'property علامت‌خورده با ?'),
      t('readonly property', 'property not assignable after creation', 'property که پس از creation assign نمی‌شود'),
    ],
    enums: [
      t('enum', 'runtime object for named choices', 'object runtime برای choiceهای نام‌دار'),
      t('const enum', 'enum that can be inlined by the compiler', 'enum که compiler می‌تواند inline کند'),
      t('literal union', 'type-only alternative to many enums', 'جایگزین فقط-type برای بسیاری از enumها'),
    ],
    'aliases-interfaces': [
      t('interface User', 'named object shape', 'شکل نام‌دار برای object'),
      t('type User = ...', 'alias for a type expression', 'alias برای یک type expression'),
      t('extends', 'expands an interface contract', 'contract مربوط به interface را گسترش می‌دهد'),
    ],
    'union-types': [
      t('A | B', 'value can be A or B', 'value می‌تواند A یا B باشد'),
      t('discriminant', 'literal property used to narrow a union', 'property literal برای narrow کردن union'),
      t('exhaustive check', 'verifies all union cases are handled', 'بررسی می‌کند همه caseهای union پوشش داده شده‌اند'),
    ],
    functions: [
      t('(x: number) => string', 'function signature type', 'type مربوط به signature تابع'),
      t('optional parameter', 'parameter marked with ?', 'parameter علامت‌خورده با ?'),
      t('overload', 'multiple call signatures for one function', 'چند call signature برای یک function'),
    ],
    casting: [
      t('as Type', 'type assertion syntax', 'syntax برای type assertion'),
      t('unknown as Type', 'two-step assertion through unknown', 'assertion دومرحله‌ای از مسیر unknown'),
      t('satisfies', 'checks a value without widening its useful literals', 'value را بدون widening بی‌مورد literalها check می‌کند'),
    ],
    classes: [
      t('implements', 'checks a class against an interface', 'class را در برابر interface check می‌کند'),
      t('private', 'restricts member access in TypeScript', 'دسترسی member را در TypeScript محدود می‌کند'),
      t('constructor parameter property', 'declares and initializes a field from a constructor parameter', 'field را از parameter constructor تعریف و initialize می‌کند'),
    ],
    'basic-generics': [
      t('<T>', 'generic type parameter', 'type parameter در generics'),
      t('extends constraint', 'limits allowed generic arguments', 'argumentهای generic مجاز را محدود می‌کند'),
      t('default type parameter', 'fallback type for generics', 'type پیش‌فرض برای generics'),
    ],
    'utility-types': [
      t('Partial<T>', 'makes properties optional', 'propertyها را optional می‌کند'),
      t('Pick<T, K>', 'selects properties by key', 'propertyها را با key انتخاب می‌کند'),
      t('Record<K, V>', 'maps keys to a value type', 'keyها را به یک value type نگاشت می‌کند'),
    ],
    'keyof-op': [
      t('keyof T', 'union of property names', 'union نام propertyها'),
      t('K extends keyof T', 'generic key constraint', 'constraint برای key generic'),
      t('T[K]', 'indexed access type', 'indexed access type'),
    ],
    nullables: [
      t('strictNullChecks', 'checks null and undefined separately', 'null و undefined را جداگانه check می‌کند'),
      t('value == null', 'runtime check for null or undefined', 'check runtime برای null یا undefined'),
      t('NonNullable<T>', 'removes null and undefined', 'null و undefined را حذف می‌کند'),
    ],
    'definitely-typed': [
      t('@types/package', 'community declaration package', 'declaration package جامعه کاربری'),
      t('.d.ts', 'declaration file extension', 'پسوند فایل declaration'),
      t('typesVersions', 'package field for versioned type entry points', 'field مربوط به package برای entry pointهای type نسخه‌بندی‌شده'),
    ],
    'ts5-updates': [
      t('TypeScript 5.x', 'modern TypeScript release family', 'خانواده release مدرن TypeScript'),
      t('decorators', 'standardized class and member annotation syntax', 'syntax استاندارد برای annotation روی class و member'),
      t('satisfies', 'checks assignability while preserving inference', 'assignability را همراه حفظ inference check می‌کند'),
    ],
    configuration: [
      t('tsconfig.json', 'compiler configuration file', 'فایل configuration برای compiler'),
      t('compilerOptions', 'settings that change checking and emit', 'تنظیماتی که checking و emit را تغییر می‌دهند'),
      t('include', 'file patterns that belong to the project', 'pattern فایل‌هایی که عضو پروژه هستند'),
    ],
    'with-nodejs': [
      t('moduleResolution', 'how TypeScript finds imports', 'شیوه پیدا کردن importها توسط TypeScript'),
      t('NodeNext', 'Node.js-aware module mode', 'mode مربوط به module با آگاهی از Node.js'),
      t('ts-node / tsx', 'tools that run TypeScript during development', 'ابزارهایی برای اجرای TypeScript هنگام development'),
    ],
    'with-react': [
      t('JSX.Element', 'common JSX return type', 'return type رایج برای JSX'),
      t('ComponentProps', 'utility for reading component prop types', 'utility برای خواندن type مربوط به propهای component'),
      t('React.ChangeEvent', 'typed browser event in React', 'event مرورگر typed در React'),
    ],
    tooling: [
      t('language service', 'editor engine for completion and errors', 'engine ادیتور برای completion و error'),
      t('noEmit', 'checks without writing JavaScript output', 'check بدون نوشتن خروجی JavaScript'),
      t('incremental', 'speeds repeated compiler runs', 'اجرای تکراری compiler را سریع‌تر می‌کند'),
    ],
    'advanced-types': [
      t('A & B', 'intersection type', 'intersection type'),
      t('T[number]', 'array element lookup type', 'type lookup برای element آرایه'),
      t('Extract<T, U>', 'utility that keeps matching union members', 'utility که memberهای matching در union را نگه می‌دارد'),
    ],
    'type-guards': [
      t('value is T', 'type predicate return type', 'return type مربوط به type predicate'),
      t('typeof', 'runtime tag check for primitives', 'check tag runtime برای primitiveها'),
      t('in', 'runtime property presence check', 'check وجود property در runtime'),
    ],
    'conditional-types': [
      t('T extends U ? X : Y', 'conditional type expression', 'expression مربوط به conditional type'),
      t('infer R', 'captures a type inside a conditional type', 'یک type را داخل conditional type capture می‌کند'),
      t('distributive conditional', 'conditional applied to each union member', 'conditional که روی هر member union اعمال می‌شود'),
    ],
    'mapped-types': [
      t('[K in keyof T]', 'mapped type key loop', 'loop روی key در mapped type'),
      t('-readonly', 'removes readonly modifier', 'modifier readonly را حذف می‌کند'),
      t('as', 'remaps keys inside a mapped type', 'keyها را داخل mapped type remap می‌کند'),
    ],
    'type-inference': [
      t('contextual typing', 'inference from usage position', 'inference از جایگاه استفاده'),
      t('generic inference', 'choosing type arguments from inputs', 'انتخاب type argument از inputها'),
      t('as const', 'keeps narrow literal types', 'literal typeهای narrow را نگه می‌دارد'),
    ],
    'literal-types': [
      t('"open" | "closed"', 'string literal union', 'union از string literalها'),
      t('42', 'numeric literal type', 'numeric literal type'),
      t('template literal type', 'type-level string pattern', 'pattern رشته‌ای در سطح type'),
    ],
    namespaces: [
      t('namespace', 'legacy TypeScript code organization syntax', 'syntax قدیمی برای سازمان‌دهی code در TypeScript'),
      t('export', 'exposes a namespace member', 'member مربوط به namespace را expose می‌کند'),
      t('module', 'modern file-based boundary', 'boundary مدرن مبتنی بر فایل'),
    ],
    'index-signatures': [
      t('[key: string]: T', 'dynamic string property type', 'type برای property رشته‌ای dynamic'),
      t('Record<string, T>', 'utility alternative for dictionaries', 'جایگزین utility برای dictionaryها'),
      t('noUncheckedIndexedAccess', 'adds undefined to unchecked indexed reads', 'به readهای indexed بدون check مقدار undefined اضافه می‌کند'),
    ],
    'declaration-merging': [
      t('interface merging', 'same-name interfaces combine members', 'interfaceهای هم‌نام memberها را ترکیب می‌کنند'),
      t('namespace merging', 'namespace can add static members', 'namespace می‌تواند memberهای static اضافه کند'),
      t('augmentation', 'adds declarations to an existing module', 'declaration را به module موجود اضافه می‌کند'),
    ],
    'async-programming': [
      t('Promise<T>', 'future value type', 'type مربوط به value آینده'),
      t('Awaited<T>', 'unwraps promise-like types', 'typeهای promise-like را unwrap می‌کند'),
      t('async function', 'function that returns a Promise', 'تابعی که Promise برمی‌گرداند'),
    ],
    decorators: [
      t('@decorator', 'annotation applied to class elements', 'annotation اعمال‌شده روی elementهای class'),
      t('metadata', 'extra information some frameworks attach', 'اطلاعات اضافه‌ای که بعضی frameworkها attach می‌کنند'),
      t('experimentalDecorators', 'legacy compiler option for older decorator semantics', 'compiler option قدیمی برای semantics قبلی decorator'),
    ],
    'in-js-projects': [
      t('allowJs', 'includes JavaScript files in the project', 'فایل‌های JavaScript را وارد پروژه می‌کند'),
      t('checkJs', 'reports type errors in JavaScript files', 'در فایل‌های JavaScript خطای type گزارش می‌کند'),
      t('@typedef', 'JSDoc declaration for a reusable type', 'declaration در JSDoc برای type قابل استفاده مجدد'),
    ],
    migration: [
      t('strictness ladder', 'incremental path to stronger checks', 'مسیر تدریجی به سوی checkهای قوی‌تر'),
      t('unknown first', 'safer migration alternative to any', 'جایگزین امن‌تر از any هنگام migration'),
      t('boundary typing', 'typing inputs and outputs before internals', 'type کردن ورودی و خروجی پیش از داخل code'),
    ],
    'error-handling': [
      t('catch (error)', 'catch variable typed as unknown in strict projects', 'variable catch که در پروژه strict از نوع unknown است'),
      t('Result<T, E>', 'explicit success or failure return shape', 'شکل return صریح برای success یا failure'),
      t('Error', 'runtime error object', 'object خطای runtime'),
    ],
    'best-practices': [
      t('strict', 'recommended checking baseline', 'baseline پیشنهادی برای checking'),
      t('unknown over any', 'safer top type preference', 'ترجیح top type امن‌تر'),
      t('type near boundary', 'type design close to external data', 'طراحی type نزدیک به data بیرونی'),
    ],
  };
  if (exact[slug]) return exact[slug];
  if (slug.includes('official') || slug.includes('handbook') || slug.includes('started')) {
    return [
      t('Handbook', 'official guide for TypeScript authors', 'guide رسمی برای authorهای TypeScript'),
      t('compiler', 'checks TypeScript and emits JavaScript', 'TypeScript را check و JavaScript emit می‌کند'),
      t('strict', 'recommended compiler checking mode', 'mode پیشنهادی برای compiler checking'),
    ];
  }
  if (slug.includes('module')) {
    return [
      t('import type', 'imports only a type', 'فقط یک type را import می‌کند'),
      t('moduleResolution', 'rules for finding module files', 'ruleهای پیدا کردن فایل‌های module'),
      t('ESM', 'standard JavaScript module system', 'سیستم استاندارد module در JavaScript'),
    ];
  }
  if (slug.includes('declaration') || slug.includes('jsdoc')) {
    return [
      t('.d.ts', 'type declaration file', 'فایل declaration برای type'),
      t('declare', 'describes an existing runtime value', 'value موجود در runtime را توصیف می‌کند'),
      t('JSDoc', 'type comments for JavaScript files', 'commentهای type برای فایل‌های JavaScript'),
    ];
  }
  if (slug.includes('config') || slug.includes('compiler') || slug.includes('tsc') || slug.includes('project')) {
    return [
      t('tsconfig', 'project configuration file', 'فایل configuration پروژه'),
      t('compilerOptions', 'settings for checking and emit', 'تنظیمات مربوط به checking و emit'),
      t('noEmit', 'type-check without writing output files', 'type-check بدون نوشتن فایل خروجی'),
    ];
  }
  if (slug.includes('json')) {
    return [
      t('unknown', 'safe type for parsed external data', 'type امن برای data خارجی parse شده'),
      t('DTO', 'data transfer object shape', 'شکل object برای انتقال data'),
      t('validation', 'runtime check before trusting data', 'check در runtime پیش از trust کردن data'),
    ];
  }
  if (slug.includes('dom') || slug.includes('web')) {
    return [
      t('HTMLElement', 'base type for many DOM elements', 'type پایه برای بسیاری از elementهای DOM'),
      t('EventTarget', 'broad event target type', 'type گسترده برای target رخداد'),
      t('lib.dom.d.ts', 'DOM declaration library', 'library declaration برای DOM'),
    ];
  }
  if (slug.includes('async') || slug.includes('promise')) {
    return [
      t('Promise<T>', 'type for a future result', 'type مربوط به نتیجه آینده'),
      t('Awaited<T>', 'unwraps awaited values', 'valueهای awaited را unwrap می‌کند'),
      t('try/catch', 'runtime error handling around async work', 'error handling در runtime پیرامون کار async'),
    ];
  }
  if (slug.includes('function')) {
    return [
      t('call signature', 'type shape of a callable value', 'شکل type برای value قابل call'),
      t('return type', 'type produced by a function', 'type تولیدشده توسط function'),
      t('overload', 'multiple signatures for one implementation', 'چند signature برای یک implementation'),
    ];
  }
  if (slug.includes('class') || slug.includes('object') || slug.includes('prototype')) {
    return [
      t('structural typing', 'compatibility by shape', 'compatibility بر اساس شکل'),
      t('prototype', 'runtime inheritance object', 'object مربوط به inheritance در runtime'),
      t('interface', 'static object contract', 'contract static برای object'),
    ];
  }
  if (slug.includes('type') || slug.includes('narrow') || slug.includes('keyof') || slug.includes('typeof') || slug.includes('indexed') || slug.includes('conditional') || slug.includes('mapped') || slug.includes('template') || slug.includes('primitive') || slug.includes('symbol')) {
    return [
      t('narrowing', 'refining a type through runtime evidence', 'refine کردن type با evidence در runtime'),
      t('type operator', 'operator used in type positions', 'operator استفاده‌شده در جایگاه type'),
      t('literal type', 'type for one exact value', 'type مربوط به یک value دقیق'),
    ];
  }
  if (slug.includes('error')) {
    return [
      t('unknown', 'safe catch variable type', 'type امن برای variable در catch'),
      t('Error', 'standard runtime error object', 'object استاندارد error در runtime'),
      t('Result', 'explicit success/failure return shape', 'شکل return صریح برای success/failure'),
    ];
  }
  return [
    t('TypeScript', `typed JavaScript feature used in ${enTitle}`, `ویژگی typed JavaScript برای ${faTitle}`),
    t('type', 'static description checked before runtime', 'توصیف static که پیش از runtime check می‌شود'),
    t('runtime', 'JavaScript behavior after TypeScript is erased', 'رفتار JavaScript پس از erase شدن TypeScript'),
  ];
}

function keywordsFor(slug, enTitle) {
  const words = enTitle.replace(/^TypeScript\s+/u, '').split(/\s+/u).slice(0, 5).join(' ');
  return [`TypeScript ${words}`, `${words} tutorial`, slug.replaceAll('-', ' ')];
}

function withOrders(trackId, pages) {
  return pages.map((item, index) => ({
    ...item,
    track: trackId,
    order: index + 1,
  }));
}

const LEARN_PAGES = withOrders('learn', [
  LEARN_INTRO,
  ...LEARN_SECTIONS.flatMap((sectionItem) => [
    page(sectionItem.slug, sectionItem.enTitle, sectionItem.faTitle, sectionItem.enFocus, sectionItem.faFocus, sectionItem.terms, [
      `TypeScript ${sectionItem.slug}`,
      `${sectionItem.enTitle} tutorial`,
    ]),
    ...sectionItem.children,
  ]),
]);

const TRACK_PAGES = {
  learn: LEARN_PAGES,
  reference: withOrders('reference', REFERENCE_PAGES),
  official: withOrders('official', OFFICIAL_PAGES),
};

function learnNav() {
  return [
    navItem(LEARN_INTRO),
    ...LEARN_SECTIONS.map((sectionItem) => ({
      slug: sectionItem.slug,
      title: { fa: sectionItem.faTitle, en: sectionItem.enTitle },
      children: sectionItem.children.map(navItem),
    })),
  ];
}

function navItem(item) {
  return {
    slug: item.slug,
    title: {
      fa: item.faTitle,
      en: item.enTitle,
    },
  };
}

function flatNav(pages) {
  return pages.map(navItem);
}

function metaJson() {
  return {
    id: 'typescript',
    order: 40,
    title: {
      fa: 'TypeScript',
      en: 'TypeScript',
    },
    seoTitle: {
      fa: 'TypeScript - آموزش W3Schools، مرجع MDN و مستندات رسمی | MEGA JS',
      en: 'TypeScript - W3Schools Tutorial, MDN Reference & Official Docs | MEGA JS',
    },
    seoDescription: {
      fa: seoLength('TypeScript را در سه مسیر یاد بگیرید: آموزش W3Schools، مرجع MDN-style و مستندات رسمی؛ همراه type، generics و مثال live.', 'fa'),
      en: seoLength('Learn TypeScript across three tracks: W3Schools-style lessons, MDN-style reference, and official docs with types, generics, tsconfig, and live demos.', 'en'),
    },
    description: {
      fa: 'سه مسیر کامل برای TypeScript: آموزش قدم‌به‌قدم، مرجع author-focused به سبک MDN و خلاصه‌های رسمی typescriptlang.org برای Handbook، Reference، Modules و tsconfig.',
      en: 'Three complete TypeScript tracks: step-by-step learning, author-focused MDN-style reference, and official typescriptlang.org summaries for the Handbook, Reference, Modules, and tsconfig.',
    },
    sources: [SOURCE_W3, SOURCE_MDN, SOURCE_MDN_TYPES, SOURCE_TS, SOURCE_TS_HANDBOOK],
    tracks: [
      {
        id: 'learn',
        title: {
          fa: 'آموزشی (W3Schools)',
          en: 'Learn (W3Schools)',
        },
        description: {
          fa: 'مسیر آموزشی قدم‌به‌قدم با ادیتور زنده - ساختار سایدبار W3Schools TypeScript Tutorial.',
          en: 'Step-by-step tutorial with live editor - W3Schools TypeScript Tutorial sidebar structure.',
        },
        seoTitle: {
          fa: 'آموزش TypeScript از صفر | مسیر W3Schools + ادیتور زنده | MEGA JS',
          en: 'Learn TypeScript from Scratch | W3Schools Path + Live Editor | MEGA JS',
        },
        seoDescription: {
          fa: seoLength('آموزش TypeScript از صفر با مسیر W3Schools، مثال‌های HTML دارای typescript.js CDN، type، interface، generics و تمرین live.', 'fa'),
          en: seoLength('Learn TypeScript from scratch with a W3Schools-style path, live HTML examples using typescript.js CDN, types, interfaces, and generics.', 'en'),
        },
        source: SOURCE_W3,
        liveEditor: true,
        nav: learnNav(),
      },
      {
        id: 'reference',
        title: {
          fa: 'مرجع (MDN-style)',
          en: 'Reference (MDN-style)',
        },
        description: {
          fa: 'مرجع author-focused به سبک MDN برای typeهای JavaScript، narrowing، DOM typing، Promise، JSON و module در code TypeScript.',
          en: 'An author-focused MDN-style reference for JavaScript types, narrowing, DOM typing, promises, JSON, and modules in TypeScript code.',
        },
        seoTitle: {
          fa: 'مرجع TypeScript به سبک MDN | Type، DOM و Async | MEGA JS',
          en: 'TypeScript Reference - MDN-style Types, DOM & Async | MEGA JS',
        },
        seoDescription: {
          fa: seoLength('مرجع TypeScript به سبک MDN برای typeهای JavaScript، narrowing، DOM typing، JSON، Promise، module و authoring امن در پروژه واقعی.', 'fa'),
          en: seoLength('Use the MDN-style TypeScript reference for JavaScript types, narrowing, DOM typing, JSON, promises, modules, and safe authoring.', 'en'),
        },
        source: SOURCE_MDN,
        liveEditor: false,
        nav: flatNav(TRACK_PAGES.reference),
      },
      {
        id: 'official',
        title: {
          fa: 'مستندات رسمی (typescriptlang.org)',
          en: 'Official (typescriptlang.org)',
        },
        description: {
          fa: 'خلاصه‌های رسمی TypeScript Docs برای Get Started، Handbook، Reference، Modules، Declaration Files، JS Projects و Project Configuration.',
          en: 'Official TypeScript Docs summaries for Get Started, Handbook, Reference, Modules, Declaration Files, JS Projects, and Project Configuration.',
        },
        seoTitle: {
          fa: 'مستندات رسمی TypeScript | Handbook، Modules و tsconfig | MEGA JS',
          en: 'Official TypeScript Docs | Handbook, Modules & tsconfig | MEGA JS',
        },
        seoDescription: {
          fa: seoLength('خلاصه مستندات رسمی TypeScript برای Get Started، Handbook، Reference، Modules، Declaration Files، JS Projects و tsconfig.json.', 'fa'),
          en: seoLength('Read official TypeScript docs summaries for Get Started, the Handbook, Reference, Modules, Declaration Files, JS projects, and tsconfig.json.', 'en'),
        },
        source: SOURCE_TS,
        liveEditor: false,
        nav: flatNav(TRACK_PAGES.official),
      },
    ],
  };
}

function frontmatter(item, locale) {
  const isFa = locale === 'fa';
  const title = isFa ? item.faTitle : item.enTitle;
  const description = isFa
    ? `این صفحه ${item.faFocus} را با مثال TypeScript، جدول syntax و نکته‌های کاربردی برای authoring توضیح می‌دهد.`
    : `This page explains ${item.enFocus} with TypeScript examples, syntax tables, and practical authoring notes.`;
  const seoTitle = seoTitleFor(item, locale);
  const seoDescription = seoDescriptionFor(item, locale);
  const keywords = isFa
    ? ['TypeScript', item.faTitle, 'آموزش TypeScript', 'مرجع TypeScript', ...item.keywords].join(', ')
    : ['TypeScript', item.enTitle, ...item.keywords].join(', ');
  const sources = TRACK_SOURCES[item.track];

  return [
    '---',
    `title: "${yamlString(title)}"`,
    `description: "${yamlString(description)}"`,
    `seoTitle: "${yamlString(seoTitle)}"`,
    `seoDescription: "${yamlString(seoDescription)}"`,
    `keywords: "${yamlString(keywords)}"`,
    `order: ${item.order}`,
    `track: ${item.track}`,
    'sources:',
    ...sources.flatMap((source) => [
      `  - name: ${source.name}`,
      `    url: ${source.url}`,
    ]),
    '---',
    '',
  ].join('\n');
}

function seoTitleFor(item, locale) {
  if (item.track === 'learn') {
    return locale === 'fa'
      ? `آموزش ${item.faTitle} در مسیر W3Schools | MEGA JS`
      : `${item.enTitle} Tutorial - W3Schools-style | MEGA JS Docs`;
  }
  if (item.track === 'reference') {
    return locale === 'fa'
      ? `${cleanFaReferenceTitle(item.faTitle)} - سبک MDN برای TypeScript | MEGA JS`
      : `${cleanEnReferenceTitle(item.enTitle)} - MDN-style TypeScript | MEGA JS Docs`;
  }
  return locale === 'fa'
    ? `${item.faTitle} - مستندات رسمی TypeScript | MEGA JS`
    : `${item.enTitle} - Official TypeScript Docs | MEGA JS Docs`;
}

function cleanFaReferenceTitle(title) {
  return title.startsWith('مرجع ') || title.includes('مرجع') ? title : `مرجع ${title}`;
}

function cleanEnReferenceTitle(title) {
  return title.includes('Reference') ? title : `TypeScript ${title} Reference`;
}

function seoDescriptionFor(item, locale) {
  const marker = item.slug.replaceAll('-', ' ');
  if (item.track === 'learn') {
    return locale === 'fa'
      ? seoLength(
          `آموزش ${item.faTitle} (${marker}): مثال HTML با typescript.js CDN، تمرین live مسیر W3Schools، type، interface، generics و نکته compiler.`,
          'fa',
        )
      : seoLength(
          `Learn ${item.enTitle} (${marker}) with live HTML using typescript.js CDN, W3Schools practice, types, interfaces, generics, and compiler guidance.`,
          'en',
        );
  }
  if (item.track === 'reference') {
    return locale === 'fa'
      ? seoLength(
          `${cleanFaReferenceTitle(item.faTitle)} (${marker}): مرجع MDN-style برای TypeScript با runtime JavaScript، narrowing، DOM typing و مثال compiler.`,
          'fa',
        )
      : seoLength(
          `${cleanEnReferenceTitle(item.enTitle)} (${marker}): MDN-style TypeScript reference with JavaScript runtime facts, narrowing, DOM typing, and compiler examples.`,
          'en',
        );
  }
  return locale === 'fa'
    ? seoLength(
        `${item.faTitle} (${marker}): خلاصه رسمی TypeScript Docs با Handbook، Reference، Modules، declaration file، tsconfig و نکته compiler.`,
        'fa',
      )
    : seoLength(
        `${item.enTitle} (${marker}): official TypeScript Docs summary with Handbook, Reference, Modules, declaration files, tsconfig, and compiler notes.`,
        'en',
      );
}

function bodyFor(item, next, locale) {
  if (item.track === 'learn') return learnBody(item, next, locale);
  if (item.track === 'reference') return referenceBody(item, next, locale);
  return officialBody(item, next, locale);
}

function learnBody(item, next, locale) {
  const isFa = locale === 'fa';
  const examples = learnExamples(item);
  if (isFa) {
    return [
      `# ${item.faTitle}`,
      '',
      `${item.faTitle} درباره ${item.faFocus} است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools TypeScript Tutorial است و مثال‌ها به شکل HTML کامل با typescript.js CDN نوشته شده‌اند تا در live editor اجرا شوند.`,
      '',
      `هنگام تمرین ${item.faTitle} فقط به خروجی JavaScript نگاه نکنید؛ پیام compiler، inference، narrowing و تفاوت type با runtime را هم بررسی کنید.`,
      '',
      '## ایده اصلی',
      '',
      ...item.terms.map((termItem) => `- \`${termItem.syntax}\`: ${termItem.fa}.`),
      `- برای این موضوع، ${practiceSignal(item, 'fa')} نشانه اصلی کیفیت TypeScript code است.`,
      '',
      '## مثال‌های HTML قابل اجرا با TypeScript',
      '',
      'هر مثال یک سند کامل HTML است که TypeScript را از CDN load می‌کند، source را با `ts.transpileModule` به JavaScript تبدیل می‌کند و خروجی را در همان صفحه نشان می‌دهد.',
      '',
      ...examples.flatMap((example, index) => [
        `### مثال ${index + 1}: ${faExampleHeading(item, index)}`,
        '',
        codeFence(example),
        '',
      ]),
      '## جدول syntax و کاربرد',
      '',
      '| Syntax | کاربرد | نکته authoring |',
      '| --- | --- | --- |',
      ...item.terms.map((termItem) => `| \`${termItem.syntax}\` | ${termItem.fa} | در ${item.faTitle} آن را با strict mode، input نامعتبر و خروجی JavaScript تست کنید. |`),
      '',
      '## اشتباه‌های رایج',
      '',
      ...typescriptMistakes(item, 'fa'),
      '',
      '## تمرین کوتاه',
      '',
      `یک فایل \`${item.slug}.ts\` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با \`${item.terms[0].syntax}\` را تغییر دهید. اگر compiler warning یا output عجیب شد، type annotation و value runtime را جدا بررسی کنید.`,
      '',
      '## گام بعدی',
      '',
      next
        ? `بعد از این صفحه، **${next.faTitle}** را بخوانید تا مسیر TypeScript مرحله‌به‌مرحله کامل‌تر شود.`
        : 'در پایان مسیر learn، وارد track مرجع شوید و همین موضوعات را با نگاه دقیق‌تر MDN-style بررسی کنید.',
      '',
    ].join('\n');
  }

  return [
    `# ${item.enTitle}`,
    '',
    `${item.enTitle} focuses on ${item.enFocus}. This is an educational rewrite inspired by the W3Schools TypeScript learning path, and every example is a complete HTML document using the typescript.js CDN for the live editor.`,
    '',
    `When you practice ${item.enTitle}, do not stop at the emitted JavaScript. Inspect compiler feedback, inference, narrowing, and the difference between types and runtime values.`,
    '',
    '## Core idea',
    '',
    ...item.terms.map((termItem) => `- \`${termItem.syntax}\`: ${termItem.en}.`),
    `- For this topic, ${practiceSignal(item, 'en')} is the main sign that your TypeScript code is doing its job.`,
    '',
    '## Runnable HTML examples with TypeScript',
    '',
    'Each example is a complete HTML document that loads TypeScript from a CDN, compiles source with `ts.transpileModule`, and prints output on the same page.',
    '',
    ...examples.flatMap((example, index) => [
      `### Example ${index + 1}: ${enExampleHeading(item, index)}`,
      '',
      codeFence(example),
      '',
    ]),
    '## Syntax and usage table',
    '',
    '| Syntax | Purpose | Authoring note |',
    '| --- | --- | --- |',
    ...item.terms.map((termItem) => `| \`${termItem.syntax}\` | ${termItem.en} | In ${item.enTitle}, test it with strict mode, invalid input, and emitted JavaScript. |`),
    '',
    '## Common mistakes',
    '',
    ...typescriptMistakes(item, 'en'),
    '',
    '## Practice step',
    '',
    `Create a file named \`${item.slug}.ts\`, run the first example, then change one part related to \`${item.terms[0].syntax}\`. If compiler feedback or output looks surprising, separate the type annotation from the runtime value.`,
    '',
    '## Next step',
    '',
    next
      ? `Next, continue with **${next.enTitle}** so the TypeScript learning path builds on this concept.`
      : 'At the end of the learn track, open the reference track and revisit the same ideas with MDN-style precision.',
    '',
  ].join('\n');
}

function referenceBody(item, next, locale) {
  const isFa = locale === 'fa';
  const examples = referenceExamples(item);
  if (isFa) {
    return [
      `# ${item.faTitle}`,
      '',
      `${item.faTitle} یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی ${item.faFocus} است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، رفتار runtime در JavaScript و contractهای TypeScript را کنار هم می‌گذارد.`,
      '',
      '## جایگاه در MDN',
      '',
      `در MDN، JavaScript با primitiveها، objectها، functionها، moduleها، DOM و Web API توضیح داده می‌شود. هنگام استفاده از ${item.faTitle}، به یاد داشته باشید TypeScript typeها را پیش از runtime بررسی و سپس erase می‌کند.`,
      '',
      '## جدول مرجع',
      '',
      '| مورد | معنی | نکته سازگاری |',
      '| --- | --- | --- |',
      ...item.terms.map((termItem) => `| \`${termItem.syntax}\` | ${termItem.fa} | رفتار runtime را در browser یا Node.js و type check را با strict mode جدا بررسی کنید. |`),
      '',
      '## مثال‌ها',
      '',
      ...examples.flatMap((example, index) => [
        `### مثال ${index + 1}`,
        '',
        codeFence(example),
        '',
      ]),
      '## نکته‌های دقیق authoring',
      '',
      `- برای ${item.faTitle}، مرز بین value واقعی JavaScript و type erased شده TypeScript را explicit نگه دارید.`,
      '- data خارجی مثل JSON، DOM و network را پیش از assertion با guard یا validation بررسی کنید.',
      '- برای تصمیم‌های حساس، صفحه MDN مربوط، TypeScript Handbook و اجرای واقعی در runtime هدف را کنار هم ببینید.',
      '',
      '## ارتباط مفهومی با MDN',
      '',
      `این صفحه به موضوعات MDN درباره ${item.enTitle}, JavaScript runtime types, DOM/Web API و browser compatibility نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.`,
      '',
      '## گام بعدی',
      '',
      next ? `صفحه مرجع بعدی: **${next.faTitle}**.` : 'پس از پایان مرجع، برای نگاه رسمی وارد track TypeScript Docs شوید.',
      '',
    ].join('\n');
  }

  return [
    `# ${item.enTitle}`,
    '',
    `${item.enTitle} is an author-focused MDN-style TypeScript reference page. It concentrates on ${item.enFocus} and pairs precise definitions, JavaScript runtime behavior, and TypeScript contracts instead of beginner sequencing.`,
    '',
    '## Place in the MDN reference',
    '',
    `On MDN, JavaScript is documented through primitives, objects, functions, modules, the DOM, and Web APIs. When using ${item.enTitle}, remember that TypeScript checks types before runtime and then erases them.`,
    '',
    '## Reference table',
    '',
    '| Item | Meaning | Compatibility note |',
    '| --- | --- | --- |',
    ...item.terms.map((termItem) => `| \`${termItem.syntax}\` | ${termItem.en} | Check runtime behavior in the target browser or Node.js and type behavior under strict mode. |`),
    '',
    '## Examples',
    '',
    ...examples.flatMap((example, index) => [
      `### Example ${index + 1}`,
      '',
      codeFence(example),
      '',
    ]),
    '## Precise authoring notes',
    '',
    `- For ${item.enTitle}, keep the boundary between real JavaScript values and erased TypeScript types explicit.`,
    '- Validate external data such as JSON, DOM, and network input before relying on assertions.',
    '- For critical decisions, compare the relevant MDN page, the TypeScript Handbook, and a real target runtime.',
    '',
    '## Conceptual link to MDN',
    '',
    `This page aligns with MDN topics around ${item.enTitle}, JavaScript runtime types, DOM/Web APIs, and browser compatibility before implementation.`,
    '',
    '## Next step',
    '',
    next ? `Continue with **${next.enTitle}**.` : 'After finishing the reference, open the TypeScript Docs official track.',
    '',
  ].join('\n');
}

function officialBody(item, next, locale) {
  const isFa = locale === 'fa';
  const examples = officialExamples(item);
  if (isFa) {
    return [
      `# ${item.faTitle}`,
      '',
      `${item.faTitle} خلاصه‌ای از ساختار رسمی typescriptlang.org/docs است. تمرکز آن روی ${item.faFocus} است و هدف آن کمک به author برای خواندن Handbook و Reference بدون تبدیل صفحه به dump کامل مستندات است.`,
      '',
      '## چگونه متن رسمی را بخوانیم',
      '',
      'در TypeScript Docs، بخش Get Started مسیر ورود را می‌سازد، Handbook مفاهیم روزمره و type-level را توضیح می‌دهد، Reference رفتار module و compiler را دقیق‌تر می‌کند، و Project Configuration تنظیمات production را پوشش می‌دهد.',
      '',
      '## اصطلاح‌های کلیدی',
      '',
      '| Term | خلاصه author-facing |',
      '| --- | --- |',
      ...item.terms.map((termItem) => `| \`${termItem.syntax}\` | ${termItem.fa} |`),
      '',
      '## مثال‌های قابل اجرا',
      '',
      ...examples.flatMap((example, index) => [
        `### مثال ${index + 1}`,
        '',
        codeFence(example),
        '',
      ]),
      '## نکته‌های رسمی و compiler',
      '',
      `- در ${item.faTitle}، caveatهای official را با نسخه TypeScript، گزینه‌های tsconfig و runtime واقعی JavaScript مقایسه کنید.`,
      '- اگر موضوع به module، declaration file یا JS project مربوط است، behavior package manager و bundler خود را هم بررسی کنید.',
      '- برای code production، متن official را با typecheck در CI، test و validation data خارجی تکمیل کنید.',
      '',
      '## گام بعدی',
      '',
      next ? `ادامه track رسمی: **${next.faTitle}**.` : 'بعد از پایان این track، یک صفحه reference را باز کنید و رفتار آن را با strict mode تست کنید.',
      '',
    ].join('\n');
  }

  return [
    `# ${item.enTitle}`,
    '',
    `${item.enTitle} summarizes the official typescriptlang.org/docs structure. It focuses on ${item.enFocus} and helps authors read the Handbook and Reference without turning this page into a full documentation dump.`,
    '',
    '## How to read the official text',
    '',
    'In the TypeScript Docs, Get Started builds the entry path, the Handbook explains everyday and type-level concepts, the Reference details modules and compiler behavior, and Project Configuration covers production settings.',
    '',
    '## Key terms',
    '',
    '| Term | Author-facing summary |',
    '| --- | --- |',
    ...item.terms.map((termItem) => `| \`${termItem.syntax}\` | ${termItem.en} |`),
    '',
    '## Runnable examples',
    '',
    ...examples.flatMap((example, index) => [
      `### Example ${index + 1}`,
      '',
      codeFence(example),
      '',
    ]),
    '## Official and compiler notes',
    '',
    `- In ${item.enTitle}, compare official caveats with your TypeScript version, tsconfig options, and actual JavaScript runtime behavior.`,
    '- If the topic involves modules, declaration files, or JavaScript projects, also check your package manager and bundler behavior.',
    '- For production code, pair the official text with CI typechecks, tests, and validation for external data.',
    '',
    '## Next step',
    '',
    next ? `Continue the official track with **${next.enTitle}**.` : 'After this track, open a reference page and test its behavior under strict mode.',
    '',
  ].join('\n');
}

function learnExamples(item) {
  return [focusedSnippet(item), optionTableSnippet(item), completePracticeSnippet(item)].map(tsPlayground);
}

function referenceExamples(item) {
  return [referenceSnippet(item), focusedSnippet(item)].map(tsPlayground);
}

function officialExamples(item) {
  return [officialTraceSnippet(item), focusedSnippet(item)].map(tsPlayground);
}

function tsPlayground(tsSource) {
  const safeSource = templateLiteralEscape(tsSource.trim());
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<script src="https://cdn.jsdelivr.net/npm/typescript@5.7.3/lib/typescript.js"></script>
</head>
<body>
<pre id="out"></pre>
<script>
const out = document.querySelector('#out');
const log = (...a) => { out.textContent += a.map(String).join(' ') + '\\n'; };
const tsCode = \`
${safeSource}
\`;
try {
  const result = ts.transpileModule(tsCode, {
    compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.ESNext, strict: true }
  });
  // Run emitted JS in a Function with log in scope
  new Function('log', result.outputText)(log);
} catch (e) {
  log('Error:', e.message || e);
}
</script>
</body>
</html>`;
}

function focusedSnippet(item) {
  const slug = item.slug;
  if (slug.includes('simple') || slug.includes('primitive') || slug === 'js-type-system' || slug === 'everyday-types') {
    return `const lesson: string = '${escapeSingle(item.enTitle)}';
const attempts: number = 3;
const complete: boolean = attempts > 2;
log(lesson, 'complete:', complete);`;
  }
  if (slug.includes('array') || slug.includes('tuple') || slug.includes('iterators') || slug.includes('collections')) {
    return `const lessons: string[] = ['types', 'arrays', 'tuples'];
const progress: [string, number] = ['completed', lessons.length];
for (const lesson of lessons) {
  log(lesson.toUpperCase());
}
log(progress[0], progress[1]);`;
  }
  if (slug.includes('object') || slug.includes('interface') || slug.includes('aliases') || slug.includes('web-apis') || slug.includes('dom')) {
    return `interface Lesson {
  title: string;
  minutes?: number;
  readonly track: 'learn' | 'reference' | 'official';
}
const lesson: Lesson = { title: '${escapeSingle(item.enTitle)}', minutes: 12, track: '${item.track}' };
log(lesson.title, lesson.minutes ?? 0, lesson.track);`;
  }
  if (slug.includes('union') || slug.includes('narrow') || slug.includes('guard') || slug.includes('typeof') || slug.includes('equality')) {
    return `type Result = { ok: true; value: number } | { ok: false; error: string };
function format(result: Result): string {
  if (result.ok) return 'value ' + result.value.toFixed(1);
  return 'error ' + result.error;
}
log(format({ ok: true, value: 42 }));
log(format({ ok: false, error: 'missing input' }));`;
  }
  if (slug.includes('function') || slug.includes('signature')) {
    return `type Formatter<T> = (value: T) => string;
const formatNumber: Formatter<number> = (value) => value.toFixed(2);
function label<T>(name: string, value: T, format: Formatter<T>): string {
  return name + ': ' + format(value);
}
log(label('score', 98.126, formatNumber));`;
  }
  if (slug.includes('class')) {
    return `interface Printable {
  label(): string;
}
class LessonCard implements Printable {
  constructor(private title: string, public level: 'basic' | 'advanced') {}
  label(): string {
    return this.title + ' is ' + this.level;
  }
}
log(new LessonCard('${escapeSingle(item.enTitle)}', 'advanced').label());`;
  }
  if (slug.includes('generic') || slug.includes('utility') || slug.includes('keyof') || slug.includes('indexed') || slug.includes('mapped') || slug.includes('conditional') || slug.includes('template') || slug.includes('type-from-types')) {
    return `type User = { id: number; name: string; active: boolean };
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
type PublicUser = Pick<User, 'id' | 'name'>;
const user: PublicUser = { id: 1, name: 'Ada' };
log(getValue(user, 'name'));`;
  }
  if (slug.includes('null') || slug.includes('unknown') || slug.includes('json') || slug.includes('casting') || slug.includes('error')) {
    return `function parseTitle(value: unknown): string {
  if (typeof value === 'object' && value !== null && 'title' in value) {
    const title = (value as { title?: unknown }).title;
    if (typeof title === 'string') return title;
  }
  return 'Untitled';
}
log(parseTitle(JSON.parse('{"title":"${escapeJsonString(item.enTitle)}"}')));`;
  }
  if (slug.includes('async') || slug.includes('promise')) {
    return `async function loadLesson(): Promise<{ title: string; ready: boolean }> {
  return { title: '${escapeSingle(item.enTitle)}', ready: true };
}
loadLesson().then((lesson) => {
  log(lesson.title, lesson.ready ? 'ready' : 'pending');
});`;
  }
  if (slug.includes('module')) {
    return `type ModuleInfo = { mode: 'ESM' | 'CommonJS'; typeOnlyImports: boolean };
const info: ModuleInfo = { mode: 'ESM', typeOnlyImports: true };
log('Module mode:', info.mode);
log('Uses import type:', info.typeOnlyImports);`;
  }
  if (slug.includes('config') || slug.includes('compiler') || slug.includes('tsc') || slug.includes('project') || slug.includes('tooling')) {
    return `type CompilerMode = 'check' | 'emit' | 'build';
const options: { strict: boolean; mode: CompilerMode; target: string } = {
  strict: true,
  mode: 'check',
  target: 'ES2020',
};
log('strict:', options.strict, 'mode:', options.mode, 'target:', options.target);`;
  }
  if (slug.includes('enum') || slug.includes('literal') || slug.includes('symbol') || slug.includes('bigint')) {
    return `const Status = {
  Draft: 'draft',
  Published: 'published',
} as const;
type Status = typeof Status[keyof typeof Status];
const current: Status = Status.Published;
log('status:', current);`;
  }
  if (slug.includes('decorator')) {
    return `type Constructor<T = object> = new (...args: any[]) => T;
function tag<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    tag = '${escapeSingle(item.slug)}';
  };
}
class BaseLesson {}
const TaggedLesson = tag(BaseLesson);
log(new TaggedLesson().tag);`;
  }
  return `type Lesson = {
  title: string;
  track: 'learn' | 'reference' | 'official';
  terms: string[];
};
const lesson: Lesson = {
  title: '${escapeSingle(item.enTitle)}',
  track: '${item.track}',
  terms: [${item.terms.map((termItem) => `'${escapeSingle(termItem.syntax)}'`).join(', ')}],
};
log(lesson.title, lesson.track, lesson.terms.join(', '));`;
}

function optionTableSnippet(item) {
  return `type Term = { syntax: string; purpose: string };
const terms: Term[] = [
${item.terms.map((termItem) => `  { syntax: '${escapeSingle(termItem.syntax)}', purpose: '${escapeSingle(termItem.en)}' }`).join(',\n')}
];
for (const term of terms) {
  log(term.syntax + ' => ' + term.purpose);
}`;
}

function completePracticeSnippet(item) {
  return `interface PracticeStep {
  id: number;
  action: string;
  done: boolean;
}
const steps: PracticeStep[] = [
  { id: 1, action: 'Read ${escapeSingle(item.enTitle)}', done: true },
  { id: 2, action: 'Change the TypeScript source', done: false },
  { id: 3, action: 'Compare types with runtime output', done: false },
];
const remaining = steps.filter((step) => !step.done);
log('Practice page:', '${escapeSingle(item.slug)}');
log('Remaining steps:', remaining.map((step) => step.action).join(' | '));`;
}

function referenceSnippet(item) {
  return `type ReferenceTerm = {
  syntax: string;
  meaning: string;
  source: 'MDN-style' | 'TypeScript';
};
const terms: ReferenceTerm[] = [
${item.terms.map((termItem) => `  { syntax: '${escapeSingle(termItem.syntax)}', meaning: '${escapeSingle(termItem.en)}', source: 'MDN-style' }`).join(',\n')}
];
terms.forEach((term) => log(term.source, term.syntax, '-', term.meaning));`;
}

function officialTraceSnippet(item) {
  return `type OfficialStep = 'open docs' | 'read handbook' | 'compile sample' | 'check tsconfig';
const steps: OfficialStep[] = ['open docs', 'read handbook', 'compile sample', 'check tsconfig'];
log('${escapeSingle(item.enTitle)} official reading trace');
for (const [index, step] of steps.entries()) {
  log(index + 1, step);
}`;
}

function typescriptMistakes(item, locale) {
  if (locale === 'fa') {
    return [
      `- کپی کردن ${item.faTitle} بدون فعال کردن \`strict\` یا بدون نگاه به output واقعی JavaScript.`,
      '- استفاده از `any` یا assertion برای پنهان کردن data نامطمئن به جای `unknown`، guard و validation.',
      `- فراموش کردن تست \`${item.terms[0].syntax}\` با input نامعتبر، null/undefined و boundaryهای module یا DOM.`,
    ];
  }
  return [
    `- Copying ${item.enTitle} without enabling \`strict\` or checking the real emitted JavaScript.`,
    '- Using `any` or assertions to hide uncertain data instead of `unknown`, guards, and validation.',
    `- Forgetting to test \`${item.terms[0].syntax}\` with invalid input, null/undefined, and module or DOM boundaries.`,
  ];
}

function practiceSignal(item, locale) {
  if (locale === 'fa') {
    if (item.slug.includes('async') || item.slug.includes('promise')) return 'Promise<T> روشن، error path قابل فهم و return type دقیق';
    if (item.slug.includes('dom') || item.slug.includes('web')) return 'null check، narrowing برای HTMLElement و event target امن';
    if (item.slug.includes('generic') || item.slug.includes('keyof') || item.slug.includes('mapped') || item.slug.includes('conditional')) return 'API generic خوانا، constraint دقیق و inference بدون annotation اضافی';
    if (item.slug.includes('union') || item.slug.includes('narrow') || item.slug.includes('guard')) return 'narrowing قابل توضیح و پوشش همه caseهای union';
    if (item.slug.includes('config') || item.slug.includes('compiler') || item.slug.includes('tsc')) return 'tsconfig روشن، strictness قابل دفاع و typecheck قابل تکرار در CI';
    return 'هماهنگی type، value runtime، inference و خروجی قابل مشاهده';
  }
  if (item.slug.includes('async') || item.slug.includes('promise')) return 'clear Promise<T>, understandable error paths, and precise return types';
  if (item.slug.includes('dom') || item.slug.includes('web')) return 'null checks, HTMLElement narrowing, and safe event targets';
  if (item.slug.includes('generic') || item.slug.includes('keyof') || item.slug.includes('mapped') || item.slug.includes('conditional')) return 'readable generic APIs, precise constraints, and inference without extra annotations';
  if (item.slug.includes('union') || item.slug.includes('narrow') || item.slug.includes('guard')) return 'explainable narrowing and complete union-case coverage';
  if (item.slug.includes('config') || item.slug.includes('compiler') || item.slug.includes('tsc')) return 'clear tsconfig, defensible strictness, and repeatable CI typechecks';
  return 'alignment between types, runtime values, inference, and visible output';
}

function enExampleHeading(item, index) {
  const headings = ['Focused TypeScript pattern', 'Syntax options in context', 'Complete practice page'];
  return headings[index] ?? item.enTitle;
}

function faExampleHeading(item, index) {
  const headings = ['الگوی TypeScript متمرکز', 'گزینه‌های syntax در context', 'صفحه تمرینی کامل'];
  return headings[index] ?? item.faTitle;
}

function flattenNav(nav) {
  return nav.flatMap((item) => [item, ...(item.children ? flattenNav(item.children) : [])]);
}

async function validateModel(meta) {
  const allSeo = new Map();
  for (const track of meta.tracks) {
    const navSlugs = flattenNav(track.nav).map((item) => item.slug);
    const pages = TRACK_PAGES[track.id];
    const pageSlugs = pages.map((item) => item.slug);
    assertUnique(navSlugs, `${track.id} nav`);
    assertUnique(pageSlugs, `${track.id} pages`);
    if (navSlugs.join('|') !== pageSlugs.join('|')) {
      throw new Error(`Nav/page mismatch for ${track.id}: ${navSlugs.join(', ')} !== ${pageSlugs.join(', ')}`);
    }
    for (const locale of LOCALES) {
      for (const item of pages) {
        const seo = seoDescriptionFor(item, locale);
        if (seo.length < 145 || seo.length > 160) {
          throw new Error(`${locale}/${track.id}/${item.slug} seoDescription length is ${seo.length}: ${seo}`);
        }
        const key = `${locale}:${seo}`;
        if (allSeo.has(key)) {
          throw new Error(`Duplicate ${locale} seoDescription for ${allSeo.get(key)} and ${track.id}/${item.slug}`);
        }
        allSeo.set(key, `${track.id}/${item.slug}`);
      }
    }
  }
}

async function validateFiles(meta) {
  for (const track of meta.tracks) {
    for (const item of flattenNav(track.nav)) {
      for (const locale of LOCALES) {
        const file = path.join(DOCS_ROOT, locale, track.id, `${item.slug}.md`);
        await fs.access(file);
      }
    }
  }
  for (const locale of LOCALES) {
    const legacy = path.join(DOCS_ROOT, locale, 'introduction.md');
    try {
      await fs.access(legacy);
      throw new Error(`Legacy flat file still exists: ${legacy}`);
    } catch (error) {
      if (error?.code !== 'ENOENT') throw error;
    }
  }
}

function assertUnique(values, label) {
  const seen = new Set();
  for (const value of values) {
    if (seen.has(value)) throw new Error(`Duplicate ${label} value: ${value}`);
    seen.add(value);
  }
}

function seoLength(value, locale) {
  const min = 145;
  const max = 160;
  let text = String(value).replace(/\s+/g, ' ').trim();
  if (!/[.!?]$/u.test(text)) text = `${text}.`;

  const inserts =
    locale === 'fa'
      ? [' همراه تمرین کاربردی', ' برای پروژه واقعی وب', ' با نکته compiler', ' در مسیر MEGA JS']
      : [' with practical drills', ' for real-world projects', ' with compiler checks', ' on the MEGA JS path'];

  if (text.length < min) {
    let grown = text;
    for (const insert of inserts) {
      grown = `${grown.replace(/[.!?]$/u, '')}${insert}.`.replace(/\s+/g, ' ').trim();
      if (grown.length >= min && grown.length <= max) return grown;
      if (grown.length > max) {
        const fitted = fitWindow(grown, min, max);
        if (fitted) return fitted;
        break;
      }
    }
    text = grown;
  }

  if (text.length > max) {
    const fitted = fitWindow(text, min, max);
    if (fitted) return fitted;
  }

  if (text.length < min || text.length > max) {
    throw new Error(`Unable to fit SEO description (${text.length}): ${text}`);
  }
  return text;
}

function fitWindow(value, min, max) {
  const source = String(value).replace(/\s+/g, ' ').trim();
  const banned = /(و|یا|با|برای|در|از|به|که|روی|درباره|نکته|and|or|with|for|to|of|in|a|the|on|Ideal|Includes|همراه|مناسب)$/iu;
  for (let size = max; size >= min; size -= 1) {
    let cut = source.slice(0, size);
    const space = cut.lastIndexOf(' ');
    if (space >= min - 1) cut = cut.slice(0, space);
    cut = cut.replace(/[،؛,:\-\s.]+$/u, '').trim();
    cut = cut.replace(/\s+/g, ' ').replace(banned, '').trim();
    if (!cut || cut.length < min - 1) continue;
    const closed = `${cut}.`;
    if (closed.length >= min && closed.length <= max && !banned.test(closed.slice(0, -1))) {
      return closed;
    }
  }
  return null;
}

function yamlString(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function codeFence(code) {
  return ['```html', code.trim(), '```'].join('\n');
}

function indent(value, spaces) {
  const prefix = ' '.repeat(spaces);
  return value.split('\n').map((line) => `${prefix}${line}`).join('\n');
}

function templateLiteralEscape(value) {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${')
    .replace(/<\/script/gi, '<\\/script');
}

function escapeSingle(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function escapeJsonString(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

async function writeDocs() {
  const meta = metaJson();
  await validateModel(meta);

  await fs.mkdir(DOCS_ROOT, { recursive: true });
  for (const locale of LOCALES) {
    await fs.rm(path.join(DOCS_ROOT, locale), { recursive: true, force: true });
    for (const track of meta.tracks) {
      await fs.mkdir(path.join(DOCS_ROOT, locale, track.id), { recursive: true });
    }
  }

  await fs.writeFile(path.join(DOCS_ROOT, 'meta.json'), `${JSON.stringify(meta, null, 2)}\n`, 'utf8');

  const counts = {};
  for (const track of meta.tracks) {
    counts[track.id] = { pages: TRACK_PAGES[track.id].length, files: 0 };
    const pages = TRACK_PAGES[track.id];
    for (const [index, item] of pages.entries()) {
      const next = pages[index + 1] ?? null;
      for (const locale of LOCALES) {
        const contents = `${frontmatter(item, locale)}${bodyFor(item, next, locale)}`;
        const file = path.join(DOCS_ROOT, locale, track.id, `${item.slug}.md`);
        await fs.writeFile(file, contents, 'utf8');
        counts[track.id].files += 1;
      }
    }
  }

  await validateFiles(meta);

  console.log('Generated TypeScript docs into three tracks.');
  for (const track of meta.tracks) {
    console.log(`${track.id}: ${counts[track.id].pages} pages, ${counts[track.id].files} markdown files`);
  }
  console.log(`Total pages per locale: ${Object.values(counts).reduce((sum, count) => sum + count.pages, 0)}`);
  console.log(`Meta JSON: ${path.join(DOCS_ROOT, 'meta.json')}`);
  console.log('Sample paths:');
  console.log(`- ${path.join(DOCS_ROOT, 'fa/learn/introduction.md')}`);
  console.log(`- ${path.join(DOCS_ROOT, 'en/reference/overview.md')}`);
  console.log(`- ${path.join(DOCS_ROOT, 'fa/official/overview.md')}`);
}

writeDocs().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
