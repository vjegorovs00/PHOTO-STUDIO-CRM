import Image from "next/image";

import { CtaLink } from "@/components/shared/cta-link";

type FinalCtaSectionProps = {
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function FinalCtaSection({
  secondaryHref = "/portfolio",
  secondaryLabel = "Portfolio",
}: FinalCtaSectionProps) {
  return (
    <section
      className="bg-brand-black px-3 py-4 text-foreground sm:px-6 md:px-10 lg:px-16"
      aria-labelledby="final-cta-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-4xl bg-brand-charcoal lg:grid-cols-[0.82fr_1fr]">
          <div className="relative aspect-16/10 overflow-hidden bg-brand-black sm:aspect-5/2 md:aspect-3/1 lg:order-last lg:aspect-auto lg:min-h-96 xl:min-h-104">
            <Image
              src="/home/hero/hero-ctac.webp"
              alt="JulieJul final booking call to action"
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-brand-red-deep/25 mix-blend-multiply" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-brand-black/80 to-transparent lg:hidden" />
          </div>

          <div className="p-5 sm:p-6 md:p-8 lg:flex lg:min-h-96 lg:flex-col lg:justify-between lg:p-8 xl:min-h-104 xl:p-10">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-brand-red" />
                <p className="text-xs font-black uppercase tracking-[0.28em] text-brand-red">
                  Booking
                </p>
              </div>

              <h2
                id="final-cta-heading"
                className="mt-5 max-w-3xl text-4xl font-black uppercase leading-[0.88] tracking-tighter text-brand-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Your turn in the frame.
              </h2>
            </div>

            <div className="mt-7 max-w-xl lg:mt-8">
              <p className="text-sm leading-6 text-muted-foreground sm:text-sm md:text-base md:leading-7">
                Bring the idea, the mood, or just the feeling. I&apos;ll help
                shape the rest into a calm, directed session with photos that
                feel unmistakably yours.
              </p>

              <div className="mt-6 flex gap-3">
                <CtaLink href="/booking" className="flex-1 sm:flex-none sm:min-w-40">
                  Book a session
                </CtaLink>
                <CtaLink
                  href={secondaryHref}
                  variant="secondary"
                  className="flex-1 sm:flex-none sm:min-w-40"
                >
                  {secondaryLabel}
                </CtaLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
