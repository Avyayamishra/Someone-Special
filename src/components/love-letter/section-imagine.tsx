"use client";

import { motion } from "framer-motion";
import {
  Para,
  PullLine,
  Reveal,
  SectionLabel,
  SectionTitle,
  Squiggle,
  MoonTape,
} from "./decor";
import {
  CookingDoodle,
  CupsDoodle,
  FootballDoodle,
} from "./illustrations";

const CARDS = [
  {
    Doodle: CookingDoodle,
    caption: "recipe: 90% chaos, 10% luck",
    text: "I'd imagine someone I could cook with — trying new dishes, and laughing when neither of us gets the recipe right.",
    rot: -2,
  },
  {
    Doodle: FootballDoodle,
    caption: "silly matches, long-remembered",
    text: "Someone I could play football with, where even a silly little match could become a memory we'd keep bringing up.",
    rot: 1.5,
  },
  {
    Doodle: CupsDoodle,
    caption: "the comfortable kind of quiet",
    text: "Someone who might be a little shy at first — but has an entirely different world of personality once she's comfortable with the people she trusts.",
    rot: -1.2,
  },
];

export default function ImagineSection() {
  return (
    <section aria-labelledby="imagine-title" className="py-7 sm:py-9">
      <Reveal>
        <SectionLabel>what i imagine</SectionLabel>
        <SectionTitle id="imagine-title">
          If I ever imagined a perfect partner…
        </SectionTitle>
      </Reveal>

      <div className="mx-auto mt-6 max-w-[34rem]">
        <Reveal delay={0.06}>
          <PullLine>I don&apos;t think I&apos;d imagine someone perfect.</PullLine>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-3 sm:gap-4">
          {CARDS.map((card, i) => (
            <Reveal key={card.caption} delay={0.08 * i}>
              <motion.div
                animate={{ rotate: card.rot }}
                className="relative rounded-2xl border border-silver/70 bg-navy/60 p-4 shadow-[0_18px_44px_-26px_rgba(2,6,18,0.9),0_0_50px_-32px_rgba(96,150,200,0.25)]"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-moon/35 to-transparent"
                />
                <MoonTape className="-top-2.5 left-1/2 -translate-x-1/2 rotate-[-2.5deg] w-14" />
                <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:text-center">
                  <div className="flex h-[78px] w-[90px] shrink-0 items-center justify-center rounded-xl border border-silver/50 bg-midnight/80 sm:h-[94px] sm:w-[116px]">
                    <card.Doodle className="h-[62px] w-[78px] sm:h-[76px] sm:w-[94px]" />
                  </div>
                  <div className="sm:mt-1">
                    <p className="font-hand text-[1.15rem] leading-tight text-powder/95">
                      {card.caption}
                    </p>
                    <p className="mt-1.5 text-[13.5px] leading-[1.75] text-frost/90">
                      {card.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.05}>
          <Para className="mt-8">
            And I think that&apos;s one of the things I find really beautiful
            about you.
          </Para>
          <PullLine>That there&apos;s more to discover.</PullLine>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-9 gap-y-1">
            <span className="-rotate-2 font-hand text-[1.5rem] text-frost/90">
              a quiet side
            </span>
            <span className="rotate-1 font-hand text-[1.5rem] text-frost/90">
              a playful side
            </span>
          </div>
          <Para className="mt-5">
            A side that doesn&apos;t have to be introduced to everyone, but
            comes out when you feel comfortable being yourself.
          </Para>
          <Para>I don&apos;t know all those sides yet.</Para>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-7 text-center font-serif text-[1.28rem] italic leading-[1.65] text-snow">
            But I&apos;d{" "}
            <span className="relative inline-block whitespace-nowrap">
              genuinely love to.
              <Squiggle className="absolute -bottom-1.5 left-0 h-2.5 w-full text-azure/70" />
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
