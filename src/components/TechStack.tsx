"use client";

import { useRef, useState } from "react";
import TextHoverShift from "./animation/TextHoverShift";
import Button from "./ui/Button";
import techStack from "../../data/TechStackData";
import Image from "next/image";

type TechStackProps = {
  name: string;
  icon: string;
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

          <div className="flex flex-wrap items-center gap-4 lg:gap-3 *:cursor-pointer *:bg-transparent *:px-8 *:py-35 *:border *:border-white *:*:!text-white *:uppercase *:rounded-full">
            {categories.map((category) => (
              <Button
                key={category}
                id={category}
                onPress={() => handleOnClick(category)}
                className={`px-8 py-3 border border-white uppercase rounded-full transition-all ${
                  selectedCategory === category
                    ? "!bg-white *:!text-black font-bold" // Highlighted button
                    : "bg-transparent text-white hover:scale-105"
                }`}
              >
                <TextHoverShift>{category}</TextHoverShift>
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <ul className="flex flex-wrap gap-5 md:gap-10">
            {techStackData.map((item, i) => (
              <li
                key={i}
                className="size-36 sm:size-52 lg:size-64 xl:size-80 flex items-center justify-center flex-col border rounded-full border-zinc-500 text-xl gap-2"
              >
                <Image
                  src={`/${item.icon}.svg`}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="w-12  md:w-16 lg:w-20 invert"
                />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TechStack;
