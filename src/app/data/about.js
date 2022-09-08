import { GoDeviceDesktop } from "react-icons/go";
import {
  MdOutlineAppSettingsAlt,
  MdOutlineDesignServices,
} from "react-icons/md";
import { SiAdobeindesign } from "react-icons/si";

export const ABOUT = {
  title: "About Me",
  name: "Noyon Islam",
  description:
    "I am a web developer with a passion for building beautiful, responsive websites and applications. I have a background in graphic design and I am currently working on a career in web development.",
  exports: ["JavaScript", "React", "UI/UX"],
  image: "/Asset/noyon.png",
  services: [
    {
      title: "Web Development",
      text: "I'm a fronted web developer.I have most of experience on about web development more then 3 years.I can development mordern, attractive, responsive design and it's support cross browser also.",
      icon: <GoDeviceDesktop size={33} />,
    },
    {
      title: "Mobile Apps",
      text: "I'm recently start work on Mobile App Development and I'm learning React Native app development for cross platform app.",
      icon: <MdOutlineAppSettingsAlt size={33} />,
    },
    {
      title: "UI/UX Design",
      text: "I have of Experience about Ps Ai Figma at true level.",
      icon: <MdOutlineDesignServices size={33} />,
    },
    {
      title: "Web Design",
      text: "I have 3 years of experience about web design.I've Worked On Varied Projects Ranging From Simple Websites, Landing Pages To Complex Web Applications.",
      icon: <SiAdobeindesign size={33} />,
    },
  ],
};
