import { motion } from "framer-motion";
import SectionLabel from "../components/SectionLabel.jsx";
import Reveal from "../components/Reveal.jsx";

const partners = [
  "Novacare",
  "Helix Bio",
  "Auribel",
  "VitaMed",
  "Solaris",
  "PrimePharm",
  "Lumen Health",
  "CuraNova",
  "Meridian Rx",
  "ArborMed",
  "NovaSterile",
  "Caliber Labs",
];

const memberships = [
  "Ministry of Health & Prevention",
  "HAAD · Health Authority Abu Dhabi",
  "Dubai Health Authority",
  "Free-Zones Export Network",
  "Pharma Wholesalers Council",
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <SectionLabel kicker="Proud members & partners" />
            <Reveal>
              <h2 className="mt-5 max-w-2xl text-4xl font-black tracking-tight text-ink-900 dark:text-white sm:text-5xl">
                Hundreds of products from{" "}
                <span className="gradient-text">top international manufacturers.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-ink-600 dark:text-ink-200">
              We've partnered only with the highest manufacturers across the
              world — and we're proud members of every authority that matters.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              whileHover={{ y: -3 }}
              className="card group flex h-24 items-center justify-center px-5 text-center"
            >
              <div className="flex items-center gap-3">
                <span className="inline-block h-2.5 w-2.5 rotate-45 bg-gradient-to-br from-brand-pink to-brand-indigo opacity-80 transition-transform duration-500 group-hover:rotate-[135deg]" />
                <span className="text-base font-semibold tracking-tight text-ink-900 dark:text-white">
                  {p}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 card card-glow p-6 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500 dark:text-ink-300">
              Memberships & Authorities
            </div>
            <div className="font-mono text-[11px] text-ink-500 dark:text-ink-300">
              MOH 2625 · HAAD PF5020
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {memberships.map((m) => (
              <span
                key={m}
                className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs text-ink-700 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-ink-100"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
