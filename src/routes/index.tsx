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
      <section className="mx-auto max-w-[1440px] px-5 pb-20 pt-20 sm:px-10 sm:pb-28 sm:pt-28 lg:px-16 lg:pb-36 lg:pt-36">
        <div className="max-w-5xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary">The Lumière edit · No. 01</p>
          <h1 className="mt-7 max-w-4xl font-display text-6xl font-semibold leading-[0.98] sm:text-8xl lg:text-9xl">
            Rituals, <span className="italic text-primary">in threes.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base font-light leading-7 text-muted-foreground sm:text-xl sm:leading-8">Curated luxury skincare, bundled for you. Save 30%.</p>
        </div>
        <div className="mt-16 h-px bg-border sm:mt-24" />
        <div className="mt-5 flex items-center justify-between text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-[10px]">
          <span>Five considered rituals</span><span>Scroll to discover</span>
        </div>
      </section>

      <section aria-labelledby="collection-title" className="mx-auto max-w-[1440px] px-4 pb-24 sm:px-10 sm:pb-36 lg:px-16">
        <div className="mb-10 flex items-end justify-between sm:mb-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The collection</p>
            <h2 id="collection-title" className="mt-3 font-display text-4xl font-semibold sm:text-6xl">The collection</h2>
          </div>
          <span className="hidden text-sm text-muted-foreground sm:block">01 — 05</span>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-14 sm:gap-x-8 sm:gap-y-20 lg:grid-cols-3">
          {products.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 px-5 sm:grid-cols-3 sm:px-10 lg:px-16">
          {trustItems.map(({ icon: Icon, title, note }) => (
            <div key={title} className="flex items-center gap-5 border-b border-border py-10 last:border-b-0 sm:border-b-0 sm:border-r sm:px-10 sm:py-14 sm:first:pl-0 sm:last:border-r-0">
              <Icon aria-hidden="true" className="h-6 w-6 shrink-0 text-primary" strokeWidth={1.4} />
              <div>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-[1440px] gap-10 px-5 py-24 sm:px-10 sm:py-36 lg:grid-cols-2 lg:gap-24 lg:px-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our point of view</p>
        <div>
          <h2 className="font-display text-5xl font-semibold leading-tight sm:text-6xl">Less searching.<br /><span className="italic text-primary">More ritual.</span></h2>
          <p className="mt-8 max-w-xl font-light leading-8 text-muted-foreground">
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