"use client";

import { animate, useInView, useIsomorphicLayoutEffect } from "motion/react";
import { useRef } from "react";

type Props = {
  from?: number;
  duration?: number;
  to: number;
  suffix?: React.ReactElement | string | number;
  prefix?: React.ReactElement | string | number;
  className?: string;
};
const Counter = ({ from = 0, to, duration = 1.5, prefix = "", suffix = "", className }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!inView) return;
    element.textContent = from.toFixed(0);

    const controls = animate(from, to, {
      duration: duration,
      ease: "easeInOut",
      onUpdate(value) {
        element.textContent = prefix + " " + value.toFixed(0) + " " + suffix;
      },
    });

    return () => controls.stop();
  }, [ref, inView, from, to]);
  return (
    <>
      <span className={className} ref={ref}>
        {" "}
      </span>
    </>
  );
};

export default Counter;
