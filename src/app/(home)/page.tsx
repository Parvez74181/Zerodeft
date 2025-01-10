import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import HeroBG from "../../../public/hero-bg.svg";
import Reveal from "@/components/animated/Reveal";
import TextHoverShift from "@/components/animated/TextHoverShift";
import AvatarGroup from "@/components/ui/AvatarGroup";
import { Calendar, MoveUpRight, Zap } from "lucide-react";
import Link from "next/link";
import ourServices from "../../../utils/OurServices";
import Reviews from "@/components/Reviews";
import Features from "../../../utils/Features";

export default function Home() {
  return (
    <>
      <section className="section">
        <div className="flex  md:flex-row flex-col w-full gap-3 md:pt-0 pt-5 md:justify-between items-center">
          <div className="w-full md:w-[60%] relative h-full flex justify-center items-center md:items-start flex-col gap-3">
            <Reveal type="left">
              <h1
                className={cn(
                  "bg-gradient-to-l text-transparent dark:text-transparent bg-clip-text animate-text-gradient font-bold dark:bg-zinc-50 bg-[length:300%] text-lg rounded-xl  duration-[4200ms]",
                  "from-zinc-600 via-zinc-100 to-zinc-700",
                  "text-5xl md:text-6xl lg:text-8xl uppercase text-pretty md:text-start text-center z-10"
                )}
              >
                let’s create the next world changing thing!
              </h1>

              <div className="inline-flex items-center *:transition-all *:duration-[0.4s] *:ease-[cubic-bezier(0.215, 0.61, 0.355, 1)] group">
                <Zap className="rounded-full bg-white size-10 group-hover:size-0 p-1.5 group-hover:p-0 text-black" />
                <Button className="bg-amber-300 uppercase md:w-36 w-44 h-11 font-medium text-lg">
                  <TextHoverShift text="Let's Talk" />
                </Button>
                <Zap className="rounded-full bg-white size-0 group-hover:size-10 group-hover:p-1.5 text-black" />
              </div>
            </Reveal>
          </div>

          <div className="w-full md:w-[40%] relative h-full flex justify-center items-start flex-col">
            <Reveal type="right">
              <Image
                src={HeroBG}
                alt="hero-bg"
                className="w-full object-contain animate-float"
                width={500}
                height={500}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="avatar"
        className="py-custom bg-gradient-to-b from-dark-1 to-dark-2  flex justify-center items-center"
      >
        <div className="section flex md:flex-row flex-col w-full gap-5 md:justify-center items-center">
          <Reveal type="left" className="w-full md:w-1/3 md:order-1 order-2 flex  items-center p-5 ps-0">
            <AvatarGroup />
          </Reveal>

          <div className="w-full md:w-2/3 md:order-2 order-1">
            <Reveal type="right">
              <h2 className="text-2xl md:text-4xl font-semibold md:leading-[3rem!important]">
                <span className="md:w-44 inline-block"></span>Over the years, we’ve honed our skills in design and
                development, and now we’re excited to help passionate founders like you bring your vision to life. After
                all, success is a team effort. Let’s work together and aim for the top!
              </h2>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="our_services" className="bg-gradient-to-b from-dark-2 to-dark-blue-1 ">
        <div className="relative  section ">
          <div className=" text-dark relative p-3 md:p-5 lg:p-10 bg-white  rounded-custom">
            <Reveal type="top">
              <h2 className="sm:text-6xl text-5xl md:text-7xl lg:text-9xl font-semibold uppercase ">our services</h2>
            </Reveal>

            <ul className="w-full grid  md:grid-cols-2 gap-2 md:gap-5 mt-3 md:mt-10">
              {ourServices.map((service, i) => (
                <Reveal key={i} type={i === 0 || i === 2 ? "left" : "right"}>
                  <li className="group">
                    <Link
                      href={""}
                      className="bg-white-2 p-3 md:p-5 lg:p-10 flex items-center lg:items-start gap-5 rounded-2xl"
                    >
                      <div className="icons flex">
                        <span className="bg-blue-1 rounded-full p-2 md:p-1 lg:p-5 size-9 md:size-12 lg:size-16 text-white flex justify-center items-center">
                          {service.icon}
                        </span>

                        <span className="overflow-hidden bg-transparent border border-zinc-400 rounded-full lg:p-5 md:size-12 lg:size-16 text-dark group-hover:text-white hidden lg:flex justify-center items-center  relative *:transition-all *:duration-[0.2s] *:ease-[cubic-bezier(0.215, 0.61, 0.355, 1)]">
                          <span className="w-full h-full bg-dark absolute top-0 left-0 rounded-full scale-0  group-hover:scale-100 z-0"></span>

                          <MoveUpRight className="z-10 group-hover:scale-150 scale-100" />
                        </span>
                      </div>

                      <div className="flex items-center lg:items-start flex-col gap-5">
                        <h2 className="text-2xl leading-[0] md:leading-9 md:text-3xl lg:text-4xl font-semibold">
                          {service.name}
                        </h2>
                        <p className="text-gray-800 font-normal hidden lg:block">{service.description}</p>
                      </div>
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="reviews" className=" bg-gradient-to-b from-dark-blue-1 to-dark py-custom">
        <div className="section flex lg:justify-between items-center lg:flex-row flex-col gap-10">
          <div className="w-full lg:w-[30%]">
            <Reveal type="left">
              <h2 className="sm:text-4xl text-3xl md:text-4xl lg:text-5xl font-semibold uppercase text-center lg:text-start w-full">
                What People Say About Us!
              </h2>
            </Reveal>

            <Reveal type="left">
              <p className="text-lg text-center lg:text-start pt-3">
                Real stories. Genuine experiences. Hear what our amazing clients have to say about working with us and
                how we've helped them achieve their goals.
              </p>
            </Reveal>
          </div>
          <div className="w-full lg:w-[60%] flex justify-center items-center">
            <Reviews />
          </div>
        </div>
      </section>

      <section id="our_benefits" className="pt-10">
        <div className="section">
          <div className=" relative ">
            <Reveal type="top">
              <h2 className="sm:text-5xl text-4xl md:text-6xl lg:text-7xl font-semibold uppercase text-center md:text-start">
                our benefits
              </h2>
            </Reveal>

            <ul className="w-full grid  sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-2 md:gap-5 mt-3 md:mt-10 *:h-full">
              {Features.map((feature, i) => (
                <Reveal key={i} type={i === 0 || i === 2 ? "left" : "right"} className="*:h-full">
                  <li className="group bg-dark-blue-1 p-5 lg:p-10 flex items-start gap-5 rounded-2xl h-full ">
                    <div className="flex items-start flex-col gap-3 md:gap-5">
                      <h2
                        className="text-xl  md:text-2xl lg:text-3xl font-semibold"
                        dangerouslySetInnerHTML={{ __html: feature.title }}
                      ></h2>
                      <p className="text-white-1 font-normal block">{feature.description}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-custom pb-0" id="book_a_call">
        <div className="bg-gradient-to-b from-dark to-dark-2 rounded-custom pb-custom  flex justify-center items-center">
          <div className="section">
            <div className="relative  text-black bg-white lg:w-[80%] xl:w-2/3 mx-auto md:min-h-[50vh] rounded-2xl md:rounded-[1.5rem] lg:rounded-[2.5rem]  flex justify-center items-center flex-col gap-2 md:gap-0 p-8">
              <Reveal>
                <h2 className="sm:text-5xl text-3xl md:text-5xl lg:text-6xl font-semibold uppercase text-center w-full">
                  Ready to discuss <br /> your project with us?
                </h2>
              </Reveal>

              <Reveal>
                <p className="text-lg text-center lg:px-14 py-3">
                  Let’s talk about how we can craft a user experience that not only looks great but drives real growth
                  for your product.
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
      </section>
    </>
  );
}
