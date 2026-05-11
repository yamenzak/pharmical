import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { v: 100, suffix: "+", label: "International manufacturers" },
  { v: 2625, suffix: "", label: "MOH License" },
  { v: 3, suffix: "", label: "Fulfillment centers", small: "AUH · DXB · SHJ" },
  { v: 24, suffix: "/7", label: "Online live chat for partners" },
];

export default function Stats() {
  return (
    <section className="relative py-24">
      <div className="container-x">
        <div className="card card-glow grid gap-6 p-8 sm:grid-cols-2 sm:p-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Stat key={s.label} {...s} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ v, suffix, label, small, idx }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1400;
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const ease = 1 - Math.pow(1 - p, 3);
      setN(Math.round(v * ease));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, v]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: idx * 0.08 }}
      className="relative"
    >
      <div className="text-5xl font-black tracking-tight text-ink-900 dark:text-white sm:text-6xl">
        <span className="gradient-text">{n.toLocaleString()}</span>
        <span className="text-ink-900 dark:text-white">{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-medium text-ink-800 dark:text-ink-100">{label}</div>
      {small && (
        <div className="mt-0.5 text-xs uppercase tracking-[0.18em] text-ink-500 dark:text-ink-300">
          {small}
        </div>
      )}
    </motion.div>
  );
}
