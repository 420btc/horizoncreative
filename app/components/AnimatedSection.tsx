"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export type Direction = "up" | "down" | "left" | "right";

interface AnimatedSectionProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

const getInitial = (direction: string) => {
  switch (direction) {
    case "up":
      return { opacity: 0, y: 60 };
    case "down":
      return { opacity: 0, y: -60 };
    case "left":
      return { opacity: 0, x: -60 };
    case "right":
      return { opacity: 0, x: 60 };
    default:
      return { opacity: 0, y: 60 };
  }
};

export default function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: { duration: 0.9, delay, ease: "easeOut" },
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={getInitial(direction)}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}
