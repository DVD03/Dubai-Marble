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
        gold: { DEFAULT: "#f59e0b", light: "#fbbf24", dark: "#d97706" },
        brand: {
          amber: "#f59e0b",
          coral: "#ef4444",
          violet: "#7c3aed",
          azure: "#0284c7",
          cyan: "#06b6d4",
        },
        dark: { DEFAULT: "#0b0c16", sec: "#121324", card: "#181932", slate: "#1e2040" },
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        inter:  ["Inter",  "sans-serif"],
        arabic: ["Cairo", "Tajawal", "sans-serif"],
      },
      animation: {
        shimmer:     "shimmer 3.5s ease-in-out infinite",
        float:       "float 5s ease-in-out infinite",
        "gold-pulse":"gold-pulse 2s ease-in-out infinite",
        "logo-glow": "logo-glow 4s ease-in-out infinite alternate",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #f59e0b, #fbbf24)",
        "brand-gradient": "linear-gradient(135deg, #f59e0b 0%, #ef4444 35%, #7c3aed 70%, #0284c7 100%)",
        "azure-gradient": "linear-gradient(135deg, #0284c7, #38bdf8)",
        "violet-gradient": "linear-gradient(135deg, #7c3aed, #a855f7)",
      },
    },
  },
  plugins: [],
};
export default config;
