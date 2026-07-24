import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const DOCS_ROOT = path.join(ROOT, 'apps/web/content/docs/react');
const LOCALES = ['fa', 'en'];

const SOURCE_W3 = {
  name: 'W3Schools React Tutorial',
  url: 'https://www.w3schools.com/react/default.asp',
};
const SOURCE_MDN = {
  name: 'MDN React Framework Docs',
  url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started',
};
const SOURCE_REACT = {
  name: 'React API Reference',
  url: 'https://react.dev/reference/react',
};
const SOURCE_REACT_HOME = {
  name: 'React Docs',
  url: 'https://react.dev/',
};

const TRACK_SOURCES = {
  learn: [SOURCE_W3],
  reference: [SOURCE_MDN],
  official: [SOURCE_REACT, SOURCE_REACT_HOME],
};

function t(syntax, en, fa) {
  return { syntax, en, fa };
}

function page(slug, enTitle, faTitle, enFocus, faFocus, terms = termsFor(slug, enTitle, faTitle), keywords = keywordsFor(slug, enTitle)) {
  return { slug, enTitle, faTitle, enFocus, faFocus, terms, keywords };
}

const LEARN_INTRO = page(
  'introduction',
  'React Intro',
  'مقدمه React',
  'what React is, why component-based UI matters, and how this W3Schools-style path is organized',
  'اینکه React چیست، چرا UI مبتنی بر component مهم است و این مسیر آموزشی W3Schools-style چگونه چیده شده است',
  [
    t('React', 'a library for building user interfaces from components', 'کتابخانه‌ای برای ساخت UI از componentها'),
    t('component', 'a reusable piece of UI', 'بخش قابل استفاده مجدد از UI'),
    t('JSX', 'JavaScript syntax that describes UI markup', 'syntax در JavaScript برای توصیف markup مربوط به UI'),
  ],
  ['React introduction', 'React tutorial', 'W3Schools React'],
);

const LEARN_SECTIONS = [
  section('getting-started', 'React Getting Started', 'شروع کار با React', 'installing or loading React, creating a first app, rendering HTML, and planning upgrades', 'نصب یا load کردن React، ساخت first app، render کردن HTML و برنامه‌ریزی upgrade', [
    ['get-started', 'React Get Started', 'شروع سریع React', 'choosing a CDN playground, Vite, Next.js, or another setup for learning React', 'انتخاب CDN playground، Vite، Next.js یا setup دیگر برای یادگیری React'],
    ['first-app', 'Your First React App', 'اولین app با React', 'building a small component tree and rendering it with createRoot', 'ساخت component tree کوچک و render کردن آن با createRoot'],
    ['render-html', 'Render HTML with React', 'Render کردن HTML با React', 'using JSX to describe DOM output and update it through React state', 'استفاده از JSX برای توصیف خروجی DOM و update کردن آن با state در React'],
    ['upgrade', 'Upgrade React Projects', 'Upgrade پروژه‌های React', 'moving from older React patterns to React 18 createRoot and modern docs habits', 'حرکت از patternهای قدیمی React به React 18 createRoot و عادت‌های مدرن docs'],
  ]),
  section('es6-for-react', 'ES6 for React', 'ES6 برای React', 'using modern JavaScript syntax that React examples rely on every day', 'استفاده از syntax مدرن JavaScript که مثال‌های React هر روز به آن تکیه دارند', [
    ['es6-classes', 'ES6 Classes for React', 'Classهای ES6 برای React', 'recognizing class syntax in legacy components and JavaScript models', 'شناخت syntax کلاس در componentهای legacy و modelهای JavaScript'],
    ['es6-arrow', 'ES6 Arrow Functions', 'Arrow Functionهای ES6', 'writing concise callbacks for events, array rendering, and Hooks helpers', 'نوشتن callbackهای کوتاه برای event، render کردن array و helperهای Hooks'],
    ['es6-variables', 'ES6 Variables', 'Variableهای ES6', 'choosing let and const for component code and state helpers', 'انتخاب let و const برای code component و helperهای state'],
    ['es6-map', 'ES6 Array map', 'متد map در ES6', 'rendering lists from arrays while keeping each item stable', 'render کردن list از array همراه stable نگه داشتن هر item'],
    ['es6-destructuring', 'ES6 Destructuring', 'Destructuring در ES6', 'unpacking props, state tuples, and object options clearly', 'باز کردن props، tupleهای state و optionهای object به شکل روشن'],
    ['es6-spread', 'ES6 Spread Operator', 'Spread Operator در ES6', 'copying arrays and objects without mutating React state', 'copy کردن array و object بدون mutate کردن state در React'],
    ['es6-modules', 'ES6 Modules', 'Moduleهای ES6', 'splitting components with import and export in real projects', 'تقسیم componentها با import و export در پروژه واقعی'],
    ['es6-ternary', 'ES6 Ternary Operator', 'Ternary Operator در ES6', 'writing compact conditional JSX without hiding intent', 'نوشتن JSX شرطی کوتاه بدون پنهان کردن intent'],
    ['es6-templates', 'ES6 Template Literals', 'Template Literalهای ES6', 'building readable strings for labels, class names, and logs', 'ساخت stringهای خوانا برای label، class name و log'],
  ]),
  section('jsx', 'React JSX', 'JSX در React', 'writing React markup with expressions, attributes, and conditional UI', 'نوشتن markup در React با expression، attribute و UI شرطی', [
    ['jsx-intro', 'JSX Intro', 'مقدمه JSX', 'seeing JSX as JavaScript expressions that describe UI', 'دیدن JSX به عنوان expressionهای JavaScript که UI را توصیف می‌کنند'],
    ['jsx-expressions', 'JSX Expressions', 'Expressionها در JSX', 'embedding values, function calls, and derived data in JSX', 'قرار دادن value، function call و data مشتق‌شده داخل JSX'],
    ['jsx-attributes', 'JSX Attributes', 'Attributeها در JSX', 'using className, htmlFor, style objects, and event props correctly', 'استفاده درست از className، htmlFor، style object و event prop'],
    ['jsx-conditionals', 'JSX Conditionals', 'Conditionها در JSX', 'rendering different UI branches with ternaries, &&, and early returns', 'render کردن branchهای متفاوت UI با ternary، && و early return'],
  ]),
  section('components-props', 'Components and Props', 'Component و Props', 'building reusable components, passing data, handling events, and rendering lists', 'ساخت component قابل استفاده مجدد، ارسال data، مدیریت event و render کردن list', [
    ['components', 'React Components', 'Componentهای React', 'turning UI into small, named, reusable functions', 'تبدیل UI به functionهای کوچک، نام‌دار و قابل استفاده مجدد'],
    ['class-components', 'React Class Components', 'Class Componentهای React', 'reading older class component code and knowing when to prefer functions', 'خواندن code قدیمی class component و دانستن زمان ترجیح function'],
    ['props', 'React Props', 'Props در React', 'passing read-only data from parent components to children', 'ارسال data فقط‌خواندنی از parent component به children'],
    ['props-destructuring', 'Props Destructuring', 'Destructuring برای Props', 'naming prop values clearly inside component parameters', 'نام‌گذاری روشن valueهای prop داخل parameterهای component'],
    ['props-children', 'React children Prop', 'Prop با نام children', 'composing nested UI through the special children prop', 'ترکیب UI تو در تو از طریق prop ویژه children'],
    ['events', 'React Events', 'Eventها در React', 'handling user actions with event props and SyntheticEvent objects', 'مدیریت actionهای user با event prop و SyntheticEvent object'],
    ['conditionals', 'React Conditional Rendering', 'Conditional Rendering در React', 'choosing UI branches from props, state, and derived conditions', 'انتخاب branchهای UI از props، state و conditionهای مشتق‌شده'],
    ['lists', 'React Lists', 'Listها در React', 'mapping arrays to elements and giving each child a stable key', 'نگاشت array به element و دادن key پایدار به هر child'],
  ]),
  section('forms-overview', 'React Forms', 'Formها در React', 'collecting user input with controlled fields, submits, selects, checkboxes, and radios', 'جمع‌آوری input کاربر با field کنترل‌شده، submit، select، checkbox و radio', [
    ['forms', 'React Forms', 'Formهای React', 'connecting input value, onChange, and component state', 'وصل کردن value input، onChange و state component'],
    ['forms-submit', 'React Form Submit', 'Submit فرم در React', 'handling submit events without full page reloads', 'مدیریت submit event بدون reload کامل صفحه'],
    ['textarea', 'React Textarea', 'Textarea در React', 'controlling multiline text with value and onChange', 'کنترل text چندخطی با value و onChange'],
    ['select', 'React Select', 'Select در React', 'controlling selected options with state', 'کنترل option انتخاب‌شده با state'],
    ['multiple-inputs', 'Multiple Inputs in React', 'چند input در React', 'updating one object of form state from many fields', 'update کردن یک object state فرم از چند field'],
    ['checkbox', 'React Checkbox', 'Checkbox در React', 'using checked state for boolean choices', 'استفاده از state با checked برای انتخاب Boolean'],
    ['radio', 'React Radio Buttons', 'Radio Button در React', 'modeling one choice from a named group', 'مدل کردن یک انتخاب از یک group نام‌دار'],
  ]),
  section('advanced-ui', 'Advanced React UI', 'UI پیشرفته در React', 'using portals, Suspense, styling strategies, routing, transitions, refs, HOCs, and Sass', 'استفاده از portal، Suspense، strategyهای styling، routing، transition، ref، HOC و Sass', [
    ['portals', 'React Portals', 'Portalها در React', 'rendering children into a DOM node outside the parent tree', 'render کردن children داخل DOM node بیرون از tree والد'],
    ['suspense', 'React Suspense', 'Suspense در React', 'showing fallback UI while lazy code or async boundaries are pending', 'نمایش fallback UI وقتی lazy code یا boundary async در حال pending است'],
    ['css-styling', 'React CSS Styling', 'CSS Styling در React', 'choosing className, inline styles, and scoped conventions', 'انتخاب className، inline style و conventionهای scoped'],
    ['css-modules', 'React CSS Modules', 'CSS Moduleها در React', 'using locally scoped class names from imported CSS modules', 'استفاده از class nameهای scoped از CSS moduleهای import شده'],
    ['css-in-js', 'CSS-in-JS with React', 'CSS-in-JS با React', 'understanding runtime and build-time styling libraries', 'درک libraryهای styling در runtime و build time'],
    ['router', 'React Router', 'Router در React', 'coordinating URL-like state, links, and page components', 'هماهنگ کردن state شبیه URL، link و page component'],
    ['transitions', 'React Transitions', 'Transitionها در React', 'marking non-urgent updates with transition APIs and readable UI feedback', 'علامت‌گذاری updateهای غیر فوری با APIهای transition و feedback خوانا'],
    ['forward-ref', 'React forwardRef', 'forwardRef در React', 'passing refs through components when DOM access is part of the contract', 'عبور دادن ref از component وقتی دسترسی DOM بخشی از contract است'],
    ['hoc', 'Higher-Order Components', 'Higher-Order Componentها', 'wrapping components to share cross-cutting behavior in legacy patterns', 'wrap کردن component برای اشتراک behaviorهای cross-cutting در patternهای legacy'],
    ['sass', 'Sass with React', 'Sass با React', 'using Sass-generated CSS alongside React component markup', 'استفاده از CSS تولیدشده با Sass کنار markup componentهای React'],
  ]),
  section('hooks', 'React Hooks', 'Hooks در React', 'using built-in Hooks for state, effects, context, refs, reducers, memoization, and custom logic', 'استفاده از Hooks داخلی برای state، effect، context، ref، reducer، memoization و logic سفارشی', [
    ['usestate', 'React useState Hook', 'Hook با نام useState', 'storing local component state and updating it predictably', 'نگه‌داری state محلی component و update قابل پیش‌بینی آن'],
    ['useeffect', 'React useEffect Hook', 'Hook با نام useEffect', 'synchronizing with external systems after render', 'هماهنگ شدن با systemهای بیرونی پس از render'],
    ['usecontext', 'React useContext Hook', 'Hook با نام useContext', 'reading shared values from nearby providers', 'خواندن valueهای مشترک از providerهای نزدیک'],
    ['useref', 'React useRef Hook', 'Hook با نام useRef', 'storing mutable values and DOM nodes without triggering render', 'نگه‌داری value mutable و DOM node بدون trigger کردن render'],
    ['usereducer', 'React useReducer Hook', 'Hook با نام useReducer', 'centralizing complex state transitions in a reducer', 'متمرکز کردن transitionهای state پیچیده در reducer'],
    ['usecallback', 'React useCallback Hook', 'Hook با نام useCallback', 'memoizing callback identity for child components and Effects', 'memoize کردن identity callback برای child component و Effect'],
    ['usememo', 'React useMemo Hook', 'Hook با نام useMemo', 'memoizing expensive derived values between renders', 'memoize کردن value مشتق‌شده پرهزینه بین renderها'],
    ['custom-hooks', 'Custom React Hooks', 'Hookهای سفارشی React', 'extracting reusable stateful logic into functions named with use', 'استخراج logic stateful قابل استفاده مجدد به functionهایی با نام use'],
  ]),
];

const REFERENCE_PAGES = [
  page('overview', 'React Reference Overview', 'نمای کلی مرجع React', 'how MDN-style React framework docs organize components, JSX, state, effects, testing, and deployment decisions', 'اینکه مستندات framework در سبک MDN چگونه component، JSX، state، effect، test و تصمیم deploy در React را سازمان می‌دهد', undefined, ['React reference', 'MDN React', 'React docs']),
  page('component-model', 'React Component Model', 'مدل Component در React', 'component boundaries, data flow, render purity, and how UI trees are authored', 'مرز component، data flow، purity در render و شیوه author کردن treeهای UI'),
  page('jsx-in-depth', 'JSX in Depth', 'JSX به شکل عمیق', 'JSX compilation, expression rules, attribute naming, escaping, and authoring constraints', 'compile شدن JSX، ruleهای expression، نام attribute، escaping و constraintهای authoring'),
  page('props-vs-state', 'Props vs State', 'Props در برابر State', 'choosing between read-only inputs and local mutable UI memory', 'انتخاب بین inputهای فقط‌خواندنی و memory محلی قابل تغییر برای UI'),
  page('rendering-reconciliation', 'Rendering and Reconciliation', 'Rendering و Reconciliation', 'how React calls components, compares element trees, and commits DOM updates', 'اینکه React چگونه component را call، tree element را compare و updateهای DOM را commit می‌کند'),
  page('lists-keys-ref', 'Lists and Keys Reference', 'مرجع List و Key', 'stable identity for arrays, list rendering, key placement, and reorder behavior', 'identity پایدار برای array، render کردن list، محل key و رفتار reorder'),
  page('forms-controlled', 'Controlled Forms Reference', 'مرجع Form کنترل‌شده', 'controlled inputs, submit handling, validation feedback, and form state structure', 'input کنترل‌شده، مدیریت submit، feedback validation و ساختار state فرم'),
  page('events-synthetic', 'Synthetic Events Reference', 'مرجع SyntheticEvent', 'React event props, SyntheticEvent shape, propagation, default prevention, and accessibility', 'event propهای React، شکل SyntheticEvent، propagation، جلوگیری از default و accessibility'),
  page('hooks-overview-ref', 'Hooks Overview Reference', 'نمای کلی Hooks در مرجع', 'the rules, categories, and authoring expectations around React Hooks', 'ruleها، categoryها و انتظارهای authoring پیرامون Hooks در React'),
  page('effect-lifecycle', 'Effect Lifecycle Reference', 'مرجع چرخه Effect', 'setup, cleanup, dependencies, StrictMode re-runs, and synchronization boundaries', 'setup، cleanup، dependency، اجرای دوباره در StrictMode و boundaryهای synchronization'),
  page('context-ref', 'Context Reference', 'مرجع Context', 'provider boundaries, value identity, useContext, and avoiding global-state overuse', 'مرز provider، identity value، useContext و پرهیز از استفاده افراطی به جای global state'),
  page('refs-dom', 'Refs and DOM Reference', 'مرجع Ref و DOM', 'useRef, DOM node access, imperative handles, and render-independent storage', 'useRef، دسترسی به DOM node، imperative handle و storage مستقل از render'),
  page('composition-patterns', 'Composition Patterns', 'Patternهای Composition', 'children, slots, render props, container components, and dependency direction', 'children، slot، render prop، container component و جهت dependency'),
  page('code-splitting', 'Code Splitting in React', 'Code Splitting در React', 'lazy loading, Suspense boundaries, route-level bundles, and loading UI', 'lazy loading، boundaryهای Suspense، bundle در سطح route و UI مربوط به loading'),
  page('accessibility-react', 'React Accessibility', 'Accessibility در React', 'semantic JSX, labels, keyboard flow, focus management, and announcements', 'JSX semantic، label، جریان keyboard، مدیریت focus و announcementها'),
  page('testing-react', 'Testing React', 'Test کردن React', 'testing behavior, user events, component boundaries, async UI, and test fixtures', 'test کردن behavior، user event، مرز component، UI async و fixtureهای test'),
  page('performance-react', 'React Performance', 'Performance در React', 'measuring renders, memoization, list cost, bundle size, and browser work', 'اندازه‌گیری render، memoization، هزینه list، اندازه bundle و کار مرورگر'),
  page('typescript-react', 'TypeScript with React', 'TypeScript با React', 'typing props, events, children, Hooks, refs, and reusable component APIs', 'type کردن props، event، children، Hooks، ref و APIهای component قابل استفاده مجدد'),
  page('cheatsheet', 'React Cheatsheet', 'Cheatsheet React', 'a compact author checklist for components, JSX, props, state, effects, forms, and performance', 'checklist فشرده برای author درباره component، JSX، props، state، effect، form و performance'),
];

const OFFICIAL_PAGES = [
  page('overview', 'react.dev Reference Overview', 'نمای کلی مرجع react.dev', 'how the official React reference organizes APIs, Hooks, Components, React DOM, Compiler, and rules', 'اینکه مرجع رسمی React چگونه API، Hooks، Components، React DOM، Compiler و ruleها را سازمان می‌دهد', undefined, ['react.dev reference', 'React API reference', 'official React']),
  page('hooks-ref', 'Hooks Reference Catalog', 'Catalog مرجع Hooks', 'the official categories for built-in Hooks and when each family is used', 'categoryهای رسمی برای Hooks داخلی و زمان استفاده از هر خانواده'),
  page('usestate-ref', 'useState Reference', 'مرجع useState', 'declaring state variables, updater functions, initializer functions, and reset patterns', 'تعریف state variable، updater function، initializer function و patternهای reset'),
  page('usereducer-ref', 'useReducer Reference', 'مرجع useReducer', 'managing complex state with reducers, actions, dispatch, and initializer functions', 'مدیریت state پیچیده با reducer، action، dispatch و initializer function'),
  page('usecontext-ref', 'useContext Reference', 'مرجع useContext', 'reading context values, provider placement, fallback defaults, and rerender implications', 'خواندن context value، محل provider، default fallback و اثر روی rerender'),
  page('useref-ref', 'useRef Reference', 'مرجع useRef', 'keeping mutable references, DOM nodes, and values that should not trigger rendering', 'نگه‌داری reference mutable، DOM node و valueهایی که نباید render را trigger کنند'),
  page('useeffect-ref', 'useEffect Reference', 'مرجع useEffect', 'synchronizing with external systems using setup, cleanup, and dependencies', 'هماهنگ شدن با system بیرونی با setup، cleanup و dependency'),
  page('usememo-ref', 'useMemo Reference', 'مرجع useMemo', 'caching expensive calculations while keeping dependencies accurate', 'cache کردن calculation پرهزینه همراه accurate نگه داشتن dependencyها'),
  page('usecallback-ref', 'useCallback Reference', 'مرجع useCallback', 'caching function identities for memoized children and Effect dependencies', 'cache کردن identity function برای childهای memoized و dependencyهای Effect'),
  page('usetransition-ref', 'useTransition Reference', 'مرجع useTransition', 'marking state updates as non-blocking transitions with pending UI', 'علامت‌گذاری state update به عنوان transition غیر blocking همراه pending UI'),
  page('usedeferredvalue-ref', 'useDeferredValue Reference', 'مرجع useDeferredValue', 'deferring a value so urgent input can stay responsive during expensive rendering', 'defer کردن value تا input فوری هنگام render پرهزینه responsive بماند'),
  page('useid-ref', 'useId Reference', 'مرجع useId', 'generating stable unique IDs for accessibility attributes across server and client', 'ساخت ID پایدار و unique برای attributeهای accessibility در server و client'),
  page('custom-hooks-official', 'Custom Hooks in Official React', 'Hookهای سفارشی در React رسمی', 'extracting reusable logic while following the Rules of Hooks and naming conventions', 'استخراج logic قابل استفاده مجدد همراه رعایت Rules of Hooks و naming convention'),
  page('components-ref', 'Built-in Components Reference', 'مرجع Componentهای داخلی', 'Fragment, Profiler, StrictMode, and Suspense as official React components', 'Fragment، Profiler، StrictMode و Suspense به عنوان componentهای رسمی React'),
  page('apis-ref', 'React APIs Reference', 'مرجع APIهای React', 'createContext, lazy, memo, startTransition, use, and related core React APIs', 'APIهای core مثل createContext، lazy، memo، startTransition، use و موارد مرتبط'),
  page('react-dom-ref', 'React DOM Reference', 'مرجع React DOM', 'client createRoot and hydrateRoot plus server rendering APIs for React DOM', 'createRoot و hydrateRoot در client به همراه APIهای server rendering در React DOM'),
  page('compiler-ref', 'React Compiler Reference', 'مرجع React Compiler', 'the official compiler area, directives, linting expectations, and optimization model', 'حوزه رسمی compiler، directiveها، انتظارهای lint و مدل optimization'),
  page('rules-of-react', 'Rules of React', 'Rules of React', 'purity, Rules of Hooks, component constraints, and avoiding side effects during render', 'purity، Rules of Hooks، constraintهای component و پرهیز از side effect هنگام render'),
  page('legacy-apis', 'Legacy React APIs', 'APIهای Legacy در React', 'older APIs preserved in the reference and how authors should approach migration', 'APIهای قدیمی حفظ‌شده در reference و روش نزدیک شدن authorها به migration'),
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

function sectionTerms(slug) {
  if (slug === 'getting-started') {
    return [
      t('createRoot', 'creates a React root for rendering', 'برای render کردن، root در React می‌سازد'),
      t('ReactDOM', 'connects React to the browser DOM', 'React را به DOM مرورگر وصل می‌کند'),
      t('root.render()', 'renders JSX into the root container', 'JSX را داخل root container render می‌کند'),
    ];
  }
  if (slug === 'es6-for-react') {
    return [
      t('const', 'declares stable bindings in component code', 'binding پایدار در code component تعریف می‌کند'),
      t('map()', 'turns arrays into rendered lists', 'array را به list render شده تبدیل می‌کند'),
      t('destructuring', 'unpacks props and Hook tuples', 'props و tupleهای Hook را باز می‌کند'),
    ];
  }
  if (slug === 'jsx') {
    return [
      t('JSX', 'describes UI with JavaScript expressions', 'UI را با expressionهای JavaScript توصیف می‌کند'),
      t('className', 'sets CSS classes in JSX', 'classهای CSS را در JSX تنظیم می‌کند'),
      t('{expression}', 'embeds a JavaScript value inside JSX', 'یک value از JavaScript را داخل JSX قرار می‌دهد'),
    ];
  }
  if (slug === 'components-props') {
    return [
      t('props', 'read-only inputs passed to a component', 'inputهای فقط‌خواندنی برای component'),
      t('children', 'nested content passed between component tags', 'content تو در تو بین tagهای component'),
      t('key', 'stable identity for list items', 'identity پایدار برای itemهای list'),
    ];
  }
  if (slug === 'forms-overview') {
    return [
      t('value', 'controlled input value from state', 'value کنترل‌شده input از state'),
      t('onChange', 'updates state from user input', 'state را از input کاربر update می‌کند'),
      t('onSubmit', 'handles form submission in React', 'submit فرم را در React مدیریت می‌کند'),
    ];
  }
  if (slug === 'advanced-ui') {
    return [
      t('portal', 'renders outside the parent DOM node', 'بیرون از DOM node والد render می‌کند'),
      t('Suspense', 'shows fallback UI for pending work', 'برای کار pending، fallback UI نشان می‌دهد'),
      t('Router', 'coordinates URL state and page UI', 'state مربوط به URL و UI صفحه را هماهنگ می‌کند'),
    ];
  }
  return [
    t('Hooks', 'functions that use React features from components', 'functionهایی برای استفاده از قابلیت‌های React در component'),
    t('useState', 'stores local component state', 'state محلی component را نگه می‌دارد'),
    t('useEffect', 'synchronizes with external systems', 'با systemهای بیرونی synchronize می‌کند'),
  ];
}

function termsFor(slug, enTitle, faTitle) {
  const exact = {
    'get-started': [
      t('React CDN', 'loads React in a browser sandbox', 'React را در sandbox مرورگر load می‌کند'),
      t('@babel/standalone', 'transforms JSX in learning demos', 'JSX را در demoهای آموزشی transform می‌کند'),
      t('Vite', 'common local React development tool', 'ابزار رایج development محلی برای React'),
    ],
    'first-app': [
      t('App', 'a conventional root component name', 'نام رایج برای component ریشه'),
      t('createRoot', 'creates the root renderer', 'renderer ریشه را می‌سازد'),
      t('root.render(<App />)', 'renders the first component', 'اولین component را render می‌کند'),
    ],
    'render-html': [
      t('JSX element', 'object-like description of UI', 'توصیف شبیه object از UI'),
      t('Virtual DOM', 'common term for React element comparison concepts', 'اصطلاح رایج برای مفهوم مقایسه elementها در React'),
      t('commit', 'applies changes to the DOM', 'تغییرها را روی DOM اعمال می‌کند'),
    ],
    upgrade: [
      t('React 18', 'modern React version with createRoot', 'نسخه مدرن React با createRoot'),
      t('legacy render', 'older ReactDOM.render API', 'API قدیمی ReactDOM.render'),
      t('StrictMode', 'development checks for safer components', 'checkهای development برای component امن‌تر'),
    ],
    'es6-classes': [
      t('class', 'JavaScript syntax used by older React components', 'syntax JavaScript برای componentهای قدیمی React'),
      t('extends React.Component', 'legacy class component inheritance', 'inheritance مربوط به class component قدیمی'),
      t('render()', 'method returning JSX in class components', 'methodی که در class component، JSX برمی‌گرداند'),
    ],
    'es6-arrow': [
      t('() => {}', 'concise function syntax', 'syntax کوتاه function'),
      t('lexical this', 'this behavior of arrow functions', 'رفتار this در arrow function'),
      t('callback', 'function passed to an event or array method', 'function ارسال‌شده به event یا array method'),
    ],
    'es6-variables': [
      t('const', 'binding that is not reassigned', 'binding که reassignment نمی‌شود'),
      t('let', 'block-scoped binding that can change', 'binding با block scope که می‌تواند تغییر کند'),
      t('scope', 'where a binding is visible', 'جایی که binding دیده می‌شود'),
    ],
    'es6-map': [
      t('array.map()', 'transforms data into JSX elements', 'data را به elementهای JSX تبدیل می‌کند'),
      t('key', 'stable identity for mapped items', 'identity پایدار برای itemهای map شده'),
      t('return', 'gives JSX back from a callback', 'JSX را از callback برمی‌گرداند'),
    ],
    'es6-destructuring': [
      t('{ title }', 'extracts object properties', 'propertyهای object را extract می‌کند'),
      t('[state, setState]', 'unpacks Hook tuples', 'tupleهای Hook را باز می‌کند'),
      t('default value', 'fallback in destructuring patterns', 'fallback در patternهای destructuring'),
    ],
    'es6-spread': [
      t('...state', 'copies object properties', 'propertyهای object را copy می‌کند'),
      t('[...items]', 'copies array values', 'valueهای array را copy می‌کند'),
      t('immutability', 'updating without mutating existing state', 'update بدون mutate کردن state موجود'),
    ],
    'es6-modules': [
      t('import', 'brings a component into a module', 'component را وارد module می‌کند'),
      t('export', 'makes a component reusable elsewhere', 'component را در جای دیگر قابل استفاده می‌کند'),
      t('default export', 'one primary export from a file', 'یک export اصلی از فایل'),
    ],
    'es6-ternary': [
      t('condition ? a : b', 'chooses between two JSX branches', 'بین دو branch در JSX انتخاب می‌کند'),
      t('&&', 'renders only when the left side is truthy', 'فقط وقتی سمت چپ truthy است render می‌کند'),
      t('null', 'renders nothing in React', 'در React چیزی render نمی‌کند'),
    ],
    'es6-templates': [
      t('`Hello ${name}`', 'interpolates a value into text', 'value را داخل text interpolate می‌کند'),
      t('class string', 'computed className text', 'text محاسبه‌شده برای className'),
      t('label', 'user-facing text composed from data', 'text نمایشی ساخته‌شده از data'),
    ],
    'jsx-intro': [
      t('<App />', 'JSX syntax for a component', 'syntax JSX برای component'),
      t('fragment', 'groups elements without extra DOM', 'elementها را بدون DOM اضافه group می‌کند'),
      t('expression', 'JavaScript value used in JSX', 'value جاوااسکریپتی در JSX'),
    ],
    'jsx-expressions': [
      t('{count}', 'embeds a value in JSX', 'value را داخل JSX قرار می‌دهد'),
      t('{items.map(...) }', 'renders derived arrays', 'arrayهای مشتق‌شده را render می‌کند'),
      t('derived value', 'calculated during render from props or state', 'value محاسبه‌شده هنگام render از props یا state'),
    ],
    'jsx-attributes': [
      t('className', 'sets the HTML class attribute', 'attribute مربوط به class در HTML را تنظیم می‌کند'),
      t('htmlFor', 'connects a label to an input', 'label را به input وصل می‌کند'),
      t('style={{}}', 'uses a JavaScript object for inline styles', 'برای inline style از object جاوااسکریپتی استفاده می‌کند'),
    ],
    'jsx-conditionals': [
      t('ternary', 'chooses one JSX branch', 'یک branch از JSX را انتخاب می‌کند'),
      t('&&', 'conditionally includes JSX', 'JSX را شرطی وارد می‌کند'),
      t('early return', 'returns a different component result first', 'ابتدا نتیجه component متفاوتی برمی‌گرداند'),
    ],
    components: [
      t('function Component()', 'declares a React component', 'component در React تعریف می‌کند'),
      t('PascalCase', 'component naming convention', 'convention نام‌گذاری component'),
      t('return JSX', 'describes the rendered UI', 'UI render شده را توصیف می‌کند'),
    ],
    'class-components': [
      t('React.Component', 'base class for legacy components', 'base class برای componentهای legacy'),
      t('this.props', 'props access in a class component', 'دسترسی به props در class component'),
      t('this.state', 'state storage in class components', 'storage مربوط به state در class component'),
    ],
    props: [
      t('props', 'read-only component inputs', 'inputهای فقط‌خواندنی component'),
      t('parent', 'component that passes data down', 'componentی که data را به پایین می‌فرستد'),
      t('one-way data flow', 'data moves from parent to child', 'data از parent به child حرکت می‌کند'),
    ],
    'props-destructuring': [
      t('function Card({ title })', 'destructures props in parameters', 'props را در parameter باز می‌کند'),
      t('rest props', 'collects remaining props', 'props باقی‌مانده را جمع می‌کند'),
      t('default value', 'fallback prop value', 'value fallback برای prop'),
    ],
    'props-children': [
      t('children', 'nested JSX passed to a component', 'JSX تو در تو که به component پاس داده می‌شود'),
      t('composition', 'building UI by nesting components', 'ساخت UI با nesting componentها'),
      t('slot', 'a named or conventional place for child UI', 'جای نام‌دار یا قراردادی برای UI فرزند'),
    ],
    events: [
      t('onClick', 'handles click events', 'click event را مدیریت می‌کند'),
      t('SyntheticEvent', 'React event wrapper', 'wrapper مربوط به event در React'),
      t('preventDefault()', 'stops default browser behavior', 'رفتار پیش‌فرض مرورگر را متوقف می‌کند'),
    ],
    conditionals: [
      t('isOpen ? ... : ...', 'renders one of two branches', 'یکی از دو branch را render می‌کند'),
      t('null', 'renders no UI', 'هیچ UI render نمی‌کند'),
      t('state flag', 'Boolean state driving UI', 'state از نوع Boolean که UI را هدایت می‌کند'),
    ],
    lists: [
      t('map()', 'turns items into JSX', 'itemها را به JSX تبدیل می‌کند'),
      t('key', 'stable identity for each child', 'identity پایدار برای هر child'),
      t('filter()', 'derives visible items', 'itemهای قابل مشاهده را مشتق می‌کند'),
    ],
    forms: [
      t('controlled input', 'input value is driven by state', 'value input از state می‌آید'),
      t('value', 'current form state value', 'value فعلی state فرم'),
      t('onChange', 'updates state as the user types', 'هنگام تایپ کاربر state را update می‌کند'),
    ],
    'forms-submit': [
      t('onSubmit', 'handles form submission', 'submit فرم را مدیریت می‌کند'),
      t('event.preventDefault()', 'prevents page navigation', 'navigation صفحه را جلوگیری می‌کند'),
      t('FormData', 'reads submitted form values', 'valueهای submit شده فرم را می‌خواند'),
    ],
    textarea: [
      t('<textarea value={text}>', 'controlled multiline input', 'input چندخطی کنترل‌شده'),
      t('rows', 'visible textarea height hint', 'hint ارتفاع قابل مشاهده textarea'),
      t('onChange', 'captures text updates', 'updateهای text را دریافت می‌کند'),
    ],
    select: [
      t('<select value={choice}>', 'controlled select field', 'field کنترل‌شده select'),
      t('<option>', 'one selectable value', 'یک value قابل انتخاب'),
      t('selected state', 'state holding current option', 'state نگه‌دارنده option فعلی'),
    ],
    'multiple-inputs': [
      t('name', 'field identifier used in update handlers', 'شناسه field در handlerهای update'),
      t('computed property', 'updates one object key dynamically', 'یک key از object را dynamic update می‌کند'),
      t('form state object', 'single object for related values', 'یک object برای valueهای مرتبط فرم'),
    ],
    checkbox: [
      t('checked', 'Boolean checkbox state', 'state بولی checkbox'),
      t('onChange', 'reads event.target.checked', 'event.target.checked را می‌خواند'),
      t('toggle', 'switches between true and false', 'بین true و false جابه‌جا می‌شود'),
    ],
    radio: [
      t('name', 'groups radio buttons', 'radio buttonها را group می‌کند'),
      t('checked={value === option}', 'marks selected option', 'option انتخاب‌شده را مشخص می‌کند'),
      t('single choice', 'one active option from a group', 'یک option فعال از group'),
    ],
    portals: [
      t('ReactDOM.createPortal', 'renders children into another DOM node', 'children را داخل DOM node دیگر render می‌کند'),
      t('modal root', 'separate DOM container for overlays', 'container جداگانه DOM برای overlay'),
      t('event bubbling', 'still follows the React tree', 'همچنان tree مربوط به React را دنبال می‌کند'),
    ],
    suspense: [
      t('Suspense', 'displays fallback while a child is pending', 'وقتی child در pending است fallback نشان می‌دهد'),
      t('fallback', 'temporary UI while loading', 'UI موقت هنگام loading'),
      t('lazy()', 'loads a component lazily', 'component را lazy load می‌کند'),
    ],
    'css-styling': [
      t('className', 'connects JSX to CSS classes', 'JSX را به classهای CSS وصل می‌کند'),
      t('style object', 'inline style from JavaScript', 'inline style از JavaScript'),
      t('design token', 'shared style value', 'value style مشترک'),
    ],
    'css-modules': [
      t('styles.card', 'locally scoped class reference', 'reference به class با scope محلی'),
      t('CSS Module', 'CSS file with generated class names', 'فایل CSS با class name تولیدشده'),
      t('scope', 'prevents accidental class collisions', 'از collision ناخواسته class جلوگیری می‌کند'),
    ],
    'css-in-js': [
      t('styled component', 'component carrying styles', 'component همراه style'),
      t('runtime CSS', 'styles generated while the app runs', 'style تولیدشده هنگام اجرای app'),
      t('theme', 'shared styling values for components', 'valueهای style مشترک برای componentها'),
    ],
    router: [
      t('Router', 'maps location state to UI', 'state مربوط به location را به UI نگاشت می‌کند'),
      t('Link', 'navigates without full reload', 'بدون reload کامل navigate می‌کند'),
      t('route component', 'component selected by a path', 'component انتخاب‌شده بر اساس path'),
    ],
    transitions: [
      t('useTransition', 'marks non-urgent updates', 'updateهای غیر فوری را علامت می‌زند'),
      t('isPending', 'shows transition progress', 'progress مربوط به transition را نشان می‌دهد'),
      t('startTransition', 'schedules lower-priority UI work', 'کار UI با priority پایین‌تر schedule می‌کند'),
    ],
    'forward-ref': [
      t('forwardRef', 'passes a ref through a component', 'ref را از داخل component عبور می‌دهد'),
      t('ref', 'points to a DOM node or value', 'به DOM node یا value اشاره می‌کند'),
      t('imperative', 'direct interaction outside normal props', 'تعامل مستقیم بیرون از جریان عادی props'),
    ],
    hoc: [
      t('withFeature(Component)', 'wraps a component with shared behavior', 'component را با behavior مشترک wrap می‌کند'),
      t('wrapper', 'component that returns another component', 'componentی که component دیگر برمی‌گرداند'),
      t('legacy pattern', 'older composition approach still seen in codebases', 'pattern قدیمی composition که هنوز در codebaseها دیده می‌شود'),
    ],
    sass: [
      t('.scss', 'Sass source file extension', 'پسوند فایل source در Sass'),
      t('nesting', 'Sass syntax for related selectors', 'syntax Sass برای selectorهای مرتبط'),
      t('compiled CSS', 'CSS output consumed by the browser', 'خروجی CSS که مرورگر مصرف می‌کند'),
    ],
    usestate: [
      t('useState', 'stores local component state', 'state محلی component را نگه می‌دارد'),
      t('setState', 'requests a state update', 'درخواست update برای state می‌دهد'),
      t('updater function', 'calculates next state from previous state', 'state بعدی را از state قبلی محاسبه می‌کند'),
    ],
    useeffect: [
      t('useEffect', 'runs synchronization after render', 'synchronization را پس از render اجرا می‌کند'),
      t('dependency array', 'declares values used by the Effect', 'valueهای استفاده‌شده توسط Effect را اعلام می‌کند'),
      t('cleanup', 'undoes subscriptions or timers', 'subscription یا timer را undo می‌کند'),
    ],
    usecontext: [
      t('createContext', 'creates a context object', 'context object می‌سازد'),
      t('Provider', 'supplies a context value', 'value مربوط به context را فراهم می‌کند'),
      t('useContext', 'reads the nearest provider value', 'value نزدیک‌ترین provider را می‌خواند'),
    ],
    useref: [
      t('useRef', 'keeps a mutable object between renders', 'object mutable را بین renderها نگه می‌دارد'),
      t('ref.current', 'stores the current mutable value', 'value mutable فعلی را نگه می‌دارد'),
      t('DOM ref', 'points to a browser element', 'به element مرورگر اشاره می‌کند'),
    ],
    usereducer: [
      t('useReducer', 'uses a reducer for state transitions', 'برای transitionهای state از reducer استفاده می‌کند'),
      t('dispatch', 'sends an action to the reducer', 'action را به reducer می‌فرستد'),
      t('action', 'describes a state change', 'تغییر state را توصیف می‌کند'),
    ],
    usecallback: [
      t('useCallback', 'caches a function identity', 'identity function را cache می‌کند'),
      t('dependency array', 'controls when callback changes', 'کنترل می‌کند callback چه زمانی تغییر کند'),
      t('memoized child', 'child that skips equal props', 'child که props برابر را skip می‌کند'),
    ],
    usememo: [
      t('useMemo', 'caches a calculated value', 'value محاسبه‌شده را cache می‌کند'),
      t('expensive calculation', 'work worth avoiding on every render', 'کاری که بهتر است در هر render تکرار نشود'),
      t('dependencies', 'values that invalidate the cache', 'valueهایی که cache را invalidate می‌کنند'),
    ],
    'custom-hooks': [
      t('useSomething', 'custom Hook naming pattern', 'pattern نام‌گذاری Hook سفارشی'),
      t('reusable logic', 'stateful behavior shared across components', 'behavior stateful مشترک بین componentها'),
      t('Rules of Hooks', 'constraints for calling Hooks safely', 'constraintهایی برای call امن Hooks'),
    ],
  };
  if (exact[slug]) return exact[slug];
  if (slug.includes('state') || slug.includes('reducer') || slug.includes('transition') || slug.includes('deferred')) {
    return [
      t('state', 'component memory that affects rendering', 'memory component که روی render اثر دارد'),
      t('update', 'request for React to render again', 'درخواست برای render دوباره React'),
      t('render', 'calling components to calculate UI', 'call کردن componentها برای محاسبه UI'),
    ];
  }
  if (slug.includes('effect')) {
    return [
      t('useEffect', 'synchronizes a component with an external system', 'component را با system بیرونی synchronize می‌کند'),
      t('cleanup', 'runs before the Effect is re-created or removed', 'پیش از ساخت دوباره یا حذف Effect اجرا می‌شود'),
      t('dependency', 'value that controls Effect freshness', 'valueی که تازگی Effect را کنترل می‌کند'),
    ];
  }
  if (slug.includes('context')) {
    return [
      t('createContext', 'creates a context for shared values', 'برای value مشترک context می‌سازد'),
      t('Provider', 'supplies context to descendants', 'context را به descendantها می‌دهد'),
      t('useContext', 'reads context from a component', 'context را از component می‌خواند'),
    ];
  }
  if (slug.includes('ref') || slug.includes('dom')) {
    return [
      t('ref', 'reference to a DOM node or mutable value', 'reference به DOM node یا value mutable'),
      t('React DOM', 'React package for browser DOM rendering', 'package مربوط به React برای render در DOM مرورگر'),
      t('createRoot', 'creates a browser root for React', 'root مرورگر برای React می‌سازد'),
    ];
  }
  if (slug.includes('jsx')) {
    return [
      t('JSX', 'syntax for describing UI in JavaScript', 'syntax برای توصیف UI در JavaScript'),
      t('attribute', 'prop-like value written on JSX', 'value شبیه prop که روی JSX نوشته می‌شود'),
      t('expression', 'JavaScript value embedded in markup', 'value جاوااسکریپتی داخل markup'),
    ];
  }
  if (slug.includes('form') || slug.includes('input')) {
    return [
      t('controlled component', 'form element driven by React state', 'form element هدایت‌شده با state در React'),
      t('onChange', 'captures user input changes', 'تغییر input کاربر را دریافت می‌کند'),
      t('validation', 'checks input before accepting it', 'input را پیش از پذیرش بررسی می‌کند'),
    ];
  }
  if (slug.includes('list') || slug.includes('key')) {
    return [
      t('key', 'stable identity among siblings', 'identity پایدار میان siblingها'),
      t('map()', 'renders arrays as JSX', 'arrayها را به JSX render می‌کند'),
      t('reconciliation', 'React comparison of old and new trees', 'مقایسه tree قدیم و جدید توسط React'),
    ];
  }
  if (slug.includes('accessibility') || slug.includes('id')) {
    return [
      t('useId', 'generates stable IDs for accessibility', 'ID پایدار برای accessibility می‌سازد'),
      t('label', 'names a control for users', 'برای کاربر control را نام‌گذاری می‌کند'),
      t('focus', 'current keyboard interaction target', 'target فعلی interaction با keyboard'),
    ];
  }
  if (slug.includes('performance') || slug.includes('memo') || slug.includes('callback') || slug.includes('compiler')) {
    return [
      t('memo', 'skips rendering when props are equal', 'وقتی props برابر است render را skip می‌کند'),
      t('useMemo', 'caches calculated values', 'valueهای محاسبه‌شده را cache می‌کند'),
      t('Profiler', 'measures render performance', 'performance مربوط به render را اندازه می‌گیرد'),
    ];
  }
  if (slug.includes('suspense') || slug.includes('split') || slug.includes('lazy')) {
    return [
      t('Suspense', 'renders fallback during pending work', 'هنگام کار pending fallback render می‌کند'),
      t('lazy', 'loads a component on demand', 'component را در زمان نیاز load می‌کند'),
      t('fallback', 'temporary UI for loading states', 'UI موقت برای stateهای loading'),
    ];
  }
  if (slug.includes('rules')) {
    return [
      t('purity', 'components should not change external values during render', 'component نباید هنگام render value بیرونی را تغییر دهد'),
      t('Rules of Hooks', 'Hooks must be called consistently', 'Hooks باید به شکل ثابت call شوند'),
      t('side effect', 'work that changes something outside render output', 'کاری که بیرون از خروجی render چیزی را تغییر می‌دهد'),
    ];
  }
  if (slug.includes('legacy')) {
    return [
      t('legacy API', 'older supported React API', 'API قدیمی اما پشتیبانی‌شده React'),
      t('migration', 'moving toward modern React patterns', 'حرکت به سمت patternهای مدرن React'),
      t('compatibility', 'behavior preserved for existing apps', 'رفتاری که برای appهای موجود حفظ می‌شود'),
    ];
  }
  return [
    t('React', `library feature used in ${enTitle}`, `ویژگی کتابخانه React برای ${faTitle}`),
    t('component', 'reusable unit of UI', 'واحد قابل استفاده مجدد UI'),
    t('props', 'inputs passed into a component', 'inputهایی که به component پاس داده می‌شوند'),
  ];
}

function keywordsFor(slug, enTitle) {
  const words = enTitle.replace(/^React\s+/u, '').split(/\s+/u).slice(0, 5).join(' ');
  return [`React ${words}`, `${words} tutorial`, slug.replaceAll('-', ' ')];
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
      `React ${sectionItem.slug}`,
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
    id: 'react',
    order: 60,
    title: {
      fa: 'React',
      en: 'React',
    },
    seoTitle: {
      fa: 'React — آموزش W3Schools، مرجع MDN و API رسمی react.dev | MEGA JS',
      en: 'React — W3Schools Tutorial, MDN Reference & react.dev APIs | MEGA JS',
    },
    seoDescription: {
      fa: seoLength('React را در سه مسیر یاد بگیرید: آموزش W3Schools، مرجع MDN و API رسمی react.dev؛ همراه JSX، Hooks و مثال live.', 'fa'),
      en: seoLength('Learn React across three tracks: W3Schools-style lessons, MDN reference, and official react.dev API summaries with JSX and Hooks demos.', 'en'),
    },
    description: {
      fa: 'سه مسیر کامل برای React: آموزش قدم‌به‌قدم، مرجع author-focused به سبک MDN و خلاصه‌های رسمی react.dev برای Hooks، Components و React DOM.',
      en: 'Three complete React tracks: step-by-step learning, author-focused MDN-style reference, and official react.dev summaries for Hooks, Components, and React DOM.',
    },
    sources: [SOURCE_W3, SOURCE_MDN, SOURCE_REACT, SOURCE_REACT_HOME],
    tracks: [
      {
        id: 'learn',
        title: {
          fa: 'آموزشی (W3Schools)',
          en: 'Learn (W3Schools)',
        },
        description: {
          fa: 'مسیر آموزشی قدم‌به‌قدم با ادیتور زنده — ساختار سایدبار W3Schools React Tutorial.',
          en: 'Step-by-step tutorial with live editor — W3Schools React Tutorial sidebar structure.',
        },
        seoTitle: {
          fa: 'آموزش React از صفر | مسیر W3Schools + ادیتور زنده | MEGA JS',
          en: 'Learn React from Scratch | W3Schools Path + Live Editor | MEGA JS',
        },
        seoDescription: {
          fa: seoLength('آموزش React از صفر با مسیر W3Schools، مثال‌های HTML دارای React CDN، JSX، Hooks، component و ادیتور زنده برای تمرین.', 'fa'),
          en: seoLength('Learn React from scratch with a W3Schools-style path, live HTML examples using React CDN, JSX, Hooks, components, and practice editor.', 'en'),
        },
        source: SOURCE_W3,
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
          fa: 'مرجع author-focused به سبک MDN برای component model، JSX، props، state، forms، accessibility، testing و performance در React.',
          en: 'An author-focused MDN-style reference for React component models, JSX, props, state, forms, accessibility, testing, and performance.',
        },
        seoTitle: {
          fa: 'مرجع React به سبک MDN | Component، JSX و Hooks | MEGA JS',
          en: 'React Reference — MDN-style Components, JSX & Hooks | MEGA JS',
        },
        seoDescription: {
          fa: seoLength('مرجع React به سبک MDN برای component، JSX، props، state، Hooks، form، accessibility، testing و performance در پروژه واقعی.', 'fa'),
          en: seoLength('Use the MDN-style React reference for components, JSX, props, state, Hooks, forms, accessibility, testing, and performance in real projects.', 'en'),
        },
        source: SOURCE_MDN,
        liveEditor: false,
        nav: flatNav(TRACK_PAGES.reference),
      },
      {
        id: 'official',
        title: {
          fa: 'مستندات رسمی (react.dev)',
          en: 'Official (react.dev)',
        },
        description: {
          fa: 'خلاصه‌های رسمی react.dev برای API Reference شامل Hooks، Components، APIهای React، React DOM، Compiler، Rules و Legacy APIs.',
          en: 'Official react.dev summaries for the API Reference, covering Hooks, Components, React APIs, React DOM, Compiler, Rules, and Legacy APIs.',
        },
        seoTitle: {
          fa: 'مرجع رسمی React در react.dev | Hooks، API و React DOM | MEGA JS',
          en: 'Official React Reference on react.dev | Hooks, APIs & React DOM | MEGA JS',
        },
        seoDescription: {
          fa: seoLength('خلاصه رسمی react.dev برای React API Reference؛ Hooks، Components، React DOM، Compiler، Rules of React و Legacy APIs را مرور کنید.', 'fa'),
          en: seoLength('Read official react.dev summaries for the React API Reference, covering Hooks, Components, React DOM, Compiler, Rules of React, and Legacy APIs.', 'en'),
        },
        source: SOURCE_REACT,
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
    ? `این صفحه ${item.faFocus} را با مثال React، جدول syntax و نکته‌های کاربردی برای component authoring توضیح می‌دهد.`
    : `This page explains ${item.enFocus} with React examples, syntax tables, and practical component authoring notes.`;
  const seoTitle = seoTitleFor(item, locale);
  const seoDescription = seoDescriptionFor(item, locale);
  const keywords = isFa
    ? ['React', item.faTitle, 'آموزش React', 'مرجع React', ...item.keywords].join(', ')
    : ['React', item.enTitle, ...item.keywords].join(', ');
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
      ? `${cleanFaReferenceTitle(item.faTitle)} — سبک MDN برای React | MEGA JS`
      : `${cleanEnReferenceTitle(item.enTitle)} — MDN-style React | MEGA JS Docs`;
  }
  return locale === 'fa'
    ? `${item.faTitle} — مرجع رسمی react.dev | MEGA JS`
    : `${item.enTitle} — Official react.dev Reference | MEGA JS Docs`;
}

function cleanFaReferenceTitle(title) {
  return title.startsWith('مرجع ') || title.includes('مرجع') ? title : `مرجع ${title}`;
}

function cleanEnReferenceTitle(title) {
  return title.includes('Reference') ? title : `React ${title} Reference`;
}

function seoDescriptionFor(item, locale) {
  const marker = item.slug.replaceAll('-', ' ');
  if (item.track === 'learn') {
    return locale === 'fa'
      ? seoLength(
          `آموزش ${item.faTitle} (${marker}): مثال HTML با React CDN، JSX، تمرین live مسیر W3Schools، component، props، state و نکته Hooks.`,
          'fa',
        )
      : seoLength(
          `Learn ${item.enTitle} (${marker}) with live HTML using React CDN, JSX, W3Schools practice, components, props, state, and Hooks guidance.`,
          'en',
        );
  }
  if (item.track === 'reference') {
    return locale === 'fa'
      ? seoLength(
          `${cleanFaReferenceTitle(item.faTitle)} (${marker}): مرجع MDN-style برای React با تعریف author-focused، JSX، Hooks، مثال HTML و نکته پروژه واقعی.`,
          'fa',
        )
      : seoLength(
          `${cleanEnReferenceTitle(item.enTitle)} (${marker}): MDN-style React reference with author-focused definitions, JSX, Hooks, HTML examples, and project notes.`,
          'en',
        );
  }
  return locale === 'fa'
    ? seoLength(
        `${item.faTitle} (${marker}): خلاصه رسمی react.dev برای React API Reference با Hooks، Components، React DOM، Compiler و Rules of React.`,
        'fa',
      )
    : seoLength(
        `${item.enTitle} (${marker}): official react.dev React API Reference summary with Hooks, Components, React DOM, Compiler, and Rules of React.`,
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
      `${item.faTitle} درباره ${item.faFocus} است. این درس بازنویسی آموزشی و مستقل از مسیر W3Schools React Tutorial است و مثال‌ها به شکل HTML کامل با React CDN و Babel نوشته شده‌اند تا در live editor اجرا شوند.`,
      '',
      `در تمرین ${item.faTitle} فقط ظاهر UI را نبینید؛ render شدن component، تغییر state، props، warningهای Console و رفتار JSX در DOM را هم بررسی کنید.`,
      '',
      '## ایده اصلی',
      '',
      ...item.terms.map((termItem) => `- \`${termItem.syntax}\`: ${termItem.fa}.`),
      `- برای این موضوع، ${practiceSignal(item, 'fa')} نشانه اصلی کیفیت React code است.`,
      '',
      '## مثال‌های HTML قابل اجرا با React',
      '',
      'هر مثال یک سند کامل HTML است که react@18، react-dom@18 و @babel/standalone را از CDN load می‌کند. آن را در live editor اجرا کنید و سپس یک state، prop یا JSX branch را تغییر دهید.',
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
      ...item.terms.map((termItem) => `| \`${termItem.syntax}\` | ${termItem.fa} | در ${item.faTitle} آن را با render واقعی، state خالی، interaction و Console تست کنید. |`),
      '',
      '## اشتباه‌های رایج',
      '',
      ...reactMistakes(item, 'fa'),
      '',
      '## تمرین کوتاه',
      '',
      `یک فایل \`${item.slug}.html\` بسازید، مثال اول را اجرا کنید و سپس یک بخش مرتبط با \`${item.terms[0].syntax}\` را تغییر دهید. اگر UI تغییر نکرد، Console و محل call شدن \`root.render\` یا update شدن state را بررسی کنید.`,
      '',
      '## گام بعدی',
      '',
      next
        ? `بعد از این صفحه، **${next.faTitle}** را بخوانید تا مسیر React مرحله‌به‌مرحله کامل‌تر شود.`
        : 'در پایان مسیر learn، وارد track مرجع شوید و همین موضوعات را با نگاه دقیق‌تر MDN بررسی کنید.',
      '',
    ].join('\n');
  }

  return [
    `# ${item.enTitle}`,
    '',
    `${item.enTitle} focuses on ${item.enFocus}. This is an educational rewrite inspired by the W3Schools React learning path, and each example is a complete HTML document using React CDN and Babel for the live editor.`,
    '',
    `When you practice ${item.enTitle}, do not stop at the visible UI. Inspect component rendering, state changes, props, Console warnings, and how JSX reaches the DOM.`,
    '',
    '## Core idea',
    '',
    ...item.terms.map((termItem) => `- \`${termItem.syntax}\`: ${termItem.en}.`),
    `- For this topic, ${practiceSignal(item, 'en')} is the main sign that your React code is doing its job.`,
    '',
    '## Runnable HTML examples with React',
    '',
    'Each example is a complete HTML document that loads react@18, react-dom@18, and @babel/standalone from CDN. Run it in the live editor, then change one state value, prop, or JSX branch.',
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
    ...item.terms.map((termItem) => `| \`${termItem.syntax}\` | ${termItem.en} | In ${item.enTitle}, test it against real rendering, empty state, interactions, and the Console. |`),
    '',
    '## Common mistakes',
    '',
    ...reactMistakes(item, 'en'),
    '',
    '## Practice step',
    '',
    `Create a file named \`${item.slug}.html\`, run the first example, then change one part related to \`${item.terms[0].syntax}\`. If the UI does not change, inspect the Console and where \`root.render\` or the state update runs.`,
    '',
    '## Next step',
    '',
    next
      ? `Next, continue with **${next.enTitle}** so the React learning path builds on this concept.`
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
      `${item.faTitle} یک صفحه مرجع author-focused به سبک MDN است. تمرکز آن روی ${item.faFocus} است و به جای آموزش قدم‌به‌قدم، تعریف دقیق، جدول کاربرد، behavior در runtime و boundaryهای component را کنار هم می‌گذارد.`,
      '',
      '## جایگاه در MDN',
      '',
      `در MDN، React در بخش Client-side JavaScript frameworks کنار مفهوم component، props، state، event، form، accessibility و testing توضیح داده می‌شود. هنگام استفاده از ${item.faTitle}، رفتار React را از behavior خام DOM و ابزار build جدا ببینید.`,
      '',
      '## جدول مرجع',
      '',
      '| مورد | معنی | نکته سازگاری |',
      '| --- | --- | --- |',
      ...item.terms.map((termItem) => `| \`${termItem.syntax}\` | ${termItem.fa} | در مرورگر هدف، test، accessibility check و Console واقعی بررسی شود. |`),
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
      `- برای ${item.faTitle}، data flow بین props، state و context را explicit نگه دارید.`,
      '- اگر behavior به browser، focus، keyboard یا async loading وابسته است، آن را در UI و test پوشش دهید.',
      '- برای تصمیم‌های حساس، صفحه MDN مربوط، مستندات react.dev و اجرای واقعی در browser را کنار هم بررسی کنید.',
      '',
      '## ارتباط مفهومی با MDN',
      '',
      `این صفحه به موضوعات MDN درباره ${item.enTitle}, React framework guides, accessibility و testing نزدیک است و برای مرور سریع قبل از پیاده‌سازی طراحی شده است.`,
      '',
      '## گام بعدی',
      '',
      next ? `صفحه مرجع بعدی: **${next.faTitle}**.` : 'پس از پایان مرجع، برای نگاه API-oriented وارد track رسمی react.dev شوید.',
      '',
    ].join('\n');
  }

  return [
    `# ${item.enTitle}`,
    '',
    `${item.enTitle} is an author-focused MDN-style React reference page. It concentrates on ${item.enFocus} and favors precise definitions, usage tables, runtime behavior, and component boundaries over beginner sequencing.`,
    '',
    '## Place in the MDN reference',
    '',
    `On MDN, React appears in the Client-side JavaScript frameworks material near components, props, state, events, forms, accessibility, and testing. When using ${item.enTitle}, separate React behavior from raw DOM behavior and build tooling.`,
    '',
    '## Reference table',
    '',
    '| Item | Meaning | Compatibility note |',
    '| --- | --- | --- |',
    ...item.terms.map((termItem) => `| \`${termItem.syntax}\` | ${termItem.en} | Check it in target browsers, tests, accessibility checks, and the real Console. |`),
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
    `- For ${item.enTitle}, keep data flow between props, state, and context explicit.`,
    '- If behavior depends on browser support, focus, keyboard use, or async loading, cover that in UI and tests.',
    '- For critical decisions, compare the relevant MDN page, react.dev reference, and a real browser runtime.',
    '',
    '## Conceptual link to MDN',
    '',
    `This page aligns with MDN topics around ${item.enTitle}, React framework guides, accessibility, and testing before implementation.`,
    '',
    '## Next step',
    '',
    next ? `Continue with **${next.enTitle}**.` : 'After finishing the reference, open the official react.dev track for API-oriented summaries.',
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
      `${item.faTitle} خلاصه‌ای از ساختار رسمی react.dev/reference است. تمرکز آن روی ${item.faFocus} است و هدف آن کمک به author برای خواندن API Reference بدون تبدیل کردن صفحه به dump کامل مستندات است.`,
      '',
      '## چگونه متن رسمی را بخوانیم',
      '',
      'در react.dev، APIها بر اساس Hooks، Components، APIهای core، React DOM، Compiler، Rules of React و Legacy APIs گروه‌بندی می‌شوند. هر صفحه رسمی معمولاً signature، caveat، troubleshooting و example دارد؛ این خلاصه همان مسیر را برای تصمیم‌گیری سریع‌تر فشرده می‌کند.',
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
      '## نکته‌های رسمی و runtime',
      '',
      `- در ${item.faTitle}، caveatهای official را با نسخه React، mode توسعه مثل StrictMode و test واقعی مقایسه کنید.`,
      '- اگر API مربوط به server، Compiler یا legacy است، قبل از استفاده production وضعیت پشتیبانی framework خود را بررسی کنید.',
      '- برای code production، متن react.dev را با accessibility، performance و regression test تکمیل کنید.',
      '',
      '## گام بعدی',
      '',
      next ? `ادامه track رسمی: **${next.faTitle}**.` : 'بعد از پایان این track، یک صفحه reference را باز کنید و behavior آن را در browser تست کنید.',
      '',
    ].join('\n');
  }

  return [
    `# ${item.enTitle}`,
    '',
    `${item.enTitle} summarizes the official react.dev/reference structure. It focuses on ${item.enFocus} and helps authors read the API Reference without turning this page into a full documentation dump.`,
    '',
    '## How to read the official text',
    '',
    'On react.dev, APIs are grouped into Hooks, Components, core APIs, React DOM, Compiler, Rules of React, and Legacy APIs. Official pages usually include signatures, caveats, troubleshooting, and examples; this summary compresses that path for faster decisions.',
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
    '## Official and runtime notes',
    '',
    `- In ${item.enTitle}, compare official caveats with your React version, development mode such as StrictMode, and real tests.`,
    '- If an API is server-related, Compiler-related, or legacy, check your framework support before production use.',
    '- For production code, pair the react.dev text with accessibility checks, performance measurement, and regression tests.',
    '',
    '## Next step',
    '',
    next ? `Continue the official track with **${next.enTitle}**.` : 'After this track, open a reference page and test its behavior in a browser.',
    '',
  ].join('\n');
}

function learnExamples(item) {
  return [focusedSnippet(item), optionTableSnippet(item), completePracticeSnippet(item)];
}

function referenceExamples(item) {
  return [referenceSnippet(item), focusedSnippet(item)];
}

function officialExamples(item) {
  return [officialTraceSnippet(item), focusedSnippet(item)];
}

function reactPlayground(bodyJsxOrScript, title = 'React demo') {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(title)}</title>
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
${indent(bodyJsxOrScript.trim(), 6)}
    </script>
  </body>
</html>`;
}

function focusedSnippet(item) {
  const slug = item.slug;
  const title = escapeJs(item.enTitle);
  if (slug.includes('form') || ['textarea', 'select', 'multiple-inputs', 'checkbox', 'radio'].includes(slug)) {
    return reactPlayground(`
function App() {
  const [form, setForm] = useState({ name: 'Ada', level: 'beginner', notes: 'Practice React', agreed: true });
  const update = (event) => {
    const { name, type, checked, value } = event.target;
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  };
  return (
    <form className="card" onSubmit={(event) => event.preventDefault()}>
      <h1>${title}</h1>
      <label>Name <input name="name" value={form.name} onChange={update} /></label>
      <label>Level
        <select name="level" value={form.level} onChange={update}>
          <option value="beginner">beginner</option>
          <option value="advanced">advanced</option>
        </select>
      </label>
      <label><input name="agreed" type="checkbox" checked={form.agreed} onChange={update} /> Ready</label>
      <textarea name="notes" value={form.notes} onChange={update} rows="3" />
      <p className="badge">{form.name} is {form.level}; ready: {String(form.agreed)}</p>
    </form>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`, item.enTitle);
  }
  if (slug.includes('list') || slug.includes('map') || slug.includes('key')) {
    return reactPlayground(`
function App() {
  const [filter, setFilter] = useState('all');
  const lessons = [
    { id: 'jsx', title: 'JSX', done: true },
    { id: 'props', title: 'props', done: true },
    { id: 'hooks', title: 'Hooks', done: false }
  ];
  const visible = lessons.filter((lesson) => filter === 'all' || lesson.done);
  return (
    <section className="card">
      <h1>${title}</h1>
      <button onClick={() => setFilter(filter === 'all' ? 'done' : 'all')}>Toggle filter</button>
      <ul>{visible.map((lesson) => <li key={lesson.id}>{lesson.title} - {lesson.done ? 'done' : 'next'}</li>)}</ul>
    </section>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`, item.enTitle);
  }
  if (slug.includes('context')) {
    return reactPlayground(`
const ThemeContext = createContext('light');
function Toolbar() {
  const theme = useContext(ThemeContext);
  return <p className="badge">Current theme from context: {theme}</p>;
}
function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <section className="card">
        <h1>${title}</h1>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Switch theme</button>
        <Toolbar />
      </section>
    </ThemeContext.Provider>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`, item.enTitle);
  }
  if (slug.includes('effect')) {
    return reactPlayground(`
function App() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSeconds((value) => value + 1), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="card">
      <h1>${title}</h1>
      <p>Effect timer: {seconds}s</p>
      <p className="muted">Cleanup stops the interval when the component unmounts.</p>
    </section>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`, item.enTitle);
  }
  if (slug.includes('ref') || slug === 'forward-ref') {
    return reactPlayground(`
function App() {
  const inputRef = useRef(null);
  const [message, setMessage] = useState('Ref is ready');
  return (
    <section className="card">
      <h1>${title}</h1>
      <input ref={inputRef} defaultValue="Focus me with useRef" />
      <button onClick={() => { inputRef.current.focus(); setMessage('Focused through ref.current'); }}>Focus input</button>
      <p>{message}</p>
    </section>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`, item.enTitle);
  }
  if (slug.includes('reducer')) {
    return reactPlayground(`
function reducer(state, action) {
  if (action.type === 'add') return { count: state.count + 1 };
  if (action.type === 'reset') return { count: 0 };
  return state;
}
function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <section className="card">
      <h1>${title}</h1>
      <button onClick={() => dispatch({ type: 'add' })}>Add</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <p>Reducer count: {state.count}</p>
    </section>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`, item.enTitle);
  }
  if (slug.includes('memo') || slug.includes('callback') || slug.includes('performance') || slug.includes('compiler')) {
    return reactPlayground(`
const Result = memo(function Result({ total }) {
  return <p className="badge">Derived total: {total}</p>;
});
function App() {
  const [count, setCount] = useState(1);
  const total = useMemo(() => count * 42, [count]);
  const increase = useCallback(() => setCount((value) => value + 1), []);
  return (
    <section className="card">
      <h1>${title}</h1>
      <button onClick={increase}>Increase</button>
      <Result total={total} />
    </section>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`, item.enTitle);
  }
  if (slug.includes('transition') || slug.includes('deferred')) {
    return reactPlayground(`
function App() {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  const deferredQuery = useDeferredValue(query);
  const items = Array.from({ length: 8 }, (_, index) => deferredQuery + ' item ' + (index + 1));
  return (
    <section className="card">
      <h1>${title}</h1>
      <input value={query} onChange={(event) => startTransition(() => setQuery(event.target.value))} placeholder="Type a topic" />
      <p>{isPending ? 'Updating...' : 'Ready'}</p>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </section>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`, item.enTitle);
  }
  if (slug.includes('id') || slug.includes('accessibility')) {
    return reactPlayground(`
function App() {
  const id = useId();
  const [name, setName] = useState('React learner');
  return (
    <section className="card">
      <h1>${title}</h1>
      <label htmlFor={id}>Accessible name</label>
      <input id={id} value={name} onChange={(event) => setName(event.target.value)} />
      <p className="badge">Hello {name}</p>
    </section>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`, item.enTitle);
  }
  if (slug.includes('portal')) {
    return reactPlayground(`
function Modal({ children }) {
  return ReactDOM.createPortal(<div className="card"><strong>Portal:</strong> {children}</div>, document.getElementById('modal-root'));
}
function App() {
  const [open, setOpen] = useState(false);
  return (
    <section className="card">
      <h1>${title}</h1>
      <button onClick={() => setOpen(!open)}>Toggle portal</button>
      {open && <Modal>Rendered outside #root but controlled by React.</Modal>}
    </section>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`, item.enTitle);
  }
  if (slug.includes('suspense') || slug.includes('split')) {
    return reactPlayground(`
function SlowPanel() {
  return <p className="badge">Lazy-style content is ready.</p>;
}
function App() {
  const [show, setShow] = useState(false);
  return (
    <section className="card">
      <h1>${title}</h1>
      <button onClick={() => setShow(!show)}>Toggle Suspense area</button>
      <Suspense fallback={<p>Loading...</p>}>{show ? <SlowPanel /> : <p className="muted">Hidden</p>}</Suspense>
    </section>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`, item.enTitle);
  }
  if (slug.includes('router')) {
    return reactPlayground(`
function App() {
  const [route, setRoute] = useState('home');
  const pages = { home: 'Welcome home', docs: 'Read React docs', settings: 'Tune preferences' };
  return (
    <section className="card">
      <h1>${title}</h1>
      <div className="row">{Object.keys(pages).map((key) => <button key={key} onClick={() => setRoute(key)}>{key}</button>)}</div>
      <p className="badge">{pages[route]}</p>
    </section>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`, item.enTitle);
  }
  if (slug.includes('event')) {
    return reactPlayground(`
function App() {
  const [message, setMessage] = useState('Waiting for click');
  return (
    <section className="card">
      <h1>${title}</h1>
      <button onClick={(event) => setMessage('Handled ' + event.type + ' on ' + event.currentTarget.tagName)}>Click</button>
      <p>{message}</p>
    </section>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`, item.enTitle);
  }
  if (slug.includes('class') || slug.includes('legacy')) {
    return reactPlayground(`
class LegacyGreeting extends React.Component {
  render() {
    return <p className="badge">Hello {this.props.name} from a class component.</p>;
  }
}
function App() {
  return (
    <section className="card">
      <h1>${title}</h1>
      <LegacyGreeting name="React" />
    </section>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`, item.enTitle);
  }
  if (slug.includes('css') || slug.includes('sass') || slug.includes('styling')) {
    return reactPlayground(`
function App() {
  const [active, setActive] = useState(true);
  const style = { borderColor: active ? '#0284c7' : '#d1d5db', background: active ? '#f0f9ff' : '#fff' };
  return (
    <section className="card" style={style}>
      <h1>${title}</h1>
      <button onClick={() => setActive(!active)}>Toggle style</button>
      <p className="badge">className and style can both reflect state.</p>
    </section>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`, item.enTitle);
  }
  return reactPlayground(`
function App() {
  const [count, setCount] = useState(0);
  return (
    <section className="card">
      <h1>${title}</h1>
      <p>{'${escapeJs(item.enFocus)}'}</p>
      <button onClick={() => setCount((value) => value + 1)}>Clicked {count} time(s)</button>
    </section>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`, item.enTitle);
}

function optionTableSnippet(item) {
  const rows = item.terms.map((termItem) => `{ syntax: '${escapeJs(termItem.syntax)}', purpose: '${escapeJs(termItem.en)}' }`).join(',\n    ');
  return reactPlayground(`
const rows = [
    ${rows}
];
function App() {
  return (
    <section className="card">
      <h1>${escapeJs(item.enTitle)} quick reference</h1>
      <table>
        <thead><tr><th>Syntax</th><th>Purpose</th></tr></thead>
        <tbody>{rows.map((row) => <tr key={row.syntax}><td><code>{row.syntax}</code></td><td>{row.purpose}</td></tr>)}</tbody>
      </table>
    </section>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`, `${item.enTitle} table`);
}

function completePracticeSnippet(item) {
  return reactPlayground(`
function LessonCard({ title, terms, children }) {
  return (
    <article className="card">
      <h1>{title}</h1>
      <ul>{terms.map((term) => <li key={term}>{term}</li>)}</ul>
      {children}
    </article>
  );
}
function App() {
  const [done, setDone] = useState(false);
  const terms = [${item.terms.map((termItem) => `'${escapeJs(termItem.syntax)}'`).join(', ')}];
  return (
    <LessonCard title="${escapeJs(item.enTitle)} practice" terms={terms}>
      <label><input type="checkbox" checked={done} onChange={(event) => setDone(event.target.checked)} /> I changed the demo</label>
      <p className="badge">{done ? 'Practice complete' : 'Keep experimenting'}</p>
    </LessonCard>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`, `${item.enTitle} practice`);
}

function referenceSnippet(item) {
  const rows = item.terms.map((termItem) => `{ syntax: '${escapeJs(termItem.syntax)}', meaning: '${escapeJs(termItem.en)}' }`).join(',\n    ');
  return reactPlayground(`
const terms = [
    ${rows}
];
function App() {
  return (
    <article className="card">
      <h1>${escapeJs(item.enTitle)}</h1>
      <dl>{terms.map((term) => <Fragment key={term.syntax}><dt><code>{term.syntax}</code></dt><dd>{term.meaning}</dd></Fragment>)}</dl>
      <p className="muted">{terms.length} React reference terms loaded.</p>
    </article>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`, `${item.enTitle} reference`);
}

function officialTraceSnippet(item) {
  return reactPlayground(`
const steps = [
  'Open the react.dev reference page',
  'Read the signature and caveats',
  'Run a small component example',
  'Add tests for the production behavior'
];
function App() {
  return (
    <section className="card">
      <h1>${escapeJs(item.enTitle)} reading trace</h1>
      <ol>{steps.map((step) => <li key={step}>{step}</li>)}</ol>
    </section>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`, `${item.enTitle} official`);
}

function reactMistakes(item, locale) {
  if (locale === 'fa') {
    return [
      `- کپی کردن ${item.faTitle} بدون بررسی Console warning، key، dependency array یا update شدن state.`,
      '- mutate کردن object یا array در state به جای ساخت copy تازه با spread، map یا filter.',
      `- فراموش کردن تست \`${item.terms[0].syntax}\` با keyboard، state خالی، StrictMode و browser هدف.`,
    ];
  }
  return [
    `- Copying ${item.enTitle} without checking Console warnings, keys, dependency arrays, or state updates.`,
    '- Mutating objects or arrays in state instead of creating fresh copies with spread, map, or filter.',
    `- Forgetting to test \`${item.terms[0].syntax}\` with keyboard use, empty state, StrictMode, and target browsers.`,
  ];
}

function practiceSignal(item, locale) {
  if (locale === 'fa') {
    if (item.slug.includes('effect')) return 'cleanup دقیق، dependency array درست و synchronization قابل توضیح';
    if (item.slug.includes('form') || item.slug.includes('input') || ['textarea', 'select', 'checkbox', 'radio'].includes(item.slug)) return 'value کنترل‌شده، validation قابل دسترس و submit بدون reload';
    if (item.slug.includes('list') || item.slug.includes('key') || item.slug.includes('map')) return 'key پایدار، render قابل پیش‌بینی و data flow بدون mutation';
    if (item.slug.includes('context')) return 'Provider محدود، value پایدار و مصرف روشن با useContext';
    if (item.slug.includes('ref')) return 'دسترسی imperative محدود و بدون وابسته کردن render به ref.current';
    if (item.slug.includes('memo') || item.slug.includes('callback') || item.slug.includes('performance')) return 'اندازه‌گیری قبل از optimization و dependencyهای دقیق';
    return 'هماهنگی JSX، props، state و behavior قابل مشاهده در UI';
  }
  if (item.slug.includes('effect')) return 'clear cleanup, correct dependency arrays, and explainable synchronization';
  if (item.slug.includes('form') || item.slug.includes('input') || ['textarea', 'select', 'checkbox', 'radio'].includes(item.slug)) return 'controlled values, accessible validation, and submit without reload';
  if (item.slug.includes('list') || item.slug.includes('key') || item.slug.includes('map')) return 'stable keys, predictable rendering, and mutation-free data flow';
  if (item.slug.includes('context')) return 'bounded providers, stable values, and clear useContext consumption';
  if (item.slug.includes('ref')) return 'limited imperative access without making render depend on ref.current';
  if (item.slug.includes('memo') || item.slug.includes('callback') || item.slug.includes('performance')) return 'measurement before optimization and accurate dependencies';
  return 'alignment between JSX, props, state, and visible UI behavior';
}

function enExampleHeading(item, index) {
  const headings = ['Focused React pattern', 'Syntax options in context', 'Complete practice page'];
  return headings[index] ?? item.enTitle;
}

function faExampleHeading(item, index) {
  const headings = ['الگوی React متمرکز', 'گزینه‌های syntax در context', 'صفحه تمرینی کامل'];
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

  console.log('Generated React docs into three tracks.');
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
