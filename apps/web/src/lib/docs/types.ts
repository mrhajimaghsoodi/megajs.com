export type DocsLocaleTitle = { fa: string; en: string };

export type DocsNavItem = {
  slug: string;
  title: DocsLocaleTitle;
  children?: DocsNavItem[];
};

/** learn = W3Schools-style tutorial | reference = MDN | official = vendor docs */
export type DocsTrackId = 'learn' | 'reference' | 'official';

export type DocsTrackMeta = {
  id: DocsTrackId;
  title: DocsLocaleTitle;
  description: DocsLocaleTitle;
  seoTitle?: DocsLocaleTitle;
  seoDescription?: DocsLocaleTitle;
  /** Primary source for this track */
  source: { name: string; url: string };
  /** Enable live HTML playground (learn track) */
  liveEditor?: boolean;
  nav: DocsNavItem[];
};

export type DocsTechMeta = {
  id: string;
  order: number;
  title: DocsLocaleTitle;
  description: DocsLocaleTitle;
  seoTitle?: DocsLocaleTitle;
  seoDescription?: DocsLocaleTitle;
  sources: Array<{ name: string; url: string }>;
  /** Multi-track docs (HTML, CSS, …). When set, pages live under {track}/{slug}. */
  tracks?: DocsTrackMeta[];
  /** Legacy single-nav (non-tracked techs) */
  nav?: DocsNavItem[];
};

export type DocsCatalog = {
  groups: Array<{
    id: string;
    title: DocsLocaleTitle;
    techs: string[];
  }>;
};

export type DocsPageFrontmatter = {
  title: string;
  description?: string;
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string;
  order?: number;
  /** learn | reference | official */
  track?: DocsTrackId;
  /** Optional dedicated playground HTML (learn track) */
  playground?: string;
  sources?: Array<{ name: string; url: string }>;
};

export function localizeTitle(title: DocsLocaleTitle, locale: 'fa' | 'en') {
  return locale === 'en' ? title.en : title.fa;
}

export function flattenNav(nav: DocsNavItem[]): DocsNavItem[] {
  const out: DocsNavItem[] = [];
  for (const item of nav) {
    out.push(item);
    if (item.children?.length) out.push(...flattenNav(item.children));
  }
  return out;
}

export function getTrack(tech: DocsTechMeta, trackId: string): DocsTrackMeta | null {
  return tech.tracks?.find((t) => t.id === trackId) ?? null;
}

/** Resolve sidebar nav for a page path (track-aware). */
export function navForPage(tech: DocsTechMeta, segments: string[]): DocsNavItem[] {
  if (tech.tracks?.length) {
    const trackId = segments[0];
    const track = getTrack(tech, trackId);
    if (track) return track.nav;
    return [];
  }
  return tech.nav ?? [];
}

/** Full slug including track prefix for pager within a track */
export function flattenTrackNav(track: DocsTrackMeta): string[] {
  return flattenNav(track.nav).map((n) => `${track.id}/${n.slug}`);
}
