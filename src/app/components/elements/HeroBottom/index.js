import { motion } from "framer-motion";
import { COUNTERS, SOCIAL_ICONS } from "../../../data";

function HeroBottom({ icons, experience }) {
  return (
    <div className="absolute md:bottom-2 bottom-5 left-0 w-full z-20">
      <div className="container">
        <div className="flex justify-between md:flex-row flex-col gap-4 items-center">
          {/* ==== left side - Counters ==== */}
          <motion.div
            initial={experience.start}
            animate={experience.animation}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 1,
              duration: 0.5,
            }}
            className="flex gap-[80px]"
          >
            {COUNTERS.map((item, index) => (
              <div className="flex items-center gap-[20px]" key={index}>
                <div>
                  <h3 className="text-gray-50 font-medium text-[55px]">
                    {item.count}
                  </h3>
                </div>
                <div>
                  <p
                    className="text-gray-500 font-normal text-[16px] leading-6"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
          {/* ==== Right side - social icons ==== */}
          <motion.div
            initial={icons.start}
            animate={icons.animation}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.5,
            }}
            className="hidden md:absolute md:top-[-250px] md:right-[50px] md:flex gap-4 items-center text-white md:flex-col"
          >
            <div className="md:absolute md:bottom-[-60px] md:h-[2px] md:w-[80px] md: bg-primary-color md:rotate-[90deg] md:rounded"></div>
            {SOCIAL_ICONS.map((icon, index) => (
              <div className="p-[5px] border-[2px] rounded-[50%] border-gray-400 hover:text-primary-color transition-all duration-500 hover:border-teal-500 ease-in-out">
                <a
                  href={icon.href}
                  key={index}
                  target="_blank"
                  rel="noreferrer"
                >
                  {icon.icon}
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroBottom;
