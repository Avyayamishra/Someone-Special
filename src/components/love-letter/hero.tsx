"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HeartDoodle, Stars } from "./decor";

type Phase = "sealed" | "opening" | "opened";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ */
/*  The envelope — sealed until she opens it                            */
/* ------------------------------------------------------------------ */

function Envelope({ phase, onOpen }: { phase: Phase; onOpen: () => void }) {
  const [flapBehind, setFlapBehind] = useState(false);
  const isOpening = phase !== "sealed";

  useEffect(() => {
    if (phase !== "opening") return;
    const t = window.setTimeout(() => setFlapBehind(true), 430);
    return () => window.clearTimeout(t);
  }, [phase]);

  return (
    <div style={{ perspective: "1100px" }}>
      <div className="relative h-[208px] w-[300px] sm:h-[230px] sm:w-[340px]">
        {/* back panel — grows upward into the envelope's open mouth */}
        <motion.div
          className="absolute inset-x-0 bottom-0 z-[1] rounded-t-[1.4rem] border border-[#2E4270]"
          initial={false}
          animate={{ top: isOpening ? -56 : 0, height: isOpening ? "calc(100% + 56px)" : "100%" }}
          transition={{ delay: 0.3, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background:
              "linear-gradient(to bottom, #1D3055 0%, #172554 45%, #172554 100%)",
            boxShadow: "inset 0 18px 24px -18px rgba(2,6,18,0.6)",
          }}
        />

        {/* the letter inside — pale blue paper, written in blue ink */}
        <motion.div
          className="absolute inset-x-3 bottom-2 top-3 z-[2]"
          initial={false}
          animate={
            isOpening ? { y: "-72%", rotate: -2.5 } : { y: 0, rotate: 0 }
          }
          transition={{ delay: 0.55, duration: 0.65, ease: EASE }}
        >
          <div className="grain flex h-full flex-col items-center rounded-xl border border-[#C9DAF1] bg-[#EAF2FD] px-4 pt-5 shadow-[0_8px_20px_-10px_rgba(2,6,18,0.8)]">
            <HeartDoodle filled className="h-5 w-5 text-[#3B82F6]" />
            <p className="mt-2 font-hand text-[1.3rem] leading-tight text-[#172554]">
              a few things i&apos;ve been feeling…
            </p>
            <p className="mt-0.5 font-hand text-[1.1rem] text-[#4A6FA5]">
              — just for you
            </p>
            <div className="mt-auto w-2/3 border-t border-dashed border-[#BFD4EE] pb-4" />
          </div>
        </motion.div>

        {/* front pocket */}
        <div className="absolute inset-0 z-[3]">
          <svg
            viewBox="0 0 340 230"
            className="h-full w-full"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M0 24A24 24 0 0 1 24 0H316a24 24 0 0 1 24 24V206a24 24 0 0 1-24 24H24A24 24 0 0 1 0 206Z"
              fill="#101A33"
              stroke="#2B3A57"
              strokeWidth="1.5"
            />
            <path
              d="M6 20 170 152 334 20"
              stroke="#223252"
              strokeWidth="1.5"
              fill="none"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* flap */}
        <motion.div
          className={flapBehind ? "absolute inset-x-0 top-0 z-[0]" : "absolute inset-x-0 top-0 z-[4]"}
          style={{ transformOrigin: "top center" }}
          initial={false}
          animate={{ rotateX: isOpening ? -168 : 0 }}
          transition={{ delay: 0.18, duration: 0.5, ease: [0.55, 0, 0.28, 1] }}
        >
          <svg
            viewBox="0 0 340 130"
            className="h-auto w-full"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d="M0 24A24 24 0 0 1 24 0H316a24 24 0 0 1 24 24L170 130Z"
              fill="#0D1730"
              stroke="#223252"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        {/* the seal — a small blue moonstone */}
        <AnimatePresence>
          {phase === "sealed" && (
            <motion.button
              key="seal"
              type="button"
              onClick={onOpen}
              aria-label="Open this little letter"
              className="pulse-soft absolute left-1/2 top-[47%] z-[5] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              exit={{ scale: 0.35, opacity: 0, transition: { duration: 0.28, ease: "easeIn" } }}
            >
              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-[#6096C8] to-[#4577AE] shadow-[0_0_26px_rgba(96,150,200,0.45),0_8px_18px_-6px_rgba(2,6,18,0.85)] transition-transform duration-300 hover:scale-105">
                <span className="absolute inset-[4px] rounded-full border border-snow/30" />
                <HeartDoodle filled className="h-5 w-5 text-snow" />
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Screen 1 — the opening                                              */
/* ------------------------------------------------------------------ */

export default function Hero({ onOpen }: { onOpen: () => void }) {
  const [phase, setPhase] = useState<Phase>("sealed");
  const reduced = useReducedMotion();

  const scrollToLetter = useCallback(() => {
    document.getElementById("letter-start")?.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "start",
    });
  }, [reduced]);

  const handleOpen = useCallback(() => {
    if (phase !== "sealed") return;
    setPhase("opening");
    window.setTimeout(() => {
      setPhase("opened");
      onOpen();
    }, reduced ? 60 : 1250);
  }, [phase, onOpen, reduced]);

  useEffect(() => {
    if (phase !== "opened") return;
    const t = window.setTimeout(scrollToLetter, 380);
    return () => window.clearTimeout(t);
  }, [phase, scrollToLetter]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.16, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: EASE },
    },
  };

  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-10">
      {/* the quiet night — deep black, holding a little blue */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(120%_85%_at_50%_8%,#0C1428_0%,#08090D_55%,#06070B_100%)]"
      />
      <Stars className="z-[1]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-[2] flex w-full max-w-md flex-col items-center text-center"
      >
        <motion.p
          variants={item}
          className="-rotate-3 font-hand text-[1.6rem] text-powder/95"
        >
          for Jyoti ♡
        </motion.p>

        <motion.div variants={item} className="relative mt-5">
          {/* a very soft blue glow, resting behind the envelope */}
          <div
            aria-hidden
            className="absolute -inset-10 rounded-full bg-[radial-gradient(closest-side,rgba(96,150,200,0.16),transparent)] blur-xl sm:-inset-12"
          />
          <div className="relative">
            <Envelope phase={phase} onOpen={handleOpen} />
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-8 font-serif text-[clamp(1.9rem,7vw,2.6rem)] font-medium leading-[1.18] text-snow"
        >
          A little something for you.
        </motion.h1>

        <motion.div variants={item} className="mt-5 space-y-1.5">
          <p className="text-[14.5px] leading-7 text-frost/85">
            Not a grand speech.
            <br />
            Not a perfectly planned explanation.
          </p>
          <p className="text-[14.5px] leading-7 text-frost/85">
            Just a few things I&apos;ve been feeling,
            <br />
            and thought you might like to read.
          </p>
        </motion.div>

        <motion.div variants={item} className="mt-7 flex h-16 flex-col items-center">
          <AnimatePresence mode="wait" initial={false}>
            {phase === "sealed" ? (
              <motion.div
                key="open-btn"
                className="flex flex-col items-center gap-2.5"
                exit={{ opacity: 0, y: -8, transition: { duration: 0.3 } }}
              >
                <button
                  type="button"
                  onClick={handleOpen}
                  className="inline-flex min-h-[44px] items-center gap-2.5 rounded-full border border-moon/40 bg-night/80 px-8 py-3 text-[14.5px] font-medium tracking-wide text-snow shadow-[0_12px_30px_-14px_rgba(96,150,200,0.35)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-moon/70 hover:bg-navy/70 active:translate-y-0 active:scale-[0.98]"
                >
                  <HeartDoodle className="h-4 w-4 text-powder" />
                  Open this little letter
                </button>
                <p className="font-hand text-[1.05rem] text-frost/60">
                  take your time
                </p>
              </motion.div>
            ) : phase === "opening" ? null : (
              <motion.button
                key="read-btn"
                type="button"
                onClick={scrollToLetter}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.15 } }}
                className="inline-flex min-h-[44px] items-center gap-2 font-hand text-[1.35rem] text-powder/90 transition-colors hover:text-powder"
              >
                begin reading
                <motion.span
                  aria-hidden
                  animate={reduced ? undefined : { y: [0, 3, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 6l5 5 5-5" />
                  </svg>
                </motion.span>
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
