import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, Feather, Heart, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StoreLayout } from "@/components/store/SiteChrome";
import { checkoutUrl, perUnitPrice, products } from "@/lib/store";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((item) => item.slug === params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.name} — Lumière` : "Product unavailable — Lumière";
    const description = loaderData?.description ?? "This Lumière bundle is unavailable.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(loaderData ? [
          { property: "og:image", content: loaderData.image },
          { name: "twitter:image", content: loaderData.image },
        ] : []),
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const product = Route.useLoaderData();
  const benefits = [
    { icon: Feather, title: "Dermatologist tested", note: "Considered, skin-first formulas" },
    { icon: Heart, title: "Cruelty-free", note: "Beauty chosen with care" },
    { icon: Truck, title: "Fast shipping", note: "Dispatched with attention" },
  ];

  return (
    <StoreLayout>
      <div className="mx-auto max-w-[1440px] px-5 pb-24 pt-8 sm:px-10 sm:pb-36 sm:pt-12 lg:px-16">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Back to collection
        </Link>

        <div className="mt-5 grid gap-7 sm:mt-9 sm:gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-24">
          <div className="relative h-[210px] overflow-hidden rounded-2xl bg-muted shadow-soft sm:h-auto sm:aspect-[4/5] lg:sticky lg:top-28">
            <div className="absolute inset-0 flex items-center justify-center px-8 text-center font-display text-2xl font-semibold text-muted-foreground">{product.name}</div>
            <img src={product.image} alt={product.name} onError={(event) => { event.currentTarget.style.display = "none"; }} className="h-full w-full object-cover" />
            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-xl bg-background/95 p-3 shadow-soft backdrop-blur-sm sm:hidden">
              <span className="rounded-full bg-primary px-3 py-2 text-[10px] font-bold uppercase text-primary-foreground">Pack of 3</span>
              <div className="text-right"><p className="text-[9px] font-semibold uppercase text-muted-foreground">Bundle price</p><p className="font-display text-2xl font-bold leading-none">{product.bundlePrice}</p></div>
            </div>
          </div>

          <div className="self-center lg:py-10">
            <span className="inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-bold uppercase text-primary-foreground shadow-sm">Pack of 3</span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] sm:mt-7 sm:text-6xl">{product.name}</h1>
            <p className="mt-5 max-w-xl text-sm font-light leading-7 text-muted-foreground sm:mt-7 sm:text-lg sm:leading-8">{product.description}</p>
            <p className="mt-4 max-w-xl text-sm font-light leading-7 text-muted-foreground">{product.ritual}</p>

            <section aria-labelledby="bundle-title" className="mt-8 border-y border-border py-6 sm:mt-10 sm:py-7">
              <h2 id="bundle-title" className="font-display text-2xl font-bold">What’s in the bundle?</h2>
              <p className="mt-2 text-sm text-muted-foreground">3 × {product.name} (Full Size)</p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
                  <span>Original price for 3 units</span><span className="line-through">{product.originalPrice}</span>
                </div>
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <span className="text-sm font-semibold">Bundle price for 3 units</span>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-secondary px-3 py-1.5 text-[10px] font-bold uppercase text-primary">Save 30%</span>
                    <span className="font-display text-4xl font-bold">{product.bundlePrice}</span>
                  </div>
                </div>
                <p className="text-right text-sm font-semibold text-primary">That’s only {perUnitPrice(product)} per unit!</p>
              </div>
            </section>

            <div className="mt-8 flex items-start gap-3 text-sm">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground"><Check aria-hidden="true" className="h-3 w-3" /></span>
              <div><p className="font-semibold">What’s included</p><p className="mt-1 text-muted-foreground">{product.contents}</p></div>
            </div>

            <Button asChild size="lg" className="mt-9 h-14 w-full rounded-full text-xs uppercase tracking-[0.16em]">
              <a href={checkoutUrl(product)}>Buy Pack of 3 - {product.bundlePrice}<ArrowUpRight aria-hidden="true" /></a>
            </Button>
            <p className="mt-4 text-center text-[11px] text-muted-foreground">Secure payment through our external checkout.</p>

            <div className="mt-14">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Why you’ll love it</p>
              <div className="mt-5 divide-y divide-border border-y border-border">
                {benefits.map(({ icon: Icon, title, note }) => (
                  <div key={title} className="flex items-center gap-4 py-5">
                    <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
                    <div><p className="text-sm font-semibold">{title}</p><p className="mt-1 text-xs text-muted-foreground">{note}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StoreLayout>
  );
}