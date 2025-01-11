"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import FaqData from "../../utils/FaqData";

const FAQ = () => {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-medium",
    trigger: "px-2 py-0  rounded-lg h-auto my-3 flex items-center *:*:text-xl *:*:",
    indicator: "text-medium text-xl",
    content: "text-base px-2 leading-7 tracking-wide font-normal opacity-70",
  };
  return (
    <Accordion itemClasses={itemClasses}>
      {FaqData.map((faq, i) => (
        <AccordionItem key={i} aria-label={faq.title} title={faq.title} className="text-xl">
          <div dangerouslySetInnerHTML={{ __html: faq.description }} />
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQ;
