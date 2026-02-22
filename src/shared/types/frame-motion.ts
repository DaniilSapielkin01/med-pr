import { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Card variant
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: Math.min(i * 0.08, 0.4), // максимум 0.4s задержки
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// Title page
export const leftVariantsTitle: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const rightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
