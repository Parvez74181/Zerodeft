import Reveal from "@/components/animation/Reveal";
import BookCall from "@/components/BookCall";
import CTAButton from "@/components/CTAButton";
import FAQ from "@/components/FAQ";
import ServicesUI from "@/components/ServicesUI";
import Swiper from "@/components/WhenToHireSwiper";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      {" "}
      <section id="hero" className="section">
        <div className="flex  md:flex-row flex-col w-full gap-3  pt-5 md:pt-10 md:justify-between items-center">
          <div className="w-full md:w-[50%] relative h-full flex justify-center items-center md:items-start flex-col gap-3">
            <Reveal type="left">
              <h1 className="hero-section-title ">OUR BEST WORKS</h1>
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
      <section className="py-custom bg-gradient-to-b from-dark-1 to-dark-blue-1">
        <div className="section">
          <div>
            {/* <Image src={""} alt="" width={800} height={800} /> */}
            <h3>Martege.com</h3>
            <p>Fully Functional Ecommerce Website</p>
          </div>
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
