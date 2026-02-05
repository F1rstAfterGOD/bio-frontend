"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Tech = {
  name: string;
  description: string;
  details: string;
};

const techStack: Tech[] = [
  {
    name: "HTML",
    description: "Structure",
    details:
      "Семантическая разметка, доступность, SEO и правильная структура для масштабируемых интерфейсов."
  },
  {
    name: "CSS / Tailwind",
    description: "Visual system",
    details:
      "Glassmorphism, адаптив, анимации, mobile-first и чистый UI без визуального мусора."
  },
  {
    name: "JavaScript",
    description: "Logic",
    details:
      "Асинхронность, события, API, управление состоянием и интерактив."
  },
  {
    name: "React",
    description: "Components",
    details:
      "Hooks, композиция, переиспользуемые компоненты и чистая архитектура."
  },
  {
    name: "Next.js",
    description: "Production",
    details:
      "App Router, Server Components, SEO, оптимизация и деплой под Vercel."
  }
];

export default function Techstack() {
  const [active, setActive] = useState<Tech | null>(null);

  return (
    <section className="relative mt-24">
      {/* Заголовок компактнее */}
      <h2 className="text-2xl mb-6 text-center tracking-tight">
        Technology Stack
      </h2>

      {/* Карточки ближе друг к другу */}
      <div className="flex flex-wrap justify-center gap-3">
        {techStack.map((tech) => (
          <button
            key={tech.name}
            onMouseEnter={() => setActive(tech)}
            onMouseLeave={() => setActive(null)}
            className="
              relative
              rounded-xl
              border border-white/10
              px-10 py-6
              backdrop-blur-md
              bg-white/5
              hover:bg-white/10
              hover:border-white/30
              transition
            "
          >
            <div className="text-sm font-medium">{tech.name}</div>
            <div className="text-[11px] text-white/50">
              {tech.description}
            </div>
          </button>
        ))}
      </div>

      {/* Hover panel с Framer Motion */}
      <AnimatePresence>
        {active && (
          <motion.div
            key={active.name}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-full
              mt-6
              w-[92%]
              max-w-lg
              -translate-x-1/2
              rounded-2xl
              border border-white/10
              bg-black/70
              backdrop-blur-xl
              p-5
            "
          >
            <div className="text-base mb-1">{active.name}</div>
            <p className="text-sm text-white/70 leading-relaxed">
              {active.details}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
