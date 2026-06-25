import Image from "next/image";
import Link from "next/link";

import { publicNavigationLinks } from "./public-navigation";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-brand-red-deep bg-brand-black px-5 py-10 text-foreground sm:px-8 lg:px-16">
      <Image
        src="/home/hero/hero-mobilec.png"
        alt=""
        fill
        sizes="100vw"
        aria-hidden="true"
        className="object-contain object-center opacity-30 grayscale sm:hidden"
      />
      <Image
        src="/home/hero/hero-desktopc.png"
        alt=""
        fill
        sizes="(max-width: 1023px) 80vw, 60vw"
        aria-hidden="true"
        className="hidden object-contain object-center opacity-30 grayscale sm:block"
      />
      <div className="absolute inset-0 bg-brand-black/60" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <Link href="/home" className="text-sm font-black uppercase tracking-[0.18em]">
            JulieJul
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
            Portrait, maternity, couple, and outdoor photography with calm
            direction and a cinematic mood.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-6 text-sm font-black uppercase tracking-[0.14em] sm:flex sm:flex-wrap sm:justify-end sm:gap-y-4">
            {publicNavigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="-mx-2 -my-3 inline-flex px-2 py-3 transition-colors hover:text-brand-red sm:mx-0 sm:my-0 sm:px-0 sm:py-0"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/booking"
                className="-mx-2 -my-3 inline-flex px-2 py-3 transition-colors hover:text-brand-red sm:mx-0 sm:my-0 sm:px-0 sm:py-0"
              >
                Booking
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col gap-3 border-t border-brand-white/10 pt-6 text-xs uppercase tracking-[0.16em] text-muted-foreground md:col-span-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} JulieJul. All rights reserved.</p>
          <a href="mailto:hello@example.com" className="transition-colors hover:text-brand-white">
            hello@example.com
          </a>
        </div>
      </div>
    </footer>
  );
}
