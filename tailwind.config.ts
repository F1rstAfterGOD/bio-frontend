import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-satoshi)"],
        body: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

export default config;
