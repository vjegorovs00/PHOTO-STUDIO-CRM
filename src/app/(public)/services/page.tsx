import type { Metadata } from "next";
import Link from "next/link";

import { BackHomeLink } from "../_components/back-home-link";
import { FinalCtaSection } from "../_components/final-cta-section";

export const metadata: Metadata = {
  title: "Services",
  description: "Photography services from JJ Studio.",
};

const services = [
  {
    title: "Portrait",
    eyebrow: "Presence",
    description:
      "For personal images, creative portraits, confidence, and a strong visual identity.",
    price: "From €___",
    includes: ["Mood planning", "Posing direction", "Edited gallery"],
    href: "/booking",
  },
  {
    title: "Couple",
    eyebrow: "Connection",
    description:
      "For touch, movement, intimacy, and cinematic frames that feel close without feeling staged.",
    price: "From €___",
    includes: ["Location help", "Gentle direction", "Online gallery"],
    href: "/booking",
  },
  {
    title: "Maternity",
    eyebrow: "Before hello",
    description:
      "For softness, body, strength, and the quiet anticipation before everything changes.",
    price: "From €___",
    includes: ["Outfit advice", "Calm pacing", "Light retouching"],
    href: "/booking",
  },
  {
    title: "Outdoor",
    eyebrow: "Open air",
    description:
      "For natural light, relaxed movement, landscape, weather, and a more spontaneous mood.",
    price: "From €___",
    includes: ["Place scouting", "Natural light", "Movement prompts"],
    href: "/booking",
  },
  {
    title: "Editorial",
    eyebrow: "Concept",
    description:
      "For stronger styling, sharper contrast, visual concept, and a more directed story.",
    price: "By request",
    includes: ["Concept direction", "Moodboard", "Custom quote"],
    href: "/contact",
  },
];

const includedItems = [
  "Pre-shoot mood planning",
  "Outfit and location guidance",
  "Gentle posing direction",
  "Edited private online gallery",
];

export default function ServicesPage() {
  return (
    <main className="bg-brand-black">
      <section className="px-3 pb-8 pt-8 text-foreground sm:px-6 sm:pt-10 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <BackHomeLink />
          <p className="mt-8 text-xs font-black uppercase tracking-[0.28em] text-brand-red">
            How I can help
          </p>
          <h1 className="mt-4 text-5xl font-black uppercase leading-[0.86] tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
            Services
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
            Choose the kind of session that fits your story. Every shoot is
            shaped around the people, place, and feeling you want to remember.
          </p>
        </div>
      </section>

      <section
        className="bg-brand-black px-3 py-6 text-foreground sm:px-6 md:px-10 lg:px-16"
        aria-labelledby="services-list-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-col gap-3 sm:mb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-brand-red">
                Choose your scene
              </p>
              <h2
                id="services-list-heading"
                className="mt-3 text-4xl font-black uppercase leading-[0.9] tracking-tighter sm:text-5xl md:text-6xl"
              >
                What can we create?
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground md:text-right">
              Prices are placeholders for now. Later these services can be
              managed from the admin panel.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="flex min-h-full flex-col rounded-4xl bg-brand-charcoal p-5 sm:p-6 lg:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-brand-red">
                    0{index + 1} / {service.eyebrow}
                  </p>
                  <p className="rounded-full bg-brand-black px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.16em] text-brand-white">
                    {service.price}
                  </p>
                </div>

                <h3 className="mt-6 text-3xl font-black uppercase leading-none tracking-tighter sm:text-4xl">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>

                <ul className="mt-6 grid gap-2 text-sm text-brand-white/80">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-red" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.href}
                  className="mt-8 inline-flex w-full justify-center rounded-[20px] bg-brand-red-deep px-3 py-3 text-xs font-black uppercase tracking-[0.08em] text-foreground transition-colors hover:bg-brand-white hover:text-brand-black sm:mt-auto"
                >
                  Start booking
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-brand-black px-3 py-6 text-foreground sm:px-6 md:px-10 lg:px-16"
        aria-labelledby="included-heading"
      >
        <div className="mx-auto grid max-w-7xl gap-3 rounded-4xl border border-brand-red-deep bg-brand-charcoal p-5 sm:p-6 md:grid-cols-[0.8fr_1fr] md:items-center lg:p-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-brand-red">
              Included
            </p>
            <h2
              id="included-heading"
              className="mt-3 text-3xl font-black uppercase leading-none tracking-tighter sm:text-4xl md:text-5xl"
            >
              Every session has support.
            </h2>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {includedItems.map((item) => (
              <li
                key={item}
                className="rounded-3xl bg-brand-black px-4 py-4 text-sm font-black uppercase tracking-[0.1em] text-brand-white"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCtaSection secondaryHref="/portfolio" secondaryLabel="Portfolio" />
    </main>
  );
}
