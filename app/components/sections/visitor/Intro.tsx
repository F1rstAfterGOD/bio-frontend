"use client";

import { motion } from "framer-motion";
import { useParallax } from "@/app/hooks/useParallax";

export default function Intro() {
  const p = useParallax(30);

  return (
    <section className="min-h-screen flex items-center justify-center px-8 pt-32 text-center">
      <motion.div
        style={{ transform: `translate(${p.x}px, ${p.y}px)` }}
        className="max-w-4xl"
      >
        <h1 className="font-heading text-[10rem] leading-none">
          ANTON
        </h1>

        <p className="mt-8 text-white/60 text-xl">
          19 y.o. frontend developer<br />
          Novosibirsk
        </p>

        <p className="mt-4 text-white/40 text-sm">
          Born 24.02 · Telegram{" "}
          <span className="hover:opacity-100 opacity-60">
            @ff20ede5ede0e2e8e6f320e2e0f1
          </span>
        </p>
      </motion.div>
    </section>
  );
}
