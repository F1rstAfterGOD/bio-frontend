"use client";

import { useEffect, useState } from "react";

export default function VisitCounter() {
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visit")
      .then(res => res.json())
      .then(data => setVisits(data.visits))
      .catch(() => {});
  }, []);

  if (!visits) return null;

  return (
    <div className="fixed bottom-6 left-6 text-xs font-mono text-white/40">
      visits: {visits}
    </div>
  );
}
