# Rohith Sadanala — Portfolio

Personal portfolio website for Rohith Sadanala, AI Software Engineer
(Python full-stack). A single-page site built with **Next.js 16 (App
Router) + TypeScript + Tailwind CSS v4**.

## What's on the site

- **Hero** — name, title, location, GitHub / LinkedIn / email links,
  résumé download
- **About** — background + MS Computer Science, University of South
  Florida (Aug 2023 – May 2025)
- **Projects** — two featured projects (Enterprise Knowledge
  Intelligence, AI Code Review Agent) with features, eval results, and
  tech tags, plus four more repos (llm-health, AI-healthcare,
  PromptForge, StockBot)
- **Experience** — Meta, micro1, ColomboAI, Zoron IT Solutions
- **Skills** — resume-verified skills only, grouped by area
- **Certifications** — AWS ML Specialty, Oracle OCI GenAI
  Professional, Databricks ML Ops + Data Preparation
- **Contact** — email, socials, résumé download

All content is resume-verified. The résumé PDF served at
`/Rohith_Sadanala.pdf` is a copy of the canonical résumé.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm run start
```

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
