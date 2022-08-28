import { motion } from 'framer-motion';
// import { aboutAnimation } from "../../../animation";

function Service({ icon, title, text, serviceCard}) {
    //  const { serviceCard } = aboutAnimation;
    return (
        <motion.div
        className='mt-12 w-3/4 md:w-1/2 text-justify  lg:w-[40%]'>
            <motion.div
                className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:justify-start lg:items-start ">
                <div className="text-white">{icon}</div>
                <div className="text-center lg:text-left">
                    <h5 className="font-medium text-primary-color text-lg">{title}</h5>
                    <p className="text-gray-500 max-w-[300px] mt-2">
                        {text}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Service