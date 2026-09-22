# Lumière luxury storefront redesign

## Goal
Transform the existing static Lumière shop into a more editorial, high-end experience while retaining the five products, external checkout flow, and simple local commands.

## Changes
- Refine the cream, charcoal, and muted-gold visual system with Playfair Display headings, Inter body copy, larger whitespace, softer imagery, and restrained motion.
- Redesign the sticky header, homepage introduction, two-column mobile product collection, trust presentation, brand story, and footer.
- Upgrade every product card with clearer pricing, graceful image fallbacks, subtle lift, and a polished View Bundle action.
- Rework the dedicated product page into a luxury two-column purchase view with full price savings, richer supplied descriptions, and three “Why you’ll love it” benefits.
- Keep all five products and checkout URLs in one static data file; preserve the external product query parameter and no-backend architecture.
- Update the README so Windows/local setup and static deployment instructions remain clear.
- Verify the live page at desktop and mobile sizes, including product navigation and image fallback behavior.

## Technical details
- Continue using the project’s built-in TanStack Router rather than adding a second router; it provides the requested dedicated product URLs with React.
- Use semantic Tailwind v4 tokens for the requested palette and load Google fonts from the document head.
- Keep the current working hosted product images because the requested product image values were placeholders.
