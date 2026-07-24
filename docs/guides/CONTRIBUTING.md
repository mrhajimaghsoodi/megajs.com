# Contributing

## Branching

Feature branches: `cursor/<descriptive-name>-52c6` (cloud agent convention) or team-agreed prefixes.

## Package boundaries

- Put shared logic in `packages/domain` or `packages/sdk`
- Put visual tokens in `packages/design-tokens`
- Do not duplicate entitlement math in clients

## API changes

1. Update Prisma schema
2. `pnpm --filter @megajs/api prisma:push` (or migrate)
3. Update seed if catalog shape changes
4. Update `@megajs/sdk` methods
5. Document in `docs/architecture`

## UI changes

1. Check `MASTER.md` + page override
2. Use design tokens
3. Verify FA + EN, light + dark, mobile width 375

## Docs

If you change product behavior, update the matching doc in `/docs` in the same PR.
