"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type Props = {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  parentClassName?: string;
};
const TextHoverShift = ({ children, text, className, parentClassName }: Props) => {
  const textVariants = {
    rest: { y: 0, opacity: 1 },
    hover: { y: -30, opacity: 0 },
  };

  const duplicateVariants = {
    rest: { y: 30, opacity: 0 },
    hover: { y: 0, opacity: 1 },
  };

  return (
    <motion.span
      initial="rest"
      whileHover="hover"
      animate="rest"
      whileTap="rest"
      className={cn("w-full h-full overflow-hidden inline-flex justify-center items-center", parentClassName)}
    >
      <motion.span
        variants={textVariants}
        style={{
          position: "relative",
          display: "inline-block",
        }}
        className={className}
      >
        {children || text}
      </motion.span>
      <motion.span
        variants={duplicateVariants}
        style={{
          position: "absolute",

          display: "inline-block",
        }}
        className={className}
      >
        {children || text}
      </motion.span>
    </motion.span>
  );
};

export default TextHoverShift;
