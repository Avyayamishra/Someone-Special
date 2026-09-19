"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HeartDoodle,
  MarginNote,
  MoonTape,
  Para,
  PullLine,
  Reveal,
  SectionLabel,
  SectionTitle,
  Squiggle,
} from "./decor";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function EndingSection() {
  const [answered, setAnswered] = useState(false);

  return (
    <section aria-labelledby="ending-title" className="relative py-7 sm:py-9">
      {/* the letter grows a little warmer as it says this */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[420px] bg-[radial-gradient(70%_60%_at_50%_100%,rgba(96,150,200,0.10),transparent)]"
      />

      <Reveal>
        <SectionLabel>what i&apos;m trying to say</SectionLabel>
        <SectionTitle id="ending-title">
          So, what am I trying to say?
        </SectionTitle>
      </Reveal>

      <div className="mx-auto mt-9 max-w-[33rem]">
        <Reveal>
          <div className="relative flex flex-col items-center">
            {/* a soft glow behind the words */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 h-44 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(169,199,232,0.13),transparent)] blur-xl"
            />
            <p className="relative flex items-center justify-center gap-3 text-center font-serif text-[2rem] font-medium leading-[1.3] text-snow sm:text-[2.3rem]">
              I like you
              <HeartDoodle filled className="mt-2 h-5 w-5 text-powder" />
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <Para className="mt-6">
            Not because I think I know everything about you already — but
            because what I&apos;ve seen so far has made me genuinely curious
            to know you more.
          </Para>
          <Para>
            I like the little things I&apos;ve noticed. The things you&apos;ve
            shared. The things I still don&apos;t know.
          </Para>
          <Para>
            And if you&apos;re comfortable with it, I&apos;d really like to
            keep discovering all of that.
          </Para>
          <Para className="text-frost/70">
            No grand promises. No pressure to have everything figured out.
          </Para>
        </Reveal>

        <Reveal delay={0.06}>
          <PullLine>
            Just two people, getting to know each other, and maybe finding
            something really beautiful along the way.
          </PullLine>
          <p className="text-center font-serif text-[1.3rem] italic leading-[1.7] text-snow">
            And honestly,{" "}
            <span className="relative inline-block whitespace-nowrap">
              I&apos;d like that.
              <Squiggle className="absolute -bottom-1.5 left-0 h-2.5 w-full text-azure/70" />
            </span>
          </p>
        </Reveal>
      </div>

      {/* — a gentle, optional little moment — */}
      <div className="mt-11 flex flex-col items-center">
        <AnimatePresence mode="wait" initial={false}>
          {!answered ? (
            <motion.div
              key="invite"
              className="flex flex-col items-center"
              exit={{ opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.35 } }}
            >
              <MarginNote className="mt-0 -rotate-1">
                only if you feel like it ♡
              </MarginNote>
              <button
                type="button"
                onClick={() => setAnswered(true)}
                className="mt-3 inline-flex min-h-[44px] items-center gap-2.5 rounded-full border border-moon/40 bg-night/80 px-8 py-3 text-[14.5px] font-medium tracking-wide text-snow shadow-[0_12px_30px_-14px_rgba(96,150,200,0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-moon/70 hover:bg-navy/70 active:translate-y-0 active:scale-[0.98]"
              >
                I&apos;d like that too
                <HeartDoodle filled className="h-4 w-4 text-powder" />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="reply"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } }}
              className="flex flex-col items-center text-center"
            >
              <span className="pulse-soft block text-powder drop-shadow-[0_0_18px_rgba(96,150,200,0.65)]">
                <HeartDoodle filled className="h-7 w-7" />
              </span>
              <p className="mt-3 max-w-[26rem] font-serif text-[1.3rem] italic leading-[1.7] text-snow">
                Then let&apos;s take our time, and make some lovely memories.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* — the quiet close — */}
      <div className="mx-auto mt-11 max-w-[33rem]">
        <Reveal>
          <p className="text-center font-serif text-[1.35rem] italic leading-[1.7] text-snow/90">
            For now, I&apos;m just happy I got to tell you.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mx-auto mt-9 w-fit max-w-full -rotate-2 rounded-xl border border-silver/70 bg-navy/70 px-6 py-4 shadow-[0_18px_44px_-26px_rgba(2,6,18,0.9),0_0_50px_-32px_rgba(96,150,200,0.28)]">
            <MoonTape className="-top-2.5 left-1/2 -translate-x-1/2 rotate-[2deg] w-14" />
            <p className="font-hand text-[1.35rem] leading-snug text-pale/95">
              P.S. I still think we&apos;d make a pretty good
              cooking-and-football team.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
