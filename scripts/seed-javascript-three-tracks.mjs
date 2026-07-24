import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_ROOT = path.join(ROOT, 'apps/web/content/docs/javascript');
const LOCALES = ['fa', 'en'];

const SOURCE_W3 = {
  name: 'W3Schools JavaScript',
  url: 'https://www.w3schools.com/js/default.asp',
};
const SOURCE_MDN = {
  name: 'MDN JavaScript',
  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
};
const SOURCE_MDN_REFERENCE = {
  name: 'MDN JavaScript Reference',
  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',
};
const SOURCE_ECMA = {
  name: 'ECMA-262',
  url: 'https://tc39.es/ecma262/',
};
const SOURCE_TC39 = {
  name: 'TC39',
  url: 'https://tc39.es/',
};

const TRACK_SOURCES = {
  learn: [
    {
      name: 'W3Schools JavaScript Tutorial',
      url: 'https://www.w3schools.com/js/default.asp',
    },
    SOURCE_MDN,
  ],
  reference: [
    {
      name: 'MDN Web Docs — JavaScript',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    SOURCE_MDN_REFERENCE,
  ],
  official: [SOURCE_ECMA, SOURCE_TC39],
};

function t(syntax, en, fa) {
  return { syntax, en, fa };
}

function page(slug, enTitle, faTitle, enFocus, faFocus, terms, keywords = []) {
  return { slug, enTitle, faTitle, enFocus, faFocus, terms, keywords };
}

function jsPage(slug, enTitle, faTitle, enFocus, faFocus, terms = termsFor(slug, enTitle, faTitle), keywords = keywordsFor(slug, enTitle)) {
  return page(slug, enTitle, faTitle, enFocus, faFocus, terms, keywords);
}

const LEARN_INTRO = page(
  'introduction',
  'Introduction to JavaScript',
  'مقدمه JavaScript',
  'what JavaScript does in the browser, how it reaches the DOM, and how this W3Schools-style path is organized',
  'اینکه JavaScript در مرورگر چه می‌کند، چگونه به DOM می‌رسد و این مسیر آموزشی W3Schools-style چگونه چیده شده است',
  [
    t('<script>', 'runs JavaScript inside an HTML document', 'JavaScript را داخل سند HTML اجرا می‌کند'),
    t('console.log()', 'prints values in the DevTools Console', 'valueها را در DevTools Console چاپ می‌کند'),
    t('DOM', 'the live document tree JavaScript can read and change', 'درخت زنده سند که JavaScript می‌تواند بخواند و تغییر دهد'),
  ],
  ['JavaScript introduction', 'JavaScript tutorial', 'browser scripting'],
);

const LEARN_SECTIONS = [
  section('getting-started', 'JavaScript Getting Started', 'شروع کار با JavaScript', 'placing scripts, seeing output, reading statements, and writing valid beginner syntax', 'قرار دادن script، دیدن output، خواندن statementها و نوشتن syntax معتبر برای شروع', [
    ['where-to', 'Where To Place JavaScript', 'کجا JavaScript بنویسیم', 'choosing inline scripts, deferred files, modules, and browser-safe loading locations', 'انتخاب script داخلی، فایل defer شده، module و محل load امن در مرورگر'],
    ['output', 'JavaScript Output', 'Output در JavaScript', 'showing results with the DOM, console, alerts, and output elements during practice', 'نمایش نتیجه با DOM، console، alert و output element هنگام تمرین'],
    ['statements', 'JavaScript Statements', 'Statementها در JavaScript', 'reading one executable instruction at a time and grouping statements into programs', 'خواندن هر دستور اجرایی و گروه‌بندی statementها در یک برنامه'],
    ['syntax', 'JavaScript Syntax', 'Syntax در JavaScript', 'writing identifiers, literals, expressions, blocks, and semicolons predictably', 'نوشتن identifier، literal، expression، block و semicolon به شکل قابل پیش‌بینی'],
    ['comments', 'JavaScript Comments', 'کامنت‌ها در JavaScript', 'documenting intent with line and block comments without changing runtime behavior', 'مستند کردن intent با line comment و block comment بدون تغییر رفتار runtime'],
  ]),
  section('variables-operators', 'Variables and Operators', 'متغیرها و عملگرها', 'storing values, choosing declarations, and combining values with operators safely', 'نگه‌داری valueها، انتخاب declaration درست و ترکیب valueها با operatorها به شکل امن', [
    ['variables', 'JavaScript Variables', 'متغیرهای JavaScript', 'naming values and understanding reassignment, initialization, and readable state', 'نام‌گذاری valueها و درک reassignment، initialization و state خوانا'],
    ['let', 'JavaScript let', 'کلمه let در JavaScript', 'declaring block-scoped variables that can change later', 'تعریف variable با block scope که بعداً می‌تواند تغییر کند'],
    ['const', 'JavaScript const', 'کلمه const در JavaScript', 'declaring bindings that should not be reassigned while objects may still mutate', 'تعریف bindingهایی که نباید reassignment شوند، حتی اگر object بتواند mutate شود'],
    ['operators', 'JavaScript Operators', 'Operatorها در JavaScript', 'combining operands with arithmetic, comparison, logical, and nullish operators', 'ترکیب operandها با arithmetic، comparison، logical و nullish operator'],
    ['arithmetic', 'JavaScript Arithmetic', 'Arithmetic در JavaScript', 'calculating numeric results while noticing coercion, precedence, and NaN', 'محاسبه نتیجه عددی همراه توجه به coercion، precedence و NaN'],
    ['assignment', 'JavaScript Assignment', 'Assignment در JavaScript', 'updating bindings with plain, compound, logical, and destructuring assignment', 'به‌روزرسانی bindingها با assignment ساده، compound، logical و destructuring'],
    ['data-types', 'JavaScript Data Types', 'Data Typeها در JavaScript', 'working with primitive values, objects, typeof, null, undefined, and conversion boundaries', 'کار با primitive valueها، object، typeof، null، undefined و مرزهای conversion'],
  ]),
  section('functions-objects-basics', 'Functions and Object Basics', 'توابع و objectها', 'organizing behavior with functions, objects, properties, methods, and browser events', 'سازمان‌دهی رفتار با function، object، property، method و eventهای مرورگر', [
    ['functions', 'JavaScript Functions', 'تابع‌ها در JavaScript', 'declaring reusable behavior, passing arguments, returning values, and keeping side effects visible', 'تعریف رفتار قابل استفاده مجدد، ارسال argument، برگشت دادن value و روشن نگه داشتن side effect'],
    ['objects', 'JavaScript Objects', 'Objectها در JavaScript', 'grouping related data and behavior with object literals and references', 'گروه‌بندی data و behavior مرتبط با object literal و reference'],
    ['object-properties', 'Object Properties', 'Propertyهای object', 'reading, writing, checking, and deleting object properties safely', 'خواندن، نوشتن، بررسی و حذف propertyهای object به شکل امن'],
    ['object-methods', 'Object Methods', 'Methodهای object', 'putting functions on objects and understanding method calls and this', 'قرار دادن function روی object و درک method call و this'],
    ['events', 'JavaScript Events', 'Eventها در JavaScript', 'responding to clicks, input, submit, keyboard, and browser events with listeners', 'واکنش به click، input، submit، keyboard و eventهای مرورگر با listener'],
  ]),
  section('strings-numbers', 'Strings and Numbers', 'رشته و عدد', 'formatting text, searching strings, calculating numbers, and choosing numeric tools', 'فرمت کردن text، جست‌وجوی string، محاسبه number و انتخاب ابزار عددی درست', [
    ['strings', 'JavaScript Strings', 'Stringها در JavaScript', 'creating text values, escaping characters, and reading length and indexes', 'ساخت value متنی، escape کردن character و خواندن length و index'],
    ['string-templates', 'Template Strings', 'Template Stringها', 'using template literals for interpolation, multiline text, and readable HTML snippets', 'استفاده از template literal برای interpolation، متن چندخطی و snippetهای HTML خوانا'],
    ['string-methods', 'String Methods', 'Methodهای String', 'transforming, slicing, padding, trimming, and normalizing text', 'تبدیل، slice، pad، trim و normalize کردن text'],
    ['string-search', 'String Search', 'جست‌وجو در String', 'finding substrings with includes, indexOf, startsWith, endsWith, and match', 'پیدا کردن substring با includes، indexOf، startsWith، endsWith و match'],
    ['numbers', 'JavaScript Numbers', 'Numberها در JavaScript', 'using double-precision numbers, infinity, NaN, rounding, and safe integer limits', 'استفاده از numberهای double precision، infinity، NaN، rounding و محدودیت safe integer'],
    ['bigint', 'JavaScript BigInt', 'BigInt در JavaScript', 'representing integers beyond Number safe limits without mixing numeric kinds accidentally', 'نمایش integerهای فراتر از safe limit بدون mix تصادفی نوع‌های numeric'],
    ['number-methods', 'Number Methods', 'Methodهای Number', 'formatting and checking numbers with Number APIs and numeric parsing', 'فرمت و بررسی number با APIهای Number و parsing عددی'],
    ['booleans', 'JavaScript Booleans', 'Booleanها در JavaScript', 'modeling true and false state while understanding truthy and falsy values', 'مدل کردن state درست و نادرست همراه درک truthy و falsy valueها'],
  ]),
  section('collections-dates', 'Arrays, Collections, and Dates', 'آرایه، مجموعه و تاریخ', 'storing ordered data, transforming collections, sorting, iterating, and handling time', 'نگه‌داری data مرتب، تبدیل collection، sort، iteration و کار با time', [
    ['arrays', 'JavaScript Arrays', 'Arrayها در JavaScript', 'storing ordered values and choosing mutating or non-mutating operations', 'نگه‌داری valueهای مرتب و انتخاب operationهای mutating یا non-mutating'],
    ['array-methods', 'Array Methods', 'Methodهای Array', 'using map, filter, reduce, find, some, every, and modern copy methods', 'استفاده از map، filter، reduce، find، some، every و methodهای copy مدرن'],
    ['array-sort', 'Array Sort', 'Sort کردن Array', 'sorting numbers, strings, objects, and stable lists with compare functions', 'sort کردن number، string، object و list پایدار با compare function'],
    ['array-iteration', 'Array Iteration', 'Iteration روی Array', 'looping and deriving values with callbacks, for...of, entries, keys, and values', 'loop زدن و استخراج value با callback، for...of، entries، keys و values'],
    ['dates', 'JavaScript Dates', 'Dateها در JavaScript', 'creating Date objects and understanding local time, UTC, timestamps, and parsing risks', 'ساخت Date object و درک local time، UTC، timestamp و ریسک parsing'],
    ['date-formats', 'Date Formats', 'Formatهای Date', 'formatting dates for users while separating storage, display, and locale concerns', 'فرمت کردن date برای کاربر همراه جداسازی storage، display و locale'],
    ['date-get', 'Date Get Methods', 'Methodهای get در Date', 'reading year, month, day, time, timezone-sensitive values, and timestamps', 'خواندن year، month، day، time، valueهای وابسته به timezone و timestamp'],
    ['date-set', 'Date Set Methods', 'Methodهای set در Date', 'changing date parts while recognizing overflow, mutation, and local time behavior', 'تغییر بخش‌های date همراه شناخت overflow، mutation و رفتار local time'],
    ['math', 'JavaScript Math', 'Math در JavaScript', 'using Math constants and functions for rounding, limits, geometry, and randomization', 'استفاده از ثابت‌ها و functionهای Math برای rounding، limit، geometry و randomization'],
    ['random', 'JavaScript Random', 'Random در JavaScript', 'generating practical random values and knowing when cryptographic randomness is required', 'ساخت random value کاربردی و شناخت زمان نیاز به randomness رمزنگارانه'],
    ['sets', 'JavaScript Sets', 'Setها در JavaScript', 'keeping unique values and using set-style operations in application state', 'نگه‌داری valueهای یکتا و استفاده از operationهای شبیه set در state برنامه'],
    ['maps', 'JavaScript Maps', 'Mapها در JavaScript', 'storing key-value data with arbitrary keys and predictable iteration order', 'نگه‌داری data کلید-مقدار با key دلخواه و ترتیب iteration قابل پیش‌بینی'],
  ]),
  section('control-flow', 'Control Flow', 'جریان کنترل', 'making decisions, looping, comparing values, converting types, matching patterns, and handling errors', 'تصمیم‌گیری، loop، مقایسه valueها، تبدیل type، match الگو و مدیریت error', [
    ['comparisons', 'JavaScript Comparisons', 'مقایسه‌ها در JavaScript', 'comparing values with strict equality, relational operators, and predictable coercion choices', 'مقایسه valueها با strict equality، operatorهای relational و انتخاب coercion قابل پیش‌بینی'],
    ['if-else', 'JavaScript if else', 'if else در JavaScript', 'branching with clear conditions, guard clauses, and readable boolean logic', 'branch کردن با condition روشن، guard clause و منطق Boolean خوانا'],
    ['switch', 'JavaScript switch', 'switch در JavaScript', 'choosing among many discrete cases with strict matching and explicit breaks', 'انتخاب از میان caseهای مجزا با matching strict و break آشکار'],
    ['loop-for', 'JavaScript for Loop', 'Loop با for در JavaScript', 'running counted loops while controlling initialization, condition, and update', 'اجرای loop شمارشی همراه کنترل initialization، condition و update'],
    ['loop-while', 'JavaScript while Loop', 'Loop با while در JavaScript', 'looping while a condition remains true and preventing accidental infinite loops', 'loop تا زمانی که condition درست است و جلوگیری از infinite loop ناخواسته'],
    ['loop-for-in', 'JavaScript for in', 'for in در JavaScript', 'iterating enumerable object keys while avoiding array-order surprises', 'iteration روی keyهای enumerable object و پرهیز از غافلگیری ترتیب Array'],
    ['loop-for-of', 'JavaScript for of', 'for of در JavaScript', 'iterating iterable values from arrays, strings, maps, sets, and generators', 'iteration روی iterable value از Array، String، Map، Set و generator'],
    ['break-continue', 'JavaScript Break and Continue', 'Break و Continue در JavaScript', 'leaving loops early or skipping one iteration without hiding control flow', 'خروج زود از loop یا رد کردن یک iteration بدون پنهان کردن جریان کنترل'],
    ['typeof-conversion', 'typeof and Type Conversion', 'typeof و Type Conversion', 'inspecting values and converting explicitly with Number, String, Boolean, and JSON', 'بررسی value و تبدیل explicit با Number، String، Boolean و JSON'],
    ['bitwise', 'JavaScript Bitwise', 'Bitwise در JavaScript', 'using 32-bit bit operations carefully for flags, masks, and low-level transforms', 'استفاده دقیق از operationهای bitwise سی‌ودوبیتی برای flag، mask و transform سطح پایین'],
    ['regexp', 'JavaScript RegExp', 'RegExp در JavaScript', 'matching text patterns with literals, flags, groups, and safe validation boundaries', 'match کردن الگوی text با literal، flag، group و مرز validation امن'],
    ['errors', 'JavaScript Errors', 'Errorها در JavaScript', 'throwing, catching, classifying, and reporting runtime failures clearly', 'throw، catch، طبقه‌بندی و گزارش failureهای runtime به شکل روشن'],
  ]),
  section('language-core', 'Language Core', 'هسته زبان', 'understanding scope, hoisting, this, classes, modules, JSON, debugging, style, mistakes, and performance', 'درک scope، hoisting، this، class، module، JSON، debugging، style، mistake و performance', [
    ['scope', 'JavaScript Scope', 'Scope در JavaScript', 'knowing where bindings live across global, module, function, and block scopes', 'دانستن محل زندگی bindingها در global، module، function و block scope'],
    ['hoisting', 'JavaScript Hoisting', 'Hoisting در JavaScript', 'understanding declaration instantiation before execution and the temporal dead zone', 'درک declaration instantiation پیش از execution و temporal dead zone'],
    ['strict-mode', 'JavaScript Strict Mode', 'Strict Mode در JavaScript', 'opting into stricter runtime rules and safer errors for older risky behavior', 'فعال کردن ruleهای runtime سخت‌گیرانه‌تر و error امن‌تر برای رفتارهای قدیمی پرریسک'],
    ['this-keyword', 'JavaScript this Keyword', 'کلمه this در JavaScript', 'reading this from call sites, methods, constructors, modules, and arrow functions', 'خواندن this از call site، method، constructor، module و arrow function'],
    ['arrow-functions', 'JavaScript Arrow Functions', 'Arrow Functionها در JavaScript', 'writing concise functions with lexical this and expression returns', 'نوشتن function کوتاه با lexical this و expression return'],
    ['classes', 'JavaScript Classes', 'Classها در JavaScript', 'using class syntax over prototypes for constructors, methods, fields, and inheritance', 'استفاده از syntax کلاس روی prototype برای constructor، method، field و inheritance'],
    ['modules', 'JavaScript Modules', 'Moduleها در JavaScript', 'splitting code with import and export while keeping dependencies explicit', 'تقسیم code با import و export همراه روشن نگه داشتن dependency'],
    ['json', 'JavaScript JSON', 'JSON در JavaScript', 'serializing structured data safely with JSON.parse and JSON.stringify', 'serialize کردن data ساختاریافته با JSON.parse و JSON.stringify به شکل امن'],
    ['debugging', 'JavaScript Debugging', 'Debugging در JavaScript', 'using console, breakpoints, watch expressions, network panels, and stack traces', 'استفاده از console، breakpoint، watch expression، network panel و stack trace'],
    ['style-guide', 'JavaScript Style Guide', 'Style Guide در JavaScript', 'keeping code readable with naming, formatting, small functions, and predictable modules', 'خوانا نگه داشتن code با naming، formatting، function کوچک و module قابل پیش‌بینی'],
    ['best-practices', 'JavaScript Best Practices', 'Best Practiceهای JavaScript', 'writing maintainable JavaScript with explicit data flow, errors, tests, and accessibility', 'نوشتن JavaScript نگه‌داری‌پذیر با data flow، error، test و accessibility روشن'],
    ['mistakes', 'JavaScript Common Mistakes', 'اشتباه‌های رایج JavaScript', 'avoiding implicit globals, loose equality surprises, mutation leaks, and async races', 'پرهیز از global ضمنی، غافلگیری equality loose، نشت mutation و race در async'],
    ['performance', 'JavaScript Performance', 'Performance در JavaScript', 'measuring main-thread work, DOM updates, memory, network, and event loop responsiveness', 'اندازه‌گیری کار main thread، updateهای DOM، memory، network و پاسخ‌گویی event loop'],
  ]),
  section('async-js', 'Asynchronous JavaScript', 'Async در JavaScript', 'coordinating callbacks, promises, async/await, timers, microtasks, and user feedback', 'هماهنگ کردن callback، Promise، async/await، timer، microtask و feedback کاربر', [
    ['callbacks', 'JavaScript Callbacks', 'Callbackها در JavaScript', 'passing functions to run later while keeping errors and ownership understandable', 'ارسال function برای اجرای بعدی همراه قابل فهم نگه داشتن error و ownership'],
    ['promises', 'JavaScript Promises', 'Promiseها در JavaScript', 'representing future results with fulfillment, rejection, chaining, and error propagation', 'نمایش نتیجه آینده با fulfillment، rejection، chaining و propagation خطا'],
    ['async-await', 'JavaScript async await', 'async/await در JavaScript', 'writing Promise code with synchronous-looking control flow and clear try/catch blocks', 'نوشتن code مبتنی بر Promise با جریان شبیه sync و blockهای try/catch روشن'],
    ['timers', 'JavaScript Timers', 'Timerها در JavaScript', 'using setTimeout, setInterval, animation frames, and cleanup responsibly', 'استفاده مسئولانه از setTimeout، setInterval، animation frame و cleanup'],
  ]),
  section('dom-bom', 'DOM and BOM', 'DOM و BOM', 'reading and changing documents, handling browser windows, location, history, navigator, and storage', 'خواندن و تغییر document، مدیریت window، location، history، navigator و storage مرورگر', [
    ['dom-intro', 'DOM Introduction', 'مقدمه DOM', 'seeing the document as a tree of nodes that JavaScript can query and update', 'دیدن document به عنوان tree از nodeها که JavaScript می‌تواند query و update کند'],
    ['dom-methods', 'DOM Methods', 'Methodهای DOM', 'selecting, creating, appending, removing, and measuring elements with DOM APIs', 'select، create، append، remove و measure کردن element با APIهای DOM'],
    ['dom-elements', 'DOM Elements', 'Elementهای DOM', 'working with element objects, attributes, dataset, classList, and text content', 'کار با objectهای element، attribute، dataset، classList و text content'],
    ['dom-html', 'DOM HTML', 'HTML در DOM', 'updating safe text, templates, and markup while avoiding injection risks', 'update کردن text امن، template و markup همراه پرهیز از ریسک injection'],
    ['dom-css', 'DOM CSS', 'CSS در DOM', 'changing classes, inline styles, computed styles, and visual state from JavaScript', 'تغییر class، inline style، computed style و state بصری از JavaScript'],
    ['dom-events', 'DOM Events', 'Eventهای DOM', 'understanding event targets, bubbling, cancellation, and default actions', 'درک event target، bubbling، cancellation و default action'],
    ['dom-event-listener', 'DOM Event Listener', 'Event Listener در DOM', 'adding, removing, and configuring listeners with options like once, passive, and signal', 'افزودن، حذف و تنظیم listener با optionهایی مثل once، passive و signal'],
    ['dom-navigation', 'DOM Navigation', 'Navigation در DOM', 'walking parent, child, sibling, and closest relationships without brittle selectors', 'حرکت در رابطه parent، child، sibling و closest بدون selector شکننده'],
    ['bom-window', 'BOM Window', 'Window در BOM', 'using the window object for viewport, dialogs, scheduling, and global browser capabilities', 'استفاده از window object برای viewport، dialog، scheduling و قابلیت‌های global مرورگر'],
    ['bom-screen', 'BOM Screen', 'Screen در BOM', 'reading screen and viewport information without confusing it with responsive layout rules', 'خواندن اطلاعات screen و viewport بدون اشتباه گرفتن با ruleهای responsive layout'],
    ['bom-location', 'BOM Location', 'Location در BOM', 'reading and changing URLs with location, query strings, hashes, and redirects', 'خواندن و تغییر URL با location، query string، hash و redirect'],
    ['bom-history', 'BOM History', 'History در BOM', 'using pushState, replaceState, popstate, and back-forward navigation thoughtfully', 'استفاده دقیق از pushState، replaceState، popstate و navigation عقب-جلو'],
    ['bom-navigator', 'BOM Navigator', 'Navigator در BOM', 'reading browser capability signals while avoiding unreliable user-agent decisions', 'خواندن signalهای قابلیت مرورگر و پرهیز از تصمیم بر اساس user-agent غیرقابل اعتماد'],
    ['bom-storage', 'BOM Storage', 'Storage در BOM', 'storing small browser data with localStorage, sessionStorage, quota, and privacy in mind', 'نگه‌داری data کوچک مرورگر با localStorage، sessionStorage، quota و توجه به privacy'],
  ]),
  section('web-apis-projects', 'Web APIs and Projects', 'Web API و پروژه‌ها', 'connecting JavaScript to network, location, storage, workers, forms, and a small project', 'وصل کردن JavaScript به network، location، storage، worker، form و یک پروژه کوچک', [
    ['fetch-api', 'Fetch API', 'Fetch API', 'requesting data with fetch, Response objects, JSON, errors, and loading states', 'درخواست data با fetch، Response object، JSON، error و loading state'],
    ['geolocation-api', 'Geolocation API', 'Geolocation API', 'requesting location with permission, success callbacks, errors, and privacy wording', 'درخواست location با permission، callback موفق، error و متن privacy'],
    ['web-storage-api', 'Web Storage API', 'Web Storage API', 'persisting lightweight preferences and drafts with clear serialization boundaries', 'پایدار کردن preference و draft سبک با مرزهای serialization روشن'],
    ['web-workers', 'Web Workers', 'Web Workerها', 'moving expensive work off the main thread with messages and structured clone data', 'انتقال کار سنگین از main thread با message و data مبتنی بر structured clone'],
    ['form-validation', 'JavaScript Form Validation', 'Validation فرم با JavaScript', 'combining constraint validation, custom messages, submit events, and accessible feedback', 'ترکیب constraint validation، پیام custom، submit event و feedback دسترس‌پذیر'],
    ['todo-project', 'Todo Project with JavaScript', 'پروژه Todo با JavaScript', 'building a small stateful DOM app with arrays, events, rendering, and storage', 'ساخت یک DOM app کوچک stateful با Array، event، rendering و storage'],
  ]),
];

const REFERENCE_PAGES = [
  jsPage('overview', 'JavaScript Reference Overview', 'نمای کلی مرجع JavaScript', 'how MDN organizes JavaScript guides, reference pages, built-ins, syntax, and browser integration', 'اینکه MDN چگونه guide، reference، built-in، syntax و integration مرورگر در JavaScript را سازمان می‌دهد', undefined, ['JavaScript reference', 'MDN JavaScript', 'JavaScript docs']),
  jsPage('grammar-types', 'Grammar and Types Reference', 'مرجع Grammar و Typeها', 'lexical grammar, values, literals, declarations, primitive types, objects, and conversions', 'grammar واژگانی، value، literal، declaration، primitive type، object و conversion'),
  jsPage('control-flow-ref', 'Control Flow Reference', 'مرجع جریان کنترل', 'statements for decisions, loops, labels, exceptions, and control transfer', 'statementهای تصمیم، loop، label، exception و انتقال کنترل'),
  jsPage('expressions-operators', 'Expressions and Operators Reference', 'مرجع Expression و Operator', 'operator precedence, assignment, comparison, logical, optional chaining, and nullish coalescing', 'precedence operator، assignment، comparison، logical، optional chaining و nullish coalescing'),
  jsPage('functions-ref', 'Functions Reference', 'مرجع Functionها', 'function declarations, expressions, parameters, return values, closures, rest, spread, and call behavior', 'function declaration، expression، parameter، return، closure، rest، spread و رفتار call'),
  jsPage('classes-ref', 'Classes Reference', 'مرجع Classها', 'class syntax, constructors, fields, methods, private names, static members, and inheritance', 'syntax کلاس، constructor، field، method، private name، عضو static و inheritance'),
  jsPage('promises-async', 'Promises and Async Reference', 'مرجع Promise و Async', 'Promise states, jobs, async functions, await, rejection handling, and concurrency helpers', 'stateهای Promise، job، async function، await، مدیریت rejection و helperهای concurrency'),
  jsPage('closures-scope', 'Closures and Scope Reference', 'مرجع Closure و Scope', 'lexical environments, scope chains, closure lifetime, modules, and memory considerations', 'lexical environment، scope chain، lifetime closure، module و نکته memory'),
  jsPage('prototypes-inheritance', 'Prototypes and Inheritance Reference', 'مرجع Prototype و Inheritance', 'prototype chains, property lookup, constructors, class sugar, and inheritance patterns', 'prototype chain، lookup property، constructor، sugar کلاس و patternهای inheritance'),
  jsPage('builtin-objects', 'Built-in Objects Reference', 'مرجع Objectهای Built-in', 'global objects and constructors such as Object, Function, Date, JSON, Promise, and Reflect', 'object و constructorهای global مثل Object، Function، Date، JSON، Promise و Reflect'),
  jsPage('array-ref', 'Array Reference', 'مرجع Array', 'Array construction, indexing, iteration, mutating methods, copying methods, and sparse arrays', 'ساخت Array، indexing، iteration، methodهای mutating، methodهای copy و sparse array'),
  jsPage('string-number-math', 'String, Number, and Math Reference', 'مرجع String، Number و Math', 'text APIs, numeric parsing, formatting, rounding, NaN checks, and Math utilities', 'APIهای text، parsing عددی، formatting، rounding، بررسی NaN و utilityهای Math'),
  jsPage('map-set-weak', 'Map, Set, WeakMap, and WeakSet Reference', 'مرجع Map، Set، WeakMap و WeakSet', 'keyed collections, uniqueness, weak references, garbage collection behavior, and iteration', 'collectionهای keyدار، uniqueness، reference ضعیف، رفتار garbage collection و iteration'),
  jsPage('regexp-ref', 'RegExp Reference', 'مرجع RegExp', 'regular expression literals, flags, groups, lookarounds, Unicode, match APIs, and validation limits', 'literalهای RegExp، flag، group، lookaround، Unicode، APIهای match و limitهای validation'),
  jsPage('error-handling', 'Error Handling Reference', 'مرجع مدیریت Error', 'Error objects, throw, try/catch/finally, causes, stack traces, and recovery decisions', 'Error object، throw، try/catch/finally، cause، stack trace و تصمیم recovery'),
  jsPage('modules-ref', 'Modules Reference', 'مرجع Moduleها', 'ES modules, import and export forms, static analysis, dynamic import, and browser loading', 'ES module، شکل‌های import و export، static analysis، dynamic import و load در مرورگر'),
  jsPage('iterators-generators', 'Iterators and Generators Reference', 'مرجع Iterator و Generator', 'iterable protocol, iterator protocol, generator functions, yield, and custom iteration', 'protocol iterable، protocol iterator، generator function، yield و iteration custom'),
  jsPage('memory-gc', 'Memory and Garbage Collection', 'Memory و Garbage Collection', 'reachability, closures, weak collections, detached DOM, leaks, and profiling in DevTools', 'reachability، closure، weak collection، DOM جداشده، leak و profiling در DevTools'),
  jsPage('equality-comparisons', 'Equality and Comparisons Reference', 'مرجع Equality و Comparison', 'strict equality, SameValue, SameValueZero, Object.is, ordering, and coercion tradeoffs', 'strict equality، SameValue، SameValueZero، Object.is، ordering و tradeoffهای coercion'),
  jsPage('typed-arrays-ref', 'Typed Arrays Reference', 'مرجع Typed Arrayها', 'ArrayBuffer, typed array views, DataView, binary data, endianness, and Web API integration', 'ArrayBuffer، viewهای typed array، DataView، binary data، endianness و integration با Web API'),
  jsPage('intl-ref', 'Intl Reference', 'مرجع Intl', 'locale-aware formatting, collation, dates, numbers, lists, relative time, and segmentation', 'formatting وابسته به locale، collation، date، number، list، relative time و segmentation'),
  jsPage('web-js-dom', 'JavaScript and the DOM Reference', 'مرجع JavaScript و DOM', 'browser APIs around documents, events, forms, storage, fetch, and Web API boundaries', 'APIهای مرورگر پیرامون document، event، form، storage، fetch و مرز Web API'),
  jsPage('cheatsheet', 'JavaScript Cheatsheet', 'Cheatsheet JavaScript', 'a compact MDN-style review of syntax, values, arrays, objects, async, DOM, and debugging', 'مرور فشرده MDN-style از syntax، value، Array، object، async، DOM و debugging'),
];

const OFFICIAL_PAGES = [
  jsPage('overview', 'ECMA-262 Overview', 'نمای کلی ECMA-262', 'how the ECMAScript specification defines JavaScript language semantics apart from browser Web APIs', 'اینکه specificationهای ECMAScript چگونه semantics زبان JavaScript را جدا از Web APIهای مرورگر تعریف می‌کنند', undefined, ['ECMA-262', 'ECMAScript spec', 'TC39 JavaScript']),
  jsPage('language-types', 'ECMAScript Language Types', 'Typeهای زبان ECMAScript', 'ECMAScript language values, specification types, primitives, objects, and completion records', 'valueهای زبان ECMAScript، typeهای specification، primitive، object و completion record'),
  jsPage('execution-contexts', 'Execution Contexts and Realms', 'Execution Context و Realm', 'execution contexts, realms, lexical environments, environment records, and job execution', 'execution context، realm، lexical environment، environment record و اجرای job'),
  jsPage('ordinary-exotic-objects', 'Ordinary and Exotic Objects', 'Objectهای Ordinary و Exotic', 'object internal methods, property descriptors, ordinary objects, arrays, proxies, and module namespace objects', 'internal methodهای object، property descriptor، ordinary object، Array، Proxy و module namespace object'),
  jsPage('function-objects', 'Function Objects and Calls', 'Function Object و Call', 'function objects, call and construct behavior, closures, this binding, and class constructors', 'function object، رفتار call و construct، closure، this binding و constructor کلاس'),
  jsPage('promises-jobs', 'Promises, Jobs, and Microtasks', 'Promise، Job و Microtask', 'Promise reaction jobs, job queues, microtasks, host hooks, and async function execution', 'Promise reaction job، job queue، microtask، host hook و اجرای async function'),
  jsPage('modules-spec', 'ECMAScript Modules in the Spec', 'Moduleهای ECMAScript در Spec', 'module records, import/export resolution, linking, evaluation, and top-level await', 'module record، resolve شدن import/export، linking، evaluation و top-level await'),
  jsPage('syntax-lexical', 'Lexical and Syntactic Grammar', 'Grammar واژگانی و Syntax', 'tokens, source text, identifiers, literals, automatic semicolon insertion, and early errors', 'token، source text، identifier، literal، automatic semicolon insertion و early error'),
  jsPage('annexes-compatibility', 'Annexes and Compatibility', 'Annexها و Compatibility', 'normative optional behavior, web compatibility annexes, legacy features, and implementation notes', 'رفتار normative optional، annexهای web compatibility، featureهای legacy و نکته implementation'),
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
      jsPage(childSlug, childEnTitle, childFaTitle, childEnFocus, childFaFocus, terms)
    )),
  };
}

function sectionTerms(slug, enTitle, faTitle) {
  if (slug === 'getting-started') {
    return [
      t('<script>', 'connects JavaScript to HTML', 'JavaScript را به HTML وصل می‌کند'),
      t('DevTools Console', 'shows runtime output and errors', 'output و errorهای runtime را نشان می‌دهد'),
      t('statement', 'one executable instruction', 'یک دستور اجرایی است'),
    ];
  }
  if (slug === 'async-js') {
    return [
      t('Promise', 'represents a future result', 'نتیجه آینده را نمایش می‌دهد'),
      t('async/await', 'writes promise flow readably', 'جریان Promise را خواناتر می‌نویسد'),
      t('event loop', 'coordinates tasks and microtasks', 'task و microtask را هماهنگ می‌کند'),
    ];
  }
  if (slug === 'dom-bom') {
    return [
      t('document.querySelector()', 'selects one DOM element', 'یک element از DOM انتخاب می‌کند'),
      t('addEventListener()', 'subscribes to browser events', 'به eventهای مرورگر subscribe می‌کند'),
      t('window', 'the browser global object', 'object global مرورگر است'),
    ];
  }
  if (slug === 'web-apis-projects') {
    return [
      t('fetch()', 'requests network resources', 'resource شبکه را request می‌کند'),
      t('localStorage', 'stores small string data', 'data رشته‌ای کوچک را ذخیره می‌کند'),
      t('Worker', 'runs code off the main thread', 'code را بیرون از main thread اجرا می‌کند'),
    ];
  }
  return [
    t('value', `a JavaScript value used in ${enTitle}`, `یک value در JavaScript برای ${faTitle}`),
    t('expression', 'code that produces a value', 'codeی که value تولید می‌کند'),
    t('runtime', 'the browser or engine executing code', 'مرورگر یا engine اجراکننده code'),
  ];
}

function termsFor(slug, enTitle, faTitle) {
  const exact = {
    'where-to': [
      t('<script defer>', 'loads a file after parsing without blocking HTML', 'فایل را پس از parsing بدون block کردن HTML load می‌کند'),
      t('type="module"', 'enables module scope and import/export', 'module scope و import/export را فعال می‌کند'),
      t('DOMContentLoaded', 'fires when the initial DOM is ready', 'وقتی DOM اولیه آماده شد fire می‌شود'),
    ],
    output: [
      t('console.log()', 'writes diagnostic output to DevTools', 'output تشخیصی را در DevTools می‌نویسد'),
      t('textContent', 'updates visible text safely', 'متن قابل مشاهده را امن update می‌کند'),
      t('<output>', 'represents calculated result text', 'متن نتیجه محاسبه‌شده را نشان می‌دهد'),
    ],
    statements: [
      t('statement', 'an executable step in a program', 'یک گام اجرایی در برنامه است'),
      t('block', 'groups statements with braces', 'statementها را با brace گروه می‌کند'),
      t(';', 'can terminate a statement explicitly', 'می‌تواند statement را explicit پایان دهد'),
    ],
    syntax: [
      t('identifier', 'names variables, functions, and properties', 'variable، function و property را نام‌گذاری می‌کند'),
      t('literal', 'writes a value directly in source', 'یک value را مستقیم در source می‌نویسد'),
      t('{ ... }', 'creates a block or object literal depending on context', 'بسته به context block یا object literal می‌سازد'),
    ],
    comments: [
      t('//', 'starts a single-line comment', 'comment تک‌خطی را شروع می‌کند'),
      t('/* ... */', 'wraps a block comment', 'block comment می‌سازد'),
      t('JSDoc', 'documents types and intent in comments', 'type و intent را در comment مستند می‌کند'),
    ],
    variables: [
      t('let count = 0', 'declares a changeable binding', 'binding قابل تغییر تعریف می‌کند'),
      t('const name = "Ada"', 'declares a non-reassignable binding', 'binding غیرقابل reassignment تعریف می‌کند'),
      t('scope', 'limits where a binding is visible', 'محدوده دید binding را محدود می‌کند'),
    ],
    let: [
      t('let', 'declares a block-scoped mutable binding', 'binding mutable با block scope تعریف می‌کند'),
      t('reassignment', 'points the binding at a new value', 'binding را به value تازه اشاره می‌دهد'),
      t('TDZ', 'prevents reads before initialization', 'خواندن پیش از initialization را منع می‌کند'),
    ],
    const: [
      t('const', 'declares a binding that cannot be reassigned', 'binding غیرقابل reassignment تعریف می‌کند'),
      t('mutation', 'can still change object contents', 'می‌تواند محتوای object را تغییر دهد'),
      t('initializer', 'is required for const declarations', 'برای const declaration الزامی است'),
    ],
    operators: [
      t('?.', 'reads a property only when the base exists', 'property را فقط وقتی base وجود دارد می‌خواند'),
      t('??', 'falls back only for null or undefined', 'فقط برای null یا undefined fallback می‌دهد'),
      t('&& / ||', 'combine or short-circuit logical expressions', 'expression منطقی را combine یا short-circuit می‌کند'),
    ],
    arithmetic: [
      t('+ - * / %', 'perform numeric arithmetic or string concatenation for +', 'محاسبه عددی انجام می‌دهد و + می‌تواند string concat کند'),
      t('NaN', 'represents an invalid numeric result', 'نتیجه عددی نامعتبر را نشان می‌دهد'),
      t('precedence', 'decides which operation runs first', 'تعیین می‌کند کدام operation زودتر اجرا شود'),
    ],
    assignment: [
      t('=', 'assigns a value to a binding or property', 'value را به binding یا property می‌دهد'),
      t('+=', 'reads, adds, and writes back', 'می‌خواند، اضافه می‌کند و برمی‌گرداند'),
      t('destructuring', 'assigns from array or object patterns', 'از patternهای Array یا object assignment می‌کند'),
    ],
    'data-types': [
      t('typeof', 'returns a string describing a value category', 'stringی درباره دسته value برمی‌گرداند'),
      t('null / undefined', 'represent empty or missing values differently', 'value خالی یا missing را متفاوت نشان می‌دهند'),
      t('object', 'stores keyed references and behavior', 'reference و behavior کلیددار نگه می‌دارد'),
    ],
    functions: [
      t('function', 'declares reusable behavior', 'رفتار قابل استفاده مجدد تعریف می‌کند'),
      t('return', 'sends a value back to the caller', 'value را به caller برمی‌گرداند'),
      t('parameter', 'names an input inside the function', 'input داخل function را نام‌گذاری می‌کند'),
    ],
    objects: [
      t('{}', 'creates an object literal', 'object literal می‌سازد'),
      t('property', 'stores a value under a key', 'value را زیر یک key نگه می‌دارد'),
      t('reference', 'points to the same object identity', 'به identity همان object اشاره می‌کند'),
    ],
    events: [
      t('event', 'describes something that happened in the browser', 'رخدادی در مرورگر را توصیف می‌کند'),
      t('addEventListener()', 'registers an event callback', 'callback event ثبت می‌کند'),
      t('event.target', 'points at the dispatch target', 'به target رخداد اشاره می‌کند'),
    ],
    promises: [
      t('Promise', 'represents pending, fulfilled, or rejected work', 'کار pending، fulfilled یا rejected را نمایش می‌دهد'),
      t('.then()', 'continues after fulfillment', 'پس از fulfillment ادامه می‌دهد'),
      t('.catch()', 'handles rejection', 'rejection را مدیریت می‌کند'),
    ],
    'async-await': [
      t('async function', 'always returns a Promise', 'همیشه Promise برمی‌گرداند'),
      t('await', 'pauses within async code until a Promise settles', 'داخل code async تا settled شدن Promise مکث می‌کند'),
      t('try/catch', 'handles awaited failures', 'failureهای await شده را مدیریت می‌کند'),
    ],
    'fetch-api': [
      t('fetch()', 'starts an HTTP request', 'درخواست HTTP را شروع می‌کند'),
      t('Response', 'wraps status, headers, and body', 'status، header و body را می‌پوشاند'),
      t('response.json()', 'parses JSON from the response body', 'JSON را از body پاسخ parse می‌کند'),
    ],
    'language-types': [
      t('ECMAScript Language Type', 'a runtime value category such as Undefined, Number, BigInt, String, Symbol, or Object', 'دسته value در runtime مثل Undefined، Number، BigInt، String، Symbol یا Object'),
      t('Specification Type', 'a spec-only record used to define algorithms', 'record مخصوص spec برای تعریف algorithmها'),
      t('Completion Record', 'wraps normal, throw, return, break, or continue completion', 'completionهای normal، throw، return، break یا continue را می‌پوشاند'),
    ],
    'execution-contexts': [
      t('Execution Context', 'tracks code evaluation state', 'state ارزیابی code را دنبال می‌کند'),
      t('Realm', 'groups global object, intrinsics, and environment', 'global object، intrinsic و environment را گروه می‌کند'),
      t('Lexical Environment', 'stores bindings for scope resolution', 'bindingها را برای resolve کردن scope نگه می‌دارد'),
    ],
    'ordinary-exotic-objects': [
      t('Ordinary Object', 'uses the default internal object methods', 'از internal methodهای پیش‌فرض object استفاده می‌کند'),
      t('Exotic Object', 'customizes one or more internal methods', 'یک یا چند internal method را customize می‌کند'),
      t('Property Descriptor', 'describes value, getter, setter, and attribute flags', 'value، getter، setter و flagهای attribute را توصیف می‌کند'),
    ],
    'function-objects': [
      t('[[Call]]', 'internal method used when a function is called', 'internal method هنگام call شدن function'),
      t('[[Construct]]', 'internal method used with new', 'internal method هنگام استفاده با new'),
      t('ThisMode', 'specifies lexical, strict, or global this binding behavior', 'رفتار this binding از نوع lexical، strict یا global را مشخص می‌کند'),
    ],
    'promises-jobs': [
      t('PromiseReactionJob', 'runs promise fulfillment or rejection reactions', 'reactionهای fulfillment یا rejection در Promise را اجرا می‌کند'),
      t('Job Queue', 'holds work scheduled by the language or host', 'کاری را نگه می‌دارد که language یا host schedule کرده است'),
      t('HostEnqueuePromiseJob', 'host hook that queues promise jobs', 'host hook برای queue کردن jobهای Promise'),
    ],
    'modules-spec': [
      t('Source Text Module Record', 'spec record for an ECMAScript module', 'record مشخصات برای یک ECMAScript module'),
      t('Link', 'resolves and connects module dependencies before evaluation', 'dependencyهای module را پیش از evaluation resolve و وصل می‌کند'),
      t('Evaluate', 'runs module body code after linking', 'پس از linking بدنه module را اجرا می‌کند'),
    ],
    'syntax-lexical': [
      t('Lexical Grammar', 'turns source text into tokens', 'source text را به token تبدیل می‌کند'),
      t('Automatic Semicolon Insertion', 'inserts semicolons in restricted grammar situations', 'در موقعیت‌های restricted grammar semicolon اضافه می‌کند'),
      t('Early Error', 'rejects invalid programs before runtime evaluation', 'program نامعتبر را پیش از runtime evaluation رد می‌کند'),
    ],
    'annexes-compatibility': [
      t('Annex B', 'defines legacy web compatibility behavior', 'رفتار legacy برای web compatibility را تعریف می‌کند'),
      t('normative optional', 'allowed behavior that implementations may choose under spec rules', 'رفتاری مجاز که implementation طبق ruleهای spec می‌تواند انتخاب کند'),
      t('legacy feature', 'older behavior preserved for existing web content', 'رفتار قدیمی حفظ‌شده برای محتوای موجود وب'),
    ],
  };
  if (exact[slug]) return exact[slug];
  if (slug.includes('array')) {
    return [
      t('Array', 'stores ordered values by index', 'valueهای مرتب را با index نگه می‌دارد'),
      t('map()', 'creates a transformed array', 'Array تبدیل‌شده می‌سازد'),
      t('for...of', 'iterates array values', 'روی valueهای Array iteration می‌کند'),
    ];
  }
  if (slug.includes('string')) {
    return [
      t('String', 'stores text as a sequence of UTF-16 code units', 'text را به صورت sequence از code unitهای UTF-16 نگه می‌دارد'),
      t('template literal', 'interpolates expressions inside text', 'expressionها را داخل text interpolate می‌کند'),
      t('includes()', 'checks for a substring', 'وجود substring را بررسی می‌کند'),
    ];
  }
  if (slug.includes('number') || slug === 'math' || slug === 'random' || slug === 'bigint') {
    return [
      t('Number', 'stores double-precision numeric values', 'value عددی double precision نگه می‌دارد'),
      t('BigInt', 'stores very large integers', 'integer بسیار بزرگ نگه می‌دارد'),
      t('Math', 'provides numeric utility functions', 'functionهای utility عددی فراهم می‌کند'),
    ];
  }
  if (slug.includes('date') || slug === 'intl-ref') {
    return [
      t('Date', 'represents a timestamp with local and UTC accessors', 'timestamp را با accessorهای local و UTC نمایش می‌دهد'),
      t('Intl', 'formats locale-aware output', 'output وابسته به locale را format می‌کند'),
      t('timestamp', 'counts milliseconds from the Unix epoch', 'millisecond از Unix epoch را می‌شمارد'),
    ];
  }
  if (slug.includes('map') || slug.includes('set') || slug === 'sets' || slug === 'maps') {
    return [
      t('Map', 'stores key-value entries with arbitrary keys', 'entryهای key-value با key دلخواه نگه می‌دارد'),
      t('Set', 'stores unique values', 'valueهای یکتا نگه می‌دارد'),
      t('WeakMap', 'allows object keys without preventing garbage collection', 'keyهای object را بدون جلوگیری از garbage collection نگه می‌دارد'),
    ];
  }
  if (slug.includes('dom') || slug.includes('bom') || slug.includes('web') || slug.includes('geolocation') || slug.includes('storage') || slug.includes('worker') || slug.includes('form')) {
    return [
      t('Web API', 'browser-provided capability used from JavaScript', 'قابلیتی از مرورگر که از JavaScript استفاده می‌شود'),
      t('DOM', 'the document object model JavaScript updates', 'document object model که JavaScript update می‌کند'),
      t('event loop', 'schedules user, network, timer, and rendering work', 'کار user، network، timer و rendering را schedule می‌کند'),
    ];
  }
  if (slug.includes('class') || slug.includes('prototype') || slug.includes('inheritance')) {
    return [
      t('class', 'syntax for constructor and prototype methods', 'syntax برای constructor و methodهای prototype'),
      t('prototype', 'object used for property lookup inheritance', 'objectی برای inheritance در lookup property'),
      t('extends', 'creates a subclass relationship', 'رابطه subclass می‌سازد'),
    ];
  }
  if (slug.includes('module')) {
    return [
      t('import', 'brings exported bindings into a module', 'bindingهای export شده را وارد module می‌کند'),
      t('export', 'makes module bindings available', 'bindingهای module را قابل استفاده می‌کند'),
      t('module scope', 'keeps top-level bindings out of global scope', 'bindingهای top-level را بیرون از global scope نگه می‌دارد'),
    ];
  }
  if (slug.includes('regexp')) {
    return [
      t('/pattern/u', 'creates a regular expression literal', 'regular expression literal می‌سازد'),
      t('flags', 'change matching behavior', 'رفتار matching را تغییر می‌دهد'),
      t('match()', 'returns pattern matches from text', 'matchهای الگو را از text برمی‌گرداند'),
    ];
  }
  if (slug.includes('error')) {
    return [
      t('Error', 'represents a runtime failure object', 'object شکست runtime را نمایش می‌دهد'),
      t('throw', 'signals an exceptional condition', 'condition استثنایی را signal می‌کند'),
      t('try/catch', 'handles thrown or awaited errors', 'errorهای throw یا await شده را مدیریت می‌کند'),
    ];
  }
  if (slug.includes('promise') || slug.includes('async') || slug.includes('callback') || slug.includes('timer')) {
    return [
      t('Promise', 'represents future completion or failure', 'completion یا failure آینده را نمایش می‌دهد'),
      t('microtask', 'runs after the current task before rendering opportunities', 'بعد از task فعلی و پیش از فرصت rendering اجرا می‌شود'),
      t('async/await', 'expresses Promise flow with clearer control structure', 'جریان Promise را با ساختار کنترل روشن‌تر بیان می‌کند'),
    ];
  }
  if (slug.includes('scope') || slug.includes('closure') || slug.includes('hoisting')) {
    return [
      t('lexical scope', 'resolves names from source nesting', 'nameها را از nesting source resolve می‌کند'),
      t('closure', 'keeps access to outer bindings', 'دسترسی به bindingهای outer را نگه می‌دارد'),
      t('hoisting', 'prepares declarations before execution', 'declarationها را پیش از execution آماده می‌کند'),
    ];
  }
  if (slug.includes('comparison') || slug.includes('equality')) {
    return [
      t('===', 'compares without type coercion', 'بدون coercion نوع مقایسه می‌کند'),
      t('Object.is()', 'uses SameValue semantics', 'از semantics نوع SameValue استفاده می‌کند'),
      t('truthy/falsy', 'describes boolean conversion behavior', 'رفتار conversion به Boolean را توضیح می‌دهد'),
    ];
  }
  if (slug.includes('loop') || slug.includes('control') || ['if-else', 'switch', 'break-continue'].includes(slug)) {
    return [
      t('if', 'branches when a condition is true', 'وقتی condition درست است branch می‌کند'),
      t('for...of', 'iterates iterable values', 'روی valueهای iterable iteration می‌کند'),
      t('break', 'exits a loop or switch early', 'از loop یا switch زود خارج می‌شود'),
    ];
  }
  if (slug.includes('typed')) {
    return [
      t('ArrayBuffer', 'stores raw binary data', 'binary data خام نگه می‌دارد'),
      t('Uint8Array', 'views bytes as unsigned integers', 'byteها را به صورت integer بی‌علامت می‌بیند'),
      t('DataView', 'reads and writes binary values with control', 'binary value را با کنترل read و write می‌کند'),
    ];
  }
  if (slug.includes('official') || slug.includes('spec') || slug.includes('execution') || slug.includes('ordinary') || slug.includes('annex') || slug.includes('lexical') || slug.includes('language-types')) {
    return [
      t('ECMAScript', 'the standardized language behind JavaScript', 'زبان استانداردشده پشت JavaScript'),
      t('abstract operation', 'specification algorithm step used to define behavior', 'گام الگوریتم specification برای تعریف رفتار'),
      t('host', 'environment such as a browser or runtime embedding ECMAScript', 'محیطی مثل مرورگر یا runtime که ECMAScript را embed می‌کند'),
    ];
  }
  return [
    t('JavaScript', `language feature used in ${enTitle}`, `ویژگی زبان برای ${faTitle}`),
    t('runtime', 'executes code and reports errors', 'code را اجرا و error را گزارش می‌کند'),
    t('DevTools Console', 'checks values while learning', 'valueها را هنگام یادگیری بررسی می‌کند'),
  ];
}

function keywordsFor(slug, enTitle) {
  const words = enTitle.replace(/^JavaScript\s+/u, '').split(/\s+/u).slice(0, 5).join(' ');
  return [`JavaScript ${words}`, `${words} tutorial`, slug.replaceAll('-', ' ')];
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
      `JavaScript ${sectionItem.slug}`,
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
    id: 'javascript',
    order: 30,
    title: {
      fa: 'JavaScript',
      en: 'JavaScript',
    },
    seoTitle: {
      fa: 'JavaScript — آموزش W3Schools، مرجع MDN و ECMA-262 | MEGA JS',
      en: 'JavaScript — W3Schools Tutorial, MDN Reference & ECMA-262 | MEGA JS',
    },
    seoDescription: {
      fa: seoLength('JavaScript را در سه مسیر یاد بگیرید: آموزش W3Schools، مرجع MDN و خلاصه ECMA-262؛ همراه مثال live، DOM، async و DevTools.', 'fa'),
      en: seoLength('Learn JavaScript across three tracks: W3Schools-style lessons, MDN reference, and ECMA-262 summaries with live DOM and async examples.', 'en'),
    },
    description: {
      fa: 'سه مسیر کامل برای JavaScript: آموزش قدم‌به‌قدم، مرجع دقیق MDN و خلاصه‌های رسمی ECMA-262 برای زبان، DOM و async.',
      en: 'Three complete JavaScript tracks: step-by-step learning, precise MDN-style reference, and ECMA-262 summaries for language, DOM, and async work.',
    },
    sources: [SOURCE_W3, SOURCE_MDN, SOURCE_MDN_REFERENCE, SOURCE_ECMA, SOURCE_TC39],
    tracks: [
      {
        id: 'learn',
        title: {
          fa: 'آموزشی (W3Schools)',
          en: 'Learn (W3Schools)',
        },
        description: {
          fa: 'مسیر آموزشی قدم‌به‌قدم با ادیتور زنده — ساختار سایدبار W3Schools JavaScript Tutorial.',
          en: 'Step-by-step tutorial with live editor — W3Schools JavaScript Tutorial sidebar structure.',
        },
        seoTitle: {
          fa: 'آموزش JavaScript از صفر | مسیر W3Schools + ادیتور زنده | MEGA JS',
          en: 'Learn JavaScript from Scratch | W3Schools Path + Live Editor | MEGA JS',
        },
        seoDescription: {
          fa: seoLength('آموزش JavaScript از صفر با مسیر W3Schools، مثال‌های HTML دارای <script>، ادیتور زنده، DOM، async/await و تمرین DevTools.', 'fa'),
          en: seoLength('Learn JavaScript from scratch with a W3Schools-style path, live HTML examples with script tags, DOM, async/await, and DevTools practice.', 'en'),
        },
        source: {
          name: 'W3Schools JavaScript Tutorial',
          url: 'https://www.w3schools.com/js/default.asp',
        },
        liveEditor: true,
        nav: learnNav(),
      },
      {
        id: 'reference',
        title: {
          fa: 'مرجع (MDN)',
          en: 'Reference (MDN)',
        },
        description: {
          fa: 'مرجع عمیق به سبک MDN برای syntax، built-inها، objectها، async، module و ارتباط JavaScript با DOM و Web API.',
          en: 'A deeper MDN-style reference for syntax, built-ins, objects, async, modules, and JavaScript integration with the DOM and Web APIs.',
        },
        seoTitle: {
          fa: 'مرجع JavaScript به سبک MDN | Syntax، Object و Async | MEGA JS',
          en: 'JavaScript Reference — MDN-style Syntax, Objects & Async | MEGA JS',
        },
        seoDescription: {
          fa: seoLength('مرجع JavaScript به سبک MDN برای syntax، type، function، object، Promise، module، DOM و Web API؛ مناسب تصمیم دقیق در پروژه واقعی.', 'fa'),
          en: seoLength('Use the MDN-style JavaScript reference for syntax, types, functions, objects, promises, modules, DOM, and Web APIs in real projects.', 'en'),
        },
        source: {
          name: 'MDN Web Docs — JavaScript',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        liveEditor: false,
        nav: flatNav(TRACK_PAGES.reference),
      },
      {
        id: 'official',
        title: {
          fa: 'مستندات رسمی (ECMA-262)',
          en: 'Official (ECMA-262)',
        },
        description: {
          fa: 'خلاصه‌های specification-oriented از ECMA-262 و TC39 برای درک semantics زبان JavaScript بدون dump کامل specification.',
          en: 'Specification-oriented ECMA-262 and TC39 summaries for understanding JavaScript language semantics without a full specification dump.',
        },
        seoTitle: {
          fa: 'خلاصه رسمی ECMA-262 برای JavaScript | TC39 Summary | MEGA JS',
          en: 'Official ECMA-262 JavaScript Summaries | TC39 Summary | MEGA JS',
        },
        seoDescription: {
          fa: seoLength('خلاصه رسمی ECMA-262 و TC39 برای JavaScript؛ language type، execution context، object، Promise، module و compatibility را دقیق مرور کنید.', 'fa'),
          en: seoLength('Read official ECMA-262 and TC39 JavaScript summaries covering language types, execution contexts, objects, promises, modules, and compatibility.', 'en'),
        },
        source: {
          name: 'ECMA-262',
          url: 'https://tc39.es/ecma262/',
        },
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
    ? `این صفحه ${item.faFocus} را با مثال HTML، جدول syntax و نکته‌های کاربردی برای JavaScript توضیح می‌دهد.`
    : `This page explains ${item.enFocus} with HTML examples, syntax tables, and practical JavaScript notes.`;
  const seoTitle = seoTitleFor(item, locale);
  const seoDescription = seoDescriptionFor(item, locale);
  const keywords = isFa
    ? ['JavaScript', item.faTitle, 'آموزش JavaScript', 'مرجع JavaScript', ...item.keywords].join(', ')
    : ['JavaScript', item.enTitle, ...item.keywords].join(', ');
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
      : `${item.enTitle} Tutorial — W3Schools-style | MEGA JS Docs`;
  }
  if (item.track === 'reference') {
    return locale === 'fa'
      ? `${cleanFaReferenceTitle(item.faTitle)} — سبک MDN | MEGA JS`
      : `${cleanEnReferenceTitle(item.enTitle)} — MDN-style | MEGA JS Docs`;
  }
  return locale === 'fa'
    ? `${item.faTitle} — خلاصه رسمی ECMA-262 | MEGA JS`
    : `${item.enTitle} — ECMA-262 Official Summary | MEGA JS Docs`;
}

function cleanFaReferenceTitle(title) {
  return title.startsWith('مرجع ') || title.includes('مرجع') ? title : `مرجع ${title}`;
}

function cleanEnReferenceTitle(title) {
  return title.includes('Reference') ? title : `JavaScript ${title} Reference`;
}

function seoDescriptionFor(item, locale) {
  const marker = item.slug.replaceAll('-', ' ');
  if (item.track === 'learn') {
    return locale === 'fa'
      ? seoLength(
          `آموزش ${item.faTitle} (${marker}): مثال HTML با <script>، تمرین live مسیر W3Schools، نکته DevTools Console و کاربرد JavaScript در DOM و runtime.`,
          'fa',
        )
      : seoLength(
          `Learn ${item.enTitle} (${marker}) with live HTML script examples, W3Schools practice, DevTools Console checks, and JavaScript DOM runtime guidance.`,
          'en',
        );
  }
  if (item.track === 'reference') {
    return locale === 'fa'
      ? seoLength(
          `${cleanFaReferenceTitle(item.faTitle)} (${marker}): مرجع MDNوار برای JavaScript با جدول syntax، مثال HTML، رفتار runtime و نکته DOM یا Web API.`,
          'fa',
        )
      : seoLength(
          `${cleanEnReferenceTitle(item.enTitle)} (${marker}): MDN-style JavaScript reference with syntax tables, HTML examples, runtime behavior, and DOM or Web API notes.`,
          'en',
        );
  }
  return locale === 'fa'
    ? seoLength(
        `${item.faTitle} (${marker}): خلاصه رسمی ECMA-262 و TC39 برای JavaScript با semantics، الگوریتم spec، مثال HTML و نکته runtime قابل اتکا.`,
        'fa',
      )
    : seoLength(
        `${item.enTitle} (${marker}): ECMA-262 and TC39 JavaScript official summary with semantics, spec algorithms, HTML examples, and runtime guidance.`,
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
      `${item.faTitle} درباره ${item.faFocus} است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools JavaScript Tutorial است و مثال‌ها با \`<script>\` نوشته شده‌اند تا در live editor اجرا شوند.`,
      '',
      `وقتی ${item.faTitle} را تمرین می‌کنید، فقط خروجی ظاهری را نبینید؛ valueها را در DevTools Console، تغییرهای DOM، errorهای runtime و اثر event loop را هم بررسی کنید.`,
      '',
      '## ایده اصلی',
      '',
      ...item.terms.map((termItem) => `- \`${termItem.syntax}\`: ${termItem.fa}.`),
      `- برای این موضوع، ${practiceSignal(item, 'fa')} نشانه اصلی کیفیت JavaScript است.`,
      '',
      '## مثال‌های HTML و JavaScript',
      '',
      'سه مثال زیر از الگوی کوچک به صفحه کامل حرکت می‌کنند. هر مثال را در live editor اجرا کنید، یک value یا handler را تغییر دهید و Console را بررسی کنید.',
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
      ...item.terms.map((termItem) => `| \`${termItem.syntax}\` | ${termItem.fa} | در ${item.faTitle} آن را با runtime واقعی، DOM و error handling تست کنید. |`),
      '',
      '## اشتباه‌های رایج',
      '',
      ...learnMistakes(item, 'fa'),
      '',
      '## تمرین کوتاه',
      '',
      `یک فایل \`${item.slug}.html\` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با \`${item.terms[0].syntax}\` را تغییر دهید. بعد در DevTools Console مقدارها، خطاها و تغییر DOM را بررسی کنید.`,
      '',
      '## گام بعدی',
      '',
      next
        ? `بعد از این صفحه، **${next.faTitle}** را بخوانید تا مسیر JavaScript مرحله‌به‌مرحله کامل‌تر شود.`
        : 'در پایان مسیر learn، وارد track مرجع شوید و همین موضوعات را با نگاه دقیق‌تر MDN بررسی کنید.',
      '',
    ].join('\n');
  }

  return [
    `# ${item.enTitle}`,
    '',
    `${item.enTitle} focuses on ${item.enFocus}. This is an educational rewrite inspired by the W3Schools JavaScript learning path, and every example uses a live-editor-friendly \`<script>\` block.`,
    '',
    `When you practice ${item.enTitle}, do not stop at the visible result. Inspect values in the DevTools Console, DOM changes, runtime errors, and event loop effects.`,
    '',
    '## Core idea',
    '',
    ...item.terms.map((termItem) => `- \`${termItem.syntax}\`: ${termItem.en}.`),
    `- For this topic, ${practiceSignal(item, 'en')} is the main sign that your JavaScript is doing its job.`,
    '',
    '## HTML and JavaScript examples',
    '',
    'The three examples move from a focused pattern to a complete page. Run each one in the live editor, change one value or handler, and inspect the Console.',
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
    ...item.terms.map((termItem) => `| \`${termItem.syntax}\` | ${termItem.en} | In ${item.enTitle}, test it against the real runtime, DOM behavior, and error handling path. |`),
    '',
    '## Common mistakes',
    '',
    ...learnMistakes(item, 'en'),
    '',
    '## Practice step',
    '',
    `Create a file named \`${item.slug}.html\`, run the first example, then change one part related to \`${item.terms[0].syntax}\`. Inspect values, errors, and DOM changes in DevTools Console.`,
    '',
    '## Next step',
    '',
    next
      ? `Next, continue with **${next.enTitle}** so the JavaScript learning path builds on this concept.`
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
      `${item.faTitle} یک صفحه مرجع به سبک MDN است. تمرکز آن روی ${item.faFocus} است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای DOM یا Web API را کنار هم می‌گذارد.`,
      '',
      '## جایگاه در MDN',
      '',
      `در MDN معمولاً این موضوع کنار JavaScript Guide، JavaScript Reference، built-in objectها و صفحه‌های Web API خوانده می‌شود. هنگام استفاده از ${item.faTitle}، ابتدا semantics زبان را جدا از قابلیت‌های host مثل DOM، fetch و storage ببینید.`,
      '',
      '## جدول مرجع',
      '',
      '| مورد | معنی | نکته سازگاری |',
      '| --- | --- | --- |',
      ...item.terms.map((termItem) => `| \`${termItem.syntax}\` | ${termItem.fa} | در browser هدف، DevTools Console، test و مسیر error واقعی بررسی شود. |`),
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
      `- برای ${item.faTitle}، تفاوت JavaScript core با Web APIهای host را مشخص نگه دارید.`,
      '- اگر behavior به browser، locale، timezone یا permission وابسته است، آن را در UI و test پوشش دهید.',
      '- برای تصمیم‌های حساس، صفحه MDN مربوط، MDN Reference و در صورت نیاز متن ECMA-262 را کنار اجرای واقعی بررسی کنید.',
      '',
      '## ارتباط مفهومی با MDN',
      '',
      `این صفحه به موضوعات MDN درباره ${item.enTitle}, JavaScript Reference, browser compatibility و Web API boundaries نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.`,
      '',
      '## گام بعدی',
      '',
      next ? `صفحه مرجع بعدی: **${next.faTitle}**.` : 'پس از پایان مرجع، برای نگاه specification-oriented وارد track رسمی شوید.',
      '',
    ].join('\n');
  }

  return [
    `# ${item.enTitle}`,
    '',
    `${item.enTitle} is an MDN-style JavaScript reference page. It concentrates on ${item.enFocus} and favors precise definitions, usage tables, runtime behavior, and DOM or Web API boundaries over beginner sequencing.`,
    '',
    '## Place in the MDN reference',
    '',
    `On MDN, this topic usually sits near the JavaScript Guide, JavaScript Reference, built-in object pages, and Web API pages. When using ${item.enTitle}, separate language semantics from host capabilities such as the DOM, fetch, and storage.`,
    '',
    '## Reference table',
    '',
    '| Item | Meaning | Compatibility note |',
    '| --- | --- | --- |',
    ...item.terms.map((termItem) => `| \`${termItem.syntax}\` | ${termItem.en} | Check it in target browsers, DevTools Console, tests, and the real error path. |`),
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
    `- For ${item.enTitle}, keep JavaScript core behavior distinct from host Web APIs.`,
    '- If behavior depends on browser support, locale, timezone, or permission state, cover that in UI and tests.',
    '- For critical decisions, compare the relevant MDN page, MDN Reference entry, ECMA-262 text when needed, and a real runtime.',
    '',
    '## Conceptual link to MDN',
    '',
    `This page aligns with MDN topics around ${item.enTitle}, the JavaScript Reference, browser compatibility, and Web API boundaries before implementation.`,
    '',
    '## Next step',
    '',
    next ? `Continue with **${next.enTitle}**.` : 'After finishing the reference, open the official track for specification-oriented summaries.',
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
      `${item.faTitle} خلاصه‌ای specification-oriented از ECMA-262 و TC39 است. تمرکز آن روی ${item.faFocus} است، نه روی APIهای host مثل DOM مگر وقتی برای مقایسه با runtime لازم باشد.`,
      '',
      '## چگونه متن رسمی را بخوانیم',
      '',
      'ECMA-262 زبان ECMAScript را با abstract operation، internal slot، completion record و الگوریتم‌های دقیق تعریف می‌کند. JavaScript در مرورگر این زبان را همراه Web APIهایی مثل DOM، fetch و event loop host اجرا می‌کند.',
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
      '## نکته‌های spec و runtime',
      '',
      `- در ${item.faTitle}، واژه‌های spec مثل Realm، Job، Environment Record یا Internal Method را با objectهای واقعی DevTools یکی نگیرید.`,
      '- هرجا ECMA-262 به host hook اشاره می‌کند، behavior نهایی در browser، Node.js یا runtime دیگر ممکن است از محیط بیاید.',
      '- برای کد production، متن official را با تست واقعی، MDN و compatibility data تکمیل کنید.',
      '',
      '## گام بعدی',
      '',
      next ? `ادامه track رسمی: **${next.faTitle}**.` : 'بعد از پایان این track، یک صفحه reference را باز کنید و behavior آن را در Console تست کنید.',
      '',
    ].join('\n');
  }

  return [
    `# ${item.enTitle}`,
    '',
    `${item.enTitle} is a specification-oriented ECMA-262 and TC39 summary. It focuses on ${item.enFocus}, not host APIs such as the DOM except when runtime comparison is useful.`,
    '',
    '## How to read the official text',
    '',
    'ECMA-262 defines the ECMAScript language with abstract operations, internal slots, completion records, and precise algorithms. JavaScript in a browser runs that language together with host Web APIs such as the DOM, fetch, and the host event loop.',
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
    '## Spec and runtime notes',
    '',
    `- In ${item.enTitle}, do not confuse specification terms such as Realm, Job, Environment Record, or Internal Method with DevTools objects directly.`,
    '- Whenever ECMA-262 calls into host hooks, final behavior can come from the browser, Node.js, or another embedding runtime.',
    '- For production code, pair the official text with real tests, MDN, and compatibility data.',
    '',
    '## Next step',
    '',
    next ? `Continue the official track with **${next.enTitle}**.` : 'After this track, open a reference page and test its behavior in the Console.',
    '',
  ].join('\n');
}

function learnExamples(item) {
  const base = focusedSnippet(item);
  return [base, optionTableSnippet(item), completeDocumentSnippet(item, base)];
}

function referenceExamples(item) {
  return [referenceSnippet(item), focusedSnippet(item)];
}

function officialExamples(item) {
  return [specTraceSnippet(item), focusedSnippet(item)];
}

function focusedSnippet(item) {
  const slug = item.slug;
  if (slug.includes('variable') || slug === 'let' || slug === 'const' || slug === 'assignment' || slug === 'data-types' || slug === 'grammar-types' || slug === 'language-types') {
    return `<section>
  <h2>${escapeHtml(item.enTitle)}</h2>
  <output id="${slug}-out"></output>
</section>
<script>
  const profile = { name: 'Ada', lessons: 3 };
  let status = profile.lessons >= 3 ? 'ready' : 'learning';
  document.querySelector('#${slug}-out').value =
    \`\${profile.name} is \${status}; type is \${typeof profile.lessons}\`;
</script>`;
  }
  if (slug.includes('array') || slug === 'sets' || slug === 'maps' || slug === 'map-set-weak' || slug === 'iterators-generators') {
    return `<section>
  <h2>${escapeHtml(item.enTitle)}</h2>
  <ul id="${slug}-list"></ul>
</section>
<script>
  const lessons = ['variables', 'arrays', 'promises', 'DOM'];
  const uniqueLessons = new Set(lessons);
  document.querySelector('#${slug}-list').innerHTML =
    [...uniqueLessons].map((lesson) => \`<li>\${lesson.toUpperCase()}</li>\`).join('');
</script>`;
  }
  if (slug.includes('string') || slug === 'strings' || slug === 'booleans' || slug === 'equality-comparisons') {
    return `<label>
  Search lesson
  <input id="${slug}-query" value="script">
</label>
<output id="${slug}-result"></output>
<script>
  const title = 'JavaScript live editor';
  const query = document.querySelector('#${slug}-query').value.trim();
  const found = title.toLowerCase().includes(query.toLowerCase());
  document.querySelector('#${slug}-result').value =
    \`"\${query}" found: \${found === true}\`;
</script>`;
  }
  if (slug.includes('number') || slug === 'math' || slug === 'random' || slug === 'bigint' || slug === 'typed-arrays-ref') {
    return `<section>
  <h2>${escapeHtml(item.enTitle)}</h2>
  <output id="${slug}-out"></output>
</section>
<script>
  const prices = [19.95, 5.5, 8.25];
  const total = prices.reduce((sum, price) => sum + price, 0);
  const bytes = new Uint8Array([74, 83]);
  document.querySelector('#${slug}-out').value =
    \`Total: $\${total.toFixed(2)}; bytes: \${bytes.join(',')}\`;
</script>`;
  }
  if (slug.includes('date') || slug === 'intl-ref') {
    return `<time id="${slug}-time"></time>
<script>
  const formatter = new Intl.DateTimeFormat('en', { dateStyle: 'medium', timeStyle: 'short' });
  const now = new Date('2026-07-24T12:00:00Z');
  document.querySelector('#${slug}-time').textContent = formatter.format(now);
</script>`;
  }
  if (slug.includes('function') || slug.includes('closure') || slug.includes('scope') || slug.includes('hoisting')) {
    return `<button id="${slug}-button" type="button">Count clicks</button>
<output id="${slug}-out"></output>
<script>
  function createCounter() {
    let count = 0;
    return () => {
      count += 1;
      return count;
    };
  }
  const nextCount = createCounter();
  document.querySelector('#${slug}-button').addEventListener('click', () => {
    document.querySelector('#${slug}-out').value = \`Clicked \${nextCount()} time(s)\`;
  });
</script>`;
  }
  if (slug.includes('object') || slug.includes('class') || slug.includes('prototype') || slug.includes('inheritance')) {
    return `<article>
  <h2 id="${slug}-title">${escapeHtml(item.enTitle)}</h2>
  <output id="${slug}-out"></output>
</article>
<script>
  class Lesson {
    constructor(title) {
      this.title = title;
    }
    label() {
      return \`Lesson: \${this.title}\`;
    }
  }
  const lesson = new Lesson(document.querySelector('#${slug}-title').textContent);
  document.querySelector('#${slug}-out').value = lesson.label();
</script>`;
  }
  if (slug.includes('promise') || slug.includes('async') || slug === 'callbacks' || slug === 'timers' || slug === 'promises-jobs') {
    return `<button id="${slug}-load" type="button">Load async data</button>
<output id="${slug}-out"></output>
<script>
  const wait = (value) => new Promise((resolve) => setTimeout(() => resolve(value), 250));
  document.querySelector('#${slug}-load').addEventListener('click', async () => {
    document.querySelector('#${slug}-out').value = 'Loading...';
    const result = await wait('Promise fulfilled');
    document.querySelector('#${slug}-out').value = result;
  });
</script>`;
  }
  if (slug.includes('dom') || slug.includes('event') || slug.includes('bom') || slug === 'web-js-dom') {
    return `<button id="${slug}-toggle" type="button">Toggle state</button>
<p id="${slug}-status">Waiting for an event.</p>
<script>
  const button = document.querySelector('#${slug}-toggle');
  const status = document.querySelector('#${slug}-status');
  button.addEventListener('click', (event) => {
    status.textContent = \`Handled \${event.type} on #\${event.currentTarget.id}\`;
    status.classList.toggle('is-active');
  });
</script>`;
  }
  if (slug.includes('fetch')) {
    return `<button id="${slug}-fetch" type="button">Mock fetch</button>
<pre id="${slug}-out"></pre>
<script>
  async function loadLesson() {
    const response = await Promise.resolve({
      ok: true,
      async json() {
        return { title: 'Fetch API', source: 'mock response' };
      },
    });
    return response.json();
  }
  document.querySelector('#${slug}-fetch').addEventListener('click', async () => {
    const data = await loadLesson();
    document.querySelector('#${slug}-out').textContent = JSON.stringify(data, null, 2);
  });
</script>`;
  }
  if (slug.includes('storage') || slug === 'todo-project') {
    return `<form id="${slug}-form">
  <label>Task <input name="task" value="Practice JavaScript"></label>
  <button type="submit">Save</button>
</form>
<output id="${slug}-out"></output>
<script>
  const form = document.querySelector('#${slug}-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = new FormData(form).get('task');
    localStorage.setItem('${slug}-task', task);
    document.querySelector('#${slug}-out').value = \`Saved: \${task}\`;
  });
</script>`;
  }
  if (slug.includes('geolocation')) {
    return `<button id="${slug}-locate" type="button">Use mock location</button>
<output id="${slug}-out"></output>
<script>
  document.querySelector('#${slug}-locate').addEventListener('click', () => {
    const position = { coords: { latitude: 35.6892, longitude: 51.3890 } };
    document.querySelector('#${slug}-out').value =
      \`lat \${position.coords.latitude}, lon \${position.coords.longitude}\`;
  });
</script>`;
  }
  if (slug.includes('worker')) {
    return `<button id="${slug}-run" type="button">Run worker-style task</button>
<output id="${slug}-out"></output>
<script>
  document.querySelector('#${slug}-run').addEventListener('click', () => {
    const numbers = Array.from({ length: 5 }, (_, index) => index + 1);
    const total = numbers.reduce((sum, value) => sum + value, 0);
    document.querySelector('#${slug}-out').value = \`Worker message result: \${total}\`;
  });
</script>`;
  }
  if (slug.includes('module') || slug === 'modules') {
    return `<output id="${slug}-out"></output>
<script type="module">
  const moduleName = '${escapeJs(item.enTitle)}';
  const format = (value) => \`Module scope: \${value}\`;
  document.querySelector('#${slug}-out').value = format(moduleName);
</script>`;
  }
  if (slug.includes('regexp')) {
    return `<label>Username <input id="${slug}-name" value="mega_js"></label>
<output id="${slug}-out"></output>
<script>
  const username = document.querySelector('#${slug}-name').value;
  const isValid = /^[a-z][a-z0-9_]{2,15}$/i.test(username);
  document.querySelector('#${slug}-out').value = \`Valid username: \${isValid}\`;
</script>`;
  }
  if (slug.includes('error')) {
    return `<button id="${slug}-run" type="button">Run safely</button>
<output id="${slug}-out"></output>
<script>
  document.querySelector('#${slug}-run').addEventListener('click', () => {
    try {
      JSON.parse('{ "valid": true }');
      document.querySelector('#${slug}-out').value = 'No error';
    } catch (error) {
      document.querySelector('#${slug}-out').value = error.message;
    }
  });
</script>`;
  }
  if (slug.includes('comparison') || slug.includes('if') || slug.includes('switch') || slug.includes('loop') || slug.includes('break') || slug === 'control-flow-ref') {
    return `<ol id="${slug}-list"></ol>
<script>
  const scores = [92, 71, 88, 64];
  const passed = [];
  for (const score of scores) {
    if (score < 70) continue;
    passed.push(score >= 90 ? 'excellent' : 'passed');
  }
  document.querySelector('#${slug}-list').innerHTML =
    passed.map((status) => \`<li>\${status}</li>\`).join('');
</script>`;
  }
  if (slug.includes('json')) {
    return `<pre id="${slug}-out"></pre>
<script>
  const lesson = { title: 'JSON', done: false };
  const json = JSON.stringify(lesson, null, 2);
  const parsed = JSON.parse(json);
  document.querySelector('#${slug}-out').textContent = JSON.stringify(parsed, null, 2);
</script>`;
  }
  if (slug.includes('performance') || slug.includes('memory')) {
    return `<button id="${slug}-measure" type="button">Measure loop</button>
<output id="${slug}-out"></output>
<script>
  document.querySelector('#${slug}-measure').addEventListener('click', () => {
    const start = performance.now();
    const values = Array.from({ length: 1000 }, (_, index) => index * 2);
    const end = performance.now();
    document.querySelector('#${slug}-out').value =
      \`Created \${values.length} values in \${(end - start).toFixed(2)} ms\`;
  });
</script>`;
  }
  return `<section>
  <h2>${escapeHtml(item.enTitle)}</h2>
  <p id="${slug}-text">${escapeHtml(item.enFocus)}.</p>
  <output id="${slug}-out"></output>
</section>
<script>
  const text = document.querySelector('#${slug}-text').textContent;
  document.querySelector('#${slug}-out').value =
    \`JavaScript handled \${text.length} characters for ${escapeJs(item.enTitle)}\`;
</script>`;
}

function referenceSnippet(item) {
  return `<article class="reference-card">
  <h2>${escapeHtml(item.enTitle)}</h2>
  <dl>
${item.terms.map((term) => `    <dt><code>${escapeHtml(term.syntax)}</code></dt>
    <dd>${escapeHtml(term.en)}</dd>`).join('\n')}
  </dl>
  <output id="${item.slug}-count"></output>
</article>
<script>
  const terms = document.querySelectorAll('.reference-card dt');
  document.querySelector('#${item.slug}-count').value = \`\${terms.length} JavaScript reference terms loaded\`;
</script>`;
}

function optionTableSnippet(item) {
  return `<table>
  <caption>${escapeHtml(item.enTitle)} quick reference</caption>
  <thead>
    <tr><th scope="col">Syntax</th><th scope="col">Purpose</th></tr>
  </thead>
  <tbody>
${item.terms.map((term) => `    <tr><td><code>${escapeHtml(term.syntax)}</code></td><td>${escapeHtml(term.en)}</td></tr>`).join('\n')}
  </tbody>
</table>
<script>
  const rows = document.querySelectorAll('tbody tr');
  console.log('${escapeJs(item.slug)} terms:', rows.length);
</script>`;
}

function specTraceSnippet(item) {
  return `<section>
  <h2>${escapeHtml(item.enTitle)} trace</h2>
  <pre id="${item.slug}-trace"></pre>
</section>
<script>
  const trace = [
    'Read source text',
    'Create execution context',
    'Evaluate expression',
    'Return completion record'
  ];
  document.querySelector('#${item.slug}-trace').textContent = trace.join('\\n');
</script>`;
}

function completeDocumentSnippet(item, inner) {
  if (/^<!doctype html>/i.test(inner.trim())) {
    return `<main>
  <h1>${escapeHtml(item.enTitle)} checklist</h1>
  <p>Open DevTools, run the script, and inspect the DOM and Console output.</p>
</main>
<script>
  console.log('Checklist ready for ${escapeJs(item.enTitle)}');
</script>`;
  }
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(item.enTitle)} practice</title>
  </head>
  <body>
${indent(inner.trim(), 4)}
  </body>
</html>`;
}

function learnMistakes(item, locale) {
  if (locale === 'fa') {
    return [
      `- کپی کردن ${item.faTitle} بدون بررسی valueها در DevTools Console و بدون دیدن errorهای runtime.`,
      '- استفاده از globalهای ناخواسته، selectorهای شکننده یا mutation پنهان که بعداً debug را سخت می‌کند.',
      `- فراموش کردن تست \`${item.terms[0].syntax}\` با keyboard، state خالی، error و browserهای هدف.`,
    ];
  }
  return [
    `- Copying ${item.enTitle} without checking values in DevTools Console or reading runtime errors.`,
    '- Creating accidental globals, brittle selectors, or hidden mutation that makes later debugging harder.',
    `- Forgetting to test \`${item.terms[0].syntax}\` with keyboard use, empty state, errors, and target browsers.`,
  ];
}

function practiceSignal(item, locale) {
  if (locale === 'fa') {
    if (item.slug.includes('async') || item.slug.includes('promise') || item.slug.includes('timer') || item.slug.includes('fetch')) return 'loading state روشن، error handling قابل اعتماد و ترتیب microtask قابل فهم';
    if (item.slug.includes('dom') || item.slug.includes('event') || item.slug.includes('bom')) return 'DOM update قابل پیش‌بینی، listener تمیز و feedback قابل دسترس';
    if (item.slug.includes('array') || item.slug.includes('map') || item.slug.includes('set')) return 'data flow خوانا، mutation کنترل‌شده و خروجی قابل تست';
    if (item.slug.includes('function') || item.slug.includes('scope') || item.slug.includes('closure')) return 'ورودی و خروجی روشن، side effect محدود و scope قابل فهم';
    if (item.slug.includes('error') || item.slug.includes('debug')) return 'error message مفید، stack trace قابل پیگیری و recovery مشخص';
    return 'هماهنگی syntax، value، runtime و رفتار قابل مشاهده در Console';
  }
  if (item.slug.includes('async') || item.slug.includes('promise') || item.slug.includes('timer') || item.slug.includes('fetch')) return 'clear loading state, reliable error handling, and understandable microtask order';
  if (item.slug.includes('dom') || item.slug.includes('event') || item.slug.includes('bom')) return 'predictable DOM updates, clean listeners, and accessible feedback';
  if (item.slug.includes('array') || item.slug.includes('map') || item.slug.includes('set')) return 'readable data flow, controlled mutation, and testable output';
  if (item.slug.includes('function') || item.slug.includes('scope') || item.slug.includes('closure')) return 'clear inputs and outputs, limited side effects, and understandable scope';
  if (item.slug.includes('error') || item.slug.includes('debug')) return 'useful error messages, traceable stacks, and explicit recovery';
  return 'alignment between syntax, values, runtime, and visible Console behavior';
}

function enExampleHeading(item, index) {
  const headings = ['Focused JavaScript pattern', 'Syntax options in context', 'Complete practice page'];
  return headings[index] ?? item.enTitle;
}

function faExampleHeading(item, index) {
  const headings = ['الگوی JavaScript متمرکز', 'گزینه‌های syntax در context', 'صفحه تمرینی کامل'];
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
      ? [' همراه تمرین کاربردی', ' برای پروژه واقعی وب', ' با نکته DevTools', ' در مسیر MEGA JS']
      : [' with practical drills', ' for real-world projects', ' with DevTools checks', ' on the MEGA JS path'];

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

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeJs(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
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

  console.log('Generated JavaScript docs into three tracks.');
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
