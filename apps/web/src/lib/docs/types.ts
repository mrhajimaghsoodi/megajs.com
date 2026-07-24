export type DocsLocaleTitle = { fa: string; en: string };

export type DocsNavItem = {
  slug: string;
  title: DocsLocaleTitle;
  children?: DocsNavItem[];
};

export type DocsTechMeta = {
  id: string;
  order: number;
  title: DocsLocaleTitle;
  description: DocsLocaleTitle;
  /** Category-level SEO titles */
  seoTitle?: DocsLocaleTitle;
  seoDescription?: DocsLocaleTitle;
  sources: Array<{ name: string; url: string }>;
  nav: DocsNavItem[];
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
  /** SERP / document <title> override */
  seoTitle?: string;
  /** Meta description override (~150–160 chars) */
  seoDescription?: string;
  /** Comma-separated focus keywords */
  keywords?: string;
  order?: number;
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
