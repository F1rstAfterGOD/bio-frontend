import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen grid grid-cols-2 font-heading">
      {/* BIO / VISITOR */}
      <Link
        href="/visitor"
        className="flex flex-col items-center justify-center gap-6
                   border-r border-white/20
                   hover:bg-white hover:text-black
                   transition-colors duration-300"
      >
        <h1 className="text-6xl tracking-tight">BIO</h1>
        <span className="text-sm tracking-widest opacity-60">
          VISIT
        </span>
      </Link>

      {/* FRONTEND / CLIENT */}
      <Link
        href="/client"
        className="flex flex-col items-center justify-center gap-6
                   hover:bg-white hover:text-black
                   transition-colors duration-300"
      >
        <h1 className="text-6xl tracking-tight text-center">
          FRONTEND<br />DEVELOPER
        </h1>
        <span className="text-sm tracking-widest opacity-60">
          CLIENT
        </span>
      </Link>
    </main>
  );
}
