import { Zap } from "lucide-react";
import Button from "./ui/Button";
import TextHoverShift from "./animation/TextHoverShift";

const CTAButton = ({ text }: { text: string }) => {
  return (
    <>
      <div className="flex justify-center md:inline-flex items-center *:transition-all *:ease-in group py-5 md:py-3">
        <Zap className="rounded-full bg-white size-10 group-hover:size-0 p-1.5 group-hover:p-0 text-black" />
        <Button
          showDialog
          dialogType="contact_form"
          className="bg-amber-300 uppercase px-5 w-auto h-11 font-medium text-lg"
        >
          <TextHoverShift text={text} />
        </Button>
        <Zap className="rounded-full bg-white size-0 group-hover:size-10 group-hover:p-1.5 text-black" />
      </div>
    </>
  );
};

export default CTAButton;
