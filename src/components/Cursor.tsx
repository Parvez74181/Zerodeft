"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const [mouse, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e: { clientX: any; clientY: any }) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  console.log(mouse);
  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.x;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.y;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "#1e91d6",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: "#fff",
      color: "#000",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    },
    contact: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      color: "#000",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 48,
      y: mouseYPosition - 48,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  function projectEnter(event: any) {
    setCursorText("View");
    setCursorVariant("project");
  }

  function projectLeave(event: any) {
    setCursorText("");
    setCursorVariant("default");
  }

  function contactEnter(event: any) {
    setCursorText("👋");
    setCursorVariant("contact");
  }

  function contactLeave(event: any) {
    setCursorText("");
    setCursorVariant("default");
  }

  return (
    <motion.div
      variants={variants}
      className="fixed  z-50 size-10 rounded-full bg-red-500"
      animate={cursorVariant}
      transition={spring}
    >
      <span className="cursorText">{cursorText}</span>
    </motion.div>
  );
};

export default Cursor;
