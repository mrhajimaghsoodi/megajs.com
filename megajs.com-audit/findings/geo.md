# GEO / AI Search Optimization

Aligned with Google’s AI Optimization Guide: GEO is SEO applied to AI surfaces — not a separate ranking system.

## Live GEO score: ~5/100
- No extractable passages (empty HTML)
- Spam corpus if any AI system still has WP REST/cached copies
- No llms.txt
- No deliberate AI crawler allowlist

## Platform GEO score: ~62/100

| Criterion | Weight | Platform | Notes |
|-----------|--------|----------|-------|
| Citability | 25% | Med-High (docs) | Need answer blocks on courses/articles |
| Structure | 20% | High (docs) | H1→H2, lists, tables |
| Multi-modal | 15% | Medium | Video model exists; alts weak |
| Authority | 20% | Low-Med | sameAs empty; spam on live damages brand |
| AI technical access | 20% | High (SSR) | robots + llms.txt added |

## Myths avoided
- llms.txt is **not** a Google citation lever (file added for non-Google tools only)
- No AI-keyword rewriting recommended
- Focus remains: indexable SSR HTML, trustworthy content, entity presence, citable passages

## Applied this PR
- `apps/web/public/llms.txt`
- AI search bots allowed; training scrapers blocked in `robots.ts`
- Stronger home title for SERP/AI snippet clarity
- Course Offer schema (helps entity/commerce understanding)

## Next GEO bets (after cutover)
1. Front-load 134–167 word answers on top docs
2. Fill social `sameAs`
3. Visible author/date on articles
4. Encourage Preferred Sources + YouTube/Aparat canonicals back to lessons
