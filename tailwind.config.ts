import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: "#72836F",
          light: "#8C9D89",
          dark: "#4B5A49",
          deep: "#343E32",
        },
        ivory: {
          DEFAULT: "#F5F3EC",
          light: "#FAF9F5",
          dark: "#E8E4D8",
        },
        lavender: {
          DEFAULT: "#EAE6F4",
          light: "#F4F1FA",
          dark: "#C9C0E2",
        },
        "powder-blue": {
          DEFAULT: "#E5EEF5",
          light: "#F1F6FA",
          dark: "#BFD5E7",
        },
        "soft-coral": {
          DEFAULT: "#F4E2DD",
          light: "#FAEEEB",
          dark: "#E3BEB5",
        },
        seafoam: {
          DEFAULT: "#DCEBE3",
          light: "#ECF5F0",
          dark: "#B8D6C6",
        },
        ink: {
          DEFAULT: "#2B3229",
          light: "#4A5248",
          muted: "#667064",
          faint: "#8C978A",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-caveat)", "cursive"],
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
        "3xl": "28px",
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(43, 50, 41, 0.07)",
        hover: "0 20px 40px -15px rgba(43, 50, 41, 0.12)",
        subtle: "0 4px 20px -2px rgba(43, 50, 41, 0.05)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "pulse-gentle": "pulseGentle 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGentle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
