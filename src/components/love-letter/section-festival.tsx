"use client";

import {
  MarginNote,
  Para,
  PullLine,
  Reveal,
  SectionLabel,
  SectionTitle,
} from "./decor";
import { GaneshMotif } from "./illustrations";

/* ------------------------------------------------------------------ */
/*  A small thought — where this quietly began                          */
/*  the first real conversation happened during Ganesh Chaturthi.      */
/*  not a sign, not a promise — just a coincidence worth wondering      */
/*  about, held very gently.                                           */
/* ------------------------------------------------------------------ */

export default function FestivalSection() {
  return (
    <section aria-labelledby="festival-title" className="py-7 sm:py-9">
      <Reveal>
        <SectionLabel>a small thought</SectionLabel>
        <SectionTitle id="festival-title">
          There&apos;s something I keep thinking about…
        </SectionTitle>
      </Reveal>

      <div className="mx-auto mt-6 max-w-[33rem]">
        {/* the motif — a quiet line-art memory, lit by one small diya */}
        <Reveal y={16}>
          <div className="relative mx-auto w-[74%] max-w-[280px]">
            <GaneshMotif />
          </div>
          <p className="mt-1 text-center font-hand text-[1.05rem] leading-snug text-frost/70">
            ganesh chaturthi — where this quietly began
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <Para className="mt-6">
            The first time we really talked — and the first time I properly
            noticed you — was during{" "}
            <em className="font-serif text-[1.1em] text-pale">
              Ganesh Chaturthi
            </em>
            .
          </Para>
        </Reveal>

        <Reveal delay={0.05}>
          <PullLine className="mb-2">Maybe it&apos;s just a coincidence.</PullLine>
          <Para>
            But I don&apos;t know… there&apos;s something strangely beautiful
            about that.
          </Para>
          <Para>
            Of all the days, of all the moments, somehow our story began to
            get a little interesting around a celebration of Ganpati.
          </Para>
        </Reveal>

        <Reveal delay={0.05}>
          <Para>
            I&apos;m not saying I know what it means. I just think it&apos;s a
            pretty nice thought to keep in the back of my mind.
          </Para>
        </Reveal>

        <Reveal delay={0.05}>
          <PullLine className="mb-0">
            Maybe sometimes the best beginnings don&apos;t announce themselves
            as beginnings.
          </PullLine>
        </Reveal>

        <Reveal delay={0.05}>
          <Para className="mt-7">
            I don&apos;t know where any of this is going yet.
          </Para>
          <Para>I just know I like the way this beginning feels.</Para>
        </Reveal>

        <MarginNote className="rotate-[-1.5deg] text-right">
          …and that&apos;s a nice place to start, isn&apos;t it?
        </MarginNote>
      </div>
    </section>
  );
}
