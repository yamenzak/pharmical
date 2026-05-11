import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { LogoMark } from "../assets/logo-mark.jsx";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Pharmical", href: "#why" },
  { label: "Partners", href: "#partners" },
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
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`flex w-full max-w-6xl items-center justify-between gap-4 rounded-2xl border border-white/[0.08] px-3 py-2.5 transition-all duration-500 ${
          scrolled
            ? "bg-ink-950/75 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]"
            : "bg-white/[0.02] backdrop-blur-md"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 pl-1">
          <LogoMark size={30} />
          <span className="text-[1.05rem] font-black tracking-tight text-white">
            PHARMICAL
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium text-ink-200 transition-colors hover:text-white"
              >
                <span className="relative z-10">{l.label}</span>
                <span className="absolute inset-0 -z-0 rounded-full bg-white/[0.05] opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden md:inline-flex btn-ghost text-xs">
            Sign in
          </a>
          <a href="#contact" className="btn-primary text-xs">
            Start your conquest <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-100 md:hidden"
            aria-label="Open menu"
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
            className="absolute inset-x-4 top-20 z-40 md:hidden"
          >
            <div className="rounded-2xl border border-white/10 bg-ink-900/95 p-4 backdrop-blur-xl shadow-2xl">
              <ul className="grid gap-1">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-ink-100 hover:bg-white/5"
                    >
                      {l.label}
                      <ArrowUpRight className="h-4 w-4 text-ink-300" />
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
