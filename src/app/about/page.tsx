import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import StatCard from "@/components/StatCard";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Incorporated in Sierra Leone in 2016, Horizon Energy is the only NABCEP-certified installer in West Africa, built on nearly a decade of NGO-led mini-grid development across all 16 districts of Sierra Leone.",
};

const CORPORATE = [
  { label: "Registered Name", value: "Horizon Energy Company (SL) Limited" },
  { label: "Jurisdiction", value: "Sierra Leone (Companies Act No. 5 of 2009)" },
  { label: "Date of Incorporation", value: "25 October 2016" },
  { label: "Sector", value: "Renewable Energy — Engineering, Procurement & Construction" },
];

const HISTORY = [
  {
    period: "2008 – 2016",
    title: "Energy for Opportunity (ENFO) — Foundation Phase",
    text: "The professional foundation of Horizon's leadership was built through nearly a decade of renewable energy development work under ENFO, an NGO promoting quality and innovation in solar PV installation across Sierra Leone. During this period, the co-founders and their teams administered over €10 million in project funding, trained 25 professional solar technicians, installed systems at over 250 sites, and developed Sierra Leone's first four photovoltaic mini-grids. They also established foundational relationships with the Ministry of Energy, SLEWRC, EDSA, District Councils and Paramount Chiefs across all 16 districts of Sierra Leone.",
  },
  {
    period: "2016",
    title: "Transition to Horizon Energy",
    text: "By 2016 the ENFO mandate had been fulfilled: a viable solar PV market had been established, and regional interest in mini-grids was growing rapidly. Horizon Energy was incorporated to lead the next phase of sectoral development — taking proven installation capability into the commercial market and pioneering larger-scale, grid-level solar mini-grid systems for district towns and anchor clients.",
  },
  {
    period: "2016 – 2018",
    title: "Transitional Projects",
    text: "Horizon's first years as a commercial entity produced a strong project record across multiple countries and client types — from a 15-community mini-grid and grid-extension programme in Alibori Prefecture, Benin, to the DFID/UNOPS Rural Renewable Energy Project across Sierra Leone's Northern, Eastern and Southern districts, institutional solar for a hospital neonatal ward, and full power plant supply for commercial and hospitality clients in Freetown.",
  },
  {
    period: "2019 – 2020",
    title: "Scale-Up & Strategic Positioning",
    text: "Building on its track record, Horizon progressed to larger and more complex programmes, including a proposal for modular solar-hybrid systems across four district headquarter towns, and a joint-venture bid for the Government of Sierra Leone's national transmission and distribution tender — demonstrating capacity to conceive, finance-model, and manage large-scale, multi-stakeholder renewable energy programmes.",
  },
];

const RESEARCH = [
  "Comprehensive willingness-to-pay and load surveys covering every household, business, and public institution across multiple district headquarters and numerous villages in Sierra Leone",
  "GIS-based site scoring, analysis and mapping applied to the assessment and prioritisation of hundreds of potential mini-grid sites nationwide",
  "Primary data collection that directly informs system sizing, tariff design, and project economics",
  "Academic-grade household energy research, including peer-reviewed publications on energy production and consumption dynamics in Sub-Saharan Africa",
];

export default function About() {
  return (
    <>
      <PageHero
        breadcrumb="About Horizon"
        title="Built From the Ground Up in Sierra Leone's Energy Sector"
        subtitle="Horizon Energy Company (SL) Limited is a Sierra Leone-registered engineering, procurement and construction company specialising in renewable energy generation, mini-grid development, and electrical infrastructure across West Africa."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {CORPORATE.map((c) => (
            <div
              key={c.label}
              className="rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-2">
                {c.label}
              </p>
              <p className="text-sm text-navy font-medium leading-relaxed">
                {c.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start mb-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              Our Mission
            </h2>
            <p className="text-text-secondary leading-relaxed">
              To develop and deliver scalable, community-centred solar PV
              power systems that provide affordable, reliable electricity to
              underserved populations in Sierra Leone and the broader ECOWAS
              region — turning two decades of on-the-ground field experience
              into a commercial capability that can operate at national
              scale.
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
              Our Distinction
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Horizon holds the distinction of being the only North American
              Board of Certified Energy Practitioners (NABCEP) certified
              installer operating in West Africa. Our core technical staff
              are trained and certified by the Sierra Leone Government
              Technical Institute, the National Power Authority, and
              internationally recognised manufacturers including SMA,
              Fronius, Tesla, and Outback Power.
            </p>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-10 text-center">
          Our Development History
        </h2>
        <div className="space-y-6">
          {HISTORY.map((h) => (
            <div
              key={h.period}
              className="grid gap-4 sm:grid-cols-[160px_1fr] rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm"
            >
              <div>
                <p className="inline-block rounded-full bg-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand">
                  {h.period}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-2">{h.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {h.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
              Research &amp; Site Development
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6">
              Data-Led Site Selection
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Horizon is distinctive among EPC contractors in West Africa for
              its in-house research and geospatial analysis capacity.
            </p>
            <ul className="space-y-3">
              {RESEARCH.map((r) => (
                <li key={r} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <StatCard value="37" label="Communities where Horizon leadership has led PV or grid installations across Sierra Leone and Benin" />
            <StatCard value="300+" label="Individual solar PV systems installed by our co-founders across West Africa" />
            <StatCard value="25" label="Solar technicians trained during the ENFO foundation phase, many still active in Horizon's workforce" />
            <StatCard value="16" label="Districts of Sierra Leone with established government and community relationships" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
          Meet the People Behind Horizon
        </h2>
        <p className="text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
          Our leadership team has worked in every district of Sierra Leone,
          bringing deep technical, regulatory and community expertise to
          every project.
        </p>
        <Link
          href="/team"
          className="inline-block rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-dark hover:shadow-md transition-all"
        >
          Meet Our Team
        </Link>
      </section>
    </>
  );
}
