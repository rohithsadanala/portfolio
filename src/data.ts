/* All content on this site is resume-verified. Do not add metrics,
   claims, or anecdotes that are not on Rohith's resume. */

export const GITHUB = "https://github.com/rohithsadanala";
export const LINKEDIN = "https://www.linkedin.com/in/rohithsadanala1/";
export const EMAIL = "rohithsadanala1@gmail.com";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Ask me", href: "#ask" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Beyond the code", href: "#beyond" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

/** Rotating hero roles — all resume-verified phrases. */
export const rotatingRoles = [
  "AI Software Engineer",
  "LLM Evaluation",
  "Agentic RAG",
  "Python Full-Stack",
];

export type FeaturedProject = {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  eval: { label: string; value: string }[];
  evalNote: string;
  tech: string[];
  repo: string;
  /** Expandable "reveal" — the problem, what was built, what it does.
      All drawn from the project README; nothing invented. */
  reveal: { problem: string; built: string; does: string };
};

export const featuredProjects: FeaturedProject[] = [
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
    reveal: {
      problem:
        "Enterprise answers are buried in documents. Keyword search misses meaning, and LLM answers arrive with no proof.",
      built:
        "A RAG system that plans each question with LangGraph, retrieves with hybrid BM25 + FAISS fused by Reciprocal Rank Fusion, reranks with a cross-encoder, and generates answers only from retrieved context.",
      does: "Answers questions over PDFs, DOCX, Markdown and text — every claim cited [n] to its source document — with an eval harness measuring precision, recall, MRR and faithfulness. Runs fully offline by default.",
    },
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
    reveal: {
      problem:
        "Code review is slow and inconsistent. Reviewers miss security flaws and style drift, and comments rarely point at the exact line.",
      built:
        "An agent that parses the diff, gathers repository context with hybrid BM25 + FAISS before judging each hunk, reviews with LangChain, and renders a structured report through a LangGraph pipeline.",
      does: "Reviews PRs and diffs for bugs, security, performance, style, testing and maintainability — every finding cites the exact file and line range with a severity and a suggested fix, and posts as a GitHub PR review with a verdict.",
    },
  },
];

export const moreProjects = [
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

export type ExperienceRole = {
  company: string;
  /** "logo" renders the Meta SVG mark; "wordmark" renders a typographic wordmark. */
  mark: "logo" | "wordmark";
  role: string;
  dates: string;
  location: string;
  summary: string;
};

export const experience: ExperienceRole[] = [
  {
    company: "Meta",
    mark: "logo",
    role: "Software Engineer",
    dates: "Aug 2026 – Present",
    location: "Remote",
    summary: "LLM evaluation systems and tool-calling agents.",
  },
  {
    company: "micro1",
    mark: "wordmark",
    role: "Artificial Intelligence Engineer",
    dates: "May 2025 – Jul 2026",
    location: "Remote",
    summary: "LangChain agents and forward-deployed AI work.",
  },
  {
    company: "ColomboAI",
    mark: "wordmark",
    role: "Agentic Engineer",
    dates: "Jan 2026 – Mar 2026",
    location: "",
    summary: "Agentic RAG research and development.",
  },
  {
    company: "Zoron IT Solutions",
    mark: "wordmark",
    role: "Full Stack Engineer",
    dates: "Jan 2022 – Jul 2023",
    location: "India (On-site)",
    summary: "Python full-stack engineering and frontend development.",
  },
];

export const skillGroups: { group: string; skills: string[] }[] = [
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

/** Years of hands-on experience, as stated by Rohith. Used for the
    animated "years of experience" bars — these are facts, not ratings. */
export const yearsOfExperience: { skill: string; years: number; note: string }[] = [
  { skill: "Python", years: 4, note: "4 yrs" },
  { skill: "Java", years: 4, note: "4 yrs" },
  { skill: "Node.js", years: 3, note: "3 yrs" },
  { skill: "JavaScript", years: 3, note: "3 yrs" },
  { skill: "LLM API / RAG / agent integration", years: 3, note: "3 yrs" },
  { skill: "Spring AI", years: 3, note: "3 yrs" },
];

/** Factual stats for the animated counters. */
export const stats = [
  { value: 4, suffix: "", label: "Years of Python experience" },
  { value: 3, suffix: "", label: "Years building LLM / RAG / agents" },
  { value: 2, suffix: "", label: "Flagship AI systems shipped open-source" },
  { value: 4, suffix: "", label: "Professional certifications" },
];

export const certifications = [
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

/** The big statement band — a fair summary of the RAG work, not a claim. */
export const statementLine = "I build AI systems that answer with evidence.";

/**
 * "Ask about my work" — pre-written answers only, drawn from the résumé
 * and project READMEs. No LLM calls, no fake live AI.
 */
export const askQuestions: { question: string; answer: string }[] = [
  {
    question: "What did you build at Meta?",
    answer:
      "At Meta I work on LLM evaluation — systems that measure how well language models and tool-calling agents actually perform.",
  },
  {
    question: "How does your RAG system work?",
    answer:
      "Enterprise Knowledge Intelligence plans each question with LangGraph, retrieves with hybrid BM25 + FAISS fused by Reciprocal Rank Fusion, reranks with a cross-encoder, and answers only from retrieved context — every claim cited [n] to its source document.",
  },
  {
    question: "What is the Code Review Agent?",
    answer:
      "An agent that reviews pull requests: it parses the diff, gathers repo context with RAG, reviews each hunk for bugs, security, performance, style, testing and maintainability, then posts findings with exact file + line citations, severities, and a verdict.",
  },
  {
    question: "What are you best at?",
    answer:
      "Python (4 years) and LLM / RAG / agent integration (3 years) — building AI systems that can be measured: evaluation, guardrails, and retrieval that cites its sources.",
  },
  {
    question: "Where did you study?",
    answer:
      "MS in Computer Science at the University of South Florida, Aug 2023 – May 2025.",
  },
  {
    question: "What roles are you looking for?",
    answer:
      "Full-time AI / Python full-stack roles — LLM evaluation, agentic RAG, and tool-calling agents. Open to remote, hybrid, on-site, and relocation.",
  },
];

/**
 * "Currently exploring" — open questions from Rohith's actual work.
 * Each hook is tied to a real project or role, not invented research.
 */
export const exploring: { question: string; teaser: string; tag: string; href: string }[] = [
  {
    question: "How do you make an agent cite its sources?",
    teaser:
      "Every answer in Enterprise Knowledge Intelligence carries [n] citations to its source document — never presented without provenance.",
    tag: "Enterprise Knowledge Intelligence",
    href: `${GITHUB}/enterprise-knowledge-intelligence`,
  },
  {
    question: "Can a review agent catch what a human misses?",
    teaser:
      "The Code Review Agent checks every hunk for bugs, security, performance, style, testing and maintainability — with exact line citations.",
    tag: "AI Code Review Agent",
    href: `${GITHUB}/ai-code-review-agent`,
  },
  {
    question: "How do you measure an LLM fairly?",
    teaser:
      "LLM evaluation at Meta: systems that measure how well models and tool-calling agents actually perform.",
    tag: "Meta · LLM evaluation",
    href: "#experience",
  },
  {
    question: "What makes a tool-calling agent testable?",
    teaser:
      "LangChain + LangGraph agents with evaluation and guardrails — built at micro1 and ColomboAI.",
    tag: "micro1 · ColomboAI",
    href: "#experience",
  },
];
