"use client";

import {
  MarginNote,
  Para,
  PullLine,
  Reveal,
  SectionLabel,
  SectionTitle,
} from "./decor";
import { SproutFlower } from "./illustrations";

const DISCOVERIES = [
  "New conversations.",
  "Unexpected habits.",
  "Little things that make us laugh.",
  "Stories we haven\u2019t heard.",
  "Places we haven\u2019t been.",
];

const INDENTS = ["pl-0", "pl-5", "pl-2", "pl-7", "pl-3"];

export default function BeginningSection() {
  return (
    <section aria-labelledby="beginning-title" className="py-7 sm:py-9">
      <Reveal>
        <SectionLabel>the beginning</SectionLabel>
        <SectionTitle id="beginning-title">
          But we barely know each other yet…
        </SectionTitle>
      </Reveal>

      <div className="mx-auto mt-6 max-w-[33rem]">
        <Reveal delay={0.08}>
          <Para className="mt-0">And you&apos;re right.</Para>
          <Para>
            We&apos;ve only been talking for a little while, so I don&apos;t
            know every little thing about you. I don&apos;t know all your
            favourite places, your comfort foods, the stories you haven&apos;t
            told me yet, or all the things that make you,{" "}
            <em className="font-serif text-[1.1em]">you</em>.
          </Para>
        </Reveal>

        <Reveal delay={0.05}>
          <PullLine>But maybe that&apos;s not a bad thing.</PullLine>
          <Para>
            Because imagine getting to know someone, and having an entire
            world still waiting to be discovered.
          </Para>
        </Reveal>

        <ul className="mt-7 space-y-1.5">
          {DISCOVERIES.map((d, i) => (
            <li key={d} className={INDENTS[i]}>
              <Reveal y={14} delay={0.05 * i}>
                <span className="flex items-baseline gap-3">
                  <span
                    aria-hidden
                    className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-powder/80"
                  />
                  <span className="font-serif text-[1.15rem] italic leading-[1.7] text-snow/90">
                    {d}
                  </span>
                </span>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex justify-center">
          <Reveal y={10}>
            <SproutFlower className="h-28 w-28" />
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <Para>I think there&apos;s something beautiful about that.</Para>
          <Para>
            Not knowing everything already, but having so much left to
            discover.
          </Para>
          <PullLine className="mb-0">
            And honestly, I wouldn&apos;t want to rush that.
          </PullLine>
        </Reveal>

        <MarginNote className="rotate-[-1.5deg] text-right">
          the beginning is kind of exciting, isn&apos;t it?
        </MarginNote>
      </div>
    </section>
  );
}
