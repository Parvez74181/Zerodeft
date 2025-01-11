"use client";

import { motion, useAnimation, useInView, Variant } from "motion/react";
import { JSX, useEffect, useRef } from "react";

type AnimatedTextProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
  animationSpeed?: number;
};

const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  once = true,
  animationSpeed = 0.01,
  animation,
}: AnimatedTextProps) => {
  const ref = useRef(null);
  const textArray = Array.isArray(text) ? text : [text];
  const controls = useAnimation();
  const isInView = useInView(ref, { amount: 0.5 });

  const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: animationSpeed,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <>
      <Wrapper className={className}>
        <span className="sr-only">{textArray.join(" ")}</span>

        <motion.span
          ref={ref}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: animationSpeed } },
          }}
          initial="hidden"
          animate={controls}
        >
          {textArray.map((line, lineIndex) => (
            <span className="block" key={`${line}-${lineIndex}`}>
              {line.split(" ").map((word, wordIndex) => (
                <span className="inline-block" key={`${word}-${wordIndex}`}>
                  {word.split("").map((char, charIndex) => (
                    <motion.span
                      key={`${char}-${charIndex}`}
                      className="inline-block"
                      variants={animation || defaultAnimations}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <span className="inline-block">&nbsp;</span>
                </span>
              ))}
            </span>
          ))}
        </motion.span>
      </Wrapper>
    </>
  );
};

export default AnimatedText;
