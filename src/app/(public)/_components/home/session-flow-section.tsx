import { Marquee } from "./marquee";

const sessionSteps = [
  {
    number: "01",
    title: "Tell me the mood",
    description:
      "We shape the idea together: references, location, styling, and the feeling you want from the session.",
  },
  {
    number: "02",
    title: "Plan the details",
    description:
      "I help with outfits, timing, location, and all the practical questions before we meet.",
  },
  {
    number: "03",
    title: "I guide the shoot",
    description:
      "No posing experience needed. I direct movement, hands, face, and mood gently.",
  },
  {
    number: "04",
    title: "We keep it human",
    description:
      "Awkward laughs, fixing hair, changing ideas, and small breaks are normal parts of the process.",
  },
  {
    number: "05",
    title: "Receive your gallery",
    description:
      "Your edited photos arrive in a private online gallery, ready to download, share, and keep.",
  },
];

export function SessionFlowSection() {
  return (
    <section
      className="bg-brand-black px-3 py-4 text-foreground sm:px-6 md:px-10 lg:px-16"
      aria-labelledby="session-flow-heading"
    >
      <div className="mx-auto max-w-7xl mb-3">
        <div className="mb-4 max-w-2xl sm:mx-auto sm:max-w-none sm:text-center md:mb-6 lg:mb-8">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-brand-red">
            How it works
          </p>
          <h2
            id="session-flow-heading"
            className="mt-3 text-4xl font-black uppercase leading-[0.9] tracking-tighter sm:text-5xl md:text-6xl"
          >
            No posing panic.
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
            A simple flow made for people who want strong photos without
            feeling lost in front of the camera.
          </p>
        </div>

        <ol className="relative grid gap-4 sm:grid-cols-2 md:gap-3 xl:grid-cols-5">
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-6 top-8 hidden w-px bg-brand-red-deep/50 max-sm:block"
          />

          {sessionSteps.map((step) => (
            <li key={step.number} className="relative">
              <div className="flex min-h-full flex-col rounded-4xl border border-brand-red-deep bg-brand-charcoal p-5 sm:p-6 lg:p-7 xl:p-5 2xl:p-6">
                <div className="mb-2 flex items-center gap-4 xl:block">
                  <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-red-deep text-sm font-black text-brand-white xl:mb-2 xl:size-14">
                    {step.number}
                  </span>

                  <h3 className="text-2xl font-black uppercase leading-none tracking-tighter md:text-3xl xl:text-2xl 2xl:text-3xl">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-auto text-sm leading-6 text-muted-foreground xl:text-xs xl:leading-5 2xl:text-sm 2xl:leading-6">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <Marquee 
        items={["Tell", "Plan", "Guide", "Relax", "Receive"]}
      />
    </section>
  );
}
