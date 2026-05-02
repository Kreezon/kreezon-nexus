import { motion } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, Send, MapPin } from "lucide-react";
import { NeuralBackground } from "./NeuralBackground";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <NeuralBackground density={45} />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="// transmit · signal"
          title={<>Let's build something <span className="neon-text">intelligent</span></>}
          subtitle="Open to AI/ML roles, research collaborations, and ambitious side projects."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <a href="mailto:shreyas@example.com" className="flex items-center gap-4 rounded-2xl glass p-5 transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_-10px_var(--neon)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--neon)]/15 text-[var(--neon)] ring-1 ring-[var(--neon)]/30">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.25em] text-[var(--cyan-glow)]">EMAIL</div>
                <div className="text-sm">shreyas@example.com</div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl glass p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--cyan-glow)]/15 text-[var(--cyan-glow)] ring-1 ring-[var(--cyan-glow)]/30">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.25em] text-[var(--cyan-glow)]">LOCATION</div>
                <div className="text-sm">India · Open to remote</div>
              </div>
            </div>
            <div className="rounded-2xl glass p-5">
              <div className="font-mono text-[10px] tracking-[0.25em] text-[var(--cyan-glow)]">SOCIAL · CHANNELS</div>
              <div className="mt-3 flex gap-2">
                {[
                  { icon: Github, href: "https://github.com/", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:shreyas@example.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full glass transition-all hover:text-[var(--neon)] hover:shadow-[0_0_22px_var(--neon)]">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 2400); }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative rounded-3xl glass-strong p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" placeholder="Ada Lovelace" />
              <Field label="Email" name="email" type="email" placeholder="you@domain.com" />
            </div>
            <div className="mt-4">
              <Field label="Subject" name="subject" placeholder="Let's collaborate" />
            </div>
            <div className="mt-4">
              <label className="mb-1.5 block font-mono text-[10px] tracking-[0.25em] text-[var(--cyan-glow)]">MESSAGE</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project, role, or research idea..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all placeholder:text-foreground/40 focus:border-[var(--neon)]/60 focus:bg-white/[0.07] focus:shadow-[0_0_24px_-6px_var(--neon)]"
              />
            </div>
            <button type="submit" className="btn-neon mt-6 w-full justify-center sm:w-auto">
              {sent ? "Signal transmitted ✓" : <>Send Message <Send className="h-4 w-4" /></>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder,
}: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block font-mono text-[10px] tracking-[0.25em] text-[var(--cyan-glow)]">
        {label.toUpperCase()}
      </label>
      <input
        id={name} name={name} type={type} placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-all placeholder:text-foreground/40 focus:border-[var(--neon)]/60 focus:bg-white/[0.07] focus:shadow-[0_0_24px_-6px_var(--neon)]"
      />
    </div>
  );
}
