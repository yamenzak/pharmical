import { motion } from "framer-motion";
import {
  ShieldCheck,
  Globe2,
  Snowflake,
  PackageSearch,
  Award,
  FlaskConical,
} from "lucide-react";
import SectionLabel from "../components/SectionLabel.jsx";
import Reveal from "../components/Reveal.jsx";

const credentials = [
  {
    icon: ShieldCheck,
    title: "MOHAP licensed",
    sub: "License №2625 — UAE Ministry of Health & Prevention",
  },
  {
    icon: Award,
    title: "HAAD approved",
    sub: "Facility PF5020 — Health Authority Abu Dhabi",
  },
  {
    icon: Globe2,
    title: "Imports worldwide",
    sub: "Sourced only from top international & local manufacturers",
  },
  {
    icon: Snowflake,
    title: "Cold-chain compliant",
    sub: "2°–8°C verified, humidity & PEST controlled facilities",
  },
  {
    icon: FlaskConical,
    title: "Rigorously vetted",
    sub: "Every product passes lab & quality checks before listing",
  },
  {
    icon: PackageSearch,
    title: "Free-Zones export",
    sub: "Distribution available to any country via UAE Free-Zones",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="relative py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end sm:gap-6">
          <div>
            <SectionLabel kicker="Credentials & memberships" />
            <Reveal>
              <h2 className="mt-5 max-w-2xl text-3xl font-black tracking-tight text-ink-900 dark:text-white sm:text-4xl lg:text-5xl">
                Backed by the authorities{" "}
                <span className="gradient-text">that matter.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm text-ink-600 dark:text-ink-200 sm:text-base">
              Pharmical operates under the regulatory frameworks of the UAE's
              health authorities, and ships products vetted at every stage of
              the supply chain.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {credentials.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -3 }}
              className="card group p-5 sm:p-6"
            >
              <div className="flex items-start gap-3">
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow-sm">
                  <c.icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-ink-900 dark:text-white sm:text-lg">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-ink-600 dark:text-ink-200 sm:text-sm">
                    {c.sub}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 card card-glow p-5 sm:mt-14 sm:p-8">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500 dark:text-ink-300 sm:text-sm">
              Hundreds of products from top international manufacturers
            </div>
            <div className="font-mono text-[10.5px] text-ink-500 dark:text-ink-300 sm:text-[11px]">
              MOH 2625 · HAAD PF5020
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
