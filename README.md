# Rohith Sadanala — Portfolio

Personal portfolio website for Rohith Sadanala, AI Software Engineer
(Python full-stack). A single-page site built with **Next.js 16 (App
Router) + TypeScript + Tailwind CSS v4 + Framer Motion**.

## What's on the site

- **Hero** — full-viewport cinematic hero: giant display type for the
  name (gradient surname), richer aurora (emerald / cyan / deep
  violet / amber) with parallax drift and fade on scroll, staggered
  entrance, rotating role text (AI Software Engineer / LLM Evaluation /
  Agentic RAG / Python Full-Stack), larger professional headshot in a
  gradient frame with floating tech chips, animated stat counters,
  "Scroll to explore" cue
- **Worked with** — Meta (official logo mark), micro1, ColomboAI,
  Zoron IT Solutions
- **Tech marquee** — infinite scrolling strip of the core stack with
  brand icons
- **About** — background + MS Computer Science, University of South
  Florida (Aug 2023 – May 2025), with the USF campus photo
- **Statement band** — one big line of type: "I build AI systems that
  answer with evidence."
- **Projects** — two featured projects (Enterprise Knowledge
  Intelligence, AI Code Review Agent) as full-bleed dramatic cards
  with bigger titles and a "How it works" reveal (The problem → What
  I built → What it does), features, eval results, and tech tags, plus
  four more repos (llm-health, AI-healthcare, PromptForge, StockBot);
  question-style subhead: "What if your documents could answer back?"
- **Ask about my work** — terminal-style chat widget with suggested
  questions and pre-written answers from the résumé and projects (no
  LLM calls, no fake live AI)
- **Experience** — Meta, micro1, ColomboAI, Zoron IT Solutions, each
  with a logo mark (Meta SVG) or typographic wordmark
- **Skills** — brand-icon grid, animated years-of-experience bars,
  skill groups (resume-verified only)
- **Currently exploring** — open questions from real work ("How do you
  make an agent cite its sources?" …), each linking to the project or
  role it comes from
- **Beyond the code** — photo gallery (casual + yellow portraits) with
  parallax drift
- **Certifications** — AWS ML Specialty, Oracle OCI GenAI
  Professional, Databricks ML Ops + Data Preparation
- **Contact** — email, socials, résumé download
- **Chrome** — oversized ghost numerals (01–06) behind section
  headings, glass navbar with scroll progress bar and active-section
  highlight, mobile menu, back-to-top button, `prefers-reduced-motion`
  support

All content is resume-verified. The résumé PDF served at
`/Rohith_Sadanala.pdf` is a copy of the canonical résumé. Eval numbers
on the project cards are shown exactly as measured, with their
caveats. Brand icons come from `simple-icons`; brands without a
simple-icons glyph (AWS, Pinecone, FAISS, …) are shown as typographic
monograms — no fake logo art.

## Photos

`public/photos/` (EXIF stripped):

- `portrait-professional.jpg` — Hero + Open Graph image
- `usf-campus.jpg` — Education card in About
- `portrait-casual.jpg`, `portrait-yellow.jpg` — "Beyond the code" gallery

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Preview without deploying (static export)

The site is configured for static export (`output: 'export'` in
`next.config.ts`; `next/image` runs unoptimized, since image
optimization needs a server).

```bash
npm run build   # writes the self-contained site to out/
npx serve out   # or: python3 -m http.server -d out 8000
```

Open the served URL to preview the redesigned site and make changes
before anything is deployed or pushed.

## Production build

```bash
npm run build
npm run start
```

(`npm run start` serves the static export locally.)

## Deploy to Vercel

1. Push this folder to a GitHub repository (e.g.
   `rohithsadanala/portfolio`).
2. Go to [vercel.com/new](https://vercel.com/new) and sign in with
   GitHub.
3. Import the repository. Vercel auto-detects Next.js — no build
   settings to change (build command `npm run build`, output directory
   is automatic for Next.js).
4. Click **Deploy**. Vercel gives you a `*.vercel.app` URL; you can
   add a custom domain later under the project's **Settings →
   Domains**.
5. Every push to the repo's default branch redeploys automatically.

No environment variables are needed — the site is fully static.
