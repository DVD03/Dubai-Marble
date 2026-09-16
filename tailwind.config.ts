import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: "#c9a84c", light: "#e8c97b", dark: "#9a7d2e" },
        dark: { DEFAULT: "#0d0d1a", sec: "#13132a", card: "#1a1a30", slate: "#1e1e38" },
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        inter:  ["Inter",  "sans-serif"],
      },
      animation: {
        shimmer:     "shimmer 3.5s ease-in-out infinite",
        float:       "float 5s ease-in-out infinite",
        "gold-pulse":"gold-pulse 2s ease-in-out infinite",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg,#c9a84c,#e8c97b)",
      },
    },
  },
  plugins: [],
};
export default config;
