import type { Metadata } from "next";

import { BackHomeLink } from "../_components/back-home-link";
import { BookingForm } from "./_components/booking-form";

export const metadata: Metadata = {
  title: "Booking",
  description: "Book a photography session with JJ Studio.",
};

export default function BookingPage() {
  return (
    <main className="bg-brand-black">
      <section className="px-3 pb-8 pt-8 text-foreground sm:px-6 sm:pt-10 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.55fr_1fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <BackHomeLink />
            <p className="mt-8 text-xs font-black uppercase tracking-[0.28em] text-brand-red">
              Make it official
            </p>
            <h1 className="mt-4 text-5xl font-black uppercase leading-[0.86] tracking-tighter sm:text-7xl md:text-8xl">
              Booking
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              Send the session type, preferred date, and a little context. This
              page is front-end only for now; later it will save requests to the
              CRM.
            </p>

            <div className="mt-6 rounded-4xl border border-brand-red-deep bg-brand-charcoal p-5 text-sm leading-6 text-muted-foreground">
              <p className="font-black uppercase tracking-[0.16em] text-brand-white">
                Before backend
              </p>
              <p className="mt-3">
                The form validates in the browser and shows the selected date,
                but it does not send data anywhere yet.
              </p>
            </div>
          </div>

          <BookingForm />
        </div>
      </section>
    </main>
  );
}
