import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import JoinCta from "@/components/JoinCta";

export const metadata: Metadata = {
  title: "Projects | Horizon Energy",
};

const PROJECTS = [
  {
    year: "2008 – 2016",
    title: "ENFO Solar & Mini-Grid Programme",
    location: "Sierra Leone & West Africa",
    text: "Foundational programme delivering Sierra Leone's first four photovoltaic mini-grids across 250+ sites, with over 20 km of low-voltage distribution infrastructure installed.",
  },
  {
    year: "2016",
    title: "Projet de Valorisation de l'Energie Solaire (PROVES)",
    location: "Alibori Prefecture, Benin",
    text: "A 15-community programme delivering 9 mini-grids and 6 grid extensions, totalling 260 kW of generation capacity and 58 km of low-voltage grid.",
  },
  {
    year: "2018",
    title: "Rural Renewable Energy Project (RREP), Lots 3 & 4",
    location: "Northern, Eastern & Southern Districts, Sierra Leone",
    text: "DFID/UNOPS-funded rural electrification programme serving 18 communities with over 70 km of low-voltage grid installed.",
  },
  {
    year: "2018",
    title: "Bo Hospital Neonatal Ward Solar System",
    location: "Bo Town, Sierra Leone",
    text: "20 kW solar PV system installed to provide reliable power for a hospital neonatal ward.",
  },
  {
    year: "2018",
    title: "Country Lodge Hotel Complex",
    location: "Freetown, Sierra Leone",
    text: "Full supply and installation of transformers, generators, and electrical balance-of-system for a major hospitality complex.",
  },
  {
    year: "2018",
    title: "Kissy Industry & Trading Company",
    location: "Sierra Leone",
    text: "Complete power plant and distribution system supply and installation for a commercial and industrial client.",
  },
  {
    year: "2019",
    title: "District Headquarter Town PV-Hybrid Power Supply",
    location: "Kabala, Kambia, Moyamba & Pujehun, Sierra Leone",
    text: "Multi-site proposal for modular solar-hybrid systems with full distribution infrastructure, including district and chiefdom-level stakeholder engagement and household-level willingness-to-pay surveys.",
  },
  {
    year: "2020",
    title: "National Transmission & Distribution Network Tender",
    location: "Kailahun District, Sierra Leone",
    text: "Joint-venture bid for the Government of Sierra Leone Ministry of Energy's national tender for design, supply, installation and commissioning of transmission and distribution networks.",
  },
];

export default function Projects() {
  return (
    <>
      <PageHero
        breadcrumb="Our Work"
        title="A Track Record Built Community by Community"
        subtitle="From Sierra Leone's first mini-grids to national-scale distribution tenders, Horizon's project history spans generation, distribution, and institutional power across West Africa."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-white p-6 sm:p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">
                {p.year} · {p.location}
              </p>
              <h3 className="text-lg font-semibold text-navy mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
            Leading Consortium Delivery
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
            On multi-partner programmes, Horizon serves as lead applicant and
            project development lead — contributing in-country legal
            registration, GIS-based site identification, primary community
            research, regulatory coordination, and established relationships
            with District Councils, Paramount Chiefs and chiefdom
            authorities across Sierra Leone.
          </p>
        </div>
      </section>

      <JoinCta />
    </>
  );
}
