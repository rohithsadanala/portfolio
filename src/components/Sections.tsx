"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  EMAIL,
  GITHUB,
  LINKEDIN,
  certifications,
  experience,
  exploring,
  featuredProjects,
  moreProjects,
  skillGroups,
  yearsOfExperience,
  type FeaturedProject,
} from "../data";
import {
  ArrowUpRightIcon,
  CheckIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MetaLogo,
  TechTile,
} from "./icons";
import { Reveal, SectionHeading, staggerChild, staggerParent } from "./motion";

/* --------------------------------- shared -------------------------------- */

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
      {children}
    </span>
  );
}

/* --------------------------------- about --------------------------------- */

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-28">
      <SectionHeading index="01" eyebrow="About" title="About me" />
      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="space-y-4 text-base leading-relaxed text-zinc-400 lg:col-span-3">
          <p>
            I&apos;m a Software Engineer at Meta working on LLM evaluation —
            building systems that measure how well language models and agents
            actually perform. Before that, I built forward-deployed LangChain
            agents at micro1 and agentic RAG systems at ColomboAI, on top of
            a Python full-stack background from Zoron IT Solutions.
          </p>
          <p>
            My work centers on making AI systems reliable: evaluation and
            guardrails, retrieval that cites its sources, and tool-calling
            agents that can be tested — plus the APIs and interfaces around
            them.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
            <div className="overflow-hidden">
              <Image
                src="/photos/usf-campus.jpg"
                alt="Rohith Sadanala sitting in front of the University of South Florida sign"
                width={1320}
                height={990}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Education
              </p>
              <p className="mt-2 font-semibold text-white">MS, Computer Science</p>
              <p className="mt-0.5 text-sm text-zinc-400">University of South Florida</p>
              <p className="mt-0.5 text-sm text-zinc-500">Aug 2023 – May 2025</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ statement band ----------------------------- */

export function StatementBand() {
  return (
    <section aria-label="Statement" className="relative overflow-hidden border-y border-white/10 py-24 sm:py-32 lg:-mx-16 xl:-mx-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-[100px]"
      />
      <Reveal className="relative">
        <p className="text-center font-mono text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
          The short version
        </p>
        <p className="mx-auto mt-6 max-w-4xl text-center text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl">
          I build{" "}
          <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
            AI systems
          </span>{" "}
          that answer with{" "}
          <span className="bg-gradient-to-r from-amber-300 to-emerald-300 bg-clip-text text-transparent">
            evidence.
          </span>
        </p>
        <p className="mx-auto mt-5 max-w-xl text-center text-base leading-relaxed text-zinc-400">
          Every answer cited. Every agent tested. Every claim measured.
        </p>
      </Reveal>
    </section>
  );
}

/* -------------------------------- projects ------------------------------- */

function FeaturedCard({ project }: { project: FeaturedProject }) {
  const [open, setOpen] = useState(false);
  const steps = [
    { label: "The problem", text: project.reveal.problem },
    { label: "What I built", text: project.reveal.built },
    { label: "What it does", text: project.reveal.does },
  ];
  return (
    <motion.article
      variants={staggerChild}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-colors hover:border-emerald-400/40 hover:shadow-2xl hover:shadow-emerald-500/10 sm:p-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px -z-10 rounded-[2rem] bg-gradient-to-br from-emerald-500/15 via-transparent to-violet-500/15 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {project.name}
          </h3>
          <p className="mt-2 text-base font-medium text-emerald-400">{project.tagline}</p>
        </div>
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-semibold text-zinc-100 transition-colors hover:border-emerald-400/50 hover:text-emerald-300"
        >
          <GitHubIcon className="h-4 w-4" />
          View on GitHub
          <ArrowUpRightIcon />
        </a>
      </div>
      <p className="mt-5 text-lg leading-relaxed text-zinc-400">{project.description}</p>
      <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
        {project.features.map((feature) => (
          <li key={feature} className="flex gap-2 text-sm leading-relaxed text-zinc-400">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
            {feature}
          </li>
        ))}
      </ul>

      {/* reveal: problem → built → does */}
      <div className="mt-7">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300 transition-all hover:-translate-y-0.5 hover:bg-emerald-400/20"
        >
          {open ? "Hide the story" : "How it works — the problem, the build, the result"}
          <span
            className={`inline-block transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          >
            ↓
          </span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <ol className="mt-5 space-y-4 border-l-2 border-emerald-400/30 pl-5">
                {steps.map((step, i) => (
                  <li key={step.label}>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                      {String(i + 1).padStart(2, "0")} · {step.label}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">{step.text}</p>
                  </li>
                ))}
              </ol>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-7 rounded-2xl border border-white/10 bg-black/40 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Eval results
        </p>
        <div className="mt-3 flex flex-wrap gap-x-8 gap-y-3">
          {project.eval.map((metric) => (
            <div key={metric.label}>
              <p className="font-mono text-xl font-bold text-white">{metric.value}</p>
              <p className="text-xs text-zinc-500">{metric.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs leading-relaxed text-zinc-500">{project.evalNote}</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-white/10 py-24 sm:py-28">
      <SectionHeading
        index="02"
        eyebrow="Projects"
        title="Featured projects"
        sub="What if your documents could answer back? Two open-source AI systems, built end to end — retrieval, evaluation, and agentic review — with the numbers shown exactly as measured."
      />
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="space-y-10 lg:-mx-16 xl:-mx-24"
      >
        {featuredProjects.map((project) => (
          <FeaturedCard key={project.name} project={project} />
        ))}
      </motion.div>

      <h3 className="mt-16 text-xl font-bold tracking-tight text-white">More projects</h3>
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-6 grid gap-5 sm:grid-cols-2"
      >
        {moreProjects.map((project) => (
          <motion.a
            key={project.name}
            variants={staggerChild}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="group block rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-colors hover:border-emerald-400/40"
          >
            <div className="flex items-start justify-between gap-3">
              <h4 className="font-mono text-lg font-bold text-white">{project.name}</h4>
              <ArrowUpRightIcon className="mt-1 h-4 w-4 shrink-0 text-zinc-500 transition-colors group-hover:text-emerald-400" />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

/* ------------------------------- experience ------------------------------ */

function CompanyMark({ company, mark }: { company: string; mark: "logo" | "wordmark" }) {
  if (mark === "logo") {
    return (
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
        <MetaLogo className="h-6 w-6" />
      </span>
    );
  }
  return (
    <span className="flex h-12 shrink-0 items-center rounded-xl border border-white/10 bg-white/5 px-3.5 font-mono text-sm font-bold tracking-tight text-zinc-100">
      {company === "Zoron IT Solutions" ? "Zoron" : company}
    </span>
  );
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-white/10 py-24 sm:py-28">
      <SectionHeading index="03" eyebrow="Experience" title="Work experience" />
      <ol className="relative space-y-6">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.06}>
            <li className="group flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-emerald-400/40 sm:p-6">
              <CompanyMark company={job.company} mark={job.mark} />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">
                    {job.role}{" "}
                    <span className="font-medium text-zinc-500">·</span>{" "}
                    <span className="text-emerald-400">{job.company}</span>
                  </h3>
                  <p className="font-mono text-sm text-zinc-500">{job.dates}</p>
                </div>
                {job.location && <p className="mt-0.5 text-sm text-zinc-500">{job.location}</p>}
                <p className="mt-2 text-zinc-400">{job.summary}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

/* --------------------------------- skills -------------------------------- */

const keyTech = ["Python", "TypeScript", "React", "Next.js", "Docker", "AWS", "PostgreSQL", "PyTorch"];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-white/10 py-24 sm:py-28">
      <SectionHeading
        index="04"
        eyebrow="Skills"
        title="Skills & tools"
        sub="What does it take to make an AI system you can trust? Everything below is on the résumé — no padding, no aspirational entries."
      />

      {/* tech icon grid */}
      <Reveal>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {keyTech.map((tech) => (
            <div
              key={tech}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 transition-colors hover:border-emerald-400/40"
            >
              <TechTile name={tech} />
              <span className="text-sm font-semibold text-zinc-100">{tech}</span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* years of experience bars — factual durations, not ratings */}
      <Reveal className="mt-10">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Years of hands-on experience
        </h3>
        <div className="mt-5 space-y-4">
          {yearsOfExperience.map((row) => (
            <div key={row.skill} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 sm:grid-cols-[220px_1fr_56px]">
              <span className="truncate text-sm font-medium text-zinc-200">{row.skill}</span>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(row.years / 4) * 100}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
                />
              </div>
              <span className="text-right font-mono text-sm text-zinc-400">{row.note}</span>
            </div>
          ))}
          <p className="text-xs text-zinc-500">
            React, TypeScript, AWS, SQL, and Docker / Kubernetes: 3–4 years each.
          </p>
        </div>
      </Reveal>

      {/* skill groups */}
      <div className="mt-10 space-y-8">
        {skillGroups.map((group) => (
          <Reveal key={group.group}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              {group.group}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* --------------------------- currently exploring --------------------------- */

export function Exploring() {
  return (
    <section id="exploring" className="scroll-mt-24 border-t border-white/10 py-24 sm:py-28">
      <SectionHeading
        eyebrow="Currently exploring"
        title="Questions I'm chasing"
        sub="Open questions from my actual work — each one tied to something I built. Click one to see where it leads."
      />
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-5 sm:grid-cols-2"
      >
        {exploring.map((item) => (
          <motion.a
            key={item.question}
            variants={staggerChild}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="group block rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-colors hover:border-violet-400/40 sm:p-7"
          >
            <p className="font-mono text-2xl font-bold text-violet-300">?</p>
            <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight text-white">
              {item.question}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">{item.teaser}</p>
            <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              {item.tag}
              <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

/* --------------------------------- gallery -------------------------------- */

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const leftY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 24, reduceMotion ? 0 : -24]);
  const rightY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : -24, reduceMotion ? 0 : 24]);

  return (
    <section
      id="beyond"
      ref={sectionRef}
      className="scroll-mt-24 border-t border-white/10 py-24 sm:py-28"
    >
      <SectionHeading
        index="05"
        eyebrow="Beyond the code"
        title="Off the clock"
        sub="A little of the person behind the pull requests."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Reveal>
          <motion.figure
            style={{ y: leftY }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
          >
            <div className="overflow-hidden">
              <Image
                src="/photos/portrait-casual.jpg"
                alt="Rohith Sadanala in sunglasses and a floral shirt, outdoors"
                width={1320}
                height={2243}
                className="aspect-[3/4] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-zinc-400">
              Out and about — sunglasses on, curiosity on.
            </figcaption>
          </motion.figure>
        </Reveal>
        <Reveal delay={0.1}>
          <motion.figure
            style={{ y: rightY }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]"
          >
            <div className="overflow-hidden">
              <Image
                src="/photos/portrait-yellow.jpg"
                alt="Rohith Sadanala in a yellow shirt against a green background"
                width={760}
                height={760}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm text-zinc-400">
              Bright days, brighter ideas.
            </figcaption>
          </motion.figure>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ certifications ---------------------------- */

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 border-t border-white/10 py-24 sm:py-28">
      <SectionHeading index="06" eyebrow="Certifications" title="Certifications" />
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-4 sm:grid-cols-2"
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert.name}
            variants={staggerChild}
            whileHover={{ y: -4 }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-colors hover:border-emerald-400/40"
          >
            <p className="font-semibold leading-snug text-white">{cert.name}</p>
            <p className="mt-1.5 text-sm text-zinc-500">{cert.issuer}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* --------------------------------- contact -------------------------------- */

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/10 py-24 sm:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-emerald-400/25 bg-gradient-to-br from-emerald-500/15 via-transparent to-cyan-500/15 p-8 text-center sm:p-12">
          <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 h-56 w-96 -translate-x-1/2 rounded-full bg-emerald-500/25 blur-[90px]" />
          <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Contact
          </p>
          <h2 className="relative mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s build something measurable.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl leading-relaxed text-zinc-400">
            I&apos;m open to full-time AI / Python full-stack roles. If
            you&apos;re hiring for LLM evaluation, agentic RAG, or tool-calling
            agents, I&apos;d love to talk.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/25 transition-all hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              <MailIcon className="h-4 w-4" />
              {EMAIL}
            </a>
            <a
              href="/Rohith_Sadanala.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              <DownloadIcon />
              Download Résumé
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/15 bg-white/5 p-2.5 text-zinc-300 backdrop-blur transition-all hover:-translate-y-0.5 hover:text-white"
            >
              <GitHubIcon />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/15 bg-white/5 p-2.5 text-zinc-300 backdrop-blur transition-all hover:-translate-y-0.5 hover:text-white"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-zinc-500">
      © 2026 Rohith Sadanala · Built with Next.js, Tailwind CSS &amp; Framer Motion
    </footer>
  );
}
