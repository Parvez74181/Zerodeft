import Reveal from "@/components/animation/Reveal";
import BookCall from "@/components/BookCall";
import CTAButton from "@/components/CTAButton";
import CTAContentBlock from "@/components/CTAContentBlock";
import FAQ from "@/components/FAQ";
import ServicesUI from "@/components/ServicesUI";
import TechStack from "@/components/TechStack";
import Swiper from "@/components/WhenToHireSwiper";
import { Award, Target } from "lucide-react";
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
              <p className="text-lg text-zinc-300 text-center md:text-start md:w-[35rem]">
                Our development process ensures fast, secure, and scalable solutions tailored to your needs.
              </p>
            </Reveal>

            <CTAButton text="Build with Experts" />
          </div>

          <div className="w-full md:w-[40%] relative h-full flex justify-center items-center flex-col z-5">
            <Reveal type="right" className="w-full">
              <Image
                src={"/when-to-hire-(5).png"}
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

      <section className="section py-custom">
        <h3 className="uppercase  text-center text-4xl sm:text-6xl md:text-8xl font-semibold">
          <span className="text-gradient-yellow">High-performance</span> solutions that scale with you
        </h3>
      </section>

      <section id="cta" className="bg-gradient-to-b from-dark-1 to-dark-2">
        <CTAContentBlock
          disabled
          btnText="Our achievements"
          description="With a team of 10+ experienced developers, we tackle complex challenges with precision, crafting scalable and high-performance solutions that drive growth while ensuring top-quality results and timely delivery."
          icon={<Award />}
        />
      </section>

      <section id="services" className=" py-custom bg-gradient-to-b from-dark-2 to-dark-2">
        <ServicesUI serviceName="Development" title="Tech Services" />
      </section>

      <section id="how-we-work" className=" pb-custom bg-gradient-to-b from-dark-2 to-dark-blue-2">
        <Swiper />
      </section>

      <section id="cta-2" className=" py-custom bg-gradient-to-b from-dark-blue-2 to-dark-blue-1">
        <CTAContentBlock
          disabled
          btnText="Product design"
          description="Our structured and systematic approach enables us to optimize workflows, enhance transparency, and consistently deliver exceptional results, ensuring every project meets the highest standards of quality and efficiency."
          icon={<Target />}
        />
      </section>

      <section id="techStack" className="bg-gradient-to-b from-dark-blue-1 to-dark-2">
        <TechStack />
      </section>

      <section id="faq" className="py-custom bg-gradient-to-b from-dark-2 to-dark-1">
        <div className="section flex items-start gap-5 justify-between  lg:flex-row flex-col">
          <div className="w-full lg:w-1/2">
            <Reveal type="left">
              <h2 className="sm:text-5xl text-4xl md:text-6xl lg:text-7xl font-semibold uppercase text-center md:text-start">
                faq's
              </h2>
            </Reveal>
          </div>

          <div className="w-full lg:w-2/3">
            <Reveal type="right">
              <FAQ />
            </Reveal>
          </div>
        </div>
      </section>

      <section id="book-a-call" className="bg-gradient-to-b pb-0 rounded-custom rounded-ss-none rounded-se-none ">
        <BookCall />
      </section>
    </>
  );
};

export default page;
