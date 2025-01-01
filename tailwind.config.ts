import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  fontFamily: {
    questrial: "var(--font-questrial)",
  },
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        "white-1": "#E9E9EA",
        dark: "#02021E",
        "dark-1": "#02021E",
        "dark-2": "#150E59",
        blue: "#534CB2",
        "dark-blue-1": "#2C277D",
        "dark-blue-2": "#534CB2",
      },

      animation: {
        "text-gradient": "text-gradient 6s ease infinite alternate",
        "bg-shine": "bg-shine 2.1s linear infinite",
        float: "float 3s ease-in-out infinite",
      },
      transitionTimingFunction: {
        "float-ease": "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "text-gradient": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "bg-shine": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), require("tailwindcss-animate")],
} satisfies Config;
