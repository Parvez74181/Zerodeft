import Reveal from "@/components/animation/Reveal";
import Image from "next/image";
import HeroBG from "../../../public/our-process.png";
import { Highlighter } from "lucide-react";
import CTAContentBlock from "@/components/CTAContentBlock";
import Swiper from "@/components/WhenToHireSwiper";
import BookCall from "@/components/BookCall";
import FAQ from "@/components/FAQ";

const page = () => {
  return (
    <>
      <section id="hero" className="section">
        <div className="flex  md:flex-row flex-col w-full gap-3  pt-5 md:pt-10 md:justify-between items-center">
          <div className="w-full md:w-[50%] relative h-full flex justify-center items-center md:items-start flex-col gap-3">
            <Reveal type="left">
              <h1 className="hero-section-title ">Customized Dedicated Team Services</h1>
            </Reveal>

            <Reveal type="left" delay={0.4}>
              <p className="hero-section-description">
                Our dedicated teams are focused on delivering fast results with minimized risks. Our IT professionals
                will leverage their skills to ensure your project's success.
              </p>
            </Reveal>
          </div>

          <div className="w-full md:w-[40%] relative h-full flex justify-center items-center flex-col z-5">
            <Reveal type="right">
              <Image
                src={HeroBG}
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

      <section id="when-to-hire" className=" py-custom">
        <CTAContentBlock
          disabled
          btnText="when to hire"
          description="Our dedicated teams are focused on delivering fast results with minimized risks. Our IT professionals will leverage their skills to ensure your project's success. Consider our collaboration model if you need to:"
          icon={<Highlighter />}
        />
      </section>

      <section id="how-we-work" className=" pb-custom">
        <Swiper />
      </section>

      <section id="faq" className="py-custom">
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

      <section id="book-a-call" className="bg-gradient-to-b  pb-0 rounded-custom rounded-ss-none rounded-se-none ">
        <BookCall />
      </section>
    </>
  );
};

export default page;
