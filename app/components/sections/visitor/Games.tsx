"use client";

import Image from "next/image";
import { useParallax } from "@/app/hooks/useParallax";

const games = [
  { name: "Dota 2", stat: "5700 MMR", img: "/images/games/dota2.png" },
  { name: "osu!", stat: "2000pp", img: "/images/games/osu.png" },
  { name: "CS2", stat: "Competitive", img: "/images/games/cs2.png" },
  { name: "Path of Exile", stat: "Endgame", img: "/images/games/poe.png" },
];

<p className="text-white/60 hover:text-white">
  5700 MMR
  <span className="block text-xs opacity-0 hover:opacity-60">
    Divine is temporary. Grind is eternal.
  </span>
</p>


export default function Games() {
  const p = useParallax(15);

  return (
    <section className="py-40 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        {games.map((g) => (
          <div
            key={g.name}
            className="group text-center"
            style={{
              transform: `translate(${p.x}px, ${p.y}px)`,
            }}
          >
            <div className="relative w-40 h-40 mx-auto mb-6
              transition-transform duration-300
              group-hover:scale-110 group-hover:-translate-y-2">
              <Image
                src={g.img}
                alt={g.name}
                fill
                className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]"
              />
            </div>

            <h3 className="font-heading text-3xl">{g.name}</h3>
            <p className="text-white/60">{g.stat}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
