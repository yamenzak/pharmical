import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/20 p-7 sm:rounded-[2rem] sm:p-16"
        >
          <div className="absolute inset-0 -z-10 bg-brand-gradient" />
          <div
            className="absolute inset-0 -z-10 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage:
                "radial-gradient(closest-side at 80% 0%, #000 30%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(closest-side at 80% 0%, #000 30%, transparent 80%)",
            }}
          />
          <div className="absolute -bottom-32 -right-20 -z-10 h-72 w-72 rounded-full bg-white/20 blur-3xl" />

          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[10.5px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur sm:text-xs">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
                Let us grow together
              </span>
              <h3 className="mt-5 text-balance text-3xl font-black leading-[1.05] tracking-tight text-white sm:mt-6 sm:text-5xl lg:text-6xl">
                Ready to start your conquest?
              </h3>
              <p className="mt-3 max-w-xl text-sm text-white/85 sm:mt-4 sm:text-base">
                Pharmical is your end-to-end pharmacy partner — from sourcing
                and storage to distribution and growth. We're a call away.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col lg:items-end lg:gap-2.5">
              <a
                href="tel:+971508217281"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-0.5"
              >
                +971 50 821 7281
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:info@pharmical.net"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                <Mail className="h-4 w-4" />
                info@pharmical.net
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
