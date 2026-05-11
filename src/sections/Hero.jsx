import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  CreditCard,
  Sparkles,
  PackageCheck,
  Thermometer,
} from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const o = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section ref={ref} id="top" className="relative pt-24 sm:pt-32 md:pt-40">
      <div className="container-x relative">
        <motion.div style={{ y: y1, opacity: o }} className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-[10.5px] sm:text-xs font-medium text-ink-600 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-200"
          >
            <span className="relative inline-flex">
              <span className="absolute inset-0 animate-ping rounded-full bg-brand-magenta/40" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-brand-magenta" />
            </span>
            MOH 2625 · HAAD PF5020 · UAE Licensed
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="mt-5 text-balance text-[2.6rem] font-black leading-[0.98] tracking-tight text-ink-900 dark:text-white sm:mt-6 sm:text-7xl md:text-[5.5rem]"
          >
            Start your{" "}
            <span className="relative inline-block">
              <span className="gradient-text">conquest</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1 left-0 right-0 h-1 origin-left rounded-full bg-brand-gradient"
              />
            </span>
            <br className="hidden sm:block" /> of UAE pharma.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-600 dark:text-ink-200 sm:mt-7 sm:text-xl"
          >
            Pharmical is the world-class wholesale distributor of top-quality
            pharmaceutical and medical disposable products — engineered for
            today's supply chain, today's pharmacies, and today's patients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-9 sm:flex-row sm:items-center"
          >
            <a href="#services" className="btn-primary group">
              Browse services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#contact" className="btn-ghost">
              Talk to a specialist
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-[10.5px] uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300 sm:mt-12 sm:gap-x-6 sm:text-xs"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5" /> MOHAP certified
            </span>
            <span className="text-ink-300 dark:text-ink-500">·</span>
            <span className="inline-flex items-center gap-2">
              <Truck className="h-3.5 w-3.5" /> Same-day delivery
            </span>
            <span className="text-ink-300 dark:text-ink-500">·</span>
            <span className="inline-flex items-center gap-2">
              <CreditCard className="h-3.5 w-3.5" /> Flexible payments
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-14 max-w-5xl sm:mt-20"
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-x-12 -top-10 bottom-0 -z-10 rounded-[3rem] bg-brand-gradient opacity-10 blur-3xl dark:opacity-20" />

      <div className="card card-glow p-2.5 sm:p-4">
        <div className="grid grid-cols-12 gap-2.5 sm:gap-4">
          <div className="col-span-12 md:col-span-8 rounded-2xl border border-gray-200/70 bg-gray-50/80 p-4 sm:p-6 overflow-hidden relative dark:border-white/10 dark:bg-ink-900/70">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[10px] sm:text-xs text-ink-500 dark:text-ink-300">
                <Sparkles className="h-3.5 w-3.5 text-brand-pink" />
                <span className="uppercase tracking-[0.18em] sm:tracking-[0.2em]">Order Console</span>
              </div>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-ink-200 dark:bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-ink-200 dark:bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-ink-200 dark:bg-white/15" />
              </div>
            </div>

            <div className="mt-5 grid gap-1.5 font-mono text-[10.5px] leading-relaxed text-ink-700 dark:text-ink-200 sm:mt-6 sm:gap-2 sm:text-[12px]">
              <Line tag="POST" path="/orders" status="201" />
              <Line tag="GET" path="/inventory/UAE-AUH-01" status="200" />
              <Line tag="POST" path="/delivery/dispatch" status="201" />
              <Line tag="GET" path="/storage/temp" status="200" />
            </div>

            <div className="pointer-events-none absolute inset-x-6 bottom-4 hidden h-px hairline sm:block" />
            <div className="mt-5 flex flex-wrap items-center gap-2 sm:mt-6 sm:gap-3">
              <Chip icon={<PackageCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5" />} label="2,184 SKUs" />
              <Chip icon={<Truck className="h-3 w-3 sm:h-3.5 sm:w-3.5" />} label="Same-day · UAE-wide" />
              <Chip icon={<Thermometer className="h-3 w-3 sm:h-3.5 sm:w-3.5" />} label="2°–8°C verified" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 grid grid-cols-3 gap-2.5 sm:gap-4 md:grid-cols-1">
            <StatCard
              k="99.4%"
              label="On-time delivery"
              hint="Last 12 months"
              accent="from-brand-pink to-brand-magenta"
            />
            <StatCard
              k="< 4h"
              label="Avg. dispatch"
              hint="Abu Dhabi"
              accent="from-brand-purple to-brand-indigo"
            />
            <StatCard
              k="3"
              label="Fulfillment centers"
              hint="AUH · DXB · SHJ"
              accent="from-brand-magenta to-brand-indigo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Line({ tag, path, status }) {
  const tagColor =
    tag === "POST"
      ? "text-brand-pink"
      : tag === "GET"
      ? "text-brand-indigo"
      : "text-ink-700";
  return (
    <div className="flex items-center gap-2 rounded-xl border border-gray-200/70 bg-white px-2.5 py-1.5 dark:border-white/[0.06] dark:bg-white/[0.02] sm:gap-3 sm:px-3 sm:py-2">
      <span className={`w-10 flex-none font-semibold sm:w-12 ${tagColor}`}>{tag}</span>
      <span className="flex-1 truncate text-ink-800 dark:text-ink-100">{path}</span>
      <span className="text-emerald-600 dark:text-emerald-300/90">{status}</span>
      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.7)] dark:bg-emerald-400" />
    </div>
  );
}

function Chip({ icon, label }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2 py-1 text-[10px] font-medium text-ink-700 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-ink-200 sm:px-2.5 sm:text-[11px]">
      {icon}
      {label}
    </span>
  );
}

function StatCard({ k, label, hint, accent }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white p-3.5 sm:p-5 dark:border-white/10 dark:bg-ink-900/70">
      <div
        className={`absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br opacity-20 blur-2xl dark:opacity-30 ${accent}`}
      />
      <div className="relative">
        <div className="text-xl font-black tracking-tight text-ink-900 dark:text-white sm:text-3xl">{k}</div>
        <div className="mt-0.5 text-xs font-medium text-ink-800 dark:text-ink-100 sm:mt-1 sm:text-sm">{label}</div>
        <div className="mt-0.5 hidden text-xs text-ink-500 dark:text-ink-300 sm:block">{hint}</div>
      </div>
    </div>
  );
}
