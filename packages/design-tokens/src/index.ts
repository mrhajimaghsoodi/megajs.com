/**
 * MEGA JS Design Tokens — UI/UX Pro Max developer-tools system.
 * Brand accent: yellow #ffd400 · surfaces: slate OLED / light slate
 */

export const brand = {
  name: 'MEGA JS',
  yellow: '#ffd400',
  accent: '#ffd400',
  ink: '#0f172a',
  white: '#ffffff',
  canvas: '#020617',
} as const;

export const syntax = {
  keyword: '#c4b5fd',
  string: '#86efac',
  function: '#93c5fd',
  number: '#fcd34d',
  comment: '#64748b',
  operator: '#67e8f9',
  property: '#fca5a5',
} as const;

export const light = {
  background: '#f8fafc',
  foreground: brand.ink,
  muted: '#f1f5f9',
  mutedForeground: '#64748b',
  border: '#e2e8f0',
  accent: brand.yellow,
  accentForeground: brand.ink,
  success: '#16a34a',
  danger: '#ef4444',
  ring: brand.yellow,
  card: brand.white,
} as const;

export const dark = {
  background: brand.canvas,
  foreground: '#f8fafc',
  muted: '#1a1e2f',
  mutedForeground: '#94a3b8',
  border: '#334155',
  accent: brand.yellow,
  accentForeground: brand.ink,
  success: '#22c55e',
  danger: '#ef4444',
  ring: brand.yellow,
  card: '#0e1223',
} as const;

export const fonts = {
  display: 'Vazirmatn',
  body: 'Vazirmatn',
  persian: 'Vazirmatn',
  sans: 'Vazirmatn',
  mono: 'JetBrains Mono',
} as const;

export const radii = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  pill: '999px',
} as const;

export const motion = {
  fast: '150ms',
  base: '220ms',
  slow: '380ms',
  easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
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
export const defaultTheme: Theme = 'dark';
