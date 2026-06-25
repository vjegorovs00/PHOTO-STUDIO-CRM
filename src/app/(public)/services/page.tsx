import type { Metadata } from "next";

import { PublicPageTemplate } from "../_components/public-page-template";

export const metadata: Metadata = {
  title: "Services",
  description: "Photography services from JJ Studio.",
};

export default function ServicesPage() {
  return (
    <PublicPageTemplate
      eyebrow="How I can help"
      title="Services"
      description="Photography sessions shaped around the people, place, and feeling you want to remember."
    />
  );
}
