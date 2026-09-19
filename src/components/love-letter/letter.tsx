"use client";

import { motion } from "framer-motion";
import { Dots, FoldCrease, Sparkle, Sprig } from "./decor";
import FestivalSection from "./section-festival";
import BeginningSection from "./section-beginning";
import QuestionsSection from "./section-questions";
import ImagineSection from "./section-imagine";
import LittleThingsSection from "./section-little-things";
import BeautySection from "./section-beauty";
import FeelingSection from "./section-feeling";
import EndingSection from "./section-ending";

export default function Letter() {
  return (
    <div id="letter-start" className="flex flex-1 flex-col">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-[680px] px-3 pb-6 pt-8 sm:px-6"
      >
        <article
          className="grain relative rounded-[1.75rem] border border-silver/70 bg-midnight px-4 pb-3 pt-9 shadow-[0_38px_90px_-46px_rgba(2,6,18,0.95),0_0_120px_-30px_rgba(96,150,200,0.22)] sm:px-10 sm:pt-11"
        >
          {/* the letter grows a little warmer as it reaches its end */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 rounded-b-[1.75rem] bg-gradient-to-b from-transparent via-[rgba(96,150,200,0.05)] to-[rgba(96,150,200,0.10)]"
          />

          <header className="flex flex-col items-center gap-1.5 text-center">
            <Sprig className="h-5 w-20 text-moon/70" />
            <p className="font-hand text-[1.35rem] leading-tight text-frost/80">
              written slowly, and with a lot of care
            </p>
          </header>

          <FestivalSection />
          <FoldCrease ornament="star" />
          <BeginningSection />
          <FoldCrease ornament="sprig" />
          <QuestionsSection />
          <FoldCrease ornament="dots" />
          <ImagineSection />
          <FoldCrease ornament="heart" />
          <LittleThingsSection />
          <FoldCrease ornament="flourish" />
          <BeautySection />
          <FoldCrease ornament="sprig" />
          <FeelingSection />
          <FoldCrease ornament="dots" />
          <EndingSection />
        </article>
      </motion.div>

      <footer className="mt-auto px-6 pb-8 pt-4 text-center">
        <Dots className="mx-auto mb-3 h-2.5 w-8 text-moon/50" />
        <p className="font-hand text-[1.2rem] text-frost/75">
          made just for you, with a lot of thought ♡
        </p>
        <Sparkle className="mx-auto mt-3 h-2 w-2 text-powder/40" />
      </footer>
    </div>
  );
}
