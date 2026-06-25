import Image from "next/image";

import { CtaLink } from "@/components/shared/cta-link";

export function HeroUnderline() {
  return (
    <div
      className="bg-brand-charcoal rounded-4xl my-3 flex w-95 flex-wrap justify-between 
        sm:grid sm:w-full sm:grid-cols-[14rem_minmax(0,1fr)] sm:items-center sm:gap-x-2
        md:grid-cols-[16rem_minmax(0,1fr)]
        lg:grid-cols-[18rem_minmax(0,1fr)]"
    >
      <div className="relative w-45 shrink-0 overflow-hidden rounded-3xl sm:row-span-2 sm:w-56 md:w-64 lg:w-72">
        <Image
          src="/home/hero/hero-cta.webp"
          alt="JulieJul book a session"
          width={1144}
          height={1280}
          priority
          className="w-full w-max-none p-3 rounded-4xl grayscale"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center px-4 py-5 sm:col-start-2 sm:row-start-1 sm:px-7 sm:pt-6 md:px-8 lg:px-10">
        <h2 className="mt-2 text-2xl font-black uppercase leading-none tracking-tighter text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
          Let&apos;s make it iconic.
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
          A tailored photo session with gentle direction and plenty of space to
          be yourself.
        </p>
      </div>
      <div className="flex w-full gap-6 px-4 pb-5 sm:col-start-2 sm:row-start-2 sm:w-auto sm:gap-3 sm:px-7 sm:pb-6 md:px-8 lg:px-20 md:justify-end">
        <CtaLink
          href="/booking"
          className="flex-1 sm:min-w-36 sm:flex-none md:min-w-40"
        >
          Book a session
        </CtaLink>
        <CtaLink
          href="/portfolio"
          variant="secondary"
          className="flex-1 sm:min-w-36 sm:flex-none md:min-w-40"
        >
          Portfolio
        </CtaLink>
      </div>
    </div>
  );
}
