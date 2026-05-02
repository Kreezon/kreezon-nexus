import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Download, FolderGit2, Sparkles, ArrowRight } from "lucide-react";
import { NeuralBackground } from "./NeuralBackground";
import profileImg from "@/assets/shreyas-profile.jpg";

const titles = [
  "Machine Learning Engineer",
  "Generative AI Developer",
  "AI Research Enthusiast",
  "LLM Application Developer",
];

function useTypewriter(words: string[], speed = 70, pause = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = w.slice(0, text.length + 1);
          setText(next);
          if (next === w) setTimeout(() => setDel(true), pause);
        } else {
          const next = w.slice(0, text.length - 1);
          setText(next);
          if (next === "") { setDel(false); setI((v) => v + 1); }
        }
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}

export function Hero() {
  const typed = useTypewriter(titles);

  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="absolute inset-0 -z-10">
        <NeuralBackground density={50} />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--electric)_30%,transparent),transparent)] blur-2xl" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 md:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="eyebrow"
          >
            <Sparkles className="h-3 w-3" /> Available for AI/ML roles · 2026
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-5 text-[2.6rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Shreyas
            <br />
            <span className="neon-text">Srivastava</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="mt-5 font-mono text-sm text-foreground/70 sm:text-base"
          >
            <span className="text-[var(--cyan-glow)]">&gt;</span> {typed}
            <span className="ml-0.5 inline-block h-4 w-2 -translate-y-0.5 bg-[var(--neon)] align-middle animate-blink" />
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg"
          >
            I build <span className="text-foreground">machine learning</span> models and{" "}
            <span className="text-foreground">data-driven applications</span> — exploring the world of AI one project at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-neon">
              <FolderGit2 className="h-4 w-4" /> View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/resume.pdf" className="btn-ghost-neon">
              <Download className="h-4 w-4" /> Download Resume
            </a>
            <a href="#contact" className="btn-ghost-neon">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="mt-8 flex items-center gap-3"
          >
            {[
              { icon: Github, href: "https://github.com/", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:shreyas@example.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="group relative flex h-10 w-10 items-center justify-center rounded-full glass transition-all hover:-translate-y-0.5 hover:text-[var(--neon)] hover:shadow-[0_0_24px_var(--neon)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Profile orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto aspect-square w-[280px] sm:w-[360px] md:w-full md:max-w-[420px]"
        >
          <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,var(--neon),var(--cyan-glow),var(--electric),var(--neon))] opacity-70 blur-2xl spin-angle" />
          <div className="absolute inset-2 rounded-full glass-strong" />
          <div className="absolute inset-2 rounded-full neon-border" />
          <div className="absolute inset-6 overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--neon)_25%,transparent),transparent_70%)]" />
            <div className="grid-bg absolute inset-0 opacity-50" />
            {/* central avatar */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-full w-full">
                <div className="absolute inset-3 overflow-hidden rounded-full ring-2 ring-[var(--neon)]/40 shadow-[0_0_60px_var(--neon)]">
                  <img
                    src={profileImg}
                    alt="Shreyas Srivastava — AI & Machine Learning Engineer"
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]/70" />
                </div>
                <div className="absolute inset-x-0 bottom-6 text-center font-mono text-[10px] tracking-[0.3em] text-[var(--cyan-glow)] drop-shadow-[0_0_8px_var(--cyan-glow)]">
                  NEURAL · CORE · ONLINE
                </div>
              </div>
            </div>
            {/* scanning line */}
            <div
              className="absolute inset-x-0 h-24 animate-scan"
              style={{ background: "linear-gradient(180deg, transparent, color-mix(in oklab, var(--neon) 28%, transparent), transparent)" }}
            />
          </div>
          {/* floating chips */}
          {["LLM", "RAG", "PyTorch", "LangChain"].map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.12 }}
              className="absolute glass rounded-full px-3 py-1 font-mono text-[10px] tracking-wider text-foreground/80 animate-float"
              style={{
                top: `${[8, 22, 70, 84][i]}%`,
                left: `${[-8, 88, -10, 80][i]}%`,
                animationDelay: `${i * 0.6}s`,
              }}
            >
              {t}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* stats */}
      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-3 px-5 sm:grid-cols-4">
        {[
          { k: "10+", v: "AI Projects" },
          { k: "6", v: "Certifications" },
          { k: "15+", v: "Tech Stacks" },
          { k: "∞", v: "Curiosity" },
        ].map((s) => (
          <div key={s.v} className="glass rounded-2xl p-4 text-center">
            <div className="text-2xl font-bold neon-text">{s.k}</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/60">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
