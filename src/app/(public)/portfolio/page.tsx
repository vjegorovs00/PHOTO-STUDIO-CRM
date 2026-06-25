import type { Metadata } from "next";

import { PublicPageTemplate } from "../_components/public-page-template";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A selection of photography by JJ Studio.",
};

export default function PortfolioPage() {
  return (
    <PublicPageTemplate
      eyebrow="Selected work"
      title="Portfolio"
      description="A growing collection of portrait, family, and event stories."
    />
  );
}
