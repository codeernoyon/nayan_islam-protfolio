import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import { HeroAnimation } from "../../../animation";
import { HERO } from "../../../data";
import { Button, HeroBottom, TypeWriter } from "../../elements";

function Hero() {
  const { name, title, subtitle, typeWriter, button, bgImage } = HERO;
  const { content, icons, experience } = HeroAnimation;

  return (
    <section className="relative h-screen flex overflow-x-hidden" name="Hero">
      {/* ==== Hero Background Image ==== */}
      <div className=" absolute w-screen top-0 right-0 0 h-screen bg-slate-900 z-10 backdrop-filter backdrop-blur-lg bg-opacity-10"></div>

      <img
        src={bgImage}
        alt="Hero Background"
        className="absolute w-screen h-screen top-0  right-0 object-cover bg-top	 z-1"
        loading="lazy"
      />
      {/* ==== Hero Content ==== */}
      <div className="container flex items-center relative z-20">
        <motion.div
          className="flex items-center justify-center flex-col w-[100%] sm:items-start sm:justify-start"
          initial={content.start}
          animate={content.animation}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1,
          }}
        >
          <div>
            <span className="text-gray-400 text-[30px]">{subtitle}</span>
            <span className="text-[30px]  font-medium uppercase">{name}</span>
          </div>

          {/* ==== Type Writer ==== */}
          <span className="title mt-0 text-[30px] font-light text-center w-full sm:w-[500px] sm:text-left mb-8">
            {title}
            <TypeWriter title={typeWriter} className="ml-2 text-[45px]" />
          </span>
          {/* ==== Resume Download ==== */}
          <Button href={button.url}>
            {button.text}
            <AiOutlineDownload className="ml-1 text-lg" />
          </Button>
        </motion.div>
      </div>
      {/* ==== Hero Bottom Counter and Social Links ==== */}
      <HeroBottom icons={icons} experience={experience} />
    </section>
  );
}

export default Hero;
