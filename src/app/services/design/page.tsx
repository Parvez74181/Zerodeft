import Reveal from "@/components/animation/Reveal";
import BookCall from "@/components/BookCall";
import CTAButton from "@/components/CTAButton";
import CTAContentBlock from "@/components/CTAContentBlock";
import FAQ from "@/components/FAQ";
import ServicesUI from "@/components/ServicesUI";
import Swiper from "@/components/WhenToHireSwiper";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import valuePropositions from "../../../../data/ValueProportionsDesignSectionData";
import { Divider } from "@heroui/react";

const page = () => {
  return (
    <>
      <section id="hero" className="section">
        <div className="flex  md:flex-row flex-col w-full gap-3  pt-5 md:pt-10 md:justify-between items-center">
          <div className="w-full md:w-[50%] relative h-full flex justify-center items-center md:items-start flex-col gap-3">
            <Reveal type="left">
              <h1 className="hero-section-title ">Creating Engaging and User-Centric Designs</h1>
            </Reveal>

            <Reveal type="left" delay={0.4} className="w-full">
              <p className="text-lg text-zinc-300 text-center md:text-start md:w-[35rem]">
                We craft visually stunning and intuitive designs that captivate users and enhance experiences.
              </p>
            </Reveal>

            <CTAButton text="Get a Stunning Design" />
          </div>

          <div className="w-full md:w-[40%] relative h-full flex justify-center items-center flex-col z-5">
            <Reveal type="right" className="w-full">
              <Image
                src={"/when-to-hire-(3).png"}
                alt="hero-bg"
                className="w-full object-contain animate-float "
                width={2000}
                height={2000}
                sizes="70vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className=" py-custom bg-gradient-to-b from-dark-1 to-dark-2">
        <div className="section">
          <h3 className="uppercase  text-center text-4xl sm:text-6xl md:text-8xl font-semibold">
            <span className="text-gradient-purple">User-centric</span> designs that deliver real value
          </h3>
        </div>
      </section>

      <section id="cta" className="bg-gradient-to-b from-dark-2 to-dark-2">
        <CTAContentBlock
          disabled
          btnText="PAIN POINTS"
          description="With a team of 10+ skilled designers, we take on your biggest challenges head-on, ensuring high-quality results with efficiency and zero delays."
          icon={<Sparkles />}
        />
      </section>

      <section id="valuePropositions" className=" py-custom bg-gradient-to-b from-dark-2 to-dark-blue-1">
        <div className="section">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 ">
            {valuePropositions.map((data, i) => (
              <div key={i} className="rounded-3xl bg-zinc-100 text-dark-1 p-8 flex flex-col justify-between">
                <div>
                  <span className="rounded-full py-2.5 px-4 border border-rose-300 text-rose-600 font-semibold">
                    {data.title}
                  </span>
                  <h4 className="my-5 text-2xl md:text-3xl font-semibold">{data.headline}</h4>
                  <p className="text-opacity-80">{data.description}</p>
                </div>

                <div className="flex gap-3 items-center w-full border-t border-dark-2 mt-2 pt-2">
                  <span className="text-4xl md:text-5xl font-semibold">{data.stat}</span>
                  <p
                    className="uppercase md:text-lg opacity-70"
                    dangerouslySetInnerHTML={{ __html: data.statDescription }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className=" bg-gradient-to-b from-dark-blue-1 to-dark-blue-1">
        <div className="section">
          <ServicesUI serviceName="Design" title="Design Services" />
        </div>
      </section>

      <section id="how-we-work" className="py-custom bg-gradient-to-b from-dark-blue-1 to-dark-2">
        <Swiper />
      </section>

      <section id="faq" className="pt-custom bg-gradient-to-b from-dark-2 to-dark-1">
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
