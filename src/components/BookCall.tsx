import React from "react";
import Reveal from "./animation/Reveal";
import Button from "./ui/Button";
import TextHoverShift from "./animation/TextHoverShift";
import { Calendar } from "lucide-react";

const BookCall = () => {
  return (
    <>
      <div className="   flex justify-center items-center">
        <div className="section pb-custom">
          <div className="relative text-black bg-white lg:w-[80%] xl:w-2/3 mx-auto md:min-h-[50vh] rounded-2xl md:rounded-[1.5rem] lg:rounded-[2.5rem] flex justify-center items-center flex-col gap-2 md:gap-0 p-8">
            <Reveal>
              <h2 className="sm:text-5xl text-3xl md:text-5xl lg:text-6xl font-semibold uppercase text-center w-full">
                Ready to discuss <br /> your project with us?
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-lg text-center lg:px-14 py-3">
                Let’s talk about how we can craft a user experience that not only looks great but drives real growth for
                your product.
              </p>
            </Reveal>

            <Reveal>
              <Button className="bg-blue-1 text-white uppercase md:w-52 w-44 h-12 font-semibold text-base md:text-lg">
                <TextHoverShift>
                  <span className="text-white flex items-center justify-center gap-2">
                    Book a call <Calendar className="w-5 md:w-6" />
                  </span>
                </TextHoverShift>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCall;
