import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/store";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group min-w-0 transition-transform duration-500 ease-out hover:-translate-y-1.5">
      <Link to="/products/$slug" params={{ slug: product.slug }} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-soft transition-shadow duration-500 group-hover:shadow-lift">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />
          <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-foreground backdrop-blur-sm sm:left-5 sm:top-5 sm:text-[10px]">
            30% saving
          </span>
        </div>
        <div className="px-1 pt-5 sm:pt-6">
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-[10px]">Pack of 3</p>
          <h2 className="mt-2 min-h-14 font-display text-base font-semibold leading-snug sm:min-h-16 sm:text-xl">{product.name}</h2>
          <div className="mt-3 flex flex-wrap items-baseline gap-x-2">
            <span className="text-[11px] text-muted-foreground line-through sm:text-sm">{product.originalPrice}</span>
            <span className="text-base font-semibold sm:text-lg">{product.bundlePrice}</span>
          </div>
        </div>
      </Link>
      <Button asChild size="lg" className="mt-5 h-11 w-full rounded-full text-[10px] uppercase tracking-[0.16em] sm:h-12 sm:text-xs">
        <Link to="/products/$slug" params={{ slug: product.slug }}>
          View bundle <ArrowRight aria-hidden="true" />
        </Link>
      </Button>
    </article>
  );
}