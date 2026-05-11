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
    <section className="relative mt-16 border-y border-gray-200/70 bg-white/40 dark:border-white/[0.06] dark:bg-white/[0.015] sm:mt-24">
      <div className="mask-fade-both-x overflow-hidden py-4 sm:py-5">
        <div className="flex w-max animate-marquee gap-8 sm:gap-10">
          {[...items, ...items].map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-3 whitespace-nowrap text-xs uppercase tracking-[0.2em] text-ink-500 dark:text-ink-300 sm:text-sm sm:tracking-[0.22em]"
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
