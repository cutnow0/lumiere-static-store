import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StoreLayout } from "@/components/store/SiteChrome";
import { checkoutUrl, products } from "@/lib/store";

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

  return (
    <StoreLayout>
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-8 sm:pb-28 sm:pt-10">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Back to collection
        </Link>

        <div className="mt-7 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-secondary shadow-soft lg:sticky lg:top-28">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
            <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent-foreground">Save 30%</span>
          </div>

          <div className="self-center lg:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Lumière bundle · Pack of 3</p>
            <h1 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">{product.name}</h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">{product.description}</p>

            <div className="mt-9 border-y border-border py-6">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-sm text-muted-foreground">Bundle price</span>
                <div className="flex items-baseline gap-3">
                  <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  <span className="font-display text-3xl">{product.bundlePrice}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>Single item price</span><span>{product.singlePrice}</span>
              </div>
            </div>

            <div className="mt-7 flex items-start gap-3 text-sm">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground"><Check aria-hidden="true" className="h-3 w-3" /></span>
              <div><p className="font-semibold">What’s included</p><p className="mt-1 text-muted-foreground">{product.contents}</p></div>
            </div>

            <Button asChild size="lg" className="mt-9 h-14 w-full rounded-xl text-sm uppercase tracking-[0.14em]">
              <a href={checkoutUrl(product)}>Buy bundle · {product.bundlePrice}<ArrowUpRight aria-hidden="true" /></a>
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">You’ll continue to our secure external checkout.</p>
          </div>
        </div>
      </div>
    </StoreLayout>
  );
}