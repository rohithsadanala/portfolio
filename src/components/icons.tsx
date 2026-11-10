"use client";

import type { SimpleIcon } from "simple-icons";
import {
  siClaude,
  siCursor,
  siDjango,
  siDocker,
  siFastapi,
  siFlask,
  siGooglegemini,
  siHuggingface,
  siJavascript,
  siKubernetes,
  siLangchain,
  siLanggraph,
  siMeta,
  siMilvus,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siNumpy,
  siPandas,
  siPostgresql,
  siPytorch,
  siReact,
  siRedis,
  siScikitlearn,
  siSpringboot,
  siStreamlit,
  siTerraform,
  siTypescript,
  siPython,
} from "simple-icons";

/* ------------------------- brand icon rendering ------------------------- */

/** Renders a simple-icons glyph. `color` overrides the brand hex (used
    when a brand's own color is near-black and would vanish on dark). */
export function BrandIcon({
  icon,
  color,
  className = "h-5 w-5",
}: {
  icon: SimpleIcon;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={color ?? `#${icon.hex}`}
      className={className}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}

/** The official Meta "infinity" logo mark (simple-icons `siMeta`). */
export function MetaLogo({ className = "h-6 w-6" }: { className?: string }) {
  return <BrandIcon icon={siMeta} className={className} />;
}

/** Tech name -> simple-icons glyph. Only technologies on Rohith's resume.
    Brands missing from simple-icons (AWS, Pinecone, FAISS, …) are not
    faked — `TechTile` falls back to a typographic monogram. */
const techIcons: Record<string, { icon: SimpleIcon; color?: string }> = {
  Python: { icon: siPython },
  TypeScript: { icon: siTypescript },
  JavaScript: { icon: siJavascript },
  React: { icon: siReact },
  "Next.js": { icon: siNextdotjs, color: "#ffffff" },
  Docker: { icon: siDocker },
  PostgreSQL: { icon: siPostgresql },
  PyTorch: { icon: siPytorch },
  LangChain: { icon: siLangchain },
  LangGraph: { icon: siLanggraph },
  FastAPI: { icon: siFastapi },
  Kubernetes: { icon: siKubernetes },
  MongoDB: { icon: siMongodb },
  Redis: { icon: siRedis },
  "Hugging Face": { icon: siHuggingface },
  Pandas: { icon: siPandas, color: "#ffffff" },
  NumPy: { icon: siNumpy, color: "#ffffff" },
  "scikit-learn": { icon: siScikitlearn },
  Terraform: { icon: siTerraform },
  Django: { icon: siDjango, color: "#ffffff" },
  Flask: { icon: siFlask },
  "Spring Boot": { icon: siSpringboot },
  "Node.js": { icon: siNodedotjs },
  "Claude Code": { icon: siClaude },
  Cursor: { icon: siCursor, color: "#ffffff" },
  Streamlit: { icon: siStreamlit },
  Milvus: { icon: siMilvus },
  "Google Gemini": { icon: siGooglegemini },
};

export function techIconFor(name: string) {
  return techIcons[name] ?? null;
}

/** A tile with the brand glyph, or a typographic monogram when the brand
    has no simple-icons glyph (never fake logo art). */
export function TechTile({
  name,
  size = "md",
}: {
  name: string;
  size?: "sm" | "md";
}) {
  const entry = techIconFor(name);
  const box =
    size === "sm"
      ? "h-8 w-8 rounded-lg"
      : "h-11 w-11 rounded-xl";
  const iconCls = size === "sm" ? "h-4 w-4" : "h-6 w-6";
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center border border-white/10 bg-white/5 ${box}`}
      title={name}
    >
      {entry ? (
        <BrandIcon icon={entry.icon} color={entry.color} className={iconCls} />
      ) : (
        <span className="font-mono text-[11px] font-bold tracking-tight text-zinc-200">
          {name.slice(0, 2).toUpperCase()}
        </span>
      )}
    </span>
  );
}

/* ------------------------------ UI icons -------------------------------- */

export function GitHubIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function MailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function MapPinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function DownloadIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

export function ArrowUpRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

export function ArrowUpIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

export function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
