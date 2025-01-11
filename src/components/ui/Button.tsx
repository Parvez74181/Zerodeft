"use client";
import { cn } from "@/lib/utils";
import { Button as ButtonUI } from "@nextui-org/react";

type button = {
  text?: string;
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  radius?: "full" | "none" | "sm" | "md" | "lg";
  size?: "sm" | "md" | "lg";
};

const Button = ({ text, radius = "full", isLoading = false, className, children, size, disabled = false }: button) => {
  return (
    <>
      <ButtonUI
        isLoading={isLoading}
        radius={radius}
        className={cn(
          "*:text-black shadow-lg px-0 w-36",

          className
        )}
        size={size || "md"}
        disabled={disabled}
      >
        <div className="w-full h-full flex items-center justify-center gap-1">{children || text}</div>
      </ButtonUI>
    </>
  );
};

export default Button;
