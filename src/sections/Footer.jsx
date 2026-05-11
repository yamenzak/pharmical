import { LogoWordmark } from "../assets/logo-mark.jsx";
import { ArrowUpRight } from "lucide-react";

const cols = [
  {
    title: "Company",
    links: [
      ["About", "#about"],
      ["Why Pharmical", "#why"],
      ["High Fives", "#why"],
      ["Partners", "#partners"],
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
      ["hello@pharmical.net", "mailto:hello@pharmical.net"],
      ["sales@pharmical.net", "mailto:sales@pharmical.net"],
      ["+971 50 821 7281", "tel:+971508217281"],
      ["M35 · Abu Dhabi", "#contact"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20 border-t border-gray-200/70 bg-white/70 backdrop-blur dark:border-white/[0.06] dark:bg-ink-950/70">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <LogoWordmark height={38} />

            <p className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-ink-600 dark:text-ink-200">
              The world-class wholesale distributor of top-quality
              pharmaceutical and medical disposable products — built for
              today's supply chain.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="pill">MOH 2625</span>
              <span className="pill">HAAD PF5020</span>
              <span className="pill">UAE Licensed</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-8 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-500 dark:text-ink-300">
                  {c.title}
                </div>
                <ul className="mt-5 space-y-3">
                  {c.links.map(([l, h]) => (
                    <li key={l}>
                      <a
                        href={h}
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

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-gray-200/70 pt-8 text-xs text-ink-500 dark:border-white/[0.06] dark:text-ink-300 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Pharmical Pharmaceutical & Medical
            Supplies Company. All rights reserved.
          </p>
          <p className="font-mono">
            Designed for today. Delivered today. <span className="gradient-text font-semibold">www.pharmical.net</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
