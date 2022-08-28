import { motion } from "framer-motion";
import { MdCastForEducation, MdWorkOutline } from "react-icons/md";
import { resumeAnimation } from '../../../animation';
import { RESUME } from "../../../data";
import { ResumeCard, SectionTitle, SkillProgress } from "../../elements";
function Resume() {
  const { title, subtitle, typeWriter, education, experience, skills } = RESUME;
  const {contentAnimation} = resumeAnimation

  return (
    <motion.section 
    initial={"start"}
    whileInView={"end"}
    viewport={{amount: .3}}
    transition={{staggerChildren: .5}}
    name="Resume" className="element overflow-hidden">
      <motion.div
        variants={contentAnimation}
      className="container opacity-0">
        {/* ==== Section Title ==== */}
        <SectionTitle
          center
          title={title}
          subtitle={subtitle}
          typeWriter={typeWriter}
        />
        <div className="mt-10">
          <motion.div 
            
            className="flex flex-wrap justify-between gap-5">
            {/* ==== Education ==== */}
            <div className="md:w-[45%] Resume__Items">
              {education.map((item, index) => (
                <ResumeCard
                  key={index}
                  title={item.institution}
                  year={item.year}
                  subtitle={item.subject}
                  description={item.description}
                  Icon={MdCastForEducation}
                  education
                />
              ))}
            </div>
            {/* ==== Experience ==== */}
            <div className="md:w-[45%] mt-10 md:mt-0 Resume__Items">
              {experience.map((item, index) => (
                <ResumeCard
                  key={index}
                  title={item.company}
                  year={item.year}
                  subtitle={item.role}
                  description={item.description}
                  Icon={MdWorkOutline}
                  experience
                />
              ))}
            </div>
          </motion.div>
        </div>
        {/* ==== Skills ==== */}
        <div className="mt-14">
          <div className="flex flex-wrap justify-between">
            {skills.map((skill, index) => (
              <SkillProgress key={index} {...skill} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Resume;
