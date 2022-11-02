import Text from "../../Text/Text"
import { AboutIcon } from "../icons"
import HeroNav from "./HeroNav"
import HireMeButton from "./HireMeButton"
import ResumeButton from "./ResumeButton"
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <div className="flex flex-col w-full">
      {/* text */}
      <div className="relative w-full mx-auto">
        {/* name */}
        <div className=" font-bold text-cyan font-pop  w-full">
          <motion.p
            className="font-pop text-lg md:text-xl mb-4 md:mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.55 },
            }}
          >
            Hi there, 👋I am
          </motion.p>
          <motion.h1
            className="flex items-center space-x-5 pb-7 font-pop text-text text-3xl sm:text-4xl md:text-[5rem] md:leading-[1.3]"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.6 },
            }}
          >
            <span className=" w-fit">Tochukwu</span>
            <span className="relative text-cyan before:absolute before:-bottom-2 before:left-0 before:w-full before:h-1 md:before:h-2 md:before:-bottom-3 before:block before:bg-cyan before:rounded-full">
              John.
            </span>
          </motion.h1>
        </div>
        {/* brief about */}
        <div className="w-full mb-6 ">
          <motion.p
            className="text-text_Light text-3xl sm:text-4xl md:text-6xl font-semibold md:leading-[1.3]"
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.65 },
            }}
          >
            I build things for the web.
          </motion.p>
        </div>
        {/* brief about info */}
        <div className="max-w-[33.75rem]">
          <motion.p
            className="text-text_Light text-base md:text-xl md:leading-[1.3] "
            initial={{ y: 20, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, delay: 0.7 },
            }}
          >
            I am a <span className="text-cyan">software engineer</span>, a
            <span className="text-cyan"> fullStack Developer</span> and
            occasionally, i design exceptional user experiences. Currently
            {" I'm "}
            more focused on the frontend using the <Text text="latest" /> and
            most <Text text="efficient technologies " /> in making the world a
            better place at <span className="text-cyan bold">XeuxDev</span>.
          </motion.p>
        </div>
        {/* buttons */}
        <motion.div
          className="flex items-center space-x-5 md:space-x-7 mt-11 md:mt-14 w-full mb-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, delay: 0.75 },
          }}
        >
          <HireMeButton />
          <ResumeButton />
        </motion.div>
        {/* btn2 */}
        <motion.div
          className="flex items-center space-x-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.3, delay: 0.8 },
          }}
        >
          <HeroNav name="learn about me">
            <AboutIcon height="4" width="4" />
          </HeroNav>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection
