import type { Metadata } from "next";

import { FinalCtaSection } from "../_components/final-cta-section";
import { HeroSection } from "../_components/home/hero-section";
import { SelectedFramesSection } from "../_components/home/selected-frames-section";
import { SessionFlowSection } from "../_components/home/session-flow-section";

export const metadata: Metadata = {
  title: "Home",
  description: "Professional photography for the moments that matter.",
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SelectedFramesSection />
      <SessionFlowSection />
      <FinalCtaSection />
    </main>
  );
}
