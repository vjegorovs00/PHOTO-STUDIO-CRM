import type { Metadata } from "next";

import { HeroSection } from "../_components/home/hero-section";

export const metadata: Metadata = {
  title: "Home",
  description: "Professional photography for the moments that matter.",
};

const services = [
  "Portrait sessions",
  "Family photography",
  "Events and celebrations",
];

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <section
        id="services"
        className="px-6 py-16 sm:px-10 lg:px-16"
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            What I photograph
          </p>
          <h2 id="services-heading" className="mt-3 text-3xl font-semibold tracking-tight">
            A session shaped around you.
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {services.map((service) => (
              <li key={service} className="rounded-xl border bg-card p-5 text-lg font-medium">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="bg-muted px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold tracking-tight">Let&apos;s make a plan.</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Tell me what you&apos;re celebrating, and we&apos;ll find the right time,
            place, and style for your session.
          </p>
          <a
            href="mailto:hello@example.com"
            className="mt-6 inline-flex font-semibold underline underline-offset-4 hover:text-muted-foreground"
          >
            hello@example.com
          </a>
        </div>
      </section>
    </main>
  );
}
