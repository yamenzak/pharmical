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
    icon: Mail,
    label: "Email us",
    sub: "info@pharmical.net — general enquiries, quotations, partnerships.",
    href: "mailto:info@pharmical.net",
  },
  {
    icon: Phone,
    label: "Call us",
    sub: "+971 50 821 7281 — directly reach a specialist.",
    href: "tel:+971508217281",
  },
  {
    icon: MapPin,
    label: "Visit our office",
    sub: "M35, Abu Dhabi · 08:00–20:00 weekdays · 08:00–14:00 weekends.",
    href: "https://maps.google.com/?q=Abu+Dhabi+M35",
    external: true,
  },
  {
    icon: CalendarClock,
    label: "Book a meeting",
    sub: "Email info@pharmical.net with your preferred timings and we'll send a calendar invite.",
    href: "mailto:info@pharmical.net?subject=Online%20meeting%20request",
  },
  {
    icon: MessageSquare,
    label: "Live chat",
    sub: "24/7 online support for registered clients & vendors via your account dashboard.",
    info: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end sm:gap-6">
          <div>
            <SectionLabel kicker="Contact" />
            <Reveal>
              <h2 className="mt-5 max-w-2xl text-balance text-3xl font-black tracking-tight text-ink-900 dark:text-white sm:text-4xl lg:text-5xl">
                We would love to{" "}
                <span className="gradient-text">know more about you.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm text-ink-600 dark:text-ink-200 sm:text-base">
              Pick the channel that suits you — we respond within two working
              days.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {channels.map((c, i) => {
            const inner = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow-sm">
                    <c.icon className="h-5 w-5" />
                  </span>
                  {!c.info && (
                    <ArrowUpRight className="h-4 w-4 text-ink-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-ink-300" />
                  )}
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-900 dark:text-white sm:mt-5 sm:text-lg">
                  {c.label}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600 dark:text-ink-200 sm:mt-2">
                  {c.sub}
                </p>
              </>
            );

            return c.info ? (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="card group p-5 sm:p-6"
              >
                {inner}
              </motion.div>
            ) : (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="card group p-5 sm:p-6"
              >
                {inner}
              </motion.a>
            );
          })}
        </div>

        <div className="mt-10 card card-glow p-5 sm:mt-12 sm:p-7">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300 sm:text-xs sm:tracking-[0.2em]">
                Single point of contact
              </div>
              <div className="mt-1.5 text-lg font-semibold text-ink-900 dark:text-white sm:text-xl">
                info@pharmical.net
              </div>
              <p className="mt-1 text-xs text-ink-500 dark:text-ink-300 sm:text-sm">
                Allow up to 2 working days for a response. For urgent matters call{" "}
                <a href="tel:+971508217281" className="font-semibold text-ink-700 hover:text-ink-900 dark:text-ink-200 dark:hover:text-white">
                  +971 50 821 7281
                </a>.
              </p>
            </div>
            <a
              href="mailto:info@pharmical.net"
              className="btn-primary"
            >
              <Mail className="h-4 w-4" />
              Send an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
