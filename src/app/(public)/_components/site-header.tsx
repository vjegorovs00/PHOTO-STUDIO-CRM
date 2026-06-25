"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { publicNavigationLinks } from "./public-navigation";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-brand-charcoal px-5 sm:px-8 lg:px-16">
      <nav
        className="relative z-10 mx-auto flex min-h-16 max-w-5xl items-center justify-between"
        aria-label="Main navigation"
      >
        <div className="p-3 text-brand-red">
          <Link href="/home" className="text-sm font-black uppercase tracking-[0.18em]">
            JulieJul
          </Link>
        </div>

        <div className="hidden items-center gap-7 text-md font-semibold uppercase lg:flex">
          {publicNavigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-brand-red tracking-[0.16em]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="bg-brand-red-deep px-3 py-2 text-sm font-black uppercase hidden items-center lg:flex rounded-[20px]">
          <Link href="/booking" className="transition-colors hover:text-foreground">
            Book Now
          </Link>
        </div>

        <button
          type="button"
          className="text-brand-red -mr-2 grid size-10 place-items-center rounded-full transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:hidden"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      
      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-0 bg-background px-5 pt-20 sm:px-8 lg:hidden"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-1 pt-8">
            {publicNavigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b py-5 text-2xl font-medium tracking-tight transition-colors hover:text-muted-foreground"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="mt-6 bg-brand-red-deep px-5 py-4 text-center text-sm font-black uppercase tracking-[0.12em]"
              onClick={closeMenu}
            >
              Book now
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
