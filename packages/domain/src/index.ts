import { z } from 'zod';

export const LocaleSchema = z.enum(['fa', 'en']);
export const ContentStatusSchema = z.enum([
  'draft',
  'published',
  'coming_soon',
  'archived',
]);
export const AccessTierSchema = z.enum(['free', 'subscription', 'paid']);
export const AuthProviderSchema = z.enum(['phone', 'google', 'github']);
export const AssetTypeSchema = z.enum(['text', 'video', 'audio', 'file']);
export const LiveStatusSchema = z.enum([
  'scheduled',
  'live',
  'ended',
  'cancelled',
]);
export const LiveDestinationSchema = z.enum([
  'site',
  'youtube',
  'aparat',
  'instagram',
]);

export const TicketCategorySchema = z.enum([
  'billing',
  'technical',
  'content',
  'account',
  'live',
  'other',
]);
export const TicketPrioritySchema = z.enum(['low', 'normal', 'high', 'urgent']);
export const TicketStatusSchema = z.enum([
  'open',
  'pending',
  'answered',
  'resolved',
  'closed',
]);

export const TrackSlugSchema = z.enum([
  'frontend-fundamentals',
  'language-core',
  'react-ecosystem',
  'frameworks-landscape',
  'app-platforms',
  'backend-js',
]);

export type Locale = z.infer<typeof LocaleSchema>;
export type ContentStatus = z.infer<typeof ContentStatusSchema>;
export type AccessTier = z.infer<typeof AccessTierSchema>;
export type AuthProvider = z.infer<typeof AuthProviderSchema>;
export type AssetType = z.infer<typeof AssetTypeSchema>;
export type LiveStatus = z.infer<typeof LiveStatusSchema>;
export type LiveDestination = z.infer<typeof LiveDestinationSchema>;
export type TrackSlug = z.infer<typeof TrackSlugSchema>;
export type TicketCategory = z.infer<typeof TicketCategorySchema>;
export type TicketPriority = z.infer<typeof TicketPrioritySchema>;
export type TicketStatus = z.infer<typeof TicketStatusSchema>;

/** Entitlement rule shared by API and clients */
export function canAccessContent(input: {
  isFree: boolean;
  requiresSubscription: boolean;
  isPurchased: boolean;
  hasActiveSubscription: boolean;
}): boolean {
  if (input.isFree) return true;
  if (input.isPurchased) return true;
  if (input.requiresSubscription && input.hasActiveSubscription) return true;
  return false;
}

/** Score → token conversion (configurable later via admin) */
export const DEFAULT_TOKEN_RULES = {
  pointsPerToken: 100,
  dailyTokenCap: 50,
  tokenRedeemable: true,
} as const;

export function pointsToTokens(
  points: number,
  pointsPerToken = DEFAULT_TOKEN_RULES.pointsPerToken,
): number {
  return Math.floor(points / pointsPerToken);
}

export const CURRICULUM_YEAR_PLAN = [
  {
    year: 1,
    trackSlugs: [
      'frontend-fundamentals',
      'language-core',
      'react-ecosystem',
    ] as TrackSlug[],
    courses: [
      'HTML',
      'CSS',
      'Tailwind',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Popular JS Libraries',
    ],
  },
  {
    year: 2,
    trackSlugs: ['frameworks-landscape'] as TrackSlug[],
    courses: ['Vue.js', 'Angular'],
  },
  {
    year: 3,
    trackSlugs: ['app-platforms'] as TrackSlug[],
    courses: ['React Native', 'Electron'],
  },
  {
    year: 4,
    trackSlugs: ['backend-js'] as TrackSlug[],
    courses: ['Node.js', 'NestJS'],
  },
] as const;

export {
  TEHRAN_TZ,
  formatTehranDate,
  formatTehranDateTime,
  formatTehranYear,
} from './datetime';
