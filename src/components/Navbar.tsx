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
} from "@nextui-org/react";
import Button from "./ui/Button";
import { useState } from "react";
import TextHoverShift from "./animated/TextHoverShift";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <NavbarUI
      isBordered
      shouldHideOnScroll
      isBlurred
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="border-t border-b border-white-1 top-1 bg-transparent *:text-base *:px-0 *:max-w-full mb-10 section md:px-5"
    >
      <NavbarContent className="sm:hidden " justify="start" style={{ flexGrow: 0 }}>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      {/* small device logo */}
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">
            ACME
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* large device logo */}
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">
            ACME
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* large device menus */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* services dropdown */}

        <Dropdown className="bg-dark/70 backdrop-blur-lg">
          <NavbarItem>
            <DropdownTrigger>
              <DropDownButton
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<ChevronDown />}
                radius="sm"
                variant="solid"
              >
                <TextHoverShift text="Services" />
              </DropDownButton>
            </DropdownTrigger>
          </NavbarItem>

          {/* dropdown menu */}
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="Pet Sitting"
              description="Trusted care and companionship for your pets while you're away."
            >
              Pet Sitting
            </DropdownItem>

            <DropdownItem key="Baby Sitting" description="Safe, loving, and reliable babysitting for your little ones.">
              Baby Sitting
            </DropdownItem>
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
                className="p-0 bg-transparent data-[hover=true]:bg-transparent text-4xl"
                endContent={<ChevronDown />}
                radius="sm"
                variant="solid"
              >
                <TextHoverShift text="Services" />
              </DropDownButton>
            </DropdownTrigger>
          </NavbarMenuItem>

          {/* dropdown menu */}
          <DropdownMenu
            aria-label="ACME features"
            className="max-w-[340px] "
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="Pet Sitting"
              description="Trusted care and companionship for your pets while you're away."
            >
              Pet Sitting
            </DropdownItem>

            <DropdownItem key="Baby Sitting" description="Safe, loving, and reliable babysitting for your little ones.">
              Baby Sitting
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link href={item.href} className="text-4xl">
              <TextHoverShift text={item.name} />
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarUI>
  );
};

export default Navbar;
