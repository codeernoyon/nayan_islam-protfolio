import { motion } from 'framer-motion';
import { contactAnimation } from '../../../animation';
import { CONTACT } from "../../../data";
import { ContactForm, ContactInfo, SectionTitle } from "../../elements";


function Contact() {
  const { title, subtitle, typeWriter, email } = CONTACT;
  const {contentAnimation} = contactAnimation

  return (
    <motion.section
    initial={"start"}
    whileInView={"end"}
    viewport={{amount: .3}}
    transition={{staggerChildren: .5}}
    name="Contact" className="element overflow-hidden">
      <motion.div 
        variants={contentAnimation}
      className="container opacity-0">
        {/* ==== Section Title ==== */}
        <SectionTitle
          title={title}
          subtitle={subtitle}
          typeWriter={typeWriter}
          className="!mb-0"
        />
        <div className="flex flex-wrap justify-between">
          {/* ==== Contact Info ==== */}
          <ContactInfo {...CONTACT} />
          {/* ==== Contact Form ==== */}
          <ContactForm contactEmail={email} />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Contact;
