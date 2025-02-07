"use client";
import { ArrowRight, ChevronDown, Code, CodeXml } from "lucide-react";

import {
  Navbar as NavbarUI,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Button as DropDownButton,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Divider,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import Button from "./ui/Button";
import { useState } from "react";
import TextHoverShift from "./animation/TextHoverShift";
import Link from "next/link";
import ourServices from "../../data/OurServices";
import menuItems from "../../data/MenuItems";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <NavbarUI
        isBordered
        // shouldHideOnScroll
        isBlurred
        position="static"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="

 border-t uppercase border-b border-white-1 !top-2 md:!top-5 bg-transparent *:text-base  *:max-w-full mb-10 *:container *:mx-auto *:p-3 *:md:px-8 "
        id="navbar"
      >
        <NavbarContent
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden icon"
          justify="start"
          style={{ flexGrow: 0 }}
        >
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        {/* small device logo */}
        <NavbarContent onClick={() => setIsMenuOpen(false)} className="lg:hidden pr-3" justify="center">
          <NavbarBrand>
            <Link href="/" className="sm:text-xl text-lg font-bold text-inherit flex items-center gap-1">
              <CodeXml className="size-7" strokeWidth={2.5} />
              Soft Ux
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* large device logo */}
        <NavbarContent onClick={() => setIsMenuOpen(false)} className="hidden lg:flex gap-4" justify="start">
          <NavbarBrand>
            <Link href="/" className="sm:text-xl text-lg font-bold text-inherit flex items-center gap-1">
              <CodeXml className="size-7" strokeWidth={2.5} />
              Soft Ux
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* large device menus */}
        <NavbarContent className="hidden lg:flex lg:gap-7 xl:gap-10" justify="center">
          {/* services dropdown */}

          <Dropdown className="bg-dark/70 backdrop-blur-lg">
            <NavbarItem>
              <DropdownTrigger>
                <DropDownButton
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent uppercase text-lg"
                  endContent={<ChevronDown size={30} />}
                >
                  <TextHoverShift className="hover:text-yellow" text="Services" />
                </DropDownButton>
              </DropdownTrigger>
            </NavbarItem>

            {/* dropdown menu */}
            <DropdownMenu
              aria-label="our services"
              className="w-full *:flex-row"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <>
                {ourServices.map((service) => (
                  <DropdownItem
                    key={service.name}
                    className="w-[180px] data-[hover=true]:bg-transparent cursor-default"
                    textValue={service.name}
                  >
                    <Link
                      href={`/services/${service.name.toLowerCase()}`}
                      className="font-semibold text-xl flex items-center gap-1 relative after:transition-all after:delay-75 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:rounded-full after:bg-white hover:after:w-full"
                    >
                      <span className="scale-[0.85]">{service.icon}</span>
                      {service.name}
                    </Link>
                    <Divider className="my-3" />
                    <ul className="flex flex-col gap-3">
                      {service.subServices.map((subService) => (
                        <li className="hover:text-blue-500" key={subService}>
                          {subService}
                        </li>
                      ))}
                    </ul>
                  </DropdownItem>
                ))}
              </>
            </DropdownMenu>
          </Dropdown>

          {/* nav items */}
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <Link href={item.href} className="text-lg">
                <TextHoverShift text={item.name} />
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem onClick={() => setIsMenuOpen(false)}>
            <Button showDialog dialogType="contact_form" className="uppercase bg-gradient-to-tr from-white to-white-1">
              <TextHoverShift>
                <span className="flex items-center gap-1">
                  Contact Us <ArrowRight strokeWidth={1} size={20} />
                </span>
              </TextHoverShift>
            </Button>
          </NavbarItem>
        </NavbarContent>

        {/* small device menus */}
        <NavbarMenu className="bg-dark/50 backdrop-blur-lg mt-2 flex pt-10 items-start flex-col gap-5">
          <NavbarMenuItem>
            <div>
              <div className="text-3xl uppercase mb-3">Services </div>
              {ourServices.map((service) => (
                <Link
                  href={`/services/${service.name.toLowerCase()}`}
                  className="py-1.5  flex items-center gap-2.5 ps-2.5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{service.icon}</span>
                  <TextHoverShift text={service.name} parentClassName="justify-start" className="text-2xl" />
                </Link>
              ))}
            </div>
          </NavbarMenuItem>

          {menuItems.map((item, index) => (
            <NavbarMenuItem onClick={() => setIsMenuOpen(false)} key={`${item}-${index}`}>
              <Link href={item.href} className="text-3xl uppercase">
                <TextHoverShift text={item.name} />
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarUI>
    </>
  );
};

export default Navbar;
