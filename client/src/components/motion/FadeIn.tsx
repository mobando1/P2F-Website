import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp, fadeIn, slideInLeft, slideInRight } from "./variants";
import type { ReactNode } from "react";

const directionVariants = {
  up: fadeInUp,
  none: fadeIn,
  left: slideInLeft,
  right: slideInRight,
};

interface FadeInProps {
  children: ReactNode;
  direction?: keyof typeof directionVariants;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function FadeIn({ children, direction = "up", delay = 0, className, once = true }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={directionVariants[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
