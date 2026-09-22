# Lumière logo and bundle-pricing clarity

## Goal
Fix the duplicated header branding and make it immediately clear on every product view that customers are buying three full-size items.

## Changes
- Replace the overlapping logo fallback with one centered 40px logo and a decorative cart icon, including the requested code comment.
- Keep all five exact prices and descriptions in the shared product data, calculate each per-unit price from the bundle price, and preserve tracked checkout links.
- Redesign product-card pricing with a prominent gold “Pack of 3” badge, explicit three-unit original and bundle prices, and the calculated per-unit line.
- Refine the product page’s stacked-mobile/two-column-desktop purchase area with bundle contents, a visible 30% saving badge, and a “Buy Pack of 3” action.
- Preserve the cream, charcoal, gold, Playfair Display, and Inter design system and the two-column mobile collection.
- Verify the homepage, every product navigation path, mobile above-the-fold bundle clarity, tracked checkout URL, and the latest automatic build result.

## Technical details
- Keep TanStack Router, the current static architecture, and the single checkout constant.
- Store numeric prices alongside display formatting so per-unit prices are derived rather than manually duplicated.
- Provide a styled image fallback carrying the product name when a hosted image cannot load.
