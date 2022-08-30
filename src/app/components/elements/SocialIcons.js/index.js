import React from "react";
import { SOCIAL_ICONS } from "../../../data";

function index({ className }) {
  return (
    <div
      className={`flex justify-center items-center gap-3 mb-10 ${className}`}
    >
      {SOCIAL_ICONS.map((icon, index) => (
        <div className="p-[6px] border-[2px] rounded-full border-gray-400 hover:text-primary-color transition-all duration-500 hover:border-teal-500 ease-in-out md:hidden">
          <a href={icon.href} key={index} target="_blank" rel="noreferrer">
            {icon.icon}
          </a>
        </div>
      ))}
    </div>
  );
}

export default index;
