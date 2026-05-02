import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[var(--neon)] to-[var(--electric)] text-[10px] font-black text-[#050505] shadow-[0_0_18px_var(--neon)]">SS</span>
          <span className="font-mono text-xs tracking-[0.25em] text-foreground/70">SHREYAS<span className="text-[var(--neon)]">.</span>AI</span>
        </div>
        <div className="font-mono text-[11px] tracking-wider text-foreground/50">
          © {new Date().getFullYear()} Shreyas Srivastava · Built with neural intent.
        </div>
        <div className="flex gap-2">
          {[
            { icon: Github, href: "https://github.com/", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:shreyas@example.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-full glass transition-colors hover:text-[var(--neon)] hover:shadow-[0_0_18px_var(--neon)]">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
