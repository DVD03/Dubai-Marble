import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Professional Deep Royal Blue + Dark Orange Theme
        primary: {
          DEFAULT: "#123B6D", // Deep Royal Blue
          light: "#2563A6", // Professional Blue
          dark: "#0B1F33", // Navy
        },
        secondary: {
          DEFAULT: "#D96B27", // Rich Dark Orange
          light: "#FCE8D8", // Soft Orange
          dark: "#B8521A", // Darker Orange
        },
        // Background colors
        background: {
          DEFAULT: "#FFFFFF",
          light: "#F7F9FC", // Professional light background
          dark: "#0B1F33", // Navy background
        },
        // Text colors
        text: {
          DEFAULT: "#263238", // Dark Gray
          secondary: "#64748B", // Muted Gray
          light: "#9CA3AF",
        },
        // Border colors
        border: {
          DEFAULT: "#E5E7EB",
          light: "#F3F4F6",
        },
        // Professional color palette
        blue: {
          DEFAULT: "#123B6D",
          light: "#2563A6",
          soft: "#E8F1FA",
        },
        orange: {
          DEFAULT: "#D96B27",
          light: "#FCE8D8",
        },
        // Legacy aliases for compatibility
        dark: {
          DEFAULT: "#111827",
          card: "#1F2937",
        },
        surface: {
          light: "#F7F9FC",
          marble: "#FFFFFF",
        },
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        inter:  ["Inter",  "sans-serif"],
        serif:  ["Playfair Display", "Georgia", "serif"],
        arabic: ["Cairo", "Tajawal", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "float": "float 5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(135deg, #123B6D 0%, #2563A6 100%)",
        "secondary-gradient": "linear-gradient(135deg, #D96B27 0%, #F5A463 100%)",
        "dark-gradient": "linear-gradient(135deg, #0B1F33 0%, #123B6D 100%)",
        "light-gradient": "linear-gradient(135deg, #FFFFFF 0%, #F7F9FC 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
