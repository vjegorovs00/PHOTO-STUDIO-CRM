import type { Metadata } from "next";

import { PublicPageTemplate } from "../_components/public-page-template";

export const metadata: Metadata = {
  title: "Booking",
  description: "Book a photography session with JJ Studio.",
};

export default function BookingPage() {
  return (
    <PublicPageTemplate
      eyebrow="Make it official"
      title="Booking"
      description="The booking form will live here. For now, this page is ready for its custom design."
      showBookingCta={false}
    />
  );
}
