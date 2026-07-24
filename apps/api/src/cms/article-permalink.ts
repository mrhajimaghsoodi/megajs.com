/** WordPress-style hierarchical article permalinks: /parent-category/category/post-slug */

export type PermalinkTerm = {
  id: string;
  slug: string;
  parentId?: string | null;
  taxonomy: string;
  isDefault?: boolean;
  sortOrder?: number;
};

export function indexTerms(terms: PermalinkTerm[]) {
  return new Map(terms.map((t) => [t.id, t]));
}

/** Ancestor chain of slugs from root → leaf for a category term. */
export function categoryPathSlugs(
  termId: string,
  byId: Map<string, PermalinkTerm>,
): string[] {
  const parts: string[] = [];
  let cur: string | null | undefined = termId;
  const seen = new Set<string>();
  while (cur && !seen.has(cur)) {
    seen.add(cur);
    const t = byId.get(cur);
    if (!t || t.taxonomy !== 'post_category') break;
    parts.unshift(t.slug);
    cur = t.parentId;
  }
  return parts;
}

export function termPermalinkPath(
  termId: string,
  byId: Map<string, PermalinkTerm>,
): string {
  const slugs = categoryPathSlugs(termId, byId);
  return slugs.length ? `/${slugs.join('/')}` : '';
}

/** Prefer deepest category; tie-break default, then sortOrder, then slug. */
export function pickPrimaryCategory(
  assigned: PermalinkTerm[],
  byId: Map<string, PermalinkTerm>,
): PermalinkTerm | null {
  const cats = assigned.filter((t) => t.taxonomy === 'post_category');
  if (!cats.length) return null;

  const scored = cats.map((c) => {
    const depth = categoryPathSlugs(c.id, byId).length;
    return {
      term: c,
      depth,
      isDefault: Boolean(c.isDefault),
      sortOrder: c.sortOrder ?? 0,
    };
  });

  scored.sort((a, b) => {
    if (b.depth !== a.depth) return b.depth - a.depth;
    if (a.isDefault !== b.isDefault) return a.isDefault ? -1 : 1;
    if (a.sortOrder !== b.sortOrder) return a.sortOrder - b.sortOrder;
    return a.term.slug.localeCompare(b.term.slug);
  });

  return scored[0]?.term ?? null;
}

/**
 * Build article path without locale.
 * Example: `/javascript/react/use-effect-guide`
 * Uncategorized fallback: `/articles/{slug}`
 */
export function buildArticlePermalink(
  articleSlug: string,
  assignedCategories: PermalinkTerm[],
  byId: Map<string, PermalinkTerm>,
): string {
  const primary = pickPrimaryCategory(assignedCategories, byId);
  if (!primary) return `/articles/${articleSlug}`;
  const cats = categoryPathSlugs(primary.id, byId);
  if (!cats.length) return `/articles/${articleSlug}`;
  return `/${cats.join('/')}/${articleSlug}`;
}

export function normalizePath(path: string) {
  return path
    .trim()
    .replace(/^\/+|\/+$/g, '')
    .replace(/\/+/g, '/');
}

/**
 * Match path segments to a category chain (root → leaf).
 * Returns the leaf term id or null.
 */
export function matchCategoryPath(
  segments: string[],
  terms: PermalinkTerm[],
): PermalinkTerm | null {
  if (!segments.length) return null;
  const cats = terms.filter((t) => t.taxonomy === 'post_category');
  let parentId: string | null = null;
  let current: PermalinkTerm | null = null;
  for (const slug of segments) {
    const next =
      cats.find((t) => t.slug === slug && (t.parentId ?? null) === parentId) ??
      null;
    if (!next) return null;
    current = next;
    parentId = next.id;
  }
  return current;
}
