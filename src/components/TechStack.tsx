"use client";

import { useRef, useState } from "react";
import TextHoverShift from "./animation/TextHoverShift";
import Button from "./ui/Button";
import techStack from "../../data/TechStackData";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "motion/react";
type TechStackProps = {
  name: string;
  icon: string;
};

// Independent item component for each <li>
const TechItem = ({ item }: { item: any }) => {
  // Motion values for independent animation
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);

  const config = { stiffness: 50, damping: 15 };

  // Apply a smooth spring effect for out transition
  const springX = useSpring(x, config);
  const springY = useSpring(y, config);
  const springScale = useSpring(scale, config);

  // Move the item slightly based on cursor position
  const handleHoverMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left - rect.width / 2) * 0.2;
    const offsetY = (e.clientY - rect.top - rect.height / 2) * 0.2;
    x.set(offsetX);
    y.set(offsetY);
    scale.set(0.95);
  };

  // Reset to original position when hover ends
  const handleHoverEnd = (e: React.MouseEvent) => {
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  return (
    <motion.li
      className="size-36 sm:size-52 lg:size-64 xl:size-80 flex items-center justify-center flex-col border rounded-full border-zinc-500 text-xl gap-2 "
      style={{ x: springX, y: springY, scale: springScale }}
      onMouseMove={handleHoverMove}
      onMouseLeave={handleHoverEnd}
    >
      <Image
        src={`/${item.icon}.svg`}
        alt={item.name}
        width={300}
        height={300}
        className="w-12 md:w-16 lg:w-20 invert"
      />
      {item.name}
    </motion.li>
  );
};

const categories = ["frontend", "backend", "database", "cms"];
const TechStack = () => {
  const [techStackData, setTechStackData] = useState<TechStackProps[]>(techStack[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>("frontend");

  const handleOnClick = (id: string) => {
    setSelectedCategory(id);
    switch (id) {
      case "frontend":
        setTechStackData(techStack[0]);
        break;
      case "backend":
        setTechStackData(techStack[1]);
        break;
      case "database":
        setTechStackData(techStack[2]);
        break;
      case "cms":
        setTechStackData(techStack[3]);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="section">
        <div className=" flex lg:items-center justify-between lg:flex-row flex-col gap-5">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-semibold uppercase">
            Technology <br /> Stack
          </h3>

          <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal items-center gap-4 lg:gap-3 *:cursor-pointer *:bg-transparent *:px-8 *:py-35 *:border *:border-white *:*:!text-white *:uppercase *:rounded-full">
            {categories.map((category) => (
              <Button
                key={category}
                id={category}
                onPress={() => handleOnClick(category)}
                className={`px-8 py-3 border border-white uppercase rounded-full transition-all ${
                  selectedCategory === category
                    ? "!bg-white *:*:!text-black font-bold" // Highlighted button
                    : "bg-transparent text-white hover:scale-105"
                }`}
              >
                <TextHoverShift>{category}</TextHoverShift>
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <ul className="flex flex-wrap justify-center gap-5 md:gap-10">
            {techStackData.map((item, i) => (
              <TechItem key={i} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TechStack;
