import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import JoinCta from "@/components/JoinCta";

export const metadata: Metadata = {
  title: "Our Team | Horizon Energy",
};

const LEADERSHIP = [
  {
    name: "Gregory Alan Van Der Horst",
    role: "Director / Project Manager (Construction)",
    initials: "GV",
    bio: "Dr. van der Horst is a co-founder and director of Horizon Energy. He brings over 20 years of experience in the construction sector across Canada, Europe, Australia and West Africa, and over a decade working specifically in Sub-Saharan Africa — including Burkina Faso, Botswana, Benin, Togo and Sierra Leone, where he first arrived in 2008. Since 2011 he has been directly involved in Sierra Leone's renewable energy sector and leads Horizon's civil works and fabrication capability. His academic background includes peer-reviewed publications on household energy production and consumption dynamics and GIS-based analysis, and he brings significant expertise in CAD-based design, project management, community engagement, and logistics across West African operating environments.",
  },
  {
    name: "Simon Leslie Willans",
    role: "Director / Project Manager",
    initials: "SW",
    bio: "Mr. Willans is a co-founder and director of Horizon Energy. He has been working in the PV sector in Sierra Leone since 2007 and has installed over 300 individual systems in Sierra Leone and across West Africa, including 15 mini-grids in Benin. He has worked in every district of Sierra Leone and is fluent in Krio, Sierra Leone's national lingua franca — a critical asset for community engagement, stakeholder management, and in-country operations. He holds a Bachelor of Engineering Science (Mechanical) and is a NABCEP Certified PV Installer — the only holder of this certification operating in West Africa.",
  },
];

export default function Team() {
  return (
    <>
      <PageHero
        breadcrumb="Our People"
        title="Leadership Forged in the Field"
        subtitle="Horizon's founders built their expertise on the ground in Sierra Leone, long before the company was incorporated — and they still lead from the front today."
      />

      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20 space-y-10">
        {LEADERSHIP.map((p) => (
          <div
            key={p.name}
            className="grid gap-6 sm:grid-cols-[160px_1fr] rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm"
          >
            <div className="flex sm:flex-col items-center sm:items-start gap-4">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-dark text-2xl font-bold text-white">
                {p.initials}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-navy">{p.name}</h2>
              <p className="text-sm font-semibold text-brand mb-4">
                {p.role}
              </p>
              <p className="text-sm text-text-secondary leading-relaxed">
                {p.bio}
              </p>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
            Beyond the Founders
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Horizon's core technical staff are regionally experienced
            electrical, civil and fabrication professionals — many with 10+
            years working alongside our founders. Our people are trained and
            certified by the Sierra Leone Government Technical Institute,
            the National Power Authority, and manufacturers including SMA,
            Fronius, and Outback Power, supported by a strong established
            network of local labour for large project mobilisation.
          </p>
        </div>
      </section>

      <JoinCta />
    </>
  );
}
