import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import HeroBG from "../../../public/hero-bg.svg";
import Reveal from "@/components/animated/Reveal";
import TextHoverShift from "@/components/animated/TextHoverShift";
import AvatarGroup from "@/components/ui/AvatarGroup";
import { LayoutPanelLeft, Megaphone, MoveUpRight, Search, ServerCog, Zap } from "lucide-react";
import Link from "next/link";

export const ourServices = [
  {
    name: "Discovery",
    icon: <Search />,
    description:
      "Every great journey starts with understanding. In the discovery phase, we dive deep into your vision, values, and goals, laying the groundwork for everything that follows.",
  },
  {
    name: "Design",
    icon: <LayoutPanelLeft />,
    description:
      "Design is where your story takes shape. By putting your users first, we craft a visual narrative that reflects your brand’s personality—thoughtful, creative, and unmistakably yours.",
  },
  {
    name: "Development",
    icon: <ServerCog />,
    description:
      "Development is where ideas come to life. We create digital experiences that are not only functional and reliable but also delightfully engaging for your users.",
  },
  {
    name: "Marketing",
    icon: <Megaphone />,
    description:
      "From growing your audience to making your brand unforgettable, we use smart strategies and powerful tools to help your message reach the right people at the right time.",
  },
];
export default function Home() {
  return (
    <>
      <section className="section">
        <div className="flex min-h-[70vh] md:flex-row flex-col w-full gap-3 md:pt-0 pt-5 md:justify-between items-center">
          <div className="w-full md:w-[60%] relative h-full flex justify-center items-center md:items-start flex-col gap-3">
            <h1
              className={cn(
                "bg-gradient-to-l text-transparent dark:text-transparent bg-clip-text animate-text-gradient font-bold dark:bg-zinc-50 bg-[length:300%] text-lg rounded-xl  duration-[4200ms]",
                "from-zinc-600 via-zinc-100 to-zinc-700",
                "text-5xl md:text-6xl lg:text-8xl uppercase text-pretty md:text-start text-center z-10"
              )}
            >
              let’s create the next world changing thing!
            </h1>

            <div className="flex items-center *:transition-all *:duration-[0.4s] *:ease-[cubic-bezier(0.215, 0.61, 0.355, 1)] group">
              <Zap className="rounded-full bg-white size-9 group-hover:size-0 p-1.5 group-hover:p-0 text-black" />
              <Button className="bg-amber-300 uppercase md:w-32 w-36 font-medium ">
                <TextHoverShift text="Let's Talk" />
              </Button>
              <Zap className="rounded-full bg-white size-0 group-hover:size-9 group-hover:p-1.5 text-black" />
            </div>
          </div>

          <div className="w-full md:w-[40%] relative h-full flex justify-center items-start flex-col">
            <Reveal>
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

      <section className=" bg-gradient-to-b from-dark-1 to-dark-2 min-h-[30vh]">
        <div className="section flex md:flex-row flex-col w-full gap-5 md:pt-0 pt-5 md:justify-center items-center">
          <Reveal className="w-full md:w-1/3 md:order-1 order-2 flex  items-center p-5 ps-0">
            <AvatarGroup />
          </Reveal>

          <div className="w-full md:w-2/3 md:order-2 order-1">
            <h2 className="text-2xl md:text-4xl font-semibold">
              <span className="md:w-44 inline-block"></span>Over the years, we’ve honed our skills in design and
              development, and now we’re excited to help passionate founders like you bring your vision to life. After
              all, success is a team effort. Let’s work together and aim for the top!
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-dark-2 to-dark-blue-1 py-5 md:py-10">
        <div className="relative  section ">
          <div className=" text-dark relative p-3 md:p-5 lg:p-10 bg-white rounded-2xl md:rounded-[1.5rem] lg:rounded-[2.5rem]">
            <h2 className="sm:text-6xl text-5xl md:text-7xl lg:text-9xl font-semibold uppercase ">
              our <br /> services
            </h2>

            <ul className="w-full grid  md:grid-cols-2 gap-5 mt-10">
              {ourServices.map((service, i) => (
                <li key={i} className="group">
                  <Link
                    href={""}
                    className="bg-white-2 p-3 md:p-5 lg:p-10 flex items-center lg:items-start gap-5 rounded-2xl"
                  >
                    <div className="icons flex">
                      <span className="bg-blue-1 rounded-full p-2 md:p-1 lg:p-5 size-9 md:size-12 lg:size-16 text-white flex justify-center items-center">
                        {service.icon}
                      </span>

                      <span className="bg-transparent border border-zinc-400 rounded-full lg:p-5 md:size-12 lg:size-16 text-dark group-hover:text-white hidden lg:flex justify-center items-center relative *:transition-all *:duration-[0.2s] *:ease-[cubic-bezier(0.215, 0.61, 0.355, 1)]">
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
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
