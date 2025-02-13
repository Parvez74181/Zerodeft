import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Corax IT",
    short_name: "Corax IT",
    description:
      "Corax IT Agency is your trusted partner for web development, SEO, digital marketing, and IT solutions. We craft high-performance websites, scalable applications, and data-driven marketing strategies that drive growth. Our expert team blends technology, creativity, and innovation to deliver results that elevate your brand in today’s competitive digital landscape. Whether you're a startup or an established business, we help you maximize online visibility, increase conversions, and scale efficiently.",
    start_url: "/",
    display: "standalone",
    background_color: "#02021E",
    theme_color: "#02021E",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
