import Image from "next/image";
import { Marquee } from "./marquee";

const selectedFrames = [
  {
    title: "Pair",
    description: "Connection with a little cinematic tension.",
    imageSrc: "/home/selected/selected-pair.webp",
    imageAlt: "Pair photography session preview",
  },
  {
    title: "Nude",
    description: "Soft shape, clean shadow, honest mood.",
    imageSrc: "/home/selected/selected-nue.webp",
    imageAlt: "Fine art nude photography preview",
  },
  {
    title: "Maternity",
    description: "Quiet strength and intimate anticipation.",
    imageSrc: "/home/selected/selected-pregnant.webp",
    imageAlt: "Maternity photography session preview",
  },
  {
    title: "Nature",
    description: "Natural light, open air, real softness.",
    imageSrc: "/home/selected/selected-nature.webp",
    imageAlt: "Outdoor nature photography session preview",
  },
];

export function SelectedFramesSection() {
  return (
    <section
      className="bg-brand-black px-3 py-2 text-foreground sm:px-6 md:px-10 lg:px-16"
      aria-labelledby="selected-frames-heading"
    >
      <div className="mx-auto max-w-7xl pb-2">
        <div className="mb-8 max-w-2xl sm:mx-auto sm:mb-10 sm:max-w-none sm:text-center md:mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-red">
            Selected work
          </p>
          <h2
            id="selected-frames-heading"
            className="mt-3 text-4xl font-black uppercase leading-[0.9] tracking-tighter sm:whitespace-nowrap sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Frames with attitude.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground sm:mx-auto sm:text-base sm:leading-7 sm:max-w-none">
            A glimpse into portraits, stories, and moments shaped with contrast,
            emotion, and a little cinematic tension.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {selectedFrames.map((frame, index) => (
            <article
              key={frame.title}
              className="group overflow-hidden rounded-3xl bg-brand-charcoal sm:rounded-4xl"
            >
              <div className="relative aspect-3/4 overflow-hidden rounded-3xl sm:aspect-4/5 sm:rounded-4xl">
                <Image
                  src={frame.imageSrc}
                  alt={frame.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-brand-red-deep/20 mix-blend-multiply" />
                <div className="absolute left-3 top-3 rounded-full bg-brand-black/80 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-brand-red sm:left-4 sm:top-4 sm:px-3 sm:text-[0.65rem]">
                  0{index + 1}
                </div>
              </div>

              <div className="p-3 sm:p-5 md:p-6">
                <h3 className="text-lg font-black uppercase leading-none tracking-tighter sm:text-2xl">
                  {frame.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground sm:mt-3 sm:text-sm sm:leading-6">
                  {frame.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="md:hidden">
        <Marquee
          items={["Pair", "Nude", "Maternity", "Nature", "Portrait", "Family photo"]}
        />
      </div>
    </section>
  );
}
