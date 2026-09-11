import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import JoinCta from "@/components/JoinCta";

const GALLERY = [
  {
    src: "/images/projects/rooftop-array-installer.jpg",
    alt: "Horizon Energy technician standing beside a newly installed rooftop solar array",
    caption: "Rooftop solar array installation, ENFO mini-grid programme",
  },
  {
    src: "/images/projects/ground-mount-array-field.jpg",
    alt: "Rows of ground-mounted solar panels at a Sierra Leone mini-grid site",
    caption: "Ground-mounted solar array, Sierra Leone mini-grid site",
  },
  {
    src: "/images/projects/aerial-mini-grid-site.jpg",
    alt: "Aerial view of a completed solar mini-grid array beside a rural community",
    caption: "Aerial view of a completed mini-grid installation",
  },
  {
    src: "/images/projects/battery-bank-inverter-room.jpg",
    alt: "Technician working among rows of battery banks and inverters in a power house",
    caption: "Battery bank and inverter room, mini-grid power house",
  },
  {
    src: "/images/projects/hybrid-inverter-wall.jpg",
    alt: "Wall-mounted hybrid inverters and a Sunny Island multicluster box at a power house",
    caption: "Hybrid inverter installation, power house",
  },
  {
    src: "/images/projects/battery-delivery-crane.jpg",
    alt: "Crew offloading battery bank equipment from a crane truck on site",
    caption: "Battery bank delivery and offloading on site",
  },
];

export const metadata: Metadata = {
  title: "Projects",
  description:
    "From Sierra Leone's first mini-grids to national-scale distribution tenders, explore Horizon Energy's project history across generation, distribution, and institutional power in West Africa.",
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

      <section className="mx-auto max-w-6xl px-6 pb-16 sm:pb-20">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
            Our Work in the Field
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl mx-auto">
            A look at Horizon crews and hardware on site — from rooftop and
            ground-mounted solar arrays to the battery banks and inverter
            rooms that keep mini-grids running.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((photo) => (
            <figure
              key={photo.src}
              className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-text-secondary">
                {photo.caption}
              </figcaption>
            </figure>
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
