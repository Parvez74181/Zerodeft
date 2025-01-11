"use client";
import { useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface MouseEvent {
  clientX: number;
  clientY: number;
}

interface CursorMaskProps {
  children?: ReactNode;
  hovered?: boolean;
}

const CursorMask = ({ children, hovered = false }: CursorMaskProps) => {
  // define cursor coordinates
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // define if mouse is hovered on element
  const [isHovered, setIsHovered] = useState(false);

  // define location of mouse
  useEffect(() => {
    const setFromEvent = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  const size: number = isHovered ? 450 : 30;

  return (
    <div>
      <motion.div
        className="mask"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          width: "100vw",
          height: "100vh",
        }}
        animate={{
          WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ ease: "backOut", duration: 0.4 }}
      />
      <div onMouseEnter={() => setIsHovered(hovered)} onMouseLeave={() => setIsHovered(false)}>
        {children}
      </div>
    </div>
  );
};

export default CursorMask;
