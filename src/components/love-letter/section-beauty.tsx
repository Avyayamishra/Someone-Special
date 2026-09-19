"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import {
  MarginNote,
  Para,
  PullLine,
  Reveal,
  SectionLabel,
  SectionTitle,
} from "./decor";
import { WindowScene } from "./illustrations";

export default function BeautySection() {
  return (
    <section
      aria-labelledby="beauty-title"
      className="relative py-7 sm:py-9"
    >
      <Reveal>
        <SectionLabel>how i see you</SectionLabel>
        <SectionTitle id="beauty-title">
          And about the way you see yourself…
        </SectionTitle>
      </Reveal>

      {/* the darkest panel in the whole letter — night, holding still */}
      <div className="grain relative mt-8 overflow-hidden rounded-[1.6rem] border border-[#1B2848] bg-[#070A12] px-5 py-9 sm:px-8">
        {/* slow light, passing across the dark */}
        <div
          aria-hidden
          className="sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[rgba(169,199,232,0.08)] to-transparent"
          style={{ "--dur": "11s" } as CSSProperties}
        />
        {/* a very soft blue light, gradually appearing behind the words */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 3.2, ease: "easeOut" }}
          className="pointer-events-none absolute left-1/2 top-[34%] -z-10 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(96,150,200,0.17),transparent)] blur-2xl"
        />

        <div className="mx-auto w-[86%] max-w-[310px] sm:max-w-[340px]">
          <Reveal y={16}>
            <WindowScene className="relative" />
          </Reveal>
        </div>

        <div className="mx-auto mt-6 max-w-[32rem]">
          <Reveal delay={0.05}>
            <Para className="mt-0">
              I wish you could borrow my eyes for a moment.
            </Para>
            <Para>
              Not because you need to become someone else — but because I think
              you&apos;d be a little kinder to yourself if you could see what I
              see.
            </Para>
          </Reveal>

          <Reveal delay={0.05}>
            <PullLine className="mb-5">
              To me, you&apos;re like a window with sunlight falling through it —
            </PullLine>
            <Para className="mt-0">
              not trying to be the centre of the room, but somehow making
              everything around it feel warmer.
            </Para>
            <Para>
              And maybe that&apos;s what I find beautiful about you.
            </Para>
          </Reveal>

          <Reveal delay={0.05}>
            <Para>
              You don&apos;t have to try so hard to be beautiful. You don&apos;t
              have to prove it. You don&apos;t have to look like anyone else.
            </Para>
          </Reveal>

          <Reveal delay={0.05}>
            <PullLine className="my-9 text-[1.35rem] sm:text-[1.45rem]">
              You can simply be yourself.
            </PullLine>
            <Para className="text-center">
              And somehow, that&apos;s already something I find really, really
              beautiful.
            </Para>
          </Reveal>

          <MarginNote className="rotate-[1.5deg] text-right">
            i hope you remember this
          </MarginNote>
        </div>
      </div>
    </section>
  );
}
