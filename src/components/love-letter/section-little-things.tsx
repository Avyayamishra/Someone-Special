"use client";

import type { CSSProperties } from "react";
import {
  MarginNote,
  Reveal,
  SectionLabel,
  SectionTitle,
  Sparkle,
} from "./decor";

const OBSERVATIONS = [
  "The little expressions you probably don't think twice about.",
  "The way someone can be quiet for a moment — and then suddenly become the most expressive person in the room, once they're comfortable.",
  "The small things people do without realising, that quietly make them feel familiar.",
];

export default function LittleThingsSection() {
  return (
    <section aria-labelledby="little-title" className="py-7 sm:py-9">
      <Reveal>
        <SectionLabel>the little things</SectionLabel>
        <SectionTitle id="little-title">
          And then there are the little things…
        </SectionTitle>
      </Reveal>

      <div className="relative mx-auto mt-8 max-w-[31rem]">
        {/* the quiet blue thread that connects them */}
        <div
          aria-hidden
          className="absolute bottom-3 left-[7px] top-3 w-px border-l border-dashed border-moon/35"
        />

        {OBSERVATIONS.map((o, i) => (
          <Reveal key={i} delay={0.09 * i} y={16}>
            <div className="relative py-3 pl-8">
              <span
                aria-hidden
                className="absolute left-0 top-[1.35rem] h-[15px] w-[15px] rounded-full border-2 border-moon/80 bg-midnight shadow-[0_0_12px_rgba(96,150,200,0.5)]"
              />
              <p className="text-[15px] leading-[1.9] text-frost/90">{o}</p>
            </div>
          </Reveal>
        ))}

        <Reveal delay={0.32} y={16}>
          <div className="relative py-3 pl-8">
            <span
              aria-hidden
              className="absolute left-0 top-[1.2rem] h-[15px] w-[15px] rounded-full border-2 border-powder bg-midnight shadow-[0_0_14px_rgba(169,199,232,0.55)]"
            />
            <p className="font-serif text-[1.2rem] italic leading-[1.75] text-snow">
              I think those are the things I would love getting to know over
              time.
            </p>
          </div>
        </Reveal>

        {/* tiny blue stars, twinkling */}
        <span
          aria-hidden
          className="twinkle pointer-events-none absolute -left-1 top-3 text-pale/70"
          style={{ "--dur": "4.5s" } as CSSProperties}
        >
          <Sparkle className="h-3.5 w-3.5" />
        </span>
        <span
          aria-hidden
          className="twinkle pointer-events-none absolute -right-1 top-[42%] text-azure/60"
          style={{ "--dur": "5.5s", "--delay": "-2s" } as CSSProperties}
        >
          <Sparkle className="h-3 w-3" />
        </span>
        <span
          aria-hidden
          className="twinkle pointer-events-none absolute right-3 bottom-0 text-pale/60"
          style={{ "--dur": "3.8s", "--delay": "-1.2s" } as CSSProperties}
        >
          <Sparkle className="h-4 w-4" />
        </span>
      </div>

      <MarginNote className="rotate-[0.5deg] text-center">
        no rush — these things show themselves slowly
      </MarginNote>
    </section>
  );
}
