import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-3 z-40 mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all sm:px-5 ${
        scrolled ? "glass-strong neon-glow" : "glass"
      }`}
      style={{ width: "calc(100% - 1.5rem)" }}
    >
      <a href="#top" className="flex items-center gap-2">
        <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[var(--neon)] to-[var(--electric)] text-[10px] font-black text-[#050505] shadow-[0_0_18px_var(--neon)]">
          SS
        </span>
        <span className="font-mono text-xs tracking-[0.25em] text-foreground/80">
          SHREYAS<span className="text-[var(--neon)]">.</span>AI
        </span>
      </a>
      <nav className="hidden items-center gap-1 md:flex">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="rounded-full px-3 py-1.5 text-sm text-foreground/70 transition-colors hover:bg-white/5 hover:text-foreground"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <a href="#contact" className="btn-neon !px-3.5 !py-1.5 text-xs sm:text-sm">
        Hire Me
      </a>
    </motion.header>
  );
}
