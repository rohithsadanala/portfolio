"use client";

import { useEffect, useRef, type ReactNode } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  type Variants,
} from "framer-motion";

/* Scroll-triggered fade + slide reveal. Wraps any section or card. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Animated count-up number that starts when scrolled into view. */
export function Counter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 90, damping: 20 });

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, value, mv]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
    });
    return unsub;
  }, [spring, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  index,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  /** Oversized ghost numeral rendered behind the heading (e.g. "01"). */
  index?: string;
}) {
  return (
    <Reveal className="relative mb-12 sm:mb-14">
      {index && (
        <span
          aria-hidden="true"
          className="text-outline pointer-events-none absolute -top-10 right-0 hidden select-none font-mono text-[7rem] font-bold leading-none sm:block lg:text-[9rem]"
        >
          {index}
        </span>
      )}
      <p className="relative text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
        {eyebrow}
      </p>
      <h2 className="relative mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {sub && <p className="relative mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">{sub}</p>}
    </Reveal>
  );
}
