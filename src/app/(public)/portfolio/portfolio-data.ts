export type PortfolioCategory = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  coverImageSrc: string;
  coverImageAlt: string;
  photos: {
    title: string;
    imageSrc: string;
    imageAlt: string;
  }[];
};

export const portfolioCategories = [
  {
    slug: "couples",
    title: "Couples",
    eyebrow: "Connection",
    description:
      "Close, cinematic frames for two people: soft distance, touch, movement, and the quiet in-between.",
    coverImageSrc: "/home/selected/selected-pair.webp",
    coverImageAlt: "Couple photography portfolio category",
    photos: [
      {
        title: "Soft distance",
        imageSrc: "/home/selected/selected-pair.webp",
        imageAlt: "Couple photography example",
      },
      {
        title: "Red quiet",
        imageSrc: "/home/hero/hero-cta.webp",
        imageAlt: "Couple portrait mood example",
      },
      {
        title: "Studio pulse",
        imageSrc: "/home/hero/hero-ctac.webp",
        imageAlt: "Couple editorial mood example",
      },
    ],
  },
  {
    slug: "fine-art",
    title: "Fine art",
    eyebrow: "Shape",
    description:
      "Minimal, intimate images built around body language, shadow, softness, and honest mood.",
    coverImageSrc: "/home/selected/selected-nue.webp",
    coverImageAlt: "Fine art photography portfolio category",
    photos: [
      {
        title: "Bare mood",
        imageSrc: "/home/selected/selected-nue.webp",
        imageAlt: "Fine art photography example",
      },
      {
        title: "Sharp light",
        imageSrc: "/home/hero/heroc.png",
        imageAlt: "Fine art portrait example",
      },
      {
        title: "After red",
        imageSrc: "/home/hero/hero-ctac.webp",
        imageAlt: "Fine art editorial example",
      },
    ],
  },
  {
    slug: "maternity",
    title: "Maternity",
    eyebrow: "Before hello",
    description:
      "Quiet strength, anticipation, and intimate frames for the body and story before everything changes.",
    coverImageSrc: "/home/selected/selected-pregnant.webp",
    coverImageAlt: "Maternity photography portfolio category",
    photos: [
      {
        title: "Before hello",
        imageSrc: "/home/selected/selected-pregnant.webp",
        imageAlt: "Maternity photography example",
      },
      {
        title: "Calm shape",
        imageSrc: "/home/selected/selected-nature.webp",
        imageAlt: "Outdoor maternity photography example",
      },
      {
        title: "Soft red",
        imageSrc: "/home/hero/hero-cta.webp",
        imageAlt: "Studio maternity mood example",
      },
    ],
  },
  {
    slug: "outdoor",
    title: "Outdoor",
    eyebrow: "Open air",
    description:
      "Natural light, relaxed movement, and softer frames shaped by landscape, weather, and air.",
    coverImageSrc: "/home/selected/selected-nature.webp",
    coverImageAlt: "Outdoor photography portfolio category",
    photos: [
      {
        title: "Open air",
        imageSrc: "/home/selected/selected-nature.webp",
        imageAlt: "Outdoor photography example",
      },
      {
        title: "Soft distance",
        imageSrc: "/home/selected/selected-pair.webp",
        imageAlt: "Outdoor couple photography example",
      },
      {
        title: "Before hello",
        imageSrc: "/home/selected/selected-pregnant.webp",
        imageAlt: "Outdoor maternity photography example",
      },
    ],
  },
  {
    slug: "portraits",
    title: "Portraits",
    eyebrow: "Presence",
    description:
      "Strong personal images with clear direction, contrast, and space for personality to come through.",
    coverImageSrc: "/home/hero/hero-cta.webp",
    coverImageAlt: "Portrait photography portfolio category",
    photos: [
      {
        title: "Red quiet",
        imageSrc: "/home/hero/hero-cta.webp",
        imageAlt: "Portrait photography example",
      },
      {
        title: "Studio pulse",
        imageSrc: "/home/hero/hero-ctac.webp",
        imageAlt: "Portrait editorial photography example",
      },
      {
        title: "Sharp light",
        imageSrc: "/home/hero/heroc.png",
        imageAlt: "Black and white portrait example",
      },
    ],
  },
  {
    slug: "editorial",
    title: "Editorial",
    eyebrow: "Scene",
    description:
      "Mood-led frames with stronger styling, sharper contrast, and a more cinematic visual direction.",
    coverImageSrc: "/home/hero/hero-ctac.webp",
    coverImageAlt: "Editorial photography portfolio category",
    photos: [
      {
        title: "Studio pulse",
        imageSrc: "/home/hero/hero-ctac.webp",
        imageAlt: "Editorial photography example",
      },
      {
        title: "Bare mood",
        imageSrc: "/home/selected/selected-nue.webp",
        imageAlt: "Editorial fine art example",
      },
      {
        title: "Red quiet",
        imageSrc: "/home/hero/hero-cta.webp",
        imageAlt: "Editorial portrait example",
      },
    ],
  },
] satisfies PortfolioCategory[];

export function getPortfolioCategory(slug: string) {
  return portfolioCategories.find((category) => category.slug === slug);
}
