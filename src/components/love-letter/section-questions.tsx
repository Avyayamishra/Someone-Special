"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MarginNote,
  MoonTape,
  PlusGlyph,
  Reveal,
  SectionLabel,
  SectionTitle,
} from "./decor";

const SLIPS = [
  {
    q: "What if we turn out to be different?",
    rot: -1.6,
    a: [
      "Then I guess we'd have things to learn from each other.",
      "I don't think two people have to be exactly alike to enjoy the same little moments.",
      "Maybe you'll introduce me to something I never thought I'd like — and maybe I'll convince you to try something ridiculous with me.",
      "And somewhere between our differences, we might find things that become ours.",
    ],
  },
  {
    q: "What if this is happening a little quickly?",
    rot: 1.4,
    a: [
      "Then we don't have to rush it.",
      "I like the idea of letting things grow naturally — of getting to know each other without turning every moment into a promise.",
      "I don't need us to have everything figured out right now.",
      "I'd just like to keep discovering you, one conversation at a time.",
    ],
  },
  {
    q: "What if we still have so much to learn about each other?",
    rot: -1,
    a: [
      "I think that's part of what makes it exciting.",
      "There are still little things I haven't learned, stories I haven't heard, and sides of you I haven't had the chance to see.",
      "I don't see that as something missing.",
      "I see it as a lot of lovely things still waiting to happen.",
    ],
  },
  {
    q: "What if we don't have everything figured out?",
    rot: 1.8,
    a: [
      "Then we're perfectly normal.",
      "I'd rather we figure things out slowly, honestly, and in whatever way feels right for both of us.",
      "No map required — just good conversation, a little patience, and time.",
    ],
  },
];

export default function QuestionsSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section aria-labelledby="questions-title" className="py-7 sm:py-9">
      <Reveal>
        <SectionLabel>the questions you might have</SectionLabel>
        <SectionTitle id="questions-title">
          Maybe you have a few questions
        </SectionTitle>
        <p className="mx-auto mt-4 max-w-[30rem] text-center text-[14px] leading-7 text-frost/75">
          The kind that sit quietly in the back of your mind.
          <br />
          I&apos;ve been thinking about them too.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <MarginNote className="mx-auto -rotate-1 text-center">
          no right order — open whichever you like (or none at all)
        </MarginNote>
      </Reveal>

      <div className="mx-auto mt-4 flex max-w-[33rem] flex-col gap-5">
        {SLIPS.map((slip, i) => {
          const open = openIdx === i;
          return (
            <motion.div
              key={slip.q}
              animate={{
                rotate: open ? 0 : slip.rot,
                opacity: openIdx !== null && !open ? 0.45 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="relative rounded-xl border border-silver/80 bg-navy/70 shadow-[0_18px_44px_-24px_rgba(2,6,18,0.9),0_0_50px_-30px_rgba(96,150,200,0.28)]">
                {/* a thin moonlit edge along the top of the card */}
                <div
                  aria-hidden
                  className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-moon/45 to-transparent"
                />
                <MoonTape className="-top-2.5 left-1/2 -translate-x-1/2 rotate-[-3deg]" />
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="flex min-h-[44px] w-full items-center justify-between gap-3 px-5 py-4 text-left"
                >
                  <span className="font-hand text-[1.35rem] leading-snug text-pale">
                    {slip.q}
                  </span>
                  <span className="text-moon">
                    <PlusGlyph open={open} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-dashed border-silver/70 px-5 pb-5 pt-4">
                        {slip.a.map((para, j) =>
                          j === 0 ? (
                            <p
                              key={j}
                              className="font-serif text-[1.18rem] italic leading-[1.7] text-snow"
                            >
                              {para}
                            </p>
                          ) : (
                            <p
                              key={j}
                              className="mt-3 text-[14.5px] leading-[1.85] text-frost/90"
                            >
                              {para}
                            </p>
                          )
                        )}
                        <button
                          type="button"
                          onClick={() => setOpenIdx(null)}
                          className="mt-4 font-hand text-[1.1rem] text-moon/80 transition-colors hover:text-moon"
                        >
                          — fold this one back
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
