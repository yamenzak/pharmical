import { LogoWordmark } from "../assets/logo-mark.jsx";
import { ArrowUpRight } from "lucide-react";

const cols = [
  {
    title: "Company",
    links: [
      ["About", "#about"],
      ["Why Pharmical", "#why"],
      ["Credentials", "#partners"],
    ],
  },
  {
    title: "Services",
    links: [
      ["Wholesale", "#services"],
      ["Product Registration", "#services"],
      ["Storage", "#services"],
      ["Distribution", "#services"],
      ["Pharmacy Management", "#services"],
    ],
  },
  {
    title: "Contact",
    links: [
      ["info@pharmical.net", "mailto:info@pharmical.net"],
      ["+971 50 821 7281", "tel:+971508217281"],
      ["M35 · Abu Dhabi", "https://maps.google.com/?q=Abu+Dhabi+M35"],
      ["pharmical.net", "https://www.pharmical.net"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 mt-16 border-t border-gray-200/70 bg-white/70 backdrop-blur dark:border-white/[0.06] dark:bg-ink-950/70 sm:mt-20">
      <div className="container-x py-12 sm:py-16">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <LogoWordmark height={34} />
            <p className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-ink-600 dark:text-ink-200">
              The world-class wholesale distributor of top-quality
              pharmaceutical and medical disposable products — built for
              today's supply chain.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
              <span className="pill">MOH 2625</span>
              <span className="pill">HAAD PF5020</span>
              <span className="pill">UAE Licensed</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-ink-500 dark:text-ink-300 sm:text-xs">
                  {c.title}
                </div>
                <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
                  {c.links.map(([l, h]) => (
                    <li key={l}>
                      <a
                        href={h}
                        target={h.startsWith("http") ? "_blank" : undefined}
                        rel={h.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group inline-flex items-center gap-1.5 text-sm text-ink-700 hover:text-ink-900 dark:text-ink-100 dark:hover:text-white"
                      >
                        {l}
                        <ArrowUpRight className="h-3 w-3 -translate-y-px text-ink-400 opacity-0 transition-all group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-gray-200/70 pt-6 text-[11px] text-ink-500 dark:border-white/[0.06] dark:text-ink-300 sm:mt-14 sm:flex-row sm:items-center sm:gap-4 sm:pt-8 sm:text-xs">
          <p>
            © {new Date().getFullYear()} Pharmical Pharmaceutical & Medical
            Supplies Company. All rights reserved.
          </p>
          <p className="font-mono">
            Designed for today. Delivered today.{" "}
            <span className="gradient-text font-semibold">www.pharmical.net</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
