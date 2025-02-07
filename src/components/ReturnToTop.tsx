"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

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
        <div
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-white size-10 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-gray-100 transition"
        >
          <ArrowUp className="text-dark-blue-1" />
        </div>
      )}
    </>
  );
};

export default ReturnToTop;
