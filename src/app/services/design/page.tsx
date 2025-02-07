import Reveal from "@/components/animation/Reveal";
import CTAButton from "@/components/CTAButton";
import Image from "next/image";

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
              <p className="text-lg text-zinc-300 text-center md:text-start">
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
    </>
  );
};

export default page;
