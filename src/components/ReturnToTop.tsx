"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Tooltip } from "@heroui/react";

const ReturnToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300); // Show button after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Return to top button */}
      {isVisible && (
        <>
          <Tooltip content="Return to top" showArrow={true} color="foreground">
            <div
              onClick={scrollToTop}
              className="fixed bottom-5 right-5 bg-white size-10 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-gray-100 transition !z-[99999999999999999999999999999999999999999999999999]"
            >
              <ArrowUp className="text-dark-blue-1" />
            </div>
          </Tooltip>
        </>
      )}
    </>
  );
};

export default ReturnToTop;
