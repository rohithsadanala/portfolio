"use client";

import { BackToTop, Navbar } from "../components/Navbar";
import { Hero, TechMarquee, WorkedWith } from "../components/Hero";
import { AskWidget } from "../components/AskWidget";
import {
  About,
  Certifications,
  Contact,
  Experience,
  Exploring,
  Footer,
  Gallery,
  Projects,
  Skills,
  StatementBand,
} from "../components/Sections";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-clip bg-[#060913] text-zinc-200">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <Hero />
      </main>
      <WorkedWith />
      <TechMarquee />
      <main className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <About />
        <StatementBand />
        <Projects />
        <AskWidget />
        <Experience />
        <Skills />
        <Exploring />
        <Gallery />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
