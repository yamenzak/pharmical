const items = [
  "Branded & Generic Drugs",
  "OTC Pharmaceuticals",
  "Medical Devices",
  "Medical Disposables",
  "Medical Equipments",
  "Nutraceuticals",
  "Veterinary Products",
  "Cold-Chain Storage",
  "Same-day Delivery",
  "Product Registration",
  "Pharmacy SaaS",
  "Wound Care",
  "IV Therapy",
  "CPAP & Hearing Aids",
];

export default function Marquee() {
  return (
    <section className="relative mt-24 sm:mt-32 border-y border-white/[0.06] bg-white/[0.015]">
      <div className="mask-fade-both-x overflow-hidden py-5">
        <div className="flex w-max animate-marquee gap-10">
          {[...items, ...items].map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-3 whitespace-nowrap text-sm uppercase tracking-[0.22em] text-ink-300"
            >
              <span className="inline-block h-1.5 w-1.5 rotate-45 bg-gradient-to-br from-brand-pink to-brand-indigo" />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
