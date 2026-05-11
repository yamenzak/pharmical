import { motion } from "framer-motion";

export default function Reveal({
  as: Tag = "div",
  delay = 0,
  y = 24,
  className = "",
  children,
}) {
  const MotionTag = motion[Tag] ?? motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
