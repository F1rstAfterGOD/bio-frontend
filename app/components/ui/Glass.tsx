import { ReactNode } from "react";

export default function Glass({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        relative
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-[0_0_80px_rgba(255,255,255,0.05)]
        px-10 py-14
        glass-float relative rounded-3xl
      "
    >
      {children}
    </div>
  );
}
