"use client";
import { cn } from "@/lib/utils";
import { Button as ButtonUI } from "@nextui-org/react";

type button = {
  text?: string;
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
  radius?: "full" | "none" | "sm" | "md" | "lg";
  size?: "sm" | "md" | "lg";
};

const Button = ({ text, radius = "full", isLoading = false, className, children, size }: button) => {
  return (
    <>
      <ButtonUI
        isLoading={isLoading}
        radius={radius}
        className={cn(
          "*:text-black shadow-lg text-overflow px-0 w-36",

          className
        )}
        size={size || "md"}
      >
        <div className="text-hover-animation hover:translate-y-[-150%] w-full h-full">
          <div className=" w-full h-full flex items-center justify-center gap-1">{children || text}</div>
          <div className="text-hover w-full h-full flex items-center justify-center gap-1">{children || text}</div>
        </div>
      </ButtonUI>
    </>
  );
};

export default Button;
