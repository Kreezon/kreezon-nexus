import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    role: "AI & Machine Learning Virtual Intern",
    org: "EduSkills · AICTE (Google-supported Program)",
    period: "2024 – 2025",
    points: [
      "Hands-on training across the modern ML lifecycle: data, models, evaluation, and deployment.",
      "Built mini-projects covering supervised learning, NLP, and intro to generative models.",
      "Collaborated within a Google-curated curriculum focused on industry-grade AI practices.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="// experience · timeline"
          title={<>Where I've trained my <span className="neon-text">neural pathways</span></>}
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[var(--neon)] via-[var(--cyan-glow)]/40 to-transparent sm:left-1/2" />
          {items.map((it, i) => (
            <motion.div
              key={it.role}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="relative mb-10 pl-12 sm:pl-0"
            >
              <span
                className="absolute left-[10px] top-3 h-3 w-3 rounded-full bg-[var(--neon)] shadow-[0_0_18px_var(--neon)] sm:left-1/2 sm:-translate-x-1/2"
              />
              <div className={`sm:w-[48%] ${i % 2 === 0 ? "sm:ml-auto sm:pl-8" : "sm:pr-8"}`}>
                <div className="rounded-2xl glass p-5 transition-all hover:bg-white/[0.06] hover:shadow-[0_0_30px_-10px_var(--neon)]">
                  <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-[var(--cyan-glow)]">
                    <Briefcase className="h-3 w-3" /> {it.period}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{it.role}</h3>
                  <div className="text-sm text-foreground/70">{it.org}</div>
                  <ul className="mt-3 space-y-1.5 text-sm text-foreground/70">
                    {it.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--neon)]" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
