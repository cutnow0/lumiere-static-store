import { createFileRoute } from "@tanstack/react-router";
import { Feather, HeartHandshake, Truck } from "lucide-react";
import { ProductCard } from "@/components/store/ProductCard";
import { StoreLayout } from "@/components/store/SiteChrome";
import { products } from "@/lib/store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumière — Curated Skincare Bundles" },
      { name: "description", content: "Luxury skincare bundles curated for your ritual, with 30% savings." },
      { property: "og:title", content: "Lumière — Curated Skincare Bundles" },
      { property: "og:description", content: "Luxury skincare bundles curated for your ritual, with 30% savings." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const trustItems = [
  { icon: Feather, title: "Dermatologist Tested", note: "Carefully selected formulas" },
  { icon: HeartHandshake, title: "Cruelty-Free", note: "Beauty with consideration" },
  { icon: Truck, title: "Fast Shipping", note: "Dispatched with care" },
];

function Index() {
  return (
    <StoreLayout>
      <section className="mx-auto max-w-7xl px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:pt-24">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">The bundle edit · 01</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] sm:text-7xl lg:text-8xl">
            Curated Skincare Bundles. <span className="text-primary">Save 30%.</span>
          </h1>
          <p className="mt-6 text-base text-muted-foreground sm:text-xl">Luxury skincare, bundled for you.</p>
        </div>
        <div className="mt-12 h-px bg-border sm:mt-16" />
        <div className="mt-5 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
          <span>Five considered rituals</span>
          <span>Limited bundles</span>
        </div>
      </section>

      <section aria-labelledby="collection-title" className="mx-auto max-w-7xl px-4 pb-20 sm:px-8 sm:pb-28">
        <div className="mb-7 flex items-end justify-between sm:mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The collection</p>
            <h2 id="collection-title" className="mt-2 font-display text-3xl sm:text-5xl">Rituals, in threes.</h2>
          </div>
          <span className="hidden text-sm text-muted-foreground sm:block">01 — 05</span>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-12 sm:gap-x-6 sm:gap-y-16 lg:grid-cols-3">
          {products.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="mx-auto grid max-w-7xl grid-cols-1 px-5 sm:grid-cols-3 sm:px-8">
          {trustItems.map(({ icon: Icon, title, note }) => (
            <div key={title} className="flex items-center gap-4 border-b border-border py-7 last:border-b-0 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0">
              <Icon aria-hidden="true" className="h-6 w-6 shrink-0 text-primary" strokeWidth={1.4} />
              <div>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-8 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our point of view</p>
        <div>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">Less searching. More ritual.</h2>
          <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
            Lumière brings together sought-after skincare in considered sets of three—making it simpler to stay consistent with the products you love.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-6 text-sm">
            <div id="shipping"><p className="font-semibold">Shipping</p><p className="mt-2 text-muted-foreground">Fast, careful dispatch.</p></div>
            <div id="returns"><p className="font-semibold">Returns</p><p className="mt-2 text-muted-foreground">Simple return support.</p></div>
          </div>
        </div>
      </section>
    </StoreLayout>
  );
}