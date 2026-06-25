import Image from "next/image";
import Link from "next/link";

import { portfolioCategories } from "../portfolio-data";

export function PortfolioGallery() {
  return (
    <section
      className="bg-brand-black px-3 py-6 text-foreground sm:px-6 md:px-10 lg:px-16"
      aria-labelledby="portfolio-gallery-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-brand-red">
              Gallery
            </p>
            <h2
              id="portfolio-gallery-heading"
              className="mt-3 text-4xl font-black uppercase leading-[0.9] tracking-tighter sm:text-5xl md:text-6xl"
            >
              Selected frames.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted-foreground md:text-right">
            Temporary examples for now. Later, these items can come from the
            admin portfolio manager.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {portfolioCategories.map((category, index) => (
            <article
              key={category.slug}
              className="group overflow-hidden rounded-3xl bg-brand-charcoal"
            >
              <Link href={`/portfolio/${category.slug}`} className="block h-full">
                <div className="relative aspect-3/4 overflow-hidden rounded-3xl sm:aspect-7/8">
                  <Image
                    src={category.coverImageSrc}
                    alt={category.coverImageAlt}
                    fill
                  sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-brand-red-deep/20 mix-blend-multiply" />
                  <div className="absolute left-3 top-3 rounded-full bg-brand-black/75 px-2.5 py-1 text-[0.6rem] font-black uppercase tracking-[0.2em] text-brand-red">
                    0{index + 1}
                  </div>
                </div>

                <div className="p-3 sm:p-5">
                  <p className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-brand-red">
                    {category.eyebrow}
                  </p>
                  <h3 className="mt-2 text-lg font-black uppercase leading-none tracking-tighter transition-colors group-hover:text-brand-red sm:text-2xl">
                    {category.title}
                  </h3>
                  <p className="mt-3 hidden text-sm leading-6 text-muted-foreground sm:block">
                    View series
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
