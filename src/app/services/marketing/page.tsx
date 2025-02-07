import Reveal from "@/components/animation/Reveal";
import CTAButton from "@/components/CTAButton";
import CTAContentBlock from "@/components/CTAContentBlock";
import { Award } from "lucide-react";
import Image from "next/image";
import React from "react";
import ourServices from "../../../../data/OurServices";
import { cn } from "@/lib/utils";
import Swiper from "@/components/WhenToHireSwiper";
import FAQ from "@/components/FAQ";
import BookCall from "@/components/BookCall";

const page = () => {
  const marketingService = ourServices.find((service) => service.name === "Marketing");
  return (
    <>
      <section id="hero" className="section">
        <div className="flex  md:flex-row flex-col w-full gap-3  pt-5 md:pt-10 md:justify-between items-center">
          <div className="w-full md:w-[60%] relative h-full flex justify-center items-center md:items-start flex-col gap-3">
            <Reveal type="left">
              <h1 className="hero-section-title ">Driving Growth with Data-Driven Marketing Strategies</h1>
            </Reveal>

            <Reveal type="left" delay={0.4} className="w-full">
              <p className="text-lg text-zinc-300 text-center md:text-start">
                We help you reach the right audience and maximize conversions through strategic digital marketing.
              </p>
              <CTAButton text="Get More Leads Today" />
            </Reveal>
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

      <section className=" py-custom">
        <CTAContentBlock
          disabled
          btnText="Our achievements"
          description="Our comprehensive product scaling solutions and post-release support services are designed to drive exceptional, long-term business growth across diverse industries, ensuring scalability, stability, and success in an ever-evolving market."
          icon={<Award />}
        />
      </section>

      <section className="section">
        <div className="text-dark relative p-3 md:p-5 lg:p-10 bg-white rounded-custom">
          <Reveal type="top">
            <h2 className="sm:text-6xl text-5xl md:text-7xl lg:text-9xl font-semibold uppercase">UPSELL SERVICES </h2>
          </Reveal>
          <ul className="w-full">
            {marketingService?.subServices.map((subService, i) => (
              <li
                key={i}
                className={cn(
                  "w-full text-2xl py-3 md:py-5 uppercase font-semibold relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:rounded-full after:bg-zinc-500 ",
                  i === 4 && "pb-0"
                )}
              >
                {subService}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="how-we-work" className=" py-custom">
        <Swiper />
      </section>

      <section id="faq" className="">
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

      <section
        id="book-a-call"
        className="bg-gradient-to-b py-custom pb-0 rounded-custom rounded-ss-none rounded-se-none "
      >
        <BookCall />
      </section>
    </>
  );
};

export default page;
