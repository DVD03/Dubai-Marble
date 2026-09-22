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
        // Subtle gold / warm accent token (used sparingly)
        gold: {
          DEFAULT: "#C89B3C",
          light: "#DFB35A",
          dark: "#A67C26",
          warm: "#C89B3C",
        },
        brand: {
          amber: "#C89B3C",
          coral: "#2F80ED",
          violet: "#10233F",
          azure: "#2F80ED",
          cyan: "#2F80ED",
          gold: "#C89B3C",
        },
        // Dark surfaces: Dark Navy & Deep Blue
        dark: {
          DEFAULT: "#10233F",
          sec: "#102A56",
          card: "#102A56",
          slate: "#1F2937",
        },
        primary: {
          dark: "#10233F",
          DEFAULT: "#1557B0",
          bright: "#2F80ED",
          accent: "#2F80ED",
        },
        surface: {
          light: "#EEF5FF",
          muted: "#F7F9FC",
        },
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
        "gold-gradient": "linear-gradient(135deg, #C89B3C 0%, #DFB35A 100%)",
        "brand-gradient": "linear-gradient(135deg, #10233F 0%, #1557B0 50%, #2F80ED 100%)",
        "azure-gradient": "linear-gradient(135deg, #1557B0, #2F80ED)",
        "violet-gradient": "linear-gradient(135deg, #10233F, #1557B0)",
      },
    },
  },
  plugins: [],
};
export default config;
