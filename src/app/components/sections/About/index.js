import { motion } from "framer-motion";
import React from "react";
import { aboutAnimation } from "../../../animation";
import { ABOUT } from "../../../data";
import { SectionTitle, Service } from "../../elements";

function About() {
  const { title, description, name, image, exports, services } = ABOUT;
  const { content, imageAnimation,serviceCard } = aboutAnimation;


  return (
    <section name="About" className="element">
      <div className="container overflow-hidden">
        <motion.div 
          initial={"start"}
          whileInView={"end"}
          viewport={{once: false, amount: .3}}
          transition={{staggerChildren:.5}}
        className="flex gap-10">
          {/* ==== About Content ==== */}
          <motion.div
            variants={content}
           className="flex-1 opacity-0">
            {/* ==== Section Title ==== */}
            <SectionTitle
              title={title}
              subtitle={`Expert in`}
              typeWriter={exports}
              className="md:text-left text-center"
            />
            <p className="text-gray-500 max-w-full text-center md:text-left">
              {description}
            </p>
            {/* ==== Services ==== */}
            <motion.div 
            className="flex flex-col md:flex-row items-center flex-wrap justify-between">
              {services.map((service, index) => (
                <Service key={index} {...service} {...serviceCard}/>
              ))}
            </motion.div>
          </motion.div>
          {/* ==== About Image ==== */}
          <motion.div
            variants={imageAnimation}
           className="hidden relative top-10 md:flex justify-end items-center w-[35%] overflow-hidden">
            <img src={image} alt={name} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
