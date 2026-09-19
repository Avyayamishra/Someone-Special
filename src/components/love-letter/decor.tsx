"use client";

import { type CSSProperties, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Reveal — the soft, page-settling entrance used across the letter    */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  delay = 0,
  y = 22,
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
      viewport={{ once: true, margin: "-10% 0px -6% 0px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Typography pieces                                                   */
/* ------------------------------------------------------------------ */

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-center text-[10.5px] font-semibold uppercase tracking-[0.32em] text-moon/80">
      {children}
    </p>
  );
}

export function SectionTitle({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <h2
      id={id}
      className="mt-3 text-center font-serif text-[clamp(1.65rem,6vw,2.3rem)] font-medium leading-[1.22] text-snow"
    >
      {children}
    </h2>
  );
}

export function Para({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mt-4 text-[15px] leading-[1.95] text-frost/90 sm:text-[15.5px]",
        className
      )}
    >
      {children}
    </p>
  );
}

/** A centered, italic serif line — the emotional beats of the letter. */
export function PullLine({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mx-auto my-7 max-w-[30rem] text-center font-serif text-[1.22rem] italic leading-[1.7] text-snow sm:text-[1.32rem]",
        className
      )}
    >
      {children}
    </p>
  );
}

/** A tiny handwritten aside — like a note pencilled in the margin, in blue ink. */
export function MarginNote({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mt-6 font-hand text-[1.35rem] leading-snug text-powder/95",
        className
      )}
    >
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/*  Hand-drawn ornaments                                                */
/* ------------------------------------------------------------------ */

export function HeartDoodle({
  className,
  filled = false,
}: {
  className?: string;
  filled?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.5C7.2 16.2 3.8 13.1 3.8 9.6 3.8 6.9 6 4.7 8.7 4.7c1.3 0 2.5.6 3.3 1.6.8-1 2-1.6 3.3-1.6 2.7 0 4.9 2.2 4.9 4.9 0 3.5-3.4 6.6-8.2 10.9Z" />
    </svg>
  );
}

export function Sprig({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 22"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 13.5C18 10.5 36 15.5 61 9.5" />
      <path d="M15 12c-.8-4.6-4.9-6.6-8-6-.2 4.4 4.2 6.8 8 6Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M31 13c.8-4.6 4.9-6.6 8-6 .2 4.4-4.2 6.8-8 6Z" fill="currentColor" fillOpacity="0.14" />
      <path d="M23 13.4c-4-.9-7.9.7-9 4.6 4.8 1.1 8.9-.5 9-4.6Z" fill="currentColor" fillOpacity="0.12" />
      <path d="M45 11.6c4-.9 7.9.7 9 4.6-4.8 1.1-8.9-.5-9-4.6Z" fill="currentColor" fillOpacity="0.1" />
    </svg>
  );
}

export function Dots({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 12" aria-hidden className={className}>
      <circle cx="16" cy="6" r="2" fill="currentColor" opacity="0.45" />
      <circle cx="24" cy="6" r="2.6" fill="currentColor" opacity="0.7" />
      <circle cx="32" cy="6" r="2" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

export function Flourish({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 18"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      <path d="M6 9C20 3 28 15 40 9s20-6 34 0" />
      <circle cx="5" cy="9" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="75" cy="9" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** A wobbly hand-drawn underline for a word or phrase worth underlining. */
export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 180 12"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      preserveAspectRatio="none"
    >
      <path d="M4 8C40 3 78 11 116 6S172 4 176 7" />
    </svg>
  );
}

export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 14" aria-hidden className={className}>
      <path
        d="M7 0 8.5 5.5 14 7 8.5 8.5 7 14 5.5 8.5 0 7 5.5 5.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Moon tape — holds the scraps in place                              */
/* ------------------------------------------------------------------ */

export function MoonTape({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute z-[3] h-[18px] w-16 opacity-90",
        className
      )}
      style={{
        clipPath: "polygon(4% 0, 98% 7%, 100% 94%, 1% 100%)",
        backgroundImage:
          "repeating-linear-gradient(45deg, rgba(96,150,200,0.32) 0 6px, rgba(169,199,232,0.18) 6px 12px)",
        boxShadow: "0 1px 3px rgba(2,6,18,0.5)",
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Fold crease — separates the movements of the letter                */
/* ------------------------------------------------------------------ */

export function FoldCrease({
  ornament = "dots",
}: {
  ornament?: "sprig" | "dots" | "heart" | "flourish" | "star";
}) {
  return (
    <div aria-hidden className="relative my-3 h-8 sm:my-4">
      {/* the crease itself */}
      <div className="absolute inset-x-2 top-1/2 h-px bg-gradient-to-r from-transparent via-[#263450] to-transparent sm:inset-x-6" />
      {/* the faint catch of light along the fold */}
      <div className="absolute inset-x-4 top-0 h-3 bg-gradient-to-b from-[rgba(169,199,232,0.05)] to-transparent" />
      {/* ornament resting on the crease */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-midnight px-3 text-moon/70">
        {ornament === "sprig" && <Sprig className="h-4 w-14" />}
        {ornament === "dots" && <Dots className="h-3 w-10" />}
        {ornament === "heart" && <HeartDoodle className="h-4 w-4" />}
        {ornament === "flourish" && <Flourish className="h-4 w-16" />}
        {ornament === "star" && <Sparkle className="h-3.5 w-3.5" />}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Stars — the quiet sky behind the opening                            */
/* ------------------------------------------------------------------ */

const STARS: {
  left: string;
  top: string;
  size: number;
  dur: string;
  delay: string;
  cls: string;
  op: number;
  sparkle?: boolean;
}[] = [
  { left: "4%", top: "9%", size: 2, dur: "4.6s", delay: "0s", cls: "text-pale", op: 0.8 },
  { left: "12%", top: "37%", size: 2, dur: "5.8s", delay: "-1.4s", cls: "text-powder", op: 0.55 },
  { left: "18%", top: "71%", size: 2, dur: "4.2s", delay: "-2.2s", cls: "text-moon", op: 0.5 },
  { left: "24%", top: "16%", size: 11, dur: "6.4s", delay: "-0.8s", cls: "text-pale", op: 0.6, sparkle: true },
  { left: "33%", top: "54%", size: 2, dur: "5.1s", delay: "-3s", cls: "text-powder", op: 0.45 },
  { left: "41%", top: "86%", size: 2, dur: "4.8s", delay: "-1.1s", cls: "text-moon", op: 0.4 },
  { left: "47%", top: "7%", size: 2, dur: "5.5s", delay: "-2.6s", cls: "text-pale", op: 0.7 },
  { left: "55%", top: "29%", size: 2, dur: "6s", delay: "-0.5s", cls: "text-powder", op: 0.5 },
  { left: "62%", top: "61%", size: 13, dur: "4.4s", delay: "-3.4s", cls: "text-powder", op: 0.55, sparkle: true },
  { left: "68%", top: "13%", size: 2, dur: "5.3s", delay: "-1.8s", cls: "text-moon", op: 0.5 },
  { left: "74%", top: "44%", size: 2, dur: "4.9s", delay: "-2.9s", cls: "text-powder", op: 0.55 },
  { left: "80%", top: "77%", size: 2, dur: "5.7s", delay: "-0.3s", cls: "text-moon", op: 0.45 },
  { left: "87%", top: "23%", size: 10, dur: "4.7s", delay: "-2.1s", cls: "text-pale", op: 0.65, sparkle: true },
  { left: "93%", top: "57%", size: 2, dur: "5.4s", delay: "-1.5s", cls: "text-powder", op: 0.5 },
  { left: "9%", top: "90%", size: 2, dur: "6.2s", delay: "-2.4s", cls: "text-moon", op: 0.4 },
  { left: "96%", top: "87%", size: 2, dur: "4.5s", delay: "-0.9s", cls: "text-pale", op: 0.6 },
];

export function Stars({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      {STARS.map((s, i) => (
        <span
          key={i}
          className={cn("twinkle absolute", s.cls)}
          style={
            {
              left: s.left,
              top: s.top,
              "--dur": s.dur,
              "--delay": s.delay,
            } as CSSProperties
          }
        >
          {s.sparkle ? (
            <span
              className="block"
              style={{ width: s.size, height: s.size, opacity: s.op }}
            >
              <Sparkle className="h-full w-full" />
            </span>
          ) : (
            <span
              className="block rounded-full bg-current"
              style={{ width: s.size, height: s.size, opacity: s.op }}
            />
          )}
        </span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Small plus that becomes a fold-close ×                              */
/* ------------------------------------------------------------------ */

export function PlusGlyph({ open }: { open: boolean }) {
  return (
    <motion.span
      aria-hidden
      className="inline-flex shrink-0 items-center justify-center"
      animate={{ rotate: open ? 45 : 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <svg
        viewBox="0 0 16 16"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <path d="M8 2.5v11M2.5 8h11" />
      </svg>
    </motion.span>
  );
}
