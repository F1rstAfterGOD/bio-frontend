"use client";

import { useState } from "react";

export default function OsuEasterEgg() {
  const [active, setActive] = useState(false);

  return (
    <span
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="relative inline-flex items-center cursor-default"
    >
      {/* text */}
      <span className="relative z-10 text-white">
        osu!
      </span>

      {/* glow rings */}
      <span
        className={`
          pointer-events-none
          absolute
          left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          w-20 h-20
          rounded-full
          border border-white/40
          transition-all duration-500 ease-out
          ${active ? "opacity-100 scale-100" : "opacity-0 scale-75"}
        `}
      />

      <span
        className={`
          pointer-events-none
          absolute
          left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          w-28 h-28
          rounded-full
          bg-white/10
          blur-xl
          transition-all duration-700 ease-out
          ${active ? "opacity-100 scale-100" : "opacity-0 scale-75"}
        `}
      />
    </span>
  );
}
