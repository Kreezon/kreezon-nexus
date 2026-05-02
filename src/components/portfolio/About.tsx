import { motion } from "framer-motion";
import { Brain, Cpu, Sparkles, Target } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const cards = [
  { icon: Brain, title: "Final-year CS Student", desc: "Building a deep foundation in algorithms, systems, and applied mathematics." },
  { icon: Cpu, title: "ML & Generative AI", desc: "Specialized in modern deep learning, LLMs, RAG pipelines, and agentic systems." },
  { icon: Sparkles, title: "LLM Applications", desc: "Designing intelligent products that combine reasoning, retrieval, and tool use." },
  { icon: Target, title: "Real-World Impact", desc: "I love turning research-grade ideas into useful, production-ready software." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="// about"
          title={<>Engineer at the <span className="neon-text">edge of intelligence</span></>}
          subtitle="A final-year Computer Science student passionate about machine learning, generative AI, and crafting intelligent systems that solve real problems."
        />
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group relative rounded-2xl glass p-5 transition-all hover:-translate-y-1 hover:bg-white/[0.06]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--neon)]/20 to-[var(--electric)]/20 text-[var(--neon)] ring-1 ring-[var(--neon)]/30 group-hover:shadow-[0_0_24px_var(--neon)]">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-foreground/65">{c.desc}</p>
              <div className="pointer-events-none absolute inset-x-6 -bottom-px h-px bg-gradient-to-r from-transparent via-[var(--neon)]/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
