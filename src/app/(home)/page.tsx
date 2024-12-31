import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import HeroBG from "../../../public/hero-bg.svg";
import LottiePlayer from "@/components/LottiePlayer";

export default function Home() {
  return (
    <>
      <div className="flex min-h-[70vh] md:flex-row flex-col w-full gap-3 md:pt-0 pt-5 md:justify-between items-center">
        <div className="w-full md:w-1/2 relative h-full flex justify-center items-center md:items-start flex-col gap-3">
          {/* <Image src={HeroBG} alt="hero-bg" className="absolute w-full object-contain" width={500} height={500} /> */}
          <h1
            className={cn(
              "bg-gradient-to-l text-transparent dark:text-transparent bg-clip-text animate-text-gradient font-bold dark:bg-zinc-50 bg-[length:300%] text-lg rounded-xl tracking-wide duration-[4200ms]",
              "from-zinc-600 via-zinc-100 to-zinc-700",
              "text-5xl md:text-6xl lg:text-8xl uppercase text-pretty md:text-start text-center"
            )}
          >
            let’s create the next world changing thing!
          </h1>

          <Button className="bg-amber-300 uppercase font-medium md:w-32 w-36 fade-in-left">Let's Talk</Button>
        </div>

        <div className="w-full md:w-1/2 relative h-full flex justify-center items-start flex-col">
          <Image src={HeroBG} alt="hero-bg" className="w-full object-contain animate-float" width={500} height={500} />
        </div>
      </div>
    </>
  );
}
