import OsuEasterEgg from "./OsuEasterEgg";

export default function GamesText() {
  return (
    <section className="text-center space-y-6">
      <p className="uppercase tracking-[0.3em] text-white/40 text-sm">
        Games
      </p>

      <div className="text-white text-xl flex items-center justify-center gap-2">
        <span>Dota 2 ·</span>
        <OsuEasterEgg />
        <span>· CS2 · Path of Exile</span>
      </div>

      <div className="text-white/50 text-sm space-y-1">
        <p>osu! — 2000pp</p>
        <p>Dota 2 — 5700 MMR</p>
      </div>
    </section>
  );
}
