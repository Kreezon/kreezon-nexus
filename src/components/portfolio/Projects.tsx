import { motion } from "framer-motion";
import { Github, ExternalLink, Play } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    name: "Teplur",
    tag: "AI Text Detector",
    desc: "Detects AI-generated text using transformer-based classifiers and statistical signal analysis with a clean, instant-feedback interface.",
    stack: ["Python", "PyTorch", "Hugging Face", "FastAPI"],
    github: "#",
    demo: "#",
  },
  {
    name: "SkillScan",
    tag: "ATS Resume Analyzer",
    desc: "Parses resumes against job descriptions, scores ATS-friendliness, and recommends keyword-level improvements powered by LLMs.",
    stack: ["LangChain", "LLMs", "Streamlit", "Python"],
    github: "#",
    demo: "#",
  },
  {
    name: "ResearchMind",
    tag: "Multi-Agent AI Research System",
    desc: "Coordinated multi-agent system that plans, retrieves, synthesizes, and writes research reports with citations and reasoning traces.",
    stack: ["LangChain", "RAG", "LLMs", "FastAPI"],
    github: "#",
    demo: "#",
  },
  {
    name: "Cine AI",
    tag: "Movie Recommender",
    desc: "Hybrid recommender combining content embeddings and collaborative signals with a cinematic, taste-aware UI.",
    stack: ["Scikit-learn", "Pandas", "Flask", "NLP"],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="// featured · builds"
          title={<>Projects forged in the <span className="neon-text">AI lab</span></>}
          subtitle="Each project ships with a dedicated cinematic showcase area — drop in your demo video or GIF later."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl glass-strong p-5 transition-all hover:-translate-y-1"
            >
              {/* animated gradient border */}
              <div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-60 transition-opacity group-hover:opacity-100"
                style={{
                  background: "conic-gradient(from var(--angle), transparent 0 60%, var(--neon) 70%, var(--cyan-glow) 80%, var(--electric) 90%, transparent 100%)",
                  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "1px",
                  borderRadius: "inherit",
                }}
              />

              {/* video / media showcase area */}
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-[#070709]">
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-0 bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--electric)_20%,transparent),transparent_70%)]" />
                {/* placeholder for video — replace src with your media */}
                <video
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster=""
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon)] to-[var(--cyan-glow)] text-[#050505] shadow-[0_0_40px_var(--neon)] transition-transform group-hover:scale-110">
                      <Play className="h-6 w-6 fill-current" />
                      <span className="absolute inset-0 animate-ping rounded-full bg-[var(--neon)]/30" />
                    </div>
                    <div className="font-mono text-[10px] tracking-[0.3em] text-[var(--cyan-glow)]">
                      DEMO · MEDIA · SLOT
                    </div>
                  </div>
                </div>
                {/* corner brackets */}
                {[
                  "top-2 left-2 border-t border-l",
                  "top-2 right-2 border-t border-r",
                  "bottom-2 left-2 border-b border-l",
                  "bottom-2 right-2 border-b border-r",
                ].map((c) => (
                  <span key={c} className={`absolute h-4 w-4 ${c} border-[var(--neon)]/70`} />
                ))}
                {/* scan line */}
                <div
                  className="absolute inset-x-0 h-20 animate-scan opacity-60"
                  style={{ background: "linear-gradient(180deg, transparent, color-mix(in oklab, var(--cyan-glow) 25%, transparent), transparent)" }}
                />
              </div>

              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.25em] text-[var(--cyan-glow)]">
                    {String(i + 1).padStart(2, "0")} · {p.tag.toUpperCase()}
                  </div>
                  <h3 className="mt-1 text-2xl font-bold tracking-tight">{p.name}</h3>
                </div>
                <div className="flex gap-2">
                  <a href={p.github} aria-label="GitHub" className="flex h-9 w-9 items-center justify-center rounded-full glass transition-colors hover:text-[var(--neon)] hover:shadow-[0_0_18px_var(--neon)]">
                    <Github className="h-4 w-4" />
                  </a>
                  <a href={p.demo} aria-label="Live Demo" className="flex h-9 w-9 items-center justify-center rounded-full glass transition-colors hover:text-[var(--cyan-glow)] hover:shadow-[0_0_18px_var(--cyan-glow)]">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-foreground/70">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-foreground/75">
                    {s}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
