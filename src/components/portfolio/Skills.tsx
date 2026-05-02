import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const groups: { title: string; items: { name: string; level: number }[] }[] = [
  {
    title: "Machine Learning",
    items: [
      { name: "Scikit-learn", level: 92 },
      { name: "TensorFlow", level: 88 },
      { name: "PyTorch", level: 86 },
      { name: "NLP", level: 84 },
    ],
  },
  {
    title: "Generative AI",
    items: [
      { name: "LLMs", level: 90 },
      { name: "RAG Pipelines", level: 88 },
      { name: "LangChain", level: 86 },
      { name: "Hugging Face", level: 84 },
    ],
  },
  {
    title: "Frameworks & Backend",
    items: [
      { name: "FastAPI", level: 88 },
      { name: "Flask", level: 84 },
      { name: "Streamlit", level: 90 },
      { name: "SQL", level: 82 },
    ],
  },
  {
    title: "Programming",
    items: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 78 },
      { name: "C++", level: 70 },
      { name: "TypeScript", level: 72 },
    ],
  },
  {
    title: "Deployment & Cloud",
    items: [
      { name: "Docker", level: 84 },
      { name: "AWS", level: 78 },
      { name: "CI/CD", level: 75 },
      { name: "Linux", level: 82 },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", level: 92 },
      { name: "VS Code", level: 96 },
      { name: "Jupyter", level: 92 },
      { name: "Postman", level: 80 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="// skills · stack"
          title={<>Tools that power my <span className="neon-text">neural toolkit</span></>}
          subtitle="A curated stack spanning classical ML, modern generative AI, and production engineering."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: gi * 0.06 }}
              className="group relative rounded-2xl glass p-6 transition-all hover:bg-white/[0.05]"
            >
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-base font-semibold tracking-tight">{g.title}</h3>
                <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--cyan-glow)]">
                  {String(gi + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="space-y-3.5">
                {g.items.map((s, i) => (
                  <li key={s.name}>
                    <div className="mb-1.5 flex items-center justify-between text-xs">
                      <span className="text-foreground/85">{s.name}</span>
                      <span className="font-mono text-foreground/55">{s.level}%</span>
                    </div>
                    <div className="relative h-1.5 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-[var(--neon)] via-[var(--cyan-glow)] to-[var(--electric)] shadow-[0_0_10px_var(--neon)]"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* tech marquee */}
        <div className="relative mt-14 overflow-hidden rounded-2xl glass py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#050505] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#050505] to-transparent" />
          <div className="flex w-max gap-8 animate-marquee whitespace-nowrap pl-8">
            {[...Array(2)].flatMap((_, i) =>
              ["Python", "TensorFlow", "PyTorch", "LangChain", "Hugging Face", "FastAPI", "Docker", "AWS", "Streamlit", "Scikit-learn", "RAG", "LLMs", "NLP", "SQL", "Git", "Flask"].map(
                (t) => (
                  <span key={`${i}-${t}`} className="font-mono text-sm tracking-wider text-foreground/50">
                    <span className="mr-2 text-[var(--neon)]">◆</span>{t}
                  </span>
                ),
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
