import { motion } from "framer-motion"
import type { NextPage } from "next"
import { AboutItems, HeadSection, Technologies } from "../components"

const About: NextPage = () => {
  return (
    <>
      <HeadSection title="Portfolio - About Me" page="About" />
      <main className="relative font-pop  min-h-screen flex items-center justify-center  w-full bg-body overflow-x-hidden py-16 ">
        <div className="max-w-4xl xl:max-w-[1000px] px-6 md:px-10 lg:px-0">
          <header
            className=" pt-16 lg:pt-28 flex items-center space-x-3"
            aria-label="heading"
          >
            <p
              className="text-3xl md:text-4xl text-white font-bold"
              id="heading"
            >
              About <span className="text-cyan">Me</span>
            </p>
            <span className=" bg-text h-[1px] w-40 md:w-40 lg:w-80"></span>
          </header>
          <section className="pt-8 lg:pt-20 pb-14">
            <AboutItems />
          </section>
          {/* technologies */}
          <section className="pt-7 md:pt-10 lg:pt-14 flex justify-center flex-col">
            {/* heading */}
            <motion.div
              className="heading text-center mb-4"
              aria-label="Heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
            >
              <h2
                className="text-2xl lg:text-4xl font-semibold capitalize text-white tracking-wide mb-4"
                id="heading"
              >
                technologies that i use
              </h2>
              <p className="text-lg text-text">
                Here are some technologies i am using or have used recently
              </p>
            </motion.div>
            {/* techs */}
            <Technologies />
          </section>
        </div>
      </main>
    </>
  )
}

export default About
