import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#D4AF37", // Gold
        charcoal: "#1A1A1A", // Dark Charcoal for text
        cream: "#F9F7F2", // Very light cream
        goldAccent: "#C5A059",
        accent: "#C19A6B", // Copper
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        libre: ["'Libre Baskerville'", "serif"],
        lato: ["Lato", "sans-serif"],
        source: ["'Source Sans 3'", "sans-serif"],
        script: ["'Great Vibes'", "cursive"],
        // Legacy keys to avoid immediate breakage while migrating
        display: ["'Playfair Display'", "serif"],
        serif: ["'Libre Baskerville'", "serif"],
        sans: ["Lato", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "4px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
export default config;
