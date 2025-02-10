"use client";
import { Divider } from "@heroui/react";
import Link from "next/link";
import React, { useState } from "react";
import AnimatedText from "./animation/AnimatedText";

import { Facebook, Github, Instagram, Linkedin, Mail, MoveUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import ourServices from "../../data/OurServices";
import menuItems from "../../data/MenuItems";
import TextHoverShift from "./animation/TextHoverShift";

const Footer = () => {
  const [date, setDate] = useState<Number>(new Date().getFullYear());
  return (
    <>
      <footer className="pt-5  md:px-8">
        <div className="mx-auto w-full ">
          <div className="grid  sm:grid-cols-2 gap-8 px-4 py-6 lg:py-8 lg:grid-cols-3 text-lg">
            <div>
              <AnimatedText
                el="h3"
                text={"Subscribe to our newsletter to stay in touch with the latest."}
                className="text-3xl font-semibold"
              />

              <div className="relative w-full flex items-center my-5">
                <Input type="email" placeholder="Your email address" className="bg-transparent h-12 px-5 pr-12" />
                <Mail className="absolute right-2 bg-white opacity-75 rounded-full size-8 text-black p-[6px]" />
              </div>

              <div className="w-full flex lg:flex-row flex-col items-center lg:justify-between">
                <div className="w-full lg:w-auto">
                  <h3 className="text-xl uppercase opacity-50">Drop us a line</h3>
                  <p>info@gmail.com</p>
                </div>
                <Divider orientation="vertical" className="h-10 w-0.5 rounded-full hidden lg:block" />
                <Divider className="h-0.5 rounded-full  lg:hidden" />
                <div className="w-full lg:w-auto">
                  <h3 className="text-xl uppercase opacity-50">Call Us</h3>
                  <p>01xxxxxxxxxxxxxx</p>
                </div>
              </div>
            </div>
            <div>
              <ul className="text-white-1 font-medium">
                <h3 className="text-xl uppercase opacity-75">Our Services</h3>
                <Divider className="h-0.5 rounded-full mb-3 inline-block" />
                {ourServices.map((service, i) => (
                  <li key={i} className="mb-4 group hover:underline">
                    <Link href="#" className="opacity-50 uppercase flex items-center">
                      <TextHoverShift text={service.name} parentClassName="justify-start" className="hover:underline" />
                      <MoveUpRight />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul>
                <h3 className="text-xl uppercase opacity-75">Menus</h3>
                <Divider className="h-0.5 rounded-full mb-3 inline-block" />
                {menuItems.map((item, i) => (
                  <li key={i} className="mb-4">
                    <Link href={item.href} className="opacity-50 uppercase flex items-center">
                      <TextHoverShift text={item.name} parentClassName="justify-start" className="hover:underline" />
                      <MoveUpRight />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* bottom part */}
          <Divider className="w-full h-0.5 rounded-full mb-3" />
          <div className="px-4 py-6  flex items-center justify-center md:flex-row flex-col md:justify-between">
            <span className="opacity-60 text-white-1 sm:text-center">
              © {`${date}`} <Link href="/">Flowbite™</Link>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
              <Link
                href="#"
                className=" size-8 text-black bg-white rounded-full p-1.5 flex justify-center items-center hover:opacity-80 opacity-50 transition delay-75"
              >
                <Facebook className="" />
              </Link>{" "}
              <Link
                href="#"
                className=" size-8 text-black bg-white rounded-full p-1.5 flex justify-center items-center hover:opacity-80 opacity-50 transition delay-75"
              >
                <Instagram className="" />
              </Link>{" "}
              <Link
                href="#"
                className=" size-8 text-black bg-white rounded-full p-1.5 flex justify-center items-center hover:opacity-80 opacity-50 transition delay-75"
              >
                <Linkedin className="" />
              </Link>{" "}
              <Link
                href="#"
                className=" size-8 text-black bg-white rounded-full p-1.5 flex justify-center items-center hover:opacity-80 opacity-50 transition delay-75"
              >
                <Github className="" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
