"use client";

import { motion } from "framer-motion";

export default function LoadingIntro() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.8, duration: 0.8 }}
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center tracking-[0.3em]"
      >
        <div>BIO</div>
        <div>FRONTEND</div>
        <div>DEVELOPER</div>
      </motion.div>
    </motion.div>
  );
}
