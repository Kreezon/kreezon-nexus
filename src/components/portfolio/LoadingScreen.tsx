import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  const [pct, setPct] = useState(0);
  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 18 + 6;
      if (p >= 100) { p = 100; clearInterval(id); setTimeout(() => setShow(false), 350); }
      setPct(Math.min(100, Math.round(p)));
    }, 120);
    return () => clearInterval(id);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#050505]"
        >
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="relative w-[300px] text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--neon)] to-[var(--electric)] font-black text-[#050505] shadow-[0_0_40px_var(--neon)] animate-glow-pulse">
              SS
            </div>
            <div className="font-mono text-[10px] tracking-[0.4em] text-[var(--cyan-glow)]">
              INITIALIZING NEURAL CORE
            </div>
            <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/5">
              <motion.div
                animate={{ width: `${pct}%` }}
                transition={{ ease: "linear" }}
                className="h-full bg-gradient-to-r from-[var(--neon)] via-[var(--cyan-glow)] to-[var(--electric)] shadow-[0_0_12px_var(--neon)]"
              />
            </div>
            <div className="mt-2 font-mono text-[10px] text-foreground/60">{pct}% · loading modules</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
