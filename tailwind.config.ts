import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Feminine skincare palette
        cream: {
          50:  "#FDFAF6",
          100: "#FBF4EC",
          200: "#F7E8D8",
          300: "#F2D9C0",
          400: "#EBCAA8",
          500: "#E0B48A",
        },
        blush: {
          50:  "#FEF6F3",
          100: "#FDEAE3",
          200: "#FAD0C2",
          300: "#F5AE97",
          400: "#EE8A6D",
          500: "#E26847",
          600: "#C94F30",
        },
        gold: {
          50:  "#FDFAF0",
          100: "#FAF2D3",
          200: "#F4E4A0",
          300: "#ECCF63",
          400: "#E1B82E",
          500: "#C9A015",
          600: "#A07D10",
        },
        rose: {
          50:  "#FFF5F7",
          100: "#FFE4EA",
          200: "#FFC9D4",
          300: "#FFA0B4",
          400: "#FF6B8A",
          500: "#F43F6A",
          600: "#D91A4B",
        },
        neutral: {
          50:  "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #FDF8F2 0%, #FDEEE4 50%, #FBE4D5 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #C9A015 0%, #E1B82E 50%, #ECCF63 100%)",
        "blush-gradient":
          "linear-gradient(135deg, #FDEAE3 0%, #FAD0C2 100%)",
      },
      boxShadow: {
        soft: "0 2px 20px rgba(0,0,0,0.06)",
        card: "0 4px 24px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.12)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
