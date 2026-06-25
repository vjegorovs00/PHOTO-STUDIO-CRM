import Link from "next/link";

import { BackHomeLink } from "./back-home-link";

type PublicPageTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
  showBookingCta?: boolean;
};

export function PublicPageTemplate({
  eyebrow,
  title,
  description,
  showBookingCta = true,
}: PublicPageTemplateProps) {
  return (
    <main className="flex flex-1">
      <section className="flex w-full items-end bg-brand-black px-5 py-16 sm:px-8 sm:py-24 lg:px-16 lg:py-32">
        <div className="mx-auto w-full max-w-5xl">
          <BackHomeLink />
          <p className="mt-8 text-sm font-black uppercase tracking-[0.18em] text-brand-red">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-black uppercase tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">{description}</p>
          {showBookingCta ? (
            <Link
              href="/booking"
              className="mt-10 inline-flex bg-brand-red px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-brand-black transition-colors hover:bg-brand-white"
            >
              Book a session
            </Link>
          ) : null}
        </div>
      </section>
    </main>
  );
}
