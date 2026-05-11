import { motion } from "framer-motion";

export default function SectionLabel({ children, kicker }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3"
    >
      <span className="pill">
        <span className="pill-dot" />
        {kicker}
      </span>
      {children}
    </motion.div>
  );
}
