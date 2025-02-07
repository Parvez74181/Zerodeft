import type { Metadata, Viewport } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Scroll from "./Scroll";
import Footer from "@/components/Footer";
import CursorMask from "@/components/animation/CursorMask";
import Cursor from "@/components/Cursor";
import ReturnToTop from "@/components/ReturnToTop";

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "SOFT UX IT Agency",
  description: "Professional web development and online marketing services",
};
export const viewport: Viewport = {
  themeColor: "#02021E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${questrial.variable} dark font-questrial  bg-dark-1 text-white antialiased overflow-x-hidden`}>
        <Scroll />
        <Navbar />
        <ReturnToTop />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
