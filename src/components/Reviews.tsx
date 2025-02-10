"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/react";
import Autoplay from "embla-carousel-autoplay";
import reviewsData from "../../data/ReviewsData";
import Ratings from "./Ratings";
import Image from "next/image";
import Reveal from "./animation/Reveal";

const Reviews = () => {
  return (
    <>
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
            {reviewsData.map((review, i) => (
              <CarouselItem key={i} className="pl-2 md:basis-1/2 xl:basis-1/3 w-[400px]">
                <div className="">
                  <Card className="bg-dark-2 shadow-none p-4 sm:h-[280px] h-[300px] lg:h-[300px]">
                    <CardHeader className="flex justify-between items-center">
                      <Ratings rating_data={review.rating} />
                    </CardHeader>
                    <CardBody className="overflow-y-visible">
                      {review.comment.slice(0, 100)}
                      {review.comment.length > 100 ? "..." : ""}
                    </CardBody>

                    <CardFooter className="gap-4">
                      <Image
                        src={`/review_${review.id}.jpg`}
                        sizes="50vw"
                        alt={review.name}
                        width={500}
                        height={500}
                        className="size-11 rounded-full object-cover"
                      />
                      <div className="flex flex-col text-sm">
                        <span className="font-semibold">{review.name}</span>
                        <span className="text-xs">{review.position}</span>
                      </div>
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
    </>
  );
};

export default Reviews;
