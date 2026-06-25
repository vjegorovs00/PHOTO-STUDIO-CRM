import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FinalCtaSection } from "../../_components/final-cta-section";
import { getPortfolioCategory, portfolioCategories } from "../portfolio-data";

type PortfolioCategoryPageProps = {
  params: Promise<{
    categorySlug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioCategories.map((category) => ({
    categorySlug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: PortfolioCategoryPageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = getPortfolioCategory(categorySlug);

  if (!category) {
    return {
      title: "Portfolio category",
    };
  }

  return {
    title: `${category.title} Portfolio`,
    description: category.description,
  };
}

export default async function PortfolioCategoryPage({
  params,
}: PortfolioCategoryPageProps) {
  const { categorySlug } = await params;
  const category = getPortfolioCategory(categorySlug);

  if (!category) {
    notFound();
  }

  return (
    <main className="bg-brand-black">
      <section className="px-3 pb-6 pt-8 text-foreground sm:px-6 sm:pt-10 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/portfolio"
              className="inline-flex rounded-[20px] border border-brand-white px-3 py-3 text-xs font-black uppercase tracking-[0.22em] text-brand-white transition-colors hover:bg-brand-white hover:text-brand-black"
            >
              Back to portfolio
            </Link>
          </div>

          <div className="mt-8">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-brand-red">
              {category.eyebrow}
            </p>
            <h1 className="mt-4 max-w-5xl text-5xl font-black uppercase leading-[0.86] tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
              {category.title}
            </h1>
            <p className="mt-6 max-w-none text-sm leading-6 text-muted-foreground sm:whitespace-nowrap sm:text-base sm:leading-7">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      <section
        className="bg-brand-black px-3 pb-3 text-foreground sm:px-6 md:px-10 lg:px-16"
        aria-label={`${category.title} photos`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {category.photos.map((photo, index) => (
            <article
              key={`${category.slug}-${photo.title}`}
              className="group overflow-hidden rounded-3xl bg-brand-charcoal"
            >
              <div className="relative aspect-3/4 overflow-hidden rounded-3xl sm:aspect-4/5">
                <Image
                  src={photo.imageSrc}
                  alt={photo.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-brand-red-deep/15 mix-blend-multiply" />
                <div className="absolute left-3 top-3 rounded-full bg-brand-black/75 px-2.5 py-1 text-[0.6rem] font-black uppercase tracking-[0.2em] text-brand-red">
                  0{index + 1}
                </div>
              </div>

              <div className="p-3 sm:p-5">
                <h2 className="text-lg font-black uppercase leading-none tracking-tighter sm:text-2xl">
                  {photo.title}
                </h2>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FinalCtaSection secondaryHref="/portfolio" secondaryLabel="Portfolio" />
    </main>
  );
}
