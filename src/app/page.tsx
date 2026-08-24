import Link from "next/link";
import StatCard from "@/components/StatCard";
import JoinCta from "@/components/JoinCta";

const STATS = [
  { value: "2016", label: "Incorporated in Sierra Leone, building on 8 years of prior fieldwork" },
  { value: "~2 MW", label: "Solar PV generation capacity installed to date" },
  { value: "200+ km", label: "Overhead distribution networks installed across West Africa" },
  { value: "16 / 16", label: "Districts of Sierra Leone with operational coverage" },
];

const CAPABILITIES = [
  {
    title: "Solar PV Generation",
    text: "Design, procurement and installation of solar PV systems from 20 kWp institutional systems to modular multi-megawatt hybrid mini-grid plants, with battery storage and remote monitoring integration.",
  },
  {
    title: "Distribution Grid Infrastructure",
    text: "Medium and low-voltage overhead line design and installation, transformer substations, earthing systems, and pole installation across challenging terrain.",
  },
  {
    title: "Project Management & Civil Works",
    text: "Multi-crew parallel installation methodology with dedicated teams for clearing, excavation, pole erection, cable hanging, and substation works — compressing delivery schedules.",
  },
  {
    title: "Research, Analysis & Site Development",
    text: "In-house GIS-based site scoring and willingness-to-pay surveys that inform system sizing, tariff design, and project economics before a single pole goes in the ground.",
  },
];

const TIMELINE = [
  {
    period: "2008 – 2016",
    title: "Energy for Opportunity (ENFO)",
    text: "Horizon's co-founders develop Sierra Leone's first four solar mini-grids, train 25 technicians, and serve 250+ sites through the NGO ENFO.",
  },
  {
    period: "2016",
    title: "Horizon Energy Incorporated",
    text: "Founded to scale proven installation capability into the commercial market and pioneer grid-level solar mini-grid systems.",
  },
  {
    period: "2016 – 2018",
    title: "Transitional Projects",
    text: "Multi-country delivery across Sierra Leone and Benin, including DFID/UNOPS rural electrification and institutional and commercial power systems.",
  },
  {
    period: "2019 – Present",
    title: "Scale-Up & Strategic Positioning",
    text: "Larger, multi-site programmes and consortium leadership on national mini-grid initiatives across Sierra Leone.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-navy to-dark text-white">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/25 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-brand/20 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 md:py-36">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
            Engineering, Procurement &amp; Construction — Sierra Leone
          </p>
          <h1 className="max-w-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Powering West Africa&rsquo;s Underserved Communities With Solar
            Mini-Grids
          </h1>
          <p className="mt-6 max-w-xl text-white/85 leading-relaxed">
            Horizon Energy Company (SL) Limited designs, builds and delivers
            scalable, community-centred solar PV power systems that bring
            affordable, reliable electricity to underserved populations in
            Sierra Leone and the broader ECOWAS region.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/capabilities"
              className="inline-block rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/10 hover:bg-accent hover:text-dark hover:-translate-y-0.5 transition-all"
            >
              Our Capabilities
            </Link>
            <Link
              href="/contact"
              className="inline-block rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
              Who We Are
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6">
              Two Decades of Hands-On West African Energy Experience
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Founded in 2015 and incorporated in Sierra Leone in October
              2016, Horizon was established to scale and commercialise
              capability first proven through nearly a decade of NGO-led
              solar mini-grid development. Our co-founders bring over 20
              years of combined hands-on experience in the sector.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6">
              Horizon is the only North American Board of Certified Energy
              Practitioners (NABCEP) certified installer operating in West
              Africa, with core technical staff trained and certified by the
              Sierra Leone Government Technical Institute, the National
              Power Authority, and manufacturers including SMA, Fronius,
              Tesla and Outback Power.
            </p>
            <Link
              href="/about"
              className="inline-block rounded-full bg-dark px-6 py-3 text-sm font-semibold text-white hover:bg-brand transition-colors"
            >
              Our Story
            </Link>
          </div>
          <div className="space-y-4">
            {TIMELINE.map((t) => (
              <div
                key={t.period}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-1">
                  {t.period}
                </p>
                <h3 className="font-semibold text-navy mb-1">{t.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand mb-3">
            What We Do
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
            End-to-End Mini-Grid Delivery
          </h2>
          <p className="mx-auto max-w-2xl text-text-secondary">
            From site research and system design through construction,
            commissioning, and ongoing operations &amp; maintenance.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {CAPABILITIES.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-white p-6 sm:p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-brand mb-3">
                {c.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {c.text}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/capabilities"
            className="inline-block rounded-full border border-navy px-6 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition-colors"
          >
            Explore All Capabilities
          </Link>
        </div>
      </section>

      <section className="bg-dark text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Safety First
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            A Vision of Zero Injuries
          </h2>
          <p className="mx-auto max-w-2xl text-white/75 leading-relaxed mb-10">
            Every Horizon site operates under our nine Life Saving Rules and
            a structured Environmental, Social, Health &amp; Safety (ESHS)
            policy — because pole holes, energised lines, and working at
            height demand nothing less than full discipline.
          </p>
          <Link
            href="/sustainability"
            className="inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-accent hover:text-dark transition-colors"
          >
            Our Safety &amp; ESHS Commitment
          </Link>
        </div>
      </section>

      <JoinCta />
    </>
  );
}
