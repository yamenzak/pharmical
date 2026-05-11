import { motion } from "framer-motion";
import { MapPin, Building2 } from "lucide-react";
import SectionLabel from "../components/SectionLabel.jsx";
import Reveal from "../components/Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionLabel kicker="About Pharmical" />
            <Reveal>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-ink-900 dark:text-white sm:text-4xl lg:text-5xl">
                A pharma supplier built for{" "}
                <span className="gradient-text">today's demands.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-base leading-relaxed text-ink-600 dark:text-ink-200 sm:mt-6 sm:text-lg">
                Established in 2021 and headquartered in Abu Dhabi, Pharmical
                is a pharmaceuticals wholesale and distribution company serving
                every region of the UAE — and beyond. We import from only the
                highest-tier manufacturers worldwide and operate centers of
                excellence across Abu Dhabi, Dubai and Sharjah.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <dl className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 sm:max-w-md">
                <Stat n="2021" l="Founded" />
                <Stat n="3" l="Centers of excellence" />
                <Stat n="UAE" l="Nation-wide coverage" />
                <Stat n="100%" l="Vetted manufacturers" />
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.city}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`card card-glow p-5 sm:p-6 ${i === 0 ? "sm:col-span-2" : ""}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow-sm">
                        {loc.headquarters ? (
                          <Building2 className="h-4 w-4" />
                        ) : (
                          <MapPin className="h-4 w-4" />
                        )}
                      </span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 text-sm font-semibold text-ink-900 dark:text-white">
                          <span className="truncate">{loc.city}</span>
                          {loc.headquarters && (
                            <span className="rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-ink-600 dark:border-white/10 dark:bg-white/5 dark:text-ink-200">
                              HQ
                            </span>
                          )}
                        </div>
                        <div className="truncate text-xs text-ink-500 dark:text-ink-300">{loc.code}</div>
                      </div>
                    </div>
                    <span className="hidden flex-none font-mono text-[10px] text-ink-500 dark:text-ink-300 sm:inline">
                      {loc.geo}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-ink-600 dark:text-ink-200">
                    {loc.desc}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                    {loc.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[11px] text-ink-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const locations = [
  {
    city: "Abu Dhabi",
    code: "M35 — Headquarters",
    geo: "24.4539°N · 54.3773°E",
    headquarters: true,
    desc: "Our main warehouse and HQ. Open 08:00–20:00 weekdays, 08:00–14:00 weekends. Dedicated cold rooms, climate & PEST controlled environments, and an inventory tracking platform for partners.",
    tags: ["MOHAP approved", "Cold-chain", "24/7 dispatch"],
  },
  {
    city: "Dubai",
    code: "Fulfillment Center",
    geo: "25.2048°N · 55.2708°E",
    headquarters: false,
    desc: "Last-mile node powering same-day and next-day delivery across the emirate.",
    tags: ["Same-day", "Last-mile"],
  },
  {
    city: "Sharjah",
    code: "Fulfillment Center",
    geo: "25.3463°N · 55.4209°E",
    headquarters: false,
    desc: "Strategic fulfillment center extending fast delivery to the northern emirates.",
    tags: ["Next-day", "Regional"],
  },
];

function Stat({ n, l }) {
  return (
    <div className="rounded-2xl border border-gray-200/70 bg-white p-3.5 dark:border-white/[0.06] dark:bg-white/[0.02] sm:p-4">
      <dt className="text-[10.5px] uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300 sm:text-xs">{l}</dt>
      <dd className="mt-1 text-xl font-black tracking-tight text-ink-900 dark:text-white sm:text-2xl">
        {n}
      </dd>
    </div>
  );
}
