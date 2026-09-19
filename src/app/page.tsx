"use client";

import { useState } from "react";
import { MotionConfig } from "framer-motion";
import Hero from "@/components/love-letter/hero";
import Letter from "@/components/love-letter/letter";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative flex min-h-svh flex-col bg-ink">
        {/* the quiet night — a faint moonlight resting on everything */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(90%_55%_at_50%_-12%,rgba(23,37,84,0.55),transparent_70%)]"
        />
        <main className="relative z-[1] flex flex-1 flex-col">
          <Hero onOpen={() => setOpened(true)} />
          {opened && <Letter />}
        </main>
      </div>
    </MotionConfig>
  );
}
