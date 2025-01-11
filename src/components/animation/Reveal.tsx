"use client";

import { motion, useAnimation, useInView } from "motion/react"; // Importing Framer Motion utilities
import { useEffect, useRef } from "react"; // Importing React hooks

// Type of props the component accepts
type Props = {
  children?: React.ReactNode;
  className?: string;
  type?: "left" | "right" | "top" | "bottom";
  delay?: number;
};

// The Reveal component adds an animation to its children when they come into view
const Reveal = ({ children, className, type = "bottom", delay = 0.25 }: Props) => {
  const ref = useRef(null); // Ref to track the component's DOM element
  const isInView = useInView(ref); // Check if the element is in view, only once
  const controls = useAnimation(); // Animation controls

  // Determine animation direction and distance based on the `type` prop
  const directionMap = {
    bottom: { axis: "y", value: 75 },
    top: { axis: "y", value: -75 },
    left: { axis: "x", value: -75 },
    right: { axis: "x", value: 75 },
  };

  const { axis, value } = directionMap[type] || directionMap.bottom; // Fallback to bottom

  // Trigger animation when the element is in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Reset to hidden when out of view
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.8, [axis]: value }, // Hidden state: off-screen with reduced scale
          visible: { opacity: 1, scale: 1, x: 0, y: 0 }, // Visible state: fully on-screen with normal scale
        }}
        initial="hidden" // Start from hidden state
        animate={controls} // Controls the animation state
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: delay }} // Spring animation with stiffness and damping
        aria-hidden
      >
        {children} {/* Render any children passed to the Reveal component */}
      </motion.div>
    </div>
  );
};

export default Reveal; // Export the component for use in other parts of the application
