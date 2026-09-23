import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { perUnitPrice, type Product } from "@/lib/store";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group min-w-0 transition-transform duration-500 ease-out hover:-translate-y-1.5">
      <Link to="/products/$slug" params={{ slug: product.slug }} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-soft transition-shadow duration-500 group-hover:shadow-lift">
          <div className="absolute inset-0 flex items-center justify-center px-5 text-center font-display text-lg font-semibold text-muted-foreground">
            {product.name}
          </div>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
            className="relative h-full w-full bg-muted object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />
        </div>
        <div className="px-1 pt-5 sm:pt-6">
          <span className="inline-flex rounded-full bg-primary px-3 py-1.5 text-[9px] font-bold uppercase text-primary-foreground shadow-sm sm:px-4 sm:text-[10px]">Pack of 3</span>
          <h2 className="mt-3 min-h-14 font-display text-base font-semibold leading-snug sm:min-h-16 sm:text-xl">{product.name}</h2>
          <div className="mt-4 space-y-1.5">
            <p className="text-[10px] text-muted-foreground sm:text-xs">Original price for 3 units: <span className="line-through">{product.originalPrice}</span></p>
            <p className="text-xs font-semibold sm:text-sm">Bundle price for 3 units</p>
            <p className="font-display text-2xl font-bold leading-none text-foreground sm:text-3xl">{product.bundlePrice}</p>
            <p className="pt-1 text-[10px] font-semibold text-primary sm:text-xs">That’s only {perUnitPrice(product)} per unit!</p>
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