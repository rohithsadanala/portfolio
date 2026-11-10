import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohith Sadanala — AI Software Engineer",
  description:
    "Rohith Sadanala is an AI Software Engineer (Python full-stack) in St. Louis, MO, building LLM evaluation systems, agentic RAG, and tool-calling agents.",
  metadataBase: new URL("https://rohithsadanala.dev"),
  openGraph: {
    title: "Rohith Sadanala — AI Software Engineer",
    description:
      "AI Software Engineer · Python Full-Stack — LLM evaluation, agentic RAG, and tool-calling agents.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-zinc-950 text-zinc-200">{children}</body>
    </html>
  );
}
