import {
  Stethoscope,
  Syringe,
  Pill,
  PackagePlus,
  HeartPulse,
  Leaf,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionLabel from "../components/SectionLabel.jsx";
import Reveal from "../components/Reveal.jsx";

const ranges = [
  {
    icon: Stethoscope,
    name: "Medical Devices",
    desc: "Catheters, implants, IV equipment, CPAPs, hearing aids and more.",
  },
  {
    icon: Syringe,
    name: "Medical Disposables",
    desc: "Single-use clinical supplies for hospitals, clinics and pharmacies.",
  },
  {
    icon: PackagePlus,
    name: "Medical Consumables",
    desc: "Day-to-day consumables sourced from vetted global suppliers.",
  },
  {
    icon: Pill,
    name: "Pharmaceuticals",
    desc: "Branded & generic drugs, OTC products and veterinary lines.",
  },
  {
    icon: HeartPulse,
    name: "Medical Equipments",
    desc: "Diagnostic, monitoring and therapeutic equipment.",
  },
  {
    icon: Leaf,
    name: "Nutraceuticals",
    desc: "Natural products and nutritional supplements.",
  },
];

export default function ProductRanges() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end sm:gap-6">
          <div className="max-w-2xl">
            <SectionLabel kicker="Product Ranges" />
            <Reveal>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-ink-900 dark:text-white sm:text-4xl lg:text-5xl">
                Six categories.{" "}
                <span className="gradient-text">One vetted source.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm text-ink-600 dark:text-ink-200 sm:text-base">
              Every product passes rigorous testing and quality checks before
              it's offered through Pharmical.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {ranges.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="card group p-5 sm:p-6"
            >
              <div className="flex items-center gap-3">
                <span className="relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/10 dark:bg-white/[0.04]">
                  <r.icon className="h-5 w-5 text-ink-900 transition-opacity duration-500 group-hover:opacity-0 dark:text-white" />
                  <span className="absolute inset-0 rounded-xl bg-brand-gradient opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <r.icon className="absolute h-5 w-5 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <h3 className="text-base font-semibold text-ink-900 dark:text-white sm:text-lg">{r.name}</h3>
              </div>
              <p className="mt-3.5 text-sm leading-relaxed text-ink-600 dark:text-ink-200 sm:mt-4">
                {r.desc}
              </p>

              <div className="mt-5 flex items-center justify-between text-[10.5px] uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300 sm:mt-6 sm:text-[11px]">
                <span>0{i + 1} / 06</span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-px w-8 bg-gradient-to-r from-transparent to-ink-300 dark:to-white/20" />
                  Vetted
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
