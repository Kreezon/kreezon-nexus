import { createFileRoute } from "@tanstack/react-router";
import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Quote } from "@/components/portfolio/Quote";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Shreyas Srivastava — AI & Machine Learning Engineer" },
      { name: "description", content: "Portfolio of Shreyas Srivastava — AI/ML engineer specializing in LLMs, RAG pipelines, and intelligent applications." },
      { property: "og:title", content: "Shreyas Srivastava — AI & ML Engineer" },
      { property: "og:description", content: "Futuristic AI/ML portfolio: projects, skills, and research-grade builds." },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <LoadingScreen />
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Quote />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
