"use client";
import { ArrowRight, ChevronDown } from "lucide-react";

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
} from "@nextui-org/react";
import Button from "./ui/Button";
import { useState } from "react";
import TextHoverShift from "./animated/TextHoverShift";
import Link from "next/link";
import ourServices from "../../utils/OurServices";
import menuItems from "../../utils/MenuItems";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <NavbarUI
      isBordered
      shouldHideOnScroll
      isBlurred
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="
      
 border-t uppercase border-b border-white-1 top-1 bg-transparent *:text-base *:px-0 *:max-w-full mb-10 section md:px-5"
    >
      <NavbarContent className="md:hidden " justify="start" style={{ flexGrow: 0 }}>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      {/* small device logo */}
      <NavbarContent className="md:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">
            ACME
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* large device logo */}
      <NavbarContent className="hidden md:flex gap-4" justify="start">
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">
            ACME
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* large device menus */}
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {/* services dropdown */}

        <Dropdown className="bg-dark/70 backdrop-blur-lg">
          <NavbarItem>
            <DropdownTrigger>
              <DropDownButton
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent uppercase"
                endContent={<ChevronDown size={30} />}
                radius="sm"
                variant="solid"
              >
                <TextHoverShift text="Services" />
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
                <DropdownItem key={service.name} className="w-[180px] data-[hover=true]:bg-transparent cursor-default">
                  <h3 className="font-semibold text-xl flex items-center  gap-1">
                    <span className="scale-[0.85]">{service.icon}</span>
                    {service.name}
                  </h3>
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
            <Link href={item.href}>
              <TextHoverShift text={item.name} />
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button className="uppercase bg-gradient-to-tr from-white to-white-1">
            <TextHoverShift>
              <span className="flex items-center gap-1">
                Contact Us <ArrowRight strokeWidth={1} size={20} />
              </span>
            </TextHoverShift>
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* small device menus */}
      <NavbarMenu className="bg-dark/50 backdrop-blur-lg mt-2 flex pt-10 items-center flex-col gap-5">
        <Dropdown className="bg-dark/70 backdrop-blur-lg">
          <NavbarMenuItem>
            <DropdownTrigger>
              <DropDownButton
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-3xl uppercase"
                endContent={<ChevronDown size={50} />}
                radius="sm"
                variant="solid"
              >
                <TextHoverShift text="Services" />
              </DropDownButton>
            </DropdownTrigger>
          </NavbarMenuItem>

          {/* dropdown menu */}
          <DropdownMenu
            aria-label="our services"
            className="max-w-[340px] "
            itemClasses={{
              base: "gap-4",
            }}
          >
            <>
              {ourServices.map((service) => (
                <DropdownItem
                  key={service.name}
                  startContent={service.icon}
                  className="data-[hover=true]:bg-transparent cursor-default w-56"
                >
                  <TextHoverShift text={service.name} parentClassName="justify-start" className="text-lg" />
                </DropdownItem>
              ))}
            </>
          </DropdownMenu>
        </Dropdown>

        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link href={item.href} className="text-3xl uppercase">
              <TextHoverShift text={item.name} />
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarUI>
  );
};

export default Navbar;
