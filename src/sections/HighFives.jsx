import { motion } from "framer-motion";
import {
  CheckCircle2,
  ThermometerSnowflake,
  Truck,
  GraduationCap,
  Smile,
  Hand,
} from "lucide-react";
import SectionLabel from "../components/SectionLabel.jsx";
import Reveal from "../components/Reveal.jsx";

const fives = [
  {
    icon: CheckCircle2,
    title: "High Quality Products",
    body: "Imported only from high-quality international and local manufacturers. Free samples available on any product.",
  },
  {
    icon: ThermometerSnowflake,
    title: "High Quality Storage",
    body: "Latest temperature monitoring, humidity control and labeling tech ensure products are stored to manufacturer guidelines.",
  },
  {
    icon: Truck,
    title: "High Quality Product Handling",
    body: "Trained logistics team and tech-equipped vehicles guarantee orders arrive intact — with full refunds for any damage.",
  },
  {
    icon: GraduationCap,
    title: "Highly Trained Staff",
    body: "Continuously trained by our Quality Control department, always up to date on the standards and procedures we set.",
  },
  {
    icon: Smile,
    title: "High Client Satisfaction",
    body: "Dedicated account managers and a comprehensive online platform — manage orders, invoices and quotations from anywhere.",
  },
];

export default function HighFives() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end sm:gap-6">
          <div>
            <SectionLabel kicker="The High Fives" />
            <Reveal>
              <h2 className="mt-5 max-w-2xl text-3xl font-black tracking-tight text-ink-900 dark:text-white sm:text-4xl lg:text-5xl">
                Five reasons we get a{" "}
                <span className="gradient-text">high-five</span> every time.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="relative">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-white/[0.04] sm:h-14 sm:w-14">
                <Hand className="h-5 w-5 text-brand-pink sm:h-6 sm:w-6" />
              </span>
              <span className="absolute -inset-3 -z-10 rounded-3xl bg-brand-gradient opacity-15 blur-xl dark:opacity-20" />
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-3 sm:mt-14 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
          {fives.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="card group p-5 sm:p-7"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow-sm">
                  <f.icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300 sm:text-[11px]">
                  HIGH 0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink-900 dark:text-white sm:mt-6 sm:text-xl">
                {f.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-600 dark:text-ink-200 sm:mt-3">
                {f.body}
              </p>
              <div className="mt-5 h-px hairline sm:mt-6" />
              <div className="mt-3.5 flex items-center justify-between text-[10.5px] uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300 sm:mt-4 sm:text-[11px]">
                <span>Quality assured</span>
                <span>·</span>
                <span>Audited monthly</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
