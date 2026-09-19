"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  shared helpers                                                      */
/* ------------------------------------------------------------------ */

/** a tiny four-point star path, used like a whisper of light */
function star4(x: number, y: number, r: number) {
  const k = r * 0.34;
  return `M${x} ${y - r} L${x + k} ${y - k} L${x + r} ${y} L${x + k} ${y + k} L${x} ${y + r} L${x - k} ${y + k} L${x - r} ${y} L${x - k} ${y - k} Z`;
}

/* ------------------------------------------------------------------ */
/*  Sprouting flower — draws itself as it scrolls into view             */
/* ------------------------------------------------------------------ */

export function SproutFlower({ className }: { className?: string }) {
  const draw = (delay: number, dur = 1.1) => ({
    initial: { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true, margin: "-10% 0px" },
    transition: { pathLength: { delay, duration: dur, ease: "easeInOut" }, opacity: { delay, duration: 0.3 } },
  });

  return (
    <motion.svg
      viewBox="0 0 120 130"
      aria-hidden
      className={className}
      fill="none"
      stroke="#6096C8"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* stem */}
      <motion.path
        d="M60 126C60 104 57 88 60 64"
        {...draw(0, 1.2)}
      />
      {/* leaves */}
      <motion.path
        d="M60 104C44 100 32 87 33 72 50 76 60 89 60 104Z"
        fill="#A9C7E8"
        fillOpacity="0.4"
        {...draw(0.5)}
      />
      <motion.path
        d="M60 84C76 80 88 67 87 52 70 56 60 69 60 84Z"
        fill="#A9C7E8"
        fillOpacity="0.3"
        {...draw(0.75)}
      />
      {/* bud */}
      <motion.path
        d="M60 62C51 56 51 44 60 34 69 44 69 56 60 62Z"
        fill="#A9C7E8"
        fillOpacity="0.55"
        {...draw(1.05, 0.8)}
      />
      {/* tiny star beside the bud */}
      <motion.path
        d={star4(84, 42, 5)}
        fill="#E8F2FF"
        stroke="none"
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: 0.8, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.6, duration: 0.5 }}
      />
    </motion.svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Cooking doodle — thin blue line art                                 */
/* ------------------------------------------------------------------ */

export function CookingDoodle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 110"
      aria-hidden
      className={className}
      fill="none"
      stroke="#7FA9D8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* steam */}
      <path d="M46 36c2.4-4-2.4-7 0-11" stroke="#A9C7E8" opacity="0.75" />
      <path d="M60 32c2.4-4-2.4-7 0-11" stroke="#A9C7E8" opacity="0.75" />
      <path d="M74 36c2.4-4-2.4-7 0-11" stroke="#A9C7E8" opacity="0.75" />
      {/* lid + knob */}
      <path d="M36 47q24-9 48 0" />
      <circle cx="60" cy="39" r="3.4" fill="#A9C7E8" fillOpacity="0.55" />
      {/* pot */}
      <rect x="38" y="51" width="44" height="37" rx="9" fill="rgba(169,199,232,0.12)" />
      {/* handles */}
      <path d="M38 60q-9 9 0 18" />
      <path d="M82 60q9 9 0 18" />
      {/* a tiny star drifting up */}
      <path d={star4(93, 27, 4)} fill="#3B82F6" opacity="0.85" />
      {/* table line */}
      <path d="M26 96q34 7 68 0" stroke="#3E5C8C" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Football doodle — muted blue                                        */
/* ------------------------------------------------------------------ */

export function FootballDoodle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 110"
      aria-hidden
      className={className}
      fill="none"
      stroke="#7FA9D8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="58" cy="54" r="29" fill="rgba(169,199,232,0.12)" />
      {/* centre pentagon */}
      <path
        d="M58 44.5 67.3 51.2 63.8 62.2H52.2L48.7 51.2Z"
        fill="#6096C8"
        fillOpacity="0.55"
      />
      {/* seams */}
      <path d="M58 44.5V26" />
      <path d="M67.3 51.2 84.4 44.6" />
      <path d="M63.8 62.2 72.4 78" />
      <path d="M52.2 62.2 43.6 78" />
      <path d="M48.7 51.2 31.6 44.6" />
      {/* motion swooshes */}
      <path d="M92 22q7 8 4 17" stroke="#3E5C8C" />
      <path d="M101 40q3 4 1 8" stroke="#3E5C8C" />
      {/* ground */}
      <path d="M22 92q36-9 72 0" stroke="#3E5C8C" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Two cups doodle — thin blue line art                                 */
/* ------------------------------------------------------------------ */

export function CupsDoodle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 110"
      aria-hidden
      className={className}
      fill="none"
      stroke="#7FA9D8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* steam */}
      <path d="M38 48c2.2-3.6-2.2-6.2 0-10" stroke="#A9C7E8" opacity="0.75" />
      <path d="M82 48c2.2-3.6-2.2-6.2 0-10" stroke="#A9C7E8" opacity="0.75" />
      {/* left mug, tilted in */}
      <g transform="rotate(-7 45 74)">
        <rect x="29" y="59" width="30" height="30" rx="7" fill="rgba(169,199,232,0.12)" />
        <path d="M29 67q-10 1.5-10 7.5t10 7.5" />
      </g>
      {/* right mug, tilted in */}
      <g transform="rotate(7 75 74)">
        <rect x="61" y="59" width="30" height="30" rx="7" fill="rgba(169,199,232,0.12)" />
        <path d="M91 67q10 1.5 10 7.5t-10 7.5" />
      </g>
      {/* a small blue star between them */}
      <path d={star4(60, 36, 4.5)} fill="#3B82F6" opacity="0.85" />
      {/* ground */}
      <path d="M28 96q32 7 64 0" stroke="#3E5C8C" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Window with moonlight — the beauty section                          */
/*  sunlight, remembered as a soft blue-white glow                      */
/* ------------------------------------------------------------------ */

export function WindowScene({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 320 310"
        aria-hidden
        className="h-auto w-full"
        fill="none"
      >
        <defs>
          <linearGradient id="lg-glass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#12213F" />
            <stop offset="1" stopColor="#0B1326" />
          </linearGradient>
        </defs>

        {/* glass — the night outside */}
        <path
          d="M32 296V150C32 86 90 46 160 46s128 40 128 104v146Z"
          fill="url(#lg-glass)"
          stroke="#6096C8"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* stars in the night glass */}
        <g fill="#A9C7E8">
          <circle cx="75" cy="110" r="1.6" opacity="0.8" />
          <circle cx="145" cy="95" r="1.3" opacity="0.6" />
          <circle cx="205" cy="130" r="1.7" opacity="0.75" />
          <circle cx="240" cy="90" r="1.2" opacity="0.55" />
          <circle cx="100" cy="160" r="1.2" opacity="0.5" />
          <circle cx="185" cy="168" r="1.5" opacity="0.65" />
        </g>
        <path
          d={star4(225, 100, 5)}
          fill="#E8F2FF"
          className="twinkle"
          style={{ "--dur": "5s" } as CSSProperties}
        />
        {/* crescent moon */}
        <circle cx="118" cy="118" r="34" fill="#E8F2FF" opacity="0.07" />
        <circle cx="118" cy="118" r="20" fill="#E8F2FF" opacity="0.95" />
        <circle cx="126" cy="111" r="17" fill="#0E1A32" />
        {/* moonlit cloud */}
        <path
          d="M188 118c0-8 6-12 12-11 1-7 9-10 15-6 8-4 15 1 15 8 5 1 7 5 6 9-1 3-4 4-8 4h-32c-5 0-8-1-8-4Z"
          fill="#172554"
          stroke="#2E4270"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* inner frame */}
        <path
          d="M56 296V154c0-48 48-84 104-84s104 36 104 84v142"
          stroke="#2E4270"
          strokeWidth="1.5"
        />
        {/* bars */}
        <path d="M160 46v250" stroke="#6096C8" strokeWidth="3" />
        <path d="M32 198h256" stroke="#6096C8" strokeWidth="3" />
        {/* sill */}
        <rect
          x="16"
          y="296"
          width="288"
          height="10"
          rx="4"
          fill="#16244A"
          stroke="#2B3A57"
          strokeWidth="1.5"
        />
        {/* little plant on the sill */}
        <path d="M266 296v-11" stroke="#6096C8" strokeWidth="1.8" strokeLinecap="round" />
        <path
          d="M266 287c-8-1.5-10.5-7-10.5-13.5 7.5.8 10.6 6.5 10.5 13.5Z"
          fill="#A9C7E8"
          fillOpacity="0.35"
          stroke="#6096C8"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M266 287c8-1.5 10.5-7 10.5-13.5-7.5.8-10.6 6.5-10.5 13.5Z"
          fill="#A9C7E8"
          fillOpacity="0.35"
          stroke="#6096C8"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>

      {/* moonlight falling onto the page — the beam, from the moon's side */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-3 top-8 h-[135%] w-2/3 origin-top-left rotate-[20deg] bg-gradient-to-b from-[rgba(190,214,248,0.20)] via-[rgba(190,214,248,0.08)] to-transparent blur-[3px]"
      />
      {/* dust motes drifting in the light */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="mote absolute left-[34%] top-[30%] block size-[5px] rounded-full bg-[#A9C7E8]/30" style={{ "--dur": "12s" } as CSSProperties} />
        <span className="mote absolute left-[42%] top-[46%] block size-[4px] rounded-full bg-[#A9C7E8]/25" style={{ "--dur": "15s", "--delay": "-4s" } as CSSProperties} />
        <span className="mote absolute left-[28%] top-[58%] block size-[3px] rounded-full bg-[#A9C7E8]/30" style={{ "--dur": "10s", "--delay": "-7s" } as CSSProperties} />
        <span className="mote absolute left-[50%] top-[24%] block size-[3px] rounded-full bg-[#A9C7E8]/25" style={{ "--dur": "13s", "--delay": "-2s" } as CSSProperties} />
        <span className="mote absolute left-[37%] top-[70%] block size-[4px] rounded-full bg-[#A9C7E8]/25" style={{ "--dur": "16s", "--delay": "-9s" } as CSSProperties} />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  A hand-drawn melody line with softly bobbing notes                  */
/* ------------------------------------------------------------------ */

export function MusicStaff({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 640 130"
        aria-hidden
        className="h-auto w-full"
        fill="none"
      >
        {/* the melody line, drawn on scroll */}
        <motion.path
          d="M8 84C80 36 150 122 230 78S380 26 450 70 570 118 632 66"
          stroke="#5578A8"
          strokeWidth="1.6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />

        {/* small glowing points along the line */}
        <g fill="#E8F2FF">
          <circle cx="95" cy="55" r="2.2" className="twinkle" style={{ "--dur": "4.4s" } as CSSProperties} />
          <circle cx="310" cy="42" r="2.4" className="twinkle" style={{ "--dur": "5.2s", "--delay": "-1.8s" } as CSSProperties} />
          <circle cx="500" cy="96" r="2.2" className="twinkle" style={{ "--dur": "4.8s", "--delay": "-0.9s" } as CSSProperties} />
        </g>

        {/* three little notes resting on the line */}
        {[
          { x: 150, y: 92, delay: "0s" },
          { x: 365, y: 46, delay: "-1.2s" },
          { x: 540, y: 84, delay: "-2.1s" },
        ].map((n, i) => (
          <g
            key={i}
            className="note-bob"
            style={{ animationDelay: n.delay, transformOrigin: `${n.x}px ${n.y}px` }}
          >
            <ellipse
              cx={n.x}
              cy={n.y}
              rx="7"
              ry="5"
              fill="#A9C7E8"
              transform={`rotate(-18 ${n.x} ${n.y})`}
            />
            <path
              d={`M${n.x + 6.5} ${n.y - 1.5}V${n.y - 30}`}
              stroke="#A9C7E8"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d={`M${n.x + 6.5} ${n.y - 30}q11 4 8 15`}
              stroke="#A9C7E8"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Ganesh Chaturthi motif — a small, quiet beginning                   */
/*  minimal line art, with one warm diya light                          */
/* ------------------------------------------------------------------ */

export function GaneshMotif({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative">
        {/* the diya's warm glow — the one warm light in the letter */}
        <div
          aria-hidden
          className="diya-glow pointer-events-none absolute left-1/2 top-[74%] -mt-16 h-32 w-32 -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,214,150,0.26),transparent)] blur-md"
          style={{ "--dur": "4.6s" } as CSSProperties}
        />

        <svg
          viewBox="0 0 220 240"
          aria-hidden
          className="relative z-[1] h-auto w-full"
          fill="none"
        >
          {/* halo — a dotted circle of quiet light */}
          <circle
            cx="110"
            cy="92"
            r="70"
            stroke="#6096C8"
            strokeWidth="1.3"
            strokeDasharray="0.5 7"
            strokeLinecap="round"
            opacity="0.85"
          />
          {/* crown */}
          <path
            d="M92 40 Q110 22 128 40"
            stroke="#8FB3DC"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="110" cy="23" r="1.8" fill="#E8F2FF" />
          {/* head */}
          <path
            d="M76 90 Q76 44 110 44 Q144 44 144 90"
            stroke="#8FB3DC"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* ears */}
          <path
            d="M76 82 Q50 72 45 94 Q41 116 68 123"
            stroke="#8FB3DC"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M144 82 Q170 72 175 94 Q179 116 152 123"
            stroke="#8FB3DC"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* eyes — closed, peaceful */}
          <path d="M88 95 q7 5 14 0" stroke="#8FB3DC" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M118 95 q7 5 14 0" stroke="#8FB3DC" strokeWidth="1.7" strokeLinecap="round" />
          {/* tilak */}
          <circle cx="110" cy="67" r="1.7" fill="#A9C7E8" />
          {/* trunk */}
          <path
            d="M110 97 C110 112 107 124 110 136 C113 150 125 158 133 151 C139 145 135 137 128 139"
            stroke="#8FB3DC"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* tusk */}
          <path
            d="M124 100 q11 3 10 13"
            stroke="#8FB3DC"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.85"
          />
          {/* tiny stars around the halo */}
          <path
            d={star4(48, 44, 5)}
            fill="#E8F2FF"
            opacity="0.75"
            className="twinkle"
            style={{ "--dur": "5s" } as CSSProperties}
          />
          <path
            d={star4(170, 54, 4)}
            fill="#A9C7E8"
            opacity="0.6"
            className="twinkle"
            style={{ "--dur": "6s", "--delay": "-2s" } as CSSProperties}
          />
          <path
            d={star4(62, 148, 3.5)}
            fill="#A9C7E8"
            opacity="0.5"
            className="twinkle"
            style={{ "--dur": "5.4s", "--delay": "-1.2s" } as CSSProperties}
          />
          {/* the diya */}
          <path
            d="M84 190 Q110 208 136 190"
            stroke="#8FB3DC"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M96 200 Q110 210 124 200"
            stroke="#8FB3DC"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.55"
          />
          <circle cx="78" cy="196" r="1.5" fill="#6096C8" />
          <circle cx="142" cy="196" r="1.5" fill="#6096C8" />
          {/* wick */}
          <path
            d="M110 191 V196"
            stroke="#8FB3DC"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* the flame — gently flickering */}
          <path
            className="flame-flicker"
            style={
              {
                transformBox: "view-box",
                transformOrigin: "110px 191px",
                "--dur": "3.8s",
              } as CSSProperties
            }
            d="M110 166 C117 174 117 184 110 191 C103 184 103 174 110 166 Z"
            fill="#FFE7BC"
          />
          <path
            className="flame-flicker"
            style={
              {
                transformBox: "view-box",
                transformOrigin: "110px 191px",
                "--dur": "3.8s",
                "--delay": "-0.6s",
              } as CSSProperties
            }
            d="M110 175 C113.5 179 113.5 184 110 187.5 C106.5 184 106.5 179 110 175 Z"
            fill="#FFF7E6"
            opacity="0.9"
          />
        </svg>

        {/* floating light — warm near the flame, cool blue further out */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <span className="mote absolute left-[30%] top-[64%] block size-[4px] rounded-full bg-[#FFDCA8]/50" style={{ "--dur": "12s" } as CSSProperties} />
          <span className="mote absolute left-[68%] top-[70%] block size-[3px] rounded-full bg-[#FFDCA8]/40" style={{ "--dur": "14s", "--delay": "-5s" } as CSSProperties} />
          <span className="mote absolute left-[20%] top-[30%] block size-[3px] rounded-full bg-[#A9C7E8]/40" style={{ "--dur": "15s", "--delay": "-8s" } as CSSProperties} />
          <span className="mote absolute left-[78%] top-[38%] block size-[3px] rounded-full bg-[#A9C7E8]/35" style={{ "--dur": "13s", "--delay": "-3s" } as CSSProperties} />
        </div>
      </div>
    </div>
  );
}
