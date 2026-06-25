import type { Metadata } from "next";

import { PublicPageTemplate } from "../_components/public-page-template";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with JJ Studio.",
};

export default function ContactPage() {
  return (
    <PublicPageTemplate
      eyebrow="Start a conversation"
      title="Contact"
      description="Tell me a little about what you are planning, and we can make a session that fits."
    />
  );
}
