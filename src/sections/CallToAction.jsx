import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative py-24">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 p-10 sm:p-16"
        >
          <div className="absolute inset-0 -z-10 bg-brand-gradient opacity-90" />
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

          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="pill border-white/30 bg-white/15 text-white">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
                Let us grow together
              </span>
              <h3 className="mt-6 text-balance text-4xl font-black tracking-tight text-white sm:text-6xl">
                Visit our website for more.
              </h3>
              <p className="mt-4 max-w-xl text-white/85">
                Pharmical is your end-to-end pharmacy partner — from sourcing
                and storage to distribution and growth. We're a call away.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
              <a
                href="https://www.pharmical.net"
                className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-0.5"
              >
                pharmical.net
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Talk to us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
