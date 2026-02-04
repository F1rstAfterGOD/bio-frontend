"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function OsuCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [hoverTime, setHoverTime] = useState(0);
  const [active, setActive] = useState(false);

  function handleMouseEnter() {
    setHoverTime(Date.now());
  }

  function handleMouseLeave() {
    setHoverTime(0);
    setActive(false);
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `
      rotateX(${(-y / 20)}deg)
      rotateY(${(x / 20)}deg)
    `;
  }

  function handleHoverCheck() {
    if (hoverTime && Date.now() - hoverTime > 1500) {
      setActive(true);
    }
  }

  return (
    <div
      className="relative w-64 h-64 perspective-1000"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onMouseOver={handleHoverCheck}
    >
      {/* Card */}
      <div
        ref={ref}
        className="w-full h-full rounded-3xl bg-black border border-white/10
                   flex items-center justify-center transition-transform duration-200"
      >
        <img
          src="/images/games/osu.png"
          alt="osu!"
          className="w-32 h-32 select-none pointer-events-none"
        />
      </div>

      {/* osu circle */}
      {active && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 rounded-full border border-white/40
                     flex items-center justify-center"
        >
          <span className="text-sm tracking-widest text-white/70">
            2000pp
          </span>
        </motion.div>
      )}
    </div>
  );
}
