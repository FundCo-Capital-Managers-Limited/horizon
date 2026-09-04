import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GrmForm from "@/components/GrmForm";

export const metadata: Metadata = {
  title: "Grievance Redress Mechanism",
  description:
    "Submit complaints, concerns, or feedback about Horizon Energy's sites, staff, or operations. All grievances are logged, acknowledged within 48 hours, and resolved within 30 days where possible.",
};

export default function GRM() {
  return (
    <>
      <PageHero
        breadcrumb="Resources"
        title="Grievance Redress Mechanism"
        subtitle="This form allows communities, workers, and partners to submit complaints, concerns, or feedback about our sites, staff, or operations. All grievances are treated fairly and confidentially."
      />

      <section className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
        <div className="rounded-2xl border border-border bg-surface p-6 mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-navy mb-3">
            How It Works
          </h2>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li>Multiple entry points: community liaison officers, written submissions, and Community Power Committee representatives, in addition to this form.</li>
            <li>All grievances are logged and acknowledged within 48 hours.</li>
            <li>Resolution is provided within 30 days where possible, with a clear escalation process for unresolved cases.</li>
            <li>The GRM operates without prejudice to your right to pursue legal remedies.</li>
          </ul>
        </div>

        <GrmForm />
      </section>
    </>
  );
}
