"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { EMAIL, GITHUB, LINKEDIN, experience, rotatingRoles, stats } from "../data";
import { BrandIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon, MetaLogo, techIconFor } from "./icons";
import { Counter, staggerChild, staggerParent } from "./motion";

/* ------------------------------ hero ------------------------------ */

const floatingChips = [
  { label: "Python", top: "6%", left: "-4%", delay: 0 },
  { label: "LangChain", top: "22%", right: "-6%", delay: 0.6 },
  { label: "FastAPI", top: "58%", left: "-10%", delay: 1.1 },
  { label: "React", bottom: "4%", right: "2%", delay: 0.3 },
];

function RotatingRole() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % rotatingRoles.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-block min-h-[1.4em] align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={rotatingRoles[index]}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-400 bg-clip-text text-transparent"
        >
          {rotatingRoles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // Subtle parallax: portrait drifts down, aurora drifts up and fades.
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 90]);
  const auroraY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -70]);
  const auroraOpacity = useTransform(scrollYProgress, [0, 0.75], [1, reduceMotion ? 1 : 0.15]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-svh flex-col justify-center overflow-hidden pb-20 pt-32 sm:pt-36"
    >
      {/* richer aurora background — emerald, cyan, deep violet, amber */}
      <motion.div
        aria-hidden="true"
        style={{ y: auroraY, opacity: auroraOpacity }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="aurora-blob absolute -top-40 left-[4%] h-[520px] w-[520px] rounded-full bg-emerald-500/30 blur-[120px]" />
        <div className="aurora-blob-slow absolute top-16 right-[-4%] h-[460px] w-[460px] rounded-full bg-cyan-500/25 blur-[120px]" />
        <div className="aurora-blob absolute bottom-[-10%] left-[30%] h-[420px] w-[420px] rounded-full bg-violet-600/30 blur-[120px]" />
        <div className="aurora-blob-slow absolute bottom-[8%] right-[12%] h-[320px] w-[320px] rounded-full bg-amber-500/20 blur-[110px]" />
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]" />
      </motion.div>

      <motion.div
        variants={staggerParent}
        initial="hidden"
        animate="show"
        className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10"
      >
        {/* copy */}
        <div>
          <motion.p
            variants={staggerChild}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to full-time AI / Python full-stack roles
          </motion.p>

          <motion.h1
            variants={staggerChild}
            className="mt-7 text-7xl font-bold leading-[0.95] tracking-tight text-white sm:text-8xl lg:text-[8rem]"
          >
            Rohith
            <br />
            <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
              Sadanala
            </span>
          </motion.h1>

          <motion.p variants={staggerChild} className="mt-6 text-2xl font-semibold sm:text-3xl">
            <RotatingRole />
          </motion.p>

          <motion.p
            variants={staggerChild}
            className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
          >
            I build AI systems that can be measured — LLM evaluation, agentic
            RAG, and tool-calling agents, backed by Python full-stack
            engineering.
          </motion.p>

          <motion.p
            variants={staggerChild}
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-zinc-500"
          >
            <MapPinIcon />
            St. Louis, MO, USA
          </motion.p>

          <motion.div variants={staggerChild} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              View Projects
            </a>
            <a
              href="/Rohith_Sadanala.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
            >
              <DownloadIcon />
              Download Résumé
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/15 bg-white/5 p-3 text-zinc-300 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
            >
              <GitHubIcon />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/15 bg-white/5 p-3 text-zinc-300 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
            >
              <LinkedInIcon />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              className="rounded-full border border-white/15 bg-white/5 p-3 text-zinc-300 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-white/30 hover:text-white"
            >
              <MailIcon />
            </a>
          </motion.div>
        </div>

        {/* portrait — larger, with parallax drift */}
        <motion.div
          variants={staggerChild}
          style={{ y: portraitY }}
          className="relative mx-auto w-full max-w-[440px]"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-emerald-400/50 via-cyan-400/30 to-violet-500/50 opacity-80 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 shadow-2xl shadow-black/60">
            <Image
              src="/photos/portrait-professional.jpg"
              alt="Rohith Sadanala — professional headshot"
              width={512}
              height={512}
              priority
              className="aspect-square w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent px-6 pb-5 pt-16">
              <p className="text-base font-semibold text-white">Rohith Sadanala</p>
              <p className="text-sm text-zinc-300">AI Software Engineer · St. Louis, MO</p>
            </div>
          </div>

          {/* floating tech chips */}
          {floatingChips.map((chip) => (
            <motion.span
              key={chip.label}
              style={{ top: chip.top, left: chip.left, right: chip.right, bottom: chip.bottom }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, delay: chip.delay, ease: "easeInOut" }}
              className="absolute hidden items-center gap-2 rounded-full border border-white/15 bg-[#0b1020]/90 px-3.5 py-2 text-xs font-semibold text-zinc-100 shadow-lg shadow-black/40 backdrop-blur sm:inline-flex"
            >
              {(() => {
                const entry = techIconFor(chip.label);
                return entry ? (
                  <BrandIcon icon={entry.icon} color={entry.color} className="h-4 w-4" />
                ) : null;
              })()}
              {chip.label}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* stats */}
      <motion.dl
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur"
          >
            <dt className="sr-only">{stat.label}</dt>
            <dd className="font-mono text-3xl font-bold text-white">
              <Counter value={stat.value} suffix={stat.suffix} />
            </dd>
            <dd className="mt-1 text-sm text-zinc-400">{stat.label}</dd>
          </div>
        ))}
      </motion.dl>

      {/* scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500 transition-colors hover:text-zinc-300 sm:flex"
      >
        Scroll to explore
        <span className="animate-bounce text-emerald-400">↓</span>
      </motion.a>
    </section>
  );
}

/* --------------------------- worked-with strip --------------------------- */

export function WorkedWith() {
  return (
    <section aria-label="Worked with" className="border-y border-white/10 bg-white/[0.02] py-8">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
        Worked with
      </p>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {experience.map((job) => (
          <span
            key={job.company}
            className="flex items-center gap-2.5 opacity-70 transition-opacity hover:opacity-100"
          >
            {job.mark === "logo" ? (
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                <MetaLogo className="h-5 w-5" />
              </span>
            ) : (
              <span className="flex h-9 items-center rounded-lg border border-white/10 bg-white/5 px-3 font-mono text-sm font-bold tracking-tight text-zinc-100">
                {job.company === "Zoron IT Solutions" ? "Zoron" : job.company}
              </span>
            )}
            <span className="text-base font-semibold text-zinc-200">{job.company}</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ tech marquee ----------------------------- */

const marqueeTech = [
  "Python",
  "LangChain",
  "LangGraph",
  "FastAPI",
  "React",
  "Next.js",
  "TypeScript",
  "Docker",
  "Kubernetes",
  "AWS",
  "PostgreSQL",
  "PyTorch",
  "MongoDB",
  "Redis",
  "Hugging Face",
  "Pandas",
  "scikit-learn",
  "Terraform",
];

function MarqueeRow() {
  return (
    <div className="flex shrink-0 items-center">
      {marqueeTech.map((tech) => {
        const entry = techIconFor(tech);
        return (
          <span key={tech} className="mx-5 flex items-center gap-2.5 text-sm font-semibold text-zinc-300">
            {entry ? (
              <BrandIcon icon={entry.icon} color={entry.color} className="h-5 w-5" />
            ) : (
              <span className="h-2 w-2 rotate-45 bg-emerald-400/80" />
            )}
            {tech}
          </span>
        );
      })}
    </div>
  );
}

export function TechMarquee() {
  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-b border-white/10 py-5 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
    >
      <div className="marquee flex w-max">
        <MarqueeRow />
        <MarqueeRow />
      </div>
    </div>
  );
}
