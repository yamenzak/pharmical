import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  Truck,
  CreditCard,
  UserCog,
  BadgePercent,
} from "lucide-react";
import SectionLabel from "../components/SectionLabel.jsx";
import Reveal from "../components/Reveal.jsx";

const reasons = [
  {
    icon: ShoppingCart,
    title: "Simplified Ordering",
    badge: "B2B e-commerce",
    body: "Restock from any device, anytime, anywhere. Request quotations, place and schedule orders, and track status in real time.",
    bullets: [
      "Multi-device B2B platform",
      "Quotations, scheduled orders & tracking",
      "Single console for every facility",
    ],
  },
  {
    icon: Truck,
    title: "Fastest Delivery",
    badge: "Same-day · Next-day",
    body: "The first supplier in the UAE to provide same-day and next-day delivery on all products at no additional cost. Crews trained in product handling, delivery and safety regulations.",
    bullets: [
      "Same-day across AUH · DXB · SHJ",
      "Trained, certified delivery crew",
      "Cold-chain temperature compliance",
    ],
  },
  {
    icon: CreditCard,
    title: "Flexible Payment Terms",
    badge: "Item-specific plans",
    body: "Fabricated item-specific payment plans and flexible terms so no medical facility is deprived of life-essential products. The first regional supplier to support Visa, Mastercard, Apple Pay, Samsung Pay and Google Pay.",
    bullets: [
      "Visa · Mastercard · Apple Pay · Samsung Pay · Google Pay",
      "Online payment from invoice link",
      "Tailored terms by product",
    ],
  },
  {
    icon: UserCog,
    title: "Dedicated Account Managers",
    badge: "1-to-1 partnership",
    body: "Every client benefits from a dedicated account manager always eager to discuss trends, negotiate pricing and help grow your pharmacy with marketing and sales strategies.",
    bullets: [
      "Personalized growth strategies",
      "Direct line for negotiation",
      "Trend & inventory insights",
    ],
  },
  {
    icon: BadgePercent,
    title: "Lowest Prices Guaranteed",
    badge: "Subscribe & Save",
    body: "Bonus discount codes auto-apply at order thresholds, monthly newsletters surface in-store promos, and Subscribe & Save and Cashback programs guarantee the lowest price.",
    bullets: [
      "Auto-applied bulk discounts",
      "Monthly promotions newsletter",
      "Cashback & subscription savings",
    ],
  },
];

export default function WhyChoose() {
  const [active, setActive] = useState(0);
  const cur = reasons[active];

  return (
    <section id="why" className="relative py-32">
      <div className="container-x">
        <SectionLabel kicker="Why choose Pharmical" />
        <Reveal>
          <h2 className="mt-5 max-w-3xl text-balance text-4xl font-black tracking-tight text-white sm:text-5xl">
            The unfair advantages of being{" "}
            <span className="gradient-text">the supplier of today.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ul className="grid gap-2">
              {reasons.map((r, i) => {
                const isActive = i === active;
                return (
                  <li key={r.title}>
                    <button
                      onClick={() => setActive(i)}
                      className={`group relative flex w-full items-center gap-4 rounded-2xl border px-4 py-4 text-left transition-all duration-300 ${
                        isActive
                          ? "border-white/10 bg-white/[0.04]"
                          : "border-transparent hover:border-white/[0.06] hover:bg-white/[0.02]"
                      }`}
                    >
                      <span
                        className={`relative inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${
                          isActive
                            ? "border-transparent bg-brand-gradient text-white shadow-glow-sm"
                            : "border-white/10 bg-white/[0.03] text-ink-100"
                        }`}
                      >
                        <r.icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-base font-semibold text-white">
                            {r.title}
                          </span>
                          <span className="hidden text-[10px] uppercase tracking-[0.18em] text-ink-300 sm:inline">
                            0{i + 1}
                          </span>
                        </div>
                        <span className="mt-0.5 block truncate text-xs text-ink-300">
                          {r.badge}
                        </span>
                      </div>
                      {isActive && (
                        <motion.span
                          layoutId="why-indicator"
                          className="absolute inset-y-2 left-0 w-0.5 rounded-full bg-brand-gradient"
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="card card-glow relative overflow-hidden p-7 sm:p-9">
              <AnimatePresence mode="wait">
                <motion.div
                  key={cur.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-3">
                    <span className="pill">
                      <span className="pill-dot" />
                      {cur.badge}
                    </span>
                  </div>
                  <h3 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
                    {cur.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-pretty leading-relaxed text-ink-200">
                    {cur.body}
                  </p>

                  <ul className="mt-8 grid gap-2 sm:grid-cols-2">
                    {cur.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-sm text-ink-100"
                      >
                        <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-gradient-to-br from-brand-pink to-brand-indigo" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-gradient opacity-20 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
