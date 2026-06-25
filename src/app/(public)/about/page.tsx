import type { Metadata } from "next";
import Image from "next/image";

import { BackHomeLink } from "../_components/back-home-link";
import { FinalCtaSection } from "../_components/final-cta-section";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about JJ Studio and its approach to photography.",
};

export default function AboutPage() {
  return (
    <main className="bg-brand-black">
      <section className="px-3 pb-8 pt-8 text-foreground sm:px-6 sm:pt-10 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <BackHomeLink />
          <p className="mt-8 text-xs font-black uppercase tracking-[0.28em] text-brand-red">
            The photographer
          </p>
          <h1 className="mt-4 text-5xl font-black uppercase leading-[0.86] tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
            About
          </h1>
        </div>
      </section>

      <section className="bg-brand-black px-3 py-6 text-foreground sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-3 md:grid-cols-2 md:items-stretch xl:max-w-5xl">
          <div className="relative aspect-5/3 overflow-hidden rounded-4xl bg-brand-charcoal sm:aspect-4/3 md:aspect-auto md:min-h-96 lg:min-h-112 xl:min-h-104">
            <Image
              src="/home/hero/heroc.png"
              alt="JulieJul photographer portrait"
              fill
              sizes="(min-width: 1280px) 32vw, (min-width: 768px) 45vw, 100vw"
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-brand-red-deep/20 mix-blend-multiply" />
          </div>

          <div className="flex flex-col justify-center rounded-4xl bg-brand-charcoal p-5 sm:p-8 lg:p-10">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-brand-red">
              Passion
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-tighter sm:text-5xl lg:text-6xl">
              She sees the feeling first.
            </h2>
            <p className="mt-6 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              JulieJul approaches photography as more than a beautiful picture.
              For her, every session is a small story built from light, movement,
              trust, and the mood a person brings into the room. She is deeply
              passionate about creating images that feel honest, cinematic, and
              alive — not forced, not flat, not forgettable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-black px-3 py-6 text-foreground sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-3 md:grid-cols-2 md:items-stretch xl:max-w-5xl">
          <div className="flex flex-col justify-center rounded-4xl bg-brand-red-deep p-5 sm:p-8 lg:p-10">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-brand-white/70">
              Approach
            </p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-tighter text-brand-white sm:text-5xl lg:text-6xl">
              Calm direction. Strong result.
            </h2>
            <p className="mt-6 text-sm leading-6 text-brand-white/80 sm:text-base sm:leading-7">
              What makes her work special is the balance between control and
              softness. She gives enough direction so you never feel lost, but
              leaves enough space for real expressions, awkward laughs, quiet
              pauses, and natural movement. The result is photography with
              attitude — but still unmistakably human.
            </p>
          </div>

          <div className="relative aspect-5/3 overflow-hidden rounded-4xl bg-brand-charcoal sm:aspect-4/3 md:order-first md:aspect-auto md:min-h-96 lg:min-h-112 xl:min-h-104">
            <Image
              src="/home/hero/hero-cta.webp"
              alt="JulieJul photography mood"
              fill
              sizes="(min-width: 1280px) 32vw, (min-width: 768px) 45vw, 100vw"
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-brand-black/20" />
          </div>
        </div>
      </section>

      <FinalCtaSection secondaryHref="/portfolio" secondaryLabel="Portfolio" />
    </main>
  );
}
