"use client";

import {
  MarginNote,
  Para,
  PullLine,
  Reveal,
  SectionLabel,
  SectionTitle,
} from "./decor";
import { MusicStaff } from "./illustrations";

export default function FeelingSection() {
  return (
    <section aria-labelledby="feeling-title" className="py-7 sm:py-9">
      <Reveal>
        <SectionLabel>the feeling</SectionLabel>
        <SectionTitle id="feeling-title">The feeling, I guess…</SectionTitle>
      </Reveal>

      <Reveal y={12} delay={0.08}>
        <MusicStaff className="mx-auto mt-7 w-[92%] max-w-[430px]" />
      </Reveal>

      <div className="mx-auto mt-5 max-w-[32rem]">
        <Reveal delay={0.05}>
          <Para className="mt-0 font-serif text-[1.16rem] italic leading-[1.8] text-snow/95">
            Sometimes I think you&apos;re like a song I haven&apos;t heard
            enough times yet, but somehow already know I&apos;ll keep coming
            back to.
          </Para>
          <Para className="font-serif text-[1.16rem] italic leading-[1.8] text-snow/95">
            Not because I&apos;ve figured out every note — but because something
            about it makes me want to stay a little longer.
          </Para>
        </Reveal>

        <Reveal delay={0.05}>
          <Para>And maybe that&apos;s how I feel about you.</Para>
          <Para>
            There&apos;s still so much I don&apos;t know. So many conversations
            we haven&apos;t had. So many little things I haven&apos;t
            discovered.
          </Para>
        </Reveal>

        <Reveal delay={0.05}>
          <PullLine>
            But even now, you have this way of making an ordinary day feel
            like something I look forward to.
          </PullLine>
          <PullLine className="mt-2">
            And I think that&apos;s a pretty beautiful beginning.
          </PullLine>
        </Reveal>

        <MarginNote className="rotate-[-1deg] text-center">
          this one&apos;s on repeat ♪
        </MarginNote>
      </div>
    </section>
  );
}
