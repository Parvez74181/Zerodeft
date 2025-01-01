"use client";

import { motion } from "framer-motion";

type Props = {
  children?: React.ReactNode;
  text?: string;
};
const TextHoverShift = ({ children, text }: Props) => {
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
      whileTap="hover"
      style={{
        position: "relative",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
      className="w-full h-full"
    >
      <motion.span
        variants={textVariants}
        style={{
          position: "relative",
          display: "inline-block",
        }}
      >
        {children || text}
      </motion.span>
      <motion.span
        variants={duplicateVariants}
        style={{
          position: "absolute",

          display: "inline-block",
        }}
      >
        {children || text}
      </motion.span>
    </motion.span>
  );
};

export default TextHoverShift;
