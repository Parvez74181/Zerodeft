"use client";
import { Input, Form, Textarea } from "@heroui/react";
import Button from "./ui/Button";

import { SendHorizontal } from "lucide-react";
import Link from "next/link";
import TextHoverShift from "./animation/TextHoverShift";
import { useState } from "react";
import { useModal } from "@/context/modalContext";

interface FormData {
  fullName: string;
  email: string;
  phone?: string;
  subject?: string;
  aboutProject: string;
}
const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Create FormData object from the form
    const data = Object.fromEntries(new FormData(e.currentTarget));

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setIsLoading(false);
    if (res.status === 200) {
      setIsSuccess(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <>
      <Form className=" w-full" validationBehavior="native" onSubmit={onSubmit}>
        <div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold sm:text-nowrap">
            Schedule a Consultation
          </h2>
          <p className="md:text-xl opacity-70">Discuss your goals and create a project plan with our experts</p>
        </div>
        <div className="w-full flex md:flex-row flex-col items-center justify-between md:gap-5 *:w-full pb-2 md:pb-0 gap-3">
          <Input variant="underlined" label="Full Name" name="fullName" type="text" isRequired />
          <Input variant="underlined" label="Email" name="email" type="email" isRequired />
        </div>
        <div className="w-full flex md:flex-row flex-col items-center justify-between md:gap-5 *:w-full pb-3 md:pb-0 gap-3">
          <Input variant="underlined" label="Mobile Number" name="phone" type="tel" />
          <Input variant="underlined" label="Subject" name="subject" type="text" />
        </div>
        <div className="w-full">
          <Textarea variant="underlined" label="About project" name="aboutProject" isRequired />
        </div>
        <div className="pt-4 w-full flex lg:flex-row flex-col  items-center gap-4">
          <Button
            isLoading={isLoading}
            type="submit"
            className="uppercase bg-white w-auto px-6 sm:h-14 sm:w-64 font-xl font-bold"
          >
            <TextHoverShift>
              <span className=" flex items-center justify-center gap-2">
                Request a Quote
                <SendHorizontal className="size-5 sm:size-6" />
              </span>
            </TextHoverShift>
          </Button>

          <p className="w-full sm:text-base text-xs lg:text-lg opacity-70">
            By submitting the form I agree with the{" "}
            <Link href={"/privacy-policy"} className="text-blue-1 hover:underline inline-block">
              Privacy Policy
            </Link>
          </p>
        </div>

        {isSuccess && <p className="text-green-600 text-base sm:text-lg font-medium">Your message has been sent!</p>}
        {isError && (
          <p className="text-red-600 text-base sm:text-lg font-medium">Something went wrong. Please try again.</p>
        )}
      </Form>
    </>
  );
};

export default ContactForm;
