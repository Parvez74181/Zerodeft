import Reveal from "@/components/animation/Reveal";
import CTAButton from "@/components/CTAButton";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <section id="hero" className="section">
        <div className="flex  md:flex-row flex-col w-full gap-3  pt-5 md:pt-10 md:justify-between items-center">
          <div className="w-full md:w-[50%] relative h-full flex justify-center items-center md:items-start flex-col gap-3">
            <Reveal type="left">
              <h1 className="hero-section-title ">Building High-Performance and Scalable Websites</h1>
            </Reveal>

            <Reveal type="left" delay={0.4} className="w-full">
              <p className="text-lg text-zinc-300 text-center md:text-start">
                Our development process ensures fast, secure, and scalable solutions tailored to your needs.
              </p>
            </Reveal>

            <CTAButton text="Let’s Develop It" />
          </div>

          <div className="w-full md:w-[40%] relative h-full flex justify-center items-center flex-col z-5">
            <Reveal type="right" className="w-full">
              <Image
                src={"/when-to-hire-(1).png"}
                alt="hero-bg"
                className="w-full object-contain animate-float "
                width={2000}
                height={2000}
                sizes="50vw"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
