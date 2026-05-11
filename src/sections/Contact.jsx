import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  CalendarClock,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import SectionLabel from "../components/SectionLabel.jsx";
import Reveal from "../components/Reveal.jsx";

const channels = [
  {
    icon: CalendarClock,
    label: "Book an online meeting",
    sub: "Email hello@pharmical.net with your preferred timings.",
    href: "mailto:hello@pharmical.net",
  },
  {
    icon: MapPin,
    label: "Visit our office",
    sub: "M35, Abu Dhabi · 08:00–20:00 weekdays · 08:00–14:00 weekends.",
    href: "https://maps.google.com/?q=Abu+Dhabi+M35",
  },
  {
    icon: MessageSquare,
    label: "Live chat (registered)",
    sub: "24/7 support for registered clients and vendors.",
    href: "#",
  },
  {
    icon: Phone,
    label: "Call us",
    sub: "+971 50 821 7281 — directly reach a specialist.",
    href: "tel:+971508217281",
  },
];

const emails = [
  ["General Info", "info@pharmical.net"],
  ["Sales", "sales@pharmical.net"],
  ["Purchase", "purchase@pharmical.net"],
  ["IT", "it@pharmical.net"],
  ["Finance", "finance@pharmical.net"],
  ["Support", "support@pharmical.net"],
  ["Marketing", "marketing@pharmical.net"],
  ["HR", "hr@pharmical.net"],
  ["Public Relations", "pro@pharmical.net"],
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="container-x">
        <div className="grid items-end justify-between gap-6 sm:flex">
          <div>
            <SectionLabel kicker="Contact" />
            <Reveal>
              <h2 className="mt-5 max-w-2xl text-balance text-4xl font-black tracking-tight text-ink-900 dark:text-white sm:text-5xl">
                We would love to{" "}
                <span className="gradient-text">know more about you.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-ink-600 dark:text-ink-200">
              Pick the channel that suits you — and we'll respond within two
              working days.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            {channels.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="card group p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow-sm">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-ink-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-ink-300" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-900 dark:text-white">
                  {c.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-200">
                  {c.sub}
                </p>
              </motion.a>
            ))}
          </div>

          <div className="lg:col-span-5">
            <div className="card card-glow p-7">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink-500 dark:text-ink-300">
                <Mail className="h-3.5 w-3.5" />
                Email departments
              </div>
              <ul className="mt-6 grid gap-1">
                {emails.map(([k, v]) => (
                  <li
                    key={v}
                    className="flex items-center justify-between rounded-xl border border-transparent px-3 py-2.5 text-sm transition-colors hover:border-gray-200 hover:bg-gray-50 dark:hover:border-white/[0.06] dark:hover:bg-white/[0.02]"
                  >
                    <span className="text-ink-700 dark:text-ink-200">{k}</span>
                    <a
                      href={`mailto:${v}`}
                      className="font-mono text-[12.5px] text-ink-800 hover:text-ink-900 dark:text-ink-100 dark:hover:text-white"
                    >
                      {v}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 h-px hairline" />
              <p className="mt-4 text-xs text-ink-500 dark:text-ink-300">
                Allow up to 2 working days for a response. For urgent matters,
                call us at +971 50 821 7281.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
