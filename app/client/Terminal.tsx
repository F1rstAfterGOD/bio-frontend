"use client";

import { useState } from "react";

const COMMANDS = [
  "$ npm run build",
  "✔ optimized production build",
  "$ git status",
  "clean working tree",
  "# focus on quality",
];

export default function Terminal() {
  const [index, setIndex] = useState(0);

  return (
    <div
      onClick={() => setIndex((prev) => (prev + 1) % COMMANDS.length)}
      className="fixed bottom-8 right-8 w-72 border border-white/10 rounded-xl p-4 font-mono text-xs text-white/80 cursor-pointer backdrop-blur-sm bg-black/40"
    >
      <div className="flex gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-white/40" />
        <span className="w-2 h-2 rounded-full bg-white/20" />
        <span className="w-2 h-2 rounded-full bg-white/10" />
      </div>

      <pre className="whitespace-pre-wrap leading-relaxed">
        {COMMANDS[index]}
      </pre>
    </div>
  );
}
