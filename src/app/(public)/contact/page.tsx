import type { Metadata } from "next";
import Link from "next/link";

import { BackHomeLink } from "../_components/back-home-link";
import { FinalCtaSection } from "../_components/final-cta-section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with JJ Studio.",
};

const contactMethods = [
  {
    label: "Phone",
    value: "+371 00 000 000",
    href: "tel:+37100000000",
    description: "For quick questions, timing, and session details.",
  },
  {
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
    description: "Best for longer ideas, references, and booking requests.",
  },
  {
    label: "Instagram",
    value: "@juliejul",
    href: "https://www.instagram.com/",
    description: "Follow recent work, mood, stories, and behind the scenes.",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-brand-black">
      <section className="px-3 pb-8 pt-8 text-foreground sm:px-6 sm:pt-10 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <BackHomeLink />
          <p className="mt-8 text-xs font-black uppercase tracking-[0.28em] text-brand-red">
            Start a conversation
          </p>
          <h1 className="mt-4 text-5xl font-black uppercase leading-[0.86] tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
            Contact
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
            Tell me a little about what you are planning, what kind of mood you
            want, and when you would like to shoot.
          </p>
        </div>
      </section>

      <section
        className="bg-brand-black px-3 py-6 text-foreground sm:px-6 md:px-10 lg:px-16"
        aria-label="Contact methods"
      >
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-3">
          {contactMethods.map((method, index) => (
            <article
              key={method.label}
              className="rounded-3xl bg-brand-charcoal p-5 sm:p-6 lg:p-8"
            >
              <p className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-brand-red">
                0{index + 1} / {method.label}
              </p>
              <Link
                href={method.href}
                className="mt-4 block break-words text-2xl font-black uppercase leading-none tracking-tighter text-brand-white transition-colors hover:text-brand-red sm:text-3xl"
                target={method.label === "Instagram" ? "_blank" : undefined}
                rel={method.label === "Instagram" ? "noreferrer" : undefined}
              >
                {method.value}
              </Link>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {method.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-black px-3 py-6 text-foreground sm:px-6 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-3 rounded-4xl border border-brand-red-deep bg-brand-charcoal p-5 sm:p-6 md:grid-cols-[0.8fr_1fr] md:items-center lg:p-8">
          <h2 className="text-3xl font-black uppercase leading-none tracking-tighter sm:text-4xl md:text-5xl">
            Not sure what to write?
          </h2>
          <p className="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
            Send the session type, preferred date or month, who will be in the
            photos, and any references you already have. A rough idea is enough.
          </p>
        </div>
      </section>

      <FinalCtaSection secondaryHref="/faq" secondaryLabel="FAQ" />
    </main>
  );
}
