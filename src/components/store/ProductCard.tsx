import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { checkoutUrl, type Product } from "@/lib/store";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group min-w-0">
      <Link to="/products/$slug" params={{ slug: product.slug }} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-secondary shadow-soft">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          />
          <span className="absolute left-2 top-2 rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent-foreground sm:left-4 sm:top-4 sm:text-xs">
            Save 30%
          </span>
        </div>
        <div className="pt-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">Pack of 3</p>
          <h2 className="mt-2 min-h-12 font-display text-base leading-snug sm:min-h-14 sm:text-xl">{product.name}</h2>
          <div className="mt-2 flex flex-wrap items-baseline gap-x-2">
            <span className="text-xs text-muted-foreground line-through sm:text-sm">{product.originalPrice}</span>
            <span className="text-base font-semibold sm:text-lg">{product.bundlePrice}</span>
          </div>
        </div>
      </Link>
      <Button asChild size="lg" className="mt-4 h-11 w-full rounded-xl text-xs uppercase tracking-[0.13em] sm:text-sm">
        <a href={checkoutUrl(product)}>
          Buy bundle <ArrowUpRight aria-hidden="true" />
        </a>
      </Button>
    </article>
  );
}