import Reveal from "./animation/Reveal";
import TextHoverShift from "./animation/TextHoverShift";
import Button from "./ui/Button";

type Props = {
  btnText: string;
  description: string;
  icon: React.ReactElement;
  disabled?: boolean;
};
const CTAContentBlock = ({ btnText, description, icon, disabled = false }: Props) => {
  return (
    <>
      <div className="section flex justify-between items-center flex-col md:flex-row  md:gap-5">
        <Reveal type="left" className="w-full md:w-1/3  flex items-center justify-start p-5 ps-0">
          <Button
            disabled={disabled}
            className="bg-white text-dark uppercase w-52  h-12 font-semibold text-base md:text-lg "
          >
            <TextHoverShift>
              <span className="flex justify-between items-center gap-3">
                {btnText}
                <span className="*:z-50 *:size-8 *:p-1.5 *:bg-dark-blue-1 *:text-white *:rounded-full *:object-contain   ">
                  {icon}
                </span>
              </span>
            </TextHoverShift>
          </Button>
        </Reveal>

        <div className="w-full md:w-2/3 ">
          <Reveal type="right">
            <h2 className="text-2xl md:text-4xl md:font-semibold md:leading-[3rem!important]">
              <span className="md:w-44 inline-block"></span>
              {description}
            </h2>
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default CTAContentBlock;
