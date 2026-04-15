import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./dictionaries/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas:  "var(--color-bg)",
        surface: "var(--color-surface)",
        ink:     "var(--color-ink)",
        muted:   "var(--color-muted)",
        subtle:  "var(--color-subtle)",
        accent:  "var(--color-accent)",
      },
      fontFamily: {
        sans:  ["var(--font-inter)",     "system-ui",    "sans-serif"],
        serif: ["var(--font-dm-serif)",  "Georgia",      "serif"],
        mono:  ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)",    { lineHeight: "1.0",  letterSpacing: "-0.03em"  }],
        "display-lg": ["clamp(2.25rem, 5vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)",  { lineHeight: "1.15", letterSpacing: "-0.02em"  }],
        "body-lg":    ["1.125rem",  { lineHeight: "1.75" }],
        "body-sm":    ["0.875rem",  { lineHeight: "1.6"  }],
        "label":      ["0.75rem",   { lineHeight: "1",   letterSpacing: "0.12em" }],
      },
      spacing: {
        section:    "clamp(2.5rem, 5vw, 5rem)",
        "section-sm": "clamp(1.5rem, 3vw, 3rem)",
      },
      maxWidth: {
        prose:  "68ch",
        layout: "1320px",
      },
    },
  },
  plugins: [],
};

export default config;
