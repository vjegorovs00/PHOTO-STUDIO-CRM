import type { Metadata } from "next";

import { PublicPageTemplate } from "../_components/public-page-template";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about JJ Studio and its approach to photography.",
};

export default function AboutPage() {
  return (
    <PublicPageTemplate
      eyebrow="The studio"
      title="About"
      description="JJ Studio creates honest images with a calm, thoughtful, people-first approach."
    />
  );
}
