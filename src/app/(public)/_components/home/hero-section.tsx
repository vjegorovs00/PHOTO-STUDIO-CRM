import Image from "next/image";

import styles from "./hero-section.module.css";
import { Marquee } from "./marquee";
import { HeroUnderline } from "./hero-underline";

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-brand-black text-stone-50 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <div className="relative flex h-110 w-full justify-center overflow-hidden">
          <p className={` ${styles.jobReveal} absolute top-8 z-20 text-sm font-medium uppercase tracking-[0.24em] text-brand-red-deep sm:top-12`}>
            Photographer
          </p>
          <div className="absolute top-20 z-0 w-full px-5 sm:top-24 sm:px-0">
            <Image
              src="/home/hero/hero-mobilec.png"
              alt="JulieJul"
              width={1000}
              height={863}
              priority
              sizes="(max-width: 639px) 100vw, 0px"
              className={`${styles.logoReveal} mx-auto h-auto w-full max-w-97.5 sm:hidden`}
            />
            <Image
              src="/home/hero/hero-desktopc.png"
              alt="JulieJul"
              width={1920}
              height={505}
              priority
              sizes="(max-width: 1023px) 100vw, 1200px"
              className={`${styles.logoReveal} hidden h-auto w-full sm:block`}
            />
          </div>
          <Image
            src="/home/hero/heroc.png"
            alt="JulieJul photography studio portrait"
            width={595}
            height={1280}
            priority
            className="absolute z-10 w-auto max-w-none grayscale contrast-125
            h-100 translate-y-8
            sm:h-80 sm:translate-y-2
            md:h-110 md:-translate-y-8
            lg:h-120 lg:-translate-y-11"
          />
        </div>
        <Marquee
          items={["Portrait", "Fashion", "Editorial", "JulieJul", "Photography", "Family photo"]}
        />
        <HeroUnderline/>
      </div>
    </section>
  );
}
