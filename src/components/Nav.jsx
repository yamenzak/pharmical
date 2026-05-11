import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { LogoWordmark } from "../assets/logo-mark.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Pharmical", href: "#why" },
  { label: "Credentials", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`flex w-full max-w-6xl items-center justify-between gap-3 rounded-2xl border px-3 py-2 sm:px-4 sm:py-2.5 transition-all duration-500 ${
          scrolled
            ? "border-gray-200/80 bg-white/85 shadow-[0_10px_40px_-20px_rgba(15,15,26,0.18)] backdrop-blur-xl dark:border-white/[0.08] dark:bg-ink-950/75 dark:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]"
            : "border-gray-200/60 bg-white/60 backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.02]"
        }`}
      >
        <a href="#top" className="flex items-center" aria-label="Pharmical home">
          <LogoWordmark height={24} className="sm:hidden" />
          <LogoWordmark height={32} className="hidden sm:inline-flex" />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium text-ink-600 transition-colors hover:text-ink-900 dark:text-ink-200 dark:hover:text-white"
              >
                <span className="relative z-10">{l.label}</span>
                <span className="absolute inset-0 -z-0 rounded-full bg-gray-100 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white/[0.05]" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-ink-900 transition-colors hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-ink-100 dark:hover:bg-white/[0.08] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-3 top-[64px] z-40 md:hidden sm:inset-x-4"
          >
            <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-2xl dark:border-white/10 dark:bg-ink-900/95 dark:backdrop-blur-xl">
              <ul className="grid gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-ink-900 hover:bg-gray-100 dark:text-ink-100 dark:hover:bg-white/5"
                    >
                      {l.label}
                      <ArrowUpRight className="h-4 w-4 text-ink-400 dark:text-ink-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
