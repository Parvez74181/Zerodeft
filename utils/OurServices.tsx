import { LayoutPanelLeft, Megaphone, Search, ServerCog } from "lucide-react";

const ourServices = [
  {
    name: "Discovery",
    icon: <Search />,
    description:
      "Every great journey starts with understanding. In the discovery phase, we dive deep into your vision, values, and goals, laying the groundwork for everything that follows.",
  },
  {
    name: "Design",
    icon: <LayoutPanelLeft />,
    description:
      "Design is where your story takes shape. By putting your users first, we craft a visual narrative that reflects your brand’s personality—thoughtful, creative, and unmistakably yours.",
  },
  {
    name: "Development",
    icon: <ServerCog />,
    description:
      "Development is where ideas come to life. We create digital experiences that are not only functional and reliable but also delightfully engaging for your users.",
  },
  {
    name: "Marketing",
    icon: <Megaphone />,
    description:
      "From growing your audience to making your brand unforgettable, we use smart strategies and powerful tools to help your message reach the right people at the right time.",
  },
];

export default ourServices;
