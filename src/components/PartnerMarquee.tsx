import Image from "next/image";

export type MarqueeEntry = {
  name: string;
  logo?: string;
};

export default function PartnerMarquee({ items }: { items: MarqueeEntry[] }) {
  const track = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee gap-6 sm:gap-8">
        {track.map((item, i) =>
          item.logo ? (
            <div
              key={`${item.name}-${i}`}
              className="group flex h-16 w-40 sm:h-20 sm:w-48 shrink-0 items-center justify-center rounded-xl border border-border bg-white p-3 shadow-sm"
              aria-label={item.name}
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={160}
                height={64}
                className="h-full w-full object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
          ) : (
            <div
              key={`${item.name}-${i}`}
              className="flex h-16 w-40 sm:h-20 sm:w-48 shrink-0 items-center justify-center rounded-xl border border-border bg-white px-4 text-center shadow-sm"
            >
              <span className="text-sm font-semibold uppercase tracking-wide text-navy">
                {item.name}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
