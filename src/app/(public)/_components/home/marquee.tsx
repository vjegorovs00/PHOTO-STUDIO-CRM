"use client";

import { useEffect, useRef } from "react";

type MarqueeProps = {
  items: string[];
  speed?: number;
};

export function Marquee({ items, speed = 48 }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const firstGroup = firstGroupRef.current;

    if (!track || !firstGroup || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationFrameId = 0;
    let lastTime = performance.now();
    let offset = 0;
    let groupWidth = firstGroup.getBoundingClientRect().width;

    const resizeObserver = new ResizeObserver(() => {
      groupWidth = firstGroup.getBoundingClientRect().width;
      offset %= groupWidth || 1;
    });

    resizeObserver.observe(firstGroup);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - lastTime;
      lastTime = currentTime;

      if (groupWidth > 0) {
        offset = (offset + (speed * elapsed) / 1000) % groupWidth;
        track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      }

      animationFrameId = window.requestAnimationFrame(animate);
    };

    animationFrameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [speed]);

  return (
    <section
      className="w-full overflow-hidden border-y border-brand-red-deep py-3 bg-brand-red-deep"
      aria-label="Photography specialties"
    >
      <p className="sr-only">{items.join(", ")}</p>
      <div
        ref={trackRef}
        className="flex w-max will-change-transform"
        aria-hidden="true"
      >
        {Array.from({ length: 6 }, (_, groupIndex) => (
          <div
            key={groupIndex}
            ref={groupIndex === 0 ? firstGroupRef : undefined}
            className="flex shrink-0 items-center gap-4 pr-4 text-sm font-black uppercase tracking-[0.16em]"
          >
            {items.map((item) => (
              <span key={item} className="flex items-center gap-4 whitespace-nowrap">
                {item}
                <span aria-hidden="true">✳</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
