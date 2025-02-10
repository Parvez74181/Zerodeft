"use client";

import TextHoverShift from "./animation/TextHoverShift";
import Button from "./ui/Button";

const TechStack = () => {
  const handleOnClick = () => {};
  return (
    <>
      <div className="section">
        <div className=" flex items-center justify-between">
          <h3 className="text-5xl md:text-6xl font-semibold uppercase">
            Technology <br /> Stack
          </h3>
          <div
            className="flex items-center gap-3 *:cursor-pointer *:bg-transparent *:px-8 *:py-35 *:border *:border-white *:*:!text-white *:uppercase *:rounded-full"
            onClick={handleOnClick}
          >
            <Button id="frontend">
              <TextHoverShift>frontend</TextHoverShift>
            </Button>
            <Button id="backend">
              <TextHoverShift>backend</TextHoverShift>
            </Button>
            <Button id="database">
              <TextHoverShift>database</TextHoverShift>
            </Button>
            <Button id="cms">
              <TextHoverShift>cms</TextHoverShift>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
