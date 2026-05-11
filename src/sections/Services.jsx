import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Boxes,
  ClipboardCheck,
  Warehouse,
  TruckIcon,
  Building2,
  ArrowUpRight,
} from "lucide-react";
import SectionLabel from "../components/SectionLabel.jsx";
import Reveal from "../components/Reveal.jsx";

const services = [
  {
    id: "wholesale",
    icon: Boxes,
    title: "Medical Supplies Wholesaler",
    tab: "Wholesale",
    short: "The widest catalog at the lowest profit margin in the market.",
    detail:
      "Branded & generic drugs, OTC, natural products, nutritional supplements, veterinary products, and medical devices like catheters, implants, wound care, hearing aids, CPAPs and IV therapy equipment.",
    highlights: [
      { k: "Competitive Prices", v: "Lowest profit margin in market." },
      { k: "Scalability", v: "Order from one item to thousands." },
      { k: "Continuous Supply", v: "Automated reordering keeps shelves full." },
    ],
  },
  {
    id: "registration",
    icon: ClipboardCheck,
    title: "Product Registration",
    tab: "Registration",
    short: "Manufacturer & product registration in the UAE — as a service.",
    detail:
      "Dedicated specialists handle consultations and paperwork to register your products with local authorities. Complimentary for partnered manufacturers, available as a standalone service for everyone else.",
    highlights: [
      { k: "MOHAP", v: "Aligned with the Ministry of Health." },
      { k: "Health Authorities", v: "HAAD / DHA workflows handled." },
      { k: "End-to-End", v: "Specialists guide the full lifecycle." },
    ],
  },
  {
    id: "storage",
    icon: Warehouse,
    title: "Product Storage",
    tab: "Storage",
    short: "Climate, PEST, cold-chain — done right, from AED 15/m³/month.",
    detail:
      "Storage facilities in Abu Dhabi, Dubai and Sharjah, approved by the Ministry of Health and respected health authorities. Rent a rack, skip the overhead.",
    highlights: [
      { k: "Cold Rooms", v: "Temperature-controlled rooms." },
      { k: "Climate & PEST", v: "Highest standards, monitored 24/7." },
      { k: "Inventory App", v: "Online tracker for stored goods." },
    ],
  },
  {
    id: "distribution",
    icon: TruckIcon,
    title: "Product Distribution",
    tab: "Distribution",
    short: "First-in-region same-day & next-day last-mile delivery.",
    detail:
      "Nation-wide UAE coverage with export services to any country via Free-Zones. Storage clients can opt into distribution to ship directly from our warehouses.",
    highlights: [
      { k: "Fast Delivery", v: "Same/next-day across AUH · DXB · SHJ." },
      { k: "Safe Delivery", v: "Tech-equipped vehicles, trained crew." },
      { k: "Export Ready", v: "Ship via UAE Free-Zones globally." },
    ],
  },
  {
    id: "pharmacy",
    icon: Building2,
    title: "Pharmacy Management",
    tab: "Pharmacy Mgmt.",
    short: "A to Z business development for start-ups and small pharmacies.",
    detail:
      "License assistance, shelving (up to 90% off Pharmical products), SaaS pharmacy management with optional HRM/CRM modules, online presence & e-commerce, marketing/SEO/SMM packages, plus discounted fulfillment.",
    highlights: [
      { k: "Licensing", v: "MOHAP, authorities, civil defense — guided." },
      { k: "SaaS", v: "Inventory, prescriptions, invoicing." },
      { k: "Marketing", v: "Lifetime brand presence + SEO/SMM packages." },
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState(services[0].id);
  const cur = services.find((s) => s.id === active);

  return (
    <section id="services" className="relative py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="grid items-end gap-5 sm:gap-6 lg:grid-cols-2">
          <div>
            <SectionLabel kicker="Our Services" />
            <Reveal>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-ink-900 dark:text-white sm:text-4xl lg:text-5xl">
                We're here to{" "}
                <span className="gradient-text">help your business.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="text-sm text-ink-600 dark:text-ink-200 sm:text-base">
              Pharmical is the first pharmaceutical supplier to provide
              on-demand services that help pharmacies reduce inventory costs,
              boost sales, and improve client satisfaction.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 -mx-6 overflow-x-auto px-6 sm:mt-14 mask-fade-both-x sm:mask-none">
          <div className="flex min-w-max gap-2 rounded-full border border-gray-200/70 bg-white p-1.5 dark:border-white/[0.06] dark:bg-white/[0.02]">
            {services.map((s) => {
              const isActive = s.id === active;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className={`relative isolate inline-flex items-center gap-2 rounded-full px-3.5 py-2.5 text-xs font-medium transition-colors sm:px-4 sm:text-sm ${
                    isActive
                      ? "text-white"
                      : "text-ink-600 hover:text-ink-900 dark:text-ink-200 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="svc-tab"
                      transition={{ type: "spring", stiffness: 400, damping: 40 }}
                      className="absolute inset-0 -z-10 rounded-full bg-brand-gradient shadow-glow-sm"
                    />
                  )}
                  <s.icon className="h-4 w-4" />
                  <span className="sm:hidden">{s.tab}</span>
                  <span className="hidden sm:inline">{s.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="card card-glow relative overflow-hidden p-6 sm:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={cur.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow-sm sm:h-12 sm:w-12">
                    <cur.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-2xl font-black tracking-tight text-ink-900 dark:text-white sm:mt-6 sm:text-4xl">
                    {cur.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-600 dark:text-ink-200 sm:text-base">{cur.short}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-600/90 dark:text-ink-200/90 sm:mt-5 sm:text-base">
                    {cur.detail}
                  </p>

                  <a
                    href="mailto:info@pharmical.net"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold sm:mt-8"
                  >
                    <span className="gradient-text">Inquire about this service</span>
                    <ArrowUpRight className="h-4 w-4 text-ink-900 dark:text-white" />
                  </a>
                </motion.div>
              </AnimatePresence>
              <div className="pointer-events-none absolute -right-32 -top-24 h-72 w-72 rounded-full bg-brand-gradient opacity-15 blur-3xl dark:opacity-20" />
            </div>
          </div>

          <div className="lg:col-span-5 grid gap-3 sm:gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={cur.id + "-h"}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35 }}
                className="grid gap-3 sm:gap-4"
              >
                {cur.highlights.map((h, i) => (
                  <div
                    key={h.k}
                    className="card flex items-start justify-between gap-4 p-4 sm:p-5"
                  >
                    <div>
                      <div className="text-[10.5px] uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300 sm:text-xs">
                        Highlight 0{i + 1}
                      </div>
                      <div className="mt-1 text-base font-semibold text-ink-900 dark:text-white sm:text-lg">
                        {h.k}
                      </div>
                      <div className="mt-1 text-sm text-ink-600 dark:text-ink-200">{h.v}</div>
                    </div>
                    <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-gray-200 bg-white text-ink-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-200">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
