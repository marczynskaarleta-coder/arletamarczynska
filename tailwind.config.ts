import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F7F5F0",
        ink: "#0D0D0D",
        muted: "#7A7A72",
        subtle: "#E8E5DF",
        accent: "#C8963E",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "label": ["0.75rem", { lineHeight: "1", letterSpacing: "0.12em" }],
      },
      spacing: {
        section: "clamp(5rem, 10vw, 10rem)",
        "section-sm": "clamp(3rem, 6vw, 6rem)",
      },
      maxWidth: {
        prose: "68ch",
        layout: "1320px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
