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
        gold: { DEFAULT: "#f59e0b", light: "#fbbf24", dark: "#d97706", warm: "#c9a84c" },
        brand: {
          amber: "#f59e0b",
          coral: "#f59e0b",
          violet: "#d97706",
          azure: "#f59e0b",
          cyan: "#fbbf24",
          gold: "#f59e0b",
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
        "gold-gradient": "linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #fbbf24 100%)",
        "brand-gradient": "linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #fbbf24 100%)",
        "azure-gradient": "linear-gradient(135deg, #d97706, #fbbf24)",
        "violet-gradient": "linear-gradient(135deg, #d97706, #fbbf24)",
      },
    },
  },
  plugins: [],
};
export default config;
