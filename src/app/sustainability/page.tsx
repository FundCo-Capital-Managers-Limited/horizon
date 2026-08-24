import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import JoinCta from "@/components/JoinCta";

export const metadata: Metadata = {
  title: "Sustainability & Safety | Horizon Energy",
};

const LIFE_SAVING_RULES = [
  "Maintain your limits of approach to energised equipment",
  "Ensure that a safety protection guarantee or lockout is in place and appropriate to the work",
  "Test for hazardous energy before commencing work",
  "Ensure that worker protection / grounding bonding is applied",
  "Protect yourself from falling when working at height",
  "In a confined space, maintain a safe atmosphere and make sure rescue is possible",
  "Prevent any exposure to known toxins and carcinogens",
  "Do not work while under the influence of alcohol, medication, or other drugs",
  "Adjust your driving to road and weather conditions",
];

const ENVIRONMENTAL = [
  {
    title: "Land Use & Biodiversity",
    text: "Mini-grid sites are selected to minimise disturbance to natural habitats and agricultural land. Land acquisition follows a willing-buyer/willing-seller or community lease approach — no involuntary resettlement. Any trees removed are replaced at a minimum 2:1 ratio in consultation with the community.",
  },
  {
    title: "Pollution Prevention & Waste",
    text: "Construction waste is segregated and disposed of at approved facilities. Hazardous materials are stored in secondary containment and handled only by trained personnel. No burning of construction waste is permitted.",
  },
  {
    title: "E-Waste Management",
    text: "A circular economy approach applies to electronic and electrical waste: lithium-ion batteries are managed under a dedicated Battery Management Plan, and defective solar panels, inverters, batteries and meters are collected and transferred to certified recyclers.",
  },
];

const SOCIAL = [
  {
    title: "Community Engagement & Consent",
    text: "Meaningful community consultation is conducted before commencing activities at any site, consistent with free, prior, and informed consent — inclusive of women, youth, elderly persons, and persons with disabilities.",
  },
  {
    title: "Labour Standards",
    text: "All workers are engaged under written contracts, paid at least the applicable minimum wage, with no child labour, no forced or bonded labour, and no discrimination in hiring, compensation, or treatment.",
  },
  {
    title: "Local Content & Employment",
    text: "Priority is given to qualified Sierra Leonean citizens at all levels, consistent with the Local Content Agency Act (2016), with local community members prioritised for construction roles and a target of a substantial share of project expenditure directed to locally-owned companies.",
  },
  {
    title: "Cultural Heritage",
    text: "If cultural heritage sites or artefacts are discovered during excavation, all work in the affected area ceases immediately pending agreement with authorities and the community on a management approach.",
  },
];

const OHS = [
  {
    title: "Site Safety Management",
    text: "Every project site operates under a Site Safety Management Plan (SSMP) prepared in accordance with Sierra Leone law and international standards (ISO 14001, ISO 45001 as guiding frameworks), with a designated Safety Authority who can shut down work if unsafe conditions exist.",
  },
  {
    title: "Excavation & Confined Spaces",
    text: "Pole hole excavation — typically 1.6 metres deep across hundreds of holes per project — is treated as a confined-space hazard, with daily inspection, standby personnel, and immediately available rescue equipment.",
  },
  {
    title: "Working at Height & Electrical Safety",
    text: "Fall protection is required for all work above 2 metres. Only qualified electricians work on energised systems, with strict lockout procedures and residual current devices on all site electrical equipment.",
  },
  {
    title: "Community & Public Safety",
    text: "Construction sites are secured and clearly demarcated, open pole holes are covered or fenced when unattended, and community awareness sessions on electrical safety are conducted before and after energisation.",
  },
];

export default function Sustainability() {
  return (
    <>
      <PageHero
        breadcrumb="ESHS Policy"
        title="A Vision of Zero Injuries"
        subtitle="Horizon and its consortium partners are committed to integrating safety in all we do — minimising the chance of injury to employees, contractors, and the public, and driving continual improvement in safety performance."
      />

      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-navy mb-4">
            Our Core Safety Principles
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 text-sm text-text-secondary">
            <li>Management accepts that all incidents are preventable</li>
            <li>Management accepts responsibility for providing a safe workplace</li>
            <li>Employee involvement is essential</li>
            <li>Training to work safely is essential</li>
            <li>All employees are accountable for health and safety</li>
          </ul>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4 text-center">
          The Nine Life Saving Rules
        </h2>
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-10">
          These rules apply to all system construction and maintenance work,
          and are incorporated into every Site Safety Management Plan.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {LIFE_SAVING_RULES.map((r, i) => (
            <div
              key={r}
              className="flex gap-4 rounded-xl border border-border bg-white p-5 shadow-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                {i + 1}
              </span>
              <p className="text-sm text-text-secondary leading-relaxed pt-1">
                {r}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-navy font-semibold mt-8 max-w-2xl mx-auto">
          Overarching value: Have the courage to intervene if you see an
          unsafe act or condition, or observe someone unfit for work.
        </p>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-10 text-center">
            Environmental Management
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {ENVIRONMENTAL.map((e) => (
              <div key={e.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-brand mb-3">{e.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-10 text-center">
          Social Management
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {SOCIAL.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-brand mb-3">{s.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-10 text-center">
            Occupational Health &amp; Safety
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {OHS.map((o) => (
              <div key={o.title} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-brand mb-3">{o.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
          Something to Report?
        </h2>
        <p className="text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
          We maintain a Grievance Redress Mechanism (GRM) with multiple entry
          points for community members, workers, and partners — every
          grievance is logged, acknowledged within 48 hours, and resolved
          within 30 days where possible.
        </p>
        <Link
          href="/grm"
          className="inline-block rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark hover:shadow-md transition-all"
        >
          Submit a Grievance
        </Link>
      </section>

      <JoinCta />
    </>
  );
}
