"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] w-3 h-3 rounded-full bg-white mix-blend-difference transition-transform duration-150"
      style={{
        transform: `translate(${pos.x - 6}px, ${pos.y - 6}px)`,
      }}
    />
  );
}
