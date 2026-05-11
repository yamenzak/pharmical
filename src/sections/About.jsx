import { motion } from "framer-motion";
import { MapPin, Building2 } from "lucide-react";
import SectionLabel from "../components/SectionLabel.jsx";
import Reveal from "../components/Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel kicker="About Pharmical" />
            <Reveal>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl">
                A pharma supplier built for{" "}
                <span className="gradient-text">today's demands.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-ink-200">
                Established in 2021 and headquartered in Abu Dhabi, Pharmical
                is a pharmaceuticals wholesale and distribution company serving
                every region of the UAE — and beyond. We import from only the
                highest-tier manufacturers worldwide and operate centers of
                excellence across Abu Dhabi, Dubai and Sharjah.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <dl className="mt-10 grid grid-cols-2 gap-4 sm:max-w-md">
                <Stat n="2021" l="Founded" />
                <Stat n="3" l="Centers of excellence" />
                <Stat n="UAE" l="Nation-wide coverage" />
                <Stat n="100%" l="Vetted manufacturers" />
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.city}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className={`card card-glow p-6 ${i === 0 ? "sm:col-span-2" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow-sm">
                        {loc.headquarters ? (
                          <Building2 className="h-4 w-4" />
                        ) : (
                          <MapPin className="h-4 w-4" />
                        )}
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-white">
                          {loc.city}
                          {loc.headquarters && (
                            <span className="ml-2 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-ink-200">
                              HQ
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-ink-300">{loc.code}</div>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] text-ink-300">
                      {loc.geo}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-ink-200">
                    {loc.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {loc.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-ink-200"
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
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
      <dt className="text-xs uppercase tracking-[0.18em] text-ink-300">{l}</dt>
      <dd className="mt-1 text-2xl font-black tracking-tight text-white">
        {n}
      </dd>
    </div>
  );
}
