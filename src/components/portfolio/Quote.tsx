import { motion } from "framer-motion";
import { NeuralBackground } from "./NeuralBackground";

export function Quote() {
  return (
    <section className="relative isolate my-12 overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <NeuralBackground density={40} />
        <div className="absolute inset-0 bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--electric)_22%,transparent),transparent_70%)]" />
      </div>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-mono text-[11px] tracking-[0.4em] text-[var(--cyan-glow)]"
        >
          ✦ MANIFESTO ✦
        </motion.div>
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          <span className="text-foreground/40">"</span>
          While others use AI to <span className="neon-text">save time</span>,<br className="hidden sm:block" />
          I use AI to <span className="neon-text">build the future</span>.
          <span className="text-foreground/40">"</span>
        </motion.blockquote>
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--neon)]" />
          <span className="font-mono text-sm text-foreground/70">Shreyas Srivastava</span>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[var(--neon)]" />
        </motion.div>
      </div>
    </section>
  );
}
