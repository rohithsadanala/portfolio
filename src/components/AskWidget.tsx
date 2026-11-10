"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EMAIL, askQuestions } from "../data";
import { Reveal, SectionHeading } from "./motion";

/**
 * "Ask about my work" — a chat-style widget with PRE-WRITTEN answers only,
 * drawn from the résumé and project READMEs. No LLM calls, no fake live AI;
 * the card says so explicitly.
 */
export function AskWidget() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="ask" className="scroll-mt-24 border-t border-white/10 py-24 sm:py-28">
      <SectionHeading
        eyebrow="Ask me"
        title="Curious? Ask about my work."
        sub="Pick a question — the answers are pre-written from my résumé and projects, not a live chatbot."
      />
      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/50 shadow-2xl shadow-black/50">
          {/* terminal header */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-5 py-3.5">
            <span className="h-3 w-3 rounded-full bg-rose-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
            <span className="ml-3 font-mono text-sm text-zinc-400">ask-rohith — zsh</span>
            <span className="ml-auto hidden rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[11px] text-emerald-300 sm:inline">
              pre-written answers · no AI
            </span>
          </div>

          <div className="p-5 sm:p-7">
            {/* conversation */}
            <div className="min-h-[180px] space-y-4">
              {active === null ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-xl rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.05] px-4 py-3"
                >
                  <p className="font-mono text-sm leading-relaxed text-zinc-300">
                    <span className="text-emerald-400">rohith@portfolio:~$</span> ask me
                    anything about my work — pick a question below to start.
                  </p>
                </motion.div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex justify-end">
                      <p className="max-w-xl rounded-2xl rounded-tr-sm bg-emerald-500 px-4 py-3 text-sm font-medium leading-relaxed text-zinc-950">
                        {askQuestions[active].question}
                      </p>
                    </div>
                    <div className="flex">
                      <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.35 }}
                        className="max-w-2xl rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.05] px-4 py-3 text-sm leading-relaxed text-zinc-300"
                      >
                        {askQuestions[active].answer}
                      </motion.p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            {/* suggested questions */}
            <div className="mt-7">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                Suggested questions
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {askQuestions.map((item, i) => (
                  <button
                    key={item.question}
                    onClick={() => setActive(i)}
                    aria-pressed={active === i}
                    className={`rounded-full border px-3.5 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 ${
                      active === i
                        ? "border-emerald-400/60 bg-emerald-400/15 text-emerald-300"
                        : "border-white/15 bg-white/5 text-zinc-200 hover:border-emerald-400/40 hover:text-white"
                    }`}
                  >
                    {item.question}
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-7 border-t border-white/10 pt-5 text-sm text-zinc-500">
              Didn&apos;t find your question?{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="font-semibold text-emerald-400 underline-offset-4 hover:underline"
              >
                Email me — I answer every message.
              </a>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
