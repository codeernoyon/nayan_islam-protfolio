import { motion } from "framer-motion";
import { contactAnimation } from "../../../animation/contact";
function ContactInfo({ email, phone, location, country, text }) {
  const { left } = contactAnimation;
  return (
    <motion.div
      variants={left}
      className="flex flex-col w-full md:w-[48%] my-8"
    >
      <p className="w-5/6 text-gray-500">{text}</p>
      <div className="mt-10 text-gray-300">
        <address className="font-medium block text-2xl md:text-3xl leading-8">
          {location}
          <span className="block">{country}</span>
        </address>
        <a
          href={`tel: ${phone}`}
          className="mt-5 block font-medium text-2xl md:text-3xl"
        >
          {phone}
        </a>
        <a
          href={`mailto: ${email}`}
          className="mt-5 block hover:text-primary-color ease-in-out transition-[.5s]"
        >
          {email}
        </a>
      </div>
    </motion.div>
  );
}

export default ContactInfo;
