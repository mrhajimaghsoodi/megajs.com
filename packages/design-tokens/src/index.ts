/**
 * MEGA JS Design Tokens — single source of truth for all clients.
 * Brand: yellow #ffd400 · ink #1a1a1a
 * Generated with UI/UX Pro Max guidance (Flat + Minimal + Bento).
 */

export const brand = {
  name: 'MEGA JS',
  yellow: '#ffd400',
  ink: '#1a1a1a',
  white: '#ffffff',
} as const;

export const light = {
  background: brand.white,
  foreground: brand.ink,
  muted: '#f4f4f5',
  mutedForeground: '#52525b',
  border: '#e4e4e7',
  accent: brand.yellow,
  accentForeground: brand.ink,
  success: '#16a34a',
  danger: '#dc2626',
  ring: brand.yellow,
  card: brand.white,
} as const;

export const dark = {
  background: brand.ink,
  foreground: brand.white,
  muted: '#27272a',
  mutedForeground: '#a1a1aa',
  border: '#3f3f46',
  accent: brand.yellow,
  accentForeground: brand.ink,
  success: '#22c55e',
  danger: '#ef4444',
  ring: brand.yellow,
  card: '#242424',
} as const;

export const fonts = {
  display: 'Space Grotesk',
  body: 'DM Sans',
  persian: 'Vazirmatn',
  mono: 'JetBrains Mono',
} as const;

export const radii = {
  sm: '6px',
  md: '12px',
  lg: '20px',
  pill: '999px',
} as const;

export const motion = {
  fast: '150ms',
  base: '220ms',
  slow: '300ms',
  easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
} as const;

export const breakpoints = {
  sm: 375,
  md: 768,
  lg: 1024,
  xl: 1440,
} as const;

export const locales = ['fa', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fa';

export const themes = ['light', 'dark'] as const;
export type Theme = (typeof themes)[number];
export const defaultTheme: Theme = 'light';
