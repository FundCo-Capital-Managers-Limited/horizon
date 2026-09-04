import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import JoinCta from "@/components/JoinCta";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Solar PV generation, medium- and low-voltage distribution grid infrastructure, project management, civil works, and in-house GIS-based research and site development — Horizon's full mini-grid value chain.",
};

const SECTIONS = [
  {
    title: "Solar PV Generation",
    intro:
      "Extensive experience in the design, procurement and installation of solar PV systems ranging from small institutional systems (20 kWp) to large modular hybrid mini-grid plants.",
    points: [
      "PV array design and installation — single-axis and fixed-tilt configurations, roof-mounted and ground-mounted",
      "Hybrid PV/battery/diesel system design using an AC-coupled architecture with modular 800 kWp building blocks scalable to multi-megawatt installations",
      "Battery energy storage system integration, including lithium iron phosphate systems with 10-year standard warranty",
      "Grid-forming string inverter selection and commissioning",
      "Remote monitoring integration via site controller and smart metering platforms",
      "Pay-as-you-go smart metering across single and three-phase configurations for household and commercial connections",
    ],
  },
  {
    title: "Distribution Grid Infrastructure",
    intro:
      "Horizon has installed over 200 km of overhead distribution networks across West Africa.",
    points: [
      "17 kV medium voltage (MV) line design and installation in accordance with Sierra Leone National Standards",
      "Three-phase 230/400 Vac low-voltage (LV) overhead ABC conductor distribution",
      "Transformer substation design, supply, installation and commissioning",
      "Earthing system design and installation",
      "Distribution pole installation across challenging terrain, laterite and granite subsurface conditions",
      "Cable stringing, tensioning stay installation, and line-hanging at elevation",
      "Tree and vegetation clearance along distribution routes, including controlled felling",
    ],
  },
  {
    title: "Project Management & Civil Works",
    intro:
      "Horizon employs a structured multi-crew parallel installation methodology on grid projects, with dedicated teams for clearing, hole digging, pole erection, cable hanging, and substation/transformer installation.",
    points: [
      "Simultaneous workstreams enabling significant schedule compression compared to series-based installations",
      "Highly skilled civil works and fabrication team built and developed since 2011",
      "Over 20 years of construction management experience across Canada, Europe, Australia and West Africa",
      "CAD-based design, project management, community engagement, and logistics and supply chain management across West African operating environments",
    ],
  },
  {
    title: "Research, Analysis & Site Development",
    intro:
      "Horizon is distinctive among EPC contractors in West Africa for its in-house research and geospatial analysis capacity.",
    points: [
      "Comprehensive willingness-to-pay and load surveys covering households, businesses, and public institutions",
      "GIS-based site scoring, analysis and mapping for prioritisation of mini-grid sites",
      "Primary data collection informing system sizing, tariff design, and project economics",
      "Academic-grade household energy research and peer-reviewed publications on energy production and consumption dynamics",
    ],
  },
];

const OPERATIONAL = [
  {
    title: "Field Presence",
    text: "Head office and primary operations base in Freetown, plus a field operations base with warehouse and workshop in Segbwema, Kailahun District. Full operational coverage across all 16 districts of Sierra Leone.",
  },
  {
    title: "Equipment",
    text: "Own fleet including tipper and flatbed trucks with mounted cranes, a full complement of hand tools and small plant, and custom-fabricated cable unrolling equipment developed in-house. Established leasing arrangements for heavy equipment including crane trucks and backhoe loaders.",
  },
  {
    title: "Workforce",
    text: "Regionally experienced electrical, civil and fabrication teams, many with 10+ years working alongside the founders. Staff trained and certified by the Sierra Leone Government Technical Institute, National Power Authority, SMA, Fronius, and Outback Power.",
  },
  {
    title: "Supply Chain & Logistics",
    text: "Direct supplier relationships with Tesla, Fronius, Sparkmeter, Nuance Energy, and major LV/MV cable and conductor manufacturers. Extensive experience in international procurement, containerised freight, and port clearing at Freetown.",
  },
];

export default function Capabilities() {
  return (
    <>
      <PageHero
        breadcrumb="What We Do"
        title="Technical Capabilities"
        subtitle="From generation to distribution to the research that grounds every design decision — Horizon delivers the full mini-grid value chain in-house."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20 space-y-16">
        {SECTIONS.map((s) => (
          <div key={s.title} className="grid gap-8 lg:grid-cols-[280px_1fr]">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-3">
                {s.title}
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                {s.intro}
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {s.points.map((p) => (
                <li
                  key={p}
                  className="flex gap-3 rounded-xl border border-border bg-white p-4 text-sm text-text-secondary leading-relaxed shadow-sm"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
              Operational Capacity
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy">
              Built to Deliver at Scale
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {OPERATIONAL.map((o) => (
              <div
                key={o.title}
                className="rounded-2xl border border-border bg-white p-6 sm:p-7 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-brand mb-3">
                  {o.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {o.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JoinCta />
    </>
  );
}
