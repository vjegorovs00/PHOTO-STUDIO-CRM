import type { Metadata } from "next";

import { BackHomeLink } from "../_components/back-home-link";
import { FinalCtaSection } from "../_components/final-cta-section";
import { PortfolioGallery } from "./_components/portfolio-gallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A selection of photography by JJ Studio.",
};

export default function PortfolioPage() {
  return (
    <main className="bg-brand-black">
      <section className="px-3 pt-8 text-foreground sm:px-6 sm:pt-10 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <BackHomeLink />
          <p className="mt-8 text-xs font-black uppercase tracking-[0.28em] text-brand-red">
            Selected work
          </p>
          <h1 className="mt-4 max-w-5xl text-5xl font-black uppercase leading-[0.86] tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
            Portfolio
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
            A growing collection of portrait, maternity, couple, editorial, and
            outdoor stories. The real admin-managed gallery will replace these
            examples later.
          </p>
        </div>
      </section>

      <PortfolioGallery />
      <FinalCtaSection secondaryHref="/services" secondaryLabel="Services" />
    </main>
  );
}
