import { Eye, Target, ShieldCheck } from "lucide-react";
import SectionLabel from "../components/SectionLabel.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Values() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionLabel kicker="Values · Vision · Mission" />
            <Reveal>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-ink-900 dark:text-white sm:text-4xl lg:text-5xl">
                Strict on safety.{" "}
                <span className="gradient-text">Soft on access.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-sm text-ink-600 leading-relaxed dark:text-ink-200 sm:mt-6 sm:text-base">
                Pharmaceuticals is a high-risk industry. We uphold strict
                policies surrounding storage, handling and distribution so the
                people who depend on us never have to worry.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8 grid gap-3 sm:gap-4 md:grid-cols-3">
            <Card
              icon={ShieldCheck}
              kicker="Our Values"
              title="Uphold the highest standards"
              body="Consistent quality control and safety guide every internal policy — from procurement to last-mile delivery."
              accent="from-brand-pink to-brand-magenta"
            />
            <Card
              icon={Eye}
              kicker="Our Vision"
              title="Better quality of life, globally"
              body="Provide clients around the world with access to the best medicines through an online platform that's accurate, fast and affordable."
              accent="from-brand-magenta to-brand-purple"
            />
            <Card
              icon={Target}
              kicker="Our Mission"
              title="Best-in-class at lowest rates"
              body="Maintain the highest ethical and quality standards, prevent shortages, and offer every brand and dosage clients ask for."
              accent="from-brand-purple to-brand-indigo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, kicker, title, body, accent }) {
  return (
    <div className="card card-glow group relative overflow-hidden p-5 sm:p-6">
      <div
        className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-25 blur-2xl transition-opacity duration-700 group-hover:opacity-50 dark:opacity-30 dark:group-hover:opacity-60 ${accent}`}
      />
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow-sm">
        <Icon className="h-4 w-4" />
      </span>
      <div className="mt-4 text-[11px] uppercase tracking-[0.22em] text-ink-500 dark:text-ink-300 sm:mt-5">
        {kicker}
      </div>
      <h3 className="mt-1.5 text-lg font-semibold text-ink-900 dark:text-white sm:mt-2 sm:text-xl">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-600 dark:text-ink-200 sm:mt-3">{body}</p>
    </div>
  );
}
