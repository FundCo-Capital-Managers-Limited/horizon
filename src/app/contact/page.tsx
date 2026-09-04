import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Horizon Energy's Freetown, Sierra Leone team about mini-grid partnerships, funding opportunities, or community power projects.",
};

export default function Contact() {
  return (
    <>
      <PageHero
        title="Let's Talk About Your Next Mini-Grid"
        subtitle="Whether you're a funder, government partner, or community looking for reliable power, we'd love to hear from you."
      />

      <section className="mx-auto max-w-5xl px-6 py-14 sm:py-20 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-brand mb-2">Registered Office</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            95D Regent Road, Unit 2, Lumley,
            <br />
            Freetown, Sierra Leone
          </p>

          <h2 className="text-lg font-semibold text-brand mb-2">Operations Base</h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            15 Barracks Lane, Murray Town,
            <br />
            Freetown, Sierra Leone
          </p>

          <h2 className="text-lg font-semibold text-brand mb-2">Email</h2>
          <p className="text-text-secondary">
            <a href="mailto:info@horizonenergy.org" className="hover:text-brand">
              info@horizonenergy.org
            </a>
          </p>
        </div>

        <div>
          <p className="text-text-secondary mb-6">
            Fill out our contact form with accurate information and a member
            of our team will respond.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
