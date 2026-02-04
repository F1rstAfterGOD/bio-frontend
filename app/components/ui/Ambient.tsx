"use client";

import { motion } from "framer-motion";

export default function Ambient() {
  return (
    <motion.div
      className="fixed inset-0 -z-10"
      animate={{ opacity: [0.95, 1, 0.95] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
