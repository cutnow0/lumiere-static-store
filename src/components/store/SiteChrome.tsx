import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import type { ReactNode } from "react";

const LOGO_URL = "https://i.ibb.co/mFBWMrB9/logooo.png";
// REPLACE WITH YOUR LOGO LINK

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/92 backdrop-blur-xl">
      <div className="mx-auto grid h-16 max-w-[1440px] grid-cols-[40px_1fr_40px] items-center px-5 sm:h-20 sm:px-10 lg:px-16">
        <span aria-hidden="true" />
        {/* LOGO FIXED - ONLY ONE INSTANCE */}
        <Link to="/" aria-label="Lumière home" className="flex h-10 items-center justify-center justify-self-center">
          <img
            src={LOGO_URL}
            alt="Lumière"
            className="h-10 w-auto max-w-[180px] object-contain"
          />
        </Link>
        <span aria-label="Shopping bag" role="img" className="flex h-10 w-10 items-center justify-center justify-self-end text-foreground">
          <ShoppingBag aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
        </span>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-footer text-footer-foreground">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-10 sm:py-24 lg:px-16">
        <div className="grid gap-14 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="font-display text-4xl font-semibold">Lumière</p>
            <p className="mt-4 max-w-sm text-sm font-light leading-7 text-footer-muted">
              Considered skincare rituals, thoughtfully bundled for everyday radiance.
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-4 text-xs uppercase tracking-[0.12em] sm:grid-cols-4">
            <a href="mailto:hello@lumiere.example" className="transition-colors hover:text-accent">Contact</a>
            <a href="/#about" className="transition-colors hover:text-accent">About</a>
            <a href="/#shipping" className="transition-colors hover:text-accent">Shipping</a>
            <a href="/#returns" className="transition-colors hover:text-accent">Returns</a>
          </nav>
        </div>
        <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-footer-border pt-6 text-xs text-footer-muted">
          <span>© 2026 Lumière</span>
          <span>External checkout · Secure payment</span>
        </div>
      </div>
    </footer>
  );
}

export function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}