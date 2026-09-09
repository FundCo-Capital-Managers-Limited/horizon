import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import JoinCta from "@/components/JoinCta";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "The financiers, equipment manufacturers, and development partners behind Horizon Energy's solar mini-grid programmes across Sierra Leone and West Africa.",
};

const PARTNERS = [
  {
    name: "Clean Energy Local Currency Fund (CEF)",
    logo: "/images/partners/clean-energy-fund-logo.png",
    role: "Concessional Finance Partner",
    text: "The Clean Energy Local Currency Fund, managed by FundCo Capital Managers, is a Climate Bonds Certified, GCR/Agusto BBB-rated climate-infrastructure fund. CEF provides local-currency, concessional-tenor capital that blends down the cost of financing for Horizon's mini-grid and distribution infrastructure builds.",
  },
  {
    name: "SMA Solar Technology",
    logo: null,
    role: "Inverter & System Manufacturer",
    text: "Horizon's core technical staff are certified on SMA inverter and hybrid system platforms, used across its solar PV generation and battery storage installations.",
  },
  {
    name: "Fronius",
    logo: null,
    role: "Inverter & System Manufacturer",
    text: "Direct supplier relationship for solar inverter technology, with staff trained and certified on Fronius systems for institutional and commercial installations.",
  },
  {
    name: "Tesla",
    logo: null,
    role: "Battery Storage Supplier",
    text: "Direct supplier relationship for battery energy storage systems integrated into Horizon's hybrid mini-grid and commercial power plant deployments.",
  },
  {
    name: "Outback Power",
    logo: null,
    role: "Power Electronics Manufacturer",
    text: "Manufacturer partner for power electronics and inverter/charger systems, with technical staff trained and certified on Outback Power equipment.",
  },
  {
    name: "Sparkmeter",
    logo: null,
    role: "Metering Technology Partner",
    text: "Supplier of smart metering technology used across Horizon's mini-grid sites for remote monitoring, prepayment, and revenue assurance.",
  },
  {
    name: "Nuance Energy",
    logo: null,
    role: "Equipment Supplier",
    text: "Direct supplier relationship supporting Horizon's international procurement of solar and power system equipment into Freetown.",
  },
  {
    name: "UK DFID / UNOPS",
    logo: null,
    role: "Development Funding Partner",
    text: "The DFID/UNOPS Rural Renewable Energy Project funded Horizon's multi-district rural electrification programme across Sierra Leone's Northern, Eastern, and Southern regions.",
  },
];

export default function Partners() {
  return (
    <>
      <PageHero
        breadcrumb="Our Ecosystem"
        title="Financiers, Manufacturers & Development Partners"
        subtitle="Delivering solar mini-grids and distribution infrastructure across Sierra Leone takes more than an EPC crew — it takes concessional capital, proven equipment manufacturers, and funding partners committed to rural electrification."
      />

      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20 space-y-6">
        {PARTNERS.map((p) => (
          <div
            key={p.name}
            className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                {p.logo && (
                  <div className="flex h-12 w-28 shrink-0 items-center justify-center rounded-lg border border-border bg-white p-2">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      width={112}
                      height={48}
                      className="h-full w-full object-contain"
                    />
                  </div>
                )}
                <h2 className="text-lg font-bold text-navy">{p.name}</h2>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wide text-brand">
                {p.role}
              </span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              {p.text}
            </p>
          </div>
        ))}
      </section>

      <JoinCta />
    </>
  );
}
