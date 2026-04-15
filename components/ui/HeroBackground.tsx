"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden
    >
      {/* Fine grid — uses CSS vars so it adapts to theme */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            "linear-gradient(var(--grid-line) 1px, transparent 1px)",
            "linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />
      {/* Warm ambient light — slow drift */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "70vw",
          height: "70vw",
          top: "-15%",
          left: "-10%",
          background:
            "radial-gradient(circle, var(--hero-glow-1) 0%, transparent 65%)",
        }}
        animate={{ x: [0, 30, 0], y: [0, 18, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Cool ambient — opposing drift */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "50vw",
          height: "50vw",
          bottom: "0%",
          right: "-5%",
          background:
            "radial-gradient(circle, var(--hero-glow-2) 0%, transparent 65%)",
        }}
        animate={{ x: [0, -20, 0], y: [0, -12, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
    </div>
  );
}
