import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const certs = [
  { name: "IBM Machine Learning Certification", org: "IBM" },
  { name: "IBM Generative AI", org: "IBM" },
  { name: "Google TensorFlow", org: "Google" },
  { name: "Tata iQ GenAI Simulation", org: "Tata iQ" },
  { name: "JP Morgan Simulation", org: "JP Morgan" },
  { name: "Coursera Machine Learning", org: "Coursera" },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="// credentials"
          title={<>Verified <span className="neon-text">certifications</span></>}
          subtitle="Continuous learning across leading AI/ML programs."
        />
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl glass p-5 transition-all hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--neon)]/20 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-[var(--neon)]/20 to-[var(--electric)]/20 text-[var(--neon)] ring-1 ring-[var(--neon)]/30 group-hover:shadow-[0_0_20px_var(--neon)]">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.25em] text-[var(--cyan-glow)]">{c.org.toUpperCase()}</div>
                  <h3 className="mt-1 text-base font-semibold leading-tight">{c.name}</h3>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-5 -bottom-px h-px bg-gradient-to-r from-transparent via-[var(--neon)]/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
