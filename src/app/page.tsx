import type { ReactNode } from "react";

/* ---------------------------------- data ---------------------------------- */

const GITHUB = "https://github.com/rohithsadanala";
const LINKEDIN = "https://www.linkedin.com/in/rohithsadanala1/";
const EMAIL = "rohithsadanala1@gmail.com";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

type FeaturedProject = {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  eval: { label: string; value: string }[];
  evalNote: string;
  tech: string[];
  repo: string;
};

const featuredProjects: FeaturedProject[] = [
  {
    name: "Enterprise Knowledge Intelligence",
    tagline: "Advanced RAG over enterprise documents",
    description:
      "An advanced RAG system that answers questions over enterprise documents — with hybrid retrieval, cross-encoder reranking, LangGraph query planning, and citations on every answer.",
    features: [
      "Hybrid retrieval: BM25 keyword search + FAISS dense vectors, fused by Reciprocal Rank Fusion",
      "Cross-encoder reranker re-scores the fused candidates",
      "LangGraph planner classifies the question, rewrites it, and picks retrieval depth",
      "LangChain generation answers only from retrieved context, with [n] citations on every claim",
      "Eval harness: Precision@k / Recall@k / MRR / faithfulness",
      "FastAPI + CLI + single-page UI; runs fully offline by default",
    ],
    eval: [
      { label: "Precision@5", value: "0.875" },
      { label: "Recall@5", value: "1.000" },
      { label: "MRR", value: "0.938" },
      { label: "Faithfulness", value: "1.000" },
    ],
    evalNote:
      "8-question eval set, offline providers (fake embeddings + mock LLM), Nov 9, 2026.",
    tech: ["Python", "FastAPI", "LangChain", "LangGraph", "FAISS", "BM25", "DeepEval", "Docker"],
    repo: `${GITHUB}/enterprise-knowledge-intelligence`,
  },
  {
    name: "AI Code Review Agent",
    tagline: "Agentic PR review with exact citations",
    description:
      "An AI-powered code review agent that reviews pull requests and code diffs and posts actionable, specific review comments — with exact file + line citations, severities, and a verdict.",
    features: [
      "Dependency-free unified-diff parser tracking exact new-file line numbers",
      "LangChain per-hunk review: bugs, security, performance, style, testing, maintainability",
      "Repo-context RAG: hybrid BM25 + FAISS over the codebase before reviewing each hunk",
      "LangGraph pipeline: parse → gather context → review → dedupe → render",
      "GitHub mode posts the report as a PR review (inline comments + verdict)",
      "FastAPI + CLI + single-page UI; runs fully offline by default",
    ],
    eval: [
      { label: "Precision", value: "1.000" },
      { label: "Recall", value: "1.000" },
      { label: "F1", value: "1.000" },
      { label: "False-positive rate", value: "0.000" },
      { label: "Citation accuracy", value: "1.000" },
    ],
    evalNote:
      "4-case eval set. The set is tuned for the mock LLM's deterministic rules, so these numbers measure the rule engine, not a generative model's judgement.",
    tech: ["Python", "FastAPI", "LangChain", "LangGraph", "FAISS", "GitHub API", "Docker"],
    repo: `${GITHUB}/ai-code-review-agent`,
  },
];

const moreProjects = [
  {
    name: "llm-health",
    description:
      "MedicalAGI — an exploratory multi-agent virtual hospital framework for AI-driven diagnosis and management.",
    tech: ["Python", "Multi-agent systems"],
    repo: `${GITHUB}/llm-health`,
  },
  {
    name: "AI-healthcare",
    description:
      "NAVATAR-Helper — a bilingual (Norwegian/English) RAG chatbot for health-related NEET queries, with source attribution.",
    tech: ["Python", "LangChain", "Milvus", "Streamlit"],
    repo: `${GITHUB}/AI-healthcare`,
  },
  {
    name: "PromptForge",
    description:
      "A prompt engineering toolkit for designing, testing, and optimizing LLM prompts.",
    tech: ["React", "Python", "LangChain", "OpenAI API"],
    repo: `${GITHUB}/PromptForge`,
  },
  {
    name: "StockBot",
    description:
      "An AI-powered stock analysis assistant — portfolio sync, ticker sentiment chat, and price alerts.",
    tech: ["Python", "Streamlit", "Google Gemini"],
    repo: `${GITHUB}/StockBot`,
  },
];

const experience = [
  {
    company: "Meta",
    role: "Software Engineer",
    dates: "Aug 2026 – Present",
    location: "Remote",
    summary: "LLM evaluation systems and tool-calling agents.",
  },
  {
    company: "micro1",
    role: "Artificial Intelligence Engineer",
    dates: "May 2025 – Jul 2026",
    location: "Remote",
    summary: "LangChain agents and forward-deployed AI work.",
  },
  {
    company: "ColomboAI",
    role: "Agentic Engineer",
    dates: "Jan 2026 – Mar 2026",
    location: "",
    summary: "Agentic RAG research and development.",
  },
  {
    company: "Zoron IT Solutions",
    role: "Full Stack Engineer",
    dates: "Jan 2022 – Jul 2023",
    location: "India (On-site)",
    summary: "Python full-stack engineering and frontend development.",
  },
];

const skillGroups: { group: string; skills: string[] }[] = [
  {
    group: "AI & LLM",
    skills: [
      "LangChain",
      "LangGraph",
      "LangSmith",
      "DeepEval",
      "LlamaIndex",
      "CrewAI",
      "Hugging Face Transformers",
      "PyTorch",
      "scikit-learn",
      "Multi-agent systems",
      "MCP",
      "Guardrails",
    ],
  },
  { group: "Languages", skills: ["Python", "Java (Spring Boot)", "TypeScript"] },
  { group: "Backend", skills: ["FastAPI", "Django", "Flask"] },
  { group: "Frontend", skills: ["React", "Next.js"] },
  {
    group: "Data & Search",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Pinecone",
      "FAISS",
      "pgvector",
      "ChromaDB",
      "Pandas",
      "NumPy",
    ],
  },
  { group: "Infrastructure", skills: ["Docker", "Kubernetes", "Terraform", "AWS"] },
  { group: "Tools", skills: ["Claude Code", "Cursor", "Authentication"] },
];

const certifications = [
  {
    name: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
  },
  {
    name: "Databricks Advanced Machine Learning Operations",
    issuer: "Databricks",
  },
  {
    name: "Databricks Data Preparation for Machine Learning",
    issuer: "Databricks",
  },
];

/* ---------------------------------- icons --------------------------------- */

function GitHubIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function MailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function DownloadIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function ArrowUpRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

/* -------------------------------- components ------------------------------- */

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-xs font-medium text-zinc-300">
      {children}
    </span>
  );
}

/* ----------------------------------- page ---------------------------------- */

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 sm:px-8">
      {/* Nav */}
      <header className="sticky top-0 z-10 -mx-5 border-b border-zinc-800/80 bg-zinc-950/85 px-5 backdrop-blur sm:-mx-8 sm:px-8">
        <nav className="flex h-16 items-center justify-between">
          <a href="#top" className="text-lg font-bold tracking-tight text-zinc-50">
            Rohith<span className="text-emerald-400">.</span>
          </a>
          <div className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-zinc-50">
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="/Rohith_Sadanala.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
          >
            <DownloadIcon />
            Résumé
          </a>
        </nav>
      </header>

      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="flex flex-col justify-center py-20 sm:py-28">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to full-time AI / Python full-stack roles
          </p>
          <h1 className="mt-6 text-5xl font-bold leading-none tracking-tight text-zinc-50 sm:text-7xl">
            Rohith Sadanala
          </h1>
          <p className="mt-4 text-xl font-medium text-emerald-400 sm:text-2xl">
            AI Software Engineer · Python Full-Stack
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-400">
            I build AI systems that can be measured — LLM evaluation, agentic
            RAG, and tool-calling agents, backed by Python full-stack
            engineering.
          </p>
          <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-zinc-500">
            <MapPinIcon />
            St. Louis, MO, USA
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
            >
              View Projects
            </a>
            <a
              href="/Rohith_Sadanala.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
            >
              <DownloadIcon />
              Download Résumé
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-zinc-700 p-2.5 text-zinc-300 transition-colors hover:border-zinc-500 hover:bg-zinc-900 hover:text-zinc-50"
            >
              <GitHubIcon />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-zinc-700 p-2.5 text-zinc-300 transition-colors hover:border-zinc-500 hover:bg-zinc-900 hover:text-zinc-50"
            >
              <LinkedInIcon />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              className="rounded-full border border-zinc-700 p-2.5 text-zinc-300 transition-colors hover:border-zinc-500 hover:bg-zinc-900 hover:text-zinc-50"
            >
              <MailIcon />
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 border-t border-zinc-800/80 py-16">
          <SectionHeading eyebrow="About" title="About me" />
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4 text-base leading-relaxed text-zinc-400 md:col-span-2">
              <p>
                I&apos;m a Software Engineer at Meta working on LLM evaluation
                — building systems that measure how well language models and
                agents actually perform. Before that, I built forward-deployed
                LangChain agents at micro1 and agentic RAG systems at
                ColomboAI, on top of a Python full-stack background from Zoron
                IT Solutions.
              </p>
              <p>
                My work centers on making AI systems reliable: evaluation and
                guardrails, retrieval that cites its sources, and tool-calling
                agents that can be tested — plus the APIs and interfaces
                around them.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Education
              </p>
              <p className="mt-3 font-semibold text-zinc-50">
                MS, Computer Science
              </p>
              <p className="mt-1 text-sm text-zinc-400">
                University of South Florida
              </p>
              <p className="mt-1 text-sm text-zinc-500">Aug 2023 – May 2025</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="scroll-mt-24 border-t border-zinc-800/80 py-16">
          <SectionHeading eyebrow="Projects" title="Featured projects" />
          <div className="space-y-8">
            {featuredProjects.map((project) => (
              <article
                key={project.name}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-zinc-50">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-emerald-400">
                      {project.tagline}
                    </p>
                  </div>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 px-3 py-1.5 text-xs font-semibold text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    View on GitHub
                    <ArrowUpRightIcon />
                  </a>
                </div>
                <p className="mt-4 leading-relaxed text-zinc-400">{project.description}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm text-zinc-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    Eval results
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-8 gap-y-3">
                    {project.eval.map((metric) => (
                      <div key={metric.label}>
                        <p className="font-mono text-lg font-bold text-zinc-50">
                          {metric.value}
                        </p>
                        <p className="text-xs text-zinc-500">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-zinc-500">
                    {project.evalNote}
                  </p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <h3 className="mt-14 text-xl font-bold tracking-tight text-zinc-50">
            More projects
          </h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {moreProjects.map((project) => (
              <a
                key={project.name}
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-colors hover:border-zinc-600"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-mono text-lg font-bold text-zinc-50">
                    {project.name}
                  </h4>
                  <ArrowUpRightIcon className="mt-1 h-4 w-4 shrink-0 text-zinc-500 transition-colors group-hover:text-emerald-400" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="scroll-mt-24 border-t border-zinc-800/80 py-16">
          <SectionHeading eyebrow="Experience" title="Work experience" />
          <ol className="relative space-y-10 border-l border-zinc-800 pl-8">
            {experience.map((job) => (
              <li key={job.company} className="relative">
                <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-emerald-400 bg-zinc-950" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold text-zinc-50">
                    {job.role} <span className="font-medium text-zinc-500">·</span>{" "}
                    <span className="text-emerald-400">{job.company}</span>
                  </h3>
                  <p className="font-mono text-sm text-zinc-500">{job.dates}</p>
                </div>
                {job.location && (
                  <p className="mt-0.5 text-sm text-zinc-500">{job.location}</p>
                )}
                <p className="mt-2 text-zinc-400">{job.summary}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24 border-t border-zinc-800/80 py-16">
          <SectionHeading eyebrow="Skills" title="Skills & tools" />
          <div className="space-y-8">
            {skillGroups.map((group) => (
              <div key={group.group}>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                  {group.group}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="scroll-mt-24 border-t border-zinc-800/80 py-16">
          <SectionHeading eyebrow="Certifications" title="Certifications" />
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5"
              >
                <p className="font-semibold leading-snug text-zinc-50">{cert.name}</p>
                <p className="mt-1.5 text-sm text-zinc-500">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 border-t border-zinc-800/80 py-16">
          <SectionHeading eyebrow="Contact" title="Get in touch" />
          <p className="max-w-xl leading-relaxed text-zinc-400">
            I&apos;m open to full-time AI / Python full-stack roles. If
            you&apos;re hiring for LLM evaluation, agentic RAG, or
            tool-calling agents, I&apos;d love to talk.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
            >
              <MailIcon className="h-4 w-4" />
              {EMAIL}
            </a>
            <a
              href="/Rohith_Sadanala.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
            >
              <DownloadIcon />
              Download Résumé
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-zinc-700 p-2.5 text-zinc-300 transition-colors hover:border-zinc-500 hover:bg-zinc-900 hover:text-zinc-50"
            >
              <GitHubIcon />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-zinc-700 p-2.5 text-zinc-300 transition-colors hover:border-zinc-500 hover:bg-zinc-900 hover:text-zinc-50"
            >
              <LinkedInIcon />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800/80 py-8 text-center text-sm text-zinc-500">
        © 2026 Rohith Sadanala · Built with Next.js &amp; Tailwind CSS
      </footer>
    </div>
  );
}
