import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });
  return (
    <motion.div
      style={{ scaleX: x }}
      className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left"
    >
      <div className="h-full w-full bg-gradient-to-r from-[var(--neon)] via-[var(--cyan-glow)] to-[var(--electric)] shadow-[0_0_18px_var(--neon)]" />
    </motion.div>
  );
}
