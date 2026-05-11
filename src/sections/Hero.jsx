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
    <section ref={ref} id="top" className="relative pt-32 sm:pt-40">
      <div className="container-x relative">
        <motion.div style={{ y: y1, opacity: o }} className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-ink-200 backdrop-blur"
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
            className="mt-6 text-balance text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl md:text-[5.5rem]"
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
            className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-ink-200 sm:text-xl"
          >
            Pharmical is the world-class wholesale distributor of top-quality
            pharmaceutical and medical disposable products — engineered for
            today's supply chain, today's pharmacies, and today's patients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
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
            className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.18em] text-ink-300"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5" /> MOHAP certified
            </span>
            <span className="text-ink-500">·</span>
            <span className="inline-flex items-center gap-2">
              <Truck className="h-3.5 w-3.5" /> Same-day delivery
            </span>
            <span className="text-ink-500">·</span>
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
          className="relative mx-auto mt-20 max-w-5xl"
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
      <div className="absolute -inset-x-12 -top-10 bottom-0 -z-10 rounded-[3rem] bg-brand-gradient opacity-20 blur-3xl" />

      <div className="card card-glow p-3 sm:p-4">
        <div className="grid grid-cols-12 gap-3 sm:gap-4">
          <div className="col-span-12 md:col-span-8 rounded-2xl border border-white/10 bg-ink-900/70 p-5 sm:p-6 overflow-hidden relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-ink-300">
                <Sparkles className="h-3.5 w-3.5 text-brand-pink" />
                <span className="uppercase tracking-[0.2em]">Order Console</span>
              </div>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
              </div>
            </div>

            <div className="mt-6 grid gap-2 font-mono text-[12px] leading-relaxed text-ink-200">
              <Line tag="POST" path="/orders" status="201" />
              <Line tag="GET" path="/inventory/UAE-AUH-01" status="200" />
              <Line tag="POST" path="/delivery/dispatch" status="201" />
              <Line tag="GET" path="/storage/temp-monitoring" status="200" />
            </div>

            <div className="pointer-events-none absolute inset-x-6 bottom-4 h-px hairline" />
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
              <Chip icon={<PackageCheck className="h-3.5 w-3.5" />} label="2,184 SKUs in stock" />
              <Chip icon={<Truck className="h-3.5 w-3.5" />} label="Same-day · Abu Dhabi · Dubai · Sharjah" />
              <Chip icon={<Thermometer className="h-3.5 w-3.5" />} label="2°–8°C verified" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 grid gap-3 sm:gap-4">
            <StatCard
              k="99.4%"
              label="On-time delivery rate"
              hint="Last 12 months"
              accent="from-brand-pink to-brand-magenta"
            />
            <StatCard
              k="< 4h"
              label="Avg. dispatch in Abu Dhabi"
              hint="Same-day default"
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
      : "text-ink-200";
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2">
      <span className={`w-12 font-semibold ${tagColor}`}>{tag}</span>
      <span className="flex-1 truncate text-ink-100">{path}</span>
      <span className="text-emerald-300/90">{status}</span>
      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
    </div>
  );
}

function Chip({ icon, label }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-ink-200">
      {icon}
      {label}
    </span>
  );
}

function StatCard({ k, label, hint, accent }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/70 p-5">
      <div
        className={`absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br opacity-30 blur-2xl ${accent}`}
      />
      <div className="relative">
        <div className="text-3xl font-black tracking-tight text-white">{k}</div>
        <div className="mt-1 text-sm font-medium text-ink-100">{label}</div>
        <div className="mt-0.5 text-xs text-ink-300">{hint}</div>
      </div>
    </div>
  );
}
