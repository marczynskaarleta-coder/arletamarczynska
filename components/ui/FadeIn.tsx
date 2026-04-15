"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";
import React from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay,
    },
  }),
};

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

export function FadeIn({ children, delay = 0, className, as = "div" }: Props) {
  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      custom={delay}
      variants={variants}
    >
      {children}
    </MotionComponent>
  );
}
