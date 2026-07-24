# MEGA JS Design System — Source of Truth

> Generated with **UI/UX Pro Max** skill, then locked to MEGA JS brand rules.
> All apps (`web`, `admin`, `mobile`, `desktop`) MUST consume tokens from `@megajs/design-tokens`.

## Product

**MEGA JS** — daily JavaScript learning OS (web + React Native + Electron)  
SoloLearn-like habit loop · courses · challenges · tokens · live webinars  
Acquisition: SEO first · Instagram / YouTube / Aparat second

## Brand

| Token | Value | Usage |
|-------|-------|--------|
| Yellow / Accent | `#ffd400` | CTA, logo mark bg, highlights, streak |
| Black / Ink | `#1a1a1a` | Primary text (light), surfaces (dark), logo ink |
| White | `#ffffff` | Light background |

**Logo:** `design/brand/logo.svg` + `logo-mark.svg` — use everywhere (nav, favicon, PWA, admin, mobile splash).

## UUPM Recommendations (adopted)

| Layer | Choice | Why |
|-------|--------|-----|
| Product archetype | Coding Bootcamp + Coding Challenge + Developer Tool | Matches curriculum + practice + tooling brand |
| Style | **Flat Design + Minimalism + Bento** | Cross-platform parity, excellent a11y, RN-friendly |
| Pattern (marketing) | Hero-centric + Feature showcase + Social proof | SEO landing + product clarity |
| Pattern (app) | Today-first learning shell | Daily retention |
| Motion | 6/10 standard (150–300ms) | Presence without noise |
| Density | 5/10 | Readable lessons on mobile |
| Stack guidance | Next.js App Router + explicit cache + `next/font` | SEO priority |

## Typography (UI/UX Pro Max — developer education override)

Kids/education font matches from the skill were **rejected** (Baloo/Comic). Adopted:

| Role | Font | Notes |
|------|------|-------|
| Display / Heading (EN) | **Space Grotesk** | Tech, distinctive, not Inter |
| Body (EN) | **IBM Plex Sans** | Developer Mono pairing from UUPM |
| Persian (FA) | **Vazirmatn** | RTL primary |
| Code | **JetBrains Mono** | Lessons, editor, judge |

## Visual signature

**Yellow Terminal Academy** — charcoal canvas (`#0c0c0c` / `#1a1a1a`), brand yellow `#ffd400`, full-bleed code-grid hero, blinking caret on the wordmark. No purple SaaS gradients, no cream editorial, no broadsheet.

## Color system

### Light (default surface; marketing prefers dark)
```css
--mj-yellow: #ffd400;
--mj-ink: #1a1a1a;
--mj-bg: #f3f3f1;
--mj-fg: #1a1a1a;
--mj-muted: #e8e8e4;
--mj-muted-fg: #4a4a4f;
--mj-border: #d4d4d0;
--mj-accent: #ffd400;
--mj-accent-fg: #1a1a1a;
--mj-success: #16803c;
--mj-danger: #dc2626;
--mj-ring: #ffd400;
```

### Dark (product default)
```css
--mj-bg: #121212;
--mj-fg: #f5f5f4;
--mj-muted: #1e1e1e;
--mj-muted-fg: #a3a3a3;
--mj-border: #2e2e2e;
--mj-accent: #ffd400;
--mj-accent-fg: #1a1a1a;
--mj-canvas: #0c0c0c;
```

Rules:
- Text on yellow always `#1a1a1a`
- Do not introduce purple/indigo AI gradients
- No emoji-as-icon — Lucide only
- Touch targets ≥ 44–48px

## Layout principles

1. **Brand first** in first viewport (logo/wordmark is hero signal)
2. Full-bleed hero on marketing pages
3. No cards in hero
4. One job per section
5. App shell nav: Today · Learn · Practice · Live · Profile
6. RTL-first for `fa`, LTR for `en`

## Effects

- Transitions 150–300ms ease
- Hover: color/opacity or subtle translateY(-2px) on interactive lists — not heavy shadows
- Respect `prefers-reduced-motion`
- Focus rings visible (`--mj-ring`)

## Anti-patterns (forbidden)

- Inter / Roboto / Arial as primary brand fonts
- Purple-on-white / purple-indigo gradients
- Cream + terracotta “AI brochure” look
- Broadsheet dense newspaper layout
- Emoji icons
- Floating badge clutter on hero
- Dark-only product (must ship light + dark)

## Pre-delivery checklist (UUPM)

- [ ] No emojis as icons (Lucide/Heroicons SVG)
- [ ] `cursor-pointer` on clickable elements
- [ ] Hover 150–300ms
- [ ] Contrast ≥ 4.5:1
- [ ] Focus states visible
- [ ] `prefers-reduced-motion`
- [ ] Breakpoints: 375 · 768 · 1024 · 1440

## Page overrides

When building a page, check `design/docs/design-system/mega-js/pages/<page>.md`.  
If present, page rules override this MASTER. Otherwise use MASTER.
