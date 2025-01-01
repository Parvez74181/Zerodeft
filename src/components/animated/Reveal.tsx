"use client";

import { motion, useAnimation, useInView } from "framer-motion"; // Importing animation utilities from Framer Motion
import { useEffect, useRef } from "react"; // Importing useRef from React to create a mutable reference

// type of props the component accepts
type Props = {
  children?: React.ReactNode;
  className?: string;
};

// The Reveal component adds an animation to its children when they come into view
const Reveal = ({ children, className }: Props) => {
  const ref = useRef(null); // Create a ref to track the component's DOM element
  const isInView = useInView(ref, { once: true }); // Check if the element is in view, only once
  const controls = useAnimation(); // Hook to control animations

  useEffect(() => {
    if (isInView) {
      controls.start("visible"); // Start the animation when the element is in view
    }
  }, [isInView]);

  return (
    <>
      {/* Wrapper div for the animation, with hidden overflow to keep things clean */}
      <div ref={ref} style={{ position: "relative", overflow: "hidden" }} className={className}>
        {/* motion.div handles the animation logic */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 75 }, // Initial hidden state: off-screen and invisible
            visible: { opacity: 1, y: 0 }, // Final visible state: on-screen and fully visible
          }}
          initial="hidden" // Initial animation state
          animate={controls} // Controls the animation state
          transition={{ duration: 0.5, delay: 0.25 }} // Animation duration and delay
          aria-hidden
        >
          {children} {/* Render any children passed to the Reveal component */}
        </motion.div>
      </div>
    </>
  );
};

export default Reveal; // Export the component for use in other parts of the application
