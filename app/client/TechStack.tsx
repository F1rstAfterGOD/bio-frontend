"use client";

import { useState } from "react";

const STACK = [
  {
    name: "React",
    description: "Component-driven UI. Predictable state. Clean architecture.",
  },
  {
    name: "Next.js",
    description: "Server-first mindset. SEO, routing, performance.",
  },
  {
    name: "Tailwind",
    description: "Design directly in code. No abstraction noise.",
  },
  {
    name: "TypeScript",
    description: "Less guessing. More confidence. Safer refactors.",
  },
];

export default function TechStack() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="w-full max-w-3xl mx-auto mt-24">
      <h2 className="text-2xl font-light tracking-tight mb-8 text-center">
        Stack
      </h2>

      <div className="space-y-4">
        {STACK.map((tech, index) => (
          <div
            key={tech.name}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            className="group border border-white/10 rounded-xl p-6 transition-all duration-300"
          >
            <div className="flex justify-between items-center">
              <span className="text-lg tracking-wide">
                {tech.name}
              </span>

              <span className="text-xs opacity-40 group-hover:opacity-80 transition">
                hover
              </span>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                active === index ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-white/70 leading-relaxed">
                {tech.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
