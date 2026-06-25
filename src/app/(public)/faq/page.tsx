import type { Metadata } from "next";

import { BackHomeLink } from "../_components/back-home-link";
import { FinalCtaSection } from "../_components/final-cta-section";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions before booking a photography session.",
};

const faqItems = [
  {
    question: "Do I need to know how to pose?",
    answer:
      "No. You do not need posing experience. I guide movement, hands, posture, face, and mood during the session so you are not left guessing what to do.",
  },
  {
    question: "What should I wear?",
    answer:
      "We plan outfits before the shoot based on your idea, location, and the feeling you want in the photos. Simple textures, strong silhouettes, and comfortable pieces usually work best.",
  },
  {
    question: "Can we shoot outside?",
    answer:
      "Yes. Outdoor sessions work beautifully with natural light, weather, and movement. We can choose a calm nature location, city mood, or another place that fits your story.",
  },
  {
    question: "Can I bring my partner, child, or pet?",
    answer:
      "Usually yes. It depends on the session type and location, but partners, children, close friends, and pets can be included when it supports the idea.",
  },
  {
    question: "How long does a session take?",
    answer:
      "Most sessions take between one and two hours. The exact time depends on the package, location changes, styling, and how many people are involved.",
  },
  {
    question: "When will I receive the photos?",
    answer:
      "You receive an edited online gallery after the session. The exact delivery time depends on the size of the shoot, but timing is always discussed before booking.",
  },
  {
    question: "Do you retouch photos?",
    answer:
      "Yes, selected images are edited with color, contrast, crop, and light retouching. The goal is to keep the image polished while still feeling real.",
  },
  {
    question: "How do I book a session?",
    answer:
      "Send a booking request with the session type, preferred timing, and any mood or references you already have. If you are not sure yet, that is also fine — we can shape the idea together.",
  },
];

export default function FaqPage() {
  return (
    <main className="bg-brand-black">
      <section className="px-3 pb-8 pt-8 text-foreground sm:px-6 sm:pt-10 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.55fr_1fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <BackHomeLink />
            <p className="mt-8 text-xs font-black uppercase tracking-[0.28em] text-brand-red">
              Before you book
            </p>
            <h1 className="mt-4 text-5xl font-black uppercase leading-[0.86] tracking-tighter sm:text-7xl md:text-8xl">
              FAQ
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              Common questions about planning, posing, outfits, delivery, and
              what actually happens before and during a session.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                className="group rounded-3xl bg-brand-charcoal p-4 open:bg-brand-red-deep sm:p-5"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <span>
                    <span className="block text-[0.65rem] font-black uppercase tracking-[0.22em] text-brand-red group-open:text-brand-white/70">
                      0{index + 1}
                    </span>
                    <span className="mt-2 block text-lg font-black uppercase leading-none tracking-tighter text-brand-white sm:text-xl">
                      {item.question}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="grid size-8 shrink-0 place-items-center rounded-full border border-brand-white/20 text-xl leading-none text-brand-white transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-6 text-brand-white/75">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection secondaryHref="/portfolio" secondaryLabel="Portfolio" />
    </main>
  );
}
