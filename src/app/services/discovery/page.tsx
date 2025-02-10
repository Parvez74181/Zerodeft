import Reveal from "@/components/animation/Reveal";
import BookCall from "@/components/BookCall";
import CTAButton from "@/components/CTAButton";
import CTAContentBlock from "@/components/CTAContentBlock";
import FAQ from "@/components/FAQ";
import ServicesUI from "@/components/ServicesUI";
import Swiper from "@/components/WhenToHireSwiper";
import { Award, Telescope } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <section id="hero" className="section">
        <div className="flex  md:flex-row flex-col w-full gap-3  pt-5 md:pt-10 md:justify-between items-center">
          <div className="w-full md:w-[50%] relative h-full flex justify-center items-center md:items-start flex-col gap-3">
            <Reveal type="left">
              <h1 className="hero-section-title ">Uncovering Insights to Shape the Perfect Strategy</h1>
            </Reveal>

            <Reveal type="left" delay={0.4} className="w-full">
              <p className="text-lg text-zinc-300 text-center md:text-start md:w-[35rem]">
                We analyze your business, audience, and goals to build a solid foundation for success.
              </p>
            </Reveal>

            <CTAButton text="Hire a designer" />
          </div>

          <div className="w-full md:w-[40%] relative h-full flex justify-center items-center flex-col z-5">
            <Reveal type="right" className="w-full">
              <Image
                src={"/when-to-hire-(7).png"}
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

      <section className=" py-custom bg-gradient-to-b from-dark-1 to-dark-2">
        <div className="section">
          <h3 className="uppercase  text-center text-4xl sm:text-6xl md:text-8xl font-semibold">
            <span className="text-gradient-yellow">Strategic research</span> that fuels business growth
          </h3>
        </div>
      </section>

      <section id="cta" className="bg-gradient-to-b from-dark-2 to-dark-2">
        <CTAContentBlock
          disabled
          btnText="Vision Mapping"
          description="Our strategic and research-driven approach empowers us to streamline workflows, maintain transparency, and uncover valuable insights, ensuring every discovery phase lays a strong foundation for success."
          icon={<Telescope />}
        />
      </section>

      <section id="services" className=" py-custom bg-gradient-to-b from-dark-2 to-dark-blue-1">
        <div className="section">
          <ServicesUI serviceName="Discovery" title="Discovery Services" />
        </div>
      </section>

      <section id="how-we-work" className="bg-gradient-to-b from-dark-blue-1 to-dark-2 pb-custom">
        <Swiper />
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
