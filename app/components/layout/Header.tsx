"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isClient = pathname.startsWith("/client");
  const isVisitor = pathname.startsWith("/visitor");

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-8 py-6 font-heading text-sm">
        {/* Logo / Identity */}
        <Link href="/" className="tracking-widest">
          BIO / FRONTEND-DEVELOPER
        </Link>

        {/* Role Switch */}
        <nav className="flex gap-6">
          <Link
            href="/client"
            className={`tracking-widest transition-opacity ${
              isClient ? "opacity-100" : "opacity-40 hover:opacity-100"
            }`}
          >
            CLIENT
          </Link>
          <Link
            href="/visitor"
            className={`tracking-widest transition-opacity ${
              isVisitor ? "opacity-100" : "opacity-40 hover:opacity-100"
            }`}
          >
            VISITOR
          </Link>
        </nav>
      </div>
    </header>
  );
}
