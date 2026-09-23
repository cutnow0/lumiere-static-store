# Orenne rebrand and product-page cleanup

## Goal
Rebrand the static skincare store to Orenne and make every product page clean, premium, and unmistakably clear about the three-item bundle.

## Changes
- Replace all customer-facing Lumière references and metadata with Orenne.
- Use the supplied Orenne logo once, centered at 40px, with a Playfair Display text fallback and decorative cart icon.
- Remove every product-image overlay and keep each detail image completely clean.
- Rebuild the detail purchase area with one gold “Pack of 3” badge, title, original total, prominent bundle total, calculated unit price, external purchase button, and bundle contents.
- Preserve the two-column mobile collection, current editorial homepage, five exact products, luxury color and type system, and tracked checkout links.
- Update the README branding and verify desktop/mobile layouts, navigation, checkout tracking, logo fallback, and build status.

## Technical details
- Keep TanStack Router within the existing Vite, React, and Tailwind setup.
- Keep one `CHECKOUT_LINK` constant near the top of the shared store data with the requested replacement comment.
- Continue deriving per-unit prices from bundle totals rather than duplicating them.
- Ensure “Pack of 3” appears only once on each product detail page and no text overlays its image.
