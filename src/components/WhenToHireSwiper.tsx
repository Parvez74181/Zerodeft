"use client";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/react";

import Reveal from "./animation/Reveal";
import Image from "next/image";
import whenToHireData from "../../data/WhenToHireDetails";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  loop?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  cardHeader?: React.ReactNode;
  cardBody?: React.ReactNode;
};

const Swiper = ({}: Props) => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const handlePlusClick = (index: number) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <>
      <div className="section">
        <h3 className="text-5xl md:text-6xl font-semibold uppercase mb-5">
          Our <br /> Solutions
        </h3>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full relative"
        >
          <Reveal type="right">
            <CarouselContent className="-ml-1">
              {whenToHireData.map((data, i) => (
                <CarouselItem key={i} className="pl-2 md:basis-1/2 xl:basis-1/3 w-[400px]">
                  <div className="">
                    <Card className="bg-[rgba(255,255,255,0.05)] backdrop-blur-xl shadow-none h-[400px]">
                      <CardHeader className="flex justify-center items-center p-0">
                        <Image
                          src={`/${data.image}`}
                          sizes="50vw"
                          alt={data.title}
                          width={2000}
                          height={2000}
                          className={`size-56 rounded-full object-cover transition-transform  duration-500 ${
                            visibleIndex === i ? "max-h-0 opacity-0" : "max-h-full opacity-100"
                          }`}
                          style={{ transform: visibleIndex === i ? "translateY(-100%)" : "translateY(0)" }}
                        />
                      </CardHeader>
                      <CardBody className="p-0">
                        <div
                          className={` transition-transform duration-500 ${
                            visibleIndex === i ? "max-h-full opacity-100 p-8" : "max-h-0 opacity-0 p-0"
                          }`}
                          style={{ transform: visibleIndex === i ? "translateY(0)" : "translateY(100%)" }}
                        >
                          <h3
                            className="font-semibold text-2xl sm:text-3xl lg:text-4xl "
                            dangerouslySetInnerHTML={{ __html: data.title }}
                          />
                          <br />
                          {data.description}
                        </div>
                      </CardBody>

                      <CardFooter className="gap-4 justify-between p-8 items-center">
                        <h3
                          className={`font-semibold text-2xl sm:text-3xl lg:text-4xl z-50 w-[80%] sm:w-[85%] h-full transition-all duration-500  ${
                            visibleIndex === i ? " opacity-0" : " opacity-100 "
                          } `}
                          dangerouslySetInnerHTML={{ __html: data.title }}
                          style={{ transform: visibleIndex === i ? "translateY(100%)" : "translateY(0)" }}
                        />
                        <Plus
                          className="transition-transform duration-300 size-8 p-1 bg-white text-dark rounded-full cursor-pointer"
                          style={{ transform: visibleIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}
                          onClick={() => handlePlusClick(i)}
                        />
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Reveal>

          <CarouselPrevious className="rounded-full min-w-0 size-5 scale-[1.8] absolute top-[110%] left-[45%] -translate-x-1/2 md:left-4 p-0 h-auto" />
          <CarouselNext className="rounded-full min-w-0 size-5 scale-[1.8] absolute top-[110%] left-[55%] -translate-x-1/2 md:left-16 p-0 h-auto" />
        </Carousel>
      </div>
    </>
  );
};

export default Swiper;
